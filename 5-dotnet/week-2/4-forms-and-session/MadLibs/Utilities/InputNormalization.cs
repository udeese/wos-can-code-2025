using System.Collections.Concurrent;
using System.Reflection;
using System.Text.RegularExpressions;

namespace MadLibs.Utilities;

[AttributeUsage(AttributeTargets.Property)]
public sealed class NormalizeIgnoreAttribute : Attribute { }

static partial class InputNormalization
{
    private static readonly Regex MultiSpace = MyRegex();
    private static readonly ConcurrentDictionary<Type, PropertyInfo[]> WritableStringPropsCache =
        new();

    /// <summary>
    /// Normalizes all writable string properties on any view model instance.
    /// - Trims leading/trailing whitespace
    /// - Collapses internal whitespace to a single space
    /// - Converts null/whitespace-only to empty string
    /// Properties marked with [NormalizeIgnore] are skipped.
    /// </summary>
    public static void Normalize<T>(T vm)
        where T : class
    {
        if (vm is null)
            return;
        var type = vm.GetType();
        var props = WritableStringPropsCache.GetOrAdd(
            type,
            static t =>
                t.GetProperties(BindingFlags.Instance | BindingFlags.Public)
                    .Where(p =>
                        p.CanRead
                        && p.CanWrite
                        && p.PropertyType == typeof(string)
                        && p.GetIndexParameters().Length == 0
                        && p.GetCustomAttribute<NormalizeIgnoreAttribute>() is null
                    )
                    .ToArray()
        );

        foreach (var p in props)
        {
            var current = (string?)p.GetValue(vm);
            var cleaned = Clean(current);
            if (!ReferenceEquals(current, cleaned))
            {
                p.SetValue(vm, cleaned);
            }
        }
    }

    private static string Clean(string? s)
    {
        if (string.IsNullOrWhiteSpace(s))
            return string.Empty;
        var trimmed = s.Trim();
        var collapsed = MultiSpace.Replace(trimmed, " ");
        return collapsed;
    }

    [GeneratedRegex(@"\s+", RegexOptions.Compiled)]
    private static partial Regex MyRegex();
}

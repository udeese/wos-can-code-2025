using System.Text.Json;

namespace MadLibs.Utilities;

public static class SessionObjectHelper
{
    /// <summary>
    /// Store an object into session as JSON.
    /// </summary>
    public static void SetObject<T>(this ISession session, string key, T value)
        where T : class
    {
        var json = JsonSerializer.Serialize(value);
        session.SetString(key, json);
    }

    /// <summary>
    /// Retrieve an object from session by key.
    /// Returns null if not present.
    /// </summary>
    public static T? GetObject<T>(this ISession session, string key)
        where T : class
    {
        var json = session.GetString(key);
        return json is null ? null : JsonSerializer.Deserialize<T>(json);
    }
}

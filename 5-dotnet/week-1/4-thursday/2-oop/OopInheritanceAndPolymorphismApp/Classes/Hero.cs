using OopInheritanceAndPolymorphismApp.Interfaces;

namespace OopInheritanceAndPolymorphismApp.Classes;

public class Hero : IAttackable
{
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int AttackPower { get; set; }
    public int Health { get; set; }

    public Hero(string name, string type, int attackPower, int health)
    {
        Name = name;
        Type = type;
        AttackPower = attackPower;
        Health = health;
    }

    public void DisplayStatus()
    {
        Console.WriteLine($"Hero: {Name}, Health: {Health}");
    }

    public void TakeDamage(int damageAmount)
    {
        Health -= damageAmount;
        if (Health < 0)
            Health = 0;
        Console.WriteLine($"{Name} took {damageAmount} damage. Remaining Health: {Health}");
    }
}

using OopInheritanceAndPolymorphismApp.Interfaces;

namespace OopInheritanceAndPolymorphismApp.Classes;

// Monster.cs (New Class)
public class Monster : IAttackable // Monster implements IAttackable
{
    public string Name { get; set; }
    public int Health { get; set; } // Implements IAttackable.Health
    public int AttackPower { get; set; }

    public Monster(string name, int health, int attackPower)
    {
        Name = name;
        Health = health;
        AttackPower = attackPower;
    }

    public void TakeDamage(int damageAmount) // Implements IAttackable.TakeDamage
    {
        Health -= damageAmount;
        if (Health < 0)
            Health = 0;
        Console.WriteLine($"{Name} took {damageAmount} damage. Remaining Health: {Health}");
    }

    public void DisplayStatus() // Implements IAttackable.DisplayStatus
    {
        Console.WriteLine($"Monster: {Name}, Health: {Health}");
    }

    public void Roar() // Monster-specific method
    {
        Console.WriteLine($"{Name} roars fiercely!");
    }
}

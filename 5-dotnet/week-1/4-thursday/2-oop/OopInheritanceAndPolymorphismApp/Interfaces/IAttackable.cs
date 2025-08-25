namespace OopInheritanceAndPolymorphismApp.Interfaces;

interface IAttackable
{
    int Health { get; set; }
    void TakeDamage(int damageAmount);
    void DisplayStatus();
}

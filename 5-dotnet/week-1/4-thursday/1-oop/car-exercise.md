# OOP: Access Modifiers & Static Members — **Car** Exercise

**Goal:** Practice using `public` and `private`members, and contrast **instance** vs **static** members in C#.

## Learning Objectives
- Use access modifiers to encapsulate state and behavior
- Explain the difference between instance members and static members
- Read compiler errors to understand visibility rules

---

## 0) Project Setup
1. Create a new console app:
   ```bash
   dotnet new console -n CarExercise
   cd CarExercise
   ```
2. Add a `Car.cs` file.

> **Tip:** Keep the terminal open so you can run `dotnet run` often.

---

## 1) Starter Code — Car.cs (paste this in and complete the TODOs)
```csharp
public class Car
{
    // ===== Static members (shared by ALL cars) =====
    // TODO-1: Make a public static int field named _numberOfCars, initialized to 0.

    // ===== Instance state (unique per car) =====
    // TODO-2: Create a **private** backing field for current speed (e.g., `_currentSpeed`).
    // TODO-3: Create a **public** auto-property for Make, and one for Model.
    // TODO-4: Create a **public** read-only property `CurrentSpeed` with a **private set**.

    // ===== Constructor =====
    // TODO-5: Public constructor that accepts make and model, initializes speed to 0,
    //         sets Make/Model, and increments NumberOfCars.

    // ===== Public instance methods =====
    // TODO-6: `public void Accelerate(int amount)`
    //         - increase CurrentSpeed by `amount` (guard against negatives)
    //         - call the private helper `UpdateSpeedometer()`
    // TODO-7: `public void Brake(int amount)` similar to Accelerate but decreases to a minimum of 0.

    // ===== Private helper (not visible outside) =====
    // TODO-8: `private void UpdateSpeedometer()` — temporarily just `Console.WriteLine` the speed

    // ===== Static method (class-level behavior) =====
    // TODO-10: `public static void ShowTrafficReport()` — print the total _numberOfCars.
}
```

**Hints**
- Prefer properties over exposing fields directly.
- For read-only with internal control, use `public T Name { get; private set; }`.

---

## 3) Demo Script — Program.cs
Paste and run this **after** you finish the TODOs. Try the commented lines to trigger compiler errors.

```csharp
// Create two cars (NumberOfCars should increment)
var c1 = new Car("Toyota", "Camry");
var c2 = new Car("Honda", "Civic");

// Static: belongs to the class, not the instance
Car.ShowTrafficReport(); // expect: Total cars on the road: 2
// Console.WriteLine(c1._numberOfCars); // ❌ should not compile (access static via type)

// Instance behavior
c1.Accelerate(15);
c1.Brake(5);

// Private: not accessible outside the class
// c1.UpdateSpeedometer(); // ❌ should not compile (private)
```

---

## 4) Check Yourself
- Can you explain why `UpdateSpeedometer()` is **private**?
- What happens if you try to access `NumberOfCars` via an instance variable instead of `Car.NumberOfCars`?
- If you create 5 cars, what does `ShowTrafficReport()` display?

---

## 5) Stretch Goals
1. Convert `NumberOfCars` to a **property** with a `private set` and increment in the constructor.
2. Add range checks to `Accelerate` and `Brake` (e.g., clamp `amount` to 0–100).
3. Add a **static** method `CreateFleet(int count, string make, string model)` that returns a `List<Car>` and increments the total correctly.
4. Override `ToString()` to print a friendly name like `"Toyota Camry @ 25 km/h"`.

---

## 6) Expected Output (example)
```
Total cars on the road: 2
[ Toyota Camry ] Speed: 15 km/h
[ Toyota Camry ] Speed: 10 km/h
Total cars on the road: 3
```
*(Your exact formatting may differ; focus on modifier behavior.)*

---

## 7) Common Compiler Errors to Discuss
- **CS0122**: `'<member>' is inaccessible due to its protection level` (private/protected)
- **CS0176**: Member cannot be accessed with an instance reference; qualify it with a type name (static)
- **CS0272**: The property or indexer cannot be used in this context because the set accessor is inaccessible (private set)

---

## 8) Debrief Prompts
- Where did encapsulation help us prevent bad states?
- Which members must be instance vs which should be static?
- How would access rules change if we changed `protected` to `internal` or `protected internal`?

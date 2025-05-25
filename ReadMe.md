**four main theoretical pillars of Object-Oriented Programming (OOP)** in **JavaScript**:

---

### 1. **Encapsulation**

* Encapsulation is the concept of **bundling data and the methods that operate on that data** into a single unit (usually an object).
* It **hides the internal state** of an object and only exposes a controlled interface to the outside world.
* This protects the data from unintended or harmful changes and improves modularity.

---

### 2. **Abstraction**

* Abstraction means **hiding complex implementation details** and showing only the necessary features of an object.
* It allows developers to work with **simplified interfaces** and reduces complexity.
* Abstraction helps in focusing on what an object does rather than how it does it.

---

### 3. **Inheritance**

* Inheritance is the mechanism by which **one class (child/subclass) can inherit properties and methods from another class (parent/superclass)**.
* It promotes **code reuse** and establishes a **hierarchical relationship** between classes.
* Child classes can also **override** or **extend** the functionality of parent classes.

---

### 4. **Polymorphism**

* Polymorphism allows **objects of different classes to be treated as objects of a common superclass**.
* It enables a single interface to represent different underlying forms (data types).
* This allows for **method overriding** and the ability to **interchangeably use different objects** that share the same method name or interface.

---

These pillars form the foundation of OOP and help in designing clean, scalable, and maintainable software systems.

In **Object-Oriented Programming (OOP)** in **JavaScript**, the `get` and `set` methods are **special methods** used to define accessors for an object's properties. These are often used to control how values are read from or written to an object, typically providing a layer of abstraction, validation, or computed logic.

---

### 🔹 `get` Method

The `get` method is used to **define a getter** for a property. It allows you to retrieve a property value like you're accessing a regular property, but it actually runs a function.

**Syntax:**

```javascript
get propertyName() {
  // return a value
}
```

---

### 🔹 `set` Method

The `set` method is used to **define a setter** for a property. It allows you to set a property value like it's a normal assignment, but it actually runs a function.

**Syntax:**

```javascript
set propertyName(value) {
  // do something with the value
}
```

---

### ✅ Example

```javascript
class Person {
  constructor(name) {
    this._name = name; // use an internal property
  }

  get name() {
    console.log("Getter called");
    return this._name;
  }

  set name(newName) {
    console.log("Setter called");
    if (newName.length >= 2) {
      this._name = newName;
    } else {
      console.log("Name too short");
    }
  }
}

const p = new Person("Alice");
console.log(p.name);    // "Getter called" -> "Alice"

p.name = "Bo";          // "Setter called" (and accepted)
console.log(p.name);    // "Bo"

p.name = "A";           // "Setter called" -> "Name too short"
console.log(p.name);    // Still "Bo"
```

---

### 🧠 Why Use `get` and `set`?

* Encapsulation: hide internal logic
* Validation: ensure only valid values are set
* Computed properties: dynamically calculate values
* Intercept and control property access

---


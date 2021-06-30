# Liskov substitution principle

"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that
program." See also [design by contract](https://en.wikipedia.org/wiki/Design_by_contract).

### Polymorphism

When two objects have the same interface, they are functionally interchangeable = polymorphism.

## Your mission

- refactor the Discount class in 3 different classes with the **same interface** :
    * VariableDiscount
    * FixedDiscount 
    * NoDiscount
# Open–closed principle
Classes should be open for extension, but closed for modification. In more simple words you can always add new code to an object, but you should never change the design of old code.

It is much better to work with **dependencies**, meaning passing an object to another object as a parameter. 

## mission


- [x] add another animal, and make sure it makes a sound. 


- [x] Create a `makeSound` function to each Animal class and remove the giant switch from the Zoo class.
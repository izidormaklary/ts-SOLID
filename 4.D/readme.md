# Dependency inversion principle

At its heart, the DIP is about structure. The manner in which you structure your program entities, and the way in which they interact with one another, has a direct impact on your ability to conform to the rest of the SOLID principles (the benefits of which we have discussed previously.) If your dependencies are mismanaged, then the likelihood of your code being flexible, maintainable, and reusable is drastically diminished.

## Story time

- The Restaurant class depends on usage of its Oven object, any other cooking instrument will cause problems : 
    * *cook method is not really a restaurant specific method but Oven/Stove specific*
    
- **the Restaurant can't be changed, each time there is a change in the cooking instrument**

## to-do:

- [x] adding interfaces, so the ovens/stoves become interchargable
- [x] cooking instrument is not necessary in each restaurant
- [x] moving the cook function from the restaurant
- [ ] double-checking for better solutions


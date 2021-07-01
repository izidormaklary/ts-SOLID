# Single responsibility principle

## Task

- change the "god object" in old.ts, to smaller objects, with single responsibility.

### Progress

#### 1st go

- [already have all the objects](https://github.com/izidormaklary/ts-SOLID/commit/234426e196ae01eb5c25f1bccdb0c09b5bffcd05)  ( maybe one too many)
- fully functional
- question is: is the handling of fuel good this way:
    * the value is still controlled with a car object function
  
- changed car class and the new script
- [at this point the assignment is done without extras](https://github.com/izidormaklary/ts-SOLID/commit/b2f4661bd3c08e8f69bdece6c6324973bd637e39)

#### 2nd go

- preserved most of the classes ( except the engine and the car)
  * drive function (and fuel consumption), is not the role of car anymore, engine takes care of that.
  
- also the "parts" of car are not initialized separately, but in the car constructor 
  * so the parameters of the engine and fuel, are passed through the car constructor, which gives us the possibility to specify the different features of these objects, and do that in one go.

````typescript
//instead of:

    let car = new Car();
    let engine = new Engine(/*FUEL_MILEAGE*/);
    let tank = new Tank(/*MAXIMUM_FUEL_CAPACITY*/);
    let musicPlayer = new MusicPlayer();

//  Car constructor makes them

    constructor(/*FUEL_MILEAGE: number, MAXIMUM_FUEL_CAPACITY: number*/){
      this._engine = new Engine(FUEL_MILEAGE);
      this._tank = new Tank(MAXIMUM_FUEL_CAPACITY);
      this._musicPlayer = new MusicPlayer(0, 50);
    }
    
    // ...
    
    let car = new Car(/*FUEL_MILEAGE: number, MAXIMUM_FUEL_CAPACITY: number*/);

````
- assignment (if correct) done!

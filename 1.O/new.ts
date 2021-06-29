class Dog {
    private _name;
    private _sound: string ='Woef' ;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }
    public makeSound() {
        return this._sound;
    }
}

class Cat {
    private _name;
    private _sound: string = 'Miauw';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }
    public makeSound() {
        return this._sound;
    }
}

class Parrot {
    private _name;
    private _sound: string = 'I am a pirate';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }
    public makeSound() {
        return this._sound;
    }
}

class Mouse {
    private _name;
    private _sound: string = 'squeak squeak';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'mouse';
    }

    public makeSound() {
        return this._sound;
    }
}

class Zoo {
    private _animals: Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Mouse);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});
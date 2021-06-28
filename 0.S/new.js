"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicPlayer_1 = require("./MusicPlayer");
var Fuel_1 = require("./Fuel");
var Engine_1 = require("./Engine");
var Car_1 = require("./Car");
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var musicPlayer = new MusicPlayer_1.MusicPlayer(0, 50);
var car = new Car_1.Car(100);
var fuel = new Fuel_1.Fuel(0);
var engine = new Engine_1.Engine(10);
musicToggleElement.addEventListener('click', function () {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
console.log(engine.status);
engineToggleElement.addEventListener('click', function () {
    if (engine.status) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fuel.addFuel(Number(addFuelInput.value), car.MAXIMUM_FUEL_CAPACITY);
    fuelLevelElement.innerText = fuel.level.toString();
});
setInterval(function () {
    milesElement.innerText = (car.miles);
    car.drive(fuel, engine);
    fuelLevelElement.innerText = fuel.level.toString();
    if (musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);

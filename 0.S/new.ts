import {MusicPlayer} from "./classes/MusicPlayer";
import {Engine} from "./classes/Engine";
import {Tank} from "./classes/Tank";
import {Car} from "./classes/Car";


const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const milesElement = <HTMLElement>document.querySelector('#miles-value');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');

const musicOn = "Turn music on";
const musicOff = "Turn music off";
const engineOn = "Turn engine on";
const engineOff = "Turn engine off";

let car = new Car(10,100);

musicToggleElement.addEventListener('click', () => {
    if(car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = musicOff;
        return;
    }
    musicToggleElement.innerText = musicOn;
    car.musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? musicOff : musicOn;
});

engineToggleElement.addEventListener('click', () => {
    if(car.engine.status) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = engineOn;
        return;
    }
    engineToggleElement.innerText = engineOff;
    car.engine.turnEngineOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    car.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.tank.fuel.toString();
});

 setInterval(() => {
     milesElement.innerText = <string><unknown>(car.miles);
     car.engine.drive( car, car.tank);
     fuelLevelElement.innerText = car.tank.fuel.toString();
     if(car.musicPlayer.musicLevel === 0) {
         audioElement.pause();
     } else {
         audioElement.play();
     }

 }, 1000);

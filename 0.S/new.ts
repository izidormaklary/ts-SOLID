import {MusicPlayer} from "./MusicPlayer";
import {Engine} from "./Engine";
import {Car} from "./Car";

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

let musicPlayer = new MusicPlayer(0,50)
let car = new Car(100);
let engine = new Engine(10);

musicToggleElement.addEventListener('click', () => {
    if(musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = musicOff;
        return;
    }
    musicToggleElement.innerText = musicOn;
    musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? musicOff : musicOn;
});

engineToggleElement.addEventListener('click', () => {
    if(engine.status) {
        engine.turnEngineOff();
        engineToggleElement.innerText = engineOn;
        return;
    }
    engineToggleElement.innerText = engineOff;
    engine.turnEngineOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    car.addFuel(Number(addFuelInput.value), car.MAXIMUM_FUEL_CAPACITY );
    fuelLevelElement.innerText = car.fuel.toString();
});

 setInterval(() => {
     milesElement.innerText = <string><unknown>(car.miles);
     car.drive( engine)
     fuelLevelElement.innerText = car.fuel.toString();
     if(musicPlayer.musicLevel === 0) {
         audioElement.pause();
     } else {
         audioElement.play();
     }

 }, 1000);

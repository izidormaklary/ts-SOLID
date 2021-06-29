import {MusicPlayer} from "./MusicPlayer";
import {Fuel} from "./Fuel";
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

let musicPlayer = new MusicPlayer(0,50)
let car = new Car(100);
let fuel = new Fuel(0);
let engine = new Engine(10);

musicToggleElement.addEventListener('click', () => {
    if(musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
console.log(engine.status)
engineToggleElement.addEventListener('click', () => {
    if(engine.status) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fuel.addFuel(Number(addFuelInput.value), car.MAXIMUM_FUEL_CAPACITY );
    fuelLevelElement.innerText = fuel.level.toString();
});

 setInterval(() => {
     milesElement.innerText = <string><unknown>(car.miles);
     car.drive(fuel, engine)
     fuelLevelElement.innerText = fuel.level.toString();
     if(musicPlayer.musicLevel === 0) {
         audioElement.pause();
     } else {
         audioElement.play();
     }

 }, 1000);

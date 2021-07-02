export interface OvenInterface { // interface (name)
    turnOn():void;
    make(item:string):void;
    turnOff():void;
    cook(item:string):void;
}
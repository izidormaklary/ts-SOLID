export interface Oven {
    _isOn:boolean;
    turnOn():void;
    make(item:string):void;
    turnOff():void;
    cook(item:string):void;
}
import {Circle} from "./Circle";
export class Cylider extends Circle {
    height : number;

    constructor(radius:number,color:string,height:number) {
        super(radius,color);
        this.height=height;

    }
    getVolume():number {
        return Math.PI*(this.radius*this.radius)*this.height
    }
}
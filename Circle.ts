export class Circle {
    protected radius: number;
    protected color: string;

    constructor(radius:number,color:string) {
        this.radius=radius;
        this.color=color;
    }
    getRadius():number {
        return this.radius;
    }
    setRadius(radius:number):void {
        this.radius = radius;
    }
    getColor():string {
        return this.color;
    }
    setColor(color:string):void {
        this.color = color;
    }

    getArea():number {
        return Math.PI*(this.radius*this.radius);
    }

}

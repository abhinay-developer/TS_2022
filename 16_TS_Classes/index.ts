class Car{
    brandName:string;
    color:string;
    height:number;
    width:number;
    price:number;
    cc:number;
    capacity:number;
    constructor(brandName:string,color:string,height:number,width:number,price:number,cc:number,capacity:number){
        this.brandName=brandName;
        this.color=color;
        this.height=height;
        this.width=width;
        this.price=price;
        this.cc=cc;
        this.capacity=capacity;
    }
}

let car=new Car("Renault","SILVER",10,50,400000,500,6);
let car2=new Car("TOYO","White",56,90,800000,900,8);
console.log(car);
console.log(car2);
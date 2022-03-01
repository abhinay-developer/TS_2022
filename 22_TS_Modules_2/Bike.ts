class Bike{
    brand:string;
    cc:number;

    constructor(brand:string,cc:number){
        this.brand=brand;
        this.cc=cc;

    }

    displayBikeInfo(){
        console.log(`Brand :${this.brand} CC::${this.cc}`);
    }
}

export default Bike;
interface Arithmetic{
     add(num1:number,num2:number);
     mul(num1:number,num2:number);
}

class AdditionAndmultiplication implements Arithmetic{
     result:number;
    add(num1: number, num2: number) {
      this.result=num1+num2;
      console.log(`Addition : ${this.result}`)
    }
    mul(num1: number, num2: number) {
        this.result=num1*num2;
        console.log(`Multiplication : ${this.result}`)
    }
}

let addAndMul=new AdditionAndmultiplication();
addAndMul.add(10,20);
addAndMul.mul(9,8);
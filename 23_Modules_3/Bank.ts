class Bank{

    bankName:string;
    branch:string;
    code:number;
    address:string;

    constructor(bankName:string,branch:string,code:number,address:string){
      this.bankName=bankName;
      this.branch=branch;
      this.code=code;
      this.address=address;
    }

    displayBankDetails(){
  console.log(`\nBank Name:$${this.bankName} \nBranch :${this.branch} \nCode:${this.code} \nAddress:${this.address}`)       
    }

}

export default Bank;
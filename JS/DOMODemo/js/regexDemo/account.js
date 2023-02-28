class Account{
    constructor(aType,aBalance,aAdress,aContact,aHolder){

    this.accountType=aType;
    this.balance=aBalance;
    this.address=aAdress;
    this.contactNumber=aContact;
    this.accountHolderName=aHolder;

    console.log("Account constructor called")
    }
}
let account=new Account("prime","10000","AbuDhabi","0582222995","Ahmed");
console.log(account);
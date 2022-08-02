function calculateTax(income: number): number{
    let taxValue : number = 0;
    if(income < 50_000){
        taxValue = income * 1.2;
    }else{
        taxValue = income* 1.3;
    }
    return taxValue;
}

const calculateTaxWithYear = (income: number, year?: number):number =>{
    if(income < 50_000){
        return income * 1.2;
    }else{
        return income* 1.3;
    }
}
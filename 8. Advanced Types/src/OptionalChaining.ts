type Customer = {
    birthday: Date
};

const getCustomer = (id: number): Customer | null => {
    return (id === 0) ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday);
import React, { useState } from "react";

const Input = ():JSX.Element =>{
    const [value, setValue] = useState<string>("");
    
    const removeDollarSign = (value:string):string =>{
        return(value[0] === '$') ? value.slice(1) : value;
    }

    const getReturnValue = (value:string):string =>{
        return(value === '') ? '': `$${value}`;
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault();
        const inputtedValue = e.currentTarget.value;
        const noDollarSign = removeDollarSign(inputtedValue);
        if(isNaN(+noDollarSign)) return;
        setValue(getReturnValue(noDollarSign));
    }

    return(
        <input value={value} aria-label="cost-input" onChange={handleChange}/>
    )
}

export default Input;
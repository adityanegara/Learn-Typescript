import { useState } from "react"

const LearnQueries = () =>{
    const [count, setCount] = useState<number>(0);
    
    const renderCount = (count:number):string =>{
        switch(count)
        {  
            case 0:
                return 'The button hasnt been clicked.'
            case 1:
                return 'The button is clicked once.'
            case 2: 
                return 'The button is clicked twice.'
            default:
                return 'The button is clicked many times.'
        }
    }

    return(
        <div>
            <h1 role="heading">Learning Queries</h1>
            <h2 role="second-header">Im Aditya Negara</h2>
            <h2 role="second-header">Im Aura Puteri Negeri</h2>
            <button role="count-button">Count Button</button>
            <p role="count-display">{renderCount(count)}</p>
        </div>
    )
}

export default LearnQueries
import { useState } from "react"

const LearnQueries = () =>{
    const [count, setCount] = useState<number>(0);
    const [isElementShown, setIsElementShown] = useState<boolean>(false);
    
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

    const increaseCount = ():void =>{
        setCount((count) => count + 1)
    }

    const renderElement = (isElementShown:boolean):JSX.Element =>{
        return (isElementShown) ?  <p role='hiding-text'>Im out of my hiding</p> : <></>;
    }

    return(
        <div>
            <h1 role="heading">Learning Queries</h1>
            <h2 role="second-header">Im Aditya Negara</h2>
            <h2 role="second-header">Im Aura Puteri Negeri</h2>
            <button onClick={increaseCount} role="count-button">Count Button</button>
            <button onClick={()=>{setTimeout(()=>{setIsElementShown((element) => !element)}, 500)    }} role="wait-count-button">Show Element</button>
            <p role="count-display">{renderCount(count)}</p>
            <p role="count-display-two">{renderCount(count)}</p>
            <p role="count-display-two">{renderCount(count)}</p>
            {renderElement(isElementShown)}
        </div>
    )
}

export default LearnQueries
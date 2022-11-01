import { useState } from "react"

const Counter = ():JSX.Element =>{
    const [count, setCount] = useState<number>(0);
    return(
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Add one</button>
            <p role="count-display">Count is {count}</p>
        </div>
    )
}

export default Counter;
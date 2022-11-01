import { useState, useEffect } from "react";
import User from "../../models/IUser";

const APIComponent = ():JSX.Element =>{
    const [data, setData] = useState<User>();

    useEffect(()=>{
        let isMounted = true;
        fetch("/api")
        .then((response) => response.json())
        .then((data) =>{
            if(isMounted){
                setData(data);
            }
        })
        return () =>{
            isMounted = false;
        }
    }, [])

    return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
}

export default APIComponent;
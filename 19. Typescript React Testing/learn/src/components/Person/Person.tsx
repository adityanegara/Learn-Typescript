interface PersonProps {
    id: number;
    firstName: string;
    lastName: string;
}

const Person = ({id, firstName, lastName}: PersonProps):JSX.Element =>{
    return(
        <div>
            <p role='first-name'>First name:  ${firstName}</p>
            <p role='last-name'>Last name: ${lastName}</p>
        </div>
    )
}

export default Person;
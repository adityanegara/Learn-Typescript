import Person from "./Person";
import { render, screen } from "@testing-library/react";

describe('Person Component', () =>{
    beforeEach(()=>{
        render(<Person firstName="Aditya" lastName="Negara" id={1}/>)
    })
    it('Should render first name', ()=>{
        const firstNameElement = screen.getByRole('first-name');
        expect(firstNameElement).toHaveTextContent('Aditya');
    })
    it('Should render last name', ()=>{
        const lastNameElement = screen.getByRole('last-name');
        expect(lastNameElement).toHaveTextContent('Negara');
    })
})
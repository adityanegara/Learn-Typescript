import LearnQueries from "./LearnQueries";
import { render, screen, fireEvent} from "@testing-library/react";

describe('getBy queries method.', () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    xit('Should throw an error if there is no matching element.', () =>{
        const notAvailableDOM = screen.getByRole('not-available');
        expect(notAvailableDOM).toThrowError();
    }),
    it('Should return one element if there is one.', () =>{
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    }),
    xit('Should throw an error if there is more than one element.', () =>{
        const secondHeading = screen.getByRole('second-header');
        expect(secondHeading).toHaveLength(2);
    })
})

describe('getAllBy query method.', () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    xit('Should throw an error if there is no elements', () =>{
        const notAvailableDOM = screen.getByRole('not-available');
        expect(notAvailableDOM).toThrowError();
    })
    it('Should return an array of elements', () =>{
        const secondHeading = screen.getAllByRole('second-header');
        expect(secondHeading).toHaveLength(2);
    })
})

describe('queryBy query method.', () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    it('Should return null if there is no element', () =>{
        const notAvailableDOM = screen.queryByRole('not-available');
        expect(notAvailableDOM).toBe(null);
    })
    it('Should return one element if there is a match', () =>{
        const heading = screen.queryByRole('heading');
        expect(heading).toBeInTheDocument();
    })
    xit('Should throw an error if there is more than one matching element.', () =>{
        const secondHeader = screen.queryByRole('second-header');
        expect(secondHeader).toThrowError();
    })
})

describe('findBy', () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    fit('Should return a promise if matches query is found', async () =>{
        const countButton = screen.getByRole('count-button');
        fireEvent.click(countButton)
        const countDisplay = screen.getByRole('count-display');
        expect(countDisplay).toHaveTextContent('The button is clicked once');
    })
})
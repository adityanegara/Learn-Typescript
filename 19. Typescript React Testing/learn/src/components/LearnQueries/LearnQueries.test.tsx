import LearnQueries from "./LearnQueries";
import { render, screen, fireEvent} from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";

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

describe('findBy query method.', () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    fit('Should return an array of element', () =>{
        const secondHeader = screen.queryAllByRole("second-header");
        expect(secondHeader).toHaveLength(2);
    })
})

describe('findBy query method.', () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    it('Should return a promise if matches query is found', async () =>{
        const countButton = screen.getByRole('count-button');
        fireEvent.click(countButton)
        const countDisplay = await screen.findByRole('count-display');
        expect(countDisplay).toHaveTextContent('The button is clicked once');
    })
    it('Should return an error if there is no element after 1 second', async () =>{
        const waitCountButton = screen.getByRole('wait-count-button');
        fireEvent.click(waitCountButton)
        const hidingText = await screen.findByRole('hiding-text');
        expect(hidingText).toBeInTheDocument();
    })
    it('Will reject a promise if found more than one element', async()=>{
        const countButton = screen.getByRole('count-button');
        fireEvent.click(countButton)
        const countDisplay = await screen.findByRole('count-display-two');
        expect(countDisplay).toHaveLength(2);
    })
})

describe("findAllBy query method.", () =>{
    beforeEach(()=>{
        render(<LearnQueries/>);
    })
    it('Should retur a resolve promise if found multiple element', async () =>{
        const countButton = screen.getByRole('count-button');
        fireEvent.click(countButton)
        const countDisplay = await screen.findAllByRole('count-display-two');
        expect(countDisplay).toHaveLength(2);
    })
})
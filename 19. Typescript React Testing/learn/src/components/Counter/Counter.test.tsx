import Counter from "./Counter";
import { render, screen, fireEvent} from "@testing-library/react";
import exp from "constants";

describe('Counter', () =>{
    it('should increment the counter when counter button is clicked.', () =>{
        render(<Counter/>);
        const countDisplay = screen.getByRole("count-display");
        const counterButton = screen.getByText('Add one');
        fireEvent.click(counterButton);
        expect(countDisplay).toHaveTextContent('Count is 1');
    })
})
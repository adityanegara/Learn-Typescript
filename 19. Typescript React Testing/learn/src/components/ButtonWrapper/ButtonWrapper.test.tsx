import { ButtonWrapper } from "./ButtonWrapper";
import { render, screen, fireEvent} from "@testing-library/react";

describe("Button Wrapper", () =>{
    it("should be able to handle onm click", () =>{
        const onClick = jest.fn();
        render(<ButtonWrapper onClick={onClick} title="Add Item"/>);
        const buttonElement = screen.getByText("Add Item");
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})
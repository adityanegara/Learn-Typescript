import Input from './Input';
import { render, fireEvent, screen} from '@testing-library/react';

describe('Input', () =>{
    beforeEach(()=>{
        render(<Input/>);
    })
    it("Should keep a dollar sign ($) in front of the input", () =>{
        const input = screen.getByLabelText('cost-input') as HTMLInputElement;
        fireEvent.change(input, {target: {value: '23'}});
        expect(input.value).toBe('$23');
    })
    it("Should allow a $ to be in the input when value is changed", () =>{
        const input = screen.getByLabelText('cost-input') as HTMLInputElement;
        fireEvent.change(input, {target: {value: '$23.0'}});
        expect(input.value).toBe('$23.0');
    })
    it("Should not allow letters to be inputted", () =>{
        const input = screen.getByLabelText('cost-input') as HTMLInputElement;
        expect(input.value).toBe('');
        fireEvent.change(input, {target: {value: 'Good Day'}})
        expect(input.value).toBe('')
    })
    it('Should allow the $ to be deleted', () =>{
        const input = screen.getByLabelText('cost-input') as HTMLInputElement;
        fireEvent.change(input, {target: {value: '23'}})
        expect(input.value).toBe('$23') // need to make a change so React registers "" as a change
        fireEvent.change(input, {target: {value: ''}})
        expect(input.value).toBe('')
    })
})
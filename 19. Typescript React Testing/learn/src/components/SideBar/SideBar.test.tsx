import LINKS from "./SideBarConstant";
import SideBar from "./SideBar";
import { render, screen } from "@testing-library/react";

describe('Sidebar', () =>{
    it('should be able to render warning text if there is no links', () =>{
        render(<SideBar links={[]}/>);
        const warningText = screen.getByRole('warning-text');
        expect(warningText).toHaveTextContent('Empty Links...');
    }),

    it('should be able to render all of the links',  ()=>{
        render(<SideBar links={LINKS}/>);
        const links = screen.getAllByRole('navigation');
        expect(links).toHaveLength(LINKS.length);
    })

    it('should render the first link URL correctly', () =>{
        render(<SideBar links={LINKS}/>);
        const firstLink = screen.getAllByRole('navigation')[0];
        expect(firstLink).toHaveAttribute('href', LINKS[0].href);
    })
})
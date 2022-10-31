import LINKS from "./SideBarConstant";

interface Link {
    id: number;
    name: string;
    href: string;
}

interface SideBarProps {
    links: Link[]
}

const SideBar = ({links}: SideBarProps):JSX.Element =>{
    const renderSideBar = (links: Link[]):JSX.Element[] =>{
        return links.map((link: Link) =>{
            return <div  key={link.id}>
                       <a role="navigation" href={link.href}>{link.name}</a>
                    </div>
            })
    }

    const renderEmptyText = (links: Link[]) =>{
        return (links.length > 0) ?
            renderSideBar(LINKS) :
            <p role="warning-text">Empty Links...</p>
    }

    return(
        <div role="navigation-container">
            {renderEmptyText(links)}
        </div>
    )
} 

export default SideBar;
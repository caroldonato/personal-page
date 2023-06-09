import * as React from 'react';
import { StyledNav, StyledNavMobile, NavLink, linkStyle, NavLinkMobile, NavMobileWrapper } from './nav.style';
import { Link } from 'gatsby';
import { FaBars } from "react-icons/fa";

const Nav: React.FC = () => {
    const [isShown, setIsShown] = React.useState(false); // For mobile nav only

    function toggleNav() {
        setIsShown(!isShown);
    }

    return (
        <>
            <StyledNav>
                <NavLink><Link to="/" style={linkStyle}>Home</Link></NavLink>
                <NavLink><Link to="/#about" style={linkStyle}>About</Link></NavLink>
                <NavLink><Link to="/#experience" style={linkStyle}>Experience</Link></NavLink>
                <NavLink><Link to="/#skills" style={linkStyle}>Skills</Link></NavLink>
                {/* <NavLink><Link to="/projects" style={linkStyle}>Projects</Link></NavLink> */}
                <NavLink><Link to="/#contact" style={linkStyle}>Contact</Link></NavLink>
            </StyledNav>
            <StyledNavMobile className={ isShown ? "shownNav" : "hiddenNav" }>
                <NavLinkMobile>
                    <button onClick={toggleNav} className={isShown ? "mb-5" : ""}>
                        <FaBars />
                    </button>
                </NavLinkMobile>
                <NavMobileWrapper className={ isShown ? "shownNav" : "hiddenNav" }>
                    <div className="flex flex-row w-full justify-between">
                        <NavLinkMobile><Link to="/" style={linkStyle}>Home</Link></NavLinkMobile>
                        <NavLinkMobile><Link to="/#about" style={linkStyle}>About</Link></NavLinkMobile>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <NavLinkMobile><Link to="/#experience" style={linkStyle}>Experience</Link></NavLinkMobile>
                        <NavLinkMobile><Link to="/#skills" style={linkStyle}>Skills</Link></NavLinkMobile>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        {/* <NavLinkMobile><Link to="/projects" style={linkStyle}>Projects</Link></NavLinkMobile> */}
                        <NavLinkMobile><Link to="/#contact" style={linkStyle}>Contact</Link></NavLinkMobile>
                    </div>
                </NavMobileWrapper>
            </StyledNavMobile>
        </>
    );
};

export default Nav;
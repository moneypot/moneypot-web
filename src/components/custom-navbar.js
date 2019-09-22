import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavLink,
    Nav,
    NavItem
} from "reactstrap";
import useWindowSize from '../components/window-size'


const CustomNavbar = (props) => {
    let {isHomepage} = props
    let windowSize = useWindowSize(); 
    let mobileView = windowSize.innerWidth < 576;

    let navbarColorClass = isHomepage ? 'custom-navbar-homepage' : 'custom-navbar-not-homepage';
    let hero; //  as HTMLCollectionOf<HTMLElement> | undefined;
    if (typeof window != 'undefined') { 
       hero = document.getElementsByClassName('hero')
    }
    
    // let navbarColorClassMobile = isHomepage ? 'custom-navbar-hompage-mobile' : 'custom-navbar-not-homepage-mobile'
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    useEffect(() => {
    hero != undefined && hero.length > 0 && (collapsed ? hero[0].style.margin = '-5rem -2rem 0' : hero[0].style.margin = '0rem -2rem 0') // !hero
    }, [collapsed])
    return(
      <React.Fragment>
        {(!(mobileView)) ? <div className="navbar1"> 
        <Navbar expand="md">
            <Link
                className={'custom-navbar-brand '+ navbarColorClass }
                to="/"
            >
                moneypot
            </Link>
    
            <NavbarToggler />
            <Collapse  navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/overview/">Overview</Link>
                    </NavItem>
                    <NavItem>
                        <a className={'nav-link '+ navbarColorClass } href="https://wallet.moneypot.com">Wallet</a>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/faq/">Faq</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/releases/">Releases</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/fees/">Fees</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/docs/">Docs</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </div> :
        <div className="navbar1-mobile">
        <Navbar color="faded" light >
     { isHomepage ? (!collapsed ? <Link to="/" className="mr-auto"> <div className="enlarge-name-moneypot-mobile">moneypot</div></Link> : null) : <Link to="/" className="mr-auto"> <div className="enlarge-name-moneypot-mobile">moneypot</div></Link>   } 
       <NavbarToggler onClick={toggleNavbar} /> 
      <Collapse isOpen={!collapsed} navbar >
      <Nav navbar className="navbar-mobile">
      <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/overview/">Overview</Link>
                    </NavItem>
                    <NavItem>
                        <a className={'nav-link '+ navbarColorClass } href="https://wallet.moneypot.com">Wallet</a>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/faq/">Faq</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/releases/">Releases</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/fees/">Fees</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={'nav-link '+ navbarColorClass } to="/docs/">Docs</Link>
                    </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div> }
    </React.Fragment>    
    
    )
   } 
export default CustomNavbar

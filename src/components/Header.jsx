import React from 'react';
import Nav from "./Nav"


const Header = () => {
   

    return (
        <div>
             <header id="header" className="d-flex flex-column justify-content-center">
                   <Nav />   
             </header>
        </div>
    );
};

export default Header;
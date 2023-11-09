import React from "react";

const Nav = () => {
  const menu = [
    { id: "hero", icon: "bx bx-home", name: "Home" },
    { id: "about", icon: "bx bx-user", name: "About" },
    { id: "resume", icon: "bx bx-file-blank", name: "Resume" },
    { id: "portfolio", icon: "bx bx-book-content", name: "Portfolio" },
    { id: "services", icon: "bx bx-server", name: "Services" },
    { id: "contact", icon: "bx bx-envelope", name: "Contact" },
  ];

  return (
    <div>
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              <a href={`#${menu.id}`} className="nav-link scrollto" >
              <i className={item.icon}></i> <span>{item.name}</span>
              </a>
            </li>
          ))}

          {/* <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li> */}
          {/* <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                  <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                  <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                  <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                  <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import "./Footer.css";
import FlipCard from "./FlipCard";
// import { BrowserRouter } from "react-router-dom";
// import{HashLink as Link} from "react-router-hash-link";

const Footer = () => {
  const top=()=>{window.scrollTo(0,0);};
  return (
    // <BrowserRouter>
    <div className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h2>About us </h2>
          <h4 className="list-unstyled">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra neque vel bibendum accumsan. Morbi quis massa eget turpis pretium elementum. Pellentesque eget iaculis nisl. Vestibulum vehicula venenatis justo ac luctus. </li>
          </h4>
        </div>
        <div className="col-lg-3">
          <ui className="list-unstyled">
            
          </ui>
        </div>
        <div className="col-lg-3">
          <h2>Links</h2>
          <ui className="list-unstyled">
          {/* <li><Link to ="#ConnectCarousel">Societies Recent Event  </Link></li>
            <li><Link to="#ConnectCards">All Societies</Link></li> */}
            <li><a href ="#ConnectCarousel">Societies Recent Event  </a></li>
            <li><a href="#head1">All Societies</a></li>
          </ui>
        </div>
        <div className="col-lg-3">
          <button onClick={top} className="btn"><img src="\images\top.png"></img></button>
        </div>
      </div>
      <div className="row1">
        <p className="col-sm">
          Copyright &copy;{new Date().getFullYear()} societysphere.com. All rights reserved.
        </p>
      </div>
    </div>
  </div>
  // </BrowserRouter>
  );
};

export default Footer;

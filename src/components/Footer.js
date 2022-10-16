import React from "react";
import "./Footer2.css";
import FlipCardId from "./FlipCard";
import RecentEventCarousel from "./Carousel";
// import { BrowserRouter } from "react-router-dom";
// import{HashLink as Link} from "react-router-hash-link";

const Footer = () => {
  const top=()=>{window.scrollTo(0,0);};
  return (
    // <BrowserRouter>
    // <div className="main-footer">
    //     <div className="row">
    //       <div className="content">
    //       <div className="col-lg-3">
    //         <h2>About us </h2>
    //         <h4 className="list-unstyled">
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra neque vel bibendum accumsan. Morbi quis massa eget turpis pretium elementum. Pellentesque eget iaculis nisl. Vestibulum vehicula venenatis justo ac luctus. </p>
    //         </h4>
    //       </div>
    //       <div className="col-lg-3"></div>
    //       <div className="col-lg-3">
    //         <h2>Links</h2>
    //         <ul className="list-unstyled">
    //           <p><a href ="#carousel">Societies Recent Event  </a></p>
    //           <p><a href="#FlipCardId">All Societies</a></p>
    //         </ul>
    //       </div>
    //       <div className="col-lg-3">
    //         <button onClick={top} className="btn"><img src="\images\top.png" alt='top'></img></button>
    //       </div>
    //       </div>
    //       <div className="row1">
    //         <p className="col-sm">
    //           Copyright &copy;{new Date().getFullYear()} societysphere.com. All rights reserved.
    //         </p>
    //       </div>
    //     </div>
    // </div>
  <div>
    <div className="footer-block">
      <div className="footer-content">
        <div className="col-lg-4">
          <h2>About us </h2>
          <h6 className="list-unstyled">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra neque vel bibendum accumsan. Morbi quis massa eget turpis pretium elementum. Pellentesque eget iaculis nisl. Vestibulum vehicula venenatis justo ac luctus. </p>
          </h6>
        </div>
        {/* <div className="col-lg-4"></div> */}
        <div className="col-lg-4">
          <h2>Links</h2>
          <ul className="list-unstyled">
            <h6><a href ="#RecentEventCarousel">Societies Recent Event</a></h6>
            <h6><a href="#FlipCardId">All Societies</a></h6>
          </ul>
        </div>
        {/* <div className="col-lg-4 top-button">
            <button onClick={top} className="btn"><img src="https://cdn-icons-png.flaticon.com/512/608/608336.png" alt='top'></img></button>
        </div> */}
      </div>
      <div className="copyright-block">
        <p className="col-sm">
          Copyright &copy; {new Date().getFullYear()} societysphere.com. All rights reserved.
        </p>
      </div>
    </div> 
  </div>
  // </BrowserRouter>
  );
};

export default Footer;

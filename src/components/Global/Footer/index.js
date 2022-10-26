import React from "react";
import "./style.css";

const Footer = () => {
  const top = () => { window.scrollTo(0, 0); };
  return (
    <div>
      <div className="footer-block">
        <div className="footer-content">
          <div className="col-lg-4">
            <h2>About us </h2>
            <h6 className="list-unstyled">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra neque vel bibendum accumsan. Morbi quis massa eget turpis pretium elementum. Pellentesque eget iaculis nisl. Vestibulum vehicula venenatis justo ac luctus. </p>
            </h6>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <h2>Links</h2>
            <ul className="list-unstyled">
              <h6><a href="#RecentEventCarousel">Societies Recent Event</a></h6>
              <h6><a href="#FlipCardId">All Societies</a></h6>
            </ul>
          </div>
        </div>
        <div className="copyright-block">
          <p className="col-sm">
            Copyright &copy; {new Date().getFullYear()} societysphere.com. All rights reserved.
          </p>
        </div>
      </div>

      <div className="back-to-top">
        <button onClick={top} className="btn"><img src="https://i.imgur.com/etdZqUD.png" alt='top'></img></button>
      </div>
    </div>
  );
};

export default Footer;

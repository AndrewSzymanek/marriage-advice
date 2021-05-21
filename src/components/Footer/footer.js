import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Marriage Advice App
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

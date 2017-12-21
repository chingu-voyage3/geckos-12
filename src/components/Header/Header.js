import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="navWide">
        <div className="wideDiv">
        <a href="#">Time counter</a>
        <a href="#">Miguel</a>
        <a href="#">Lidl</a>
        <a href="#">Schwarz</a>
        <a href="#">English</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Get Engaged</a>
        </div>
      </div>
      <div className="navNarrow">
        <i className="fa fa-bars fa-2x"></i>
          <div className="narrowDiv">
            <a href="#">Time counter</a>
            <a href="#">Miguel</a>
            <a href="#">Lidl</a>
            <a href="#">Schwarz</a>
            <a href="#">English</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Get Engaged</a>
          </div>
      </div>
    </nav>      
  );    
};

export default Header;
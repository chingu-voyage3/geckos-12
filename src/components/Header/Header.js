import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="headerDesktop">
        <div className="wideDiv">
          <ul>
            <li>Time counter</li>
            <li>Miguel</li>
            <li>Lidl</li>
            <li>Schwarz</li>
          </ul>
          <nav>
            <a href="#">Languages</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Get Engaged</a>
          </nav>
        </div>
      </div>
      <div className="headerMobile">
        <i className="fa fa-bars fa-2x"></i>
          <div className="narrowDiv">
            <ul>
              <li>Time counter</li>
              <li>Miguel</li>
              <li>Lidl</li>
              <li>Schwarz</li>
            </ul>
            <nav>
              <a href="#">Languages</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Get Engaged</a>
            </nav>
          </div>
      </div>
    </header>      
  );    
};

export default Header;
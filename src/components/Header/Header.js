import React from 'react';

import Earnings from './Earnings/Earnings.js';
import Navigation from './Navigation/Navigation';

const header = () => {
  return (
    <React.Fragment>
      <Earnings />
      <Navigation />
    </React.Fragment>      
  );    
};

export default header;
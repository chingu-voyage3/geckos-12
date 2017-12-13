import React from 'react';

import Earnings from './Earnings/Earnings.js'

const header = () => {
  return (
    <React.Fragment>
      <Earnings />
      <Navigation />
    </React.Fragment>      
  );    
};

export default header;
import React from 'react';

import Timer from './Timer/Timer'
import Earning from './Earning/Earning'

const earnings = () => {
  return (
    <React.Fragment>
      <Timer />
      <Earning />
      <Earning />
      <Earning />
    </React.Fragment>
  )
};

export default earnings;
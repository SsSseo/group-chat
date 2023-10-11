import React from 'react';

import onlineIcon from './images/onlineIcon.png';
import closeIcon from './images/closeIcon.png';

import './InfoBar.css';

const InfoBar = () => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='online icon' />
        <h3>room</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={closeIcon} alt='close icon' />
        </a>
      </div>
    </div>
  );
}

export default InfoBar
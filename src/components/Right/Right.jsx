import React from 'react';
import { Information } from '../Information/Information';
import { Onboard } from '../Onboard/Onboard';
import { UserInfo } from '../UserInfo/UserInfo';
import './Right.css';

export const Right = () => {
  return (
    <div className='Right'>
        <div className="user-info">
            <UserInfo/>
        </div>
        <div className="info">
            <Information/>
        </div>
        <div className="onboard">
            <Onboard/>
        </div>
    </div>
  )
}

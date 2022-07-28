import React from 'react';
import './UserInfo.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="userInfoImgWrapper">
            <img src="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg" alt="" className="userInfoImg" />
        </div>
        <div className="userInfoMail">
            <EmailOutlinedIcon className='icon'/>
            <p>harry@gmail.com</p>
        </div>
        <div className="userInfoAccount">
            <AccountCircleOutlinedIcon className='icon'/>
            <p>Harry Potter</p>
        </div>
        <div className="userInfoButton">
            <button className="archive">Archive <Inventory2OutlinedIcon className='archive-icon'/> </button>
        </div>
    </div>
  )
}

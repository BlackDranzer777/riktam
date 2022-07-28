import React from 'react';
import './Profile.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Profile = () => {
  return (
    <div className='profile-wrapper'>
        <img src="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg" alt="" className="profile-img" />
        <div className="profile-info">
            <p className='profile-name'>Harry Potter</p>
            <SettingsOutlinedIcon className='profile-info-setting-icon'/>
        </div>
        <p className="title">Lead UI/UX Developer</p>
        <div className="toggle-button active">
            <div className="toggler"></div>
        </div>
    </div>
  )
}

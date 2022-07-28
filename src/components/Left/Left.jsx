import React, {useState} from 'react';
import './Left.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Profile } from '../Profile/Profile';
import { ActiveConversation } from '../ActiveConversation/ActiveConversation';

export const Left = () => {

    const [activeConversation, setActiveConversation] = useState(false);

    const activeConversationToggler = () => {
        console.log(activeConversation)
        return setActiveConversation(!activeConversation);
    }

  return (
    <div className='Left'>
        <div className="logo">
            <FacebookOutlinedIcon className='logo-icon'/>
            <p>QuickChat</p>
        </div>
        <div className="profile">
            <Profile/>
        </div>
        <div className="active-conversation">
            <div className='active-conversation-toggler' onClick={activeConversationToggler}>
                <p>Active Conversation</p>
                {activeConversation ? 
                <ArrowDropUpOutlinedIcon className='active-conversation-toggle-icon'/>
                :<ArrowDropDownOutlinedIcon className='active-conversation-toggle-icon'/>}
            </div>
            <ActiveConversation activeConversation={activeConversation}/>
        </div>
        {/* <div className="archived-conversation">
            Archived Conv.
        </div> */}
        
    </div>
  )
}

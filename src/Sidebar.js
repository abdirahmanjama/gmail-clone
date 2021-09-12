import React, { useState } from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import { Call, ImportantDevices, LabelImportant, Snooze, StarRounded } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CallIcon from '@material-ui/icons/Call';

function Sidebar() {
    const [selected, setSelected] = useState(false);

    function handleClick(){
        setSelected(!selected);
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
            
                <Button className="sidebar__compose"
                   startIcon={<AddIcon fontSize="large" 
                   />}>
                   Compose
                </Button>
            </div>
            <div className="sidebar__middle">
                <SidebarOption Icon={InboxIcon}  title="Inbox" number = {54}/>
                <SidebarOption Icon={StarRounded} selected={true} title="Starred" number = {1}/>
                <SidebarOption Icon={Snooze} title="Snooze" number = {1}/>
                <SidebarOption Icon={LabelImportant} title="Important" number = {1}/>
                <SidebarOption Icon={SendIcon} title="Sent" number = {1}/>
                <SidebarOption Icon={ExpandMoreIcon} title="More"/>

            </div>
            <div className="sidebar__bottom">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <VideoCallIcon/>
                </IconButton>
                <IconButton>
                    <CallIcon/>
                </IconButton>

            </div>
            
        </div>
    )
}

export default Sidebar

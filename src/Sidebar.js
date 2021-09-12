import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';

function Sidebar() {
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
                <SidebarOption Icon={InboxIcon} title="Inbox" number = {54}/>
            </div>
            <div className="sidebar__bottom">

            </div>
            
        </div>
    )
}

export default Sidebar

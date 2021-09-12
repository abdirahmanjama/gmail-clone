import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, MoreVert, NavigateBefore, NavigateNext, Settings } from '@material-ui/icons'
import React from 'react'
import './EmailList.css'
import RedoIcon from '@material-ui/icons/Redo';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function EmailList() {
    return (
        <div className="emailList">
            <div className="settings">
                <div className="settings__right">
                    <IconButton>
                        <Checkbox/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                         <MoreVert/>
                    </IconButton>
                </div>
                <div className="settings__divider">

                </div>
                <div className="settings__left">
                <IconButton>
                    <NavigateBefore/>
                        </IconButton>
                    <IconButton>
                        <NavigateNext/>
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon/>
                    </IconButton>
                    <IconButton>
                         <SettingsIcon/>
                    </IconButton>
                </div>

               
            </div>
            <div className="features">
                    <Section Icon = {InboxIcon} title = "Primary" color="red" /> 
                    <Section Icon = {PeopleIcon} title = "Social" color="green" /> 
                    <Section Icon = {LocalOfferIcon} title = "Promotions" color="blue" /> 
                </div>
        </div>
    )
}

export default EmailList

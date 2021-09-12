import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, MoreVert, NavigateBefore, NavigateNext, Settings } from '@material-ui/icons'
import React from 'react'
import './EmailList.css'
import RedoIcon from '@material-ui/icons/Redo';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';

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

                <div className="features">
                    
                </div>
            </div>
        </div>
    )
}

export default EmailList

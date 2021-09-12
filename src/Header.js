import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { Apps, AppsOutlined, ArrowDropDown, NotificationImportant } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="data:image/png;base64,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" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDown className="header__inputCaret"/>
            </div>

            <div className="header__right">
            <IconButton>
                <AppsOutlined/>
            </IconButton>
            <IconButton>
                <NotificationImportant></NotificationImportant>
            </IconButton>
            <Avatar/>
            </div>
           
        </div>
    )
}

export default Header

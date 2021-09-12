import React from 'react'
import './EmailRow.css'
import { CheckBox } from '@material-ui/icons'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { IconButton } from '@material-ui/core'

function EmailRow({title, id, subject, description, time}) {
    return (
        <div className = "emailRow">

            <div className="emailRow__options">
                <IconButton>
                    <CheckBox/>
                </IconButton>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>

            <div className="emailRow__title">
                {title}

            </div>
            <div className="emailRow__message">
               <h4>{subject}</h4> 

                <p>{description}</p>

            </div>


            <div className="emailRow__time">
                {time}
            </div>

        </div>
    )
}

export default EmailRow

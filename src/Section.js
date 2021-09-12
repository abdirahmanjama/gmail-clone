import { IconButton } from '@material-ui/core'
import React from 'react'
import './Section.css'

function Section({title, Icon, color, selected}) {
    return (
        <div className = {`section  ${selected && "section--selected"}`}
                            style = {{borderBottom: `3px solid ${color}`}}>
        
            <Icon></Icon>    
            <p>{title}</p>
            
            
        </div>
    )
}

export default Section

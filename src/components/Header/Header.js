import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <PersonIcon/>
            <h2>Header part viz Tinder logo goes here</h2>
            <ForumIcon/>
        </div>
    )
}

export default Header

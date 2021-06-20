import React from 'react';
import Logo from "../../media/logo.png";
import { IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import "../../styles/Header.css";
import { auth } from "../../firebase";

function Header( {userPhoto, setUser} ) {

    const handleLogOut = () => {
        auth.signOut().then(() => {
            setUser(null)
        }).catch((err) => alert(err.message))
    }

    return (
        <div className="header">
            {/* Logo */}
            <div className="header__logo" title="Drive">
                <img src={Logo} alt="Logo" />
                <span>Drive</span>
            </div>

            {/* Search Bar */}
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon/>
                    
                    <input type="text" placeholder="Search in Drive"/>
                    <ExpandMoreIcon />
                </div>
            </div>

            {/* Icons */}
            <div className="header__icons">
                <span>
                    <IconButton>
                        <HelpOutlineIcon title="Support"/>
                    </IconButton>
                    
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                    
                </span>
                <IconButton>
                    <AppsIcon/>
                </IconButton> 
                <img src={userPhoto} alt="User" title="Log Out" onClick={handleLogOut}/>
            </div>
        </div>
    )
}

export default Header

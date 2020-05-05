import React from 'react';
import classes from './Topbar.module.css';


const Topbar=()=>{

    return(
        <div className={classes.botsalogo_topbar}>
            <div className={classes.botsalgo_logoSection}>
            <img className={classes.botsalogo_logo} src="https://botsalgo.com/assets/img/logo.png"/>
        </div>
            <div className={classes.botalogo_menuItems}>
                <p>Menu</p>
                <p>Client</p>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Topbar;
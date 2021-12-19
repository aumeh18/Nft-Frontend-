import { Route } from 'react-router-dom';
import NavBar from './NavBar.js';

import React from 'react';
import './Blue.css';


function LayoutRouteExt(props) {
    return (
<div className="blue" style={{ "background-image": "url('./11nft-auction1-videoSixteenByNineJumbo1600.jpg')", "background-size": "cover", "display": "block"}}>
            <NavBar {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
            
        </div>
        
    )
}

export default LayoutRouteExt;
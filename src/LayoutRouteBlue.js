import { Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js'
import React from 'react';
import './Blue.css';


function LayoutRouteBlue(props) {
    return (
<div className="blue" style={{ "background-image": "url('./11nft-auction1-videoSixteenByNineJumbo1600.jpg')", "background-size": "cover", "display": "block"}}>
            <NavBar {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer{...props}/>
        </div>
        
    )
}

export default LayoutRouteBlue;
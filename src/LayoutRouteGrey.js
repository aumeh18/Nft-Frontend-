import { Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import Footer from './Footer.js'
import React from 'react';
import './Grey.css';


function LayoutRouteGrey(props) {
    return (
        <div className="grey">
            <NavBar {...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer{...props}/>
        </div>
        
    )
}

export default LayoutRouteGrey;
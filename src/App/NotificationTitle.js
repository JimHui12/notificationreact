import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles';

export default function NotificationTitle() {

    return (
        <div className="notification-top top">
            <ul className="notification-title toplist">
                <li className="field-name">Date</li> 
                <li className="field-name">Time</li>  
                <li className="field-name">Event Content</li> 
                <li className="field-name">Location</li>  
                <li className="field-name">Type</li> 
                <li className="field-name">Action</li>
            </ul>
        </div>            
    );
    
}
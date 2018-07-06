import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FacultyNotificationDashBoard  from '../FacultyNotification/FacultyNotificationDashBoard';
import '../styles';

export default class  FacultyNotificationBoard extends Component {
    render() {
       // const {id, date, time, event, location, type} = this.props.notification;
       const notifications = this.props.facultynotification;
        return (
        <div className="notification-top below">
            <ul className="notification-title below-list">
                <li className="field-name"> {notifications.date} </li>
                <li className="field-name"> {notifications.time} </li>
                <li className="field-name"> {notifications.event} </li>
                <li className="field-name"> {notifications.location} </li>
                <li className="field-name"> {notifications.type} </li>
                <li className="field-name">
                <Link to={`/facultynotifications/detail/edit/${notifications.id}`}> <button className="morebutton" title="Edit"> More... </button></Link>
                <Link to={`/facultynotifications/detail/edit/${notifications.id}`}> <button className="morebutton" title="Edit"> Delete </button></Link>
                </li>
            </ul>
        </div>            
        );
    }
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SchoolNotificationDashBoard  from '../SchoolNotification/SchoolNotificationDashBoard';
import '../styles';

export default class  SchoolNotificationBoard extends Component {
    render() {
       // const {id, date, time, event, location, type} = this.props.notification;
       const notifications = this.props.schoolnotification;
        return (
        <div className="notification-top below">
            <ul className="notification-title below-list">
                <li className="field-name"> {notifications.date} </li>
                <li className="field-name"> {notifications.time} </li>
                <li className="field-name"> {notifications.event} </li>
                <li className="field-name"> {notifications.location} </li>
                <li className="field-name"> {notifications.type} </li>
                <li className="field-name">
                <Link to={`/schoolnotifications/detail/edit/${notifications.id}`}> <button className="morebutton" title="Edit"> More... </button></Link>
                <Link to={`/schoolnotifications/detail/edit/${notifications.id}`}> <button className="morebutton" title="Edit"> Delete </button></Link>
                </li>
            </ul>
        </div>            
        );
    }
}
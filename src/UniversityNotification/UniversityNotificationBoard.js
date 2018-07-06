import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UniversitylNotificationDashBoard  from '../UniversityNotification/UniversityNotificationDashBoard';
import '../styles';

export default class  UniversityNotificationBoard extends Component {
    render() {
       // const {id, date, time, event, location, type} = this.props.notification;
       const notifications = this.props.universitynotification;
        return (
        <div className="notification-top below">
            <ul className="notification-title below-list">
                <li className="field-name"> {notifications.date} </li>
                <li className="field-name"> {notifications.time} </li>
                <li className="field-name"> {notifications.event} </li>
                <li className="field-name"> {notifications.location} </li>
                <li className="field-name"> {notifications.type} </li>
                <li className="field-name">
                <Link to={`/universitynotifications/detail/edit/${notifications.id}`}> <button className="morebutton" title="Edit"> More... </button></Link>
                <Link to={`/universitynotifications/detail/edit/${notifications.id}`}> <button className="morebutton" title="Edit"> Delete </button></Link>
                </li>
            </ul>
        </div>            
        );
    }
}
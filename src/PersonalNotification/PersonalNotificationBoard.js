import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PersonalNotificationDashBoard from '../PersonalNotification/PersonalNotificationDashBoard';
import '../styles';

export default class PersonalNotificationBoard extends Component {
    render() {
       // const {id, date, time, event, location, type} = this.props.notification;
       const personalnotifications = this.props.personalnotification;
        return (
        <div className="notification-top below">
            <ul className="notification-title below-list">
                <li className="field-name"> {personalnotifications.date} </li>
                <li className="field-name"> {personalnotifications.time} </li>
                <li className="field-name"> {personalnotifications.event} </li>
                <li className="field-name"> {personalnotifications.location} </li>
                <li className="field-name"> {personalnotifications.type} </li>
                <li className="field-name">
                <Link to={`/personalnotifications/detail/edit/${personalnotifications.id}`}> <button className="morebutton" title="Edit"> More... </button></Link>
                <Link to={`/personalnotifications/detail/edit/${personalnotifications.id}`}> <button className="morebutton" title="Edit"> Delete </button></Link>
                </li>
            </ul>
        </div>            
        );
    }
}
// function NotificationList(props) {
//     const notifications= props.notification;
//     return (
//         <div>
//             <span> <strong>Notification ID:</strong> {notifications.id} </span>
//             <span> <strong>Date:</strong>  {notifications.date} </span>
//             <span> <strong>Time:</strong> {notifications.time} </span>
//             <span> <strong>Event Content:</strong> {notifications.event} </span>
//             <span> <strong>Location:</strong> {notifications.location} </span>
//             <span> <strong>Type:</strong> {notifications.type} </span>
//             <div>
//                 <Link to ={`/notifications/detail/edit/${notifications.id}`}> <button className="btn-circle" title="Edit"> <i className="fa fa-edit"></i></button> </Link> 
//             </div>
//         </div>
//     )
    
// }


// export default function NotificationItem(props) {
//     let notification = props.notification;
//     console.log(notification);
//     return(
//         <NotificationList notification={notification}/>
//     )
// }
//import {notification} from '../notificationdata';
   
//import NotificationDashBoard from './NotificationDashBoard';





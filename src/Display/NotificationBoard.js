import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationDashBoard from '../Display/NotificationDashBoard';
export default class NotificationBoard extends Component {
    render() {
       // const {id, date, time, event, location, type} = this.props.notification;
       const notifications = this.props.notification;
        return (
        <div>
            <span> <strong>Notification ID:</strong> {notifications.id} </span>
            <span> <strong>Date:</strong>  {notifications.date} </span>
            <span> <strong>Time:</strong> {notifications.time} </span>
            <span> <strong>Event Content:</strong> {notifications.event} </span>
            <span> <strong>Location:</strong> {notifications.location} </span>
            <span> <strong>Type:</strong> {notifications.type} </span>
            <div>
            <Link to={`/notifications/detail/edit/${notifications.id}`}>Details</Link>
            </div>
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





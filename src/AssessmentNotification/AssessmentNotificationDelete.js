import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationTitle from '../App/NotificationTitle'
import '../styles';

export default class AssessmentNotificationDelete extends Component {
    render() {
        return (
            <div className="notification-form">
            <form className="notification edit">

                
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.notification.date}  />
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.notification.time}  />
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.notification.event} />
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.notification.location} />
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.notification.type} />  <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Delete this notification</button>
                <Link to={"/assessmentnotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
        );
    }
}
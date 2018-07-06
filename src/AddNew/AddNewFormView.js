import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotificationTitle from '../App/NotificationTitle'
import '../styles';

export default class AddFormView extends Component {
    render() {
        return (
            <div className="notification-form">
                <form className="notification display">
                    <label className="form-title">Create New Notification</label>
                    <label className="form-label">Date</label>
                    <input type="text" className="form-control" name={'date'} />
                    
                    <label className="form-label">Time</label>
                    <input type="text" className="form-control" name={'time'} />
                    
                    <label className="form-label">Event</label>
                    <textarea className="form-event"  name={'event'} />
                    
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" name={'location'} />
                    
                    <label className="form-label">Type</label>
                    <input type="text" className="form-control" name={'type'} /> <br></br>
                    
                    <button className="form-button edit" >Create</button>
                    <Link to={"/"} ><button className="form-button back">Back</button> </Link>
                </form>
            </div>
        );
    }
}
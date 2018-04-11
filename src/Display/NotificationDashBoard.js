import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchNotificationsByID, updateNotificationsByID, createNotification} from '../api/notification';

export  default class NotificationDashBoard extends Component {
    constructor(props) {
        super(props);    

        this.state = {
            notification: {},
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false                   
        };

    }

    GetNotificationsByID(id) {
        this.setState({isLoading:true});
        fetchNotificationsByID(id)
            .then(response => {
                this.setState({isLoading:false, notification:response.data})
            })
            .catch(error => this.setState({error}));
    }

    NewNotification() {
        const {id} = this.props.match.params;
        return id === 'create';
    }

    handleSubmit(event) {
        this.setState({isSaving:true});
        const {notification} = this.state;
        if(this.isNew()) {
            createNotification(notification)
            .then(response => {if(response.status===200) this.setState({isSaving:false,notification:{}})});
        } else {
            updateNotificationsByID(notification.id,notification)
                .then(response => {if(response.status===200) this.setState({isSaving:false,isEditing:false})});
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({isEditing:true});
    }

    handleChange(event) {
        const {name, value} = event.target;
        if(!this.state.isEditing) {
            return;
        } else {
            this.setState({notification:{...this.state.notification,[name]:value}});
        }
    }

    componentWillMount() {
        const {id, action} = this.props.match.params;
        if(this.NewNotification()) {
            this.setState({notification:{},isEditing:true});
            return;
        } else {
            if (action==='edit') {
                this.setState({isEditing: true});
            } 
            this.GetNotificationsByID(id);
        }

    }

    render() {
        return this.state.isEditing ? <NotificationDetailEdit notification={this.state.notification} onChange={this.handleChange} onSubmit={this.handleSubmit} /> : <NotificationDetailDisplay notification={this.state.notification} onClick={this.handleChange} />
    }


}    

function NotificationDetailDisplay(props) {
    return (
        <div>
            <form>
                <label>Notification ID:</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'id'} value={props.notification.id} /> 
                <label>Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.notification.date}  />
                <label>Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.notification.time}  />
                <label>Event</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'event'} value={props.notification.event} />
                <label>Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.notification.location} />
                <label>Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.notification.type} />
                <button className="first-btn" onClick={props.onClick}>Edit</button>
                <Link to={"/notifications"} ><button className="back-btn">Back</button> </Link>
            </form>
        </div>
    );
}

function NotificationDetailEdit(props) {
    return (
        <div>
            <form>
                <label>Notification ID:</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'id'} value={props.notification.id} /> 
                <label>Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.notification.date}  />
                <label>Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.notification.time}  />
                <label>Event</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'event'} value={props.notification.event} />
                <label>Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.notification.location} />
                <label>Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.notification.type} />
                <button className="first-btn" onClick={props.onClick}>Save</button>
                <Link to={"/notifications"} ><button className="back-btn">Back</button> </Link>
            </form>
        </div>
    );
}
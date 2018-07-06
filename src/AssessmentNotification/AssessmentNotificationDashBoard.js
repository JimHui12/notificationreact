import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchNotificationsByID, updateNotificationsByID, createNotification} from '../api/notification';
import {notification} from '../notificationdata';

export  default class AssessmentNotificationDashBoard extends Component {
    constructor(props) {
        super(props);    
        const { id } = this.props.match.params;
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            notification: {},
            readOnly: true,
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false                   
        };

    }

    GetNotificationsByID(id) {
        for(let i=0; i<notification.length; i++){
            console.log(notification[i])
            if(notification[i].id === parseInt(id)){
               return notification[i];

            }

        }


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
        this.setState(preState => ({readOnly: !preState.readOnly}));
        this.setState(preState => ({isEditing: !preState.isEditing}))
    }

    handleChange(event) {
        const {name, value} = event.target;
        if(!this.state.isEditing) {
            return;
        } else {
            this.setState({notification:{...this.state.notification,[name]:value}});
        }
    }

    componentDidMount() {
        const {id, action} = this.props.match.params;
        if(this.NewNotification()) {
            this.setState({notification:{},isEditing:true});
            return;
        } else {
            // if (action==='edit') {
            //     this.setState({isEditing: true});
            // } 
            const data = this.GetNotificationsByID(id);
            console.log(data)
            this.setState({notification:data})            
        }

    }

    render() {
        return this.state.isEditing ? <NotificationDetailEdit notification={this.state.notification} onClick={this.handleClick}  onChange={this.handleChange}  onSubmit={this.handleSubmit} readOnly={this.state.readOnly} /> 
        : <NotificationDetailDisplay notification={this.state.notification} onClick={this.handleClick} onChange={this.handleChange} readOnly={this.state.readOnly} />
    }


}    

function NotificationDetailDisplay(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification display">
                <label className="form-title">Assessment Notification</label>
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.notification.date}  readOnly={true} isEditing={false}/>
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.notification.time} readOnly={true} isEditing={false}/>
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.notification.event}  readOnly={true} isEditing={false}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.notification.location} readOnly={true} isEditing={false}/>
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.notification.type} readOnly={true} isEditing={false}/> <br></br>
                
                <button className="form-button edit" onClick={props.onClick} >Edit</button>
                <Link to={"/assessmentnotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}

function NotificationDetailEdit(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification edit">

                <label className="form-title">Assessment Notification</label>
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.notification.date}  readOnly={false} isEditing={true}/>
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.notification.time}   readOnly={false} isEditing={true}/>
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.notification.event}  readOnly={false} isEditing={true}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.notification.location}  readOnly={false} isEditing={true}/>
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.notification.type}  readOnly={false} isEditing={true}/>  <br></br>
                
                <button className="form-button edit" onClick={props.onClick}  >Save</button>
                <Link to={"/assessmentnotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}
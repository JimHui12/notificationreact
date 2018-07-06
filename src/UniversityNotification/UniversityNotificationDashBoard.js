import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchNotificationsByID, updateNotificationsByID, createNotification} from '../api/notification';
import {universitynotification} from '../notificationdata';

export  default class UniversityNotificationDashBoard extends Component {
    constructor(props) {
        super(props);    
        const { id } = this.props.match.params;
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            universitynotification: {},
            readOnly: true,
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false                   
        };

    }

    GetNotificationsByID(id) {
        for(let i=0; i<universitynotification.length; i++){
            console.log(universitynotification[i])
            if(universitynotification[i].id === parseInt(id)){
               return universitynotification[i];

            }

        }


    }

    NewNotification() {
        const {id} = this.props.match.params;
        return id === 'create';
    }

    handleSubmit(event) {
        this.setState({isSaving:true});
        const {universitynotification} = this.state;
        if(this.isNew()) {
            createNotification(universitynotification)
            .then(response => {if(response.status===200) this.setState({isSaving:false,universitynotification:{}})});
        } else {
            updateNotificationsByID(universitynotification.id,universitynotification)
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
            this.setState({universitynotification:{...this.state.universitynotification,[name]:value}});
        }
    }

    componentDidMount() {
        const {id, action} = this.props.match.params;
        if(this.NewNotification()) {
            this.setState({universitynotification:{},isEditing:true});
            return;
        } else {
            // if (action==='edit') {
            //     this.setState({isEditing: true});
            // } 
            const data = this.GetNotificationsByID(id);
            console.log(data)
            this.setState({universitynotification:data})            
        }

    }

    render() {
        return this.state.isEditing ? <NotificationDetailEdit universitynotification={this.state.universitynotification} onClick={this.handleClick}  onChange={this.handleChange} onSubmit={this.handleSubmit} readOnly={this.state.readOnly} /> 
        : <NotificationDetailDisplay universitynotification={this.state.universitynotification} onClick={this.handleClick} onChange={this.handleChange} readOnly={this.state.readOnly} />
    }


}    

function NotificationDetailDisplay(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification display">
                <label className="form-title">University Notification</label>
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.universitynotification.date} readOnly={true} isEditing={false} />
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.universitynotification.time} readOnly={true} isEditing={false} />
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.universitynotification.event} readOnly={true} isEditing={false}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.universitynotification.location} readOnly={true} isEditing={false} />
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.universitynotification.type} readOnly={true} isEditing={false}/> <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Edit</button>
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

                <label className="form-title">University Notification</label>
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.universitynotification.date}  readOnly={false} isEditing={true}/>
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.universitynotification.time} readOnly={false} isEditing={true} />
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.universitynotification.event} readOnly={false} isEditing={true}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.universitynotification.location} readOnly={false} isEditing={true} />
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.universitynotification.type} readOnly={false} isEditing={true}/>  <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Save</button>
                <Link to={"/universitynotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchNotificationsByID, updateNotificationsByID, createNotification} from '../api/notification';
import {clubnotification} from '../notificationdata';

export  default class ClubNotificationDashBoard extends Component {
    constructor(props) {
        super(props);    
        const { id } = this.props.match.params;
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            clubnotification: {},
            readOnly: true,
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false                   
        };

    }

    GetNotificationsByID(id) {
        for(let i=0; i<clubnotification.length; i++){
            console.log(clubnotification[i])
            if(clubnotification[i].id === parseInt(id)){
               return clubnotification[i];

            }

        }


    }

    NewNotification() {
        const {id} = this.props.match.params;
        return id === 'create';
    }

    handleSubmit(event) {
        this.setState({isSaving:true});
        const {clubnotification} = this.state;
        if(this.isNew()) {
            createNotification(clubnotification)
            .then(response => {if(response.status===200) this.setState({isSaving:false,clubnotification:{}})});
        } else {
            updateNotificationsByID(clubnotification.id,clubnotification)
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
            this.setState({clubnotification:{...this.state.clubnotification,[name]:value}});
        }
    }

    componentDidMount() {
        const {id, action} = this.props.match.params;
        if(this.NewNotification()) {
            this.setState({clubnotification:{},isEditing:true});
            return;
        } else {
            // if (action==='edit') {
            //     this.setState({isEditing: true});
            // } 
            const data = this.GetNotificationsByID(id);
            console.log(data)
            this.setState({clubnotification:data})            
        }

    }

    render() {
        return this.state.isEditing ? <NotificationDetailEdit clubnotification={this.state.clubnotification} onClick={this.handleClick}  onChange={this.handleChange} onSubmit={this.handleSubmit}  readOnly={this.state.readOnly} /> 
        : <NotificationDetailDisplay clubnotification={this.state.clubnotification} onClick={this.handleClick} onChange={this.handleChange}  readOnly={this.state.readOnly}/>
    }


}    

function NotificationDetailDisplay(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification display">
                <label className="form-title">Club Notification</label>
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.clubnotification.date}  readOnly={props.readOnly}  isEditing={false} readOnly={true}/>
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.clubnotification.time}  readOnly={props.readOnly}  isEditing={false} readOnly={true}/>
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.clubnotification.event} readOnly={props.readOnly}  isEditing={false} readOnly={true}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.clubnotification.location} readOnly={props.readOnly}  isEditing={false} readOnly={true}/>
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.clubnotification.type} readOnly={props.readOnly}  isEditing={false} readOnly={true}/> <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Edit</button>
                <Link to={"/clubnotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}

function NotificationDetailEdit(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification edit">
                <label className="form-title">Club Notification</label>
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.clubnotification.date}  isEditing={true}/>
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.clubnotification.time}  isEditing={true}/>
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.clubnotification.event} isEditing={true}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.clubnotification.location} isEditing={true}/>
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.clubnotification.type} isEditing={true}/>  <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Save</button>
                <Link to={"/clubnotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}
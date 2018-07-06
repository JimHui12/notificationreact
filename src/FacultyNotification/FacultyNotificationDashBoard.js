import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchNotificationsByID, updateNotificationsByID, createNotification} from '../api/notification';
import {facultynotification} from '../notificationdata';

export  default class FacultyNotificationDashBoard extends Component {
    constructor(props) {
        super(props);    
        const { id } = this.props.match.params;
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            facultynotification: {},
            readOnly: true,
            error: null,
            isLoading: false,
            isEditing: false,
            isSaving: false                   
        };

    }

    GetNotificationsByID(id) {
        for(let i=0; i<facultynotification.length; i++){
            console.log(facultynotification[i])
            if(facultynotification[i].id === parseInt(id)){
               return facultynotification[i];

            }

        }


    }

    NewNotification() {
        const {id} = this.props.match.params;
        return id === 'create';
    }

    handleSubmit(event) {
        this.setState({isSaving:true});
        const {facultynotification} = this.state;
        if(this.isNew()) {
            createNotification(facultynotification)
            .then(response => {if(response.status===200) this.setState({isSaving:false,facultynotification:{}})});
        } else {
            updateNotificationsByID(facultynotification.id,facultynotification)
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
            this.setState({facultynotification:{...this.state.facultynotification,[name]:value}});
        }
    }

    componentDidMount() {
        const {id, action} = this.props.match.params;
        if(this.NewNotification()) {
            this.setState({facultynotification:{},isEditing:true});
            return;
        } else {
            // if (action==='edit') {
            //     this.setState({isEditing: true});
            // } 
            const data = this.GetNotificationsByID(id);
            console.log(data)
            this.setState({facultynotification:data})            
        }

    }

    render() {
        return this.state.isEditing ? <NotificationDetailEdit facultynotification={this.state.facultynotification} onClick={this.handleClick} onChange={this.handleChange} onSubmit={this.handleSubmit} readOnly={this.state.readOnly}/> 
        : <NotificationDetailDisplay facultynotification={this.state.facultynotification} onClick={this.handleClick} onChange={this.handleChange} readOnly={this.state.readOnly}/>
    }


}    

function NotificationDetailDisplay(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification display">  
                <label className="form-title">Faculty Notification</label>              
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.facultynotification.date} readOnly={true} isEditing={false} />
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.facultynotification.time} readOnly={true} isEditing={false} />
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.facultynotification.event} readOnly={true} isEditing={false} />
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.facultynotification.location} readOnly={true} isEditing={false}/>
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.facultynotification.type} readOnly={true} isEditing={false}/> <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Edit</button>
                <Link to={"/facultynotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}

function NotificationDetailEdit(props) {
    console.log(props);
    return (
        <div className="notification-form">
            <form className="notification edit">  
                <label className="form-title">Faculty Notification</label>           
                <label className="form-label">Date</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'date'} value={props.facultynotification.date} readOnly={false} isEditing={true}/>
                
                <label className="form-label">Time</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'time'} value={props.facultynotification.time} readOnly={false} isEditing={true}/>
                
                <label className="form-label">Event</label>
                <textarea className="form-event" onChange={props.onChange} name={'event'} value={props.facultynotification.event} readOnly={false} isEditing={true}/>
                
                <label className="form-label">Location</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'location'} value={props.facultynotification.location} readOnly={false} isEditing={true} />
                
                <label className="form-label">Type</label>
                <input type="text" className="form-control" onChange={props.onChange} name={'type'} value={props.facultynotification.type} readOnly={false} isEditing={true} />  <br></br>
                
                <button className="form-button edit" onClick={props.onClick}>Save</button>
                <Link to={"/facultynotifications"} ><button className="form-button back">Back</button> </Link>
            </form>
        </div>
    );
}
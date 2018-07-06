import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import FacultyNotificationBoard from './FacultyNotificationBoard';
import NotificationTitle from '../App/NotificationTitle'
import {facultynotification} from '../notificationdata';
import '../styles';

export default class FacultyNotificationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            facultynotification: []
            
        };
    }

    componentDidMount() {
        this.setState({facultynotification});
    }

    render() {
        return (   
            <div className="notification-list"> 
                <NotificationTitle />     
                    {this.state.facultynotification.map(function (facultynotification) {
                        return (
                            <div>    
                                <FacultyNotificationBoard key={facultynotification.id} facultynotification={facultynotification} />
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}



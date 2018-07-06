import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import UniversityNotificationBoard from './UniversityNotificationBoard';
import NotificationTitle from '../App/NotificationTitle'
import {universitynotification} from '../notificationdata';
import '../styles';

export default class UniversityNotificationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            universitynotification: []
            
        };
    }

    componentDidMount() {
        this.setState({universitynotification});
    }

    render() {
        return (   
            <div className="notification-list"> 
                <NotificationTitle />     
                    {this.state.universitynotification.map(function (universitynotification) {
                        return (
                            <div>    
                                <UniversityNotificationBoard key={universitynotification.id} universitynotification={universitynotification} />
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
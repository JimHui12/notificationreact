import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import SchoolNotificationBoard from './SchoolNotificationBoard';
import NotificationTitle from '../App/NotificationTitle'
import {schoolnotification} from '../notificationdata';
import '../styles';

export default class SchoolNotificationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            schoolnotification: []
            
        };
    }

    componentDidMount() {
        this.setState({schoolnotification});
    }

    render() {
        return (   
            <div className="notification-list"> 
                <NotificationTitle />     
                    {this.state.schoolnotification.map(function (schoolnotification) {
                        return (
                            <div>    
                                <SchoolNotificationBoard key={schoolnotification.id} schoolnotification={schoolnotification} />
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}



import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import AssessmentNotificationBoard from './AssessmentNotificationBoard';
import NotificationTitle from '../App/NotificationTitle'
import {notification} from '../notificationdata';
import '../styles';

export default class AssessmentNotificationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            notification: []
            
        };
    }

    componentDidMount() {
        this.setState({notification});
    }

    render() {
        return (   
            <div className="notification-list"> 
                <NotificationTitle />     
                    {this.state.notification.map(function (notification) {
                        return (
                            <div>    
                                <AssessmentNotificationBoard key={notification.id} notification={notification} />
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
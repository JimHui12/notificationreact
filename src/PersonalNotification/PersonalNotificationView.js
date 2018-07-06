import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import PersonalNotificationBoard from './PersonalNotificationBoard';
import NotificationTitle from '../App/NotificationTitle'
import {personalnotification} from '../notificationdata';
import '../styles';

export default class PersonalNotificationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            personalnotification: []
            
        };
    }

    componentDidMount() {
        this.setState({personalnotification});
    }

    render() {
        return (   
            <div className="notification-list"> 
                <NotificationTitle />     
                    {this.state.personalnotification.map(function (personalnotification) {
                        return (
                            <div>    
                                <PersonalNotificationBoard key={personalnotification.id} personalnotification={personalnotification} />
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}



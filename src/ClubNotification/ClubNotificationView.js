import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import ClubNotificationBoard from './ClubNotificationBoard';
import NotificationTitle from '../App/NotificationTitle'
import {clubnotification} from '../notificationdata';
import '../styles';

export default class ClubNotificationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            clubnotification: []
            
        };
    }

    componentDidMount() {
        this.setState({clubnotification});
    }

    render() {
        return (   
            <div className="notification-list"> 
                <NotificationTitle />     
                    {this.state.clubnotification.map(function (clubnotification) {
                        return (
                            <div>    
                                <ClubNotificationBoard key={clubnotification.id} clubnotification={clubnotification} />
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
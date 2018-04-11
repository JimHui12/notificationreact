import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import NotificationBoard from './NotificationBoard';
import {notification} from '../notificationdata';

export default class NotificationView extends Component {
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
            this.state.notification.map(function (notification) {
                return (
                <div>
                    <NotificationBoard key={notification.id} notification={notification} />)}
                </div>
                )

            })

        )
    }

}



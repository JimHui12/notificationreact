import React from 'react';
import {
    Route, 
    Redirect
  } from 'react-router-dom'
import NotificationDashBoard from '../Display/NotificationDashBoard';
import NotificationView from '../Display/NotificationView';



// export default ()=>((
//     <div>
//         <Route exact path="/" component={NotificationView}/>
//         <Route exact path="/notifications" component={NotificationView}/>
//         <Route exact path="/notifications/detail/:id" component={NotificationDashBoard}/>    
//     </div>
// ));
const ProtectedRoute = ({component:Privatecomponent, ...rest}) => <Route {...rest} render = { props => 
        <Redirect to={{pathname:'/',state:{from:props.location}}}/>
    }/>; 

const routes = [
    {
        exact:true,
        path:"/notifications",
        // sideNav:sideNav,
        main:NotificationView
    },
    {
        exact:true,
        path:"/notifications/detail/:id",
        //sideNav:sideNav,
        main:NotificationDashBoard
    }
];

export default () => ((
    <div>
        <Route exact path="/" component={NotificationView}/>
        {/* {routes.map((route,index) => (
            <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.sideNav} />
        ))} */}
        <main className="wf-container">
            { routes.map((route,index) => (
                <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.main}/> 
            ))}
        </main>
    </div>
));
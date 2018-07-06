import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Link
  } from 'react-router-dom'
import PersonalNotificationDashBoard from '../PersonalNotification/PersonalNotificationDashBoard';
import PersonalNotificationView from '../PersonalNotification/PersonalNotificationView';
import AssessmentNotificationDashBoard from '../AssessmentNotification/AssessmentNotificationDashBoard';
import AssessmentNotificationView from '../AssessmentNotification/AssessmentNotificationView';
import SchoolNotificationDashBoard from '../SchoolNotification/SchoolNotificationDashBoard';
import SchoolNotificationView from '../SchoolNotification/SchoolNotificationView';
import FacultyNotificationDashBoard from '../FacultyNotification/FacultyNotificationDashBoard';
import FacultyNotificationView from '../FacultyNotification/FacultyNotificationView';
import UniversityNotificationDashBoard from '../UniversityNotification/UniversityNotificationDashBoard';
import UniversityNotificationView from '../UniversityNotification/UniversityNotificationView';
import ClubNotificationDashBoard from '../ClubNotification/ClubNotificationDashBoard';
import ClubNotificationView from '../ClubNotification/ClubNotificationView';
import AddNewFormView from '../AddNew/AddNewFormView';


import '../styles';

// export default ()=>((
//     <div>
//         <Route exact path="/" component={NotificationView}/>
//         <Route exact path="/notifications" component={NotificationView}/>
//         <Route exact path="/notifications/detail/edit/:id" component={NotificationDashBoard}/>    
//     </div>
// ));
//https://reacttraining.com/react-router/web/example/sidebar

const routes = [
    {
        exact:true,
        path:"/personalnotifications",
        sideNav: () => <div>Personal Notification</div>,//SideNav,
        main:PersonalNotificationView
    },
    {
        path:"/personalnotifications/detail/edit/:id",
        sideNav: () => <div>NotificationDashBoard</div>, //SideNav,
        main:PersonalNotificationDashBoard
    },
    {
        exact:true,
        path:"/assessmentnotifications",
        sideNav: () => <div>Assessment Notification</div>,//SideNav,
        main:AssessmentNotificationView
    },
    {
        exact:true,
        path:"/assessmentnotifications/detail/edit/:id",
        sideNav: () => <div>NotificationDashBoard</div>, //SideNav,
        main:AssessmentNotificationDashBoard
    },
    {   
        exact: true,
        path:"/schoolnotifications",
        sideNav: () => <div>School Notification</div>,//SideNav,
        main:SchoolNotificationView       
    },
    {
        exact:true,
        path:"/schoolnotifications/detail/edit/:id",
        sideNav: () => <div>NotificationDashBoard</div>, //SideNav,
        main:SchoolNotificationDashBoard
    },
    {   
        exact: true,
        path:"/facultynotifications",
        sideNav: () => <div>Faculty Notification</div>,//SideNav,
        main:FacultyNotificationView       
    },
    {
        exact:true,
        path:"/facultynotifications/detail/edit/:id",
        sideNav: () => <div>NotificationDashBoard</div>, //SideNav,
        main:FacultyNotificationDashBoard
    },
    {   
        exact: true,
        path:"/universitynotifications",
        sideNav: () => <div>University Notification</div>,//SideNav,
        main:UniversityNotificationView       
    },
    {
        exact:true,
        path:"/universitynotifications/detail/edit/:id",
        sideNav: () => <div>NotificationDashBoard</div>, //SideNav,
        main:UniversityNotificationDashBoard
    },
    {   
        exact: true,
        path:"/clubnotifications",
        sideNav: () => <div>Club Notification</div>,//SideNav,
        main:ClubNotificationView       
    },
    {   
        exact: true,
        path:"/clubnotifications/detail/edit/:id",
        sideNav: () => <div>NotificationDashBoard</div>,//SideNav,
        main:ClubNotificationDashBoard      
    },
    {   
        exact: true,
        path:"/addnewform",
        sideNav: () => <div>Add New Notification</div>,//SideNav,
        main:AddNewFormView      
    },


];

// export default () => ((
//     <div>
//         <Route exact path="/" component={NotificationView}/>
//         {/* {routes.map((route,index) => (
//             <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.sideNav} />
//         ))} */}
//         <main className="wf-container">
//             { routes.map((route,index) => (
//                 <ProtectedRoute key={index} exact={route.exact} path={route.path} component={route.main}/> 
//             ))}
//         </main>
//     </div>
// ));

const SideNav = () => (
    <Router>
        <div className="container">
            <div className="nav-container">

                <nav className="side-navbar">
                    <p>Student Notification DashBoard</p>                 
                    <ul className="menu-list">

                        <li>
                            <Link to="/personalnotifications">Personal Notification</Link>
                        </li>
                        <li>
                            <Link to="/assessmentnotifications">Assessment Notification</Link>
                        </li>
                        <li>
                            <Link to="/schoolnotifications">School Notification</Link>
                        </li>
                        <li>
                            <Link to="/facultynotifications">Faculty Notification</Link>
                        </li>
                        <li>
                            <Link to="/universitynotifications">University Notification</Link>
                        </li>
                        <li>
                            <Link to="/clubnotifications">Club Notification</Link>
                        </li>
                        <li>
                            <Link to="/addnewform">Create New Notification</Link>
                        </li>
                    </ul>
                </nav>
  
                {routes.map((route, index) => (
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                    />
                ))}
            </div>
  
            <div className="notification-container">
                {routes.map((route, index) => (
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                    />
                ))}
            </div>
        </div>
    </Router>
  );
  
  export default  SideNav;
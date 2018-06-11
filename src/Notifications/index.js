import React,{Component } from "react";
import Header from '../components/Header';
import NotificationList from "./NotificationList";
import TopBar from '../components/TopBar';
import SideNav from '../components/SideNav'

class Notifications extends Component{
    render(){
        return(
            <div className="container-fluid">
            <TopBar/>
            <SideNav/>
            <div className="content-wrapper">
            <Header heading="Notifications"/>
            <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                           <NotificationList/>

                        </div>
                    </div>
                </section>
            </div>
            </div>
        );
    }
}

export default Notifications;
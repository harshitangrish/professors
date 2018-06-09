import React,{Component } from "react";
import Header from './Header';
import NotificationList from "./NotificationList";

class Notifications extends Component{
    render(){
        return(
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
        );
    }
}

export default Notifications;
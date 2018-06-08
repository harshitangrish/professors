import React, {Component} from "react";
import TopBar from './TopBar';
import SideNav from './SideNav' ;

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <TopBar />
                <SideNav  />
            </div>
        );
    }
}

export default Main;
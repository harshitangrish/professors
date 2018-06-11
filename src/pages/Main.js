import React, {Component} from "react";
import TopBar from '../component/TopBar';
import SideNav from '../component/SideNav' ;

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
import React, {Component} from "react";
import TopBar from './components/TopBar';
import SideNav from './components/SideNav' ;

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
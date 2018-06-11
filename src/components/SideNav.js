import React, {Component} from "react";
import {Link} from "react-router-dom";

class SideNav extends Component {
    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img
                        src="dist/img/AdminLTELogo.png"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{
                        opacity: '.8'
                    }}/>
                    <span className="brand-text font-weight-light">Admin</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src="dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2"
                                alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">ProfessorsHub</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false">
                            <li className="nav-item menu-open">
                                <a href="./index.html" className="nav-link active">
                                    <i className="nav-icon fa fa-dashboard"/>
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="./index.html" className="nav-link">
                                    <i className="nav-icon fa fa-th"/>
                                    <p>
                                        Widgets
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fa fa-pie-chart"/>
                                    <p>
                                        Charts
                                        <i className="right fa fa-angle-left"/>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-circle-o nav-icon"/>
                                            <p>ChartJS</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-circle-o nav-icon"/>
                                            <p>Flot</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-circle-o nav-icon"/>
                                            <p>Inline</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fa fa-users"/>
                                    <p>
                                        Total Users
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <Link to="/Rating" className="nav-link">
                                    <i className="nav-icon fa fa-star"/>
                                    <p>
                                        Rating Details
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fa fa-user"/>
                                    <p>
                                        User Profile
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/Notifications" className="nav-link">
                                    <i className="nav-icon fa fa-bell"/>
                                    <p>
                                        Notifications
                                    </p>
                                </Link>
                            </li>
                            <li><hr className="bg-light"/></li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fa fa-calendar"/>
                                    <p>
                                        Calendar
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fa fa-envelope-o"/>
                                    <p>
                                        Mailbox
                                        <i className="fa fa-angle-left right"/>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-circle-o nav-icon"/>
                                            <p>Inbox</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-circle-o nav-icon"/>
                                            <p>Compose</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fa fa-circle-o nav-icon"/>
                                            <p>Read</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

        );
    }
}

export default SideNav;
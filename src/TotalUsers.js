import React, {Component} from "react";
import SideNav from './SideNav';
import TopBar from './TopBar';
import Breadcrumb from './Breadcrumb';
import Card from "./Card";
import GradientCard from "./GradientCard";
class TotalUsers extends Component {
    render() {
        return (
            <div className="container-fluid">
                <TopBar/>
                <SideNav/>
                <div className="content-wrapper">
                    <Breadcrumb PageName="Total Users"/>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <Card
                                    class="col-lg-3 col-6"
                                    background="info"
                                    number="0000"
                                    heading="Total Users"
                                    icon="users"/>
                                <Card
                                    class="col-lg-3 col-6"
                                    background="success"
                                    number="0000"
                                    heading="Registered Users"
                                    icon="users"/>
                                <Card
                                    class="col-lg-3 col-6"
                                    background="warning"
                                    number="0000"
                                    heading="Active Users"
                                    icon="user"/>
                                <Card
                                    class="col-lg-3 col-6"
                                    background="danger"
                                    number="0000"
                                    heading="Professional Users"
                                    icon="male"/>

                            </div>
                            <div>
                                <h5 className="mt-4 mb-2">Professional users
                                </h5>
                                <div className="row">

                                    <GradientCard
                                        class="col-md-6 col-sm-6 col-12"
                                        background="danger"
                                        icon="bookmark-o"
                                        heading="Employed Teachers"
                                        number="0000"/>
                                    <GradientCard
                                        class="col-md-6 col-sm-6 col-12"
                                        background="warning"
                                        icon="bookmark-o"
                                        heading="Self-Employed Teachers"
                                        number="0000"/>

                                </div>
                            </div>

                            <div>
                                <h5 className="mt-4 mb-2">Employed Teachers 
                                </h5>
                                <div className="row">

                                    <GradientCard
                                        class="col-md-4 col-sm-6 col-12"
                                        background="success"
                                        icon="bookmark-o"
                                        heading="School"
                                        number="0000"/>
                                    <GradientCard
                                        class="col-md-4 col-sm-6 col-12"
                                        background="info"
                                        icon="bookmark-o"
                                        heading="College/University"
                                        number="0000"/>
                                    <GradientCard
                                        class="col-md-4 col-sm-6 col-12"
                                        background="warning"
                                        icon="bookmark-o"
                                        heading="Private Institute/Company"
                                        number="0000"/>


                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </div>

        );
    }
}

export default TotalUsers;
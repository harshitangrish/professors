import React, {Component} from "react";
import SideNav from '../component/SideNav';
import TopBar from '../component/TopBar';
import Breadcrumb from '../component/Breadcrumb';
import Card from "../component/Card";
import GradientCard from "../component/GradientCard";
import DataTable from "../component/DataTable";
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
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Professional Users
                                            </h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-widget="collapse">
                                                    <i className="fa fa-minus"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
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
                                    </div>
                                </div>

                            </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Employed Teachers
                                                </h3>
                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-widget="collapse">
                                                        <i className="fa fa-minus"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="row">
                                                    <GradientCard
                                                        class="col-md-4 col-sm-6 col-12"
                                                        background="warning"
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
                                                        background="success"
                                                        icon="bookmark-o"
                                                        heading="Private Institute/Company"
                                                        number="0000"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <DataTable />
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
import React, { Component } from "react";

const Table = (props) => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Rating Table</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{ width: 150 }}>
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover">
                                    <tbody><tr>
                                        <th>ID</th>
                                        <th>User</th>
                                        <th>Joining Date </th>
                                        <th>Status</th>
                                        <th>Ratings</th>
                                    </tr>
                                        <tr>
                                            <td>183</td>
                                            <td>John Doe</td>
                                            <td>11-7-2014</td>
                                            <td><span className="tag tag-success">Active</span></td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-danger" style={{ width: '30%' }} />
                                                </div>

                                            </td>
                                            <td>
                                            <span className="badge bg-success">30%</span>
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>219</td>
                                                <td>Alexander Pierce</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-warning">Registered</span></td>
                                                <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                                </div>

                                            </td>
                                            <td>
                                            <span className="badge bg-success">55%</span>
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>657</td>
                                                <td>Bob Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Professional</span></td>
                                                <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-danger" style={{ width: '90%' }} />
                                                </div>

                                            </td>
                                            <td>
                                            <span className="badge bg-success">90%</span>
                                            </td>
                                            </tr>
                                            <tr>
                                                <td>175</td>
                                                <td>Mike Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Active</span></td>
                                                <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-success" style={{ width: '70%' }} />
                                                </div>

                                            </td>
                                            <td>
                                            <span className="badge bg-success">70%</span>
                                            </td>
                                            </tr>
                                        
                            </tbody></table>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            );
        }
export default Table;
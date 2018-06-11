import React, { Component } from "react";

const NotificationList = (props) => {
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        <i className="fa fa-bell" />
                        Notifications
    </h3>
                    <div className="card-tools">
                        <ul className="pagination pagination-sm">
                            <li className="page-item"><a href="#" className="page-link">«</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">»</a></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="todo-list">
                        <li>
                            <span className="handle">
                                <i className="fa fa-comment" />
                                {/* <i className="fa fa-ellipsis-v" /> */}
                            </span>
                            <input type="checkbox" defaultValue name />
                            <span className="text">4 New Messages!</span>
                            <small className="badge badge-danger"><i className="fa fa-clock-o" /> 2 mins</small>
                            <div className="tools">
                                <i className="fa fa-edit" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </li>
                        <li>
                            <span className="handle">
                                <i className="fa fa-flag" />
                                {/* <i className="fa fa-ellipsis-v" /> */}
                            </span>
                            <input type="checkbox" defaultValue name />
                            <span className="text">2 Spam/ Reports!</span>
                            <small className="badge badge-info"><i className="fa fa-clock-o" /> 4 hours</small>
                            <div className="tools">
                                <i className="fa fa-edit" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </li>
                        <li>
                            <span className="handle">
                                <i className="fa fa-user-plus" />
                                {/* <i className="fa fa-ellipsis-v" /> */}
                            </span>
                            <input type="checkbox" defaultValue name />
                            <span className="text">15 New Users joined!</span>
                            <small className="badge badge-warning"><i className="fa fa-clock-o" /> 1 day</small>
                            <div className="tools">
                                <i className="fa fa-edit" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </li>
                        <li>
                            <span className="handle">
                                <i className="fa fa-wechat" />
                                {/* <i className="fa fa-ellipsis-v" /> */}
                            </span>
                            <input type="checkbox" defaultValue name />
                            <span className="text">5 Unread Messages!</span>
                            <small className="badge badge-success"><i className="fa fa-clock-o" /> 3 days</small>
                            <div className="tools">
                                <i className="fa fa-edit" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </li>
                        <li>
                            <span className="handle">
                                <i className="fa fa-star" />
                                {/* <i className="fa fa-ellipsis-v" /> */}
                            </span>
                            <input type="checkbox" defaultValue name />
                            <span className="text">20 Recent Ratings!</span>
                            <small className="badge badge-primary"><i className="fa fa-clock-o" /> 1 week</small>
                            <div className="tools">
                                <i className="fa fa-edit" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </li>
                        <li>
                            <span className="handle">
                                <i className="fa fa-graduation-cap" />
                                {/* <i className="fa fa-ellipsis-v" /> */}
                            </span>
                            <input type="checkbox" defaultValue name />
                            <span className="text">30 Professional users joined!</span>
                            <small className="badge badge-secondary"><i className="fa fa-clock-o" /> 1 month</small>
                            <div className="tools">
                                <i className="fa fa-edit" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer clearfix">
                    <button type="button" className="btn btn-info float-right"><i className="fa fa-plus" /> Add item</button>
                </div>
            </div>
        </div>
    );
}

export default NotificationList;
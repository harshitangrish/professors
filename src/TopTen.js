import React,{Component} from "react";

const TopTen=(props)=>{
    return(
        <div className="col-md-12">
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">Top 10 Rated Professors</h3>
      <div className="card-tools">
        <span className="badge badge-danger">000 New Members</span>
        <button type="button" className="btn btn-tool" data-widget="collapse"><i className="fa fa-minus" />
        </button>
        <button type="button" className="btn btn-tool" data-widget="remove"><i className="fa fa-times" />
        </button>
      </div>
    </div>
    <div className="card-body p-0">
      <ul className="users-list clearfix">
        <li>
          <img src="dist/img/user1-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Alexander Pierce</a>
          <span className="users-list-date">Today</span>
        </li>
        <li>
          <img src="dist/img/user8-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Norman</a>
          <span className="users-list-date">Yesterday</span>
        </li>
        <li>
          <img src="dist/img/user7-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Jane</a>
          <span className="users-list-date">12 Jan</span>
        </li>
        <li>
          <img src="dist/img/user6-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">John</a>
          <span className="users-list-date">12 Jan</span>
        </li>
        <li>
          <img src="dist/img/user2-160x160.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Alexander</a>
          <span className="users-list-date">13 Jan</span>
        </li>
        <li>
          <img src="dist/img/user5-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Sarah</a>
          <span className="users-list-date">14 Jan</span>
        </li>
        <li>
          <img src="dist/img/user4-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Nora</a>
          <span className="users-list-date">15 Jan</span>
        </li>
        <li>
          <img src="dist/img/user3-128x128.jpg" alt="User Image" />
          <a className="users-list-name" href="#">Nadia</a>
          <span className="users-list-date">15 Jan</span>
        </li>
      </ul>
    </div>
    <div className="card-footer text-center">
      <a href="javascript::">View All Users</a>
    </div>
  </div>
</div>

    );
}

export default TopTen;
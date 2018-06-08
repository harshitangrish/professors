import React from "react";

const Card = (props) => {

    return (
        <div className={props.class}>
            <div className={"small-box bg-" +props.background}>
                <div className="inner">
                    <h3>{props.number}</h3>
                    <p>{props.heading}</p>
                </div>
                <div className="icon">
                    <i className={"fa fa-"+props.icon}/>
                </div>
                <a href="#" className="small-box-footer">More info
                    <i className="fa fa-arrow-circle-right"/></a>
            </div>
        </div>
    );

}

export default Card;
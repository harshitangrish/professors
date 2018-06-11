import React from 'react';

const GradientCard = (props) => {
    return (
        <div className={props.class}>
            <div className={"info-box bg-" +props.background+"-gradient"}>
                <span className="info-box-icon"><i className={"fa fa-"+props.icon}/></span>
                <div className="info-box-content">
                    <span className="info-box-text">{props.heading}</span>
                    <span className="info-box-number">{props.number}</span>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{
                            width: '70%'
                        }}/>
                    </div>
                    <span className="progress-description">
                        70% Increase in 30 Days
                    </span>
                </div>
            </div>
        </div>

    );
}

export default GradientCard;
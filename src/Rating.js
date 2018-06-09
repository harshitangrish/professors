import React, { Component } from "react";
import Header from './Header';
import RatingCard from "./RatingCard";
import TopTen from './TopTen';

class Rating extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Header heading="Rating Details" />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <RatingCard background="danger" number="Top 10" heading="Rated Professors" icon="trophy" />
                            <RatingCard background="success" number="Rated" heading="Professors" icon="thumbs-up" />
                            <RatingCard background="warning" number="Unrated" heading="Professors" icon="thumbs-down" />
                            <RatingCard background="primary" number="Latest" heading="Ratings" icon="check" />

                        </div>
                    </div>
                </section>
                <TopTen/>
            </div>

        );
    }
}

export default Rating;
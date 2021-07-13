import React, { Component } from 'react';
import LinksGroup from "../../Components/LinksGroup/LinksGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
    render() {
        const { data } = this.props;
        const { sl } = this.props;

        return (
            <footer className="py-5 border-top">
                <div className="container">
                    <div className="row">
                        {data.map((column, index) => {
                            return <LinksGroup key={index} column={column} />
                        })}
                        <div className="col-12 col-md-6 offset-md-3 text-center py-5">
                            {sl.map((value, index) => {
                                return <a href={value.slURL} className="btn text-muted" key={index}>
                                    <FontAwesomeIcon icon={value.icon} />
                                </a>
                            })}
                            <br />
                            <small className="text-secondary">Copyright 2017 Motif Tools BV.All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

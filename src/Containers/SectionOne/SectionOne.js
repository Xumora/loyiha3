import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Title from '../../Components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default class SectionOne extends Component {
    render() {
        return (
            <section className="bg-white py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 text-center">
                            <Title tname="Get ahead of the pack." text="Framer is the best way to create 
                            interactive designs from start to finish." tnameC="display-4" textC="text-muted fs-4 px-5 mx-4" />


                            <div class="input-group my-5 px-5">
                                <input type="text" class="form-control" placeholder="Email"></input>
                                <Button color="primary">Start your free trial</Button>
                            </div>

                            <a href="#" className="btn text-primary my-5">
                                <FontAwesomeIcon icon={faPlayCircle} /> Watch intro video
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-2">
                            <img src="./images/img1.png" alt="?" className="w-100" />
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <img src="./images/img2.png" alt="?" className="w-100" />
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <img src="./images/img1.png" alt="?" className="w-100" />
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <img src="./images/img2.png" alt="?" className="w-100" />
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <img src="./images/img1.png" alt="?" className="w-100" />
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <img src="./images/img2.png" alt="?" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

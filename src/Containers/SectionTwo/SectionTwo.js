import React, { Component } from 'react';
import Title from "../../Components/Title/Title";
import { Button } from 'reactstrap';

export default class SectionTwo extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 bg-primary text-center py-5">
                            <Title tname="Why Framer" text="Easily bring designs to life with code, then share them with teammates."
                                tnameC="display-5 mt-5 text-white" textC="text-white fs-5 px-5 m-4 " />
                            <Button color="light" className="mb-5">See Features</Button>
                            <Button color="info" className="ms-3 mb-5 text-white">Get Started</Button>
                        </div>
                        <div className="col-12 col-md-6 text-center py-5">
                            <Title tname="Subscribe Today" text="Get 20% off when you choose our yearly subscription plan."
                                tnameC="display-5 mt-5 text-white" textC="text-white fs-5 px-5 m-4 " />
                            <Button color="secondary" className="mb-5">View pricing</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

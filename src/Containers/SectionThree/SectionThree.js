import React, { Component } from 'react';
import Title from "../../Components/Title/Title";
import { Button } from 'reactstrap';

export default class SectionThree extends Component {
    render() {

        const pi = ["./images/snapchat.png", "./images/adobe.png", "./images/xero.png", "./images/snapchat.png",
            "./images/adobe.png", "./images/xero.png", "./images/snapchat.png", "./images/adobe.png", "./images/xero.png"];

        return (
            <section className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2 text-center">
                            <Title tname="Framer is for teams, too." text="Join a growing list of companies who use Framer to make all 
                            the products you know and love." tnameC="display-4 text-white" textC="text-white fs-4 px-5 mx-4" />
                            <Button color="light" className="my-5">Learn about Enterprise</Button>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-between px-5">
                            {pi.map((img) => {
                                return <div className="img-box mt-5">
                                    <img src={img} alt="?" className="w-100" />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react';
import "./Header.css"
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {

    openMenu = (e) => {
        e.preventDefault();
        const submenu = document.getElementById("submenu");
        console.log(submenu);
        let j = submenu.classList.value.indexOf("d-none");
        if (j == -1) {
            submenu.classList.add("d-none");
        } else {
            submenu.classList.remove("d-none");
        }
    }


    render() {
        return (
            <header className="bg-white border-bottom fixed-top" id="navigation">
                <div className="container-fluid px-5 py-3">
                    <div className="row">
                        <div className="col-6 col-lg-3 d-flex align-items-center">
                            <img src="./Images/logo.png" alt="?" />
                        </div>
                        <div className="col-lg-9 d-none d-lg-flex justify-content-end align-items-center bg-white" id="submenu">
                            <div>
                                <a href="#" className="btn text-muted p-0 me-lg-3 mt-2">Features</a>
                                <a href="#" className="btn text-muted p-0 me-lg-3 mt-2">Get started</a>
                                <a href="#" className="btn text-muted p-0 me-lg-3 mt-2">Community</a>
                                <a href="#" className="btn text-muted p-0 me-lg-3 mt-2">Blog</a>
                                <a href="#" className="btn text-muted p-0 me-lg-3 mt-2">Enterprice</a>
                                <a href="#" className="btn text-muted p-0 me-lg-3 mt-2">Pricing</a>
                                <Button color="primary" className='HB mt-2'><FontAwesomeIcon icon={faArrowAltCircleDown} /> Free Trial</Button>
                            </div>
                        </div>
                        <div className="col-6 d-flex d-lg-none align-items-center justify-content-end">
                            <a href="#" className="btn text-muted fs-5">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                            <a href="#" className="btn text-muted fs-5">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                            <a href="#" className="btn text-muted fs-5" id="menu" type="button" onClick={(e) => { this.openMenu(e) }}>
                                <FontAwesomeIcon icon={faBars} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

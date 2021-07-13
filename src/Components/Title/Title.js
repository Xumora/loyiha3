import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        let text = this.props;
        console.log(text);
        return (
            <div className="text-center">
                <h1 className={text.tnameC + ' fw-bold'}>
                    {text.tname}
                </h1>
                <p className={text.textC}>
                    {text.text}
                </p>
            </div >
        )
    }
}

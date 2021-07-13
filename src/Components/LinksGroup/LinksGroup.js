import React, { Component } from 'react'

export default class LinksGroup extends Component {
    render() {
        const { column } = this.props;

        return (
            <div className={column.colProps || `col-6 col-md-4 col-lg-2 mb-4`}>
                <h6 className="text-white text-start ps-2">{column.title}</h6>
                <ul className="list-group">
                    {column.list.map((value, index) => {
                        return <li className="text-start" key={index}>
                            <a href={value.url} className="btn text-muted text-start">{value.title}</a>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

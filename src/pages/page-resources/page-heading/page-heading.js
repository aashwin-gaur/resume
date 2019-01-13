import React, { Component } from 'react';
import './page-heading.scss'

export default class PageHeading extends Component {
    render() {
        return (
            <div>
                <h1 className="page-heading">
                    {this.props.name}
                </h1>
            </div >
        );
    }
}


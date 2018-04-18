import React, { Component } from 'react';

const headerStyle = {position: 'absolute', backgroundColor: 'black', width: 100 + "%", height: 200 + "px", textAlign: "center"};

export default class Header extends Component {

    render() {
        return (
            <div className="container" style={headerStyle}>This is Header</div>
        );
    }
}

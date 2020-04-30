import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return <img src={this.props.picnic} alt="Not-Image" height="300px" width="300px"/>
    }
}

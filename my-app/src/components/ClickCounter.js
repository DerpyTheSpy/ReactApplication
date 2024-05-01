import React, { Component } from 'react';
import withCounter from './withCounter'


class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return <button onClick={incrementCount}>Clicked {this.props.count} times</button>   
    }
}

export default withCounter(ClickCounter);
import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';


class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kim'
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Kim'
            });
        }, 2000);
    }

    render() {
        console.log('Parent Component render');
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/*<RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComp;
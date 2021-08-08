import React, { Component } from 'react';
import withCounter from './withCounter';


class HoverCounter extends Component {
    
    render() {
        const {count,increment}=this.props
        return (
            <div>
            <button onMouseOver={increment}>increment {count}</button> 
            </div>
        );
    }
}

export default withCounter(HoverCounter);
import React, { Component } from 'react';

class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    };

    handleClick = (event) => {
        this.setState(this.state.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;


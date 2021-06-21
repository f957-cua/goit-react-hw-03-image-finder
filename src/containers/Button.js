import React, { Component } from 'react';
import ButtonView from '../component/Button'

class Button extends Component {
    state = {
        scrollHeight: ''
    }
    onButtonClick = () => {
        this.props.onClick();
        this.setState({ scrollHeight: document.body.clientHeight });
    }
    
    componentDidUpdate(prevProps, prevState) {
        this.onScroll();
    }

    onScroll = () => {
        window.scrollTo({
            top: this.state.scrollHeight,
            behavior: 'smooth',
        });
    }

    render() { 
        return (
            <ButtonView
                onClick={this.onButtonClick}
            />
         );
    }
}
 
export default Button;
import React, { Component } from 'react';
import HeaderView from '../component/Header';


class Header extends Component {
    render() {
        const children = this.props.children;
        return (
        <HeaderView>
            {children}
        </HeaderView>
    );
    }
}

export default Header;
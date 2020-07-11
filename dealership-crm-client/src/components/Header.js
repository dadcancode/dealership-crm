import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <div>
                <span onClick={() => {
                    this.props.changeView('addProspect')
                }}>Add Prospect</span>
                <span>Log Out</span>
            </div>
        )
    }
}

export default Header;
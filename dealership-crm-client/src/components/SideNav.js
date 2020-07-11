import React, {Component} from 'react';
import '../CSS/SideNav.css';

class SideNav extends Component {
    render () {
        return (
            <div className="side-nav">
                <div>
                    Organizer
                </div>
                <div onClick={() => {
                    this.props.changeView('prospects')
                }}>
                    Prospects
                </div>
                <div>
                    Inventory
                </div>
            </div>
        )
    }
}

export default SideNav;
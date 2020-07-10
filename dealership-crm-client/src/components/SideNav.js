import React, {Component} from 'react';
import '../CSS/SideNav.css';

class SideNav extends Component {
    render () {
        return (
            <div className="side-nav">
                <div>
                    Organizer
                </div>
                <div>
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
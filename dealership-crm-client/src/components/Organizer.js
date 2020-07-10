import React, {Component} from 'react';

import '../CSS/Organizer.css';

class Organizer extends Component {
    render () {
        return (
            <div>
                <div className="today-cont">
                    <h5>Today</h5>
                    <div className="todays-tasks"></div>
                </div>
                <div>
                    <h5>This Week</h5>
                    <div className="this-weeks"></div>
                </div>
            </div>
        )
    }
}

export default Organizer;
import React, { Component } from 'react';
import ProspectItem from '../components/ProspectItem.js';

class Prospects extends Component {
    render () {
        return (
            <div>
                {this.props.prospects.map((prospect, index) => {
                    return (
                        <ProspectItem prospect={prospect} vehicle={prospect.vehicle} getProspect={this.props.getProspect}/>
                    )
                })}
            </div>
        )
    }
}

export default Prospects;
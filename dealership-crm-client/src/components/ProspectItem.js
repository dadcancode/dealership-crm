import React, { Component } from 'react';

class ProspectItem extends Component {
    render () {
        return (
            <div className="prospect-item">
                <span>
                    {this.props.prospect.first_name} {this.props.prospect.last_name}
                </span>
                <span>
                    {this.props.prospect.phone}
                </span>
                <span>
                    {this.props.vehicle.year + this.props.vehicle.make + this.props.vehicle.model}
                </span>
            </div>
        )
    }
}

export default ProspectItem;
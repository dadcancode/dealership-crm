import React, { Component } from 'react';

class VehSel extends Component {

    render () {
        return (
            <div>
                <div>
                    <label htmlFor="year_sel">Year:</label>
                    <select id="year_sel" name="year_sel" onChange={this.props.handleYearSel}>
                        <option value='none'>--Select--</option>
                        {this.props.years.map((year) => {
                            return (
                                <option value={year.year}>{year.year}</option>
                            )
                        })}
                    </select>
                </div>
                {this.props.sel_year !== 'none' && 
                    <div>
                        <label htmlFor="make_sel">Make:</label>
                        <select id="make_sel" name="make_sel" onChange={this.props.handleMakeSel}>
                            <option value='none'>--Select--</option>
                            {this.props.makes.map((makes) => {
                                return (
                                    <option value={makes.make}>{makes.make}</option>
                                )
                            })}
                        </select>
                    </div>
                }
                {this.props.sel_make !== 'none' &&
                    <div>
                        <label htmlFor="model_sel">Model:</label>
                        <select id="model_sel" name="model_sel" onChange={this.props.handleModelSel}>
                            <option value='none'>--Select--</option>
                            {this.props.models.map((model) => {
                                return (
                                    <option value={model.id}>{model.model}</option>
                                )
                            })}
                        </select>
                    </div>
                }
            </div>
        )
    }
}

export default VehSel;
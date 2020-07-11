import React, { Component } from 'react';
import VehSel from './VehSel';

class AddProspect extends Component {
    state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        status: 'new',
        vehicle_id: -Infinity,
        years: [],
        makes: [],
        models: [],
        sel_year: 'none',
        sel_make: 'none',
        sel_model: 'none'
    }

    getYears = () => {
        fetch('http://localhost:3000/vehicles')
            .then(resp => resp.json())
            .then(json => this.setState({
                years: json.vehicle_years
            }));
    }

    componentDidMount = () => {
        this.getYears();
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleYearSel = (event) => {
        let e = document.getElementById('year_sel');
        let selVal = e.options[e.selectedIndex].value;
        fetch(`http://localhost:3000/vehicles/get_makes/${selVal}`)
            .then(resp => resp.json())
            .then(json => this.setState({
                sel_year: selVal,
                makes: json
            }))
    }

    handleMakeSel = (event) => {
        let e = document.getElementById('make_sel');
        let selVal = e.options[e.selectedIndex].value;
        fetch(`http://localhost:3000/vehicles/get_models/${this.state.sel_year}/${selVal}`)
            .then(resp => resp.json())
            .then(json => this.setState({
                models: json,
                sel_make: selVal
            }))
    }

    handleModelSel = (event) => {
        let e = document.getElementById('model_sel');
        let selVal = e.options[e.selectedIndex].value;
        this.setState({
            vehicle_id: parseInt(selVal)
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/users/${this.props.userId}/prospects`, {
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone: this.state.phone,
                email: this.state.email,
                status: 'new',
                vehicle_id: this.state.vehicle_id
            }),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.props.updateProspects(this.props.user)
            this.props.changeView('prospects')
        })
    }

    render () {
        return (
            <div>
                <h5>Add Prospect</h5>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="first_name">First Name:</label>
                        <input type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text" id="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="first_name">Email:</label>
                        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <VehSel years={this.state.years} handleYearSel={this.handleYearSel} makes={this.state.makes} sel_year={this.state.sel_year} handleMakeSel={this.handleMakeSel} models={this.state.models} sel_make={this.state.sel_make} handleModelSel={this.handleModelSel}/>
                    <div>
                        <input type="submit" value="Add Prospect"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProspect;
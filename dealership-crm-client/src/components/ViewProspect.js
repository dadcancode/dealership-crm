import React, { Component } from 'react';
import TaskItem from '../components/TaskItem.js';

import '../CSS/ViewProspect.css';

class ViewProspect extends Component {

    state = {
        currTaskIndex: 0
    }

    getCurrTaskIndex = () => {
        for(let i = 0; i < this.props.prospect.task_completed.length; i++) {
            if(this.props.prospect.task_completed[i] === false) {
                this.setState({
                    currTaskIndex: i
                });
                break;
            }
        }
    }

    componentDidMount = () => {
        this.getCurrTaskIndex();
    }

    render () {
        let completed_tasks_ind = [];
        for(let x = 0; x < this.props.prospect.task_completed.length; x++) {
            if(this.props.prospect.task_completed[x] !== false) {
                completed_tasks_ind.push(x)
            }
        }
        console.log(completed_tasks_ind)
        return (
            <div className="prospect-view">
                <div className="opp-info">
                    <div className="prospect-info">
                        <div className="pros-name">
                            {`${this.props.prospect.first_name} ${this.props.prospect.last_name}`}
                        </div>
                        <div className="pros-phone">
                            {this.props.prospect.phone}
                        </div>
                        <div className="pros-email">
                            {this.props.prospect.email}
                        </div>
                    </div>
                    <div className="veh-info">
                        <div className="veh-year">
                            Year: {this.props.prospect.vehicle.year}
                        </div>
                        <div className="veh-make">
                            Make: {this.props.prospect.vehicle.make}
                        </div>
                        <div className="veh-model">
                            Model: {this.props.prospect.vehicle.model}
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="next-tasks">
                        <TaskItem ind={this.state.currTaskIndex} prospect={this.props.prospect} openTask={this.props.openTask}/>
                    </div>
                    <div className="completed-tasks">
                        {completed_tasks_ind.map((val) => {
                            return <TaskItem ind={val} prospect={this.props.prospect} openTask={this.props.openTask} />
                        })}
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProspect;
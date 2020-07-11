import React, { Component } from 'react';

class TaskItem extends Component {

    state = {
        taskDate: new Date(this.props.prospect.created_at)
    }


    render () {
        return (
            <div>
                <div>
                    {this.props.prospect.task_type[this.props.ind]}
                </div>
                <div>
                    {this.state.taskDate.toDateString() + parseInt(this.props.prospect.task_due_dates[this.props.ind])}
                </div>
                {this.props.prospect.task_completed[this.props.ind] === false?
                    <div id={this.props.ind} onClick={(event) => {
                        this.props.openTask(event)
                    }}>
                        Complete
                    </div>
                    :
                    <div id={this.props.ind} onClick={this.props.openTask}>
                        View
                    </div>
                }
            </div>
        )
    }
}

export default TaskItem;
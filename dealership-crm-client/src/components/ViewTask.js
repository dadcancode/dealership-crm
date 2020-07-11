import React, {Component} from 'react';

class ViewTask extends Component {
    render () {
        let dueDate = new Date(this.props.prospect.created_at)
        dueDate = dueDate + this.props.prospect.task_due_dates[this.props.ind]
        return (
            <div>
                <div>
                    {this.props.prospect.task_type[this.props.ind]}
                </div>
                <div>
                    {dueDate}
                </div>
            </div>
        )
    }
}

export default ViewTask;
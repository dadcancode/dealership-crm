import React, {Component} from 'react';

class CompleteTask extends Component {
    render () {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="taskNotes">Notes:</label>
                        <textarea id="taskNotes" name="taskNotes"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Complete Task" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CompleteTask;
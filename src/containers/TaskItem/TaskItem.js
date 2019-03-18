import React, { Component } from 'react';
import { connect } from 'react-redux';
import editTask from '../../store/actions/editTask/editTask';

import Input from '../../components/UI/Input/Input';

import editIcon from '../../assets/images/edit.png';
import './TaskItem.css';

class TaskItem extends Component {

    state = {
        isEdit: false,
        status: this.props.status,
        text: this.props.text
    };

    editTaskHandler = () => this.setState({ isEdit: true });

    taskChangeHandler = ({ target: { name, value } }) => this.setState({ [name]: value });

    sendTaskHandler = (id, data, params) => {
        this.props.editTask(id, data, params);
        this.setState({
            isEdit: false
        });
    };

    render() {
        const { isAdmin } = localStorage;
        const { isEdit, status, text } = this.state;
        const { img, username, email, id, params, text: correctText, status: correctStatus } = this.props;
        const statusOptions = [
            { value: "0", text: "In Progress" },
            { value: "10", text: "Done" }
        ];

        return (
            <div className="task">
                <img className="task--photo" src={img} alt="task-header" />
                <div className="task_info">
                    <div className="task_item">
                        <span>User Name</span>
                        <span>{username}</span>
                    </div>
                    <div className="task_item">
                        <span>Email</span>
                        <span>{email}</span>
                    </div>
                    <div className="task_item">
                        <span>Status</span>
                        {isEdit
                            ? <Input
                                inputName="select"
                                name="status"
                                value={status}
                                options={statusOptions}
                                change={this.taskChangeHandler} />
                            : <span>{correctStatus ? 'Done' : 'In Progress'}</span>}
                    </div>
                    <div className="task_item">
                        <span>Task</span>
                        {isEdit
                            ? <Input
                                inputClassName="edit--textarea"
                                inputName="textarea"
                                name="text"
                                value={text}
                                change={this.taskChangeHandler} />
                            : <span className="task--text">{correctText}</span>}
                    </div>
                </div>
                <div>
                    {isAdmin === '1'
                        ? <Input
                            inputName="button"
                            inputClassName="Edit"
                            click={this.editTaskHandler}
                            buttonImg={<img src={editIcon} alt="img" className="edit--icons" />} />
                        : null}
                    {isEdit
                        ? <Input
                            inputName="button"
                            inputClassName="save--btn"
                            click={() => this.sendTaskHandler(id, { status, text }, params)}
                            buttonText='Save' />
                        : null}
                </div>
            </div>
        );
    }
}

export default connect(null, { editTask })(TaskItem);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import addTask from '../../store/actions/addTask/addTask';

import Input from '../../components/UI/Input/Input';

import './AddTask.css';

class AddTask extends Component {

    state = {
        user_name: '',
        email: '',
        task: '',
        image: []
    };

    inputChangeHandler = ({ target: { name, value } }) => this.setState({ [name]: value });

    fileChangeHandler = ({ target: { files } }) => this.setState({ image: files[0] });

    addTaskHandler = () => {
        const { history, addTask } = this.props;
        addTask(this.state);
        history.push("/");
    };

    render() {
        const { user_name, email, task, image } = this.state;
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const isValid = pattern.test(email) && task.length && user_name.length;
        
        return (
            <div className="addtask__wrraper">
                <div className="add_task">
                    <Input
                        inputName="text"
                        inputClassName="user_info"
                        name="user_name"
                        placeholder="User Name"
                        value={user_name}
                        change={this.inputChangeHandler} />
                    <Input
                        inputName="text"
                        inputClassName="user_info"
                        type="email"
                        name="email"
                        placeholder="User Email"
                        value={email}
                        change={this.inputChangeHandler} />
                    <Input
                        inputName="textarea"
                        inputClassName="textarea"
                        name="task"
                        value={task}
                        change={this.inputChangeHandler} />
                    <Input
                        inputName="text"
                        type="file" accept="image/x-png,image/gif,image/jpeg"
                        filename={image}
                        name="image"
                        change={this.fileChangeHandler} />
                    <Input
                        inputName="button"
                        inputClassName="add_task__button"
                        name="add_task"
                        isValid={!isValid}
                        click={this.addTaskHandler}
                        buttonText={"Add Task"} />
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, { addTask })(AddTask));
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Input from '../../components/UI/Input/Input';

import './SignIn.css';

class SignIn extends Component {

    state = {
      login: '',
      password: '',
      isAdmin: 0,
      isError: false
      };

    inputChangeHandler = ({ target: { name, value } }) => {
      this.setState({
        [name]: value,
        isError: false
      });
    };

    loginHandler = () => {
      const { login, password } = this.state;
      const { isAdmin } = this.props;
      const { history } = this.props;

      if (login === 'admin' && password === '123') {
        localStorage.setItem('isAdmin', 1);
        this.setState({
          isAdmin,
          isError: false
        });
        history.push("/");
      } else {
        this.setState({ isError: true }, () => {
          setTimeout(() => {
            this.setState({ isError: false });
          }, 1000);
        });
      }
    };

    logoutHandler = () => {
      const { isAdmin } = localStorage;

      localStorage.setItem('isAdmin', 0);
      this.setState({
        isAdmin,
        adminName: '',
        adminPass: ''
      })
    };

    render() {
      const { isAdmin } = localStorage;
      const { login, password, isError } = this.state;

      if (isAdmin === '1') {
        return (
          <div className="AddTaskContainer">
            <Input
              click={this.logoutHandler}
              inputClassName='add_task__button'
              inputName="button"
              buttonText="Logout" />
          </div>
        );
      }

      return (
        <div className="login__wrraper">
          <div className="login">
            <Input
              inputName="text"
              inputClassName={isError ? "shake" : "user_info"}
              name="login"
              value={login} placeholder="Login" change={this.inputChangeHandler} />
            <Input
              inputName="text"
              inputClassName={isError ? "shake" : "user_info"}
              name="password"
              type="password"
              placeholder="password"
              value={password}
              change={this.inputChangeHandler} />
            <Input
              inputName="button"
              inputClassName='add_task__button'
              buttonText="Login"
              click={this.loginHandler} />
          </div>
        </div>
      );
    }
}

export default withRouter(SignIn);
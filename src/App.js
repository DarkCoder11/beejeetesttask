import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './containers/SignIn/SignIn';
import AddTask from './containers/AddTask/AddTask';
import TaskList from './containers/TaskList/TaskList';
import Navigation from './components/UI/Navigation/Navigation';

const app = () => (
  <>
    <Navigation />
    <Switch>
      <Route path="/addTask" exact component={AddTask} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/" component={TaskList} />
    </Switch>
  </>
);

export default app;
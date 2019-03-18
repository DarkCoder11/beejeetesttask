import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTaskList from '../../store/actions/getTaskList/getTaskList';

import TaskItem from '../TaskItem/TaskItem';
import Pagination from "react-js-pagination";
import FilterBar from '../../components/FilterBar/FilterBar';

import './TaskList.css';

class TaskList extends Component {

    state = {
        sort_field: 'id',
        sort_direction: 'asc',
        page: 1,
    };

    componentDidMount() {
        this.props.getTaskList(this.state);
    };

    filterChangeHandler = ({ target: { name, value } }) => this.setState({ [name]: value });

    pageChangeHandler = (page) => this.setState({ page }, () => this.props.getTaskList(this.state));

    render() {
        const { taskList } = this.props;
        const { page } = this.state;

        return (
            <>
                <FilterBar filterChangeHandler={this.filterChangeHandler} sortItems={this.state} />
                <div className="container">
                    {Object.keys(taskList).length && taskList.tasks.length
                        ? taskList.tasks.map(task =>
                            <TaskItem
                                key={task.id}
                                email={task.email}
                                id={task.id}
                                img={task.image_path}
                                status={task.status}
                                text={task.text}
                                username={task.username}
                                params={this.state}
                            />)
                        : null}
                </div>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={3}
                    onChange={this.pageChangeHandler}
                    totalItemsCount={taskList.total_task_count}
                    hideFirstLastPages
                    nextPageText="Next"
                    prevPageText="Prev"
                    className="pagination"
                    activeLinkClass="active"
                />
            </>
        );
    }
}

const mapStateToProps = ({ taskList }) => ({ taskList });

export default connect(mapStateToProps, { getTaskList })(TaskList);
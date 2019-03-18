import React from 'react';
import { connect } from "react-redux";
import sortData from '../../store/actions/sortData/sortData';

import Input from '../UI/Input/Input';

import './FilterBar.css';

const filterBar = ({ sortData, sortItems, filterChangeHandler }) => {

    const sortFieldOptions = [
        { value: "id", text: "Id" },
        { value: "username", text: "Username" },
        { value: "email", text: "Email" },
        { value: "status", text: "Status" }
    ];

    const sortDirectionOptions = [
        { value: "asc", text: "Asc" },
        { value: "desc", text: "Desc" }
    ];

    return (
        <div className="container">
            <div className="sortlist_container">
                <Input
                    inputClassName="filter-radius"
                    inputName="select"
                    name="sort_field"
                    value={sortItems.sort_field}
                    change={filterChangeHandler}
                    options={sortFieldOptions} />
                <Input
                    inputClassName="filter-radius"
                    inputName="select"
                    name="sort_direction"
                    value={sortItems.sort_direction}
                    change={filterChangeHandler}
                    options={sortDirectionOptions} />
                <Input
                    inputClassName="filter-radius"
                    inputName="button"
                    name="filter"
                    click={() => sortData(sortItems)}
                    buttonText={"Filter"} />
            </div>
        </div>
    );
};

export default connect(null, { sortData })(filterBar);
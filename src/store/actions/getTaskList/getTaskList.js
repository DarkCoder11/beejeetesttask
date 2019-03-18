import API from "../../../API";
import sendTaskListToStore from '../sendTaskListToStore/sendTaskListToStore';

const getTaskList = ({ sort_field, sort_direction, page }) => (
    async dispatch => {
        const { data: { message: taskList } } = await API.get('?developer=HrantAbrahamyan', {
            params: {
                sort_field,
                sort_direction,
                page
            }
        });
        dispatch(sendTaskListToStore(taskList));
    }
);

export default getTaskList;
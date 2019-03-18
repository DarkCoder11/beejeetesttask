import API from "../../../API";
import sendTaskListToStore from '../sendTaskListToStore/sendTaskListToStore';

const sortData = ({ page, sort_field, sort_direction }) => (
    async dispatch => {
        const { data: { message: taskList } } = await API.get('?developer=HrantAbrahamyan', {
            params: {
                page,
                sort_field,
                sort_direction
            }
        });
        dispatch(sendTaskListToStore(taskList));
    }
);

export default sortData;
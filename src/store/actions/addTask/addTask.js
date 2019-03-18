import API from '../../../API';

const addTask = ({ user_name, email, task, image }) => {
    const formData = new FormData();
    formData.set('username', user_name);
    formData.set('email', email);
    formData.set('text', task);
    formData.append('image', image);

    return async () => await API.post("create?developer=HrantAbrahamyan", formData);
};

export default addTask;
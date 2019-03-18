import  rfc  from '../../../utility/rfc';
import API from '../../../API';
import md5 from '../../../utility/md5';
import getTaskList from '../getTaskList/getTaskList';

const editTask = (id, data, params) => {
    const TOKEN = "beejee";
    let sortedData = {};
    let rfcString = "";
    let hashedString = "";

    let keys = Object.keys(data);
    keys.sort();
    keys.forEach(key => {
        sortedData[key] = data[key];
        rfcString += `${key}=${rfc(data[key])}&`
    });

    sortedData.token = 'beejee';
    rfcString += `token=${TOKEN}`;
    hashedString = md5(rfcString);


    let formData = new FormData();
    for (let key in sortedData) {
        formData.append(key, sortedData[key]);
    }
    console.log(formData)
    formData.append('signature', hashedString);
    

    return async dispatch => {
        await API.post(`edit/${id}?developer=HrantAbrahamyan`, {data: formData});
        dispatch(getTaskList(params));
    }
};

export default editTask;







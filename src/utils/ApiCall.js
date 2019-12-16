import axios from 'axios';
import * as Config from '../constants/Config';


export default function apiCall(method = 'GET', endpoint, data) { 
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: data
    }).catch( error => {
        console.log(error);
    });
 }
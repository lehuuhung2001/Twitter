import axios from "axios";
import {API_PRIVATE} from "../../constants";


function newsApiRequest({}) {
    return axios(API_PRIVATE);
}


export default newsApiRequest
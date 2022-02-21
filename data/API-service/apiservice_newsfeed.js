import axios from "axios";
import {API_FEED} from "../../constants";


function newsApiRequest_Feed({}) {
    return axios(API_FEED);
}


export default newsApiRequest_Feed
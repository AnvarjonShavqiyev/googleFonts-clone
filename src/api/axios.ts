import axios from "axios";
import {AxiosInstance} from "axios"

const API_KEY = "AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q"

const instance: AxiosInstance  = axios.create({
    baseURL: `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`,
    headers: {
        'Content-Type': 'application/json',
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*"
    },
    timeout: 10000
});

export default instance;
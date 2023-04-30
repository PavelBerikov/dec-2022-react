import axios from "axios";
import {baseURL} from "../Constans/urls";

const axiosService = axios.create({baseURL})

export {
    axiosService
}
import {axiosService} from "./axios.service";
import {urls} from "../Constants/urls";
const todoService = {
    getAll:() => axiosService.get(urls.todos)
}

export {
    todoService
}
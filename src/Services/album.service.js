import {axiosService} from "./axios.service";
import {urls} from "../Constants/urls";

const albumService ={
    getAll: () => axiosService.get(urls.albums)
}

export {
    albumService
}
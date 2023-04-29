import {axiosService} from "./axios.service";
import {urls} from "../Constants/urls";

const postsService = {
    getById: (id) => axiosService.get(urls.posts.getById(id))
}

export {
    postsService
}
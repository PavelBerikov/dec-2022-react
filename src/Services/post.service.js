
import {axiosService} from "./axios.service";
import {urls} from "../Constans/urls";

class PostService {
    getAll(){
        return axiosService.get(urls.posts)
    }
}

export default PostService = new PostService();
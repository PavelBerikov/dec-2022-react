import {axiosService} from "./axios.service";
import {urls} from "../Constans/urls";

class CommentService {
    getAll(){
        return  axiosService.get(urls.comments)
    }
}

export default CommentService = new CommentService()
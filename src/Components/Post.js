import {Component} from "react";

class Post extends Component {

    render() {
        const {id, title, body} = this.props.post;
        return(
            <div>
                <div>ID - {id}</div>
                <div>TITLE - {title}</div>
                <div>BODY - {body}</div>
            </div>

        )
    }

}

export {
    Post
}
import {Component} from "react";

class Comment extends Component {
    render() {
        const {id, name, email, body} = this.props.comment;

        return(
            <div>
                <div>ID - {id}</div>
                <div>NAME - {name}</div>
                <div>EMAIL - {email}</div>
                <div>BODY - {body}</div>
            </div>
        )
    }

}

export {
    Comment
}
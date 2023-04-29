import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../Services/posts.service";

const Post = () => {
    const [post, setPost] = useState(null)
    const {postId} = useParams();
    useEffect(() => {
        postsService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])
    return (
        <div>
            {post&&(
                <div>

                    <div>id: {post.id}</div>
                    <div>Title - {post.title}</div>
                    <div>Body - {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default Post;
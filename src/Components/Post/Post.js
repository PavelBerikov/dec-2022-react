import React, {useState} from 'react';

const Post = ({post}) => {
    let [full, setFull] = useState(false)
    let {userId, id, title, body} = post;
    const info = () => {


    }
    return (
        <div>
            <b>ID - {post.id}</b>
            <h3>{post.title}</h3>
            <button onClick={() => setFull(prevState => !prevState)}>info</button>
            {full &&
                <div>
                    id  - {post.id}<br/>
                    Title - {post.title}<br/>
                    full - {post.body}<br/>
                </div>

            }
        </div>
    );
};

export default Post;
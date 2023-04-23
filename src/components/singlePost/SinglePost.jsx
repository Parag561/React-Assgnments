import {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './singlepost.css';

export default function SinglePost() {
    const params = useParams();
    const [post,setPost] =useState("");
    useEffect(() => {
        getPosts();
      }, [post]);
      let getPosts = async () => {
        let result = await fetch(`https://dummyjson.com/posts/${params.id}`);
        result = await result.json();
        setPost(result);
      }
    return (
        <div className='singlePost'>
            <div className="singlepostwrapper">
                <h1 className="singleposttitle">{post.title}</h1>
                <div className="singlepostinfo">
                    <span className='singlepostdate'>Few minutes ago</span>
                </div>
                <p className='singlepostdesc'>{post.body}</p>
            </div>
        </div>
    )
}

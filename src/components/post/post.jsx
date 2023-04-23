import { Link } from 'react-router-dom';
import './post.css';

export default function post({post}) {
    return (
        <div className='post'>
            <div className="postinfo">
                <span className="posttitle">{post.id}</span>
                <div className="postcats">
                    {post.tags.map((c)=>(
                        <span className="postcat">{c}</span>
                    ))}
                </div>
                <Link to={`/post/${post.id}`} className='link'><span className="posttitle">{post.title}</span></Link>
                <hr />
                <span className="postdate">Few minutes ago</span>
            </div>
            <p className="postdesc">
                {post.body}
            </p>
        </div>
    )
}

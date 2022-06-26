import React from 'react';
import Link from 'next/Link';
import styles from './Post.module.css';

const Post = ({post}) => {
    console.log(post)

    return ( 
        <div className={styles.post}>
            <label >User Id: {post.userId}</label>
            <label >Id: {post.id}</label>
            <label >Title: {post.title}</label>
            <label >Body: {post.body}</label>
            <Link href={`/${post.id}`} >
                <a><button>Show Detail</button></a>
            </Link>            
        </div>
     );
}
 
export default Post;

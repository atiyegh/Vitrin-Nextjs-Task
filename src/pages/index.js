import Head from 'next/head'
import { Provider,useSelector, useDispatch } from 'react-redux'
//import Store from '../Redux/Store'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../Redux/postsSlice";
import Post from "../Components/Post";
import Loading from '../Components/Loading';
import React , { useEffect } from 'react';
import styles from '../Components/Post.module.css'

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    console.log(posts, postStatus, error);

    useEffect(() => {
      if (postStatus === 'idle') {
        dispatch(fetchPosts());
        //console.log(posts)
      }
    }, [postStatus, dispatch]);


    let content;
    if (postStatus === 'loading') {
      content = <Loading />;
    } else if (postStatus === 'succeeded') {
      content = posts.map(post => <Post key={post.id} post={post} />);
    } else if (postStatus === 'failed') {
      content = <p>{error}</p>;
    }
    return (
        <div >
          <React.Fragment>
            <Head>
              <title>Posts List</title>
              <meta name="description" content="Posts list" />
            </Head>

            <h2>
              Posts List
            </h2>
            {<div className={styles.postSection}>{content}</div>}
          </React.Fragment>
        </div>
    );
}
export default PostsList;

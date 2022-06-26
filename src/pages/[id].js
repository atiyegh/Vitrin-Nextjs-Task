import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Post.module.css';
import Loading from '../Components/Loading';
import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ShowPost = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <Loading />
    }
    console.log(post)

    return (
        <React.Fragment>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.body} />
            </Head>

            <h2>
                Post: {post.id}
            </h2>
            <div className={styles.post}>
                <label >User Id: {post.userId}</label>
                <label >Id: {post.id}</label>
                <label >Title: {post.title}</label>
                <label >Body: {post.body}</label>
            </div>


        </React.Fragment>

    );
}
export default ShowPost;
export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch
    (`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await response.json()
    console.log(`Generating page for /posts/${params.id}`)
    return {
        props: {
            post: data
        }
    }
}
export async function getStaticPaths() {

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
            { params: { id: '6' } },
            { params: { id: '7' } },
            { params: { id: '8' } },
            { params: { id: '9' } },
            { params: { id: '10' } }
        ],
        fallback: true
    }
}



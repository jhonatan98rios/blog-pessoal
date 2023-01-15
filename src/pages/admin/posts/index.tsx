import { useEffect, useState } from 'react';
import PostThumb from '../../../components/Admin/Posts/PostThumb';
import { PostModel } from '../../../models/Post';
import { getAllPosts } from '../../../services/client';
import styles from './style.module.scss';

export default function AdminsPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const getPosts = async () => {
            const data = await getAllPosts()
            
            if (data?.posts) {
                setPosts(data.posts)
            }
        }

        getPosts()
            .catch(err => console.log('Erro:', err))

    }, [])

    return (
        <main className={styles.main}>
            <h1> Admin Posts </h1>

            <section>
                { posts?.map((post, index) => {
                    return (
                        <PostThumb content={post} key={index} />
                    )
                }) }
            </section>

        </ main>
    )
}
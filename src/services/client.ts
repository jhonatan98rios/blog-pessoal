import axios from 'axios'
import { PostModel } from '../models/Post'

const BASE_URL = process.env.API_URL

async function getAsyncData<T>(url: string): Promise<T> {
    try {
        const result = await axios.get(BASE_URL + url)
        const data = result.data;
        return data

    } catch (error) {
        console.log(error);
    }
}


type getAllPostsReturn = {
    posts: PostModel[]
}


export async function getAllPosts() {
    return getAsyncData<getAllPostsReturn>('post')
}

export async function getAllCategories() {
    return [] //getAsyncData('categories')
}



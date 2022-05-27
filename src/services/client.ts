import axios from 'axios'

const BASE_URL = process.env.API_URL

async function getAsyncData(url) {
    try {
        const result = await axios.get(BASE_URL + url)
        const data = result.data;
        return data

    } catch (error) {
        console.log(error);
    }
}

export async function getAllPosts() {
    return getAsyncData('posts')
}

export async function getAllCategories() {
    return getAsyncData('categories')
}



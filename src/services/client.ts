import axios from 'axios'


const BASE_URL = 'http://127.0.0.1:8000/'


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



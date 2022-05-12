import axios from 'axios'


const BASE_URL = 'http://127.0.0.1:8000/'

export async function getAllPosts() {
    try {
        const result = await axios.get(BASE_URL + 'posts/')
        const data = result.data;
        return data

    } catch (error) {
        console.log(error);
    }
}

export async function getPostById(id) {
    try {
        const result = await axios.get(BASE_URL + 'posts/' + id)
        const data = result.data;
        return data
        
    } catch (error) {
        console.log(error);
    }
}
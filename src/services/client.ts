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



export async function postData<T>(body: any) {

    return axios.post('http://localhost:3333/post', body)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);

        console.log('issues');
        console.log(error.response.data[0].errors.issues);
    });
}


export async function putData<T>(slug: string, body: any) {

    return axios.put(`http://localhost:3333/post/${slug}`, body)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);

        console.log('issues');
        console.log(error.response.data[0].errors.issues);
    });
}

export async function login({ user, password }) {

    return axios.post('http://localhost:3333/user/login', {
        user, password
    })
    .then(res => {
        console.log(res.data)
        return res.data
    })
    .catch(err => {
        console.log(err.response.data.message)
    })
}

export async function checkIn(token: string) {
    return axios.post('http://localhost:3333/user/check-in', {
        token
    })
    .then(res => {
        console.log('check in')
        console.log(res.data)
        return res.data
    })
    .catch(err => {
        console.log(err.response.data.message)
    })
}
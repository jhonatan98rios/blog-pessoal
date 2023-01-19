import axios from 'axios'
import { PostModel } from '../models/Post'
import { UserModel } from '../models/User'

const BASE_URL = process.env.API_URL

async function getAsyncData<T>(url: string): Promise<T> {
    try {

        const endpoint = BASE_URL + url

        const result = await axios.get(endpoint)
        const data = result.data;

        return data

    } catch (error) {
        console.log(error);
    }
}

/* Posts Manipulation */
type getAllPostsReturn = {
    posts: PostModel[]
}

export async function getAllPosts() {
    return getAsyncData<getAllPostsReturn>('post')
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


/* Autentication and Authorization */
export async function register({user, password}) {

    return axios.post('http://localhost:3333/user/', {
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

/* User administration */
type getAllUsersReturn = {
    users: UserModel[]
}

export async function getAllUsers() {
    return getAsyncData<getAllUsersReturn>('user')
}

export async function updateUser(username: string, password: string ) {

    return axios.put(`http://localhost:3333/user/${username}`, {
        password
    })
    .then(res => {
        console.log(res.data)
        return res.data
    })
    .catch(err => {
        console.log(err.response.data.message)
    })
}
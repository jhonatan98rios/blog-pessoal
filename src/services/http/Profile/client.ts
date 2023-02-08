//import axios from 'axios'
import { APIClient } from "infra/http/axios";


/* Autentication and Authorization */
export async function register({ user, mail, password }) {

  const client = APIClient.getInstance()

  return client.api.post('/user/', {
    user, mail, password
  })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err.response?.data?.message)
    })
}

export async function login({ user, password }) {

  const client = APIClient.getInstance()

  return client.api.post('/user/login', {
    user, password
  })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err.response?.data?.message)
    })
}

export async function checkIn(token: string) {

  const client = APIClient.getInstance()

  return client.api.post('/user/check-in', {
    token
  })
    .then(res => res.data)
    .catch(err => console.log(err.response?.data?.message))
}

export async function forgotPassword(mail: string) {

  const client = APIClient.getInstance()

  return client.api.post('/user/forgot-password', {
    mail
  })
    .then(res => res.data)
    .catch(err => console.log(err.response?.data?.message))
}

export async function resetPassword(mail: string, token: string, password: string, passwordConfirmation: string) {

  const client = APIClient.getInstance()

  return client.api.post('/user/reset-password', {
    mail, token, password, passwordConfirmation
  })
    .then(res => res.data)
    .catch(err => console.log(err.response?.data?.message))
}

export async function updateUserPassword(username: string, password: string) {

  const client = APIClient.getInstance()

  return client.api.put(`/user/${username}`, {
    password
  })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err.response?.data?.message)
    })
}

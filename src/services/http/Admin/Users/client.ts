//import axios from 'axios'
import { APIClient } from "../../../../infra/http/axios";
import { UserModel } from '../../../../models/User'


type GetAllUsersReturn = {
  users: UserModel[]
}
export async function getAllUsers(ctx) {
  const client = APIClient.getInstance(ctx)
  return await client.getAsyncData<GetAllUsersReturn>('user')
}


type GetOneUserReturn = {
  user: UserModel
}
export async function getOneUser(user: string) {
  const client = APIClient.getInstance()
  return client.getAsyncData<GetOneUserReturn>(`user/${user}`)
}


type UpdateUserRoleReturn = {
  props: UserModel
}
export async function updateUserRole(username: string, role: string) {
  const client = APIClient.getInstance()

  return client.api.put<UpdateUserRoleReturn>(`/user/role/${username}`, {
    role
  })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
}

import { AxiosHttpClient } from "infra/http/AxiosHttpClient";
import { UserModel } from 'models/User'
import { API_URL, LAMBDA_URL } from "services/constants";


type GetAllUsersReturn = {
  users: UserModel[]
}
export async function getAllUsers(ctx): Promise<GetAllUsersReturn> {
  const client = AxiosHttpClient.getInstance(ctx)
  const users = client.getAsyncData<GetAllUsersReturn>(`${LAMBDA_URL}/user/`)
  console.log('users: ')
  console.log(users)
  return users
}


type GetOneUserReturn = {
  user: UserModel
}
export async function getOneUser(user: string): Promise<GetOneUserReturn> {
  const client = AxiosHttpClient.getInstance()
  return client.getAsyncData<GetOneUserReturn>(`${LAMBDA_URL}/user/${user}`)
}


type UpdateUserRoleReturn = {
  props: UserModel
}
export async function updateUserRole(username: string, role: string): Promise<UpdateUserRoleReturn | void> {
  const client = AxiosHttpClient.getInstance()

  return client.api.put<UpdateUserRoleReturn>(`${LAMBDA_URL}/user/role/${username}`, {
    role
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
}

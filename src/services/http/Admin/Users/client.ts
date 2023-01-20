//import axios from 'axios'
import { APIClient } from "../../../../infra/http/axios";
import { UserModel } from '../../../../models/User'

/* User administration */
type getAllUsersReturn = {
  users: UserModel[]
}

export async function getAllUsers() {
  const client = APIClient.getInstance()
  return client.getAsyncData<getAllUsersReturn>('user')
}

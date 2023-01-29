import { checkIn } from "../http/Profile/client"

export async function validateToken(token: string, callback: Function, reject: Function) {
  const res = await checkIn(token)

  if (res?.user) {
    callback(res)

  } else {
    reject('invalid token')
  }
}

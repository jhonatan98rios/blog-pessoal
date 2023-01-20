import { checkIn } from "../http/Profile/client"

export async function validateToken(token: string, callback: Function) {
  const res = await checkIn(token)

  if (res?.user) {
    callback(res)

  } else {
    console.log('invalid token')
  }
}

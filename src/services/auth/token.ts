import { AxiosHttpClient } from "infra/http/AxiosHttpClient"
import Notification from "infra/errors/Notification"
import { CheckInService } from "services/http/Profile/CheckInService"
/* import { checkIn } from "../http/Profile/__client" */

export async function validateToken(token: string, callback: Function, reject: Function) {
  //const res = await checkIn(token)

  const httpClient = AxiosHttpClient.getInstance()
  const notification = new Notification()
  const checkinService = new CheckInService(httpClient, notification)

  const res = await checkinService.execute(token)

  if (res?.user) {
    callback(res)

  } else {
    reject('invalid token')
  }
}

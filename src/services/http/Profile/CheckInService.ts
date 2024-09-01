import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_LAMBDA_URL } from "services/constants";

export class CheckInService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(token: string) {
    return this.httpClient.api.post(`${NEXT_PUBLIC_LAMBDA_URL}/user/check-in`, {
      token
    })

    .then(res => {
      return res.data
    })
    .catch(err => {

      if (!err.response) {
        console.log(err)
        return JSON.stringify(err)
      }

      const { data, status } = err.response
      const errors = parseError(data)
      console.log(errors)
    })
  }
}

import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";
import { API_URL, LAMBDA_URL } from "services/constants";

export class CheckInService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(token: string) {
    return this.httpClient.api.post(`${LAMBDA_URL}/user/check-in`, {
      token
    })

    .then(res => {
      return res.data
    })
    .catch(err => {
      const { data, status } = err.response
      const errors = parseError(data)
      console.log(errors)
    })
  }
}

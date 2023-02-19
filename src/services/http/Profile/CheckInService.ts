import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

export class CheckInService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(token: string) {
    return this.httpClient.api.post('/user/check-in', {
      token
    })

    .then(res => res.data)
    .catch(err => {
      /* if (err.response?.data?.message) {
        this.notification.addError({
          message: err.response.data.message,
          statusCode: err.response.status
        })
      } */
      const { data, status } = err.response
      const errors = parseError(data)

      errors.forEach(error => {
        this.notification.addError({
          message: error,
          statusCode: status,
          type: 'danger'
        })
      })

    })
    .finally(() => {
      this.notification.throwMessages()
    })
  }
}

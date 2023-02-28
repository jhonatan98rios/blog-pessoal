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

    .then(res => {
      this.notification.addError({
        message: 'Check in realizado com sucesso!',
        statusCode: 200,
        type: 'success'
      })

      return res.data
    })
    .catch(err => {
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
import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

export class ForgotPasswordService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(mail: string) {

    if (!mail.length) {
      this.notification.addError({
        message: 'O campo e-mail precisa ser preenchido',
        statusCode: 422
      })
    }

    if (this.notification.hasErrors) {
      this.notification.throwMessages()
      return
    }

    return this.httpClient.api.post('/user/forgot-password', {
      mail
    })

    .then(res => {
      this.notification.addError({
        message: 'Recuperação de senha solicitada com sucesso!',
        statusCode: 200,
        type: 'success'
      })

      console.log(res.data)

      return res.data
    })
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

import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";
import { API_URL, LAMBDA_URL } from "services/constants";

export class ResetPasswordService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(mail: string, token: string, password: string, passwordConfirmation: string) {

    if (!mail.length) {
      this.notification.addError({
        message: 'O campo e-mail precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!password.length) {
      this.notification.addError({
        message: 'O campo senha precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!passwordConfirmation.length) {
      this.notification.addError({
        message: 'O campo confirmação de senha precisa ser preenchido',
        statusCode: 422
      })
    } else if (password !== passwordConfirmation) {
      this.notification.addError({
        message: 'O campo confirmação de senha precisa ser igual ao campo senha',
        statusCode: 422
      })
    }

    if (this.notification.hasErrors) {
      this.notification.throwMessages()
      return
    }

    return this.httpClient.api.post(`${LAMBDA_URL}/user/reset-password`, {
      mail, token, password, passwordConfirmation
    })

    .then(res => {
      this.notification.addError({
        message: 'Senha atualizada com sucesso!',
        statusCode: 204,
        type: 'success'
      })

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

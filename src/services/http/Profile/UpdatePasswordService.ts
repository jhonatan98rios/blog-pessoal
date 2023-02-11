import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

export class UpdatePasswordService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(username: string, password: string, passwordConfirmation: string) {

    if (!username.length) {
      this.notification.addError({
        message: 'O campo usuário precisa ser preenchido',
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

    return this.httpClient.api.put(`/user/${username}`, {
      password, passwordConfirmation
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

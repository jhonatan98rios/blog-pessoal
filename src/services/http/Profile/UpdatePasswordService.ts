import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";
import { API_URL, LAMBDA_URL } from "services/constants";

export class UpdatePasswordService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(username: string, currentPassword: string, password: string, passwordConfirmation: string) {

    if (!username.length) {
      this.notification.addError({
        message: 'O campo "usuário" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!currentPassword.length) {
      this.notification.addError({
        message: 'O campo "senha atual" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!password.length) {
      this.notification.addError({
        message: 'O campo "nova senha" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!passwordConfirmation.length) {
      this.notification.addError({
        message: 'O campo "confirmação de senha" precisa ser preenchido',
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

    return this.httpClient.api.put(`${LAMBDA_URL}/user/update-user/${username}`, {
      currentPassword, password, passwordConfirmation
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

      console.log(err)

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

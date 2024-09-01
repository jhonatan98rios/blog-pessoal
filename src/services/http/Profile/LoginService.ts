import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_LAMBDA_URL } from "services/constants";

export class LoginService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute({ user, password }) {

    if (!user.length) {
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

    if (this.notification.hasErrors) {
      this.notification.throwMessages()
      return
    }

    return this.httpClient.api.post(`${NEXT_PUBLIC_LAMBDA_URL}/user/login`, {
      user, password
    })

    .then(res => {

      if (res.data.user) {
        this.notification.addError({
          message: 'Login realizado com sucesso!',
          statusCode: 200,
          type: 'success'
        })
        return res.data

      } else {

        const { message, status } = res.data

        this.notification.addError({
          message: message,
          statusCode: status,
          type: 'danger'
        })
      }

    })
    .catch(err => {

      if (!err.response) {
        this.notification.addError({
          message: err,
          statusCode: 500,
          type: 'danger'
        })
        return JSON.stringify(err)
      }

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

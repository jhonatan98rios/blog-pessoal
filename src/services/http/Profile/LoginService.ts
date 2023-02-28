import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

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

    return this.httpClient.api.post('/user/login', {
      user, password
    })

    .then(res => {
      this.notification.addError({
        message: 'Login realizado com sucesso!',
        statusCode: 200,
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

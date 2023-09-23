import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";
import { API_URL, LAMBDA_URL } from "services/constants";

export class RegisterService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute({ user, mail, password, consent }) {

    if (!user.length) {
      this.notification.addError({
        message: 'O campo usuário precisa ser preenchido',
        statusCode: 422
      })
    }

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

    if (this.notification.hasErrors) {
      this.notification.throwMessages()
      return
    }

    return this.httpClient.api.post(`${LAMBDA_URL}/user/`, { user, mail, password, consent })

    .then(res => {

      this.notification.addError({
        message: 'Usuário criado com sucesso!',
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

import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

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

    if (!consent) {
      this.notification.addError({
        message: 'Para criar uma conta é necessário concordar com o recebímento de e-mails ativando a opção ao final do formulário',
        statusCode: 422
      })
    }

    if (this.notification.hasErrors) {
      this.notification.throwMessages()
      return
    }

    return this.httpClient.api.post('/user/', { user, mail, password })

    .then(res => res.data)
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

import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

export class GetPostService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute() {
    return this.httpClient.api.get(`/posts`)
    .then(res => res.data)
    .catch(err => {

      if (err?.response) {
        const { data, status } = err.response
        const errors = parseError(data)

        errors.forEach(error => {
          this.notification.addError({
            message: error,
            statusCode: status,
            type: 'danger'
          })
        })
      }

    })
    .finally(() => {
      this.notification.throwMessages()
    })
  }
}

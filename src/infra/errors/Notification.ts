import { iNotification, NOTIFICATION_TYPE, Store } from 'react-notifications-component';
import { AbstractNotification } from "../../adapters/AbstractNotification";
import { AppError, IAppError } from "./AppError";

import 'animate.css';
import 'react-notifications-component/dist/theme.css'

const notificationConfig: iNotification = {
  type: "default",
  insert: "bottom",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
  }
}

export default class Notification implements AbstractNotification {

  private errors: AppError[] = []

  public get hasErrors(): boolean {
    return this.errors.length > 0
  }

  addError({ message, statusCode, type }: IAppError): void {
    let error = new AppError({ message, statusCode, type })
    this.errors.push(error)
  }

  getErrors(): AppError[] {
    return this.errors
  }

  throwMessages() {
    if (this.hasErrors) {

      Store.removeAllNotifications()

      this.errors.forEach(err => {
        const title = err.type == 'success' ? 'Sucesso' : 'Erro'

        Store.addNotification({
          ...notificationConfig,
          title,
          message: `${err.message}`,
          type: err.type ? err.type as NOTIFICATION_TYPE : notificationConfig.type
        })
      })

      this.errors = []
    }
  }
}

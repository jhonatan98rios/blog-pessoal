import { AbstractHttpClient } from "adapters/AbstractHttpClient";
import { AbstractNotification } from "adapters/AbstractNotification";
import { parseError } from "infra/errors/parseError";

interface IUpdatePostService {
  title: string
  subtitle: string
  banner: any
  content: string
  language: string
  status: string,
  categories: { label: string, path: string }[]
  seo_title: string
  seo_description: string
  seo_keywords: string
}

export class UpdatePostService {

  constructor(
    private httpClient: AbstractHttpClient<any>,
    private notification: AbstractNotification
  ) {}

  execute(slug, {
    title, subtitle, banner, content, language, categories, status,
    seo_title, seo_description, seo_keywords,
  }: IUpdatePostService) {

    if (!title.length) {
      this.notification.addError({
        message: 'O campo "Titulo" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!subtitle.length) {
      this.notification.addError({
        message: 'O campo "Subtitulo" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!banner) {
      this.notification.addError({
        message: 'O campo "Banner" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (content.length < 8) {
      this.notification.addError({
        message: 'O campo "Conteúdo" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!language) {
      this.notification.addError({
        message: 'O campo "Idioma:" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (!categories.length) {
      this.notification.addError({
        message: 'O campo "Categorias" precisa ser preenchido',
        statusCode: 422
      })
    }

    if (seo_title.length < 8) {
      this.notification.addError({
        message: 'O campo "Titulo SEO" precisa ter mais que 8 caracteres',
        statusCode: 422
      })
    }

    if (seo_description.length < 8) {
      this.notification.addError({
        message: 'O campo "Descrição SEO" precisa ter mais que 8 caracteres',
        statusCode: 422
      })
    }

    if (seo_keywords.length < 8) {
      this.notification.addError({
        message: 'O campo "Palavras chaves SEO:" precisa ter mais que 8 caracteres',
        statusCode: 422
      })
    }

    if (this.notification.hasErrors) {
      this.notification.throwMessages()
      return
    }

    return this.httpClient.api.put(`/post/${slug}`, {
      title, subtitle, banner, content, categories, language, status,
      seo_title, seo_description, seo_keywords,
    })

    .then(res => {

      this.notification.addError({
        message: 'Post editado com sucesso!',
        statusCode: 200,
        type: 'success'
      })

      return res.data
    })
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

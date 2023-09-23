# TODO
- [x] Deslogar usuário assim que tiver suas permissões removidas
  - [x] Criar endpoint que receba o usuário a ter o token deletado
  - [x] Criar service que delete o token do usuário
  - [x] Enviar uma requisição ao endpoint enviando o usuário que deseja deletar

- [ ] Permitir recuperação de senha
  - [ ] Configurar serviço AWS SES
    - [ ] Criar permissão no IAM da AWS
    - [ ] Criar serviço AWS SES
  - [ ] Implementar envio de e-mail
    - [ ] Implementar abstração de envio de e-mail
    - [ ] Implementar envio de e-mail concreto
  - [ ] Implementar endpoint que receba o usuário
  - [ ] Implementar um serviço que gere um link unico
    - [ ] Consultar a senha do usuário
    - [ ] Concatenar com o usuário e gerar um token com expiração de 15min
    - [ ] Criar uma página com path dinâmico que receba o token e valide a validade
    - [ ] Implementar um formulário de edição de senha nessa página
    - [ ] Enviar o token como um link para o email do usuário


# Monetização
- [] Adicionar o link https://go.hotmart.com/V81207915T?dp=1 no banner sobre criação de aplicativos online

- https://go.hotmart.com/A81212712O?dp=1


# Cloud front
- [x] Baixar banners dos posts
- [x] Minificar banners dos posts
- [x] Criar novo bucket configurado para acesso privado
- [x] Configurar Cloud front pra disponibilizar qualquer arquivo dentro do S3 publicamente
- [x] Alterar bucket no S3Provider
- [x] Alterar path da imagem do S3 para o Cloudfront
- [x] Atualizar banners dos projetos
- [x] Testar
- [x] Baixar imagens dos posts
- [x] Minificar imagens dos posts
- [x] Atualizar imagens dos projetos


# Lambda




# Ler
https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist?utm_source=lighthouse&utm_medium=devtools#caching
https://nextjs.org/docs/pages/building-your-application/optimizing/images
https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist?utm_source=lighthouse&utm_medium=devtools#caching
https://github.com/vercel/next.js/tree/canary/examples/ssr-caching
https://github.com/vercel/next.js/tree/canary/examples/with-dynamic-import
https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=devtools
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html
https://web.dev/lcp-lazy-loading/?utm_source=lighthouse&utm_medium=devtools

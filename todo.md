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

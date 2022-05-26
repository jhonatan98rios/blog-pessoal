# Model level 1
- [x] slug: Text
- [x] title: Text
- [x] banner: Text
- [x] content: Text
- [x] categories: Text

# Model level 2
- [x] seo_title: Text
- [x] seo_description: Text
- [x] seo_keywords: Text
- [x] slug: Text
- [x] title: Text
- [x] banner_src: Text
- [x] banner_alt: Text
- [x] banner_title: Text
- [x] updatedAt: Text 
- [x] content: RichText
- [x] categories: Text

# Model level 3
- [x] seo_title: Text
- [x] seo_description: Text
- [x] seo_keywords: Text
- [x] slug: Text
- [x] title: Text
- [x] banner: Image (src, alt, title)
- [x] content: RichText
- [x] images: List(Images)
- [x] categories: List(Text)
- [ ] updatedAt: Date

## Interface
- [x] Implementar ld json schema nos posts
- [x] Implementar Adsense
- [x] Implementar Google Analytics
- [x] Rodapé
- [x] Utilizar imagens sem direitos
- [x] SEO
- [ ] Acessibilidade
- [ ] Performance
- [ ] Voltar a deployar utilizando next js
 
## Posts e Categories
- [x] Alterar o nome da image para banner no frontend
- [x] Adicionar alt e title para o banner e nas imagens
- [x] Separar categorias em uma lista 

## Post
- [x] Implementar coleta de dados no getStaticProps 
- [x] Gerar páginas no getStaticPaths
- [x] Implementar richtext no conteúdo
- [x] Implementar SEO

## Devops (mês que vem)
- [] Comprar um domínio
- [] Migrar para S3 com cloudfront
- [] Criar uma pipeline que teste o código, compile e envie para o S3
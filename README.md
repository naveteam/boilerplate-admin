# ❗️ Admin boilerplate

Esse repositório tem como objetivo agilizar o desenvolvimento de novos projetos que consistem em um admin/dashboard, tendo as seguintes funcionalidades de exemplo:

- Login
- Reset de senha
- CRUD de usuários

## 🛠 Tecnologias

- [Next.JS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [SWR](https://swr.vercel.app/)
- [React hook form](https://react-hook-form.com/)

## 🚀 Instalação

Primeiramente, clone o repositório

```bash
git clone https://github.com/naveteam/boilerplate-admin.git my-project
```

Depois, entre na pasta do projeto e instale as dependências com yarn

```bash
cd my-project && yarn
```

Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env-example`

Após a instalação, rode o ambiente de dev

```bash
yarn dev
# ou
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver sua aplicação no navegador.

## Estrutura de pastas

    ├── ./husky
    ├── /components
    │   ├── index.ts
    │   ├── /Cards
    │   │   ├── Card.tsx
    ├── /pages
    │   ├── _app.tsx
    │   ├── index.ts
    │   ├── /users
    │   │   ├── index.ts
    │   │   ├── create.ts
    │   │   ├── [userId].ts
    ├── /providers
    │   ├── api.ts
    ├── /routes
    │   ├── /Home
    │   │   ├── Home.tsx
    │   ├── /Users
    │   │   ├── Users.tsx
    │   │   ├── UsersForm.tsx
    ├── /services
    │   ├── auth.ts
    │   ├── users.ts
    ├── /theme
    │   ├── index.ts
    │   ├── globalStyles.ts
    │   ├── /components
    │   │   ├── textStyles.ts
    ├── /types
    │   ├── users.ts
    ├── /utils
    │   ├── auth.ts
    │   ├── yup-resolvers.ts
    └── ...

**./husky** - git hooks (https://github.com/typicode/husky)

- pre-commit: [lint-staged](https://github.com/okonet/lint-staged)
- prepare-commit-msg: [gitmoji](https://github.com/carloscuesta/gitmoji)

**/components** - componentes reutilizáveis do projeto

**/pages** - estrutura de routing da aplicação seguindo o [next-routing](https://nextjs.org/docs/routing/introduction)

**/providers** - instâncias de api que o projeto consome

**/routes** - páginas da aplicação exportadas em _/pages_

**/services** - lógicas de serviço utilizando o hook [_useSWR_](https://swr.vercel.app/getting-started#make-it-reusable)

**/theme** - tema global da aplicação, podendo ser extendido através do [_extendTheme_](https://chakra-ui.com/docs/theming/customize-theme).

- globalStyles.ts contém os estilos globais da aplicação
- /components possui os [estilos customizados dos componentes](https://chakra-ui.com/docs/theming/customize-theme#customizing-single-components)

**/types** - tipagens reutilizadas da aplicação

**/utils** - utilitários da aplicação

## Licença

MIT © [Nave Team](https://github.com/naveteam)

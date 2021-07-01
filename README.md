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

## 📂 Estrutura de pastas

```bash
src
├── common
│   ├── components
│   │   ├── Cards
│   │   │   └── Card.tsx
│   │   ├── Inputs
│   │   │   └── Input.tsx
│   │   └── index.ts
│   ├── providers
│   │   ├── api.ts
│   │   └── axios.d.ts
│   └── theme
│       ├── components
│       │   ├── spinnerStyles.ts
│       │   └── textStyles.ts
│       ├── globalStyles.ts
│       └── index.ts
├── modules
│   ├── auth
│   │   ├── Login.tsx
│   │   ├── authServices.ts
│   │   ├── authToken.ts
│   │   ├── authTypes.ts
│   │   └── authYupResolvers.ts
│   └── users
│       ├── UserForm.tsx
│       ├── Users.tsx
│       ├── userTypes.ts
│       └── usersServices.ts
└── pages
    ├── _app.tsx
    ├── index.tsx
    ├── login
    │   └── index.ts
    └── users
        ├── [userId].ts
        ├── create.ts
        └── index.ts
```

**/modules** - módulos da aplicação, onde cada módulo possui seus componentes, serviços e utilitários escopado na mesma pasta.

**/pages** - estrutura de routing da aplicação seguindo o [next-routing](https://nextjs.org/docs/routing/introduction)

**/common** - componentes, utilitários, hooks, .etc, que são usados globalmente na aplicação, sem pertencer a um módulo específico.

## 🎨 Tema

**/common/theme** - tema global da aplicação, podendo ser extendido através do [_extendTheme_](https://chakra-ui.com/docs/theming/customize-theme).

- globalStyles.ts contém os estilos globais da aplicação
- /components possui os [estilos customizados dos componentes](https://chakra-ui.com/docs/theming/customize-theme#customizing-single-components)

## 🪝 Git hooks

**./husky** - (https://github.com/typicode/husky)

- pre-commit: [lint-staged](https://github.com/okonet/lint-staged)
- prepare-commit-msg: [gitmoji](https://github.com/carloscuesta/gitmoji)

## Licença

MIT © [Nave Team](https://github.com/naveteam)

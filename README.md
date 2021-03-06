# βοΈ Admin boilerplate

Esse repositΓ³rio tem como objetivo agilizar o desenvolvimento de novos projetos que consistem em um admin/dashboard, tendo as seguintes funcionalidades de exemplo:

- Login
- Reset de senha
- CRUD de usuΓ‘rios

## π  Tecnologias

- [Next.JS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)
- [SWR](https://swr.vercel.app/)
- [React hook form](https://react-hook-form.com/)

## π InstalaΓ§Γ£o

Primeiramente, clone o repositΓ³rio

```bash
git clone https://github.com/naveteam/boilerplate-admin.git my-project
```

Depois, entre na pasta do projeto e instale as dependΓͺncias com yarn

```bash
cd my-project && yarn
```

Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env-example`

ApΓ³s a instalaΓ§Γ£o, rode o ambiente de dev

```bash
yarn dev
# ou
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver sua aplicaΓ§Γ£o no navegador.

## π Estrutura de pastas

```bash
src
βββ common
β   βββ components
β   β   βββ Cards
β   β   β   βββ Card.tsx
β   β   βββ Inputs
β   β   β   βββ Input.tsx
β   β   βββ index.ts
β   βββ providers
β   β   βββ api.ts
β   β   βββ axios.d.ts
β   βββ theme
β       βββ components
β       β   βββ spinnerStyles.ts
β       β   βββ textStyles.ts
β       βββ globalStyles.ts
β       βββ index.ts
βββ modules
β   βββ auth
β   β   βββ Login.tsx
β   β   βββ authServices.ts
β   β   βββ authToken.ts
β   β   βββ authTypes.ts
β   β   βββ authYupResolvers.ts
β   βββ users
β       βββ UserForm.tsx
β       βββ Users.tsx
β       βββ userTypes.ts
β       βββ usersServices.ts
βββ pages
    βββ _app.tsx
    βββ index.tsx
    βββ login
    β   βββ index.ts
    βββ users
        βββ [userId].ts
        βββ create.ts
        βββ index.ts
```

**/modules** - mΓ³dulos da aplicaΓ§Γ£o, onde cada mΓ³dulo possui seus componentes, serviΓ§os e utilitΓ‘rios escopado na mesma pasta.

**/pages** - estrutura de routing da aplicaΓ§Γ£o seguindo o [next-routing](https://nextjs.org/docs/routing/introduction)

**/common** - componentes, utilitΓ‘rios, hooks, .etc, que sΓ£o usados globalmente na aplicaΓ§Γ£o, sem pertencer a um mΓ³dulo especΓ­fico.

## π¨ Tema

**/common/theme** - tema global da aplicaΓ§Γ£o, podendo ser extendido atravΓ©s do [_extendTheme_](https://chakra-ui.com/docs/theming/customize-theme).

- globalStyles.ts contΓ©m os estilos globais da aplicaΓ§Γ£o
- /components possui os [estilos customizados dos componentes](https://chakra-ui.com/docs/theming/customize-theme#customizing-single-components)

## πͺ Git hooks

**./husky** - (https://github.com/typicode/husky)

- pre-commit: [lint-staged](https://github.com/okonet/lint-staged)
- prepare-commit-msg: [gitmoji](https://github.com/carloscuesta/gitmoji)

## LicenΓ§a

MIT Β© [Nave Team](https://github.com/naveteam)

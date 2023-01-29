<h1 align="center"> 
	Boilerplate-Frontend
</h1>

## 💭 O que é e qual a ideia do projeto?

Esse é um template feito para iniciar um novo projeto em react, vite, tailwindcss, storybook, jest, eslint and typescript

<br>

## 🛠 Quais tecnologias e bibliotecas foram utilizadas?

- [React](https://pt-br.reactjs.org/)

- [Tailwindcss](https://tailwindcss.com/)

- [Storybook](https://storybook.js.org/)

- [Jest](https://jestjs.io/docs/tutorial-react/)

- [Eslint](https://eslint.org/)

- [Radix](https://www.radix-ui.com/)

- [Phosphor-icons](https://phosphoricons.com/)

- [Axios](https://axios-http.com/ptbr/)

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

<br>

## 📚 mais informações

- Número de páginas: 1

- Responsivo: ✅

- Hospedado: ✅

<br>

## 📝 Páginas

!PAGINA AKI

<br>

## 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/IvanOliver131/boilerplate-vite-tailwind-storybook-jest-estlint.git

# Acesse a pasta do projeto no terminal/cmd
$ cd boilerplate-vite-tailwind-storybook-jest-estlint

# Acesse o projeto pelo vs code
$ code .

# baixe as dependências
$ npm install

# Rode o projeto
$ npm run dev

# Rode o storybook
$ npm run storybook

# Rode os testes do storybook
$ npm run test-storybook

# O projeto ficara ativo na porta:3000 - acesse <http://127.0.0.1:5173/>
```

<br>

## 🎲 Passo a passo para criar o projeto

# Criar o projeto com Vite

```bash
#criar projeto
$ npm create vite@latest
```

- Selecionar o nome do projeto
- Selecionar o framwork desejado => React
- Selecionar a variante => Typescript
- Deletar os seguintes arquivos para configuração inicial do projeto:
  - assets
  - App.css
  - index.css

# Instalando o tailwindcss

```bash
# Instalando o tailwindcss
$ npm install -D tailwindcss postcss autoprefixer

# Iniciando o tailwindcss postcss
$ npx tailwindcss init –p
```

- Dentro do arquivo 'tailwind.config.cjs' coloque dentro do Array de content isso sem espaços'./src/\*_ /_.tsx'
- Crie uma pasta(styles/global.css) e coloque dentro dela o código abaixo

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Importe o arquivos style.css no seu arquivo main.tsx

# Instalando o Storybook

- Rode o seguinte comando

```bash
# Iniciando o storybook
$ npx storybook init

# Instalando o All1
$ npm i @storybook/addon-a11y

# Instalando dependências para teste
$ npm i @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner –D
$ npm i msw msw-storybook-addon –D
$ npx msw init public/

# Instalando dependências para deploy
$ npm i @storybook/storybook-deployer –save-dev
```

- Delete a pasta 'storybook' dentro da pasta 'src'
- Sua pasta .storybook deve conter os seguintes arquivos:

* main.csj

```bash
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true, // Add this line for "@storybook/addon-interactions",
  },
  staticDirs: ["../public"], // Add this for MSW
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/boilerplate-vite-tailwind-storybook-jest-estlint/";
    }

    return config;
  },
};
```

- manager.js

```bash
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.dark,
});
```

- preview-head.html

```bash
<script>
  window.global = window;
</script>
```

- preview.cjs

```bash
import { themes } from "@storybook/theming";

import "../src/styles/global.css";

import { initialize, mswDecorator } from "msw-storybook-addon";

const isDevelopment = window.CONFIG_TYPE === "DEVELOPMENT";

// Initialize MSW
initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url: isDevelopment
      ? "mockServiceWorker.js"
      : "/boilerplate-vite-tailwind-storybook-jest-estlint/mockServiceWorker.js",
  },
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
```

# Instalando o ESlint

- Rode o seguinte comando

```bash
# Iniciando o eslint
$ npm init @eslint/config
```

- Selecione => yes
- Selecione => Check and corrige...
- Selecione => Javascript modules
- Selecione => React
- Selecione => Typescript
- Selecione => Node
- Selecione => Airbnb
- Selecione => Use a popular...
- Selecione => JSON
- Selecione => Yes
- Rode o seguinte comando com as depências

```bash
# Instalando as dependências
$ npm i eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier prettier -D
```

- Crie um arquivo .prettierrc.json na raiz do projeto com as seguintes configurações

```bash
{
  "trailingComma": "none",
  "tabWidth": 2,
  "useTabs": false
}
```

- No arquivo .eslintrc.json cole os seguinte dados

```bash
{
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "import-helpers",
        "@typescript-eslint",
        "prettier"
    ],
    "root": true,
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2020
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "singleQuote": false,
                "arrowParens": "always",
                "semi": true,
                "endOfLine": "auto"
            }
        ],
        "import-helpers/order-imports": [
            "warn",
            {
                "newlinesBetween": "always",
                "groups": [
                    "/^react/",
                    "/^styled/",
                    "module",
                    [
                        "parent",
                        "sibling",
                        "index"
                    ]
                ],
                "alphabetize": {
                    "order": "asc",
                    "ignoreCase": true
                }
            }
        ]
    }
}
```

# Demais informações e depências

- Scripts no package.json

```bash
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "deploy-storybook": "storybook-to-ghpages",
    "test-storybook": "test-storybook"
	}
```

- Demais dependências

```bash
# phosphor-icons
$ npm i phosphor-react

# axios
$ npm i axios

# clsx
$ npm i clsx

# radix
$ npm i @radix-ui/react-checkbox
$ npm i @radix-ui/react-slot
```

<br>

## 💻 Autor

---

<a href="https://www.linkedin.com/in/ivan-oliveira-112048200/">
 <img style="border-radius: 50%;" src="https://github.com/IvanOliver131.png" width="100px;" alt=""/>
 <br>
 <h2><b>Ivan Oliveira</b></h2></a>

<h4> Feito com muito carinho e dedicação :) </h4>

<br>

# To Do List

Este projeto é uma aplicação em React com Vite que permite cadastrar, listar, editar, excluir, marcar as tarefas como concluídas e salvar no localStorage.

## Acessar o projeto
Você pode clicar [aqui](https://to-do-list-app-one-delta.vercel.app/) para acessar a página do projeto.


## Tecnologias utilizadas
- `React com Vite`
- `TypeScript`
- `Context API`
- `Styled-Components`
-  `Jest`
- `Testing Library`
- `i18next`

## Técnicas Implementadas
- `Debounce:` Para reduzir a frequência de atualizações no localStorage.
- `Memo`: Para otimizar componentes que não precisam ser renderizados com frequência.

## Automação no GitHub Actions
- Incremento automático de versão: Sempre que um novo código é mesclado em main, a versão do aplicativo é incrementada automaticamente.
- Versionamento Semântico: As versões são determinadas com base nas labels aplicadas aos Pull Requests, seguindo as práticas de versionamento semântico (`major`, `minor`, `patch`).
- Test Coverage em PRs: Ao abrir um pull request, o GitHub Actions executa testes e relata a cobertura de testes.

## Como rodar o projeto localmente

Clone o repositório:

```sh
git clone git@github.com:raqueltsato/to-do-list-app.git
```

Navegue até o projeto:
```sh
cd to-do-list-app
```

Instale as dependências:
```sh
yarn
```

Execute a aplicação localmente:
```sh
yarn dev
```
A aplicação estará disponível em: [http://localhost:5173/](http://localhost:5173/)

Ou para expor na rede:
```sh
yarn dev --host
```

## Demonstração  do projeto

### Desktop
https://github.com/raqueltsato/to-do-list-app/assets/37277518/4941e534-bb6a-4fa4-a925-57e426f893df



### Mobile
https://github.com/raqueltsato/to-do-list-app/assets/37277518/f300379b-141e-4a69-9136-577937a56c2a




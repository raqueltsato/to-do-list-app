# To Do List

Este projeto é uma aplicação em React com Vite que permite cadastrar, listar, editar, excluir, marcar as tarefas como concluídas e salvar no localStorage.


## Tecnologias utilizadas:
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
https://github.com/raqueltsato/to-do-list-app/assets/37277518/64e73057-32e0-4c52-bb87-546e1763c916

### Mobile

https://github.com/raqueltsato/to-do-list-app/assets/37277518/93f19f3a-d773-458a-816a-992459fc4dbe



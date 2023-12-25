
![Logo](https://github.com/denzelws/won-games/assets/101350793/08bfd057-8245-4c88-b83b-6ddadb4bbd17)


# Ecommerce Won Games 🎮

## Descrição
Won Games é uma plataforma de comércio eletrônico que permite aos clientes comprar e acessar jogos online.

## Recursos

Catálogo de jogos com fotos, descrições e gifs
Carrinho de compras seguro e protegido
Opções de pagamento conectados com stripe

## Documentação da API

Esta é a API para criar a Won Games Store

## Requisitos

Este projeto usa [PostgreSQL](https://www.postgresql.org/), portanto, para que funcione, instale-o em sua máquina local ou use o Docker.

A configuração para o Banco de Dados pode ser encontrada em [config/database.js](config/database.js)

## Desenvolvimento

Depois de clonar este projeto, instale as dependências:

```
yarn install
```

para rodar use:

```
yarn develop
```

URLs para acessar são:

- `http://localhost:1337/admin` - O painel para criar e preencher dados

- `http://localhost:1337/graphql` - GraphQL Playground para testar suas consultas

Na primeira vez que acessar o Admin, você precisará criar um usuário.

## Preencher dados

Este projeto usa uma rota `/games/populate` para preencher os dados através do site GoG.

Para fazer funcionar, siga os passos:

- Vá para Roles & Permissions > Public e certifique-se de que a rota `game:populate` esteja disponível publicamente e o upload também

- Com o Strapi em execução, execute o seguinte comando em seu console:

```bash
$ curl -X POST http://localhost:1337/games/populate

# você pode passar parâmetros de consulta como:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/games/populate?availability=coming&sort=popularity
```

# Movies Nestjs

- [x] Iniciar aplicação NestJS
- [x] Instalar dependencias
- [x] Configurar TypeORM no Nest
- [x] Configurar Docker
- [x] Criar docker compose com serviços da API, Redis e Postgres
- [x] Configurar Redis no Nest
- [x] usar Redis como cache
- [x] Configurar Postgres no Nest
- [x] Criar CRUD com entidade Users
- [x] Desenvolver um sistema de autenticação JWT
- [x] Criar CRUD de um catálogo de Movies
- [x] todos Endpoints de Movies precisam de autenticação
- [x] Configurar o Swagger
- [x] Adicionar em produção (Heroku) :tada:

[Abrir aplicação no Heroku](https://movies-nestjs.herokuapp.com/api/)
[Abrir documentação do Swagger](https://movies-nestjs.herokuapp.com/api/v1/docs)

## Docker compose

```bash
# start
docker-compose up

# start in detached mode
docker-compose up -d

# stop and remove containers
docker-compose down

# start and build
docker-compose up --build

```
OBS.: Foram implementados só alguns testes, mas a configuração (mocks, providers, imports) está feita.

## Tests

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:watch
```

## Server Info
Root:
[http://localhost:8080/api/](http://localhost:8080/api/)
Swagger doc.:
[http://localhost:8080/api/v1/docs](http://localhost:8080/api/v1/docs)

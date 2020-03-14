# AdonisJS
## O que é AdonisJS?
O AdonisJS é um framework para NodeJS que vai permitir focar na regra de negócio da aplicação sem perder muito tempo com o funcionamento por trás de funcionalidades comuns como manipulação do banco de dados, envio de e-mail, autenticação, etc…


### Vantagens
- Funcionalidades pré-implementadas;
- Estrutura de arquivos;
- Opinado;
- ORM extremamente poderoso para trabalhar com SQL;
- Estrutura para lidar com websockets (real-time);
- CLI para facilitar scaffolding da aplicação;

### Desvantagens
- Comunidade ainda muito nova;
- Poucos plugins;
- Poucas bibliotecas disponíveis (apesar de estar crescendo muito);
- o AdonisJS hoje é sua estrutura ser robusta demais para aplicações menores e também não oferecer um suporte muito legal para MongoDB no seu ORM;

### Quando escolher o AdonisJS?
O AdonisJS se aplica muito bem para a grande maioria de aplicações comerciais que possuem um time menor que trabalha em todas as features do sistema, sem divisões.

Diferente dos micro-serviços, denominamos esse tipo de aplicação como monolítica, ou seja, todos serviços estão unidos em uma mesma base de código.

## Links

[About AdonisJs](https://adonisjs.com/docs/4.1/about)

[Seu primeiro CRUD com AdonisJS](https://medium.com/@douglasbrando/seu-primeiro-crud-com-adonisjs-321bf6608f7d)

[AdonisJS vs ExpressJS: Quando utilizar cada um?](https://blog.rocketseat.com.br/adonis-vs-express/)

[Iniciando com AdonisJS: Autenticação JWT e API REST](https://blog.rocketseat.com.br/adonis-auth-jwt-api-rest/)





# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

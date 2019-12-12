# Introduction

This is a sample full stack REST API running in Node using express including Postgres queries & database migrations.

Structure

```
project
│   .env <- Variables
|
|
└───src
│   │   server.ts <- Responsible for launching the express server
│   │
│   └───database
│       └───migrations
│       |      1576094942059_sample-migration.js <- Creates a "users" table
|       |
│       └───models
|           |   user.ts
│
└───middleware <- CORS, Compression, parsing, error handling etc.
|    │   common.ts
|    |   index.ts <- Export middleware
|
└───services
|    |   index.ts <- Export routes
|    |
|    └───user
|           routes.ts
|           userController.ts <- Business logic
|
└───utils <- Bootstrap/utility methods for starting service (e.g. apply metadata, initialise database etc.)
      index.ts
```

Lines of code

       4 database/models/user.ts
      16 middleware/common.ts
       7 middleware/index.ts
      16 server.ts
       3 services/index.ts
      21 services/user/routes.ts
      13 services/user/userController.ts
      45 utils/index.ts
     125 total

## Run locally

0. Choose a postgres instance to test with (e.g. set up locally with Docker)
1. Clone repository
1. Install packages: `npm install`
1. Set postgres connection string in `.env`
1. Run database migrations: `npm run migrate-database`
1. Insert some data into `sample.users`
1. Run API `npm run dev`
1. Naviagte to http://localhost:3000/api/v1/users

## Framework

### Database Migrations

[node-pg-migrate](https://github.com/salsita/node-pg-migrate)

[![NPM version](https://img.shields.io/npm/v/node-pg-migrate.svg)](https://www.npmjs.com/package/node-pg-migrate)

- `npm run create-migration my migration`
  - Scaffholds a migration called `..._my_migration-migration.js` inside `./src/database/migrations`
- `npm run migrate-database`
  - Applies any migrations that haven't been run

### Database Access

[pg-promise](https://github.com/vitaly-t/pg-promise)

[![NPM version](https://img.shields.io/npm/v/pg-promise.svg)](https://www.npmjs.com/package/pg-promise)

### Environment

[dotenv](https://github.com/motdotla/dotenv)

[![NPM version](https://img.shields.io/npm/v/dotenv.svg)](https://www.npmjs.com/package/dotenv)

[pm2](github.com/Unitech/pm2)

[![NPM version](https://img.shields.io/npm/v/pm2.svg)](https://www.npmjs.com/package/dotenv)

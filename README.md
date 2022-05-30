<h1 style="text-align:center">Valoriza 🎉</h1>

Compliments exchange API, build to promote acknowledgment between team members. Project developed during [Rocketseat](https://www.rocketseat.com.br/)'s 6th Next Level Week event.

## Technologies

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.npmjs.com/package/typescript)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)

## Getting Started

Clone this repository and access the folder:
```
$ git clone https://github.com/marialuizams/valoriza
$ cd valoriza
```

Install dependencies using:
```
$ yarn
```
Or:
```
$ npm install
```
Run the database migrations:
```
$ yarn typeorm migration:run
```
Finally, start the app by running:
```
$ yarn dev
```
Or:
```
$ npm run dev
```
The application should start running on http://localhost:3000.

## Routes

*Routes with `Bearer token` expect an Authorization header. To get this token, the user needs to authenticate through the `/sessions` route.

| route | HTTP method | parameters | description | auth |
| ----- | ----------- | ---------- | ----------- | --------------------- |
| `/users` | POST | Body with user's `name`, `email`, `password` and `isAdmin` flag. | Creates a new user. | :x: |
| `/users` | GET | Expects no parameters. | Lists all users. | Bearer token |
| `/sessions` | POST | Body with user's `email` and `password`. | Authenticates user, returning an access token. | :x: |
| `/tags` | POST | Body with tag's `name`. | Creates a new tag. | Bearer token |
| `/tags` | GET | Expects no parameters. | Lists all tags. | Bearer token |
| `/compliments` | POST | Body with compliment's `user_receiver`, `tag_id` and `message`. | Creates a new compliment. | Bearer token |
| `/users/compliments/received` | GET | Expects no parameters. | Returns a list of all compliments received by the user. | Bearer token |
| `users/compliments/sent` | GET | Expects no parameters. | Returns a list of all compliments sent by the user. | Bearer token |


## Business Rules

### User Registration

- [x] Should not be able to register more than one user with the same email.
- [x] Should not be able to register an user without an email.

### Tag Registration

- [x] Should not be able to register more than one tag with the same name.
- [x] Should not be able to register a tag without name.

### Compliment Registration

- [x] Users should not be able to register compliments to themselves.
- [x] Should not be able to register compliments to invalid users.
- [x] The user must be authenticated to register compliments.

#
<p style="text-align:center">Made with 💜 by <a href="https://www.linkedin.com/in/marialuizasalviano/">Maria Luiza Salviano</a></p>
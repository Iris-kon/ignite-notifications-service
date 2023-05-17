# About

A Study project for notifications micro service.

The application was developed with NestJS applying the following concepts:
<ul>
  <li>NestJS</li>
  <li>Factory  pattern</li> 
  <li>SOLID Concepts</li>
</ul>

## Routes
### GET
<ul>
  <li>/notifications/count/from/:recipientId - for get a the quantity of notifications a user have</li>
  <li>/notifications/from/:recipientId - for get all notifications of one user</li> 
</ul>

### PATCH
<ul>
  <li>/notifications/:id/read - for marking a notification as read</li>
  <li>/notifications/:id/unread - for marking a notification as read</li>
  <li>/notifications/:id/cancel - for 'delete' the notification</li>
</ul>

### POST
<ul>
  <li>/notifications - for creating a notification</li>
</ul>

## Used Technologies
The project utilises the following technologies:
<ul>
  <li>NestJS</li>
  <li>Prisma ORM</li>
  <li>TypeScript</li>
  <li>Jest</li>
</ul>

## Run project
Copy the project to the desired folder with the following command:

### `git clone  https://github.com/Thiago-kon/ignite-notifications-service`

Install dependences with:

### `yarn install` or `npm install`

after, run the project on localhost:

```
# Iniciate App with:
$ yarn dev or npm run dev
```


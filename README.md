# Fødselsnummer-generator

## Klient

### Lokal utvikling
Kjør `npm run dev`
Gå til http://localhost:3000/

### Heroku deploy

Sett opp environment variabler i heroku 
```
heroku config:set SERVER_ROOT=<server-name>.herokuapp.com
heroku config:set SERVER_PROTOCOL=https
```

```
heroku auth:login
heroku container:login
heroku create
heroku container:push web
heroku container:release web
```

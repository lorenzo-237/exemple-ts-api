# Titre

## Exemple .env.delopment.local

```bash
# PORT
PORT = 3000

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# TOKEN
SECRET_KEY = "test_secret"

# CORS
ORIGIN = *
CREDENTIALS = true


```

## Exemple .env

```bash
DATABASE_URL="postgresql://postgres:admin@localhost:5432/db_example?schema=test"
```

## TODO

Voir comment fonctione PM2 : penser à l'installer npm install pm2@latest -g

[pm2 quick start](https://pm2.keymetrics.io/docs/usage/quick-start/)
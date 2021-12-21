# Server

## Run in docker

To run the plugin server localy you need docker.
To start the server run: `docker-compose -f ./docker/docker-compose.yaml up --build -d --remove-orphans`

## How to use

```
const brightfoxServer = require('main-as-module.js');

brightfoxServer({
  permfolder: "folder/of/the/certs", // Should have a privkey.pem, cert.pem, chain.pem
  mysql: {
    host: "localhost",
    user: "user",
    password: "password",
    database: "database"
  },
  port: 8655 //any port
});

```

## API

### /plugins/list

### /plugins/new

### /plugins/retrive

### /plugins/update

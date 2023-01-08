const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
  .then(function () { // when you are done syncing the db to this file
    //tell the server app(this file) to start listening
    app.listen(PORT, function() {
      console.log(`App listening on port ${PORT}!`);
    });
  }
);

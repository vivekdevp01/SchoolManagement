const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api', apiRoutes);

app.use(errorHandler);
app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

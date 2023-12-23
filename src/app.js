const express = require('express');
const globalErrorHandler = require('./utils/globalErrorHandler');
const pathErrorHandler = require('./utils/pathErrorHandler');
const applyMiddlewores = require('./middlewares');
const mobilesRoute = require('./routes/mobiles/mobiles')

const app = express();

applyMiddlewores(app);

app.use(mobilesRoute);

app.get('/health', (req, res) => {
    res.send('Flucify server running..');
})



// 404 error handler middleware
app.use(pathErrorHandler);
// Global error handler middleware
app.use(globalErrorHandler);

module.exports = app;
const server = require('./server');

// every enviornment variable in node will be in the process.env object
const port = process.env.PORT || 8000;
server.listen(port, () => console.log('API running'));
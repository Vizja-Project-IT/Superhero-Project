const app = require('./app');

const port = process.env.PORT || 8000; // set the port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
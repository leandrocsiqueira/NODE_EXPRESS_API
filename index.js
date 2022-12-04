import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

/* Default route */
app.get('/', (req, res) => {
  res.send('Hello from Home Page');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Running on port: http://localhost:${port}`);
});

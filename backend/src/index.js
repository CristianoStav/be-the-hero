import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();
const { PORT } = process.env;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

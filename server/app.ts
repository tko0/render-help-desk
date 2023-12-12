import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ticketRouter from './routes/TicketRouter';
import { sequelize } from './db/index';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());
app.use('/tickets', ticketRouter);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

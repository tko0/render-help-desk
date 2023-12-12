import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ticketRouter from './routes/TicketRouter';
import { sequelize } from './db/index';
import next from 'next';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

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
    // Serve the Next.js front end and public directory
    app.use(express.static(path.join(__dirname, '.next/server')));
    app.use(express.static(path.join(__dirname, 'public')));

    // Handle other routes with Next.js
    app.get('*', (req, res) => {
      return handle(req, res);
    });

    // Start the combined server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

nextApp.prepare().then(() => {});

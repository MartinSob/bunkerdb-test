import express from 'express';
import { config } from './config/env';
import { routes } from './api';
import { connection } from "./database";

// Create express server
const app = express();
app.use(express.json())

const start = async (): Promise<void> => {
  try {
    await connection.sync();

    app.use('/', routes);
    app.listen(config.PORT, () => {
      console.log(`🟢 Server running at http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();

export default app;
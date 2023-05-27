import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as superheroRouter } from './routes/superheroes';
import { initDb } from './database/initDb.js';
import { Superhero } from './models/superhero';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const SUPERHEROES_ENDPOINT = '/superheroes';

const server = express();

server.use(cors());
server.use(express.static('public'));

const sequelize = await initDb();

sequelize.addModels([Superhero]);

server.listen(PORT, '0.0.0.0', () => {
  global.console.log(`Server is running on PORT = ${PORT}`);
});

server.use(SUPERHEROES_ENDPOINT, express.json(), superheroRouter);

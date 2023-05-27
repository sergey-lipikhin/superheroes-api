import { initDb } from './initDb';
import { readSuperheroesSync } from '../helpers/readSuperheroesSync';
import { ISuperhero } from '../types/ISuperhero';
import { Superhero } from '../models/superhero';

const syncDb = async() => {
  global.console.log('START');

  const superheroes: Readonly<ISuperhero>[] = readSuperheroesSync();

  const sequelize = await initDb();

  sequelize.addModels([Superhero]);

  await Superhero.sync({ force: true });

  Superhero.bulkCreate(superheroes)
    .then(() => global.console.log('Data inserted into database'))
    .catch((err) => global.console.error('Error inserting data:', err));

  global.console.log('Tables succesfully synchronized');
};

syncDb();

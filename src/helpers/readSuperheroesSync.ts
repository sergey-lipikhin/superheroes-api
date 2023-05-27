import fs from 'fs';
import { ISuperhero } from '../types/ISuperhero';

export const readSuperheroesSync = (): Readonly<ISuperhero>[] => (
  JSON.parse(
    fs.readFileSync(new URL('../superheroes.json', import.meta.url), 'utf8'),
  )
);

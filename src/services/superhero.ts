import { Superhero } from '../models/superhero';

const getAll = async(): Promise<Superhero[]> => (
  Superhero.findAll()
);

export default {
  getAll,
};

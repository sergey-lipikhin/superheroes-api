import { Request, Response } from 'express';
import superheroService from '../services/superhero';

export const getAll = async(req: Request, res: Response) => {
  const superheroes = await superheroService.getAll();

  res.send(superheroes);
};

export default {
  getAll,
};

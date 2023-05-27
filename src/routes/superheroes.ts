import express from 'express';
import superheroController from '../controllers/superhero';

export const router = express.Router();

router.get('/', superheroController.getAll);

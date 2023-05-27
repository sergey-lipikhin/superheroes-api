import {
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from '../types/SequelizeConfig';
import { Superhero } from '../models/superhero';

export const setModels = (
  sequelizeConfig: SequelizeConfigLocal | SequelizeConfigRemote,
): void => {
  if (sequelizeConfig.options) {
    sequelizeConfig.options.models = [Superhero];
  }
};

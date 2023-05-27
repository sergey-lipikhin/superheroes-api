import {
  AllowNull,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes, Optional } from 'sequelize';
import { ISuperhero } from '../types/ISuperhero';

export interface SuperheroAttributes extends ISuperhero {
  id: string;
}

interface SuperheroCreationAttributes
  extends Optional<SuperheroAttributes, 'id'> {}

@Table({
  tableName: 'superheroes',
  timestamps: false,
})
export class Superhero
  extends Model<SuperheroAttributes, SuperheroCreationAttributes> {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    nickname: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    realName: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    originDescription: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    superpowers: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    catchPhrase: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    images: string;
}

import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Employee } from "./Employee";

@Table
export class Company extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.ENUM,
    values: ['UY', 'BR', 'AR'],
    allowNull: false,
    defaultValue: 'UY',
  })
  country!: string;

  @HasMany(() => Employee)
  employees!: Employee[];
}
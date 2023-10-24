import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Company } from "./Company";

@Table
export class Employee extends Model {
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    field: 'document_number'
  })
  documentNumber!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'first_name'
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'last_name'
  })
  lastName!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'date_admission'
  })
  dateAdmission!: Date;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
    field: 'company_id'
  })
  companyId!: number;

  @BelongsTo(() => Company)
  company!: Company;
}
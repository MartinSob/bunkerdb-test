import { Sequelize } from "sequelize-typescript";
import { config } from './../config/env';
import { Company, Employee } from "../models";

export const connection = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    dialect: 'mysql',
    host: config.DB_HOST,
    logging: false,
    models: [Company, Employee],
    define: {
        timestamps: false
    }
});
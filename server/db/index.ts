import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.Internal_URL,
  port: parseInt(process.env.Port || '5432'),
  username: process.env.Username,
  password: process.env.Password,
  database: process.env.Database,
});

export { sequelize };
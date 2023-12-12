import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'dpg-clrp7nbip8as739v9ulg-a.ohio-postgres.render.com',
  port: 5432,
  username: 'tickets_ptqx_user',
  password: '5rAcVSAza3SvaYxWPqojUupBgUFUT5qC',
  database: 'tickets_ptqx',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });

export { sequelize };

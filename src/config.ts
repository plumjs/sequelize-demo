import { Options } from 'sequelize'

interface IConfig {
  dbOptions: Options
  dbOptions2: Options
}

const config: IConfig = {
  dbOptions: {
    database: 'sequelize-demo',
    username: 'admin',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: true,
    port: 3307,
  },

  dbOptions2: {
    database: 'acl_service',
    username: 'developer',
    password: 'Sdh2@>3~"acf#Mb)',
    host: 'stg-payment-service.ccbqfeo28jki.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql',
    logging: true,
    port: 3306,
  },
}

export { config }

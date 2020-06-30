import { Sequelize } from 'sequelize'
import { config } from './config'

let sequelize: any = null
;(async () => {
  sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      // createdAt and UpdatedAt
      timestamps: true,
    },
  })
  // await sequelize.authenticate()
})()

export { sequelize }

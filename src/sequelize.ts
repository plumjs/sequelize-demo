import { Sequelize } from 'sequelize'
import { config } from './config'

let sequelize: Sequelize = null
;(async () => {
  sequelize = new Sequelize(config.dbOptions)
  await sequelize.authenticate()
})()
export { sequelize }

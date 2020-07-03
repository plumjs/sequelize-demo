import { Sequelize } from 'sequelize'
import { config } from './config'

let sequelize: Sequelize = null
;(async () => {
  sequelize = new Sequelize(config.dbOptions2)
  await sequelize.authenticate()
})()

export { sequelize }

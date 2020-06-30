import { sequelize } from '../sequelize'
import { default as Umzug } from 'umzug'
import path from 'path'

const seeder = new Umzug({
  migrations: {
    path: path.join(__dirname, '/seeders/'),
    params: [sequelize.getQueryInterface()],
  },
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize,
    pattern: /^\d+[\w-]+\.js$/,
    modelName: 'SequelizeData',
    logging: false,
  },
})

console.log(path.join(__dirname, '/seeders/'))

export { seeder }

import { sequelize } from '../sequelize'
import { default as Umzug } from 'umzug'
import path from 'path'

const migration = new Umzug({
  migrations: {
    path: path.join(__dirname, '/migrations/'),
    params: [sequelize.getQueryInterface()],
  },
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize,
    pattern: /^\d+[\w-]+\.js$/,
    modelName: 'SequelizeMeta',
    logging: false,
  },
})

export { migration }

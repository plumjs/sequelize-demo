const Automate = require('sequelize-automate')
import { config } from '../src/config'

const options = {
  type: 'ts',
  dir: 'src/models',
  typesDir: 'src/models/interfaces',
  skipTables: ['SequelizeData', 'SequelizeMeta'],
  tsNoCheck: true,
  emptyDir: true,
}

;(async function main() {
  const automate = new Automate(config.dbOptions, options)
  await automate.run()
  console.log('generate models done')
})()

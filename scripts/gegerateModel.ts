/**
 * @desc 在有migrte发生后执行, 依据数据库表结构生成model文件
 */
import Automate from 'sequelize-automate'
import { config } from '../src/config'

const options = {
  type: 'ts',
  dir: 'src/models',
  typesDir: 'src/models/interfaces',
  skipTables: ['SequelizeData', 'SequelizeMeta'],
  tsNoCheck: true,
  emptyDir: false,
}

;(async function main() {
  const automate = new Automate(config.dbOptions, options)
  await automate.run()
  console.log('generate models done')
})()

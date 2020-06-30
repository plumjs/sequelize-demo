import { migration } from './migration'
import { seeder } from './seeder'
;(async () => {
  await seeder.down()
  await migration.down()
})()

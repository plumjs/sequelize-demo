import { migration } from './migration'
import { seeder } from './seeder'
;(async () => {
  await migration.up()
  await seeder.up()
})()

import { User, Role, Router } from '../models'

/*
    1. 与findCreateFind 类似，匹配到多条时，只返回头一条
    2. 可以在transaction中使用
    3. create主键冲突时抛出SequelizeUniqueConstraintError
 */
;(async () => {
  const [role, flag] = await Role.findOrCreate({
    where: { id: 7 },
    defaults: {
      id: 6,
      name: 'testor6',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  console.log('role:', role)
  console.log('flag:', flag)
})()

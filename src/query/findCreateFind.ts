import { User, Role, Router } from '../models'

/*
    1. 不能在transaction中使用， 与findOrCreate 等价
    2. where 匹配到多个值时，只取第一个
    3. create主键冲突时不会抛出错误，而是flag为false
 */
;(async () => {
  const [role, flag] = await Role.findCreateFind({
    where: { id: 3 },
    defaults: {
      id: 3,
      name: 'testor3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })
  console.log('role:', role)
  console.log('flag:', flag)
})()

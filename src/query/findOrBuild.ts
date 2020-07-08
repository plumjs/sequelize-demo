import { User, Role, Router } from '../models'

/*
    1. where匹配多条时只返回头一条
    2. 与findOrCreate类似，区别在于只build， 不save
    3. 若查询不到数据，无论defaults有无设置，build动作都会进行，{ name: null, createdAt: null, updatedAt: null, id: 19 },
 */
;(async () => {
  const [role, initialized] = await Role.findOrBuild({
    where: { id: 19 },
  })
  console.log('role:', role)
  console.log('initialized:', initialized)
})()

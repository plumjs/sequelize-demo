import { User, Role, Router } from '../models'

/*
    1. reload 和 find的区别只在有关联查询时体现，若instance上存在关联对象，reload会重新查询他们
 */
;(async () => {
  const payload = {
    id: 10,
    name: 'testor10',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const role = await Role.build(payload)
  await role.reload()
  console.log('_role:', role)
})()

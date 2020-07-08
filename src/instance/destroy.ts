import { User, Role, Router } from '../models'

/*
    1. destroy 执行delete操作，不会销毁当前内存中的值
 */
;(async () => {
  const payload = {
    id: 10,
    name: 'testor10',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const role = await Role.build(payload)
  await role.save()
  role.destroy()
  console.log('_role:', role)
})()

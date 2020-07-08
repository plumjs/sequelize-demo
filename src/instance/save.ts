import { User, Role, Router } from '../models'

/*
    1. save后返回新值
 */
;(async () => {
  const payload = {
    id: 9,
    name: 'testor7',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const role = await Role.build(payload)
  const _role = await role.save()
  console.log('_role:', role)
  role.destroy
})()

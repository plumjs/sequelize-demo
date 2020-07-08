import { User, Role, Router } from '../models'

/*
    1. 主键冲突时报错
    2. 
 */
;(async () => {
  const payload = {
    id: 7,
    name: 'testor7',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const role = await Role.create(payload)
  console.log('role:', role)
})()

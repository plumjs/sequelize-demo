import { User, Role, Router } from '../models'

/*
    1. 当某一个执行失败的时候，整个批次都失败
    2. 当updateOnDuplicate有值时, 主键重复执行更新操作，updateOnDuplicate: string[] 为需要更新的字段
    所以，bulkCreate也可以当作批量更新使用
 */
;(async () => {
  const payload = {
    id: 9,
    name: 'testor9',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const payload2 = {
    id: 8,
    name: 'testor8',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const roles = await Role.bulkCreate([payload, payload2], {
    updateOnDuplicate: ['name'],
  })
  console.log('role:', roles)
})()

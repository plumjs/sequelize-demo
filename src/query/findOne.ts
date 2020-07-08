import { User, Role, Router } from '../models'

/*
    1. where匹配到多条时，只取头一条
 */
;(async () => {
  const role = await Role.findOne({
    where: {},
  })
  console.log('role:', role)
})()

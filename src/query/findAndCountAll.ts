import { User, Role, Router } from '../models'

/*
    1. 当include 关系中存在 many to many 关系时， count是 笛卡尔积
 */
;(async () => {
  const { rows, count } = await Role.findAndCountAll({
    include: [
      {
        model: Router,
      },
      {
        model: User,
      },
    ],
  })
  console.log('rows:', rows)
  console.log('count:', count)
})()

import { User, Role, Router } from '../models'

/*
  1. 当一对多关系查询时，返回结果中会自动加上外键
  2. 关联查询到的字段本不存在于class, 要用get取到
 */

// ;(async () => {
//   const user = await User.findAll({
//     include: [
//       {
//         model: Role,
//       },
//     ],
//   })
//   console.log('user:', user)
// })()
;(async () => {
  const roles = await Role.findAll({
    include: [
      {
        model: Router,
      },
      {
        model: User,
      },
    ],
  })
  console.log('roles:', roles)
})()
// ;(async () => {
//   const routers = await Router.findAll({
//     include: [
//       {
//         model: Role,
//       },
//     ],
//   })
//   console.log('routers:', routers)
// })()

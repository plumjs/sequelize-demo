//@ts-nocheck
import { RoleModel, UserModel } from '../models'
/**
 * 返回 object[]
 */
;(async () => {
  const user = await RoleModel.scope('withUser').findAll({
    include: [{ model: UserModel, where: { id: 1 } }],
    // where: { id: 1, name: 'admin', '$user.id$': 1 },
    limit: 10,
  })
  console.log('user:', user)
})()

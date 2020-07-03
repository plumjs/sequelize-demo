//@ts-nocheck
import { UserModel } from '../models'

/**
 * 返回 object[]
 */
;(async () => {
  const user = await UserModel.findAll({})
  console.log('user:', user)
})()

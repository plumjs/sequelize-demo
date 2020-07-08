import { User, Role, Router } from '../models'
import { Op } from 'sequelize'

/*
    1. 返回删除的行数
 */
;(async () => {
  const roles = await Role.destroy({ where: { id: { [Op.in]: [8, 9] } } })
  console.log('role:', roles)
})()

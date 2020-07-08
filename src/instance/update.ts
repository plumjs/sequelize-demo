import { User, Role, Router } from '../models'

/*
    1. upate 等价于 set && save, 所以update的返回值是新值
 */
;(async () => {
  const role = await Role.findByPk(1, { include: [{ model: User }] })
  const user = await User.findByPk(1)
  //   role.setAttributes({ name: 'testor9' })
  await user.update({ name: 'John4' })
  console.log('_role:', Array(role.get('Users')).pop())
  await role.reload({ include: [{ model: User }] })
  console.log('_role:', Array(role.get('Users')).pop())
})()

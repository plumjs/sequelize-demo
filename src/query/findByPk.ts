import { User, Role, Router } from '../models'

/*
 */
;(async () => {
  const role = await Role.findByPk(1, {
    include: [
      {
        model: Router,
      },
      {
        model: User,
      },
    ],
  })
  console.log('role:', role)
})()

Role.findCreateFind

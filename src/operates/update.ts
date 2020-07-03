import { User } from '../models'

/**
 * 返回创建成功的object
 */
;(async () => {
  const [number, users] = await User.update(
    {
      name: '12',
    },
    {
      where: {
        id: 1,
      },
    }
  )
  console.log('number:', number)
  console.log('user:', users)
})()

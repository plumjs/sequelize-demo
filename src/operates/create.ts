import { User } from '../models'

/**
 * 返回创建成功的object
 */
;(async () => {
  const user = await User.create({
    id: '2',
    name: '2',
  })
  console.log('user:', user)
})()

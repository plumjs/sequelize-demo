import { User } from '../models'
/**
 * - 返回删除成功的数量
 */
;(async () => {
  const user = await User.destroy({
    where: {
      id: '21',
    },
  })
})()

import { User, Role, Router } from '../models'

/*
    1. 主键冲突时报错
    2. 当存在json类型的字段时得小心, 每次对json的更新都是全量覆盖，所以若是只更新json一部分，json字段的其他部分会被删除
 */
;(async () => {
  const payload = {
    metaData: {
      prodName: 'prod2',
    },
  }
  const [num, roles] = await Role.update(payload, { where: { id: 7 } })
  console.log('num:', num)
  console.log('roles:', roles)
})()

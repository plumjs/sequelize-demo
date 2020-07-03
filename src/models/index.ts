//@ts-nocheck
// import user from './users'
// import role from './roles'
import service from './services'
import { sequelize } from '../sequelize'

// const UserModel = user(sequelize)
// const RoleModel = role(sequelize)
const ServiceModel = service(sequelize)

// RoleModel.hasOne(UserModel)
// RoleModel.addScope('withUser', {
//   include: UserModel,
// })
export { UserModel, RoleModel, ServiceModel }

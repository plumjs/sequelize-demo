import { Role } from './role'
import { User } from './user'
import { Router } from './router'
import { sequelize } from '../sequelize'

Role.associate(sequelize.models)
User.associate(sequelize.models)
Router.associate(sequelize.models)

const keys = Object.keys(sequelize.models)
console.log('keys:', keys)
export { Role, User, Router }

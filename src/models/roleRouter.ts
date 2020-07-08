//@ts-nocheck
import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../sequelize'

const attributes = {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    autoIncrement: false,
    comment: null,
  },
  roleId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: null,
    autoIncrement: false,
    comment: null,
  },
  RouterId: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: null,
    autoIncrement: false,
    comment: null,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
  },
}
const options = {
  sequelize,
  underscored: true,
  comment: '',
  indexes: [],
}

class RoleRouter extends Model {}
RoleRouter.init(attributes, options)

export { RoleRouter }

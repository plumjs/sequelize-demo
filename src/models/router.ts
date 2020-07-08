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
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null,
  },
  path: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
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
class Router extends Model {
  static associate = function (models) {
    const { Role } = models
    Router.belongsToMany(Role, { through: 'role_router' })
  }
}
Router.init(attributes, options)

export { Router }

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
  metaData: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: null,
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
class Role extends Model {
  static associate = function (models) {
    const { User, Router } = models
    Role.hasMany(User, { foreignKey: 'role_id' })
    Role.belongsToMany(Router, { through: 'role_router' })
  }
}
Role.init(attributes, options)

export { Role }

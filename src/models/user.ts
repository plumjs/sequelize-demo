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
  roleId: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
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
class User extends Model {
  static associate = function (models) {
    const { Role } = models
    // Role.hasMany(User, { foreignKey: 'role_id' })
    User.belongsTo(Role, { foreignKey: 'role_id' })
  }
}
User.init(attributes, options)

export { User }

//@ts-nocheck
import { Sequelize, DataTypes } from 'sequelize'
export default function (sequelize: Sequelize) {
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    redirectUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'redirect_url',
    },
    pathPrefix: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'path_prefix',
    },
    clientId: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'client_id',
    },
    // base64
    secret: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // base64
    secretIv: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'secret_iv',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }
  const options = {
    tableName: 'services',
    comment: '',
    indexes: [],
  }
  const ServiceModel = sequelize.define('services', attributes, options)
  return ServiceModel
}

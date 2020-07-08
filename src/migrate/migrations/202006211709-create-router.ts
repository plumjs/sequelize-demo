import { DataTypes, QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('routers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'path',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
  })
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('routers')
}

export default { up, down }

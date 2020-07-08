import { DataTypes, QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('role_router', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id',
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'role_id',
    },
    routerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'router_id',
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
  await queryInterface.dropTable('role_router')
}

export default { up, down }

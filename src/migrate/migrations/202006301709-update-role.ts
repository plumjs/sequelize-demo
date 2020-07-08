import { DataTypes, QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.addColumn('roles', 'meta_data', {
    type: DataTypes.JSON,
    allowNull: true,
  })
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.removeColumn('roles', 'meta_data')
}

export default { up, down }

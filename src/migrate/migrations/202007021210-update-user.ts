import { DataTypes, QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.addColumn('users', 'roleId', {
    type: DataTypes.INTEGER,
  })
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.removeColumn('users', 'roleId')
}

export default { up, down }

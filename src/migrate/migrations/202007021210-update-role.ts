import { DataTypes, QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.addColumn('roles', 'userId', {
    type: DataTypes.INTEGER,
  })
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.removeColumn('roles', 'userId')
}

export default { up, down }

import { QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('roles', [
    {
      id: 1,
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('roles', null, {})
}

export default { up, down }

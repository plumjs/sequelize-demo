import { QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('users', [
    {
      id: 1,
      name: 'John',
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('users', null, {})
}

export default { up, down }

import { QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('role_router', [
    {
      id: 1,
      role_id: 1,
      router_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      role_id: 1,
      router_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      role_id: 2,
      router_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      role_id: 2,
      router_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('role_router', null, {})
}

export default { up, down }

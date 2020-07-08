import { QueryInterface } from 'sequelize'

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('routers', [
    {
      id: 1,
      name: 'create prod',
      path: '/create',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'update prod',
      path: '/update',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])
}

async function down(queryInterface: QueryInterface) {
  await queryInterface.bulkDelete('routers', null, {})
}

export default { up, down }

import * as Knex from 'knex'

const tables = {
  users: 'users',
}

export const up = (knex: Knex) => {
  return knex.schema.createTable(tables.users, (table) => {
    table.increments('id').primary()
    table
      .string('email')
      .unique()
      .notNullable()
      .index('idx_users_email')
    table.string('password').notNullable()
    table.string('name').notNullable()

    table.boolean('deleted').defaultTo(false)
    table.timestamps(false, true)
  })
}

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists(tables.users)
}

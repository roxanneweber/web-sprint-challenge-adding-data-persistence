
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable()
        tbl.string('project_description')
        tbl.boolean('project_completed').defaultTo(0)
    })
    .createTable('resources', (tbl) => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128).unique().notNullable()
        tbl.string('resource_description')
    })
    .createTable('tasks', (tbl) => {
        tbl.increments('task_id')
        tbl.string('task_description').notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed').defaultTo(0)
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('project_resources', (tbl) => {
        tbl.increments()
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};

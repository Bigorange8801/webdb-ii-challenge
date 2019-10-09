
exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('cars', tbl => {
      // creates a primary key called id
      tbl.increments();

      tbl.text('VIN', 17).unique().notNullable();
      // creates a text field called name which is both required and unique
      tbl.string('make', 80).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.string('model',80).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission_type',80);
      tbl.string('title_status',80)
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('cars');
  };

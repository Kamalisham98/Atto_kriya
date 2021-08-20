
import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    "progressboard",
    (table: Knex.TableBuilder) => {
      table.increments("id").primary().notNullable().unique();
      table.string("activity").notNullable();
      table.boolean("todo");
      table.boolean("onprogress");
      table.boolean("done");
      table.timestamps(true, true);
    }
  );
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("progressboard");
}

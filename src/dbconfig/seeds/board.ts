import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("progressboard").del();

    // Inserts seed entries
    await knex("progressboard").insert([
        { id: 1, activity: "learn python",todo:"true",onprogress:"false",done:"false" },
        { id: 2, activity: "learn javascript",todo:"false",onprogress:"true",done:"false" },
        { id: 3, activity: "learn linux ubuntu",todo:"false",onprogress:"false",done:"true" }


    ]);
};

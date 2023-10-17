import { Database } from "duckdb-async";

async function simpleTest() {
  const db = await Database.create("needful_things(12).duckdb");
  const rows = await db.all("select * from INFORMATION_SCHEMA.COLUMNS");
  console.log(rows);
}

simpleTest();
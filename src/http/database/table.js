import { sql } from "./sql.js";


sql`
  CREATE TABLE Transactions (
    id          TEXT PRIMARY KEY,
    description TEXT,
    money       TEXT,
    date        INTEGER
  );

`.then(() =>{
  console.log("created")
})
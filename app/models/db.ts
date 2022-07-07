import { Client } from "https://deno.land/x/mysql/mod.ts";
export const db = await new Client().connect({
  hostname: "db",
  username: "docker",
  db: "test_database",
  password: "docker",
});

import {
  pgTable,
  serial,
  text,
  integer,
  date,
  varchar,
  PgColumn,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const pool = new pg.Pool({
  host: "database-2.cfm0mqamw3pb.ap-northeast-2.rds.amazonaws.com",
  port: 5432,
  user: "inpiniti",
  password: "!Wjd53850",
  database: "postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);

export const Work = pgTable("work", {
  id: serial("id").primaryKey(),
  work_name: text("work_name").notNull(),
  work_item: text("work_item").notNull(),
  work_size: text("work_size").notNull(),
  work_quantity: integer("work_quantity").notNull(),
  work_description: text("work_description"),
  work_status: text("work_status").notNull(),
  work_registration_date: date("work_registration_date").notNull(),
  customer_name: text("customer_name").notNull(),
  customer_phone: text("customer_phone").notNull(),
  customer_address: text("customer_address").notNull(),
  customer_email: text("customer_email").notNull(),
  deadline: date("deadline").notNull(),
  work_width: integer("work_width").notNull(),
});

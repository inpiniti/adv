import { d as defineEventHandler } from '../../runtime.mjs';
import { d as db, W as Work } from '../../_/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/node-postgres';
import 'pg';

const work_get = defineEventHandler(async (event) => {
  const result = await db.select().from(Work);
  return result;
});

export { work_get as default };
//# sourceMappingURL=work.get.mjs.map

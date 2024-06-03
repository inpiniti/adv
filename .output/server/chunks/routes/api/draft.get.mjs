import { d as defineEventHandler } from '../../runtime.mjs';
import { d as db, D as Draft } from '../../_/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/node-postgres';
import 'pg';

const draft_get = defineEventHandler(async (event) => {
  const result = await db.select().from(Draft);
  return result;
});

export { draft_get as default };
//# sourceMappingURL=draft.get.mjs.map

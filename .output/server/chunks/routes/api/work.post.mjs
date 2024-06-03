import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
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

const work_post = defineEventHandler(async (event) => {
  const newWork = await readBody(event);
  const result = await db.insert(Work).values(newWork);
  return result;
});

export { work_post as default };
//# sourceMappingURL=work.post.mjs.map

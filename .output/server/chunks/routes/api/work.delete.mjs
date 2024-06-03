import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { d as db, W as Work } from '../../_/index.mjs';
import { eq } from 'drizzle-orm';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/node-postgres';
import 'pg';

const work_delete = defineEventHandler(async (event) => {
  const newWork = await readBody(event);
  const result = await db.delete(Work).where(eq(Work.id, newWork.id));
  return result;
});

export { work_delete as default };
//# sourceMappingURL=work.delete.mjs.map

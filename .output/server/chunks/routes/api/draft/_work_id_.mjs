import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { d as db, D as Draft } from '../../../_/index.mjs';
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

const _work_id_ = defineEventHandler(async (event) => {
  const work_id = getRouterParam(event, "work_id");
  const result = await db.select().from(Draft).where(eq(Draft.work_id, Number(work_id)));
  return result;
});

export { _work_id_ as default };
//# sourceMappingURL=_work_id_.mjs.map

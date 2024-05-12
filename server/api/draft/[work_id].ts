import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const work_id = getRouterParam(event, "work_id");
  const result = await db
    .select()
    .from(Draft)
    .where(eq(Draft.work_id, Number(work_id)));
  return result;
});

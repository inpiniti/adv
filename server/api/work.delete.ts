import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const newWork = await readBody(event);
  const result = await db.delete(Work).where(eq(Work.id, newWork.id));
  return result;
});

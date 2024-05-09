export default defineEventHandler(async (event) => {
  const result = await db.select().from(Work);
  return result;
});

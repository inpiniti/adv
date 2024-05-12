export default defineEventHandler(async (event) => {
  const result = await db.select().from(Draft);
  return result;
});

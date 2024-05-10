export default defineEventHandler(async (event) => {
  const newWork = await readBody(event);
  const result = await db.insert(Work).values(newWork);
  return result;
});

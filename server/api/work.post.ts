export default defineEventHandler(async (event) => {
  const newWork = await readBody(event);
  console.log(newWork);
  const result = await db.insert(Work).values(newWork);
  return result;
});

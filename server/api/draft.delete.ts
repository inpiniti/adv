import { inArray } from "drizzle-orm";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

export default defineEventHandler(async (event) => {
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION || !AWS_BUCKET_NAME) {
    throw new Error("환경 변수가 설정되지 않았습니다.");
  }

  const newDrafts = await readBody(event);
  const draft_ids = newDrafts.map(async (newDraft: any) => newDraft.draft_id);
  const result = await db.delete(Draft).where(inArray(Draft.draft_id, draft_ids));

  const s3 = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  const deleteParams = newDrafts.map(async (newDraft: any) => {
    const urlObject = (newDraft.draft_image_path = new URL(newDraft.draft_image_path));
    const key = urlObject.pathname.substring(1);
    return {
      Bucket: AWS_BUCKET_NAME,
      Key: key,
    };
  });

  deleteParams.forEach(async (deleteParam: any) => {
    // Delete the file from S3
    await s3.send(new DeleteObjectCommand(deleteParam));
  });

  return result;
});

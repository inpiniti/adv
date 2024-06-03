import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { d as db, D as Draft } from '../../_/index.mjs';
import { inArray } from 'drizzle-orm';
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/node-postgres';
import 'pg';

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION;
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const draft_delete = defineEventHandler(async (event) => {
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION || !AWS_BUCKET_NAME) {
    throw new Error("\uD658\uACBD \uBCC0\uC218\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
  }
  const newDrafts = await readBody(event);
  const draft_ids = newDrafts.map((newDraft) => newDraft.draft_id);
  const result = await db.delete(Draft).where(inArray(Draft.draft_id, draft_ids));
  const s3 = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
  });
  const deleteParams = newDrafts.map((newDraft) => {
    const urlObject = newDraft.draft_image_path = new URL(
      newDraft.draft_image_path
    );
    const key = urlObject.pathname.substring(1);
    return {
      Bucket: AWS_BUCKET_NAME,
      Key: key
    };
  });
  deleteParams.forEach(async (deleteParam) => {
    await s3.send(new DeleteObjectCommand(deleteParam));
  });
  return result;
});

export { draft_delete as default };
//# sourceMappingURL=draft.delete.mjs.map

import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { d as db, D as Draft } from '../../_/index.mjs';
import { S3Client, ObjectCannedACL, PutObjectCommand } from '@aws-sdk/client-s3';
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
const draft_post = defineEventHandler(async (event) => {
  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION || !AWS_BUCKET_NAME) {
    throw new Error("\uD658\uACBD \uBCC0\uC218\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
  }
  const s3 = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
  });
  const body = await readBody(event);
  const file = body.files[0];
  const base64Data = file.content.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = Buffer.from(base64Data, "base64");
  const timestamp = (/* @__PURE__ */ new Date()).getTime();
  const key = `${timestamp}`;
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
    Body: dataBuffer,
    ContentType: file.mimetype,
    ACL: ObjectCannedACL.public_read
  };
  await s3.send(new PutObjectCommand(params));
  const url = `https://${AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
  await db.insert(Draft).values({
    work_id: body.work_id,
    draft_image_path: url,
    draft_registration_date: (/* @__PURE__ */ new Date()).toISOString()
  });
  return url;
});

export { draft_post as default };
//# sourceMappingURL=draft.post.mjs.map

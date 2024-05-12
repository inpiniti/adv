import {
  S3Client,
  PutObjectCommand,
  ObjectCannedACL,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default defineEventHandler(async (event) => {
  // NUXT 런타임 환경 구성에서 AWS 액세스 키, 시크릿 액세스 키 및 REGION을 가져옴
  //const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = useRuntimeConfig();
  const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
  const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
  const AWS_REGION = process.env.AWS_REGION;
  const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

  if (
    !AWS_ACCESS_KEY_ID ||
    !AWS_SECRET_ACCESS_KEY ||
    !AWS_REGION ||
    !AWS_BUCKET_NAME
  ) {
    throw new Error("환경 변수가 설정되지 않았습니다.");
  }

  // 내 S3 버킷을 지정한 S3 클라이언트 객체 생성
  //AWS SDK에서 제공하는 S3 서비스를 이용하기 위해 사용하는 객체입니다. 이 객체를 생성하면, S3에 파일을 업로드하거나 다운로드, 삭제 등의 작업을 수행할 수 있습니다. S3 클라이언트 객체는 AWS 액세스 키, 시크릿 액세스 키, REGION 등의 인증 정보를 사용하여 AWS 서비스와 통신합니다. 이를 통해 S3 서비스와 상호 작용하는 API를 호출할 수 있습니다.
  const s3 = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  // 핸들러 이벤트에서 쿼리를 가져옴
  let query: any = getQuery(event);

  // 파일을 요청 본문에서 가져옴
  const body = await readBody(event);

  // 각 파일을 S3에 업로드
  const file = body.files[0];
  const base64Data = file.content.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = Buffer.from(base64Data, "base64");

  console.log("file", file);
  console.log("buffer", file.buffer);

  // 현재 시간을 기반으로 고유한 파일 키 생성
  const timestamp = new Date().getTime();
  const key = `${timestamp}`;

  // S3에 업로드될 파일의 속성을 정의하는 매개 변수 객체 생성
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: key,
    Body: dataBuffer,
    ContentType: file.mimetype,
    ACL: ObjectCannedACL.public_read,
  };

  // 파일을 S3에 업로드
  await s3.send(new PutObjectCommand(params));

  // 업로드된 파일의 URL 생성
  const url = `https://${AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;

  // URL 반환
  return url;
});

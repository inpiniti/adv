-- 시안 생성 쿼리
-- 시안은 작업id, 시안id, 시안이미지 경로, 시안등록일로 구성된다.

CREATE TABLE draft (
    draft_id SERIAL PRIMARY KEY,
    work_id INTEGER NOT NULL,
    draft_image_path TEXT NOT NULL,
    draft_registration_date DATE NOT NULL
);
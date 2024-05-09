-- 작업 생성 쿼리
-- 작업은 id, 작업명, 작업품목, 작업사이즈, 작업수량, 작업내용, 작업상태, 작업등록일, 고객명, 고객전화번호, 고객주소로 구성된다.
CREATE TABLE work (
    id SERIAL PRIMARY KEY,
    work_name TEXT NOT NULL,
    work_item TEXT NOT NULL,
    work_size TEXT NOT NULL,
    work_quantity INTEGER NOT NULL,
    work_description TEXT,
    work_status TEXT NOT NULL,
    work_registration_date DATE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_address TEXT NOT NULL
);

-- 고객 이메일, 마감일, 작업 넓이를 추가 하고 싶다. 
ALTER TABLE work
ADD COLUMN customer_email TEXT,
ADD COLUMN deadline DATE,
ADD COLUMN work_width INT;

-- 최종
CREATE TABLE work (
    id SERIAL PRIMARY KEY,
    work_name TEXT NOT NULL,
    work_item TEXT NOT NULL,
    work_size TEXT NOT NULL,
    work_quantity INTEGER NOT NULL,
    work_description TEXT,
    work_status TEXT NOT NULL,
    work_registration_date DATE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_address TEXT NOT NULL,
    customer_email TEXT,
    deadline DATE,
    work_width INT
);
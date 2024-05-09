export interface IWork {
  id: number;
  work_name: string;
  work_item: string;
  work_size: string;
  work_quantity: number;
  work_description?: string;
  work_status: string;
  work_registration_date: string;
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  customer_email: string;
  deadline: string;
  work_width: number;
}

export const WORK_ITEM = {
  billboard: "현수막",
  banner: "배너",
  car_magnet: "차량자석",
  roll_poster: "롤포스터",
  shoulder_strap: "어깨띠",
  name_tag: "명찰",
  print: "인쇄",
  synthetic_paper: "합성지",
  pet: "펫트",
  transparent_film: "투명필름",
  others: "기타",
};

export const works = () => useState<IWork[]>("works");
export const work = () => useState<IWork>("work");

async function get(): Promise<IWork[]> {
  const response = await fetch("/api/work", {
    method: "get",
  });
  return response.json() as unknown as IWork[];
}

async function post(data: IWork): Promise<IWork> {
  const response = await fetch("/api/work", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json() as unknown as IWork;
}

export const useWork = () => {
  return {
    get,
    post,
  };
};

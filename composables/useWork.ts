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

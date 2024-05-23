export interface IItem {
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

export const ITEM_ITEM = {
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

// 제작 : 진행전, 제작중, 제작완료
// 컨펌 : draft_id
// 설치 : 설치전, 설치완료
// 입금 : 입금전, 입금완료

// 시안유무 :
// 제작유무 :
// 설치유무 :
// 크레인유무 :
// 크레인 사용 시간 : 자동계산 (시간별 가격)
// 고급인건비 : 3
// 할인 :

// 제품단가 : 미리 지정되어 있어야 함

// 예상 견적 : (프로그램으로 계산)
// 금액 : 시안단가
// 금액 : 제품단가 * 수량
// 금액 : 설치단가 * 수량
// 크레인단가 * 시간 + 인건비 * 인원

const items = useState<IWork[]>("items");
const item = useState<IWork>("item");

async function getFetch(): Promise<IWork[]> {
  const response = await fetch("/api/work", {
    method: "get",
  });
  return response.json() as unknown as IWork[];
}

async function postFetch(data: IWork): Promise<IWork> {
  const response = await fetch("/api/work", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json() as unknown as IWork;
}

async function delFetch(data: IWork): Promise<IWork> {
  const response = await fetch("/api/work", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json() as unknown as IWork;
}

const getItem = () => {
  return item;
};

const setItem = (newItem: IWork) => {
  item.value = newItem;
};

const getItems = () => {
  return items;
};

const setItems = (newItems: IWork[]) => {
  items.value = newItems;
};

export const useItem = (function () {
  return {
    getItem,
    setItem,

    getItems,
    setItems,

    getFetch,
    postFetch,
    delFetch,
  };
})();

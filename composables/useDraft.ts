export interface IDraft {
  draft_id: number;
  work_id: number;
  draft_image_path: string;
  draft_registration_date: string;
  selected?: boolean;
}

export const drafts = () => useState<IDraft[]>("drafts");

async function get(): Promise<IDraft[]> {
  const response = await fetch(`/api/draft/${work().value.id}`, {
    method: "get",
  });
  return response.json() as unknown as IDraft[];
}

async function del(datas: IDraft[]): Promise<IDraft> {
  const response = await fetch("/api/draft", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  });
  return response.json() as unknown as IDraft;
}

export const useDraft = () => {
  return {
    get,
    del,
  };
};

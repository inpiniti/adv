import { b as useState, w as work } from './useWork-D2_cs7qF.mjs';

const drafts = () => useState("drafts");
async function get() {
  const response = await fetch(`/api/draft/${work().value.id}`, {
    method: "get"
  });
  return response.json();
}
async function del(datas) {
  const response = await fetch("/api/draft", {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datas)
  });
  return response.json();
}
const useDraft = () => {
  return {
    get,
    del
  };
};

export { drafts as d, useDraft as u };
//# sourceMappingURL=useDraft-BvD2kqXe.mjs.map

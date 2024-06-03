import { toRef, isRef } from 'vue';
import { c as useNuxtApp } from './server.mjs';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const WORK_ITEM = {
  billboard: "\uD604\uC218\uB9C9",
  banner: "\uBC30\uB108",
  car_magnet: "\uCC28\uB7C9\uC790\uC11D",
  roll_poster: "\uB864\uD3EC\uC2A4\uD130",
  shoulder_strap: "\uC5B4\uAE68\uB760",
  name_tag: "\uBA85\uCC30",
  print: "\uC778\uC1C4",
  synthetic_paper: "\uD569\uC131\uC9C0",
  pet: "\uD3AB\uD2B8",
  transparent_film: "\uD22C\uBA85\uD544\uB984",
  others: "\uAE30\uD0C0"
};
const works = () => useState("works");
const work = () => useState("work");
async function get() {
  const response = await fetch("/api/work", {
    method: "get"
  });
  return response.json();
}
async function post(data) {
  const response = await fetch("/api/work", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
async function del(data) {
  const response = await fetch("/api/work", {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
const useWork = () => {
  return {
    get,
    post,
    del
  };
};

export { WORK_ITEM as W, works as a, useState as b, useWork as u, work as w };
//# sourceMappingURL=useWork-D2_cs7qF.mjs.map

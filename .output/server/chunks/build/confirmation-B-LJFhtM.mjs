import { _ as _sfc_main$1 } from './Card-T9vkftQH.mjs';
import { d as drafts, u as useDraft } from './useDraft-BvD2kqXe.mjs';
import { defineComponent, watch, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { w as work } from './useWork-D2_cs7qF.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import 'vue-sonner';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const _drafts = drafts();
    watch(
      () => [work().value],
      () => {
        onRefresh();
      },
      { deep: true }
    );
    async function onRefresh() {
      drafts().value = await useDraft().get();
    }
    function onSelect(draft) {
      drafts().value.forEach((d) => {
        d.selected = false;
      });
      draft.selected = !draft.selected;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex flex-col gap-4 overflow-hidden" }, _attrs))}><div><h1 class="text-lg font-bold">\uACE0\uAC1D \uCEF4\uD38C</h1><p class="text-sm text-muted-foreground">\uCD9C\uB825\uD560 \uC2DC\uC548\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.</p></div><!--[-->`);
      ssrRenderList(unref(_drafts), (draft) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Card, {
          class: "h-44 w-fit relative cursor-pointer",
          onClick: ($event) => onSelect(draft)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (draft.selected) {
                _push2(`<div class="absolute w-full h-full border-4 border-neutral-600 rounded-md"${_scopeId}></div>`);
              } else {
                _push2(`<div class="absolute w-full h-full bg-black bg-opacity-20 hover:bg-opacity-0 rounded-md"${_scopeId}></div>`);
              }
              _push2(`<img class="rounded-lg h-44"${ssrRenderAttr("src", draft.draft_image_path)} alt="draft"${_scopeId}>`);
            } else {
              return [
                draft.selected ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute w-full h-full border-4 border-neutral-600 rounded-md"
                })) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "absolute w-full h-full bg-black bg-opacity-20 hover:bg-opacity-0 rounded-md"
                })),
                createVNode("img", {
                  class: "rounded-lg h-44",
                  src: draft.draft_image_path,
                  alt: "draft"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=confirmation-B-LJFhtM.mjs.map

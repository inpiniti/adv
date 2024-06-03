import { _ as _sfc_main$1 } from './Card-T9vkftQH.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "production",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 p-4" }, _attrs))}><div><h1 class="text-lg font-bold">\uC81C\uC791</h1><p class="text-sm text-muted-foreground">\uC81C\uC791\uC911\uC778 \uC0AC\uC9C4 \uB4F1\uB85D \uBC0F \uC0C1\uD0DC \uBCC0\uACBD\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><div class="flex gap-1 items-center">`);
      _push(ssrRenderComponent(_component_Card, { class: "px-2 py-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC9C4\uD589\uC804`);
          } else {
            return [
              createTextVNode("\uC9C4\uD589\uC804")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>\uFF1E</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "px-2 py-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC81C\uC791\uC911`);
          } else {
            return [
              createTextVNode("\uC81C\uC791\uC911")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>\uFF1E</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "px-2 py-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC81C\uC791\uC644\uB8CC`);
          } else {
            return [
              createTextVNode("\uC81C\uC791\uC644\uB8CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/production.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=production-CUPxtvG5.mjs.map

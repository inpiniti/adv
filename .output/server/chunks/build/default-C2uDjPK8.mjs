import { _ as __nuxt_component_0$1 } from './nuxt-link-CAYYkv-T.mjs';
import { useSSRContext, defineComponent, ref, computed, unref, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$b } from './Separator-BbNSTfUM.mjs';
import { ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner, useForwardPropsEmits, TabsRoot, useForwardProps, TabsTrigger, TabsList } from 'radix-vue';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _sfc_main$c } from './Card-T9vkftQH.mjs';
import { cva } from 'class-variance-authority';
import { b as useState, w as work, W as WORK_ITEM, a as works } from './useWork-D2_cs7qF.mjs';
import { n as navigateTo } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'clsx';
import 'tailwind-merge';
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

const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="p-4 font-bold cursor-pointer"${_scopeId}>\uAD11\uACE0\uB098\uB77C</div>`);
      } else {
        return [
          createVNode("div", { class: "p-4 font-bold cursor-pointer" }, "\uAD11\uACE0\uB098\uB77C")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "flex touch-none select-none transition-colors",
          _ctx.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
          _ctx.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps(delegatedProps.value, {
        class: unref(cn)("relative overflow-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$9),
              createVNode(unref(ScrollAreaCorner))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(badgeVariants)({ variant: _ctx.variant }), props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/badge/Badge.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const useShowDetail = () => useState("showDetail", () => false);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "work",
  __ssrInlineRender: true,
  props: {
    _work: {}
  },
  setup(__props) {
    const props = __props;
    function onClickWork() {
      useShowDetail().value = true;
      work().value = work().value = props._work;
      const section = useState("section");
      navigateTo(`/${section.value || "dashboard"}`);
    }
    const remainingDays = computed(() => {
      if (props._work.deadline) {
        let deadline = new Date(props._work.deadline);
        let today = /* @__PURE__ */ new Date();
        let diff = deadline.getTime() - today.getTime();
        let days = Math.ceil(diff / (1e3 * 60 * 60 * 24));
        return days;
      }
      return 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$c;
      const _component_Badge = _sfc_main$7;
      _push(ssrRenderComponent(_component_Card, mergeProps({
        onClick: onClickWork,
        class: ["cursor-pointer", { "bg-neutral-100": ("work" in _ctx ? _ctx.work : unref(work))().value == props._work }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            if (_ctx._work) {
              _push2(`<div class="p-2 text-xs flex flex-col gap-1"${_scopeId}><div class="flex justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Badge, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate(("WORK_ITEM" in _ctx ? _ctx.WORK_ITEM : unref(WORK_ITEM))[(_a2 = _ctx._work) == null ? void 0 : _a2.work_item])}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("WORK_ITEM" in _ctx ? _ctx.WORK_ITEM : unref(WORK_ITEM))[(_b2 = _ctx._work) == null ? void 0 : _b2.work_item]), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>${ssrInterpolate(unref(remainingDays))}\uC77C \uB0A8\uC74C</div></div><div class="text-sm font-bold"${_scopeId}>${ssrInterpolate((_a = _ctx._work) == null ? void 0 : _a.work_name)}</div><div class="flex gap-3"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="text-neutral-400"${_scopeId}>\uACE0\uAC1D</div><div${_scopeId}>${ssrInterpolate((_b = _ctx._work) == null ? void 0 : _b.customer_name)}</div></div><div class="flex flex-col"${_scopeId}><div class="text-neutral-400"${_scopeId}>\uC5F0\uB77D\uCC98</div><div${_scopeId}>${ssrInterpolate((_c = _ctx._work) == null ? void 0 : _c.customer_phone)}</div></div></div><div class="text-neutral-400"${_scopeId}>${ssrInterpolate((_d = _ctx._work) == null ? void 0 : _d.work_registration_date)} ~ ${ssrInterpolate((_e = _ctx._work) == null ? void 0 : _e.deadline)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx._work ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-2 text-xs flex flex-col gap-1"
              }, [
                createVNode("div", { class: "flex justify-between" }, [
                  createVNode(_component_Badge, null, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createTextVNode(toDisplayString(("WORK_ITEM" in _ctx ? _ctx.WORK_ITEM : unref(WORK_ITEM))[(_a2 = _ctx._work) == null ? void 0 : _a2.work_item]), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode("div", null, toDisplayString(unref(remainingDays)) + "\uC77C \uB0A8\uC74C", 1)
                ]),
                createVNode("div", { class: "text-sm font-bold" }, toDisplayString((_f = _ctx._work) == null ? void 0 : _f.work_name), 1),
                createVNode("div", { class: "flex gap-3" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("div", { class: "text-neutral-400" }, "\uACE0\uAC1D"),
                    createVNode("div", null, toDisplayString((_g = _ctx._work) == null ? void 0 : _g.customer_name), 1)
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("div", { class: "text-neutral-400" }, "\uC5F0\uB77D\uCC98"),
                    createVNode("div", null, toDisplayString((_h = _ctx._work) == null ? void 0 : _h.customer_phone), 1)
                  ])
                ]),
                createVNode("div", { class: "text-neutral-400" }, toDisplayString((_i = _ctx._work) == null ? void 0 : _i.work_registration_date) + " ~ " + toDisplayString((_j = _ctx._work) == null ? void 0 : _j.deadline), 1)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/nav/work.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "nav",
  __ssrInlineRender: true,
  setup(__props) {
    const _works = works();
    const onClick = () => {
      useShowDetail().value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Card = _sfc_main$c;
      const _component_NavWork = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 flex flex-col gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/work.post" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, {
              class: "p-2 text-sm",
              onClick
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+ \uC8FC\uBB38 \uB4F1\uB85D`);
                } else {
                  return [
                    createTextVNode("+ \uC8FC\uBB38 \uB4F1\uB85D")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, {
                class: "p-2 text-sm",
                onClick
              }, {
                default: withCtx(() => [
                  createTextVNode("+ \uC8FC\uBB38 \uB4F1\uB85D")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/item.post" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, {
              class: "p-2 text-sm",
              onClick
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+ \uBB3C\uD488 \uB4F1\uB85D`);
                } else {
                  return [
                    createTextVNode("+ \uBB3C\uD488 \uB4F1\uB85D")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, {
                class: "p-2 text-sm",
                onClick
              }, {
                default: withCtx(() => [
                  createTextVNode("+ \uBB3C\uD488 \uB4F1\uB85D")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(_works), (_work) => {
        _push(ssrRenderComponent(_component_NavWork, { _work }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/nav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsList), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useMobile = () => useState("mobile", () => false);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "section",
  __ssrInlineRender: true,
  setup(__props) {
    const section = useState("section", () => "");
    function onClickSection() {
      navigateTo(`/${section.value}`);
    }
    const isMobile = useMobile();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScrollArea = _sfc_main$8;
      const _component_Tabs = _sfc_main$4;
      const _component_TabsList = _sfc_main$2;
      const _component_TabsTrigger = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-2 flex justify-between items-center gap-4 w-svw lg:w-full" }, _attrs))}><div class="shrink-0">`);
      if (unref(isMobile)) {
        _push(`<div class="font-extrabold">\uFF1C</div>`);
      } else {
        _push(`<div class="font-bold">\uC791\uC5C5 \uD604\uD669</div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ScrollArea, { class: "grow-[0]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tabs, {
              "default-value": "dashboard",
              modelValue: unref(section),
              "onUpdate:modelValue": ($event) => isRef(section) ? section.value = $event : null,
              onClick: onClickSection
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TabsTrigger, { value: "dashboard" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC8FC\uBB38 `);
                            } else {
                              return [
                                createTextVNode(" \uC8FC\uBB38 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TabsTrigger, { value: "draft" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC2DC\uC548 `);
                            } else {
                              return [
                                createTextVNode(" \uC2DC\uC548 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TabsTrigger, { value: "confirmation" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uCEF4\uD38C `);
                            } else {
                              return [
                                createTextVNode(" \uCEF4\uD38C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TabsTrigger, { value: "production" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC81C\uC791 `);
                            } else {
                              return [
                                createTextVNode(" \uC81C\uC791 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TabsTrigger, { value: "installation" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC124\uCE58 `);
                            } else {
                              return [
                                createTextVNode(" \uC124\uCE58 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TabsTrigger, { value: "payment" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC785\uAE08 `);
                            } else {
                              return [
                                createTextVNode(" \uC785\uAE08 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TabsTrigger, { value: "dashboard" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC8FC\uBB38 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TabsTrigger, { value: "draft" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC2DC\uC548 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TabsTrigger, { value: "confirmation" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uCEF4\uD38C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TabsTrigger, { value: "production" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC81C\uC791 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TabsTrigger, { value: "installation" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC124\uCE58 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TabsTrigger, { value: "payment" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC785\uAE08 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsList, null, {
                      default: withCtx(() => [
                        createVNode(_component_TabsTrigger, { value: "dashboard" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC8FC\uBB38 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, { value: "draft" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC2DC\uC548 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, { value: "confirmation" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uCEF4\uD38C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, { value: "production" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC81C\uC791 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, { value: "installation" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC124\uCE58 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabsTrigger, { value: "payment" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC785\uAE08 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Tabs, {
                "default-value": "dashboard",
                modelValue: unref(section),
                "onUpdate:modelValue": ($event) => isRef(section) ? section.value = $event : null,
                onClick: onClickSection
              }, {
                default: withCtx(() => [
                  createVNode(_component_TabsList, null, {
                    default: withCtx(() => [
                      createVNode(_component_TabsTrigger, { value: "dashboard" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC8FC\uBB38 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, { value: "draft" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC2DC\uC548 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, { value: "confirmation" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCEF4\uD38C ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, { value: "production" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC81C\uC791 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, { value: "installation" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC124\uCE58 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, { value: "payment" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC785\uAE08 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    const showMenuOnMobile = computed(() => !useMobile().value || !useShowDetail().value);
    const showDetailOnMobile = computed(() => !useMobile().value || useShowDetail().value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeader = __nuxt_component_0;
      const _component_Separator = _sfc_main$b;
      const _component_ScrollArea = _sfc_main$8;
      const _component_LayoutNav = _sfc_main$5;
      const _component_LayoutSection = _sfc_main$1;
      if (unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-svw h-svh flex items-center justify-center bg-neutral-50" }, _attrs))}>\uB85C\uB529 \uC911...</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen h-svh overflow-hidden flex" }, _attrs))}>`);
        if (unref(showMenuOnMobile)) {
          _push(`<div class="lg:shrink-0 lg:w-56 w-full flex flex-col"><div class="shrink-0">`);
          _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_Separator, null, null, _parent));
          _push(ssrRenderComponent(_component_ScrollArea, { class: "grow-[0]" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_LayoutNav, null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_LayoutNav)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Separator, {
          class: "hidden lg:block",
          orientation: "vertical"
        }, null, _parent));
        if (unref(showDetailOnMobile)) {
          _push(`<div class="lg:grow-[0] lg:w-full lg:flex flex flex-col"><div class="shrink-0">`);
          _push(ssrRenderComponent(_component_LayoutSection, null, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_Separator, null, null, _parent));
          _push(ssrRenderComponent(_component_ScrollArea, { class: "grow-[0] bg-neutral-50 h-full" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "default")
                ];
              }
            }),
            _: 3
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C2uDjPK8.mjs.map

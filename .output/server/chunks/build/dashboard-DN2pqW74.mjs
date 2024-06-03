import { _ as _sfc_main$1 } from './Separator-BbNSTfUM.mjs';
import { _ as _sfc_main$2 } from './Card-T9vkftQH.mjs';
import { _ as _sfc_main$3 } from './Label-rgxaPhcX.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './index-BSpxBB5v.mjs';
import { _ as _sfc_main$8, a as _sfc_main$7, b as _sfc_main$6, c as _sfc_main$5, d as _sfc_main$4$1, e as _sfc_main$3$1, f as _sfc_main$2$1, g as _sfc_main$9, h as _sfc_main$1$2 } from './AlertDialogCancel-Di7NPHA9.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { w as work, W as WORK_ITEM, u as useWork, a as works } from './useWork-D2_cs7qF.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'radix-vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import 'class-variance-authority';
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
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const _work = work();
    async function onClickDelete() {
      loading.value = true;
      await useWork().del(work().value);
      works().value = await useWork().get();
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Separator = _sfc_main$1;
      const _component_Card = _sfc_main$2;
      const _component_Label = _sfc_main$3;
      const _component_Input = _sfc_main$1$1;
      const _component_AlertDialog = _sfc_main$8;
      const _component_AlertDialogTrigger = _sfc_main$7;
      const _component_Button = _sfc_main$4;
      const _component_AlertDialogContent = _sfc_main$6;
      const _component_AlertDialogHeader = _sfc_main$5;
      const _component_AlertDialogTitle = _sfc_main$4$1;
      const _component_AlertDialogDescription = _sfc_main$3$1;
      const _component_AlertDialogFooter = _sfc_main$2$1;
      const _component_AlertDialogCancel = _sfc_main$9;
      const _component_AlertDialogAction = _sfc_main$1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex flex-col gap-4" }, _attrs))}><div><h3 class="text-lg font-bold">\uB300\uC2DC\uBCF4\uB4DC</h3><p class="text-sm text-muted-foreground">\uC791\uC5C5 \uD604\uD669\uC744 \uD55C\uB208\uC5D0 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<div class="flex lg:gap-4 gap-1 items-center">`);
      _push(ssrRenderComponent(_component_Card, { class: "lg:p-4 p-1 bg-neutral-200" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC8FC\uBB38`);
          } else {
            return [
              createTextVNode("\uC8FC\uBB38")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>&gt;</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "lg:p-4 p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC2DC\uC548`);
          } else {
            return [
              createTextVNode("\uC2DC\uC548")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>&gt;</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "lg:p-4 p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uCEF4\uD38C`);
          } else {
            return [
              createTextVNode("\uCEF4\uD38C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>&gt;</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "lg:p-4 p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC81C\uC791`);
          } else {
            return [
              createTextVNode("\uC81C\uC791")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>&gt;</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "lg:p-4 p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC124\uCE58`);
          } else {
            return [
              createTextVNode("\uC124\uCE58")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>&gt;</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "lg:p-4 p-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC785\uAE08`);
          } else {
            return [
              createTextVNode("\uC785\uAE08")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      if (unref(_work)) {
        _push(`<div class="flex flex-col gap-3"><div class="grid w-full items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_Label, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uC81C\uBAA9`);
            } else {
              return [
                createTextVNode("\uC81C\uBAA9")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(_work).work_name,
          "onUpdate:modelValue": ($event) => unref(_work).work_name = $event,
          type: "type",
          readonly: ""
        }, null, _parent));
        _push(`</div><div class="grid w-full items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_Label, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uD488\uBAA9`);
            } else {
              return [
                createTextVNode("\uD488\uBAA9")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Input, {
          modelValue: ("WORK_ITEM" in _ctx ? _ctx.WORK_ITEM : unref(WORK_ITEM))[(_a = unref(_work)) == null ? void 0 : _a.work_item],
          "onUpdate:modelValue": ($event) => {
            var _a2;
            return ("WORK_ITEM" in _ctx ? _ctx.WORK_ITEM : unref(WORK_ITEM))[(_a2 = unref(_work)) == null ? void 0 : _a2.work_item] = $event;
          },
          type: "type",
          readonly: ""
        }, null, _parent));
        _push(`</div><div class="grid w-full items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_Label, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uC0AC\uC774\uC988`);
            } else {
              return [
                createTextVNode("\uC0AC\uC774\uC988")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex gap-4 items-center">`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(_work).work_size,
          "onUpdate:modelValue": ($event) => unref(_work).work_size = $event,
          type: "type",
          readonly: ""
        }, null, _parent));
        _push(`<div class="text-neutral-400">x</div>`);
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(_work).work_width,
          "onUpdate:modelValue": ($event) => unref(_work).work_width = $event,
          type: "type",
          readonly: ""
        }, null, _parent));
        _push(`</div></div><div class="grid w-full items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_Label, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uC218\uB7C9`);
            } else {
              return [
                createTextVNode("\uC218\uB7C9")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(_work).work_quantity,
          "onUpdate:modelValue": ($event) => unref(_work).work_quantity = $event,
          type: "type",
          readonly: ""
        }, null, _parent));
        _push(`</div><div class="grid w-full items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_Label, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uB0B4\uC6A9`);
            } else {
              return [
                createTextVNode("\uB0B4\uC6A9")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Input, {
          modelValue: unref(_work).work_description,
          "onUpdate:modelValue": ($event) => unref(_work).work_description = $event,
          type: "type",
          placeholder: "\uB0B4\uC6A9"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_AlertDialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AlertDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` loading... `);
                        } else {
                          return [
                            createTextVNode(" loading... ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \uC8FC\uBB38 \uC0AD\uC81C `);
                        } else {
                          return [
                            createTextVNode(" \uC8FC\uBB38 \uC0AD\uC81C ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(loading) ? (openBlock(), createBlock(_component_Button, {
                      key: 0,
                      variant: "destructive"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" loading... ")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_Button, {
                      key: 1,
                      variant: "destructive"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \uC8FC\uBB38 \uC0AD\uC81C ")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AlertDialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AlertDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AlertDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??`);
                            } else {
                              return [
                                createTextVNode("\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AlertDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD55C\uBC88 \uC0AD\uC81C\uD558\uBA74 \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uBA70, \uB418\uB3CC\uB9B4\uC218 \uC5C6\uC2B5\uB2C8\uB2E4. `);
                            } else {
                              return [
                                createTextVNode(" \uD55C\uBC88 \uC0AD\uC81C\uD558\uBA74 \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uBA70, \uB418\uB3CC\uB9B4\uC218 \uC5C6\uC2B5\uB2C8\uB2E4. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AlertDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AlertDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \uD55C\uBC88 \uC0AD\uC81C\uD558\uBA74 \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uBA70, \uB418\uB3CC\uB9B4\uC218 \uC5C6\uC2B5\uB2C8\uB2E4. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AlertDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AlertDialogCancel, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC544\uB2C8\uC624`);
                            } else {
                              return [
                                createTextVNode("\uC544\uB2C8\uC624")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AlertDialogAction, { onClick: onClickDelete }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB124`);
                            } else {
                              return [
                                createTextVNode("\uB124")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AlertDialogCancel, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC544\uB2C8\uC624")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AlertDialogAction, { onClick: onClickDelete }, {
                            default: withCtx(() => [
                              createTextVNode("\uB124")
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
                    createVNode(_component_AlertDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_AlertDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AlertDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \uD55C\uBC88 \uC0AD\uC81C\uD558\uBA74 \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uBA70, \uB418\uB3CC\uB9B4\uC218 \uC5C6\uC2B5\uB2C8\uB2E4. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AlertDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_AlertDialogCancel, null, {
                          default: withCtx(() => [
                            createTextVNode("\uC544\uB2C8\uC624")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AlertDialogAction, { onClick: onClickDelete }, {
                          default: withCtx(() => [
                            createTextVNode("\uB124")
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
              createVNode(_component_AlertDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  unref(loading) ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    variant: "destructive"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" loading... ")
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    variant: "destructive"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \uC8FC\uBB38 \uC0AD\uC81C ")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              createVNode(_component_AlertDialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_AlertDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_AlertDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C??")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \uD55C\uBC88 \uC0AD\uC81C\uD558\uBA74 \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uBA70, \uB418\uB3CC\uB9B4\uC218 \uC5C6\uC2B5\uB2C8\uB2E4. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AlertDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_AlertDialogCancel, null, {
                        default: withCtx(() => [
                          createTextVNode("\uC544\uB2C8\uC624")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDialogAction, { onClick: onClickDelete }, {
                        default: withCtx(() => [
                          createTextVNode("\uB124")
                        ]),
                        _: 1
                      })
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
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DN2pqW74.mjs.map

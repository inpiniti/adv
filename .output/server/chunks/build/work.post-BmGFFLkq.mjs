import { _ as _sfc_main$1 } from './Separator-BbNSTfUM.mjs';
import { _ as _sfc_main$2 } from './Label-rgxaPhcX.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './index-BSpxBB5v.mjs';
import { c as cn, _ as _sfc_main$o, a as _sfc_main$m, b as _sfc_main$n, d as _sfc_main$l, e as _sfc_main$k, f as _sfc_main$i, g as _sfc_main$j, h as _sfc_main$f, i as _sfc_main$e, j as _sfc_main$d, k as _sfc_main$c, l as _sfc_main$4 } from './index-DZL9IkAS.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { u as useWork } from './useWork-D2_cs7qF.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { toast } from 'vue-sonner';
import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
import 'radix-vue';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import 'class-variance-authority';
import 'lucide-vue-next';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "work.post",
  __ssrInlineRender: true,
  setup(__props) {
    const df = new DateFormatter("ko-KR", {
      dateStyle: "long"
    });
    const value = ref();
    const _work = ref({});
    const loading = ref(false);
    watch(
      () => value.value,
      () => {
        if (value.value) {
          let date = value.value.toDate(getLocalTimeZone());
          let formattedDate = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
          _work.value.deadline = formattedDate;
        }
      },
      { deep: true }
    );
    async function workPost() {
      loading.value = true;
      await useWork().post({
        ..._work.value,
        work_status: "order",
        work_registration_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      });
      loading.value = false;
      toast("\uC8FC\uBB38 \uB4F1\uB85D\uC774 \uC644\uB8CC \uB418\uC5C8\uC2B5\uB2C8\uB2E4.", {
        description: `${_work.value.work_name} \uC8FC\uBB38\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`
      });
      useWork().get();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$1;
      const _component_Label = _sfc_main$2;
      const _component_Input = _sfc_main$1$1;
      const _component_Select = _sfc_main$o;
      const _component_SelectTrigger = _sfc_main$m;
      const _component_SelectValue = _sfc_main$n;
      const _component_SelectContent = _sfc_main$l;
      const _component_SelectGroup = _sfc_main$k;
      const _component_SelectLabel = _sfc_main$i;
      const _component_SelectItem = _sfc_main$j;
      const _component_Popover = _sfc_main$f;
      const _component_PopoverTrigger = _sfc_main$e;
      const _component_Button = _sfc_main$3;
      const _component_PopoverContent = _sfc_main$d;
      const _component_Calendar = _sfc_main$c;
      const _component_Switch = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex flex-col gap-4 h-full" }, _attrs))}><div><h3 class="text-lg font-bold">\uC8FC\uBB38 \uB4F1\uB85D</h3><p class="text-sm text-muted-foreground">\uC0C8\uB85C\uC6B4 \uC791\uC5C5\uC744 \uB4F1\uB85D\uD574\uC8FC\uC138\uC694. \uD604\uC218\uB9C9, \uC790\uC11D \uAE30\uD0C0 \uB4F1\uB4F1...</p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<div class="grid w-full items-center gap-1.5">`);
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
        modelValue: _work.value.work_name,
        "onUpdate:modelValue": ($event) => _work.value.work_name = $event,
        type: "type",
        placeholder: "\uC81C\uBAA9"
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
      _push(ssrRenderComponent(_component_Select, {
        modelValue: _work.value.work_item,
        "onUpdate:modelValue": ($event) => _work.value.work_item = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, {
                    class: "text-neutral-500",
                    placeholder: "\uD488\uBAA9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, {
                      class: "text-neutral-500",
                      placeholder: "\uD488\uBAA9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectLabel, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uD488\uBAA9`);
                            } else {
                              return [
                                createTextVNode("\uD488\uBAA9")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "billboard" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD604\uC218\uB9C9 `);
                            } else {
                              return [
                                createTextVNode(" \uD604\uC218\uB9C9 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "banner" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBC30\uB108 `);
                            } else {
                              return [
                                createTextVNode(" \uBC30\uB108 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "car_magnet" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uCC28\uB7C9\uC790\uC11D `);
                            } else {
                              return [
                                createTextVNode(" \uCC28\uB7C9\uC790\uC11D ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "roll_poster" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uB864\uD3EC\uC2A4\uD130 `);
                            } else {
                              return [
                                createTextVNode(" \uB864\uD3EC\uC2A4\uD130 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "shoulder_strap" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC5B4\uAE68\uB760 `);
                            } else {
                              return [
                                createTextVNode(" \uC5B4\uAE68\uB760 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "name_tag" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uBA85\uCC30 `);
                            } else {
                              return [
                                createTextVNode(" \uBA85\uCC30 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "print" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uC778\uC1C4 `);
                            } else {
                              return [
                                createTextVNode(" \uC778\uC1C4 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "synthetic_paper" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD569\uC131\uC9C0 `);
                            } else {
                              return [
                                createTextVNode(" \uD569\uC131\uC9C0 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "pet" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD3AB\uD2B8 `);
                            } else {
                              return [
                                createTextVNode(" \uD3AB\uD2B8 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "transparent_film" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uD22C\uBA85\uD544\uB984 `);
                            } else {
                              return [
                                createTextVNode(" \uD22C\uBA85\uD544\uB984 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "others" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \uAE30\uD0C0 `);
                            } else {
                              return [
                                createTextVNode(" \uAE30\uD0C0 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\uD488\uBAA9")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "billboard" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uD604\uC218\uB9C9 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "banner" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBC30\uB108 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "car_magnet" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uCC28\uB7C9\uC790\uC11D ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "roll_poster" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uB864\uD3EC\uC2A4\uD130 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "shoulder_strap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC5B4\uAE68\uB760 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "name_tag" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uBA85\uCC30 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "print" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uC778\uC1C4 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "synthetic_paper" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uD569\uC131\uC9C0 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "pet" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uD3AB\uD2B8 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "transparent_film" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uD22C\uBA85\uD544\uB984 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "others" }, {
                            default: withCtx(() => [
                              createTextVNode(" \uAE30\uD0C0 ")
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
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\uD488\uBAA9")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "billboard" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD604\uC218\uB9C9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "banner" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBC30\uB108 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "car_magnet" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uCC28\uB7C9\uC790\uC11D ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "roll_poster" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uB864\uD3EC\uC2A4\uD130 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "shoulder_strap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC5B4\uAE68\uB760 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "name_tag" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uBA85\uCC30 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "print" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uC778\uC1C4 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "synthetic_paper" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD569\uC131\uC9C0 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "pet" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD3AB\uD2B8 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "transparent_film" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uD22C\uBA85\uD544\uB984 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "others" }, {
                          default: withCtx(() => [
                            createTextVNode(" \uAE30\uD0C0 ")
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
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, {
                    class: "text-neutral-500",
                    placeholder: "\uD488\uBAA9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\uD488\uBAA9")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "billboard" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD604\uC218\uB9C9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "banner" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBC30\uB108 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "car_magnet" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uCC28\uB7C9\uC790\uC11D ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "roll_poster" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uB864\uD3EC\uC2A4\uD130 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "shoulder_strap" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC5B4\uAE68\uB760 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "name_tag" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uBA85\uCC30 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "print" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uC778\uC1C4 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "synthetic_paper" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD569\uC131\uC9C0 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "pet" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD3AB\uD2B8 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "transparent_film" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uD22C\uBA85\uD544\uB984 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "others" }, {
                        default: withCtx(() => [
                          createTextVNode(" \uAE30\uD0C0 ")
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
      _push(`<p class="text-neutral-400 text-xs">\uD604\uC218\uB9C9 X-Y \uBC30\uB108 \uCC28\uB7C9\uC790\uC11D \uB864\uD3EC\uC2A4\uD130 \uC5B4\uAE68\uB760 \uBA85\uCC30 \uC778\uC1C4 \uD569\uC131\uC9C0 \uD3AB\uD2B8 \uD22C\uBA85\uD544\uB984 \uAE30\uD0C0</p></div><div class="grid w-full items-center gap-1.5">`);
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
      _push(ssrRenderComponent(_component_Select, {
        modelValue: _work.value.work_size,
        "onUpdate:modelValue": ($event) => _work.value.work_size = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, {
                    class: "text-neutral-500",
                    placeholder: "\uD3ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, {
                      class: "text-neutral-500",
                      placeholder: "\uD3ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectLabel, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uD488\uBAA9`);
                            } else {
                              return [
                                createTextVNode("\uD488\uBAA9")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "60" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 60 `);
                            } else {
                              return [
                                createTextVNode(" 60 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "70" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 70 `);
                            } else {
                              return [
                                createTextVNode(" 70 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "90" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 90 `);
                            } else {
                              return [
                                createTextVNode(" 90 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "100" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 100 `);
                            } else {
                              return [
                                createTextVNode(" 100 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "110" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 110 `);
                            } else {
                              return [
                                createTextVNode(" 110 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "127" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 127 `);
                            } else {
                              return [
                                createTextVNode(" 127 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "150" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 150 `);
                            } else {
                              return [
                                createTextVNode(" 150 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "180" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 180 `);
                            } else {
                              return [
                                createTextVNode(" 180 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectItem, { value: "180\uC774\uC0C1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` 180\uC774\uC0C1 `);
                            } else {
                              return [
                                createTextVNode(" 180\uC774\uC0C1 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\uD488\uBAA9")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "60" }, {
                            default: withCtx(() => [
                              createTextVNode(" 60 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "70" }, {
                            default: withCtx(() => [
                              createTextVNode(" 70 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "90" }, {
                            default: withCtx(() => [
                              createTextVNode(" 90 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "100" }, {
                            default: withCtx(() => [
                              createTextVNode(" 100 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "110" }, {
                            default: withCtx(() => [
                              createTextVNode(" 110 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "127" }, {
                            default: withCtx(() => [
                              createTextVNode(" 127 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "150" }, {
                            default: withCtx(() => [
                              createTextVNode(" 150 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "180" }, {
                            default: withCtx(() => [
                              createTextVNode(" 180 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectItem, { value: "180\uC774\uC0C1" }, {
                            default: withCtx(() => [
                              createTextVNode(" 180\uC774\uC0C1 ")
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
                    createVNode(_component_SelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\uD488\uBAA9")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "60" }, {
                          default: withCtx(() => [
                            createTextVNode(" 60 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "70" }, {
                          default: withCtx(() => [
                            createTextVNode(" 70 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "90" }, {
                          default: withCtx(() => [
                            createTextVNode(" 90 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "100" }, {
                          default: withCtx(() => [
                            createTextVNode(" 100 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "110" }, {
                          default: withCtx(() => [
                            createTextVNode(" 110 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "127" }, {
                          default: withCtx(() => [
                            createTextVNode(" 127 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "150" }, {
                          default: withCtx(() => [
                            createTextVNode(" 150 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "180" }, {
                          default: withCtx(() => [
                            createTextVNode(" 180 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SelectItem, { value: "180\uC774\uC0C1" }, {
                          default: withCtx(() => [
                            createTextVNode(" 180\uC774\uC0C1 ")
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
              createVNode(_component_SelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, {
                    class: "text-neutral-500",
                    placeholder: "\uD3ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\uD488\uBAA9")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "60" }, {
                        default: withCtx(() => [
                          createTextVNode(" 60 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "70" }, {
                        default: withCtx(() => [
                          createTextVNode(" 70 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "90" }, {
                        default: withCtx(() => [
                          createTextVNode(" 90 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "100" }, {
                        default: withCtx(() => [
                          createTextVNode(" 100 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "110" }, {
                        default: withCtx(() => [
                          createTextVNode(" 110 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "127" }, {
                        default: withCtx(() => [
                          createTextVNode(" 127 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "150" }, {
                        default: withCtx(() => [
                          createTextVNode(" 150 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "180" }, {
                        default: withCtx(() => [
                          createTextVNode(" 180 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectItem, { value: "180\uC774\uC0C1" }, {
                        default: withCtx(() => [
                          createTextVNode(" 180\uC774\uC0C1 ")
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
      _push(`<div class="text-neutral-400">x</div>`);
      _push(ssrRenderComponent(_component_Input, {
        modelValue: _work.value.work_width,
        "onUpdate:modelValue": ($event) => _work.value.work_width = $event,
        type: "type",
        placeholder: "\uC0AC\uC774\uC988"
      }, null, _parent));
      _push(`</div><p class="text-neutral-400 text-xs">\uD604\uC218\uB9C9 \uADDC\uACA9\uD3ED : 60, 70, 90, 100, 110, 127, 150, 180cm... (180cm\uC774\uC0C1\uC740 2\uC7A5\uC774\uC0C1 \uC774\uC5B4 \uAC00\uACF5\uB429\uB2C8\uB2E4)</p></div><div class="grid w-full items-center gap-1.5">`);
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
        modelValue: _work.value.work_quantity,
        "onUpdate:modelValue": ($event) => _work.value.work_quantity = $event,
        type: "type",
        placeholder: "\uC218\uB7C9"
      }, null, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uC218\uB7C9</p></div><div class="grid w-full items-center gap-1.5">`);
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
        modelValue: _work.value.work_description,
        "onUpdate:modelValue": ($event) => _work.value.work_description = $event,
        type: "type",
        placeholder: "\uB0B4\uC6A9"
      }, null, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uC120\uD0DD\uD558\uC2E0 \uC0D8\uD50C\uC5D0\uC11C \uC218\uC815\uC0AC\uD56D\uC744 \uAE30\uC7AC\uD574 \uC8FC\uC138\uC694.</p></div><div class="grid w-full items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC774\uB984`);
          } else {
            return [
              createTextVNode("\uC774\uB984")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: _work.value.customer_name,
        "onUpdate:modelValue": ($event) => _work.value.customer_name = $event,
        type: "type",
        placeholder: "\uC774\uB984"
      }, null, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uACE0\uAC1D\uC758 \uC774\uB984 \uB610\uB294 \uC0C1\uD638\uBA85\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.</p></div><div class="grid w-full items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC804\uD654\uBC88\uD638`);
          } else {
            return [
              createTextVNode("\uC804\uD654\uBC88\uD638")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: _work.value.customer_phone,
        "onUpdate:modelValue": ($event) => _work.value.customer_phone = $event,
        type: "type",
        placeholder: "\uC804\uD654\uBC88\uD638"
      }, null, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uD734\uB300\uD3F0 \uBC88\uD638\uB4F1\uC758 \uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</p></div><div class="grid w-full items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC8FC\uC18C`);
          } else {
            return [
              createTextVNode("\uC8FC\uC18C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: _work.value.customer_address,
        "onUpdate:modelValue": ($event) => _work.value.customer_address = $event,
        type: "type",
        placeholder: "\uC8FC\uC18C"
      }, null, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uC124\uCE58 \uC7A5\uC18C \uB610\uB294 \uACE0\uAC1D\uC758 \uC601\uC5C5\uC7A5 \uC8FC\uC18C\uB97C \uC791\uC131\uD574 \uC8FC\uC138\uC694.</p></div><div class="grid w-full items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC774\uBA54\uC77C`);
          } else {
            return [
              createTextVNode("\uC774\uBA54\uC77C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: _work.value.customer_email,
        "onUpdate:modelValue": ($event) => _work.value.customer_email = $event,
        type: "type",
        placeholder: "\uC774\uBA54\uC77C"
      }, null, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uC774\uBA54\uC77C \uC8FC\uC18C\uB294 \uD544\uC218\uB294 \uC544\uB2D9\uB2C8\uB2E4.</p></div><div class="grid w-full items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uB9C8\uAC10\uC77C`);
          } else {
            return [
              createTextVNode("\uB9C8\uAC10\uC77C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Popover, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("w-[280px] justify-start text-left font-normal", !value.value && "text-muted-foreground")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(value.value ? unref(df).format(value.value.toDate(unref(getLocalTimeZone)())) : "Pick a date")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(value.value ? unref(df).format(value.value.toDate(unref(getLocalTimeZone)())) : "Pick a date"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))("w-[280px] justify-start text-left font-normal", !value.value && "text-muted-foreground")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(value.value ? unref(df).format(value.value.toDate(unref(getLocalTimeZone)())) : "Pick a date"), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, { class: "w-auto p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Calendar, {
                    modelValue: value.value,
                    "onUpdate:modelValue": ($event) => value.value = $event,
                    "initial-focus": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Calendar, {
                      modelValue: value.value,
                      "onUpdate:modelValue": ($event) => value.value = $event,
                      "initial-focus": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))("w-[280px] justify-start text-left font-normal", !value.value && "text-muted-foreground")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(value.value ? unref(df).format(value.value.toDate(unref(getLocalTimeZone)())) : "Pick a date"), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, { class: "w-auto p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_Calendar, {
                    modelValue: value.value,
                    "onUpdate:modelValue": ($event) => value.value = $event,
                    "initial-focus": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uD544\uC218\uB85C \uC9C0\uC815\uD574\uC8FC\uC138\uC694.</p></div><div class="w-full items-center gap-1.5 flex border rounded-lg p-4 bg-white"><div class="grow-[0] w-full">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC2DC\uC548\uC720\uBB34`);
          } else {
            return [
              createTextVNode("\uC2DC\uC548\uC720\uBB34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uD544\uC218\uB85C \uC9C0\uC815\uD574\uC8FC\uC138\uC694.</p></div><div class="shrink-0">`);
      _push(ssrRenderComponent(_component_Switch, null, null, _parent));
      _push(`</div></div><div class="w-full items-center gap-1.5 flex border rounded-lg p-4 bg-white"><div class="grow-[0] w-full">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC81C\uC791\uC720\uBB34`);
          } else {
            return [
              createTextVNode("\uC81C\uC791\uC720\uBB34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uD544\uC218\uB85C \uC9C0\uC815\uD574\uC8FC\uC138\uC694.</p></div><div class="shrink-0">`);
      _push(ssrRenderComponent(_component_Switch, null, null, _parent));
      _push(`</div></div><div class="w-full items-center gap-1.5 flex border rounded-lg p-4 bg-white"><div class="grow-[0] w-full">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC124\uCE58\uC720\uBB34`);
          } else {
            return [
              createTextVNode("\uC124\uCE58\uC720\uBB34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uD544\uC218\uB85C \uC9C0\uC815\uD574\uC8FC\uC138\uC694.</p></div><div class="shrink-0">`);
      _push(ssrRenderComponent(_component_Switch, null, null, _parent));
      _push(`</div></div><div class="w-full items-center gap-1.5 flex border rounded-lg p-4 bg-white"><div class="grow-[0] w-full">`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uD06C\uB808\uC778\uC720\uBB34`);
          } else {
            return [
              createTextVNode("\uD06C\uB808\uC778\uC720\uBB34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-neutral-400 text-xs">\uD544\uC218\uB85C \uC9C0\uC815\uD574\uC8FC\uC138\uC694.</p></div><div class="shrink-0">`);
      _push(ssrRenderComponent(_component_Switch, null, null, _parent));
      _push(`</div></div><div class="flex gap-4 text-xs">`);
      if (loading.value) {
        _push(ssrRenderComponent(_component_Button, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` loading... `);
            } else {
              return [
                createTextVNode(" loading... ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Button, { onClick: workPost }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\uC8FC\uBB38 \uB4F1\uB85D`);
            } else {
              return [
                createTextVNode("\uC8FC\uBB38 \uB4F1\uB85D")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(ssrRenderComponent(_component_Button, { variant: "outline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uCDE8\uC18C`);
          } else {
            return [
              createTextVNode("\uCDE8\uC18C")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work.post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=work.post-BmGFFLkq.mjs.map

import { _ as _sfc_main$2 } from './Card-T9vkftQH.mjs';
import { _ as _sfc_main$8, a as _sfc_main$7, b as _sfc_main$6, c as _sfc_main$5, d as _sfc_main$4, e as _sfc_main$3$1, f as _sfc_main$2$1, g as _sfc_main$9, h as _sfc_main$1$1 } from './AlertDialogCancel-Di7NPHA9.mjs';
import { a as _sfc_main$3 } from './index-BSpxBB5v.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$1$2, b as _sfc_main$a, c as _sfc_main$2$2, d as _sfc_main$4$1, e as _sfc_main$3$2 } from './TableRow-T6r4JwK6.mjs';
import { _ as _sfc_main$b } from './Checkbox-CyTJXP8e.mjs';
import { d as drafts, u as useDraft } from './useDraft-BvD2kqXe.mjs';
import { w as work } from './useWork-D2_cs7qF.mjs';
import { defineComponent, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import _sfc_main$1 from './dialog-DQVXHVZj.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
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
import 'vue-sonner';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "installation",
  __ssrInlineRender: true,
  setup(__props) {
    const _drafts = drafts();
    const _work = work();
    watch(
      () => [_work.value],
      () => {
        onRefresh();
      },
      { deep: true }
    );
    async function onRefresh() {
      _drafts.value = await useDraft().get();
    }
    function onClick(id) {
      const draft = _drafts.value.find((draft2) => draft2.draft_id === id);
      if (draft) {
        draft.selected = !draft.selected;
      }
    }
    async function onClickDelete() {
      const deletes = _drafts.value.filter((draft) => draft.selected == true);
      await useDraft().del(deletes);
      onRefresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$2;
      const _component_AlertDialog = _sfc_main$8;
      const _component_AlertDialogTrigger = _sfc_main$7;
      const _component_Button = _sfc_main$3;
      const _component_AlertDialogContent = _sfc_main$6;
      const _component_AlertDialogHeader = _sfc_main$5;
      const _component_AlertDialogTitle = _sfc_main$4;
      const _component_AlertDialogDescription = _sfc_main$3$1;
      const _component_AlertDialogFooter = _sfc_main$2$1;
      const _component_AlertDialogCancel = _sfc_main$9;
      const _component_AlertDialogAction = _sfc_main$1$1;
      const _component_Table = _sfc_main$5$1;
      const _component_TableHeader = _sfc_main$1$2;
      const _component_TableRow = _sfc_main$a;
      const _component_TableHead = _sfc_main$2$2;
      const _component_TableBody = _sfc_main$4$1;
      const _component_TableCell = _sfc_main$3$2;
      const _component_Checkbox = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex flex-col gap-4 overflow-hidden" }, _attrs))}><div><h1 class="text-lg font-bold">\uC124\uCE58 &amp; \uBC30\uC1A1</h1><p class="text-sm text-muted-foreground">\uC124\uCE58\uD55C \uC0AC\uC9C4 \uB4F1\uB85D \uBC0F \uC0C1\uD0DC \uBCC0\uACBD\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><div class="flex justify-between items-center"><div class="flex gap-1 items-center">`);
      _push(ssrRenderComponent(_component_Card, { class: "px-2 py-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC124\uCE58\uC804`);
          } else {
            return [
              createTextVNode("\uC124\uCE58\uC804")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>\uFF1E</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "px-2 py-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC124\uCE58\uC644\uB8CC`);
          } else {
            return [
              createTextVNode("\uC124\uCE58\uC644\uB8CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_AlertDialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AlertDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\uC0AD\uC81C`);
                      } else {
                        return [
                          createTextVNode("\uC0AD\uC81C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, { variant: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("\uC0AD\uC81C")
                      ]),
                      _: 1
                    })
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
                        _push4(ssrRenderComponent(_component_AlertDialogAction, {
                          onClick: ($event) => onClickDelete()
                        }, {
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
                          createVNode(_component_AlertDialogAction, {
                            onClick: ($event) => onClickDelete()
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\uB124")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
                        createVNode(_component_AlertDialogAction, {
                          onClick: ($event) => onClickDelete()
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\uB124")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
                  createVNode(_component_Button, { variant: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("\uC0AD\uC81C")
                    ]),
                    _: 1
                  })
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
                      createVNode(_component_AlertDialogAction, {
                        onClick: ($event) => onClickDelete()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\uB124")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Table, { class: "border rounded-lg border-separate" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHead, { class: "w-[100px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` id `);
                            } else {
                              return [
                                createTextVNode(" id ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uC2DC\uC548`);
                            } else {
                              return [
                                createTextVNode("\uC2DC\uC548")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHead, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\uB4F1\uB85D \uC2DC\uAC04`);
                            } else {
                              return [
                                createTextVNode("\uB4F1\uB85D \uC2DC\uAC04")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHead, { class: "w-[100px]" }, {
                            default: withCtx(() => [
                              createTextVNode(" id ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\uC2DC\uC548")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\uB4F1\uB85D \uC2DC\uAC04")
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
                    createVNode(_component_TableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHead, { class: "w-[100px]" }, {
                          default: withCtx(() => [
                            createTextVNode(" id ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\uC2DC\uC548")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\uB4F1\uB85D \uC2DC\uAC04")
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
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(_drafts), (draft) => {
                    _push3(ssrRenderComponent(_component_TableRow, {
                      key: draft.draft_id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, { class: "font-medium border-t" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Checkbox, {
                                  id: "terms",
                                  onClick: ($event) => onClick(draft.draft_id)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Checkbox, {
                                    id: "terms",
                                    onClick: ($event) => onClick(draft.draft_id)
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "border-t" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img class="rounded-lg h-44"${ssrRenderAttr("src", draft.draft_image_path)} alt="draft"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    class: "rounded-lg h-44",
                                    src: draft.draft_image_path,
                                    alt: "draft"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "border-t" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(draft.draft_registration_date)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(draft.draft_registration_date), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, { class: "font-medium border-t" }, {
                              default: withCtx(() => [
                                createVNode(_component_Checkbox, {
                                  id: "terms",
                                  onClick: ($event) => onClick(draft.draft_id)
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "border-t" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  class: "rounded-lg h-44",
                                  src: draft.draft_image_path,
                                  alt: "draft"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, { class: "border-t" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(draft.draft_registration_date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(_drafts), (draft) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: draft.draft_id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_TableCell, { class: "font-medium border-t" }, {
                            default: withCtx(() => [
                              createVNode(_component_Checkbox, {
                                id: "terms",
                                onClick: ($event) => onClick(draft.draft_id)
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "border-t" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "rounded-lg h-44",
                                src: draft.draft_image_path,
                                alt: "draft"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, { class: "border-t" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(draft.draft_registration_date), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_TableRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_TableHead, { class: "w-[100px]" }, {
                        default: withCtx(() => [
                          createTextVNode(" id ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\uC2DC\uC548")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TableHead, null, {
                        default: withCtx(() => [
                          createTextVNode("\uB4F1\uB85D \uC2DC\uAC04")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(_drafts), (draft) => {
                    return openBlock(), createBlock(_component_TableRow, {
                      key: draft.draft_id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, { class: "font-medium border-t" }, {
                          default: withCtx(() => [
                            createVNode(_component_Checkbox, {
                              id: "terms",
                              onClick: ($event) => onClick(draft.draft_id)
                            }, null, 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "border-t" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "rounded-lg h-44",
                              src: draft.draft_image_path,
                              alt: "draft"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, { class: "border-t" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(draft.draft_registration_date), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/installation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=installation-DSGNxsmM.mjs.map

import{_ as P}from"./Cew0VW_p.js";import{_ as j}from"./DlAUqK2U.js";import{o as l,x as h,w as a,a as u,n as p,c as f,C as x,H as N,u as o,I as T,B as b,b as t,d as m,t as w,W as z,v as V,s as S,P as W,z as A,F as I,q as H,D as M,E as K,G as F,A as R,Q as q,O as G,R as J,r as Q}from"./DvAY-tOQ.js";import{_ as U}from"./DMzI3QsP.js";import{_ as E}from"./4fN1j-3H.js";import{c as X}from"./Bb4qSo10.js";import{c as C}from"./BLYTg4dL.js";import{a3 as Y,a4 as Z,a5 as ee,a6 as se,a7 as te,_ as oe,a8 as ae,a as ne,a9 as re,aa as le}from"./CJnucW8x.js";const ce={},ie=u("div",{class:"p-4 font-bold cursor-pointer"},"광고나라",-1);function de(c,s){const n=P;return l(),h(n,{to:"/"},{default:a(()=>[ie]),_:1})}const ue=j(ce,[["render",de]]),_e=p({__name:"Badge",props:{variant:{},class:{}},setup(c){const s=c;return(n,r)=>(l(),f("div",{class:N(o(C)(o(fe)({variant:n.variant}),s.class))},[x(n.$slots,"default")],2))}}),fe=X("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),$=()=>T("showDetail",()=>!1),pe={key:0,class:"p-2 text-xs flex flex-col gap-1"},me={class:"flex justify-between"},ve={class:"text-sm font-bold"},he={class:"flex gap-3"},ge={class:"flex flex-col"},we=u("div",{class:"text-neutral-400"},"고객",-1),be={class:"flex flex-col"},ke=u("div",{class:"text-neutral-400"},"연락처",-1),xe={class:"text-neutral-400"},ye=p({__name:"work",props:{_work:{}},setup(c){const s=c;function n(){$().value=!0,S().value=S().value=s._work;const e=T("section");W(`/${e.value||"dashboard"}`)}const r=b(()=>{if(s._work.deadline){let e=new Date(s._work.deadline),i=new Date,_=e.getTime()-i.getTime();return Math.ceil(_/(1e3*60*60*24))}return 0});return(e,i)=>{const _=_e,d=E;return l(),h(d,{onClick:n,class:N(["cursor-pointer",{"bg-neutral-100":("work"in e?e.work:o(S))().value==s._work}])},{default:a(()=>{var v,g,k,B,L;return[e._work?(l(),f("div",pe,[u("div",me,[t(_,null,{default:a(()=>{var D;return[m(w(("WORK_ITEM"in e?e.WORK_ITEM:o(z))[(D=e._work)==null?void 0:D.work_item]),1)]}),_:1}),u("div",null,w(o(r))+"일 남음",1)]),u("div",ve,w((v=e._work)==null?void 0:v.work_name),1),u("div",he,[u("div",ge,[we,u("div",null,w((g=e._work)==null?void 0:g.customer_name),1)]),u("div",be,[ke,u("div",null,w((k=e._work)==null?void 0:k.customer_phone),1)])]),u("div",xe,w((B=e._work)==null?void 0:B.work_registration_date)+" ~ "+w((L=e._work)==null?void 0:L.deadline),1)])):V("",!0)]}),_:1},8,["class"])}}}),$e={class:"p-2 flex flex-col gap-2"},Ce=p({__name:"nav",setup(c){const s=A(),n=()=>{$().value=!0};return(r,e)=>{const i=E,_=P,d=ye;return l(),f("div",$e,[t(_,{to:"/work.post"},{default:a(()=>[t(i,{class:"p-2 text-sm",onClick:n},{default:a(()=>[m("+ 주문 등록")]),_:1})]),_:1}),t(_,{to:"/item.post"},{default:a(()=>[t(i,{class:"p-2 text-sm",onClick:n},{default:a(()=>[m("+ 물품 등록")]),_:1})]),_:1}),(l(!0),f(I,null,H(o(s),v=>(l(),h(d,{_work:v},null,8,["_work"]))),256))])}}}),Be=p({__name:"ScrollBar",props:{orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(c){const s=c,n=b(()=>{const{class:r,...e}=s;return e});return(r,e)=>(l(),h(o(Z),M(n.value,{class:o(C)("flex touch-none select-none transition-colors",r.orientation==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-px",r.orientation==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-px",s.class)}),{default:a(()=>[t(o(Y),{class:"relative flex-1 rounded-full bg-border"})]),_:1},16,["class"]))}}),O=p({__name:"ScrollArea",props:{type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{},class:{}},setup(c){const s=c,n=b(()=>{const{class:r,...e}=s;return e});return(r,e)=>(l(),h(o(te),M(n.value,{class:o(C)("relative overflow-hidden",s.class)}),{default:a(()=>[t(o(ee),{class:"h-full w-full rounded-[inherit]"},{default:a(()=>[x(r.$slots,"default")]),_:3}),t(Be),t(o(se))]),_:3},16,["class"]))}}),Te=p({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(c,{emit:s}){const e=oe(c,s);return(i,_)=>(l(),h(o(ae),K(F(o(e))),{default:a(()=>[x(i.$slots,"default")]),_:3},16))}}),Me=p({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(c){const s=c,n=b(()=>{const{class:e,...i}=s;return i}),r=ne(n);return(e,i)=>(l(),h(o(re),M(o(r),{class:o(C)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s.class)}),{default:a(()=>[x(e.$slots,"default")]),_:3},16,["class"]))}}),Se=p({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(c){const s=c,n=b(()=>{const{class:r,...e}=s;return e});return(r,e)=>(l(),h(o(le),M(n.value,{class:o(C)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s.class)}),{default:a(()=>[x(r.$slots,"default")]),_:3},16,["class"]))}}),y=()=>T("mobile",()=>!1),Ve={class:"px-4 py-2 flex justify-between items-center gap-4 w-svw lg:w-full"},Le={class:"shrink-0"},De={key:1,class:"font-bold"},Pe=p({__name:"section",setup(c){const s=T("section",()=>"");R(()=>{const i=q().path.split("/")[1];i&&(s.value=i)});function n(){W(`/${s.value}`)}const r=()=>{$().value=!1;const i=J();console.log(i)},e=y();return(i,_)=>{const d=Me,v=Se,g=Te,k=O;return l(),f("div",Ve,[u("div",Le,[o(e)?(l(),f("div",{key:0,class:"font-extrabold",onClick:r},"＜")):(l(),f("div",De,"작업 현황"))]),t(k,{class:"grow-[0]"},{default:a(()=>[t(g,{"default-value":"dashboard",modelValue:o(s),"onUpdate:modelValue":_[0]||(_[0]=B=>G(s)?s.value=B:null),onClick:n},{default:a(()=>[t(v,null,{default:a(()=>[t(d,{value:"dashboard"},{default:a(()=>[m(" 주문 ")]),_:1}),t(d,{value:"draft"},{default:a(()=>[m(" 시안 ")]),_:1}),t(d,{value:"confirmation"},{default:a(()=>[m(" 컴펌 ")]),_:1}),t(d,{value:"production"},{default:a(()=>[m(" 제작 ")]),_:1}),t(d,{value:"installation"},{default:a(()=>[m(" 설치 ")]),_:1}),t(d,{value:"payment"},{default:a(()=>[m(" 입금 ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}}),Ne={key:0,class:"w-svw h-svh flex items-center justify-center bg-neutral-50"},We={key:1,class:"w-screen h-svh overflow-hidden flex"},Re={key:0,class:"lg:shrink-0 lg:w-56 w-full flex flex-col"},Ee={class:"shrink-0"},Oe={key:1,class:"lg:grow-[0] lg:w-full lg:flex flex flex-col"},je={class:"shrink-0"},Je=p({__name:"default",setup(c){const s=Q(!0);R(()=>{y().value=window.innerWidth<=640,window.addEventListener("resize",()=>{y().value=window.innerWidth<=640}),s.value=!1});const n=b(()=>!y().value||!$().value),r=b(()=>!y().value||$().value);return(e,i)=>{const _=ue,d=U,v=Ce,g=O,k=Pe;return o(s)?(l(),f("div",Ne,"로딩 중...")):(l(),f("div",We,[o(n)?(l(),f("div",Re,[u("div",Ee,[t(_)]),t(d),t(g,{class:"grow-[0]"},{default:a(()=>[t(v)]),_:1})])):V("",!0),t(d,{class:"hidden lg:block",orientation:"vertical"}),o(r)?(l(),f("div",Oe,[u("div",je,[t(k)]),t(d),t(g,{class:"grow-[0] bg-neutral-50 h-full"},{default:a(()=>[x(e.$slots,"default")]),_:3})])):V("",!0)]))}}});export{Je as default};

import{a as N}from"./_KoRaoFi.js";import{_ as V,a as R,b as j,c as q,d as E,e as L,f as M,g as S,h as z}from"./F51a28Zt.js";import{_ as G,a as I,b as J,c as K,d as O,e as P}from"./BNpk7Sz4.js";import{_ as Q}from"./DArumWTV.js";import{d as U,u}from"./cfBU7kRw.js";import{n as W,s as X,A as Y,h as Z,o as f,c as p,a as s,b as t,w as e,d as a,F as tt,q as et,u as at,x as nt,t as ot}from"./DvAY-tOQ.js";import st from"./B0-TWwc3.js";import"./BLYTg4dL.js";import"./CJnucW8x.js";import"./Bb4qSo10.js";import"./CVOg1rtz.js";import"./r59y-1-a.js";const lt={class:"p-4 flex flex-col gap-4 overflow-hidden"},_t=s("div",null,[s("h1",{class:"text-lg font-bold"},"시안"),s("p",{class:"text-sm text-muted-foreground"}," 시안을 등록하거나 확인할 수 있습니다. ")],-1),ct={class:"flex gap-4 justify-end"},rt=["src"],At=W({__name:"draft",setup(it){const l=U(),g=X();Y(async()=>{c()}),Z(()=>[g.value],()=>{c()},{deep:!0});async function c(){l.value=await u().get()}function $(_){const n=l.value.find(r=>r.draft_id===_);n&&(n.selected=!n.selected)}async function b(){const _=l.value.filter(n=>n.selected==!0);await u().del(_),c()}return(_,n)=>{const r=N,h=V,x=R,D=j,k=q,v=E,A=L,C=M,w=S,T=z,i=G,m=I,y=J,B=Q,d=P,F=K,H=O;return f(),p("div",lt,[_t,s("div",ct,[t(T,null,{default:e(()=>[t(h,{"as-child":""},{default:e(()=>[t(r,{variant:"secondary"},{default:e(()=>[a("삭제")]),_:1})]),_:1}),t(w,null,{default:e(()=>[t(k,null,{default:e(()=>[t(x,null,{default:e(()=>[a("정말로 삭제하시겠습니까??")]),_:1}),t(D,null,{default:e(()=>[a(" 한번 삭제하면 모든 데이터가 삭제되며, 되돌릴수 없습니다. ")]),_:1})]),_:1}),t(C,null,{default:e(()=>[t(v,null,{default:e(()=>[a("아니오")]),_:1}),t(A,{onClick:n[0]||(n[0]=o=>b())},{default:e(()=>[a("네")]),_:1})]),_:1})]),_:1})]),_:1}),t(st)]),t(H,{class:"border rounded-lg border-separate"},{default:e(()=>[t(y,null,{default:e(()=>[t(m,null,{default:e(()=>[t(i,{class:"w-[100px]"},{default:e(()=>[a(" id ")]),_:1}),t(i,null,{default:e(()=>[a("시안")]),_:1}),t(i,null,{default:e(()=>[a("등록 시간")]),_:1})]),_:1})]),_:1}),t(F,null,{default:e(()=>[(f(!0),p(tt,null,et(at(l),o=>(f(),nt(m,{key:o.draft_id},{default:e(()=>[t(d,{class:"font-medium border-t"},{default:e(()=>[t(B,{id:"terms",onClick:dt=>$(o.draft_id)},null,8,["onClick"])]),_:2},1024),t(d,{class:"border-t"},{default:e(()=>[s("img",{class:"rounded-lg h-44",src:o.draft_image_path,alt:"draft"},null,8,rt)]),_:2},1024),t(d,{class:"border-t"},{default:e(()=>[a(ot(o.draft_registration_date),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}}});export{At as default};

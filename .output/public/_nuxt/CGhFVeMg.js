import{_ as u}from"./4fN1j-3H.js";import{d as l,u as _}from"./cfBU7kRw.js";import{n as f,h as m,o as e,c as t,F as h,q as p,u as v,a as o,b as g,w as b,s as k}from"./DvAY-tOQ.js";import"./BLYTg4dL.js";const w={class:"p-4 flex flex-col gap-4 overflow-hidden"},x=o("div",null,[o("h1",{class:"text-lg font-bold"},"고객 컴펌"),o("p",{class:"text-sm text-muted-foreground"},"출력할 시안을 지정합니다.")],-1),y={key:0,class:"absolute w-full h-full border-4 border-neutral-600 rounded-md"},C={key:1,class:"absolute w-full h-full bg-black bg-opacity-20 hover:bg-opacity-0 rounded-md"},B=["src"],D=f({__name:"confirmation",setup(E){const n=l();m(()=>[k().value],()=>{c()},{deep:!0});async function c(){l().value=await _().get()}function d(a){l().value.forEach(r=>{r.selected=!1}),a.selected=!a.selected}return(a,r)=>{const i=u;return e(),t("div",w,[x,(e(!0),t(h,null,p(v(n),s=>(e(),t("div",{key:s.draft_id},[g(i,{class:"h-44 w-fit relative cursor-pointer",onClick:F=>d(s)},{default:b(()=>[s.selected?(e(),t("div",y)):(e(),t("div",C)),o("img",{class:"rounded-lg h-44",src:s.draft_image_path,alt:"draft"},null,8,B)]),_:2},1032,["onClick"])]))),128))])}}});export{D as default};
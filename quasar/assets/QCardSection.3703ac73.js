import{I as r,g as e,h as n}from"./index.9a7e15b2.js";import{a as s}from"./render.a71c528d.js";var l=r({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:a}){const o=e(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(t.tag,{class:o.value},s(a.default))}});export{l as Q};
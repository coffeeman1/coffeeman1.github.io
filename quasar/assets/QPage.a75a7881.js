import{I as g,U as t,g as r,h as p,i as s,V as h,ag as d,m as f}from"./index.9a7e15b2.js";import{a as y}from"./render.a71c528d.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:i}){const{proxy:{$q:o}}=f(),e=s(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(d,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=r(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return a.styleFn(n,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),u=r(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:u.value,style:c.value},y(i.default))}});export{Q};
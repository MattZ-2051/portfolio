import{n as b,s as p}from"./scheduler.1fe78519.js";const e=[];function d(o,a=b){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const f=!e.length;for(const s of n)s[1](),e.push(s,o);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function _(t,f=b){const s=[t,f];return n.add(s),n.size===1&&(i=a(r,c)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var l;const h=((l=globalThis.__sveltekit_vlf2v1)==null?void 0:l.base)??"/portfolio";var u;const q=((u=globalThis.__sveltekit_vlf2v1)==null?void 0:u.assets)??h;export{q as a,h as b,d as w};

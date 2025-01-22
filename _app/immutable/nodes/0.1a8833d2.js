import{s as Ue,n as X,r as Ze,c as he,d as He,e as De,f as Re,u as Fe,g as Ge,h as Je,o as Ke}from"../chunks/scheduler.7db16a67.js";import{S as qe,i as ze,g as h,r as Y,s as w,h as v,j as b,u as ee,c as E,x as ie,f as _,k as f,a as B,y as d,v as te,z as W,p as Ve,t as V,b as Ae,d as A,w as ne,A as Qe,m as Be,n as Le}from"../chunks/index.1ee87b10.js";import{U as le,e as ce,u as We,t as Oe,d as Xe,a as Ne,o as Ye}from"../chunks/UIcon.290d7497.js";import{p as et}from"../chunks/stores.9dfc4af1.js";import{b as ve}from"../chunks/paths.987c4e58.js";function Se(s,e,n){const t=s.slice();return t[12]=e[n],t}function Te(s,e,n){const t=s.slice();return t[12]=e[n],t}function Me(s,e){let n,t,o=e[12].title+"",c,l;return{key:s,first:null,c(){n=h("a"),t=h("span"),c=Be(o),l=w(),this.h()},l(u){n=v(u,"A",{href:!0,class:!0});var i=b(n);t=v(i,"SPAN",{class:!0});var r=b(t);c=Le(r,o),r.forEach(_),l=E(i),i.forEach(_),this.h()},h(){f(t,"class","nav-menu-item-label svelte-jdc7ud"),f(n,"href",`${ve}${e[12].to}`),f(n,"class","nav-menu-item !text-[var(--secondary-text)] svelte-jdc7ud"),this.first=n},m(u,i){B(u,n,i),d(n,t),d(t,c),d(n,l)},p(u,i){e=u},d(u){u&&_(n)}}}function tt(s){let e,n;return e=new le({props:{icon:"i-carbon-sun"}}),{c(){Y(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,o){te(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){ne(e,t)}}}function nt(s){let e,n;return e=new le({props:{icon:"i-carbon-moon"}}),{c(){Y(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,o){te(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){ne(e,t)}}}function Pe(s){let e,n,t=s[12].title+"",o,c,l,u;return{c(){e=h("a"),n=h("span"),o=Be(t),c=w(),this.h()},l(i){e=v(i,"A",{href:!0,class:!0});var r=b(e);n=v(r,"SPAN",{class:!0});var g=b(n);o=Le(g,t),g.forEach(_),c=E(r),r.forEach(_),this.h()},h(){f(n,"class",""),f(e,"href",`${ve}${s[12].to}`),f(e,"class","nav-menu-item !text-[var(--secondary-text)] gap-5 svelte-jdc7ud")},m(i,r){B(i,e,r),d(e,n),d(n,o),d(e,c),l||(u=W(e,"click",s[9]),l=!0)},p:He,d(i){i&&_(e),l=!1,u()}}}function lt(s){let e,n,t,o="Light Theme",c;return e=new le({props:{icon:"i-carbon-sun"}}),{c(){Y(e.$$.fragment),n=w(),t=h("span"),t.textContent=o},l(l){ee(e.$$.fragment,l),n=E(l),t=v(l,"SPAN",{"data-svelte-h":!0}),ie(t)!=="svelte-17bcq4p"&&(t.textContent=o)},m(l,u){te(e,l,u),B(l,n,u),B(l,t,u),c=!0},i(l){c||(A(e.$$.fragment,l),c=!0)},o(l){V(e.$$.fragment,l),c=!1},d(l){l&&(_(n),_(t)),ne(e,l)}}}function st(s){let e,n,t,o="Dark Theme",c;return e=new le({props:{icon:"i-carbon-moon"}}),{c(){Y(e.$$.fragment),n=w(),t=h("span"),t.textContent=o},l(l){ee(e.$$.fragment,l),n=E(l),t=v(l,"SPAN",{"data-svelte-h":!0}),ie(t)!=="svelte-xjyztj"&&(t.textContent=o)},m(l,u){te(e,l,u),B(l,n,u),B(l,t,u),c=!0},i(l){c||(A(e.$$.fragment,l),c=!0)},o(l){V(e.$$.fragment,l),c=!1},d(l){l&&(_(n),_(t)),ne(e,l)}}}function at(s){let e,n,t,o,c,l,u="Matt Zamora",i,r,g="Matt Zamora",M,N,x=[],y=new Map,ue,P,F,U,j,I,de,G,S,se,fe,T,L,_e,J,q,C,D,ae,K,me,pe;o=new le({props:{icon:"i-carbon-code",classes:"text-2em"}});let re=ce(s[2]);const be=a=>a[12].title;for(let a=0;a<re.length;a+=1){let p=Te(s,re,a),m=be(p);y.set(m,x[a]=Me(m,p))}const ge=[nt,tt],O=[];function $e(a,p){return a[1]?0:1}j=$e(s),I=O[j]=ge[j](s);let Q=ce(s[2]),$=[];for(let a=0;a<Q.length;a+=1)$[a]=Pe(Se(s,Q,a));const ke=[st,lt],Z=[];function xe(a,p){return a[1]?0:1}return C=xe(s),D=Z[C]=ke[C](s),{c(){e=h("div"),n=h("nav"),t=h("a"),Y(o.$$.fragment),c=w(),l=h("span"),l.textContent=u,i=w(),r=h("div"),r.textContent=g,M=w(),N=h("div");for(let a=0;a<x.length;a+=1)x[a].c();ue=w(),P=h("div"),F=h("div"),U=h("button"),I.c(),de=w(),G=h("div"),S=h("div"),fe=w(),T=h("div"),L=h("div");for(let a=0;a<$.length;a+=1)$[a].c();_e=w(),J=h("div"),q=h("button"),D.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var p=b(e);n=v(p,"NAV",{class:!0});var m=b(n);t=v(m,"A",{href:!0,class:!0});var z=b(t);ee(o.$$.fragment,z),c=E(z),l=v(z,"SPAN",{class:!0,"data-svelte-h":!0}),ie(l)!=="svelte-d8j5jp"&&(l.textContent=u),z.forEach(_),i=E(m),r=v(m,"DIV",{class:!0,"data-svelte-h":!0}),ie(r)!=="svelte-1c2pq73"&&(r.textContent=g),M=E(m),N=v(m,"DIV",{class:!0});var k=b(N);for(let R=0;R<x.length;R+=1)x[R].l(k);k.forEach(_),ue=E(m),P=v(m,"DIV",{class:!0});var H=b(P);F=v(H,"DIV",{class:!0});var ye=b(F);U=v(ye,"BUTTON",{class:!0});var we=b(U);I.l(we),we.forEach(_),ye.forEach(_),de=E(H),G=v(H,"DIV",{class:!0});var Ee=b(G);S=v(Ee,"DIV",{class:!0}),b(S).forEach(_),Ee.forEach(_),H.forEach(_),m.forEach(_),fe=E(p),T=v(p,"DIV",{class:!0});var oe=b(T);L=v(oe,"DIV",{class:!0});var je=b(L);for(let R=0;R<$.length;R+=1)$[R].l(je);je.forEach(_),_e=E(oe),J=v(oe,"DIV",{class:!0});var Ie=b(J);q=v(Ie,"BUTTON",{class:!0});var Ce=b(q);D.l(Ce),Ce.forEach(_),Ie.forEach(_),oe.forEach(_),p.forEach(_),this.h()},h(){f(l,"class","ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"),f(t,"href",`${ve}/`),f(t,"class","nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),f(r,"class","flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center"),f(N,"class","flex-row flex-1 self-center h-full justify-center hidden md:flex"),f(U,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),f(F,"class","row hidden md:flex"),f(S,"class",se=X(`nav-bar-mobile-btn col-center ${s[0]?"nav-bar-mobile-btn-expanded":""}`)+" svelte-jdc7ud"),f(G,"class","col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer"),f(P,"class","row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"),f(n,"class","container flex flex-row items-center text-sm"),f(L,"class","flex-col flex-1 self-center h-full justify-center m-t-7"),f(q,"class","bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),f(J,"class","col gap-2 m-t-7"),f(T,"class",ae=X(`nav-menu-mobile ${s[0]?"nav-menu-mobile-open":""} md:hidden`)+" svelte-jdc7ud"),f(e,"class","nav-menu svelte-jdc7ud")},m(a,p){B(a,e,p),d(e,n),d(n,t),te(o,t,null),d(t,c),d(t,l),d(n,i),d(n,r),d(n,M),d(n,N);for(let m=0;m<x.length;m+=1)x[m]&&x[m].m(N,null);d(n,ue),d(n,P),d(P,F),d(F,U),O[j].m(U,null),d(P,de),d(P,G),d(G,S),d(e,fe),d(e,T),d(T,L);for(let m=0;m<$.length;m+=1)$[m]&&$[m].m(L,null);d(T,_e),d(T,J),d(J,q),Z[C].m(q,null),K=!0,me||(pe=[W(U,"click",s[7]),W(S,"keydown",s[5]),W(S,"keyup",s[6]),W(S,"click",s[8]),W(q,"click",s[10])],me=!0)},p(a,[p]){p&4&&(re=ce(a[2]),x=We(x,p,be,1,a,re,y,N,Xe,Me,null,Te));let m=j;if(j=$e(a),j!==m&&(Ve(),V(O[m],1,1,()=>{O[m]=null}),Ae(),I=O[j],I||(I=O[j]=ge[j](a),I.c()),A(I,1),I.m(U,null)),(!K||p&1&&se!==(se=X(`nav-bar-mobile-btn col-center ${a[0]?"nav-bar-mobile-btn-expanded":""}`)+" svelte-jdc7ud"))&&f(S,"class",se),p&12){Q=ce(a[2]);let k;for(k=0;k<Q.length;k+=1){const H=Se(a,Q,k);$[k]?$[k].p(H,p):($[k]=Pe(H),$[k].c(),$[k].m(L,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=Q.length}let z=C;C=xe(a),C!==z&&(Ve(),V(Z[z],1,1,()=>{Z[z]=null}),Ae(),D=Z[C],D||(D=Z[C]=ke[C](a),D.c()),A(D,1),D.m(q,null)),(!K||p&1&&ae!==(ae=X(`nav-menu-mobile ${a[0]?"nav-menu-mobile-open":""} md:hidden`)+" svelte-jdc7ud"))&&f(T,"class",ae)},i(a){K||(A(o.$$.fragment,a),A(I),A(D),K=!0)},o(a){V(o.$$.fragment,a),V(I),V(D),K=!1},d(a){a&&_(e),ne(o);for(let p=0;p<x.length;p+=1)x[p].d();O[j].d(),Qe($,a),Z[C].d(),me=!1,Ze(pe)}}}function rt(s,e,n){let t,o;he(s,et,y=>n(4,t=y)),he(s,Oe,y=>n(1,o=y));let c=!1;const l=[{title:"Projects",to:"/projects"},{title:"Experience",to:"/experience"},{title:"Education",to:"/education"},{title:"About",to:"/about"},{title:"Resume",to:"/resume"}],u=y=>{typeof y>"u"?n(0,c=!c):n(0,c=y)};function i(y){De.call(this,s,y)}function r(y){De.call(this,s,y)}const g=()=>Ne(),M=()=>u(),N=()=>u(!1),x=()=>Ne();return s.$$.update=()=>{s.$$.dirty&16&&t.url.pathname},[c,o,l,u,t,i,r,g,M,N,x]}class ot extends qe{constructor(e){super(),ze(this,e,rt,at,Ue,{})}}function ct(s){let e,n,t,o,c,l;n=new ot({});const u=s[2].default,i=Re(u,s,s[1],null);return{c(){e=h("div"),Y(n.$$.fragment),t=w(),o=h("div"),i&&i.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var g=b(e);ee(n.$$.fragment,g),t=E(g),o=v(g,"DIV",{class:!0});var M=b(o);i&&i.l(M),M.forEach(_),g.forEach(_),this.h()},h(){f(o,"class","content container svelte-mb6t29"),f(e,"class",c=X(`body contents ${s[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(r,g){B(r,e,g),te(n,e,null),d(e,t),d(e,o),i&&i.m(o,null),l=!0},p(r,[g]){i&&i.p&&(!l||g&2)&&Fe(i,u,r,r[1],l?Je(u,r[1],g,null):Ge(r[1]),null),(!l||g&1&&c!==(c=X(`body contents ${r[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&f(e,"class",c)},i(r){l||(A(n.$$.fragment,r),A(i,r),l=!0)},o(r){V(n.$$.fragment,r),V(i,r),l=!1},d(r){r&&_(e),ne(n),i&&i.d(r)}}}function it(s,e,n){let t;he(s,Oe,l=>n(0,t=l));let{$$slots:o={},$$scope:c}=e;return Ke(()=>Ye()),s.$$set=l=>{"$$scope"in l&&n(1,c=l.$$scope)},[t,c,o]}class ht extends qe{constructor(e){super(),ze(this,e,it,ct,Ue,{})}}export{ht as component};

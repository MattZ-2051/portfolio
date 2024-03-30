import{s as ie,n as ce}from"../chunks/scheduler.1fe78519.js";import{S as fe,i as me,r as A,u as S,v as U,d as x,t as I,w as j,g as w,s as V,m as K,h as D,j as E,c as M,f as v,n as O,k,a as z,y as d,p as Z,b as ee,o as ue,A as te}from"../chunks/index.3ecdd0b4.js";import{e as R,U as pe}from"../chunks/UIcon.9517cc0a.js";import{g as le}from"../chunks/app.4bc64ed7.js";import{C as he}from"../chunks/Card.71c2e50e.js";import{C as de}from"../chunks/CardLogo.1432cac2.js";import{C as _e,a as ve}from"../chunks/ChipIcon.0bf4a144.js";import{g as G}from"../chunks/index.1f95b932.js";import{b as re}from"../chunks/paths.41d49f6b.js";import{C as xe}from"../chunks/Chip.0fd26c6b.js";import{C as be}from"../chunks/CommonPage.2976adf7.js";import{t as we,i as De}from"../chunks/experience.4f4ba7b9.js";function ne(a,t,r){const e=a.slice();return e[5]=t[r],e}function oe(a,t,r){const e=a.slice();return e[8]=t[r],e}function Ee(a){let t,r,e,l=a[8].label+"",s,u,p;return t=new pe({props:{icon:a[8].icon}}),{c(){A(t.$$.fragment),r=V(),e=w("span"),s=K(l),u=V(),this.h()},l(i){S(t.$$.fragment,i),r=M(i),e=D(i,"SPAN",{class:!0});var o=E(e);s=O(o,l),o.forEach(v),u=M(i),this.h()},h(){k(e,"class","m-l-1")},m(i,o){U(t,i,o),z(i,r,o),z(i,e,o),d(e,s),z(i,u,o),p=!0},p(i,o){const f={};o&2&&(f.icon=i[8].icon),t.$set(f),(!p||o&2)&&l!==(l=i[8].label+"")&&ue(s,l)},i(i){p||(x(t.$$.fragment,i),p=!0)},o(i){I(t.$$.fragment,i),p=!1},d(i){i&&(v(r),v(e),v(u)),j(t,i)}}}function ae(a){let t,r;return t=new xe({props:{$$slots:{default:[Ee]},$$scope:{ctx:a}}}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,l){const s={};l&2050&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function se(a){let t,r;return t=new ve({props:{logo:G(a[5].logo),name:a[5].name}}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,l){const s={};l&1&&(s.logo=G(e[5].logo)),l&1&&(s.name=e[5].name),t.$set(s)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function ke(a){let t,r,e,l,s,u,p,i,o,f,h,b,C,P,y=a[0].shortDescription+"",T,J,F,H;r=new de({props:{src:G(a[0].logo),alt:a[0].company,size:55}}),p=new _e({props:{title:`${a[0].name}`}});let L=R(a[1]),$=[];for(let n=0;n<L.length;n+=1)$[n]=ae(oe(a,L,n));const $e=n=>I($[n],1,1,()=>{$[n]=null});let N=R(a[0].skills),g=[];for(let n=0;n<N.length;n+=1)g[n]=se(ne(a,N,n));const ge=n=>I(g[n],1,1,()=>{g[n]=null});return{c(){t=w("div"),A(r.$$.fragment),e=V(),l=w("div"),s=w("div"),u=w("h3"),A(p.$$.fragment),i=V(),o=w("div");for(let n=0;n<$.length;n+=1)$[n].c();f=V(),h=w("div"),b=K(a[2]),C=V(),P=w("div"),T=K(y),J=V(),F=w("div");for(let n=0;n<g.length;n+=1)g[n].c();this.h()},l(n){t=D(n,"DIV",{class:!0});var m=E(t);S(r.$$.fragment,m),e=M(m),l=D(m,"DIV",{class:!0});var _=E(l);s=D(_,"DIV",{class:!0});var Y=E(s);u=D(Y,"H3",{class:!0});var c=E(u);S(p.$$.fragment,c),c.forEach(v),i=M(Y),o=D(Y,"DIV",{class:!0});var B=E(o);for(let q=0;q<$.length;q+=1)$[q].l(B);B.forEach(v),Y.forEach(v),f=M(_),h=D(_,"DIV",{class:!0});var Q=E(h);b=O(Q,a[2]),Q.forEach(v),C=M(_),P=D(_,"DIV",{class:!0});var W=E(P);T=O(W,y),W.forEach(v),J=M(_),F=D(_,"DIV",{class:!0});var X=E(F);for(let q=0;q<g.length;q+=1)g[q].l(X);X.forEach(v),_.forEach(v),m.forEach(v),this.h()},h(){k(u,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(o,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),k(s,"class","col"),k(h,"class","text-[var(--text)] text-[0.9em] font-200"),k(P,"class","experience-description"),k(F,"class","flex flex-row flex-wrap mt-5"),k(l,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(n,m){z(n,t,m),U(r,t,null),d(t,e),d(t,l),d(l,s),d(s,u),U(p,u,null),d(s,i),d(s,o);for(let _=0;_<$.length;_+=1)$[_]&&$[_].m(o,null);d(l,f),d(l,h),d(h,b),d(l,C),d(l,P),d(P,T),d(l,J),d(l,F);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(F,null);H=!0},p(n,m){const _={};m&1&&(_.src=G(n[0].logo)),m&1&&(_.alt=n[0].company),r.$set(_);const Y={};if(m&1&&(Y.title=`${n[0].name}`),p.$set(Y),m&2){L=R(n[1]);let c;for(c=0;c<L.length;c+=1){const B=oe(n,L,c);$[c]?($[c].p(B,m),x($[c],1)):($[c]=ae(B),$[c].c(),x($[c],1),$[c].m(o,null))}for(Z(),c=L.length;c<$.length;c+=1)$e(c);ee()}if((!H||m&1)&&y!==(y=n[0].shortDescription+"")&&ue(T,y),m&1){N=R(n[0].skills);let c;for(c=0;c<N.length;c+=1){const B=ne(n,N,c);g[c]?(g[c].p(B,m),x(g[c],1)):(g[c]=se(B),g[c].c(),x(g[c],1),g[c].m(F,null))}for(Z(),c=N.length;c<g.length;c+=1)ge(c);ee()}},i(n){if(!H){x(r.$$.fragment,n),x(p.$$.fragment,n);for(let m=0;m<L.length;m+=1)x($[m]);for(let m=0;m<N.length;m+=1)x(g[m]);H=!0}},o(n){I(r.$$.fragment,n),I(p.$$.fragment,n),$=$.filter(Boolean);for(let m=0;m<$.length;m+=1)I($[m]);g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)I(g[m]);H=!1},d(n){n&&v(t),j(r),j(p),te($,n),te(g,n)}}}function Ie(a){let t,r;return t=new he({props:{margin:"0px 0px 20px 0px",tiltDegree:2,color:a[0].color,href:`${re}/experience/${a[0].slug}`,$$slots:{default:[ke]},$$scope:{ctx:a}}}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,[l]){const s={};l&1&&(s.color=e[0].color),l&1&&(s.href=`${re}/experience/${e[0].slug}`),l&2051&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Ce(a,t,r){let e,{experience:l}=t;const s=`${le(l.period.from.getMonth())} ${l.period.from.getFullYear()}`,u=l.period.to?`${le(l.period.to.getMonth())} ${l.period.to.getFullYear()}`:"Present",p=`${s} - ${u}`;return a.$$set=i=>{"experience"in i&&r(0,l=i.experience)},a.$$.update=()=>{a.$$.dirty&1&&r(1,e=[{label:l.company,icon:"i-carbon-building"},{label:l.location,icon:"i-carbon-location"},{label:l.contract,icon:"i-carbon-hourglass"}])},[l,e,p]}class Ve extends fe{constructor(t){super(),me(this,t,Ce,Ie,ie,{experience:0})}}function Me(a,t,r){const e=a.slice();return e[0]=t[r],e[2]=r,e}function Pe(a,t){let r,e,l,s,u,p,i,o,f,h;return u=new pe({props:{icon:"i-carbon-condition-point",classes:""}}),o=new Ve({props:{experience:t[0]}}),{key:a,first:null,c(){r=w("div"),e=w("div"),l=V(),s=w("div"),A(u.$$.fragment),p=V(),i=w("div"),A(o.$$.fragment),f=V(),this.h()},l(b){r=D(b,"DIV",{class:!0});var C=E(r);e=D(C,"DIV",{class:!0}),E(e).forEach(v),l=M(C),s=D(C,"DIV",{class:!0});var P=E(s);S(u.$$.fragment,P),P.forEach(v),p=M(C),i=D(C,"DIV",{class:!0});var y=E(i);S(o.$$.fragment,y),y.forEach(v),f=M(C),C.forEach(v),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(i,"class","flex-1 col items-stretch"),k(r,"class",`flex ${t[2]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(b,C){z(b,r,C),d(r,e),d(r,l),d(r,s),U(u,s,null),d(r,p),d(r,i),U(o,i,null),d(r,f),h=!0},p:ce,i(b){h||(x(u.$$.fragment,b),x(o.$$.fragment,b),h=!0)},o(b){I(u.$$.fragment,b),I(o.$$.fragment,b),h=!1},d(b){b&&v(r),j(u),j(o)}}}function Ae(a){let t,r,e,l=[],s=new Map,u,p=R(De);const i=o=>o[0].slug;for(let o=0;o<p.length;o+=1){let f=Me(a,p,o),h=i(f);s.set(h,l[o]=Pe(h,f))}return{c(){t=w("div"),r=w("div"),e=V();for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){t=D(o,"DIV",{class:!0});var f=E(t);r=D(f,"DIV",{class:!0}),E(r).forEach(v),e=M(f);for(let h=0;h<l.length;h+=1)l[h].l(f);f.forEach(v),this.h()},h(){k(r,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"),k(t,"class","col items-center relative mt-10 flex-1")},m(o,f){z(o,t,f),d(t,r),d(t,e);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(t,null);u=!0},p:ce,i(o){if(!u){for(let f=0;f<p.length;f+=1)x(l[f]);u=!0}},o(o){for(let f=0;f<l.length;f+=1)I(l[f]);u=!1},d(o){o&&v(t);for(let f=0;f<l.length;f+=1)l[f].d()}}}function Se(a){let t,r;return t=new be({props:{title:we,$$slots:{default:[Ae]},$$scope:{ctx:a}}}),{c(){A(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,[l]){const s={};l&8&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(x(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}class Te extends fe{constructor(t){super(),me(this,t,null,Se,ie,{})}}export{Te as component};

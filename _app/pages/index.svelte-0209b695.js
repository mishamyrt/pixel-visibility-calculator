import{S as e,i as s,s as t,e as a,k as n,t as i,c as l,a as r,n as c,g as o,d as h,b as u,f,F as d,H as p,I as v,J as m,G as g,K as $,L as y,M as w,h as E,N as _,O as P,P as I,Q as b,j as N,m as S,R as x,o as D,T as G,x as A,u as T,v as V}from"../chunks/vendor-ca8c6c11.js";function M(e){let s,t,y,w,E,_,P,I,b;return{c(){s=a("div"),t=a("input"),y=n(),w=a("span"),E=i("×"),_=n(),P=a("input"),this.h()},l(e){s=l(e,"DIV",{class:!0});var a=r(s);t=l(a,"INPUT",{type:!0,placeholder:!0,class:!0}),y=c(a),w=l(a,"SPAN",{class:!0});var n=r(w);E=o(n,"×"),n.forEach(h),_=c(a),P=l(a,"INPUT",{type:!0,placeholder:!0,class:!0}),a.forEach(h),this.h()},h(){u(t,"type","number"),u(t,"placeholder","width"),u(t,"class","input svelte-1hvxhbq"),u(w,"class","resolutionInput-divider svelte-1hvxhbq"),u(P,"type","number"),u(P,"placeholder","height"),u(P,"class","input svelte-1hvxhbq"),u(s,"class","resolutionInput svelte-1hvxhbq")},m(a,n){f(a,s,n),d(s,t),p(t,e[0]),d(s,y),d(s,w),d(w,E),d(s,_),d(s,P),p(P,e[1]),I||(b=[v(t,"input",e[2]),v(P,"input",e[3])],I=!0)},p(e,[s]){1&s&&m(t.value)!==e[0]&&p(t,e[0]),2&s&&m(P.value)!==e[1]&&p(P,e[1])},i:g,o:g,d(e){e&&h(s),I=!1,$(b)}}}function k(e,s,t){let{width:a}=s,{height:n}=s;return e.$$set=e=>{"width"in e&&t(0,a=e.width),"height"in e&&t(1,n=e.height)},[a,n,function(){a=m(this.value),t(0,a)},function(){n=m(this.value),t(1,n)}]}class q extends e{constructor(e){super(),s(this,e,k,M,t,{width:0,height:1})}}const K={m:1,cm:.01,in:.0254},O={m:"meters",cm:"centimeters",in:"inches"};function j(e,s,t){const a=e.slice();return a[6]=s[t],a}function L(e){let s,t,n,c=e[6]+"";return{c(){s=a("option"),t=i(c),this.h()},l(e){s=l(e,"OPTION",{});var a=r(s);t=o(a,c),a.forEach(h),this.h()},h(){s.__value=n=e[6],s.value=s.__value},m(e,a){f(e,s,a),d(s,t)},p:g,d(e){e&&h(s)}}}function F(e){let s,t,P,I,b,N,S,x,D,G,A=Object.keys(K),T=[];for(let a=0;a<A.length;a+=1)T[a]=L(j(e,A,a));return{c(){s=a("div"),t=a("input"),I=n(),b=a("span"),N=i(e[0]),S=n(),x=a("select");for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(a){s=l(a,"DIV",{class:!0});var n=r(s);t=l(n,"INPUT",{placeholder:!0,type:!0,class:!0}),I=c(n),b=l(n,"SPAN",{class:!0});var i=r(b);N=o(i,e[0]),i.forEach(h),S=c(n),x=l(n,"SELECT",{class:!0});var u=r(x);for(let e=0;e<T.length;e+=1)T[e].l(u);u.forEach(h),n.forEach(h),this.h()},h(){u(t,"placeholder",P=`in ${O[e[0]]}`),u(t,"type","number"),u(t,"class","multiInput-input input svelte-hfaiwf"),u(b,"class","multiInput-value svelte-hfaiwf"),u(x,"class","multiInput-select svelte-hfaiwf"),void 0===e[0]&&y((()=>e[5].call(x))),u(s,"class","multiInput svelte-hfaiwf")},m(a,n){f(a,s,n),d(s,t),p(t,e[1]),d(s,I),d(s,b),d(b,N),d(s,S),d(s,x);for(let e=0;e<T.length;e+=1)T[e].m(x,null);w(x,e[0]),D||(G=[v(t,"input",e[4]),v(t,"keyup",e[2]),v(x,"change",e[5]),v(x,"change",e[2])],D=!0)},p(e,[s]){if(1&s&&P!==(P=`in ${O[e[0]]}`)&&u(t,"placeholder",P),2&s&&m(t.value)!==e[1]&&p(t,e[1]),1&s&&E(N,e[0]),0&s){let t;for(A=Object.keys(K),t=0;t<A.length;t+=1){const a=j(e,A,t);T[t]?T[t].p(a,s):(T[t]=L(a),T[t].c(),T[t].m(x,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=A.length}1&s&&w(x,e[0])},i:g,o:g,d(e){e&&h(s),_(T,e),D=!1,$(G)}}}function H(e,s,t){let a,{value:n}=s,{unit:i="m"}=s;return e.$$set=e=>{"value"in e&&t(3,n=e.value),"unit"in e&&t(0,i=e.unit)},[i,a,function(){t(3,n=((e,s)=>e*K[s])(a,i))},n,function(){a=m(this.value),t(1,a)},function(){i=P(this),t(0,i)}]}class R extends e{constructor(e){super(),s(this,e,H,F,t,{value:3,unit:0})}}const U=e=>Math.pow(e,2),z=(e,s)=>2*e*Math.PI/21600-(e=>.0254/e)(s);function W(e){let s,t;return{c(){s=a("span"),t=i("High"),this.h()},l(e){s=l(e,"SPAN",{class:!0});var a=r(s);t=o(a,"High"),a.forEach(h),this.h()},h(){u(s,"class","visibility __high")},m(e,a){f(e,s,a),d(s,t)},d(e){e&&h(s)}}}function C(e){let s,t;return{c(){s=a("span"),t=i("Low"),this.h()},l(e){s=l(e,"SPAN",{class:!0});var a=r(s);t=o(a,"Low"),a.forEach(h),this.h()},h(){u(s,"class","visibility __low")},m(e,a){f(e,s,a),d(s,t)},d(e){e&&h(s)}}}function J(e){let s,t;return{c(){s=a("span"),t=i("None"),this.h()},l(e){s=l(e,"SPAN",{class:!0});var a=r(s);t=o(a,"None"),a.forEach(h),this.h()},h(){u(s,"class","visibility __none")},m(e,a){f(e,s,a),d(s,t)},d(e){e&&h(s)}}}function Q(e){let s,t,p,v,m,g,$,y,w,_,P,M,k,K,O,j,L,F,H,U,z,Q,B,X,Y,Z,ee,se,te,ae,ne,ie,le,re,ce,oe,he,ue,fe,de,pe,ve,me,ge,$e,ye,we,Ee=Math.floor(e[5])+"";function _e(s){e[8](s)}let Pe={};function Ie(s){e[9](s)}void 0!==e[0]&&(Pe.value=e[0]),g=new R({props:Pe}),I.push((()=>b(g,"value",_e)));let be={unit:"in"};function Ne(s){e[10](s)}function Se(s){e[11](s)}void 0!==e[1]&&(be.value=e[1]),k=new R({props:be}),I.push((()=>b(k,"value",Ie)));let xe={};function De(e,s){return 1===e[7]?J:0===e[7]?C:W}void 0!==e[2]&&(xe.width=e[2]),void 0!==e[3]&&(xe.height=e[3]),U=new q({props:xe}),I.push((()=>b(U,"width",Ne))),I.push((()=>b(U,"height",Se)));let Ge=De(e),Ae=Ge(e);return{c(){s=a("div"),t=a("div"),p=a("span"),v=i("Distance"),m=n(),N(g.$$.fragment),y=n(),w=a("div"),_=a("span"),P=i("Size"),M=n(),N(k.$$.fragment),O=n(),j=a("div"),L=a("span"),F=i("Resolution"),H=n(),N(U.$$.fragment),B=n(),X=a("div"),Y=a("span"),Z=i("DPI"),ee=n(),se=a("span"),te=i(Ee),ne=n(),ie=a("div"),le=a("span"),re=i("Pixel visibility"),ce=n(),Ae.c(),he=n(),ue=a("div"),fe=a("p"),de=i("Marketing companies are increasing demands on the screens, offering more and\n    more affordable 4K screens. That's great, but do we really need these\n    resolutions?"),pe=n(),ve=a("p"),me=i("The resolution of your eyesight won't get any higher from this purchase.\n    With this calculator you can verify if you can see the difference between\n    the screens in real life."),ge=n(),$e=a("p"),ye=i("For example, if you watch a 4K 43\" screen from 3 meters away, you won't\n    notice the difference if it' replaced with a 1080p."),this.h()},l(e){s=l(e,"DIV",{class:!0});var a=r(s);t=l(a,"DIV",{class:!0});var n=r(t);p=l(n,"SPAN",{class:!0});var i=r(p);v=o(i,"Distance"),i.forEach(h),m=c(n),S(g.$$.fragment,n),n.forEach(h),y=c(a),w=l(a,"DIV",{class:!0});var u=r(w);_=l(u,"SPAN",{class:!0});var f=r(_);P=o(f,"Size"),f.forEach(h),M=c(u),S(k.$$.fragment,u),u.forEach(h),O=c(a),j=l(a,"DIV",{class:!0});var d=r(j);L=l(d,"SPAN",{class:!0});var $=r(L);F=o($,"Resolution"),$.forEach(h),H=c(d),S(U.$$.fragment,d),d.forEach(h),B=c(a),X=l(a,"DIV",{class:!0});var E=r(X);Y=l(E,"SPAN",{class:!0});var I=r(Y);Z=o(I,"DPI"),I.forEach(h),ee=c(E),se=l(E,"SPAN",{});var b=r(se);te=o(b,Ee),b.forEach(h),E.forEach(h),ne=c(a),ie=l(a,"DIV",{class:!0});var N=r(ie);le=l(N,"SPAN",{class:!0});var x=r(le);re=o(x,"Pixel visibility"),x.forEach(h),ce=c(N),Ae.l(N),N.forEach(h),a.forEach(h),he=c(e),ue=l(e,"DIV",{class:!0});var D=r(ue);fe=l(D,"P",{});var G=r(fe);de=o(G,"Marketing companies are increasing demands on the screens, offering more and\n    more affordable 4K screens. That's great, but do we really need these\n    resolutions?"),G.forEach(h),pe=c(D),ve=l(D,"P",{});var A=r(ve);me=o(A,"The resolution of your eyesight won't get any higher from this purchase.\n    With this calculator you can verify if you can see the difference between\n    the screens in real life."),A.forEach(h),ge=c(D),$e=l(D,"P",{});var T=r($e);ye=o(T,"For example, if you watch a 4K 43\" screen from 3 meters away, you won't\n    notice the difference if it' replaced with a 1080p."),T.forEach(h),D.forEach(h),this.h()},h(){u(p,"class","fields-title"),u(t,"class","fieldsGroup"),u(_,"class","fields-title"),u(w,"class","fieldsGroup"),u(L,"class","fields-title"),u(j,"class","fieldsGroup"),u(Y,"class","fields-title"),u(X,"class",ae=x("fieldsGroup __forceGrid",{__hidden:!e[4]})),u(le,"class","fields-title"),u(ie,"class",oe=x("fieldsGroup __forceGrid",{__hidden:!e[6]})),u(s,"class","fields-container"),u(ue,"class","description")},m(e,a){f(e,s,a),d(s,t),d(t,p),d(p,v),d(t,m),D(g,t,null),d(s,y),d(s,w),d(w,_),d(_,P),d(w,M),D(k,w,null),d(s,O),d(s,j),d(j,L),d(L,F),d(j,H),D(U,j,null),d(s,B),d(s,X),d(X,Y),d(Y,Z),d(X,ee),d(X,se),d(se,te),d(s,ne),d(s,ie),d(ie,le),d(le,re),d(ie,ce),Ae.m(ie,null),f(e,he,a),f(e,ue,a),d(ue,fe),d(fe,de),d(ue,pe),d(ue,ve),d(ve,me),d(ue,ge),d(ue,$e),d($e,ye),we=!0},p(e,[s]){const t={};!$&&1&s&&($=!0,t.value=e[0],G((()=>$=!1))),g.$set(t);const a={};!K&&2&s&&(K=!0,a.value=e[1],G((()=>K=!1))),k.$set(a);const n={};!z&&4&s&&(z=!0,n.width=e[2],G((()=>z=!1))),!Q&&8&s&&(Q=!0,n.height=e[3],G((()=>Q=!1))),U.$set(n),(!we||32&s)&&Ee!==(Ee=Math.floor(e[5])+"")&&E(te,Ee),(!we||16&s&&ae!==(ae=x("fieldsGroup __forceGrid",{__hidden:!e[4]})))&&u(X,"class",ae),Ge!==(Ge=De(e))&&(Ae.d(1),Ae=Ge(e),Ae&&(Ae.c(),Ae.m(ie,null))),(!we||64&s&&oe!==(oe=x("fieldsGroup __forceGrid",{__hidden:!e[6]})))&&u(ie,"class",oe)},i(e){we||(A(g.$$.fragment,e),A(k.$$.fragment,e),A(U.$$.fragment,e),we=!0)},o(e){T(g.$$.fragment,e),T(k.$$.fragment,e),T(U.$$.fragment,e),we=!1},d(e){e&&h(s),V(g),V(k),V(U),Ae.d(),e&&h(he),e&&h(ue)}}}function B(e,s,t){let a,n,i,l,r,c,o=0,h=0;return e.$$.update=()=>{var s;14&e.$$.dirty&&t(5,a=((e,s,t)=>(console.log(e,s,t),Math.sqrt(U(s)+U(t))/e||0))(39.37*h,r,c)),33&e.$$.dirty&&t(7,(s=z(o,a),n=s>0?1:s>=-.005?0:-1)),14&e.$$.dirty&&t(4,i=h*r*c>0),17&e.$$.dirty&&t(6,l=i&&o>0)},[o,h,r,c,i,a,l,n,function(e){o=e,t(0,o)},function(e){h=e,t(1,h)},function(e){r=e,t(2,r)},function(e){c=e,t(3,c)}]}export default class extends e{constructor(e){super(),s(this,e,B,Q,t,{})}}
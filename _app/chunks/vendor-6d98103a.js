function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o,r,i,c){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(a){const r=l(n,e,o,c);t.p(r,a)}}let u,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){if(f){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:d(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<c.length;l++){for(;s<i.length&&c[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function _(t,n,e){f&&!e?h(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function x(){return $(" ")}function y(){return $("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return""===t?null:+t}function E(t){return Array.from(t.childNodes)}function N(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function k(t,n,e,o){return N(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)))}function A(t,n){return N(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>$(n)),!0)}function S(t){return A(t," ")}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function O(t,n){t.value=null==n?"":n}function B(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}}function C(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function M(t){u=t}function T(){if(!u)throw new Error("Function called outside component initialization");return u}function q(t){T().$$.on_mount.push(t)}function I(t){T().$$.after_update.push(t)}function L(t,n){T().$$.context.set(t,n)}const z=[],D=[],F=[],H=[],P=Promise.resolve();let G=!1;function J(t){F.push(t)}function K(t){H.push(t)}let Q=!1;const R=new Set;function W(){if(!Q){Q=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];M(n),U(n.$$)}for(M(null),z.length=0;D.length;)D.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];R.has(n)||(R.add(n),n())}F.length=0}while(z.length);for(;H.length;)H.pop()();G=!1,Q=!1,R.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const V=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,n){t&&t.i&&(V.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),X.c.push((()=>{V.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function et(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ot(t){return"object"==typeof t&&null!==t?t:{}}function rt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function it(t){t&&t.c()}function ct(t,n){t&&t.l(n)}function at(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,o),c||J((()=>{const n=l.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(J)}function lt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){-1===t.$$.dirty[0]&&(z.push(t),G||(G=!0,P.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ut(n,e,i,c,a,l,s,d=[-1]){const h=u;M(n);const _=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:e.context||[]),callbacks:o(),dirty:d,skip_bound:!1,root:e.target||h.$$.root};s&&s(_.root);let m=!1;if(_.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return _.ctx&&a(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),m&&st(n,t)),e})):[],_.update(),m=!0,r(_.before_update),_.fragment=!!c&&c(_.ctx),e.target){if(e.hydrate){f=!0;const t=E(e.target);_.fragment&&_.fragment.l(t),t.forEach(p)}else _.fragment&&_.fragment.c();e.intro&&tt(n.$$.fragment),at(n,e.target,e.anchor,e.customElement),f=!1,W()}M(h)}class ft{$destroy(){lt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function ht(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!dt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),dt.push(t,n)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.push(l),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{q as A,n as B,ht as C,a as D,s as E,h as F,t as G,O as H,b as I,w as J,r as K,J as L,B as M,m as N,C as O,D as P,rt as Q,K as R,ft as S,E as a,v as b,k as c,p as d,g as e,_ as f,A as g,j as h,ut as i,it as j,x as k,y as l,ct as m,S as n,at as o,et as p,ot as q,Y as r,c as s,$ as t,nt as u,lt as v,Z as w,tt as x,L as y,I as z};

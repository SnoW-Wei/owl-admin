import{e as x}from"./index-3c21212b.js";import{r as a}from"./codemirror-98a55bac.js";function b(y,A){for(var t=0;t<A.length;t++){const l=A[t];if(typeof l!="string"&&!Array.isArray(l)){for(const f in l)if(f!=="default"&&!(f in y)){const g=Object.getOwnPropertyDescriptor(l,f);g&&Object.defineProperty(y,f,g.get?g:{enumerable:!0,get:()=>l[f]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var D={exports:{}};(function(y,A){(function(t){t(a())})(function(t){t.multiplexingMode=function(l){var f=Array.prototype.slice.call(arguments,1);function g(i,n,r,e){if(typeof n=="string"){var p=i.indexOf(n,r);return e&&p>-1?p+n.length:p}var o=n.exec(r?i.slice(r):i);return o?o.index+r+(e?o[0].length:0):-1}return{startState:function(){return{outer:t.startState(l),innerActive:null,inner:null,startingInner:!1}},copyState:function(i){return{outer:t.copyState(l,i.outer),innerActive:i.innerActive,inner:i.innerActive&&t.copyState(i.innerActive.mode,i.inner),startingInner:i.startingInner}},token:function(i,n){if(n.innerActive){var c=n.innerActive,e=i.string;if(!c.close&&i.sol())return n.innerActive=n.inner=null,this.token(i,n);var v=c.close&&!n.startingInner?g(e,c.close,i.pos,c.parseDelimiters):-1;if(v==i.pos&&!c.parseDelimiters)return i.match(c.close),n.innerActive=n.inner=null,c.delimStyle&&c.delimStyle+" "+c.delimStyle+"-close";v>-1&&(i.string=e.slice(0,v));var u=c.mode.token(i,n.inner);return v>-1?i.string=e:i.pos>i.start&&(n.startingInner=!1),v==i.pos&&c.parseDelimiters&&(n.innerActive=n.inner=null),c.innerStyle&&(u?u=u+" "+c.innerStyle:u=c.innerStyle),u}else{for(var r=1/0,e=i.string,p=0;p<f.length;++p){var o=f[p],v=g(e,o.open,i.pos);if(v==i.pos){o.parseDelimiters||i.match(o.open),n.startingInner=!!o.parseDelimiters,n.innerActive=o;var d=0;if(l.indent){var m=l.indent(n.outer,"","");m!==t.Pass&&(d=m)}return n.inner=t.startState(o.mode,d),o.delimStyle&&o.delimStyle+" "+o.delimStyle+"-open"}else v!=-1&&v<r&&(r=v)}r!=1/0&&(i.string=e.slice(0,r));var S=l.token(i,n.outer);return r!=1/0&&(i.string=e),S}},indent:function(i,n,r){var e=i.innerActive?i.innerActive.mode:l;return e.indent?e.indent(i.innerActive?i.inner:i.outer,n,r):t.Pass},blankLine:function(i){var n=i.innerActive?i.innerActive.mode:l;if(n.blankLine&&n.blankLine(i.innerActive?i.inner:i.outer),i.innerActive)i.innerActive.close===`
`&&(i.innerActive=i.inner=null);else for(var r=0;r<f.length;++r){var e=f[r];e.open===`
`&&(i.innerActive=e,i.inner=t.startState(e.mode,n.indent?n.indent(i.outer,"",""):0))}},electricChars:l.electricChars,innerMode:function(i){return i.inner?{state:i.inner,mode:i.innerActive.mode}:{state:i.outer,mode:l}}}}})})();var s=D.exports;const j=x(s),k=b({__proto__:null,default:j},[s]);export{k as m};
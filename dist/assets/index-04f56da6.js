function hT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Iy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sy={exports:{}},Ul={},Ay={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),dT=Symbol.for("react.portal"),fT=Symbol.for("react.fragment"),pT=Symbol.for("react.strict_mode"),mT=Symbol.for("react.profiler"),gT=Symbol.for("react.provider"),yT=Symbol.for("react.context"),vT=Symbol.for("react.forward_ref"),_T=Symbol.for("react.suspense"),ET=Symbol.for("react.memo"),wT=Symbol.for("react.lazy"),Pp=Symbol.iterator;function TT(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Py=Object.assign,Cy={};function Bi(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||Ry}Bi.prototype.isReactComponent={};Bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=Bi.prototype;function vd(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||Ry}var _d=vd.prototype=new ky;_d.constructor=vd;Py(_d,Bi.prototype);_d.isPureReactComponent=!0;var Cp=Array.isArray,Ny=Object.prototype.hasOwnProperty,Ed={current:null},Dy={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ny.call(e,r)&&!Dy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yo,type:t,key:s,ref:o,props:i,_owner:Ed.current}}function IT(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function ST(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kp=/\/+/g;function zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ST(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case dT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zu(o,0):r,Cp(i)?(n="",t!=null&&(n=t.replace(kp,"$&/")+"/"),_a(i,e,n,"",function(u){return u})):i!=null&&(wd(i)&&(i=IT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zu(s,a);o+=_a(s,e,n,l,i)}else if(l=TT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zu(s,a++),o+=_a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},Ea={transition:null},RT={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Ed};H.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Bi;H.Fragment=fT;H.Profiler=mT;H.PureComponent=vd;H.StrictMode=pT;H.Suspense=_T;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RT;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Py({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ny.call(e,l)&&!Dy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yo,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:yT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gT,_context:t},t.Consumer=t};H.createElement=Oy;H.createFactory=function(t){var e=Oy.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:vT,render:t}};H.isValidElement=wd;H.lazy=function(t){return{$$typeof:wT,_payload:{_status:-1,_result:t},_init:AT}};H.memo=function(t,e){return{$$typeof:ET,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Je.current.useCallback(t,e)};H.useContext=function(t){return Je.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};H.useEffect=function(t,e){return Je.current.useEffect(t,e)};H.useId=function(){return Je.current.useId()};H.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Je.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};H.useRef=function(t){return Je.current.useRef(t)};H.useState=function(t){return Je.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Je.current.useTransition()};H.version="18.2.0";Ay.exports=H;var N=Ay.exports;const ot=Iy(N),PT=hT({__proto__:null,default:ot},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CT=N,kT=Symbol.for("react.element"),NT=Symbol.for("react.fragment"),DT=Object.prototype.hasOwnProperty,OT=CT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xT={key:!0,ref:!0,__self:!0,__source:!0};function xy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DT.call(e,r)&&!xT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kT,type:t,key:s,ref:o,props:i,_owner:OT.current}}Ul.Fragment=NT;Ul.jsx=xy;Ul.jsxs=xy;Sy.exports=Ul;var F=Sy.exports,Bc={},Vy={exports:{}},_t={},My={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,L){var j=P.length;P.push(L);e:for(;0<j;){var te=j-1>>>1,me=P[te];if(0<i(me,L))P[te]=L,P[j]=me,j=te;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],j=P.pop();if(j!==L){P[0]=j;e:for(var te=0,me=P.length,zo=me>>>1;te<zo;){var hr=2*(te+1)-1,Bu=P[hr],dr=hr+1,qo=P[dr];if(0>i(Bu,j))dr<me&&0>i(qo,Bu)?(P[te]=qo,P[dr]=j,te=dr):(P[te]=Bu,P[hr]=j,te=hr);else if(dr<me&&0>i(qo,j))P[te]=qo,P[dr]=j,te=dr;else break e}}return L}function i(P,L){var j=P.sortIndex-L.sortIndex;return j!==0?j:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function E(P){if(v=!1,g(P),!y)if(n(l)!==null)y=!0,tt(T);else{var L=n(u);L!==null&&sn(E,L.startTime-P)}}function T(P,L){y=!1,v&&(v=!1,m(D),D=-1),p=!0;var j=d;try{for(g(L),h=n(l);h!==null&&(!(h.expirationTime>L)||P&&!et());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var me=te(h.expirationTime<=L);L=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&r(l),g(L)}else r(l);h=n(l)}if(h!==null)var zo=!0;else{var hr=n(u);hr!==null&&sn(E,hr.startTime-L),zo=!1}return zo}finally{h=null,d=j,p=!1}}var I=!1,C=null,D=-1,Y=5,B=-1;function et(){return!(t.unstable_now()-B<Y)}function cr(){if(C!==null){var P=t.unstable_now();B=P;var L=!0;try{L=C(!0,P)}finally{L?ht():(I=!1,C=null)}}else I=!1}var ht;if(typeof f=="function")ht=function(){f(cr)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,Sn=kt.port2;kt.port1.onmessage=cr,ht=function(){Sn.postMessage(null)}}else ht=function(){_(cr,0)};function tt(P){C=P,I||(I=!0,ht())}function sn(P,L){D=_(function(){P(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,tt(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var j=d;d=L;try{return P()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=d;d=P;try{return L()}finally{d=j}},t.unstable_scheduleCallback=function(P,L,j){var te=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,P){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=j+me,P={id:c++,callback:L,priorityLevel:P,startTime:j,expirationTime:me,sortIndex:-1},j>te?(P.sortIndex=j,e(u,P),n(l)===null&&P===n(u)&&(v?(m(D),D=-1):v=!0,sn(E,j-te))):(P.sortIndex=me,e(l,P),y||p||(y=!0,tt(T))),P},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(P){var L=d;return function(){var j=d;d=L;try{return P.apply(this,arguments)}finally{d=j}}}})(Ly);My.exports=Ly;var VT=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=N,yt=VT;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var by=new Set,Os={};function Ur(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(Os[t]=e,t=0;t<e.length;t++)by.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,MT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Dp={};function LT(t){return zc.call(Dp,t)?!0:zc.call(Np,t)?!1:MT.test(t)?Dp[t]=!0:(Np[t]=!0,!1)}function FT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bT(t,e,n,r){if(e===null||typeof e>"u"||FT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,Id);Ve[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,Id);Ve[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,Id);Ve[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sd(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bT(e,n,i,r)&&(n=null),r||i===null?LT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),jy=Symbol.for("react.offscreen"),Op=Symbol.iterator;function Xi(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,qu;function as(t){if(qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qu=e&&e[1]||""}return`
`+qu+t}var Hu=!1;function Wu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?as(t):""}function UT(t){switch(t.tag){case 5:return as(t.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function Kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case qc:return"Profiler";case Ad:return"StrictMode";case Hc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $y:return(t.displayName||"Context")+".Consumer";case Uy:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:Kc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Kc(t(e))}catch{}}return null}function $T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function By(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jT(t){var e=By(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=jT(t))}function zy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=By(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qy(t,e){e=e.checked,e!=null&&Sd(t,"checked",e,!1)}function Gc(t,e){qy(t,e);var n=Jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,Jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||$a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ls=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ls(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jn(n)}}function Hy(t,e){var n=Jn(e.value),r=Jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,Ky=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BT=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(t){BT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ys[e]=ys[t]})});function Qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ys.hasOwnProperty(t)&&ys[t]?(""+e).trim():e+"px"}function Gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zT=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(zT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,pi=null,mi=null;function Fp(t){if(t=Eo(t)){if(typeof nh!="function")throw Error(S(280));var e=t.stateNode;e&&(e=ql(e),nh(t.stateNode,t.type,e))}}function Yy(t){pi?mi?mi.push(t):mi=[t]:pi=t}function Xy(){if(pi){var t=pi,e=mi;if(mi=pi=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var Ku=!1;function ev(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return Jy(t,e,n)}finally{Ku=!1,(pi!==null||mi!==null)&&(Zy(),Xy())}}function Vs(t,e){var n=t.stateNode;if(n===null)return null;var r=ql(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var rh=!1;if(pn)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){rh=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{rh=!1}function qT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vs=!1,ja=null,Ba=!1,ih=null,HT={onError:function(t){vs=!0,ja=t}};function WT(t,e,n,r,i,s,o,a,l){vs=!1,ja=null,qT.apply(HT,arguments)}function KT(t,e,n,r,i,s,o,a,l){if(WT.apply(this,arguments),vs){if(vs){var u=ja;vs=!1,ja=null}else throw Error(S(198));Ba||(Ba=!0,ih=u)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bp(t){if($r(t)!==t)throw Error(S(188))}function QT(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bp(i),t;if(s===r)return bp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function nv(t){return t=QT(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var iv=yt.unstable_scheduleCallback,Up=yt.unstable_cancelCallback,GT=yt.unstable_shouldYield,YT=yt.unstable_requestPaint,pe=yt.unstable_now,XT=yt.unstable_getCurrentPriorityLevel,kd=yt.unstable_ImmediatePriority,sv=yt.unstable_UserBlockingPriority,za=yt.unstable_NormalPriority,JT=yt.unstable_LowPriority,ov=yt.unstable_IdlePriority,$l=null,Wt=null;function ZT(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:n1,e1=Math.log,t1=Math.LN2;function n1(t){return t>>>=0,t===0?32:31-(e1(t)/t1|0)|0}var Go=64,Yo=4194304;function us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=us(a):(s&=o,s!==0&&(r=us(s)))}else o=n&~i,o!==0?r=us(o):s!==0&&(r=us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function r1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=r1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=Go;return Go<<=1,!(Go&4194240)&&(Go=64),t}function Qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function s1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,Dd,cv,hv,dv,oh=!1,Xo=[],$n=null,jn=null,Bn=null,Ms=new Map,Ls=new Map,Nn=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Ms.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Zi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Eo(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function a1(t,e,n,r,i){switch(e){case"focusin":return $n=Zi($n,t,e,n,r,i),!0;case"dragenter":return jn=Zi(jn,t,e,n,r,i),!0;case"mouseover":return Bn=Zi(Bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ms.set(s,Zi(Ms.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Zi(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function fv(t){var e=gr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,dv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);th=r,n.target.dispatchEvent(r),th=null}else return e=Eo(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function jp(t,e,n){wa(t)&&n.delete(e)}function l1(){oh=!1,$n!==null&&wa($n)&&($n=null),jn!==null&&wa(jn)&&(jn=null),Bn!==null&&wa(Bn)&&(Bn=null),Ms.forEach(jp),Ls.forEach(jp)}function es(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,l1)))}function Fs(t){function e(i){return es(i,t)}if(0<Xo.length){es(Xo[0],t);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&es($n,t),jn!==null&&es(jn,t),Bn!==null&&es(Bn,t),Ms.forEach(e),Ls.forEach(e),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&Nn.shift()}var gi=In.ReactCurrentBatchConfig,Ha=!0;function u1(t,e,n,r){var i=J,s=gi.transition;gi.transition=null;try{J=1,Od(t,e,n,r)}finally{J=i,gi.transition=s}}function c1(t,e,n,r){var i=J,s=gi.transition;gi.transition=null;try{J=4,Od(t,e,n,r)}finally{J=i,gi.transition=s}}function Od(t,e,n,r){if(Ha){var i=ah(t,e,n,r);if(i===null)ic(t,e,r,Wa,n),$p(t,r);else if(a1(i,t,e,n,r))r.stopPropagation();else if($p(t,r),e&4&&-1<o1.indexOf(t)){for(;i!==null;){var s=Eo(i);if(s!==null&&uv(s),s=ah(t,e,n,r),s===null&&ic(t,e,r,Wa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ic(t,e,r,null,n)}}var Wa=null;function ah(t,e,n,r){if(Wa=null,t=Cd(r),t=gr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wa=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XT()){case kd:return 1;case sv:return 4;case za:case JT:return 16;case ov:return 536870912;default:return 16}default:return 16}}var Ln=null,xd=null,Ta=null;function mv(){if(Ta)return Ta;var t,e=xd,n=e.length,r,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ta=i.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function Bp(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:Bp,this.isPropagationStopped=Bp,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Et(zi),_o=ue({},zi,{view:0,detail:0}),h1=Et(_o),Gu,Yu,ts,jl=ue({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ts&&(ts&&t.type==="mousemove"?(Gu=t.screenX-ts.screenX,Yu=t.screenY-ts.screenY):Yu=Gu=0,ts=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),zp=Et(jl),d1=ue({},jl,{dataTransfer:0}),f1=Et(d1),p1=ue({},_o,{relatedTarget:0}),Xu=Et(p1),m1=ue({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),g1=Et(m1),y1=ue({},zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v1=Et(y1),_1=ue({},zi,{data:0}),qp=Et(_1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T1[t])?!!e[t]:!1}function Md(){return I1}var S1=ue({},_o,{key:function(t){if(t.key){var e=E1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A1=Et(S1),R1=ue({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Et(R1),P1=ue({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),C1=Et(P1),k1=ue({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=Et(k1),D1=ue({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=Et(D1),x1=[9,13,27,32],Ld=pn&&"CompositionEvent"in window,_s=null;pn&&"documentMode"in document&&(_s=document.documentMode);var V1=pn&&"TextEvent"in window&&!_s,gv=pn&&(!Ld||_s&&8<_s&&11>=_s),Wp=String.fromCharCode(32),Kp=!1;function yv(t,e){switch(t){case"keyup":return x1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function M1(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(Kp=!0,Wp);case"textInput":return t=e.data,t===Wp&&Kp?null:t;default:return null}}function L1(t,e){if(ti)return t==="compositionend"||!Ld&&yv(t,e)?(t=mv(),Ta=xd=Ln=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F1[t.type]:e==="textarea"}function _v(t,e,n,r){Yy(r),e=Ka(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Es=null,bs=null;function b1(t){Nv(t,0)}function Bl(t){var e=ii(t);if(zy(e))return t}function U1(t,e){if(t==="change")return e}var Ev=!1;if(pn){var Ju;if(pn){var Zu="oninput"in document;if(!Zu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Zu=typeof Gp.oninput=="function"}Ju=Zu}else Ju=!1;Ev=Ju&&(!document.documentMode||9<document.documentMode)}function Yp(){Es&&(Es.detachEvent("onpropertychange",wv),bs=Es=null)}function wv(t){if(t.propertyName==="value"&&Bl(bs)){var e=[];_v(e,bs,t,Cd(t)),ev(b1,e)}}function $1(t,e,n){t==="focusin"?(Yp(),Es=e,bs=n,Es.attachEvent("onpropertychange",wv)):t==="focusout"&&Yp()}function j1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(bs)}function B1(t,e){if(t==="click")return Bl(e)}function z1(t,e){if(t==="input"||t==="change")return Bl(e)}function q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:q1;function Us(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Xp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xp(n)}}function Tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iv(){for(var t=window,e=$a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$a(t.document)}return e}function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H1(t){var e=Iv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(r!==null&&Fd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jp(n,s);var o=Jp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W1=pn&&"documentMode"in document&&11>=document.documentMode,ni=null,lh=null,ws=null,uh=!1;function Zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uh||ni==null||ni!==$a(r)||(r=ni,"selectionStart"in r&&Fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ws&&Us(ws,r)||(ws=r,r=Ka(lh,"onSelect"),0<r.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},ec={},Sv={};pn&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function zl(t){if(ec[t])return ec[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sv)return ec[t]=e[n];return t}var Av=zl("animationend"),Rv=zl("animationiteration"),Pv=zl("animationstart"),Cv=zl("transitionend"),kv=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){kv.set(t,e),Ur(e,[t])}for(var tc=0;tc<em.length;tc++){var nc=em[tc],K1=nc.toLowerCase(),Q1=nc[0].toUpperCase()+nc.slice(1);ir(K1,"on"+Q1)}ir(Av,"onAnimationEnd");ir(Rv,"onAnimationIteration");ir(Pv,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Cv,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KT(r,e,void 0,t),t.currentTarget=null}function Nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;tm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;tm(i,a,u),s=l}}}if(Ba)throw t=ih,Ba=!1,ih=null,t}function ne(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var r=t+"__bubble";n.has(r)||(Dv(e,t,2,!1),n.add(r))}function rc(t,e,n){var r=0;e&&(r|=4),Dv(n,t,r,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function $s(t){if(!t[ea]){t[ea]=!0,by.forEach(function(n){n!=="selectionchange"&&(G1.has(n)||rc(n,!1,t),rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,rc("selectionchange",!1,e))}}function Dv(t,e,n,r){switch(pv(e)){case 1:var i=u1;break;case 4:i=c1;break;default:i=Od}n=i.bind(null,e,n,t),i=void 0,!rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ic(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ev(function(){var u=s,c=Cd(n),h=[];e:{var d=kv.get(t);if(d!==void 0){var p=Vd,y=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":p=A1;break;case"focusin":y="focus",p=Xu;break;case"focusout":y="blur",p=Xu;break;case"beforeblur":case"afterblur":p=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=f1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=C1;break;case Av:case Rv:case Pv:p=g1;break;case Cv:p=N1;break;case"scroll":p=h1;break;case"wheel":p=O1;break;case"copy":case"cut":case"paste":p=v1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hp}var v=(e&4)!==0,_=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=Vs(f,m),E!=null&&v.push(js(f,E,g)))),_)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==th&&(y=n.relatedTarget||n.fromElement)&&(gr(y)||y[mn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?gr(y):null,y!==null&&(_=$r(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=zp,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Hp,E="onPointerLeave",m="onPointerEnter",f="pointer"),_=p==null?d:ii(p),g=y==null?d:ii(y),d=new v(E,f+"leave",p,n,c),d.target=_,d.relatedTarget=g,E=null,gr(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=_,E=v),_=E,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=Gr(g))f++;for(g=0,E=m;E;E=Gr(E))g++;for(;0<f-g;)v=Gr(v),f--;for(;0<g-f;)m=Gr(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Gr(v),m=Gr(m)}v=null}else v=null;p!==null&&nm(h,d,p,v,!1),y!==null&&_!==null&&nm(h,_,y,v,!0)}}e:{if(d=u?ii(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=U1;else if(Qp(d))if(Ev)T=z1;else{T=j1;var I=$1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=B1);if(T&&(T=T(t,u))){_v(h,T,n,c);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Yc(d,"number",d.value)}switch(I=u?ii(u):window,t){case"focusin":(Qp(I)||I.contentEditable==="true")&&(ni=I,lh=u,ws=null);break;case"focusout":ws=lh=ni=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Zp(h,n,c);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":Zp(h,n,c)}var C;if(Ld)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ti?yv(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(gv&&n.locale!=="ko"&&(ti||D!=="onCompositionStart"?D==="onCompositionEnd"&&ti&&(C=mv()):(Ln=c,xd="value"in Ln?Ln.value:Ln.textContent,ti=!0)),I=Ka(u,D),0<I.length&&(D=new qp(D,t,null,n,c),h.push({event:D,listeners:I}),C?D.data=C:(C=vv(n),C!==null&&(D.data=C)))),(C=V1?M1(t,n):L1(t,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new qp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}Nv(h,e)})}function js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vs(t,n),s!=null&&r.unshift(js(t,s,i)),s=Vs(t,e),s!=null&&r.push(js(t,s,i))),t=t.return}return r}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vs(n,s),l!=null&&o.unshift(js(n,l,a))):i||(l=Vs(n,s),l!=null&&o.push(js(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Y1=/\r\n?/g,X1=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(Y1,`
`).replace(X1,"")}function ta(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(S(425))}function Qa(){}var ch=null,hh=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,J1=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,Z1=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(eI)}:fh;function eI(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fs(e)}function zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+qi,Bs="__reactProps$"+qi,mn="__reactContainer$"+qi,ph="__reactEvents$"+qi,tI="__reactListeners$"+qi,nI="__reactHandles$"+qi;function gr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[Bt])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function Eo(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function ql(t){return t[Bs]||null}var mh=[],si=-1;function sr(t){return{current:t}}function ie(t){0>si||(t.current=mh[si],mh[si]=null,si--)}function ee(t,e){si++,mh[si]=t.current,t.current=e}var Zn={},qe=sr(Zn),at=sr(!1),Pr=Zn;function Pi(t,e){var n=t.type.contextTypes;if(!n)return Zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Ga(){ie(at),ie(qe)}function om(t,e,n){if(qe.current!==Zn)throw Error(S(168));ee(qe,e),ee(at,n)}function Ov(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,$T(t)||"Unknown",i));return ue({},n,r)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zn,Pr=qe.current,ee(qe,t),ee(at,at.current),!0}function am(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Ov(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,ie(at),ie(qe),ee(qe,t)):ie(at),ee(at,n)}var an=null,Hl=!1,oc=!1;function xv(t){an===null?an=[t]:an.push(t)}function rI(t){Hl=!0,xv(t)}function or(){if(!oc&&an!==null){oc=!0;var t=0,e=J;try{var n=an;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,Hl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),iv(kd,or),i}finally{J=e,oc=!1}}return null}var oi=[],ai=0,Xa=null,Ja=0,Tt=[],It=0,Cr=null,ln=1,un="";function fr(t,e){oi[ai++]=Ja,oi[ai++]=Xa,Xa=t,Ja=e}function Vv(t,e,n){Tt[It++]=ln,Tt[It++]=un,Tt[It++]=Cr,Cr=t;var r=ln;t=un;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-Mt(e)+i|n<<i|r,un=s+t}else ln=1<<s|n<<i|r,un=t}function bd(t){t.return!==null&&(fr(t,1),Vv(t,1,0))}function Ud(t){for(;t===Xa;)Xa=oi[--ai],oi[ai]=null,Ja=oi[--ai],oi[ai]=null;for(;t===Cr;)Cr=Tt[--It],Tt[It]=null,un=Tt[--It],Tt[It]=null,ln=Tt[--It],Tt[It]=null}var mt=null,ft=null,oe=!1,xt=null;function Mv(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mt=t,ft=zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mt=t,ft=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yh(t){if(oe){var e=ft;if(e){var n=e;if(!lm(t,e)){if(gh(t))throw Error(S(418));e=zn(n.nextSibling);var r=mt;e&&lm(t,e)?Mv(r,n):(t.flags=t.flags&-4097|2,oe=!1,mt=t)}}else{if(gh(t))throw Error(S(418));t.flags=t.flags&-4097|2,oe=!1,mt=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function na(t){if(t!==mt)return!1;if(!oe)return um(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=ft)){if(gh(t))throw Lv(),Error(S(418));for(;e;)Mv(t,e),e=zn(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=mt?zn(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=ft;t;)t=zn(t.nextSibling)}function Ci(){ft=mt=null,oe=!1}function $d(t){xt===null?xt=[t]:xt.push(t)}var iI=In.ReactCurrentBatchConfig;function Dt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Za=sr(null),el=null,li=null,jd=null;function Bd(){jd=li=el=null}function zd(t){var e=Za.current;ie(Za),t._currentValue=e}function vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){el=t,jd=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function Pt(t){var e=t._currentValue;if(jd!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(el===null)throw Error(S(308));li=t,el.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var yr=null;function qd(t){yr===null?yr=[t]:yr.push(t)}function Fv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function cm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=ue({},h,d);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Nr|=o,t.lanes=o,t.memoizedState=h}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Uv=new Fy.Component().refs;function _h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Wn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Lt(e,t,i,r),Sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Wn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Lt(e,t,i,r),Sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=Wn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(Lt(e,t,r,n),Sa(e,t,r))}};function dm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Us(n,r)||!Us(i,s):!0}function $v(t,e,n){var r=!1,i=Zn,s=e.contextType;return typeof s=="object"&&s!==null?s=Pt(s):(i=lt(e)?Pr:qe.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):Zn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function fm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Uv,Hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pt(s):(s=lt(e)?Pr:qe.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Uv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function jv(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Kn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,E){return f===null||f.tag!==6?(f=fc(g,m.mode,E),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,E){var T=g.type;return T===ei?c(m,f,g.props.children,E,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pn&&pm(T)===f.type)?(E=i(f,g.props),E.ref=ns(m,f,g),E.return=m,E):(E=Na(g.type,g.key,g.props,null,m.mode,E),E.ref=ns(m,f,g),E.return=m,E)}function u(m,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=pc(g,m.mode,E),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,E,T){return f===null||f.tag!==7?(f=Sr(g,m.mode,E,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fc(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wo:return g=Na(f.type,f.key,f.props,null,m.mode,g),g.ref=ns(m,null,f),g.return=m,g;case Zr:return f=pc(f,m.mode,g),f.return=m,f;case Pn:var E=f._init;return h(m,E(f._payload),g)}if(ls(f)||Xi(f))return f=Sr(f,m.mode,g,null),f.return=m,f;ra(m,f)}return null}function d(m,f,g,E){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:return g.key===T?l(m,f,g,E):null;case Zr:return g.key===T?u(m,f,g,E):null;case Pn:return T=g._init,d(m,f,T(g._payload),E)}if(ls(g)||Xi(g))return T!==null?null:c(m,f,g,E,null);ra(m,g)}return null}function p(m,f,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Wo:return m=m.get(E.key===null?g:E.key)||null,l(f,m,E,T);case Zr:return m=m.get(E.key===null?g:E.key)||null,u(f,m,E,T);case Pn:var I=E._init;return p(m,f,g,I(E._payload),T)}if(ls(E)||Xi(E))return m=m.get(g)||null,c(f,m,E,T,null);ra(f,E)}return null}function y(m,f,g,E){for(var T=null,I=null,C=f,D=f=0,Y=null;C!==null&&D<g.length;D++){C.index>D?(Y=C,C=null):Y=C.sibling;var B=d(m,C,g[D],E);if(B===null){C===null&&(C=Y);break}t&&C&&B.alternate===null&&e(m,C),f=s(B,f,D),I===null?T=B:I.sibling=B,I=B,C=Y}if(D===g.length)return n(m,C),oe&&fr(m,D),T;if(C===null){for(;D<g.length;D++)C=h(m,g[D],E),C!==null&&(f=s(C,f,D),I===null?T=C:I.sibling=C,I=C);return oe&&fr(m,D),T}for(C=r(m,C);D<g.length;D++)Y=p(C,m,D,g[D],E),Y!==null&&(t&&Y.alternate!==null&&C.delete(Y.key===null?D:Y.key),f=s(Y,f,D),I===null?T=Y:I.sibling=Y,I=Y);return t&&C.forEach(function(et){return e(m,et)}),oe&&fr(m,D),T}function v(m,f,g,E){var T=Xi(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var I=T=null,C=f,D=f=0,Y=null,B=g.next();C!==null&&!B.done;D++,B=g.next()){C.index>D?(Y=C,C=null):Y=C.sibling;var et=d(m,C,B.value,E);if(et===null){C===null&&(C=Y);break}t&&C&&et.alternate===null&&e(m,C),f=s(et,f,D),I===null?T=et:I.sibling=et,I=et,C=Y}if(B.done)return n(m,C),oe&&fr(m,D),T;if(C===null){for(;!B.done;D++,B=g.next())B=h(m,B.value,E),B!==null&&(f=s(B,f,D),I===null?T=B:I.sibling=B,I=B);return oe&&fr(m,D),T}for(C=r(m,C);!B.done;D++,B=g.next())B=p(C,m,D,B.value,E),B!==null&&(t&&B.alternate!==null&&C.delete(B.key===null?D:B.key),f=s(B,f,D),I===null?T=B:I.sibling=B,I=B);return t&&C.forEach(function(cr){return e(m,cr)}),oe&&fr(m,D),T}function _(m,f,g,E){if(typeof g=="object"&&g!==null&&g.type===ei&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:e:{for(var T=g.key,I=f;I!==null;){if(I.key===T){if(T=g.type,T===ei){if(I.tag===7){n(m,I.sibling),f=i(I,g.props.children),f.return=m,m=f;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pn&&pm(T)===I.type){n(m,I.sibling),f=i(I,g.props),f.ref=ns(m,I,g),f.return=m,m=f;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===ei?(f=Sr(g.props.children,m.mode,E,g.key),f.return=m,m=f):(E=Na(g.type,g.key,g.props,null,m.mode,E),E.ref=ns(m,f,g),E.return=m,m=E)}return o(m);case Zr:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=pc(g,m.mode,E),f.return=m,m=f}return o(m);case Pn:return I=g._init,_(m,f,I(g._payload),E)}if(ls(g))return y(m,f,g,E);if(Xi(g))return v(m,f,g,E);ra(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=fc(g,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return _}var ki=jv(!0),Bv=jv(!1),wo={},Kt=sr(wo),zs=sr(wo),qs=sr(wo);function vr(t){if(t===wo)throw Error(S(174));return t}function Wd(t,e){switch(ee(qs,e),ee(zs,t),ee(Kt,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jc(e,t)}ie(Kt),ee(Kt,e)}function Ni(){ie(Kt),ie(zs),ie(qs)}function zv(t){vr(qs.current);var e=vr(Kt.current),n=Jc(e,t.type);e!==n&&(ee(zs,t),ee(Kt,n))}function Kd(t){zs.current===t&&(ie(Kt),ie(zs))}var ae=sr(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function Qd(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Aa=In.ReactCurrentDispatcher,lc=In.ReactCurrentBatchConfig,kr=0,le=null,_e=null,Se=null,rl=!1,Ts=!1,Hs=0,sI=0;function Me(){throw Error(S(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Yd(t,e,n,r,i,s){if(kr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?uI:cI,t=n(r,i),Ts){s=0;do{if(Ts=!1,Hs=0,25<=s)throw Error(S(301));s+=1,Se=_e=null,e.updateQueue=null,Aa.current=hI,t=n(r,i)}while(Ts)}if(Aa.current=il,e=_e!==null&&_e.next!==null,kr=0,Se=_e=le=null,rl=!1,e)throw Error(S(300));return t}function Xd(){var t=Hs!==0;return Hs=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?le.memoizedState=Se=t:Se=Se.next=t,Se}function Ct(){if(_e===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Se===null?le.memoizedState:Se.next;if(e!==null)Se=e,_e=t;else{if(t===null)throw Error(S(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Se===null?le.memoizedState=Se=t:Se=Se.next=t}return Se}function Ws(t,e){return typeof e=="function"?e(t):e}function uc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,le.lanes|=c,Nr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ft(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qv(){}function Hv(t,e){var n=le,r=Ct(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,Jd(Qv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ks(9,Kv.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(S(349));kr&30||Wv(n,e,i)}return i}function Wv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,r){e.value=n,e.getSnapshot=r,Gv(e)&&Yv(t)}function Qv(t,e,n){return n(function(){Gv(e)&&Yv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function Yv(t){var e=gn(t,1);e!==null&&Lt(e,t,1,-1)}function mm(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},e.queue=t,t=t.dispatch=lI.bind(null,le,t),[e.memoizedState,t]}function Ks(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xv(){return Ct().memoizedState}function Ra(t,e,n,r){var i=jt();le.flags|=t,i.memoizedState=Ks(1|e,n,void 0,r===void 0?null:r)}function Kl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Gd(r,o.deps)){i.memoizedState=Ks(e,n,s,r);return}}le.flags|=t,i.memoizedState=Ks(1|e,n,s,r)}function gm(t,e){return Ra(8390656,8,t,e)}function Jd(t,e){return Kl(2048,8,t,e)}function Jv(t,e){return Kl(4,2,t,e)}function Zv(t,e){return Kl(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,e_.bind(null,e,t),n)}function Zd(){}function n_(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return kr&21?(Ft(n,e)||(n=av(),le.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function oI(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=lc.transition;lc.transition={};try{t(!1),e()}finally{J=n,lc.transition=r}}function s_(){return Ct().memoizedState}function aI(t,e,n){var r=Wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=Fv(t,e,n,r),n!==null){var i=Xe();Lt(n,t,r,i),l_(n,e,r)}}function lI(t,e,n){var r=Wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,o)){var l=e.interleaved;l===null?(i.next=i,qd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Fv(t,e,i,r),n!==null&&(i=Xe(),Lt(n,t,r,i),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===le||e!==null&&e===le}function a_(t,e){Ts=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var il={readContext:Pt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},uI={readContext:Pt,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aI.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Zd,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=oI.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=jt();if(oe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ae===null)throw Error(S(349));kr&30||Wv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gm(Qv.bind(null,r,s,t),[t]),r.flags|=2048,Ks(9,Kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jt(),e=Ae.identifierPrefix;if(oe){var n=un,r=ln;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cI={readContext:Pt,useCallback:n_,useContext:Pt,useEffect:Jd,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:r_,useReducer:uc,useRef:Xv,useState:function(){return uc(Ws)},useDebugValue:Zd,useDeferredValue:function(t){var e=Ct();return i_(e,_e.memoizedState,t)},useTransition:function(){var t=uc(Ws)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Hv,useId:s_,unstable_isNewReconciler:!1},hI={readContext:Pt,useCallback:n_,useContext:Pt,useEffect:Jd,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Zv,useMemo:r_,useReducer:cc,useRef:Xv,useState:function(){return cc(Ws)},useDebugValue:Zd,useDeferredValue:function(t){var e=Ct();return _e===null?e.memoizedState=t:i_(e,_e.memoizedState,t)},useTransition:function(){var t=cc(Ws)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Hv,useId:s_,unstable_isNewReconciler:!1};function Di(t,e){try{var n="",r=e;do n+=UT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dI=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,Dh=r),wh(t,e)},n}function c_(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RI.bind(null,t,e,n),e.then(t,t))}function vm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var fI=In.ReactCurrentOwner,st=!1;function Ge(t,e,n,r){e.child=t===null?Bv(e,null,n,r):ki(e,t.child,n,r)}function Em(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=Yd(t,e,n,r,s,i),n=Xd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(oe&&n&&bd(e),e.flags|=1,Ge(t,e,r,i),e.child)}function wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,h_(t,e,s,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Us,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function h_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Us(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,yn(t,e,i)}return Th(t,e,n,r,i)}function d_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(ci,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(ci,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(ci,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(ci,dt),dt|=r;return Ge(t,e,i,n),e.child}function f_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Th(t,e,n,r,i){var s=lt(n)?Pr:qe.current;return s=Pi(e,s),yi(e,i),n=Yd(t,e,n,r,s,i),r=Xd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(oe&&r&&bd(e),e.flags|=1,Ge(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(lt(n)){var s=!0;Ya(e)}else s=!1;if(yi(e,i),e.stateNode===null)Pa(t,e),$v(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=lt(n)?Pr:qe.current,u=Pi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&fm(e,o,r,u),Cn=!1;var d=e.memoizedState;o.state=d,tl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||at.current||Cn?(typeof c=="function"&&(_h(e,n,c,r),l=e.memoizedState),(a=Cn||dm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=lt(n)?Pr:qe.current,l=Pi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&fm(e,o,r,l),Cn=!1,d=e.memoizedState,o.state=d,tl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||at.current||Cn?(typeof p=="function"&&(_h(e,n,p,r),y=e.memoizedState),(u=Cn||dm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ih(t,e,n,r,s,i)}function Ih(t,e,n,r,i,s){f_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&am(e,n,!1),yn(t,e,s);r=e.stateNode,fI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ki(e,t.child,null,s),e.child=ki(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&am(e,n,!0),e.child}function p_(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Wd(t,e.containerInfo)}function Im(t,e,n,r,i){return Ci(),$d(i),e.flags|=256,Ge(t,e,n,r),e.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function m_(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ae,i&1),t===null)return yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ah(n),e.memoizedState=Sh,t):ef(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kn(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sh,r}return s=t.child,t=s.sibling,r=Kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ef(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,r){return r!==null&&$d(r),ki(e,t.child,null,n),t=ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hc(Error(S(422))),ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yl({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ki(e,t.child,null,o),e.child.memoizedState=Ah(o),e.memoizedState=Sh,s);if(!(e.mode&1))return ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=hc(s,r,void 0),ia(t,e,o,r)}if(a=(o&t.childLanes)!==0,st||a){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Lt(r,t,i,-1))}return af(),r=hc(Error(S(421))),ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=zn(i.nextSibling),mt=e,oe=!0,xt=null,t!==null&&(Tt[It++]=ln,Tt[It++]=un,Tt[It++]=Cr,ln=t.id,un=t.overflow,Cr=e),e=ef(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vh(t.return,e,n)}function dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dc(e,!0,n,null,s);break;case"together":dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mI(t,e,n){switch(e.tag){case 3:p_(e),Ci();break;case 5:zv(e);break;case 1:lt(e.type)&&Ya(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?m_(t,e,n):(ee(ae,ae.current&1),t=yn(t,e,n),t!==null?t.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,d_(t,e,n)}return yn(t,e,n)}var y_,Rh,v_,__;y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};v_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vr(Kt.current);var s=null;switch(n){case"input":i=Qc(t,i),r=Qc(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=Xc(t,i),r=Xc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qa)}Zc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Os.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Os.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};__=function(t,e,n,r){n!==r&&(e.flags|=4)};function rs(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gI(t,e,n){var r=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return lt(e.type)&&Ga(),Le(e),null;case 3:return r=e.stateNode,Ni(),ie(at),ie(qe),Qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Vh(xt),xt=null))),Rh(t,e),Le(e),null;case 5:Kd(e);var i=vr(qs.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Le(e),null}if(t=vr(Kt.current),na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Bs]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)ne(cs[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":xp(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Mp(r,s),ne("invalid",r)}Zc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,a,t),i=["children",""+a]):Os.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ko(r),Vp(r,s,!0);break;case"textarea":Ko(r),Lp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[Bs]=r,y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)ne(cs[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":xp(t,r),i=Qc(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Mp(t,r),i=Xc(t,r),ne("invalid",t);break;default:i=r}Zc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ky(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xs(t,l):typeof l=="number"&&xs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Os.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&Sd(t,s,l,o))}switch(n){case"input":Ko(t),Vp(t,r,!1);break;case"textarea":Ko(t),Lp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)__(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=vr(qs.current),vr(Kt.current),na(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=mt,t!==null))switch(t.tag){case 3:ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Le(e),null;case 13:if(ie(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&ft!==null&&e.mode&1&&!(e.flags&128))Lv(),Ci(),e.flags|=98560,s=!1;else if(s=na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Bt]=e}else Ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else xt!==null&&(Vh(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?we===0&&(we=3):af())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return Ni(),Rh(t,e),t===null&&$s(e.stateNode.containerInfo),Le(e),null;case 10:return zd(e.type._context),Le(e),null;case 17:return lt(e.type)&&Ga(),Le(e),null;case 19:if(ie(ae),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)rs(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,rs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Oi&&(e.flags|=128,r=!0,rs(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Le(e),null}else 2*pe()-s.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return of(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function yI(t,e){switch(Ud(e),e.tag){case 1:return lt(e.type)&&Ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ni(),ie(at),ie(qe),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(ie(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ae),null;case 4:return Ni(),null;case 10:return zd(e.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var sa=!1,be=!1,vI=typeof WeakSet=="function"?WeakSet:Set,k=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Ph(t,e,n){try{n()}catch(r){he(t,e,r)}}var Am=!1;function _I(t,e){if(ch=Ha,t=Iv(),Fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hh={focusedElem:t,selectionRange:n},Ha=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Dt(e.type,v),_);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){he(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=Am,Am=!1,y}function Is(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ph(e,n,s)}i=i.next}while(i!==r)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[Bs],delete e[ph],delete e[tI],delete e[nI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w_(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var Ce=null,Ot=!1;function An(t,e,n){for(n=n.child;n!==null;)T_(t,e,n),n=n.sibling}function T_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:be||ui(n,e);case 6:var r=Ce,i=Ot;Ce=null,An(t,e,n),Ce=r,Ot=i,Ce!==null&&(Ot?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(Ot?(t=Ce,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),Fs(t)):sc(Ce,n.stateNode));break;case 4:r=Ce,i=Ot,Ce=n.stateNode.containerInfo,Ot=!0,An(t,e,n),Ce=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ph(n,e,o),i=i.next}while(i!==r)}An(t,e,n);break;case 1:if(!be&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,An(t,e,n),be=r):An(t,e,n);break;default:An(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vI),e.forEach(function(r){var i=CI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,Ot=!1;break e;case 3:Ce=a.stateNode.containerInfo,Ot=!0;break e;case 4:Ce=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(Ce===null)throw Error(S(160));T_(s,o,i),Ce=null,Ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)I_(e,t),e=e.sibling}function I_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),$t(t),r&4){try{Is(3,t,t.return),Ql(3,t)}catch(v){he(t,t.return,v)}try{Is(5,t,t.return)}catch(v){he(t,t.return,v)}}break;case 1:Nt(e,t),$t(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Nt(e,t),$t(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{xs(i,"")}catch(v){he(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qy(i,s),eh(a,o);var u=eh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Gy(i,h):c==="dangerouslySetInnerHTML"?Ky(i,h):c==="children"?xs(i,h):Sd(i,c,h,u)}switch(a){case"input":Gc(i,s);break;case"textarea":Hy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?fi(i,!!s.multiple,s.defaultValue,!0):fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Bs]=s}catch(v){he(t,t.return,v)}}break;case 6:if(Nt(e,t),$t(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){he(t,t.return,v)}}break;case 3:if(Nt(e,t),$t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fs(e.containerInfo)}catch(v){he(t,t.return,v)}break;case 4:Nt(e,t),$t(t);break;case 13:Nt(e,t),$t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rf=pe())),r&4&&Pm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||c,Nt(e,t),be=u):Nt(e,t),$t(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,p=d.child,d.tag){case 0:case 11:case 14:case 15:Is(4,d,d.return);break;case 1:ui(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){he(r,n,v)}}break;case 5:ui(d,d.return);break;case 22:if(d.memoizedState!==null){km(h);continue}}p!==null?(p.return=d,k=p):km(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qy("display",o))}catch(v){he(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){he(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nt(e,t),$t(t),r&4&&Pm(t);break;case 21:break;default:Nt(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w_(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var s=Rm(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rm(t);kh(t,a,o);break;default:throw Error(S(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EI(t,e,n){k=t,S_(t)}function S_(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=sa;var u=be;if(sa=o,(be=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Nm(i):l!==null?(l.return=o,k=l):Nm(i);for(;s!==null;)k=s,S_(s),s=s.sibling;k=i,sa=a,be=u}Cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Cm(t)}}function Cm(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||Ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Fs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}be||e.flags&512&&Ch(e)}catch(d){he(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function km(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Nm(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){he(e,i,l)}}var s=e.return;try{Ch(e)}catch(l){he(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var wI=Math.ceil,sl=In.ReactCurrentDispatcher,tf=In.ReactCurrentOwner,Rt=In.ReactCurrentBatchConfig,K=0,Ae=null,ve=null,Oe=0,dt=0,ci=sr(0),we=0,Qs=null,Nr=0,Gl=0,nf=0,Ss=null,rt=null,rf=0,Oi=1/0,on=null,ol=!1,Dh=null,Hn=null,oa=!1,Fn=null,al=0,As=0,Oh=null,Ca=-1,ka=0;function Xe(){return K&6?pe():Ca!==-1?Ca:Ca=pe()}function Wn(t){return t.mode&1?K&2&&Oe!==0?Oe&-Oe:iI.transition!==null?(ka===0&&(ka=av()),ka):(t=J,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Lt(t,e,n,r){if(50<As)throw As=0,Oh=null,Error(S(185));vo(t,n,r),(!(K&2)||t!==Ae)&&(t===Ae&&(!(K&2)&&(Gl|=n),we===4&&Dn(t,Oe)),ut(t,r),n===1&&K===0&&!(e.mode&1)&&(Oi=pe()+500,Hl&&or()))}function ut(t,e){var n=t.callbackNode;i1(t,e);var r=qa(t,t===Ae?Oe:0);if(r===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?rI(Dm.bind(null,t)):xv(Dm.bind(null,t)),Z1(function(){!(K&6)&&or()}),n=null;else{switch(lv(r)){case 1:n=kd;break;case 4:n=sv;break;case 16:n=za;break;case 536870912:n=ov;break;default:n=za}n=O_(n,A_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A_(t,e){if(Ca=-1,ka=0,K&6)throw Error(S(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=qa(t,t===Ae?Oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var i=K;K|=2;var s=P_();(Ae!==t||Oe!==e)&&(on=null,Oi=pe()+500,Ir(t,e));do try{SI();break}catch(a){R_(t,a)}while(1);Bd(),sl.current=s,K=i,ve!==null?e=0:(Ae=null,Oe=0,e=we)}if(e!==0){if(e===2&&(i=sh(t),i!==0&&(r=i,e=xh(t,i))),e===1)throw n=Qs,Ir(t,0),Dn(t,r),ut(t,pe()),n;if(e===6)Dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!TI(i)&&(e=ll(t,r),e===2&&(s=sh(t),s!==0&&(r=s,e=xh(t,s))),e===1))throw n=Qs,Ir(t,0),Dn(t,r),ut(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:pr(t,rt,on);break;case 3:if(Dn(t,r),(r&130023424)===r&&(e=rf+500-pe(),10<e)){if(qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fh(pr.bind(null,t,rt,on),e);break}pr(t,rt,on);break;case 4:if(Dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wI(r/1960))-r,10<r){t.timeoutHandle=fh(pr.bind(null,t,rt,on),r);break}pr(t,rt,on);break;case 5:pr(t,rt,on);break;default:throw Error(S(329))}}}return ut(t,pe()),t.callbackNode===n?A_.bind(null,t):null}function xh(t,e){var n=Ss;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=ll(t,e),t!==2&&(e=rt,rt=n,e!==null&&Vh(e)),t}function Vh(t){rt===null?rt=t:rt.push.apply(rt,t)}function TI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~nf,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Dm(t){if(K&6)throw Error(S(327));vi();var e=qa(t,0);if(!(e&1))return ut(t,pe()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=sh(t);r!==0&&(e=r,n=xh(t,r))}if(n===1)throw n=Qs,Ir(t,0),Dn(t,e),ut(t,pe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,rt,on),ut(t,pe()),null}function sf(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Oi=pe()+500,Hl&&or())}}function Dr(t){Fn!==null&&Fn.tag===0&&!(K&6)&&vi();var e=K;K|=1;var n=Rt.transition,r=J;try{if(Rt.transition=null,J=1,t)return t()}finally{J=r,Rt.transition=n,K=e,!(K&6)&&or()}}function of(){dt=ci.current,ie(ci)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,J1(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:Ni(),ie(at),ie(qe),Qd();break;case 5:Kd(r);break;case 4:Ni();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:zd(r.type._context);break;case 22:case 23:of()}n=n.return}if(Ae=t,ve=t=Kn(t.current,null),Oe=dt=e,we=0,Qs=null,nf=Gl=Nr=0,rt=Ss=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yr=null}return t}function R_(t,e){do{var n=ve;try{if(Bd(),Aa.current=il,rl){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(kr=0,Se=_e=le=null,Ts=!1,Hs=0,tf.current=null,n===null||n.return===null){we=1,Qs=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=vm(o);if(p!==null){p.flags&=-257,_m(p,o,a,s,e),p.mode&1&&ym(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){ym(s,u,e),af();break e}l=Error(S(426))}}else if(oe&&a.mode&1){var _=vm(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),_m(_,o,a,s,e),$d(Di(l,a));break e}}s=l=Di(l,a),we!==4&&(we=2),Ss===null?Ss=[s]:Ss.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=u_(s,l,e);cm(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hn===null||!Hn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=c_(s,a,e);cm(s,E);break e}}s=s.return}while(s!==null)}k_(n)}catch(T){e=T,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function P_(){var t=sl.current;return sl.current=il,t===null?il:t}function af(){(we===0||we===3||we===2)&&(we=4),Ae===null||!(Nr&268435455)&&!(Gl&268435455)||Dn(Ae,Oe)}function ll(t,e){var n=K;K|=2;var r=P_();(Ae!==t||Oe!==e)&&(on=null,Ir(t,e));do try{II();break}catch(i){R_(t,i)}while(1);if(Bd(),K=n,sl.current=r,ve!==null)throw Error(S(261));return Ae=null,Oe=0,we}function II(){for(;ve!==null;)C_(ve)}function SI(){for(;ve!==null&&!GT();)C_(ve)}function C_(t){var e=D_(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?k_(t):ve=e,tf.current=null}function k_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yI(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ve=null;return}}else if(n=gI(n,e,dt),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);we===0&&(we=5)}function pr(t,e,n){var r=J,i=Rt.transition;try{Rt.transition=null,J=1,AI(t,e,n,r)}finally{Rt.transition=i,J=r}return null}function AI(t,e,n,r){do vi();while(Fn!==null);if(K&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(s1(t,s),t===Ae&&(ve=Ae=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,O_(za,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=J;J=1;var a=K;K|=4,tf.current=null,_I(t,n),I_(n,t),H1(hh),Ha=!!ch,hh=ch=null,t.current=n,EI(n),YT(),K=a,J=o,Rt.transition=s}else t.current=n;if(oa&&(oa=!1,Fn=t,al=i),s=t.pendingLanes,s===0&&(Hn=null),ZT(n.stateNode),ut(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=Dh,Dh=null,t;return al&1&&t.tag!==0&&vi(),s=t.pendingLanes,s&1?t===Oh?As++:(As=0,Oh=t):As=0,or(),null}function vi(){if(Fn!==null){var t=lv(al),e=Rt.transition,n=J;try{if(Rt.transition=null,J=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,al=0,K&6)throw Error(S(331));var i=K;for(K|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:Is(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,p=c.return;if(E_(c),c===u){k=null;break}if(d!==null){d.return=p,k=d;break}k=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Is(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,k=m;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ql(9,a)}}catch(T){he(a,a.return,T)}if(a===o){k=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,k=E;break e}k=a.return}}if(K=i,or(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{J=n,Rt.transition=e}}return!1}function Om(t,e,n){e=Di(n,e),e=u_(t,e,1),t=qn(t,e,1),e=Xe(),t!==null&&(vo(t,1,e),ut(t,e))}function he(t,e,n){if(t.tag===3)Om(t,t,n);else for(;e!==null;){if(e.tag===3){Om(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Di(n,t),t=c_(e,t,1),e=qn(e,t,1),t=Xe(),e!==null&&(vo(e,1,t),ut(e,t));break}}e=e.return}}function RI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Oe&n)===n&&(we===4||we===3&&(Oe&130023424)===Oe&&500>pe()-rf?Ir(t,0):nf|=n),ut(t,e)}function N_(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=Xe();t=gn(t,e),t!==null&&(vo(t,e,n),ut(t,n))}function PI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N_(t,n)}function CI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),N_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,mI(t,e,n);st=!!(t.flags&131072)}else st=!1,oe&&e.flags&1048576&&Vv(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var i=Pi(e,qe.current);yi(e,n),i=Yd(null,e,r,t,i,n);var s=Xd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,Ya(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hd(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=Ih(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&bd(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=NI(r),t=Dt(r,t),i){case 0:e=Th(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Em(null,e,r,t,n);break e;case 14:e=wm(null,e,r,Dt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Th(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Tm(t,e,r,i,n);case 3:e:{if(p_(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,bv(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(S(423)),e),e=Im(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(S(424)),e),e=Im(t,e,r,n,i);break e}else for(ft=zn(e.stateNode.containerInfo.firstChild),mt=e,oe=!0,xt=null,n=Bv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ci(),r===i){e=yn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return zv(e),t===null&&yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dh(r,i)?o=null:s!==null&&dh(r,s)&&(e.flags|=32),f_(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&yh(e),null;case 13:return m_(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ki(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Em(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Za,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!at.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=fn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=Pt(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=Dt(r,e.pendingProps),i=Dt(r.type,i),wm(t,e,r,i,n);case 15:return h_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Pa(t,e),e.tag=1,lt(r)?(t=!0,Ya(e)):t=!1,yi(e,n),$v(e,r,i),Eh(e,r,i,n),Ih(null,e,r,!0,t,n);case 19:return g_(t,e,n);case 22:return d_(t,e,n)}throw Error(S(156,e.tag))};function O_(t,e){return iv(t,e)}function kI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new kI(t,e,n,r)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NI(t){if(typeof t=="function")return lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===Pd)return 14}return 2}function Kn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Sr(n.children,i,s,e);case Ad:o=8,i|=8;break;case qc:return t=At(12,n,e,i|2),t.elementType=qc,t.lanes=s,t;case Hc:return t=At(13,n,e,i),t.elementType=Hc,t.lanes=s,t;case Wc:return t=At(19,n,e,i),t.elementType=Wc,t.lanes=s,t;case jy:return Yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uy:o=10;break e;case $y:o=9;break e;case Rd:o=11;break e;case Pd:o=14;break e;case Pn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=At(22,t,r,e),t.elementType=jy,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qu(0),this.expirationTimes=Qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,r,i,s,o,a,l){return t=new DI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(s),t}function OI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x_(t){if(!t)return Zn;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(lt(n))return Ov(t,n,e)}return e}function V_(t,e,n,r,i,s,o,a,l){return t=uf(n,r,!0,t,i,s,o,a,l),t.context=x_(null),n=t.current,r=Xe(),i=Wn(n),s=fn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,vo(t,i,r),ut(t,r),t}function Xl(t,e,n,r){var i=e.current,s=Xe(),o=Wn(i);return n=x_(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(Lt(t,i,o,s),Sa(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cf(t,e){xm(t,e),(t=t.alternate)&&xm(t,e)}function xI(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}Jl.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Xl(t,e,null,null)};Jl.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Xl(null,t,null,null)}),e[mn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nn.length&&e!==0&&e<Nn[n].priority;n++);Nn.splice(n,0,t),n===0&&fv(t)}};function df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function VI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ul(o);s.call(u)}}var o=V_(e,r,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=o,t[mn]=o.current,$s(t.nodeType===8?t.parentNode:t),Dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ul(l);a.call(u)}}var l=uf(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=l,t[mn]=l.current,$s(t.nodeType===8?t.parentNode:t),Dr(function(){Xl(e,l,n,r)}),l}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ul(o);a.call(l)}}Xl(e,o,t,i)}else o=VI(n,e,t,i,r);return ul(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=us(e.pendingLanes);n!==0&&(Nd(e,n|1),ut(e,pe()),!(K&6)&&(Oi=pe()+500,or()))}break;case 13:Dr(function(){var r=gn(t,1);if(r!==null){var i=Xe();Lt(r,t,1,i)}}),cf(t,1)}};Dd=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=Xe();Lt(e,t,134217728,n)}cf(t,134217728)}};cv=function(t){if(t.tag===13){var e=Wn(t),n=gn(t,e);if(n!==null){var r=Xe();Lt(n,t,e,r)}cf(t,e)}};hv=function(){return J};dv=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};nh=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ql(r);if(!i)throw Error(S(90));zy(r),Gc(r,i)}}}break;case"textarea":Hy(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};Jy=sf;Zy=Dr;var MI={usingClientEntryPoint:!1,Events:[Eo,ii,ql,Yy,Xy,sf]},is={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LI={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||xI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{$l=aa.inject(LI),Wt=aa}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MI;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(e))throw Error(S(200));return OI(t,e,null,n)};_t.createRoot=function(t,e){if(!df(t))throw Error(S(299));var n=!1,r="",i=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,$s(t.nodeType===8?t.parentNode:t),new hf(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Dr(t)};_t.hydrate=function(t,e,n){if(!Zl(e))throw Error(S(200));return eu(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!df(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V_(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,$s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};_t.render=function(t,e,n){if(!Zl(e))throw Error(S(200));return eu(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(S(40));return t._reactRootContainer?(Dr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};_t.unstable_batchedUpdates=sf;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return eu(t,e,n,!1,r)};_t.version="18.2.0-next-9e3b772b8-20220608";function L_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L_)}catch(t){console.error(t)}}L_(),Vy.exports=_t;var F_=Vy.exports;const FI=Iy(F_);var Mm=F_;Bc.createRoot=Mm.createRoot,Bc.hydrateRoot=Mm.hydrateRoot;function Mh(t,e){return Mh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Mh(t,e)}function tu(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Mh(t,e)}var nu=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(r){var i=this,s=r||function(){};return this.listeners.push(s),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(o){return o!==s}),i.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},X.apply(this,arguments)}var b_=typeof window>"u";function Qe(){}function bI(t,e){return typeof t=="function"?t(e):t}function UI(t){return typeof t=="number"&&t>=0&&t!==1/0}function cl(t){return Array.isArray(t)?t:[t]}function $I(t,e){return Math.max(t+(e||0)-Date.now(),0)}function mc(t,e,n){return ru(t)?typeof e=="function"?X({},n,{queryKey:t,queryFn:e}):X({},e,{queryKey:t}):t}function kn(t,e,n){return ru(t)?[X({},e,{queryKey:t}),n]:[t||{},e]}function jI(t,e){if(t===!0&&e===!0||t==null&&e==null)return"all";if(t===!1&&e===!1)return"none";var n=t??!e;return n?"active":"inactive"}function Lm(t,e){var n=t.active,r=t.exact,i=t.fetching,s=t.inactive,o=t.predicate,a=t.queryKey,l=t.stale;if(ru(a)){if(r){if(e.queryHash!==ff(a,e.options))return!1}else if(!hl(e.queryKey,a))return!1}var u=jI(n,s);if(u==="none")return!1;if(u!=="all"){var c=e.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i=="boolean"&&e.isFetching()!==i||o&&!o(e))}function Fm(t,e){var n=t.exact,r=t.fetching,i=t.predicate,s=t.mutationKey;if(ru(s)){if(!e.options.mutationKey)return!1;if(n){if(_r(e.options.mutationKey)!==_r(s))return!1}else if(!hl(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function ff(t,e){var n=(e==null?void 0:e.queryKeyHashFn)||_r;return n(t)}function _r(t){var e=cl(t);return BI(e)}function BI(t){return JSON.stringify(t,function(e,n){return Lh(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function hl(t,e){return U_(cl(t),cl(e))}function U_(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(function(n){return!U_(t[n],e[n])}):!1}function $_(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||Lh(t)&&Lh(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},a=0,l=0;l<s;l++){var u=n?l:i[l];o[u]=$_(t[u],e[u]),o[u]===t[u]&&a++}return r===s&&a===r?t:o}return e}function Lh(t){if(!bm(t))return!1;var e=t.constructor;if(typeof e>"u")return!0;var n=e.prototype;return!(!bm(n)||!n.hasOwnProperty("isPrototypeOf"))}function bm(t){return Object.prototype.toString.call(t)==="[object Object]"}function ru(t){return typeof t=="string"||Array.isArray(t)}function zI(t){return new Promise(function(e){setTimeout(e,t)})}function Um(t){Promise.resolve().then(t).catch(function(e){return setTimeout(function(){throw e})})}function j_(){if(typeof AbortController=="function")return new AbortController}var qI=function(t){tu(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!b_&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},e}(nu),Da=new qI,HI=function(t){tu(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!b_&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},e}(nu),Oa=new HI;function WI(t){return Math.min(1e3*Math.pow(2,t),3e4)}function dl(t){return typeof(t==null?void 0:t.cancel)=="function"}var B_=function(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent};function gc(t){return t instanceof B_}var z_=function(e){var n=this,r=!1,i,s,o,a;this.abort=e.abort,this.cancel=function(d){return i==null?void 0:i(d)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,p){o=d,a=p});var l=function(p){n.isResolved||(n.isResolved=!0,e.onSuccess==null||e.onSuccess(p),s==null||s(),o(p))},u=function(p){n.isResolved||(n.isResolved=!0,e.onError==null||e.onError(p),s==null||s(),a(p))},c=function(){return new Promise(function(p){s=p,n.isPaused=!0,e.onPause==null||e.onPause()}).then(function(){s=void 0,n.isPaused=!1,e.onContinue==null||e.onContinue()})},h=function d(){if(!n.isResolved){var p;try{p=e.fn()}catch(y){p=Promise.reject(y)}i=function(v){if(!n.isResolved&&(u(new B_(v)),n.abort==null||n.abort(),dl(p)))try{p.cancel()}catch{}},n.isTransportCancelable=dl(p),Promise.resolve(p).then(l).catch(function(y){var v,_;if(!n.isResolved){var m=(v=e.retry)!=null?v:3,f=(_=e.retryDelay)!=null?_:WI,g=typeof f=="function"?f(n.failureCount,y):f,E=m===!0||typeof m=="number"&&n.failureCount<m||typeof m=="function"&&m(n.failureCount,y);if(r||!E){u(y);return}n.failureCount++,e.onFail==null||e.onFail(n.failureCount,y),zI(g).then(function(){if(!Da.isFocused()||!Oa.isOnline())return c()}).then(function(){r?u(y):d()})}})}};h()},KI=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var e=t.prototype;return e.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},e.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Um(function(){i.notifyFn(r)})},e.batchCalls=function(r){var i=this;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];i.schedule(function(){r.apply(void 0,o)})}},e.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Um(function(){r.batchNotifyFn(function(){i.forEach(function(s){r.notifyFn(s)})})})},e.setNotifyFunction=function(r){this.notifyFn=r},e.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},t}(),Ne=new KI,q_=console;function H_(){return q_}function QI(t){q_=t}var GI=function(){function t(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(r){var i;this.options=X({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},e.setDefaultOptions=function(r){this.defaultOptions=r},e.scheduleGc=function(){var r=this;this.clearGcTimeout(),UI(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},e.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(r,i){var s,o,a=this.state.data,l=bI(r,a);return(s=(o=this.options).isDataEqual)!=null&&s.call(o,a,l)?l=a:this.options.structuralSharing!==!1&&(l=$_(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},e.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},e.cancel=function(r){var i,s=this.promise;return(i=this.retryer)==null||i.cancel(r),s?s.then(Qe).catch(Qe):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},e.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!$I(this.state.dataUpdatedAt,r)},e.onFocus=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.onOnline=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},e.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(r,i){var s=this,o,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(f){return f.options.queryFn});c&&this.setOptions(c.options)}var h=cl(this.queryKey),d=j_(),p={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(p,"signal",{enumerable:!0,get:function(){if(d)return s.abortSignalConsumed=!0,d.signal}});var y=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(p)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:y,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var _;(_=this.options.behavior)==null||_.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=v.fetchOptions)==null?void 0:a.meta)){var m;this.dispatch({type:"fetch",meta:(m=v.fetchOptions)==null?void 0:m.meta})}return this.retryer=new z_({fn:v.fetchFn,abort:d==null||(l=d.abort)==null?void 0:l.bind(d),onSuccess:function(g){s.setData(g),s.cache.config.onSuccess==null||s.cache.config.onSuccess(g,s),s.cacheTime===0&&s.optionalRemove()},onError:function(g){gc(g)&&g.silent||s.dispatch({type:"error",error:g}),gc(g)||(s.cache.config.onError==null||s.cache.config.onError(g,s),H_().error(g)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Ne.batch(function(){i.observers.forEach(function(s){s.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},e.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,s=typeof r.initialData<"u",o=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},e.reducer=function(r,i){var s,o;switch(i.type){case"failed":return X({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return X({},r,{isPaused:!0});case"continue":return X({},r,{isPaused:!1});case"fetch":return X({},r,{fetchFailureCount:0,fetchMeta:(s=i.meta)!=null?s:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return X({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=i.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return gc(a)&&a.revert&&this.revertState?X({},this.revertState):X({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return X({},r,{isInvalidated:!0});case"setState":return X({},r,i.state);default:return r}},t}(),YI=function(t){tu(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=e.prototype;return n.build=function(i,s,o){var a,l=s.queryKey,u=(a=s.queryHash)!=null?a:ff(l,s),c=this.get(u);return c||(c=new GI({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(s),state:o,defaultOptions:i.getQueryDefaults(l),meta:s.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var s=this.queriesMap[i.queryHash];s&&(i.destroy(),this.queries=this.queries.filter(function(o){return o!==i}),s===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Ne.batch(function(){i.queries.forEach(function(s){i.remove(s)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,s){var o=kn(i,s),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return Lm(a,l)})},n.findAll=function(i,s){var o=kn(i,s),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(l){return Lm(a,l)}):this.queries},n.notify=function(i){var s=this;Ne.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){var i=this;Ne.batch(function(){i.queries.forEach(function(s){s.onFocus()})})},n.onOnline=function(){var i=this;Ne.batch(function(){i.queries.forEach(function(s){s.onOnline()})})},e}(nu),XI=function(){function t(n){this.options=X({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||JI(),this.meta=n.meta}var e=t.prototype;return e.setState=function(r){this.dispatch({type:"setState",state:r})},e.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},e.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Qe).catch(Qe)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var r=this,i,s=this.state.status==="loading",o=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),H_().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},e.executeMutation=function(){var r=this,i;return this.retryer=new z_({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(r){var i=this;this.state=ZI(this.state,r),Ne.batch(function(){i.observers.forEach(function(s){s.onMutationUpdate(r)}),i.mutationCache.notify(i)})},t}();function JI(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function ZI(t,e){switch(e.type){case"failed":return X({},t,{failureCount:t.failureCount+1});case"pause":return X({},t,{isPaused:!0});case"continue":return X({},t,{isPaused:!1});case"loading":return X({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return X({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return X({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return X({},t,e.state);default:return t}}var eS=function(t){tu(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=e.prototype;return n.build=function(i,s,o){var a=new XI({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(s),state:o,defaultOptions:s.mutationKey?i.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(s){return s!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Ne.batch(function(){i.mutations.forEach(function(s){i.remove(s)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(s){return Fm(i,s)})},n.findAll=function(i){return this.mutations.filter(function(s){return Fm(i,s)})},n.notify=function(i){var s=this;Ne.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(s){return s.state.isPaused});return Ne.batch(function(){return i.reduce(function(s,o){return s.then(function(){return o.continue().catch(Qe)})},Promise.resolve())})},e}(nu);function tS(){return{onFetch:function(e){e.fetchFn=function(){var n,r,i,s,o,a,l=(n=e.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=e.fetchOptions)==null||(s=i.meta)==null?void 0:s.fetchMore,c=u==null?void 0:u.pageParam,h=(u==null?void 0:u.direction)==="forward",d=(u==null?void 0:u.direction)==="backward",p=((o=e.state.data)==null?void 0:o.pages)||[],y=((a=e.state.data)==null?void 0:a.pageParams)||[],v=j_(),_=v==null?void 0:v.signal,m=y,f=!1,g=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},E=function(kt,Sn,tt,sn){return m=sn?[Sn].concat(m):[].concat(m,[Sn]),sn?[tt].concat(kt):[].concat(kt,[tt])},T=function(kt,Sn,tt,sn){if(f)return Promise.reject("Cancelled");if(typeof tt>"u"&&!Sn&&kt.length)return Promise.resolve(kt);var P={queryKey:e.queryKey,signal:_,pageParam:tt,meta:e.meta},L=g(P),j=Promise.resolve(L).then(function(me){return E(kt,tt,me,sn)});if(dl(L)){var te=j;te.cancel=L.cancel}return j},I;if(!p.length)I=T([]);else if(h){var C=typeof c<"u",D=C?c:$m(e.options,p);I=T(p,C,D)}else if(d){var Y=typeof c<"u",B=Y?c:nS(e.options,p);I=T(p,Y,B,!0)}else(function(){m=[];var ht=typeof e.options.getNextPageParam>"u",kt=l&&p[0]?l(p[0],0,p):!0;I=kt?T([],ht,y[0]):Promise.resolve(E([],y[0],p[0]));for(var Sn=function(P){I=I.then(function(L){var j=l&&p[P]?l(p[P],P,p):!0;if(j){var te=ht?y[P]:$m(e.options,L);return T(L,ht,te)}return Promise.resolve(E(L,y[P],p[P]))})},tt=1;tt<p.length;tt++)Sn(tt)})();var et=I.then(function(ht){return{pages:ht,pageParams:m}}),cr=et;return cr.cancel=function(){f=!0,v==null||v.abort(),dl(I)&&I.cancel()},et}}}}function $m(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function nS(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}var rS=function(){function t(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new YI,this.mutationCache=n.mutationCache||new eS,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var r=this;this.unsubscribeFocus=Da.subscribe(function(){Da.isFocused()&&Oa.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Oa.subscribe(function(){Da.isFocused()&&Oa.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},e.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},e.isFetching=function(r,i){var s=kn(r,i),o=s[0];return o.fetching=!0,this.queryCache.findAll(o).length},e.isMutating=function(r){return this.mutationCache.findAll(X({},r,{fetching:!0})).length},e.getQueryData=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state.data},e.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var s=i.queryKey,o=i.state,a=o.data;return[s,a]})},e.setQueryData=function(r,i,s){var o=mc(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,s)},e.setQueriesData=function(r,i,s){var o=this;return Ne.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,o.setQueryData(l,i,s)]})})},e.getQueryState=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state},e.removeQueries=function(r,i){var s=kn(r,i),o=s[0],a=this.queryCache;Ne.batch(function(){a.findAll(o).forEach(function(l){a.remove(l)})})},e.resetQueries=function(r,i,s){var o=this,a=kn(r,i,s),l=a[0],u=a[1],c=this.queryCache,h=X({},l,{active:!0});return Ne.batch(function(){return c.findAll(l).forEach(function(d){d.reset()}),o.refetchQueries(h,u)})},e.cancelQueries=function(r,i,s){var o=this,a=kn(r,i,s),l=a[0],u=a[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var h=Ne.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.cancel(c)})});return Promise.all(h).then(Qe).catch(Qe)},e.invalidateQueries=function(r,i,s){var o,a,l,u=this,c=kn(r,i,s),h=c[0],d=c[1],p=X({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(l=h.refetchInactive)!=null?l:!1});return Ne.batch(function(){return u.queryCache.findAll(h).forEach(function(y){y.invalidate()}),u.refetchQueries(p,d)})},e.refetchQueries=function(r,i,s){var o=this,a=kn(r,i,s),l=a[0],u=a[1],c=Ne.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.fetch(void 0,X({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),h=Promise.all(c).then(Qe);return u!=null&&u.throwOnError||(h=h.catch(Qe)),h},e.fetchQuery=function(r,i,s){var o=mc(r,i,s),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},e.prefetchQuery=function(r,i,s){return this.fetchQuery(r,i,s).then(Qe).catch(Qe)},e.fetchInfiniteQuery=function(r,i,s){var o=mc(r,i,s);return o.behavior=tS(),this.fetchQuery(o)},e.prefetchInfiniteQuery=function(r,i,s){return this.fetchInfiniteQuery(r,i,s).then(Qe).catch(Qe)},e.cancelMutations=function(){var r=this,i=Ne.batch(function(){return r.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(i).then(Qe).catch(Qe)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(r){this.defaultOptions=r},e.setQueryDefaults=function(r,i){var s=this.queryDefaults.find(function(o){return _r(r)===_r(o.queryKey)});s?s.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},e.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(s){return hl(r,s.queryKey)}))==null?void 0:i.defaultOptions:void 0},e.setMutationDefaults=function(r,i){var s=this.mutationDefaults.find(function(o){return _r(r)===_r(o.mutationKey)});s?s.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},e.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(s){return hl(r,s.mutationKey)}))==null?void 0:i.defaultOptions:void 0},e.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=X({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=ff(i.queryKey,i)),i},e.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},e.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:X({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}(),iS=FI.unstable_batchedUpdates;Ne.setBatchNotifyFunction(iS);var sS=console;QI(sS);var jm=ot.createContext(void 0),oS=ot.createContext(!1);function aS(t){return t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=jm),window.ReactQueryClientContext):jm}var lS=function(e){var n=e.client,r=e.contextSharing,i=r===void 0?!1:r,s=e.children;ot.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=aS(i);return ot.createElement(oS.Provider,{value:i},ot.createElement(o.Provider,{value:n},s))};/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var bn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bn||(bn={}));const Bm="popstate";function uS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:W_(i)}return hS(e,n,null,t)}function ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cS(){return Math.random().toString(36).substr(2,8)}function zm(t,e){return{usr:t.state,key:t.key,idx:e}}function Fh(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?iu(e):e,{state:n,key:e&&e.key||r||cS()})}function W_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function iu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=bn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=bn.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:m})}function d(_,m){a=bn.Push;let f=Fh(v.location,_,m);n&&n(f,_),u=c()+1;let g=zm(f,u),E=v.createHref(f);try{o.pushState(g,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(_,m){a=bn.Replace;let f=Fh(v.location,_,m);n&&n(f,_),u=c();let g=zm(f,u),E=v.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:W_(_);return ct(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,h),l=_,()=>{i.removeEventListener(Bm,h),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let m=y(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(_){return o.go(_)}};return v}var qm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qm||(qm={}));function dS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?iu(e):e,i=G_(r.pathname||"/",n);if(i==null)return null;let s=K_(t);fS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=TS(s[a],AS(i));return o}function K_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ct(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=_i([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ct(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ES(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Q_(s.path))i(s,o,l)}),e}function Q_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pS=/^:\w+$/,mS=3,gS=2,yS=1,vS=10,_S=-2,Hm=t=>t==="*";function ES(t,e){let n=t.split("/"),r=n.length;return n.some(Hm)&&(r+=_S),e&&(r+=gS),n.filter(i=>!Hm(i)).reduce((i,s)=>i+(pS.test(s)?mS:s===""?yS:vS),r)}function wS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=IS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:_i([i,c.pathname]),pathnameBase:PS(_i([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=_i([i,c.pathnameBase]))}return s}function IS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=RS(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function SS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AS(t){try{return decodeURI(t)}catch(e){return pf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function RS(t,e){try{return decodeURIComponent(t)}catch(n){return pf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function G_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const _i=t=>t.join("/").replace(/\/\/+/g,"/"),PS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function CS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Y_=["post","put","patch","delete"];new Set(Y_);const kS=["get",...Y_];new Set(kS);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bh(){return bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bh.apply(this,arguments)}const NS=N.createContext(null),DS=N.createContext(null),X_=N.createContext(null),su=N.createContext(null),ou=N.createContext({outlet:null,matches:[],isDataRoute:!1}),J_=N.createContext(null);function mf(){return N.useContext(su)!=null}function OS(){return mf()||ct(!1),N.useContext(su).location}function xS(t,e){return VS(t,e)}function VS(t,e,n){mf()||ct(!1);let{navigator:r}=N.useContext(X_),{matches:i}=N.useContext(ou),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=OS(),u;if(e){var c;let v=typeof e=="string"?iu(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ct(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=dS(t,{pathname:d}),y=US(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:_i([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:_i([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?N.createElement(su.Provider,{value:{location:bh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:bn.Pop}},y):y}function MS(){let t=zS(),e=CS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,s)}const LS=N.createElement(MS,null);class FS extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?N.createElement(ou.Provider,{value:this.props.routeContext},N.createElement(J_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bS(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(NS);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(ou.Provider,{value:e},r)}function US(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ct(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||LS);let d=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.Component?y=N.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,N.createElement(bS,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?N.createElement(FS,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Wm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Wm||(Wm={}));var pl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(pl||(pl={}));function $S(t){let e=N.useContext(DS);return e||ct(!1),e}function jS(t){let e=N.useContext(ou);return e||ct(!1),e}function BS(t){let e=jS(),n=e.matches[e.matches.length-1];return n.route.id||ct(!1),n.route.id}function zS(){var t;let e=N.useContext(J_),n=$S(pl.UseRouteError),r=BS(pl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Z_(t){ct(!1)}function qS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:s,static:o=!1}=t;mf()&&ct(!1);let a=e.replace(/^\/*/,"/"),l=N.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=iu(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=N.useMemo(()=>{let v=G_(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return y==null?null:N.createElement(X_.Provider,{value:l},N.createElement(su.Provider,{children:n,value:y}))}function HS(t){let{children:e,location:n}=t;return xS(Uh(e),n)}var Km;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Km||(Km={}));new Promise(()=>{});function Uh(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Uh(r.props.children,s));return}r.type!==Z_&&ct(!1),!r.props.index||!r.props.children||ct(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Uh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const WS="startTransition",Qm=PT[WS];function KS(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=uS({window:i,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=N.useCallback(h=>{u&&Qm?Qm(()=>l(h)):l(h)},[l,u]);return N.useLayoutEffect(()=>o.listen(c),[o,c]),N.createElement(qS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var Gm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Gm||(Gm={}));var Ym;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ym||(Ym={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},t0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new GS;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YS=function(t){const e=e0(t);return t0.encodeByteArray(e,!0)},ml=function(t){return YS(t).replace(/\./g,"")},n0=function(t){try{return t0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=()=>XS().__FIREBASE_DEFAULTS__,ZS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n0(t[1]);return e&&JSON.parse(e)},gf=()=>{try{return JS()||ZS()||eA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r0=t=>{var e,n;return(n=(e=gf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tA=t=>{const e=r0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},i0=()=>{var t;return(t=gf())===null||t===void 0?void 0:t.config},s0=t=>{var e;return(e=gf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function sA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aA(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lA(){try{return typeof indexedDB=="object"}catch{return!1}}function uA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cA,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function hA(t,e){return t.replace(dA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dA=/\{\$([^}]+)}/g;function fA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xm(s)&&Xm(o)){if(!Gs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pA(t,e){const n=new mA(t,e);return n.subscribe.bind(n)}class mA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_A(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vA(t){return t===mr?void 0:t}function _A(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const wA={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},TA=Q.INFO,IA={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},SA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yf{constructor(e){this.name=e,this._logLevel=TA,this._logHandler=SA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const AA=(t,e)=>e.some(n=>t instanceof n);let Jm,Zm;function RA(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PA(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o0=new WeakMap,$h=new WeakMap,a0=new WeakMap,vc=new WeakMap,vf=new WeakMap;function CA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&o0.set(n,t)}).catch(()=>{}),vf.set(e,t),e}function kA(t){if($h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NA(t){jh=t(jh)}function DA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return a0.set(r,e.sort?e.sort():[e]),Qn(r)}:PA().includes(t)?function(...e){return t.apply(_c(this),e),Qn(o0.get(this))}:function(...e){return Qn(t.apply(_c(this),e))}}function OA(t){return typeof t=="function"?DA(t):(t instanceof IDBTransaction&&kA(t),AA(t,RA())?new Proxy(t,jh):t)}function Qn(t){if(t instanceof IDBRequest)return CA(t);if(vc.has(t))return vc.get(t);const e=OA(t);return e!==t&&(vc.set(t,e),vf.set(e,t)),e}const _c=t=>vf.get(t);function xA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qn(o.result),l.oldVersion,l.newVersion,Qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const VA=["get","getKey","getAll","getAllKeys","count"],MA=["put","add","delete","clear"],Ec=new Map;function eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ec.set(e,s),s}NA(t=>({...t,get:(e,n,r)=>eg(e,n)||t.get(e,n,r),has:(e,n)=>!!eg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",tg="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new yf("@firebase/app"),bA="@firebase/app-compat",UA="@firebase/analytics-compat",$A="@firebase/analytics",jA="@firebase/app-check-compat",BA="@firebase/app-check",zA="@firebase/auth",qA="@firebase/auth-compat",HA="@firebase/database",WA="@firebase/database-compat",KA="@firebase/functions",QA="@firebase/functions-compat",GA="@firebase/installations",YA="@firebase/installations-compat",XA="@firebase/messaging",JA="@firebase/messaging-compat",ZA="@firebase/performance",eR="@firebase/performance-compat",tR="@firebase/remote-config",nR="@firebase/remote-config-compat",rR="@firebase/storage",iR="@firebase/storage-compat",sR="@firebase/firestore",oR="@firebase/firestore-compat",aR="firebase",lR="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="[DEFAULT]",uR={[Bh]:"fire-core",[bA]:"fire-core-compat",[$A]:"fire-analytics",[UA]:"fire-analytics-compat",[BA]:"fire-app-check",[jA]:"fire-app-check-compat",[zA]:"fire-auth",[qA]:"fire-auth-compat",[HA]:"fire-rtdb",[WA]:"fire-rtdb-compat",[KA]:"fire-fn",[QA]:"fire-fn-compat",[GA]:"fire-iid",[YA]:"fire-iid-compat",[XA]:"fire-fcm",[JA]:"fire-fcm-compat",[ZA]:"fire-perf",[eR]:"fire-perf-compat",[tR]:"fire-rc",[nR]:"fire-rc-compat",[rR]:"fire-gcs",[iR]:"fire-gcs-compat",[sR]:"fire-fst",[oR]:"fire-fst-compat","fire-js":"fire-js",[aR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Map,qh=new Map;function cR(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(qh.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of gl.values())cR(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gn=new To("app","Firebase",hR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=lR;function l0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=i0()),!n)throw Gn.create("no-options");const s=gl.get(i);if(s){if(Gs(n,s.options)&&Gs(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const o=new EA(i);for(const l of qh.values())o.addComponent(l);const a=new dR(n,r,o);return gl.set(i,a),a}function u0(t=zh){const e=gl.get(t);if(!e&&t===zh&&i0())return l0();if(!e)throw Gn.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=uR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(a.join(" "));return}xr(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="firebase-heartbeat-database",pR=1,Ys="firebase-heartbeat-store";let wc=null;function c0(){return wc||(wc=xA(fR,pR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ys)}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),wc}async function mR(t){try{return await(await c0()).transaction(Ys).objectStore(Ys).get(h0(t))}catch(e){if(e instanceof nn)Or.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(n.message)}}}async function ng(t,e){try{const r=(await c0()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,h0(t)),await r.done}catch(n){if(n instanceof nn)Or.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Or.warn(r.message)}}}function h0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1024,yR=30*24*60*60*1e3;class vR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ER(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rg(),{heartbeatsToSend:n,unsentEntries:r}=_R(this._heartbeatsCache.heartbeats),i=ml(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rg(){return new Date().toISOString().substring(0,10)}function _R(t,e=gR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ig(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ER{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lA()?uA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ig(t){return ml(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){xr(new er("platform-logger",e=>new LA(e),"PRIVATE")),xr(new er("heartbeat",e=>new vR(e),"PRIVATE")),Qt(Bh,tg,t),Qt(Bh,tg,"esm2017"),Qt("fire-js","")}wR("");function _f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function d0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TR=d0,f0=new To("auth","Firebase",d0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new yf("@firebase/auth");function IR(t,...e){yl.logLevel<=Q.WARN&&yl.warn(`Auth (${jr}): ${t}`,...e)}function xa(t,...e){yl.logLevel<=Q.ERROR&&yl.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Ef(t,...e)}function Gt(t,...e){return Ef(t,...e)}function SR(t,e,n){const r=Object.assign(Object.assign({},TR()),{[e]:n});return new To("auth","Firebase",r).create(e,{appName:t.name})}function Ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return f0.create(t,...e)}function M(t,e,...n){if(!t)throw Ef(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function vn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AR(){return sg()==="http:"||sg()==="https:"}function sg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AR()||sA()||"connection"in navigator)?navigator.onLine:!0}function PR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=iA()||oA()}get(){return RR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new So(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zr(t,e,n,r,i={}){return m0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),p0.fetch()(g0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function m0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CR),e);try{const i=new NR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw la(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw SR(t,c,u);bt(t,c)}}catch(i){if(i instanceof nn)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Ao(t,e,n,r,i={}){const s=await zr(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wf(t.config,i):`${t.config.apiScheme}://${i}`}class NR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),kR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e){return zr(t,"POST","/v1/accounts:delete",e)}async function OR(t,e){return zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xR(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Tf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Rs(Tc(i.auth_time)),issuedAtTime:Rs(Tc(i.iat)),expirationTime:Rs(Tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function Tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=n0(n);return i?JSON.parse(i):(xa("Failed to decode base64 JWT payload"),null)}catch(i){return xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VR(t){const e=Tf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&MR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xs(t,OR(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UR(s.providerUserInfo):[],a=bR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new y0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function FR(t){const e=We(t);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UR(t){return t.map(e=>{var{providerId:n}=e,r=_f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){const n=await m0(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",p0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $R(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Js;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new y0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xR(this,e)}reload(){return FR(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,DR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:T,providerData:I,stsTokenManager:C}=n;M(g&&C,e,"internal-error");const D=Js.fromJSON(this.name,C);M(typeof g=="string",e,"internal-error"),Rn(h,e.name),Rn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),Rn(p,e.name),Rn(y,e.name),Rn(v,e.name),Rn(_,e.name),Rn(m,e.name),Rn(f,e.name);const Y=new Ar({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:D,createdAt:m,lastLoginAt:f});return I&&Array.isArray(I)&&(Y.providerData=I.map(B=>Object.assign({},B))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Js;i.updateFromServerResponse(n);const s=new Ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Map;function hn(t){vn(t instanceof Function,"Expected a class definition");let e=og.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,og.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v0.type="NONE";const ag=v0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class Ei{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Va(this.userKey,i.apiKey,s),this.fullPersistenceKey=Va("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ei(hn(ag),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||hn(ag);const o=Va(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ar._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ei(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ei(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I0(e))return"Blackberry";if(S0(e))return"Webos";if(If(e))return"Safari";if((e.includes("chrome/")||E0(e))&&!e.includes("edge/"))return"Chrome";if(T0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _0(t=He()){return/firefox\//i.test(t)}function If(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E0(t=He()){return/crios\//i.test(t)}function w0(t=He()){return/iemobile/i.test(t)}function T0(t=He()){return/android/i.test(t)}function I0(t=He()){return/blackberry/i.test(t)}function S0(t=He()){return/webos/i.test(t)}function lu(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jR(t=He()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BR(){return aA()&&document.documentMode===10}function A0(t=He()){return lu(t)||T0(t)||S0(t)||I0(t)||/windows phone/i.test(t)||w0(t)}function zR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e=[]){let n;switch(t){case"Browser":n=lg(He());break;case"Worker":n=`${lg(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}async function P0(t,e){return zr(t,"GET","/v2/recaptchaConfig",Br(t,e))}function ug(t){return t!==void 0&&t.enterprise!==void 0}class C0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function k0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qR().appendChild(r)})}function HR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WR="https://www.google.com/recaptcha/enterprise.js?render=",KR="recaptcha-enterprise",QR="NO_RECAPTCHA";class N0{constructor(e){this.type=KR,this.auth=qr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{P0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new C0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(QR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ug(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}k0(WR+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xi(t,e,n,r=!1){const i=new N0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new GR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ei.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}async initializeRecaptchaConfig(){const e=await P0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new C0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new N0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new To("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Ei.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return We(t)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=pA(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t,e){const n=au(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gs(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function JR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZR(t,e,n){const r=qr(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=D0(e),{host:o,port:a}=eP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tP()}function D0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eP(t){const e=D0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hg(o)}}}function hg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function nP(t,e){return zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}async function rP(t,e){return zr(t,"POST","/v1/accounts:sendOobCode",Br(t,e))}async function Sc(t,e){return rP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function sP(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends Sf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await xi(e,r,"signInWithPassword");return Ic(e,i)}else return Ic(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xi(e,r,"signInWithPassword");return Ic(e,s)}else return Promise.reject(i)});case"emailLink":return iP(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sP(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="http://localhost";class Vr extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:oP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lP(t){const e=hs(ds(t)).link,n=e?hs(ds(e)).deep_link_id:null,r=hs(ds(t)).deep_link_id;return(r?hs(ds(r)).link:null)||r||n||e||t}class Af{constructor(e){var n,r,i,s,o,a;const l=hs(ds(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=aP((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lP(e);try{return new Af(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.providerId=Hi.PROVIDER_ID}static credential(e,n){return Zs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Af.parseLink(n);return M(r,"argument-error"),Zs._fromEmailAndCode(e,r.code,r.tenantId)}}Hi.PROVIDER_ID="password";Hi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends O0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ro{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ro{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ro{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(t,e){return Ao(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ar._fromIdTokenResponse(e,r,i),o=dg(r);return new Mr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dg(r);return new Mr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _l(e,n,r,i)}}function x0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_l._fromErrorAndOperation(t,s,e,r):s})}async function uP(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xs(t,x0(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Tf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e,n=!1){const r="signIn",i=await x0(t,r,e),s=await Mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hP(t,e){return V0(qr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e,n){var r;M(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),M(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e,n){var r;const i=qr(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await xi(i,s,"getOobCode",!0);n&&Rc(i,o,n),await Sc(i,o)}else n&&Rc(i,s,n),await Sc(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await xi(i,s,"getOobCode",!0);n&&Rc(i,a,n),await Sc(i,a)}else return Promise.reject(o)})}async function fP(t,e,n){var r;const i=qr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await xi(i,s,"signUpPassword");o=Ac(i,u)}else o=Ac(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await xi(i,s,"signUpPassword");return Ac(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Mr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function pP(t,e,n){return hP(We(t),Hi.credential(e,n))}function mP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function gP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function yP(t){return We(t).signOut()}const El="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(El,"1"),this.storage.removeItem(El),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(){const t=He();return If(t)||lu(t)}const _P=1e3,EP=10;class L0 extends M0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vP()&&zR(),this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L0.type="LOCAL";const wP=L0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0 extends M0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F0.type="SESSION";const b0=F0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await TP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function SP(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function AP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PP(){return U0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firebaseLocalStorageDb",CP=1,wl="firebaseLocalStorage",j0="fbase_key";class Po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cu(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function kP(){const t=indexedDB.deleteDatabase($0);return new Po(t).toPromise()}function Wh(){const t=indexedDB.open($0,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:j0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await kP(),e(await Wh()))})})}async function fg(t,e,n){const r=cu(t,!0).put({[j0]:e,value:n});return new Po(r).toPromise()}async function NP(t,e){const n=cu(t,!1).get(e),r=await new Po(n).toPromise();return r===void 0?null:r.value}function pg(t,e){const n=cu(t,!0).delete(e);return new Po(n).toPromise()}const DP=800,OP=3;class B0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(PP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AP(),!this.activeServiceWorker)return;this.sender=new IP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wh();return await fg(e,El,"1"),await pg(e,El),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cu(i,!1).getAll();return new Po(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B0.type="LOCAL";const xP=B0;new So(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t,e){return e?hn(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MP(t){return V0(t.auth,new Pf(t),t.bypassAuthState)}function LP(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),cP(n,new Pf(t),t.bypassAuthState)}async function FP(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),uP(n,new Pf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MP;case"linkViaPopup":case"linkViaRedirect":return FP;case"reauthViaPopup":case"reauthViaRedirect":return LP;default:bt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=new So(2e3,1e4);class hi extends z0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bP.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="pendingRedirect",Ma=new Map;class $P extends z0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await jP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jP(t,e){const n=qP(e),r=zP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BP(t,e){Ma.set(t._key(),e)}function zP(t){return hn(t._redirectPersistence)}function qP(t){return Va(UP,t.config.apiKey,t.name)}async function HP(t,e,n=!1){const r=qr(t),i=VP(r,e),o=await new $P(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=10*60*1e3;class KP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WP&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e={}){return zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function JP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GP(t);for(const n of e)try{if(ZP(n))return}catch{}bt(t,"unauthorized-domain")}function ZP(t){const e=Hh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XP.test(n))return!1;if(YP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new So(3e4,6e4);function gg(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tC(t){return new Promise((e,n)=>{var r,i,s;function o(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),n(Gt(t,"network-request-failed"))},timeout:eC.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{const a=HR("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},k0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw La=null,e})}let La=null;function nC(t){return La=La||tC(t),La}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=new So(5e3,15e3),iC="__/auth/iframe",sC="emulator/auth/iframe",oC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lC(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wf(e,sC):`https://${t.config.authDomain}/${iC}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=aC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function uC(t){const e=await nC(t),n=Yt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:lC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},rC.get());function l(){Yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hC=500,dC=600,fC="_blank",pC="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mC(t,e,n,r=hC,i=dC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=E0(u)?fC:n),_0(u)&&(e=e||pC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(jR(u)&&a!=="_self")return gC(e||"",a),new yg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new yg(h)}function gC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="__/auth/handler",vC="emulator/auth/handler",_C=encodeURIComponent("fac");async function vg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof O0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ro){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${_C}=${encodeURIComponent(l)}`:"";return`${EC(t)}?${Io(a).slice(1)}${u}`}function EC({config:t}){return t.emulator?wf(t,vC):`https://${t.authDomain}/${yC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class wC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=HP,this._overrideRedirectResult=BP}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vg(e,n,r,Hh(),i);return mC(e,o,Rf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vg(e,n,r,Hh(),i);return SP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uC(e),r=new KP(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pc];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A0()||If()||lu()}}const TC=wC;var _g="@firebase/auth",Eg="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AC(t){xr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R0(t)},u=new YR(r,i,s,l);return JR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new er("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(r=>new IC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(_g,Eg,SC(t)),Qt(_g,Eg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=5*60,PC=s0("authIdTokenMaxAge")||RC;let wg=null;const CC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PC)return;const i=n==null?void 0:n.token;wg!==i&&(wg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kC(t=u0()){const e=au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XR(t,{popupRedirectResolver:TC,persistence:[xP,wP,b0]}),r=s0("authTokenSyncURL");if(r){const s=CC(r);gP(n,s,()=>s(n.currentUser)),mP(n,o=>s(o))}const i=r0("auth");return i&&ZR(n,`http://${i}`),n}AC("Browser");var NC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Cf=Cf||{},b=NC||self;function hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Co(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DC(t){return Object.prototype.hasOwnProperty.call(t,Cc)&&t[Cc]||(t[Cc]=++OC)}var Cc="closure_uid_"+(1e9*Math.random()>>>0),OC=0;function xC(t,e,n){return t.call.apply(t.bind,arguments)}function VC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=xC:je=VC,je.apply(null,arguments)}function ua(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var MC=0;ar.prototype.s=!1;ar.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MC!=0)&&DC(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const H0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Tg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var LC=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",()=>{},e),b.removeEventListener("test",()=>{},e)}catch{}return t}();function eo(t){return/^[\s\xa0]*$/.test(t)}function du(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return du().indexOf(t)!=-1}function Nf(t){return Nf[" "](t),t}Nf[" "]=function(){};function FC(t,e){var n=kk;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bC=zt("Opera"),Vi=zt("Trident")||zt("MSIE"),W0=zt("Edge"),Kh=W0||Vi,K0=zt("Gecko")&&!(du().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),UC=du().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function Q0(){var t=b.document;return t?t.documentMode:void 0}var Qh;e:{var kc="",Nc=function(){var t=du();if(K0)return/rv:([^\);]+)(\)|;)/.exec(t);if(W0)return/Edge\/([\d\.]+)/.exec(t);if(Vi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(UC)return/WebKit\/(\S+)/.exec(t);if(bC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(kc=Nc?Nc[1]:""),Vi){var Dc=Q0();if(Dc!=null&&Dc>parseFloat(kc)){Qh=String(Dc);break e}}Qh=kc}var Gh;if(b.document&&Vi){var Ig=Q0();Gh=Ig||parseInt(Qh,10)||void 0}else Gh=void 0;var $C=Gh;function to(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K0){e:{try{Nf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&to.$.h.call(this)}}Pe(to,Be);var jC={2:"touch",3:"pen",4:"mouse"};to.prototype.h=function(){to.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ko="closure_listenable_"+(1e6*Math.random()|0),BC=0;function zC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++BC,this.fa=this.ia=!1}function fu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Df(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function qC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function G0(t){const e={};for(const n in t)e[n]=t[n];return e}const Sg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Sg.length;s++)n=Sg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pu(t){this.src=t,this.g={},this.h=0}pu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new zC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Yh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=H0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Of="closure_lm_"+(1e6*Math.random()|0),Oc={};function X0(t,e,n,r,i){if(r&&r.once)return Z0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)X0(t,e[s],n,r,i);return null}return n=Mf(n),t&&t[ko]?t.O(e,n,Co(r)?!!r.capture:!!r,i):J0(t,e,n,!1,r,i)}function J0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Co(i)?!!i.capture:!!i,a=Vf(t);if(a||(t[Of]=a=new pu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=HC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HC(){function t(n){return e.call(t.src,t.listener,n)}const e=WC;return t}function Z0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Z0(t,e[s],n,r,i);return null}return n=Mf(n),t&&t[ko]?t.P(e,n,Co(r)?!!r.capture:!!r,i):J0(t,e,n,!0,r,i)}function eE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eE(t,e[s],n,r,i);else r=Co(r)?!!r.capture:!!r,n=Mf(n),t&&t[ko]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xh(s,n,r,i),-1<n&&(fu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xh(e,n,r,i)),(n=-1<t?e[t]:null)&&xf(n))}function xf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ko])Yh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vf(e))?(Yh(n,t),n.h==0&&(n.src=null,e[Of]=null)):fu(t)}}}function tE(t){return t in Oc?Oc[t]:Oc[t]="on"+t}function WC(t,e){if(t.fa)t=!0;else{e=new to(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xf(t),t=n.call(r,e)}return t}function Vf(t){return t=t[Of],t instanceof pu?t:null}var xc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mf(t){return typeof t=="function"?t:(t[xc]||(t[xc]=function(e){return t.handleEvent(e)}),t[xc])}function Re(){ar.call(this),this.i=new pu(this),this.S=this,this.J=null}Pe(Re,ar);Re.prototype[ko]=!0;Re.prototype.removeEventListener=function(t,e,n,r){eE(this,t,e,n,r)};function xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),Y0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ca(o,r,!0,e)&&i}if(o=e.g=t,i=ca(o,r,!0,e)&&i,i=ca(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ca(o,r,!1,e)&&i}Re.prototype.N=function(){if(Re.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fu(n[r]);delete t.g[e],t.h--}}this.J=null};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ca(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Yh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lf=b.JSON.stringify;class KC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function QC(){var t=Ff;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GC{constructor(){this.h=this.g=null}add(e,n){const r=nE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var nE=new KC(()=>new YC,t=>t.reset());class YC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JC(t){b.setTimeout(()=>{throw t},0)}let no,ro=!1,Ff=new GC,rE=()=>{const t=b.Promise.resolve(void 0);no=()=>{t.then(ZC)}};var ZC=()=>{for(var t;t=QC();){try{t.h.call(t.g)}catch(n){JC(n)}var e=nE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ro=!1};function mu(t,e){Re.call(this),this.h=t||1,this.g=e||b,this.j=je(this.qb,this),this.l=Date.now()}Pe(mu,Re);R=mu.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xe(this,"tick"),this.ga&&(bf(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){mu.$.N.call(this),bf(this),delete this.g};function Uf(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function iE(t){t.g=Uf(()=>{t.g=null,t.i&&(t.i=!1,iE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ek extends ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iE(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){ar.call(this),this.h=t,this.g={}}Pe(io,ar);var Ag=[];function sE(t,e,n,r){Array.isArray(n)||(n&&(Ag[0]=n.toString()),n=Ag);for(var i=0;i<n.length;i++){var s=X0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oE(t){Df(t.g,function(e,n){this.g.hasOwnProperty(n)&&xf(e)},t),t.g={}}io.prototype.N=function(){io.$.N.call(this),oE(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gu(){this.g=!0}gu.prototype.Ea=function(){this.g=!1};function tk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function nk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ik(t,n)+(r?" "+r:"")})}function rk(t,e){t.info(function(){return"TIMEOUT: "+e})}gu.prototype.info=function(){};function ik(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lf(n)}catch{return e}}var Hr={},Rg=null;function yu(){return Rg=Rg||new Re}Hr.Ta="serverreachability";function aE(t){Be.call(this,Hr.Ta,t)}Pe(aE,Be);function so(t){const e=yu();xe(e,new aE(e))}Hr.STAT_EVENT="statevent";function lE(t,e){Be.call(this,Hr.STAT_EVENT,t),this.stat=e}Pe(lE,Be);function Ye(t){const e=yu();xe(e,new lE(e,t))}Hr.Ua="timingevent";function uE(t,e){Be.call(this,Hr.Ua,t),this.size=e}Pe(uE,Be);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var vu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $f(){}$f.prototype.h=null;function Pg(t){return t.h||(t.h=t.i())}function hE(){}var Do={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jf(){Be.call(this,"d")}Pe(jf,Be);function Bf(){Be.call(this,"c")}Pe(Bf,Be);var Jh;function _u(){}Pe(_u,$f);_u.prototype.g=function(){return new XMLHttpRequest};_u.prototype.i=function(){return{}};Jh=new _u;function Oo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new io(this),this.P=sk,t=Kh?125:void 0,this.V=new mu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dE}function dE(){this.i=null,this.g="",this.h=!1}var sk=45e3,Zh={},Tl={};R=Oo.prototype;R.setTimeout=function(t){this.P=t};function ed(t,e,n){t.L=1,t.v=wu(_n(e)),t.s=n,t.S=!0,fE(t,null)}function fE(t,e){t.G=Date.now(),xo(t),t.A=_n(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),wE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new dE,t.g=BE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ek(je(t.Pa,t,t.g),t.O)),sE(t.U,t.g,"readystatechange",t.nb),e=t.I?G0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),so(),tk(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&qt(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Kh||this.g&&(this.h.h||this.g.ja()||Dg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?so(3):so(2)),Eu(this);var n=this.g.da();this.ca=n;t:if(pE(this)){var r=Dg(this.g);t="";var i=r.length,s=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),Ps(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nk(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eo(a)){var u=a;break t}}u=null}if(n=u)di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,td(this,n);else{this.i=!1,this.o=3,Ye(12),Er(this),Ps(this);break e}}this.S?(mE(this,c,o),Kh&&this.i&&c==3&&(sE(this.U,this.V,"tick",this.mb),this.V.start())):(di(this.j,this.m,o,null),td(this,o)),c==4&&Er(this),this.i&&!this.J&&(c==4?bE(this.l,this):(this.i=!1,xo(this)))}else Rk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),Er(this),Ps(this)}}}catch{}finally{}};function pE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function mE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ok(t,n),i==Tl){e==4&&(t.o=4,Ye(14),r=!1),di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Zh){t.o=4,Ye(15),di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else di(t.j,t.m,i,null),td(t,i);pE(t)&&i!=Tl&&i!=Zh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qf(e),e.M=!0,Ye(11))):(di(t.j,t.m,n,"[Invalid Chunked Response]"),Er(t),Ps(t))}R.mb=function(){if(this.g){var t=qt(this.g),e=this.g.ja();this.C<e.length&&(Eu(this),mE(this,t,e),this.i&&t!=4&&xo(this))}};function ok(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Tl:(n=Number(e.substring(n,r)),isNaN(n)?Zh:(r+=1,r+n>e.length?Tl:(e=e.slice(r,r+n),t.C=r+n,e)))}R.cancel=function(){this.J=!0,Er(this)};function xo(t){t.Y=Date.now()+t.P,gE(t,t.P)}function gE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=No(je(t.lb,t),e)}function Eu(t){t.B&&(b.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(rk(this.j,this.A),this.L!=2&&(so(),Ye(17)),Er(this),this.o=2,Ps(this)):gE(this,this.Y-t)};function Ps(t){t.l.H==0||t.J||bE(t.l,t)}function Er(t){Eu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bf(t.V),oE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function td(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nd(n.i,t))){if(!t.K&&nd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Al(n),Su(n);else break e;Kf(n),Ye(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=No(je(n.ib,n),6e3));if(1>=SE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else wr(n,11)}else if((t.K||n.g==t)&&Al(n),!eo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zf(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,re(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=jE(r,r.J?r.pa:null,r.Y),o.K){AE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Eu(a),xo(a)),r.g=o}else LE(r);0<n.j.length&&Au(n)}else u[0]!="stop"&&u[0]!="close"||wr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wr(n,7):Wf(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}so(4)}catch{}}function ak(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function lk(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function yE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lk(t),r=ak(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var vE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Rr){this.h=t.h,Il(this,t.j),this.s=t.s,this.g=t.g,Sl(this,t.m),this.l=t.l;var e=t.i,n=new oo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cg(this,n),this.o=t.o}else t&&(e=String(t).match(vE))?(this.h=!1,Il(this,e[1]||"",!0),this.s=fs(e[2]||""),this.g=fs(e[3]||"",!0),Sl(this,e[4]),this.l=fs(e[5]||"",!0),Cg(this,e[6]||"",!0),this.o=fs(e[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}Rr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ps(e,kg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ps(e,kg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ps(n,n.charAt(0)=="/"?dk:hk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ps(n,pk)),t.join("")};function _n(t){return new Rr(t)}function Il(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Sl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cg(t,e,n){e instanceof oo?(t.i=e,mk(t.i,t.h)):(n||(e=ps(e,fk)),t.i=new oo(e,t.h))}function re(t,e,n){t.i.set(e,n)}function wu(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ck),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ck(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kg=/[#\/\?@]/g,hk=/[#\?:]/g,dk=/[#\?]/g,fk=/[#\?@]/g,pk=/#/g;function oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Map,t.h=0,t.i&&uk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=oo.prototype;R.add=function(t,e){lr(this),this.i=null,t=Wi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _E(t,e){lr(t),e=Wi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function EE(t,e){return lr(t),e=Wi(t,e),t.g.has(e)}R.forEach=function(t,e){lr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){lr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){lr(this);let e=[];if(typeof t=="string")EE(this,t)&&(e=e.concat(this.g.get(Wi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return lr(this),this.i=null,t=Wi(this,t),EE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wE(t,e,n){_E(t,e),0<n.length&&(t.i=null,t.g.set(Wi(t,e),kf(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Wi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mk(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_E(this,r),wE(this,i,n))},t)),t.j=e}var gk=class{constructor(t,e){this.g=t,this.map=e}};function TE(t){this.l=t||yk,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yk=10;function IE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function SE(t){return t.h?1:t.g?t.g.size:0}function nd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zf(t,e){t.g?t.g.add(e):t.h=e}function AE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}TE.prototype.cancel=function(){if(this.i=RE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function RE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kf(t.i)}var vk=class{stringify(t){return b.JSON.stringify(t,void 0)}parse(t){return b.JSON.parse(t,void 0)}};function _k(){this.g=new vk}function Ek(t,e,n){const r=n||"";try{yE(t,function(i,s){let o=i;Co(i)&&(o=Lf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wk(t,e){const n=new gu;if(b.Image){const r=new Image;r.onload=ua(ha,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ua(ha,n,r,"TestLoadImage: error",!1,e),r.onabort=ua(ha,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ua(ha,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ha(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vo(t){this.l=t.fc||null,this.j=t.ob||!1}Pe(Vo,$f);Vo.prototype.g=function(){return new Tu(this.l,this.j)};Vo.prototype.i=function(t){return function(){return t}}({});function Tu(t,e){Re.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Tu,Re);var qf=0;R=Tu.prototype;R.open=function(t,e){if(this.readyState!=qf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ao(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||b).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=qf};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;PE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function PE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mo(this):ao(this),this.readyState==3&&PE(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Mo(this))};R.Ya=function(t){this.g&&(this.response=t,Mo(this))};R.ka=function(){this.g&&Mo(this)};function Mo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ao(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Tk=b.JSON.parse;function fe(t){Re.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=CE,this.L=this.M=!1}Pe(fe,Re);var CE="",Ik=/^https?$/i,Sk=["POST","PUT"];R=fe.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jh.g(),this.C=this.u?Pg(this.u):Pg(Jh),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ng(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&t instanceof b.FormData,!(0<=H0(Sk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{DE(this),0<this.B&&((this.L=Ak(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=Uf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ng(this,s)}};function Ak(t){return Vi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Cf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Ng(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kE(t),Iu(t)}function kE(t){t.F||(t.F=!0,xe(t,"complete"),xe(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),Iu(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Iu(this,!0)),fe.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?NE(this):this.kb())};R.kb=function(){NE(this)};function NE(t){if(t.h&&typeof Cf<"u"&&(!t.C[1]||qt(t)!=4||t.da()!=2)){if(t.v&&qt(t)==4)Uf(t.La,0,t);else if(xe(t,"readystatechange"),qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(vE)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Ik.test(i?i.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var s=2<qt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",kE(t)}}finally{Iu(t)}}}}function Iu(t,e){if(t.g){DE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function DE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function qt(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Tk(e)}};function Dg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case CE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Rk(t){const e={};t=(t.g&&2<=qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(eo(t[r]))continue;var n=XC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}qC(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function OE(t){let e="";return Df(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xE(t){this.Ga=0,this.j=[],this.l=new gu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ss("baseRetryDelayMs",5e3,t),this.hb=ss("retryDelaySeedMs",1e4,t),this.eb=ss("forwardChannelMaxRetries",2,t),this.xa=ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new TE(t&&t.concurrentRequestLimit),this.Ja=new _k,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=xE.prototype;R.ra=8;R.H=1;function Wf(t){if(VE(t),t.H==3){var e=t.W++,n=_n(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),Lo(t,n),e=new Oo(t,t.l,e),e.L=2,e.v=wu(_n(n)),n=!1,b.navigator&&b.navigator.sendBeacon)try{n=b.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=BE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xo(e)}$E(t)}function Su(t){t.g&&(Qf(t),t.g.cancel(),t.g=null)}function VE(t){Su(t),t.u&&(b.clearTimeout(t.u),t.u=null),Al(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function Au(t){if(!IE(t.i)&&!t.m){t.m=!0;var e=t.Na;no||rE(),ro||(no(),ro=!0),Ff.add(e,t),t.C=0}}function Pk(t,e){return SE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=No(je(t.Na,t,e),UE(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Oo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=G0(s),Y0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ME(this,i,e),n=_n(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),Lo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(OE(s)))+"&"+e:this.o&&Hf(n,this.o,s)),zf(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,ed(i,n,null)):ed(i,n,e),this.H=2}}else this.H==3&&(t?Og(this,t):this.j.length==0||IE(this.i)||Og(this))};function Og(t,e){var n;e?n=e.m:n=t.W++;const r=_n(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),Lo(t,r),t.o&&t.s&&Hf(r,t.o,t.s),n=new Oo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ME(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zf(t.i,n),ed(n,r,e)}function Lo(t,e){t.na&&Df(t.na,function(n,r){re(e,r,n)}),t.h&&yE({},function(n,r){re(e,r,n)})}function ME(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Ek(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function LE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;no||rE(),ro||(no(),ro=!0),Ff.add(e,t),t.A=0}}function Kf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=No(je(t.Ma,t),UE(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,FE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=No(je(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ye(10),Su(this),FE(this))};function Qf(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function FE(t){t.g=new Oo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),Lo(t,e),t.o&&t.s&&Hf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=wu(_n(e)),n.s=null,n.S=!0,fE(n,t)}R.ib=function(){this.v!=null&&(this.v=null,Su(this),Kf(this),Ye(19))};function Al(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function bE(t,e){var n=null;if(t.g==e){Al(t),Qf(t),t.g=null;var r=2}else if(nd(t.i,e))n=e.F,AE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=yu(),xe(r,new uE(r,n)),Au(t)}else LE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Pk(t,e)||r==2&&Kf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}}function UE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function wr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new Rr("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Il(n,"https"),wu(n)),wk(n.toString(),r)}else Ye(2);t.H=0,t.h&&t.h.za(e),$E(t),VE(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ye(2)):(this.l.info("Failed to ping google.com"),Ye(1))};function $E(t){if(t.H=0,t.ma=[],t.h){const e=RE(t.i);(e.length!=0||t.j.length!=0)&&(Tg(t.ma,e),Tg(t.ma,t.j),t.i.i.length=0,kf(t.j),t.j.length=0),t.h.ya()}}function jE(t,e,n){var r=n instanceof Rr?_n(n):new Rr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Sl(r,r.m);else{var i=b.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Rr(null);r&&Il(s,r),e&&(s.g=e),i&&Sl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),Lo(t,r),r}function BE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new fe(new Vo({ob:!0})):new fe(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function zE(){}R=zE.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Rl(){if(Vi&&!(10<=Number($C)))throw Error("Environmental error: no available transport.")}Rl.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){Re.call(this),this.g=new xE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}Pe(vt,Re);vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=jE(t,null,t.Y),Au(t)};vt.prototype.close=function(){Wf(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lf(t),t=n);e.j.push(new gk(e.fb++,t)),e.H==3&&Au(e)};vt.prototype.N=function(){this.g.h=null,delete this.j,Wf(this.g),delete this.g,vt.$.N.call(this)};function qE(t){jf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(qE,jf);function HE(){Bf.call(this),this.status=1}Pe(HE,Bf);function Ki(t){this.g=t}Pe(Ki,zE);Ki.prototype.Ba=function(){xe(this.g,"a")};Ki.prototype.Aa=function(t){xe(this.g,new qE(t))};Ki.prototype.za=function(t){xe(this.g,new HE)};Ki.prototype.ya=function(){xe(this.g,"b")};function Ck(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Pe(Ut,Ck);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Vc(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vc(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vc(this,r),i=0;break}}this.h=i,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var kk={};function Gf(t){return-128<=t&&128>t?FC(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Ht(t){if(isNaN(t)||!isFinite(t))return Ti;if(0>t)return De(Ht(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rd;return new Z(e,0)}function WE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return De(WE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ht(Math.pow(e,8)),r=Ti,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ht(Math.pow(e,s)),r=r.R(s).add(Ht(o))):(r=r.R(n),r=r.add(Ht(o)))}return r}var rd=4294967296,Ti=Gf(0),id=Gf(1),xg=Gf(16777216);R=Z.prototype;R.ea=function(){if(St(this))return-De(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rd+r)*e,e*=rd}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(dn(this))return"0";if(St(this))return"-"+De(this).toString(t);for(var e=Ht(Math.pow(t,6)),n=this,r="";;){var i=Cl(n,e).g;n=Pl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,dn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}R.X=function(t){return t=Pl(this,t),St(t)?-1:dn(t)?0:1};function De(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(id)}R.abs=function(){return St(this)?De(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Pl(t,e){return t.add(De(e))}R.R=function(t){if(dn(this)||dn(t))return Ti;if(St(this))return St(t)?De(this).R(De(t)):De(De(this).R(t));if(St(t))return De(this.R(De(t)));if(0>this.X(xg)&&0>t.X(xg))return Ht(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,da(n,2*r+2*i),n[2*r+2*i+1]+=s*l,da(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,da(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,da(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function da(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function os(t,e){this.g=t,this.h=e}function Cl(t,e){if(dn(e))throw Error("division by zero");if(dn(t))return new os(Ti,Ti);if(St(t))return e=Cl(De(t),e),new os(De(e.g),De(e.h));if(St(e))return e=Cl(t,De(e)),new os(De(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=id,r=e;0>=r.X(t);)n=Vg(n),r=Vg(r);var i=Yr(n,1),s=Yr(r,1);for(r=Yr(r,2),n=Yr(n,2);!dn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Yr(r,1),n=Yr(n,1)}return e=Pl(t,i.R(e)),new os(i,e)}for(i=Ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ht(n),o=s.R(e);St(o)||0<o.X(t);)n-=r,s=Ht(n),o=s.R(e);dn(s)&&(s=id),i=i.add(s),t=Pl(t,o)}return new os(i,t)}R.gb=function(t){return Cl(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function Vg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function Yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}Rl.prototype.createWebChannel=Rl.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;vu.NO_ERROR=0;vu.TIMEOUT=8;vu.HTTP_ERROR=6;cE.COMPLETE="complete";hE.EventType=Do;Do.OPEN="a";Do.CLOSE="b";Do.ERROR="c";Do.MESSAGE="d";Re.prototype.listen=Re.prototype.O;fe.prototype.listenOnce=fe.prototype.P;fe.prototype.getLastError=fe.prototype.Sa;fe.prototype.getLastErrorCode=fe.prototype.Ia;fe.prototype.getStatus=fe.prototype.da;fe.prototype.getResponseJson=fe.prototype.Wa;fe.prototype.getResponseText=fe.prototype.ja;fe.prototype.send=fe.prototype.ha;fe.prototype.setWithCredentials=fe.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Ht;Z.fromString=WE;var Nk=function(){return new Rl},Dk=function(){return yu()},Mc=vu,Ok=cE,xk=Hr,Mg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vk=Vo,fa=hE,Mk=fe,Lk=Ut,Ii=Z;const Lg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new yf("@firebase/firestore");function Fg(){return Lr.logLevel}function O(t,...e){if(Lr.logLevel<=Q.DEBUG){const n=e.map(Yf);Lr.debug(`Firestore (${Qi}): ${t}`,...n)}}function En(t,...e){if(Lr.logLevel<=Q.ERROR){const n=e.map(Yf);Lr.error(`Firestore (${Qi}): ${t}`,...n)}}function lo(t,...e){if(Lr.logLevel<=Q.WARN){const n=e.map(Yf);Lr.warn(`Firestore (${Qi}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function se(t,e){t||U()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class Uk{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new Fk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new nt(e)}}class $k{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $k(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.R=n.token,new Bk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Te(0,0))}static max(){return new $(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends uo{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const Hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends uo{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return Hk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(de.fromString(e))}static fromName(e){return new V(de.fromString(e).popFirst(5))}static empty(){return new V(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new de(e.slice()))}}function Wk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new tr(i,V.empty(),e)}function Kk(t){return new tr(t.readTime,t.key,-1)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr($.min(),V.empty(),-1)}static max(){return new tr($.max(),V.empty(),-1)}}function Qk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Gk)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xf.ae=-1;function Ru(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function Xk(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??ke.EMPTY,this.right=s??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new pt([])}unionWith(e){let n=new ze($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GE("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const Jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(se(!!t),typeof t=="string"){let e=0;const n=Jk.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zf(t){const e=t.mapValue.fields.__previous_value__;return Jf(e)?Zf(e):e}function co(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:eN(t)?9007199254740991:10:U()}function Zt(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=nr(i.timestampValue),a=nr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ye(i.doubleValue),a=ye(s.doubleValue);return o===a?kl(o)===kl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bg(o)!==bg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zt(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function fo(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ye(s.integerValue||s.doubleValue),l=ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return $g(t.timestampValue,e.timestampValue);case 4:return $g(co(t),co(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fr(s),l=Fr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=G(a[u],l[u]);if(c!==0)return c}return G(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=G(ye(s.latitude),ye(o.latitude));return a!==0?a:G(ye(s.longitude),ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Li(a[u],l[u]);if(c)return c}return G(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ma.mapValue&&o===ma.mapValue)return 0;if(s===ma.mapValue)return 1;if(o===ma.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=G(l[h],c[h]);if(d!==0)return d;const p=Li(a[l[h]],u[c[h]]);if(p!==0)return p}return G(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function $g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=nr(t),r=nr(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function Fi(t){return sd(t)}function sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sd(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function od(t){return!!t&&"integerValue"in t}function ep(t){return!!t&&"arrayValue"in t}function jg(t){return!!t&&"nullValue"in t}function Bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fa(t){return!!t&&"mapValue"in t}function Cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Cs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new it(Cs(this.value))}}function YE(t){const e=[];return Wr(t.fields,(n,r)=>{const i=new $e([n]);if(Fa(r)){const s=YE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,$.min(),$.min(),$.min(),it.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,$.min(),$.min(),it.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,$.min(),$.min(),it.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function zg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function tN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{}class Ee extends XE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new rN(e,n,r):n==="array-contains"?new oN(e,r):n==="in"?new aN(e,r):n==="not-in"?new lN(e,r):n==="array-contains-any"?new uN(e,r):new Ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iN(e,r):new sN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class en extends XE{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new en(e,n)}matches(e){return JE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function JE(t){return t.op==="and"}function ZE(t){return nN(t)&&JE(t)}function nN(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function ad(t){if(t instanceof Ee)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(ZE(t))return t.filters.map(e=>ad(e)).join(",");{const e=t.filters.map(n=>ad(n)).join(",");return`${t.op}(${e})`}}function ew(t,e){return t instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.field.isEqual(i.field)&&Zt(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ew(o,i.filters[a]),!0):!1}(t,e):void U()}function tw(t){return t instanceof Ee?function(n){return`${n.field.canonicalString()} ${n.op} ${Fi(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(tw).join(" ,")+"}"}(t):"Filter"}class rN extends Ee{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class iN extends Ee{constructor(e,n){super(e,"in",n),this.keys=nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sN extends Ee{constructor(e,n){super(e,"not-in",n),this.keys=nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class oN extends Ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&fo(n.arrayValue,this.value)}}class aN extends Ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fo(this.value.arrayValue,n)}}class lN extends Ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fo(this.value.arrayValue,n)}}class uN extends Ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Hg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new cN(t,e,n,r,i,s,o)}function tp(t){const e=z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fi(r)).join(",")),e.he=n}return e.he}function np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qg(t.startAt,e.startAt)&&qg(t.endAt,e.endAt)}function ld(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function hN(t,e,n,r,i,s,o,a){return new Pu(t,e,n,r,i,s,o,a)}function rp(t){return new Pu(t)}function Wg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pN(t){return t.collectionGroup!==null}function Si(t){const e=z(t);if(e.Pe===null){e.Pe=[];const n=fN(e),r=dN(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ks(n)),e.Pe.push(new ks($e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ks($e.keyField(),s))}}}return e.Pe}function wn(t){const e=z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Hg(e.path,e.collectionGroup,Si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Si(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ks(s.field,o))}const r=e.endAt?new Nl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Nl(e.startAt.position,e.startAt.inclusive):null;e.Ie=Hg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function ud(t,e,n){return new Pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cu(t,e){return np(wn(t),wn(e))&&t.limitType===e.limitType}function rw(t){return`${tp(wn(t))}|lt:${t.limitType}`}function cd(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tw(i)).join(", ")}]`),Ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Fi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Fi(i)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Si(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=zg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Si(r),i)||r.endAt&&!function(o,a,l){const u=zg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Si(r),i))}(t,e)}function mN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iw(t){return(e,n)=>{let r=!1;for(const i of Si(t)){const s=gN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gN(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Li(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new ce(V.comparator);function Tn(){return yN}const sw=new ce(V.comparator);function ms(...t){let e=sw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=sw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return Ns()}function aw(){return Ns()}function Ns(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const vN=new ce(V.comparator),_N=new ze(V.comparator);function q(...t){let e=_N;for(const n of t)e=e.add(n);return e}const EN=new ze(G);function wN(){return EN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function uw(t){return{integerValue:""+t}}function TN(t,e){return Xk(e)?uw(e):lw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this._=void 0}}function IN(t,e,n){return t instanceof Dl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jf(s)&&(s=Zf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof po?hw(t,e):t instanceof mo?dw(t,e):function(i,s){const o=cw(i,s),a=Kg(o)+Kg(i.Te);return od(o)&&od(i.Te)?uw(a):lw(i.serializer,a)}(t,e)}function SN(t,e,n){return t instanceof po?hw(t,e):t instanceof mo?dw(t,e):n}function cw(t,e){return t instanceof Ol?function(r){return od(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Dl extends Nu{}class po extends Nu{constructor(e){super(),this.elements=e}}function hw(t,e){const n=fw(e);for(const r of t.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class mo extends Nu{constructor(e){super(),this.elements=e}}function dw(t,e){let n=fw(e);for(const r of t.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class Ol extends Nu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Kg(t){return ye(t.integerValue||t.doubleValue)}function fw(t){return ep(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof po&&i instanceof po||r instanceof mo&&i instanceof mo?Mi(r.elements,i.elements,Zt):r instanceof Ol&&i instanceof Ol?Zt(r.Te,i.Te):r instanceof Dl&&i instanceof Dl}(t.transform,e.transform)}class RN{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Du{}function pw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gw(t.key,Xt.none()):new Uo(t.key,t.data,Xt.none());{const n=t.data,r=it.empty();let i=new ze($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ur(t.key,r,new pt(i.toArray()),Xt.none())}}function PN(t,e,n){t instanceof Uo?function(i,s,o){const a=i.value.clone(),l=Gg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(i,s,o){if(!ba(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Gg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(mw(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ds(t,e,n,r){return t instanceof Uo?function(s,o,a,l){if(!ba(s.precondition,o))return a;const u=s.value.clone(),c=Yg(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,o,a,l){if(!ba(s.precondition,o))return a;const u=Yg(s.fieldTransforms,l,o),c=o.data;return c.setAll(mw(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ba(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cw(r.transform,i||null);s!=null&&(n===null&&(n=it.empty()),n.set(r.field,s))}return n||null}function Qg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mi(r,i,(s,o)=>AN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends Du{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends Du{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gg(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,SN(o,a,n[i]))}return r}function Yg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IN(s,o,e))}return r}class gw extends Du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kN extends Du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&PN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ds(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ds(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=pw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,r)=>Qg(n,r))&&Mi(this.baseMutations,e.baseMutations,(n,r)=>Qg(n,r))}}class ip{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=function(){return vN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ip(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,W;function xN(t){switch(t){default:return U();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function yw(t){if(t===void 0)return En("GRPC error has no .code"),w.UNKNOWN;switch(t){case ge.OK:return w.OK;case ge.CANCELLED:return w.CANCELLED;case ge.UNKNOWN:return w.UNKNOWN;case ge.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ge.INTERNAL:return w.INTERNAL;case ge.UNAVAILABLE:return w.UNAVAILABLE;case ge.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ge.NOT_FOUND:return w.NOT_FOUND;case ge.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ge.ABORTED:return w.ABORTED;case ge.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ge.DATA_LOSS:return w.DATA_LOSS;default:return U()}}(W=ge||(ge={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ga}static getOrCreateInstance(){return ga===null&&(ga=new sp),ga}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ga=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new Ii([4294967295,4294967295],0);function Xg(t){const e=VN().encode(t),n=new Lk;return n.update(e),new Uint8Array(n.digest())}function Jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ii([n,r],0),new Ii([i,s],0)]}class op{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gs(`Invalid padding: ${n}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ii.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ii.fromNumber(r)));return i.compare(MN)===1&&(i=new Ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Xg(e),[r,i]=Jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new op(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Xg(e),[r,i]=Jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ou($.min(),i,new ce(G),Tn(),q())}}class $o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $o(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class vw{constructor(e,n){this.targetId=e,this.pe=n}}class _w{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Zg{constructor(){this.ye=0,this.we=ty(),this.Se=Ke.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=q(),n=q(),r=q();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new $o(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=ty()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class LN{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Tn(),this.$e=ey(),this.Ue=new ce(G)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(ld(a))if(s===0){const l=new V(a.path);this.ze(i,l,Ue.newNoDocument(l,$.min()))}else se(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=sp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,y){var v,_,m,f,g,E;const T={localCacheCount:p,existenceFilterCount:y.count},I=y.unchangedNames;return I&&(T.bloomFilter={applied:h===0,hashCount:(v=I==null?void 0:I.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(f=(m=(_=I==null?void 0:I.bits)===null||_===void 0?void 0:_.bitmap)===null||m===void 0?void 0:m.length)!==null&&f!==void 0?f:0,padding:(E=(g=I==null?void 0:I.bits)===null||g===void 0?void 0:g.padding)!==null&&E!==void 0?E:0},d&&(T.bloomFilter.mightContain=d)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Fr(s).toUint8Array()}catch(h){if(h instanceof GE)return lo("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new op(l,o,a)}catch(h){return lo(h instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&ld(a.target)){const l=new V(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ue.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=q();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new Ou(e,n,this.Ue,this.Ke,r);return this.Ke=Tn(),this.$e=ey(),this.Ue=new ce(G),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Zg,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ze(G),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Zg),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function ey(){return new ce(V.comparator)}function ty(){return new ce(V.comparator)}const FN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UN=(()=>({and:"AND",or:"OR"}))();class $N{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hd(t,e){return t.useProto3Json||Ru(e)?e:{value:e}}function xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ew(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jN(t,e){return xl(t,e.toTimestamp())}function Jt(t){return se(!!t),$.fromTimestamp(function(n){const r=nr(n);return new Te(r.seconds,r.nanos)}(t))}function ap(t,e){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function ww(t){const e=de.fromString(t);return se(Aw(e)),e}function dd(t,e){return ap(t.databaseId,e.path)}function Lc(t,e){const n=ww(e);if(n.get(1)!==t.databaseId.projectId)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(Tw(n))}function fd(t,e){return ap(t.databaseId,e)}function BN(t){const e=ww(t);return e.length===4?de.emptyPath():Tw(e)}function pd(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tw(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ny(t,e,n){return{name:dd(t,e),fields:n.value.mapValue.fields}}function zN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(se(c===void 0||typeof c=="string"),Ke.fromBase64String(c||"")):(se(c===void 0||c instanceof Uint8Array),Ke.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:yw(u.code);return new x(c,u.message||"")}(o);n=new _w(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lc(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):$.min(),a=new it({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ua(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lc(t,r.document),s=r.readTime?Jt(r.readTime):$.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ua([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lc(t,r.document),s=r.removedTargetIds||[];n=new Ua([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ON(i,s),a=r.targetId;n=new vw(a,o)}}return n}function qN(t,e){let n;if(e instanceof Uo)n={update:ny(t,e.key,e.value)};else if(e instanceof gw)n={delete:dd(t,e.key)};else if(e instanceof ur)n={update:ny(t,e.key,e.data),updateMask:ZN(e.fieldMask)};else{if(!(e instanceof kN))return U();n={verify:dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Dl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:jN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function HN(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual($.min())&&(o=Jt(s)),new RN(o,i.transformResults||[])}(n,e))):[]}function WN(t,e){return{documents:[fd(t,e.path)]}}function KN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=fd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Sw(en.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Xr(h.field),direction:YN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=hd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function QN(t){let e=BN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=Iw(h);return d instanceof en&&ZE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new ks(Jr(y.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ru(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Nl(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Nl(p,d)}(n.endAt)),hN(e,i,o,s,a,"F",l,u)}function GN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jr(n.unaryFilter.field);return Ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jr(n.unaryFilter.field);return Ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Ee.create(Jr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>Iw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function YN(t){return FN[t]}function XN(t){return bN[t]}function JN(t){return UN[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return $e.fromServerFormat(t.fieldPath)}function Sw(t){return t instanceof Ee?function(n){if(n.op==="=="){if(Bg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(jg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(jg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:XN(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>Sw(i));return r.length===1?r[0]:{compositeFilter:{op:JN(n.op),filters:r}}}(t):U()}function ZN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Aw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.ct=e}}function tD(t){const e=QN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.sn=new rD}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(tr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class rD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new bi(0)}static On(){return new bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ds(r.mutation,i,pt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=Tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ms();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tn();const o=Ns(),a=function(){return Ns()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ur)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ds(c.mutation,u,c.mutation.getFieldMask(),Te.now())):o.set(u.key,pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new sD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ns();let i=new ce((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=aw();c.forEach(d=>{if(!s.has(d)){const p=pw(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return V.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Tr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:ow(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ms();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(c,h){return new Pu(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ue.newInvalidDocument(u)))});let o=ms();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ds(u.mutation,l,pt.empty(),Te.now()),ku(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return A.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:tD(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.overlays=new ce(V.comparator),this.cr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Tr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Tr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Tr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DN(n,r));let s=this.cr.get(n);s===void 0&&(s=q(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.lr=new ze(Ie.hr),this.Pr=new ze(Ie.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ie(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new V(new de([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new V(new de([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=q();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return V.comparator(e.key,n.key)||G(e.mr,n.mr)}static Ir(e,n){return G(e.mr,n.mr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new ze(Ie.hr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(G);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),A.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new V(s),0);let a=new ze(G);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),A.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return A.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ie(n,0),i=this.pr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.Dr=e,this.docs=function(){return new ce(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Qk(Kk(c),r)<=0||(i.has(c.key)||ku(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hD(this)}getSize(e){return A.resolve(this.size)}}class hD extends iD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.persistence=e,this.Cr=new Gi(n=>tp(n),np),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new lp,this.targetCount=0,this.Or=bi.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),A.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Ln(n),A.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Xf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new dD(this),this.indexManager=new nD,this.remoteDocumentCache=function(i){return new cD(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new eD(n),this.Qr=new aD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new uD(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new pD(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return A.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class pD extends Yk{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.Wr=new lp,this.Gr=null}static zr(e){return new up(e)}get jr(){if(this.Gr)return this.Gr;throw U()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.jr,r=>{const i=V.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return A.or([()=>A.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(Wg(n))return A.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ud(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,ud(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return Wg(n)||i.isEqual($.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(Fg()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cd(n)),this.ji(e,o,n,Wk(i,-1)))})}Gi(e,n){let r=new ze(iw(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return Fg()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",cd(n)),this.Ki.getDocumentsMatchingQuery(e,n,tr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ce(G),this.Yi=new Gi(s=>tp(s),np),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oD(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function yD(t,e,n,r){return new gD(t,e,n,r)}async function Rw(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function vD(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=A.resolve();return d.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const _=u.docVersions.get(y);se(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Pw(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function _D(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ke.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(v,_,m){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=Tn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ED(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual($.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function ED(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function wD(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TD(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function md(t,e,n){const r=z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function ry(t,e,n){const r=z(t);let i=$.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=z(l),d=h.Yi.get(c);return d!==void 0?A.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:q())).next(a=>(ID(r,mN(e),a),{documents:a,ss:s})))}function ID(t,e,n){let r=t.Zi.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class iy{constructor(){this.activeTargetIds=wN()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SD{constructor(){this.Hs=new iy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new iy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya=null;function Fc(){return ya===null?ya=function(){return 268435456+Math.round(2147483648*Math.random())}():ya++,"0x"+ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class CD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,i,s,o){const a=Fc(),l=this.Vo(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={};return this.mo(u,s,o),this.fo(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw lo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}po(n,r,i,s,o,a){return this.Ro(n,r,i,s,o)}mo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Vo(n,r){const i=RD[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,i){const s=Fc();return new Promise((o,a)=>{const l=new Mk;l.setWithCredentials(!0),l.listenOnce(Ok.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Mc.NO_ERROR:const c=l.getResponseJson();O(Fe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Mc.TIMEOUT:O(Fe,`RPC '${e}' ${s} timed out`),a(new x(w.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const h=l.getStatus();if(O(Fe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(p.status);a(new x(y,p.message))}else a(new x(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(w.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(Fe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(Fe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}yo(e,n,r){const i=Fc(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Nk(),a=Dk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Vk({})),this.mo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(Fe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const y=new PD({so:_=>{p?O(Fe,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(O(Fe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(Fe,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,m,f)=>{_.listen(m,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,fa.EventType.OPEN,()=>{p||O(Fe,`RPC '${e}' stream ${i} transport opened.`)}),v(h,fa.EventType.CLOSE,()=>{p||(p=!0,O(Fe,`RPC '${e}' stream ${i} transport closed`),y.Po())}),v(h,fa.EventType.ERROR,_=>{p||(p=!0,lo(Fe,`RPC '${e}' stream ${i} transport errored:`,_),y.Po(new x(w.UNAVAILABLE,"The operation could not be completed")))}),v(h,fa.EventType.MESSAGE,_=>{var m;if(!p){const f=_.data[0];se(!!f);const g=f,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){O(Fe,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let I=function(Y){const B=ge[Y];if(B!==void 0)return yw(B)}(T),C=E.message;I===void 0&&(I=w.INTERNAL,C="Unknown error status: "+T+" with message "+E.message),p=!0,y.Po(new x(I,C)),h.close()}else O(Fe,`RPC '${e}' stream ${i} received:`,f),y.Io(f)}}),v(a,xk.STAT_EVENT,_=>{_.stat===Mg.PROXY?O(Fe,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Mg.NOPROXY&&O(Fe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){return new $N(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Cw(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===n&&this.Xo(r,i)},r=>{e(()=>{const i=new x(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kD extends kw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=zN(this.serializer,e),r=function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Jt(o.readTime):$.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=pd(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=ld(l)?{documents:WN(s,l)}:{query:KN(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ew(s,o.resumeToken);const u=hd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=xl(s,o.snapshotVersion.toTimestamp());const u=hd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=GN(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=pd(this.serializer),n.removeTarget=e,this.jo(n)}}class ND extends kw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=HN(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.a_(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=pd(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qN(this.serializer,r))};this.jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(w.UNKNOWN,i.toString())})}po(e,n,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(w.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}class OD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(En(n),this.E_=!1):O("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=z(l);u.p_.add(4),await jo(u),u.S_.set("Unknown"),u.p_.delete(4),await Vu(u)}(this))})}),this.S_=new OD(r,i)}}async function Vu(t){if(Kr(t))for(const e of t.y_)await e(!0)}async function jo(t){for(const e of t.y_)await e(!1)}function Nw(t,e){const n=z(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),fp(n)?dp(n):Yi(n).$o()&&hp(n,e))}function Dw(t,e){const n=z(t),r=Yi(n);n.g_.delete(e),r.$o()&&Ow(n,e),n.g_.size===0&&(r.$o()?r.Go():Kr(n)&&n.S_.set("Unknown"))}function hp(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).r_(e)}function Ow(t,e){t.b_.Be(e),Yi(t).i_(e)}function dp(t){t.b_=new LN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.S_.d_()}function fp(t){return Kr(t)&&!Yi(t).Ko()&&t.g_.size>0}function Kr(t){return z(t).p_.size===0}function xw(t){t.b_=void 0}async function VD(t){t.g_.forEach((e,n)=>{hp(t,e)})}async function MD(t,e){xw(t),fp(t)?(t.S_.V_(e),dp(t)):t.S_.set("Unknown")}async function LD(t,e,n){if(t.S_.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof Ua?t.b_.We(e):e instanceof vw?t.b_.Ze(e):t.b_.je(e),!n.isEqual($.min()))try{const r=await Pw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.g_.get(u);c&&s.g_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.g_.get(l);if(!c)return;s.g_.set(l,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Ow(s,l);const h=new Un(c.target,l,u,c.sequenceNumber);hp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!bo(e))throw e;t.p_.add(1),await jo(t),t.S_.set("Offline"),n||(n=()=>Pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await Vu(t)})}function Vw(t,e){return e().catch(n=>Vl(t,n,e))}async function Mu(t){const e=z(t),n=rr(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;FD(e);)try{const i=await wD(e.localStore,r);if(i===null){e.f_.length===0&&n.Go();break}r=i.batchId,bD(e,i)}catch(i){await Vl(e,i)}Mw(e)&&Lw(e)}function FD(t){return Kr(t)&&t.f_.length<10}function bD(t,e){t.f_.push(e);const n=rr(t);n.$o()&&n.o_&&n.__(e.mutations)}function Mw(t){return Kr(t)&&!rr(t).Ko()&&t.f_.length>0}function Lw(t){rr(t).start()}async function UD(t){rr(t).c_()}async function $D(t){const e=rr(t);for(const n of t.f_)e.__(n.mutations)}async function jD(t,e,n){const r=t.f_.shift(),i=ip.from(r,e,n);await Vw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mu(t)}async function BD(t,e){e&&rr(t).o_&&await async function(r,i){if(function(o){return xN(o)&&o!==w.ABORTED}(i.code)){const s=r.f_.shift();rr(r).Wo(),await Vw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mu(r)}}(t,e),Mw(t)&&Lw(t)}async function oy(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.p_.add(3),await jo(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await Vu(n)}async function zD(t,e){const n=z(t);e?(n.p_.delete(2),await Vu(n)):e||(n.p_.add(2),await jo(n),n.S_.set("Unknown"))}function Yi(t){return t.D_||(t.D_=function(n,r,i){const s=z(n);return s.h_(),new kD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:VD.bind(null,t),uo:MD.bind(null,t),n_:LD.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),fp(t)?dp(t):t.S_.set("Unknown")):(await t.D_.stop(),xw(t))})),t.D_}function rr(t){return t.v_||(t.v_=function(n,r,i){const s=z(n);return s.h_(),new ND(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:UD.bind(null,t),uo:BD.bind(null,t),u_:$D.bind(null,t),a_:jD.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await Mu(t)):(await t.v_.stop(),t.f_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mp(t,e){if(En("AsyncQueue",`${e}: ${t}`),bo(t))return new x(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=ms(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.C_=new ce(V.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):U():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ui{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ui(e,n,Ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.M_=void 0,this.listeners=[]}}class HD{constructor(){this.queries=new Gi(e=>rw(e),Cu),this.onlineState="Unknown",this.x_=new Set}}async function WD(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qD),i)try{s.M_=await n.onListen(r)}catch(o){const a=mp(o,`Initialization of query '${cd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.O_(n.onlineState),s.M_&&e.N_(s.M_)&&gp(n)}async function KD(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function QD(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&gp(n)}function GD(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function gp(t){t.x_.forEach(e=>{e.next()})}class YD{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ui(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.key=e}}class bw{constructor(e){this.key=e}}class XD{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=q(),this.mutatedKeys=q(),this.ta=iw(e),this.na=new Ai(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new ay,i=n?n.na:this.na;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=ku(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),_=!0):this.oa(d,p)||(r.track({type:2,doc:p}),_=!0,(l&&this.ta(p,l)>0||u&&this.ta(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),_=!0):d&&!p&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((u,c)=>function(d,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return y(d)-y(p)}(u.type,c.type)||this.ta(u.doc,c.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,l=a!==this.X_;return this.X_=a,s.length!==0||l?{snapshot:new Ui(this.query,e.na,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new ay,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=q(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new bw(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new Fw(r))}),n}la(e){this.Z_=e.ss,this.ea=q();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return Ui.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class JD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZD{constructor(e){this.key=e,this.Pa=!1}}class eO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Gi(a=>rw(a),Cu),this.Ea=new Map,this.da=new Set,this.Aa=new ce(V.comparator),this.Ra=new Map,this.Va=new lp,this.ma={},this.fa=new Map,this.ga=bi.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function tO(t,e){const n=hO(t);let r,i;const s=n.Ta.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await TD(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await nO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Nw(n.remoteStore,o)}return i}async function nO(t,e,n,r,i){t.ya=(h,d,p)=>async function(v,_,m,f){let g=_.view.ia(m);g.zi&&(g=await ry(v.localStore,_.query,!1).then(({documents:I})=>_.view.ia(I,g)));const E=f&&f.targetChanges.get(_.targetId),T=_.view.applyChanges(g,v.isPrimaryClient,E);return uy(v,_.targetId,T.ua),T.snapshot}(t,h,d,p);const s=await ry(t.localStore,e,!0),o=new XD(e,s.ss),a=o.ia(s.documents),l=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);uy(t,n,u.ua);const c=new JD(e,n,o);return t.Ta.set(e,c),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),u.snapshot}async function rO(t,e){const n=z(t),r=n.Ta.get(e),i=n.Ea.get(r.targetId);if(i.length>1)return n.Ea.set(r.targetId,i.filter(s=>!Cu(s,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await md(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Dw(n.remoteStore,r.targetId),gd(n,r.targetId)}).catch(Fo)):(gd(n,r.targetId),await md(n.localStore,r.targetId,!0))}async function iO(t,e,n){const r=dO(t);try{const i=await function(o,a){const l=z(o),u=Te.now(),c=a.reduce((p,y)=>p.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Tn(),v=q();return l.Xi.getEntries(p,c).next(_=>{y=_,y.forEach((m,f)=>{f.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(_=>{h=_;const m=[];for(const f of a){const g=CN(f,h.get(f.key).overlayedDocument);g!=null&&m.push(new ur(f.key,g,YE(g.value.mapValue),Xt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(_=>{d=_;const m=_.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(p,_.batchId,m)})}).then(()=>({batchId:d.batchId,changes:ow(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ma[o.currentUser.toKey()];u||(u=new ce(G)),u=u.insert(a,l),o.ma[o.currentUser.toKey()]=u}(r,i.batchId,n),await Bo(r,i.changes),await Mu(r.remoteStore)}catch(i){const s=mp(i,"Failed to persist write");n.reject(s)}}async function Uw(t,e){const n=z(t);try{const r=await _D(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ra.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?se(o.Pa):i.removedDocuments.size>0&&(se(o.Pa),o.Pa=!1))}),await Bo(n,r,e)}catch(r){await Fo(r)}}function ly(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.O_(a)&&(u=!0)}),u&&gp(l)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sO(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new ce(V.comparator);o=o.insert(s,Ue.newNoDocument(s,$.min()));const a=q().add(s),l=new Ou($.min(),new Map,new ce(G),o,a);await Uw(r,l),r.Aa=r.Aa.remove(s),r.Ra.delete(e),yp(r)}else await md(r.localStore,e,!1).then(()=>gd(r,e,n)).catch(Fo)}async function oO(t,e){const n=z(t),r=e.batch.batchId;try{const i=await vD(n.localStore,e);jw(n,r,null),$w(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bo(n,i)}catch(i){await Fo(i)}}async function aO(t,e,n){const r=z(t);try{const i=await function(o,a){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(se(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);jw(r,e,n),$w(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bo(r,i)}catch(i){await Fo(i)}}function $w(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function jw(t,e,n){const r=z(t);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||Bw(t,r)})}function Bw(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(Dw(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),yp(t))}function uy(t,e,n){for(const r of n)r instanceof Fw?(t.Va.addReference(r.key,e),lO(t,r)):r instanceof bw?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||Bw(t,r.key)):U()}function lO(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(O("SyncEngine","New document in limbo: "+n),t.da.add(r),yp(t))}function yp(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new V(de.fromString(e)),r=t.ga.next();t.Ra.set(r,new ZD(n)),t.Aa=t.Aa.insert(n,r),Nw(t.remoteStore,new Un(wn(rp(n.path)),r,"TargetPurposeLimboResolution",Xf.ae))}}async function Bo(t,e,n){const r=z(t),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,l)=>{o.push(r.ya(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=cp.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(l,u){const c=z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,d=>A.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!bo(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(d,v)}}}(r.localStore,s))}async function uO(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await Rw(n.localStore,e);n.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(l=>{l.reject(new x(w.CANCELLED,o))})}),s.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bo(n,r.ts)}}function cO(t,e){const n=z(t),r=n.Ra.get(e);if(r&&r.Pa)return q().add(r.key);{let i=q();const s=n.Ea.get(e);if(!s)return i;for(const o of s){const a=n.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}function hO(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sO.bind(null,e),e.Ia.n_=QD.bind(null,e.eventManager),e.Ia.wa=GD.bind(null,e.eventManager),e}function dO(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aO.bind(null,e),e}class cy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yD(this.persistence,new mD,e.initialUser,this.serializer)}createPersistence(e){return new fD(up.zr,this.serializer)}createSharedClientState(e){return new SD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ly(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uO.bind(null,this.syncEngine),await zD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HD}()}createDatastore(e){const n=xu(e.databaseInfo.databaseId),r=function(s){return new CD(s)}(e.databaseInfo);return function(s,o,a,l){return new DD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ly(this.syncEngine,n,0),function(){return sy.v()?new sy:new AD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new eO(i,s,o,a,l,u);return c&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=z(n);O("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await jo(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=KE.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Rw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yO(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>oy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>oy(e.remoteStore,s)),t._onlineComponents=e}function gO(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!gO(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new cy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new cy);return t._offlineComponents}async function zw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await hy(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await hy(t,new fO))),t._onlineComponents}function vO(t){return zw(t).then(e=>e.syncEngine)}async function _O(t){const e=await zw(t),n=e.eventManager;return n.onListen=tO.bind(null,e.syncEngine),n.onUnlisten=rO.bind(null,e.syncEngine),n}function EO(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new pO({next:d=>{o.enqueueAndForget(()=>KD(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new x(w.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new x(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new YD(rp(a.path),c,{includeMetadataChanges:!0,U_:!0});return WD(s,h)}(await _O(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t,e,n){if(!n)throw new x(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TO(t,e,n,r){if(e===!0&&r===!0)throw new x(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fy(t){if(!V.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function $i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vp(t);throw new x(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hw{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bk;switch(r.type){case"firstParty":return new jk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dy.get(n);r&&(O("ComponentProvider","Removing Datastore"),dy.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _p(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new go(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class go extends _p{constructor(e,n,r){super(e,n,rp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new V(e))}withConverter(e){return new go(this.firestore,e,this._path)}}function $c(t,e,...n){if(t=We(t),arguments.length===1&&(e=KE.V()),wO("doc","path",e),t instanceof Hw){const r=de.fromString(e,...n);return fy(r),new gt(t,null,new V(r))}{if(!(t instanceof gt||t instanceof go))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return fy(r),new gt(t.firestore,t instanceof go?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Cw(this,"async_queue_retry"),this.Za=()=>{const n=bc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new Yn;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!bo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw En("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const i=pp.createAndSchedule(this,e,n,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&U()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}class Lu extends Hw{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new IO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kw(this),this._firestoreClient.terminate()}}function SO(t,e,n){n||(n="(default)");const r=au(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Gs(s,e))return i;throw new x(w.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new x(w.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Ww(t){return t._firestoreClient||Kw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kw(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Zk(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,qw(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new mO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(Ke.fromBase64String(e))}catch(n){throw new x(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ji(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=/^__.*__$/;class RO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class Qw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Tp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Tp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return Ml(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(Gw(this.au)&&AO.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class PO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xu(e)}Au(e,n,r,i=!1){return new Tp({au:e,methodName:n,du:r,path:$e.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yw(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new PO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CO(t,e,n,r,i,s={}){const o=t.Au(s.merge||s.mergeFields?2:0,e,n,i);Ip("Data must be an object, but it was:",o,r);const a=Xw(r,o);let l,u;if(s.merge)l=new pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=yd(e,h,n);if(!o.contains(d))throw new x(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zw(c,d)||c.push(d)}l=new pt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new RO(new it(a),l,u)}class bu extends Ep{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bu}}function kO(t,e,n,r){const i=t.Au(1,e,n);Ip("Data must be an object, but it was:",i,r);const s=[],o=it.empty();Wr(r,(l,u)=>{const c=Sp(e,l,n);u=We(u);const h=i.Pu(c);if(u instanceof bu)s.push(c);else{const d=Uu(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new pt(s);return new Qw(o,a,i.fieldTransforms)}function NO(t,e,n,r,i,s){const o=t.Au(1,e,n),a=[yd(e,r,n)],l=[i];if(s.length%2!=0)throw new x(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(yd(e,s[d])),l.push(s[d+1]);const u=[],c=it.empty();for(let d=a.length-1;d>=0;--d)if(!Zw(u,a[d])){const p=a[d];let y=l[d];y=We(y);const v=o.Pu(p);if(y instanceof bu)u.push(p);else{const _=Uu(y,v);_!=null&&(u.push(p),c.set(p,_))}}const h=new pt(u);return new Qw(c,h,o.fieldTransforms)}function Uu(t,e){if(Jw(t=We(t)))return Ip("Unsupported field value:",e,t),Xw(t,e);if(t instanceof Ep)return function(r,i){if(!Gw(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Uu(a,i.Iu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:xl(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xl(i.serializer,s)}}if(r instanceof wp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ji)return{bytesValue:Ew(i.serializer,r._byteString)};if(r instanceof gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ap(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${vp(r)}`)}(t,e)}function Xw(t,e){const n={};return QE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,i)=>{const s=Uu(i,e.cu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Jw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof wp||t instanceof ji||t instanceof gt||t instanceof Ep)}function Ip(t,e,n){if(!Jw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vp(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function yd(t,e,n){if((e=We(e))instanceof Fu)return e._internalPath;if(typeof e=="string")return Sp(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const DO=new RegExp("[~\\*/\\[\\]]");function Sp(t,e,n){if(e.search(DO)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(w.INVALID_ARGUMENT,a+t+l)}function Zw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OO extends eT{data(){return super.data()}}function tT(t,e){return typeof e=="string"?Sp(t,e):e instanceof Fu?e._internalPath:e._delegate._internalPath}class xO{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wp(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);se(Aw(r));const i=new ho(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||En(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nT extends eT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new LO(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class LO extends nT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){t=$i(t,gt);const e=$i(t.firestore,Lu);return EO(Ww(e),t._key).then(n=>jO(e,t,n))}class bO extends xO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function UO(t,e,n){t=$i(t,gt);const r=$i(t.firestore,Lu),i=VO(t.converter,e,n);return rT(r,[CO(Yw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xt.none())])}function $O(t,e,n,...r){t=$i(t,gt);const i=$i(t.firestore,Lu),s=Yw(i);let o;return o=typeof(e=We(e))=="string"||e instanceof Fu?NO(s,"updateDoc",t._key,e,n,r):kO(s,"updateDoc",t._key,e),rT(i,[o.toMutation(t._key,Xt.exists(!0))])}function rT(t,e){return function(r,i){const s=new Yn;return r.asyncQueue.enqueueAndForget(async()=>iO(await vO(r),i,s)),s.promise}(Ww(t),e)}function jO(t,e,n){const r=n.docs.get(e._key),i=new bO(t);return new nT(t,i,e._key,r,new MO(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Qi=i})(jr),xr(new er("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Lu(new Uk(r.getProvider("auth-internal")),new zk(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Qt(Lg,"4.0.0",e),Qt(Lg,"4.0.0","esm2017")})();var BO="firebase",zO="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(BO,zO,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebasestorage.googleapis.com",qO="storageBucket",HO=2*60*1e3,WO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends nn{constructor(e,n,r=0){super(jc(e),`Firebase Storage: ${n} (${jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tn||(tn={}));function jc(t){return"storage/"+t}function KO(){const t="An unknown error occurred, please check the error payload for server response.";return new rn(tn.UNKNOWN,t)}function QO(){return new rn(tn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function GO(){return new rn(tn.CANCELED,"User canceled the upload/download.")}function YO(t){return new rn(tn.INVALID_URL,"Invalid URL '"+t+"'.")}function XO(t){return new rn(tn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function my(t){return new rn(tn.INVALID_ARGUMENT,t)}function sT(){return new rn(tn.APP_DELETED,"The Firebase app was deleted.")}function JO(t){return new rn(tn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw XO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===iT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const T=g[E],I=T.regex.exec(e);if(I){const C=I[T.indices.bucket];let D=I[T.indices.path];D||(D=""),r=new Vt(C,D),T.postModify(r);break}}if(r==null)throw YO(e);return r}}class ZO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function d(){s&&clearTimeout(s)}function p(_,...m){if(u){d();return}if(_){d(),c.call(null,_,...m);return}if(l()||o){d(),c.call(null,_,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(_){y||(y=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function tx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(t){return t!==void 0}function gy(t,e,n,r){if(r<e)throw my(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw my(`Invalid value for '${t}'. Expected ${n} or less.`)}function rx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ll;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ll||(Ll={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new va(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ll.NO_ERROR,l=s.getStatus();if(!a||ix(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ll.ABORT;r(!1,new va(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new va(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());nx(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=KO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?sT():GO();o(l)}else{const l=QO();o(l)}};this.canceled_?n(!1,new va(!1,null,!0)):this.backoffId_=ex(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class va{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ox(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ax(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ux(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cx(t,e,n,r,i,s,o=!0){const a=rx(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return lx(u,e),ox(u,n),ax(u,s),ux(u,r),new sx(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fl(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dx(this._location.path)}get storage(){return this._service}get parent(){const e=hx(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new Fl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JO(e)}}function yy(t,e){const n=e==null?void 0:e[qO];return n==null?null:Vt.makeFromBucketSpec(n,t)}function fx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:rA(i,t.app.options.projectId))}class px{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=iT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HO,this._maxUploadRetryTime=WO,this._requests=new Set,i!=null?this._bucket=Vt.makeFromBucketSpec(i,this._host):this._bucket=yy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=yy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fl(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new ZO(sT());{const o=cx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const vy="@firebase/storage",_y="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="storage";function mx(t=u0(),e){t=We(t);const r=au(t,oT).getImmediate({identifier:e}),i=tA("storage");return i&&gx(r,...i),r}function gx(t,e,n,r={}){fx(t,e,n,r)}function yx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new px(n,r,i,e,jr)}function vx(){xr(new er(oT,yx,"PUBLIC").setMultipleInstances(!0)),Qt(vy,_y,""),Qt(vy,_y,"esm2017")}vx();const _x={apiKey:"AIzaSyBrnrNpVffegyezB66YhBytcYIuNCFZ7j8",authDomain:"fashion-e-commerce-2c18d.firebaseapp.com",projectId:"fashion-e-commerce-2c18d",storageBucket:"fashion-e-commerce-2c18d.appspot.com",messagingSenderId:"527821318306",appId:"1:527821318306:web:1a2ce4eb6f7335b21f4ffb",measurementId:"G-YJVTVS68LG"},$u=l0(_x),Ex=kC($u),wx=SO($u,{experimentalForceLongPolling:!0}),Tx=mx($u),ju=N.createContext(),Ix=({children:t})=>{const e={app:$u,auth:Ex,db:wx,storage:Tx};return F.jsx(ju.Provider,{value:e,children:t})},Qr=N.createContext(),Sx=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(null),[s,o]=N.useState(null);console.log("error",s);const{auth:a,db:l}=N.useContext(ju),u=async(y,v)=>{o(null);try{await pP(a,y,v),n(a.currentUser)}catch(_){o(_.message)}},c=async()=>{o(null);try{await yP(a),n(null)}catch(y){o(y.message)}},h=async(y,v)=>{o(null);try{return await UO($c(l,"users",y.uid),v)}catch(_){o(_.message)}},d=async(y,v)=>{o(null);try{const _=$c(l,"users",e.uid);await $O(_,{[y]:v})}catch(_){o(_.message)}};N.useEffect(()=>{e&&(async()=>{try{const v=$c(l,"users",e.uid),_=await FO(v);i(_.data())}catch(v){o(v.message)}})()},[e,l]);const p={user:e,profile:r,error:s,setError:o,login:u,logout:c,setUserData:h,updateUserField:d};return F.jsx(Qr.Provider,{value:p,children:t})},Ey=({children:t,className:e,...n})=>{const r="bg-primary hover:bg-secondary text-white hover:font-bold py-2 px-4 rounded",i=e?r+" "+e:r;return F.jsx("button",{className:i,...n,children:t})};var aT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wy=ot.createContext&&ot.createContext(aT),Xn=globalThis&&globalThis.__assign||function(){return Xn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Xn.apply(this,arguments)},Ax=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function lT(t){return t&&t.map(function(e,n){return ot.createElement(e.tag,Xn({key:n},e.attr),lT(e.child))})}function uT(t){return function(e){return ot.createElement(Rx,Xn({attr:Xn({},t.attr)},e),lT(t.child))}}function Rx(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=Ax(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ot.createElement("svg",Xn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Xn(Xn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ot.createElement("title",null,s),t.children)};return wy!==void 0?ot.createElement(wy.Consumer,null,function(n){return e(n)}):e(aT)}function Px(t){return uT({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(t)}function Cx(t){return uT({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(t)}const kx=({togglePasswordVisibility:t,showPass:e})=>F.jsx("button",{type:"button",className:"absolute top-1/2 right-4 transform -translate-y-1/2",onClick:t,style:{zIndex:1},children:e?F.jsx(Px,{}):F.jsx(Cx,{})}),cT=({name:t,type:e,placeholder:n,value:r,onChange:i,onBlur:s,error:o,className:a})=>{const l="bg-gray-200 border rounded py-2 px-4",u="border-red-500 bg-red-100 focus:ring-red-500 focus:border-red-500",c=a?`${l} ${a}`:l,h=o?`${c} ${u}`:c;return F.jsx("input",{name:t,type:e,placeholder:n,value:r,onChange:i,onBlur:s,className:h})},Nx=({name:t,placeholder:e,value:n,onChange:r,onBlur:i,error:s,className:o})=>{const[a,l]=N.useState(!1),u=()=>{l(h=>!h)},c=a?"text":"password";return F.jsxs("div",{className:"relative",children:[F.jsx(cT,{name:t,placeholder:e,value:n,onChange:r,onBlur:i,error:s,className:o,type:c}),F.jsx(kx,{togglePasswordVisibility:u,showPass:a})]})},Ap=({fields:t,submitButtonText:e,additionalButtons:n,onSubmit:r,title:i})=>{const{error:s}=N.useContext(Qr);return F.jsxs("form",{className:"flex flex-col gap-4 min-w-[20rem] max-w-[35rem]",onSubmit:r,children:[F.jsx("h2",{className:"text-center mb-1 mt-1 text-lg font-bold",children:i}),t.map(o=>{const{key:a,value:l,validValue:u,error:c,onChange:h,onBlur:d,...p}=o,y={key:a,value:l,onChange:h,onBlur:d,error:c,valid:u,...p};return o.type==="password"?F.jsxs("div",{children:[F.jsx(Nx,{...y}),c&&F.jsx("p",{className:"text-red-500",children:y.errmsg})]},a):F.jsxs("div",{children:[F.jsx(cT,{...y}),c&&F.jsx("p",{className:"text-red-500",children:y.errmsg})]},a)}),s&&F.jsx("p",{className:"text-red-500",children:s}),F.jsxs("div",{className:"flex flex-col xxl:flex-row gap-2",children:[F.jsx(Ey,{type:"submit",className:"min-w-[8rem] max-h-[2.5rem]",children:e}),n&&n.map((o,a)=>F.jsx(Ey,{type:o.type,onClick:o.onClick,className:o.className?o.className:" ",children:o.label},a))]})]})},Dx=t=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_'])[\w@$!%*?&']{8,}$/.test(t),Ty=t=>{const e=/\d/.test(t);return t.length>1&&t.trim()!==""&&!e},Rp=t=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t),Ox=(t,e)=>t===e,xx=t=>{const[e,n]=N.useState(""),[r,i]=N.useState(!1),s=t(e);return{inputValue:e,validValue:s,error:!s&&r,inputChangeHandler:c=>{n(c.target.value)},inputBlurHandler:()=>{i(!0)},reset:()=>{n(""),i(!1)}}},bl=(t,e,n,r,i={})=>{const{inputValue:s,validValue:o,error:a,inputChangeHandler:l,inputBlurHandler:u,reset:c}=xx(r);return{name:t,type:e,placeholder:n,key:t,value:s,validValue:o,error:a,onChange:l,onBlur:u,reset:c,...i}},wt=(t,e,n)=>t.find(i=>i.name===e)[n],Vx=({switchForm:t,openForgotForm:e})=>{const{login:n,setError:r}=N.useContext(Qr),i=async c=>{c.preventDefault(),r(null);const h=wt(u,"email","value"),d=wt(u,"password","value");try{await n(h,d)}catch(p){r(p.message)}},s=()=>{r(null),e()},a=[{name:"email",type:"email",placeholder:"E-mail",validateValue:Rp,additionalProps:{errmsg:"Please enter a valid email",className:"w-full"}},{name:"password",type:"password",placeholder:"Password",validateValue:()=>!0,additionalProps:{errmsg:"Password is invalid. Forgotten your password? Click button below",className:"w-full"}}],l=[{label:"Forgot Password?",type:"button",onClick:s,className:"min-w-[8rem] max-h-[2.5rem]"},{label:"Register Account",type:"button",onClick:t,className:"min-w-[8rem] max-h-[2.5rem]"}],u=a.map(({name:c,type:h,placeholder:d,validateValue:p,additionalProps:y})=>bl(c,h,d,p,y));return F.jsx(Ap,{title:"Sign In",fields:u,submitButtonText:"Submit",additionalButtons:l,onSubmit:i})},Mx=({switchForm:t})=>{const{auth:e}=N.useContext(ju),{login:n,setUserData:r,setError:i}=N.useContext(Qr),s=async d=>{d.preventDefault(),i(null);const p=wt(c,"firstName","error"),y=wt(c,"lastName","error"),v=wt(c,"email","error"),_=wt(c,"password","error"),m=wt(c,"confirmPassword","error");if(p||y||v||_||m)throw new Error("Invalid form");const f=wt(c,"firstName","value"),g=wt(c,"lastName","value"),E=wt(c,"email","value"),T=wt(c,"password","value");try{await fP(e,E,T);const I={firstName:f,lastName:g,email:E};await r(e.currentUser,I),await n(E,T)}catch(I){i(I.message)}},o=()=>{i(null),t()},a=bl("password","password","Password",Dx,{errmsg:"Your password should be a minimum of 8 characters long and must include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.",className:"w-full"}),{value:l}=a,c=[{name:"firstName",type:"text",placeholder:"First Name",validateValue:Ty,additionalProps:{errmsg:"Please enter a valid name (minimum 2 characters)",className:"w-full"}},{name:"lastName",type:"text",placeholder:"Last Name",validateValue:Ty,additionalProps:{errmsg:"Please enter a valid name (minimum 2 characters)",className:"w-full"}},{name:"email",type:"email",placeholder:"E-mail",validateValue:Rp,additionalProps:{errmsg:"Please enter a valid email",className:"w-full"}},{name:"confirmPassword",type:"password",placeholder:"Confirm Password",validateValue:d=>Ox(d,l),additionalProps:{errmsg:"Password does not match.",className:"w-full"}}].map(({name:d,type:p,placeholder:y,validateValue:v,additionalProps:_={}})=>bl(d,p,y,v,_));c.splice(3,0,a);const h=[{label:"Have an account? Sign In",type:"button",onClick:o,className:"min-w-[8rem] max-h-[2.5rem]"}];return F.jsx(Ap,{title:"Register an Account",fields:c,submitButtonText:"Submit",onSubmit:s,additionalButtons:h})},Lx=({openForgotForm:t})=>{const{auth:e}=N.useContext(ju),{setError:n}=N.useContext(Qr),r=async l=>{l.preventDefault(),n(null);const u=wt(a,"email","value");try{await dP(e,u)}catch(c){n(c.message)}},i=()=>{n(null),t()},s=[{name:"email",type:"email",placeholder:"E-mail",validateValue:Rp,additionalProps:{errmsg:"Please enter a valid email",className:"w-full"}}],o=[{label:"Sign In",type:"button",onClick:i,className:"min-w-[8rem] max-h-[2.5rem]"}],a=s.map(({name:l,type:u,placeholder:c,validateValue:h,additionalProps:d})=>bl(l,u,c,h,d));return F.jsx(Ap,{title:"Reset Password",fields:a,submitButtonText:"Send Reset Email",additionalButtons:o,onSubmit:r})},Fx=({children:t,className:e})=>{const n="shadow-lg mx-auto rounded-lg p-6",r=e?n+" "+e:n;return F.jsx("div",{className:r,children:t})},bx="/assets/u0hlhegr-023b4ecb.png",Ux=()=>{const[t,e]=N.useState(!1),[n,r]=N.useState(!1),{setError:i}=N.useContext(Qr),s=()=>{i(null),e(a=>!a)},o=()=>{i(null),r(a=>!a)};return F.jsx("div",{className:"flex h-screen overflow-hidden bg-gradient-to-l from-primary to-secondary relative",children:F.jsx("div",{className:"flex justify-center items-center flex-1",children:F.jsxs("div",{className:"w-full lg:w-2/3 lg:flex",children:[F.jsx("div",{className:"w-full xl:w-1/2 flex justify-center mb-4 lg:h-full",children:F.jsxs("div",{className:"rounded-lg overflow-hidden max-w-[35rem] w-full object-cover lg:mr-4 sm:mr-0 lg:min-h-[35rem] h-40 lg:rounded-full text-center drop-shadow-xl",children:[F.jsx("h1",{className:"font-bold lg:text-xl text-2xl mb-2 text-white tracking-wide mt-2",children:"Omni Market"}),F.jsx("img",{src:bx,alt:"Shop knolling image",className:"h-full w-full object-cover"})]})}),F.jsx("div",{className:"w-full lg:w-1/2 flex justify-center items-center",children:F.jsx(Fx,{className:"bg-white w-full min-w-[25rem] max-w-[35rem] lg:ml-8",children:n?F.jsx(Lx,{openForgotForm:o}):t?F.jsx(Vx,{switchForm:s,openForgotForm:o}):F.jsx(Mx,{switchForm:s})})})]})})})};function $x(){return N.useContext(Qr),F.jsx(HS,{children:F.jsx(Z_,{path:"/",element:F.jsx(Ux,{})})})}Bc.createRoot(document.getElementById("root")).render(F.jsx(ot.StrictMode,{children:F.jsx(Ix,{children:F.jsx(Sx,{children:F.jsx(lS,{client:new rS,children:F.jsx(KS,{children:F.jsx($x,{})})})})})}));

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3642],{86712:function(e,t,l){l.d(t,{j:function(){return c}});var i=l(27246),n=(0,l(12813).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),r=l(2265),o=l(72243),s=l(57437),a=(0,o.Gp)((e,t)=>{let{Component:l,getDividerProps:o}=function(e){var t;let l,o;let{as:s,className:a,orientation:c,...u}=e,d=s||"hr";"hr"===d&&"vertical"===c&&(d="div");let{separatorProps:f}=(t={elementType:"string"==typeof d?d:"hr",orientation:c},o=(0,i.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(l="vertical"),"hr"!==t.elementType)?{separatorProps:{...o,role:"separator","aria-orientation":l}}:{separatorProps:o}),h=(0,r.useMemo)(()=>n({orientation:c,className:a}),[c,a]);return{Component:d,getDividerProps:(0,r.useCallback)((e={})=>({className:h,role:"separator","data-orientation":c,...f,...u,...e}),[h,c,f,u])}}({...e});return(0,s.jsx)(l,{ref:t,...o()})});a.displayName="NextUI.Divider";var c=a},16983:function(e,t,l){l.d(t,{d:function(){return n}});var i=l(25348);class n{isDisabled(e){var t;return"all"===this.disabledBehavior&&((null===(t=e.props)||void 0===t?void 0:t.isDisabled)||this.disabledKeys.has(e.key))}getNextKey(e){for(e=this.collection.getKeyAfter(e);null!=e;){let t=this.collection.getItem(e);if("item"===t.type&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);null!=e;){let t=this.collection.getItem(e);if("item"===t.type&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,l){let i=this.getItem(e);if(!i)return null;let n=i.getBoundingClientRect();do e=t(e),i=this.getItem(e);while(i&&l(n,i.getBoundingClientRect()));return e}isSameRow(e,t){return e.top===t.top||e.left!==t.left}isSameColumn(e,t){return e.left===t.left||e.top!==t.top}getKeyBelow(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"rtl"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):null}getKeyLeftOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"ltr"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):null}getFirstKey(){let e=this.collection.getFirstKey();for(;null!=e;){let t=this.collection.getItem(e);if((null==t?void 0:t.type)==="item"&&!this.isDisabled(t))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;null!=e;){let t=this.collection.getItem(e);if("item"===t.type&&!this.isDisabled(t))return e;e=this.collection.getKeyBefore(e)}return null}getItem(e){return null!==e?this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`):null}getKeyPageAbove(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,i.a)(t))return this.getFirstKey();let n=t.getBoundingClientRect(),r=l.getBoundingClientRect();if("horizontal"===this.orientation){let i=n.x-t.scrollLeft,o=Math.max(0,r.x-i+r.width-n.width);for(;l&&r.x-i>o;)r=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let i=n.y-t.scrollTop,o=Math.max(0,r.y-i+r.height-n.height);for(;l&&r.y-i>o;)r=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,i.a)(t))return this.getLastKey();let n=t.getBoundingClientRect(),r=l.getBoundingClientRect();if("horizontal"===this.orientation){let i=n.x-t.scrollLeft,o=Math.min(t.scrollWidth,r.x-i-r.width+n.width);for(;l&&r.x-i<o;)r=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let i=n.y-t.scrollTop,o=Math.min(t.scrollHeight,r.y-i-r.height+n.height);for(;l&&r.y-i<o;)r=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let l=this.collection,i=t||this.getFirstKey();for(;null!=i;){let t=l.getItem(i),n=t.textValue.slice(0,e.length);if(t.textValue&&0===this.collator.compare(n,e))return i;i=this.getKeyBelow(i)}return null}constructor(...e){if(1===e.length){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||"all",this.orientation=t.orientation,this.direction=t.direction,this.layout=t.layout||"stack"}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all";"stack"===this.layout&&"vertical"===this.orientation&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}},84350:function(e,t,l){l.d(t,{g:function(){return K}});var i=l(6832),n=l(4300),r=l(54887),o=l(2265),s=l(6396),a=l(55691),c=l(18311),u=l(40852),d=l(8047),f=l(98536),h=l(82457),y=l(45246),g=l(25311);function K(e){let t,{selectionManager:l,keyboardDelegate:K,ref:p,autoFocus:v=!1,shouldFocusWrap:m=!1,disallowEmptySelection:b=!1,disallowSelectAll:w=!1,selectOnFocus:S="replace"===l.selectionBehavior,disallowTypeAhead:k=!1,shouldUseVirtualFocus:C,allowsTabNavigation:F=!1,isVirtualized:B,scrollRef:D=p,linkBehavior:I="action"}=e,{direction:L}=(0,g.j)(),x=(0,c.tv)(),P=(0,o.useRef)({top:0,left:0});(0,d.z)(D,"scroll",B?null:()=>{P.current={top:D.current.scrollTop,left:D.current.scrollLeft}});let T=(0,o.useRef)(v);(0,o.useEffect)(()=>{if(T.current){let e=null;"first"===v&&(e=K.getFirstKey()),"last"===v&&(e=K.getLastKey());let t=l.selectedKeys;if(t.size){for(let i of t)if(l.canSelectItem(i)){e=i;break}}l.setFocused(!0),l.setFocusedKey(e),null!=e||C||(0,a.e)(p.current)}},[]);let R=(0,o.useRef)(l.focusedKey);(0,o.useEffect)(()=>{let e=(0,y.Jz)();if(l.isFocused&&null!=l.focusedKey&&(null==D?void 0:D.current)){let t=D.current.querySelector(`[data-key="${CSS.escape(l.focusedKey.toString())}"]`);t&&("keyboard"===e||T.current)&&(B||(0,f.z)(D.current,t),"virtual"!==e&&(0,f.G)(t,{containingElement:p.current}))}l.isFocused&&null==l.focusedKey&&null!=R.current&&(0,a.e)(p.current),R.current=l.focusedKey,T.current=!1},[B,D,l.focusedKey,l.isFocused,p]);let N={onKeyDown:e=>{var t,n,o,a,c,d,f,h;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!p.current.contains(e.target))return;let y=(t,n)=>{if(null!=t){if(l.isLink(t)&&"selection"===I&&S&&!(0,i.F)(e)){(0,r.flushSync)(()=>{l.setFocusedKey(t,n)});let i=D.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`),o=l.getItemProps(t);x.open(i,e,o.href,o.routerOptions);return}l.setFocusedKey(t,n),l.isLink(t)&&"override"===I||(e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):S&&!(0,i.F)(e)&&l.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(K.getKeyBelow){e.preventDefault();let i=null!=l.focusedKey?K.getKeyBelow(l.focusedKey):null===(t=K.getFirstKey)||void 0===t?void 0:t.call(K);null==i&&m&&(i=null===(n=K.getFirstKey)||void 0===n?void 0:n.call(K,l.focusedKey)),y(i)}break;case"ArrowUp":if(K.getKeyAbove){e.preventDefault();let t=null!=l.focusedKey?K.getKeyAbove(l.focusedKey):null===(o=K.getLastKey)||void 0===o?void 0:o.call(K);null==t&&m&&(t=null===(a=K.getLastKey)||void 0===a?void 0:a.call(K,l.focusedKey)),y(t)}break;case"ArrowLeft":if(K.getKeyLeftOf){e.preventDefault();let t=K.getKeyLeftOf(l.focusedKey);null==t&&m&&(t="rtl"===L?null===(c=K.getFirstKey)||void 0===c?void 0:c.call(K,l.focusedKey):null===(d=K.getLastKey)||void 0===d?void 0:d.call(K,l.focusedKey)),y(t,"rtl"===L?"first":"last")}break;case"ArrowRight":if(K.getKeyRightOf){e.preventDefault();let t=K.getKeyRightOf(l.focusedKey);null==t&&m&&(t="rtl"===L?null===(f=K.getLastKey)||void 0===f?void 0:f.call(K,l.focusedKey):null===(h=K.getFirstKey)||void 0===h?void 0:h.call(K,l.focusedKey)),y(t,"rtl"===L?"last":"first")}break;case"Home":if(K.getFirstKey){e.preventDefault();let t=K.getFirstKey(l.focusedKey,(0,i.y)(e));l.setFocusedKey(t),(0,i.y)(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):S&&l.replaceSelection(t)}break;case"End":if(K.getLastKey){e.preventDefault();let t=K.getLastKey(l.focusedKey,(0,i.y)(e));l.setFocusedKey(t),(0,i.y)(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):S&&l.replaceSelection(t)}break;case"PageDown":K.getKeyPageBelow&&(e.preventDefault(),y(K.getKeyPageBelow(l.focusedKey)));break;case"PageUp":K.getKeyPageAbove&&(e.preventDefault(),y(K.getKeyPageAbove(l.focusedKey)));break;case"a":(0,i.y)(e)&&"multiple"===l.selectionMode&&!0!==w&&(e.preventDefault(),l.selectAll());break;case"Escape":b||0===l.selectedKeys.size||(e.stopPropagation(),e.preventDefault(),l.clearSelection());break;case"Tab":if(!F){if(e.shiftKey)p.current.focus();else{let e,t,l=(0,s.QL)(p.current,{tabbable:!0});do(t=l.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,u.A)(e)}}}},onFocus:e=>{if(l.isFocused){e.currentTarget.contains(e.target)||l.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(l.setFocused(!0),null==l.focusedKey){var t,i;let n=e=>{null!=e&&(l.setFocusedKey(e),S&&l.replaceSelection(e))},r=e.relatedTarget;r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?n(null!==(t=l.lastSelectedKey)&&void 0!==t?t:K.getLastKey()):n(null!==(i=l.firstSelectedKey)&&void 0!==i?i:K.getFirstKey())}else B||(D.current.scrollTop=P.current.top,D.current.scrollLeft=P.current.left);if(!B&&null!=l.focusedKey){let e=D.current.querySelector(`[data-key="${CSS.escape(l.focusedKey.toString())}"]`);e&&(e.contains(document.activeElement)||(0,u.A)(e),"keyboard"===(0,y.Jz)()&&(0,f.G)(e,{containingElement:p.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l.setFocused(!1)},onMouseDown(e){D.current===e.target&&e.preventDefault()}},{typeSelectProps:A}=(0,n.i)({keyboardDelegate:K,selectionManager:l});return k||(N=(0,h.d)(A,N)),C||(t=null==l.focusedKey?0:-1),{collectionProps:{...N,tabIndex:t}}}},75878:function(e,t,l){l.d(t,{_:function(){return s}});var i=l(84350),n=l(16983),r=l(46468),o=l(2265);function s(e){let{selectionManager:t,collection:l,disabledKeys:s,ref:a,keyboardDelegate:c}=e,u=(0,r.X)({usage:"search",sensitivity:"base"}),d=t.disabledBehavior,f=(0,o.useMemo)(()=>c||new n.d({collection:l,disabledKeys:s,disabledBehavior:d,ref:a,collator:u}),[c,l,s,a,u,d]),{collectionProps:h}=(0,i.g)({...e,ref:a,selectionManager:t,keyboardDelegate:f});return{listProps:h}}},4300:function(e,t,l){l.d(t,{i:function(){return n}});var i=l(2265);function n(e){let{keyboardDelegate:t,selectionManager:l,onTypeSelect:n}=e,r=(0,i.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var i;let o=1!==(i=e.key).length&&/^[A-Z]/i.test(i)?"":i;if(!o||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==o||!(r.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),r.search+=o;let s=t.getKeyForSearch(r.search,l.focusedKey);null==s&&(s=t.getKeyForSearch(r.search)),null!=s&&(l.setFocusedKey(s),n&&n(s)),clearTimeout(r.timeout),r.timeout=setTimeout(()=>{r.search=""},1e3)}:null}}}},6832:function(e,t,l){l.d(t,{F:function(){return n},y:function(){return r}});var i=l(65463);function n(e){return(0,i.ad)()?e.altKey:e.ctrlKey}function r(e){return(0,i.V5)()?e.metaKey:e.ctrlKey}},25348:function(e,t,l){l.d(t,{a:function(){return i}});function i(e,t){let l=window.getComputedStyle(e),i=/(auto|scroll)/.test(l.overflow+l.overflowX+l.overflowY);return i&&t&&(i=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),i}},98536:function(e,t,l){l.d(t,{z:function(){return n},G:function(){return o}});var i=l(25348);function n(e,t){let l=r(e,t,"left"),i=r(e,t,"top"),n=t.offsetWidth,o=t.offsetHeight,s=e.scrollLeft,a=e.scrollTop,{borderTopWidth:c,borderLeftWidth:u}=getComputedStyle(e),d=e.scrollLeft+parseInt(u,10),f=e.scrollTop+parseInt(c,10),h=d+e.clientWidth,y=f+e.clientHeight;l<=s?s=l-parseInt(u,10):l+n>h&&(s+=l+n-h),i<=f?a=i-parseInt(c,10):i+o>y&&(a+=i+o-y),e.scrollLeft=s,e.scrollTop=a}function r(e,t,l){let i="left"===l?"offsetLeft":"offsetTop",n=0;for(;t.offsetParent&&(n+=t[i],t.offsetParent!==e);){if(t.offsetParent.contains(e)){n-=e[i];break}t=t.offsetParent}return n}function o(e,t){if(document.contains(e)){let a=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(a).overflow)for(let t of function(e,t){let l=[];for(;e&&e!==document.documentElement;)(0,i.a)(e,void 0)&&l.push(e),e=e.parentElement;return l}(e))n(t,e);else{var l,r,o,s;let{left:i,top:n}=e.getBoundingClientRect();null==e||null===(l=e.scrollIntoView)||void 0===l||l.call(e,{block:"nearest"});let{left:a,top:c}=e.getBoundingClientRect();(Math.abs(i-a)>1||Math.abs(n-c)>1)&&(null==t||null===(o=t.containingElement)||void 0===o||null===(r=o.scrollIntoView)||void 0===r||r.call(o,{block:"center",inline:"center"}),null===(s=e.scrollIntoView)||void 0===s||s.call(e,{block:"nearest"}))}}}},8047:function(e,t,l){l.d(t,{z:function(){return r}});var i=l(21809),n=l(2265);function r(e,t,l,r){let o=(0,i.i)(l),s=null==l;(0,n.useEffect)(()=>{if(s||!e.current)return;let l=e.current;return l.addEventListener(t,o,r),()=>{l.removeEventListener(t,o,r)}},[e,t,r,s,o])}},29328:function(e,t,l){l.d(t,{c:function(){return r}});var i=l(2265);function n(e){return null}n.getCollectionNode=function*(e,t){let{childItems:l,title:n,children:r}=e,o=e.title||e.children,s=e.textValue||("string"==typeof o?o:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:o,textValue:s,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&i.Children.count(e.children)>0),*childNodes(){if(l)for(let e of l)yield{type:"item",value:e};else if(n){let e=[];i.Children.forEach(r,t=>{e.push({type:"item",element:t})}),yield*e}}}};let r=n}}]);
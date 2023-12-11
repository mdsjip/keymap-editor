"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5074],{727:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t=r(39693),s=r.n(t),a=r(67294),i=r(41051),o=r(2968),l=r(93379),c=r.n(l),d=r(7795),h=r.n(d),u=r(90569),p=r.n(u),m=r(3565),y=r.n(m),g=r(19216),x=r.n(g),f=r(44589),A=r.n(f),j=r(79577),b={};b.styleTagTransform=A(),b.setAttributes=y(),b.insert=p().bind(null,"head"),b.domAPI=h(),b.insertStyleElement=x(),c()(j.Z,b);var w=j.Z&&j.Z.locals?j.Z.locals:void 0,v=r(85893);function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function C(e){return e.location}function B(e){var n,r,t=e.name,o=e.explanation,l=e.warnings,c=e.renderWarning,d=void 0===c?C:c,h=(n=(0,a.useState)(0===l.length),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,s,a,i,o=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=a.call(r)).done)&&(o.push(t.value),o.length!==n);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw s}}return o}}(n,r)||function(e,n){if(e){if("string"==typeof e)return k(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=h[0],p=h[1];return(0,v.jsxs)("div",{className:s()([w.warningCategory,0===l.length&&w.emptyCategory,u&&w.collapsedCategory]).join(" "),children:[(0,v.jsxs)("h3",{onClick:function(){return p(!u)},children:[(0,v.jsx)(i.Z,{className:w.caret,name:"caret-down"})," "," ",t," ",(0,v.jsxs)("em",{children:["(",l.length," issues)"]})]}),(0,v.jsxs)("div",{className:w.warningDetails,children:[(0,v.jsx)("blockquote",{children:o}),l.length>0?(0,v.jsx)("ul",{children:l.map((function(e,n){return(0,v.jsx)("li",{children:d(e)},n)}))}):(0,v.jsx)("p",{children:"No problems"})]})]})}var E=(0,v.jsx)(o.Z,{external:!0,href:"https://github.com/nickcoutsos/keymap-editor/issues",children:"issue"}),D=function(e){var n=e.sanityChecks,r=n.nodeNames,t=n.nodeLabels,s=n.nodeReferences,a=n.deprecations,i=n.layoutMissingPositions;return(0,v.jsxs)("div",{style:{maxWidth:"700px",margin:"0 auto",paddingBottom:"60px"},children:[(0,v.jsx)("h2",{children:"Warnings"}),a.resetBindings.length>0&&(0,v.jsx)(B,{name:"Deprecated/removed behavior",warnings:a.resetBindings,explanation:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:(0,v.jsxs)("em",{children:["The ",(0,v.jsx)("code",{children:"&reset"})," behavior has been removed from ZMK in the 3.2 Zephyr upgrade. If your keyboard is bulding from that version of ZMK, make sure to use the ",(0,v.jsx)("code",{children:"&sys_reset"})," behavior instead."]})}),(0,v.jsxs)("p",{children:["For more information see ",(0,v.jsx)(o.Z,{external:!0,href:"https://zmk.dev/blog/2023/04/06/zephyr-3-2#keymap-changes",children:"ZMK - Zephyr 3.2 Update - Keymap Changes"}),"."]})]})}),(0,v.jsx)(B,{name:"Layout row/col positions",warnings:i,explanation:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:(0,v.jsxs)("em",{children:["Your keyboard's layout metadata should include a ",(0,v.jsx)("code",{children:"row"}),"and ",(0,v.jsx)("code",{children:"col"})," property for each key in order to generate a readable keymap ",(0,v.jsx)("code",{children:"bindings"})," array."]})}),(0,v.jsxs)("p",{children:["For more information see ",(0,v.jsx)(o.Z,{external:!0,href:"https://github.com/nickcoutsos/keymap-editor/wiki/Defining-keyboard-layouts",children:"Keymap Editor Wiki"}),"."]})]}),renderWarning:function(){}}),(0,v.jsx)(B,{name:"Duplicate node names",warnings:r.duplicates,explanation:(0,v.jsx)("p",{children:(0,v.jsx)("em",{children:"Node names must within the same section must be unique."})}),renderWarning:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("h4",{children:["Name ",(0,v.jsx)("code",{children:e[0].name})," re-used in:"]}),(0,v.jsx)("ul",{children:e.map((function(e,n){return(0,v.jsx)("li",{children:e.location},n)}))})]})}}),(0,v.jsx)(B,{name:"Re-definitions",warnings:r.redefined,explanation:(0,v.jsx)("p",{children:(0,v.jsx)("em",{children:"Node names cannot use existing ZMK identifiers."})})}),(0,v.jsx)(B,{name:"Macro Passwords",warnings:r.passwordMacros,explanation:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:(0,v.jsx)("em",{children:"Using keyboard macros to enter passwords is a security risk and is strongly discouraged."})}),(0,v.jsx)("p",{children:"Recording passwords in your keyboard means that anyone with physical access to your keyboard would have access to credentials stored within it, whether they know to look for it or not. Also note that through this application you are recording keyboard configuration in a Git repository and storing credentials in a code repository is not considered a safe practice (even if the repository is private)."}),(0,v.jsxs)("p",{children:["Any macros listed here have names which seem to suggest that they are used for password entry. If that is the case I would encourage you to remove them and change the associated password(s) if needed. If this is a mistake feel free to create an ",E," to help me avoid false alarms in the future!"]})]})}),(0,v.jsx)(B,{name:"Duplicate labels",warnings:t.duplicates,explanation:(0,v.jsx)("p",{children:(0,v.jsx)("em",{children:"Label property values must be unique throughout the entire keymap."})}),renderWarning:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("h4",{children:["Name ",(0,v.jsx)("code",{children:e[0].label})," re-used in:"]}),(0,v.jsx)("ul",{children:e.map((function(e,n){return(0,v.jsx)("li",{children:e.location},n)}))})]})}}),(0,v.jsx)(B,{name:"Duplicate node references",warnings:s.duplicates,explanation:(0,v.jsx)("p",{children:(0,v.jsx)("em",{children:"Node references must be unique throughout the entire keymap."})}),renderWarning:function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("h4",{children:["Reference ",(0,v.jsxs)("code",{children:["&",e[0].ref]})," re-used in:"]}),(0,v.jsx)("ul",{children:e.map((function(e,n){return(0,v.jsx)("li",{children:e.location},n)}))})]})}})]})}},79577:function(e,n,r){var t=r(87537),s=r.n(t),a=r(23645),i=r.n(a)()(s());i.push([e.id,"._Et43RIDBS31WGTsJW6Q {\n  margin: 20px 0 35px;\n}\n._Et43RIDBS31WGTsJW6Q h3 {\n  cursor: pointer;\n}\n._Et43RIDBS31WGTsJW6Q h3:hover {\n  color: royalblue;\n}\n\n.UD9L8GtxRyZNCl6a5dsA {\n  color: var(--key-color-base);\n  opacity: 0.7;\n}\n\n.sah4Bu1xq72L7DDemOzU {\n  padding-left: 16px;\n}\n\n.pSk7y6zU9J8U_IybbhZB .rhqw3NH8NqvbeV0idmJz {\n  transform: rotate(-90deg);\n  transition: 100ms;\n}\n\n.pSk7y6zU9J8U_IybbhZB .sah4Bu1xq72L7DDemOzU {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/Keyboard/Warnings/styles.module.css"],names:[],mappings:"AAAA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf",sourcesContent:[".warningCategory {\n  margin: 20px 0 35px;\n}\n.warningCategory h3 {\n  cursor: pointer;\n}\n.warningCategory h3:hover {\n  color: royalblue;\n}\n\n.emptyCategory {\n  color: var(--key-color-base);\n  opacity: 0.7;\n}\n\n.warningDetails {\n  padding-left: 16px;\n}\n\n.collapsedCategory .caret {\n  transform: rotate(-90deg);\n  transition: 100ms;\n}\n\n.collapsedCategory .warningDetails {\n  display: none;\n}\n"],sourceRoot:""}]),i.locals={warningCategory:"_Et43RIDBS31WGTsJW6Q",emptyCategory:"UD9L8GtxRyZNCl6a5dsA",warningDetails:"sah4Bu1xq72L7DDemOzU",collapsedCategory:"pSk7y6zU9J8U_IybbhZB",caret:"rhqw3NH8NqvbeV0idmJz"},n.Z=i}}]);
//# sourceMappingURL=WarningsTab.b219616848293106abf3.js.map
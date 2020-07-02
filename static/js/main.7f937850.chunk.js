(this["webpackJsonpreact-dropdown-example-2"]=this["webpackJsonpreact-dropdown-example-2"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),c=a.n(l),r=(a(10),a(11),a(1)),d=a.n(r),m=a(4),i=function(e){return o.a.createElement("svg",Object.assign({viewBox:"0 0 1000 1000"},e),o.a.createElement("path",{fill:"#11253e",d:"M980.8 521.1L783.2 718.5c-12.2 12.2-32 12.2-44.2 0-12.2-12.2-12.2-31.9 0-44.1L914.6 499 739 323.7c-12.2-12.2-12.2-31.9 0-44.1 12.2-12.2 32-12.2 44.2 0L980.8 477c12.3 12.2 12.3 31.9 0 44.1zM332.9 906.5c-9 15.7-28.9 21.1-44.5 12-15.6-9-20.9-29.1-11.9-44.8L667.1 93.5c9-15.7 28.9-21.1 44.5-12 15.6 9.1 20.9 29.1 11.9 44.8L332.9 906.5zm-71.9-188c-12.2 12.2-32 12.2-44.2 0L19.1 521.1C7 508.9 7 489.2 19.1 477l197.7-197.4c12.2-12.2 32-12.2 44.2 0 12.2 12.2 12.2 31.9 0 44.1L85.4 499 261 674.4c12.2 12.2 12.2 31.9 0 44.1z"}))};var s=function(e){var t=e.children,a=e.code,l=Object(n.useState)(!1),c=Object(m.a)(l,2),r=c[0],d=c[1];return o.a.createElement("div",{className:"card"},t,a&&o.a.createElement("div",{className:"code-button-wrapper"},o.a.createElement("button",{className:"code-toggle-button",onClick:function(){return d((function(e){return!e}))}},o.a.createElement(i,{width:"20px",height:"20px"}))),r&&o.a.createElement("div",{className:"code-big-wrapper"},o.a.createElement("div",{className:"code"},a.map((function(e){return o.a.createElement("p",{className:"code-line"},e)})))))};function u(){return o.a.createElement("div",{className:"dropdown-content"},o.a.createElement("div",null,"item 1"),o.a.createElement("div",null,"item 2"),o.a.createElement("div",null,"item 3"),o.a.createElement("div",null,"item 4"),o.a.createElement("div",null,"item 5"))}var p=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"react-dropdown-overflow"),o.a.createElement(s,{code:['<Dropdown mode="hover" dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Hover"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"mode='hover'")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))),o.a.createElement(s,{code:['<Dropdown mode="click" dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Click"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"mode='click'")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{mode:"click",dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))),o.a.createElement(s,{code:['<Dropdown mode="hover" positioning="left" dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Positioning (left)"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"positioning='left'")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{positioning:"left",dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))),o.a.createElement(s,{code:['<Dropdown mode="hover" positioning="center" dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Positioning (center)"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"positioning='center'")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{positioning:"center",dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))),o.a.createElement(s,{code:['<Dropdown mode="hover" positioning="right" dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Positioning (right)"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"positioning='right'")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{positioning:"right",dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))),o.a.createElement(s,{code:['<Dropdown mode="click" hasClickOutsideListener dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Outside click listener"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"hasClickOutsideListener")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{mode:"click",hasClickOutsideListener:!0,dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))),o.a.createElement(s,null,o.a.createElement("h2",null,"Overflow example"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"mode='hover'")),o.a.createElement("div",{className:"overflow-wrapper"},o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle"))),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle"))),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle"))),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle"))))),o.a.createElement(s,{code:['<Dropdown mode="click" isOpen dropdown={<DropdownContent />}>','  <button className="button-toggle">Toggle</button>',"</Dropdown>"]},o.a.createElement("h2",null,"Controlled component"),o.a.createElement("div",{className:"code-wrapper"},o.a.createElement("div",{className:"code"},"isOpen={true}")),o.a.createElement("div",{className:"dropdown-container"},o.a.createElement(d.a,{isOpen:!0,dropdown:o.a.createElement(u,null)},o.a.createElement("button",{className:"button-toggle"},"Toggle")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.7f937850.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),l=n.n(o),c=(n(20),n(4)),i=n(5),s=n(7),u=n(1),p=n(8),m=n(9),d=n.n(m),f=n(6),h=Object(f.a)({all:[],filter:"all",get isEmpty(){return 0===h.all.length},get completed(){return h.all.filter(function(e){return e.completed})},get hasCompleted(){return 0!==h.completed.length},get allCompleted(){return h.all.every(function(e){return e.completed})},set allCompleted(e){h.all.forEach(function(t){t.completed=e})},get active(){return h.all.filter(function(e){return!e.completed})},create:function(e){h.all.push({title:e})},remove:function(e){h.all.splice(e,1)},toggle:function(e){var t=h.all[e];t.completed=!t.completed},toggleAll:function(){h.allCompleted=!h.allCompleted},clearCompleted:function(){h.all=h.active}}),b=h,v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).remove=function(){b.remove(n.props.id)},n.toggle=function(){b.toggle(n.props.id)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.toggle,t=this.remove,n=this.props,a=n.title,o=n.completed,l=void 0!==o&&o,c=d()({view:!0,completed:l});return r.a.createElement("li",{className:c},r.a.createElement("input",{className:"toggle",type:"checkbox",checked:l,onChange:e}),r.a.createElement("label",null,a),r.a.createElement("button",{onClick:t,className:"destroy"}))}}]),t}(a.Component),y=Object(f.b)(v),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeFilter=function(e){b.filter=e.target.value},n.createTodo=function(e){13===e.keyCode&&e.target.value&&(b.create(e.target.value),e.target.value="")},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=b.isEmpty,t=b.hasCompleted,n=b.allCompleted,a=b.active,o=b.filter,l=b.toggleAll,c=b.clearCompleted,i=d()({selected:"all"===o}),s=d()({selected:"completed"===o}),u=d()({selected:"active"===o});return r.a.createElement("div",{className:"todoapp"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),r.a.createElement("input",{onKeyUp:this.createTodo,className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0})),!e&&r.a.createElement("section",{className:"main"},r.a.createElement("input",{className:"toggle-all",type:"checkbox",checked:n,onChange:l}),r.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),r.a.createElement("ul",{className:"todo-list"},b[o].map(function(e,t){return r.a.createElement(y,Object.assign({},e,{id:t,key:t}))}))),!e&&r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"todo-count"},a.length," items left"),r.a.createElement("div",{className:"filters"},r.a.createElement("button",{className:i,value:"all",onClick:this.changeFilter},"All"),r.a.createElement("button",{className:u,value:"active",onClick:this.changeFilter},"Active"),r.a.createElement("button",{className:s,value:"completed",onClick:this.changeFilter},"Completed")),t&&r.a.createElement("button",{className:"clear-completed",onClick:c},"Clear completed")))}}]),t}(a.Component),O=Object(f.b)(g);l.a.render(r.a.createElement(O,null),document.getElementById("root"))},6:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return j});var a=n(14),r=n(4),o=n(5),l=n(7),c=n(1),i=n(2),s=n(8),u=n(10),p=n(13),m=n(3);n.d(t,"a",function(){return m.b});var d,f=new Set,h=!1;function b(e){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=n.map(function(e){return"function"===typeof e?function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return v(e,n)}:e});return e.apply(this,r)}}function v(e,t){try{return h=!0,e.apply(this,t)}finally{f.forEach(y),f.clear(),h=!1}}function y(e){e()}if("undefined"!==typeof window?d=window:"undefined"!==typeof e&&(d=e),d&&(d.setTimeout=b(d.setTimeout),d.setInterval=b(d.setInterval),d.requestAnimationFrame&&(d.requestAnimationFrame=b(d.requestAnimationFrame)),d.requestIdleCallback&&(d.requestIdleCallback=b(d.requestIdleCallback)),Promise.prototype.then=b(Promise.prototype.then),Promise.prototype.catch=b(Promise.prototype.catch),d.WebSocket)){["onopen","onmessage","onerror","onclose"].forEach(function(e){return function(e,t){var n=Object.getOwnPropertyDescriptor(e,t),a=Object.assign({},n,{set:function(e){var t="function"===typeof e?function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return v(e,n)}:e;return n.set.call(this,t)}});Object.defineProperty(e,t,a)}(d.WebSocket.prototype,e)})}var g=Symbol("owner component"),O={};function j(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).devtool,n=!(e.prototype&&e.prototype.isReactComponent),d=n?p.Component:e,b=t?function(n){return t(Object.assign({Component:e},n))}:void 0,v=function(t){function p(e,t){var n;Object(r.a)(this,p),(n=Object(l.a)(this,Object(c.a)(p).call(this,e,t))).state=n.state||{},n.state[g]=Object(u.a)(Object(u.a)(n));var a=function(){return n.setState(O)};return n.render=Object(m.c)(n.render,{scheduler:{add:function(){return e=a,void(h?f.add(e):y(e));var e},delete:function(){return e=a,void f.delete(e);var e}},debugger:b,lazy:!0}),n}return Object(s.a)(p,t),Object(o.a)(p,[{key:"render",value:function(){return n?e(this.props,this.context):Object(i.a)(Object(c.a)(p.prototype),"render",this).call(this)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.props,a=this.state;if(Object(i.a)(Object(c.a)(p.prototype),"shouldComponentUpdate",this)&&!Object(i.a)(Object(c.a)(p.prototype),"shouldComponentUpdate",this).call(this,e,t))return b&&b({type:"render",renderType:"blocked"}),!1;if(a!==t)return b&&b({type:"render",renderType:"reactive"}),!0;var r=Object.keys(n),o=Object.keys(e);return!(o.length===r.length&&!o.some(function(t){return n[t]!==e[t]}))&&(b&&b({type:"render",renderType:"normal",props:e,oldProps:n}),!0)}},{key:"componentWillUnmount",value:function(){Object(i.a)(Object(c.a)(p.prototype),"componentWillUnmount",this)&&Object(i.a)(Object(c.a)(p.prototype),"componentWillUnmount",this).call(this),Object(m.e)(this.render)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(Object(i.a)(Object(c.a)(p),"deriveStoresFromProps",this)){var n,r=function(e){var t=e[g];return Object.keys(t).map(function(e){return t[e]}).filter(m.a).map(m.d)}(t);(n=Object(i.a)(Object(c.a)(p),"deriveStoresFromProps",this)).call.apply(n,[this,e].concat(Object(a.a)(r)))}return Object(i.a)(Object(c.a)(p),"getDerivedStateFromProps",this)?Object(i.a)(Object(c.a)(p),"getDerivedStateFromProps",this).call(this,e,t):null}}]),p}(d);if(v.displayName=e.displayName||e.name,n)for(var j=Object.keys(e),k=0;k<j.length;k++){var C=j[k];v[C]=e[C]}return v}}).call(this,n(22))}},[[15,2,1]]]);
//# sourceMappingURL=main.302318a1.chunk.js.map
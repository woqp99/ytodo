(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var a=o(1),s=o.n(a),i=o(8),d=o.n(i),n=o(3),r=o(4),c=o(6),l=o(5),u=o(0),h=function(t){Object(c.a)(o,t);var e=Object(l.a)(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return Object(u.jsx)("form",{method:"post",onSubmit:function(t){t.preventDefault(),""==t.target.todo.value?alert("\uc785\ub825\ud574\uc8fc\uc138\uc694!"):(this.props.onSubmit(t.target.todo.value),t.target.reset())}.bind(this),children:Object(u.jsxs)("div",{class:"add todo_text",children:[Object(u.jsx)("input",{class:"todo-text",type:"text",name:"todo",placeholder:"Todo"}),Object(u.jsx)("input",{type:"submit",class:"todo-submit",value:"\ucd94\uac00"})]})})}}]),o}(a.Component),m=h,p=o(2),b=function(t){Object(c.a)(o,t);var e=Object(l.a)(o);function o(t){var a;return Object(n.a)(this,o),(a=e.call(this,t)).MouseHover=a.MouseHover.bind(Object(p.a)(a)),a.Modify=a.Modify.bind(Object(p.a)(a)),a.Delete=a.Delete.bind(Object(p.a)(a)),a.inputFormHandler=a.inputFormHandler.bind(Object(p.a)(a)),a.state={pre:a.props.text},a}return Object(r.a)(o,[{key:"inputFormHandler",value:function(t){this.setState({pre:t.target.value})}},{key:"MouseHover",value:function(t){t.preventDefault(),this.props.onHover(t.target.dataset.id,t.target.dataset.todo,t.target.dataset.completed,t.target.dataset.ishover,"read")}},{key:"Modify",value:function(t){t.preventDefault(),this.props.onModify(t.target.dataset.id,t.target.dataset.todo,t.target.dataset.completed,t.target.dataset.ishover,"none-content"),this.setState({pre:this.props.text})}},{key:"Delete",value:function(t){t.preventDefault(),this.props.onDelete(t.target.dataset.id,t.target.dataset.todo,t.target.dataset.completed,t.target.dataset.ishover)}},{key:"render",value:function(){for(var t=[],e=this.props.data,o=0;o<e.length;){var a="1"===e[o].Completed?"com":"nCom";"read"===e[o].mode?t.push(Object(u.jsxs)("li",{className:o,"data-id":e[o].id,"data-todo":e[o].todo,"data-completed":e[o].Completed,"data-ishover":e[o].isHover,onMouseEnter:this.MouseHover,onMouseLeave:this.MouseHover,children:[Object(u.jsx)("p",{"data-id":e[o].id,"data-todo":e[o].todo,"data-completed":e[o].Completed,"data-ishover":e[o].isHover,className:a,onClick:function(t){t.preventDefault(),this.props.onClick(t.target.dataset.id,t.target.dataset.todo,t.target.dataset.completed,t.target.dataset.ishover,"read")}.bind(this),children:e[o].todo}),Object(u.jsxs)("div",{class:"btn",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"1"===e[o].isHover?"list-hover1":"list-leave1","data-id":e[o].id,"data-todo":e[o].todo,"data-completed":e[o].Completed,"data-ishover":e[o].isHover,onClick:this.Modify,children:"\uc218\uc815"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"1"===e[o].isHover?"list-hover2":"list-leave2","data-id":e[o].id,"data-todo":e[o].todo,"data-completed":e[o].Completed,"data-ishover":e[o].isHover,onClick:this.Delete,children:"\uc0ad\uc81c"})})]})]},e[o].id)):"update"===e[o].mode&&t.push(Object(u.jsx)("li",{className:"ModiMode",children:Object(u.jsx)("form",{method:"post","data-id":e[o].id,"data-completed":e[o].Completed,"data-ishover":e[o].isHover,onSubmit:function(t){t.preventDefault(),""==t.target.mtodo.value?alert("\uc785\ub825\ud574\uc8fc\uc138\uc694!"):this.props.onSubmit(t.target.dataset.id,t.target.mtodo.value,t.target.dataset.completed,t.target.dataset.ishover)}.bind(this),children:Object(u.jsxs)("div",{className:"UDbtn",children:[Object(u.jsx)("input",{type:"text",name:"mtodo",className:"modi",value:this.state.pre,onChange:this.inputFormHandler}),Object(u.jsx)("input",{type:"submit",value:"\uc218\uc815",className:"modi"})]})})},e[o].id)),o+=1}return Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:t})})}}]),o}(a.Component),v=(o(14),function(t){Object(c.a)(o,t);var e=Object(l.a)(o);function o(t){var a;return Object(n.a)(this,o),(a=e.call(this,t)).max_content_id=0,a.state={contents:[],text:"",class:"content"},a}return Object(r.a)(o,[{key:"render",value:function(){var t,e;return t=Object(u.jsx)(m,{onSubmit:function(t){this.max_content_id+=1;var e=this.state.contents.concat({id:this.max_content_id,todo:t,Completed:"0",isHover:"0",mode:"read"});this.setState({contents:e})}.bind(this)}),e=Object(u.jsx)(b,{data:this.state.contents,text:this.state.text,onClick:function(t,e,o,a,s){for(var i=0,d=this.state.contents,n=e;i<d.length;){if(Number(d[i].id)===Number(t)){o="0"==o?"1":"0",d[i]={id:t,todo:e,Completed:o,isHover:a,mode:s};break}i+=1}this.setState({contents:d,text:n})}.bind(this),onHover:function(t,e,o,a,s){for(var i=0,d=this.state.contents,n=e;i<d.length;){if(Number(d[i].id)===Number(t)){a="0"==a?"1":"0",d[i]={id:t,todo:e,Completed:o,isHover:a,mode:s};break}i+=1}this.setState({contents:d,text:n})}.bind(this),onModify:function(t,e,o,a,s){for(var i=0,d=this.state.contents;i<d.length;)"update"===d[i].mode&&(d[i]={id:d[i].id,todo:d[i].todo,Completed:d[i].Completed,isHover:"0",mode:"read"}),Number(d[i].id)===Number(t)&&(d[i]={id:t,todo:e,Completed:o,isHover:"1",mode:"update"}),i+=1;this.setState({class:s})}.bind(this),onSubmit:function(t,e,o,a){for(var s=0,i=this.state.contents;s<i.length;){if(Number(i[s].id)===Number(t)){i[s]={id:t,todo:e,Completed:o,isHover:"1",mode:"read"};break}s+=1}this.setState({contents:i})}.bind(this),onDelete:function(t,e,o,a){if(window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){for(var s=0,i=Array.from(this.state.contents);s<i.length;){if(Number(i[s].id)===Number(t)){i.splice(s,1);break}s+=1}this.setState({contents:i})}}.bind(this)}),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"wrap",children:[t,Object(u.jsx)("div",{className:"content",children:e})]})})}}]),o}(a.Component));o(15);d.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8e4da2fc.chunk.js.map
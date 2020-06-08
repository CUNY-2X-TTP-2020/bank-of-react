(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),i=(a(40),a(18)),o=a(22),u=a(16),s=a(3),m=a(4),d=a(5),b=a(6),p=a(10),h=a(1),E=(a(41),a(19)),f=a.n(E),v=a(66),S=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Balance: ",this.props.accountBalance.toLocaleString("en-US",{style:"currency",currency:"USD"}))}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/118/bank_1f3e6.png",alt:"bank"}),r.a.createElement("h1",null,"Bank of React"),r.a.createElement(p.b,{to:"/debits"},"Debits"),r.a.createElement("br",null),r.a.createElement(p.b,{to:"/credits"},"Credits"))}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"User Profile"),r.a.createElement("div",null,"UserName: ",this.props.userName),r.a.createElement("div",null,"Member Since: ",this.props.memberSince),r.a.createElement(p.b,{to:"/"},"Home"))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=Object(u.a)({},e.state.user),n=t.target.name,r=t.target.value;a[n]=r,e.setState({user:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogin(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(m.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(h.a,{to:"/userProfile"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"userName"},"User Name"),r.a.createElement("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("button",null,"Log In")))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"debit-card"},r.a.createElement("h3",{className:"debit-description"},this.props.description),r.a.createElement("ul",{className:"debit-details"},r.a.createElement("li",null,"Amount: ",this.props.amount.toLocaleString("en-US",{style:"currency",currency:"USD"})),r.a.createElement("li",null,"Date: ",this.props.date)))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=e.addDebitHandler.bind(n.handleSubmit),n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Debits"),r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(S,{accountBalance:this.props.accountBalance}),r.a.createElement("br",null),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Add New Debit"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"description"},"Description: "),r.a.createElement("input",{type:"text",name:"description",placeholder:"Item Name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"amount"},"Amount (in USD): "),r.a.createElement("input",{type:"number",min:"0",step:"0.01",name:"amount",placeholder:"9.99",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement("section",{className:"debit-card-grid"},this.generateDebitCards(this.props.data)))}},{key:"generateDebitCards",value:function(e){var t=[];return e.forEach((function(e,a){var n=e.description,c=e.amount,l=e.id,i=e.date;t.push(r.a.createElement(g,{key:a.toString(),description:n,amount:c,id:l,date:i}))})),t}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"credit-card"},r.a.createElement("h3",{className:"credit-description"},this.props.description),r.a.createElement("ul",{className:"credit-details"},r.a.createElement("li",null,"Amount: ",this.props.amount.toLocaleString("en-US",{style:"currency",currency:"USD"})),r.a.createElement("li",null,"Date: ",this.props.date)))}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=e.addCreditHandler.bind(n.handleSubmit),n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Credits"),r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(S,{accountBalance:this.props.accountBalance}),r.a.createElement("br",null),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Add New Credit"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"description"},"Description: "),r.a.createElement("input",{type:"text",name:"description",placeholder:"Item Name",required:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"amount"},"Amount (in USD): "),r.a.createElement("input",{type:"number",min:"0",step:"0.01",name:"amount",placeholder:"9.99",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))),r.a.createElement("section",{className:"credit-card-grid"},this.generateCreditCards(this.props.data)))}},{key:"generateCreditCards",value:function(e){var t=[];return e.forEach((function(e,a){var n=e.description,c=e.amount,l=e.id,i=e.date;t.push(r.a.createElement(k,{key:a.toString(),description:n,amount:c,id:l,date:i}))})),t}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).mockLogin=function(t){var a=Object(u.a)({},e.state.currentUser);a.userName=t.userName,e.setState({currentUser:a})},e.handleAddDebit=function(t){t.preventDefault();var a=t.target.description.value,n=t.target.amount.value,r=(new Date).toISOString(),c={id:Object(v.a)(r,"addcd184-a939-11ea-a852-0f0463844a38"),description:a,amount:Number(n),date:r},l=Object(i.a)(Array,Object(o.a)(e.state.debitData).concat([c]));e.setState({debitData:l}),e.setState({totalDebit:e.calculateTotalAmount(l)}),t.target.reset()},e.handleAddCredit=function(t){t.preventDefault();var a=t.target.description.value,n=t.target.amount.value,r=(new Date).toISOString(),c={id:Object(v.a)(r,"addcd184-a939-11ea-a852-0f0463844a38"),description:a,amount:Number(n),date:r},l=Object(i.a)(Array,Object(o.a)(e.state.creditData).concat([c]));e.setState({creditData:l}),e.setState({totalCredit:e.calculateTotalAmount(l)}),t.target.reset()},e.state={currentUser:{userName:"bob_loblaw",memberSince:"08/23/99"},debitData:[],creditData:[],totalDebit:-1,totalCredit:-1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchDebitData(),this.fetchCreditData()}},{key:"fetchDebitData",value:function(){var e=this;f.a.get("https://moj-api.herokuapp.com/debits").then((function(t){var a=t.data;e.setState({debitData:a}),e.setState({totalDebit:e.calculateTotalAmount(a)})})).catch((function(t){console.log(t),e.setState({debitData:[]})}))}},{key:"fetchCreditData",value:function(){var e=this;f.a.get("https://moj-api.herokuapp.com/credits").then((function(t){var a=t.data;e.setState({creditData:a}),e.setState({totalCredit:e.calculateTotalAmount(a)})})).catch((function(t){console.log(t),e.setState({creditData:[]})}))}},{key:"calculateTotalAmount",value:function(e){return e.reduce((function(e,t){return e+=t.amount}),0)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:function(){return r.a.createElement(j,{accountBalance:e.state.accountBalance})}}),r.a.createElement(h.b,{exact:!0,path:"/userProfile",render:function(){return r.a.createElement(D,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,Object.assign({user:e.state.currentUser,mockLogin:e.mockLogin},e.props))}}),r.a.createElement(h.b,{exact:!0,path:"/debits",render:function(){return r.a.createElement(y,{data:e.state.debitData,accountBalance:e.state.totalCredit-e.state.totalDebit,addDebitHandler:e.handleAddDebit})}}),r.a.createElement(h.b,{exact:!0,path:"/credits",render:function(){return r.a.createElement(C,{data:e.state.creditData,accountBalance:e.state.totalCredit-e.state.totalDebit,addCreditHandler:e.handleAddCredit})}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b3c84911.chunk.js.map
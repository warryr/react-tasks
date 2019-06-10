(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/about-agile.e235092b.svg"},147:function(e,t,a){e.exports=a.p+"static/media/about-expertise.1c9c249c.svg"},148:function(e,t,a){e.exports=a.p+"static/media/about-learning.8b3a1e36.svg"},149:function(e,t,a){e.exports=a.p+"static/media/about-positive.0b75384a.svg"},150:function(e,t,a){e.exports=a.p+"static/media/about-technologies.9e3906a1.svg"},159:function(e,t,a){e.exports=a(279)},164:function(e,t,a){},165:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=(a(164),a(16)),c=a(15),s=a(18),u=a(17),m=a(19),d=a(50),p=a(56),h=(a(165),a(32)),E=a(91),g=a(280),f=Object(g.a)(function(e){return{defaultButton:{margin:e.spacing(1,2),color:"default"},h3:{margin:e.spacing(3)}}}),b=a(314),v=a(312),w=a(313),y=function(e){var t=f();return r.a.createElement(v.a,{fixed:!0},r.a.createElement(w.a,{component:"h1",variant:"h3",className:t.h3},e.value),r.a.createElement(b.a,{variant:"contained",className:t.defaultButton,onClick:e.increment},"Increment"),e.ableToDec?r.a.createElement(b.a,{variant:"contained",className:t.defaultButton,onClick:e.decrement},"Decrement"):r.a.createElement(b.a,{variant:"contained",className:t.defaultButton,disabled:!0},"Decrement"),r.a.createElement(b.a,{variant:"contained",className:t.defaultButton,onClick:e.reset},"Reset"))},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).incrementCounter=function(){a.setState(function(e){return{counter:e.counter+1,ableToDecrement:!0,initialState:!1}})},a.decrementCounter=function(){a.state.ableToDecrement&&a.setState(function(e){return{counter:e.counter-1}})},a.resetCounter=function(){a.setState({counter:0,ableToDecrement:!1,initialState:!0})},a.state={counter:0,ableToDecrement:!1,initialState:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("Counter "+this.props.id+": componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Counter "+this.props.id+": componentWillUnmount")}},{key:"componentDidUpdate",value:function(e,t,a){console.log("Counter "+this.props.id+": componentDidUpdate"),0===this.state.counter&&this.state.ableToDecrement&&this.setState({ableToDecrement:!1,initialState:!0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){return"add"===e.executed?(console.log("Counter "+this.props.id+": UNSAFE_componentWillReceiveProps"),this.state.counter%2===0?this.incrementCounter():void 0):"delete"===e.executed?(console.log("Counter "+this.props.id+": UNSAFE_componentWillReceiveProps"),this.state.counter%2===1?this.decrementCounter():void 0):void(!e.mustReset||this.props.mustReset&&this.state.initialState||(console.log("Counter "+this.props.id+": UNSAFE_componentWillReceiveProps"),this.resetCounter()))}},{key:"shouldComponentUpdate",value:function(e,t,a){var n=t.counter!==this.state.counter||t.ableToDecrement!==this.state.ableToDecrement;return console.log("Counter "+this.props.id+": shouldComponentUpdate: "+n),n}},{key:"render",value:function(){return console.log("Counter "+this.props.id+": render"),r.a.createElement(y,{value:this.state.counter,increment:this.incrementCounter,decrement:this.decrementCounter,reset:this.resetCounter,ableToDec:this.state.ableToDecrement})}}]),t}(r.a.Component),x=Object(g.a)(function(e){return{button:{margin:e.spacing(1,2)},h4:{margin:e.spacing(3)}}}),j=function(e){var t=x();return r.a.createElement(v.a,{fixed:!0},r.a.createElement(w.a,{component:"h1",variant:"h4",className:t.h4},"Parent Counter"),r.a.createElement(b.a,{variant:"contained",color:"primary",className:t.button,onClick:e.onAdd},"Add counter"),e.ableToDel?r.a.createElement(b.a,{variant:"contained",color:"secondary",className:t.button,onClick:e.onDelete},"Delete first counter"):r.a.createElement(b.a,{variant:"contained",color:"secondary",className:t.button,disabled:!0},"Delete first counter"),r.a.createElement(b.a,{variant:"contained",color:"default",className:t.button,onClick:e.onReset},"Reset counters"))},V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onAddCounter=function(){a.setState(function(e){return{counters:[{id:e.lastId+1}].concat(Object(E.a)(e.counters)),lastId:e.lastId+1,ableToDelete:!0,childMustReset:!1,executedOperation:"add"}})},a.onDeleteCounter=function(){a.state.ableToDelete&&a.setState(function(e){var t=e.counters;return t.splice(0,1),console.log("Counter "+e.lastId+" deleted"),Object(h.a)({},e,{counters:t,executedOperation:"delete"})})},a.onResetCounters=function(){a.setState({counters:[{id:1}],lastId:1,ableToDelete:!1,childMustReset:!0,executedOperation:"reset"})},a.state={counters:[{id:1}],lastId:1,ableToDelete:!1,childMustReset:!0,executedOperation:"reset"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("Parent: componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Parent: componentWillUnmount")}},{key:"shouldComponentUpdate",value:function(e,t,a){return console.log("Parent: shouldComponentUpdate"),!0}},{key:"componentDidUpdate",value:function(e,t,a){console.log("Parent: componentDidUpdate"),1===this.state.counters.length&&this.state.ableToDelete&&this.setState({ableToDelete:!1})}},{key:"render",value:function(){var e=this;return console.log("Parent: render"),r.a.createElement("div",null,r.a.createElement(j,{onAdd:this.onAddCounter,onDelete:this.onDeleteCounter,onReset:this.onResetCounters,ableToDel:this.state.ableToDelete}),this.state.counters.map(function(t){return 1===t.id?r.a.createElement(O,{key:t.id,id:t.id,mustReset:e.state.childMustReset,executed:e.state.executedOperation}):r.a.createElement(O,{key:t.id,id:t.id,executed:e.state.executedOperation})}))}}]),t}(r.a.Component),C=a(154),N=Object(g.a)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}),D=a(316),I=a(323),S=a(317),k=function(){var e=N(),t=r.a.useState(0),a=Object(C.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(D.a,{position:"static"},r.a.createElement(I.a,{value:n,onChange:function(e,t){o(t)}},r.a.createElement(S.a,{value:!1}),r.a.createElement(S.a,{label:"\u041e \u043d\u0430\u0441",component:d.b,to:"/about"}),r.a.createElement(S.a,{label:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a\u0438",component:d.b,to:"/counters"}),r.a.createElement(S.a,{label:"\u0412\u043e\u0439\u0442\u0438",component:d.b,to:"/login"}),r.a.createElement(S.a,{label:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e redux",component:d.b,to:"/login-redux"}),r.a.createElement(S.a,{label:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e redux-form",component:d.b,to:"/login-redux-form"}))))},T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),t}(r.a.Component),P=a(47),A=a.n(P),W=Object(g.a)(function(e){return{containerBox:{display:"flex",justifyContent:"center",flexWrap:"wrap"},contentBox:{display:"flex",flexDirection:"column",alignItems:"center",width:"29%",margin:e.spacing(5,2),color:A.a[700]},h4:{margin:e.spacing(3)},paragraph:{margin:e.spacing(2,0)},image:{width:"100px",height:"100px"}}}),B=a(320),R=a(146),L=a.n(R),U=a(147),_=a.n(U),M=a(148),F=a.n(M),q=a(149),z=a.n(q),G=a(150),J=a.n(G),$=function(){var e=W();return r.a.createElement(v.a,{fixed:!0},r.a.createElement(w.a,{component:"h1",variant:"h4",className:e.h4},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 iTechArt"),r.a.createElement(B.a,{className:e.containerBox},r.a.createElement(B.a,{component:"div",className:e.contentBox},r.a.createElement("img",{src:L.a,alt:"About agile",className:e.image}),r.a.createElement(w.a,{component:"p",variant:"h6",className:e.paragraph},"\u041c\u044b \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u0441\u044f \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u043a\u0430\u043a \u0432 \u043c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442\u0435, \u0442\u0430\u043a \u0438 \u0432 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0438\u0434\u0435\u0439")),r.a.createElement(B.a,{component:"div",className:e.contentBox},r.a.createElement("img",{src:_.a,alt:"About expertise",className:e.image}),r.a.createElement(w.a,{component:"p",variant:"h6",className:e.paragraph},"\u0423 \u043d\u0430\u0441 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 Remarkable People \u2013 \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u044b\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u043e\u0439")),r.a.createElement(B.a,{component:"div",className:e.contentBox},r.a.createElement("img",{src:F.a,alt:"About learning",className:e.image}),r.a.createElement(w.a,{component:"p",variant:"h6",className:e.paragraph},"\u041c\u044b, \u043a\u0430\u043a \u0438 \u043d\u0430\u0448\u0438 \u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0438, \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438")),r.a.createElement(B.a,{component:"div",className:e.contentBox},r.a.createElement("img",{src:z.a,alt:"About positive",className:e.image}),r.a.createElement(w.a,{component:"p",variant:"h6",className:e.paragraph},"\u041c\u044b \u043b\u044e\u0431\u0438\u043c \u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0438 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438")),r.a.createElement(B.a,{component:"div",className:e.contentBox},r.a.createElement("img",{src:J.a,alt:"About technologies",className:e.image}),r.a.createElement(w.a,{component:"p",variant:"h6",className:e.paragraph},"\u0423 \u043d\u0430\u0441 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0434\u043e\u0431\u0440\u043e\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0430\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430"))))},H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement($,null)}}]),t}(r.a.Component),K=Object(g.a)(function(e){return{h4:{margin:e.spacing(3)}}}),Q=function(){var e=K();return r.a.createElement(w.a,{component:"h1",variant:"h4",className:e.h4},"404 - \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")},X=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null)}}]),t}(r.a.Component),Y=a(318),Z=a(319),ee=a(63),te=a.n(ee),ae=Object(g.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},logBox:{margin:e.spacing(2),color:A.a[500]},hint:{textAlign:"left",fontSize:"14px",color:te.a[500]}}}),ne=function(e){var t=ae();return r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement("form",{id:"form",className:t.form,noValidate:!0},r.a.createElement(Z.a,{variant:"outlined",margin:"normal",id:"email",name:"email",label:"\u041f\u043e\u0447\u0442\u0430",fullWidth:!0,autoFocus:!0,required:!0,error:e.emailError,onChange:e.displayInput}),r.a.createElement(w.a,{className:t.hint,hidden:!e.emailError},"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.a.createElement(Z.a,{type:"password",variant:"outlined",margin:"normal",id:"password",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",fullWidth:!0,required:!0,error:e.passwordError,onChange:e.displayInput}),r.a.createElement(w.a,{className:t.hint,hidden:!e.passwordError},"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.submit,onClick:e.login},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement(B.a,{className:t.logBox},r.a.createElement(w.a,null,"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: ",e.emailValue),r.a.createElement(w.a,null,"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c: ",e.passwordValue)),r.a.createElement(B.a,{className:t.logBox,hidden:""===e.data},r.a.createElement(w.a,null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0444\u043e\u0440\u043c\u044b: ",e.data))))},re=function(e){return e.length>5},oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).displayInputValue=function(){var e=document.getElementById("email").value,t=document.getElementById("password").value;a.setState({currentEmailValue:e,currentPasswordValue:t,emailValid:re(e),passwordValid:re(t)})},a.handleLogin=function(e){e.preventDefault(),a.setState(function(e){return{emailError:!e.emailValid,passwordError:!e.passwordValid}}),a.state.emailValid&&a.state.passwordValid&&(console.log("\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: "+a.state.currentEmailValue),console.log("\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c: "+a.state.currentPasswordValue),a.setState(function(e){return{loggedInData:JSON.stringify({email:e.currentEmailValue,password:e.currentPasswordValue})}}),document.getElementById("form").reset(),a.resetState())},a.resetState=function(){a.setState({currentEmailValue:"",currentPasswordValue:"",emailValid:!1,passwordValid:!1,emailError:!1,passwordError:!1})},a.state={currentEmailValue:"",currentPasswordValue:"",emailValid:!1,passwordValid:!1,emailError:!1,passwordError:!1,loggedInData:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ne,{login:this.handleLogin,displayInput:this.displayInputValue,data:this.state.loggedInData,emailValue:this.state.currentEmailValue,passwordValue:this.state.currentPasswordValue,emailError:this.state.emailError,passwordError:this.state.passwordError})}}]),t}(r.a.Component),le=a(38),ie=Object(g.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},logBox:{margin:e.spacing(2),color:A.a[500]},hint:{textAlign:"left",fontSize:"14px",color:te.a[500]}}}),ce=function(e){var t=ie();return r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement("form",{id:"reduxForm",className:t.form,noValidate:!0},r.a.createElement(Z.a,{variant:"outlined",margin:"normal",id:"reduxEmail",name:"email",label:"\u041f\u043e\u0447\u0442\u0430",fullWidth:!0,autoFocus:!0,required:!0,error:e.emailError,onChange:e.displayInput}),r.a.createElement(w.a,{className:t.hint,hidden:!e.emailError},"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.a.createElement(Z.a,{type:"password",variant:"outlined",margin:"normal",id:"reduxPassword",name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",fullWidth:!0,required:!0,error:e.passwordError,onChange:e.displayInput}),r.a.createElement(w.a,{className:t.hint,hidden:!e.passwordError},"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.submit,onClick:e.login},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement(B.a,{className:t.logBox},r.a.createElement(w.a,null,"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: ",e.emailValue),r.a.createElement(w.a,null,"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c: ",e.passwordValue))))},se="SET_CURRENT_EMAIL",ue="SET_CURRENT_PASSWORD",me="CLEAN_CURRENT_STATE",de="SET_EMAIL_VALIDATION",pe="SET_PASSWORD_VALIDATION",he="CLEAN_VALIDATION_STATE",Ee="SET_LOGIN_EMAIL",ge="SET_LOGIN_PASSWORD",fe=function(e){return{type:de,payload:e}},be=function(e){return{type:pe,payload:e}},ve=function(e){return{type:Ee,payload:e}},we=function(e){return{type:ge,payload:e}},ye=function(){return{type:he}},Oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).displayInputValue=function(){var e=document.getElementById("reduxEmail").value,t=document.getElementById("reduxPassword").value;a.props.setCurrentEmail(e),a.props.setCurrentPassword(t)},a.handleLogin=function(e){e.preventDefault();var t=a.props.currentEmailValue,n=a.props.currentPasswordValue,r=re(t),o=re(n);a.props.setEmailValidation(r),a.props.setPasswordValidation(o),r&&o&&(a.props.setLoginEmail(t),a.props.setLoginPassword(n),a.props.history.push("/login-redux/success"))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.props.cleanState()}},{key:"render",value:function(){return r.a.createElement(ce,{displayInput:this.displayInputValue,login:this.handleLogin,emailValue:this.props.currentEmailValue,passwordValue:this.props.currentPasswordValue,emailError:!this.props.emailValid,passwordError:!this.props.passwordValid})}}]),t}(r.a.Component),xe=Object(le.a)(function(e){return{currentEmailValue:e.currentInput.currentEmail,currentPasswordValue:e.currentInput.currentPassword,emailValid:e.validation.emailValid,passwordValid:e.validation.passwordValid,loggedInEmail:e.loggedInData.email,loggedInPassword:e.loggedInData.password}},function(e){return{setCurrentEmail:function(t){return e(function(e){return{type:se,payload:e}}(t))},setCurrentPassword:function(t){return e(function(e){return{type:ue,payload:e}}(t))},setEmailValidation:function(t){return e(fe(t))},setPasswordValidation:function(t){return e(be(t))},setLoginEmail:function(t){return e(ve(t))},setLoginPassword:function(t){return e(we(t))},cleanState:function(){e({type:me}),e(ye())}}})(Oe),je=function(e){var t=ae();return r.a.createElement(v.a,{component:"main",maxWidth:"xs",className:t.paper},r.a.createElement(w.a,{component:"p",variant:"h5"},"\u041f\u043e\u0447\u0442\u0430: ",e.email),r.a.createElement(w.a,{component:"p",variant:"h5"},"\u041f\u0430\u0440\u043e\u043b\u044c: ",e.password))},Ve=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(je,{email:this.props.email,password:this.props.password})}}]),t}(r.a.Component),Ce=Object(le.a)(function(e){return{email:e.loggedInData.email,password:e.loggedInData.password}})(Ve),Ne=a(152),De=a(322),Ie=a(321),Se=Object(g.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},logBox:{margin:e.spacing(2),color:A.a[500]},hint:{textAlign:"left",fontSize:"14px",color:te.a[500]}}}),ke=function(e){var t=e.input,a=Object(Ne.a)(e,["input"]);return r.a.createElement(Z.a,Object.assign({variant:"outlined",margin:"normal"},t,a,{required:!0,fullWidth:!0}))},Te=function(e){var t=Se();return r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement("form",{onSubmit:e.handleSubmit,className:t.form},r.a.createElement(De.a,{name:"email",component:ke,label:"\u041f\u043e\u0447\u0442\u0430",error:e.emailError}),r.a.createElement(w.a,{className:t.hint,hidden:!e.emailError},"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.a.createElement(De.a,{type:"password",name:"password",component:ke,label:"\u041f\u0430\u0440\u043e\u043b\u044c",error:e.passwordError}),r.a.createElement(w.a,{className:t.hint,hidden:!e.passwordError},"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.submit,onClick:e.login},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement(B.a,{className:t.logBox},r.a.createElement(w.a,null,"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: ",e.emailValue),r.a.createElement(w.a,null,"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c: ",e.passwordValue))))},Pe=Te=Object(Ie.a)({form:"loginForm"})(Te),Ae=a(325),We=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLogin=function(e){var t=e.email,n=e.password,r=re(t),o=re(n);a.props.setEmailValidation(r),a.props.setPasswordValidation(o),r&&o&&(a.props.setLoginEmail(t),a.props.setLoginPassword(n),a.props.history.push("/login-redux-form/success"))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.props.cleanValidationState()}},{key:"render",value:function(){return r.a.createElement(Pe,{onSubmit:this.handleLogin,emailValue:this.props.currentEmail,passwordValue:this.props.currentPassword,emailError:!this.props.emailValid,passwordError:!this.props.passwordValid})}}]),t}(r.a.Component),Be=Object(Ae.a)("loginForm"),Re=Object(le.a)(function(e){return{currentEmail:Be(e,"email")||"",currentPassword:Be(e,"password")||"",emailValid:e.validation.emailValid,passwordValid:e.validation.passwordValid}},function(e){return{setEmailValidation:function(t){return e(fe(t))},setPasswordValidation:function(t){return e(be(t))},setLoginEmail:function(t){return e(ve(t))},setLoginPassword:function(t){return e(we(t))},cleanValidationState:function(){return e(ye())}}})(We),Le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:"/react-tasks"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/404",exact:!0,component:null}),r.a.createElement(p.b,{path:"/",component:T})),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:null}),r.a.createElement(p.b,{path:"/about",exact:!0,component:H}),r.a.createElement(p.b,{path:"/counters",exact:!0,component:V}),r.a.createElement(p.b,{path:"/login",exact:!0,component:oe}),r.a.createElement(p.b,{path:"/login-redux",exact:!0,component:xe}),r.a.createElement(p.b,{path:"/login-redux/success",exact:!0,component:Ce}),r.a.createElement(p.b,{path:"/login-redux-form",exact:!0,component:Re}),r.a.createElement(p.b,{path:"/login-redux-form/success",exact:!0,component:Ce}),r.a.createElement(p.b,{path:"/404",exact:!0,component:X}),r.a.createElement(p.a,{to:"/404"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=a(21),_e=a(324),Me=Object(Ue.b)({currentInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentEmail:"",currentPassword:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(h.a)({},e,{currentEmail:t.payload});case ue:return Object(h.a)({},e,{currentPassword:t.payload});case me:return{currentEmail:"",currentPassword:""};default:return e}},validation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{emailValid:!0,passwordValid:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(h.a)({},e,{emailValid:t.payload});case pe:return Object(h.a)({},e,{passwordValid:t.payload});case he:return{emailValid:!0,passwordValid:!0};default:return e}},loggedInData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{emailError:!1,passwordError:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(h.a)({},e,{email:t.payload});case ge:return Object(h.a)({},e,{password:t.payload});default:return e}},form:_e.a}),Fe=Object(Ue.c)(Me),qe=a(86);l.a.render(r.a.createElement(qe.a,{store:Fe},r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,1,2]]]);
//# sourceMappingURL=main.be0fbce2.chunk.js.map
(this.webpackJsonpsimon=this.webpackJsonpsimon||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var n,a,r=s(1),c=s.n(r),i=s(20),o=s.n(i),l=(s(31),s(10)),d=s(25),u=s(21),j=s(22),m=s(26),h=s(24),b=(s(32),s(33),s(0)),p=function(e){return Object(b.jsxs)("div",{className:"gameover",style:e.gameover?{display:"block"}:{display:"none"},children:[Object(b.jsx)("strong",{children:"Gameover "}),Object(b.jsx)("br",{})," ",Object(b.jsxs)("strong",{children:["Your Score: ",e.score]}),Object(b.jsx)("br",{}),null==e.newName?"Since you aren't signed in, your score hasn't been recorded":e.serverData?"Your score has been recorded":"Sorry your score hasn't been recorded. To record your score you need to use a VPN",Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:e.tryAgainHandler,children:Object(b.jsx)("strong",{children:"Try again"})})]})},O=s(11),g=(s(35),function(){return Object(b.jsx)("div",{className:"spinner",children:Object(b.jsxs)("div",{className:"lds-spinner",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})})}),v=(s(36),function(e){return Object(b.jsx)("div",{className:"info",style:e.appInfo?{display:"block"}:{display:"none"},children:Object(b.jsxs)("div",{children:[e.isPending?Object(b.jsx)(g,{}):e.serverData&&null!==e.sortUsers?Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("strong",{children:e.numberOftimes})," people are playing this game."]}),Object(b.jsx)("p",{children:"Highest Scores:"}),Object(b.jsxs)("strong",{children:[Object(b.jsxs)("ul",{className:"scores",children:[Object(b.jsx)("li",{children:void 0!==e.sortUsers[0]?Object(b.jsxs)("p",{children:[e.sortUsers[0].name,"  ",Object(b.jsx)("span",{children:e.sortUsers[0].score})]}):null}),Object(b.jsx)("li",{children:void 0!==e.sortUsers[1]?Object(b.jsxs)("p",{children:[e.sortUsers[1].name,"  ",Object(b.jsx)("span",{children:e.sortUsers[1].score})]}):null}),Object(b.jsx)("li",{children:void 0!==e.sortUsers[2]?Object(b.jsxs)("p",{children:[e.sortUsers[2].name,"  ",Object(b.jsx)("span",{children:e.sortUsers[2].score})]}):null})]}),Object(b.jsx)(O.b,{to:{pathname:"/Users",state:e.sortUsers,data:e.informationHandler},children:"See all the scores here"})]})]}):Object(b.jsxs)("p",{id:"oops",children:[Object(b.jsx)("strong",{children:"Oops!"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Failed To Connect To The Server. We are using firebase service which is suspended for your country, Please use a VPN to sign in or see the Scores."]}),Object(b.jsx)("div",{className:"guest",children:e.signedIn&&e.menu?Object(b.jsxs)("p",{children:["Hi ",Object(b.jsx)("strong",{children:e.newName})," !",Object(b.jsx)("br",{}),"Welcome to Simon game. "]}):null})]})})}),f=(s(42),function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"firstRow",children:[Object(b.jsx)("div",{className:"items itemOne",id:e.divId[0],onClick:e.click}),Object(b.jsx)("div",{className:"items itemTwo",id:e.divId[1],onClick:e.click})]}),Object(b.jsxs)("div",{className:"secondRow",children:[Object(b.jsx)("div",{className:"items itemThree",id:e.divId[2],onClick:e.click}),Object(b.jsx)("div",{className:"items itemFour",id:e.divId[3],onClick:e.click})]})]})}),x=(s(43),function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{className:"play",style:e.gameover?{display:"none"}:{display:"block"},onClick:e.playHandler,children:[Object(b.jsx)("h2",{children:e.play?"Restart":"Play"}),e.play?e.myTurn?"Your turn":"PC turn":""]}),Object(b.jsxs)("div",{className:"score",style:!e.appInfo||e.gameover?{display:"block"}:{display:"none"},children:[Object(b.jsxs)("p",{children:["Score: ",e.score]}),Object(b.jsx)("button",{className:"dashboardBtn",onClick:e.menuHandler,children:"Menu"})]})]})}),y=s(14),S=s(7),w=(s(44),function(e){var t=Object(r.useState)(!0),s=Object(S.a)(t,2),n=s[0],a=s[1],c=Object(r.useState)(null),i=Object(S.a)(c,2),o=i[0],l=i[1],d=Object(r.useState)(null),u=Object(S.a)(d,2),j=u[0],m=u[1],h=Object(r.useState)(null),p=Object(S.a)(h,2),O=p[0],g=p[1],v=Object(r.useState)(null),f=Object(S.a)(v,2),x=f[0],w=f[1],H=Object(r.useState)(!0),N=Object(S.a)(H,2),I=N[0],A=N[1],k=Object(r.useState)(!0),P=Object(S.a)(k,2),C=P[0],T=P[1],M=Object(r.useState)(!0),D=Object(S.a)(M,2),U=D[0],B=D[1],E=Object(r.useState)(!0),L=Object(S.a)(E,2),F=L[0],R=L[1],J=function(){a(!n)};return Object(b.jsx)("div",{style:{display:e.formShow?"block":"none"},children:Object(b.jsxs)("div",{className:"form",children:[Object(b.jsxs)("form",{action:"#",style:{display:e.serverData&&!e.isPending?"block":"none"},children:[n?Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Please sign in to record your score."})}):null,Object(b.jsxs)("div",{className:"warn",children:[!1===C?"Wrong password":null,n&&!1===I?"The username doesn't exist.":null,U&&F?null:"Please enter your name and password"]}),Object(b.jsxs)("div",{className:"inputName",children:[Object(b.jsx)("input",{type:"text",placeholder:"Name",id:"name",onChange:function(t){""===t.target.value?B(!1):B(!0),l(!0);if(/^[a-z A-Z 0-9]{3,10}$/i.test(t.target.value)&&(l(!1),m(!1),null!==e.users)){var s,n=Object(y.a)(e.users);try{for(n.s();!(s=n.n()).done;){s.value.name.toUpperCase()===t.target.value.toUpperCase()&&m(!0)}}catch(a){n.e(a)}finally{n.f()}}}}),n?null:o?Object(b.jsx)("p",{className:"warn",children:"Please enter 3-10 characters."}):j?Object(b.jsx)("p",{className:"warn",children:"Already exist."}):null,Object(b.jsx)("input",{type:"password",id:"pass",placeholder:"Password",onChange:function(e){""===e.target.value?R(!1):R(!0),g(!1);/^[a-z A-Z 0-9]{4,10}$/i.test(e.target.value)&&g(!0)}}),n&&!1===O?Object(b.jsx)("p",{className:"warn",children:"Please enter 4-10 characters."}):null,n?null:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"password",id:"repeatPass",placeholder:"Repeat password",onChange:function(e){var t=document.getElementById("pass").value;w(t===e.target.value)}}),O?x?Object(b.jsx)("p",{className:"warn",style:{color:"green"},children:"Repeat password is matched."}):Object(b.jsx)("p",{className:"warn",children:"Repeat password doesn't match!"}):null]}),n?Object(b.jsx)("button",{onClick:function(){var t,s=document.getElementById("name").value,n=document.getElementById("pass").value,a=Object(y.a)(e.users);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.name.toUpperCase()===s.toUpperCase())return r.pass==n?(e.gameMenuHandler(s),A(!0),void T(!0)):(A(!0),void T(!1));A(!1),T(!0)}}catch(c){a.e(c)}finally{a.f()}},children:"Sign in"}):Object(b.jsx)("button",{onClick:function(){var t,s=document.getElementById("name").value,n=document.getElementById("pass").value,a=document.getElementById("repeatPass").value,r=Object(y.a)(e.users);try{for(r.s();!(t=r.n()).done;){if(t.value.name.toUpperCase()===s.toUpperCase())return void m(!0)}}catch(c){r.e(c)}finally{r.f()}if(a===n&&O&&x&&!1===j&&!o)return fetch("https://highestscores-7983d-default-rtdb.firebaseio.com/users.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,score:0,pass:n})}),e.gameMenuHandler(s),void e.informationHandler();!a===n&&j?x(!1):(""!==n&&null!==s||(T(!0),B(!1)),O||g(!1))},children:"Create Account"}),Object(b.jsx)("br",{}),n?Object(b.jsx)("a",{href:"#",onClick:J,children:"Create an account"}):Object(b.jsxs)("p",{children:["Already have an account? ",Object(b.jsx)("a",{href:"#",onClick:J,children:"Sign in"})]})]})]}),Object(b.jsx)("br",{}),e.signShow&&e.serverData?null:Object(b.jsx)("a",{href:"#",onClick:e.guestHandler,children:"Play as a guest"})]})})}),H=(s(45),function(e){return Object(b.jsxs)("div",{className:"menu",style:{display:e.menu?"block":"none"},children:[Object(b.jsxs)("p",{children:["The sound is ",Object(b.jsx)("strong",{children:e.muteMode?"OFF":"ON"})]}),Object(b.jsx)("button",{className:"backToPlay",onClick:e.getBackHandler,children:"Go to play"}),Object(b.jsx)("button",{className:"muteMode",onClick:e.muteModeHandler,children:e.muteMode?"Sound Mode":"Mute mode"}),e.serverData?e.guest?Object(b.jsx)("button",{className:"logIn",onClick:e.logInHandler,children:"Log in"}):Object(b.jsx)("button",{className:"logout",onClick:e.logOutHandler,children:"Log out"}):null,Object(b.jsxs)("p",{className:"tip",children:[Object(b.jsx)("strong",{children:"Tip:"})," Hit the play button and let the device choose a color, then Repeat the color sequence. It starts from one color and every level the device will add one more color. "]})]})}),N=0,I=function(e){Object(m.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(u.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={gameover:!1,play:!1,myTurn:!1,appInfo:!0,menu:!1,formShow:!0,guest:!1,signedIn:!1,muteMode:!1,myArr:[],machineArr:[],score:0,divId:["blue","red","yellow","green"],src:["assets/0.mp3","assets/1.mp3","assets/2.mp3","assets/3.mp3"],otherSounds:["assets/play.wav","assets/lose.wav"],initialState:e.state,newName:null,enterName:!1,newScore:0,isPending:!1,numberOftimes:0,serverData:!1,users:null,sortUsers:null,objectData:null},e.computerPlay=function(){n=Math.floor(4*Math.random()),e.state.machineArr.push(n),e.setState({machineArr:e.state.machineArr,myTurn:!1}),N=0,setTimeout((function(){e.playArrAudio()}),500)},e.playArrAudio=function(){e.setState({play:!0});var t=new Audio;N<e.state.machineArr.length&&(t.src=e.state.src[e.state.machineArr[N]],a=document.getElementById(e.state.divId[e.state.machineArr[N]]),t.play(),e.state.muteMode&&(t.volume=0),a.classList.add("down"),setTimeout((function(){a.classList.remove("down")}),300),N+=1),t.addEventListener("ended",e.playArrAudio),N===e.state.machineArr.length&&e.setState({myTurn:!0})},e.userPlay=function(t){n=e.state.divId.indexOf(t.target.id);var s=new Audio(e.state.src[n]);s.currentTime=0,e.state.play&&e.state.myTurn&&(s.play(),e.state.muteMode&&(s.volume=0),t.target.classList.add("down")),setTimeout((function(){t.target.classList.remove("down")}),200),e.state.myArr.push(n),e.setState({myArr:e.state.myArr});var a=JSON.stringify(e.state.myArr),r=JSON.stringify(e.state.machineArr);if(a===r&&e.state.play){var c=e.state.score+1;e.setState({score:c}),setTimeout((function(){e.computerPlay(),e.setState({myArr:[]})}),1e3)}a.length===r.length&&a!==r&&e.gameover()},e.gameover=function(){var t=new Audio(e.state.otherSounds[1]);t.play(),e.state.muteMode&&(t.volume=0),e.setState({machineArr:[],gameover:!0,play:!1,newScore:e.state.score}),setTimeout((function(){e.postHandler()}),100)},e.playHandler=function(){e.setState({score:0,machineArr:[],play:!0,myTurn:!1,numberOftimes:e.state.numberOftimes+1});var t=new Audio(e.state.otherSounds[0]);t.play(),e.state.muteMode&&(t.volume=0),setTimeout((function(){e.computerPlay()}),1e3)},e.saveHandler=function(){e.state.enterName&&e.setState({newName:e.state.newName})},e.componentDidMount=function(){var t=localStorage.getItem("name");null!==t&&e.setState({newName:t,formShow:!1,signedIn:!0,menu:!0}),e.informationHandler()},e.informationHandler=function(){e.setState({isPending:!0}),fetch("https://highestscores-7983d-default-rtdb.firebaseio.com/users.json").then((function(e){return e.json()})).then((function(t){var s=Object.values(t),n=Object(d.a)(s).sort((function(e,t){return t.score-e.score}));e.setState({objectData:t,users:s,sortUsers:n,isPending:!1,numberOftimes:s.length,serverData:!0})})).catch((function(){e.state.play||e.setState({formShow:!0}),e.setState({isPending:!1,serverData:!1,menu:!1})}))},e.postHandler=function(){var t,s=null;if(null!==e.state.users)for(var n in e.state.objectData)e.state.objectData[n].name===e.state.newName&&(s=e.state.newScore>e.state.objectData[n].score?e.state.newScore:e.state.objectData[n].score,t=n);null!=e.state.newName&&fetch("https://highestscores-7983d-default-rtdb.firebaseio.com/users/".concat(t,"/score.json"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})},e.gameMenuHandler=function(t){null!==t&&(localStorage.setItem("name",t),e.setState({newName:t,signedIn:!0})),e.setState({appInfo:!0,formShow:!1,menu:!0,guest:!1})},e.guestHandler=function(){e.setState({appInfo:!0,formShow:!1,guest:!0,menu:!0})},e.getBackHandler=function(){e.setState({appInfo:!1,formShow:!1,menu:!1})},e.logOutHandler=function(){e.informationHandler(),e.setState({appInfo:!0,menu:!1,gameover:!1,formShow:!0,signedIn:!0}),localStorage.clear()},e.logInHandler=function(){e.setState({appInfo:!0,menu:!1,gameover:!1,formShow:!0,guest:!1,signedIn:!0})},e.menuHandler=function(){e.setState({appInfo:!0,gameover:!1,play:!1}),e.setState({formShow:!1,menu:!0}),e.informationHandler()},e.tryAgainHandler=function(){e.setState({machineArr:[],myArr:[],score:0,gameover:!1,play:!1,myTurn:!1}),e.informationHandler()},e.muteModeHandler=function(){e.setState({muteMode:!e.state.muteMode})},e}return Object(j.a)(s,[{key:"render",value:function(){var e,t;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{gameover:this.state.gameover,score:this.state.score,newName:this.state.newName,serverData:this.state.serverData,tryAgainHandler:this.tryAgainHandler}),Object(b.jsx)(v,{enterName:this.state.enterName,newName:this.state.newName,newScore:this.state.newScore,isPending:this.state.isPending,serverData:this.state.serverData,sortUsers:this.state.sortUsers,appInfo:this.state.appInfo,numberOftimes:this.state.numberOftimes,signedIn:this.state.signedIn,menu:this.state.menu,muteMode:this.state.muteMode,informationHandler:this.informationHandler}),Object(b.jsx)(w,(e={change:this.changeHandler,clickSave:this.saveHandler,users:this.state.users,gameMenuHandler:this.gameMenuHandler,componentDidMount:this.componentDidMount,formShow:this.state.formShow,serverData:this.state.serverData,isPending:this.state.isPending,menuHandler:this.menuHandler,signedIn:this.state.signedIn},Object(l.a)(e,"isPending",this.state.isPending),Object(l.a)(e,"guestHandler",this.guestHandler),Object(l.a)(e,"informationHandler",this.informationHandler),e)),Object(b.jsx)(H,(t={menu:this.state.menu,guest:this.state.guest,logOutHandler:this.logOutHandler,logInHandler:this.logInHandler,menuHandler:this.menuHandler,getBackHandler:this.getBackHandler,isPending:this.state.isPending,serverData:this.state.serverData,muteMode:this.state.muteMode},Object(l.a)(t,"serverData",this.state.serverData),Object(l.a)(t,"muteModeHandler",this.muteModeHandler),t)),Object(b.jsx)(x,{gameover:this.state.gameover,play:this.state.play,myTurn:this.state.myTurn,score:this.state.score,menuHandler:this.menuHandler,playHandler:this.playHandler,newName:this.state.newName,formShow:this.state.formShow,guest:this.state.guest}),Object(b.jsx)(f,{click:this.userPlay,divId:this.state.divId})]})}}]),s}(r.Component),A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))},k=s(2),P=(s(46),function(){var e=Object(k.f)().state;return Object(b.jsxs)("div",{className:"users",children:[Object(b.jsx)("h1",{children:"All Scores"}),Object(b.jsx)("ul",{children:void 0!==e?e.map((function(e,t){return Object(b.jsxs)("li",{children:[t+1,"- ",e.name," ",Object(b.jsx)("p",{children:e.score})]},t)})):null})]})});o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsxs)(O.a,{children:[Object(b.jsx)(k.a,{exact:!0,path:"/",children:Object(b.jsx)(I,{})}),Object(b.jsx)(k.c,{children:Object(b.jsx)(k.a,{path:"/users",children:Object(b.jsx)(P,{})})})]})}),document.getElementById("root")),A()}},[[47,1,2]]]);
//# sourceMappingURL=main.7e647670.chunk.js.map
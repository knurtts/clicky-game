(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Biolante",img:"../assets/images/Biolante.jpg"},{id:2,name:"Destroyah",img:"../assets/images/Destroyah.jpg"},{id:3,name:"Ghidorah",img:"../assets/images/Ghidorah.jpg"},{id:4,name:"Godzilla",img:"../assets/images/Godzilla.jpg"},{id:5,name:"Goji2014",img:"../assets/images/goji001.jpg"},{id:6,name:"GvGhidorah",img:"../assets/images/GvGhidorah.jpg"},{id:7,name:"GvMothra",img:"../assets/images/GvMothra.jpg"},{id:8,name:"GvSG",img:"../assets/images/GvsSG.jpg"},{id:9,name:"Mothra",img:"../assets/images/Mothra.jpg"},{id:10,name:"rodan",img:"../assets/images/rodan.jpg"},{id:11,name:"ShinGoji",img:"../assets/images/ShinGoji.jpg"},{id:12,name:"GojiReturn",img:"../assets/images/GojiReturn.jpg"}]},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=17},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(3),o=t.n(i),r=(t(15),t(4)),c=t(5),l=t(7),m=t(6),d=t(8);var g=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"jumbotron jumbotron-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:"col-md-4"},"The Godzilla Clicky-Game"),s.a.createElement("p",{className:"col-md-4"},s.a.createElement("strong",null,"Click on an image to increase your score. But don't click on the same one twice!")),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"row"},s.a.createElement("h3",null,"Your Score: ",e.currentScore)),s.a.createElement("div",{className:"row"},s.a.createElement("h3",null,"High Score: ",e.highScore))))))};t(16);function u(e){return s.a.createElement("div",{className:"card shake"},s.a.createElement("img",{src:t(17)(e.src),className:"card-img-top",alt:e.name,onClick:function(){e.clicked(e.idCard)},id:e.idCard}))}t(18);var h=t(1),f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={gojis:h,score:0,maxScore:0,active:!1,clicked:[0]},t.increaseScore=function(){t.setState({score:t.state.score+1}),t.toggleClass()},t.shuffleData=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n,a--}return e},t.toggleClass=function(){var e=t.state.active;t.setState({active:!e})},t.isClicked=function(e){for(var a=0;a<t.state.clicked.length;a++){if(t.state.clicked.includes(e)){t.endGame();break}t.setState({gojis:t.shuffleData(h),score:t.state.score+1,clicked:t.state.clicked.concat(e)})}},t.endGame=function(){t.state.score>t.state.maxScore?(t.setState({maxScore:t.state.score,score:0,clicked:[0],gojis:t.shuffleData(h)}),alert("Nope! You've clicked that one before.")):(t.setState({score:0,clicked:[0],gojis:t.shuffleData(h)}),alert("Nope! You've clicked that one before."))},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(g,{currentScore:this.state.score,highScore:this.state.maxScore,end:this.endGame}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.gojis.map(function(a){return s.a.createElement(u,{idCard:a.id,src:a.img,name:a.name,increaseScore:e.increaseScore,toggle:e.toggleClass,newClass:e.state.active?"shake":null,clicked:e.isClicked})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.eebe35b9.chunk.js.map
(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},61:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(26),i=c.n(a),r=(c(35),c(36),c(37),c(0));var o=function(){return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("img",{className:"login-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"}),Object(r.jsxs)("div",{className:"signup",children:[Object(r.jsxs)("form",{children:[Object(r.jsx)("h1",{children:"Sign in"}),Object(r.jsx)("input",{type:"email",placeholder:"Email"}),Object(r.jsx)("input",{type:"password",placeholder:"Password"}),Object(r.jsx)("button",{type:"submit",children:"Login"})]}),Object(r.jsxs)("div",{className:"signup-footer",children:[Object(r.jsx)("span",{className:"signup-gray",children:"Net to Netflix?"}),Object(r.jsx)("span",{className:"signup-link",children:"Sign up Now."})]})]})]})},l=c(9);c(39);var j=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1],a=("".concat("\uc131\uc778"),function(){window.scrollY>100?s(!0):s(!1)});return Object(n.useEffect)((function(){return window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[]),Object(r.jsx)("div",{className:"nav ".concat(!0===c&&"nav-black"),children:Object(r.jsxs)("div",{className:"nav-contents",children:[Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:"",className:"nav-logo"}),Object(r.jsx)("img",{src:"https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg",alt:"",className:"nav-avatar"})]})})},d=c(10),b=c.n(d),h=c(12),u=(c(41),c(27)),p=c.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),f="15f0ef0787e7dd82c1d0a04a9d5be09d",v={fetchTrending:"/trending/all/week?api_key=".concat(f,"&languages=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(f,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(f,"&languages=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(f,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(f,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(f,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(f,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(f,"&with_genres=99")};var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(v.fetchNetflixOriginals);case 2:t=e.sent,s(t.data.results[Math.floor(20*Math.random())]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var a,i,o={backgroundSize:"cover",backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(c.backdrop_path,"')"),backgroundPosition:"center center"};return Object(r.jsxs)("div",{className:"banner",style:o,children:[Object(r.jsxs)("div",{className:"banner-contents",children:[Object(r.jsx)("h1",{className:"banner-title",children:c.name}),Object(r.jsxs)("div",{className:"banner-buttons",children:[Object(r.jsx)("button",{className:"banner-button",children:"Play"}),Object(r.jsx)("button",{className:"banner-button",children:"My LIst"})]}),Object(r.jsx)("h1",{className:"banner-desc",children:(a=c.overview,i=120,(null===a||void 0===a?void 0:a.length)>i?a.substr(0,i)+"...":a)})]}),Object(r.jsx)("div",{className:"banner-fadeBottom"})]})};c(61);var g=function(e){var t=e.title,c=e.fetchUrl,s=e.isLarge,a=void 0!==s&&s,i=Object(n.useState)([]),o=Object(l.a)(i,2),j=o[0],d=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(c);case 2:t=e.sent,d(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(j),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("div",{className:"row-posters",children:j.map((function(e){return Object(r.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path),className:"row-poster ".concat(a&&"row-poster-large")})}))})]})};var x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(m,{}),Object(r.jsx)(g,{title:"Tending Now",fetchUrl:v.fetchTrending,isLarge:!0})," ",Object(r.jsx)(g,{title:"Top Rated",fetchUrl:v.fetchTopRated})," ",Object(r.jsx)(g,{title:"Action Movies",fetchUrl:v.fetchActionMovies}),Object(r.jsx)(g,{title:"Comedy Movies",fetchUrl:v.fetchComedyMovies}),Object(r.jsx)(g,{title:"Horror Movies",fetchUrl:v.fetchHorrorMovies}),Object(r.jsx)(g,{title:"Romance Movies",fetchUrl:v.fetchRomanceMovies}),Object(r.jsx)(g,{title:"Documentaries",fetchUrl:v.fetchDocumentaries})]})},O=c(28),w=c(2);var N=function(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(O.a,{children:Object(r.jsxs)(w.c,{children:[Object(r.jsx)(w.a,{path:"/signup",children:Object(r.jsx)(o,{})}),Object(r.jsx)(w.a,{path:"/",children:Object(r.jsx)(x,{})})]})})})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.67477e82.chunk.js.map
(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{41:function(e,t,a){e.exports=a(86)},50:function(e,t,a){},51:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=a(8),i=a(9),s=(a(50),a(51),a(21)),m=a(2),u=a(3),p=a(5),d=a(4),h=a(6),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onChange=function(t){return e.setState(Object(s.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.history.push("/search?q=".concat(e.state.term))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.term;return c.a.createElement("form",{className:"my-2 my-lg-0 ml-auto",onSubmit:this.onSubmit},c.a.createElement("div",{className:"search-container"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("input",{className:"mr-sm-2 inpt-search",type:"search",placeholder:"Search for a movie","aria-label":"Search",value:e,name:"term",onChange:this.onChange})))}}]),a}(n.Component),E=Object(h.f)(v),b=c.a.createElement("svg",{height:"24",viewBox:"0 0 192 192",width:"24"},c.a.createElement("path",{d:"m192 96c0-53.019531-42.980469-96-96-96s-96 42.980469-96 96 42.980469 96 96 96h96v-16h-43c26.839844-17.769531 42.988281-47.808594 43-80zm-48.976562 64.722656c-10.722657 7.789063-25.734376 5.414063-33.523438-5.3125-7.789062-10.722656-5.414062-25.730468 5.308594-33.523437 10.726562-7.789063 25.734375-5.414063 33.523437 5.3125 7.792969 10.722656 5.414063 25.730469-5.308593 33.523437zm-1.179688-104.851562c12.605469-4.097656 26.144531 2.800781 30.242188 15.40625 4.09375 12.609375-2.804688 26.148437-15.410157 30.242187-12.605469 4.097657-26.144531-2.800781-30.242187-15.40625-4.09375-12.605469 2.804687-26.148437 15.410156-30.242187zm-45.84375-39.871094c13.253906 0 24 10.746094 24 24s-10.746094 24-24 24-24-10.746094-24-24 10.746094-24 24-24zm-76.085938 55.277344c4.097657-12.605469 17.636719-19.503906 30.242188-15.410156 12.605469 4.097656 19.503906 17.636718 15.410156 30.242187-4.097656 12.605469-17.636718 19.503906-30.242187 15.410156s-19.503907-17.632812-15.410157-30.242187zm62.585938 84.132812c-7.789062 10.726563-22.800781 13.101563-33.523438 5.3125-10.722656-7.792968-13.101562-22.800781-5.308593-33.523437 7.789062-10.722657 22.800781-13.101563 33.523437-5.308594 10.722656 7.789063 13.097656 22.796875 5.308594 33.519531zm5.5-59.410156c0-4.417969 3.582031-8 8-8s8 3.582031 8 8-3.582031 8-8 8-8-3.582031-8-8zm0 0"})),g=c.a.createElement("svg",{viewBox:"0 0 56.966 56.966",height:"24",width:"24"},c.a.createElement("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\r s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\r c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\r s-17-7.626-17-17S14.61,6,23.984,6z"})),f=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{className:"navbar-brand",to:"/"},b," Movie Search"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},g),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement(E,null))))},O=a(15),y=a.n(O),N=function(e){var t=e.result,a=t.poster_path,n=t.title,r=t.release_date,l=t.id;return c.a.createElement("div",{className:"col-8 mx-auto col-lg-3 text-center my-3"},c.a.createElement("div",{className:"p-3 img-link-container"},c.a.createElement(o.b,{to:"/movie/"+l},c.a.createElement("img",{src:a&&"https://image.tmdb.org/t/p/w500/"+a||"/movie-finder/images/movie-default.jpg",alt:"",className:"img-fluid img-link-img"}))),c.a.createElement("h5",null,n),c.a.createElement("h5",null,r))},j=(a(70),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.Search("/now_playing")}},{key:"onBtnClick",value:function(e){this.props.Search(e)}},{key:"render",value:function(){var e,t=this.props.search.movies.loading,a=this.props.search.movies.data.results;return e=t?c.a.createElement("p",null,"Loading"):void 0===a||0===a.length?c.a.createElement("p",null,"No Results"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},c.a.createElement("h1",{className:"text-slanted"},"Movies"))),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(N,{result:e,key:e.id})})))),c.a.createElement("section",{className:"search-results"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mb-5"},c.a.createElement("div",{className:"col-lg-8 mx-auto d-flex justify-content-around flex-wrap"},c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/now_playing")},"Now Showing"),c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/upcoming")},"Upcoming"),c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/popular")},"Popular"),c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/top_rated")},"Top Rated"))),e))}}]),a}(n.Component)),x=Object(h.f)(Object(i.b)((function(e){return{search:e.search}}),{Search:function(e){return function(t){t({type:"SEARCH_MOVIES_LOADING"}),y.a.get("https://api.themoviedb.org/3/movie".concat(e,"?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then((function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:e.data})})).catch((function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:[]})}))}}})(j)),_=(a(71),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).redirect=function(t){e.props.history.push(t)},e}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row header-details d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"banner text-center"},c.a.createElement("h1",{className:"text-uppercase w-50 mx-auto"},"Welcome to Movie Search"),c.a.createElement("img",{src:"/movie-finder/images/moviedb.png",className:"img_mdb",alt:""})))))),c.a.createElement(x,null))}}]),a}(n.Component)),k=function(){return c.a.createElement(c.a.Fragment,null,"Nothing Here.........")},S=(a(72),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentWillMount",value:function(){this.props.LoadMovie(this.props.id)}},{key:"render",value:function(){var e,t="/movie-finder/images/cinema.jpg",a=this.props.movies.loading,n=this.props.movies.single,r=n.title,l=n.poster_path,o=n.tagline,i=n.overview,s=n.release_date,m=n.runtime,u=n.revenue,p=n.vote_average,d=n.genres,h=n.backdrop_path;return a?e=c.a.createElement("p",null,"Loading"):void 0===r?e=c.a.createElement("p",null,"No matches ! Please check your link again"):(h&&(t="https://image.tmdb.org/t/p/original//".concat(h)),e=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-10 mx-auto col-md-4 text-center my-3"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+l,alt:"",className:"img-fluid"})),c.a.createElement("div",{className:"col-10 mx-auto col-md-8  my-3"},c.a.createElement("h1",{className:"text-center text-uppercase"},r),c.a.createElement("h4",{className:"text-center text-uppercase text-slanted"},o),c.a.createElement("p",null,i),c.a.createElement("div",{className:"d-flex justify-content-around flex-wrap my-4"},d.map((function(e){return c.a.createElement("span",{key:e.id},e.name)}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Original Release"),c.a.createElement("span",null,s)),c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Running Time"),c.a.createElement("span",null,m)),c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Box Office"),c.a.createElement("span",null,u)),c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Vote Average"),c.a.createElement("span",null,p)))))),c.a.createElement("section",{style:{background:"url('".concat(t,"')center/cover fixed no-repeat")},className:"movie-hero"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row hero-box align-items-center justify-content-center"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row movie-detalis"},e)))))}}]),a}(n.Component)),A=Object(i.b)((function(e){return{movies:e.movies}}),{LoadMovie:function(e){return function(t){t({type:"MOVIES_LOADING"}),y.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then((function(e){return t({type:"MOVIE_LOAD",payload:e.data})})).catch((function(e){return t({type:"MOVIE_LOAD",payload:[]})}))}}})(S),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.actor,t=e.name,a=e.character,n=e.profile_path,r=e.id;return c.a.createElement("div",{className:"col-5 mx-auto col-md-3 col-lg-2 text-center my-3"},c.a.createElement("div",{className:"p-3 img-link-container"},c.a.createElement(o.b,{to:"/actor/"+r},c.a.createElement("img",{src:n&&"https://image.tmdb.org/t/p/w500/"+n||"/movie-finder/images/default.jpg",alt:"",className:"img-fluid img-link-img"}))),c.a.createElement("h5",{className:"text-muted text-slanted mt-3"},a),c.a.createElement("h5",null,t))}}]),a}(n.Component),C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentWillMount",value:function(){this.props.LoadActors(this.props.id)}},{key:"render",value:function(){var e,t=this.props.actors.loading,a=this.props.actors.data.cast;return e=t?c.a.createElement("p",null,"Loading"):void 0===a?c.a.createElement("p",null,"No cast for this movie"):this.props.actors.data.cast.map((function(e){return c.a.createElement(w,{key:e.id,actor:e})})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase my-3"},c.a.createElement("h1",{className:"text-slanted"},"Cast"))),c.a.createElement("div",{className:"row"},e))}}]),a}(n.Component),L=Object(i.b)((function(e){return{actors:e.actors}}),{LoadActors:function(e){return function(t){t({type:"ACTORS_LOADING"}),y.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a7b63eebbe05462bc8265651583d5069")).then((function(e){return t({type:"ACTORS_LOAD",payload:e.data})})).catch((function(e){return t({type:"ACTORS_LOAD",payload:[]})}))}}})(C),D=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{id:this.props.match.params.id}),c.a.createElement(L,{id:this.props.match.params.id}))}}]),a}(n.Component),M=(a(73),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentWillMount",value:function(){this.props.LoadActor(this.props.id)}},{key:"render",value:function(){var e,t=this.props.actors.loading,a=this.props.actors.single,n=a.name,r=a.profile_path,l=a.biography,o=a.place_of_birth;return e=t?c.a.createElement("p",null,"Loading"):void 0===n?c.a.createElement("p",null,"Sorry, No matches, Please check your link again"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-10 mx-auto col-md-4 text-center my-3"},c.a.createElement("h1",{className:"text-center text-uppercase"},n),c.a.createElement("img",{src:r&&"https://image.tmdb.org/t/p/w500"+r||"/movie-finder/images/default.jpg",alt:"",className:"img-fluid"}),c.a.createElement("h4",{className:"text-center mt-2"},o))),l?c.a.createElement("div",{className:"row my-5"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},c.a.createElement("h1",{className:"text-slanted text-uppercase"},"biography")),c.a.createElement("div",{className:"col-10 mx-auto col-md-12 my-3"},c.a.createElement("p",null,l))):null),c.a.createElement("section",{className:"actor-hero"},c.a.createElement("div",{className:"container"},e))}}]),a}(n.Component)),I=Object(i.b)((function(e){return{actors:e.actors}}),{LoadActor:function(e){return function(t){t({type:"ACTORS_LOADING"}),y.a.get("https://api.themoviedb.org/3/person/".concat(e,"?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then((function(e){return t({type:"ACTOR_LOAD",payload:e.data})})).catch((function(e){return t({type:"ACTOR_LOAD",payload:[]})}))}}})(M),R=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.character,n=e.poster_path,r=e.release_date,l=e.id;return c.a.createElement("div",{className:"col-8 mx-auto col-md-3 col-lg-2 text-center my-3"},c.a.createElement("div",{className:"p-3 img-link-container"},c.a.createElement(o.b,{to:"/movie/"+l},c.a.createElement("img",{src:n&&"https://image.tmdb.org/t/p/w500/"+n||"/movie-finder/images/movie-default.jpg",alt:"",className:"img-fluid img-link-img"}))),c.a.createElement("h5",{className:"text-muted text-slanted mt-3"},a),c.a.createElement("h5",null,t),c.a.createElement("h5",null,r))}}]),a}(n.Component),V=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentWillMount",value:function(){this.props.LoadMovies(this.props.id)}},{key:"render",value:function(){var e,t=this.props.movies.loading,a=this.props.movies.data.cast;return e=t?c.a.createElement("p",null,"Loading"):void 0===a?c.a.createElement("p",null,"No Movies for this actor"):a.map((function(e){return c.a.createElement(R,{key:e.id,movie:e})})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase my-4"},c.a.createElement("h1",{className:"text-slanted"},"Movies"))),c.a.createElement("div",{className:"row"},e))}}]),a}(n.Component),T=Object(i.b)((function(e){return{movies:e.movies}}),{LoadMovies:function(e){return function(t){t({type:"MOVIES_LOADING"}),y.a.get("https://api.themoviedb.org/3/person/".concat(e,"/movie_credits?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then((function(e){return t({type:"MOVIES_LOAD",payload:e.data})})).catch((function(e){return t({type:"MOVIES_LOAD",payload:[]})}))}}})(V),F=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(I,{id:this.props.match.params.id}),c.a.createElement(T,{id:this.props.match.params.id}))}}]),a}(n.Component),z=a(27),B=a.n(z),G=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={search_query:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=B.a.parse(this.props.location.search,{ignoreQueryPrefix:!0}).q;this.setState({search_query:e}),this.props.Search(e)}},{key:"render",value:function(){var e,t=this.props.search.movies.loading,a=this.props.search.movies.data.results;return e=t?c.a.createElement("p",null,"Loading"):void 0===a||0===a.length?c.a.createElement("p",null,"No Results"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},c.a.createElement("h1",{className:"text-slanted"},"Movies"))),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(N,{result:e,key:e.id})})))),c.a.createElement("section",{className:"search-results"},c.a.createElement("div",{className:"container"},e))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=B.a.parse(e.location.search,{ignoreQueryPrefix:!0}).q;return t.search_query===a?t:(e.Search(a),{search_query:a})}}]),a}(n.Component),H=Object(i.b)((function(e){return{search:e.search}}),{Search:function(e){return function(t){t({type:"SEARCH_MOVIES_LOADING"}),y.a.get("https://api.themoviedb.org/3/search/movie?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US&page=1&include_adult=false&query=".concat(e)).then((function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:e.data})})).catch((function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:[]})}))}}})(G),q=Object(h.f)((function(){return c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:_}),c.a.createElement(h.a,{exact:!0,path:"/movie/:id",component:D}),c.a.createElement(h.a,{exact:!0,path:"/actor/:id",component:F}),c.a.createElement(h.a,{exact:!0,path:"/search",component:H}),c.a.createElement(h.a,{exact:!0,path:"/now_playing",component:x}),c.a.createElement(h.a,{exact:!0,path:"/popular",component:x}),c.a.createElement(h.a,{exact:!0,path:"/top_rated",component:x}),c.a.createElement(h.a,{exact:!0,path:"/upcoming",component:x}),c.a.createElement(h.a,{component:k}))})),P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement(q,null))},U=a(16),W=a(40),J=a(7),Q={data:{},loading:!0,single:{}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTORS_LOAD":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,data:t.payload});case"ACTORS_LOADING":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"ACTOR_LOAD":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,single:t.payload});default:return e}},X={data:{},loading:!0,single:{}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIES_LOAD":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,data:t.payload});case"MOVIES_LOADING":return Object(J.a)(Object(J.a)({},e),{},{loading:!0});case"MOVIE_LOAD":return Object(J.a)(Object(J.a)({},e),{},{loading:!1,single:t.payload});default:return e}},Z={movies:{loading:!0,data:[]}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIES_LOADING":return Object(J.a)(Object(J.a)({},e),{},{movies:Object(J.a)(Object(J.a)({},e.movies),{},{loading:!0})});case"SEARCH_MOVIES_LOADED":return Object(J.a)(Object(J.a)({},e),{},{movies:{data:t.payload,loading:!1}});default:return e}},ee=Object(U.c)({actors:K,movies:Y,search:$}),te=[W.a],ae=Object(U.e)(ee,{},Object(U.d)(U.a.apply(void 0,te))),ne=c.a.createElement(i.a,{store:ae},c.a.createElement(o.a,null,c.a.createElement(P,null)));l.a.render(ne,document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.171b1d47.chunk.js.map
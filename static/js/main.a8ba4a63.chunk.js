(this["webpackJsonpreact-movie-oldway"]=this["webpackJsonpreact-movie-oldway"]||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(15),r=s.n(i),c=s(6),o=s.n(c),l=s(16),m=s(17),d=s(18),j=s(21),v=s(20),u=s(19),h=s.n(u),b=(s(45),s(0));var x=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:n,className:"movie_cover",alt:s,title:s}),Object(b.jsxs)("div",{className:"movie_data",children:[Object(b.jsx)("h3",{className:"movie_title",children:s}),Object(b.jsx)("h5",{className:"movie_year",children:t}),Object(b.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))}),Object(b.jsxs)("p",{className:"movie_summary",children:[a.slice(0,235),"..."]})]})]})},p=(s(47),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a}),e.setState({isLoading:!1}),console.log(a);case 7:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"renderMovie",value:function(e,t){return console.log("index",t),Object(b.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.index)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader_text",children:"Lodaing..."})}):Object(b.jsx)("div",{className:"movies",children:s.map(this.renderMovie)})})}}]),s}(n.a.Component)),O=p;r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a8ba4a63.chunk.js.map
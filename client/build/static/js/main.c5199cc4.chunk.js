(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(50)},45:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(53),s=a(54),u=a(55);function i(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function m(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function E(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var d=a(4),f=a(21),p=a(8),v=a(6),b="UPDATE_POSTS",h="REMOVE_POST",g="ADD_POST",O="LOADING",j=Object(n.createContext)(),P=j.Provider,y=function(e,t){switch(t.type){case"SET_CURRENT_POST":return Object(v.a)({},e,{currentPost:t.post,loading:!1});case b:return Object(v.a)({},e,{posts:Object(p.a)(t.posts),loading:!1});case g:return Object(v.a)({},e,{posts:[t.post].concat(Object(p.a)(e.posts)),loading:!1});case h:return Object(v.a)({},e,{posts:e.posts.filter(function(e){return e._id!==t._id})});case"ADD_FAVORITE":return Object(v.a)({},e,{favorites:[t.post].concat(Object(p.a)(e.favorites)),loading:!1});case"UPDATE_FAVORITES":return Object(v.a)({},e,{favorites:Object(p.a)(e.favorites),loading:!1});case"REMOVE_FAVORITE":return Object(v.a)({},e,{favorites:e.favorites.filter(function(e){return e._id!==t._id})});case O:return Object(v.a)({},e,{loading:!0});default:return e}},N=function(e){e.value;var t=Object(f.a)(e,["value"]),a=Object(n.useReducer)(y,{posts:[],currentPost:{_id:0,title:"",body:"",author:""},favorites:[],loading:!1}),c=Object(d.a)(a,2),l=c[0],o=c[1];return r.a.createElement(P,Object.assign({value:[l,o]},t))},_=function(){return Object(n.useContext)(j)},R=a(7),T=a.n(R),A={getPosts:function(){return T.a.get("/api/posts")},getPost:function(e){return T.a.get("/api/posts/"+e)},deletePost:function(e){return T.a.delete("/api/posts/"+e)},savePost:function(e){return T.a.post("/api/posts",e)}};var x=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=_(),l=Object(d.a)(c,2),o=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("img",{className:"img-fluid img-thumbnail",src:"https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})),r.a.createElement("h1",null,"Create a blog post"),r.a.createElement("form",{className:"form-group mt-5 mb-5",onSubmit:function(n){n.preventDefault(),s({type:O}),A.savePost({title:e.current.value,body:t.current.value,author:a.current.value}).then(function(e){s({type:g,post:e.data})}).catch(function(e){return console.log(e)}),e.current.value="",t.current.value=""}},r.a.createElement("input",{className:"form-control mb-5",required:!0,ref:e,placeholder:"Title"}),r.a.createElement("textarea",{className:"form-control mb-5",required:!0,ref:t,placeholder:"Body"}),r.a.createElement("input",{className:"form-control mb-5",ref:a,placeholder:"Screen name"}),r.a.createElement("button",{className:"btn btn-success mt-3 mb-5",disabled:o.loading,type:"submit"},"Save Post")))};a(45);function F(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function S(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}a(46);var w=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},C=a(52);var k=function(){var e=_(),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){c({type:O}),A.getPosts().then(function(e){c({type:b,posts:e.data})}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",null,r.a.createElement("h1",null,"All Blog Posts"),r.a.createElement("h3",{className:"mb-5 mt-5"},"Click on a post to view"),a.posts.length?r.a.createElement(F,null,a.posts.map(function(e){return r.a.createElement(S,{key:e._id},r.a.createElement(C.a,{to:"/posts/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(w,{onClick:function(){return t=e._id,void A.deletePost(t).then(function(){c({type:h,_id:t})}).catch(function(e){return console.log(e)});var t}}))})):r.a.createElement("h3",null,"You haven't added any posts yet!"),r.a.createElement("div",{className:"mt-5"},r.a.createElement(C.a,{to:"favorites"},"View favorites")))},V=function(){return r.a.createElement(i,{fluid:!0},r.a.createElement(m,null,r.a.createElement(E,{size:"md-6"},r.a.createElement(x,null)),r.a.createElement(E,{size:"md-6 sm-12"},r.a.createElement(k,null))))};var D=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron border border-success"},t)},I=function(e){var t=_(),a=Object(d.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)(function(){A.getPost(e.match.params.id).then(function(e){return l({type:"SET_CURRENT_POST",post:e.data})}).catch(function(e){return console.log(e)})},[]);return r.a.createElement(r.a.Fragment,null,c.currentPost?r.a.createElement(i,{fluid:!0},r.a.createElement(m,null,r.a.createElement(E,{size:"md-12"},r.a.createElement(D,null,r.a.createElement("h1",null,c.currentPost.title," by ",c.currentPost.author)))),r.a.createElement(m,null,r.a.createElement(E,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Content:"),r.a.createElement("p",null,c.currentPost.body))),-1!==c.favorites.indexOf(c.currentPost)?r.a.createElement("button",{className:"btn btn-danger",onClick:function(){l({type:"REMOVE_FAVORITE",_id:c.currentPost._id})}},"Remove from Favorites!"):r.a.createElement("button",{className:"btn",onClick:function(){l({type:"ADD_FAVORITE",post:c.currentPost})}},"\u2764\ufe0f Add to Favorites")),r.a.createElement(m,null,r.a.createElement(E,{size:"md-2"},r.a.createElement(C.a,{to:"/"},"\u2190 Back to Posts")))):r.a.createElement("div",null,"loading..."))},z=function(){return r.a.createElement(i,{fluid:!0},r.a.createElement(m,null,r.a.createElement(E,{size:"md-12"},r.a.createElement(D,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var B=function(){var e=_(),t=Object(d.a)(e,1)[0];return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Your personal CMS"),t.loading?r.a.createElement("a",{className:"navbar-brand ml-auto"},"Loading..."):r.a.createElement(r.a.Fragment,null))},M=function(){var e=_(),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){c({type:O}),c({type:"UPDATE_FAVORITES"})},[]),r.a.createElement("div",{className:"container mb-5 mt-5"},r.a.createElement("h1",{className:"text-center"},"Here's All of Your Favorite Posts"),a.favorites.length?r.a.createElement(F,null,r.a.createElement("h3",{className:"mb-5 mt-5"},"Click on a post to view in detail"),a.favorites.map(function(e){return r.a.createElement(S,{key:e._id},r.a.createElement(C.a,{to:"/posts/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(w,{onClick:function(){return t=e._id,void c({type:"REMOVE_FAVORITE",_id:t});var t}}))})):r.a.createElement("h3",null,"You haven't added any favorites yet!"),r.a.createElement("div",{className:"mt-5"},r.a.createElement(C.a,{to:"home"},"Back to home")))};var U=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(B,null),r.a.createElement(s.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:V}),r.a.createElement(u.a,{exact:!0,path:"/home",component:V}),r.a.createElement(u.a,{exact:!0,path:"/favorites",component:M}),r.a.createElement(u.a,{exact:!0,path:"/posts/:id",component:I}),r.a.createElement(u.a,{component:z})))))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c5199cc4.chunk.js.map
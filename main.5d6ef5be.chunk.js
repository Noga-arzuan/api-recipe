(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{153:function(e,t,c){},174:function(e,t){},467:function(e,t,c){},468:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c.n(a),j=c(22),r=c.n(j),i=(c(153),c(28)),o=c(29),d=c(31),l=c(30),b=c(36),h=c(4);var O=function(){return Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"/feel-good",children:"Feel Good"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"/about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"/Menu",children:"Menu"})})]})})},u=c(42),x=c.n(u),p=c(61),f=c(62),m=c.n(f),y=(c(174),c(175),function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleOnClick=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://type.fit/api/quotes");case 2:t=e.sent,console.log(t.data),n.setState({data:t.data}),console.log(n.state);case 6:case"end":return e.stop()}}),e)}))),n.state={data:null},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleOnClick,children:" Inspiration Quote For Today"}),this.state.data&&e.state.data.slice(0,1).map((function(e){return console.log(e),Object(n.jsxs)("div",{className:"quote",children:[" ",Object(n.jsxs)("h1",{children:['"',e.text,'" ']}),Object(n.jsxs)("h1",{children:[" ",e.author]})]})})),Object(n.jsx)("h1",{className:"feel",children:"Lets Feel Good"})]})}}]),c}(s.a.Component)),v=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("table",{children:Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Day"}),Object(n.jsx)("th",{children:"Monday"}),Object(n.jsx)("th",{children:"Tuesday"}),Object(n.jsx)("th",{children:"Wednesday"}),Object(n.jsx)("th",{children:"Thursday"}),Object(n.jsx)("th",{children:"Friday"}),Object(n.jsx)("th",{children:"Saturday"}),Object(n.jsx)("th",{children:"Sunday"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Breakfast"}),Object(n.jsx)("td",{children:" "}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{children:" "}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Lunch"}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Dinner"}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{})]})]})})})}}]),c}(s.a.Component),g=c.p+"static/media/about2.eeb97de0.jpg",k=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"About Us"}),Object(n.jsxs)("p",{children:[" We at myHome restaurant wants to let",Object(n.jsx)("br",{}),"you plain, control and enjoy all of your daily meals for you and your family ",Object(n.jsx)("br",{}),"At  myHome restart we believe that food ",Object(n.jsx)("br",{}),"is the thing that occupies you more",Object(n.jsx)("br",{}),"than anything else in your life, and that you",Object(n.jsx)("br",{}),"delicate to it a lot of your time, almost every day and definitely every week.",Object(n.jsx)("br",{}),"We believe that we can give you happy tools to make it fun to you and  your beloved one "]}),Object(n.jsx)("img",{src:g,className:"App-logo",alt:"logo"})]})},C=function(e){return console.log(e.recipe),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:e.recipe.recipe.image,alt:""}),Object(n.jsx)("br",{}),Object(n.jsx)("h1",{children:e.recipe.recipe.label}),Object(n.jsxs)("p",{children:["calories--",e.recipe.recipe.calories]}),Object(n.jsx)("ol",{children:e.recipe.recipe.ingredients.slice(0,5).map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsxs)("h4",{children:["source:",e.recipe.recipe.source]}),Object(n.jsx)("a",{href:e.recipe.recipe.url,children:"Link to recipe"})]})},w=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleOnClick=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"01b159db"," 661a4d9495d5b5915081d2aadf4d2386",e.next=4,m.a.get("https://api.edamam.com/search?app_id=".concat("01b159db","&app_key=").concat(" 661a4d9495d5b5915081d2aadf4d2386","&q=").concat(n.state.value));case 4:t=e.sent,n.setState({data:t.data.hits}),console.log(t.hits);case 7:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){n.setState({value:e.target.value})},n.state={value:"",data:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:"input",value:this.state.value,onChange:this.handleChange}),Object(n.jsx)("button",{className:"button",onClick:this.handleOnClick,children:"Search Recipe "}),Object(n.jsx)("form",{}),this.state.data.slice(0,9).map((function(e){return Object(n.jsx)(C,{recipe:e})})),Object(n.jsx)("img",{src:g,className:"App-logo2",alt:"logo"})]})}}]),c}(s.a.Component),F=(c(467),function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(O,{}),Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/",component:w}),Object(n.jsx)(h.a,{path:"/feel-good/",component:y}),Object(n.jsx)(h.a,{path:"/about",component:k}),Object(n.jsx)(h.a,{path:"/Menu",component:v})]})]})})}}]),c}(s.a.Component)),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,469)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),a(e),s(e),j(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),N()}},[[468,1,2]]]);
//# sourceMappingURL=main.5d6ef5be.chunk.js.map
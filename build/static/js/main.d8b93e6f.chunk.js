(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){e.exports={cardContainer:"Home_cardContainer__3jg3d",gif:"Home_gif__2iwNN",loading:"Home_loading__1FWbf",separacion:"Home_separacion__37esP",btn:"Home_btn__1VNUL"}},15:function(e,t,a){e.exports={gif:"Detail_gif__3GaCC",detalle:"Detail_detalle__5j2gl",btn:"Detail_btn__1BCrX",imagen:"Detail_imagen__2887n",carta:"Detail_carta__3sPYA",letras:"Detail_letras__3qSNV",titulo:"Detail_titulo__Lz5M4",tipos:"Detail_tipos__2qf7t",palabra:"Detail_palabra__2saTL"}},18:function(e,t,a){e.exports={card:"Card_card__14Ddd",title:"Card_title__rtJNV",img:"Card_img__1XWbI",description:"Card_description__10w76",imgContainer:"Card_imgContainer__2h90S"}},24:function(e,t,a){e.exports={body:"Landing_body__Sc5nQ",letra:"Landing_letra__Q67QB",bounce:"Landing_bounce__2hNBt",btn:"Landing_btn__hzCua"}},28:function(e,t,a){e.exports={btn:"Searchbar_btn__3Tco2",contenedor:"Searchbar_contenedor__2yDlB"}},29:function(e,t,a){e.exports={pagination:"Paginado_pagination__Izzss"}},4:function(e,t,a){e.exports={btn:"Create_btn__2ukJL",otro:"Create_otro__1l6PD",contenedor:"Create_contenedor__3UUNy",palabra:"Create_palabra__30wIx",todo:"Create_todo__a4Iic",title:"Create_title__3QyT7",tipos:"Create_tipos__2XlMk",myButton:"Create_myButton__2ilmT",option:"Create_option__3incJ"}},44:function(e,t,a){},45:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),s=a.n(c),o=(a(44),a(45),a(11)),i=a(2),l=a(24),u=a.n(l),j=a(0);var b=function(){return Object(j.jsxs)("div",{className:u.a.body,children:[Object(j.jsx)("h1",{className:u.a.letra,children:"\xbfListo para comenzar la PokeAventura?"}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:u.a.btn,children:"POKE HOME"})})]})},d=a(6),p=a(9),m=a(14),h=a(10),O=a.n(h),x=a(12),f=a.n(x),g="POKEMONS",v="BUSCAR_NOMBRE",_=" POKEMON_DB_API",y="ORDEN_NAME",N="ORDEN_FUERZA",k="POKE_TYPE",C=" FILTER_POKE_TYPE",P="POKE_DETAIL",E="POKE_CREATE",w="DELETE_POKE";function D(){return function(){var e=Object(m.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("https://appokemons.herokuapp.com/types");case 3:return a=e.sent,e.abrupt("return",t({type:k,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function T(e){return function(){var t=Object(m.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.post("https://appokemons.herokuapp.com/pokemons",e);case 3:return n=t.sent,t.abrupt("return",a({type:E,payload:n.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}var L=a(28),M=a.n(L);var S=function(e){var t=e.setPaginaActual,a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],s=r[1],o=Object(p.b)(),i=function(e){e.preventDefault(),c&&(o(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f()("https://appokemons.herokuapp.com/pokemons?name=".concat(e));case 3:return n=t.sent,t.abrupt("return",a({type:v,payload:n.data}));case 7:t.prev=7,t.t0=t.catch(0),alert("No encontramos un pokemon con ese nombre"),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c)),t(1),console.log("enviado"),s(""))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"Buscar Pokemon :)",value:c,className:M.a.contenedor,onChange:function(e){return function(e){e.preventDefault(),s(e.target.value.toLowerCase())}(e)}}),Object(j.jsx)("button",{type:"submit",onClick:function(e){return i(e)},className:M.a.btn,children:"Buscar"})]})},I=a(18),A=a.n(I),z=function(e){var t=e.image,a=e.name,n=e.types;return Object(j.jsxs)("div",{className:A.a.card,children:[Object(j.jsx)("div",{className:A.a.imgContainer,children:Object(j.jsx)("img",{src:t,alt:"img",className:A.a.img})}),Object(j.jsx)("h2",{className:A.a.title,children:a}),Object(j.jsx)("h4",{className:A.a.description,children:n.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)("i",{children:e.name})},t)}))})]})},Y=a(29),B=a.n(Y),Z=function(e){for(var t=e.pokemonsPagina,a=e.allPokemon,n=e.paginado,r=[],c=0;c<Math.ceil(a/t);c++)r.push(c+1);return Object(j.jsx)("div",{className:B.a.pagination,children:r&&r.map((function(e){return Object(j.jsx)("span",{children:Object(j.jsx)("a",{className:B.a.active,onClick:function(){return n(e)},children:e})},e)}))})},R=a(13),W=a.n(R);var J=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.pokemon})),a=Object(p.c)((function(e){return e.types})),r=Object(n.useState)(1),c=Object(d.a)(r,2),s=c[0],i=c[1],l=Object(n.useState)(12),u=Object(d.a)(l,1)[0],b=s*u,h=b-u,x=t.slice(h,b),v=Object(n.useState)("");Object(d.a)(v,1)[0],Object(n.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("https://appokemons.herokuapp.com/pokemons");case 3:return a=e.sent,e.abrupt("return",t({type:g,payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),e(D())}),[e]);var k=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:y,payload:a})),i(1)},P=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:N,payload:a})),i(1)},E=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:_,payload:a})),i(1)},w=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:C,payload:a})),i(1)};return Object(j.jsxs)("div",{children:[t.length>0?Object(j.jsx)(S,{setPaginaActual:i}):Object(j.jsx)("div",{}),t.length>0?Object(j.jsxs)("div",{className:W.a.separacion,children:[Object(j.jsxs)("select",{onChange:function(e){return k(e)},className:W.a.btn,children:[Object(j.jsx)("option",{children:"Orden por Nombre"}),Object(j.jsx)("option",{value:"asc",children:"A-Z"}),Object(j.jsx)("option",{value:"desc",children:"Z-A"})]}),Object(j.jsxs)("select",{onChange:function(e){return P(e)},className:W.a.btn,children:[Object(j.jsx)("option",{children:"Ordenar por Fuerza "}),Object(j.jsx)("option",{value:"max",children:" + Fuerza"}),Object(j.jsx)("option",{value:"min",children:" - Fuerza"})]}),Object(j.jsxs)("select",{onChange:function(e){return E(e)},className:W.a.btn,children:[Object(j.jsx)("option",{children:" Pokemones:"}),Object(j.jsx)("option",{value:"All",children:" Todos "}),Object(j.jsx)("option",{value:"api",children:" Originales "}),Object(j.jsx)("option",{value:"created",children:" Creados por mi "})]}),Object(j.jsxs)("select",{onChange:function(e){return w(e)},className:W.a.btn,children:[Object(j.jsx)("option",{children:"Tipo de Pokemon"}),Object(j.jsx)("option",{value:"All",children:"Todos"}),null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),Object(j.jsx)(o.b,{to:"/home/create",children:Object(j.jsx)("button",{className:W.a.btn,children:"Crear tu Pokemon"})})]}):Object(j.jsx)("div",{}),Object(j.jsx)("div",{children:t.length?Object(j.jsx)("div",{className:W.a.cardContainer,children:x.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(o.b,{to:"/home/".concat(e.id),children:Object(j.jsx)(z,{name:e.name,image:e.image,types:e.types},e.id)})},e.id)}))}):Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:W.a.gif,children:[Object(j.jsx)("img",{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a50d005c-a1fa-4667-acc0-f9e5a6cc3ccf/d1ylrxl-46951a6b-dec6-4e8e-bda1-0e88842f4dcf.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1MGQwMDVjLWExZmEtNDY2Ny1hY2MwLWY5ZTVhNmNjM2NjZlwvZDF5bHJ4bC00Njk1MWE2Yi1kZWM2LTRlOGUtYmRhMS0wZTg4ODQyZjRkY2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iDYW-R35Cdft13_uDreIjtgfrRw1EveW6_S7mYpTGnc"}),Object(j.jsx)("div",{className:W.a.loading,children:Object(j.jsx)("h1",{children:"Loading Pokemons..."})})]})})}),Object(j.jsx)(Z,{pokemonsPagina:u,allPokemon:t.length,paginado:function(e){i(e)}})]})},V=a(15),F=a.n(V),Q=function(){var e,t=Object(p.b)(),a=Object(i.g)().id;Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f()("https://appokemons.herokuapp.com/pokemons/"+e);case 3:return n=t.sent,t.abrupt("return",a({type:P,payload:n.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[t]),Object(n.useEffect)((function(){return t({type:w})}),[t]);var r=Object(p.c)((function(e){return e.detalle}));return Object(j.jsxs)("div",{className:F.a.detalle,children:[Object(j.jsx)("br",{}),r&&r?Object(j.jsxs)("div",{className:F.a.detalle,children:[Object(j.jsx)("div",{className:F.a.titulo,children:Object(j.jsxs)("h1",{children:["\xa1Un ",r.name," salvaje ha aparecido!"]})}),Object(j.jsxs)("div",{className:F.a.carta,children:[Object(j.jsxs)("div",{className:F.a.letras,children:[Object(j.jsxs)("h3",{children:[" Mi nombre es ",r.name,"!!"]}),Object(j.jsxs)("h3",{children:[" Tengo ",r.life," de vida!! "]}),Object(j.jsxs)("h3",{children:["Tengo ",r.strength," de fuerza!!"]}),Object(j.jsxs)("h3",{children:[" Tengo ",r.defense," de defensa!!"]}),Object(j.jsxs)("h3",{children:[" Tengo ",r.speed," de velocidad!!"]}),Object(j.jsxs)("h3",{children:[" Mi peso es ",r.weight/10," kg!!"]}),Object(j.jsxs)("h3",{children:[" Mi altura es ",10*r.height," centimetros!!"]}),Object(j.jsx)("h3",{children:"Mis tipos son: "}),null===(e=r.types)||void 0===e?void 0:e.map((function(e,t){return Object(j.jsx)("h3",{children:e.name?e.name:e},t)}))]}),Object(j.jsx)("div",{className:F.a.imagen,children:Object(j.jsx)("img",{src:r.image,alt:"cargando",width:"700px",height:"250px"})})]})]}):Object(j.jsx)("p",{children:" Loading Pokemon.."}),Object(j.jsx)("br",{}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:F.a.btn,children:"Volver"})}),Object(j.jsx)("br",{})]})},U=a(17),X=a(20),K=a(3),q=a(4),G=a.n(q),H=function(e){var t={};return e.name.toLowerCase()?e.life?e.strength?e.defense?e.speed?e.height?e.weight?e.types.length||(t.types="Los tipos son requeridos solo pueden seleccionarse m\xe1ximo 2 tipos"):t.weight="El peso es requerido debe ser mayor a 0 y menor a 1000":t.height="La altura es requerida debe ser mayor a 0 y menor a 100":t.speed="La velocidad es requerida debe ser mayor a 0 y menor a 500":t.defense="La defensa es requerida debe ser mayor a 0 y menor a 200":t.strength="La fuerza es requerida debe ser mayor a 0 y menor a 1000":t.life="La vida es requerida, debe ser mayor a 0 y menor a 200":t.name="El nombre es requerido, solo puede llevar letras y su largo debe ser menor a 20 ",t},$=function(){var e=Object(p.b)(),t=Object(i.f)(),a=Object(p.c)((function(e){return e.types})),r=Object(n.useState)({}),c=Object(d.a)(r,2),s=c[0],l=c[1],u=Object(n.useState)({name:"",life:"",strength:"",defense:"",speed:"",height:"",weight:"",image:"",types:[]}),b=Object(d.a)(u,2),h=b[0],x=b[1];Object(n.useEffect)((function(){e(D())}),[]);var g=function(e){x(Object(K.a)(Object(K.a)({},h),{},Object(X.a)({},e.target.name,e.target.value.toLowerCase()))),l(H(Object(K.a)(Object(K.a)({},h),{},Object(X.a)({},e.target.name,e.target.value))))};var v=/^[a-zA-Z\xf1\xd1]+$/i;function _(){return(_=Object(m.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,f()("http://localhost:3001/pokemons?name=".concat(h.name));case 4:alert("Ya existe un pokemon con ese nombre"),a.next=48;break;case 7:if(a.prev=7,a.t0=a.catch(1),!(Object.values(s).length>0)){a.next=13;break}return a.abrupt("return",alert("Por favor completa la informacion requerida!!!"));case 13:if(h.name.toLowerCase()&&!(h.name.length>20)&&v.test(h.name)){a.next=17;break}return a.abrupt("return",alert("El nombre es obligatorio, solo puede llevar letras y su largo debe ser menor a 20"));case 17:if(!(!h.life||h.life<=0||h.life>200)){a.next=21;break}return a.abrupt("return",alert("El campo vida es obligatorio y debe ser mayor a 0 y menor a 200"));case 21:if(!(!h.strength||h.strength<=0||h.strength>1e3)){a.next=25;break}return a.abrupt("return",alert("El campo fuerza es obligatorio y debe ser mayor a 0 y menor a 1000"));case 25:if(!(!h.defense||h.defense<=0||h.defense>200)){a.next=29;break}return a.abrupt("return",alert("El campo defensa es obligatorio y debe ser mayor a 0 y menor a 200"));case 29:if(!(!h.speed||h.speed<=0||h.speed>500)){a.next=33;break}return a.abrupt("return",alert("El campo velocidad es obligatorio y debe ser mayor a 0 y menor a 500"));case 33:if(!(!h.height||h.height<=0||h.height>100)){a.next=37;break}return a.abrupt("return",alert("El campo altura es obligatorio y debe ser mayor a 0 y menor a 100"));case 37:if(!(!h.weight||h.weight<=0||h.weight>1e3)){a.next=41;break}return a.abrupt("return",alert("El campo peso es obligatorio y debe ser mayor a 0 y menor a 1000"));case 41:if(!(0===h.types.length||h.types.length>2)){a.next=45;break}return a.abrupt("return",alert("El campo tipos es obligatorio y solo pueden seleccionarse m\xe1ximo 2 tipos"));case 45:e(T(h)),alert("\xa1Pokemon creado!"),t("/home");case 48:case"end":return a.stop()}}),a,null,[[1,7]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:G.a.container,children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:G.a.title,children:" Crear tu pokemon!!"}),Object(j.jsx)(o.b,{to:"/home",children:Object(j.jsx)("button",{className:G.a.btn,children:"Volver al Home"})}),Object(j.jsxs)("form",{onSubmit:function(e){return function(e){return _.apply(this,arguments)}(e)},className:G.a.todo,children:[Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Nombre Pokemon: "}),Object(j.jsx)("input",{type:"text",name:"name",value:h.name,onChange:function(e){return g(e)},className:G.a.contenedor}),s.name&&Object(j.jsx)("p",{children:s.name})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Vida Pokemon: "}),Object(j.jsx)("input",{type:"number",name:"life",value:h.life,onChange:function(e){return g(e)},className:G.a.contenedor}),s.life&&Object(j.jsx)("p",{children:s.life})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Fuerza Pokemon: "}),Object(j.jsx)("input",{type:"number",name:"strength",value:h.strength,onChange:function(e){return g(e)},className:G.a.contenedor}),s.strength&&Object(j.jsx)("p",{children:s.strength})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Defensa Pokemon: "}),Object(j.jsx)("input",{type:"number",name:"defense",value:h.defense,onChange:function(e){return g(e)},className:G.a.contenedor}),s.defense&&Object(j.jsx)("p",{children:s.defense})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Velocidad Pokemon: "}),Object(j.jsx)("input",{type:"number",name:"speed",value:h.speed,onChange:function(e){return g(e)},className:G.a.contenedor}),s.speed&&Object(j.jsx)("p",{children:s.speed})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Altura Pokemon: "}),Object(j.jsx)("input",{type:"number",name:"height",value:h.height,onChange:function(e){return g(e)},className:G.a.contenedor}),s.height&&Object(j.jsx)("p",{children:s.height})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Peso Pokemon: "}),Object(j.jsx)("input",{type:"number",name:"weight",value:h.weight,onChange:function(e){return g(e)},className:G.a.contenedor}),s.weight&&Object(j.jsx)("p",{children:s.weight})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:G.a.cuadro,children:[Object(j.jsx)("label",{className:G.a.palabra,children:"Imagen Pokemon: "}),Object(j.jsx)("input",{type:"text",name:"image",value:h.image,onChange:function(e){return g(e)},className:G.a.contenedor})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("select",{onChange:function(e){return function(e){h.types.includes(e.target.value)||x(Object(K.a)(Object(K.a)({},h),{},{types:[].concat(Object(U.a)(h.types),[e.target.value])})),l(H(Object(K.a)(Object(K.a)({},h),{},{types:[].concat(Object(U.a)(h.types),[e.target.value])})))}(e)},className:G.a.tipos,children:[Object(j.jsx)("option",{children:"Tipos de pokemon"}),a.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name},e.name)}))]}),s.types&&Object(j.jsx)("p",{children:s.types}),Object(j.jsx)("div",{className:G.a.option,children:h.types.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:G.a.myButton,type:"button",onClick:function(){return t=e,void x(Object(K.a)(Object(K.a)({},h),{},{types:h.types.filter((function(e){return e!==t}))}));var t},children:"X"}),Object(j.jsx)("span",{children:e})]},t)}))}),Object(j.jsx)("button",{type:"submit",className:G.a.otro,children:"Crear Pokemon!!"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})};var ee=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",element:Object(j.jsx)(b,{})}),Object(j.jsx)(i.a,{path:"/home",element:Object(j.jsx)(J,{})}),Object(j.jsx)(i.a,{path:"/home/:id",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(i.a,{path:"/home/create",element:Object(j.jsx)($,{})})]})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},ae=a(39),ne={pokemon:[],allPokemons:[],types:[],detalle:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(K.a)(Object(K.a)({},e),{},{pokemon:t.payload,allPokemons:t.payload});case v:return Object(K.a)(Object(K.a)({},e),{},{pokemon:t.payload});case y:var a=Object(U.a)(e.allPokemons),n="asc"===t.payload?a.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):a.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(K.a)(Object(K.a)({},e),{},{pokemon:n});case N:var r=Object(U.a)(e.allPokemons),c="All"===t.payload?r:"max"===t.payload?r.sort((function(e,t){return t.strength-e.strength})):r.sort((function(e,t){return e.strength-t.strength}));return Object(K.a)(Object(K.a)({},e),{},{pokemon:c});case C:for(var s=e.allPokemons,o="All"===t.payload?s:s.filter((function(e){return e.types.find((function(e){return e.name.includes(t.payload)}))}));0!==o.length;)return Object(K.a)(Object(K.a)({},e),{},{pokemon:o});alert("No encontramos un pokemon con ese tipo :(");case _:for(var i=e.allPokemons,l="created"===t.payload?i.filter((function(e){return e.baseDatos})):i.filter((function(e){return!e.baseDatos}));0!==l.length;)return Object(K.a)(Object(K.a)({},e),{},{pokemon:"All"===t.payload?i:l});alert("No encontramos pokemons creados, crea tu pokemon!!!!");case P:return Object(K.a)(Object(K.a)({},e),{},{detalle:t.payload});case k:return Object(K.a)(Object(K.a)({},e),{},{types:t.payload});case E:return Object(K.a)({},e);case w:return Object(K.a)(Object(K.a)({},e),{},{detalle:[]});default:return Object(K.a)({},e)}},ce=Object(ae.a)({reducer:re});a(68);f.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",s.a.render(Object(j.jsx)(p.a,{store:ce,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[72,1,2]]]);
//# sourceMappingURL=main.d8b93e6f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(24),o=a.n(s),c=(a(31),a(2)),i=a(3),l=a(4),d=a(5),u=a(6),m=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("h6",null,"A simple NASA picture search\u2014check it out!"),n.a.createElement("p",{style:{textAlign:"center"}},"How To Search"),n.a.createElement("p",{style:{textAlign:"center"}},"=============: Search Example :============="),n.a.createElement("p",null,"> New york"),n.a.createElement("p",null,"> center: GSFC"),n.a.createElement("p",null,"> photographer: James Bilbrey, Joe Kuner"),n.a.createElement("p",null,"> star, center: GSFC, year_start: 1999"),n.a.createElement("p",null,"Search Keywords: ( center, description, description_508, keywords, locations, media_type, nasa_id, page, photographer, secondary_creator, title, year_start, year_end )"),n.a.createElement("p",null,"** Be sure to add :(colon) after the Search Keyword **")))},p=a(7),h=a.n(p),g=a(12),f=a(9),b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"alert alert-danger",role:"alert"},e.message))},y=a(25),v=a.n(y).a.create({baseURL:"https://images-api.nasa.gov",timeout:2500}),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),t}(n.a.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={text:""},a.onFormSubmit=function(e){var t={text:void 0,center:void 0,description:void 0,description_508:void 0,keywords:void 0,location:void 0,media_type:void 0,nasa_id:void 0,page:void 0,photographer:void 0,secondary_creator:void 0,title:void 0,year_start:void 0,year_end:void 0};e.preventDefault(),a.state.text.split(",").map(function(e){return e=e.trim(),/^center:/.exec(e)?t.center=e.split(":")[1].trim():/^description:/.exec(e)?t.description=e.split(":")[1].trim():/^description_508:/.exec(e)?t.description_508=e.split(":")[1].trim():/^keywords:/.exec(e)?t.keywords=e.split(":")[1].trim():/^location:/.exec(e)?t.location=e.split(":")[1].trim():/^media_type:/.exec(e)?t.media_type=e.split(":")[1].trim():/^nasa_id:/.exec(e)?t.nasa_id=e.split(":")[1].trim():/^page:/.exec(e)?t.page=e.split(":")[1].trim():/^photographer:/.exec(e)?t.photographer=e.split(":")[1].trim():/^secondary_creator:/.exec(e)?t.secondary_creator=e.split(":")[1].trim():/^title:/.exec(e)?t.title=e.split(":")[1].trim():/^year_start:/.exec(e)?t.year_start=e.split(":")[1].trim():/^year_end:/.exec(e)?t.year_end=e.split(":")[1].trim():t.text=e,0}),a.props.onSubmit(t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:this.onFormSubmit},n.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},n.a.createElement("input",{type:"text",className:"form-control",value:this.state.text,onChange:function(t){e.setState({text:t.target.value})}}),n.a.createElement("br",null),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"\uac80\uc0c9"))))}}]),t}(n.a.Component),_=a(13),k=a(8),N=a(14),O=a(11),j=(a(52),function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card"},e.NasaData.links?n.a.createElement("img",{className:"card-img-top",src:e.NasaData.links[0].href,alt:"Preparing"}):"No image",n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.NasaData.data[0].title?JSON.stringify(e.NasaData.data[0].title).slice(1,-1):"Unknown"),n.a.createElement("h6",null,e.NasaData.data[0].date_created?JSON.stringify(e.NasaData.data[0].date_created).slice(1,11):"Unknown"),n.a.createElement("div",{className:"card-text"},e.NasaData.data[0].description?JSON.stringify(e.NasaData.data[0].description.slice(0,200)+"..."):"Unknown"),n.a.createElement("a",{href:".",className:"btn btn-dark btn-sm disabled",tabIndex:"-1",role:"button","aria-disabled":"true"},"center: ",e.NasaData.data[0].center?JSON.stringify(e.NasaData.data[0].center):"Unknown"),n.a.createElement("a",{href:".",className:"btn btn-dark btn-sm disabled",tabIndex:"-1",role:"button","aria-disabled":"true"},"photographer: ",e.NasaData.data[0].photographer?JSON.stringify(e.NasaData.data[0].photographer):"Unknown"))))}),x=function(e,t){switch(Object(O.a)(t)){case"undefined":return Object(N.a)({},e,{page:1});case"number":return Object(N.a)({},e,{page:e.page+1});default:throw new Error("".concat(t))}},S=function(e){var t=Object(r.useState)(6),a=Object(k.a)(t,2),s=a[0],o=a[1],c=Object(r.useState)(!1),i=Object(k.a)(c,2),l=i[0],d=i[1],u=Object(r.useState)(e.NasaData),m=Object(k.a)(u,2),p=m[0],f=m[1],b=Object(r.useState)(p.slice(0,6)),y=Object(k.a)(b,2),E=y[0],w=y[1],N=Object(r.useReducer)(x,e.searchState),O=Object(k.a)(N,2),S=O[0],D=O[1];function q(){window.innerHeight+document.documentElement.scrollTop+1<=document.documentElement.offsetHeight||d(!0)}function A(){return(A=Object(g.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a="",v.get("/search",{params:{q:t.text,center:t.center,description:t.description,description_508:t.description_508,keywords:t.keywords,locations:t.locations,media_type:t.media_type,nasa_id:t.nasa_id,page:t.page,photographer:t.photographer,secondary_creator:t.secondary_creator,title:t.title,year_start:t.year_start,year_end:t.year_end}}).then(function(e){e.data.collection.items[0].href!==p[0].href&&(console.log(t),console.log(1,e.data.collection.items),f(Object(_.a)(e.data.collection.items)),console.log(2,p),a="")}).catch(function(e){if(e.response)switch(e.response.status){case 400:a="The request was unacceptable, often due to missing a required parameter.";break;case 404:a="The requested resource doesn\u2019t exist.";break;case 500:case 502:case 503:case 504:a="Server Errors";break;default:a="Call developers to Check axios status error"}else a=e.request?"App Error":"Unknown Error";console.log(e),console.log(a),f([])});case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return Object(r.useEffect)(function(){return window.addEventListener("scroll",q),function(){return window.removeEventListener("scroll",q)}},[]),Object(r.useEffect)(function(){(l||100===E.length)&&(E.length%100===0&&(void 0===S.page&&D(S.page),D(S.page),o(0),function(e){A.apply(this,arguments)}(S)),console.log(E.length),o(s+6),w(function(e){return Object(_.a)(e).concat(Object(_.a)(p.slice(s,s+6)))}),d(!1))},[l]),n.a.createElement(n.a.Fragment,null,E.map(function(e){return n.a.createElement(j,{key:e.data[0].nasa_id,NasaData:e})}))},D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={NasaData:[],loading:!0,totalHits:0,message:"",searchState:{text:"star",center:void 0,description:void 0,description_508:void 0,keywords:void 0,location:void 0,media_type:void 0,nasa_id:void 0,page:void 0,photographer:void 0,secondary_creator:void 0,title:void 0,year_start:void 0,year_end:void 0}},a.onSearchSubmit=function(){var e=Object(g.a)(h.a.mark(function e(t){var r,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(f.a)(Object(f.a)(a)),n="",a.setState({searchState:t}),a.setState({loading:!0},function(){v.get("/search",{params:{q:t.text,center:t.center,description:t.description,description_508:t.description_508,keywords:t.keywords,locations:t.locations,media_type:t.media_type,nasa_id:t.nasa_id,page:t.page,photographer:t.photographer,secondary_creator:t.secondary_creator,title:t.title,year_start:t.year_start,year_end:t.year_end}}).then(function(e){r.setState({loading:!1,NasaData:e.data.collection.items,totalHits:e.data.collection.metadata.total_hits,message:""})}).catch(function(e){if(e.response)switch(e.response.status){case 400:n="The request was unacceptable, often due to missing a required parameter.";break;case 404:n="The requested resource doesn\u2019t exist.";break;case 500:case 502:case 503:case 504:n="Server Errors";break;default:n="Call developers to Check axios status error"}else n=e.request?"App Error":"Unknown Error";r.setState({loading:!0,NasaData:null,totalHits:0,message:n})})});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="";this.setState({loading:!0},function(){new Promise(function(t,a){var r=v.get("/search",{params:{q:e.state.searchState.text}});r&&t(r),a(new b("Request is failed"))}).then(function(t){e.setState({loading:!1,NasaData:t.data.collection.items,totalHits:t.data.collection.metadata.total_hits,message:""})}).catch(function(a){if(a.response)switch(a.response.status){case 400:t="The request was unacceptable, often due to missing a required parameter.";break;case 404:t="The requested resource doesn\u2019t exist.";break;case 500:case 502:case 503:case 504:t="Server Errors";break;default:t="Call developers to Check axios status error"}else t=a.request?"App Error":"Unknown Error";e.setState({loading:!0,NasaData:null,totalHits:0,message:t})})})}},{key:"render",value:function(){var e;return e=this.state.message?n.a.createElement(b,{message:this.state.message}):this.state.loading?n.a.createElement(E,null):n.a.createElement(S,{NasaData:this.state.NasaData,searchState:this.state.searchState}),n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{onSubmit:this.onSearchSubmit}),n.a.createElement("div",{className:"container"},this.state.loading?"":n.a.createElement("h6",null,"Total Posts: ",this.state.totalHits),n.a.createElement("div",{className:"justify-content-md-center row  row-cols-md-3 row-cols-xl-4"},e)))}}]),t}(n.a.Component),q=(a(54),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h3",{style:{textAlign:"center"}},"NASA \uc0ac\uc9c4 \uac80\uc0c9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158")),n.a.createElement(m,null),n.a.createElement(D,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.3556918b.chunk.js.map
(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{10:function(e,a,t){e.exports={container:"Cards_container__1SBho",h1:"Cards_h1__pj9zJ",h2:"Cards_h2__MIypB",card:"Cards_card__2-3gr",blueBg:"Cards_blueBg__1-QkT",greenBg:"Cards_greenBg__8P7Ru",redBg:"Cards_redBg__3S2-C",infected:"Cards_infected__1eAvC",recovered:"Cards_recovered__ztabS",deaths:"Cards_deaths__2uSPI",loading:"Cards_loading__2axyd"}},218:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(7),o=t.n(c),s=t(8),u=t.n(s),l=t(12),i=t(82),d=t(83),m=t(91),p=t(90),f=t(244),v=t(248),h=t(249),_=t(250),b=t(40),g=t.n(b),E=t(41),C=t.n(E),y=t(10),N=t.n(y),w=function(e){var a=e.data,t=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate;return t?n.a.createElement("div",{className:N.a.container},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(N.a.card,N.a.infected)},n.a.createElement(h.a,{className:N.a.blueBg},n.a.createElement(_.a,{gutterBottom:!0,className:N.a.h1},"Infected"),n.a.createElement(_.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:t.value,duration:3,separator:","})),n.a.createElement(_.a,{className:N.a.h2},"Per ",new Date(o).toLocaleDateString()),n.a.createElement(_.a,{variant:"body2"},"Number of active cases of covid-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(N.a.card,N.a.recovered)},n.a.createElement(h.a,{className:N.a.greenBg},n.a.createElement(_.a,{gutterBottom:!0,className:N.a.h1},"Recovered"),n.a.createElement(_.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:r.value,duration:3,separator:","})),n.a.createElement(_.a,{className:N.a.h2},"Per ",new Date(o).toLocaleDateString()),n.a.createElement(_.a,{variant:"body2"},"Number of recoveries of covid-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(N.a.card,N.a.deaths)},n.a.createElement(h.a,{className:N.a.redBg},n.a.createElement(_.a,{gutterBottom:!0,className:N.a.h1},"Deaths"),n.a.createElement(_.a,{variant:"h5"},n.a.createElement(g.a,{start:0,end:c.value,duration:3,separator:","})),n.a.createElement(_.a,{className:N.a.h2},"Per ",new Date(o).toLocaleDateString()),n.a.createElement(_.a,{variant:"body2"},"Number of deaths caused by covid-19"))))):"loading..."},x=t(39),k=t(42),j=t.n(k),O="https://covid19.mathdro.id/api",B=function(){var e=Object(l.a)(u.a.mark((function e(a){var t,r,n,c,o,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O,a&&(t="".concat(O,"/countries/").concat(a)),e.prev=2,e.next=5,j.a.get(t);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,l=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark((function e(){var a,t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(O,"/daily"));case 3:return a=e.sent,t=a.data,r=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(O,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=t(55),I=t(88),A=t.n(I),L=function(e){var a=e.data,t=a.confirmed,c=a.recovered,o=a.deaths,s=e.country,i=Object(r.useState)([]),d=Object(x.a)(i,2),m=d[0],p=d[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?n.a.createElement(P.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb(20, 147, 231)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=t?n.a.createElement(P.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{lebel:"People",backgroundColor:["rgb(20, 147, 231)","rgb(15, 189, 15)","rgb(255, 79, 79)"],data:[t.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return n.a.createElement("div",{className:A.a.container},s?v:f)},R=t(252),U=t(251),J=t(43),M=t.n(J),V=function(e){var a=e.handleCountryChange,t=Object(r.useState)([]),c=Object(x.a)(t,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:M.a.label},n.a.createElement("span",null,"Show data from: ")),n.a.createElement(R.a,{variant:"outlined",className:M.a.formControl},n.a.createElement(U.a,{native:!0,defaultValue:"",onChange:function(e){return a(e.target.value)}},n.a.createElement("option",{className:M.a.option,value:""},"Global"),o.map((function(e,a){return n.a.createElement("option",{key:a,value:e},e)})))))},z=t(28),Q=t.n(z),F=t(89),G=t.n(F),T=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(l.a)(u.a.mark((function a(t){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B(t);case 2:r=a.sent,e.setState({data:r,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return n.a.createElement("div",{className:Q.a.container},n.a.createElement("div",{className:Q.a.wrapper},n.a.createElement("img",{className:Q.a.covid,src:G.a,alt:"covid-19"}),n.a.createElement("h1",null," COVID-19")),n.a.createElement("div",{className:Q.a.desc},"Current data:"),n.a.createElement(w,{data:a}),n.a.createElement(V,{handleCountryChange:this.handleCountryChange}),n.a.createElement(L,{data:a,country:t}),n.a.createElement("div",null,n.a.createElement("span",null," ","Sourced from:"," ",n.a.createElement("a",{href:"https://covid19.mathdro.id/api",rel:"noopener noreferrer",target:"_blank"},"https://covid19.mathdro.id/api"))))}}]),t}(n.a.Component);o.a.render(n.a.createElement(T,null),document.getElementById("root"))},28:function(e,a,t){e.exports={container:"App_container__3NViO",wrapper:"App_wrapper__2kYrs",covid:"App_covid__34DP6",desc:"App_desc__lbbPU"}},43:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__3iNM6"}},88:function(e,a,t){e.exports={desc:"Chart_desc__3hwX7",container:"Chart_container__1QE3R"}},89:function(e,a,t){e.exports=t.p+"static/media/virus.469b8a44.svg"},96:function(e,a,t){e.exports=t(218)}},[[96,1,2]]]);
//# sourceMappingURL=main.b49e4a8f.chunk.js.map
(function(){function wa(){fa=!0;g("home",!0);a.fromTo(xa,.5,{css:{alpha:"0"},ease:b},{css:{alpha:"1"},ease:b});a.fromTo(ya,.5,{css:{alpha:"0"},ease:b},{css:{alpha:"1"},delay:.5,ease:b});a.to(K,.5,{css:{alpha:"1"},delay:1,ease:b,onComplete:function(){c.to(K,1,{css:{top:"+=30",alpha:"0.7"},repeat:-1,yoyo:!0,ease:b})}});ga();ha[0]();ia[0]();jQuery("body").sliby();jQuery("body").data("plugin_sliby");jQuery(window).on("sliby.page",function(Sa,c){ha[c]();ia[c]();K&&a.to(K,.5,{css:{alpha:"0"},ease:b})});
za.addEventListener("click",function(){jQuery("body").sliby("moveTo",0)});K.addEventListener("click",function(){jQuery("body").sliby("moveTo",1)});window.addEventListener("contactform7-sent",function(){},!1);window.onresize=function(){ga()}}function ga(){Math.abs(F-h)<h/8?(G(f,"is-wider"),G(f,"is-taller"),T(f,"is-squared")):F>h?(G(f,"is-squared"),G(f,"is-wider"),T(f,"is-taller")):F<h&&(G(f,"is-squared"),G(f,"is-taller"),T(f,"is-wider"))}function k(a){var b=a.length;return 1720<h&&1<b?a[1]:1350<h&&
2<b?a[2]:1180<h&&3<b?a[3]:859<h&&4<b?a[4]:a[0]}function g(a,b){if(b)f.className+=" section-"+a+"-active";else{var c=f.className,d=c.match(/(section-+)(\w+)/g);f.className=c.replace(d,"section-"+a)}}function ja(b,c,d,e,f){ka.play();la.play();ma.play();a.to(C,b,{css:{width:c,left:k(d),bottom:k(e),rotation:f},onComplete:function(){ka.pause();la.pause();ma.pause()}})}function D(){a.killTweensOf(U);a.to(U,.7,{css:{bottom:"-200%"},ease:b})}function Aa(){V.play();W.play();a.fromTo(L,8,{css:{width:"110%",
left:"-30%",bottom:"-8%"},ease:b,delay:.5},{css:{width:"100%",left:"105%",bottom:"-1%"},ease:b,onComplete:function(){V.pause();W.pause();a.to(na,1,{css:{bottom:"51px"},ease:Elastic.easeOut})}})}function M(a){Ba[a]();Ca[a]();Da[a]();Ea[a]()}function N(a){Fa[a]();Ga[a]();Ha[a]();Ia[a]()}function O(a){Ja[a]();Ka[a]();La[a]();Ma[a]()}function oa(){X.style.left="-20%";X.style.marginTop="30%"}function pa(){Y.style.left="-20%";Y.style.marginTop="30%"}function qa(){Z.style.left="-20%";Z.style.marginTop="30%"}
function ra(){$.style.left="-20%";$.style.marginTop="30%"}function Na(){oa();pa();qa();ra();c.to(X,49,{bezier:{values:[{left:"-15%",marginTop:"30%"},{left:"20%",marginTop:"20%"},{left:"120%",marginTop:"10%"}],autoRotate:!0},ease:Linear.easeNone,repeat:-1,onComplete:function(){oa()}});c.to(Y,46,{bezier:{values:[{left:"-15%",marginTop:"30%"},{left:"20%",marginTop:"20%"},{left:"120%",marginTop:"10%"}],autoRotate:!1},ease:Linear.easeNone,repeat:-1,delay:7,onComplete:function(){pa()}});c.to(Z,48,{bezier:{values:[{left:"-15%",
marginTop:"30%"},{left:"20%",marginTop:"20%"},{left:"120%",marginTop:"10%"}],autoRotate:!1},ease:Linear.easeNone,repeat:-1,delay:14,onComplete:function(){qa()}});c.to($,47,{bezier:{values:[{left:"-15%",marginTop:"30%"},{left:"20%",marginTop:"20%"},{left:"120%",marginTop:"10%"}],autoRotate:!1},ease:Linear.easeNone,repeat:-1,delay:18,onComplete:function(){ra()}})}function T(a,b){a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))||(a.className+=" "+b)}function G(a,b){a.className.match(new RegExp("(\\s|^)"+
b+"(\\s|$)"))&&(a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," "))}"use-strict";var a=TweenLite,c=TweenMax,b=Power2.easeInOut;if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)){var F=window.innerHeight,f=document.getElementsByTagName("html")[0];frame=document.getElementById("mobile-frame");scrollIndicatorMobile=document.getElementById("scroll-indicator-mobile");slides=document.getElementsByClassName("mobile-section");resizeSlides=function(){F=window.innerHeight;
for(var a=F+"px",b=0,c=slides.length;b<c;b++){var d=slides[b];0===b?d.style.height=a:b!==c-1&&(d.style.minHeight=a)}};resizeSlides();a.to(scrollIndicatorMobile,.5,{css:{alpha:"1"},ease:b,onComplete:function(){c.to(scrollIndicatorMobile,1,{css:{top:"+=30",alpha:"0.7"},repeat:-1,yoyo:!0,ease:b})}});window.onresize=function(){resizeSlides()}}else{var fa=!1,f=document.getElementsByTagName("html")[0],F=window.innerHeight,h=window.innerWidth,xa=document.getElementById("logo-big"),za=document.getElementById("logo-sidebar"),
ya=document.getElementById("logo-slogan"),K=document.getElementById("scroll-indicator"),l=document.getElementById("sidebar"),m=document.getElementById("landscape"),n=document.getElementById("buildings"),p=document.getElementById("hills"),q=document.getElementById("grass-texture"),d={scale:.5},r=document.getElementById("sky-texture"),e={scale:1},s=document.getElementById("grass-background"),t=document.getElementById("grass-background-filler"),u=document.getElementById("background-overlay"),v=document.getElementById("fence"),
X=document.getElementById("cloud1"),Y=document.getElementById("cloud2"),Z=document.getElementById("cloud3"),$=document.getElementById("cloud4"),C=document.getElementById("tractor"),ka=c.to("#tractor-wheel-back-sprite",.3,{css:{left:"-300%"},ease:SteppedEase.config(3),repeat:-1,yoyo:!0}),ma=c.to("#tractor-wheel-back-center",1.5,{css:{rotation:"360"},ease:Linear.easeNone,repeat:-1}),la=c.to("#tractor-wheel-front-center",1.5,{css:{rotation:"360"},ease:Linear.easeNone,repeat:-1}),L=document.getElementById("van-wrapper");
document.getElementById("van");var sa=document.getElementById("van-light"),V=c.to("#van-wheel-back",1.5,{css:{rotation:"360"},ease:Linear.easeNone,repeat:-1}),W=c.to("#van-wheel-front",1.5,{css:{rotation:"360"},ease:Linear.easeNone,repeat:-1}),na=document.getElementById("van-message"),w=document.getElementsByClassName("value"),x=document.getElementsByClassName("value-board-shadow"),y=document.getElementById("title-about"),z=document.getElementById("title-values"),Oa=document.getElementById("title-contact"),
E=document.getElementById("title-products"),A=document.getElementsByClassName("city-light"),U=document.getElementById("contact-block"),B=document.getElementById("products-previews"),aa=document.getElementById("preview-rosemary"),ba=document.getElementById("preview-tomato"),ca=document.getElementById("preview-cheese"),Pa=document.getElementById("preview-rosemary-desc"),Qa=document.getElementById("preview-tomato-desc"),Ra=document.getElementById("preview-cheese-desc"),P=document.getElementById("pack-rosemary"),
da=document.getElementById("pack-tomato"),ea=document.getElementById("pack-cheese"),Q=document.getElementById("chip-rosemary"),H=document.getElementById("chip-rosemary-sprite"),ta=new Motio(H,{fps:25,frames:21}),R=document.getElementById("chip-tomato"),I=document.getElementById("chip-tomato-sprite"),ua=new Motio(I,{fps:25,frames:19}),S=document.getElementById("chip-cheese"),J=document.getElementById("chip-cheese-sprite"),va=new Motio(J,{fps:25,frames:20}),Da=a.to("#preview-rosemary-wraptext",1,{css:{top:k(["-9%",
"7%","-7%","-12%","-20%"]),right:k(["-120%","-90%","-130%","-150%","-158%"])},ease:b}),Ca=a.to("#preview-rosemary-title",1,{css:{fontSize:"75px"},ease:b}),Ea=a.fromTo(Pa,.5,{css:{alpha:"0"},ease:b},{css:{alpha:"1"},ease:b}),Ba=a.to("#ingredient-rosemary",2,{css:{bottom:"-20%",width:"110%",left:"-20%",rotation:"-12"},ease:b}),La=a.to("#preview-tomato-wraptext",1,{css:{top:k(["-15%","1%","-12%","-14%","-20%"]),right:k(["92%","93%","115%","115%","112%"])},ease:b}),Ka=a.to("#preview-tomato-title",1,{css:{fontSize:"75px",
marginLeft:"60%"},ease:b}),Ma=a.fromTo(Qa,.5,{css:{alpha:"0"},ease:b},{css:{alpha:"1"},ease:b}),Ja=a.to("#ingredient-tomato",2,{css:{bottom:"-16%",width:"107%",right:"-38%",rotation:"-3"},ease:b}),Ha=a.to("#preview-cheese-wraptext",1,{css:{top:k(["-15%","0%","-13%","-15%","-23%"]),right:k(["169%","153%","184%","184%","185%"])},ease:b}),Ga=a.to("#preview-cheese-title",1,{css:{fontSize:"75px",marginLeft:"35%"},ease:b}),Ia=a.fromTo(Ra,.5,{css:{alpha:"0"},ease:b},{css:{alpha:"1"},ease:b}),Fa=a.to("#ingredient-cheese",
2,{css:{bottom:"-41%",width:"115%",right:"-20%",rotation:"14"},ease:b}),ha=[function(){g("home");a.to(u,2,{css:{backgroundColor:"#4b84be"}});a.to(s,2,{fill:"#4b84be"});a.to(t,2,{fill:"#4b84be"});Na();a.to(C,.7,{css:{width:"65%",left:"-60%",bottom:"-59%"},ease:b});a.to(v,.7,{css:{width:"55%",left:"-13%",bottom:"-59%",rotation:"-7"},ease:b});a.to(y,.5,{css:{alpha:"0"},ease:b});a.to(z,.5,{css:{alpha:"0"},ease:b});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,1,{css:{top:"-55%"},
ease:b},.15);a.to(B,2,{css:{bottom:"-100%"},ease:b});c.staggerTo(A,1,{alpha:0},.1);D()},function(){g("about");a.to(u,2,{css:{backgroundColor:"#4b84be"}});a.to(s,2,{fill:"#4b84be"});a.to(t,2,{fill:"#4b84be"});a.to(C,2,{css:{width:"55%",left:"-26%",bottom:"-47%"},ease:b});a.to(v,.7,{css:{width:"55%",left:"-13%",bottom:"-59%",rotation:"-7"},ease:b});a.to(y,.5,{css:{alpha:"1"},ease:b});a.to([E,z],.5,{css:{alpha:"0"},ease:b});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,
1,{css:{top:"-55%"},ease:b},.15);a.to(B,2,{css:{bottom:"-100%"}});c.staggerTo(A,1,{alpha:0},.1);D()},function(){g("values");a.to(u,2,{css:{backgroundColor:"#4b84be"}});a.to(s,2,{fill:"#4b84be"});a.to(t,2,{fill:"#4b84be"});ja(2,"32%",["67%","69%","71%","71%","72%"],["20%","28%","37%","37%","38%"],"-9");a.to(v,2,{css:{width:"38%",left:"-18%",bottom:"-7%",rotation:"-5"}});a.to(z,.5,{css:{alpha:"1"},ease:b,delay:2});c.staggerTo(w,2,{css:{top:"64%"},ease:Quart.easeInOut},.25);a.to(x,2,{css:{boxShadow:"0px 0px 35px 15px rgba(0,0,0,0.3)"},
ease:b,delay:1.5});a.to([y,E],.5,{css:{alpha:"0"},ease:b});a.to(B,2,{css:{bottom:"-100%"},ease:b});c.staggerTo(A,1,{alpha:0},.1);D()},function(){g("products");a.to(u,2,{css:{backgroundColor:"#4b84be"}});a.to(s,2,{fill:"#4b84be"});a.to(t,2,{fill:"#4b84be"});ja(2,"30%",["90%"],["35%","40%","45%","45%","46%"],"-6");a.to(v,2,{css:{width:"30%",left:"-18%",bottom:"-3%",rotation:"-3"}});a.to(E,.5,{css:{alpha:"1"},ease:b,delay:1});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,
1,{css:{top:"-55%"},ease:b},.15);M("reverse");O("reverse");N("reverse");a.to(B,2,{css:{bottom:"-100%"},ease:b});a.to([y,z,H,I,J],.5,{css:{alpha:"0"},ease:b});c.staggerTo(A,1,{alpha:0},.1);D()},function(){g("rosemary");a.to(u,2,{css:{backgroundColor:"#6a9fc8"}});a.to(s,2,{fill:"#6a9fc8"});a.to(t,2,{fill:"#6a9fc8"});a.to(B,.5,{css:{bottom:"-7%"},ease:b});a.to(aa,1,{css:{bottom:"20%"},ease:b});a.to(ca,1,{css:{bottom:"-51%"},ease:b});a.to(ba,1,{css:{bottom:"-51%"},ease:b});M("play");a.to(H,.5,{css:{alpha:"1"},
ease:b,delay:1.5});a.fromTo(P,1.5,{css:{scale:"0",rotation:"0"},ease:b},{css:{scale:"1.2",rotation:"376"},ease:b});setTimeout(function(){ta.play();Q.style.left="20%";Q.style.bottom="55%";c.fromTo(Q,3,{css:{scale:"1",rotation:"0"},ease:b},{css:{scale:"1.3",rotation:"359"},ease:b});c.to(Q,3,{bezier:{curviness:2,values:[{left:"20%",bottom:"55%"},{left:"35%",bottom:"75%"},{left:"25%",bottom:"70%"},{left:"32%",bottom:"63%"},{left:"49%",bottom:"75%"},{left:"60%",bottom:"50%"}],autoRotate:!1},ease:Power1.easeInOut,
onComplete:function(){ta.pause()}})},1050);a.to(C,2,{css:{width:"20%",left:"102%",bottom:"40%"},ease:b});a.to(v,2,{css:{width:"15%",left:"-30%",bottom:"0%"}});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,1,{css:{top:"-55%"},ease:b},.15);O("reverse");N("reverse");a.to([y,z,E,I,J],.5,{css:{alpha:"0"},ease:b});c.staggerTo(A,1,{alpha:0},.1);D()},function(){g("tomato");a.to(u,2,{css:{backgroundColor:"#e1963d"}});a.to(s,2,{fill:"#e1963d"});a.to(t,2,{fill:"#e1963d"});
a.to(B,.5,{css:{bottom:"-7%"},ease:b});a.to(aa,1,{css:{bottom:"-51%"},ease:b});a.to(ca,1,{css:{bottom:"-51%"},ease:b});a.to(ba,1,{css:{bottom:"17%"},ease:b});O("play");a.to(I,.5,{css:{alpha:"1"},ease:b,delay:1.5});a.fromTo(da,1.5,{css:{scale:"0",rotation:"0"},ease:b},{css:{scale:"1.2",rotation:"344"},ease:b});setTimeout(function(){ua.play();R.style.right="35%";R.style.bottom="60%";c.fromTo(R,3,{css:{scale:"1",rotation:"0"},ease:b},{css:{scale:"1.3",rotation:"359"},ease:b});c.to(R,3,{bezier:{curviness:2,
values:[{right:"45%",bottom:"80%"},{right:"60%",bottom:"60%"},{right:"55%",bottom:"55%"},{right:"72%",bottom:"38%"}],autoRotate:!1},ease:Power1.easeInOut,onComplete:function(){ua.pause()}})},1050);a.to(C,2,{css:{width:"20%",left:"102%",bottom:"40%"},ease:b});a.to(v,2,{css:{width:"15%",left:"-30%",bottom:"0%"}});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,1,{css:{top:"-55%"},ease:b},.15);a.to(E,.5,{css:{alpha:"0"},ease:b});M("reverse");N("reverse");a.to([y,z,
H,J],.5,{css:{alpha:"0"},ease:b});a.to([P,ea],1,{css:{scale:"0",rotation:"16"},ease:b});c.staggerTo(A,1,{alpha:0},.1);D()},function(){g("cheese");a.to(u,2,{css:{backgroundColor:"#e9b41b"}});a.to(s,2,{fill:"#e9b41b"});a.to(t,2,{fill:"#e9b41b"});a.to(B,.5,{css:{bottom:"-7%"},ease:b});a.to(aa,1,{css:{bottom:"-51%"},ease:b});a.to(ca,1,{css:{bottom:"19%"},ease:b});a.to(ba,1,{css:{bottom:"-51%"},ease:b});N("play");a.to(J,.5,{css:{alpha:"1"},ease:b,delay:1.5});a.fromTo(ea,1.5,{css:{scale:"0",rotation:"0"},
ease:b},{css:{scale:"1.2",rotation:"344"},ease:b});setTimeout(function(){va.play();S.style.right="35%";S.style.bottom="60%";c.fromTo(S,3,{css:{scale:"1",rotation:"0"},ease:b},{css:{scale:"1.3",rotation:"359"},ease:b});c.to(S,3,{bezier:{curviness:2,values:[{right:"45%",bottom:"75%"},{right:"55%",bottom:"70%"},{right:"50%",bottom:"72.5%"},{right:"65%",bottom:"55%"},{right:"72%",bottom:"38%"}],autoRotate:!1},ease:Power1.easeInOut,onComplete:function(){va.pause()}})},1050);a.to(C,2,{css:{width:"20%",
left:"102%",bottom:"40%"},ease:b});a.to(v,2,{css:{width:"15%",left:"-30%",bottom:"0%"}});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,1,{css:{top:"-55%"},ease:b},.15);O("reverse");M("reverse");a.to([y,z,E,H,I],.5,{css:{alpha:"0"},ease:b});a.to([P,da],1,{css:{scale:"0",rotation:"16"},ease:b});c.staggerTo(A,1,{alpha:0},.1);D();a.to(sa,1,{css:{width:"0%"},ease:b})},function(){g("contact");a.killTweensOf(L);V.invalidate();W.invalidate();L.style.width="110%";L.style.left=
"-30%";L.style.bottom="-8%";na.style.bottom="33%";a.to(u,2,{css:{backgroundColor:"#1f4075"}});a.to(s,2,{fill:"#1f4075"});a.to(t,2,{fill:"#1f4075"});c.staggerTo(A,2,{alpha:1},.25);Aa(6,"100%","110%","-1%");a.to(sa,2,{css:{width:"42%",alpha:.4},ease:b,delay:2});a.to(Oa,1,{css:{textShadow:"9px 2px 10px rgba(255,255,225,.2)"},ease:b,delay:3});a.to(U,2,{css:{bottom:"0%"},ease:b,delay:2});a.to(C,2,{css:{width:"20%",left:"102%",bottom:"40%"},ease:b});a.to(v,2,{css:{width:"15%",left:"-30%",bottom:"0%"}});
a.to([z,y,E,H,I,J],.5,{css:{alpha:"0"},ease:b});a.to(x,.5,{css:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.3)"},ease:b});c.staggerTo(w,1,{css:{top:"-55%"},ease:b},.15);a.to(B,2,{css:{bottom:"-100%"},ease:b});a.to([P,da,ea],1,{css:{scale:"0",rotation:"16"},ease:b})}],ia=[function(){a.to(l,1,{css:{alpha:"0",right:"-100%"},ease:b});a.to(m,2,{css:{width:"190%",left:"-40%",top:"85%"}});a.to(d,2,{scale:.45,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.9,onUpdate:function(){r.setAttribute("patternTransform",
"scale("+e.scale+")")}});a.to(n,2,{css:{width:"55%",right:"-45%",top:"100%"}});a.to(p,2,{css:{width:"230%",right:"-160%",top:"10%",rotation:"0"}})},function(){a.to(l,1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"180%",left:"-35%",top:"37%"}});a.to(d,2,{scale:.45,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.9,onUpdate:function(){r.setAttribute("patternTransform","scale("+e.scale+")")}});a.to(n,2,{css:{width:"55%",right:"-45%",top:"100%"}});
a.to(p,2,{css:{width:"230%",right:"-160%",top:"0%",rotation:"0"}})},function(){a.to(l,1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"170%",left:"-30%",top:"1%"}});a.to(d,2,{scale:.35,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.7,onUpdate:function(){r.setAttribute("patternTransform","scale("+e.scale+")")}});a.to(n,2,{css:{width:"55%",right:"-43%",top:"11%"}});a.to(p,2,{css:{width:"180%",right:"-100%",top:"-10%",rotation:"6.5"}})},function(){a.to(l,
1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"160%",left:"-30%",top:"-4%"}});a.to(d,2,{scale:.33,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.65,onUpdate:function(){r.setAttribute("patternTransform","scale("+e.scale+")")}});a.to(n,2,{css:{width:"55%",right:"-42%",top:"10%"}});a.to(p,2,{css:{width:"170%",right:"-85%",top:"-9.5%",rotation:"4"}})},function(){a.to(l,1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"155%",left:"-33%",
top:"-5%"}});a.to(d,2,{scale:.32,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.6,onUpdate:function(){r.setAttribute("patternTransform","scale("+e.scale+")")}});a.to(n,2,{css:{width:"55%",right:"-37%",top:"-3%"}});a.to(p,2,{css:{width:"167%",right:"-76%",top:"-8%",rotation:"5"}})},function(){a.to(l,1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"155%",left:"-36%",top:"-6%"}});a.to(d,2,{scale:.31,onUpdate:function(){q.setAttribute("patternTransform",
"scale("+d.scale+")")}});a.to(e,2,{scale:.55,onUpdate:function(){r.setAttribute("patternTransform","scale("+e.scale+")")}});a.to(n,2,{css:{width:"50%",right:"-26%",top:"-2.5%"}});a.to(p,2,{css:{width:"155%",right:"-56%",top:"-6.5%",rotation:"4"}})},function(){a.to(l,1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"155%",left:"-39%",top:"-7%"}});a.to(d,2,{scale:.3,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.5,onUpdate:function(){r.setAttribute("patternTransform",
"scale("+e.scale+")")}});a.to(n,2,{css:{width:"45%",right:"-12%",top:"-2%"}});a.to(p,2,{css:{width:"150%",right:"-41%",top:"-5%",rotation:"3"}})},function(){a.to(l,1,{css:{alpha:"1",right:"4%"},ease:b});a.to(m,2,{css:{width:"100%",left:"0%",top:"0%"}});a.to(d,2,{scale:.2,onUpdate:function(){q.setAttribute("patternTransform","scale("+d.scale+")")}});a.to(e,2,{scale:.3,onUpdate:function(){r.setAttribute("patternTransform","scale("+e.scale+")")}});a.to(n,2,{css:{width:"33%",right:"17%",top:"0%"}});a.to(p,
1,{css:{width:"100%",right:"0%",top:"0%",rotation:"0"}})}];document.addEventListener("preLoader.done",function(){fa||wa()})}})();
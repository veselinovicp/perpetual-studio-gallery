(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e=1){let t=new URLSearchParams(location.search).get(`seed`),n=t===null?NaN:Number(t);return Number.isFinite(n)?n:e}function t(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function n(e){let t=()=>e(document.hidden);return document.addEventListener(`visibilitychange`,t),()=>document.removeEventListener(`visibilitychange`,t)}function r(e,t,n){e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t()}),e.addEventListener(`webglcontextrestored`,()=>n())}function i(e,t={}){let n=Math.min(window.devicePixelRatio||1,t.maxDpr??2),r=Math.max(1,Math.round(e.clientWidth*n)),i=Math.max(1,Math.round(e.clientHeight*n));return e.width===r&&e.height===i?!1:(e.width=r,e.height=i,!0)}function a(){window.__studioReady=!0}function o(){let e=document.querySelector(`[data-studio-about]`),t=document.querySelector(`[data-studio-about-panel]`);if(!e||!t)return;let n=t.querySelector(`[data-studio-about-close]`),r=n=>{t.hidden=!n,e.setAttribute(`aria-expanded`,String(n)),(n?t:e).focus({preventScroll:!0}),n&&(t.scrollTop=0)};e.addEventListener(`click`,()=>r(!!t.hidden)),n?.addEventListener(`click`,()=>r(!1)),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!t.hidden&&r(!1)})}var s=1e-6,c=.06,l=.04,u=9.81,d=.0024,f=.01,p=l-d/2,m=e=>.5*(1-Math.exp(-e)*(Math.sin(e)+Math.cos(e))),h=[{th:.001,drho:50,muf:.1},{th:.001,drho:50,muf:.2},{th:.001,drho:50,muf:.3},{th:.001,drho:100,muf:.1},{th:.001,drho:100,muf:.2},{th:.001,drho:150,muf:.1},{th:.002,drho:50,muf:.1},{th:.002,drho:50,muf:.2},{th:.002,drho:100,muf:.1}];function g(e){let t=Math.imul(Math.floor(e)|0,2654435761)>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var _=class{w=new Float64Array(64);x=new Float64Array(160);y=new Float64Array(160);head=new Float64Array(160);cellOf=new Uint8Array(160);size=new Float64Array(160);hue=new Float64Array(160);fr=new Float64Array(24);fa=new Float64Array(24);fhead=new Float64Array(24);fsize=new Float64Array(24);Oc=0;angle=0;turn=null;stirW=0;stirR=.02;stirring=!1;cells;rand;constructor(e=1,t=h){this.cells=t,this.rand=g(e),this.scatter()}scatter(){let e=this.rand;this.w.fill(0),this.Oc=0,this.turn=null;for(let t=0;t<160;t++){let n=l*Math.sqrt(e()),r=e()*6.2831853;this.x[t]=n*Math.cos(r),this.y[t]=n*Math.sin(r),this.head[t]=e()*6.2831853,this.cellOf[t]=Math.floor(e()*this.cells.length),this.size[t]=.9+.25*e(),this.hue[t]=e()}for(let e=0;e<60;e++)this.relax();for(let t=0;t<24;t++)this.fr[t]=.0378*Math.sqrt(e()),this.fa[t]=e()*6.2831853,this.fhead[t]=e()*6.2831853,this.fsize[t]=.7+.2*e()}relax(){let e=this.x,t=this.y;for(let n=0;n<160;n++)for(let r=n+1;r<160;r++){let i=e[r]-e[n],a=t[r]-t[n],o=i*i+a*a;if(o<.0024*.0024){let s=Math.sqrt(o);s<1e-9&&(i=1,a=0,s=1);let c=(d-s)/2/s;e[n]-=i*c,t[n]-=a*c,e[r]+=i*c,t[r]+=a*c}}for(let n=0;n<160;n++){let r=Math.hypot(e[n],t[n]);r>p&&(e[n]*=p/r,t[n]*=p/r)}}step(e){let t=this.w;if(this.stirring&&this.stirW!==0){let n=Math.max(.004,Math.min(.038,this.stirR)),r=Math.abs(this.stirW)/6.2831853*f/n;for(let i=0;i<64;i++){let a=((i+.5)*l/64-n)/f;t[i]+=r*Math.exp(-.5*a*a)*(this.stirW-t[i])*e}}let n=this.Oc;this.turn===null?this.Oc*=Math.exp(-e/15):this.Oc+=(this.turn-this.Oc)*Math.min(1,30*e);let r=this.Oc-n,i=this.Oc;if(r!==0)for(let e=0;e<64;e++)t[e]-=r;this.angle+=i*e;for(let n=0;n<160;n++){let r=Math.hypot(this.x[n],this.y[n]),a=Math.atan2(this.y[n],this.x[n]),o=t[Math.min(63,Math.floor(r/l*64))],c=Math.abs(o);if(c<1e-9)continue;let d=this.cells[this.cellOf[n]],f=d.muf*d.drho*u*d.th,h=d.drho*i*i*r*d.th,g=Math.sqrt(s/c);if(Math.SQRT2*.001*c*r/g+h>f){let t=d.th/g,n=Math.abs(i+o)>Math.abs(i)?1:-1;r=Math.min(p,Math.max(d.th/2,r-n*c*r*m(t)/t*e))}a+=o*e,this.head[n]+=o*e,this.x[n]=r*Math.cos(a),this.y[n]=r*Math.sin(a)}for(let e=0;e<3;e++)this.relax();for(let n=0;n<24;n++){let r=this.fr[n],a=t[Math.min(63,Math.floor(r/l*64))],o=Math.abs(a);if(this.fa[n]+=a*e,this.fhead[n]+=a*e,o>1e-9){let t=.001/Math.sqrt(s/o),c=Math.abs(i+a)>Math.abs(i)?1:-1;this.fr[n]=Math.min(.0385,Math.max(0,r+c*.25*o*r*m(t)/t*e))}}for(let n=0;n<64;n++)t[n]-=t[n]*Math.sqrt(s*Math.max(Math.abs(t[n]),Math.abs(i)))/c*e}medianR(){return Array.from({length:160},(e,t)=>Math.hypot(this.x[t],this.y[t])).sort((e,t)=>e-t)[79]}fracOut(){let e=0;for(let t=0;t<160;t++)Math.hypot(this.x[t],this.y[t])>.08/3&&e++;return e/160}surface(e){let t=0;for(let n=0;n<64;n++){let r=this.Oc+this.w[n],i=(n+.5)*l/64;t+=r*r*i/u*(l/64),e[n]=t*1e3}}},v=`#version 300 es
void main(){ vec2 p = vec2((gl_VertexID<<1)&2, gl_VertexID&2); gl_Position = vec4(p*2.0-1.0, 0.0, 1.0); }`,ee=`#version 300 es
precision highp float;
uniform vec2 uRes, uCenter;   // buffer px; centre measured from the top-left
uniform float uPpm;     // buffer px per mm
uniform float uCup;     // cup angle, rad
uniform float uH[64];   // tea surface height above centre, mm (with gain)
uniform float uTime;
uniform vec2 uSheen;    // x: strength 0..1, y: phase
out vec4 o;
const vec3 PAPER=vec3(.914,.890,.839), GLAZE=vec3(.965,.953,.925), TEA=vec3(.706,.384,.110), SHADE=vec3(.796,.765,.698);
const float RC=40.0, RW=44.0, RS=60.0;
float hash(float n){ return fract(sin(n*12.9898)*43758.5453); }
float ring(float d,float a,float b){ float w=1.0/uPpm; return smoothstep(a-w,a+w,d)-smoothstep(b-w,b+w,d); }
float surf(float r){ float f=clamp(r/RC*64.0-0.5,0.0,62.999); int i=int(f); return mix(uH[i],uH[i+1],fract(f)); }
void main(){
  vec2 q=(vec2(gl_FragCoord.x, uRes.y-gl_FragCoord.y)-uCenter)/uPpm; // mm, y down
  float r=length(q); vec2 dir=q/max(r,1e-4);
  vec3 L=normalize(vec3(-0.5,-0.62,0.6));
  float ca=cos(uCup), sa=sin(uCup);
  vec2 qc=vec2(ca*q.x+sa*q.y, -sa*q.x+ca*q.y);      // into the cup frame
  float ang=atan(qc.y,qc.x);
  // paper
  vec3 col=PAPER*(1.0-0.04*smoothstep(60.0,140.0,r)) ;
  // saucer shadow on paper
  float sh=smoothstep(RS+6.0,RS-1.0,length(q-vec2(2.5,3.5)));
  col=mix(col,col*0.86,sh*0.7*step(RS,r));
  if(r<RS){
    // saucer: flat to 53, rim slopes up to 60 (a lip), light from upper left
    float lip=smoothstep(53.0,60.0,r);
    float shd=dot(dir,L.xy)*lip;               // facing the light: brighter
    col=GLAZE*(1.0+0.05*shd*3.0-0.03);
    col=mix(col,SHADE,smoothstep(58.5,60.0,r)*0.55*(0.6-0.5*dir.x*L.x*-1.0));
    // the well where the cup sits, and the cup's shadow
    float cs=smoothstep(RW+5.0,RW-0.5,length(q-vec2(2.2,3.0)));
    col=mix(col,col*0.80,cs*0.75);
    // tick ring on the band (saucer is still; the cup turns past it)
    float a2=atan(q.y,q.x)/6.2831853*90.0;
    float tf=abs(fract(a2+0.5)-0.5)/90.0*6.2831853*57.0; // mm from tick centre
    float isMajor=step(abs(fract(a2/5.0+0.5)-0.5)*5.0/90.0*6.2831853*57.0,0.2);
    float t=smoothstep(0.17,0.08,tf)*ring(r,55.2,mix(57.0,58.4,isMajor));
    col=mix(col,SHADE*0.78,t*0.9);
  }
  if(r<RW){
    // cup rim and wall seen from above: a lit lip
    float lip=smoothstep(RC,RW,r);
    col=GLAZE*(1.0+0.05*dot(dir,L.xy)*(1.0-abs(lip*2.0-1.0))*2.0);
    col=mix(col,SHADE,smoothstep(RW-1.2,RW,r)*0.5);
    // painted rim line: dashes in the cup frame, 36 slots
    float u=(ang+3.14159265)/6.2831853*36.0, cell=floor(u);
    float on=step(0.35,hash(cell+7.0))*step(fract(u),0.35+0.5*hash(cell+3.0))*step(0.08,fract(u));
    col=mix(col,vec3(.50,.36,.24),0.8*on*ring(r,41.6,42.5));
  }
  // handle: a loop that belongs to the cup frame
  {
    float ha=-0.62; vec2 hc=48.2*vec2(cos(ha),sin(ha));
    float dh=length(qc-hc);
    float body=ring(dh,3.6,6.6);
    vec2 Lc=vec2(ca*L.x+sa*L.y, -sa*L.x+ca*L.y);       // light in the cup frame
    float shd=dot(normalize(qc-hc+1e-4),Lc);
    vec3 hcol=GLAZE*(1.0+0.07*shd);
    float hshadow=smoothstep(8.5,5.5,length(qc-hc-vec2(ca*2.2+sa*3.0,-sa*2.2+ca*3.0)))*step(r,RS);
    if(r>RW-0.5){ col=mix(col,col*0.8,hshadow*0.6*(1.0-body)); }
    col=mix(col,hcol,body);
    col=mix(col,SHADE*0.9,body*ring(dh,3.6,4.0)*0.5);
  }
  if(r<RC){
    float dd=1.0+0.95*pow(smoothstep(0.62*RC,RC,r),2.0);
    vec3 T=pow(TEA/GLAZE,vec3(dd));
    vec3 base=GLAZE*T;
    // surface slope (dimple + a hair of meniscus at the wall)
    float f=clamp(r/RC*64.0-0.5,1.0,62.0); int i=int(f);
    float slope=(uH[i+1]-uH[i-1])/(2.0*RC/64.0);
    slope+=0.3*smoothstep(0.92*RC,RC,r);
    vec3 n=normalize(vec3(-slope*dir, 1.0));
    float hc=0.5*(uH[i]+uH[i+1]);
    float dif=dot(n,L)-L.z;
    base*=1.0-0.30*clamp(abs(hc)/5.0,0.0,1.0);
    base*=1.0+1.0*dif;
    base=mix(base,vec3(dot(base,vec3(.3,.55,.15))),0.12);
    vec3 Hh=normalize(L+vec3(0.0,0.0,1.0));
    float spec=pow(max(dot(n,Hh),0.0),70.0);
    col=base+vec3(0.9)*spec*0.55;
    // a slow band of daylight crossing the tea when nobody is touching it: the surface is liquid
    float sb=dot(q,normalize(vec2(1.0,0.55)))-uSheen.y;
    float band=exp(-sb*sb/90.0)*(0.65+0.35*sin(dot(q,vec2(-0.37,0.62))*0.45+uSheen.y*0.2));
    col+=GLAZE*0.07*uSheen.x*band*(1.0-smoothstep(0.8*RC,RC,r)*0.5);
    col=mix(col, vec3(.6,.3,.08), 0.0);
    // the tea's edge against the wall: a thin dark meniscus line
    col*=1.0-0.18*smoothstep(RC-0.9,RC,r);
  }
  col=min(col,vec3(0.94));
  o=vec4(col,1.0);
}`,te=`#version 300 es
in vec2 aQuad;                // corner, -1..1
in vec4 aA;                   // x mm, y mm (cup frame), heading, size
in vec2 aB;                   // kind (0 floor, 1 floater), hue
uniform vec2 uRes;            // buffer px
uniform vec2 uCenter;         // buffer px, top-left origin
uniform float uPpm, uCup;
out vec2 vL; out float vKind; out float vHue; out float vR;
void main(){
  float s=aA.w; vec2 half_=vec2(1.95,0.85)*s;
  vec2 loc=aQuad*half_; vL=aQuad*vec2(1.95,0.85)/vec2(1.75,0.65);
  float h=aA.z+uCup, ch=cos(h), sh=sin(h);
  vec2 off=vec2(ch*loc.x-sh*loc.y, sh*loc.x+ch*loc.y);
  float cc=cos(uCup), sc=sin(uCup);
  vec2 p=vec2(cc*aA.x-sc*aA.y, sc*aA.x+cc*aA.y)+off;
  vec2 px=uCenter+p*uPpm;
  gl_Position=vec4(px.x/uRes.x*2.0-1.0, 1.0-px.y/uRes.y*2.0, 0.0, 1.0);
  vKind=aB.x; vHue=aB.y; vR=length(aA.xy);
}`,ne=`#version 300 es
precision highp float;
in vec2 vL; in float vKind; in float vHue; in float vR;
uniform float uPpm;
out vec4 o;
const vec3 GLAZE=vec3(.965,.953,.925), TEA=vec3(.706,.384,.110);
void main(){
  float e=length(vL);              // 1 at the leaf's edge
  float w=1.0/(uPpm*0.8);
  float soft = vKind<0.5 ? 0.22 : 0.10;
  float a=smoothstep(1.0+w,1.0-soft-w,e);
  if(a<=0.01) discard;
  float rib=smoothstep(0.10,0.02,abs(vL.y))*step(abs(vL.x),0.92);
  vec3 dark=vec3(.165,.102,.063), mid=vec3(.29,.20,.13);
  if(vKind<0.5){
    float dd=1.0+0.95*pow(smoothstep(0.62*40.0,40.0,vR),2.0);
    vec3 T=pow(TEA/GLAZE,vec3(dd));
    vec3 lc=mix(dark,mid,vHue*0.7)*(1.0+0.35*rib);
    vec3 c=mix(lc*mix(vec3(1.0),T*1.6,0.65),GLAZE*T,0.14);
    o=vec4(c,a*0.96);
  } else {
    vec3 lc=mix(vec3(.36,.26,.17),vec3(.50,.38,.26),vHue)*(1.0+0.25*rib);
    float hl=smoothstep(0.55,0.95,e)*smoothstep(0.1,-0.7,vL.y);
    o=vec4(mix(lc,GLAZE,hl*0.55),a*0.94);
  }
}`;o();var y=document.querySelector(`#view`),b=y.getContext(`webgl2`,{antialias:!1,alpha:!1});b?x(b):(y.hidden=!0,document.querySelector(`[data-studio-fallback]`).hidden=!1);function x(o){let s=e(Date.now()%1e5),c=t(),u=new _(s),d=1/120,f=document.querySelector(`#live`),p,m,h,g,b=new Float32Array(1104),x=new Float32Array(64),S={},C=(e,t)=>{let n=o.createShader(e);if(o.shaderSource(n,t),o.compileShader(n),!o.getShaderParameter(n,o.COMPILE_STATUS))throw Error(o.getShaderInfoLog(n)??`shader`);return n},re=(e,t)=>{let n=o.createProgram();if(o.attachShader(n,C(o.VERTEX_SHADER,e)),o.attachShader(n,C(o.FRAGMENT_SHADER,t)),o.bindAttribLocation(n,0,`aQuad`),o.bindAttribLocation(n,1,`aA`),o.bindAttribLocation(n,2,`aB`),o.linkProgram(n),!o.getProgramParameter(n,o.LINK_STATUS))throw Error(o.getProgramInfoLog(n)??`link`);return n},w=()=>{p=re(v,ee),m=re(te,ne);for(let[e,t]of[[`s`,p],[`l`,m]])for(let n of[`uRes`,`uCenter`,`uPpm`,`uCup`,`uH`,`uTime`,`uSheen`])S[e+n]=o.getUniformLocation(t,n);h=o.createVertexArray(),o.bindVertexArray(h);let e=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,e),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),g=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,g),o.bufferData(o.ARRAY_BUFFER,b.byteLength,o.DYNAMIC_DRAW),o.enableVertexAttribArray(1),o.vertexAttribPointer(1,4,o.FLOAT,!1,24,0),o.vertexAttribDivisor(1,1),o.enableVertexAttribArray(2),o.vertexAttribPointer(2,2,o.FLOAT,!1,24,16),o.vertexAttribDivisor(2,1),o.bindVertexArray(null)};w();let T=1,E=1,D=.5,O=.5,k=3,ie=()=>{T=y.clientWidth,E=y.clientHeight,k=(Math.min(T,E)-20)/120,D=T/2,O=E/2},A=`none`,j=-1,M=[],N=0,P=0,F=0,I=0,L=0,ae=0,R=e=>{let t=y.getBoundingClientRect(),n=(e.clientX-t.left-D)/k,r=(e.clientY-t.top-O)/k;return{dx:n,dy:r,r:Math.hypot(n,r),a:Math.atan2(r,n)}},z=e=>{for(;M.length>3;)M.shift();if(M.length<2||e-M[M.length-1].t>90)return 0;let t=M[0],n=M[M.length-1],r=n.a-t.a;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;let i=Math.max(.008,(n.t-t.t)/1e3);return r/i};y.addEventListener(`pointerdown`,e=>{if(j!==-1)return;let t=R(e);j=e.pointerId,y.setPointerCapture(j),N=performance.now(),P=e.clientX,F=e.clientY,I=0,M.length=0,M.push({t:e.timeStamp,a:t.a}),t.r<41?(A=`stir`,u.stirring=!0,u.stirR=t.r/1e3,ae=performance.now()):t.r<64?(A=`turn`,u.turn=u.Oc):(A=`none`,j=-1),e.preventDefault()}),y.addEventListener(`pointermove`,e=>{if(e.pointerId!==j)return;let t=R(e);I+=Math.hypot(e.movementX||0,e.movementY||0),M.push({t:e.timeStamp,a:t.a}),performance.now(),A===`stir`&&(u.stirR=Math.min(t.r,38)/1e3)});let B=e=>{if(e.pointerId!==j)return;let t=performance.now();A===`stir`&&t-N<250&&Math.hypot(e.clientX-P,e.clientY-F)<10&&(t-L<400&&t-ae>0?(u.scatter(),L=0):L=t),u.stirring=!1,u.stirW=0,u.turn=null,A=`none`,j=-1};y.addEventListener(`pointerup`,B),y.addEventListener(`pointercancel`,B);let V=0,H=!1,U=0;addEventListener(`keydown`,e=>{(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(V=e.key===`ArrowLeft`?-1:1,H=e.shiftKey,U=performance.now()+500,e.preventDefault())});let oe=e=>{if(A===`stir`){let t=Math.max(-12,Math.min(12,z(e)));u.stirW=t-u.Oc}else if(A===`turn`)u.turn=Math.max(-20,Math.min(20,z(e)));else{let e=performance.now()<U;u.turn=e&&H?V*6:null,u.stirring=e&&!H,u.stirR=.02,u.stirW=u.stirring?V*6-u.Oc:0}},W=0,G=-60,K=0,q=0,J=!1,Y=0,X=0,Z=0,se=0,ce=0,le=0,Q=new _(1),ue=()=>{Q.x.set(u.x),Q.y.set(u.y),Q.head.set(u.head),Q.fr.set(u.fr),Q.fa.set(u.fa),Q.fhead.set(u.fhead),Q.w.set(u.w),Q.Oc=0,Q.angle=u.angle},de=e=>{let t=0;for(let n=0;n<160;n++)b[t++]=e.x[n]*1e3,b[t++]=e.y[n]*1e3,b[t++]=e.head[n],b[t++]=e.size[n],b[t++]=0,b[t++]=e.hue[n];for(let n=0;n<24;n++)b[t++]=e.fr[n]*1e3*Math.cos(e.fa[n]),b[t++]=e.fr[n]*1e3*Math.sin(e.fa[n]),b[t++]=e.fhead[n],b[t++]=e.fsize[n]*.8,b[t++]=1,b[t++]=n*.37%1},fe=()=>{let e=u.medianR()/l,t=u.fracOut();return e<.45?`The leaves have gathered in the middle.`:t>.85?`The leaves are against the wall.`:`The leaves are spread on the bottom.`},pe=e=>{if(q=0,J||document.hidden)return;let t=X?Math.min(.25,(e-X)/1e3):0;X=e,oe(e),(A!==`none`||performance.now()<U)&&(K=e);let n=!c&&e-K>1500&&Math.abs(u.Oc)<.3;W+=(+!!n-W)*Math.min(1,t/1.2),G+=t*9,G>70&&(G=-70),Y+=t;let r=0;for(;Y>=d&&r<30;)u.step(d),Y-=d,r++;r===30&&(Y=0),i(y,{maxDpr:2}),ie();let s=y.width/T,l=k*s,_=u.angle,v=u;c&&(e-ce>250&&(ue(),ce=e),e-se>500&&(Z=Math.round(u.angle/(Math.PI/12))*(Math.PI/12),se=e),_=Z,v=Q),window.__cup=u,u.surface(x);for(let e=0;e<64;e++)x[e]*=10;if(de(v),o.viewport(0,0,y.width,y.height),o.disable(o.BLEND),o.useProgram(p),o.uniform2f(S.suRes,y.width,y.height),o.uniform2f(S.suCenter,D*s,O*s),o.uniform1f(S.suPpm,l),o.uniform1f(S.suCup,_),o.uniform1fv(S.suH,x),o.uniform1f(S.suTime,e/1e3),o.uniform2f(S.suSheen,W,G),o.bindVertexArray(null),o.drawArrays(o.TRIANGLES,0,3),o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA),o.useProgram(m),o.uniform2f(S.luRes,y.width,y.height),o.uniform2f(S.luCenter,D*s,O*s),o.uniform1f(S.luPpm,l),o.uniform1f(S.luCup,_),o.bindVertexArray(h),o.bindBuffer(o.ARRAY_BUFFER,g),o.bufferSubData(o.ARRAY_BUFFER,0,b),o.drawArraysInstanced(o.TRIANGLE_STRIP,0,4,184),f&&e-le>2e3){let t=fe();f.textContent!==t&&(f.textContent=t,le=e)}a(),$()},$=()=>{!q&&!J&&!document.hidden&&(q=requestAnimationFrame(pe))};r(y,()=>{J=!0,cancelAnimationFrame(q),q=0},()=>{w(),J=!1,X=0,$()}),n(e=>{e?(cancelAnimationFrame(q),q=0):(X=0,$())}),$()}
(()=>{var cp=Object.defineProperty;var hp=(r,t,e)=>t in r?cp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var yu=(r,t,e)=>hp(r,typeof t!="symbol"?t+"":t,e);var ed=0,Qc=1,id=2;var ta=1,nd=2,Js=3,rn=0,$e=1,Oe=2,hs=0,Ks=1,Li=2,th=3,eh=4,sd=5;var us=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,dd=203,ih=204,nh=205,fd=206,pd=207,md=208,gd=209,xd=210,yd=211,vd=212,_d=213,Md=214,Qa=0,to=1,eo=2,ks=3,io=4,no=5,so=6,ro=7,Bo=0,Sd=1,bd=2,an=0,sh=1,rh=2,ah=3,oh=4,lh=5,ch=6,hh=7;var uh=300,ds=301,js=302,Oo=303,ko=304,ns=1e3,Qi=1001,ao=1002,ze=1003,wd=1004;var ea=1005;var _i=1006,Ho=1007;var bn=1008;var mi=1009,dh=1010,fh=1011,Qs=1012,Go=1013,Di=1014,Oi=1015,Ni=1016,Vo=1017,Wo=1018,fs=1020,ph=35902,mh=35899,gh=1021,xh=1022,zi=1023,vn=1026,wn=1027,Xo=1028,qo=1029,Vn=1030,Yo=1031;var Zo=1033,ia=33776,na=33777,sa=33778,ra=33779,$o=35840,Jo=35841,Ko=35842,jo=35843,Qo=36196,tl=37492,el=37496,il=37488,nl=37489,aa=37490,sl=37491,rl=37808,al=37809,ol=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,xl=37820,yl=37821,vl=36492,_l=36494,Ml=36495,Sl=36283,bl=36284,oa=36285,wl=36286;var br=2300,oo=2301,Ka=2302,Hc=2303,Gc=2400,Vc=2401,Wc=2402;var Ed=3200;var la=0,Td=1,En="",Ci="srgb",ss="srgb-linear",wr="linear",Se="srgb";var ja=7680;var Ad=519,Rd=512,Cd=513,Pd=514,yh=515,Id=516,Ld=517,vh=518,_h=519,Mh=35044,$i=35048;var Sh="300 es",Bi=2e3,Hs=2001;function up(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Er(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dd(){let r=Er("canvas");return r.style.display="block",r}var vu={},Gs=null;function Tr(...r){let t="THREE."+r.shift();Gs?Gs("log",t,...r):console.log(t,...r)}function Nd(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xt(...r){r=Nd(r);let t="THREE."+r.shift();if(Gs)Gs("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Yt(...r){r=Nd(r);let t="THREE."+r.shift();if(Gs)Gs("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function _r(...r){let t=r.join(" ");t in vu||(vu[t]=!0,Xt(...r))}function zd(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Fd={[Qa]:Qa,[eo]:so,[io]:io,[ks]:no,[to]:to,[so]:eo,[ro]:ro,[no]:ks},tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mc=Math.PI/180,lo=180/Math.PI;function Wn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hi[r&255]+hi[r>>8&255]+hi[r>>16&255]+hi[r>>24&255]+"-"+hi[t&255]+hi[t>>8&255]+"-"+hi[t>>16&15|64]+hi[t>>24&255]+"-"+hi[e&63|128]+hi[e>>8&255]+"-"+hi[e>>16&255]+hi[e>>24&255]+hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function fp(r,t){return(r%t+t)%t}function gc(r,t,e){return(1-e)*r+e*t}function Ud(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function El(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bd(r,t){if(t.constructor===Float32Array)return r;let e=El(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Od(r,t){if(t.constructor===Float32Array)return r;let e=El(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Rh=class Rh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;var nt=Rh,Qt=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(h!==x||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,o=Math.sin(o*y)/S,l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+x*o}else{l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+x*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+u*h+l*f-c*d,t[e+1]=l*p+u*d+c*h-o*f,t[e+2]=c*p+u*f+o*d-l*h,t[e+3]=u*p-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+n*c-s*l,this._y=n*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ch=class Ch{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),u=2*(o*e-s*n),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=n+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ch.prototype.isVector3=!0;var A=Ch,xc=new A,_u=new Qt,Ph=class Ph{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],y=n[1],S=n[4],_=n[7],M=n[2],w=n[5],v=n[8];return s[0]=a*x+o*y+l*M,s[3]=a*m+o*S+l*w,s[6]=a*g+o*_+l*v,s[1]=c*x+u*y+h*M,s[4]=c*m+u*S+h*w,s[7]=c*g+u*_+h*v,s[2]=d*x+f*y+p*M,s[5]=d*m+f*S+p*w,s[8]=d*g+f*_+p*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,p=e*h+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(n*c-u*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(u*e-n*l)*x,t[5]=(n*s-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return _r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(t,e)),this}rotate(t){return _r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-t)),this}translate(t,e){return _r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;var Jt=Ph,yc=new Jt,Mu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){let r={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Se&&(n.r=yn(n.r),n.g=yn(n.g),n.b=yn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(n.r=Os(n.r),n.g=Os(n.g),n.b=Os(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===En?wr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ss]:{primaries:t,whitePoint:i,transfer:wr,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}var ae=pp();function yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ms,co=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ms===void 0&&(Ms=Er("canvas")),Ms.width=t.width,Ms.height=t.height;let n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ms}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=yn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yn(e[i]/255)*255):e[i]=yn(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,Vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(vc(n[a].image)):s.push(vc(n[a]))}else s=vc(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?co.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var gp=0,_c=new A,Mi=class r extends tn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Qi,n=Qi,s=_i,a=bn,o=zi,l=mi,c=r.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Wn(),this.name="",this.source=new Vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=uh;Mi.DEFAULT_ANISOTROPY=1;var Ih=class Ih{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(f+1)/2,M=(g+1)/2,w=(u+d)/4,v=(h+x)/4,b=(p+m)/4;return S>_&&S>M?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=w/i,s=v/i):_>M?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=w/n,s=b/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=v/s,n=b/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;var Fe=Ih,ho=class extends tn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Mi({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Vs(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends ho{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ar=class extends Mi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uo=class extends Mi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Uo=class Uo{constructor(t,e,i,n,s,a,o,l,c,u,h,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,u,h,d,f,p,x,m)}set(t,e,i,n,s,a,o,l,c,u,h,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Ss.setFromMatrixColumn(t,0).length(),s=1/Ss.setFromMatrixColumn(t,1).length(),a=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=a*u,f=a*h,p=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;e[0]=d-x*o,e[4]=-a*h,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,p=o*u,x=o*h;e[0]=l*u,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*u,e[4]=x-d*h,e[8]=p*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+p,e[10]=d-x*h}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=a*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xp,t,yp)}lookAt(t,e,i){let n=this.elements;return Ai.subVectors(t,e),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),Pn.crossVectors(i,Ai),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),Pn.crossVectors(i,Ai)),Pn.normalize(),ba.crossVectors(Ai,Pn),n[0]=Pn.x,n[4]=ba.x,n[8]=Ai.x,n[1]=Pn.y,n[5]=ba.y,n[9]=Ai.y,n[2]=Pn.z,n[6]=ba.z,n[10]=Ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],_=i[11],M=i[15],w=n[0],v=n[4],b=n[8],P=n[12],R=n[1],L=n[5],z=n[9],U=n[13],I=n[2],B=n[6],H=n[10],G=n[14],it=n[3],W=n[7],J=n[11],tt=n[15];return s[0]=a*w+o*R+l*I+c*it,s[4]=a*v+o*L+l*B+c*W,s[8]=a*b+o*z+l*H+c*J,s[12]=a*P+o*U+l*G+c*tt,s[1]=u*w+h*R+d*I+f*it,s[5]=u*v+h*L+d*B+f*W,s[9]=u*b+h*z+d*H+f*J,s[13]=u*P+h*U+d*G+f*tt,s[2]=p*w+x*R+m*I+g*it,s[6]=p*v+x*L+m*B+g*W,s[10]=p*b+x*z+m*H+g*J,s[14]=p*P+x*U+m*G+g*tt,s[3]=y*w+S*R+_*I+M*it,s[7]=y*v+S*L+_*B+M*W,s[11]=y*b+S*z+_*H+M*J,s[15]=y*P+S*U+_*G+M*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-c*d,S=o*f-c*h,_=o*d-l*h,M=a*f-c*u,w=a*d-l*u,v=a*h-o*u;return e*(x*y-m*S+g*_)-i*(p*y-m*M+g*w)+n*(p*S-x*M+g*v)-s*(p*_-x*w+m*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(s*u-o*l)+n*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*o-i*a,S=e*l-n*a,_=e*c-s*a,M=i*l-n*o,w=i*c-s*o,v=n*c-s*l,b=u*x-h*p,P=u*m-d*p,R=u*g-f*p,L=h*m-d*x,z=h*g-f*x,U=d*g-f*m,I=y*U-S*z+_*L+M*R-w*P+v*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(o*U-l*z+c*L)*B,t[1]=(n*z-i*U-s*L)*B,t[2]=(x*v-m*w+g*M)*B,t[3]=(d*w-h*v-f*M)*B,t[4]=(l*R-a*U-c*P)*B,t[5]=(e*U-n*R+s*P)*B,t[6]=(m*_-p*v-g*S)*B,t[7]=(u*v-d*_+f*S)*B,t[8]=(a*z-o*R+c*b)*B,t[9]=(i*R-e*z-s*b)*B,t[10]=(p*w-x*_+g*y)*B,t[11]=(h*_-u*w-f*y)*B,t[12]=(o*P-a*L-l*b)*B,t[13]=(e*L-i*P+n*b)*B,t[14]=(x*S-p*M-m*y)*B,t[15]=(u*M-h*S+d*y)*B,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,p=s*h,x=a*u,m=a*h,g=o*h,y=l*c,S=l*u,_=l*h,M=i.x,w=i.y,v=i.z;return n[0]=(1-(x+g))*M,n[1]=(f+_)*M,n[2]=(p-S)*M,n[3]=0,n[4]=(f-_)*w,n[5]=(1-(d+g))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(p+S)*v,n[9]=(m-y)*v,n[10]=(1-(d+x))*v,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Ss.set(n[0],n[1],n[2]).length(),o=Ss.set(n[4],n[5],n[6]).length(),l=Ss.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Vi.copy(this);let c=1/a,u=1/o,h=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=u,Vi.elements[5]*=u,Vi.elements[6]*=u,Vi.elements[8]*=h,Vi.elements[9]*=h,Vi.elements[10]*=h,e.setFromRotationMatrix(Vi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=Bi,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===Bi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Hs)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Bi,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===Bi)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===Hs)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Uo.prototype.isMatrix4=!0;var zt=Uo,Ss=new A,Vi=new zt,xp=new A(0,0,0),yp=new A(1,1,1),Pn=new A,ba=new A,Ai=new A,bu=new zt,wu=new Qt,Ue=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ue.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,Eu=new A,bs=new Qt,dn=new zt,wa=new A,hr=new A,_p=new A,Mp=new Qt,Tu=new A(1,0,0),Au=new A(0,1,0),Ru=new A(0,0,1),Cu={type:"added"},Sp={type:"removed"},ws={type:"childadded",child:null},Mc={type:"childremoved",child:null},Be=class r extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new A,e=new Ue,i=new Qt,n=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new zt},normalMatrix:{value:new Jt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Au,t)}rotateZ(t){return this.rotateOnAxis(Ru,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Au,t)}translateZ(t){return this.translateOnAxis(Ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?wa.copy(t):wa.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(hr,wa,this.up):dn.lookAt(wa,hr,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),bs.setFromRotationMatrix(dn),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cu),ws.child=t,this.dispatchEvent(ws),ws.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cu),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new A(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Sc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var At=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=fp(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Sc(a,s,t+1/3),this.g=Sc(a,s,t),this.b=Sc(a,s,t-1/3)}return ae.colorSpaceToWorking(this,n),this}setStyle(t,e=Ci){function i(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ci){let i=kd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ci){return ae.workingToColorSpace(ui.copy(this),t),Math.round(he(ui.r*255,0,255))*65536+Math.round(he(ui.g*255,0,255))*256+Math.round(he(ui.b*255,0,255))}getHexString(t=Ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ui.copy(this),e);let i=ui.r,n=ui.g,s=ui.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ui.copy(this),e),t.r=ui.r,t.g=ui.g,t.b=ui.b,t}getStyle(t=Ci){ae.workingToColorSpace(ui.copy(this),t);let e=ui.r,i=ui.g,n=ui.b;return t!==Ci?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Ea);let i=gc(In.h,Ea.h,e),n=gc(In.s,Ea.s,e),s=gc(In.l,Ea.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new At;At.NAMES=kd;var Cr=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zn=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ue,this.environmentIntensity=1,this.environmentRotation=new Ue,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wi=new A,fn=new A,bc=new A,pn=new A,Es=new A,Ts=new A,Pu=new A,wc=new A,Ec=new A,Tc=new A,Ac=new Fe,Rc=new Fe,Cc=new Fe,xn=class r{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Wi.subVectors(t,e),n.cross(Wi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Wi.subVectors(n,e),fn.subVectors(i,e),bc.subVectors(t,e);let a=Wi.dot(Wi),o=Wi.dot(fn),l=Wi.dot(bc),c=fn.dot(fn),u=fn.dot(bc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(t,e),Rc.fromBufferAttribute(t,i),Cc.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ac,s.x),a.addScaledVector(Rc,s.y),a.addScaledVector(Cc,s.z),a}static isFrontFacing(t,e,i,n){return Wi.subVectors(i,e),fn.subVectors(t,e),Wi.cross(fn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Wi.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;Es.subVectors(n,i),Ts.subVectors(s,i),wc.subVectors(t,i);let l=Es.dot(wc),c=Ts.dot(wc);if(l<=0&&c<=0)return e.copy(i);Ec.subVectors(t,n);let u=Es.dot(Ec),h=Ts.dot(Ec);if(u>=0&&h<=u)return e.copy(n);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector(Es,a);Tc.subVectors(t,s);let f=Es.dot(Tc),p=Ts.dot(Tc);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Ts,o);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Pu.subVectors(s,n),o=(h-u)/(h-u+(f-p)),e.copy(n).addScaledVector(Pu,o);let g=1/(m+x+d);return a=x*g,o=d*g,e.copy(i).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},en=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xi):Xi.fromBufferAttribute(s,a),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Aa.subVectors(this.max,ur),As.subVectors(t.a,ur),Rs.subVectors(t.b,ur),Cs.subVectors(t.c,ur),Ln.subVectors(Rs,As),Dn.subVectors(Cs,Rs),jn.subVectors(As,Cs);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-jn.z,jn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,jn.z,0,-jn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-jn.y,jn.x,0];return!Pc(e,As,Rs,Cs,Aa)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,As,Rs,Cs,Aa))?!1:(Ra.crossVectors(Ln,Dn),e=[Ra.x,Ra.y,Ra.z],Pc(e,As,Rs,Cs,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mn=[new A,new A,new A,new A,new A,new A,new A,new A],Xi=new A,Ta=new en,As=new A,Rs=new A,Cs=new A,Ln=new A,Dn=new A,jn=new A,ur=new A,Aa=new A,Ra=new A,Qn=new A;function Pc(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Qn.fromArray(r,s);let o=n.x*Math.abs(Qn.x)+n.y*Math.abs(Qn.y)+n.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),u=i.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var je=new A,Ca=new nt,wp=0,di=class extends tn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=t!==void 0?El(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Od(t,this.array)}};var Pr=class extends di{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ir=class extends di{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var qt=class extends di{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ep=new en,dr=new A,Ic=new A,_n=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ep.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(dr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Ic)),this.expandByPoint(dr.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tp=0,Ui=new zt,Lc=new Be,Ps=new A,Ri=new en,fr=new en,si=new A,Ee=class r extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(up(t)?Ir:Pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,e,i){return Ui.makeTranslation(t,e,i),this.applyMatrix4(Ui),this}scale(t,e,i){return Ui.makeScale(t,e,i),this.applyMatrix4(Ui),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Ri.setFromBufferAttribute(s),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(si.addVectors(Ri.min,fr.min),Ri.expandByPoint(si),si.addVectors(Ri.max,fr.max),Ri.expandByPoint(si)):(Ri.expandByPoint(fr.min),Ri.expandByPoint(fr.max))}Ri.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)si.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(si));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)si.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(t,c),si.add(Ps)),n=Math.max(n,i.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new A,l[P]=new A;let u=new A,h=new A,d=new A,f=new nt,p=new nt,x=new nt,m=new A,g=new A;function y(P,R,L){c[P]=c[R]=c[L]=1,u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,R),x.fromBufferAttribute(s,L),h.sub(u),d.sub(u),p.sub(f),x.sub(f);let z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(z),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(z),o[P].add(m),o[R].add(m),o[L].add(m),l[P].add(g),l[R].add(g),l[L].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,R=S.length;P<R;++P){let L=S[P],z=L.start,U=L.count;for(let I=z,B=z+U;I<B;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new A,M=new A,w=new A,v=new A;function b(P){w.fromBufferAttribute(n,P),v.copy(w);let R=o[P];_.copy(R),_.sub(w.multiplyScalar(w.dot(R))).normalize(),M.crossVectors(v,R);let z=M.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,z)}for(let P=0,R=i.count;P<R;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new di(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new A,s=new A,a=new A,o=new A,l=new A,c=new A,u=new A,h=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)si.fromBufferAttribute(t,e),si.normalize(),t.setXYZ(e,si.x,si.y,si.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new di(d,u,h)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(n[l]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mh,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Iu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Iu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Iu(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Wn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var yi=new A,Lr=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?El(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix4(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyNormalMatrix(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.transformDirection(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new di(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Od(t,this.data.array)}},Dc=new A,Ap=new A,Rp=new Jt,qi=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Dc.subVectors(i,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Rp.getNormalMatrix(t),n=this.coplanarPoint(Dc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cp=0,Yi=class extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ks,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=nh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Fn=class extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Is,pr=new A,Ls=new A,Ds=new A,Ns=new nt,mr=new nt,Hd=new zt,Pa=new A,gr=new A,Ia=new A,Lu=new nt,Nc=new nt,Du=new nt,rs=class extends Be{constructor(t=new Fn){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fo(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Lr(i,3,0,!1)),Is.setAttribute("uv",new Lr(i,2,3,!1))}this.geometry=Is,this.material=t,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Hd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;La(Pa.set(-.5,-.5,0),Ds,a,Ls,n,s),La(gr.set(.5,-.5,0),Ds,a,Ls,n,s),La(Ia.set(.5,.5,0),Ds,a,Ls,n,s),Lu.set(0,0),Nc.set(1,0),Du.set(1,1);let o=t.ray.intersectTriangle(Pa,gr,Ia,!1,pr);if(o===null&&(La(gr.set(-.5,.5,0),Ds,a,Ls,n,s),Nc.set(0,1),o=t.ray.intersectTriangle(Pa,Ia,gr,!1,pr),o===null))return;let l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:xn.getInterpolation(pr,Pa,gr,Ia,Lu,Nc,Du,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function La(r,t,e,i,n,s){Ns.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(mr.x=s*Ns.x-n*Ns.y,mr.y=n*Ns.x+s*Ns.y):mr.copy(Ns),r.copy(t),r.x+=mr.x,r.y+=mr.y,r.applyMatrix4(Hd)}var gn=new A,zc=new A,Da=new A,Na=new A,Dr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){zc.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),Na.copy(this.origin).sub(zc);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Da),o=Na.dot(this.direction),l=-Na.dot(Da),c=Na.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=s*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(zc).addScaledVector(Da,d),f}intersectSphere(t,e){if(t.radius<0)return null;gn.subVectors(t.center,this.origin);let i=gn.dot(this.direction),n=gn.dot(gn)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,y=i.y-a.y,S=i.z-a.z,_=Math.abs(l),M=Math.abs(c),w=Math.abs(u),v,b,P,R,L,z,U,I,B,H,G,it;if(_>=M&&_>=w?(P=l,z=h,B=p,it=g,l>=0?(v=c,b=u,R=d,L=f,U=x,I=m,H=y,G=S):(v=u,b=c,R=f,L=d,U=m,I=x,H=S,G=y)):M>=w?(P=c,z=d,B=x,it=y,c>=0?(v=u,b=l,R=f,L=h,U=m,I=p,H=S,G=g):(v=l,b=u,R=h,L=f,U=p,I=m,H=g,G=S)):(P=u,z=f,B=m,it=S,u>=0?(v=l,b=c,R=h,L=d,U=p,I=x,H=g,G=y):(v=c,b=l,R=d,L=h,U=x,I=p,H=y,G=g)),P===0)return null;let W=v/P,J=b/P,tt=1/P,Tt=R-W*z,Ot=L-J*z,Y=U-W*B,mt=I-J*B,Rt=H-W*it,kt=G-J*it,yt=Rt*mt-kt*Y,Ft=Tt*kt-Ot*Rt,Te=Y*Ot-mt*Tt;if(n){if(yt<0||Ft<0||Te<0)return null}else if((yt<0||Ft<0||Te<0)&&(yt>0||Ft>0||Te>0))return null;let Ht=yt+Ft+Te;if(Ht===0)return null;let se=tt*(yt*z+Ft*B+Te*it);return(Ht>0?se<0:se>0)?null:this.at(se/Ht,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nu=new zt,ts=new Dr,za=new _n,zu=new A,Fa=new A,Ua=new A,Ba=new A,Fc=new A,Oa=new A,Fu=new A,ka=new A,lt=class extends Be{constructor(t=new Ee,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(Fc.fromBufferAttribute(h,t),a?Oa.addScaledVector(Fc,u):Oa.addScaledVector(Fc.sub(e),u))}e.add(Oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),ts.copy(t.ray).recast(t.near),!(za.containsPoint(ts.origin)===!1&&(ts.intersectSphere(za,zu)===null||ts.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Nu.copy(s).invert(),ts.copy(t.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,M=S;_<M;_+=3){let w=o.getX(_),v=o.getX(_+1),b=o.getX(_+2);n=Ha(this,g,t,i,c,u,h,w,v,b),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);n=Ha(this,a,t,i,c,u,h,y,S,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,M=S;_<M;_+=3){let w=_,v=_+1,b=_+2;n=Ha(this,g,t,i,c,u,h,w,v,b),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,_=m+2;n=Ha(this,a,t,i,c,u,h,y,S,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Pp(r,t,e,i,n,s,a,o){let l;if(t.side===$e?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===rn,o),l===null)return null;ka.copy(o),ka.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ka);return c<e.near||c>e.far?null:{distance:c,point:ka.clone(),object:r}}function Ha(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Fa),r.getVertexPosition(l,Ua),r.getVertexPosition(c,Ba);let u=Pp(r,t,e,i,Fa,Ua,Ba,Fu);if(u){let h=new A;xn.getBarycoord(Fu,Fa,Ua,Ba,h),n&&(u.uv=xn.getInterpolatedAttribute(n,o,l,c,h,new nt)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,h,new nt)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,h,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};xn.getNormal(Fa,Ua,Ba,d.normal),u.face=d,u.barycoord=h}return u}var as=class extends Mi{constructor(t=null,e=1,i=1,n,s,a,o,l,c=ze,u=ze,h,d){super(null,a,o,l,c,u,n,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wi=class extends di{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zs=new zt,Uu=new zt,Ga=[],Bu=new en,Ip=new zt,xr=new lt,yr=new _n,Mn=class extends lt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ip)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zs),Bu.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(Bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zs),yr.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(i),t.ray.intersectsSphere(yr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,zs),Uu.multiplyMatrices(i,zs),xr.matrixWorld=Uu,xr.raycast(t,Ga);for(let a=0,o=Ga.length;a<o;a++){let l=Ga[a];l.instanceId=s,l.object=this,e.push(l)}Ga.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(n*this.count),n,this.count,Xo,Oi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new _n,Lp=new nt(.5,.5),Va=new A,Un=class{constructor(t=new qi,e=new qi,i=new qi,n=new qi,s=new qi,a=new qi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bi,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],y=s[12],S=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-a,f-u,g-p,M-y).normalize(),n[1].setComponents(c+a,f+u,g+p,M+y).normalize(),n[2].setComponents(c+o,f+h,g+x,M+S).normalize(),n[3].setComponents(c-o,f-h,g-x,M-S).normalize(),i)n[4].setComponents(l,d,m,_).normalize(),n[5].setComponents(c-l,f-d,g-m,M-_).normalize();else if(n[4].setComponents(c-l,f-d,g-m,M-_).normalize(),e===Bi)n[5].setComponents(c+l,f+d,g+m,M+_).normalize();else if(e===Hs)n[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=Lp.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Va.x=n.normal.x>0?t.max.x:t.min.x,Va.y=n.normal.y>0?t.max.y:t.min.y,Va.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ou=new zt,po=class r{constructor(){this.coordinateSystem=Bi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];Ou.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Un),i[n].setFromProjectionMatrix(Ou,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Un),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var mo=class extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ku=new zt,Xc=new Dr,Wa=new _n,Xa=new A,Nr=class extends Be{constructor(t=new Ee,e=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(n),Wa.radius+=s,t.ray.intersectsSphere(Wa)===!1)return;ku.copy(n).invert(),Xc.copy(t.ray).applyMatrix4(ku);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);Xa.fromBufferAttribute(h,m),Hu(Xa,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,x=f;p<x;p++)Xa.fromBufferAttribute(h,p),Hu(Xa,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Hu(r,t,e,i,n,s,a){let o=Xc.distanceSqToPoint(r);if(o<e){let l=new A;Xc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var zr=class extends Mi{constructor(t=[],e=ds,i,n,s,a,o,l,c,u){super(t,e,i,n,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ai=class extends Mi{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends Mi{constructor(t,e,i=Di,n,s,a,o=ze,l=ze,c,u=vn,h=1){if(u!==vn&&u!==wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,n,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fr=class extends Zi{constructor(t,e=Di,i=ds,n,s,a=ze,o=ze,l,c=vn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,n,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ur=class extends Mi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xt=class r extends Ee{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function p(x,m,g,y,S,_,M,w,v,b,P){let R=_/v,L=M/b,z=_/2,U=M/2,I=w/2,B=v+1,H=b+1,G=0,it=0,W=new A;for(let J=0;J<H;J++){let tt=J*L-U;for(let Tt=0;Tt<B;Tt++){let Ot=Tt*R-z;W[x]=Ot*y,W[m]=tt*S,W[g]=I,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=w>0?1:-1,u.push(W.x,W.y,W.z),h.push(Tt/v),h.push(1-J/b),G+=1}}for(let J=0;J<b;J++)for(let tt=0;tt<v;tt++){let Tt=d+tt+B*J,Ot=d+tt+B*(J+1),Y=d+(tt+1)+B*(J+1),mt=d+(tt+1)+B*J;l.push(Tt,Ot,mt),l.push(Ot,Y,mt),it+=6}o.addGroup(f,it,P),f+=it,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},nn=class r extends Ee{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,p=i*2+s,x=n+1,m=new A,g=new A;for(let y=0;y<=p;y++){let S=0,_=0,M=0,w=0;if(y<=i){let P=y/i,R=P*Math.PI/2;_=-u-t*Math.cos(R),M=t*Math.sin(R),w=-t*Math.cos(R),S=P*h}else if(y<=i+s){let P=(y-i)/s;_=-u+P*e,M=t,w=0,S=h+P*d}else{let P=(y-i-s)/i,R=P*Math.PI/2;_=u+t*Math.sin(R),M=t*Math.cos(R),w=t*Math.sin(R),S=h+d+P*h}let v=Math.max(0,Math.min(1,S/f)),b=0;y===0?b=.5/n:y===p&&(b=-.5/n);for(let P=0;P<=n;P++){let R=P/n,L=R*Math.PI*2,z=Math.sin(L),U=Math.cos(L);g.x=-M*U,g.y=_,g.z=M*z,o.push(g.x,g.y,g.z),m.set(-M*U,w,M*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+b,v)}if(y>0){let P=(y-1)*x;for(let R=0;R<n;R++){let L=P+R,z=P+R+1,U=y*x+R,I=y*x+R+1;a.push(L,z,U),a.push(z,I,U)}}}this.setIndex(a),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},os=class r extends Ee{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new A,u=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=i+h/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wt=class r extends Ee{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let u=[],h=[],d=[],f=[],p=0,x=[],m=i/2,g=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function y(){let _=new A,M=new A,w=0,v=(e-t)/i;for(let b=0;b<=s;b++){let P=[],R=b/s,L=R*(e-t)+t;for(let z=0;z<=n;z++){let U=z/n,I=U*l+o,B=Math.sin(I),H=Math.cos(I);M.x=L*B,M.y=-R*i+m,M.z=L*H,h.push(M.x,M.y,M.z),_.set(B,v,H).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-R),P.push(p++)}x.push(P)}for(let b=0;b<n;b++)for(let P=0;P<s;P++){let R=x[P][b],L=x[P+1][b],z=x[P+1][b+1],U=x[P][b+1];(t>0||P!==0)&&(u.push(R,L,U),w+=3),(e>0||P!==s-1)&&(u.push(L,z,U),w+=3)}c.addGroup(g,w,0),g+=w}function S(_){let M=p,w=new nt,v=new A,b=0,P=_===!0?t:e,R=_===!0?1:-1;for(let z=1;z<=n;z++)h.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let L=p;for(let z=0;z<=n;z++){let I=z/n*l+o,B=Math.cos(I),H=Math.sin(I);v.x=P*H,v.y=m*R,v.z=P*B,h.push(v.x,v.y,v.z),d.push(0,R,0),w.x=B*.5+.5,w.y=H*.5*R+.5,f.push(w.x,w.y),p++}for(let z=0;z<n;z++){let U=M+z,I=L+z;_===!0?u.push(I,I+1,U):u.push(I+1,I,U),b+=3}c.addGroup(g,b,_===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sn=class r extends Wt{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Br=class r extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),u(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new A,_=new A,M=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],_),f(e[w+2],M),l(S,_,M,y)}function l(y,S,_,M){let w=M+1,v=[];for(let b=0;b<=w;b++){v[b]=[];let P=y.clone().lerp(_,b/w),R=S.clone().lerp(_,b/w),L=w-b;for(let z=0;z<=L;z++)z===0&&b===w?v[b][z]=P:v[b][z]=P.clone().lerp(R,z/L)}for(let b=0;b<w;b++)for(let P=0;P<2*(w-b)-1;P++){let R=Math.floor(P/2);P%2===0?(d(v[b][R+1]),d(v[b+1][R]),d(v[b][R])):(d(v[b][R+1]),d(v[b+1][R+1]),d(v[b+1][R]))}}function c(y){let S=new A;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(y),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function u(){let y=new A;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];let _=m(y)/2/Math.PI+.5,M=g(y)/Math.PI+.5;a.push(_,1-M)}p(),h()}function h(){for(let y=0;y<a.length;y+=6){let S=a[y+0],_=a[y+2],M=a[y+4],w=Math.max(S,_,M),v=Math.min(S,_,M);w>.9&&v<.1&&(S<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,S){let _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function p(){let y=new A,S=new A,_=new A,M=new A,w=new nt,v=new nt,b=new nt;for(let P=0,R=0;P<s.length;P+=9,R+=6){y.set(s[P+0],s[P+1],s[P+2]),S.set(s[P+3],s[P+4],s[P+5]),_.set(s[P+6],s[P+7],s[P+8]),w.set(a[R+0],a[R+1]),v.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),M.copy(y).add(S).add(_).divideScalar(3);let L=m(M);x(w,R+0,y,L),x(v,R+2,S,L),x(b,R+4,_,L)}}function x(y,S,_,M){M<0&&y.x===1&&(a[S]=y.x-1),_.x===0&&_.z===0&&(a[S]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let u=i[n],d=i[n+1]-u,f=(a-u)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new nt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new A,n=[],s=[],a=[],o=new A,l=new zt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(he(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(he(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Xs=class extends Pi{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},go=class extends Xs{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var Gu=new A,Vu=new A,Uc=new bh,Bc=new bh,Oc=new bh,xo=class extends Pi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new A){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%s]:(Vu.subVectors(n[0],n[1]).add(n[0]),c=Vu);let h=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?u=n[(o+2)%s]:(Gu.subVectors(n[s-1],n[s-2]).add(n[s-1]),u=Gu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Uc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,m),Bc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,m),Oc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Bc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Oc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Uc.calc(l),Bc.calc(l),Oc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new A().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Dp(r,t){let e=1-r;return e*e*t}function Np(r,t){return 2*(1-r)*r*t}function zp(r,t){return r*r*t}function Mr(r,t,e,i){return Dp(r,t)+Np(r,e)+zp(r,i)}function Fp(r,t){let e=1-r;return e*e*e*t}function Up(r,t){let e=1-r;return 3*e*e*r*t}function Bp(r,t){return 3*(1-r)*r*r*t}function Op(r,t){return r*r*r*t}function Sr(r,t,e,i,n){return Fp(r,t)+Up(r,e)+Bp(r,i)+Op(r,n)}var Or=class extends Pi{constructor(t=new nt,e=new nt,i=new nt,n=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new nt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Sr(t,n.x,s.x,a.x,o.x),Sr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends Pi{constructor(t=new A,e=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new A){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Sr(t,n.x,s.x,a.x,o.x),Sr(t,n.y,s.y,a.y,o.y),Sr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends Pi{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Pi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends Pi{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Mr(t,n.x,s.x,a.x),Mr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Pi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(Mr(t,n.x,s.x,a.x),Mr(t,n.y,s.y,a.y),Mr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Wu(o,l.x,c.x,u.x,h.x),Wu(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new nt().fromArray(n))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:go,CatmullRomCurve3:xo,CubicBezierCurve:Or,CubicBezierCurve3:yo,EllipseCurve:Xs,LineCurve:kr,LineCurve3:vo,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:_o,SplineCurve:Gr}),Mo=class extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new qc[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Vr=class extends Mo{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new kr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Hr(this.currentPoint.clone(),new nt(t,e),new nt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Or(this.currentPoint.clone(),new nt(t,e),new nt(i,n),new nt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Gr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let c=new Xs(t,e,i,n,s,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qs=class extends Vr{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Vr().fromJSON(n))}return this}};function kp(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Gd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Xp(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let u=o,h=l;for(let d=e;d<n;d+=e){let f=r[d],p=r[d+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Wr(s,a,e,o,l,c,0),a}function Gd(r,t,e,i,n){let s;if(n===i0(r,t,e,i)>0)for(let a=t;a<e;a+=i)s=Xu(a/i|0,r[a],r[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Xu(a/i|0,r[a],r[a+1],s);return s&&Ys(s,s.next)&&(qr(s),s=s.next),s}function ls(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(Ys(e,e.next)||We(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Wr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&Jp(r,i,n,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Gp(r,i,n,s):Hp(r)){t.push(l.i,r.i,c.i),qr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Vp(ls(r),t),Wr(r,t,e,i,n,s,2)):a===2&&Wp(r,t,e,i,n,s):Wr(ls(r),t,e,i,n,s,1);break}}}function Hp(r){let t=r.prev,e=r,i=r.next;if(We(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(n,s,a),h=Math.min(o,l,c),d=Math.max(n,s,a),f=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&vr(n,o,s,l,a,c,p.x,p.y)&&We(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gp(r,t,e,i){let n=r.prev,s=r,a=r.next;if(We(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,u=n.y,h=s.y,d=a.y,f=Math.min(o,l,c),p=Math.min(u,h,d),x=Math.max(o,l,c),m=Math.max(u,h,d),g=Yc(f,p,t,e,i),y=Yc(x,m,t,e,i),S=r.prevZ,_=r.nextZ;for(;S&&S.z>=g&&_&&_.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==n&&S!==a&&vr(o,u,l,h,c,d,S.x,S.y)&&We(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&vr(o,u,l,h,c,d,_.x,_.y)&&We(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==n&&S!==a&&vr(o,u,l,h,c,d,S.x,S.y)&&We(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&vr(o,u,l,h,c,d,_.x,_.y)&&We(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Vp(r,t){let e=r;do{let i=e.prev,n=e.next.next;!Ys(i,n)&&Wd(i,e,e.next,n)&&Xr(i,n)&&Xr(n,i)&&(t.push(i.i,e.i,n.i),qr(e),qr(e.next),e=r=n),e=e.next}while(e!==r);return ls(e)}function Wp(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qp(a,o)){let l=Xd(a,o);a=ls(a,a.next),l=ls(l,l.next),Wr(a,t,e,i,n,s,0),Wr(l,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Xp(r,t,e,i){let n=[];for(let s=0,a=t.length;s<a;s++){let o=t[s]*i,l=s<a-1?t[s+1]*i:r.length,c=Gd(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(jp(c))}n.sort(qp);for(let s=0;s<n.length;s++)e=Yp(n[s],e);return e}function qp(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Yp(r,t){let e=Zp(r,t);if(!e)return t;let i=Xd(e,r);return ls(i,i.next),ls(e,e.next)}function Zp(r,t){let e=t,i=r.x,n=r.y,s=-1/0,a;if(Ys(r,e))return e;do{if(Ys(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let h=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>s&&(s=h,a=e.x<e.next.x?e:e.next,h===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Vd(n<c?i:s,n,l,c,n<c?s:i,n,e.x,e.y)){let h=Math.abs(n-e.y)/(i-e.x);Xr(e,r)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&$p(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function $p(r,t){return We(r.prev,r,t.prev)<0&&We(t.next,r,r.next)<0}function Jp(r,t,e,i){let n=r;do n.z===0&&(n.z=Yc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Kp(n)}function Kp(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function Yc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function jp(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Vd(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function vr(r,t,e,i,n,s,a,o){return!(r===a&&t===o)&&Vd(r,t,e,i,n,s,a,o)}function Qp(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!t0(r,t)&&(Xr(r,t)&&Xr(t,r)&&e0(r,t)&&(We(r.prev,r,t.prev)||We(r,t.prev,t))||Ys(r,t)&&We(r.prev,r,r.next)>0&&We(t.prev,t,t.next)>0)}function We(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ys(r,t){return r.x===t.x&&r.y===t.y}function Wd(r,t,e,i){let n=Ya(We(r,t,e)),s=Ya(We(r,t,i)),a=Ya(We(e,i,r)),o=Ya(We(e,i,t));return!!(n!==s&&a!==o||n===0&&qa(r,e,t)||s===0&&qa(r,i,t)||a===0&&qa(e,r,i)||o===0&&qa(e,t,i))}function qa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ya(r){return r>0?1:r<0?-1:0}function t0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Wd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Xr(r,t){return We(r.prev,r,r.next)<0?We(r,t,r.next)>=0&&We(r,r.prev,t)>=0:We(r,t,r.prev)<0||We(r,r.next,t)<0}function e0(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Xd(r,t){let e=Zc(r.i,r.x,r.y),i=Zc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Xu(r,t,e,i){let n=Zc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function qr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Zc(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var $c=class{static triangulate(t,e,i=2){return kp(t,e,i)}},is=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];qu(t),Yu(i,t);let a=t.length;e.forEach(qu);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Yu(i,e[l]);let o=$c.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function qu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Yu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Yr=class r extends Ee{constructor(t=new qs([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new qt(n,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:n0,S,_=!1,M,w,v,b;if(g){S=g.getSpacedPoints(u),_=!0,d=!1;let et=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,et),w=new A,v=new A,b=new A}d||(m=0,f=0,p=0,x=0);let P=o.extractPoints(c),R=P.shape,L=P.holes;if(!is.isClockWise(R)){R=R.reverse();for(let et=0,dt=L.length;et<dt;et++){let ct=L[et];is.isClockWise(ct)&&(L[et]=ct.reverse())}}function U(et){let ct=10000000000000001e-36,Ct=et[0];for(let St=1;St<=et.length;St++){let jt=St%et.length,Ut=et[jt],ce=Ut.x-Ct.x,de=Ut.y-Ct.y,xe=ce*ce+de*de,F=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(Ct.x),Math.abs(Ct.y)),Je=ct*F*F;if(xe<=Je){et.splice(jt,1),St--;continue}Ct=Ut}}U(R),L.forEach(U);let I=L.length,B=R;for(let et=0;et<I;et++){let dt=L[et];R=R.concat(dt)}function H(et,dt,ct){return dt||Yt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(dt,ct)}let G=R.length;function it(et,dt,ct){let Ct,St,jt,Ut=et.x-dt.x,ce=et.y-dt.y,de=ct.x-et.x,xe=ct.y-et.y,F=Ut*Ut+ce*ce,Je=Ut*xe-ce*de;if(Math.abs(Je)>Number.EPSILON){let re=Math.sqrt(F),Re=Math.sqrt(de*de+xe*xe),vt=dt.x-ce/re,qe=dt.y+Ut/re,Vt=ct.x-xe/Re,$t=ct.y+de/Re,C=((Vt-vt)*xe-($t-qe)*de)/(Ut*xe-ce*de);Ct=vt+Ut*C-et.x,St=qe+ce*C-et.y;let E=Ct*Ct+St*St;if(E<=2)return new nt(Ct,St);jt=Math.sqrt(E/2)}else{let re=!1;Ut>Number.EPSILON?de>Number.EPSILON&&(re=!0):Ut<-Number.EPSILON?de<-Number.EPSILON&&(re=!0):Math.sign(ce)===Math.sign(xe)&&(re=!0),re?(Ct=-ce,St=Ut,jt=Math.sqrt(F)):(Ct=Ut,St=ce,jt=Math.sqrt(F/2))}return new nt(Ct/jt,St/jt)}let W=[];for(let et=0,dt=B.length,ct=dt-1,Ct=et+1;et<dt;et++,ct++,Ct++)ct===dt&&(ct=0),Ct===dt&&(Ct=0),W[et]=it(B[et],B[ct],B[Ct]);let J=[],tt,Tt=W.concat();for(let et=0,dt=I;et<dt;et++){let ct=L[et];tt=[];for(let Ct=0,St=ct.length,jt=St-1,Ut=Ct+1;Ct<St;Ct++,jt++,Ut++)jt===St&&(jt=0),Ut===St&&(Ut=0),tt[Ct]=it(ct[Ct],ct[jt],ct[Ut]);J.push(tt),Tt=Tt.concat(tt)}let Ot;if(m===0)Ot=is.triangulateShape(B,L);else{let et=[],dt=[];for(let ct=0;ct<m;ct++){let Ct=ct/m,St=f*Math.cos(Ct*Math.PI/2),jt=p*Math.sin(Ct*Math.PI/2)+x;for(let Ut=0,ce=B.length;Ut<ce;Ut++){let de=H(B[Ut],W[Ut],jt);Ft(de.x,de.y,-St),Ct===0&&et.push(de)}for(let Ut=0,ce=I;Ut<ce;Ut++){let de=L[Ut];tt=J[Ut];let xe=[];for(let F=0,Je=de.length;F<Je;F++){let re=H(de[F],tt[F],jt);Ft(re.x,re.y,-St),Ct===0&&xe.push(re)}Ct===0&&dt.push(xe)}}Ot=is.triangulateShape(et,dt)}let Y=Ot.length,mt=p+x;for(let et=0;et<G;et++){let dt=d?H(R[et],Tt[et],mt):R[et];_?(v.copy(M.normals[0]).multiplyScalar(dt.x),w.copy(M.binormals[0]).multiplyScalar(dt.y),b.copy(S[0]).add(v).add(w),Ft(b.x,b.y,b.z)):Ft(dt.x,dt.y,0)}for(let et=1;et<=u;et++)for(let dt=0;dt<G;dt++){let ct=d?H(R[dt],Tt[dt],mt):R[dt];_?(v.copy(M.normals[et]).multiplyScalar(ct.x),w.copy(M.binormals[et]).multiplyScalar(ct.y),b.copy(S[et]).add(v).add(w),Ft(b.x,b.y,b.z)):Ft(ct.x,ct.y,h/u*et)}for(let et=m-1;et>=0;et--){let dt=et/m,ct=f*Math.cos(dt*Math.PI/2),Ct=p*Math.sin(dt*Math.PI/2)+x;for(let St=0,jt=B.length;St<jt;St++){let Ut=H(B[St],W[St],Ct);Ft(Ut.x,Ut.y,h+ct)}for(let St=0,jt=L.length;St<jt;St++){let Ut=L[St];tt=J[St];for(let ce=0,de=Ut.length;ce<de;ce++){let xe=H(Ut[ce],tt[ce],Ct);_?Ft(xe.x,xe.y+S[u-1].y,S[u-1].x+ct):Ft(xe.x,xe.y,h+ct)}}}Rt(),kt();function Rt(){let et=n.length/3;if(d){let dt=0,ct=G*dt;for(let Ct=0;Ct<Y;Ct++){let St=Ot[Ct];Te(St[2]+ct,St[1]+ct,St[0]+ct)}dt=u+m*2,ct=G*dt;for(let Ct=0;Ct<Y;Ct++){let St=Ot[Ct];Te(St[0]+ct,St[1]+ct,St[2]+ct)}}else{for(let dt=0;dt<Y;dt++){let ct=Ot[dt];Te(ct[2],ct[1],ct[0])}for(let dt=0;dt<Y;dt++){let ct=Ot[dt];Te(ct[0]+G*u,ct[1]+G*u,ct[2]+G*u)}}i.addGroup(et,n.length/3-et,0)}function kt(){let et=n.length/3,dt=0;yt(B,dt),dt+=B.length;for(let ct=0,Ct=L.length;ct<Ct;ct++){let St=L[ct];yt(St,dt),dt+=St.length}i.addGroup(et,n.length/3-et,1)}function yt(et,dt){let ct=et.length;for(;--ct>=0;){let Ct=ct,St=ct-1;St<0&&(St=et.length-1);for(let jt=0,Ut=u+m*2;jt<Ut;jt++){let ce=G*jt,de=G*(jt+1),xe=dt+Ct+ce,F=dt+St+ce,Je=dt+St+de,re=dt+Ct+de;Ht(xe,F,Je,re)}}}function Ft(et,dt,ct){l.push(et),l.push(dt),l.push(ct)}function Te(et,dt,ct){se(et),se(dt),se(ct);let Ct=n.length/3,St=y.generateTopUV(i,n,Ct-3,Ct-2,Ct-1);le(St[0]),le(St[1]),le(St[2])}function Ht(et,dt,ct,Ct){se(et),se(dt),se(Ct),se(dt),se(ct),se(Ct);let St=n.length/3,jt=y.generateSideWallUV(i,n,St-6,St-3,St-2,St-1);le(jt[0]),le(jt[1]),le(jt[3]),le(jt[1]),le(jt[2]),le(jt[3])}function se(et){n.push(l[et*3+0]),n.push(l[et*3+1]),n.push(l[et*3+2])}function le(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return s0(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new qc[n.type]().fromJSON(n)),new r(i,t.options)}},n0={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],u=t[n*3+1];return[new nt(s,a),new nt(o,l),new nt(c,u)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-h),new nt(d,1-p),new nt(x,1-g)]:[new nt(o,1-l),new nt(u,1-h),new nt(f,1-p),new nt(m,1-g)]}};function s0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bn=class r extends Br{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Zr=class r extends Br{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},fi=class r extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=t/o,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*d-a;for(let S=0;S<c;S++){let _=S*h-s;p.push(_,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let S=y+c*g,_=y+c*(g+1),M=y+1+c*(g+1),w=y+1+c*g;f.push(S,_,w),f.push(_,M,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},On=class r extends Ee{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/n,f=new A,p=new nt;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=s+m/i*a;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,S=y,_=y+i+1,M=y+i+2,w=y+1;o.push(S,_,w),o.push(_,M,w)}}this.setIndex(o),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var oe=class r extends Ee{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new A,d=new A,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,_=a+S*o,M=t*Math.cos(_),w=Math.sqrt(t*t-M*M),v=0;g===0&&a===0?v=.5/e:g===i&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let P=b/e,R=n+P*s;h.x=-w*Math.cos(R),h.y=M,h.z=w*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(P+v,1-S),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let S=u[g][y+1],_=u[g][y],M=u[g+1][y],w=u[g+1][y+1];(g!==0||a>0)&&f.push(S,_,w),(g!==i-1||l<Math.PI)&&f.push(_,M,w)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cs=class r extends Ee{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],h=[],d=new A,f=new A,p=new A;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let g=0;g<=n;g++){let y=g/n*s;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(g/n),h.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,y=(n+1)*(x-1)+m-1,S=(n+1)*(x-1)+m,_=(n+1)*x+m;l.push(g,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ps(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Zu(n))n.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Zu(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function gi(r){let t={};for(let e=0;e<r.length;e++){let i=ps(r[e]);for(let n in i)t[n]=i[n]}return t}function Zu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function r0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function wh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var qd={clone:ps,merge:gi},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(n.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Fe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},So=class extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pi=class extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ze=class extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.combine=Bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bo=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wo=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fs(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Za(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var kn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Eo=class extends kn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:s=t,o=2*e-i;break;case Wc:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=t,l=2*i-e;break;case Wc:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let M=0;M!==o;++M)s[M]=g*a[u+M]+y*a[c+M]+S*a[l+M]+_*a[h+M];return s}},To=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(n-e),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},Ao=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ro=class extends kn{interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*x+a[l+m]*p;return s}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*d+p*2,y=h[g],S=h[g+1],_=t*d+p*2,M=u[_],w=u[_+1],v=c0(i,e,y,M,n);s[p]=Yd(v,x,S,w,m)}return s}};function Yd(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function l0(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function c0(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){let o=Yd(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;let l=l0(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ii=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fs(e,this.TimeBufferType),this.values=Fs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Fs(t.times,Array),values:Fs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Za(t.settings)&&(i.settings={inTangents:Fs(t.settings.inTangents,Array),outTangents:Fs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break;case Hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Za(this.settings)&&($u(this.settings.inTangents,t),$u(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Za(this.settings)&&(Ju(this.settings.inTangents,t),Ju(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&dp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ka,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(n)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let x=e[h+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Za(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function $u(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Ju(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=oo;var Hn=class extends Ii{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=br;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};Co.prototype.ValueTypeName="color";var Po=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};Po.prototype.ValueTypeName="number";var Io=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let u=c+o;c!==u;c+=4)Qt.slerpFlat(s,0,a,c-o,a,c,l);return s}},$r=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Io(this.times,this.values,this.getValueSize(),t)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Ii{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=br;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};Lo.prototype.ValueTypeName="vector";var Do=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&n.onStart!==void 0&&n.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zd=new Do,No=class{constructor(t){this.manager=t!==void 0?t:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};No.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Jr=class extends Zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},kc=new zt,Ku=new A,ju=new A,zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Un,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(kc,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$a=new A,Ja=new Qt,ji=new A,Kr=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($a,Ja,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ja,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose($a,Ja,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ja,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nn=new A,Qu=new nt,td=new nt,vi=class extends Kr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,td),e.subVectors(td,Qu)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mc*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sn=class extends Kr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jc=class extends zo{constructor(){super(new Sn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Qr=class extends Zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Us=-90,Bs=1,$s=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new vi(Us,Bs,t,e);n.layers=this.layers,this.add(n);let s=new vi(Us,Bs,t,e);s.layers=this.layers,this.add(s);let a=new vi(Us,Bs,t,e);a.layers=this.layers,this.add(a);let o=new vi(Us,Bs,t,e);o.layers=this.layers,this.add(o);let l=new vi(Us,Bs,t,e);l.layers=this.layers,this.add(l);let c=new vi(Us,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Fo=class extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Eh="\\[\\]\\.:\\/",h0=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",u0="[^"+Eh.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",Th),f0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),g0=new RegExp("^"+d0+f0+p0+m0+"$"),x0=["material","materials","bones","map"],Kc=class{constructor(t,e,i){let n=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(t){let e=g0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);x0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Kc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uv=new Float32Array(1);var Lh=class Lh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};Lh.prototype.isMatrix2=!0;var jc=Lh;function Ah(r,t,e,i){let n=y0(i);switch(e){case gh:return r*t;case Xo:return r*t/n.components*n.byteLength;case qo:return r*t/n.components*n.byteLength;case Vn:return r*t*2/n.components*n.byteLength;case Yo:return r*t*2/n.components*n.byteLength;case xh:return r*t*3/n.components*n.byteLength;case zi:return r*t*4/n.components*n.byteLength;case Zo:return r*t*4/n.components*n.byteLength;case ia:case na:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jo:case jo:return Math.max(r,16)*Math.max(t,8)/4;case $o:case Ko:return Math.max(r,8)*Math.max(t,8)/2;case Qo:case tl:case il:case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case el:case aa:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vl:case _l:case Ml:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Sl:case bl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case oa:case wl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function y0(r){switch(r){case mi:case dh:return{byteLength:1,components:1};case Qs:case fh:case Ni:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case Di:case Go:case Oi:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xf(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _0(r){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:b0,alphamap_pars_fragment:w0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:R0,batching_pars_vertex:C0,batching_vertex:P0,begin_vertex:I0,beginnormal_vertex:L0,bsdfs:D0,iridescence_fragment:N0,bumpmap_pars_fragment:z0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:O0,color_fragment:k0,color_pars_fragment:H0,color_pars_vertex:G0,color_vertex:V0,common:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:Z0,emissivemap_pars_fragment:$0,colorspace_fragment:J0,colorspace_pars_fragment:K0,envmap_fragment:j0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:dm,envmap_vertex:im,fog_vertex:nm,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:xm,lights_physical_pars_fragment:ym,lights_fragment_begin:vm,lights_fragment_maps:_m,lights_fragment_end:Mm,lightprobes_pars_fragment:Sm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Tm,map_fragment:Am,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Nm,morphnormal_vertex:zm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Um,normal_fragment_begin:Bm,normal_fragment_maps:Om,normal_pars_fragment:km,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Zm,packing:$m,premultiplied_alpha_fragment:Jm,project_vertex:Km,dithering_fragment:jm,dithering_pars_fragment:Qm,roughnessmap_fragment:tg,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:ng,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:xg,uv_vertex:yg,worldpos_vertex:vg,background_vert:_g,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:bg,cube_vert:wg,cube_frag:Eg,depth_vert:Tg,depth_frag:Ag,distance_vert:Rg,distance_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Lg,linedashed_frag:Dg,meshbasic_vert:Ng,meshbasic_frag:zg,meshlambert_vert:Fg,meshlambert_frag:Ug,meshmatcap_vert:Bg,meshmatcap_frag:Og,meshnormal_vert:kg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Vg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:Zg,points_frag:$g,shadow_vert:Jg,shadow_frag:Kg,sprite_vert:jg,sprite_frag:Qg},wt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ln={basic:{uniforms:gi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:gi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:gi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:gi([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:gi([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new At(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:gi([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:gi([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:gi([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:gi([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:gi([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:gi([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:gi([wt.common,wt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:gi([wt.lights,wt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ln.physical={uniforms:gi([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Tl={r:0,b:0,g:0},tx=new zt,yf=new Jt;yf.set(-1,0,0,0,1,0,0,0,1);function ex(r,t,e,i,n,s){let a=new At(0),o=n===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=t.get(S,_)}return S}function p(y){let S=!1,_=f(y);_===null?m(a,o):_&&_.isColor&&(m(_,1),S=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(y,S){let _=f(S);_&&_.isCubeTexture?(c===void 0&&(c=new lt(new xt(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:ps(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=ae.getTransfer(_.colorSpace)!==Se,(u!==_||h!==_.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new lt(new fi(2,2),new Pe({name:"BackgroundMaterial",uniforms:ps(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ae.getTransfer(_.colorSpace)!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,d=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Tl,wh(r)),e.buffers.color.setClear(Tl.r,Tl.g,Tl.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:x,dispose:g}}function ix(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(L,z,U,I,B){let H=!1,G=h(L,I,U,z);s!==G&&(s=G,c(s.object)),H=f(L,I,U,B),H&&p(L,I,U,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,_(L,z,U,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function h(L,z,U,I){let B=I.wireframe===!0,H=i[z.id];H===void 0&&(H={},i[z.id]=H);let G=L.isInstancedMesh===!0?L.id:0,it=H[G];it===void 0&&(it={},H[G]=it);let W=it[U.id];W===void 0&&(W={},it[U.id]=W);let J=W[B];return J===void 0&&(J=d(l()),W[B]=J),J}function d(L){let z=[],U=[],I=[];for(let B=0;B<e;B++)z[B]=0,U[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:U,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,z,U,I){let B=s.attributes,H=z.attributes,G=0,it=U.getAttributes();for(let W in it)if(it[W].location>=0){let tt=B[W],Tt=H[W];if(Tt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),tt===void 0||tt.attribute!==Tt||Tt&&tt.data!==Tt.data)return!0;G++}return s.attributesNum!==G||s.index!==I}function p(L,z,U,I){let B={},H=z.attributes,G=0,it=U.getAttributes();for(let W in it)if(it[W].location>=0){let tt=H[W];tt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let Tt={};Tt.attribute=tt,tt&&tt.data&&(Tt.data=tt.data),B[W]=Tt,G++}s.attributes=B,s.attributesNum=G,s.index=I}function x(){let L=s.newAttributes;for(let z=0,U=L.length;z<U;z++)L[z]=0}function m(L){g(L,0)}function g(L,z){let U=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;U[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),B[L]!==z&&(r.vertexAttribDivisor(L,z),B[L]=z)}function y(){let L=s.newAttributes,z=s.enabledAttributes;for(let U=0,I=z.length;U<I;U++)z[U]!==L[U]&&(r.disableVertexAttribArray(U),z[U]=0)}function S(L,z,U,I,B,H,G){G===!0?r.vertexAttribIPointer(L,z,U,B,H):r.vertexAttribPointer(L,z,U,I,B,H)}function _(L,z,U,I){x();let B=I.attributes,H=U.getAttributes(),G=z.defaultAttributeValues;for(let it in H){let W=H[it];if(W.location>=0){let J=B[it];if(J===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let tt=J.normalized,Tt=J.itemSize,Ot=t.get(J);if(Ot===void 0)continue;let Y=Ot.buffer,mt=Ot.type,Rt=Ot.bytesPerElement,kt=mt===r.INT||mt===r.UNSIGNED_INT||J.gpuType===Go;if(J.isInterleavedBufferAttribute){let yt=J.data,Ft=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Te=J.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Ht=0;Ht<W.locationSize;Ht++)g(W.location+Ht,yt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)m(W.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let Ht=0;Ht<W.locationSize;Ht++)S(W.location+Ht,Tt/W.locationSize,mt,tt,Ft*Rt,(Te+Tt/W.locationSize*Ht)*Rt,kt)}else{if(J.isInstancedBufferAttribute){for(let yt=0;yt<W.locationSize;yt++)g(W.location+yt,J.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let yt=0;yt<W.locationSize;yt++)m(W.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let yt=0;yt<W.locationSize;yt++)S(W.location+yt,Tt/W.locationSize,mt,tt,Tt*Rt,Tt/W.locationSize*yt*Rt,kt)}}else if(G!==void 0){let tt=G[it];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(W.location,tt);break;case 3:r.vertexAttrib3fv(W.location,tt);break;case 4:r.vertexAttrib4fv(W.location,tt);break;default:r.vertexAttrib1fv(W.location,tt)}}}}y()}function M(){P();for(let L in i){let z=i[L];for(let U in z){let I=z[U];for(let B in I){let H=I[B];for(let G in H)u(H[G].object),delete H[G];delete I[B]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;let z=i[L.id];for(let U in z){let I=z[U];for(let B in I){let H=I[B];for(let G in H)u(H[G].object),delete H[G];delete I[B]}}delete i[L.id]}function v(L){for(let z in i){let U=i[z];for(let I in U){let B=U[I];if(B[L.id]===void 0)continue;let H=B[L.id];for(let G in H)u(H[G].object),delete H[G];delete B[L.id]}}}function b(L){for(let z in i){let U=i[z],I=L.isInstancedMesh===!0?L.id:0,B=U[I];if(B!==void 0){for(let H in B){let G=B[H];for(let it in G)u(G[it].object),delete G[it];delete B[H]}delete U[I],Object.keys(U).length===0&&delete i[z]}}}function P(){R(),a=!0,s!==n&&(s=n,c(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function nx(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function sx(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(v){return!(v!==zi&&i.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let b=v===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==mi&&v!==Oi&&!b&&i.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:M,samples:w}}function rx(r){let t=this,e=null,i=0,n=!1,s=!1,a=new qi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!n||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:i,S=y*4,_=g.clippingState||null;l.value=_,_=u(p,d,S,f);for(let M=0;M!==S;++M)_[M]=e[M];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,_=f;S!==x;++S,_+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ua=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new zr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new xt(5,5,5),s=new Pe({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:hs});s.uniforms.tEquirect.value=e;let a=new lt(n,s),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=_i),new $s(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},$d=256,ax=3,ox=20,vf=256,_f=16,lx=3,cx=new A,hx=new At,er=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $s(1,10,null),this._boxMesh=new lt(new xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=cx}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(hx));let m=new $s(i,n,u);return m.position.copy(o),m.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($d,Ud(t))}_fromTexture(t,e){t.mapping===ds||t.mapping===js?this._setSize(t.image.length===0?$d:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Jd(t,!1,!1),i=Math.log2(t)-ax;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Jd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ds||t.mapping===js?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=ux(),this._integrationMaterial=dx());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/_f);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-lx)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(vf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fx());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function Jd(r,t,e){return new ua(r,{minFilter:bn,generateMipmaps:t,type:Ni,colorSpace:ss,depthBuffer:e})}function da(r,t,e){return new Pe({name:r,uniforms:t,vertexShader:ne.cube_vert,fragmentShader:e,side:$e,blending:hs,depthTest:!1,depthWrite:!1})}function ux(){return da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dx(){return da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_f}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fx(){return da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ox}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kd(){return da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function jd(){return da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function px(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Oo||f===ko)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ua(p.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Oo||f===ko,x=f===ds||f===js;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new er(r)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new er(r)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Oo?d.mapping=ds:f===ko&&(d.mapping=js),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:h}}function mx(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&_r("WebGLRenderer: "+i+" extension not supported."),n}}}function gx(r,t,e,i){let n={},s=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);let x=s.get(p);x&&(t.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(p){let x=p.attributes;for(let m in x)t.update(x[m],r.ARRAY_BUFFER)}function h(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?Ir:Pr,_=new S(Math.ceil(y/3)*6,1),M=_.array;if(x!==null){let v=x.array;g=x.version;for(let b=0,P=0;b<y;b+=3){let R=v[b+0],L=v[b+1],z=v[b+2];M[P++]=R,M[P++]=L,M[P++]=L,M[P++]=z,M[P++]=z,M[P++]=R}}else{g=m.version;for(let v=0,b=0;v<y;v+=3){let P=v+0,R=v+1,L=v+2;M[b++]=P,M[b++]=R,M[b++]=R,M[b++]=L,M[b++]=L,M[b++]=P}}_.version=g;let w=s.get(p);w&&t.remove(w),s.set(p,_)}function d(p){let x=s.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&h(p)}else h(p);return s.get(p)}function f(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function xx(r,t,e){let i;function n(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(i,d,s,h*a),e.update(d,i,1)}function c(h,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,h*a,f),e.update(d,i,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function yx(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function vx(r,t,e){let i=new WeakMap,n=new Fe;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let P=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*M*4*h),v=new Ar(w,_,M,h);v.type=Oi,v.needsUpdate=!0;let b=S*4;for(let R=0;R<h;R++){let L=m[R],z=g[R],U=y[R],I=_*M*4*R;for(let B=0;B<L.count;B++){let H=B*b;f===!0&&(n.fromBufferAttribute(L,B),w[I+H+0]=n.x,w[I+H+1]=n.y,w[I+H+2]=n.z,w[I+H+3]=0),p===!0&&(n.fromBufferAttribute(z,B),w[I+H+4]=n.x,w[I+H+5]=n.y,w[I+H+6]=n.z,w[I+H+7]=0),x===!0&&(n.fromBufferAttribute(U,B),w[I+H+8]=n.x,w[I+H+9]=n.y,w[I+H+10]=n.z,w[I+H+11]=U.itemSize===4?n.w:1)}}d={count:h,texture:v,size:new nt(_,M)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function _x(r,t,e,i,n){let s=new WeakMap;function a(c){let u=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Mx={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function Sx(r,t,e,i,n,s){let a=new Qe(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ee;u.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qt([0,2,0,0,2,0],2));let h=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new lt(u,h),f=new Sn(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,S=[],_=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let v=0;v<S.length;v++){let b=S[v];b.setSize&&b.setSize(M,w)}},this.setEffects=function(M){S=M,_=S.length>0&&S[0].isRenderPass===!0;let w=a.width,v=a.height;S.length>0&&o===null&&(o=new Qe(w,v,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(w,v,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Zi(w,v),s===!0&&(c.format=wn,c.type=fs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let R=S[P];R.setSize&&R.setSize(w,v),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===an&&S.length===0)return!1;if(y=w,w!==null){let v=w.width,b=w.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return _===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=an,!0},this.hasRenderPass=function(){return _},this.end=function(M,w){M.toneMapping=g,m=!0;let v=a,b=o;for(let P=0;P<S.length;P++){let R=S[P];R.enabled!==!1&&(R.render(M,b,v,w),R.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,h.defines={},ae.getTransfer(p)===Se&&(h.defines.SRGB_TRANSFER="");let P=Mx[x];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(y),M.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Mf=new Mi,Sf=new Zi(1,1),bf=new Fr(1),wf=new Ar,Ef=new uo,Tf=new zr,Qd=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function ir(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Qd[n];if(s===void 0&&(s=new Float32Array(n),Qd[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ti(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ei(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Cl(r,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function bx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function wx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;r.uniform2fv(this.addr,t),ei(e,t)}}function Ex(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ti(e,t))return;r.uniform3fv(this.addr,t),ei(e,t)}}function Tx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;r.uniform4fv(this.addr,t),ei(e,t)}}function Ax(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;sf.set(i),r.uniformMatrix2fv(this.addr,!1,sf),ei(e,i)}}function Rx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;nf.set(i),r.uniformMatrix3fv(this.addr,!1,nf),ei(e,i)}}function Cx(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;ef.set(i),r.uniformMatrix4fv(this.addr,!1,ef),ei(e,i)}}function Px(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ix(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;r.uniform2iv(this.addr,t),ei(e,t)}}function Lx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;r.uniform3iv(this.addr,t),ei(e,t)}}function Dx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;r.uniform4iv(this.addr,t),ei(e,t)}}function Nx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;r.uniform2uiv(this.addr,t),ei(e,t)}}function Fx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;r.uniform3uiv(this.addr,t),ei(e,t)}}function Ux(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;r.uniform4uiv(this.addr,t),ei(e,t)}}function Pl(r){return r.version===0&&(r.compareFunction=_h,r.needsUpdate=!0),r}function Bx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=Pl(Sf):s=Mf,e.setTexture2D(t||s,n)}function Ox(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ef,n)}function kx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Pl(bf):s=Tf,e.setTextureCube(t||s,n)}function Hx(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||wf,n)}function Gx(r){switch(r){case 5126:return bx;case 35664:return wx;case 35665:return Ex;case 35666:return Tx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Ix;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Nx;case 36294:return zx;case 36295:return Fx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Vx(r,t){r.uniform1fv(this.addr,t)}function Wx(r,t){let e=ir(t,this.size,2);r.uniform2fv(this.addr,e)}function Xx(r,t){let e=ir(t,this.size,3);r.uniform3fv(this.addr,e)}function qx(r,t){let e=ir(t,this.size,4);r.uniform4fv(this.addr,e)}function Yx(r,t){let e=ir(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Zx(r,t){let e=ir(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function $x(r,t){let e=ir(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Jx(r,t){r.uniform1iv(this.addr,t)}function Kx(r,t){r.uniform2iv(this.addr,t)}function jx(r,t){r.uniform3iv(this.addr,t)}function Qx(r,t){r.uniform4iv(this.addr,t)}function ty(r,t){r.uniform1uiv(this.addr,t)}function ey(r,t){r.uniform2uiv(this.addr,t)}function iy(r,t){r.uniform3uiv(this.addr,t)}function ny(r,t){r.uniform4uiv(this.addr,t)}function sy(r,t,e){let i=this.cache,n=t.length,s=Cl(e,n);ti(i,s)||(r.uniform1iv(this.addr,s),ei(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Pl(Sf):a=Mf;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function ry(r,t,e){let i=this.cache,n=t.length,s=Cl(e,n);ti(i,s)||(r.uniform1iv(this.addr,s),ei(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ef,s[a])}function ay(r,t,e){let i=this.cache,n=t.length,s=Cl(e,n);ti(i,s)||(r.uniform1iv(this.addr,s),ei(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Pl(bf):a=Tf;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function oy(r,t,e){let i=this.cache,n=t.length,s=Cl(e,n);ti(i,s)||(r.uniform1iv(this.addr,s),ei(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||wf,s[a])}function ly(r){switch(r){case 5126:return Vx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return Zx;case 35676:return $x;case 5124:case 35670:return Jx;case 35667:case 35671:return Kx;case 35668:case 35672:return jx;case 35669:case 35673:return Qx;case 5125:return ty;case 36294:return ey;case 36295:return iy;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}var zh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Gx(e.type)}},Fh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ly(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function rf(r,t){r.seq.push(t),r.map[t.id]=t}function cy(r,t,e){let i=r.name,n=i.length;for(Dh.lastIndex=0;;){let s=Dh.exec(i),a=Dh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){rf(e,c===void 0?new zh(o,r,t):new Fh(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new Uh(o),rf(e,h)),e=h}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);cy(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function af(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var hy=37297,uy=0;function dy(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var of=new Jt;function fy(r){ae._getMatrix(of,ae.workingColorSpace,r);let t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case wr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lf(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+dy(r.getShaderSource(t),o)}else return s}function py(r,t){let e=fy(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var my={[sh]:"Linear",[rh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function gy(r,t){let e=my[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new A;function xy(){ae.getLuminanceCoefficients(Al);let r=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function vy(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _y(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ha(r){return r!==""}function cf(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(r){return r.replace(My,Sy)}function Sy(r,t){let e=ne[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bh(e)}var by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(r){return r.replace(by,wy)}function wy(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function df(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ey={[ta]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Ty(r){return Ey[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ay={[js]:"ENVMAP_MODE_REFRACTION"};function Ry(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cy={[Bo]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function Py(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[r.combine]||"ENVMAP_BLENDING_NONE"}function Iy(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ty(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ry(e),h=Py(e),d=yy(e),f=vy(s),p=n.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ha).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(x=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[df(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?ne.tonemapping_pars_fragment:"",e.toneMapping!==an?gy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,py("linearToOutputTexel",e.outputColorSpace),xy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),a=Bh(a),a=cf(a,e),a=hf(a,e),o=Bh(o),o=cf(o,e),o=hf(o,e),a=uf(a),o=uf(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+a,S=g+m+o,_=af(n,n.VERTEX_SHADER,y),M=af(n,n.FRAGMENT_SHADER,S);n.attachShader(p,_),n.attachShader(p,M),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(R){if(r.debug.checkShaderErrors){let L=n.getProgramInfoLog(p)||"",z=n.getShaderInfoLog(_)||"",U=n.getShaderInfoLog(M)||"",I=L.trim(),B=z.trim(),H=U.trim(),G=!0,it=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,_,M);else{let W=lf(n,_,"vertex"),J=lf(n,M,"fragment");Yt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+J)}else I!==""?Xt("WebGLProgram: Program Info Log:",I):(B===""||H==="")&&(it=!1);it&&(R.diagnostics={runnable:G,programLog:I,vertexShader:{log:B,prefix:x},fragmentShader:{log:H,prefix:m}})}n.deleteShader(_),n.deleteShader(M),v=new tr(n,p),b=_y(n,p)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,hy)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uy++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=M,this}var Ly=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kh(t),e.set(t,i)),i}},kh=class{constructor(t){this.id=Ly++,this.code=t,this.usedTimes=0}};function Dy(r){return r===Vn||r===aa||r===oa}function Ny(r,t,e,i,n,s){let a=new Rr,o=new Oh,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,P,R,L,z){let U=R.fog,I=L.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||B,H),it=d[v.type],W=i.precision;v.precision!==null&&(W=i.getMaxPrecision(v.precision),W!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=J!==void 0?J.length:0,Tt=0;I.morphAttributes.position!==void 0&&(Tt=1),I.morphAttributes.normal!==void 0&&(Tt=2),I.morphAttributes.color!==void 0&&(Tt=3);let Ot,Y,mt,Rt;if(it){let bt=ln[it];Ot=bt.vertexShader,Y=bt.fragmentShader}else{Ot=v.vertexShader,Y=v.fragmentShader;let bt=o.getVertexShaderStage(v),we=o.getFragmentShaderStage(v);o.update(v,bt,we),mt=bt.id,Rt=we.id}let kt=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,Te=L.isBatchedMesh===!0,Ht=!!v.map,se=!!v.matcap,le=!!G,et=le&&G.isPMREMTexture===!0,dt=!!v.aoMap,ct=!!v.lightMap,Ct=!!v.bumpMap&&v.wireframe===!1,St=!!v.normalMap,jt=!!v.displacementMap,Ut=!!v.emissiveMap,ce=!!v.metalnessMap,de=!!v.roughnessMap,xe=v.anisotropy>0,F=v.clearcoat>0,Je=v.diffuseRoughness>0,re=v.dispersion>0,Re=v.retroreflectivity>0,vt=v.iridescence>0,qe=v.sheen>0,Vt=v.transmission>0,$t=xe&&!!v.anisotropyMap,C=F&&!!v.clearcoatMap,E=F&&!!v.clearcoatNormalMap,k=F&&!!v.clearcoatRoughnessMap,rt=Je&&!!v.diffuseRoughnessMap,Q=vt&&!!v.iridescenceMap,ht=vt&&!!v.iridescenceThicknessMap,_t=qe&&!!v.sheenColorMap,Z=qe&&!!v.sheenRoughnessMap,K=!!v.specularMap,ft=!!v.specularColorMap,D=!!v.specularIntensityMap,j=Vt&&!!v.transmissionMap,q=Vt&&!!v.thicknessMap,pt=!!v.gradientMap,ot=!!v.alphaMap,ut=v.alphaTest>0,Bt=!!v.alphaHash,ie=!!v.extensions,at=an;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(at=r.toneMapping);let Gt=et?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,te={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:Ot,fragmentShader:Y,defines:v.defines,customVertexShaderID:mt,customFragmentShaderID:Rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:Te,batchingColor:Te&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:kt===null?r.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:se,envMap:le,envMapMode:le&&G.mapping,envMapPMREM:et,envMapMaxLod:et?Gt.length-1:null,envMapSize:et?Gt[0].width:null,aoMap:dt,lightMap:ct,bumpMap:Ct,normalMap:St,displacementMap:jt,emissiveMap:Ut,normalMapObjectSpace:St&&v.normalMapType===Td,normalMapTangentSpace:St&&v.normalMapType===la,packedNormalMap:St&&v.normalMapType===la&&Dy(v.normalMap.format),metalnessMap:ce,roughnessMap:de,anisotropy:xe,anisotropyMap:$t,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:k,diffuseRoughness:Je,diffuseRoughnessMap:rt,dispersion:re,retroreflection:Re,iridescence:vt,iridescenceMap:Q,iridescenceThicknessMap:ht,sheen:qe,sheenColorMap:_t,sheenRoughnessMap:Z,specularMap:K,specularColorMap:ft,specularIntensityMap:D,transmission:Vt,transmissionMap:j,thicknessMap:q,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:ut,alphaHash:Bt,combine:v.combine,mapUv:Ht&&f(v.map.channel),aoMapUv:dt&&f(v.aoMap.channel),lightMapUv:ct&&f(v.lightMap.channel),bumpMapUv:Ct&&f(v.bumpMap.channel),normalMapUv:St&&f(v.normalMap.channel),displacementMapUv:jt&&f(v.displacementMap.channel),emissiveMapUv:Ut&&f(v.emissiveMap.channel),metalnessMapUv:ce&&f(v.metalnessMap.channel),roughnessMapUv:de&&f(v.roughnessMap.channel),anisotropyMapUv:$t&&f(v.anisotropyMap.channel),clearcoatMapUv:C&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(v.sheenRoughnessMap.channel),specularMapUv:K&&f(v.specularMap.channel),specularColorMapUv:ft&&f(v.specularColorMap.channel),specularIntensityMapUv:D&&f(v.specularIntensityMap.channel),transmissionMapUv:j&&f(v.transmissionMap.channel),thicknessMapUv:q&&f(v.thicknessMap.channel),alphaMapUv:ot&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(St||xe),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ht||ot),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&St===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:yt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Tt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(bt=>bt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===Se,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&ae.getTransfer(v.emissiveMap.colorSpace)===Se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oe,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||Te)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function x(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){let b=d[v.type],P;if(b){let R=ln[b];P=qd.clone(R.uniforms)}else P=v.uniforms;return P}function S(v,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new Iy(r,b,v,n),c.push(P),u.set(b,P)),P}function _(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:w}}function zy(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Fy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ff(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pf(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,m,g){let y=r[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},r[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),t++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let S=o(d,f,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?n.push(S):e.push(S)}function c(d,f,p,x,m,g){let y=o(d,f,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):e.unshift(y)}function u(d,f){e.length>1&&e.sort(d||Fy),i.length>1&&i.sort(f||ff),n.length>1&&n.sort(f||ff)}function h(){for(let d=t,f=r.length;d<f;d++){let p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:h,sort:u}}function Uy(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new pf,r.set(i,[a])):n>=s.length?(a=new pf,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function By(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new At};break;case"SpotLight":e={position:new A,direction:new A,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function Oy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var ky=0;function Hy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Gy(r){let t=new By,e=Oy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let n=new A,s=new zt,a=new zt;function o(c){let u=0,h=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,_=0,M=0,w=0,v=0,b=0,P=0,R=0;c.sort(Hy);for(let z=0,U=c.length;z<U;z++){let I=c[z],B=I.color,H=I.intensity,G=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vn?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*H,h+=B.g*H,d+=B.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=it;let Tt=J.getViewportCount();for(let Ot=0;Ot<Tt;Ot++)i.sunShadowMatrix[x+Ot]=J.getMatrix(Ot),i.sunShadowCascade[x+Ot]=J._cascadeData[Ot];x+=Tt,p++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(H),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[y]=W;let J=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,J.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[y]=J.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,i.spotShadow[y]=tt,i.spotShadowMap[y]=it,v++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(B).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=W,S++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let J=I.shadow,tt=e.get(I);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,tt.shadowCameraNear=J.camera.near,tt.shadowCameraFar=J.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[_]=W,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==_||L.numSunShadows!==p||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=_,L.numSunShadows=p,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=R,i.version=ky++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let _=c[y];if(_.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),h++}else if(_.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),d++}else if(_.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function mf(r){let t=new Gy(r),e=[],i=[],n=[];function s(h){u.camera=h,e.length=0,i.length=0,n.length=0}function a(h){h.isLightProbeGrid?n.push(h):e.push(h)}function o(h){i.push(h)}function l(){t.setup(e),n.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Vy(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new mf(r),t.set(n,[o])):s>=a.length?(o=new mf(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qy=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Yy=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],gf=new zt,ca=new A,Nh=new A;function Zy(r,t,e){let i=new Un,n=new nt,s=new nt,a=new Fe,o=new bo,l=new wo,c={},u=e.maxTextureSize,h={[rn]:$e,[$e]:rn,[Oe]:Oe},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Wy,fragmentShader:Xy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let g=this.type;this.render=function(w,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===nd&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let P=r.getRenderTarget(),R=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(hs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=g!==this.type;U&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let H=w[I],G=H.shadow;if(G===void 0){Xt("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let it=G.getFrameExtents();n.multiply(it),s.copy(G.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/it.x),n.x=s.x*it.x,G.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/it.y),n.y=s.y*it.y,G.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Js){if(H.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qe(n.x,n.y,{format:Vn,type:Ni,minFilter:_i,magFilter:_i,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new Zi(n.x,n.y,Oi),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=vn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ze,G.map.depthTexture.magFilter=ze}else H.isPointLight?(G.map=new ua(n.x),G.map.depthTexture=new Fr(n.x,Di)):(G.map=new Qe(n.x,n.y),G.map.depthTexture=new Zi(n.x,n.y,Di)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=vn,this.type===ta?(G.map.depthTexture.compareFunction=W?vh:yh,G.map.depthTexture.minFilter=_i,G.map.depthTexture.magFilter=_i):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ze,G.map.depthTexture.magFilter=ze);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==n.x||G.map.height!==n.y)&&G.map.setSize(n.x,n.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();H.isPointLight!==!0&&G.updateMatrices(H,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Tt=0;Tt<J;Tt++){let Ot=G.getCamera(Tt);if(H.isPointLight){let Y=G.camera,mt=G.matrix,Rt=H.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),ca.setFromMatrixPosition(H.matrixWorld),Y.position.copy(ca),Nh.copy(Y.position),Nh.add(qy[Tt]),Y.up.copy(Yy[Tt]),Y.lookAt(Nh),Y.updateMatrixWorld(),mt.makeTranslation(-ca.x,-ca.y,-ca.z),gf.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(gf,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,Tt),r.clear();else{Tt===0&&(r.setRenderTarget(G.map),r.clear());let Y=G.getViewport(Tt);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),z.viewport(a)}i=G.getFrustum(Tt),_(v,b,Ot,H,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Js&&y(G,b),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(P,R,L)};function y(w,v){let b=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qe(n.x,n.y,{format:Vn,type:Ni}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(v,null,b,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(v,null,b,f,x,null)}function S(w,v,b,P){let R=null,L=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=b.isPointLight===!0?l:o,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let z=R.uuid,U=v.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let B=I[U];B===void 0&&(B=R.clone(),I[U]=B,v.addEventListener("dispose",M)),R=B}if(R.visible=v.visible,R.wireframe=v.wireframe,P===Js?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:h[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=r.properties.get(R);z.light=b}return R}function _(w,v,b,P,R,L){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Js)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),B=w.material;if(Array.isArray(B)){let H=I.groups;for(let G=0,it=H.length;G<it;G++){let W=H[G],J=B[W.materialIndex];if(J&&J.visible){let tt=S(w,J,P,L);w.onBeforeShadow(r,w,v,b,I,tt,W),r.renderBufferDirect(b,null,I,tt,w,W),w.onAfterShadow(r,w,v,b,I,tt,W)}}}else if(B.visible){let H=S(w,B,P,L);w.onBeforeShadow(r,w,v,b,I,H,null),r.renderBufferDirect(b,null,I,H,w,null),w.onAfterShadow(r,w,v,b,I,H,null)}}let U=w.children;for(let I=0,B=U.length;I<B;I++)_(U[I],v,b,P,R,L)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let P=c[b],R=w.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function $y(r,t){function e(){let D=!1,j=new Fe,q=null,pt=new Fe(0,0,0,0);return{setMask:function(ot){q!==ot&&!D&&(r.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){D=ot},setClear:function(ot,ut,Bt,ie,at){at===!0&&(ot*=ie,ut*=ie,Bt*=ie),j.set(ot,ut,Bt,ie),pt.equals(j)===!1&&(r.clearColor(ot,ut,Bt,ie),pt.copy(j))},reset:function(){D=!1,q=null,pt.set(-1,0,0,0)}}}function i(){let D=!1,j=!1,q=null,pt=null,ot=null;return{setReversed:function(ut){if(j!==ut){let Bt=t.get("EXT_clip_control");ut?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),j=ut;let ie=ot;ot=null,this.setClear(ie)}},getReversed:function(){return j},setTest:function(ut){ut?yt(r.DEPTH_TEST):Ft(r.DEPTH_TEST)},setMask:function(ut){q!==ut&&!D&&(r.depthMask(ut),q=ut)},setFunc:function(ut){if(j&&(ut=Fd[ut]),pt!==ut){switch(ut){case Qa:r.depthFunc(r.NEVER);break;case to:r.depthFunc(r.ALWAYS);break;case eo:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case io:r.depthFunc(r.EQUAL);break;case no:r.depthFunc(r.GEQUAL);break;case so:r.depthFunc(r.GREATER);break;case ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ot!==ut&&(ot=ut,j&&(ut=1-ut),r.clearDepth(ut))},reset:function(){D=!1,q=null,pt=null,ot=null,j=!1}}}function n(){let D=!1,j=null,q=null,pt=null,ot=null,ut=null,Bt=null,ie=null,at=null;return{setTest:function(Gt){D||(Gt?yt(r.STENCIL_TEST):Ft(r.STENCIL_TEST))},setMask:function(Gt){j!==Gt&&!D&&(r.stencilMask(Gt),j=Gt)},setFunc:function(Gt,te,bt){(q!==Gt||pt!==te||ot!==bt)&&(r.stencilFunc(Gt,te,bt),q=Gt,pt=te,ot=bt)},setOp:function(Gt,te,bt){(ut!==Gt||Bt!==te||ie!==bt)&&(r.stencilOp(Gt,te,bt),ut=Gt,Bt=te,ie=bt)},setLocked:function(Gt){D=Gt},setClear:function(Gt){at!==Gt&&(r.clearStencil(Gt),at=Gt)},reset:function(){D=!1,j=null,q=null,pt=null,ot=null,ut=null,Bt=null,ie=null,at=null}}}let s=new e,a=new i,o=new n,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,_=null,M=null,w=null,v=null,b=new At(0,0,0),P=0,R=!1,L=null,z=null,U=null,I=null,B=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,it=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=it>=2);let J=null,tt={},Tt=r.getParameter(r.SCISSOR_BOX),Ot=r.getParameter(r.VIEWPORT),Y=new Fe().fromArray(Tt),mt=new Fe().fromArray(Ot);function Rt(D,j,q,pt){let ot=new Uint8Array(4),ut=r.createTexture();r.bindTexture(D,ut),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<q;Bt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(j,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(j+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return ut}let kt={};kt[r.TEXTURE_2D]=Rt(r.TEXTURE_2D,r.TEXTURE_2D,1),kt[r.TEXTURE_CUBE_MAP]=Rt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[r.TEXTURE_2D_ARRAY]=Rt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),kt[r.TEXTURE_3D]=Rt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(r.DEPTH_TEST),a.setFunc(ks),Ct(!1),St(Qc),yt(r.CULL_FACE),dt(hs);function yt(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Ft(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Te(D,j){return d[D]!==j?(r.bindFramebuffer(D,j),d[D]=j,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=j),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=j),!0):!1}function Ht(D,j){let q=p,pt=!1;if(D){q=f.get(j),q===void 0&&(q=[],f.set(j,q));let ot=D.textures;if(q.length!==ot.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Bt=ot.length;ut<Bt;ut++)q[ut]=r.COLOR_ATTACHMENT0+ut;q.length=ot.length,pt=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,pt=!0);pt&&r.drawBuffers(q)}function se(D){return x!==D?(r.useProgram(D),x=D,!0):!1}let le={[us]:r.FUNC_ADD,[rd]:r.FUNC_SUBTRACT,[ad]:r.FUNC_REVERSE_SUBTRACT};le[od]=r.MIN,le[ld]=r.MAX;let et={[cd]:r.ZERO,[hd]:r.ONE,[ud]:r.SRC_COLOR,[ih]:r.SRC_ALPHA,[xd]:r.SRC_ALPHA_SATURATE,[md]:r.DST_COLOR,[fd]:r.DST_ALPHA,[dd]:r.ONE_MINUS_SRC_COLOR,[nh]:r.ONE_MINUS_SRC_ALPHA,[gd]:r.ONE_MINUS_DST_COLOR,[pd]:r.ONE_MINUS_DST_ALPHA,[yd]:r.CONSTANT_COLOR,[vd]:r.ONE_MINUS_CONSTANT_COLOR,[_d]:r.CONSTANT_ALPHA,[Md]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(D,j,q,pt,ot,ut,Bt,ie,at,Gt){if(D===hs){m===!0&&(Ft(r.BLEND),m=!1);return}if(m===!1&&(yt(r.BLEND),m=!0),D!==sd){if(D!==g||Gt!==R){if((y!==us||M!==us)&&(r.blendEquation(r.FUNC_ADD),y=us,M=us),Gt)switch(D){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Li:r.blendFunc(r.ONE,r.ONE);break;case th:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Li:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case th:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",D);break}S=null,_=null,w=null,v=null,b.set(0,0,0),P=0,g=D,R=Gt}return}ot=ot||j,ut=ut||q,Bt=Bt||pt,(j!==y||ot!==M)&&(r.blendEquationSeparate(le[j],le[ot]),y=j,M=ot),(q!==S||pt!==_||ut!==w||Bt!==v)&&(r.blendFuncSeparate(et[q],et[pt],et[ut],et[Bt]),S=q,_=pt,w=ut,v=Bt),(ie.equals(b)===!1||at!==P)&&(r.blendColor(ie.r,ie.g,ie.b,at),b.copy(ie),P=at),g=D,R=!1}function ct(D,j){D.side===Oe?Ft(r.CULL_FACE):yt(r.CULL_FACE);let q=D.side===$e;j&&(q=!q),Ct(q),D.blending===Ks&&D.transparent===!1?dt(hs):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let pt=D.stencilWrite;o.setTest(pt),pt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(D){L!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),L=D)}function St(D){D!==ed?(yt(r.CULL_FACE),D!==z&&(D===Qc?r.cullFace(r.BACK):D===id?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ft(r.CULL_FACE),z=D}function jt(D){D!==U&&(G&&r.lineWidth(D),U=D)}function Ut(D,j,q){D?(yt(r.POLYGON_OFFSET_FILL),(I!==j||B!==q)&&(I=j,B=q,a.getReversed()&&(j=-j,q=-q),r.polygonOffset(j,q))):Ft(r.POLYGON_OFFSET_FILL)}function ce(D){D?yt(r.SCISSOR_TEST):Ft(r.SCISSOR_TEST)}function de(D){D===void 0&&(D=r.TEXTURE0+H-1),J!==D&&(r.activeTexture(D),J=D)}function xe(D,j,q){q===void 0&&(J===null?q=r.TEXTURE0+H-1:q=J);let pt=tt[q];pt===void 0&&(pt={type:void 0,texture:void 0},tt[q]=pt),(pt.type!==D||pt.texture!==j)&&(J!==q&&(r.activeTexture(q),J=q),r.bindTexture(D,j||kt[D]),pt.type=D,pt.texture=j)}function F(){let D=tt[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Je(){try{r.compressedTexImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function re(){try{r.compressedTexImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Re(){try{r.texSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function vt(){try{r.texSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function qe(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Vt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function $t(){try{r.texStorage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function C(){try{r.texStorage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function E(){try{r.texImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function k(){try{r.texImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function rt(D){return h[D]!==void 0?h[D]:r.getParameter(D)}function Q(D,j){h[D]!==j&&(r.pixelStorei(D,j),h[D]=j)}function ht(D){Y.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function _t(D){mt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),mt.copy(D))}function Z(D,j){let q=c.get(j);q===void 0&&(q=new WeakMap,c.set(j,q));let pt=q.get(D);pt===void 0&&(pt=r.getUniformBlockIndex(j,D.name),r.uniformBlockBinding(j,pt,pt),q.set(D,pt))}function K(D,j,q){let ot=c.get(j).get(D);l[ot]!==q&&(r.bindBufferBase(r.UNIFORM_BUFFER,ot,q),l[ot]=q)}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,tt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,_=null,M=null,w=null,v=null,b=new At(0,0,0),P=0,R=!1,L=null,z=null,U=null,I=null,B=null,Y.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:yt,disable:Ft,bindFramebuffer:Te,drawBuffers:Ht,useProgram:se,setBlending:dt,setMaterial:ct,setFlipSided:Ct,setCullFace:St,setLineWidth:jt,setPolygonOffset:Ut,setScissorTest:ce,activeTexture:de,bindTexture:xe,unbindTexture:F,compressedTexImage2D:Je,compressedTexImage3D:re,texImage2D:E,texImage3D:k,pixelStorei:Q,getParameter:rt,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:$t,texStorage3D:C,texSubImage2D:Re,texSubImage3D:vt,compressedTexSubImage2D:qe,compressedTexSubImage3D:Vt,scissor:ht,viewport:_t,reset:ft}}function Jy(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):Er("canvas")}function y(C,E,k){let rt=1,Q=$t(C);if((Q.width>k||Q.height>k)&&(rt=k/Math.max(Q.width,Q.height)),rt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(rt*Q.width),_t=Math.floor(rt*Q.height);d===void 0&&(d=g(ht,_t));let Z=E?g(ht,_t):d;return Z.width=ht,Z.height=_t,Z.getContext("2d").drawImage(C,0,0,ht,_t),Xt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ht+"x"+_t+")."),Z}else return"data"in C&&Xt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function S(C){return C.generateMipmaps}function _(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,E,k,rt,Q,ht=!1){if(C!==null){if(r[C]!==void 0)return r[C];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _t;rt&&(_t=t.get("EXT_texture_norm16"),_t||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=E;if(E===r.RED&&(k===r.FLOAT&&(Z=r.R32F),k===r.HALF_FLOAT&&(Z=r.R16F),k===r.UNSIGNED_BYTE&&(Z=r.R8),k===r.UNSIGNED_SHORT&&_t&&(Z=_t.R16_EXT),k===r.SHORT&&_t&&(Z=_t.R16_SNORM_EXT)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.R8UI),k===r.UNSIGNED_SHORT&&(Z=r.R16UI),k===r.UNSIGNED_INT&&(Z=r.R32UI),k===r.BYTE&&(Z=r.R8I),k===r.SHORT&&(Z=r.R16I),k===r.INT&&(Z=r.R32I)),E===r.RG&&(k===r.FLOAT&&(Z=r.RG32F),k===r.HALF_FLOAT&&(Z=r.RG16F),k===r.UNSIGNED_BYTE&&(Z=r.RG8),k===r.UNSIGNED_SHORT&&_t&&(Z=_t.RG16_EXT),k===r.SHORT&&_t&&(Z=_t.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RG8UI),k===r.UNSIGNED_SHORT&&(Z=r.RG16UI),k===r.UNSIGNED_INT&&(Z=r.RG32UI),k===r.BYTE&&(Z=r.RG8I),k===r.SHORT&&(Z=r.RG16I),k===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),k===r.UNSIGNED_INT&&(Z=r.RGB32UI),k===r.BYTE&&(Z=r.RGB8I),k===r.SHORT&&(Z=r.RGB16I),k===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),k===r.UNSIGNED_INT&&(Z=r.RGBA32UI),k===r.BYTE&&(Z=r.RGBA8I),k===r.SHORT&&(Z=r.RGBA16I),k===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&(k===r.UNSIGNED_SHORT&&_t&&(Z=_t.RGB16_EXT),k===r.SHORT&&_t&&(Z=_t.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),E===r.RGBA){let K=ht?wr:ae.getTransfer(Q);k===r.FLOAT&&(Z=r.RGBA32F),k===r.HALF_FLOAT&&(Z=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Z=K===Se?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&_t&&(Z=_t.RGBA16_EXT),k===r.SHORT&&_t&&(Z=_t.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,E){let k;return C?E===null||E===Di||E===fs?k=r.DEPTH24_STENCIL8:E===Oi?k=r.DEPTH32F_STENCIL8:E===Qs&&(k=r.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Di||E===fs?k=r.DEPTH_COMPONENT24:E===Oi?k=r.DEPTH_COMPONENT32F:E===Qs&&(k=r.DEPTH_COMPONENT16),k}function b(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){let E=new WeakRef(C);i.get(C).__ref=E,p.add(E),x.register(C,E,E)}function R(C){let E=i.get(C).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function L(C){U(C.target)}function z(C){I(C.target)}function U(C){C.removeEventListener("dispose",L),R(C),H(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function I(C){C.removeEventListener("dispose",z),R(C),it(C)}function B(){for(let C of p){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):U(E))}p.clear(),h.clear()}function H(C){let E=i.get(C);if(E.__webglInit===void 0)return;let k=C.source,rt=f.get(k);if(rt){let Q=rt[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(C),Object.keys(rt).length===0&&f.delete(k)}i.remove(C)}function G(C){let E=i.get(C);r.deleteTexture(E.__webglTexture);let k=C.source,rt=f.get(k);delete rt[E.__cacheKey],a.memory.textures--}function it(C){let E=i.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C&&U(k),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ht=0;ht<E.__webglFramebuffer[Q].length;ht++)r.deleteFramebuffer(E.__webglFramebuffer[Q][ht]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let rt=C.textures;for(let Q=0,ht=rt.length;Q<ht;Q++){let _t=i.get(rt[Q]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),a.memory.textures--),i.remove(rt[Q])}i.remove(C)}let W=0;function J(){W=0}function tt(){return W}function Tt(C){W=C}function Ot(){let C=W;return C>=n.maxTextures&&Xt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,C}function Y(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function mt(C,E){let k=i.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let rt=C.image;if(rt===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(k,C,E);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function Rt(C,E){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ct(k,C,E);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function kt(C,E){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ct(k,C,E);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function yt(C,E){let k=i.get(C);if(C.version>0&&k.__version!==C.version){Ct(k,C,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}let Ft={[ns]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[ao]:r.MIRRORED_REPEAT},Te={[ze]:r.NEAREST,[wd]:r.NEAREST_MIPMAP_NEAREST,[ea]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[Ho]:r.LINEAR_MIPMAP_NEAREST,[bn]:r.LINEAR_MIPMAP_LINEAR},Ht={[Rd]:r.NEVER,[_h]:r.ALWAYS,[Cd]:r.LESS,[yh]:r.LEQUAL,[Pd]:r.EQUAL,[vh]:r.GEQUAL,[Id]:r.GREATER,[Ld]:r.NOTEQUAL};function se(C,E){if(E.type===Oi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===Ho||E.magFilter===ea||E.magFilter===bn||E.minFilter===_i||E.minFilter===Ho||E.minFilter===ea||E.minFilter===bn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Ft[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Ft[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Ft[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Te[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ht[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ze||E.minFilter!==ea&&E.minFilter!==bn||E.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function le(C,E){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",L),P(E));let rt=E.source,Q=f.get(rt);Q===void 0&&(Q={},f.set(rt,Q));let ht=Y(E);if(ht!==C.__cacheKey){Q[ht]===void 0&&(Q[ht]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ht].usedTimes++;let _t=Q[C.__cacheKey];_t!==void 0&&(Q[C.__cacheKey].usedTimes--,_t.usedTimes===0&&G(E)),C.__cacheKey=ht,C.__webglTexture=Q[ht].texture}return k}function et(C,E,k){return Math.floor(Math.floor(C/k)/E)}function dt(C,E,k,rt){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,k,rt,E.data);else{ht.sort((D,j)=>D.start-j.start);let _t=0;for(let D=1;D<ht.length;D++){let j=ht[_t],q=ht[D],pt=j.start+j.count,ot=et(q.start,E.width,4),ut=et(j.start,E.width,4);q.start<=pt+1&&ot===ut&&et(q.start+q.count-1,E.width,4)===ot?j.count=Math.max(j.count,q.start+q.count-j.start):(++_t,ht[_t]=q)}ht.length=_t+1;let Z=e.getParameter(r.UNPACK_ROW_LENGTH),K=e.getParameter(r.UNPACK_SKIP_PIXELS),ft=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let D=0,j=ht.length;D<j;D++){let q=ht[D],pt=Math.floor(q.start/4),ot=Math.ceil(q.count/4),ut=pt%E.width,Bt=Math.floor(pt/E.width),ie=ot,at=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(r.UNPACK_SKIP_ROWS,Bt),e.texSubImage2D(r.TEXTURE_2D,0,ut,Bt,ie,at,k,rt,E.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Z),e.pixelStorei(r.UNPACK_SKIP_PIXELS,K),e.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function ct(C,E,k){let rt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=r.TEXTURE_3D);let Q=le(C,E),ht=E.source;e.bindTexture(rt,C.__webglTexture,r.TEXTURE0+k);let _t=i.get(ht);if(ht.version!==_t.__version||Q===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let at=ae.getPrimaries(ae.workingColorSpace),Gt=E.colorSpace===En?null:ae.getPrimaries(E.colorSpace),te=E.colorSpace===En||at===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let K=y(E.image,!1,n.maxTextureSize);K=Vt(E,K);let ft=s.convert(E.format,E.colorSpace),D=s.convert(E.type),j=w(E.internalFormat,ft,D,E.normalized,E.colorSpace,E.isVideoTexture);se(rt,E);let q,pt=E.mipmaps,ot=E.isVideoTexture!==!0,ut=_t.__version===void 0||Q===!0,Bt=ht.dataReady,ie=b(E,K);if(E.isDepthTexture)j=v(E.format===wn,E.type),ut&&(ot?e.texStorage2D(r.TEXTURE_2D,1,j,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,j,K.width,K.height,0,ft,D,null));else if(E.isDataTexture)if(pt.length>0){ot&&ut&&e.texStorage2D(r.TEXTURE_2D,ie,j,pt[0].width,pt[0].height);for(let at=0,Gt=pt.length;at<Gt;at++)q=pt[at],ot?Bt&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,q.width,q.height,ft,D,q.data):e.texImage2D(r.TEXTURE_2D,at,j,q.width,q.height,0,ft,D,q.data);E.generateMipmaps=!1}else ot?(ut&&e.texStorage2D(r.TEXTURE_2D,ie,j,K.width,K.height),Bt&&dt(E,K,ft,D)):e.texImage2D(r.TEXTURE_2D,0,j,K.width,K.height,0,ft,D,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ie,j,pt[0].width,pt[0].height,K.depth);for(let at=0,Gt=pt.length;at<Gt;at++)if(q=pt[at],E.format!==zi)if(ft!==null)if(ot){if(Bt)if(E.layerUpdates.size>0){let te=Ah(q.width,q.height,E.format,E.type);for(let bt of E.layerUpdates){let we=q.data.subarray(bt*te/q.data.BYTES_PER_ELEMENT,(bt+1)*te/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,bt,q.width,q.height,1,ft,we)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,K.depth,ft,q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,j,q.width,q.height,K.depth,0,q.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Bt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,K.depth,ft,D,q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,at,j,q.width,q.height,K.depth,0,ft,D,q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ot&&ut&&e.texStorage2D(r.TEXTURE_2D,ie,j,pt[0].width,pt[0].height);for(let at=0,Gt=pt.length;at<Gt;at++)q=pt[at],E.format!==zi?ft!==null?ot?Bt&&e.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,q.width,q.height,ft,q.data):e.compressedTexImage2D(r.TEXTURE_2D,at,j,q.width,q.height,0,q.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Bt&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,q.width,q.height,ft,D,q.data):e.texImage2D(r.TEXTURE_2D,at,j,q.width,q.height,0,ft,D,q.data)}else if(E.isDataArrayTexture)if(ot){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ie,j,K.width,K.height,K.depth),Bt)if(E.layerUpdates.size>0){let at=Ah(K.width,K.height,E.format,E.type);for(let Gt of E.layerUpdates){let te=K.data.subarray(Gt*at/K.data.BYTES_PER_ELEMENT,(Gt+1)*at/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Gt,K.width,K.height,1,ft,D,te)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,D,K.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,ft,D,K.data);else if(E.isData3DTexture)ot?(ut&&e.texStorage3D(r.TEXTURE_3D,ie,j,K.width,K.height,K.depth),Bt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,D,K.data)):e.texImage3D(r.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,ft,D,K.data);else if(E.isFramebufferTexture){if(ut)if(ot)e.texStorage2D(r.TEXTURE_2D,ie,j,K.width,K.height);else{let at=K.width,Gt=K.height;for(let te=0;te<ie;te++)e.texImage2D(r.TEXTURE_2D,te,j,at,Gt,0,ft,D,null),at>>=1,Gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){let at=r.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),K.parentNode!==at){at.appendChild(K),h.add(E),at.onpaint=Gt=>{let te=Gt.changedElements;for(let bt of h)te.includes(bt.image)&&(bt.needsUpdate=!0)},at.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,K);else{let te=r.RGBA,bt=r.RGBA,we=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,te,bt,we,K)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ot&&ut){let at=$t(pt[0]);e.texStorage2D(r.TEXTURE_2D,ie,j,at.width,at.height)}for(let at=0,Gt=pt.length;at<Gt;at++)q=pt[at],ot?Bt&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,ft,D,q):e.texImage2D(r.TEXTURE_2D,at,j,ft,D,q);E.generateMipmaps=!1}else if(ot){if(ut){let at=$t(K);e.texStorage2D(r.TEXTURE_2D,ie,j,at.width,at.height)}Bt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,D,K)}else e.texImage2D(r.TEXTURE_2D,0,j,ft,D,K);S(E)&&E.mipmapsAutoUpdate===!0&&_(rt),_t.__version=ht.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ct(C,E,k){if(E.image.length!==6)return;let rt=le(C,E),Q=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);let ht=i.get(Q);if(Q.version!==ht.__version||rt===!0){e.activeTexture(r.TEXTURE0+k);let _t=ae.getPrimaries(ae.workingColorSpace),Z=E.colorSpace===En?null:ae.getPrimaries(E.colorSpace),K=E.colorSpace===En||_t===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ft=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,j=[];for(let bt=0;bt<6;bt++)!ft&&!D?j[bt]=y(E.image[bt],!0,n.maxCubemapSize):j[bt]=D?E.image[bt].image:E.image[bt],j[bt]=Vt(E,j[bt]);let q=j[0],pt=s.convert(E.format,E.colorSpace),ot=s.convert(E.type),ut=w(E.internalFormat,pt,ot,E.normalized,E.colorSpace),Bt=E.isVideoTexture!==!0,ie=ht.__version===void 0||rt===!0,at=Q.dataReady,Gt=b(E,q);se(r.TEXTURE_CUBE_MAP,E);let te;if(E.isDepthTexture){if(ut=v(E.format===wn,E.type),ie)if(Bt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ut,q.width,q.height);else for(let bt=0;bt<6;bt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,q.width,q.height,0,pt,ot,null)}else if(ft){Bt&&ie&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,ut,q.width,q.height);for(let bt=0;bt<6;bt++){te=j[bt].mipmaps;for(let we=0;we<te.length;we++){let ii=te[we];E.format!==zi?pt!==null?Bt?at&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we,0,0,ii.width,ii.height,pt,ii.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we,ut,ii.width,ii.height,0,ii.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we,0,0,ii.width,ii.height,pt,ot,ii.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we,ut,ii.width,ii.height,0,pt,ot,ii.data)}}}else{if(te=E.mipmaps,Bt&&ie){te.length>0&&Gt++;let bt=$t(j[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,ut,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(D){Bt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,j[bt].width,j[bt].height,pt,ot,j[bt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,j[bt].width,j[bt].height,0,pt,ot,j[bt].data);for(let we=0;we<te.length;we++){let Rn=te[we].image[bt].image;Bt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we+1,0,0,Rn.width,Rn.height,pt,ot,Rn.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we+1,ut,Rn.width,Rn.height,0,pt,ot,Rn.data)}}else{Bt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,pt,ot,j[bt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,pt,ot,j[bt]);for(let we=0;we<te.length;we++){let ii=te[we];Bt?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we+1,0,0,pt,ot,ii.image[bt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,we+1,ut,pt,ot,ii.image[bt])}}}S(E)&&E.mipmapsAutoUpdate===!0&&_(r.TEXTURE_CUBE_MAP),ht.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function St(C,E,k,rt,Q,ht){let _t=s.convert(k.format,k.colorSpace),Z=s.convert(k.type),K=w(k.internalFormat,_t,Z,k.normalized,k.colorSpace),ft=i.get(E),D=i.get(k);if(D.__renderTarget=E,!ft.__hasExternalTextures){let j=Math.max(1,E.width>>ht),q=Math.max(1,E.height>>ht);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,ht,K,j,q,E.depth,0,_t,Z,null):e.texImage2D(Q,ht,K,j,q,0,_t,Z,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),vt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,Q,D.__webglTexture,0,Re(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,Q,D.__webglTexture,ht),e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(C,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){let rt=E.depthTexture,Q=rt&&rt.isDepthTexture?rt.type:null,ht=v(E.stencilBuffer,Q),_t=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;vt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(E),ht,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,C)}else{let rt=E.textures;for(let Q=0;Q<rt.length;Q++){let ht=rt[Q],_t=s.convert(ht.format,ht.colorSpace),Z=s.convert(ht.type),K=w(ht.internalFormat,_t,Z,ht.normalized,ht.colorSpace);vt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(E),K,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(E),K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(C,E,k){let rt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(E.depthTexture);Q.__renderTarget=E;let ht=rt?E.depthTexture.image[0]:E.depthTexture.image;(!Q.__webglTexture||ht.width!==E.width||ht.height!==E.height)&&(ht.width=E.width,ht.height=E.height,E.depthTexture.needsUpdate=!0),rt?yt(E.depthTexture,0):mt(E.depthTexture,0);let _t=Q.__webglTexture,Z=Re(E),K=rt?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ft=E.depthTexture.format===wn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===vn)vt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,K,_t,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,ft,K,_t,0);else if(E.depthTexture.format===wn)vt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,K,_t,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,ft,K,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(C){let E=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let rt=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),rt){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,rt.removeEventListener("dispose",Q)};rt.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=rt}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let rt=0;rt<6;rt++)Ut(E.__webglFramebuffer[rt],C,rt);else C.texture.mipmaps.length>0?Ut(E.__webglFramebuffer[0],C,0):Ut(E.__webglFramebuffer,C,0);else if(k){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]===void 0)E.__webglDepthbuffer[rt]=r.createRenderbuffer(),jt(E.__webglDepthbuffer[rt],C,!1);else{let Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[rt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ht)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),jt(E.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function de(C,E,k){let rt=i.get(C);E!==void 0&&St(rt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ce(C)}function xe(C){let E=C.texture,k=i.get(C),rt=i.get(E);C.addEventListener("dispose",z),P(C);let Q=C.textures,ht=C.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=E.version,a.memory.textures++),ht){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(E.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let K=0;K<E.mipmaps.length;K++)k.__webglFramebuffer[Z][K]=r.createFramebuffer()}else k.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(E.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<E.mipmaps.length;Z++)k.__webglFramebuffer[Z]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(_t)for(let Z=0,K=Q.length;Z<K;Z++){let ft=i.get(Q[Z]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&vt(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let K=Q[Z];k.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let ft=s.convert(K.format,K.colorSpace),D=s.convert(K.type),j=w(K.internalFormat,ft,D,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),q=Re(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,q,j,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),se(r.TEXTURE_CUBE_MAP,E);for(let Z=0;Z<6;Z++)if(E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)St(k.__webglFramebuffer[Z][K],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else St(k.__webglFramebuffer[Z],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);S(E)?_(r.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let Z=0,K=Q.length;Z<K;Z++){let ft=Q[Z],D=i.get(ft),j=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),se(j,ft),St(k.__webglFramebuffer,C,ft,r.COLOR_ATTACHMENT0+Z,j,0),S(ft)&&_(j)}e.unbindTexture()}else{let Z=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Z,rt.__webglTexture),se(Z,E),E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)St(k.__webglFramebuffer[K],C,E,r.COLOR_ATTACHMENT0,Z,K);else St(k.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,Z,0);S(E)?_(Z):E.mipmaps.length>0&&r.texParameteri(Z,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ce(C)}function F(C){let E=C.textures;for(let k=0,rt=E.length;k<rt;k++){let Q=E[k];if(S(Q)&&Q.mipmapsAutoUpdate===!0){let ht=M(C),_t=i.get(Q).__webglTexture;e.bindTexture(ht,_t),_(ht),e.unbindTexture()}}}let Je=[];function re(C){if(C.samples>0){if(vt(C)===!1){let E=C.textures,k=C.width,rt=C.height,Q=r.COLOR_BUFFER_BIT,ht=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=i.get(C),Z=E.length>1;if(Z)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),Z){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let D=i.get(E[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,k,rt,0,0,k,rt,Q,r.NEAREST),l===!0&&(Je.length=0,Je.push(r.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Je.push(ht),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Je))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Z)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let D=i.get(E[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,D,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Re(C){return Math.min(n.maxSamples,C.samples)}function vt(C){let E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(C){let E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Vt(C,E){let k=C.colorSpace,rt=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ss&&k!==En&&(ae.getTransfer(k)===Se?(rt!==zi||Q!==mi)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",k)),E}function $t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ot,this.resetTextureUnits=J,this.getTextureUnits=tt,this.setTextureUnits=Tt,this.setTexture2D=mt,this.setTexture2DArray=Rt,this.setTexture3D=kt,this.setTextureCube=yt,this.rebindTextures=de,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=St,this.useMultisampledRTT=vt,this.dispose=B}function Ky(r,t){function e(i,n=En){let s,a=ae.getTransfer(n);if(i===mi)return r.UNSIGNED_BYTE;if(i===Vo)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Wo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===ph)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===mh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===dh)return r.BYTE;if(i===fh)return r.SHORT;if(i===Qs)return r.UNSIGNED_SHORT;if(i===Go)return r.INT;if(i===Di)return r.UNSIGNED_INT;if(i===Oi)return r.FLOAT;if(i===Ni)return r.HALF_FLOAT;if(i===gh)return r.ALPHA;if(i===xh)return r.RGB;if(i===zi)return r.RGBA;if(i===vn)return r.DEPTH_COMPONENT;if(i===wn)return r.DEPTH_STENCIL;if(i===Xo)return r.RED;if(i===qo)return r.RED_INTEGER;if(i===Vn)return r.RG;if(i===Yo)return r.RG_INTEGER;if(i===Zo)return r.RGBA_INTEGER;if(i===ia||i===na||i===sa||i===ra)if(a===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$o||i===Jo||i===Ko||i===jo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qo||i===tl||i===el||i===il||i===nl||i===aa||i===sl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qo||i===tl)return a===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===el)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===il)return s.COMPRESSED_R11_EAC;if(i===nl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===aa)return s.COMPRESSED_RG11_EAC;if(i===sl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===xl||i===yl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ol)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===_l||i===Ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===vl)return a===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===bl||i===oa||i===wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Pe({vertexShader:jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends tn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Hh,g={},y=e.getContextAttributes(),S=null,_=null,M=[],w=[],v=new nt,b=null,P=null,R=new vi;R.viewport=new Fe;let L=new vi;L.viewport=new Fe;let z=[R,L],U=new Fo,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let mt=M[Y];return mt===void 0&&(mt=new Ws,M[Y]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Y){let mt=M[Y];return mt===void 0&&(mt=new Ws,M[Y]=mt),mt.getGripSpace()},this.getHand=function(Y){let mt=M[Y];return mt===void 0&&(mt=new Ws,M[Y]=mt),mt.getHandSpace()};function H(Y){let mt=w.indexOf(Y.inputSource);if(mt===-1)return;let Rt=M[mt];Rt!==void 0&&(Rt.update(Y.inputSource,Y.frame,c||a),Rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",it);for(let Y=0;Y<M.length;Y++){let mt=w[Y];mt!==null&&(w[Y]=null,M[Y].disconnect(mt))}I=null,B=null,m.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(S),f=null,d=null,h=null,n=null,_=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(n,e)),h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",G),n.addEventListener("inputsourceschange",it),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,kt=null,yt=null;y.depth&&(yt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?wn:vn,kt=y.stencil?fs:Di);let Ft={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ft),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Qe(d.textureWidth,d.textureHeight,{format:zi,type:mi,depthTexture:new Zi(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,Rt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Qe(f.framebufferWidth,f.framebufferHeight,{format:zi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ot.setContext(n),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Y){for(let mt=0;mt<Y.removed.length;mt++){let Rt=Y.removed[mt],kt=w.indexOf(Rt);kt>=0&&(w[kt]=null,M[kt].disconnect(Rt))}for(let mt=0;mt<Y.added.length;mt++){let Rt=Y.added[mt],kt=w.indexOf(Rt);if(kt===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=w.length){w.push(Rt),kt=Ft;break}else if(w[Ft]===null){w[Ft]=Rt,kt=Ft;break}if(kt===-1)break}let yt=M[kt];yt&&yt.connect(Rt)}}function W(Y,mt){mt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(mt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let mt=Y.near,Rt=Y.far;m.texture!==null&&(m.depthNear>0&&(mt=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),U.near=L.near=R.near=mt,U.far=L.far=R.far=Rt,(I!==U.near||B!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,B=U.far),U.layers.mask=Y.layers.mask|6,R.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let kt=Y.parent,yt=U.cameras;W(U,kt);for(let Ft=0;Ft<yt.length;Ft++)W(yt[Ft],kt);U.projectionMatrix.copy(R.projectionMatrix),U.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),J(Y,U,kt)};function J(Y,mt,Rt){Rt===null?Y.matrix.copy(mt.matrixWorld):(Y.matrix.copy(Rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(mt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(mt.projectionMatrix),Y.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=lo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return g[Y]};let tt=null;function Tt(Y,mt){if(u=mt.getViewerPose(c||a),p=mt,u!==null){let Rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let kt=!1;Rt.length!==U.cameras.length&&(U.cameras.length=0,kt=!0);for(let Ht=0;Ht<Rt.length;Ht++){let se=Rt[Ht],le=null;if(f!==null)le=f.getViewport(se);else{let dt=h.getViewSubImage(d,se);le=dt.viewport,Ht===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let et=z[Ht];et===void 0&&(et=new vi,et.layers.enable(Ht),et.viewport=new Fe,z[Ht]=et),et.matrix.fromArray(se.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(se.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(le.x,le.y,le.width,le.height),Ht===0&&(U.matrix.copy(et.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),kt===!0&&U.cameras.push(et)}let yt=n.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let Ht=h.getDepthInformation(Rt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,n.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let Ht=0;Ht<Rt.length;Ht++){let se=Rt[Ht].camera;if(se){let le=g[se];le||(le=new Ur,g[se]=le);let et=h.getCameraImage(se);le.sourceTexture=et}}}}for(let Rt=0;Rt<M.length;Rt++){let kt=w[Rt],yt=M[Rt];kt!==null&&yt!==void 0&&yt.update(kt,mt,c||a)}tt&&tt(Y,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),p=null}let Ot=new xf;Ot.setAnimationLoop(Tt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},tv=new zt,Af=new Jt;Af.set(-1,0,0,0,1,0,0,0,1);function ev(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,wh(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,S,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Af),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function iv(r,t,e,i){let n={},s={};function a(y,S){let _=S.program;i.uniformBlockBinding(y,_,n[y.id])}function o(y,S){let _=n[y.id];_===void 0&&(p(y),_=l(y),n[y.id]=_,y.addEventListener("dispose",m));let M=S.program;i.updateUBOMapping(y,M);let w=t.render.frame;s[y.id]!==w&&(c(y),s[y.id]=w)}function l(y){let S=r.createBuffer(),_=y.__size,M=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,_,M),r.bindBuffer(r.UNIFORM_BUFFER,null),S}function c(y){let S=n[y.id],_=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,v=_.length;w<v;w++){let b=_[w];if(Array.isArray(b))for(let P=0,R=b.length;P<R;P++)u(b[P],w,P,M);else u(b,w,0,M)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,S,_,M){if(d(y,S,_,M)===!0){let w=y.__offset,v=y.value;if(Array.isArray(v)){let b=0;for(let P=0;P<v.length;P++){let R=v[P],L=x(R,!0);h(R,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else h(v,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,y.__data)}}function h(y,S,_){typeof y=="number"||typeof y=="boolean"?S[_]=y:y.isMatrix3?(S[_]=y.elements[0],S[_+1]=y.elements[1],S[_+2]=y.elements[2],S[_+3]=0,S[_+4]=y.elements[3],S[_+5]=y.elements[4],S[_+6]=y.elements[5],S[_+7]=0,S[_+8]=y.elements[6],S[_+9]=y.elements[7],S[_+10]=y.elements[8],S[_+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-_),_):y.toArray(S,_)}function d(y,S,_,M){let w=y.value,v=S+"_"+_;if(Array.isArray(w)){M[v]===void 0&&(M[v]=[]);let b=M[v],P=!1;for(let R=0;R<w.length;R++)f(w[R],b,R)===!0&&(P=!0);return P}return f(w,M,v)}function f(y,S,_){if(S[_]===void 0)return typeof y=="number"||typeof y=="boolean"?S[_]=y:ArrayBuffer.isView(y)?S[_]=y.slice():S[_]=y.clone(),!0;{let M=S[_];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return S[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function p(y){let S=y.uniforms,_=0,M=16;for(let v=0,b=S.length;v<b;v++){let P=Array.isArray(S[v])?S[v]:[S[v]];for(let R=0,L=P.length;R<L;R++){let z=P[R],U=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(S[v])||Array.isArray(z.value),B=_;for(let G=0,it=U.length;G<it;G++){let W=U[G],J=x(W,I),tt=_%M,Tt=tt%J.boundary,Ot=tt+Tt;_+=Tt,Ot!==0&&M-Ot<J.storage&&(_+=M-Ot),G===0&&(B=_),_+=J.storage}let H=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new H((_-B)/Float32Array.BYTES_PER_ELEMENT),z.__offset=B}}let w=_%M;return w>0&&(_+=M-w),y.__size=_,y.__cache={},this}function x(y,S){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(y){let S=y.target;S.removeEventListener("dispose",m),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function g(){for(let y in n)r.deleteBuffer(n[y]);n={},s={}}return{bind:a,update:o,dispose:g}}var nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),on=null;function sv(){return on===null&&(on=new as(nv,16,16,Vn,Ni),on.name="DFG_LUT",on.minFilter=_i,on.magFilter=_i,on.wrapS=Qi,on.wrapT=Qi,on.generateMipmaps=!1,on.needsUpdate=!0),on}var Rl=class{constructor(t={}){let{canvas:e=Dd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,m=new Set([Zo,Yo,qo]),g=new Set([mi,Di,Qs,fs,Vo,Wo]),y=new Uint32Array(4),S=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},M=null,w=null,v=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,z=null,U=null,I=null,B=null;this._outputColorSpace=Ci;let H=0,G=0,it=null,W=-1,J=null,tt=new Fe,Tt=new Fe,Ot=null,Y=new At(0),mt=0,Rt=e.width,kt=e.height,yt=1,Ft=null,Te=null,Ht=new Fe(0,0,Rt,kt),se=new Fe(0,0,Rt,kt),le=!1,et=new Un,dt=new po,ct=!1,Ct=!1,St=new zt,jt=new A,Ut=new Fe,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function xe(){return it===null?yt:1}let F=i;function Je(T,N){return e.getContext(T,N)}let re,Re,vt,qe,Vt,$t,C,E,k,rt,Q,ht,_t,Z,K,ft,D,j,q,pt,ot,ut,Bt;try{let T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",bt,!1),F===null){let N="webgl2";if(F=Je(N,T),F===null)throw Je(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(T){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Yt("WebGLRenderer: "+T.message),T}function ie(){re=new mx(F),re.init(),ot=new Ky(F,re),Re=new sx(F,re,t,ot),vt=new $y(F,re),Re.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),U=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),qe=new yx(F),Vt=new zy,$t=new Jy(F,re,vt,Vt,Re,ot,qe),C=new px(R),E=new _0(F),ut=new ix(F,E),k=new gx(F,E,qe,ut),rt=new _x(F,k,E,ut,qe),j=new vx(F,Re,$t),K=new rx(Vt),Q=new Ny(R,C,re,Re,ut,K),ht=new ev(R,Vt),_t=new Uy,Z=new Vy(re),D=new ex(R,C,vt,rt,p,l),ft=new Zy(R,rt,Re),Bt=new iv(F,qe,Re,vt),q=new nx(F,re,qe),pt=new xx(F,re,qe),qe.programs=Q.programs,R.capabilities=Re,R.extensions=re,R.properties=Vt,R.renderLists=_t,R.shadowMap=ft,R.state=vt,R.info=qe}x!==mi&&(P=new Sx(x,e.width,e.height,o,n,s));let at=new Gh(R,F);this.xr=at,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(T){T!==void 0&&(yt=T,this.setSize(Rt,kt,!1))},this.getSize=function(T){return T.set(Rt,kt)},this.setSize=function(T,N,X=!0){if(at.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=T,kt=N,e.width=Math.floor(T*yt),e.height=Math.floor(N*yt),X===!0&&(e.style.width=T+"px",e.style.height=N+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Rt*yt,kt*yt).floor()},this.setDrawingBufferSize=function(T,N,X){Rt=T,kt=N,yt=X,e.width=Math.floor(T*X),e.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(x===mi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(Ht)},this.setViewport=function(T,N,X,O){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,N,X,O),vt.viewport(tt.copy(Ht).multiplyScalar(xe()).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,N,X,O){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,N,X,O),vt.scissor(Tt.copy(se).multiplyScalar(xe()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){vt.setScissorTest(le=T)},this.setOpaqueSort=function(T){Ft=T},this.setTransparentSort=function(T){Te=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,X=!0){let O=0;if(T){let V=!1;if(it!==null){let Mt=it.texture.format;V=m.has(Mt)}if(V){let Mt=it.texture.type,Pt=g.has(Mt),gt=D.getClearColor(),Et=D.getClearAlpha(),Nt=gt.r,Kt=gt.g,fe=gt.b;Pt?(y[0]=Nt,y[1]=Kt,y[2]=fe,y[3]=Et,F.clearBufferuiv(F.COLOR,0,y)):(S[0]=Nt,S[1]=Kt,S[2]=fe,S[3]=Et,F.clearBufferiv(F.COLOR,0,S))}else O|=F.COLOR_BUFFER_BIT}N&&(O|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),D.dispose(),_t.dispose(),Z.dispose(),$t.dispose(),Vt.dispose(),C.dispose(),rt.dispose(),k.dispose(),ut.dispose(),Bt.dispose(),Q.dispose(),at.dispose(),at.removeEventListener("sessionstart",lu),at.removeEventListener("sessionend",cu),$n.stop()};function Gt(T){T.preventDefault(),Tr("WebGLRenderer: Context Lost."),L=!0}function te(){Tr("WebGLRenderer: Context Restored."),L=!1;let T=qe.autoReset,N=ft.enabled,X=ft.autoUpdate,O=ft.needsUpdate,V=ft.type;ie(),qe.autoReset=T,ft.enabled=N,ft.autoUpdate=X,ft.needsUpdate=O,ft.type=V}function bt(T){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function we(T){let N=T.target;N.removeEventListener("dispose",we),ii(N)}function ii(T){Rn(T),Vt.remove(T)}function Rn(T){let N=Vt.get(T).programs;N!==void 0&&(N.forEach(function(X){Q.releaseProgram(X)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,O,V,Mt){N===null&&(N=ce);let Pt=V.isMesh&&V.matrixWorld.determinantAffine()<0,gt=ap(T,N,X,O,V);vt.setMaterial(O,Pt);let Et=X.index,Nt=1;if(O.wireframe===!0){if(Et=k.getWireframeAttribute(X),Et===void 0)return;Nt=2}let Kt=X.drawRange,fe=X.attributes.position,It=Kt.start*Nt,pe=(Kt.start+Kt.count)*Nt;Mt!==null&&(It=Math.max(It,Mt.start*Nt),pe=Math.min(pe,(Mt.start+Mt.count)*Nt)),Et!==null?(It=Math.max(It,0),pe=Math.min(pe,Et.count)):fe!=null&&(It=Math.max(It,0),pe=Math.min(pe,fe.count));let Ke=pe-It;if(Ke<0||Ke===1/0)return;ut.setup(V,O,gt,X,Et);let Ie,Ce=q;if(Et!==null&&(Ie=E.get(Et),Ce=pt,Ce.setIndex(Ie)),V.isMesh)O.wireframe===!0?(vt.setLineWidth(O.wireframeLinewidth*xe()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(V.isLine){let li=O.linewidth;li===void 0&&(li=1),vt.setLineWidth(li*xe()),V.isLineSegments?Ce.setMode(F.LINES):V.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else V.isPoints?Ce.setMode(F.POINTS):V.isSprite&&Ce.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let li=V._multiDrawStarts,Lt=V._multiDrawCounts,xi=V._multiDrawCount,ve=Et?E.get(Et).bytesPerElement:1,Jn=Vt.get(O).currentProgram.getUniforms();for(let ci=0;ci<xi;ci++)Jn.setValue(F,"_gl_DrawID",ci),Ce.render(li[ci]/ve,Lt[ci])}else if(V.isInstancedMesh)Ce.renderInstances(It,Ke,V.count);else if(X.isInstancedBufferGeometry){let li=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lt=Math.min(X.instanceCount,li);Ce.renderInstances(It,Ke,Lt)}else Ce.render(It,Ke)};function ou(T,N,X,O){z!==null&&T.isNodeMaterial&&z.setObject(O,T),ct===!0&&K.setState(T,X,!1),T.transparent===!0&&T.side===Oe&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,cr(T,N,O),T.side=rn,T.needsUpdate=!0,cr(T,N,O),T.side=Oe):cr(T,N,O)}this.compile=function(T,N,X=null){X===null&&(X=T),z!==null&&z.renderStart(T,N,X),w=Z.get(X),w.init(N),b.push(w),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Ct=this.localClippingEnabled,ct=K.init(this.clippingPlanes,Ct),ct===!0&&K.setGlobalState(this.clippingPlanes,N),z!==null&&ft.render(w.state.shadowsArray,X,N);let O=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Mt=V.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let gt=Mt[Pt];ou(gt,X,N,V),O.add(gt)}else ou(Mt,X,N,V),O.add(Mt)}),w=b.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(T,N,X=null){let O=this.compile(T,N,X);return new Promise(V=>{function Mt(){if(O.forEach(function(Pt){let Et=Vt.get(Pt).currentProgram;(Et===void 0||Et.isReady())&&O.delete(Pt)}),O.size===0){V(T);return}setTimeout(Mt,10)}re.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let fc=null;function sp(T){fc&&fc(T)}function lu(){$n.stop()}function cu(){$n.start()}let $n=new xf;$n.setAnimationLoop(sp),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(T){fc=T,at.setAnimationLoop(T),T===null?$n.stop():$n.start()},at.addEventListener("sessionstart",lu),at.addEventListener("sessionend",cu),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(T,N);let X=at.enabled===!0&&at.isPresenting===!0,O=P!==null&&(it===null||X)&&P.begin(R,it);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(N),N=at.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,N,it),w=Z.get(T,b.length),w.init(N),w.state.textureUnits=$t.getTextureUnits(),b.push(w),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?dt.setFromArrayCamera(N):et.setFromProjectionMatrix(St,Bi,N.reversedDepth),Ct=this.localClippingEnabled,ct=K.init(this.clippingPlanes,Ct),M=_t.get(T,v.length),M.init(),v.push(M),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&pc(Pt,N,-1/0,R.sortObjects)}pc(T,N,0,R.sortObjects),M.finish(),z!==null&&z.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(Ft,Te),de=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,de&&D.addToRenderList(M,T),this.info.autoReset===!0&&this.info.reset(),ct===!0&&K.beginShadows();let V=w.state.shadowsArray;if(ft.render(V,T,N),ct===!0&&K.endShadows(),(O&&P.hasRenderPass())===!1){let Pt=M.opaque,gt=M.transmissive;if(w.setupLights(),N.isArrayCamera){let Et=N.cameras;if(gt.length>0)for(let Nt=0,Kt=Et.length;Nt<Kt;Nt++){let fe=Et[Nt];uu(Pt,gt,T,fe)}de&&D.render(T);for(let Nt=0,Kt=Et.length;Nt<Kt;Nt++){let fe=Et[Nt];hu(M,T,fe,fe.viewport)}}else gt.length>0&&uu(Pt,gt,T,N),de&&D.render(T),hu(M,T,N)}it!==null&&G===0&&($t.updateMultisampleRenderTarget(it),$t.updateRenderTargetMipmap(it)),O&&P.end(R),T.isScene===!0&&T.onAfterRender(R,T,N),ut.resetDefaultState(),W=-1,J=null,b.pop(),b.length>0?(w=b[b.length-1],$t.setTextureUnits(w.state.textureUnits),ct===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,z!==null&&z.renderEnd()};function pc(T,N,X,O){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Pt=N.isArrayCamera?dt:et;if(!T.frustumCulled||T.intersectsFrustum(Pt)){O&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(St);let gt=rt.update(T),Et=T.material;Et.visible&&M.push(T,gt,Et,X,Ut.z,null,N)}}else if(T.isMesh||T.isLine||T.isPoints){let Pt=N.isArrayCamera?dt:et;if(!T.frustumCulled||T.intersectsFrustum(Pt)){let gt=rt.update(T),Et=T.material;if(O&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ut.copy(gt.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(St)),Array.isArray(Et)){let Nt=gt.groups;for(let Kt=0,fe=Nt.length;Kt<fe;Kt++){let It=Nt[Kt],pe=Et[It.materialIndex];pe&&pe.visible&&M.push(T,gt,pe,X,Ut.z,It,N)}}else Et.visible&&M.push(T,gt,Et,X,Ut.z,null,N)}}}let Mt=T.children;for(let Pt=0,gt=Mt.length;Pt<gt;Pt++)pc(Mt[Pt],N,X,O)}function hu(T,N,X,O){let{opaque:V,transmissive:Mt,transparent:Pt}=T;w.setupLightsView(X),ct===!0&&K.setGlobalState(R.clippingPlanes,X),O&&vt.viewport(tt.copy(O)),V.length>0&&Ma(V,N,X),Mt.length>0&&Ma(Mt,N,X),Pt.length>0&&Ma(Pt,N,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function uu(T,N,X,O){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let It=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Qe(1,1,{generateMipmaps:!0,type:It?Ni:mi,minFilter:bn,samples:Math.max(4,Re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[O.id],Pt=O.viewport||tt;Mt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let gt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(Y),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),de&&D.render(X);let Kt=R.toneMapping;R.toneMapping=an;let fe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),ct===!0&&K.setGlobalState(R.clippingPlanes,O),Ma(T,X,O),$t.updateMultisampleRenderTarget(Mt),$t.updateRenderTargetMipmap(Mt),re.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let pe=0,Ke=N.length;pe<Ke;pe++){let Ie=N[pe],{object:Ce,geometry:li,material:Lt,group:xi}=Ie;if(Lt.side===Oe&&Ce.layers.test(O.layers)){let ve=Lt.side;Lt.side=$e,Lt.needsUpdate=!0,du(Ce,X,O,li,Lt,xi),Lt.side=ve,Lt.needsUpdate=!0,It=!0}}It===!0&&($t.updateMultisampleRenderTarget(Mt),$t.updateRenderTargetMipmap(Mt))}R.setRenderTarget(gt,Et,Nt),R.setClearColor(Y,mt),fe!==void 0&&(O.viewport=fe),R.toneMapping=Kt}function Ma(T,N,X){let O=N.isScene===!0?N.overrideMaterial:null;for(let V=0,Mt=T.length;V<Mt;V++){let Pt=T[V],{object:gt,geometry:Et,group:Nt}=Pt,Kt=Pt.material;Kt.allowOverride===!0&&O!==null&&(Kt=O),gt.layers.test(X.layers)&&du(gt,N,X,Et,Kt,Nt)}}function du(T,N,X,O,V,Mt){z!==null&&V.isNodeMaterial&&z.setObject(T,V),T.onBeforeRender(R,N,X,O,V,Mt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,N,X,O,T,Mt),V.transparent===!0&&V.side===Oe&&V.forceSinglePass===!1?(V.side=$e,V.needsUpdate=!0,R.renderBufferDirect(X,N,O,V,T,Mt),V.side=rn,V.needsUpdate=!0,R.renderBufferDirect(X,N,O,V,T,Mt),V.side=Oe):R.renderBufferDirect(X,N,O,V,T,Mt),T.onAfterRender(R,N,X,O,V,Mt)}function fu(T){let N=0;for(let X of T)X.texture!==null&&N++;return N}function cr(T,N,X){N.isScene!==!0&&(N=ce);let O=Vt.get(T),V=w.state.lights,Mt=w.state.shadowsArray,Pt=V.state.version,gt=Q.getParameters(T,V.state,Mt,N,X,w.state.lightProbeGridArray),Et=Q.getProgramCacheKey(gt),Nt=O.programs;O.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let Kt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;O.envMap=C.get(T.envMap||O.environment,Kt),O.envMapRotation=O.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",we),Nt=new Map,O.programs=Nt,O.programVariants=new Map);let fe=Nt.get(Et);if(fe!==void 0){if(O.currentProgram===fe&&O.lightsStateVersion===Pt)return mu(T,gt),fe}else gt.uniforms=Q.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,X,gt),T.onBeforeCompile(gt,R),fe=Q.acquireProgram(gt,Et),Nt.set(Et,fe),O.uniforms=gt.uniforms;let It=O.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=K.uniform),mu(T,gt),O.needsLights=lp(T),O.lightsStateVersion=Pt,O.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.sunLights.value=V.state.sun,It.sunLightShadows.value=V.state.sunShadow,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.sunShadowMatrix.value=V.state.sunShadowMatrix,It.sunShadowCascade.value=V.state.sunShadowCascade,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),O.numLightProbeGrids=fu(w.state.lightProbeGridArray),O.currentProgram=fe,O.uniformsList=null,fe}function rp(T,N,X,O,V){let Mt=Vt.get(T),Pt=Mt.currentProgram.id+","+O+","+V,gt=Mt.programVariants.get(Pt);return gt===void 0?(gt=cr(T,N,X),Mt.programVariants.set(Pt,gt)):(Mt.currentProgram=gt,Mt.uniformsList=null,Mt.outputColorSpace=O,Mt.toneMapping=V),gt}function pu(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=tr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function mu(T,N){let X=Vt.get(T);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function ap(T,N,X,O,V){N.isScene!==!0&&(N=ce),$t.resetTextureUnits();let Mt=N.fog,Pt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,gt=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ae.workingColorSpace,Et=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Nt=C.get(O.envMap||Pt,Et),Kt=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,fe=!!X.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),It=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,Ke=!!X.morphAttributes.color,Ie=an;O.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ie=R.toneMapping);let Ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,li=Ce!==void 0?Ce.length:0,Lt=Vt.get(O),xi=w.state.lights;if(ct===!0&&(Ct===!0||T!==J)){let Ve=T===J&&O.id===W;K.setState(O,T,Ve)}let ve=!1,Jn=!1;O.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==xi.state.version||V.isBatchedMesh&&Lt.batching===!1||!V.isBatchedMesh&&Lt.batching===!0||V.isBatchedMesh&&Lt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Lt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Lt.instancing===!1||!V.isInstancedMesh&&Lt.instancing===!0||V.isSkinnedMesh&&Lt.skinning===!1||!V.isSkinnedMesh&&Lt.skinning===!0||V.isInstancedMesh&&Lt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Lt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Lt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Lt.instancingMorph===!1&&V.morphTexture!==null||Lt.envMap!==Nt||O.fog===!0&&Lt.fog!==Mt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==K.numPlanes||Lt.numIntersection!==K.numIntersection)||Lt.vertexAlphas!==Kt||Lt.vertexTangents!==fe||Lt.morphTargets!==It||Lt.morphNormals!==pe||Lt.morphColors!==Ke||Lt.morphTargetsCount!==li||Lt.numLightProbeGrids!==fu(w.state.lightProbeGridArray)?ve=!0:(Lt.outputColorSpace!==gt||Lt.toneMapping!==Ie)&&(Jn=!0):(ve=!0,Lt.__version=O.version);let ci=Lt.currentProgram;(ve===!0||Jn===!0)&&(ci=Jn===!0?rp(O,N,V,gt,Ie):cr(O,N,V),z&&O.isNodeMaterial&&z.onUpdateProgram(O,ci,Lt));let Sa=!1,Cn=!1,Kn=!1,ge=ci.getUniforms(),ri=Lt.uniforms;if(vt.useProgram(ci.program)&&(Sa=!0,Cn=!0,Kn=!0),O.id!==W&&(W=O.id,Cn=!0),Sa||J!==T){vt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(F,"projectionMatrix",T.projectionMatrix),ge.setValue(F,"viewMatrix",T.matrixWorldInverse);let ni=ge.map.cameraPosition;ni!==void 0&&ni.setValue(F,jt.setFromMatrixPosition(T.matrixWorld)),Re.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ge.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Cn=!0,Kn=!0)}if(Lt.needsLights&&(xi.state.sunShadowMap.length>0&&ge.setValue(F,"sunShadowMap",xi.state.sunShadowMap,$t),xi.state.directionalShadowMap.length>0&&ge.setValue(F,"directionalShadowMap",xi.state.directionalShadowMap,$t),xi.state.spotShadowMap.length>0&&ge.setValue(F,"spotShadowMap",xi.state.spotShadowMap,$t),xi.state.pointShadowMap.length>0&&ge.setValue(F,"pointShadowMap",xi.state.pointShadowMap,$t)),V.isSkinnedMesh){ge.setOptional(F,V,"bindMatrix"),ge.setOptional(F,V,"bindMatrixInverse");let Ve=V.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ge.setValue(F,"boneTexture",Ve.boneTexture,$t))}V.isBatchedMesh&&(ge.setOptional(F,V,"batchingTexture"),ge.setValue(F,"batchingTexture",V._matricesTexture,$t),ge.setOptional(F,V,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",V._indirectTexture,$t),ge.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",V._colorsTexture,$t));let Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&j.update(V,X,ci),(Cn||Lt.receiveShadow!==V.receiveShadow)&&(Lt.receiveShadow=V.receiveShadow,ge.setValue(F,"receiveShadow",V.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(ri.envMapIntensity.value=N.environmentIntensity),ri.dfgLUT!==void 0&&(ri.dfgLUT.value=sv()),Cn){if(ge.setValue(F,"toneMappingExposure",R.toneMappingExposure),Lt.needsLights&&op(ri,Kn),Mt&&O.fog===!0&&ht.refreshFogUniforms(ri,Mt),ht.refreshMaterialUniforms(ri,O,yt,kt,w.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Ve=_,ni=0;for(let un of w.state.lightProbeGridArray)un.texture!==null&&(Ve.textures[ni]=un.texture,Ve.min[ni]=un.boundingBox.min,Ve.max[ni]=un.boundingBox.max,Ve.resolution[ni]=un.resolution,ni++);for(let un in Ve)Ve[un].length=ni;ri.probesSH.value=Ve.textures,ri.probesMin.value=Ve.min,ri.probesMax.value=Ve.max,ri.probesResolution.value=Ve.resolution}tr.upload(F,pu(Lt),ri,$t)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(tr.upload(F,pu(Lt),ri,$t),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ge.setValue(F,"center",V.center),ge.setValue(F,"modelViewMatrix",V.modelViewMatrix),ge.setValue(F,"normalMatrix",V.normalMatrix),ge.setValue(F,"modelMatrix",V.matrixWorld),O.uniformsGroups!==void 0){let Ve=O.uniformsGroups;for(let ni=0,un=Ve.length;ni<un;ni++){let xu=Ve[ni];Bt.update(xu,ci),Bt.bind(xu,ci)}}return ci}function op(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function lp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(T,N,X){let O=Vt.get(T);O.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Vt.get(T.texture).__webglTexture=N,Vt.get(T.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:X,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let X=Vt.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,X=0){it=T,H=N,G=X;let O=null,V=!1,Mt=!1;if(T){let gt=Vt.get(T);if(gt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(F.FRAMEBUFFER,gt.__webglFramebuffer),tt.copy(T.viewport),Tt.copy(T.scissor),Ot=T.scissorTest,vt.viewport(tt),vt.scissor(Tt),vt.setScissorTest(Ot),W=-1;return}else if(gt.__webglFramebuffer===void 0)$t.setupRenderTarget(T);else if(gt.__hasExternalTextures)$t.rebindTextures(T,Vt.get(T.texture).__webglTexture,Vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Kt=T.depthTexture;if(gt.__boundDepthTexture!==Kt){if(Kt!==null&&Vt.has(Kt)&&(T.width!==Kt.image.width||T.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(T)}}let Et=T.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Mt=!0);let Nt=Vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?O=Nt[N][X]:O=Nt[N],V=!0):T.samples>0&&$t.useMultisampledRTT(T)===!1?O=Vt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?O=Nt[X]:O=Nt,tt.copy(T.viewport),Tt.copy(T.scissor),Ot=T.scissorTest}else tt.copy(Ht).multiplyScalar(yt).floor(),Tt.copy(se).multiplyScalar(yt).floor(),Ot=le;if(X!==0&&(O=U),vt.bindFramebuffer(F.FRAMEBUFFER,O)&&vt.drawBuffers(T,O),vt.viewport(tt),vt.scissor(Tt),vt.setScissorTest(Ot),V){let gt=Vt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,gt.__webglTexture,X)}else if(Mt){let gt=N;for(let Et=0;Et<T.textures.length;Et++){let Nt=Vt.get(T.textures[Et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,X,gt)}}else if(T!==null&&X!==0){let gt=Vt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,X)}W=-1};function gu(T){let N=Vt.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=Re.textureFormatReadable(T.format),N.__typeReadable=Re.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,X,O,V,Mt,Pt,gt=0){if(!(T&&T.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et){vt.bindFramebuffer(F.FRAMEBUFFER,Et);try{let Nt=T.textures[gt],Kt=Nt.format,fe=Nt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);let It=gu(Nt);if(It.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-O&&X>=0&&X<=T.height-V&&F.readPixels(N,X,O,V,ot.convert(Kt),ot.convert(fe),Mt)}finally{let Nt=it!==null?Vt.get(it).__webglFramebuffer:null;vt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,N,X,O,V,Mt,Pt,gt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Et=Et[Pt],Array.isArray(Et)&&(Et=Et[0])),Et)if(N>=0&&N<=T.width-O&&X>=0&&X<=T.height-V){vt.bindFramebuffer(F.FRAMEBUFFER,Et);let Nt=T.textures[gt],Kt=Nt.format,fe=Nt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+gt);let It=gu(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(N,X,O,V,ot.convert(Kt),ot.convert(fe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ke=it!==null?Vt.get(it).__webglFramebuffer:null;vt.bindFramebuffer(F.FRAMEBUFFER,Ke);let Ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zd(F,Ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(Ie),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,X=0){let O=Math.pow(2,-X),V=Math.floor(T.image.width*O),Mt=Math.floor(T.image.height*O),Pt=N!==null?N.x:0,gt=N!==null?N.y:0;$t.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Pt,gt,V,Mt),vt.unbindTexture()},this.copyTextureToTexture=function(T,N,X=null,O=null,V=0,Mt=0){let Pt,gt,Et,Nt,Kt,fe,It,pe,Ke,Ie=T.isCompressedTexture?T.mipmaps[Mt]:T.image;if(X!==null)Pt=X.max.x-X.min.x,gt=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Nt=X.min.x,Kt=X.min.y,fe=X.isBox3?X.min.z:0;else{let ge=Math.pow(2,-V);Pt=Math.floor(Ie.width*ge),gt=Math.floor(Ie.height*ge),T.isDataArrayTexture?Et=Ie.depth:T.isData3DTexture?Et=Math.floor(Ie.depth*ge):Et=1,Nt=0,Kt=0,fe=0}O!==null?(It=O.x,pe=O.y,Ke=O.z):(It=0,pe=0,Ke=0);let Ce=ot.convert(N.format),li=ot.convert(N.type),Lt;N.isData3DTexture?($t.setTexture3D(N,0),Lt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($t.setTexture2DArray(N,0),Lt=F.TEXTURE_2D_ARRAY):($t.setTexture2D(N,0),Lt=F.TEXTURE_2D),vt.activeTexture(F.TEXTURE0),vt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),vt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),vt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let xi=vt.getParameter(F.UNPACK_ROW_LENGTH),ve=vt.getParameter(F.UNPACK_IMAGE_HEIGHT),Jn=vt.getParameter(F.UNPACK_SKIP_PIXELS),ci=vt.getParameter(F.UNPACK_SKIP_ROWS),Sa=vt.getParameter(F.UNPACK_SKIP_IMAGES);vt.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),vt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),vt.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),vt.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),vt.pixelStorei(F.UNPACK_SKIP_IMAGES,fe);let Cn=T.isDataArrayTexture||T.isData3DTexture,Kn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let ge=Vt.get(T),ri=Vt.get(N),Gi=Vt.get(ge.__renderTarget),Ve=Vt.get(ri.__renderTarget);vt.bindFramebuffer(F.READ_FRAMEBUFFER,Gi.__webglFramebuffer),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ni=0;ni<Et;ni++)Cn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(T).__webglTexture,V,fe+ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(N).__webglTexture,Mt,Ke+ni)),F.blitFramebuffer(Nt,Kt,Nt+Pt,Kt+gt,It,pe,It+Pt,pe+gt,F.DEPTH_BUFFER_BIT,F.NEAREST);vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Vt.has(T)){let ge=Vt.get(T),ri=Vt.get(N);vt.bindFramebuffer(F.READ_FRAMEBUFFER,I),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Gi=0;Gi<Et;Gi++)Cn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,V,fe+Gi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,V),Kn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ri.__webglTexture,Mt,Ke+Gi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ri.__webglTexture,Mt),V!==0?F.blitFramebuffer(Nt,Kt,Nt+Pt,Kt+gt,It,pe,It+Pt,pe+gt,F.COLOR_BUFFER_BIT,F.NEAREST):Kn?F.copyTexSubImage3D(Lt,Mt,It,pe,Ke+Gi,Nt,Kt,Pt,gt):F.copyTexSubImage2D(Lt,Mt,It,pe,Nt,Kt,Pt,gt);vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Lt,Mt,It,pe,Ke,Pt,gt,Et,Ce,li,Ie.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,Mt,It,pe,Ke,Pt,gt,Et,Ce,Ie.data):F.texSubImage3D(Lt,Mt,It,pe,Ke,Pt,gt,Et,Ce,li,Ie):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,It,pe,Pt,gt,Ce,li,Ie.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,It,pe,Ie.width,Ie.height,Ce,Ie.data):F.texSubImage2D(F.TEXTURE_2D,Mt,It,pe,Pt,gt,Ce,li,Ie);vt.pixelStorei(F.UNPACK_ROW_LENGTH,xi),vt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve),vt.pixelStorei(F.UNPACK_SKIP_PIXELS,Jn),vt.pixelStorei(F.UNPACK_SKIP_ROWS,ci),vt.pixelStorei(F.UNPACK_SKIP_IMAGES,Sa),Mt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Lt),vt.unbindTexture()},this.initRenderTarget=function(T){Vt.get(T).__webglFramebuffer===void 0&&$t.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$t.setTextureCube(T,0):T.isData3DTexture?$t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$t.setTexture2DArray(T,0):$t.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){H=0,G=0,it=null,vt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var st={N:12,ROAD:18,BLOCK:92,SIDEWALK:5,SEED:20261105};st.PITCH=st.BLOCK+st.ROAD;st.HALF=st.N*st.PITCH/2;st.EDGE=st.HALF+st.ROAD/2;st.SHORE=st.EDGE+28;st.WATER_Y=-2.5;var ee={GRAVITY:25,DRAG:.003,DIVE_DRAG:.0016,MAX_SPEED:90,RUN:8.5,SPRINT:13,GROUND_ACCEL:12,AIR_ACCEL:7,JUMP:11.5,ROPE_MAX:90,ROPE_MIN:6,SWING_ASSIST:6,SWING_STEER:9,ZIP_SPEED:52,WALL_RUN:12.5,LOOK_STEER:11,HALF_W:.32,HALF_H:.9},fa={range:{name:"Web Range",desc:"Longer web lines",values:[90,102,115,128],prices:[150,320,650]},power:{name:"Swing Power",desc:"More momentum per swing",values:[6,7.5,9,10.5],prices:[200,420,800]},zip:{name:"Zip Speed",desc:"Faster point-zips",values:[52,62,72,84],prices:[150,320,650]}},Xn=[{id:"courier",name:"Courier",price:0,main:3422794,accent:16742938,visor:3729663},{id:"midnight",name:"Midnight",price:250,main:1055290,accent:10466559,visor:16773242},{id:"lime",name:"Neon Lime",price:400,main:1908508,accent:10944302,visor:16726736},{id:"arctic",name:"Arctic",price:600,main:15331058,accent:2795519,visor:1710618},{id:"gold",name:"Gold Rush",price:1200,main:2759948,accent:16762161,visor:16777215}];var Il=class{constructor(t=32){this.cs=t,this.boxes=[],this.cells=new Map,this.stamp=1,this._q=[]}key(t,e){return(t+2048)*8192+(e+2048)}addBox(t,e,i,n,s,a,o=null){let l={minX:t,minY:e,minZ:i,maxX:n,maxY:s,maxZ:a,tag:o,id:this.boxes.length,s:0};this.boxes.push(l);let c=this.cs,u=Math.floor(t/c),h=Math.floor(n/c),d=Math.floor(i/c),f=Math.floor(a/c);for(let p=u;p<=h;p++)for(let x=d;x<=f;x++){let m=this.key(p,x),g=this.cells.get(m);g||this.cells.set(m,g=[]),g.push(l)}return l}groundAt(t,e){let i=st.SHORE;return Math.abs(t)<=i&&Math.abs(e)<=i?0:null}queryAABB(t,e,i,n,s,a,o=this._q){o.length=0;let l=++this.stamp,c=this.cs,u=Math.floor(t/c),h=Math.floor(n/c),d=Math.floor(i/c),f=Math.floor(a/c);for(let p=u;p<=h;p++)for(let x=d;x<=f;x++){let m=this.cells.get(this.key(p,x));if(m)for(let g=0;g<m.length;g++){let y=m[g];y.s!==l&&(y.s=l,y.maxX>t&&y.minX<n&&y.maxY>e&&y.minY<s&&y.maxZ>i&&y.minZ<a&&o.push(y))}}return o}raycast(t,e,i,n,s,a,o,l={}){let c=this.cs,u=Math.floor(t/c),h=Math.floor(i/c),d=n>0?1:-1,f=a>0?1:-1,p=n!==0?Math.abs(c/n):1/0,x=a!==0?Math.abs(c/a):1/0,m=n!==0?(n>0?(u+1)*c-t:t-u*c)/Math.abs(n):1/0,g=a!==0?(a>0?(h+1)*c-i:i-h*c)/Math.abs(a):1/0,y=++this.stamp,S=o,_=null,M=0,w=0,v=0,b=n!==0?1/n:1/0,P=s!==0?1/s:1/0,R=a!==0?1/a:1/0,L=0;for(let z=0;z<256;z++){let U=this.cells.get(this.key(u,h));if(U)for(let B=0;B<U.length;B++){let H=U[B];if(H.s===y)continue;H.s=y;let G=(H.minX-t)*b,it=(H.maxX-t)*b,W=Math.min(G,it),J=Math.max(G,it),tt=G<it?-1:1,Tt=0,Ot=0;if(n===0){if(t<H.minX||t>H.maxX)continue;W=-1/0,J=1/0,tt=0}let Y=(H.minY-e)*P,mt=(H.maxY-e)*P;if(s===0){if(e<H.minY||e>H.maxY)continue;Y=-1/0,mt=1/0}let Rt=Math.min(Y,mt),kt=Math.max(Y,mt);Rt>W&&(W=Rt,tt=0,Tt=Y<mt?-1:1,Ot=0),kt<J&&(J=kt);let yt=(H.minZ-i)*R,Ft=(H.maxZ-i)*R;if(a===0){if(i<H.minZ||i>H.maxZ)continue;yt=-1/0,Ft=1/0}let Te=Math.min(yt,Ft),Ht=Math.max(yt,Ft);Te>W&&(W=Te,tt=0,Tt=0,Ot=yt<Ft?-1:1),Ht<J&&(J=Ht),!(J<W||W<0||W>=S)&&(S=W,_=H,M=tt,w=Tt,v=Ot)}let I=Math.min(m,g);if(_&&S<=I||(L=I,L>o))break;m<g?(u+=d,m+=p):(h+=f,g+=x)}return _?(l.t=S,l.x=t+n*S,l.y=e+s*S,l.z=i+a*S,l.nx=M,l.ny=w,l.nz=v,l.box=_,l):null}moveBody(t,e,i,n,s,a){a.ground=!1,a.ceil=!1,a.wall=!1,a.wallNX=0,a.wallNZ=0,a.wallBox=null,a.groundBox=null,a.impactX=0,a.impactY=0,a.impactZ=0,t.x+=e.x*i,this._resolve(t,e,n,s,0,a),t.z+=e.z*i,this._resolve(t,e,n,s,2,a),t.y+=e.y*i,this._resolve(t,e,n,s,1,a);let o=this.groundAt(t.x,t.z);return o!==null&&t.y-s<o&&t.y-s>o-3&&(e.y<0&&(a.impactY=Math.max(a.impactY,-e.y)),t.y=o+s,e.y<0&&(e.y=0),a.ground=!0),a}_resolve(t,e,i,n,s,a){let o=this.queryAABB(t.x-i,t.y-n,t.z-i,t.x+i,t.y+n,t.z+i);if(o.length)for(let l=0;l<o.length;l++){let c=o[l];if(c.maxX>t.x-i&&c.minX<t.x+i&&c.maxY>t.y-n&&c.minY<t.y+n&&c.maxZ>t.z-i&&c.minZ<t.z+i)if(s===0){let u=c.minX-i-t.x,h=c.maxX+i-t.x;(e.x>0?!0:e.x<0?!1:-u<h)?(t.x+=u-1e-4,a.wallNX=-1):(t.x+=h+1e-4,a.wallNX=1),a.impactX=Math.max(a.impactX,Math.abs(e.x)),e.x=0,a.wall=!0,a.wallNZ=0,a.wallBox=c}else if(s===2){let u=c.minZ-i-t.z,h=c.maxZ+i-t.z;(e.z>0?!0:e.z<0?!1:-u<h)?(t.z+=u-1e-4,a.wallNZ=-1):(t.z+=h+1e-4,a.wallNZ=1),a.impactZ=Math.max(a.impactZ,Math.abs(e.z)),e.z=0,a.wall=!0,a.wallNX=0,a.wallBox=c}else{let u=c.minY-n-t.y,h=c.maxY+n-t.y;(e.y>0?!0:e.y<0?!1:-u<h)?(t.y+=u-1e-4,a.ceil=!0):(t.y+=h+1e-4,a.ground=!0,a.groundBox=c,a.impactY=Math.max(a.impactY,Math.abs(e.y))),e.y=0}}}overlaps(t,e,i,n,s){return this.queryAABB(t-n,e-s,i-n,t+n,e+s,i+n).length>0}};var Dt=(r,t,e)=>r<t?t:r>e?e:r,pa=(r,t,e)=>r+(t-r)*e,Rf=(r,t,e)=>{let i=Dt((e-r)/(t-r),0,1);return i*i*(3-2*i)},Me=(r,t)=>1-Math.exp(-r*t);function Dl(r,t){let e=t-r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var ms=(r,t,e)=>r+Dl(r,t)*e;function rv(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Si=class{constructor(t){this.next=rv(t)}float(t=0,e=1){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.float(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}};function Ll(r,t){let e=Math.imul(r|0,374761393)+Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Cf(r,t){let e=Math.floor(r),i=Math.floor(t),n=r-e,s=t-i,a=n*n*(3-2*n),o=s*s*(3-2*s),l=Ll(e,i),c=Ll(e+1,i),u=Ll(e,i+1),h=Ll(e+1,i+1);return pa(pa(l,c,a),pa(u,h,a),o)}var k1=new A(0,1,0);function Vh(r){r=Math.max(0,Math.ceil(r));let t=Math.floor(r/60),e=r%60;return`${t}:${e<10?"0":""}${e}`}var Zt={uSunDir:{value:new A(.4,.8,.3).normalize()},uSunColor:{value:new At(1,.95,.85)},uSkyAmb:{value:new At(.45,.5,.6)},uGroundAmb:{value:new At(.28,.26,.24)},uFogColor:{value:new At(.7,.8,.9)},uZenith:{value:new At(.3,.5,.8)},uFogDensity:{value:.0011},uNight:{value:0},uTime:{value:0},uShadowMap:{value:null},uShadowMatrix:{value:new zt},uShadowOn:{value:0},uShadowCenter:{value:new A},uShadowRadius:{value:200},uShadowTexel:{value:new nt(1/1024,1/1024)},uInterior:{value:1}},gs=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform vec3 uGroundAmb;
uniform vec3 uFogColor;
uniform vec3 uZenith;
uniform float uFogDensity;
uniform float uNight;
uniform float uTime;
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowOn;
uniform vec3 uShadowCenter;
uniform float uShadowRadius;
uniform vec2 uShadowTexel;
uniform float uInterior;

// 1 = lit by the sun, 0 = in shadow. 2x2 PCF with a normal offset.
float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  float d = length(wp.xz - uShadowCenter.xz);
  if (d > uShadowRadius) return 1.0;
  vec4 sc = uShadowMatrix * vec4(wp + n * 0.3, 1.0);
  vec3 c = sc.xyz;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  float z = c.z - 0.00012;
  float s = step(z, texture2D(uShadowMap, c.xy + vec2(-0.7, -0.7) * uShadowTexel).r)
          + step(z, texture2D(uShadowMap, c.xy + vec2(0.7, -0.7) * uShadowTexel).r)
          + step(z, texture2D(uShadowMap, c.xy + vec2(-0.7, 0.7) * uShadowTexel).r)
          + step(z, texture2D(uShadowMap, c.xy + vec2(0.7, 0.7) * uShadowTexel).r);
  s *= 0.25;
  return mix(s, 1.0, smoothstep(uShadowRadius * 0.78, uShadowRadius, d));
}
vec3 applyLightS(vec3 albedo, vec3 n, float sh) {
  float ndl = max(dot(n, uSunDir), 0.0) * sh;
  vec3 amb = mix(uGroundAmb, uSkyAmb, n.y * 0.5 + 0.5);
  // a little sky bounce is blocked in shadowed areas too (cheap AO feel)
  amb *= mix(0.82, 1.0, sh);
  return albedo * (amb + uSunColor * ndl * 1.12);
}
vec3 applyLight(vec3 albedo, vec3 n) { return applyLightS(albedo, n, 1.0); }

// Colour of the sky in a direction (used for glass / water reflections).
vec3 skyColor(vec3 d) {
  float y = max(d.y, 0.0);
  vec3 c = mix(uFogColor, uZenith, pow(y, 0.55));
  float s = max(dot(d, uSunDir), 0.0);
  c += uSunColor * pow(s, 8.0) * 0.35 * (1.0 - uNight);
  return c;
}

// Exponential height fog with sun scattering (golden haze toward the sun).
vec3 applyFog(vec3 col, vec3 wp) {
  vec3 dv = wp - cameraPosition;
  float dist = length(dv);
  float k = 0.011;
  float h0 = max(cameraPosition.y, 0.0);
  float dh = dv.y;
  float hf = exp(-k * h0) * (abs(dh) > 0.5 ? (1.0 - exp(-k * dh)) / (k * dh) : 1.0);
  float b = uFogDensity * dist;
  float f = 1.0 - exp(-b * b * 0.5 - b * 1.15 * clamp(hf, 0.0, 1.5));
  vec3 V = dv / max(dist, 1e-3);
  float sun = pow(max(dot(V, uSunDir), 0.0), 7.0);
  vec3 fc = uFogColor + uSunColor * sun * 0.5 * (1.0 - uNight);
  return mix(col, fc, clamp(f, 0.0, 1.0));
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise2(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
`;function ke({emitDay:r=.35,emitNight:t=1.4,side:e=rn,transparent:i=!1,opacity:n=1,tintMask:s=!1,shadows:a=!0}={}){return new Pe({defines:{...s?{TINT_MASK:1}:{},...a?{RECEIVE_SHADOW:1}:{}},uniforms:{...Zt,uEmitDay:{value:r},uEmitNight:{value:t},uOpacity:{value:n}},side:e,transparent:i,vertexShader:`
      attribute vec3 aColor;
      attribute float aEmit;
      #ifdef TINT_MASK
        attribute float aTint;
      #endif
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vWorld;
      varying float vEmit;
      void main() {
        vec4 p = vec4(position, 1.0);
        vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p;
          n = mat3(instanceMatrix) * n;
        #endif
        vec4 wp = modelMatrix * p;
        vWorld = wp.xyz;
        vNormal = normalize(mat3(modelMatrix) * n);
        vColor = aColor;
        #ifdef USE_INSTANCING_COLOR
          #ifdef TINT_MASK
            vColor *= mix(vec3(1.0), instanceColor, aTint);
          #else
            vColor *= instanceColor;
          #endif
        #endif
        vEmit = aEmit;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      ${gs}
      uniform float uEmitDay;
      uniform float uEmitNight;
      uniform float uOpacity;
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vWorld;
      varying float vEmit;
      void main() {
        vec3 n = normalize(vNormal);
        if (!gl_FrontFacing) n = -n;
        float sh = 1.0;
        #ifdef RECEIVE_SHADOW
          sh = shadowAt(vWorld, n);
        #endif
        vec3 col = applyLightS(vColor, n, sh);
        col += vColor * vEmit * mix(uEmitDay, uEmitNight, uNight);
        col = applyFog(col, vWorld);
        gl_FragColor = vec4(col, uOpacity);
      }
    `})}var V1=new zt,Pf=new Qt,If=new Ue,Lf=new A,Df=new A;function $(r=0,t=0,e=0,i=0,n=0,s=0,a=1,o=1,l=1){return If.set(i,n,s),Pf.setFromEuler(If),Df.set(r,t,e),Lf.set(a,o,l),new zt().compose(Df,Pf,Lf)}var me=class{constructor(t={}){this.pos=[],this.nor=[],this.col=[],this.emit=[],this.extraDefs=t,this.extra={};for(let e of Object.keys(t))this.extra[e]=[]}add(t,{color:e=16777215,emit:i=0,matrix:n=null,extra:s={}}={}){let a=t.index?t.toNonIndexed():t.clone();n&&a.applyMatrix4(n);let o=new At(e),l=a.attributes.position.array,c=a.attributes.normal.array,u=l.length/3;for(let h=0;h<u;h++){this.pos.push(l[h*3],l[h*3+1],l[h*3+2]),this.nor.push(c[h*3],c[h*3+1],c[h*3+2]),this.col.push(o.r,o.g,o.b),this.emit.push(i);for(let d of Object.keys(this.extraDefs)){let f=this.extraDefs[d],p=s[d]!==void 0?s[d]:0;if(f===1)this.extra[d].push(typeof p=="number"?p:p[0]);else for(let x=0;x<f;x++)this.extra[d].push(p[x]||0)}}return a.dispose(),this}build(){let t=new Ee;t.setAttribute("position",new qt(this.pos,3)),t.setAttribute("normal",new qt(this.nor,3)),t.setAttribute("aColor",new qt(this.col,3)),t.setAttribute("aEmit",new qt(this.emit,1));for(let e of Object.keys(this.extraDefs))t.setAttribute(e,new qt(this.extra[e],this.extraDefs[e]));return t.computeBoundingSphere(),t}};function Le(r,t,e,{dynamic:i=!1,colors:n=!1}={}){let s=new Mn(r,t,e);return i&&s.instanceMatrix.setUsage($i),n&&(s.instanceColor=new wi(new Float32Array(e*3).fill(1),3),i&&s.instanceColor.setUsage($i)),s.frustumCulled=!1,s}var Nf=1,ma=class{constructor(t,e=1536,i=210){this.renderer=t,this.radius=i,this.size=e,this.rt=new Qe(e,e,{depthBuffer:!0,stencilBuffer:!1}),this.rt.depthTexture=new Zi(e,e),this.rt.depthTexture.type=Di,this.rt.depthTexture.minFilter=ze,this.rt.depthTexture.magFilter=ze,this.cam=new Sn(-i,i,i,-i,1,2600),this.cam.layers.set(Nf),this.mat=new Ae({colorWrite:!1,side:$e}),this.center=new A(1e9,0,0),this.sun=new A,this.bias=new zt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.enabled=!0,Zt.uShadowMap.value=this.rt.depthTexture,Zt.uShadowTexel.value.set(1/e,1/e),Zt.uShadowRadius.value=i}setEnabled(t){this.enabled=t,Zt.uShadowOn.value=t?1:0,t&&this.center.set(1e9,0,0)}update(t,e,i,n){if(!this.enabled)return;let s=Math.hypot(e.x-this.center.x,e.z-this.center.z)>45,a=this.sun.angleTo(i)>.0035;if(!s&&!a)return;let o=8;this.center.set(Math.round(e.x/o)*o,0,Math.round(e.z/o)*o),this.sun.copy(i);let l=this.cam;l.position.copy(this.center).addScaledVector(i,1300),l.up.set(0,1,0),Math.abs(i.y)>.99&&l.up.set(0,0,1),l.lookAt(this.center),l.updateMatrixWorld(),l.updateProjectionMatrix();let c=this.renderer,u=c.getRenderTarget(),h=t.overrideMaterial,d=c.autoClear;t.overrideMaterial=this.mat,c.autoClear=!0,c.setRenderTarget(this.rt),c.render(t,l),c.setRenderTarget(u),t.overrideMaterial=h,c.autoClear=d,Zt.uShadowMatrix.value.copy(this.bias).multiply(l.projectionMatrix).multiply(l.matrixWorldInverse),Zt.uShadowCenter.value.copy(this.center),Zt.uShadowOn.value=1}};function Ei(r){return r.traverse(t=>t.layers.enable(Nf)),r}var ye=r=>-st.HALF+r*st.PITCH,Ti=r=>ye(r)+st.PITCH/2,qh=r=>Math.floor((r+st.HALF)/st.PITCH),He={GLASS:0,OFFICE:1,BRICK:2,DECO:3},av={[He.GLASS]:[[.33,.45,.56],[.28,.48,.5],[.42,.44,.5],[.24,.33,.48],[.5,.55,.58]],[He.OFFICE]:[[.64,.63,.6],[.72,.69,.63],[.52,.54,.57],[.6,.58,.55]],[He.BRICK]:[[.56,.29,.21],[.63,.37,.26],[.47,.27,.22],[.7,.52,.37],[.5,.4,.34]],[He.DECO]:[[.83,.75,.6],[.76,.7,.62],[.69,.61,.5],[.8,.66,.55]]},Nl=0,Wh=1,Xh=2,zl=class{constructor(t,e){this.scene=t,this.world=e,this.rng=new Si(st.SEED),this.blocks=[],this.tiers=[],this.buildings=[],this.doors=[],this.lamps=[],this.trees=[],this.roofProps={boxes:[],towers:[],antennas:[],billboards:[],solar:[],dishes:[],helipads:[],planters:[]},this.fireEscapes=[],this.deco=new Si(st.SEED+77),this.landmarks={},this.layoutBlocks(),this.generateBuildings(),this.addLandmarks(),this.buildBuildingMesh(),this.buildGround(),this.buildWater(),this.buildStreetProps(),this.buildRoofProps(),this.buildRoofExtras(),this.buildFireEscapes(),this.buildBridge()}heightAt(t,e){let i=Math.hypot(t+55,e+55),n=Math.hypot(t-340,e-290),s=Math.hypot(t+380,e-380),a=210*Math.exp(-(i*i)/(420*210)),o=120*Math.exp(-(n*n)/(280*140)),l=70*Math.exp(-(s*s)/28800),c=12+Cf(t*.012+3.1,e*.012-1.7)*18;return Math.max(a,o,l)+c}layoutBlocks(){let t=st.N,e=this.rng;for(let i=0;i<t;i++){this.blocks[i]=[];for(let n=0;n<t;n++){let s=Ti(i),a=Ti(n),o=Nl;(i===8||i===9)&&(n===2||n===3)||Math.hypot(s,a)>260&&e.chance(.07)?o=Wh:Math.hypot(s+55,a+55)<260&&e.chance(.06)&&(o=Xh),this.blocks[i][n]={i,j:n,cx:s,cz:a,type:o,height:this.heightAt(s,a),buildings:[]}}}this.blocks[4][5].type=Xh,this.blocks[5][5].type=Nl}splitLots(t,e,i,n,s=0){let a=t.x1-t.x0,o=t.z1-t.z0;if(a<=e*1.5&&o<=e*1.5||s>6){n.push(t);return}let l=a>o*1.15?!0:o>a*1.15?!1:i.chance(.5),c=i.chance(.45)?i.float(2.5,6):0,u=i.float(.36,.64);if(l){let h=t.x0+a*u;this.splitLots({x0:t.x0,x1:h-c/2,z0:t.z0,z1:t.z1},e,i,n,s+1),this.splitLots({x0:h+c/2,x1:t.x1,z0:t.z0,z1:t.z1},e,i,n,s+1)}else{let h=t.z0+o*u;this.splitLots({x0:t.x0,x1:t.x1,z0:t.z0,z1:h-c/2},e,i,n,s+1),this.splitLots({x0:t.x0,x1:t.x1,z0:h+c/2,z1:t.z1},e,i,n,s+1)}}generateBuildings(){let t=this.rng,e=st.BLOCK/2-st.SIDEWALK;for(let i=0;i<st.N;i++)for(let n=0;n<st.N;n++){let s=this.blocks[i][n];if(s.type!==Nl||i===5&&n===5)continue;let a={x0:s.cx-e,x1:s.cx+e,z0:s.cz-e,z1:s.cz+e},o=s.height,l=o>130?44:o>60?30:21,c=[];this.splitLots(a,l,t,c);for(let u of c)this.makeBuilding(s,u,a)}}makeBuilding(t,e,i){let n=this.rng,s=.6,a={x0:Math.abs(e.x0-i.x0)<s,x1:Math.abs(e.x1-i.x1)<s,z0:Math.abs(e.z0-i.z0)<s,z1:Math.abs(e.z1-i.z1)<s},o=U=>U?n.chance(.25)?n.float(.5,2):0:n.float(.5,2.5),l={x0:e.x0+o(a.x0),x1:e.x1-o(a.x1),z0:e.z0+o(a.z0),z1:e.z1-o(a.z1)},c=l.x1-l.x0,u=l.z1-l.z0;if(c<7||u<7)return;let h=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2,f=this.heightAt(h,d)*n.float(.55,1.25);f=Math.max(9,Math.round(f/3.5)*3.5);let p=Math.min(c,u)*7;f=Math.min(f,p);let x;f>110?x=n.chance(.6)?He.GLASS:n.chance(.5)?He.DECO:He.OFFICE:f>45?x=n.pick([He.GLASS,He.OFFICE,He.OFFICE,He.DECO,He.BRICK]):x=n.pick([He.BRICK,He.BRICK,He.OFFICE,He.DECO]);let m=n.pick(av[x]),g=n.float(.9,1.1),y=[m[0]*g,m[1]*g,m[2]*g],S=x===He.GLASS?n.float(3.4,4):n.float(3.2,3.8),_=x===He.BRICK?n.float(2.6,3.4):x===He.GLASS?n.float(1.6,2.4):n.float(2.2,3),M=n.float(0,100),w=n.float(.25,.65),v={tiers:[],fp:l,height:f,style:x,i:t.i,j:t.j,id:this.buildings.length},b={...l},P=0,R=1;f>70?R=n.chance(.75)?f>150&&n.chance(.6)?3:2:1:f>35&&n.chance(.25)&&(R=2);let L=R===1?[1]:R===2?[n.float(.5,.75),1]:[n.float(.4,.55),n.float(.7,.85),1];for(let U=0;U<R;U++){let I=U===R-1?f:Math.round(f*L[U]/3.5)*3.5;if(I-P<4)continue;let B={minX:b.x0,maxX:b.x1,minZ:b.z0,maxZ:b.z1,minY:P,maxY:I,color:y,style:x,floorH:S,winW:_,seed:M+U*7.1,lit:w,top:U===R-1,building:v};this.tiers.push(B),v.tiers.push(B),B.box=this.world.addBox(B.minX,B.minY,B.minZ,B.maxX,B.maxY,B.maxZ,B),P=I;let H=b.x1-b.x0,G=b.z1-b.z0,it=Dt(n.float(2.5,H*.18),2,H*.3),W=Dt(n.float(2.5,G*.18),2,G*.3);if(b={x0:b.x0+it,x1:b.x1-it,z0:b.z0+W,z1:b.z1-W},b.x1-b.x0<8||b.z1-b.z0<8)break}v.top=v.tiers[v.tiers.length-1],v.height=v.top.maxY,this.buildings.push(v),t.buildings.push(v);let z=[];a.x0&&l.x0-i.x0<2.5&&z.push({x:l.x0-2.2,z:d,nx:-1,nz:0}),a.x1&&i.x1-l.x1<2.5&&z.push({x:l.x1+2.2,z:d,nx:1,nz:0}),a.z0&&l.z0-i.z0<2.5&&z.push({x:h,z:l.z0-2.2,nx:0,nz:-1}),a.z1&&i.z1-l.z1<2.5&&z.push({x:h,z:l.z1+2.2,nx:0,nz:1}),v.doors=z.map(U=>({...U,building:v})),this.doors.push(...v.doors),this.planRoof(v),this.planDecor(v)}planRoof(t){let e=this.rng,i=t.top,n=i.maxX-i.minX,s=i.maxZ-i.minZ,a=i.maxY,o=this.roofProps;if(n>10&&s>10&&e.chance(.7)){let c=e.float(3,5),u=e.float(3,4.5),h=3,d=e.float(i.minX+c/2+2,i.maxX-c/2-2),f=e.float(i.minZ+u/2+2,i.maxZ-u/2-2);o.boxes.push({x:d,y:a+h/2,z:f,w:c,h,d:u,c:[.55,.53,.5],collide:!0})}let l=Math.floor(e.float(0,Math.min(5,n*s/150)));for(let c=0;c<l;c++){let u=e.float(1.6,3),h=e.float(i.minX+2,i.maxX-2),d=e.float(i.minZ+2,i.maxZ-2);o.boxes.push({x:h,y:a+.6,z:d,w:u,h:1.2,d:u*e.float(.7,1.3),c:[.72,.73,.74],collide:!0})}if(t.height<75&&n>9&&s>9&&e.chance(.38)){let c=e.float(i.minX+3.5,i.maxX-3.5),u=e.float(i.minZ+3.5,i.maxZ-3.5);o.towers.push({x:c,y:a,z:u,s:e.float(.85,1.2)})}if(t.height>60&&e.chance(.35)){let c=e.int(1,3);for(let u=0;u<c;u++)o.antennas.push({x:e.float(i.minX+1,i.maxX-1),y:a,z:e.float(i.minZ+1,i.maxZ-1),h:e.float(6,16+t.height*.06)})}if(t.height>25&&t.height<110&&n>14&&e.chance(.13)){let c=n>=s,u=Math.min(c?n:s,18)*.85;o.billboards.push({x:c?(i.minX+i.maxX)/2:e.chance(.5)?i.minX+1.2:i.maxX-1.2,z:c?e.chance(.5)?i.minZ+1.2:i.maxZ-1.2:(i.minZ+i.maxZ)/2,y:a,len:u,rotY:c?0:Math.PI/2,ad:e.int(0,4)})}}planDecor(t){let e=this.deco,i=t.top,n=t.tiers[0],s=i.maxX-i.minX,a=i.maxZ-i.minZ,o=this.roofProps;if(n.style===He.BRICK&&n.maxY>13&&n.maxY<75&&t.doors.length&&e.chance(.42)){let l=e.pick(t.doors),c=l.nx!==0?n.maxZ-n.minZ:n.maxX-n.minX;if(c>9){let u=(e.chance(.5)?1:-1)*e.float(c*.18,c*.32),h=l.nx!==0?l.nx>0?n.maxX:n.minX:(n.minX+n.maxX)/2+u,d=l.nz!==0?l.nz>0?n.maxZ:n.minZ:(n.minZ+n.maxZ)/2+u;this.fireEscapes.push({x:h,z:d,nx:l.nx,nz:l.nz,y0:n.floorH*1,y1:n.maxY-n.floorH*.6,fh:n.floorH})}}if(t.height<70&&s>12&&a>12&&e.chance(.22)){let l=Math.min(4,Math.floor((a-6)/2.6)),c=Math.min(6,Math.floor((s-6)/1.25));l>0&&c>1&&o.solar.push({x:(i.minX+i.maxX)/2+e.float(-1,1),y:i.maxY,z:(i.minZ+i.maxZ)/2+e.float(-1,1),rows:l,cols:c})}else if(t.height<55&&s>12&&a>12&&e.chance(.14))for(let l=0;l<4;l++){let c=e.float(i.minX+2.5,i.maxX-2.5),u=e.float(i.minZ+2.5,i.maxZ-2.5);o.planters.push({x:c,y:i.maxY,z:u,w:e.float(1.6,3),d:e.float(.8,1.4)}),e.chance(.6)&&this.trees.push({x:c,z:u,y:i.maxY+.6,s:e.float(.45,.65)})}t.height>120&&s>18&&a>18&&e.chance(.45)&&o.helipads.push({x:(i.minX+i.maxX)/2,y:i.maxY,z:(i.minZ+i.maxZ)/2,r:Math.min(s,a)*.36}),e.chance(.18)&&o.dishes.push({x:e.float(i.minX+1.5,i.maxX-1.5),y:i.maxY,z:e.float(i.minZ+1.5,i.maxZ-1.5),rot:e.float(0,6.28)})}buildRoofExtras(){let t=this.roofProps,e=ke({emitDay:.1,emitNight:.8}),i=new zt,n=new Qt,s=new Ue,a=new A(1,1,1),o=[];for(let l of t.solar)for(let c=0;c<l.rows;c++)for(let u=0;u<l.cols;u++)o.push([l.x+(u-(l.cols-1)/2)*1.25,l.y,l.z+(c-(l.rows-1)/2)*2.6]);if(o.length){let l=new me;l.add(new xt(1.15,.05,1.9),{color:1846602,emit:0,matrix:$(0,.75,0,-.45,0,0)}),l.add(new xt(1.18,.03,1.93),{color:12107462,matrix:$(0,.72,0,-.45,0,0)}),l.add(new xt(.06,.8,.06),{color:8028296,matrix:$(0,.4,.55)}),l.add(new xt(.06,.35,.06),{color:8028296,matrix:$(0,.17,-.55)});let c=Le(l.build(),e,o.length);o.forEach((u,h)=>{i.makeTranslation(u[0],u[1],u[2]),c.setMatrixAt(h,i)}),this.scene.add(Ei(c))}if(t.planters.length){let l=new me;l.add(new xt(1,.6,1),{color:9075302,matrix:$(0,.3,0)}),l.add(new xt(.92,.08,.92),{color:4094514,matrix:$(0,.6,0)});let c=Le(l.build(),e,t.planters.length);t.planters.forEach((u,h)=>{i.compose(new A(u.x,u.y,u.z),n.identity(),new A(u.w,1,u.d)),c.setMatrixAt(h,i)}),this.scene.add(Ei(c))}if(t.dishes.length){let l=new me;l.add(new Wt(.05,.08,1,6),{color:9212312,matrix:$(0,.5,0)}),l.add(new oe(.7,12,6,0,Math.PI*2,0,Math.PI*.32),{color:15264492,matrix:$(0,1.05,.15,-1,0,0)}),l.add(new Wt(.02,.02,.7,4),{color:5593696,matrix:$(0,1.25,.45,-1,0,0)});let c=Le(l.build(),e,t.dishes.length);t.dishes.forEach((u,h)=>{n.setFromEuler(s.set(0,u.rot,0)),i.compose(new A(u.x,u.y,u.z),n,a),c.setMatrixAt(h,i)}),this.scene.add(Ei(c))}if(t.helipads.length){let l=document.createElement("canvas");l.width=l.height=256;let c=l.getContext("2d");c.fillStyle="#3d4248",c.fillRect(0,0,256,256),c.strokeStyle="#f2c230",c.lineWidth=14,c.beginPath(),c.arc(128,128,112,0,Math.PI*2),c.stroke(),c.fillStyle="#ffffff",c.font="bold 150px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("H",128,136);let u=new ai(l),h=new os(1,32);h.rotateX(-Math.PI/2);let d=new Ze({map:u});for(let f of t.helipads){let p=new lt(h,d);p.position.set(f.x,f.y+.06,f.z),p.scale.setScalar(f.r),this.scene.add(p)}}}buildFireEscapes(){let t=this.fireEscapes;if(!t.length)return;let e=2829617,i=new me;i.add(new xt(3,.06,1.25),{color:3421755,matrix:$(0,0,.62)}),i.add(new xt(3,.045,.045),{color:e,matrix:$(0,.95,1.22)}),i.add(new xt(3,.04,.04),{color:e,matrix:$(0,.5,1.22)});for(let x of[-1.48,1.48])i.add(new xt(.045,.045,1.25),{color:e,matrix:$(x,.95,.62)});for(let x=0;x<=5;x++)i.add(new xt(.03,.95,.03),{color:e,matrix:$(-1.48+x*.592,.475,1.22)});for(let x of[-1.48,1.48])i.add(new xt(.03,.95,.03),{color:e,matrix:$(x,.475,.1)});let n=new me;n.add(new xt(1,.05,.62),{color:3421755,matrix:$(0,0,0)}),n.add(new xt(1,.04,.04),{color:e,matrix:$(0,.8,.3)});let s=[],a=[];for(let x of t){let m=Math.atan2(x.nx,x.nz),g=0;for(let y=x.y0;y<=x.y1;y+=x.fh,g++)s.push([x.x,y,x.z,m]),y+x.fh<=x.y1+.01&&a.push([x.x,y,x.z,m,x.fh,g%2?1:-1])}let o=ke({emitDay:0,emitNight:0}),l=Le(i.build(),o,s.length),c=Le(n.build(),o,a.length),u=new zt,h=new Qt,d=new Ue(0,0,0,"YXZ"),f=new A,p=new A;s.forEach((x,m)=>{h.setFromEuler(d.set(0,x[3],0)),u.compose(f.set(x[0],x[1],x[2]),h,p.set(1,1,1)),l.setMatrixAt(m,u)}),a.forEach((x,m)=>{let y=x[4],S=Math.hypot(2.3,y),_=Math.atan2(y,2.3)*x[5];h.setFromEuler(d.set(0,x[3],_)),f.set(0,y/2,.45).applyEuler(new Ue(0,x[3],0)),u.compose(f.add(new A(x[0],x[1],x[2])),h,p.set(S,1,1)),c.setMatrixAt(m,u)}),this.scene.add(l,c)}addLandmarks(){let t=Ti(5),e=Ti(5),i={tiers:[],height:0,style:He.GLASS,i:5,j:5,id:this.buildings.length,landmark:!0},n=[[34,0,70,[.5,.52,.56]],[28,70,150,[.36,.48,.6]],[22,150,235,[.36,.48,.6]],[26,235,243,[.85,.85,.82]],[15,243,300,[.36,.48,.6]]];for(let[s,a,o,l]of n){let c={minX:t-s,maxX:t+s,minZ:e-s,maxZ:e+s,minY:a,maxY:o,color:l,style:o===243?He.OFFICE:He.GLASS,floorH:3.8,winW:2,seed:a*.37,lit:.6,top:o===300,building:i};c.box=this.world.addBox(c.minX,c.minY,c.minZ,c.maxX,c.maxY,c.maxZ,c),this.tiers.push(c),i.tiers.push(c)}i.top=i.tiers[i.tiers.length-1],i.height=300,i.fp={x0:t-34,x1:t+34,z0:e-34,z1:e+34},i.doors=[{x:t-34-2.2,z:e,nx:-1,nz:0,building:i}],this.doors.push(...i.doors),this.buildings.push(i),this.blocks[5][5].buildings.push(i),this.roofProps.antennas.push({x:t,y:300,z:e,h:45,landmark:!0}),this.landmarks.tower={x:t,z:e,top:300,building:i}}buildBuildingMesh(){let t=this.tiers.length,e=new xt(1,1,1),i=new Float32Array(t*3),n=new Float32Array(t*4),s=new Float32Array(t*4),a=new Mn(e,this.makeBuildingMaterial(),t),o=new zt;for(let l=0;l<t;l++){let c=this.tiers[l];o.makeScale(c.maxX-c.minX,c.maxY-c.minY,c.maxZ-c.minZ),o.setPosition((c.minX+c.maxX)/2,(c.minY+c.maxY)/2,(c.minZ+c.maxZ)/2),a.setMatrixAt(l,o),i.set(c.color,l*3),n.set([c.style,c.seed,c.floorH,c.winW],l*4),s.set([c.lit,c.top?1:0,c.minY<.5?1:0,0],l*4)}e.setAttribute("aBColor",new wi(i,3)),e.setAttribute("aBParams",new wi(n,4)),e.setAttribute("aBExtra",new wi(s,4)),a.frustumCulled=!1,this.scene.add(Ei(a)),this.buildingMesh=a,this.buildCornices()}buildCornices(){let t=[];for(let o of this.tiers){let l=o.style===He.GLASS,c=l?.12:.3,u=l?.35:.7,h=l?.35:.65,d=l?[.42,.45,.48]:[Math.min(1,o.color[0]*1.18+.05),Math.min(1,o.color[1]*1.18+.05),Math.min(1,o.color[2]*1.18+.05)],f=o.maxY+.1-h/2,p=o.maxX-o.minX+c*2,x=o.maxZ-o.minZ+c*2,m=(o.minX+o.maxX)/2,g=(o.minZ+o.maxZ)/2,y=(x-(c+u))/2,S=(p-(c+u))/2;if(t.push([m,f,g-y,p,h,c+u,d],[m,f,g+y,p,h,c+u,d]),t.push([m-S,f,g,c+u,h,x-2*(c+u),d],[m+S,f,g,c+u,h,x-2*(c+u),d]),!l&&o.maxY-o.minY>20&&o.minY<1){let _=o.minY+Math.round((o.maxY-o.minY)*.08/o.floorH)*o.floorH+.1,M=[d[0]*.95,d[1]*.95,d[2]*.95];t.push([m,_,o.minZ-.1,p-.4,.35,.4,M],[m,_,o.maxZ+.1,p-.4,.35,.4,M]),t.push([o.minX-.1,_,g,.4,.35,x-.4,M],[o.maxX+.1,_,g,.4,.35,x-.4,M])}}let e=new me;e.add(new xt(1,1,1),{color:16777215});let i=Le(e.build(),ke({emitDay:0,emitNight:0}),t.length,{colors:!0}),n=new zt,s=new At,a=new Qt;t.forEach((o,l)=>{n.compose(new A(o[0],o[1],o[2]),a,new A(o[3],o[4],o[5])),i.setMatrixAt(l,n),i.setColorAt(l,s.setRGB(o[6][0],o[6][1],o[6][2]))}),this.scene.add(Ei(i))}makeBuildingMaterial(){return new Pe({uniforms:{...Zt},vertexShader:`
        attribute vec3 aBColor;
        attribute vec4 aBParams;
        attribute vec4 aBExtra;
        varying vec3 vW;
        varying vec3 vN;
        varying vec3 vLocal;
        varying vec3 vSize;
        varying vec3 vCol;
        varying vec4 vP;
        varying vec4 vE;
        void main() {
          vec3 s = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          vN = normal;
          vLocal = position * s;
          vSize = s;
          vCol = aBColor;
          vP = aBParams;
          vE = aBExtra;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${gs}
        varying vec3 vW;
        varying vec3 vN;
        varying vec3 vLocal;
        varying vec3 vSize;
        varying vec3 vCol;
        varying vec4 vP;
        varying vec4 vE;

        // anti-aliased box mask on [a,b]
        float aaBand(float x, float a, float b, float w) {
          return smoothstep(a - w, a + w, x) * (1.0 - smoothstep(b - w, b + w, x));
        }

        // Interior mapping: ray-march a virtual room behind the window.
        // ro = point on the window plane in room space, rd = view ray (z into the room)
        vec3 roomColor(vec3 ro, vec3 rd, vec3 room, vec2 id, float lit, float daylight) {
          vec3 tw;
          tw.x = rd.x > 0.0 ? (room.x - ro.x) / rd.x : -ro.x / min(rd.x, -1e-4);
          tw.y = rd.y > 0.0 ? (room.y - ro.y) / rd.y : -ro.y / min(rd.y, -1e-4);
          tw.z = room.z / max(rd.z, 1e-3);
          float t = min(tw.x, min(tw.y, tw.z));
          vec3 hp = ro + rd * t;
          float r1 = hash12(id * 1.37);
          float r2 = hash12(id * 2.71 + 5.0);
          vec3 wallC = mix(vec3(0.78, 0.74, 0.66), mix(vec3(0.55, 0.62, 0.7), vec3(0.75, 0.6, 0.5), r2), step(0.55, r1));
          vec3 c;
          if (t == tw.z) {
            c = wallC * 0.92;
            // furniture / shelves silhouette on the back wall
            float fx = hp.x / room.x;
            if (hp.y < room.y * (0.3 + r2 * 0.25) && abs(fx - (0.3 + r1 * 0.4)) < 0.22) c = mix(vec3(0.25, 0.2, 0.17), vec3(0.4, 0.42, 0.46), r2) ;
            if (hp.y > room.y * 0.45 && hp.y < room.y * 0.75 && abs(fx - (0.7 - r1 * 0.4)) < 0.12) c = vec3(0.2 + r2 * 0.5, 0.3, 0.45 - r2 * 0.2); // picture
          } else if (t == tw.y) {
            c = rd.y > 0.0 ? vec3(0.86, 0.85, 0.82) : mix(vec3(0.4, 0.3, 0.22), vec3(0.32, 0.33, 0.36), r1);
          } else {
            c = wallC * 0.8;
          }
          float depth = clamp(hp.z / room.z, 0.0, 1.0);
          // daytime: rooms are dim compared to outside. night: lights on or off
          vec3 dayLight = vec3(0.32, 0.33, 0.36) * daylight * (1.0 - depth * 0.45);
          vec3 lamp = mix(vec3(1.0, 0.78, 0.5), vec3(0.8, 0.88, 1.0), step(0.8, r2)) * 1.45;
          float ceilGlow = (t == tw.y && rd.y > 0.0) ? 1.35 : 1.0;
          vec3 nightL = lamp * lit * ceilGlow * (1.0 - depth * 0.35);
          return c * (dayLight + nightL * uNight + 0.03);
        }

        void main() {
          vec3 n = normalize(vN);
          vec3 base = vCol;
          vec3 col;
          vec3 V = normalize(vW - cameraPosition);
          float distCam = length(vW - cameraPosition);
          if (n.y > 0.5) {
            // Roof: tar/gravel, lighter parapet rim, vents
            float g = hash12(floor(vW.xz * 1.5));
            vec2 e = vSize.xz * 0.5 - abs(vLocal.xz);
            float rim = 1.0 - step(0.6, min(e.x, e.y));
            vec3 roof = vec3(0.3, 0.3, 0.31) + g * 0.05 + vnoise2(vW.xz * 0.15) * 0.06;
            col = mix(roof, base * 1.05, rim);
            col = applyLightS(col, n, shadowAt(vW, n));
          } else if (n.y < -0.5) {
            col = applyLight(base * 0.4, n);
          } else {
            float style = floor(vP.x + 0.5);
            // varyings are slightly jittered by interpolation: snap before hashing
            float seed = floor(vP.y * 10.0 + 0.5) * 0.1;
            float floorH = vP.z;
            float winW = vP.w;
            bool xFace = abs(n.x) > 0.5;
            vec3 T = vec3(-n.z, 0.0, n.x); // horizontal tangent (right when facing the wall)
            float u = dot(vLocal, T);
            float width = xFace ? vSize.z : vSize.x;
            u += width * 0.5;
            float yLocal = vLocal.y + vSize.y * 0.5;
            float cols = max(1.0, floor(width / winW));
            float spacing = width / cols;
            vec2 g = vec2(u / spacing, yLocal / floorH);
            vec2 cell = floor(g);
            vec2 f = fract(g);
            vec2 fw = fwidth(g);
            vec4 wr;
            if (style < 0.5) wr = vec4(0.04, 0.96, 0.12, 0.97);
            else if (style < 1.5) wr = vec4(0.14, 0.86, 0.3, 0.86);
            else if (style < 2.5) wr = vec4(0.27, 0.73, 0.26, 0.8);
            else wr = vec4(0.22, 0.78, 0.18, 0.9);
            float win = aaBand(f.x, wr.x, wr.y, fw.x) * aaBand(f.y, wr.z, wr.w, fw.y);
            float coverage = (wr.y - wr.x) * (wr.w - wr.z);
            float far = smoothstep(0.18, 0.5, max(fw.x, fw.y));
            float topGap = vSize.y - yLocal;
            bool groundFloor = vE.z > 0.5 && yLocal < floorH * 1.2;
            float parapet = step(topGap, 1.1);
            win *= 1.0 - parapet;
            float edgeDist = width * 0.5 - abs(u - width * 0.5);
            if (style > 0.5 && edgeDist < 0.7) win = 0.0;
            float rnd = hash12(cell + seed);

            // ---- wall material
            vec3 wall = base * (0.93 + 0.07 * hash12(vec2(cell.y, seed)));
            float detail = 1.0 - smoothstep(25.0, 70.0, distCam);
            if (style > 1.5 && style < 2.5) {
              // brick courses
              float by = yLocal / 0.14;
              float bx = (u + step(0.5, fract(by * 0.5)) * 0.22) / 0.44;
              float mortar = max(1.0 - aaBand(fract(by), 0.12, 1.0, fwidth(by)), 1.0 - aaBand(fract(bx), 0.06, 1.0, fwidth(bx)));
              wall *= 1.0 - mortar * 0.22 * detail;
              wall *= 0.9 + 0.2 * hash12(floor(vec2(bx, by))) * detail;
            } else if (style > 0.5) {
              // concrete: floor slab bands + panel joints
              float slab = 1.0 - aaBand(f.y, 0.07, 1.0, fw.y);
              wall *= 1.0 + slab * 0.1;
              wall *= 0.95 + vnoise2(vec2(u, yLocal) * 0.8) * 0.1 * detail;
            } else {
              // glass tower: dark spandrel panels between floors
              wall = base * 0.55;
            }
            if (style > 2.5 && fract(g.x) < 0.1) wall *= 1.14; // art-deco piers
            // window frame + sill
            float frame = aaBand(f.x, wr.x - 0.03, wr.y + 0.03, fw.x) * aaBand(f.y, wr.z - 0.04, wr.w + 0.02, fw.y) - win;
            wall = mix(wall, wall * 0.62, clamp(frame, 0.0, 1.0) * (style < 0.5 ? 0.0 : 1.0));
            float sill = aaBand(f.y, wr.z - 0.07, wr.z - 0.02, fw.y) * aaBand(f.x, wr.x - 0.04, wr.y + 0.04, fw.x);
            wall = mix(wall, wall * 1.25 + 0.05, sill * step(0.5, style) * (1.0 - parapet));
            // rain streaks / grime
            float streak = vnoise2(vec2(u * 1.7, yLocal * 0.05 + seed));
            wall *= 1.0 - smoothstep(0.55, 0.9, streak) * 0.16 * (1.0 - far);
            if (parapet > 0.5) wall = wall * 1.12 + 0.02;

            // ---- windows: reflection + interior
            float cosV = max(dot(-V, n), 0.0);
            float F = (style < 0.5 ? 0.25 : 0.06) + (1.0 - (style < 0.5 ? 0.25 : 0.06)) * pow(1.0 - cosV, 5.0);
            vec3 R = reflect(V, n);
            vec3 refl = skyColor(R);
            // reflections of the street / other buildings below the horizon
            refl = mix(refl, uFogColor * 0.45 + uGroundAmb * 0.3, smoothstep(0.08, -0.2, R.y));
            float litW = step(1.0 - vE.x, rnd);
            vec3 glassTint = style < 0.5 ? base * 1.2 + 0.1 : vec3(0.85, 0.9, 0.92);
            vec3 inside;
            if (uInterior > 0.5 && far < 0.99 && win > 0.01) {
              vec3 rd = vec3(dot(V, T), V.y, -dot(V, n));
              float roomD = floorH * 1.4;
              vec3 ro = vec3(f.x * spacing, f.y * floorH, 0.0);
              inside = roomColor(ro, normalize(rd), vec3(spacing, floorH, roomD), cell + seed, litW, 1.0 - uNight);
              // blinds on some windows
              float wv = (f.y - wr.z) / (wr.w - wr.z);
              float blind = step(hash12(cell * 3.1 + seed), 0.35) * step(1.0 - hash12(cell * 1.9 + seed) * 0.6, wv);
              inside = mix(inside, vec3(0.75, 0.72, 0.65) * (0.35 * (1.0 - uNight) + litW * uNight * 1.2), blind);
              inside = mix(inside, vec3(0.05, 0.06, 0.08) + litW * uNight * vec3(0.9, 0.7, 0.45) * 0.5, far);
            } else {
              inside = vec3(0.06, 0.07, 0.09) + litW * uNight * vec3(1.0, 0.78, 0.48) * (0.7 + 0.5 * hash12(cell + 3.0));
            }
            vec3 glass = mix(inside, refl * glassTint, F);
            float sh = shadowAt(vW, n);
            glass += uSunColor * pow(max(dot(R, uSunDir), 0.0), 120.0) * 2.5 * sh * (1.0 - uNight);
            vec3 emit = vec3(0.0);

            if (groundFloor) {
              // storefronts: big windows + glowing signage
              float sf = aaBand(f.x, 0.06, 0.94, fw.x) * aaBand(yLocal / floorH, 0.06, 0.72, fw.y);
              win = sf;
              float hue = hash12(vec2(cell.x, seed * 3.1));
              vec3 shop = 0.5 + 0.5 * cos(6.2831 * (hue + vec3(0.0, 0.33, 0.67)));
              vec3 shopIn = mix(vec3(0.9, 0.85, 0.75), shop, 0.3) * (0.35 + 0.9 * uNight);
              glass = mix(shopIn, refl, F * 0.8);
              float fv = yLocal / floorH;
              if (fv > 0.78 && fv < 0.98) {
                wall = mix(wall, shop * 0.75, 0.85);
                emit += shop * 0.7 * uNight * (0.6 + 0.4 * step(0.5, fract(u * 0.25)));
              }
            }
            win = mix(win, coverage, far);
            glass = mix(glass, mix(vec3(0.07, 0.08, 0.1), refl * glassTint, 0.35) + litW * uNight * vec3(1.0, 0.78, 0.5) * 0.55, far * (1.0 - float(groundFloor)));
            vec3 wallLit = applyLightS(wall, n, sh);
            // glass is not diffusely lit; it shows reflection + interior
            vec3 glassLit = glass * mix(1.0, 0.85, 1.0 - sh);
            col = mix(wallLit, glassLit, win) + emit;
            // ambient occlusion near the street
            col *= mix(0.6, 1.0, smoothstep(0.0, 12.0, vW.y));
          }
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `})}buildGround(){let t=st.N,e=new Uint8Array(t*t*4);for(let m=0;m<t;m++)for(let g=0;g<t;g++){let y=(g*t+m)*4;e[y]=this.blocks[m][g].type*80,e[y+3]=255}let i=new as(e,t,t,zi);i.magFilter=ze,i.minFilter=ze,i.needsUpdate=!0;let n=st.SHORE*2,s=new fi(n,n,1,1);s.rotateX(-Math.PI/2);let a=new Pe({uniforms:{...Zt,uBlocks:{value:i},uHalf:{value:st.HALF},uPitch:{value:st.PITCH},uRoad:{value:st.ROAD},uSide:{value:st.SIDEWALK},uN:{value:st.N},uEdge:{value:st.EDGE}},vertexShader:`
        varying vec3 vW;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${gs}
        uniform sampler2D uBlocks;
        uniform float uHalf, uPitch, uRoad, uSide, uN, uEdge;
        varying vec3 vW;
        float lampPool(float along, float perp) {
          float local = mod(along + uHalf, uPitch) - uPitch * 0.5;
          float lp = clamp(floor(local / 30.0 + 0.5) * 30.0, -30.0, 30.0);
          float da = local - lp;
          float dp = perp - (uRoad * 0.5 + 0.8);
          return exp(-(da * da + dp * dp) / 45.0);
        }
        void main() {
          vec2 p = vW.xz;
          vec3 col;
          float rough = vnoise2(p * 0.7) * 0.06 + vnoise2(p * 0.08) * 0.05;
          vec2 g = mod(p + uHalf, uPitch);       // position within road-to-road cell
          vec2 du = min(g, uPitch - g);            // distance to nearest road centreline
          vec2 sgn = sign(uPitch * 0.5 - g);       // +: just after a road line
          bool outside = abs(p.x) > uEdge || abs(p.y) > uEdge;
          bool roadX = du.x < uRoad * 0.5;         // road running along z
          bool roadZ = du.y < uRoad * 0.5;         // road running along x
          if (outside) {
            // waterfront promenade
            vec2 t = fract(p / 3.0);
            float seam = step(0.96, max(t.x, t.y));
            col = vec3(0.62, 0.6, 0.56) - seam * 0.08 + rough;
            float r = max(abs(p.x), abs(p.y)) - uEdge;
            if (r > 8.0 && r < 20.0) col = mix(col, vec3(0.33, 0.48, 0.24) + rough, 0.9);
          } else if (roadX || roadZ) {
            col = vec3(0.19, 0.195, 0.2) + rough;
            if (roadX && !roadZ) {
              float off = (g.x < uPitch * 0.5 ? g.x : g.x - uPitch);
              float a = abs(off);
              if (abs(a - 0.25) < 0.12) col = vec3(0.85, 0.7, 0.2);
              if (abs(a - uRoad * 0.25) < 0.1 && fract(p.y / 6.0) < 0.5) col = vec3(0.8);
              float dz = du.y - uRoad * 0.5;
              if (dz > 0.0 && dz < 3.5 && fract(p.x * 1.0) < 0.5 && a < uRoad * 0.5 - 0.5) col = vec3(0.82);
              if (dz > 3.8 && dz < 4.3 && a > 0.4) col = vec3(0.8);
            } else if (roadZ && !roadX) {
              float off = (g.y < uPitch * 0.5 ? g.y : g.y - uPitch);
              float a = abs(off);
              if (abs(a - 0.25) < 0.12) col = vec3(0.85, 0.7, 0.2);
              if (abs(a - uRoad * 0.25) < 0.1 && fract(p.x / 6.0) < 0.5) col = vec3(0.8);
              float dx = du.x - uRoad * 0.5;
              if (dx > 0.0 && dx < 3.5 && fract(p.y * 1.0) < 0.5 && a < uRoad * 0.5 - 0.5) col = vec3(0.82);
              if (dx > 3.8 && dx < 4.3 && a > 0.4) col = vec3(0.8);
            }
          } else if (du.x < uRoad * 0.5 + uSide || du.y < uRoad * 0.5 + uSide) {
            // sidewalk tiles + curb
            vec2 t = fract(p / 2.0);
            float seam = step(0.94, max(t.x, t.y));
            col = vec3(0.6, 0.59, 0.57) - seam * 0.07 + rough;
            float curb = min(du.x, du.y) - uRoad * 0.5;
            if (curb < 0.35) col = vec3(0.7, 0.7, 0.68);
          } else {
            vec2 bi = clamp(floor((p + uHalf) / uPitch), 0.0, uN - 1.0);
            float type = texture2D(uBlocks, (bi + 0.5) / uN).r * 255.0 / 80.0;
            if (type > 0.5 && type < 1.5) {
              // park: grass with paths
              col = vec3(0.3, 0.47, 0.22) + vnoise2(p * 0.3) * 0.08 + rough;
              vec2 c = g - uPitch * 0.5;
              float path = min(abs(c.x), abs(c.y));
              float ring = abs(length(c) - 26.0);
              if (path < 1.6 || ring < 1.4) col = vec3(0.68, 0.62, 0.5) + rough;
              if (length(c) < 9.0) col = mix(vec3(0.2, 0.42, 0.55), vec3(0.4, 0.6, 0.7), vnoise2(p * 0.5 + uTime * 0.3));
            } else if (type > 1.5) {
              vec2 t = fract(p / 4.0);
              float seam = step(0.95, max(t.x, t.y));
              col = vec3(0.72, 0.68, 0.62) - seam * 0.1 + rough;
              vec2 c = g - uPitch * 0.5;
              if (length(c) < 7.0) col = mix(vec3(0.25, 0.45, 0.6), vec3(0.5, 0.7, 0.8), vnoise2(p * 0.6 + uTime * 0.4));
            } else {
              col = vec3(0.42, 0.41, 0.4) + rough;
            }
          }
          float sh = shadowAt(vW, vec3(0.0, 1.0, 0.0));
          // contact darkening along building bases (lots start at the sidewalk's inner edge)
          if (!outside) {
            float toLot = min(du.x, du.y) - (uRoad * 0.5 + uSide);
            float inLot = step(0.0, toLot) * step(0.5, 1.0 - float(roadX || roadZ));
            float ao = smoothstep(-2.5, 0.0, toLot) * (1.0 - inLot);
            col *= 1.0 - ao * 0.35;
          }
          col = applyLightS(col, vec3(0.0, 1.0, 0.0), sh);
          // asphalt sheen toward the low sun
          if ((roadX || roadZ) && !outside) {
            vec3 V = normalize(vW - cameraPosition);
            vec3 nn = normalize(vec3((vnoise2(p * 3.0) - 0.5) * 0.08, 1.0, (vnoise2(p * 3.0 + 7.0) - 0.5) * 0.08));
            float sp = pow(max(dot(reflect(V, nn), uSunDir), 0.0), 18.0);
            col += uSunColor * sp * 0.22 * sh * (1.0 - uNight);
          }
          // street lamp pools at night
          float pool = 0.0;
          if (!outside) {
            pool = lampPool(p.y, du.x) + lampPool(p.x, du.y);
          }
          col += vec3(1.0, 0.75, 0.42) * pool * uNight * 0.55;
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),o=new lt(s,a);this.scene.add(o),this.groundMesh=o;let l=ke({emitDay:0,emitNight:0}),c=new me,u=st.SHORE,h=st.WATER_Y,d=-h+.01+3,f=new xt(1,1,1);for(let[m,g,y,S]of[[0,u,2*u,1.2],[0,-u,2*u,1.2],[u,0,1.2,2*u],[-u,0,1.2,2*u]])c.add(f,{color:7301730,matrix:$(m,h-3+d/2,g,0,0,0,y+1.2,d,S)}),c.add(f,{color:3159098,matrix:$(m,1.05,g,0,0,0,y===1.2?.12:y,.08,S===1.2?.12:S)});let p=new xt(.1,1.05,.1);for(let m=-u;m<=u;m+=4)for(let[g,y]of[[m,u],[m,-u],[u,m],[-u,m]])c.add(p,{color:3159098,matrix:$(g,.52,y)});let x=new lt(c.build(),l);this.scene.add(x)}buildWater(){let t=new fi(9e3,9e3,1,1);t.rotateX(-Math.PI/2);let e=new Pe({uniforms:{...Zt},vertexShader:`
        varying vec3 vW;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${gs}
        varying vec3 vW;
        void main() {
          vec2 p = vW.xz;
          float t = uTime;
          float w1 = vnoise2(p * 0.05 + vec2(t * 0.05, t * 0.03));
          float w2 = vnoise2(p * 0.21 - vec2(t * 0.11, -t * 0.07));
          vec3 n = normalize(vec3((w1 - 0.5) * 0.35 + (w2 - 0.5) * 0.25, 1.0, (w2 - 0.5) * 0.35 - (w1 - 0.5) * 0.2));
          vec3 V = normalize(vW - cameraPosition);
          float fres = 0.15 + 0.85 * pow(1.0 - max(dot(-V, n), 0.0), 4.0);
          vec3 deep = mix(vec3(0.05, 0.2, 0.27), vec3(0.02, 0.04, 0.08), uNight);
          vec3 col = mix(deep, uFogColor * 0.95, fres);
          vec3 R = reflect(V, n);
          float spec = pow(max(dot(R, uSunDir), 0.0), 120.0);
          col += uSunColor * spec * 1.2;
          // city light shimmer at night
          float city = smoothstep(2200.0, 600.0, length(p)) * uNight;
          col += vec3(1.0, 0.7, 0.4) * city * 0.25 * smoothstep(0.55, 0.9, w2);
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),i=new lt(t,e);i.position.y=st.WATER_Y,this.scene.add(i)}buildStreetProps(){let t=this.rng,e=st.N,i=st.BLOCK/2-.8;for(let p=0;p<e;p++)for(let x=0;x<e;x++){let{cx:m,cz:g}=this.blocks[p][x];for(let y of[-30,0,30])this.lamps.push({x:m+y,z:g-i,rot:0}),this.lamps.push({x:m+y,z:g+i,rot:Math.PI}),this.lamps.push({x:m-i,z:g+y,rot:-Math.PI/2}),this.lamps.push({x:m+i,z:g+y,rot:Math.PI/2})}let n=new me;n.add(new Wt(.09,.13,7,4),{color:2895926,matrix:$(0,3.5,0)}),n.add(new xt(.1,.1,1.6),{color:2895926,matrix:$(0,6.9,-.75)}),n.add(new xt(.45,.16,.7),{color:16773577,emit:1,matrix:$(0,6.82,-1.45)});let s=Le(n.build(),ke({emitDay:.05,emitNight:2.2}),this.lamps.length),a=new zt,o=new Qt,l=new A(1,1,1);this.lamps.forEach((p,x)=>{o.setFromAxisAngle(new A(0,1,0),p.rot),a.compose(new A(p.x,0,p.z),o,l),s.setMatrixAt(x,a)}),this.scene.add(s);for(let p=0;p<e;p++)for(let x=0;x<e;x++){let m=this.blocks[p][x];if(m.type===Wh){let g=st.BLOCK/2-st.SIDEWALK-2;for(let y=0;y<34;y++){let S=m.cx+t.float(-g,g),_=m.cz+t.float(-g,g),M=S-m.cx,w=_-m.cz;Math.min(Math.abs(M),Math.abs(w))<3.5||Math.abs(Math.hypot(M,w)-26)<3.5||Math.hypot(M,w)<11||this.trees.push({x:S,z:_,s:t.float(.8,1.5)})}}else if(m.height<60||m.type===Xh){let g=st.BLOCK/2-2.2;for(let y of[-45,-15,15,45])Math.abs(y)>44||(t.chance(.6)&&this.trees.push({x:m.cx+y,z:m.cz-g,s:t.float(.7,1)}),t.chance(.6)&&this.trees.push({x:m.cx+y,z:m.cz+g,s:t.float(.7,1)}),t.chance(.6)&&this.trees.push({x:m.cx-g,z:m.cz+y,s:t.float(.7,1)}),t.chance(.6)&&this.trees.push({x:m.cx+g,z:m.cz+y,s:t.float(.7,1)}))}}let c=st.EDGE+14;for(let p=-c;p<=c;p+=16)for(let[x,m]of[[p,c],[p,-c],[c,p],[-c,p]])this.trees.push({x,z:m,s:t.float(.9,1.3)});let u=new me;u.add(new Wt(.16,.3,3.4,7),{color:5914672,matrix:$(0,1.7,0)}),u.add(new Wt(.06,.12,1.8,5),{color:5914672,matrix:$(.55,3.6,.1,0,0,-.7)}),u.add(new Wt(.06,.11,1.6,5),{color:5914672,matrix:$(-.45,3.7,-.25,.4,0,.6)}),u.add(new Bn(1.9,0),{color:3497771,matrix:$(0,4.3,0,0,0,0,1.25,.85,1.2)}),u.add(new Bn(1.5,0),{color:4158516,matrix:$(1,5,.4,.4,.5,0)}),u.add(new Bn(1.45,0),{color:4488247,matrix:$(-.9,5.1,-.5,.2,1.1,.3)}),u.add(new Bn(1.35,0),{color:5673535,matrix:$(.1,5.9,0,.6,.2,.1)});let h=Le(u.build(),ke({emitDay:0,emitNight:0}),this.trees.length,{colors:!0}),d=new At;this.trees.forEach((p,x)=>{o.setFromAxisAngle(new A(0,1,0),t.float(0,6.28)),a.compose(new A(p.x,p.y||0,p.z),o,new A(p.s,p.s,p.s)),h.setMatrixAt(x,a),d.setRGB(t.float(.8,1.1),t.float(.85,1.15),t.float(.7,1)),h.setColorAt(x,d)}),this.scene.add(Ei(h)),this.buildStreetFurniture(t),this.signals=[];let f=st.ROAD/2+.7;for(let p=0;p<=e;p++)for(let x=0;x<=e;x++){let m=ye(p),g=ye(x);this.signals.push({x:m+f,z:g+f,axis:1,rot:0}),this.signals.push({x:m-f,z:g-f,axis:1,rot:Math.PI}),this.signals.push({x:m-f,z:g+f,axis:0,rot:-Math.PI/2}),this.signals.push({x:m+f,z:g-f,axis:0,rot:Math.PI/2})}}buildStreetFurniture(t){let e=st.N,i=st.BLOCK/2-1.5,n={hydrant:h=>{h.add(new Wt(.17,.2,.75,8),{color:13117470,matrix:$(0,.375,0)}),h.add(new oe(.19,8,5,0,Math.PI*2,0,Math.PI/2),{color:13117470,matrix:$(0,.75,0)}),h.add(new Wt(.07,.07,.5,6),{color:14069802,matrix:$(0,.5,0,0,0,Math.PI/2)})},trash:h=>{h.add(new Wt(.3,.26,.95,10),{color:2837046,matrix:$(0,.475,0)}),h.add(new Wt(.33,.33,.06,10),{color:1845794,matrix:$(0,.97,0)})},mailbox:h=>{h.add(new xt(.5,.75,.5),{color:2381478,matrix:$(0,.62,0)}),h.add(new Wt(.25,.25,.5,10,1,!1,0,Math.PI),{color:2381478,matrix:$(0,1,0,Math.PI/2,0,Math.PI/2)});for(let[d,f]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])h.add(new xt(.05,.25,.05),{color:1710618,matrix:$(d,.12,f)})},newsbox:h=>{h.add(new xt(.55,.95,.45),{color:14039594,matrix:$(0,.6,0)}),h.add(new xt(.45,.35,.02),{color:14212578,emit:.2,matrix:$(0,.8,.235)}),h.add(new xt(.4,.15,.4),{color:2763306,matrix:$(0,.07,0)})},bench:h=>{h.add(new xt(1.8,.07,.45),{color:8016434,matrix:$(0,.46,0)}),h.add(new xt(1.8,.4,.06),{color:8016434,matrix:$(0,.75,-.22,-.15,0,0)});for(let d of[-.75,.75])h.add(new xt(.06,.46,.45),{color:2236962,matrix:$(d,.23,0)})}},s={hydrant:[],trash:[],mailbox:[],newsbox:[],bench:[]};for(let h=0;h<e;h++)for(let d=0;d<e;d++){let f=this.blocks[h][d],p=[x=>[f.cx+x,f.cz-i,Math.PI],x=>[f.cx+x,f.cz+i,0],x=>[f.cx-i,f.cz+x,-Math.PI/2],x=>[f.cx+i,f.cz+x,Math.PI/2]];for(let x of p){t.chance(.55)&&s.hydrant.push(x(t.chance(.5)?-40:40));for(let m of[-15,15]){let g=t.next(),y=x(m+t.float(-4,4));g<.35?s.trash.push(y):g<.5?s.mailbox.push(y):g<.62?s.newsbox.push(y):g<.72&&(f.type!==Nl||f.height<60)&&s.bench.push(y)}}}let a=ke({emitDay:.1,emitNight:.6}),o=new zt,l=new Qt,c=new A(1,1,1),u=new A(0,1,0);for(let[h,d]of Object.entries(s)){if(!d.length)continue;let f=new me;n[h](f);let p=Le(f.build(),a,d.length);d.forEach(([x,m,g],y)=>{l.setFromAxisAngle(u,g),o.compose(new A(x,0,m),l,c),p.setMatrixAt(y,o)}),this.scene.add(p)}}buildRoofProps(){let t=this.roofProps,e=ke({emitDay:.2,emitNight:1.6}),i=new zt,n=new Qt,s=new A,a=new A,o=new At,l=new me;l.add(new xt(1,1,1),{color:16777215});let c=Le(l.build(),e,t.boxes.length,{colors:!0});t.boxes.forEach((M,w)=>{i.compose(s.set(M.x,M.y,M.z),n.identity(),a.set(M.w,M.h,M.d)),c.setMatrixAt(w,i),c.setColorAt(w,o.setRGB(M.c[0],M.c[1],M.c[2])),M.collide&&this.world.addBox(M.x-M.w/2,M.y-M.h/2,M.z-M.d/2,M.x+M.w/2,M.y+M.h/2,M.z+M.d/2,null)}),this.scene.add(Ei(c));let u=new me;for(let[M,w]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])u.add(new Wt(.12,.12,4,5),{color:3879984,matrix:$(M,2,w)});u.add(new Wt(2.3,2.3,4.2,12),{color:9071180,matrix:$(0,6.1,0)}),u.add(new sn(2.55,1.8,12),{color:4930867,matrix:$(0,9.1,0)});let h=Le(u.build(),e,t.towers.length);t.towers.forEach((M,w)=>{i.compose(s.set(M.x,M.y,M.z),n.identity(),a.set(M.s,M.s,M.s)),h.setMatrixAt(w,i);let v=2.3*M.s;this.world.addBox(M.x-v,M.y+4*M.s,M.z-v,M.x+v,M.y+10*M.s,M.z+v,null)}),this.scene.add(Ei(h));let d=new me;d.add(new Wt(.08,.16,1,5),{color:10133672,matrix:$(0,.5,0)});let f=Le(d.build(),ke({emitDay:0,emitNight:0}),t.antennas.length),p=new me;p.add(new oe(.4,6,4),{color:16722474,emit:1});let x=Le(p.build(),ke({emitDay:.6,emitNight:3}),t.antennas.length);t.antennas.forEach((M,w)=>{let v=M.landmark?3:1;i.compose(s.set(M.x,M.y,M.z),n.identity(),a.set(v,M.h,v)),f.setMatrixAt(w,i),i.compose(s.set(M.x,M.y+M.h,M.z),n.identity(),a.set(v,v,v)),x.setMatrixAt(w,i)}),this.scene.add(Ei(f),x);let m=ov(),g=new me;g.add(new xt(.25,7,.25),{color:3356219,matrix:$(-.4,3.5,0)}),g.add(new xt(.25,7,.25),{color:3356219,matrix:$(.4,3.5,0)}),g.add(new xt(1,4.6,.3),{color:2369066,matrix:$(0,6.2,0)});let y=Le(g.build(),ke({emitDay:0,emitNight:0}),t.billboards.length),S=new fi(1,1),_=m.map(M=>new Ae({map:M,side:Oe,fog:!0}));this.billboardPanels=_,t.billboards.forEach((M,w)=>{n.setFromAxisAngle(new A(0,1,0),M.rotY),i.compose(s.set(M.x,M.y,M.z),n,a.set(M.len,1,1)),y.setMatrixAt(w,i);let v=new lt(S,_[M.ad%_.length]);v.position.set(M.x,M.y+6.2,M.z),v.rotation.y=M.rotY,v.scale.set(M.len*.96,4.3,1),this.scene.add(v);let b=M.rotY===0?M.len/2:.3,P=M.rotY===0?.3:M.len/2;this.world.addBox(M.x-b,M.y+3.9,M.z-P,M.x+b,M.y+8.5,M.z+P,null)}),this.scene.add(Ei(y))}buildBridge(){let t=st.SHORE+15,e=980,i=16,n=Ti(7),s=new me,a=new xt(1,1,1),o=26;s.add(a,{color:5001302,matrix:$(t+e/2,i-1,n,0,0,0,e,2,o)}),s.add(a,{color:2763824,matrix:$(t+e/2,i+.01,n,0,0,0,e,.05,o-4)}),this.world.addBox(t,i-2,n-o/2,t+e,i,n+o/2,null);let l=[t+220,t+760],c=125;for(let d of l){for(let f of[-1,1]){let p=n+f*(o/2+1.5);s.add(a,{color:11879724,matrix:$(d,(c+st.WATER_Y)/2,p,0,0,0,5,c-st.WATER_Y,5)}),this.world.addBox(d-2.5,st.WATER_Y,p-2.5,d+2.5,c,p+2.5,null),s.add(a,{color:16777215,emit:0,matrix:$(d,c+.6,p,0,0,0,1,1.2,1)})}for(let f of[i+30,c-8])s.add(a,{color:11879724,matrix:$(d,f,n,0,0,0,4,4,o+6)}),this.world.addBox(d-2,f-2,n-o/2-3,d+2,f+2,n+o/2+3,null)}let u=(d,f,p,x,m)=>{for(let y of[-1,1]){let S=n+y*(o/2+1.5),_=d,M=p;for(let w=1;w<=24;w++){let v=w/24,b=d+(f-d)*v,P=p+(x-p)*v-m*4*v*(1-v),R=b-_,L=P-M,z=Math.hypot(R,L);s.add(new Wt(.35,.35,1,5),{color:11879724,matrix:$((b+_)/2,(P+M)/2,S,0,0,-Math.atan2(R,L),1,z,1)}),w<24&&P-i>2&&s.add(new Wt(.06,.06,1,4),{color:8010282,matrix:$(b,(P+i)/2,S,0,0,0,1,P-i,1)}),_=b,M=P}}};u(t,l[0],i+4,c,30),u(l[0],l[1],c,c,95),u(l[1],t+e,c,i+4,30);let h=new lt(s.build(),ke({emitDay:0,emitNight:0}));this.scene.add(Ei(h)),this.landmarks.bridge={x0:t,len:e,z:n,deckY:i}}sidewalkPoint(t,e,i,n=0){let s=this.blocks[t][e],a=st.BLOCK/2-st.SIDEWALK/2+n,o=2*a,l=(i%(4*o)+4*o)%(4*o);return l<o?{x:s.cx-a+l,z:s.cz-a,dir:0}:(l-=o,l<o?{x:s.cx+a,z:s.cz-a+l,dir:1}:(l-=o,l<o?{x:s.cx+a-l,z:s.cz+a,dir:2}:(l-=o,{x:s.cx-a,z:s.cz+a-l,dir:3})))}buildingsNear(t,e,i){return this.buildings.filter(n=>{let s=(n.fp.x0+n.fp.x1)/2,a=(n.fp.z0+n.fp.z1)/2;return Math.hypot(s-t,a-e)<i})}};function ov(){return[{bg:["#ff5a1f","#ffb21f"],title:"SLICE EXPRESS",sub:"Hot pizza. Delivered by air.",fg:"#fff"},{bg:["#14213d","#2b4c8c"],title:"THE DAILY SWING",sub:"News that hangs around.",fg:"#ffd166"},{bg:["#06d6a0","#118ab2"],title:"FIZZ COLA",sub:"Pop to the top!",fg:"#fff"},{bg:["#ef476f","#7b2cbf"],title:"ZOOM SNEAKERS",sub:"Run up walls in style",fg:"#fff"},{bg:["#f1faee","#a8dadc"],title:"SKYLINE BANK",sub:"Your money, higher.",fg:"#1d3557"}].map(t=>{let e=document.createElement("canvas");e.width=512,e.height=160;let i=e.getContext("2d"),n=i.createLinearGradient(0,0,512,160);n.addColorStop(0,t.bg[0]),n.addColorStop(1,t.bg[1]),i.fillStyle=n,i.fillRect(0,0,512,160),i.fillStyle=t.fg,i.font="bold 64px sans-serif",i.textAlign="center",i.fillText(t.title,256,82),i.font="28px sans-serif",i.fillText(t.sub,256,128);let s=new ai(e);return s.anisotropy=4,s})}var be=r=>new At(r),xs=[{e:-.35,zen:be(330268),hor:be(1450303),sun:be(4872837),amb:be(3424618),gnd:be(1711402),fog:.0013},{e:-.1,zen:be(923704),hor:be(3421274),sun:be(5263482),amb:be(3817576),gnd:be(1842212),fog:.00125},{e:0,zen:be(2833003),hor:be(15760207),sun:be(16742976),amb:be(5917280),gnd:be(2761252),fog:.0012},{e:.14,zen:be(4156072),hor:be(16300152),sun:be(16760960),amb:be(6975624),gnd:be(3814448),fog:.00105},{e:.45,zen:be(3832008),hor:be(11588846),sun:be(16773336),amb:be(8161956),gnd:be(4867648),fog:95e-5},{e:1.3,zen:be(3108816),hor:be(11064050),sun:be(16775920),amb:be(8688816),gnd:be(5130820),fog:9e-4}],Fl=class{constructor(t){yu(this,"fogScale",1);this.scene=t,this.hour=16.5,this.daySpeed=1/40,this.zenith=new At,this.horizon=new At;let e=new oe(4e3,32,16);this.mat=new Pe({side:$e,depthWrite:!1,uniforms:{uZenith:{value:this.zenith},uHorizon:{value:this.horizon},uSunDir:Zt.uSunDir,uSunColor:Zt.uSunColor,uNight:Zt.uNight,uTime:Zt.uTime},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }
      `,fragmentShader:`
        uniform vec3 uZenith, uHorizon, uSunDir, uSunColor;
        uniform float uNight, uTime;
        varying vec3 vDir;
        float h(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        float n2(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          float a = h(vec3(i, 0.0)), b = h(vec3(i + vec2(1, 0), 0.0)), c = h(vec3(i + vec2(0, 1), 0.0)), d = h(vec3(i + vec2(1, 1), 0.0));
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }
        float fbm(vec2 p) { return n2(p) * 0.5 + n2(p * 2.1) * 0.27 + n2(p * 4.3) * 0.15 + n2(p * 8.7) * 0.08; }
        void main() {
          vec3 d = normalize(vDir);
          float y = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(y, 0.5));
          if (d.y < 0.0) col = uHorizon * (1.0 + d.y * 1.2);
          float sd = max(dot(d, uSunDir), 0.0);
          float day = 1.0 - uNight;
          // Mie halo + horizon haze toward the sun
          col += uSunColor * (pow(sd, 6.0) * 0.45 * (1.0 - y * 0.6) + pow(sd, 64.0) * 0.6) * day;
          // HDR sun disk (blooms in post)
          col += uSunColor * smoothstep(0.99935, 0.99975, sd) * 4.0 * day;
          // moon
          float md = max(dot(d, -uSunDir), 0.0);
          col += vec3(0.9, 0.93, 1.0) * smoothstep(0.9991, 0.9995, md) * 1.6 * uNight;
          col += vec3(0.3, 0.35, 0.5) * pow(md, 40.0) * 0.35 * uNight;
          // stars
          vec3 sp = floor(d * 420.0);
          float s = step(0.9978, h(sp)) * smoothstep(0.05, 0.35, d.y);
          float tw = 0.55 + 0.45 * sin(uTime * 3.0 + h(sp + 1.0) * 30.0);
          col += vec3(s * tw * 1.3) * uNight;
          // clouds with sun-lit edges
          if (d.y > 0.01) {
            vec2 cp = d.xz / (d.y + 0.12) * 1.6 + vec2(uTime * 0.006, uTime * 0.002);
            float c = fbm(cp);
            float cov = smoothstep(0.5, 0.82, c) * smoothstep(0.01, 0.22, d.y);
            float thick = smoothstep(0.62, 0.95, c);
            vec3 lit = mix(uHorizon * 1.05, vec3(1.0), 0.35) + uSunColor * (0.35 + pow(sd, 4.0) * 0.9) * day;
            vec3 shade = mix(uHorizon * 0.75, uZenith * 0.8, 0.4);
            vec3 cc = mix(lit, shade, thick * 0.7);
            cc = mix(cc, vec3(0.12, 0.14, 0.22) + uHorizon * 0.3, uNight);
            col = mix(col, cc, cov * 0.82);
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `}),this.mesh=new lt(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,t.add(this.mesh),this.sun=new jr(16777215,1),this.hemi=new Jr(16777215,4473924,1),t.add(this.sun,this.hemi,this.sun.target),this.fog=new Cr(8947848,.001),t.fog=this.fog,this.update(0,new A)}get isNight(){return Zt.uNight.value>.5}update(t,e){this.hour=(this.hour+t*this.daySpeed)%24;let i=(this.hour-6)/12*Math.PI,n=Math.sin(i)*1.15,s=Zt.uSunDir.value;s.set(Math.cos(i)*.8,Math.sin(i),.35+Math.cos(i)*.1).normalize();let a=Dt(n,xs[0].e,xs[xs.length-1].e),o=0;for(;o<xs.length-2&&a>xs[o+1].e;)o++;let l=xs[o],c=xs[o+1],u=Dt((a-l.e)/(c.e-l.e),0,1);this.zenith.copy(l.zen).lerp(c.zen,u),this.horizon.copy(l.hor).lerp(c.hor,u),Zt.uSunColor.value.copy(l.sun).lerp(c.sun,u),Zt.uSkyAmb.value.copy(l.amb).lerp(c.amb,u).multiplyScalar(1.5),Zt.uGroundAmb.value.copy(l.gnd).lerp(c.gnd,u).multiplyScalar(1.55),Zt.uFogColor.value.copy(this.horizon).lerp(this.zenith,.15),Zt.uZenith.value.copy(this.zenith),Zt.uFogDensity.value=pa(l.fog,c.fog,u)*this.fogScale,Zt.uNight.value=1-Rf(-.12,.08,n),n<0&&(s.negate(),s.y=Math.max(s.y,.25),s.normalize()),this.sun.color.copy(Zt.uSunColor.value),this.sun.intensity=1,this.sun.position.copy(e).addScaledVector(s,100),this.sun.target.position.copy(e),this.hemi.color.copy(Zt.uSkyAmb.value).multiplyScalar(1.5),this.hemi.groundColor.copy(Zt.uGroundAmb.value).multiplyScalar(1.4),this.fog.color.copy(Zt.uFogColor.value),this.fog.density=Zt.uFogDensity.value,this.mesh.position.copy(e)}clockString(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60),i=t>=12?"PM":"AM";return`${(t+11)%12+1}:${e<10?"0":""}${e} ${i}`}};var qn=2,lv=`
  varying vec2 vUv;
  void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;function Ul(r,t){return new Pe({vertexShader:lv,fragmentShader:r,uniforms:t,depthTest:!1,depthWrite:!1})}var Bl=class{constructor(t){this.renderer=t;let e=t.extensions;this.hdr=e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"),this.type=this.hdr?Ni:mi,this.enabled=!0,this.samples=0,this.main=null,this.levels=[];let i=new Ee;i.setAttribute("position",new qt([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new lt(i),this.quad.frustumCulled=!1,this.qScene=new zn,this.qScene.add(this.quad),this.qCam=new Sn(-1,1,1,-1,0,1),this.bright=Ul(`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5)).rgb
               + texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5)).rgb;
        c *= 0.25;
        float l = max(c.r, max(c.g, c.b));
        float k = max(l - uThreshold, 0.0);
        k = k * k / (k + 0.5);
        gl_FragColor = vec4(c * (k / max(l, 1e-4)), 1.0);
      }`,{tSrc:{value:null},uTexel:{value:new nt},uThreshold:{value:.9}}),this.down=Ul(`
      uniform sampler2D tSrc; uniform vec2 uTexel;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
        c += texture2D(tSrc, vUv - uTexel).rgb;
        c += texture2D(tSrc, vUv + uTexel).rgb;
        c += texture2D(tSrc, vUv + vec2(uTexel.x, -uTexel.y)).rgb;
        c += texture2D(tSrc, vUv - vec2(uTexel.x, -uTexel.y)).rgb;
        gl_FragColor = vec4(c / 8.0, 1.0);
      }`,{tSrc:{value:null},uTexel:{value:new nt}}),this.up=Ul(`
      uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
      varying vec2 vUv;
      void main() {
        vec2 h = uTexel;
        vec3 c = texture2D(tSrc, vUv + vec2(-h.x * 2.0, 0.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb * 2.0;
        c += texture2D(tSrc, vUv + vec2(0.0, h.y * 2.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb * 2.0;
        c += texture2D(tSrc, vUv + vec2(h.x * 2.0, 0.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb * 2.0;
        c += texture2D(tSrc, vUv + vec2(0.0, -h.y * 2.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb * 2.0;
        gl_FragColor = vec4(c / 12.0 + texture2D(tAdd, vUv).rgb * 0.6, 1.0);
      }`,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new nt}}),this.composite=Ul(`
      uniform sampler2D tMain; uniform sampler2D tBloom;
      uniform float uBloom, uSpeed, uTime, uExposure, uVignette, uNight, uFlash, uDamage;
      uniform vec2 uRes;
      varying vec2 vUv;
      vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
      float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        vec2 dir = uv - 0.5;
        float r = length(dir);
        vec3 col;
        if (uSpeed > 0.02) {
          // radial motion blur toward the edges at speed
          float amt = uSpeed * smoothstep(0.12, 0.75, r) * 0.075;
          col = vec3(0.0);
          for (int i = 0; i < 6; i++) col += texture2D(tMain, uv - dir * amt * (float(i) / 5.0)).rgb;
          col /= 6.0;
          // subtle chromatic fringe
          float ca = amt * 0.25;
          col.r = mix(col.r, texture2D(tMain, uv - dir * ca).r, 0.5);
          col.b = mix(col.b, texture2D(tMain, uv + dir * ca).b, 0.5);
        } else {
          col = texture2D(tMain, uv).rgb;
        }
        col += texture2D(tBloom, uv).rgb * uBloom;
        // display-referred -> linear -> filmic curve -> display
        vec3 lin = pow(max(col, 0.0), vec3(2.2));
        lin = aces(lin * uExposure);
        col = pow(lin, vec3(1.0 / 2.2));
        float l = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(l), col, 1.1);
        // split toning: warm highlights, cool shadows (more blue at night)
        col *= mix(mix(vec3(0.95, 0.99, 1.06), vec3(0.9, 0.97, 1.12), uNight), vec3(1.0), smoothstep(0.0, 0.45, l));
        col *= mix(vec3(1.0), vec3(1.04, 1.0, 0.95), smoothstep(0.5, 1.0, l) * (1.0 - uNight));
        col *= 1.0 - dot(dir, dir) * uVignette;
        col = mix(col, vec3(1.0), uFlash);
        col = mix(col, vec3(0.6, 0.05, 0.02), uDamage * smoothstep(0.25, 0.75, r));
        col += (h(uv * uRes + fract(uTime) * 61.0) - 0.5) * 0.018;
        gl_FragColor = vec4(col, 1.0);
      }`,{tMain:{value:null},tBloom:{value:null},uBloom:{value:.75},uSpeed:{value:0},uTime:{value:0},uExposure:{value:.92},uVignette:{value:.55},uNight:{value:0},uFlash:{value:0},uDamage:{value:0},uRes:{value:new nt(1,1)}}),this.width=1,this.height=1}configure({enabled:t,samples:e}){this.enabled=t,e!==this.samples&&(this.samples=e,this.dispose())}dispose(){this.main?.dispose();for(let t of this.levels)t.down.dispose(),t.up?.dispose();this.main=null,this.levels=[]}setSize(t,e){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),t===this.width&&e===this.height&&this.main)return;this.width=t,this.height=e,this.dispose();let i={type:this.type,depthBuffer:!0,stencilBuffer:!1};this.main=new Qe(t,e,{...i,samples:this.samples});let n={type:this.type,depthBuffer:!1,stencilBuffer:!1},s=t,a=e;for(let o=0;o<5;o++)s=Math.max(2,Math.floor(s/2)),a=Math.max(2,Math.floor(a/2)),this.levels.push({w:s,h:a,down:new Qe(s,a,n),up:o<4?new Qe(s,a,n):null});this.composite.uniforms.uRes.value.set(t,e)}blit(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.qScene,this.qCam)}drawScene(t,e,i){let n=this.renderer;n.setRenderTarget(i),e.layers.set(0),n.autoClear=!0,n.render(t,e),e.layers.set(qn),n.autoClear=!1,n.clearDepth(),n.render(t,e),n.autoClear=!0,e.layers.set(0)}render(t,e,i){let n=this.renderer;if(!this.enabled){this.drawScene(t,e,null);return}let s=n.getDrawingBufferSize(this._size||(this._size=new nt));this.setSize(s.x,s.y),this.drawScene(t,e,this.main);let a=this.levels;this.bright.uniforms.tSrc.value=this.main.texture,this.bright.uniforms.uTexel.value.set(1/this.width,1/this.height),this.bright.uniforms.uThreshold.value=this.hdr?.92:.8,this.blit(this.bright,a[0].down);for(let c=1;c<a.length;c++)this.down.uniforms.tSrc.value=a[c-1].down.texture,this.down.uniforms.uTexel.value.set(1/a[c-1].w,1/a[c-1].h),this.blit(this.down,a[c].down);let o=a[a.length-1].down;for(let c=a.length-2;c>=0;c--)this.up.uniforms.tSrc.value=o.texture,this.up.uniforms.tAdd.value=a[c].down.texture,this.up.uniforms.uTexel.value.set(.5/a[c].w,.5/a[c].h),this.blit(this.up,a[c].up),o=a[c].up;let l=this.composite.uniforms;l.tMain.value=this.main.texture,l.tBloom.value=o.texture,l.uSpeed.value=i.speed,l.uTime.value=i.time,l.uNight.value=i.night,l.uBloom.value=.55+i.night*.45,l.uExposure.value=1.02+i.night*.35,l.uFlash.value=i.flash||0,l.uDamage.value=i.damage||0,this.blit(this.composite,null)}};var ga=new A;function ki(r,t,e,i,n,s){let a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;ga.copy(t),ga[i]=0,ga.normalize();let c=.5*a/(a+o),u=1-ga.angleTo(r)/l;return Math.sign(ga[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Xe=class r extends xt{constructor(t=1,e=1,i=1,n=2,s=.1){let a=n*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new A,c=new A,u=new A(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,x=new A,m=.5/a;for(let g=0,y=0;g<h.length;g+=3,y+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[y+0]=ki(x,c,"z","y",s,i),f[y+1]=1-ki(x,c,"y","z",s,e);break;case 1:x.set(-1,0,0),f[y+0]=1-ki(x,c,"z","y",s,i),f[y+1]=1-ki(x,c,"y","z",s,e);break;case 2:x.set(0,1,0),f[y+0]=1-ki(x,c,"x","z",s,t),f[y+1]=ki(x,c,"z","x",s,i);break;case 3:x.set(0,-1,0),f[y+0]=1-ki(x,c,"x","z",s,t),f[y+1]=1-ki(x,c,"z","x",s,i);break;case 4:x.set(0,0,1),f[y+0]=1-ki(x,c,"x","y",s,t),f[y+1]=1-ki(x,c,"y","x",s,e);break;case 5:x.set(0,0,-1),f[y+0]=ki(x,c,"x","y",s,t),f[y+1]=1-ki(x,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};function Tn(r,t=18,e=0){let i=r.length,n=[],s=[],a=[];for(let u=0;u<i;u++){let[h,d,f,p=0,x=0]=r[u];for(let m=0;m<=t;m++){let g=m/t*Math.PI*2+e;n.push(p+Math.sin(g)*d,h,x+Math.cos(g)*f),s.push(m/t,u/(i-1))}}let o=r[i-1][0]<r[0][0];for(let u=0;u<i-1;u++)for(let h=0;h<t;h++){let d=u*(t+1)+h,f=d+1,p=d+t+1,x=p+1;o?a.push(d,p,f,f,p,x):a.push(d,f,p,f,x,p)}let l=new Ee;l.setAttribute("position",new qt(n,3)),l.setAttribute("uv",new qt(s,2)),l.setIndex(a),l.computeVertexNormals();let c=l.attributes.normal;for(let u=0;u<i;u++){let h=u*(t+1),d=h+t,f=c.getX(h)+c.getX(d),p=c.getY(h)+c.getY(d),x=c.getZ(h)+c.getZ(d),m=Math.hypot(f,p,x)||1;c.setXYZ(h,f/m,p/m,x/m),c.setXYZ(d,f/m,p/m,x/m)}return l}var Bf={thigh:[[.1,.002,.002],[.085,.07,.07],[.05,.094,.097],[0,.093,.096],[-.06,.092,.096,0,.008],[-.13,.087,.09,0,.012],[-.21,.077,.08,0,.01],[-.29,.066,.068,0,.006],[-.36,.056,.058],[-.42,.051,.054],[-.45,.04,.042],[-.465,.002,.002]],shin:[[.025,.002,.002],[.012,.042,.044],[-.02,.052,.056,0,.006],[-.07,.054,.058,0,-.01],[-.13,.056,.063,0,-.018],[-.2,.049,.054,0,-.012],[-.28,.04,.042,0,-.004],[-.36,.032,.034],[-.42,.033,.035],[-.44,.024,.026],[-.45,.002,.002]],upperArm:[[.06,.002,.002],[.045,.05,.05],[.02,.068,.063],[-.03,.069,.064,0,.004],[-.09,.061,.06,0,.01],[-.15,.056,.057,0,.012],[-.21,.05,.051,0,.006],[-.26,.045,.046],[-.29,.04,.041],[-.305,.002,.002]],foreArm:[[.025,.002,.002],[.012,.038,.04],[-.02,.046,.046],[-.06,.048,.044,0,.004],[-.11,.045,.039],[-.17,.038,.032],[-.22,.032,.026],[-.26,.031,.024],[-.275,.002,.002]],palm:[[.008,.002,.002],[0,.028,.017],[-.025,.038,.018,0,-.002],[-.055,.043,.016,0,-.001],[-.082,.044,.014],[-.094,.036,.012],[-.1,.002,.002]]};function Ol(r,t=1,e=18){return Tn(Bf[r],e,t>0?0:Math.PI)}function cv(){let t=Tn([[-.07,.002,.002,0,-.05],[-.065,.034,.038,0,-.045],[-.04,.045,.05,0,-.05],[0,.049,.05,0,-.045],[.06,.052,.04,0,-.035],[.12,.05,.03,0,-.028],[.165,.042,.024,0,-.024],[.19,.026,.018,0,-.02],[.2,.002,.002,0,-.02]],16);return t.rotateX(Math.PI/2),t}function zf(r){return Tn(r==="lower"?[[-.2,.002,.002],[-.185,.1,.08],[-.16,.135,.098,0,-.005],[-.1,.162,.108,0,-.012],[-.04,.158,.104,0,-.006],[.02,.142,.094],[.09,.136,.09,0,.004],[.16,.146,.096,0,.006],[.2,.15,.1,0,.006],[.205,.002,.002,0,.006]]:[[.18,.002,.002,0,.006],[.185,.15,.1,0,.006],[.25,.168,.11,0,.012],[.32,.185,.12,0,.02],[.39,.196,.118,0,.016],[.45,.19,.104,0,.004],[.5,.16,.088],[.535,.095,.072],[.555,.062,.06],[.6,.056,.056,0,.008],[.62,.002,.002,0,.008]],22)}function Yh(r,t,e){let i=document.createElement("canvas");i.width=r,i.height=t,e(i.getContext("2d"),r,t);let n=new ai(i);return n.anisotropy=4,n}var nr=r=>"#"+r.toString(16).padStart(6,"0");function xa(r,t){let e=new At(r);return e.multiplyScalar(t),"#"+e.getHexString()}function Ff(r,t,e,i=.06){let n=r.getImageData(0,0,t,e);for(let s=0;s<n.data.length;s+=4){let a=(Math.random()-.5)*255*i;n.data[s]+=a,n.data[s+1]+=a,n.data[s+2]+=a}r.putImageData(n,0,0)}function Uf(r){let t=Yh(256,256,(i,n,s)=>{i.fillStyle=nr(r.main),i.fillRect(0,0,n,s),i.fillStyle=xa(r.main,.8),i.fillRect(n*.4,0,n*.2,s),i.fillStyle=xa(r.main,.55);for(let a of[0,.4,.6,.995])i.fillRect(a*n-1,0,2,s);i.fillStyle=nr(r.accent),i.fillRect(n*.215,0,n*.07,s),i.fillStyle=xa(r.accent,.6),i.fillRect(n*.212,0,2,s),i.fillRect(n*.285,0,2,s),Ff(i,n,s)}),e=Yh(512,256,(i,n,s)=>{i.fillStyle=nr(r.main),i.fillRect(0,0,n,s),i.fillStyle=xa(r.main,.82),i.fillRect(n*.3,0,n*.4,s),i.fillStyle=xa(r.main,.55);for(let o of[.3,.7])i.fillRect(o*n-1,0,2,s);i.fillStyle=nr(r.accent);for(let o of[.1,.9])i.save(),i.translate(o*n,0),i.fillRect(-7,s*.15,14,s*.85),i.restore();i.fillRect(0,s*0,n,s*.035);let a=s*.3;for(let o of[0,n])i.beginPath(),i.arc(o,a,18,0,Math.PI*2),i.fillStyle=nr(r.accent),i.fill(),i.beginPath(),i.moveTo(o-8,a-6),i.lineTo(o+9,a),i.lineTo(o-8,a+6),i.fillStyle=nr(r.main),i.fill();Ff(i,n,s)});return t.wrapS=e.wrapS=ns,{limbTex:t,torsoTex:e}}var ys=null;function hv(){if(ys)return ys;let r=128;return ys=Yh(r,r,t=>{let e=t.createImageData(r,r),i=(n,s)=>{let a=Math.sin((n+s)/r*Math.PI*2*24),o=Math.sin((n-s)/r*Math.PI*2*24);return Math.max(a,0)*.5+Math.max(o,0)*.5};for(let n=0;n<r;n++)for(let s=0;s<r;s++){let a=i(s+1,n)-i(s-1,n),o=i(s,n+1)-i(s,n-1),l=Math.hypot(a,o,1.6),c=(n*r+s)*4;e.data[c]=(-a/l*.5+.5)*255,e.data[c+1]=(-o/l*.5+.5)*255,e.data[c+2]=(1.6/l*.5+.5)*255,e.data[c+3]=255}t.putImageData(e,0,0)}),ys.wrapS=ys.wrapT=ns,ys.repeat.set(3,3),ys}function Of(r){let t=hv(),{limbTex:e,torsoTex:i}=Uf(r),n={limb:new pi({map:e,normalMap:t,normalScale:new nt(.55,.55),roughness:.82,metalness:.02}),torso:new pi({map:i,normalMap:t,normalScale:new nt(.55,.55),roughness:.82,metalness:.02}),glove:new pi({color:2369325,roughness:.42,metalness:.05}),accent:new pi({color:r.accent,roughness:.4,metalness:.1}),pad:new pi({color:3027514,roughness:.35,metalness:.25}),helmet:new pi({color:r.main,roughness:.25,metalness:.25}),visor:new pi({color:724240,roughness:.04,metalness:.95}),glow:new Ae({color:r.visor}),metal:new pi({color:10133931,roughness:.25,metalness:.85}),sole:new pi({color:14276303,roughness:.7}),shoe:new pi({color:2040359,roughness:.55,normalMap:t,normalScale:new nt(.3,.3)}),bag:new pi({color:3883344,roughness:.75,normalMap:t,normalScale:new nt(.8,.8)}),strap:new pi({color:1776930,roughness:.6})};return n.setSuit=s=>{let a=Uf(s);n.limb.map.dispose(),n.torso.map.dispose(),n.limb.map=a.limbTex,n.torso.map=a.torsoTex,n.limb.needsUpdate=n.torso.needsUpdate=!0,n.accent.color.setHex(s.accent),n.helmet.color.setHex(s.main).multiplyScalar(1.15),n.glow.color.setHex(s.visor)},n.setSuit(r),n}function uv(r,t){let e=new _e,i=new lt(Tn(Bf.palm,14),t.glove);e.add(i);let n=new lt(new Xe(.082,.022,.014,2,.006),t.accent);n.position.set(0,-.075,.016),e.add(n);let s=[],a=[[.028,.046,.03,.0085],[.009,.05,.033,.0088],[-.01,.047,.031,.0084],[-.028,.037,.025,.0075]];for(let[h,d,f,p]of a){let x=new _e;x.position.set(-h*r,-.094,0),e.add(x);let m=new lt(new nn(p,d-p*2,3,8),t.glove);m.position.y=-d/2,x.add(m);let g=new _e;g.position.y=-d+p*.5,x.add(g);let y=new lt(new nn(p*.92,f-p*2,3,8),t.glove);y.position.y=-f/2,g.add(y),s.push({base:x,tip:g})}let o=new _e;o.position.set(-.036*r,-.022,-.008),o.rotation.set(.5,0,.55*r),e.add(o);let l=new lt(new nn(.011,.026,3,8),t.glove);l.position.y=-.02,o.add(l);let c=new _e;c.position.y=-.04,o.add(c);let u=new lt(new nn(.0095,.02,3,8),t.glove);return u.position.y=-.016,c.add(u),{hand:e,fingers:s,thumb:o,ttip:c,palm:i,side:r}}function kl(r,t,e=0){for(let i=0;i<4;i++){let n=r.fingers[i];n.base.rotation.x=t*(1.35+i*.06),n.base.rotation.z=(i-1.5)*e*.12*r.side,n.tip.rotation.x=t*1.55}r.thumb.rotation.x=.5+t*.6,r.ttip.rotation.x=t*.7}function Zh(r,t,{gadget:e=!0}={}){let i=new _e,n=new _e;i.add(new lt(Ol("upperArm",r),t.limb));let s=new lt(new oe(.045,12,8,0,Math.PI*2,0,Math.PI/2),t.pad);s.rotation.x=Math.PI/2,s.position.set(0,-.28,-.03),s.scale.set(1,1,.5),i.add(s),n.add(new lt(Ol("foreArm",r),t.limb));let a=new lt(Tn([[-.2,.036,.031],[-.215,.038,.033],[-.27,.035,.029],[-.278,.03,.025]],16),t.glove);n.add(a);let o=new lt(Tn([[-.198,.0365,.0315],[-.208,.0375,.0325]],16),t.accent);if(n.add(o),e){let c=new lt(new Xe(.05,.075,.024,2,.006),t.metal);c.position.set(0,-.215,.034),n.add(c);let u=new lt(new xt(.016,.05,.004),t.glow);u.position.set(0,-.215,.047),n.add(u);let h=new lt(new Wt(.007,.009,.02,8),t.pad);h.position.set(0,-.262,.036),n.add(h)}let l=uv(r,t);return{upper:i,fore:n,...l}}var sr=class{constructor(t){this.M=t,this.root=new _e,this.body=new _e,this.root.add(this.body),this.body.position.y=.14;let e=(x,m,g,y)=>{let S=new _e;return S.position.set(m,g,y),x.add(S),S},i=(x,m,g,y=0,S=0,_=0)=>{let M=new lt(m,g);return M.position.set(y,S,_),x.add(M),M};this.hips=e(this.body,0,0,0);let n=zf("lower"),s=n.attributes.uv;for(let x=0;x<s.count;x++)s.setY(x,.05+s.getY(x)*.25);this.lowerTorso=i(this.hips,n,t.torso),i(this.hips,Tn([[.015,.146,.098,0,.002],[.05,.142,.096,0,.003]],22),t.strap),i(this.hips,new Xe(.05,.034,.012,2,.004),t.metal,0,.032,.1),this.spine=e(this.hips,0,0,0),this.upperTorso=i(this.spine,zf("upper"),t.torso);let a=i(this.spine,new Xe(.3,.34,.13,3,.035),t.bag,0,.33,-.17);i(a,new Xe(.31,.09,.14,2,.02),t.accent,0,.13,.005);for(let x of[-1,1]){let m=i(this.spine,new Xe(.035,.36,.012,1,.004),t.strap,.09*x,.38,.115);m.rotation.x=-.12;let g=i(this.spine,new Xe(.035,.012,.22,1,.004),t.strap,.09*x,.53,-.02);g.rotation.x=.1}this.cargo=e(a,0,0,-.08),this.neck=e(this.spine,0,.565,.01),this.head=e(this.neck,0,.035,0);let o=i(this.head,new oe(.128,30,22),t.helmet,0,.12,.004);o.scale.set(.93,1.06,1.06);let l=i(this.head,new oe(.131,30,12,Math.PI/2-1,2,1.1,.5),t.visor,0,.12,.004);l.scale.set(.94,1.07,1.08);let c=i(this.head,new oe(.1,20,10,Math.PI/2-.9,1.8,1.75,.75),t.pad,0,.1,.03);c.scale.set(.95,1,1.1);let u=i(this.head,new cs(.129,.003,6,32,2),t.glow,0,.065,.004);u.rotation.set(Math.PI/2,0,Math.PI/2-1),u.scale.set(.95,1.1,1);let h=i(this.head,new Xe(.03,.026,.22,2,.01),t.accent,0,.255,-.01);h.rotation.x=.12;let d=i(this.head,Tn([[-.01,.07,.07],[.03,.078,.078]],18),t.pad);this.headMeshes=[o,l,c,u,h,d];let f=x=>{let m=e(this.spine,.212*x,.465,-.005);i(m,new oe(.074,18,12),t.limb,0,.005,0).scale.set(1,.85,1);let g=Zh(x,t,{gadget:!0});m.add(g.upper);let y=e(m,0,-.29,0);y.add(g.fore);let S=e(y,0,-.27,0);return S.add(g.hand),g.hand.rotation.y=x*Math.PI/2,{sh:m,el:y,wr:S,h:g}};this.armL=f(1),this.armR=f(-1);let p=x=>{let m=e(this.hips,.095*x,-.075,0);i(m,Ol("thigh",x),t.limb);let g=e(m,0,-.44,0);i(g,Ol("shin",x),t.limb);let y=i(g,new oe(.046,14,10,0,Math.PI*2,0,Math.PI/2),t.pad,0,-.025,.045);y.rotation.x=Math.PI/2,y.scale.set(1,1.2,.36);let S=e(g,0,-.43,0);return i(S,cv(),t.shoe,0,0,.03),i(S,new Xe(.1,.022,.27,2,.008),t.sole,0,-.085,.048).scale.set(1,1,1),i(S,new Xe(.03,.05,.02,1,.006),t.accent,0,-.04,-.035),{hp:m,kn:g,an:S}};this.legL=p(1),this.legR=p(-1),this.joints={spine:this.spine,neck:this.neck,head:this.head,shL:this.armL.sh,elL:this.armL.el,wrL:this.armL.wr,shR:this.armR.sh,elR:this.armR.el,wrR:this.armR.wr,hipL:this.legL.hp,knL:this.legL.kn,anL:this.legL.an,hipR:this.legR.hp,knR:this.legR.kn,anR:this.legR.an},this.targets={};for(let x in this.joints)this.targets[x]=new Qt;this.curl=.4,this._e=new Ue}setLayer(t){this.root.traverse(e=>e.layers.set(t))}firstPerson(){this.lowerTorso.visible=!1;let t=new lt(Tn([[-.2,.002,.002],[-.185,.1,.08],[-.16,.135,.098,0,-.005],[-.1,.16,.107,0,-.012],[-.04,.155,.103,0,-.006],[.01,.142,.094],[.045,.118,.08],[.07,.07,.05],[.08,.002,.002]],22),this.M.torso);this.hips.add(t),this.upperTorso.visible=!1;for(let e of this.headMeshes)e.visible=!1;this.armL.sh.visible=!1,this.armR.sh.visible=!1,this.spine.children.forEach(e=>{e!==this.neck&&(e.visible=!1)})}pose(t){for(let e in t){let i=t[e];this._e.set(i[0],i[1]||0,i[2]||0,"XYZ"),this.targets[e].setFromEuler(this._e)}}apply(t,e=14){let i=1-Math.exp(-e*t);for(let n in this.joints)this.joints[n].quaternion.slerp(this.targets[n],i);kl(this.armL.h,this.curl),kl(this.armR.h,this.curl)}},$h={stand:{spine:[.02],neck:[0],head:[0],shL:[.05,0,.12],elL:[-.18],wrL:[0],shR:[.05,0,-.12],elR:[-.18],wrR:[0],hipL:[0,0,.05],knL:[.05],anL:[-.04],hipR:[0,0,-.05],knR:[.05],anR:[-.04]},perch:{spine:[.55],neck:[-.2],head:[-.25],shL:[-.6,0,.3],elL:[-.7],wrL:[.2],shR:[-.2,0,-.6],elR:[-.5],wrR:[0],hipL:[-1.75,0,.32],knL:[2.25],anL:[.4],hipR:[-1.3,0,-.25],knR:[2.1],anR:[.35]}};var cn=Math.PI*2,Yn=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,vs=r=>Math.sin(Math.min(1,Math.max(0,r))*Math.PI),An={frontflip:{name:"FRONT FLIP",dur:.72,pts:60,cam:r=>({pitch:-cn*Yn(r)}),pose:"tuck"},backflip:{name:"BACKFLIP",dur:.78,pts:70,cam:r=>({pitch:cn*Yn(r)}),pose:"arch"},rollL:{name:"BARREL ROLL",dur:.62,pts:50,cam:r=>({roll:cn*Yn(r)}),pose:"spread"},rollR:{name:"BARREL ROLL",dur:.62,pts:50,cam:r=>({roll:-cn*Yn(r)}),pose:"spread"},spin:{name:"360 SPIN",dur:.62,pts:45,cam:r=>({yaw:cn*Yn(r)}),pose:"spin"},superman:{name:"SUPERMAN",dur:.95,pts:55,cam:r=>({pitch:-.22*vs(r),fov:9*vs(r)}),pose:"superman"},starfish:{name:"STARFISH",dur:.85,pts:40,cam:r=>({roll:Math.sin(r*cn*2)*.16*vs(r),pitch:.12*vs(r)}),pose:"starfish"},cannonball:{name:"CANNONBALL",dur:.8,pts:45,cam:r=>({pitch:-.5*vs(r),roll:Math.sin(r*cn)*.1}),pose:"cannonball"},corkscrew:{name:"CORKSCREW",dur:.9,pts:90,cam:r=>({roll:-cn*Yn(r),yaw:cn*Yn(r),pitch:-.3*vs(r)}),pose:"tuck"},twister:{name:"TWISTER",dur:.8,pts:75,cam:r=>({yaw:-cn*2*Yn(r)}),pose:"spin"}},Jh=["spin","superman","starfish","cannonball","corkscrew","twister"],Kh={tuck:{spine:[.6],hipL:[-2,0,.15],knL:[2.4],anL:[.4],hipR:[-2,0,-.15],knR:[2.4],anR:[.4]},arch:{spine:[-.35],hipL:[.5,0,.1],knL:[1.3],anL:[.5],hipR:[.45,0,-.1],knR:[1.2],anR:[.5]},spread:{spine:[0],hipL:[-.2,0,.35],knL:[.4],anL:[.2],hipR:[-.2,0,-.35],knR:[.4],anR:[.2]},spin:{spine:[.1],hipL:[-.1,0,.08],knL:[.25],anL:[.3],hipR:[-.1,0,-.08],knR:[.25],anR:[.3]},superman:{spine:[-.1],hipL:[.35,0,.05],knL:[.1],anL:[.6],hipR:[.35,0,-.05],knR:[.1],anR:[.6]},starfish:{spine:[-.1],hipL:[-.2,0,.75],knL:[.15],anL:[.2],hipR:[-.2,0,-.75],knR:[.15],anR:[.2]},cannonball:{spine:[.7],hipL:[-2.2,0,.05],knL:[2.5],anL:[.5],hipR:[-2.2,0,-.05],knR:[2.5],anR:[.5]}};function kf(r,t,e){let i=vs(t);switch(r){case"tuck":return[e*.16,-.36-i*.12,-.36,.95];case"cannonball":return[e*.13,-.42-i*.08,-.3,1];case"arch":return[e*.3,-.15+i*.42,-.4,.2];case"spread":return[e*.56,-.06,-.24,.1];case"spin":return[e*.58,-.12+Math.sin(t*12)*.02,-.2,.1];case"superman":return[e*.1,-.08+i*.04,-.6,1];case"starfish":return[e*.55,.12*i,-.3,0];default:return[e*.3,-.3,-.35,.5]}}var Ji=new A,dv=new A,fv=new A,Ki=new Qt,jh=new Qt,Hf=new zt,Zn=new Ue(0,0,0,"YXZ"),pv=new A(0,1,0),Gf=new Qt,rr=.29,Qh=.27,Vf=.78,Hl=class{constructor(t,e){this.camera=new vi(82,16/9,.05,6e3),this.camera.rotation.order="YXZ",t.add(this.camera),this.scene=t,this.position=this.camera.position,this.mode="first",this.yaw=0,this.pitch=-.05,this.roll=0,this.lookIdle=10,this.shakeAmt=0,this.fov=82,this.fovKick=0,this.sens=1,this.invertY=!1,this.swingTilt=.5,this.yawKick=0,this.dip=0,this.dipV=0,this.nod=0,this.nodV=0,this.smoothY=null,this.time=0,this.tilt=new Qt,this.tiltTarget=new Qt,this.trickRot={pitch:0,yaw:0,roll:0,fov:0},this.M=Of(e),this.buildArms(),this.buildLegs(t)}getForward(t){let e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}getAimForward(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}setMode(){}toggle(){return"first"}shake(t){this.shakeAmt=Math.min(1.5,this.shakeAmt+t)}land(t){this.dipV-=Math.min(3.2,t*.09),this.nodV-=Math.min(2.2,t*.05)}kickFov(t){this.fovKick=Math.min(14,this.fovKick+t)}turn(t){this.yawKick+=t}buildArms(){let t=new _e;this.camera.add(t),this.vm=t,this.arms=[-1,1].map(e=>{let i=Zh(-e,this.M);t.add(i.upper,i.fore,i.hand);for(let n of[i.upper,i.fore,i.hand])n.traverse(s=>s.layers.set(qn));return{...i,side:e,shoulder:new A(.22*e,-.33,.1),cur:new A(.2*e,-.38,-.36),target:new A,curl:.5,curlT:.5,spread:0}})}buildLegs(t){this.legs=new sr(this.M),this.legs.firstPerson(),this.legs.setLayer(qn),t.add(this.legs.root)}setSuit(t){this.M.setSuit(t)}handWorld(t,e){return this.arms[t>0?1:0].palm.localToWorld(e.set(0,-.06,0))}aimLocal(t,e,i){return Ki.copy(this.camera.quaternion).invert(),i.copy(t).sub(this.camera.position).applyQuaternion(Ki).normalize(),i.x=Dt(i.x,-.5,.5),i.y=Dt(i.y,-.35,.42),i.z>-.75&&(i.z=-.75),i.normalize(),i.multiplyScalar(.6).add(fv.set(e.side*.07,-.08,0))}orientLimb(t,e,i){let n=Ji.copy(e).negate(),s=dv.copy(i).addScaledVector(n,-i.dot(n));s.lengthSq()<1e-6&&s.set(0,0,1).addScaledVector(n,-n.z),s.normalize();let a=new A().crossVectors(n,s);Hf.makeBasis(a,n,s),t.quaternion.setFromRotationMatrix(Hf)}solve(t){let e=t.shoulder,i=t.cur,n=new A().subVectors(i,e),s=n.length(),a=n.divideScalar(s||1);s=Dt(s,.12,rr+Qh-.004);let o=Dt((rr*rr+s*s-Qh*Qh)/(2*rr*s),-1,1),l=Math.sqrt(1-o*o),c=new A(t.side*.9,-1,.35).normalize();c.addScaledVector(a,-c.dot(a)).normalize();let u=new A().copy(e).addScaledVector(a,rr*o).addScaledVector(c,rr*l),h=new A().copy(e).addScaledVector(a,s),d=new A().subVectors(u,e).normalize(),f=new A().subVectors(h,u).normalize(),p=new A(-t.side*.3,1,.1).normalize();t.upper.position.copy(e),this.orientLimb(t.upper,d,p),t.fore.position.copy(u),this.orientLimb(t.fore,f,p),t.hand.position.copy(h),this.orientLimb(t.hand,f,p),kl(t,t.curl,t.spread)}updateArms(t,e){let i=e.state,n=this.time,s=Math.hypot(e.vel.x,e.vel.z),a=e.trick?An[e.trick.id]:null,o=(l,c,u,h,d,f=0)=>{l.target.set(c,u,h),l.curlT=d,l.spread=f};for(let l of this.arms){let c=l.side,u=e.runPhase+(c>0?0:Math.PI);if(a){let d=kf(a.pose,e.trick.t/a.dur,c);o(l,d[0],d[1],d[2],d[3],d[3]<.3?1:0)}else if(i==="swing")e.rope.side>0==c>0?(this.aimLocal(e.rope.visual,l,l.target),l.curlT=1):o(l,c*.42,-.25+Math.sin(n*2)*.01,-.3,.2,1);else if(i==="zip"||e.airZipT>0)this.aimLocal(i==="zip"?e.zip.target:e.airZipTarget,l,l.target),l.curlT=1;else if(i==="wall")if(e.wall.climbing&&e.wall.vertical){let d=Math.sin(u);o(l,c*.2,-.1+d*.17,-.42+Math.max(0,-d)*.06,.1,1)}else e.wall.climbing?(Ji.set(-e.wall.nx,0,-e.wall.nz),Ki.copy(this.camera.quaternion).invert(),Ji.applyQuaternion(Ki),Math.sign(Ji.x)===c?o(l,c*.42,-.2+Math.sin(u)*.04,-.33,.1,1):o(l,c*.2,-.36+Math.abs(Math.cos(u))*.04,-.33+Math.sin(u)*.11,.7)):o(l,c*.22,-.08,-.44,.05,1);else if(e.vaultT>0)o(l,c*.2,-.52,-.4,.1,1);else if(i==="ground")if(e.perchT>0||e.landT>0)o(l,c*.3,-.5,-.32,.35);else if(s>.8){let d=Dt(s/12,.3,1.15);o(l,c*.21,-.33+Math.abs(Math.cos(u))*.035*d,-.36+Math.sin(u)*.12*d,.8)}else{let d=Math.sin(n*1.8+c)*.006;o(l,c*.2,-.35+d,-.38,.45)}else e.diving?o(l,c*.3,-.62,0,.2):e.vel.y>2?o(l,c*.3,-.26,-.38,.5):o(l,c*.48,-.13+Math.sin(n*11+c)*.012,-.28,.1,1);c>0&&e.throwT>0&&(e.throwT/.35>.55?o(l,.3,-.05,.02,.9):o(l,.12,-.1,-.58,.1,1));let h=a?22:i==="ground"&&s>.8?30:i==="swing"||i==="zip"?26:16;l.cur.lerp(l.target,Me(h,t)),l.curl+=(l.curlT-l.curl)*Me(14,t),this.solve(l)}this.vm.updateMatrixWorld(!0)}updateLegs(t,e,i){let n=this.legs,s=e.state,a=Math.hypot(e.vel.x,e.vel.z),o=e.runPhase,l=d=>n.pose(d),c=e.trick?An[e.trick.id]:null,u=0;if(c&&Kh[c.pose])l(Kh[c.pose]);else if(s==="ground")if(e.landT>0||e.perchT>0)l({spine:[.4],hipL:[-1.3,0,.2],knL:[1.9],anL:[.4],hipR:[-1.1,0,-.2],knR:[1.8],anR:[.4]}),u=e.perchT>0?.42:.3;else if(a>.6){let d=Dt(a/13,.25,1.15),f=Math.sin(o),p=Math.cos(o);l({spine:[.12*d],hipL:[-f*.95*d,0,.03],knL:[(.2+Math.max(0,p)*1.5)*d],anL:[.2*d],hipR:[f*.95*d,0,-.03],knR:[(.2+Math.max(0,-p)*1.5)*d],anR:[.2*d]}),u=.03*Math.abs(f)*d}else l({spine:[.02],hipL:[0,0,.06],knL:[.04],anL:[-.04],hipR:[0,0,-.06],knR:[.04],anR:[-.04]});else if(s==="swing"){let d=Math.sin(this.time*2.4)*.12;l({spine:[-.1],hipL:[-.55+d,0,.08],knL:[1],anL:[.4],hipR:[-.15-d,0,-.06],knR:[.5],anR:[.4]})}else if(s==="wall"){let d=Math.sin(o),f=Math.cos(o);l({spine:[.3],hipL:[-1-d*.6,0,.1],knL:[1.2+Math.max(0,f)],anL:[.3],hipR:[-1+d*.6,0,-.1],knR:[1.2+Math.max(0,-f)],anR:[.3]})}else if(s==="zip")l({spine:[.1],hipL:[.3,0,.05],knL:[.6],anL:[.5],hipR:[.15,0,-.05],knR:[.4],anR:[.5]});else if(e.diving)l({spine:[0],hipL:[.1,0,.04],knL:[.1],anL:[.6],hipR:[.1,0,-.04],knR:[.15],anR:[.6]});else if(e.vel.y>2)l({spine:[.25],hipL:[-1.1,0,.1],knL:[1.6],anL:[.3],hipR:[-.5,0,-.1],knR:[1.2],anR:[.3]});else{let d=Math.sin(this.time*7)*.15;l({spine:[.05],hipL:[-.45-d,0,.18],knL:[.8],anL:[.3],hipR:[.1+d,0,-.15],knR:[.55],anR:[.3]})}n.apply(t,c?18:s==="ground"&&a>.6?24:12),n.body.position.y+=(.14-u-n.body.position.y)*Me(14,t),Zn.set(0,this.yaw+Math.PI,0,"YXZ"),Ki.setFromEuler(Zn);let h=this.trickRot;Zn.set(-h.pitch,h.yaw,-h.roll,"YXZ"),jh.setFromEuler(Zn),Ki.multiply(jh),Ki.premultiply(this.tilt),n.root.quaternion.copy(Ki),Ji.set(0,-Vf,-.35).applyQuaternion(Ki),n.root.position.copy(i).add(Ji),n.root.updateMatrixWorld(!0)}update(t,e,i,n){this.time+=t;let s=this.camera,a=.0042*this.sens;i.look.dx||i.look.dy?(this.yaw-=i.look.dx*a,this.pitch-=i.look.dy*a*(this.invertY?-1:1),this.lookIdle=0):this.lookIdle+=t;let o=this.yawKick*Me(9,t);this.yaw+=o,this.yawKick-=o;let l=e.vel,c=l.length(),u=Math.hypot(l.x,l.z),h=e.state,d=h==="swing"&&this.swingTilt>0;if(u>8&&(h==="swing"||h==="air")&&this.lookIdle>(d?.6:1.3)&&!e.trick){let R=Dt(u/30,.25,1)*(d?1.8:.9);this.yaw=ms(this.yaw,Math.atan2(-l.x,-l.z),Me(R,t));let L=Dt(l.y/90,-.3,.12)-.06;this.pitch+=(L-this.pitch)*Me(.6,t)}if(h==="wall"&&this.lookIdle>.35){let R=e.wall;R.vertical&&l.y>2?(this.yaw=ms(this.yaw,Math.atan2(R.nx,R.nz),Me(2.2,t)),this.pitch+=(.78-this.pitch)*Me(2.8,t)):R.climbing&&u>3&&(this.yaw=ms(this.yaw,Math.atan2(-l.x,-l.z),Me(3,t)),this.pitch+=(.02-this.pitch)*Me(2,t))}this.pitch=Dt(this.pitch,-1.45,1.45),h==="swing"&&this.swingTilt>0?(Ji.copy(e.rope.anchor).sub(e.pos).normalize(),Ki.setFromUnitVectors(pv,Ji),this.tiltTarget.copy(Gf).slerp(Ki,this.swingTilt*Dt(c/12,.3,1))):this.tiltTarget.copy(Gf),this.tilt.slerp(this.tiltTarget,Me(h==="swing"?4.5:2.6,t));let f=this.trickRot;if(e.trick){let R=An[e.trick.id],L=R.cam(Math.min(1,e.trick.t/R.dur));f.pitch=L.pitch||0,f.yaw=L.yaw||0,f.roll=L.roll||0,f.fov=L.fov||0}else{let R=Me(10,t),L=z=>Math.atan2(Math.sin(z),Math.cos(z));f.pitch=L(f.pitch)*(1-R),f.yaw=L(f.yaw)*(1-R),f.roll=L(f.roll)*(1-R),f.fov*=1-R}let p=0,x=Math.cos(this.yaw),m=-Math.sin(this.yaw);h==="swing"&&this.swingTilt===0?(Ji.copy(e.rope.anchor).sub(e.pos).normalize(),p=Dt(-(Ji.x*x+Ji.z*m)*.32,-.28,.28)*Dt(c/20,0,1)):h==="wall"&&e.wall.climbing&&!e.wall.vertical?p=-(e.wall.nx*x+e.wall.nz*m)*.2:h==="air"&&u>10&&(p=Dt(-(l.x*x+l.z*m)/120,-.08,.08)),this.roll+=(p-this.roll)*Me(4,t),this.dipV+=(-this.dip*140-this.dipV*17)*t,this.dip+=this.dipV*t,this.nodV+=(-this.nod*120-this.nodV*15)*t,this.nod+=this.nodV*t;let g=0,y=0,S=0;if(h==="ground"&&u>.8){let R=Dt(u/12,.3,1.25);g=(Math.abs(Math.sin(e.runPhase))-.5)*.075*R,y=Math.sin(e.runPhase)*.035*R,S=Math.sin(e.runPhase)*.006*R}else h==="wall"&&e.wall.climbing&&(g=Math.sin(e.runPhase*2)*.03,y=Math.sin(e.runPhase)*.02);let _=e.vaultT>0?-Math.sin((1-e.vaultT/.4)*Math.PI)*.28:0;this.shakeAmt=Math.max(0,this.shakeAmt-t*2.5);let M=this.shakeAmt*this.shakeAmt*.02,w=(Math.random()-.5)*M,v=(Math.random()-.5)*M,b=e.pos.y+Vf;this.smoothY===null||Math.abs(this.smoothY-b)>2.5||h!=="ground"?this.smoothY=b:this.smoothY+=(b-this.smoothY)*Me(16,t),s.position.set(e.pos.x+x*y,this.smoothY+g+this.dip+_-(e.perchT>0?.4:0),e.pos.z+m*y),Zn.set(this.pitch+this.nod+v,this.yaw+f.yaw+w,this.roll+S,"YXZ"),s.quaternion.setFromEuler(Zn),Zn.set(f.pitch,0,f.roll,"YXZ"),s.quaternion.multiply(jh.setFromEuler(Zn)),s.quaternion.premultiply(this.tilt),this.fovKick=Math.max(0,this.fovKick-t*18);let P=82+Dt((c-10)/45,0,1)*22+(e.diving?7:0)+(h==="zip"?8:0)+this.fovKick+f.fov;this.fov+=(P-this.fov)*Me(3.5,t),Math.abs(s.fov-this.fov)>.05&&(s.fov=this.fov,s.updateProjectionMatrix()),s.updateMatrixWorld(),this.vm.visible=!0,this.legs.root.visible=!0,this.updateArms(t,e),this.updateLegs(t,e,s.position)}};var Gl=new Qt,ar=new Qt,Wf=new Ue,tu=new A,Vl=new A,Xf=new zt,mv=new A(0,-1,0),gv=new A(0,1,0);function ya(r,t,e){return new lt(new nn(r,t,3,8),e)}var Wl=class{constructor(t){this.root=new _e,this.body=new _e,this.root.add(this.body),t.add(this.root),this.mats={main:new Ze({color:2303534}),accent:new Ze({color:16742938}),visor:new Ze({color:3729663,emissive:3729663,emissiveIntensity:.6}),dark:new Ze({color:1381914}),bag:new Ze({color:3817290})};let e=this.mats,i=(w,v,b,P)=>{let R=new _e;return R.position.set(v,b,P),w.add(R),R};this.hips=i(this.body,0,.03,0);let n=new lt(new xt(.3,.17,.2),e.main);this.hips.add(n);let s=new lt(new xt(.32,.05,.22),e.accent);s.position.y=.07,this.hips.add(s),this.spine=i(this.hips,0,.08,0);let a=ya(.16,.26,e.main);a.position.y=.24,a.scale.set(1.18,1,.78),this.spine.add(a);let o=new lt(new xt(.06,.5,.03),e.accent);o.position.set(0,.25,.12),o.rotation.z=.55,this.spine.add(o),this.pack=new _e,this.pack.position.set(0,.27,-.17),this.spine.add(this.pack);let l=new lt(new xt(.3,.34,.14),e.bag);this.pack.add(l);let c=new lt(new xt(.31,.06,.15),e.accent);c.position.y=.12,this.pack.add(c),this.cargo=new _e,this.cargo.position.set(0,.05,-.1),this.pack.add(this.cargo),this.head=i(this.spine,0,.5,0);let u=new lt(new oe(.13,14,10),e.main);u.position.y=.11,u.scale.set(.95,1.08,1),this.head.add(u);let h=new lt(new xt(.2,.055,.08),e.visor);h.position.set(0,.13,.095),this.head.add(h);let d=new lt(new xt(.035,.05,.22),e.accent);d.position.set(0,.24,-.01),this.head.add(d),this.headMeshes=[u,h,d];let f=w=>{let v=i(this.spine,.215*w,.43,0),b=ya(.055,.17,e.main);b.position.y=-.13,v.add(b);let P=new lt(new xt(.02,.2,.03),e.accent);P.position.set(.05*w,-.13,0),v.add(P);let R=i(v,0,-.27,0),L=ya(.05,.15,e.main);L.position.y=-.12,R.add(L);let z=new lt(new Wt(.058,.052,.1,8),e.accent);z.position.y=-.2,R.add(z);let U=new lt(new oe(.055,8,6),e.dark);return U.position.y=-.28,R.add(U),{sh:v,el:R,hand:U}},p=f(1),x=f(-1);this.shL=p.sh,this.elL=p.el,this.handL=p.hand,this.shR=x.sh,this.elR=x.el,this.handR=x.hand;let m=w=>{let v=i(this.hips,.095*w,-.06,0),b=ya(.075,.25,e.main);b.position.y=-.2,v.add(b);let P=new lt(new xt(.02,.3,.03),e.accent);P.position.set(.07*w,-.2,0),v.add(P);let R=i(v,0,-.41,0),L=ya(.06,.26,e.main);L.position.y=-.19,R.add(L);let z=new lt(new xt(.11,.075,.24),e.accent);return z.position.set(0,-.42,.05),R.add(z),{hp:v,kn:R}},g=m(1),y=m(-1);this.hipL=g.hp,this.knL=g.kn,this.hipR=y.hp,this.knR=y.kn,this.joints=["spine","head","shL","elL","shR","elR","hipL","knL","hipR","knR"],this.targets={};for(let w of this.joints)this.targets[w]=new Qt;this.bodyQuat=new Qt,this.t=0,this.crouch=0,this.visible=!0;let S=document.createElement("canvas");S.width=S.height=64;let _=S.getContext("2d"),M=_.createRadialGradient(32,32,2,32,32,30);M.addColorStop(0,"rgba(0,0,0,0.55)"),M.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=M,_.fillRect(0,0,64,64),this.shadow=new lt(new fi(1.6,1.6),new Ae({map:new ai(S),transparent:!0,depthWrite:!1,fog:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=2,t.add(this.shadow)}setSuit(t){this.mats.main.color.setHex(t.main),this.mats.accent.color.setHex(t.accent),this.mats.visor.color.setHex(t.visor),this.mats.visor.emissive.setHex(t.visor)}setVisible(t){this.body.visible=t}pose(t,e=0,i=0,n=0){Wf.set(e,i,n,"XYZ"),this.targets[t].setFromEuler(Wf)}aim(t,e,i){let n=e.parent;n.updateWorldMatrix(!0,!1),e.getWorldPosition(tu),Vl.copy(i).sub(tu).normalize(),n.getWorldQuaternion(ar).invert(),Vl.applyQuaternion(ar),this.targets[t].setFromUnitVectors(mv,Vl)}update(t,e,i){this.t+=t;let n=this.t,s=e.vel,a=Math.hypot(s.x,s.z),o=s.length();this.root.position.copy(e.pos);let l=tu.set(0,1,0),c=Vl.set(Math.sin(e.facing),0,Math.cos(e.facing)),u=0,h=e.state;if(h==="swing")l.copy(e.rope.anchor).sub(e.pos).normalize(),c.copy(s).addScaledVector(l,-s.dot(l)),c.lengthSq()<.01&&c.set(Math.sin(e.facing),0,Math.cos(e.facing));else if(h==="wall")e.wall.climbing?(l.set(e.wall.nx,0,e.wall.nz),c.set(0,Math.sign(s.y||1),0)):c.set(-e.wall.nx,0,-e.wall.nz);else if(h==="zip")c.copy(e.zip.target).sub(e.pos),c.y*=.4,l.set(0,1,0).addScaledVector(c.normalize(),.8);else if(h==="air")if(a>1&&c.set(s.x,0,s.z),e.diving&&o>5)l.copy(s).normalize(),c.set(0,-1,0).addScaledVector(l,l.y),c.lengthSq()<.01&&c.set(Math.sin(e.facing),0,Math.cos(e.facing));else{let M=Dt(a/40,0,.5);l.set(0,1,0).addScaledVector(c.clone().normalize(),M)}else if(h==="ground"){let M=Dt((a-3)/30,0,.25);l.set(0,1,0).addScaledVector(c,M)}l.normalize(),c.addScaledVector(l,-c.dot(l)).normalize();let d=new A().crossVectors(l,c);if(Xf.makeBasis(d,l,c),Gl.setFromRotationMatrix(Xf),e.flipT>=0){let M=Math.min(e.flipT/e.flipDur,1),w=(1-Math.pow(1-M,2))*Math.PI*2*(e.flipDir||1);ar.setFromAxisAngle(new A(1,0,0),w),Gl.multiply(ar)}if(e.twistT>=0){let M=Math.min(e.twistT/.6,1);ar.setFromAxisAngle(gv,M*Math.PI*2),Gl.multiply(ar)}let f=h==="swing"?9:h==="wall"?14:10;this.bodyQuat.slerp(Gl,Me(e.flipT>=0||e.twistT>=0?30:f,t)),this.root.quaternion.copy(this.bodyQuat);let p=(M,w,v,b)=>this.pose(M,w,v,b),x=e.runPhase;if(h==="ground")if(e.landT>0||e.perchT>0)u=e.perchT>0?.42:.35*Math.min(1,e.landT/.2),p("spine",.55,0,0),p("head",-.45,0,0),p("hipL",-1.5,0,.25),p("knL",2.1,0,0),p("hipR",-1.2,0,-.2),p("knR",2,0,0),p("shL",-.7,0,.35),p("elL",-.4,0,0),p("shR",-.2,0,-.7),p("elR",-.3,0,0);else if(a>.6){let M=Dt(a/13,.25,1.15),w=Math.sin(x),v=Math.cos(x);p("spine",.08+.22*M,0,0),p("head",-.12-.15*M,0,0),p("hipL",-w*.95*M,0,.02),p("knL",(.25+Math.max(0,v)*1.5)*M,0,0),p("hipR",w*.95*M,0,-.02),p("knR",(.25+Math.max(0,-v)*1.5)*M,0,0),p("shL",w*.9*M,0,.12),p("elL",-.4-.8*M,0,0),p("shR",-w*.9*M,0,-.12),p("elR",-.4-.8*M,0,0),u=.03*Math.abs(Math.sin(x))*M}else{let M=Math.sin(n*2.2)*.03;p("spine",M,0,0),p("head",-M,Math.sin(n*.5)*.3,0),p("hipL",0,0,.06),p("knL",.05,0,0),p("hipR",0,0,-.06),p("knR",.05,0,0),p("shL",.05,0,.16),p("elL",-.2,0,0),p("shR",.05,0,-.16),p("elR",-.2,0,0)}else if(h==="swing"){let M=e.rope.side>0?"shR":"shL",w=e.rope.side>0?"L":"R",v=w==="L"?1:-1,b=Math.sin(n*2.5)*.15;p("spine",-.18,0,0),p("head",-.25,0,0),p("sh"+w,.35,0,v*1.3),p("el"+w,-.5,0,0),p(e.rope.side>0?"elR":"elL",-.05,0,0),p("hipL",-.5+b,0,.12),p("knL",1.1,0,0),p("hipR",.15-b,0,-.08),p("knR",.45,0,0),this.aim(M,e.rope.side>0?this.shR:this.shL,e.rope.visual)}else if(h==="zip")p("spine",.1,0,0),p("head",-.3,0,0),p("shL",-2.7,0,.2),p("elL",-.1,0,0),p("shR",-2.7,0,-.2),p("elR",-.1,0,0),p("hipL",.35,0,.05),p("knL",.6,0,0),p("hipR",.15,0,-.05),p("knR",.3,0,0);else if(h==="wall")if(e.wall.climbing){let w=Math.sin(x),v=Math.cos(x);p("spine",.35,0,0),p("head",-.5,0,0),p("hipL",-w*1.1*1.1,0,0),p("knL",(.3+Math.max(0,v)*1.6)*1.1,0,0),p("hipR",w*1.1*1.1,0,0),p("knR",(.3+Math.max(0,-v)*1.6)*1.1,0,0),p("shL",w*1,0,.2),p("elL",-1.2,0,0),p("shR",-w*1,0,-.2),p("elR",-1.2,0,0)}else{let M=Math.sin(x)*.4;u=.1,p("spine",.35,0,0),p("head",-.6,0,0),p("shL",-2.4+M,0,.6),p("elL",-.6,0,0),p("shR",-2-M,0,-.6),p("elR",-.7,0,0),p("hipL",-1.3-M,0,.7),p("knL",1.9,0,0),p("hipR",-.9+M,0,-.7),p("knR",1.7,0,0)}else{if(e.diving)p("spine",-.1,0,0),p("head",-.9,0,0),p("shL",.35,0,.22),p("elL",0,0,0),p("shR",.35,0,-.22),p("elR",0,0,0),p("hipL",.05,0,.05),p("knL",.15,0,0),p("hipR",.12,0,-.05),p("knR",.3,0,0);else if(s.y>2||e.flipT>=0)p("spine",.25,0,0),p("head",-.2,0,0),p("hipL",-1.1,0,.1),p("knL",1.7,0,0),p("hipR",-.5,0,-.1),p("knR",1.3,0,0),p("shL",-.4,0,.9),p("elL",-.7,0,0),p("shR",-.4,0,-.9),p("elR",-.7,0,0);else{let M=Math.sin(n*7)*.12;p("spine",.1,0,0),p("head",-.3,0,0),p("shL",-.2+M,0,1.5),p("elL",-.4,0,0),p("shR",-.2-M,0,-1.5),p("elR",-.4,0,0),p("hipL",-.5-M,0,.2),p("knL",.8,0,0),p("hipR",.15+M,0,-.15),p("knR",.5,0,0)}e.rollT>=0&&(p("hipL",-1.8,0,0),p("knL",2.2,0,0),p("hipR",-1.8,0,0),p("knR",2.2,0,0),p("spine",.8,0,0))}if(e.throwT>0){let M=e.throwT/.35;p("shR",-2.2*M-.4,0,-.3),p("elR",-.3,0,0)}let m=Me(h==="ground"&&a>.6?22:13,t);for(let M of this.joints)this[M].quaternion.slerp(this.targets[M],m);this.crouch+=(u-this.crouch)*Me(14,t),this.body.position.y=-this.crouch;let g=i.raycast(e.pos.x,e.pos.y,e.pos.z,0,-1,0,80,this._shadowHit||(this._shadowHit={})),y=0,S;g?y=g.y:i.groundAt(e.pos.x,e.pos.z)===null&&(y=-100),S=e.pos.y-.9-y,this.shadow.visible=y>-50&&S<60,this.shadow.position.set(e.pos.x,y+.05,e.pos.z);let _=1+S*.04;this.shadow.scale.set(_,_,_),this.shadow.material.opacity=Dt(1-S/60,0,1)}handWorld(t,e){return(t>0?this.handR:this.handL).getWorldPosition(e)}};var Fi=new A,qf=new A,bi=new A,Xl={},ql=class{constructor(t){this.world=t,this.pos=new A(0,40,0),this.vel=new A,this.state="air",this.c={},this.facing=0,this.rope={active:!1,anchor:new A,visual:new A,length:0,target:0,side:1,time:0,box:null},this.nextSide=1,this.zip={target:new A,perch:!1,nx:0,nz:0,time:0,launchQueued:!1,box:null},this.zipCandidate={valid:!1,target:new A,perch:!1,nx:0,nz:0,box:null},this.wall={nx:0,nz:0,box:null,time:0,climbing:!1,vertical:!0},this.vaultT=0,this.airZipCD=0,this.airZipT=0,this.airZipTarget=new A,this.camRight=new A(1,0,0),this.aimFwd=new A(0,0,-1),this.trick=null,this.trickQueue=null,this.airTricks=0,this.neutralIdx=0,this.lastTrickId=null,this.repeat=0,this.diving=!1,this.flipT=-1,this.flipDur=.6,this.flipDir=1,this.twistT=-1,this.rollT=-1,this.landT=0,this.perchT=0,this.throwT=0,this.runPhase=0,this.stepAcc=0,this.coyote=0,this.swingCooldown=0,this.wallCooldown=0,this.jumpHeldT=0,this.airTime=0,this.groundTime=0,this.respawnT=-1,this.lastSafe=new A(0,40,0),this.safeTimer=0,this.events=[],this.anchorHint=!1,this.hintTimer=0,this.combo={count:0,score:0,best:0},this.stats={range:ee.ROPE_MAX,power:ee.SWING_ASSIST,zip:ee.ZIP_SPEED},this.autoChain=!0,this.moveDir=new A,this.camFwd=new A(0,0,-1)}emit(t,e={}){this.events.push({type:t,...e})}teleport(t,e,i){this.rope.active&&this.emit("release",{side:this.rope.side,anchor:this.rope.anchor.clone(),kind:"teleport"}),this.pos.set(t,e,i),this.vel.set(0,0,0),this.state="air",this.rope.active=!1,this.lastSafe.copy(this.pos)}get speed(){return this.vel.length()}addStyle(t,e){this.combo.count++,this.combo.score+=t*Math.min(1+this.combo.count*.1,4),e&&this.emit("style",{label:e,points:t})}update(t,e,i){if(this.respawnT>=0){this.respawnT-=t,this.respawnT<0&&(this.teleport(this.lastSafe.x,this.lastSafe.y+.5,this.lastSafe.z),this.emit("respawn"));return}let n=i.yaw,s=-Math.sin(n),a=-Math.cos(n),o=Math.cos(n),l=-Math.sin(n);if(this.moveDir.set(s*e.move.y+o*e.move.x,0,a*e.move.y+l*e.move.x),this.moveDir.lengthSq()>1&&this.moveDir.normalize(),i.getForward(this.camFwd),i.getAimForward?i.getAimForward(this.aimFwd):this.aimFwd.copy(this.camFwd),this.camRight.set(o,0,l),this.frozen){this.vel.set(0,0,0),this.prevSwingHeld=e.swingHeld;return}this.vaultT=Math.max(0,this.vaultT-t),this.airZipCD-=t,this.airZipT=Math.max(0,this.airZipT-t),this.swingCooldown-=t,this.wallCooldown-=t,this.coyote-=t,this.landT=Math.max(0,this.landT-t),this.perchT=Math.max(0,this.perchT-t),this.throwT=Math.max(0,this.throwT-t),this.flipT>=0&&(this.flipT+=t,this.flipT>this.flipDur&&(this.flipT=-1)),this.twistT>=0&&(this.twistT+=t,this.twistT>.6&&(this.twistT=-1)),this.rollT>=0&&(this.rollT+=t,this.rollT>.5&&(this.rollT=-1)),e.trickPressed&&this.tryTrick(e),this.trick&&(this.trick.t+=t,this.trick.t>=An[this.trick.id].dur&&this.completeTrick()),e.zipPressed&&this.tryZip(),e.jumpPressed&&this.onJumpPressed(),e.jumpHeld&&(this.jumpHeldT+=t),e.jumpReleased&&this.onJumpReleased(),this.state==="air"&&e.jumpHeld&&this.jumpHeldT>.2&&!this.diving&&this.airTime>.15&&(this.diving=!0,this.emit("dive")),(!e.jumpHeld||this.state!=="air")&&(this.diving=this.state==="air"&&this.diving&&e.jumpHeld);let c=e.swingHeld&&!this.prevSwingHeld;this.prevSwingHeld=e.swingHeld,e.swingHeld&&!this.rope.active&&this.state!=="zip"&&this.swingCooldown<=0&&(c||this.state==="air"&&this.vel.y<4)&&this.tryAttach(),!e.swingHeld&&this.rope.active&&this.release("manual"),e.swingHeld||(this._missEmitted=!1);let u=Math.min(8,Math.ceil(t/(1/120))),h=t/u;for(let p=0;p<u;p++)this.step(h,e);this.trick&&this.state!=="air"&&(this.trick.t/An[this.trick.id].dur>.72?this.completeTrick():this.bail()),(this.state==="ground"||this.state==="wall")&&(this.airTricks=0,this.lastTrickId=null,this.repeat=0),this.rope.active&&this.checkWrap();let d=Math.hypot(this.vel.x,this.vel.z);this.state==="ground"?d>.5&&(this.facing=Math.atan2(this.vel.x,this.vel.z)):d>2&&(this.facing=Math.atan2(this.vel.x,this.vel.z)),this.state==="ground"?(this.groundTime+=t,this.airTime=0,this.groundTime>.6&&this.combo.count>0&&this.endCombo(),this.safeTimer+=t,this.safeTimer>1&&(this.safeTimer=0,this.lastSafe.copy(this.pos))):(this.airTime+=t,this.groundTime=0),this.pos.y<st.WATER_Y+.3&&this.world.groundAt(this.pos.x,this.pos.z)===null&&(this.emit("splash",{x:this.pos.x,z:this.pos.z}),this.respawnT=1.2,this.rope.active=!1,this.state="air",this.vel.set(0,0,0),this.endCombo());let f=2600;this.pos.x=Dt(this.pos.x,-f,f),this.pos.z=Dt(this.pos.z,-f,f),this.updateZipCandidate(i),this.hintTimer-=t,this.hintTimer<=0&&(this.hintTimer=.2,this.anchorHint=this.rope.active||!!this.findAnchor(this.desiredDir(qf),this.nextSide))}endCombo(){if(this.combo.count>=3){let t=Math.round(this.combo.score);this.emit("comboEnd",{points:t,count:this.combo.count}),this.combo.best=Math.max(this.combo.best,t)}this.combo.count=0,this.combo.score=0}onJumpPressed(){this.jumpHeldT=0;let t=this.state;if(t==="ground"||t==="air"&&this.coyote>0){let e=Math.hypot(this.vel.x,this.vel.z);this.vel.y=ee.JUMP+Math.min(e*.12,3),this.state="air",this.coyote=0,this.emit("jump"),this.perchT>0&&(this.vel.x+=this.camFwd.x*12,this.vel.z+=this.camFwd.z*12,this.vel.y=16,this.flip(.7),this.addStyle(40,"POINT LAUNCH"),this.emit("launch"))}else t==="air"&&this.vaultT>0?(this.vel.set(this.camFwd.x*12,15.5,this.camFwd.z*12),this.vaultT=0,this.addStyle(35,"LEDGE LAUNCH"),this.emit("launch")):t==="wall"?this.wallJump():t==="swing"?this.release("jump"):t==="zip"&&(this.zip.launchQueued=!0)}onJumpReleased(){this.diving=!1,this.jumpHeldT=0}get canTrick(){return(this.state==="air"||this.state==="swing")&&this.respawnT<0}tryTrick(t){if(!this.canTrick)return;this.state==="swing"&&this.release("trick");let e=t.move.x,i=t.move.y,n;if(i>.5?n="frontflip":i<-.5?n="backflip":e<-.5?n="rollL":e>.5?n="rollR":n=Jh[this.neutralIdx++%Jh.length],this.trick){this.trickQueue=n;return}this.startTrick(n)}startTrick(t){this.trick={id:t,t:0},this.diving=!1,this.emit("trickStart",{id:t})}completeTrick(){let t=this.trick.id,e=An[t];this.repeat=t===this.lastTrickId||e.name==="BARREL ROLL"&&this.lastTrickId&&An[this.lastTrickId].name==="BARREL ROLL"?this.repeat+1:0,this.lastTrickId=t;let i=["","DOUBLE ","TRIPLE ","QUAD "][Math.min(this.repeat,3)],n=Math.round(e.pts*(1+this.airTricks*.5)*(1+this.repeat*.25));if(this.airTricks++,this.combo.count++,this.combo.score+=n,this.trick=null,this.emit("trickDone",{name:i+e.name,pts:n,chain:this.airTricks}),this.trickQueue&&this.state==="air"){let s=this.trickQueue;this.trickQueue=null,this.startTrick(s)}else this.trickQueue=null}bail(){this.trick=null,this.trickQueue=null,this.combo.score*=.5,this.emit("bail")}flip(t){this.flipT=0,this.flipDur=t,this.flipDir=1}desiredDir(t){let e=Math.hypot(this.vel.x,this.vel.z);return t.set(this.camFwd.x,0,this.camFwd.z),t.lengthSq()<1e-4&&t.set(Math.sin(this.facing),0,Math.cos(this.facing)),t.normalize(),e>4&&t.multiplyScalar(.75).add(bi.set(this.vel.x/e,0,this.vel.z/e).multiplyScalar(.25)).normalize(),this.moveDir.lengthSq()>.04&&t.multiplyScalar(.35).addScaledVector(this.moveDir,.65).normalize(),t}findAnchor(t,e){let i=this.pos,n=this.vel,s=this.stats.range,a=Math.hypot(n.x,n.z),o=Dt(16+a*.55,16,44),l=Dt(22+a*.2,22,34),c=-t.z,u=t.x,h=i.x+t.x*o+c*e*9,d=i.y+l,f=i.z+t.z*o+u*e*9,p=s,x=this.world.queryAABB(i.x-p,i.y-5,i.z-p,i.x+p,i.y+p,i.z+p).slice(),m=null,g=1/0,y=null,S=1/0;for(let _ of x){if(_.maxY<7)continue;let M=Dt(h,_.minX,_.maxX),w=Dt(d,_.minY,_.maxY),v=Dt(f,_.minZ,_.maxZ);if(w>=_.maxY-.001&&M>_.minX&&M<_.maxX&&v>_.minZ&&v<_.maxZ){let B=i.x<_.minX?_.minX-i.x:i.x>_.maxX?i.x-_.maxX:0,H=i.z<_.minZ?_.minZ-i.z:i.z>_.maxZ?i.z-_.maxZ:0;if(B===0&&H===0)continue;B>=H?M=i.x<_.minX?_.minX:_.maxX:v=i.z<_.minZ?_.minZ:_.maxZ}let b=M-i.x,P=w-i.y,R=v-i.z,L=Math.sqrt(b*b+P*P+R*R);if(L<8||L>s||P<7)continue;let z=Math.hypot(b,R)||1,U=(b*t.x+R*t.z)/z,I=Math.hypot(M-h,w-d,v-f);P<16&&(I+=(16-P)*2.5),U<-.15&&(I+=70),I-=U*10,L>s*.85&&(I+=(L-s*.85)*2),I<g?(y=m,S=g,m={x:M,y:w,z:v,box:_,L},g=I):I<S&&(y={x:M,y:w,z:v,box:_,L},S=I)}for(let _ of[m,y]){if(!_)continue;let M=(_.x-i.x)/_.L,w=(_.y-i.y)/_.L,v=(_.z-i.z)/_.L,b=this.world.raycast(i.x,i.y+.5,i.z,M,w,v,_.L+1,Xl);if(!b||b.t>=_.L-1.2)return _;if((b.box===_.box||b.t>10)&&b.y>i.y+7&&b.t>8)return{x:b.x,y:b.y,z:b.z,box:b.box,L:b.t}}return null}tryAttach(){let t=this.desiredDir(qf),e=this.nextSide,i=this.findAnchor(t,e);if(i||(e=-e,i=this.findAnchor(t,e)),!i)return this._missEmitted||(this.emit("miss"),this._missEmitted=!0),!1;this._missEmitted=!1;let n=this.rope;n.active=!0,n.visual.set(i.x,i.y,i.z);let s=Math.hypot(this.vel.x,this.vel.z),a=t.x,o=t.z;if(s>3){let g=this.vel.x/s,y=this.vel.z/s,S=Math.hypot(this.camFwd.x,this.camFwd.z),_=S>.1?this.camFwd.x/S:g,M=S>.1?this.camFwd.z/S:y,w=Math.acos(Dt(g*_+y*M,-1,1)),v=.95;if(w>v){let P=Math.sign(g*M-y*_)||1,R=Math.cos(v),L=Math.sin(v)*P;_=g*R-y*L,M=g*L+y*R}a=g*.4+_*.6,o=y*.4+M*.6;let b=Math.hypot(a,o)||1;a/=b,o/=b}let l=i.x-this.pos.x,c=i.z-this.pos.z,u=l*a+c*o,h=l-a*u,d=c-o*u,f=Dt(u,5,60);if(n.anchor.set(this.pos.x+a*f+h*.08,i.y,this.pos.z+o*f+d*.08),n.box=i.box,n.length=this.pos.distanceTo(n.anchor),n.target=Math.max(ee.ROPE_MIN,Math.min(n.length,i.y-3.4)),n.side=e,n.time=0,this.nextSide=-e,this.state==="ground"?(this.vel.y=Math.max(this.vel.y,7),this.pos.y+=.05):this.state==="wall"&&(this.vel.x+=this.wall.nx*6,this.vel.z+=this.wall.nz*6,this.wallCooldown=.5),n.dirX=a,n.dirZ=o,this.vel.y<-10){let g=Math.min(-this.vel.y-10,12)*.25;this.vel.x+=t.x*g,this.vel.z+=t.z*g}this.state="swing",this.diving=!1,this.addStyle(10,null);let p=i.box,x=.05,m=new A(0,1,0);return p&&(Math.abs(i.x-p.minX)<x?m.set(-1,0,0):Math.abs(i.x-p.maxX)<x?m.set(1,0,0):Math.abs(i.z-p.minZ)<x?m.set(0,0,-1):Math.abs(i.z-p.maxZ)<x?m.set(0,0,1):Math.abs(i.y-p.minY)<x&&m.set(0,-1,0)),this.emit("web",{side:e,anchor:n.visual.clone(),normal:m}),!0}release(t){let e=this.rope;if(!e.active)return;e.active=!1,this.state="air",this.swingCooldown=t==="auto"?.06:.12,Fi.copy(this.pos).sub(e.anchor);let i=Fi.length()||1,n=-Fi.y/i,s=Math.hypot(this.vel.x,this.vel.z)||1,a=Fi.x*e.dirX+Fi.z*e.dirZ>0,o=Math.acos(Dt(n,-1,1)),l=this.vel.y>1&&a&&o>.45&&o<1.05&&e.time>.35;if(t==="jump"&&(this.vel.y+=7.5,this.vel.x+=this.vel.x/s*3,this.vel.z+=this.vel.z/s*3,this.flip(.65),this.addStyle(20,null)),l&&t!=="auto")this.vel.multiplyScalar(1.1),this.vel.y+=3,this.addStyle(35,"PERFECT RELEASE"),this.emit("perfect");else if(t==="auto"&&(this.vel.multiplyScalar(1.02),this.vel.y+=1.5,this.vel.y>16)){let c=this.vel.y-16;this.vel.y=16+c*.3;let u=c*.5/s;this.vel.x+=this.vel.x*u,this.vel.z+=this.vel.z*u}this.emit("release",{side:e.side,anchor:e.anchor.clone(),kind:t})}checkWrap(){let t=this.rope;bi.copy(t.visual).sub(this.pos);let e=bi.length();if(e<4||t.time<.15)return;bi.divideScalar(e);let i=this.world.raycast(this.pos.x,this.pos.y,this.pos.z,bi.x,bi.y,bi.z,e-.8,Xl);i&&i.t<e-1.5&&i.t>2&&(t.visual.set(i.x+i.nx*.05,i.y+i.ny*.05,i.z+i.nz*.05),this.emit("wrap",{anchor:t.visual.clone()}))}updateZipCandidate(t){let e=this.zipCandidate;e.valid=!1;let i=t.position,n=this.aimFwd;if(this.trick)return;let s=Math.max(0,Fi.copy(this.pos).sub(i).dot(n))+2,a=s+115,o=this.world.raycast(i.x+n.x*s,i.y+n.y*s,i.z+n.z*s,n.x,n.y,n.z,a-s,Xl);if(!o)return;let l=o.box,c=Math.hypot(o.x-this.pos.x,o.y-this.pos.y,o.z-this.pos.z);if(!(c<6||c>115)){if(e.box=l,o.ny>.5)e.target.set(o.x,o.y+ee.HALF_H+.05,o.z),e.perch=!0;else if(Math.abs(o.ny)<.5&&l.maxY-o.y<14){if(e.target.set(o.x-o.nx*.7,l.maxY+ee.HALF_H+.05,o.z-o.nz*.7),e.perch=!0,this.world.overlaps(e.target.x,e.target.y,e.target.z,ee.HALF_W,ee.HALF_H))return}else if(Math.abs(o.ny)<.5)e.target.set(o.x+o.nx*.45,o.y,o.z+o.nz*.45),e.perch=!1;else return;e.nx=o.nx,e.nz=o.nz,e.valid=!0}}tryZip(){let t=this.zipCandidate;if(this.state==="zip")return;if(!t.valid||this.preferAirZip&&this.state!=="ground"){(this.state==="air"||this.state==="swing")&&this.airZipCD<=0&&this.airZip();return}this.rope.active&&(this.rope.active=!1,this.emit("release",{side:this.rope.side,anchor:this.rope.anchor.clone(),kind:"zip"}));let e=this.zip;e.target.copy(t.target),e.perch=t.perch,e.nx=t.nx,e.nz=t.nz,e.box=t.box,e.time=0,e.launchQueued=!1,e.useVia=!1;let i=t.box;if(t.perch&&i&&this.pos.y-ee.HALF_H<i.maxY){let n=this.pos,s=n.x<i.minX?i.minX-n.x:n.x>i.maxX?n.x-i.maxX:-1,a=n.z<i.minZ?i.minZ-n.z:n.z>i.maxZ?n.z-i.maxZ:-1,o=ee.HALF_W+.9;e.via=e.via||new A,(s>=0||a>=0)&&(e.via.copy(e.target),e.via.y=i.maxY+ee.HALF_H+.4,s>=a?e.via.x=n.x<i.minX?i.minX-o:i.maxX+o:e.via.z=n.z<i.minZ?i.minZ-o:i.maxZ+o,e.useVia=!0)}this.state="zip",this.diving=!1,this.addStyle(15,null),this.emit("zip",{target:e.target.clone()})}airZip(){let t=this.camFwd;this.rope.active&&this.release("zip");let e=this.vel.length(),i=Math.max(e,16)*.7+12;this.vel.multiplyScalar(.3),this.vel.x+=t.x*i,this.vel.y+=t.y*i*.8+4,this.vel.z+=t.z*i;let n=this.world.raycast(this.pos.x,this.pos.y+.5,this.pos.z,t.x,t.y,t.z,70,Xl);n?this.airZipTarget.set(n.x,n.y,n.z):this.airZipTarget.copy(this.pos).addScaledVector(t,45),this.state="air",this.diving=!1,this.airZipCD=.9,this.airZipT=.3,this.addStyle(15,"WEB ZIP"),this.emit("airzip",{target:this.airZipTarget.clone()})}wallJump(){let t=this.wall,e=this.camFwd,i=e.x,n=Math.max(e.y,-.1),s=e.z,a=i*t.nx+s*t.nz;a<.45&&(i+=t.nx*(.45-a)*1.6,s+=t.nz*(.45-a)*1.6);let o=Math.hypot(i,n,s)||1,l=Math.max(0,this.vel.y)*.45;this.vel.set(i/o*14,n/o*14+6+l,s/o*14),this.state="air",this.wallCooldown=.35,this.flip(.5),this.addStyle(20,"WALL JUMP"),this.emit("jump")}ledgeVault(t){let e=this.wall;t>15?(this.vel.set(-e.nx*4+this.camFwd.x*3,t*.72+3,-e.nz*4+this.camFwd.z*3),this.addStyle(25,"LEDGE LAUNCH"),this.emit("launch")):(this.vel.set(-e.nx*5.5,6.8,-e.nz*5.5),this.vaultT=.4,this.emit("vault")),this.state="air",this.wallCooldown=.3}tryCornerWrap(t){let e=this.wall,i=e.box,n=this.pos,s=ee.HALF_W;if(!i||n.y<i.minY+.6||n.y>i.maxY-.2)return!1;let a=Math.sign(t),o=-e.nz*a,l=e.nx*a,c=n.x,u=n.z;if(o>.5?c=i.maxX+s+.03:o<-.5&&(c=i.minX-s-.03),l>.5?u=i.maxZ+s+.03:l<-.5&&(u=i.minZ-s-.03),e.nx>.5?c=i.maxX-.45:e.nx<-.5&&(c=i.minX+.45),e.nz>.5?u=i.maxZ-.45:e.nz<-.5&&(u=i.minZ+.45),Math.hypot(c-n.x,u-n.z)>2.5||this.world.overlaps(c,n.y,u,s,ee.HALF_H))return!1;n.x=c,n.z=u;let h=Math.abs(t),d=-e.nx,f=-e.nz;this.vel.set(d*h-o*2,this.vel.y,f*h-l*2);let p=Dl(Math.atan2(-o,-l),Math.atan2(-d,-f));return e.nx=o,e.nz=l,this.emit("corner",{delta:p}),this.addStyle(15,"CORNER"),!0}enterWall(t,e,i,n){if((!i||i.maxY-this.pos.y<1.2)&&i&&i.maxY-(this.pos.y-ee.HALF_H)<2.2){this.pos.y=i.maxY+ee.HALF_H+.02;return}let s=this.wall,a=this.state;s.nx=t,s.nz=e,s.box=i,s.time=0;let o=this.vel,l=-e,c=t,u=o.x*l+o.z*c,h,d;Math.abs(u)<n*1.1||a==="ground"?(d=Math.max(o.y,Math.min(28,n*.8+(a==="ground"?4.5:2))),h=u*.4):(d=Math.max(o.y*.6,2.5),h=u),o.set(l*h,d,c*h),s.vertical=Math.abs(d)>=Math.abs(h),s.climbing=!0,this.rope.active&&(this.rope.active=!1,this.emit("release",{side:this.rope.side,anchor:this.rope.anchor.clone(),kind:"wall"})),this.state="wall",this.diving=!1,n>16&&this.emit("impact",{amount:n-16}),this.emit("wallLand",{impact:n}),this.addStyle(10,null)}step(t,e){switch(this.state){case"ground":return this.stepGround(t,e);case"air":return this.stepAir(t,e);case"swing":return this.stepSwing(t,e);case"wall":return this.stepWall(t,e);case"zip":return this.stepZip(t,e)}}applyDrag(t,e){let i=this.vel,n=i.length();n>0&&i.multiplyScalar(Math.max(0,1-e*n*t)),n>ee.MAX_SPEED&&i.multiplyScalar(ee.MAX_SPEED/n)}move(t){return this.world.moveBody(this.pos,this.vel,t,ee.HALF_W,ee.HALF_H,this.c)}stepGround(t){let e=this.vel,i=this.moveDir,n=i.length(),s=n>.85?ee.SPRINT:ee.RUN*n/.85,a=n>.01?i.x/n*s:0,o=n>.01?i.z/n*s:0,l=Math.hypot(e.x,e.z),c=l>ee.SPRINT+1?2.2:this.landT>0?3:ee.GROUND_ACCEL,u=Me(c,t);e.x+=(a-e.x)*u,e.z+=(o-e.z)*u,e.y-=ee.GRAVITY*t;let h=this.move(t),d=Math.hypot(e.x,e.z);if(this.runPhase+=d*t*(Math.PI*2/2.7),this.stepAcc+=d*t,this.stepAcc>1.35&&(this.stepAcc=0,this.emit("step",{speed:d})),h.wall&&n>.5&&this.wallCooldown<=0&&-(i.x*h.wallNX+i.z*h.wallNZ)/n>.6){this.enterWall(h.wallNX,h.wallNZ,h.wallBox,Math.max(l,4));return}h.ground||(this.state="air",this.coyote=.15)}lookSteer(t,e){let i=this.vel,n=Math.hypot(this.camFwd.x,this.camFwd.z),s=Math.hypot(i.x,i.z);if(n<.1||s<4)return;let a=this.camFwd.x/n,o=this.camFwd.z/n,l=i.x/s,c=i.z/s,u=a*l+o*c;if(u<-.1)return;let h=a-l*u,d=o-c*u;i.x+=h*e*t,i.z+=d*e*t;let f=Math.hypot(i.x,i.z)||1;i.x*=s/f,i.z*=s/f}stepAir(t){let e=this.vel;this.lookSteer(t,ee.LOOK_STEER*.45),e.y-=ee.GRAVITY*t*(this.diving?1.35:1),this.applyDrag(t,this.diving?ee.DIVE_DRAG:ee.DRAG);let i=this.moveDir;if(i.lengthSq()>.01){let a=Math.hypot(e.x,e.z);e.x+=i.x*ee.AIR_ACCEL*t,e.z+=i.z*ee.AIR_ACCEL*t;let o=Math.hypot(e.x,e.z),l=Math.max(a,10);o>l&&(e.x*=l/o,e.z*=l/o)}let n=e.clone(),s=this.move(t);if(s.ground){this.land(s.impactY,n);return}s.wall&&this.wallCooldown<=0&&this.wantsWall(n,s)&&this.enterWall(s.wallNX,s.wallNZ,s.wallBox,Math.abs(n.x*s.wallNX+n.z*s.wallNZ))}wantsWall(t,e){let i=this.moveDir,n=i.lengthSq()>.04?-(i.x*e.wallNX+i.z*e.wallNZ)/i.length():0,s=Math.abs(t.x*e.wallNX+t.z*e.wallNZ),a=Math.hypot(t.x,t.z);return n>.75?!0:s>3&&s>a*.6}land(t,e){this.state="ground",this.diving=!1;let i=Math.hypot(e.x,e.z);t>13&&i>12?(this.rollT=0,this.vel.x=e.x*.85,this.vel.z=e.z*.85,this.addStyle(15,null)):t>18?(this.landT=.35,this.vel.x*=.4,this.vel.z*=.4):t>8&&(this.landT=.15),t>22&&this.emit("impact",{amount:(t-22)*(this.rollT>=0?.4:1)}),this.emit("land",{impact:t,x:this.pos.x,y:this.pos.y-.9,z:this.pos.z})}stepSwing(t,e){let i=this.rope,n=this.vel;i.time+=t,n.y-=ee.GRAVITY*t,this.applyDrag(t,ee.DRAG),bi.copy(this.pos).sub(i.anchor);let s=bi.length()||1,a=bi.divideScalar(s),o=this.moveDir;if(o.lengthSq()>.01){let y=o.dot(a);n.x+=(o.x-a.x*y)*ee.SWING_STEER*t,n.y+=-a.y*y*ee.SWING_STEER*t,n.z+=(o.z-a.z*y)*ee.SWING_STEER*t}this.lookSteer(t,ee.LOOK_STEER);let l=n.length();if(l>1&&l<50&&s>=i.length-.5&&n.y<0){let y=Dt(-a.y,0,1),S=this.stats.power*t*(.4+.6*y);n.multiplyScalar(1+S/l)}if(i.length>i.target){let y=Math.min(i.length-i.target,18*t);if(i.length-=y,s>i.length){let S=Math.min(s-i.length,y);this.pos.addScaledVector(a,-S),n.multiplyScalar(Math.min(1.004,s/Math.max(1,s-S)))}}else-a.y>.9&&(i.length=Math.max(ee.ROPE_MIN,i.length-.4*t));let c=this.pos.x+n.x*t,u=this.pos.y+n.y*t,h=this.pos.z+n.z*t,d=c-i.anchor.x,f=u-i.anchor.y,p=h-i.anchor.z,x=Math.sqrt(d*d+f*f+p*p);if(x>i.length){let y=n.x*a.x+n.y*a.y+n.z*a.z,S=i.length/x,_=i.anchor.x+d*S,M=i.anchor.y+f*S,w=i.anchor.z+p*S;n.set((_-this.pos.x)/t,(M-this.pos.y)/t,(w-this.pos.z)/t),y>9&&i.time>.05&&!this._tautEmitted&&(this.emit("taut",{amount:y}),this._tautEmitted=!0)}else x<i.length-2&&(this._tautEmitted=!1);let m=n.clone(),g=this.move(t);if(g.ground){i.active=!1,this.emit("release",{side:i.side,anchor:i.anchor.clone(),kind:"ground"}),this.land(g.impactY,m);return}if(g.wall&&this.wallCooldown<=0&&i.time>.25&&this.wantsWall(m,g)){this.enterWall(g.wallNX,g.wallNZ,g.wallBox,Math.abs(m.x*g.wallNX+m.z*g.wallNZ));return}if(this.autoChain&&e.swingHeld&&i.time>.55){Fi.copy(this.pos).sub(i.anchor);let y=Math.hypot(n.x,n.z)||1,S=Math.max(Fi.x*i.dirX+Fi.z*i.dirZ,(Fi.x*n.x+Fi.z*n.z)/y),_=Math.acos(Dt(-Fi.y/Fi.length(),-1,1));S>0&&(_>.82||_>.6&&n.y<3)?this.release("auto"):i.time>2.5&&n.length()<7&&_<.5&&this.release("auto")}}stepWall(t,e){let i=this.wall,n=this.vel;i.time+=t;let s=i.nx,a=i.nz,o=-a,l=s,c=this.camFwd,u=-(c.x*s+c.z*a),h=c.x*o+c.z*l,d=c.y+Math.max(0,u)*.8,f=Math.hypot(h,d);f<.001&&(h=0,d=1,f=1),h/=f,d/=f;let p=this.camRight.x*o+this.camRight.z*l,x=e.move.y,m=e.move.x;if(u<-.35&&x>.6&&i.time>.15){n.set(c.x*9+s*4,Math.max(n.y,0)+4,c.z*9+a*4),this.state="air",this.wallCooldown=.35,this.emit("jump");return}let g=h*x+p*m,y=d*x,S=Math.hypot(g,y),_=ee.WALL_RUN*Math.min(1,Math.hypot(m,x)),M=0,w=0;S>.08&&(M=g/S*_,w=y/S*_),S>.08&&Math.abs(g)/S>.72&&(w=Math.min(w,-.8-Dt(i.time-1.4,0,1)*5));let v=n.x*o+n.z*l,b=n.y,P=Math.hypot(v,b),R=Math.hypot(M,w),z=P>.1&&R>.1&&(v*M+b*w)/(P*R)>.7&&P>R?1.3:7;v+=(M-v)*Me(z,t),b+=(w-b)*Me(z,t),n.set(o*v-s*2,b,l*v-a*2);let U=Math.hypot(v,b);i.climbing=U>1.2,i.vertical=Math.abs(b)>=Math.abs(v),i.climbing&&(this.runPhase+=U*t*(Math.PI*2/2.4),this.stepAcc+=U*t,this.stepAcc>1.25&&(this.stepAcc=0,this.emit("step",{speed:U,wall:!0})));let I=this.move(t),B=i.box;if(I.ground&&b<=.5){this.state="ground";return}if(B&&b>0&&this.pos.y-ee.HALF_H*.3>B.maxY){this.ledgeVault(b);return}if(!I.wall){if(Math.abs(v)>2&&this.tryCornerWrap(v))return;this.state="air",this.wallCooldown=.2;return}if(I.wallBox&&(i.box=I.wallBox),I.wallNX!==s||I.wallNZ!==a){let H=o*Math.sign(v),G=l*Math.sign(v);if(Math.abs(v)>1.5&&I.wallNX*H+I.wallNZ*G<-.5){let it=Math.abs(v),W=-I.wallNZ,J=I.wallNX,tt=Math.sign(s*W+a*J)||1;this.vel.set(W*it*tt,this.vel.y,J*it*tt);let Tt=Dl(Math.atan2(-H,-G),Math.atan2(-s,-a));i.nx=I.wallNX,i.nz=I.wallNZ,this.emit("corner",{delta:Tt})}}}stepZip(t){let e=this.zip;e.time+=t;let i=Math.min(this.stats.zip,18+e.time*110);e.useVia&&(bi.copy(e.via).sub(this.pos),bi.length()<Math.max(.9,i*t*1.5)&&(e.useVia=!1,this.pos.copy(e.via))),e.useVia||bi.copy(e.target).sub(this.pos);let n=bi.length();if(!e.useVia&&n<Math.max(.8,i*t*1.2)||e.time>4){this.arriveZip();return}this.vel.copy(bi).multiplyScalar(i/n);let s=this.move(t);if(e.perch&&s.wall&&n<3){this.pos.copy(e.target),this.arriveZip();return}if((s.wall||s.ground||s.ceil)&&(n>2.5||e.useVia)){if(s.ground){this.state="ground";return}if(s.wall){this.enterWall(s.wallNX,s.wallNZ,s.wallBox,0);return}this.state="air"}}arriveZip(){let t=this.zip;t.perch?(this.pos.copy(t.target),t.launchQueued?(this.vel.set(this.camFwd.x*13,16,this.camFwd.z*13),this.state="air",this.flip(.7),this.addStyle(40,"POINT LAUNCH"),this.emit("launch")):(this.vel.set(-t.nx*1.5,0,-t.nz*1.5),this.state="ground",this.perchT=.45,this.emit("perch"))):(this.vel.set(0,0,0),this.enterWall(t.nx,t.nz,t.box,0),t.launchQueued&&this.wallJump())}};var oi=14,xv=new A(0,1,0),_s=new A,eu=new A,Hi=new A,Yl=new zt,Yf=new Qt,yv=new A,iu=class{constructor(){this.pts=Array.from({length:oi},()=>new A),this.prev=Array.from({length:oi},()=>new A),this.state="off",this.anchor=new A,this.start=new A,this.t=0,this.life=0,this.restLen=1,this.radius=.032}};function vv(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d");t.strokeStyle="#ffffff",t.lineCap="round";let e=[];for(let n=0;n<11;n++){let s=n/11*Math.PI*2+(Math.random()-.5)*.3,a=44+Math.random()*18;e.push([s,a]),t.lineWidth=2.2,t.beginPath(),t.moveTo(64,64),t.lineTo(64+Math.cos(s)*a,64+Math.sin(s)*a),t.stroke()}for(let n of[.3,.55,.8])t.lineWidth=1.5,t.beginPath(),e.forEach(([s,a],o)=>{let l=a*n*(.9+Math.random()*.2),c=64+Math.cos(s)*l,u=64+Math.sin(s)*l;o===0?t.moveTo(c,u):t.lineTo(c,u)}),t.closePath(),t.stroke();return t.fillStyle="#ffffff",t.beginPath(),t.arc(64,64,9,0,Math.PI*2),t.fill(),new ai(r)}var Zl=class{constructor(t){let e=vv(),i=new fi(1.5,1.5);this.splats=Array.from({length:12},()=>{let a=new lt(i,new Ae({map:e,transparent:!0,depthWrite:!1,opacity:0,fog:!0,polygonOffset:!0,polygonOffsetFactor:-2}));return a.visible=!1,t.add(a),{mesh:a,life:0}}),this.nextSplat=0,this.lines=Array.from({length:8},()=>new iu);let n=new Wt(1,1,1,5,1,!0),s=new Ae({color:15660031,fog:!0});this.mesh=Le(n,s,this.lines.length*(oi-1),{dynamic:!0}),t.add(this.mesh)}shoot(t,e,i){let n=this.lines.find(s=>s.state==="off")||this.lines.reduce((s,a)=>s.life<a.life?s:a);n.state="shoot",n.anchor.copy(t),n.start.copy(e),n.t=0,n.life=1,n.restLen=i||e.distanceTo(t);for(let s=0;s<oi;s++)n.pts[s].copy(e),n.prev[s].copy(e);return n}release(t,e){if(!(!t||t.state==="off"||t.state==="free")){t.state="free",t.life=1.6;for(let i=0;i<oi;i++){let n=i/(oi-1);t.pts[i].lerpVectors(t.start,t.anchor,n),t.prev[i].copy(t.pts[i]).addScaledVector(e,-(1-n)*.016)}t.restLen=t.start.distanceTo(t.anchor)*1.05}}splat(t,e){let i=this.splats[this.nextSplat];this.nextSplat=(this.nextSplat+1)%this.splats.length,i.life=6,i.mesh.visible=!0,i.mesh.position.copy(t).addScaledVector(e,.04),i.mesh.lookAt(_s.copy(i.mesh.position).add(e)),i.mesh.rotateZ(Math.random()*Math.PI*2),i.mesh.scale.setScalar(.6)}update(t,e){for(let s of this.splats){if(s.life<=0)continue;s.life-=t;let a=Math.min(1,(6-s.life)/.12);s.mesh.scale.setScalar(.6+a*.4),s.mesh.material.opacity=Math.min(.95,s.life/1.5)*a,s.life<=0&&(s.mesh.visible=!1)}let i=-20*t*t,n=0;for(let s of this.lines){if(s.state==="off"){for(let o=0;o<oi-1;o++)this.hide(n++);continue}if(s.state==="shoot"||s.state==="taut"){s.t+=t;let o=s.start.distanceTo(s.anchor),l=Math.min(1,s.t*320/Math.max(1,o));l>=1&&s.state==="shoot"&&(s.state="taut");let c=Math.max(0,s.restLen-o);Hi.subVectors(s.anchor,s.start);let u=_s.set(-Hi.z,0,Hi.x).normalize();for(let h=0;h<oi;h++){let d=h/(oi-1)*l;if(s.pts[h].copy(s.start).addScaledVector(Hi,d),s.state==="shoot"){let f=Math.sin(d*18-s.t*40)*.25*(1-l)*Math.sin(Math.PI*(h/(oi-1)));s.pts[h].addScaledVector(u,f)}c>.05&&(s.pts[h].y-=Math.sin(Math.PI*d)*Math.min(c*.5,6))}}else if(s.state==="free"){if(s.life-=t,s.life<=0){s.state="off";for(let u=0;u<oi-1;u++)this.hide(n++);continue}let o=s.pts,l=s.prev;for(let u=0;u<oi-1;u++){let h=o[u],d=(h.x-l[u].x)*.985,f=(h.y-l[u].y)*.985,p=(h.z-l[u].z)*.985;l[u].copy(h),h.x+=d,h.y+=f+i,h.z+=p,h.y<.05&&(h.y=.05)}o[oi-1].copy(s.anchor);let c=s.restLen/(oi-1);for(let u=0;u<4;u++)for(let h=0;h<oi-1;h++){let d=o[h],f=o[h+1];Hi.subVectors(f,d);let p=Hi.length()||1e-6,x=(p-c)/p;h+1===oi-1?d.addScaledVector(Hi,x):(d.addScaledVector(Hi,x*.5),f.addScaledVector(Hi,-x*.5))}}let a=s.state==="free"?s.radius*Math.min(1,s.life/.8):s.radius;for(let o=0;o<oi-1;o++){_s.copy(s.pts[o]),eu.copy(s.pts[o+1]),Hi.subVectors(eu,_s);let l=Hi.length();if(l<1e-4){this.hide(n++);continue}Yf.setFromUnitVectors(xv,Hi.divideScalar(l)),_s.add(eu).multiplyScalar(.5);let c=e?a/.032*(.004+_s.distanceTo(e)*.0024):a;Yl.compose(_s,Yf,yv.set(c,l,c)),this.mesh.setMatrixAt(n++,Yl)}}this.mesh.instanceMatrix.needsUpdate=!0}hide(t){Yl.makeScale(0,0,0),this.mesh.setMatrixAt(t,Yl)}};var or={aTint:1},Ge={aTint:0};function va(r,t,e=.1){let i=new qs;i.moveTo(r[0][0],r[0][1]);for(let s=1;s<r.length;s++){let a=r[s];a.length===4?i.quadraticCurveTo(a[0],a[1],a[2],a[3]):i.lineTo(a[0],a[1])}i.closePath();let n=new Yr(i,{depth:t-e*2,bevelEnabled:!0,bevelThickness:e,bevelSize:e*.8,bevelSegments:3,curveSegments:6});return n.translate(0,0,-(t-e*2)/2),n.rotateY(-Math.PI/2),n.computeVertexNormals(),n}function Zf(r,t,e,i,n=.62){let s=r/2,a=i+.06,o=[[-s,.3],[-s+.02,t-.1],[-s+.12,t,-s+.4,t+.02],[s-.55,t],[s-.05,t-.06,s,n],[s,.36],[e/2+a,.3]];for(let l=0;l<=6;l++){let c=l/6*Math.PI;o.push([e/2+Math.cos(c)*a,.3+Math.sin(c)*a])}o.push([-e/2+a,.3]);for(let l=0;l<=6;l++){let c=l/6*Math.PI;o.push([-e/2+Math.cos(c)*a,.3+Math.sin(c)*a])}return o}function $f(r,t,e,i,n=.24){let s=new Wt(i,i,n,14),a=new Wt(i*.6,i*.6,n+.02,10),o=new Wt(i*.18,i*.18,n+.04,6);for(let l of[-t/2,t/2])for(let c of[-e/2,e/2])r.add(s,{color:1381653,matrix:$(c,i,l,0,0,Math.PI/2),extra:Ge}),r.add(a,{color:12107204,matrix:$(c,i,l,0,0,Math.PI/2),extra:Ge}),r.add(o,{color:5593696,matrix:$(c,i,l,0,0,Math.PI/2),extra:Ge})}function nu(r,t,e,i,n=.38,s=.14){let a=new xt(1,1,1);for(let o of[-1,1])r.add(a,{color:16774358,emit:1,matrix:$(o*i,e,t/2+.01,0,0,0,n,s,.06),extra:Ge}),r.add(a,{color:16718362,emit:1,matrix:$(o*i,e+.04,-t/2-.01,0,0,0,n*.9,s*.9,.06),extra:Ge})}function $l({len:r=4.5,width:t=1.82,belt:e=1,roof:i=1.42,wb:n=2.7,r:s=.34,rear:a="sedan",taxi:o=!1,police:l=!1}){let c=new me({aTint:1});c.add(va(Zf(r,e,n,s),t,.12),{color:16777215,extra:or});let u=r/2,h=a==="hatch"?[[-u+.15,e-.02],[-u+.35,i-.02],[.45,i],[1.05*(r/4.5),e+.02]]:a==="suv"?[[-u+.1,e-.02],[-u+.2,i-.04],[.65,i],[1.2*(r/4.5),e+.02]]:[[-u+.75,e-.02],[-.85,i-.02],[.4,i],[1.15,e+.02]];c.add(va(h,t-.18,.06),{color:1713200,extra:Ge});let d=[[h[1][0]+.06,i-.04],[h[1][0]+.06,i+.03],[h[2][0]-.04,i+.03],[h[2][0]-.04,i-.04]];c.add(va(d,t-.12,.05),{color:16777215,extra:or});let f=new xt(1,1,1),p=(h[1][0]+h[2][0])/2;for(let x of[-1,1])c.add(f,{color:16777215,matrix:$(x*(t/2-.1),(e+i)/2,p,0,0,0,.05,i-e,.12),extra:or}),c.add(f,{color:2106150,matrix:$(x*(t/2+.06),e+.08,h[3][0]-.25,0,0,0,.12,.1,.16),extra:Ge});return c.add(new Xe(t-.05,.22,.18,2,.06),{color:2764081,matrix:$(0,.42,u-.02),extra:Ge}),c.add(new Xe(t-.05,.22,.18,2,.06),{color:2764081,matrix:$(0,.44,-u+.02),extra:Ge}),c.add(f,{color:1118998,matrix:$(0,.62,u+.005,0,0,0,.7,.16,.04),extra:Ge}),c.add(f,{color:15329762,matrix:$(0,.5,-u-.08,0,0,0,.42,.11,.02),extra:Ge}),nu(c,r,.72,t/2-.3),$f(c,n,t-.12,s),o&&c.add(new Xe(.75,.2,.28,2,.05),{color:16774856,emit:.9,matrix:$(0,i+.13,p),extra:Ge}),l&&(c.add(f,{color:16719904,emit:1.2,matrix:$(-.3,i+.1,p,0,0,0,.5,.12,.25),extra:Ge}),c.add(f,{color:2117887,emit:1.2,matrix:$(.3,i+.1,p,0,0,0,.5,.12,.25),extra:Ge})),c.build()}function _v(){let r=new me({aTint:1}),t=5.3,e=2,i=t/2;r.add(va(Zf(t,1.05,3.3,.36,.75),e,.12),{color:16777215,extra:or}),r.add(new Xe(e,1.25,t-1.1,3,.12),{color:16777215,matrix:$(0,1.62,-.45),extra:or}),r.add(va([[i-1.15,1.02],[i-1.15,2.2],[i-.75,2.2],[i-.2,1.08]],e-.12,.05),{color:1713200,extra:Ge});let n=new xt(1,1,1);return r.add(new Xe(e-.05,.24,.18,2,.06),{color:2764081,matrix:$(0,.44,i-.02),extra:Ge}),r.add(new Xe(e-.05,.24,.18,2,.06),{color:2764081,matrix:$(0,.46,-i+.02),extra:Ge}),r.add(n,{color:1118998,matrix:$(0,.7,i+.005,0,0,0,.9,.2,.04),extra:Ge}),nu(r,t,.82,e/2-.3),$f(r,3.3,e-.14,.36),r.build()}function Mv(){let r=new me({aTint:1}),t=11.5,e=2.55,i=t/2;r.add(new Xe(e,2.75,t,4,.22),{color:16777215,matrix:$(0,1.78,0),extra:or}),r.add(new Xe(e+.02,.95,t-1.2,2,.08),{color:1450027,matrix:$(0,2.25,-.3),extra:Ge}),r.add(new Xe(e-.25,1.35,.1,2,.04),{color:1450027,matrix:$(0,2,i+.01),extra:Ge}),r.add(new xt(1.6,.26,.06),{color:16756736,emit:1,matrix:$(0,2.95,i+.03),extra:Ge}),r.add(new xt(e+.03,.12,t-.6),{color:15921906,matrix:$(0,1.35,0),extra:Ge}),nu(r,t,.75,e/2-.35,.34,.22);let n=new Wt(.5,.5,.32,14),s=new Wt(.3,.3,.34,10);for(let a of[-3.8,3.6])for(let o of[-1.12,1.12])r.add(n,{color:1381653,matrix:$(o,.5,a,0,0,Math.PI/2),extra:Ge}),r.add(s,{color:12107204,matrix:$(o,.5,a,0,0,Math.PI/2),extra:Ge});return r.build()}var Jf={sedan:{geo:()=>$l({}),count:40,len:4.5,top:1.45},hatch:{geo:()=>$l({len:4,wb:2.5,rear:"hatch",roof:1.48}),count:30,len:4,top:1.5},suv:{geo:()=>$l({len:4.75,width:1.92,belt:1.15,roof:1.78,wb:2.85,r:.38,rear:"suv"}),count:26,len:4.75,top:1.8},taxi:{geo:()=>$l({taxi:!0}),count:16,len:4.5,top:1.6,paint:[16238080]},van:{geo:_v,count:10,len:5.3,top:2.3,paint:[15921906,13685976,3037864,11546666]},bus:{geo:Mv,count:12,len:11.5,top:3.1,paint:[2060241,15246103,2792796],bus:!0}};var Kf=[2.4,6],Sv=22,lr=st.ROAD/2;function _a(r,t,e,i,n,s){return r===0?(s.x=n,s.z=ye(t)+(e>0?1:-1)*Kf[i]):(s.z=n,s.x=ye(t)+(e>0?-1:1)*Kf[i]),s}var su=(r,t)=>r===0?t>0?Math.PI/2:-Math.PI/2:t>0?0:Math.PI,bv=[11019035,2056104,15330286,1777188,7041398,2911817,13214247,5974662,13159633,1323118,9182227,4016722,10134440,986896],Jl=class{constructor(t,e){this.city=e,this.rng=new Si(77),this.time=0,this.cars=[];let i=ke({emitDay:.25,emitNight:2.2,tintMask:!0});this.meshes={};let n=new At;for(let[s,a]of Object.entries(Jf)){let o=Le(a.geo(),i,a.count,{dynamic:!0,colors:!0});this.meshes[s]=o,t.add(o);for(let l=0;l<a.count;l++){let c=!!a.bus,u={type:s,bus:c,mesh:o,idx:l,axis:0,k:0,dir:1,lane:0,s:0,speed:0,cruise:c?10:s==="van"?this.rng.float(10,13):this.rng.float(11,16),len:a.len,top:a.top,turn:null,decided:-999,pos:new A,yaw:0,honk:0};n.setHex(a.paint?this.rng.pick(a.paint):this.rng.pick(bv)),o.setColorAt(l,n),this.cars.push(u),this.spawn(u,null)}}this.buildSignals(t),this.lastPhase=-1,this._m=new zt,this._q=new Qt,this._p=new A,this._s=new A(1,1,1),this.events=[]}buildSignals(t){let e=this.city.signals,i=new me;i.add(new Wt(.1,.12,5,4),{color:2830133,matrix:$(0,2.5,0)}),i.add(new xt(.5,1.4,.5),{color:1776928,matrix:$(0,5.2,0)});let n=Le(i.build(),ke({emitDay:0,emitNight:0}),e.length),s=new me;s.add(new Zr(.34,0),{color:16777215,emit:1}),this.signalLamps=Le(s.build(),ke({emitDay:.9,emitNight:2}),e.length,{colors:!0});let a=new zt;e.forEach((o,l)=>{a.makeTranslation(o.x,0,o.z),n.setMatrixAt(l,a),a.makeTranslation(o.x,5.4,o.z),this.signalLamps.setMatrixAt(l,a)}),t.add(n,this.signalLamps)}light(t){let e=this.time%Sv;return t===0?e<9?2:e<11?1:0:e>=11&&e<20?2:e>=20?1:0}spawn(t,e){let i=this.rng,n=st.N;for(let s=0;s<20;s++){if(t.axis=i.chance(.5)?0:1,t.dir=i.chance(.5)?1:-1,t.lane=t.bus?1:i.int(0,1),e){let o=i.float(0,Math.PI*2),l=i.float(140,380),c=e.x+Math.cos(o)*l,u=e.z+Math.sin(o)*l,h=t.axis===0?c:u,d=t.axis===0?u:c;t.k=Dt(Math.round((d+st.HALF)/st.PITCH),0,n);let f=Dt(Math.floor((h+st.HALF)/st.PITCH),0,n-1);t.s=ye(f)+lr+3+i.float(0,st.BLOCK-6)}else{t.k=i.int(0,n);let o=i.int(0,n-1);t.s=ye(o)+lr+3+i.float(0,st.BLOCK-6)}_a(t.axis,t.k,t.dir,t.lane,t.s,t.pos);let a=!0;for(let o of this.cars)if(o!==t&&o.pos&&Math.abs(o.pos.x-t.pos.x)<8&&Math.abs(o.pos.z-t.pos.z)<8){a=!1;break}if(a)break}t.turn=null,t.speed=t.cruise*.6,t.decided=-999,t.yaw=su(t.axis,t.dir)}nextIntersection(t){let e=(t.s+st.HALF)/st.PITCH;return t.dir>0?Math.floor(e+1e-6)+1:Math.ceil(e-1e-6)-1}chooseTurn(t,e){let i=st.N,n=[];e+t.dir>=0&&e+t.dir<=i&&n.push(0,0,0);for(let s of[-1,1])t.k+s>=0&&t.k+s<=i&&n.push(s);return n.length?this.rng.pick(n):0}startTurn(t,e,i){let n=1-t.axis,s=_a(t.axis,t.k,t.dir,t.lane,ye(e)-t.dir*lr,new A),a=_a(n,e,i,t.lane,ye(t.k)+i*lr,new A),o=t.axis===0?new A(a.x,0,s.z):new A(s.x,0,a.z),l=0,c=s.x,u=s.z;for(let h=1;h<=8;h++){let d=h/8,f=(1-d)*(1-d),p=2*(1-d)*d,x=d*d,m=f*s.x+p*o.x+x*a.x,g=f*s.z+p*o.z+x*a.z;l+=Math.hypot(m-c,g-u),c=m,u=g}t.turn={E:s,C:o,X:a,t:0,len:l,axis:n,k:e,dir:i,s:ye(t.k)+i*lr}}update(t,e){this.time+=t;let i=this.light(0)*3+this.light(1);if(i!==this.lastPhase){this.lastPhase=i;let h=new At;this.city.signals.forEach((d,f)=>{let p=this.light(d.axis);h.setHex(p===2?3211104:p===1?16760864:16722464),this.signalLamps.setColorAt(f,h)}),this.signalLamps.instanceColor.needsUpdate=!0}let n=new Map;for(let h of this.cars){if(h.turn)continue;let d=h.axis*1e5+h.k*100+(h.dir>0?10:0)+h.lane,f=n.get(d);f||n.set(d,f=[]),f.push(h)}for(let h of n.values()){h.sort((d,f)=>(d.s-f.s)*d.dir);for(let d=0;d<h.length;d++)h[d].ahead=h[d+1]||null}let s=e.pos,a=s.y<2.5;for(let h of this.cars){if(Math.abs(h.pos.x-s.x)>520||Math.abs(h.pos.z-s.z)>520){this.spawn(h,s);continue}if(h.turn){let x=h.turn;if(h.speed+=(h.cruise*.6-h.speed)*Me(2,t),x.t+=h.speed*t/x.len,x.t>=1)h.axis=x.axis,h.k=x.k,h.dir=x.dir,h.s=x.s,h.turn=null,_a(h.axis,h.k,h.dir,h.lane,h.s,h.pos),h.yaw=su(h.axis,h.dir);else{let m=x.t,g=(1-m)*(1-m),y=2*(1-m)*m,S=m*m;h.pos.set(g*x.E.x+y*x.C.x+S*x.X.x,0,g*x.E.z+y*x.C.z+S*x.X.z);let _=2*(1-m)*(x.C.x-x.E.x)+2*m*(x.X.x-x.C.x),M=2*(1-m)*(x.C.z-x.E.z)+2*m*(x.X.z-x.C.z);h.yaw=Math.atan2(_,M)}continue}let d=this.nextIntersection(h),f=h.cruise;if(d>=0&&d<=st.N){let x=ye(d)-h.dir*lr,g=(x-h.dir*(1.2+h.len/2)-h.s)*h.dir,y=this.light(h.axis);if(h.decided!==d)y!==2&&g>-.5&&g<45&&!(y===1&&g<4)&&(f=Math.min(f,Math.max(0,g*.7))),(g<=.3&&(y===2||y===1&&g>-2)||g<-.5)&&(h.decided=d,h.plan=this.chooseTurn(h,d));else if(h.plan&&(f=Math.min(f,h.cruise*.6),(x-h.s)*h.dir<=0)){this.startTurn(h,d,h.plan),h.plan=0;continue}}if(h.ahead){let x=(h.ahead.s-h.s)*h.dir-(h.len+h.ahead.len)/2;f=Math.min(f,Math.max(0,(x-3)*.9))}if(a){let x=s.x-h.pos.x,m=s.z-h.pos.z,g=h.axis===0?x*h.dir:m*h.dir,y=h.axis===0?m:x;g>0&&g<16&&Math.abs(y)<1.8&&(f=Math.min(f,Math.max(0,(g-4)*.8)),h.honk-=t,h.honk<=0&&g<12&&(h.honk=3+Math.random()*3,this.events.push({type:"honk",x:h.pos.x,z:h.pos.z})))}let p=f>h.speed?4:11;h.speed+=Dt(f-h.speed,-p*t,p*t),h.s+=h.dir*h.speed*t,_a(h.axis,h.k,h.dir,h.lane,h.s,h.pos),h.yaw=su(h.axis,h.dir),(h.s<-st.HALF-30||h.s>st.HALF+30)&&this.spawn(h,s)}let o=this._m,l=this._q,c=this._p,u=this._s;for(let h of this.cars)l.setFromAxisAngle(Be.DEFAULT_UP,h.yaw),o.compose(c.set(h.pos.x,0,h.pos.z),l,u),h.mesh.setMatrixAt(h.idx,o);for(let h of Object.values(this.meshes))h.instanceMatrix.needsUpdate=!0}carAt(t,e,i){for(let n of this.cars){let s=n.top;if(e<s-.6||e>s+1.2)continue;let a=t-n.pos.x,o=i-n.pos.z,l=Math.sin(n.yaw),c=Math.cos(n.yaw),u=a*l+o*c,h=a*c-o*l;if(Math.abs(h)<(n.bus?1.3:.95)&&Math.abs(u)<n.len/2)return{car:n,top:s}}return null}};var wv=[15158332,3447003,15844367,3066993,15528177,10181046,3426654,15105570,1752220,16739201,6236109,2236962],Ev=[2899536,3426654,1976110,8359053,4020864,6111287,13808780];function Tv(){let r=new me({aPart:1,aLimb:1,aPivot:3}),t=(e,i,n,s,a,o=16777215)=>r.add(e,{color:o,matrix:a,extra:{aPart:i,aLimb:n,aPivot:s}});for(let e of[1,-1]){let i=[.095*e,.9,0];t(new Wt(.075,.058,.47,7),2,e,i,$(.095*e,.68,0)),t(new Wt(.057,.045,.44,7),2,e,i,$(.095*e,.25,0)),t(new oe(.06,7,5),2,e,i,$(.095*e,.46,.005)),t(new oe(.07,7,5),3,e,i,$(.095*e,.045,.05,0,0,0,.75,.5,1.6),2039586);let n=[.24*e,1.43,0];t(new Wt(.052,.046,.3,6),1,2*e,n,$(.25*e,1.27,0,0,0,-.06*e)),t(new Wt(.044,.036,.28,6),1,2*e,n,$(.265*e,.98,.01,0,0,-.04*e)),t(new oe(.048,6,5),0,2*e,n,$(.27*e,.81,.012,0,0,0,.8,1.2,.9))}return t(new Wt(.16,.17,.16,10),2,0,[0,0,0],$(0,.93,0,0,0,0,1,1,.68)),t(new Wt(.2,.155,.5,10),1,0,[0,0,0],$(0,1.22,0,0,0,0,1,1,.62)),t(new oe(.2,10,5,0,Math.PI*2,0,Math.PI/2),1,0,[0,0,0],$(0,1.46,0,0,0,0,1,.42,.62)),t(new Wt(.048,.055,.1,6),0,0,[0,0,0],$(0,1.55,0)),t(new oe(.11,9,7),0,0,[0,0,0],$(0,1.68,.01,0,0,0,.9,1.08,1)),t(new oe(.118,9,5,0,Math.PI*2,0,Math.PI*.55),3,0,[0,0,0],$(0,1.695,-.008,-.25,0,0,.93,1.05,1.05),2759956),t(new oe(.02,5,4),0,0,[0,0,0],$(0,1.665,.115),16777215),r.build()}var Kl=class{constructor(t,e){this.city=e,this.rng=new Si(99),this.count=240,this.special=12;let i=this.count+this.special,n=Tv();this.anim=new Float32Array(i*4),this.pants=new Float32Array(i*3);let s=new wi(this.anim,4);s.setUsage($i),n.setAttribute("aAnim",s),n.setAttribute("aPants",new wi(this.pants,3)),this.animAttr=s;let a=new Pe({uniforms:{...Zt},vertexShader:`
        attribute vec3 aColor;
        attribute float aPart;
        attribute float aLimb;
        attribute vec3 aPivot;
        attribute vec4 aAnim; // walk phase, stride, arms up, skin tone
        attribute vec3 aPants;
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vWorld;
        vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, v.y * c - v.z * s, v.y * s + v.z * c); }
        vec3 rotZ(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x * c - v.y * s, v.x * s + v.y * c, v.z); }
        void main() {
          vec3 p = position;
          vec3 n = normal;
          float side = sign(aLimb);
          float limb = abs(aLimb);
          float swing = sin(aAnim.x) * aAnim.y;
          if (limb > 0.5 && limb < 1.5) {
            float a = -swing * side;
            p = aPivot + rotX(p - aPivot, a); n = rotX(n, a);
          } else if (limb > 1.5) {
            float a = swing * side * 0.8;
            p = aPivot + rotX(p - aPivot, a); n = rotX(n, a);
            float r = aAnim.z * 2.7 * side;
            p = aPivot + rotZ(p - aPivot, r); n = rotZ(n, r);
          }
          // little hop while cheering
          p.y += aAnim.z * max(0.0, sin(aAnim.x * 1.7)) * 0.25;
          vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
          vWorld = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
          vec3 skin = mix(vec3(0.96, 0.8, 0.66), vec3(0.36, 0.23, 0.15), aAnim.w);
          vec3 shirt = vec3(1.0);
          #ifdef USE_INSTANCING_COLOR
            shirt = instanceColor;
          #endif
          vColor = aPart < 0.5 ? skin : aPart < 1.5 ? shirt : aPart < 2.5 ? aPants : aColor;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${gs}
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main() {
          vec3 col = applyLight(vColor, normalize(vNormal));
          col = applyFog(col, vWorld);
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.mesh=new Mn(n,a,i),this.mesh.instanceMatrix.setUsage($i),this.mesh.frustumCulled=!1;let o=new At;this.peds=[];for(let l=0;l<i;l++)if(o.setHex(this.rng.pick(wv)),this.mesh.setColorAt(l,o),o.setHex(this.rng.pick(Ev)),this.pants.set([o.r,o.g,o.b],l*3),this.anim[l*4+3]=this.rng.float(0,1),l<this.count){let c={k:l,i:0,j:0,t:0,dir:1,lat:0,speed:1.3,phase:this.rng.float(0,6.28),mode:"walk",timer:0,x:0,z:0,y:0,yaw:0,cheer:0,scale:this.rng.float(.92,1.08)};this.peds.push(c)}this.specials=Array.from({length:this.special},(l,c)=>({k:this.count+c,active:!1,x:0,y:0,z:0,yaw:0,cheer:0,phase:0})),this.initialized=!1,t.add(this.mesh),this._m=new zt,this._q=new Qt,this._v=new A,this._s=new A,this.cheerCooldown=0}respawn(t,e,i,n){let s=st.N,a=this.rng,o=n?3:2;t.i=Dt(e+a.int(-o,o),0,s-1),t.j=Dt(i+a.int(-o,o),0,s-1),t.t=a.float(0,400),t.dir=a.chance(.5)?1:-1,t.lat=a.float(-1.4,1.4),t.speed=a.float(1,1.7),t.mode="walk",t.timer=a.float(5,25),t.cheer=0;let l=this.city.sidewalkPoint(t.i,t.j,t.t,t.lat);t.x=l.x,t.z=l.z}cheer(t,e,i=14){for(let n of this.peds){let s=n.x-t,a=n.z-e;s*s+a*a<i*i&&Math.random()<.85&&(n.mode="cheer",n.timer=1.8+Math.random()*1.8,n.lookX=t,n.lookZ=e)}}setSpecial(t,e,i=0,n=0,s=0,a=0,o=0){let l=this.specials[t];l.active=e,l.x=i,l.y=n,l.z=s,l.yaw=a,l.cheer=o}update(t,e){let i=Dt(qh(e.pos.x),0,st.N-1),n=Dt(qh(e.pos.z),0,st.N-1);if(!this.initialized){this.initialized=!0;for(let f of this.peds)this.respawn(f,i,n,!0)}let s=this._m,a=this._q,o=this._v,l=this._s,c=this.anim,u=Be.DEFAULT_UP,h=e.pos,d=e.state==="ground"&&Math.hypot(e.vel.x,e.vel.z)>7;for(let f of this.peds){(Math.abs(f.i-i)>3||Math.abs(f.j-n)>3)&&this.respawn(f,i,n,!1);let p=0,x=0;if(f.mode==="walk"){f.t+=f.dir*f.speed*t,f.phase+=f.speed*t*4.2,p=.45,f.timer-=t,f.timer<0&&(f.mode="idle",f.timer=1.5+Math.random()*4);let m=this.city.sidewalkPoint(f.i,f.j,f.t,f.lat),g=[Math.PI/2,0,-Math.PI/2,Math.PI][m.dir]+(f.dir<0?Math.PI:0);f.yaw=ms(f.yaw,g,Me(8,t)),f.x=m.x,f.z=m.z}else f.mode==="idle"?(f.timer-=t,f.timer<0&&(f.mode="walk",f.timer=6+Math.random()*20,Math.random()<.3&&(f.dir*=-1))):f.mode==="cheer"&&(f.timer-=t,f.phase+=t*9,x=1,f.yaw=ms(f.yaw,Math.atan2(f.lookX-f.x,f.lookZ-f.z),Me(10,t)),f.timer<0&&(f.mode="walk",f.timer=5+Math.random()*10));if(d){let m=f.x-h.x,g=f.z-h.z;m*m+g*g<4&&Math.abs(h.y-.9)<1.2&&(f.lat=Dt(f.lat+(f.lat>0?1:-1)*1.2,-2,2),f.mode!=="cheer"&&(f.mode="cheer",f.timer=1.2,f.lookX=h.x,f.lookZ=h.z))}a.setFromAxisAngle(u,f.yaw),s.compose(o.set(f.x,0,f.z),a,l.setScalar(f.scale)),this.mesh.setMatrixAt(f.k,s),c[f.k*4]=f.phase,c[f.k*4+1]=p,c[f.k*4+2]=x}for(let f of this.specials){if(!f.active){s.makeScale(0,0,0),this.mesh.setMatrixAt(f.k,s);continue}f.phase+=t*(f.cheer?8:2),a.setFromAxisAngle(u,f.yaw),s.compose(o.set(f.x,f.y,f.z),a,l.setScalar(1)),this.mesh.setMatrixAt(f.k,s),c[f.k*4]=f.phase,c[f.k*4+1]=0,c[f.k*4+2]=f.cheer?1:.55+Math.sin(f.phase*2)*.35}this.mesh.instanceMatrix.needsUpdate=!0,this.animAttr.needsUpdate=!0}};var jl=class{constructor(t,e){this.rng=new Si(4242),this.t=0,this.scene=t;let i=new me,n=new Ee;n.setAttribute("position",new qt([0,0,.15,.55,.12,-.05,0,0,-.15,0,0,.15,0,0,-.15,-.55,.12,-.05],3)),n.computeVertexNormals(),i.add(n,{color:5593182}),i.add(new xt(.12,.1,.4),{color:6975093});let s=ke({emitDay:0,emitNight:0,side:Oe});this.flocks=[];let a=7,o=9;this.birdMesh=Le(i.build(),s,a*o,{dynamic:!0});for(let p=0;p<a;p++){let x=new A(this.rng.float(-550,550),this.rng.float(30,120),this.rng.float(-550,550)),m=[];for(let g=0;g<o;g++)m.push({a:this.rng.float(0,6.28),r:this.rng.float(4,14),h:this.rng.float(-3,3),sp:this.rng.float(.5,.9),ph:this.rng.float(0,6.28)});this.flocks.push({home:x,center:x.clone(),scatter:0,R:this.rng.float(18,40),a:this.rng.float(0,6),birds:m})}t.add(this.birdMesh);let l=new me;l.add(new oe(1.6,12,8),{color:1989288,matrix:$(0,0,0,0,0,0,1,.9,1.5)}),l.add(new oe(1.2,10,6),{color:10146047,emit:.3,matrix:$(0,.25,1.1,0,0,0,1,.75,.8)}),l.add(new xt(.4,.4,5),{color:1989288,matrix:$(0,.3,-4)}),l.add(new xt(.15,1.4,.8),{color:16777215,matrix:$(0,.9,-6.3)}),l.add(new xt(.12,.12,2.6),{color:3355443,matrix:$(.9,-1.4,0)}),l.add(new xt(.12,.12,2.6),{color:3355443,matrix:$(-.9,-1.4,0)}),l.add(new xt(2.2,.06,.4),{color:16777215,matrix:$(0,-.3,.5)}),l.add(new oe(.15,6,4),{color:16719904,emit:1,matrix:$(0,1.6,-6.6)}),this.heli=new lt(l.build(),ke({emitDay:.3,emitNight:2}));let c=new lt(new xt(11,.06,.35),new Ze({color:2236962}));c.position.y=1.6,this.heli.add(c);let u=c.clone();u.rotation.y=Math.PI/2,this.heli.add(u),this.rotors=[c,u];let h=new lt(new sn(14,120,16,1,!0),new Ae({color:16774864,transparent:!0,opacity:.08,depthWrite:!1,blending:Li,side:Oe,fog:!1}));h.position.y=-60,h.rotation.x=0,this.spot=new _e,this.spot.add(h),this.spot.rotation.x=.35,this.heli.add(this.spot),t.add(this.heli);let d=new me;d.add(new oe(1,20,12),{color:15658734,matrix:$(0,0,0,0,0,0,9,9,32)}),d.add(new xt(3,2,7),{color:3357252,matrix:$(0,-9.5,2)});for(let p of[0,Math.PI/2,Math.PI,-Math.PI/2])d.add(new xt(.4,7,6),{color:16742938,matrix:$(Math.sin(p)*5,Math.cos(p)*5,-27,0,0,p)});d.add(new Wt(9.08,9.08,6,20,1,!0),{color:16742938,emit:.4,matrix:$(0,0,4,Math.PI/2,0,0)}),this.blimp=new lt(d.build(),ke({emitDay:.1,emitNight:1.2})),t.add(this.blimp);let f=new me;f.add(new xt(4,1.4,12),{color:16777215,matrix:$(0,.4,0)}),f.add(new xt(3,1.6,4),{color:14673641,matrix:$(0,1.8,-1)}),f.add(new xt(3.05,.5,3.8),{color:2962486,matrix:$(0,2.2,-1)}),f.add(new sn(2,3,4),{color:16777215,matrix:$(0,.4,7.2,Math.PI/2,Math.PI/4,0,1,1,.7)}),f.add(new oe(.2,6,4),{color:3211104,emit:1,matrix:$(1.9,1.4,4)}),f.add(new oe(.2,6,4),{color:16724016,emit:1,matrix:$(-1.9,1.4,4)}),this.boats=[];for(let p=0;p<6;p++)this.boats.push({r:st.SHORE+this.rng.float(90,600),a:this.rng.float(0,6.28),sp:this.rng.float(.006,.012)*(this.rng.chance(.5)?1:-1),s:this.rng.float(.8,1.6)});this.boatMesh=Le(f.build(),ke({emitDay:.2,emitNight:2}),this.boats.length,{dynamic:!0}),t.add(this.boatMesh),this._m=new zt,this._q=new Qt,this._e=new Ue,this._v=new A,this._s=new A,this.events=[],this.heliCenter=new A(Ti(5),0,Ti(5))}update(t,e){this.t+=t;let i=this.t,n=this._m,s=this._q,a=this._e,o=this._v,l=this._s,c=0;for(let y of this.flocks){y.a+=t*.25,y.center.distanceTo(e.pos)<18&&y.scatter<=0&&(y.scatter=7,y.flee=new A().subVectors(y.center,e.pos).setY(0).normalize(),this.events.push({type:"birds",x:y.center.x,y:y.center.y,z:y.center.z})),y.scatter>0?(y.scatter-=t,y.center.addScaledVector(y.flee,t*16),y.center.y+=t*7):y.center.lerp(y.home,Me(.15,t));let _=y.scatter>0?1.8:1;for(let M of y.birds){let w=y.a*M.sp*3+M.a,v=y.center.x+Math.cos(w)*(y.R*.4+M.r)*_,b=y.center.z+Math.sin(w)*(y.R*.4+M.r)*_,P=y.center.y+M.h+Math.sin(i*1.3+M.ph)*1.2,R=Math.sin(i*(y.scatter>0?22:13)+M.ph);a.set(0,-w,0),s.setFromEuler(a),n.compose(o.set(v,P,b),s,l.set(1.2,1.2*R,1.2)),this.birdMesh.setMatrixAt(c++,n)}}this.birdMesh.instanceMatrix.needsUpdate=!0;let u=i*.07,h=this.heliCenter.x+Math.sin(u)*380,d=this.heliCenter.z+Math.sin(u*2)*200,f=175+Math.sin(i*.3)*10,p=this.heliCenter.x+Math.sin(u+.01)*380,x=this.heliCenter.z+Math.sin((u+.01)*2)*200;this.heli.position.set(h,f,d),this.heli.rotation.set(.12,Math.atan2(p-h,x-d),Math.sin(u*2)*.15);for(let y of this.rotors)y.rotation.y+=t*25;this.spot.visible=Zt.uNight.value>.4,this.spot.rotation.z=Math.sin(i*.5)*.3;let m=i*.012+1,g=st.HALF*.9;this.blimp.position.set(Math.cos(m)*g,240,Math.sin(m)*g),this.blimp.rotation.y=-m,this.boats.forEach((y,S)=>{y.a+=y.sp*t*6;let _=Math.cos(y.a)*y.r,M=Math.sin(y.a)*y.r,w=Math.atan2(-Math.sin(y.a)*Math.sign(y.sp),Math.cos(y.a)*Math.sign(y.sp));a.set(Math.sin(i+S)*.03,w,Math.sin(i*1.3+S)*.04),s.setFromEuler(a),n.compose(o.set(_,st.WATER_Y+Math.sin(i*1.5+S)*.15,M),s,l.setScalar(y.s)),this.boatMesh.setMatrixAt(S,n)}),this.boatMesh.instanceMatrix.needsUpdate=!0}};var jf=[16731501,16766474,5032432,8449433,13073919,16752412],Ql=class{constructor(t,e,i=[]){let n=new Si(1337);this.items=[];let s=(d,f,p)=>this.items.push({id:this.items.length,x:d,y:f,z:p,ph:n.float(0,6.28),got:!1}),a=e.buildings.filter(d=>d.height>45&&!d.landmark);for(let d=0;d<22&&a.length;d++){let p=a.splice(n.int(0,a.length-1),1)[0].top;s(n.chance(.5)?p.minX+1.5:p.maxX-1.5,p.maxY+2.5,n.chance(.5)?p.minZ+1.5:p.maxZ-1.5)}for(let d=0;d<10;d++){let f=n.int(1,st.N-1),p=n.float(-st.HALF,st.HALF),x=n.float(25,70);n.chance(.5)?s(-st.HALF+f*st.PITCH,x,p):s(p,x,-st.HALF+f*st.PITCH)}let o=e.landmarks.tower;s(o.x,o.top+48,o.z),s(o.x+27,246,o.z);let l=e.landmarks.bridge;s(l.x0+220,129,l.z),s(l.x0+760,129,l.z),s(l.x0+490,l.deckY+6,l.z);let c=e.blocks.flat().filter(d=>d.type===1);for(let d=0;d<3&&c.length;d++){let f=c[n.int(0,c.length-1)];s(f.cx+n.float(-20,20),4,f.cz+n.float(-20,20))}for(let d of i)this.items[d]&&(this.items[d].got=!0);let u=new me;u.add(new oe(.9,12,10),{color:16777215,emit:.25,matrix:$(0,0,0,0,0,0,1,1.18,1)}),u.add(new sn(.18,.25,6),{color:16777215,matrix:$(0,-1.12,0,Math.PI,0,0)}),u.add(new Wt(.015,.015,2.2,3),{color:15658734,matrix:$(0,-2.3,0)}),this.mesh=Le(u.build(),ke({emitDay:.25,emitNight:.9}),this.items.length,{dynamic:!0,colors:!0});let h=new At;this.items.forEach((d,f)=>this.mesh.setColorAt(f,h.setHex(jf[f%jf.length]))),t.add(this.mesh),this.t=0,this._m=new zt,this._v=new A,this._q=new Qt,this._s=new A}get total(){return this.items.length}get count(){return this.items.filter(t=>t.got).length}update(t,e){this.t+=t;let i=null,n=e.pos;return this.items.forEach((s,a)=>{if(s.got)this._m.makeScale(0,0,0);else{let o=s.y+Math.sin(this.t*1.4+s.ph)*.4,l=n.x-s.x,c=n.y-o,u=n.z-s.z;l*l+c*c+u*u<2.6*2.6&&(s.got=!0,i=s),this._q.setFromAxisAngle(Be.DEFAULT_UP,this.t*.6+s.ph),this._m.compose(this._v.set(s.x,o,s.z),this._q,this._s.setScalar(1.3))}this.mesh.setMatrixAt(a,this._m)}),this.mesh.instanceMatrix.needsUpdate=!0,i}nearest(t){let e=null,i=1/0;for(let n of this.items){if(n.got)continue;let s=Math.hypot(n.x-t.x,n.z-t.z);s<i&&(i=s,e=n)}return e}};var hn=700,tc=class{constructor(t,e){this.pos=new Float32Array(hn*3),this.col=new Float32Array(hn*4),this.size=new Float32Array(hn),this.vel=new Float32Array(hn*3),this.life=new Float32Array(hn),this.maxLife=new Float32Array(hn),this.drag=new Float32Array(hn),this.grav=new Float32Array(hn),this.next=0;let i=new Ee;i.setAttribute("position",new di(this.pos,3).setUsage($i)),i.setAttribute("aColor",new di(this.col,4).setUsage($i)),i.setAttribute("aSize",new di(this.size,1).setUsage($i)),this.geo=i,this.points=new Nr(i,new Pe({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
          attribute vec4 aColor;
          attribute float aSize;
          uniform float uScale;
          varying vec4 vColor;
          void main() {
            vColor = aColor;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * uScale / max(0.1, -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,fragmentShader:`
          varying vec4 vColor;
          void main() {
            vec2 c = gl_PointCoord - 0.5;
            float d = length(c);
            if (d > 0.5) discard;
            gl_FragColor = vec4(vColor.rgb, vColor.a * smoothstep(0.5, 0.2, d));
          }
        `})),this.points.frustumCulled=!1,t.add(this.points);let n=new Ee;n.setAttribute("position",new qt([-1,-1,0,3,-1,0,-1,3,0],3)),this.speedMat=new Pe({transparent:!0,depthTest:!1,depthWrite:!1,blending:Li,uniforms:{uAmt:{value:0},uTime:{value:0},uAspect:{value:1.7}},vertexShader:`
        varying vec2 vP;
        void main() { vP = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,fragmentShader:`
        uniform float uAmt, uTime, uAspect;
        varying vec2 vP;
        float h(float n) { return fract(sin(n * 91.345) * 47453.21); }
        void main() {
          vec2 p = vP; p.x *= uAspect;
          float r = length(p);
          float a = atan(p.y, p.x);
          float id = floor(a * 38.0);
          float rnd = h(id);
          float streak = step(0.72, rnd);
          float f = fract(r * 0.35 - uTime * (1.4 + rnd * 2.2) + rnd * 7.0);
          float line = streak * smoothstep(0.0, 0.25, f) * smoothstep(1.0, 0.6, f);
          float edge = smoothstep(0.65, 1.35, r);
          gl_FragColor = vec4(vec3(1.0), line * edge * uAmt * 0.28);
        }
      `}),this.speedLines=new lt(n,this.speedMat),this.speedLines.frustumCulled=!1,this.speedLines.renderOrder=999,t.add(this.speedLines),this.fireworkTimer=8}spawn(t,e,i,n,s,a,o,l,c,u,h,d,f=1.5,p=9.8){let x=this.next;this.next=(this.next+1)%hn,this.pos.set([t,e,i],x*3),this.vel.set([n,s,a],x*3),this.col.set([o,l,c,u],x*4),this.size[x]=h,this.life[x]=d,this.maxLife[x]=d,this.drag[x]=f,this.grav[x]=p}dust(t,e,i,n=1){let s=Math.floor(14*n);for(let a=0;a<s;a++){let o=Math.random()*Math.PI*2,l=2+Math.random()*5*n;this.spawn(t,e+.2,i,Math.cos(o)*l,.5+Math.random()*2,Math.sin(o)*l,.75,.72,.68,.55,.9+Math.random()*.8,.6+Math.random()*.5,3,-.5)}}confetti(t,e,i){let n=[[1,.3,.4],[1,.85,.1],[.3,.8,1],[.5,1,.5],[.8,.5,1]];for(let s=0;s<60;s++){let a=n[s%n.length];this.spawn(t,e+1,i,(Math.random()-.5)*9,4+Math.random()*7,(Math.random()-.5)*9,a[0],a[1],a[2],1,.22,1.6+Math.random(),1.2,6)}}pop(t,e,i,n=[1,.4,.6]){for(let s=0;s<24;s++){let a=Math.random()*6.28,o=(Math.random()-.5)*3,l=4+Math.random()*4;this.spawn(t,e,i,Math.cos(a)*l,o*2,Math.sin(a)*l,n[0],n[1],n[2],1,.3,.6,2,3)}}splash(t,e,i){for(let n=0;n<50;n++){let s=Math.random()*6.28,a=Math.random()*4;this.spawn(t,e,i,Math.cos(s)*a,6+Math.random()*8,Math.sin(s)*a,.8,.9,1,.8,.6,1.2,.5,18)}}sparks(t,e,i){for(let n=0;n<10;n++)this.spawn(t,e,i,(Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6,1,1,1,.9,.18,.35,2,5)}firework(t,e,i){let n=Math.random(),s=new At().setHSL(n,.9,.6);for(let a=0;a<90;a++){let o=Math.random()*2-1,l=Math.random()*6.28,c=22+Math.random()*6,u=Math.sqrt(1-o*o);this.spawn(t,e,i,u*Math.cos(l)*c,o*c,u*Math.sin(l)*c,s.r,s.g,s.b,1,3.5,2.2,1.6,6)}}update(t,e,i,n){let s=this.pos,a=this.vel,o=this.col;for(let l=0;l<hn;l++){if(this.life[l]<=0)continue;this.life[l]-=t;let c=Math.max(0,1-this.drag[l]*t);a[l*3]*=c,a[l*3+1]=a[l*3+1]*c-this.grav[l]*t,a[l*3+2]*=c,s[l*3]+=a[l*3]*t,s[l*3+1]+=a[l*3+1]*t,s[l*3+2]+=a[l*3+2]*t,this.life[l]<=0?o[l*4+3]=0:o[l*4+3]=Math.min(o[l*4+3],this.life[l]/this.maxLife[l]+.1)}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.speedMat.uniforms.uAmt.value+=(e-this.speedMat.uniforms.uAmt.value)*Math.min(1,t*4),this.speedMat.uniforms.uTime.value+=t,this.speedMat.uniforms.uAspect.value=i,this.speedLines.visible=this.speedMat.uniforms.uAmt.value>.01,n>.7&&(this.fireworkTimer-=t,this.fireworkTimer<0)?(this.fireworkTimer=Math.random()<.3?.4:4+Math.random()*10,this.firework(1100+Math.random()*300,180+Math.random()*120,-300+Math.random()*600),!0):!1}};var ec=class{constructor(){this.ctx=null,this.volume=.8,this.listener={x:0,y:0,z:0,rx:1,rz:0},this.sirenTimer=20,this.hornTimer=6}init(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.comp=i;let n=e.sampleRate*2;this.noise=e.createBuffer(1,n,e.sampleRate);let s=this.noise.getChannelData(0);for(let d=0;d<n;d++)s[d]=Math.random()*2-1;this.brown=e.createBuffer(1,n,e.sampleRate);let a=this.brown.getChannelData(0),o=0;for(let d=0;d<n;d++)o=(o+.02*(Math.random()*2-1))/1.02,a[d]=o*3.5;let l=this.loop(this.noise);this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,l.connect(this.windFilter).connect(this.windGain).connect(this.master);let c=this.loop(this.noise);this.whistle=e.createBiquadFilter(),this.whistle.type="bandpass",this.whistle.Q.value=9,this.whistleGain=e.createGain(),this.whistleGain.gain.value=0,c.connect(this.whistle).connect(this.whistleGain).connect(this.master);let u=this.loop(this.brown),h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=420,this.humGain=e.createGain(),this.humGain.gain.value=.08,u.connect(h).connect(this.humGain).connect(this.master),this.initMusic()}initMusic(){let t=this.ctx,e=this.music={step:0,next:t.currentTime+.3,intensity:.15,target:.15,night:0};e.bus=t.createGain(),e.bus.gain.value=this.musicVolume??.6,e.bus.connect(this.comp);let i=(a=0)=>{let o=t.createGain();return o.gain.value=a,o.connect(e.bus),o};e.pad=i(0),e.padFilter=t.createBiquadFilter(),e.padFilter.type="lowpass",e.padFilter.frequency.value=1100,e.padFilter.connect(e.pad),e.light=i(0),e.full=i(0),e.bass=i(0),e.arp=i(0),e.delay=t.createDelay(1),e.delay.delayTime.value=60/108*.75;let n=t.createGain();n.gain.value=.32;let s=t.createGain();s.gain.value=.35,e.arpIn=t.createGain(),e.arpIn.connect(e.arp),e.arpIn.connect(e.delay),e.delay.connect(n).connect(e.delay),e.delay.connect(s).connect(e.arp),e.chords=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],e.roots=[45,41,36,43]}setMusicVolume(t){this.musicVolume=t,this.music&&this.music.bus.gain.setTargetAtTime(t*.7,this.ctx.currentTime,.1)}setMusicIntensity(t,e=0){this.music&&(this.music.target=t,this.music.night=e)}noteHz(t){return 440*Math.pow(2,(t-69)/12)}musicVoice(t,e,i,n,s,a,o=.005,l=0){let c=this.ctx,u=c.createOscillator();u.type=e,u.frequency.value=i;let h=c.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(a,n+o),h.gain.exponentialRampToValueAtTime(1e-4,n+s);let d=u;if(l){let f=c.createBiquadFilter();f.type="lowpass",f.frequency.value=l,f.Q.value=4,d=u.connect(f)}return d.connect(h).connect(t),u.start(n),u.stop(n+s+.05),u}musicNoise(t,e,i,n,s){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;let l=a.createBiquadFilter();l.type="highpass",l.frequency.value=s;let c=a.createGain();c.gain.setValueAtTime(n,e),c.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(l).connect(c).connect(t),o.start(e,Math.random()),o.stop(e+i+.02)}scheduleMusic(t){let e=this.music,i=this.ctx;if(!e||i.state!=="running")return;let n=e.target>e.intensity?1.2:.3;e.intensity+=(e.target-e.intensity)*Math.min(1,t*n);let s=e.intensity,a=(u,h,d)=>{let f=Math.min(1,Math.max(0,(d-u)/(h-u)));return f*f*(3-2*f)},o=i.currentTime,l={pad:.3,light:a(.12,.3,s)*(1-a(.55,.85,s))*.9,full:a(.5,.82,s),bass:a(.25,.5,s)*.9,arp:a(.62,.92,s)*.8};for(let u in l)e[u].gain.setTargetAtTime(l[u],o,.6);e.padFilter.frequency.setTargetAtTime(700+(1-e.night)*600+s*500,o,.5);let c=60/108/4;for(e.next<o-.5&&(e.next=o+.05);e.next<o+.15;){let u=e.next,h=e.step%16,d=Math.floor(e.step/16)%4,f=e.chords[d],p=e.roots[d];if(h===0)for(let x of f)for(let m of[-7,7]){let g=this.musicVoice(e.padFilter,"sawtooth",this.noteHz(x)*Math.pow(2,m/1200),u,c*16+.4,.028,.35)}if(l.light>.02&&((h===0||h===8)&&this.kick(e.light,u,.55),h%4===2&&this.musicNoise(e.light,u,.05,.07,7e3)),l.full>.02&&(h%4===0&&this.kick(e.full,u,.85),(h===4||h===12)&&(this.musicNoise(e.full,u,.16,.32,1200),this.musicVoice(e.full,"triangle",185,u,.09,.12)),h===15&&d===3&&this.musicNoise(e.full,u,.12,.2,1500),this.musicNoise(e.full,u,h%2?.03:.05,h%4===2?.1:.05,8e3)),l.bass>.02&&[0,3,6,8,10,14].includes(h)){let x=h===10?p+7:h===14?p+12:p;this.musicVoice(e.bass,"sawtooth",this.noteHz(x),u,c*(h===0?2.5:1.6),.22,.008,260+s*380)}if(l.arp>.02){let x=[0,1,2,1,0,1,2,3],m=[f[0]+12,f[1]+12,f[2]+12,f[0]+24];this.musicVoice(e.arpIn,"square",this.noteHz(m[x[h%8]]),u,.13,.045,.004,2600)}e.step++,e.next+=c}}kick(t,e,i){let n=this.ctx,s=n.createOscillator();s.type="sine",s.frequency.setValueAtTime(140,e),s.frequency.exponentialRampToValueAtTime(42,e+.13);let a=n.createGain();a.gain.setValueAtTime(i,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.32),s.connect(a).connect(t),s.start(e),s.stop(e+.35)}loop(t){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(0,Math.random()*1.5),e}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}spatial(t,e,i=60){let n=this.listener,s=t-n.x,a=e-n.z,o=Math.hypot(s,a)||1,l=Math.max(-1,Math.min(1,(s*n.rx+a*n.rz)/o)),c=Math.min(1,i/(i+o));return{pan:l,gain:c}}out(t=1,e=0){let i=this.ctx,n=i.createGain();if(n.gain.value=t,e&&i.createStereoPanner){let s=i.createStereoPanner();s.pan.value=e,n.connect(s).connect(this.master)}else n.connect(this.master);return n}noiseBurst({dur:t=.2,type:e="bandpass",f0:i=1e3,f1:n=i,q:s=1,gain:a=.5,attack:o=.005,pan:l=0,delay:c=0}){let u=this.ctx,h=u.currentTime+c,d=u.createBufferSource();d.buffer=this.noise;let f=u.createBiquadFilter();f.type=e,f.Q.value=s,f.frequency.setValueAtTime(i,h),f.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+t);let p=u.createGain();p.gain.setValueAtTime(1e-4,h),p.gain.exponentialRampToValueAtTime(a,h+o),p.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(f).connect(p).connect(this.out(1,l)),d.start(h,Math.random()*1.5),d.stop(h+t+.05)}tone({dur:t=.2,type:e="sine",f0:i=440,f1:n=i,gain:s=.3,attack:a=.005,pan:o=0,delay:l=0}){let c=this.ctx,u=c.currentTime+l,h=c.createOscillator();h.type=e,h.frequency.setValueAtTime(i,u),n!==i&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),u+t);let d=c.createGain();d.gain.setValueAtTime(1e-4,u),d.gain.exponentialRampToValueAtTime(s,u+a),d.gain.exponentialRampToValueAtTime(1e-4,u+t),h.connect(d).connect(this.out(1,o)),h.start(u),h.stop(u+t+.05)}play(t,e={}){if(!(!this.ctx||this.ctx.state!=="running"))switch(t){case"web":this.noiseBurst({dur:.16,type:"bandpass",f0:4200,f1:1400,q:2.5,gain:.45,pan:e.pan||0}),this.tone({dur:.12,type:"triangle",f0:1900,f1:700,gain:.08,pan:e.pan||0});break;case"zip":this.noiseBurst({dur:.14,type:"bandpass",f0:4500,f1:1600,q:2.5,gain:.4}),this.tone({dur:.35,type:"sawtooth",f0:180,f1:900,gain:.05});break;case"taut":this.tone({dur:.22,type:"sine",f0:95,f1:55,gain:Math.min(.5,.12+e.amount*.012)}),this.noiseBurst({dur:.1,type:"lowpass",f0:900,f1:200,gain:.15});break;case"land":{let i=Math.min(1,e.impact/30);this.noiseBurst({dur:.18+i*.2,type:"lowpass",f0:600+i*400,f1:80,gain:.15+i*.5}),i>.6&&this.tone({dur:.3,f0:70,f1:40,gain:.4});break}case"step":this.noiseBurst({dur:.05,type:"bandpass",f0:1600,f1:900,q:1.5,gain:.07+Math.random()*.03});break;case"whoosh":this.noiseBurst({dur:.4,type:"bandpass",f0:350,f1:1600,q:1.2,gain:.25,attack:.12});break;case"jump":this.noiseBurst({dur:.12,type:"lowpass",f0:900,f1:300,gain:.12});break;case"perfect":this.tone({dur:.18,type:"triangle",f0:880,gain:.12}),this.tone({dur:.25,type:"triangle",f0:1320,gain:.12,delay:.07});break;case"chime":[523,659,784,1047].forEach((i,n)=>this.tone({dur:.35,type:"triangle",f0:i,gain:.16,delay:n*.09}));break;case"cash":this.tone({dur:.08,type:"square",f0:1568,gain:.06}),this.tone({dur:.25,type:"square",f0:2093,gain:.06,delay:.08});break;case"fail":[392,330,262].forEach((i,n)=>this.tone({dur:.3,type:"triangle",f0:i,gain:.15,delay:n*.12}));break;case"pickup":this.tone({dur:.15,type:"sine",f0:660,f1:990,gain:.2});break;case"pop":this.noiseBurst({dur:.08,type:"highpass",f0:2500,gain:.5}),this.tone({dur:.3,type:"sine",f0:900,f1:1800,gain:.1,delay:.03});break;case"splash":this.noiseBurst({dur:.9,type:"lowpass",f0:2500,f1:200,gain:.5,attack:.02});break;case"throw":this.noiseBurst({dur:.22,type:"bandpass",f0:800,f1:2400,q:1.5,gain:.2,attack:.04});break;case"thud":{let i=this.spatial(e.x,e.z,30);this.noiseBurst({dur:.12,type:"lowpass",f0:1200,f1:300,gain:.35*i.gain,pan:i.pan});break}case"honk":{let i=this.spatial(e.x,e.z,40),n=330+Math.random()*120;this.tone({dur:.35,type:"square",f0:n,gain:.07*i.gain,pan:i.pan,attack:.02}),this.tone({dur:.35,type:"square",f0:n*1.26,gain:.05*i.gain,pan:i.pan,attack:.02});break}case"birds":for(let i=0;i<8;i++)this.noiseBurst({dur:.06,type:"bandpass",f0:1200,q:2,gain:.12,delay:i*.05+Math.random()*.03});break;case"boom":{let i=this.spatial(e.x,e.z,400);this.noiseBurst({dur:1.4,type:"lowpass",f0:500,f1:60,gain:.5*i.gain,pan:i.pan,delay:.6});break}case"click":this.tone({dur:.05,type:"triangle",f0:1200,gain:.08});break;case"beep":this.tone({dur:e.high?.5:.18,type:"square",f0:e.high?1046:523,gain:.08});break;case"ring":{let i=660*Math.pow(2,Math.min(e.n||0,12)/24);this.tone({dur:.14,type:"triangle",f0:i,gain:.14}),this.tone({dur:.22,type:"triangle",f0:i*1.5,gain:.1,delay:.06});break}case"miss":this.tone({dur:.15,type:"triangle",f0:300,f1:200,gain:.1});break}}update(t,e,i,n){if(!this.ctx||this.ctx.state!=="running")return;this.scheduleMusic(t);let s=this.ctx.currentTime,a=Math.min(1,e/55);if(this.windGain.gain.setTargetAtTime(.02+a*a*.55,s,.15),this.windFilter.frequency.setTargetAtTime(250+a*1500,s,.15),this.whistleGain.gain.setTargetAtTime(Math.max(0,a-.55)*.25,s,.2),this.whistle.frequency.setTargetAtTime(1200+a*1400,s,.2),this.humGain.gain.setTargetAtTime(.09*Math.max(.15,1-i/160),s,.5),this.hornTimer-=t,this.hornTimer<0){this.hornTimer=4+Math.random()*10;let o=Math.random()*6.28;this.play("honk",{x:this.listener.x+Math.cos(o)*120,z:this.listener.z+Math.sin(o)*120})}if(this.sirenTimer-=t,this.sirenTimer<0){this.sirenTimer=35+Math.random()*50;let o=Math.random()*2-1;for(let l=0;l<6;l++)this.tone({dur:.7,type:"sine",f0:650,f1:1050,gain:.025,pan:o,delay:l*.75})}}};var ic=class{constructor(t){this.move={x:0,y:0},this.look={dx:0,dy:0},this._look={dx:0,dy:0},this.swingHeld=!1,this.jumpHeld=!1,this.jumpPressed=!1,this.jumpReleased=!1,this.zipPressed=!1,this.throwPressed=!1,this.camPressed=!1,this.pausePressed=!1,this.mapPressed=!1,this.actionPressed=!1,this._edges={},this.keys=new Set,this.joy={id:null,ox:0,oy:0,x:0,y:0},this.lookId=null,this.lookLast={x:0,y:0},this.touchMode=!1,this.enabled=!0,this.root=t,this.joyBase=document.getElementById("joy"),this.joyKnob=document.getElementById("joy-knob"),this.bindTouch(),this.bindKeys(),this.bindButtons();let e=window.matchMedia&&matchMedia("(pointer: coarse)").matches;(window.AndroidBridge||e&&(navigator.maxTouchPoints>0||"ontouchstart"in window))&&this.setTouchMode(!0)}bindTouch(){let t=document.getElementById("touch");t.addEventListener("pointerdown",i=>{if(!this.enabled)return;if(i.pointerType==="touch"&&this.setTouchMode(!0),i.pointerType==="mouse"){i.button===0&&(this._edges.swingDown=!0,this.mouseSwing=!0),document.pointerLockElement!==t&&this.wantPointerLock&&t.requestPointerLock?.(),this.lookId=i.pointerId,this.lookLast.x=i.clientX,this.lookLast.y=i.clientY;return}let n=window.innerWidth;i.clientX<n*.42&&this.joy.id===null?(this.joy.id=i.pointerId,this.joy.ox=i.clientX,this.joy.oy=i.clientY,this.joy.x=0,this.joy.y=0,this.joyBase.style.display="block",this.joyBase.style.left=i.clientX+"px",this.joyBase.style.top=i.clientY+"px",this.joyKnob.style.transform="translate(-50%,-50%)"):this.lookId===null&&(this.lookId=i.pointerId,this.lookLast.x=i.clientX,this.lookLast.y=i.clientY),t.setPointerCapture?.(i.pointerId)}),t.addEventListener("pointermove",i=>{if(i.pointerId===this.joy.id){let s=i.clientX-this.joy.ox,a=i.clientY-this.joy.oy,o=Math.hypot(s,a);o>58&&(this.joy.ox+=s/o*(o-58),this.joy.oy+=a/o*(o-58),this.joyBase.style.left=this.joy.ox+"px",this.joyBase.style.top=this.joy.oy+"px",s=s/o*58,a=a/o*58),this.joy.x=s/58,this.joy.y=-a/58,this.joyKnob.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${a}px))`}else if(i.pointerId===this.lookId){if(document.pointerLockElement)this._look.dx+=i.movementX,this._look.dy+=i.movementY;else if(i.pointerType!=="mouse"||i.buttons){let n=i.pointerType==="touch"?1.25:1;this._look.dx+=(i.clientX-this.lookLast.x)*n,this._look.dy+=(i.clientY-this.lookLast.y)*n}this.lookLast.x=i.clientX,this.lookLast.y=i.clientY}else i.pointerType==="mouse"&&document.pointerLockElement&&(this._look.dx+=i.movementX,this._look.dy+=i.movementY)});let e=i=>{i.pointerId===this.joy.id&&(this.joy.id=null,this.joy.x=0,this.joy.y=0,this.joyBase.style.display="none"),i.pointerId===this.lookId&&(this.lookId=null),i.pointerType==="mouse"&&i.button===0&&(this.mouseSwing=!1)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),window.addEventListener("contextmenu",i=>i.preventDefault())}setTouchMode(t){this.touchMode!==t&&(this.touchMode=t,document.body.classList.toggle("touch",t))}bindButtons(){let t=(i,n,s,a=!1)=>{let o=document.getElementById(i);if(!o)return;let l=null,c=0,u=0;o.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),d.pointerType==="touch"&&this.setTouchMode(!0),l=d.pointerId,c=d.clientX,u=d.clientY,o.setPointerCapture?.(d.pointerId),o.classList.add("down"),n()}),o.addEventListener("pointermove",d=>{a&&d.pointerId===l&&(this._look.dx+=(d.clientX-c)*1.4,this._look.dy+=(d.clientY-u)*1,c=d.clientX,u=d.clientY)});let h=d=>{d.pointerId===l&&(l=null,o.classList.remove("down"),s&&s())};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};t("btn-swing",()=>this.touchSwing=!0,()=>this.touchSwing=!1,!0),t("btn-jump",()=>{this._edges.jumpDown=!0,this.touchJump=!0},()=>{this._edges.jumpUp=!0,this.touchJump=!1}),t("btn-zip",()=>this._edges.zip=!0),t("btn-throw",()=>this._edges.throw=!0),t("btn-trick",()=>this._edges.trick=!0),t("btn-cam",()=>this._edges.cam=!0),t("btn-pause",()=>this._edges.pause=!0),t("btn-action",()=>this._edges.action=!0),document.getElementById("minimap")?.addEventListener("pointerdown",i=>{i.stopPropagation(),this._edges.map=!0})}bindKeys(){window.addEventListener("keydown",t=>{if(t.repeat)return;this.setTouchMode(!1);let e=t.code;this.keys.add(e),e==="Space"&&(this._edges.jumpDown=!0,t.preventDefault()),(e==="KeyE"||e==="KeyQ")&&(this._edges.zip=!0),e==="KeyF"&&(this._edges.throw=!0),(e==="KeyT"||e==="KeyG")&&(this._edges.trick=!0),(e==="KeyV"||e==="KeyC")&&(this._edges.cam=!0),(e==="Escape"||e==="KeyP")&&(this._edges.pause=!0),e==="KeyM"&&(this._edges.map=!0),(e==="Enter"||e==="KeyR")&&(this._edges.action=!0)}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="Space"&&(this._edges.jumpUp=!0)}),window.addEventListener("blur",()=>this.keys.clear())}poll(){let t=this.keys,e=this.joy.x,i=this.joy.y;(t.has("KeyW")||t.has("ArrowUp"))&&(i+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1);let n=Math.hypot(e,i);n>1&&(e/=n,i/=n),this.move.x=e,this.move.y=i,this.look.dx=this._look.dx,this.look.dy=this._look.dy,this._look.dx=0,this._look.dy=0;let s=t.has("ShiftLeft")||t.has("ShiftRight");this.swingHeld=this.enabled&&(this.touchSwing||this.mouseSwing||s);let a=this._edges;this.jumpPressed=!!a.jumpDown,this.jumpReleased=!!a.jumpUp,this.jumpHeld=!!this.touchJump||t.has("Space"),this.zipPressed=!!a.zip,this.throwPressed=!!a.throw,this.trickPressed=!!a.trick,this.camPressed=!!a.cam,this.pausePressed=!!a.pause,this.mapPressed=!!a.map,this.actionPressed=!!a.action,this._edges={},this.enabled||(this.move.x=this.move.y=0,this.look.dx=this.look.dy=0,this.jumpPressed=this.zipPressed=this.throwPressed=this.trickPressed=!1)}reset(){this.touchSwing=!1,this.touchJump=!1,this.mouseSwing=!1,this.keys.clear(),this.joy.id=null,this.joy.x=0,this.joy.y=0,this.joyBase&&(this.joyBase.style.display="none"),this.lookId=null,this._edges={}}};var Ne=r=>document.getElementById(r),nc=new A,sc=class{constructor(t){this.game=t,this.el={money:Ne("money"),balloons:Ne("balloons"),clock:Ne("clock"),speed:Ne("speed"),job:Ne("job"),jobTitle:Ne("job-title"),jobBody:Ne("job-body"),toasts:Ne("toasts"),combo:Ne("combo"),reticle:Ne("reticle"),zipMark:Ne("zip-mark"),objArrow:Ne("obj-arrow"),objMark:Ne("obj-mark"),objDist:Ne("obj-dist"),action:Ne("btn-action"),actionLabel:Ne("action-label"),swing:Ne("btn-swing"),zip:Ne("btn-zip"),throwBtn:Ne("btn-throw"),papers:Ne("papers-left"),camLabel:Ne("cam-label"),hint:Ne("hint"),trick:Ne("btn-trick"),trickLabel:Ne("trick-label")},this.cache={},this.mm=Ne("minimap"),this.mmCtx=this.mm.getContext("2d"),this.mapTimer=0,this.buildMapImage()}set(t,e,i){this.cache[t]!==i&&(this.cache[t]=i,e.textContent=i)}setHTML(t,e,i){this.cache[t]!==i&&(this.cache[t]=i,e.innerHTML=i)}show(t,e,i){let n="vis_"+t;this.cache[n]!==i&&(this.cache[n]=i,e.style.display=i?"":"none")}toast(t,e=""){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,this.el.toasts.appendChild(i);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove();setTimeout(()=>i.classList.add("out"),2600),setTimeout(()=>i.remove(),3200)}trickText(t,e,i=!1){let n=this.el.trickLabel;n.firstChild.textContent=t,n.lastChild.textContent=e,n.classList.toggle("bail",i),n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}buildMapImage(){let t=this.game.city,e=1024,i=st.SHORE+80;this.mapExt=i,this.mapScale=e/(i*2);let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),a=u=>(u+i)*this.mapScale;s.fillStyle="#1d4e66",s.fillRect(0,0,e,e),s.fillStyle="#5d6168";let o=a(-st.SHORE),l=a(st.SHORE);s.fillRect(o,o,l-o,l-o);for(let u of t.blocks)for(let h of u){let d=st.BLOCK/2;s.fillStyle=h.type===1?"#4f8a3c":h.type===2?"#a19a8e":"#8a8a86",s.fillRect(a(h.cx-d),a(h.cz-d),st.BLOCK*this.mapScale,st.BLOCK*this.mapScale)}for(let u of t.buildings){let h=u.tiers[0],d=Dt(u.height/220,0,1),f=Math.round(200-d*120);s.fillStyle=`rgb(${f},${f+4},${f+12})`,s.fillRect(a(h.minX),a(h.minZ),(h.maxX-h.minX)*this.mapScale,(h.maxZ-h.minZ)*this.mapScale)}let c=t.landmarks.bridge;s.fillStyle="#b5452c",s.fillRect(a(c.x0),a(c.z-13),c.len*this.mapScale,26*this.mapScale),this.mapImg=n}drawMinimap(t,e,i,n=!1,s=this.mmCtx,a=this.mm.width){let o=s,l=this.mapScale,c=this.mapExt,u=a/2;o.save(),o.clearRect(0,0,a,a),n||(o.beginPath(),o.arc(u,u,u-2,0,Math.PI*2),o.clip());let h=n?a/this.mapImg.width:1.6*(a/300);o.fillStyle="#1d4e66",o.fillRect(0,0,a,a),o.translate(u,u),n||o.rotate(e.yaw),o.scale(h,h);let d=(n?0:t.pos.x+c)*l,f=(n?0:t.pos.z+c)*l;n?o.drawImage(this.mapImg,-this.mapImg.width/2,-this.mapImg.height/2):o.drawImage(this.mapImg,-d,-f);let p=(v,b)=>n?[v*l,b*l]:[(v+c)*l-d,(b+c)*l-f],x=n?1/0:(u-10)/h,m=n?2.6:1,g=(v,b,P,R,L=!1,z)=>{R*=m;let[U,I]=p(v,b),B=Math.hypot(U,I);if(B>x){if(!L)return;U=U/B*x,I=I/B*x}o.fillStyle=P,o.beginPath(),o.arc(U,I,R/h,0,Math.PI*2),o.fill(),o.lineWidth=2/h,o.strokeStyle="#fff",o.stroke(),z&&(o.save(),o.translate(U,I),n||o.rotate(-e.yaw),o.fillStyle="#fff",o.font=`bold ${11*m/h}px sans-serif`,o.lineWidth=3*m/h,o.strokeStyle="rgba(0,0,0,0.8)",o.strokeText(z,0,-R/h-3/h),o.textAlign="center",o.fillText(z,0,-R/h-3/h),o.restore())},y=i.active,S=this.game.races.active;if(!y&&!S)for(let v of i.spots)g(v.x,v.z,v.type==="pizza"?"#ff8a1f":"#3fd0ff",n?7:6,!0,n?v.name:null);if(!y&&!S)for(let v of this.game.races.courses)g(v.spot.x,v.spot.z,"#29c46a",n?7:5,n,n?"\u{1F3C1} "+v.name:null);if(S){let v=S.course.rings[S.idx];v&&g(v.x,v.z,"#6dffb0",6,!0)}if(y&&y.type==="pizza")for(let v of y.orders)v.done||g(v.x,v.z,"#ff8a1f",6,!0,n?v.who:null);if(y&&y.type==="paper")for(let v of y.targets)v.hit||g(v.x,v.z,"#3fd0ff",5,!0);let[_,M]=p(t.pos.x,t.pos.z);o.translate(_,M),o.rotate(-t.facing+Math.PI),o.fillStyle="#ffe14d",o.strokeStyle="#000",o.lineWidth=1.5/h;let w=(n?22:8)/h;if(o.beginPath(),o.moveTo(0,-w*1.2),o.lineTo(w*.8,w),o.lineTo(0,w*.5),o.lineTo(-w*.8,w),o.closePath(),o.fill(),o.stroke(),o.restore(),!n){let v=e.yaw,b=u+Math.sin(-v)*(u-11)*-1,P=u-Math.cos(-v)*(u-11);o.fillStyle="#ff5050",o.font="bold 13px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("N",b,P),o.strokeStyle="rgba(255,255,255,0.8)",o.lineWidth=3,o.beginPath(),o.arc(u,u,u-2,0,Math.PI*2),o.stroke()}}project(t,e,i,n){nc.set(t,e,i).project(n);let s=nc.z>1,a=window.innerWidth,o=window.innerHeight,l=(nc.x*.5+.5)*a,c=(-nc.y*.5+.5)*o;return s&&(l=a-l,c=o-c),{x:l,y:c,behind:s}}update(t,e){let{player:i,jobs:n,cam:s,sky:a}=e,o=this.el;this.set("money",o.money,`$${e.money}`),this.set("balloons",o.balloons,`${e.balloons.count}/${e.balloons.total}`),this.set("clock",o.clock,a.clockString());let l=Math.round(i.speed*3.6);this.set("speed",o.speed,`${l}`);let c=i.combo;c.count>=3?(this.show("combo",o.combo,!0),this.setHTML("combo",o.combo,`<b>x${c.count}</b> COMBO <span>${Math.round(c.score)}</span>`)):this.show("combo",o.combo,!1);let u=n.active,h=e.races.active;if(h){this.show("job",o.job,!0);let m=h.course,g=e.races.best(m.id),y=M=>`${Math.floor(M/60)}:${(M%60).toFixed(1).padStart(4,"0")}`;this.set("jobTitle",o.jobTitle,`\u{1F3C1} ${m.name}`);let S=h.countdown>0?0:h.time,_=S<=m.medals.gold?["\u{1F947}",m.medals.gold]:S<=m.medals.silver?["\u{1F948}",m.medals.silver]:S<=m.medals.bronze?["\u{1F949}",m.medals.bronze]:["",0];this.setHTML("jobBody",o.jobBody,`<div class="order"><span>Ring ${Math.min(h.idx+1,m.rings.length)} / ${m.rings.length}</span><b>${y(S)}</b></div><div class="order"><span>${_[0]?`${_[0]} under ${y(_[1])}`:"No medal"}</span><b>${g?"best "+y(g.best):""}</b></div>`)}else if(u)if(this.show("job",o.job,!0),u.type==="pizza"){this.set("jobTitle",o.jobTitle,`\u{1F355} ${u.spot.name}`);let m=u.orders.map(S=>{let _=S.done?S.failed?"failed":"done":S.left<15?"urgent":"",M=S.roof?"rooftop":"front door";return`<div class="order ${_}"><span>${S.who} \xB7 ${M}</span><b>${S.done?S.failed?"\u2717":"\u2713":Vh(S.left)}</b></div>`}),g=Math.round(u.condition),y=g>70?"#5be37a":g>40?"#ffd166":"#ff5a5a";m.push(`<div class="bar"><i style="width:${g}%;background:${y}"></i><label>Pizza condition ${g}%</label></div>`),this.setHTML("jobBody",o.jobBody,m.join(""))}else{this.set("jobTitle",o.jobTitle,`\u{1F4F0} ${u.spot.name} route`);let m=u.targets.filter(g=>!g.hit).length;this.setHTML("jobBody",o.jobBody,`<div class="order ${u.left<15?"urgent":""}"><span>Subscribers left: ${m}</span><b>${Vh(u.left)}</b></div><div class="order"><span>Papers: ${u.papers}</span><b>${u.hits} hit</b></div>`)}else this.show("job",o.job,!1);o.trick.classList.toggle("ready",i.canTrick&&!i.trick);let d=u&&u.type==="paper";document.body.classList.toggle("paper-job",!!d),this.show("throw",o.throwBtn,!!d),d&&this.set("papers",o.papers,`${u.papers}`);let f=n.canStart(),p=!f&&e.races.canStart();if(this.show("action",o.action,!!(f||p)),f)this.set("actionLabel",o.actionLabel,f.type==="pizza"?"Start pizza delivery":"Start paper route");else if(p){let m=e.races.best(p.id),g=m&&m.medal?{gold:" \u{1F947}",silver:" \u{1F948}",bronze:" \u{1F949}"}[m.medal]:"";this.set("actionLabel",o.actionLabel,`Race: ${p.name} (${p.level})${g}`)}if(o.swing.classList.toggle("ready",i.anchorHint),o.zip.classList.toggle("ready",i.zipCandidate.valid),o.reticle.classList.toggle("ready",i.zipCandidate.valid),i.zipCandidate.valid&&i.state!=="zip"){let m=i.zipCandidate.target,g=this.project(m.x,m.y-(i.zipCandidate.perch?.9:0),m.z,s.camera);g.behind?this.show("zipm",o.zipMark,!1):(this.show("zipm",o.zipMark,!0),o.zipMark.style.transform=`translate(${g.x}px, ${g.y}px) translate(-50%,-50%)`,o.zipMark.classList.toggle("perch",i.zipCandidate.perch))}else this.show("zipm",o.zipMark,!1);let x=n.objective(i)||e.races.objective(i);if(x){let m=this.project(x.x,x.y+2,x.z,s.camera),g=window.innerWidth,y=window.innerHeight,S=46,_=86,M=!m.behind&&m.x>S&&m.x<g-S&&m.y>S&&m.y<y-_;if(this.set("objd",o.objDist,`${Math.round(Math.hypot(x.dist,x.y-i.pos.y))} m`),o.objMark.className=x.type,o.objArrow.className=x.type,M)this.show("objm",o.objMark,!0),this.show("obja",o.objArrow,!1),o.objMark.style.transform=`translate(${m.x}px, ${m.y}px) translate(-50%,-100%)`,o.objMark.appendChild(o.objDist);else{this.show("objm",o.objMark,!1),this.show("obja",o.objArrow,!0);let w=g/2,v=y/2,b=m.x-w,P=m.y-v;m.behind&&Math.abs(P)<1&&(P=1);let R=Math.min((w-S-20)/Math.abs(b||.001),(P>0?v-_:v-S-30)/Math.abs(P||.001)),L=w+b*R,z=v+P*R,U=Math.atan2(P,b);o.objArrow.style.transform=`translate(${L}px, ${z}px) translate(-50%,-50%)`,o.objArrow.firstElementChild.style.transform=`rotate(${U}rad)`,o.objArrow.appendChild(o.objDist)}}else this.show("objm",o.objMark,!1),this.show("obja",o.objArrow,!1);this.mapTimer-=t,this.mapTimer<=0&&(this.mapTimer=1/15,this.drawMinimap(i,(s.camera,s),n))}};var rc=16747039,ac=4182271,Av=[{name:"Slice Express",near:[-300,330]},{name:"Rocco's Pizza",near:[330,-260]},{name:"Mamma Pie",near:[420,470]}],Rv=[{name:"Daily Swing Stand",near:[-420,-380]},{name:"Uptown News",near:[150,520]}],Cv=["Maple","Harbor","Ash","Cedar","Union","Bay","Elm","Market","Pine","Grand","Hill","River","Oak"],Pv=["Alex","Sam","Priya","Jordan","Mei","Diego","Noor","Kai","Lena","Omar","Rosa","Theo","Ivy","Ben"];function Qf(r){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");if(e.fillStyle=r==="pizza"?"#ff8a1f":"#3fd0ff",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.lineWidth=6,e.strokeStyle="#fff",e.stroke(),r==="pizza"){e.fillStyle="#ffd36b",e.beginPath(),e.moveTo(64,104),e.lineTo(30,36),e.quadraticCurveTo(64,18,98,36),e.closePath(),e.fill(),e.fillStyle="#c8742f",e.beginPath(),e.moveTo(30,36),e.quadraticCurveTo(64,18,98,36),e.lineTo(94,44),e.quadraticCurveTo(64,28,34,44),e.closePath(),e.fill(),e.fillStyle="#d6332a";for(let[n,s]of[[62,52],[50,66],[74,70],[64,86]])e.beginPath(),e.arc(n,s,6,0,6.3),e.fill()}else{e.fillStyle="#f4f4f4",e.fillRect(30,32,68,64),e.fillStyle="#333",e.fillRect(36,38,56,10);for(let n=0;n<5;n++)e.fillRect(36,54+n*8,n%2?26:56,4);e.fillRect(66,54,26,20)}return new ai(t)}function tp(r,t,e){let i=document.createElement("canvas");i.width=512,i.height=128;let n=i.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,512,128),n.strokeStyle=e,n.lineWidth=8,n.strokeRect(8,8,496,112),n.fillStyle=e,n.font="bold 60px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(r,256,68),new ai(i)}var oc=class{constructor(t,e,i=260,n=1.4){this.group=new _e;let s=new lt(new Wt(n,n,i,12,1,!0),new Ae({color:e,transparent:!0,opacity:.28,blending:Li,depthWrite:!1,side:Oe,fog:!1}));s.position.y=i/2,this.ring=new lt(new On(2.2,3,32),new Ae({color:e,transparent:!0,opacity:.8,side:Oe,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.12,this.group.add(s,this.ring),this.group.visible=!1,t.add(this.group),this.t=Math.random()*6}show(t,e,i){this.group.position.set(t,e,i),this.group.visible=!0}hide(){this.group.visible=!1}update(t,e){this.t+=t;let i=1+Math.sin(this.t*4)*.12;if(this.ring.scale.set(i,i,i),e){let n=Math.hypot(e.pos.x-this.group.position.x,e.pos.z-this.group.position.z);this.group.children[0].material.opacity=.28*Math.min(1,Math.max(0,(n-6)/30))}}},lc=class{constructor(t,e,i){this.scene=t,this.city=e,this.game=i,this.rng=new Si(Date.now()&65535),this.spots=[],this.active=null,this.icons={pizza:Qf("pizza"),paper:Qf("paper")},this.placeSpots(),this.beacons=Array.from({length:12},()=>new oc(t,16777215)),this.papers=[];let n=new Wt(.11,.11,.42,8);n.rotateZ(Math.PI/2);let s=new Ze({color:15262936});for(let a=0;a<10;a++){let o=new lt(n,s);o.visible=!1,t.add(o),this.papers.push({mesh:o,active:!1,vel:new A,life:0,landed:!1})}this.nearSpot=null,this.streak=0,this._v=new A,this._hit={},this.buildCargo()}placeSpots(){let t=this.city,e=new Set,i=n=>{let s=null,a=1/0;for(let o of t.doors){if(e.has(o.building)||o.building.landmark||o.building.height>90)continue;let l=Math.hypot(o.x-n[0],o.z-n[1]);l<a&&(a=l,s=o)}return e.add(s.building),s};for(let n of Av){let s=i(n.near),a={type:"pizza",name:n.name,x:s.x,y:0,z:s.z,nx:s.nx,nz:s.nz};this.spots.push(a),this.buildShop(a)}for(let n of Rv){let s=Dt(Math.floor((n.near[0]+st.HALF)/st.PITCH),0,st.N-1),a=Dt(Math.floor((n.near[1]+st.HALF)/st.PITCH),0,st.N-1),o=st.BLOCK/2-3.2,l={type:"paper",name:n.name,x:Ti(s)+o,y:0,z:Ti(a)+o,nx:1,nz:0};this.buildKiosk(l),l.x-=4.5,this.spots.push(l)}for(let n of this.spots){let s=new rs(new Fn({map:this.icons[n.type],depthWrite:!1,fog:!1}));s.position.set(n.x,4.2,n.z),s.scale.set(2.2,2.2,1),this.scene.add(s),n.sprite=s;let a=new lt(new On(2.6,3.2,32),new Ae({color:n.type==="pizza"?rc:ac,transparent:!0,opacity:.85,side:Oe,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(n.x,.08,n.z),this.scene.add(a),n.ring=a;let o=new oc(this.scene,n.type==="pizza"?rc:ac,70,.6);o.ring.visible=!1,o.show(n.x,0,n.z),n.pillar=o}}buildShop(t){let e=t.x-t.nx*2.2,i=t.z-t.nz*2.2,n=Math.atan2(t.nx,t.nz),s=new lt(new fi(6,1.5),new Ae({map:tp(t.name.toUpperCase(),"#d6332a","#fff3c4")}));s.position.set(e+t.nx*.08,4.4,i+t.nz*.08),s.rotation.y=n;let a=new lt(new xt(7,.25,1.6),new Ze({color:16747039}));a.position.set(e+t.nx*.8,3.4,i+t.nz*.8),a.rotation.y=n,a.rotation.x=0,this.scene.add(s,a)}buildKiosk(t){let e=new _e,i=new lt(new xt(2.6,2.6,2),new Ze({color:2062925}));i.position.y=1.3;let n=new lt(new xt(3.2,.25,2.6),new Ze({color:1333562}));n.position.y=2.75;let s=new lt(new fi(2.6,.65),new Ae({map:tp("NEWS","#fff","#14213d"),side:Oe}));s.position.set(0,3.25,0),s.rotation.y=Math.PI/2;let a=new lt(new xt(.8,.5,.6),new Ze({color:15658734}));a.position.set(0,.25,-1.35),e.add(i,n,s,a),e.position.set(t.x,0,t.z),this.scene.add(Ei(e)),this.game.world.addBox(t.x-1.3,0,t.z-1,t.x+1.3,2.9,t.z+1,null)}buildCargo(){let t=this.game.hero;this.pizzaBoxes=[];let e=new Ze({color:15918022});for(let i=0;i<3;i++){let n=new lt(new xt(.42,.07,.42),e);n.position.set(0,.22+i*.075,-.12),n.visible=!1,t.cargo.add(n),this.pizzaBoxes.push(n)}this.paperBundle=new lt(new Wt(.12,.12,.34,8),new Ze({color:15262936})),this.paperBundle.rotation.z=Math.PI/2,this.paperBundle.position.set(0,.25,-.05),this.paperBundle.visible=!1,t.cargo.add(this.paperBundle)}updateCargo(){let t=this.active,e=t&&t.type==="pizza"?t.orders.filter(i=>!i.done).length:0;this.pizzaBoxes.forEach((i,n)=>i.visible=n<e),this.paperBundle.visible=!!(t&&t.type==="paper"&&t.papers>0),this.paperBundle.visible&&this.paperBundle.scale.set(1,1,.5+Math.min(1,t.papers/12)*1.2)}canStart(){return!this.active&&!(this.game.races&&this.game.races.active)&&this.nearSpot}start(){let t=this.nearSpot;!t||this.active||(t.type==="pizza"?this.startPizza(t):this.startPaper(t),this.updateCargo(),this.game.sound.play("pickup"))}randomDestination(t,e,i){let n=this.city;for(let s=0;s<60;s++){let a=n.buildings[this.rng.int(0,n.buildings.length-1)],o=a.top,l=(o.minX+o.maxX)/2,c=(o.minZ+o.maxZ)/2,u=Math.hypot(l-t.x,c-t.z);if(u<e||u>i)continue;if(this.rng.chance(.55)||!a.doors.length){for(let f=0;f<6;f++){let p=this.rng.float(o.minX+2,o.maxX-2),x=this.rng.float(o.minZ+2,o.maxZ-2);if(!this.game.world.overlaps(p,o.maxY+1,x,.6,.9))return{x:p,y:o.maxY,z:x,roof:!0,building:a}}continue}let d=this.rng.pick(a.doors);return{x:d.x,y:0,z:d.z,roof:!1,building:a,nx:d.nx,nz:d.nz}}return null}startPizza(t){let e=1+(this.rng.chance(.55)?1:0)+(this.rng.chance(.25)?1:0),i=[];for(let n=0;n<e;n++){let s=this.randomDestination(t,200,700);if(!s)continue;let a=Math.hypot(s.x-t.x,s.z-t.z),o=Math.round(28+a/11+n*18+(s.roof?8:0));i.push({...s,dist:a,limit:o,left:o,done:!1,failed:!1,who:this.rng.pick(Pv),street:`${this.rng.int(10,990)} ${this.rng.pick(Cv)} St`,slot:n})}this.active={type:"pizza",spot:t,orders:i,condition:100,earned:0,stars:[],time:0},i.forEach((n,s)=>{let a=Math.atan2(t.x-n.x,t.z-n.z);this.game.peds.setSpecial(s,!0,n.x,n.y,n.z,a,0);let o=this.beacons[s];o.group.children[0].material.color.setHex(rc),o.ring.material.color.setHex(rc),o.show(n.x,n.y,n.z),n.beacon=o}),this.game.hud.toast(`\u{1F355} ${i.length} order${i.length>1?"s":""} from ${t.name}! Deliver while they're hot.`,"job")}startPaper(t){let e=this.city,i=e.doors.filter(u=>u.building.height<60&&Math.hypot(u.x-t.x,u.z-t.z)<300&&Math.hypot(u.x-t.x,u.z-t.z)>25),n=e.buildings.filter(u=>u.height<28&&!u.landmark&&Math.hypot((u.fp.x0+u.fp.x1)/2-t.x,(u.fp.z0+u.fp.z1)/2-t.z)<280),s=[],a=(u,h)=>s.every(d=>Math.hypot(d.x-u,d.z-h)>28),o=0;for(;s.length<6&&i.length&&o++<200;){let u=i[this.rng.int(0,i.length-1)];a(u.x,u.z)&&s.push({x:u.x,y:.05,z:u.z,roof:!1,hit:!1})}for(o=0;s.length<8&&n.length&&o++<100;){let h=n[this.rng.int(0,n.length-1)].top,d=(h.minX+h.maxX)/2,f=(h.minZ+h.maxZ)/2;a(d,f)&&!this.game.world.overlaps(d,h.maxY+.5,f,.5,.4)&&s.push({x:d,y:h.maxY+.05,z:f,roof:!0,hit:!1})}let l=s.length+5,c=50+s.length*9;this.active={type:"paper",spot:t,targets:s,papers:l,thrown:0,hits:0,bulls:0,limit:c,left:c,earned:0,streak:0},s.forEach((u,h)=>{let d=this.beacons[h];d.group.children[0].material.color.setHex(ac),d.ring.material.color.setHex(ac),d.show(u.x,u.y,u.z),u.beacon=d}),this.game.hud.toast(`\u{1F4F0} Paper route: ${s.length} subscribers, ${l} papers. Throw with the \u{1F4F0} button!`,"job")}cancel(){this.active&&this.finish(!0)}onImpact(t){let e=this.active;if(!e||e.type!=="pizza")return;let i=Math.min(40,t*2.2);e.condition=Math.max(0,e.condition-i),i>2&&this.game.hud.toast(`Careful! Pizza condition ${Math.round(e.condition)}%`,"warn")}update(t,e){for(let n of this.beacons)n.group.visible&&n.update(t,e);this.nearSpot=null;for(let n of this.spots){n.sprite.position.y=4.2+Math.sin(performance.now()*.003)*.2;let s=Math.hypot(e.pos.x-n.x,e.pos.z-n.z);!this.active&&s<6&&e.pos.y<4&&(this.nearSpot=n),n.ring.visible=!this.active,n.pillar.group.visible=!this.active&&s>12}this.updatePapers(t);let i=this.active;if(i)if(i.type==="pizza"){i.time+=t;for(let n of i.orders){if(n.done)continue;n.left-=t;let s=e.pos.x-n.x,a=e.pos.z-n.z,o=e.pos.y-.9-n.y;s*s+a*a<4.5*4.5&&Math.abs(o)<3.5?this.deliver(n):n.left<=0&&(n.done=!0,n.failed=!0,n.beacon.hide(),this.game.peds.setSpecial(n.slot,!1),this.game.hud.toast(`\u231B ${n.who}'s order was too late and got cancelled.`,"bad"),this.game.sound.play("fail"),this.updateCargo())}i.orders.every(n=>n.done)&&this.finish(!1)}else{i.left-=t;let n=this.papers.some(s=>s.active&&!s.landed);(i.targets.every(s=>s.hit)||i.left<=0||i.papers<=0&&!n)&&this.finish(!1)}}deliver(t){let e=this.active;t.done=!0,t.beacon.hide();let i=Dt(t.left/t.limit,0,1),n=e.condition,s=10+Math.round(t.dist/25),a=Math.round(i*12),o=Math.round(n/100*10*(i>.2?1:.4)),l=s+a+o,c=i>.45&&n>85?5:i>.25&&n>65?4:n>45?3:n>20?2:1;e.earned+=l,e.stars.push(c),this.game.addMoney(l),this.game.stats.pizzas++,this.game.peds.setSpecial(t.slot,!0,t.x,t.y,t.z,Math.atan2(this.game.player.pos.x-t.x,this.game.player.pos.z-t.z),1),setTimeout(()=>this.game.peds.setSpecial(t.slot,!1),2500),this.game.fx.confetti(t.x,t.y+1,t.z),this.game.sound.play("chime"),this.game.hud.toast(`\u{1F355} Delivered to ${t.who}! +$${l} ${"\u2605".repeat(c)}${"\u2606".repeat(5-c)}`,"good"),this.game.peds.cheer(t.x,t.z,12),this.updateCargo()}throwPaper(){let t=this.active;if(!t||t.type!=="paper"||t.papers<=0)return!1;let e=this.papers.find(c=>!c.active)||this.papers[0],i=this.game.player,n=this.game.cam.handWorld(1,this._v),s=i.camFwd,a=null,o=1/0;for(let c of t.targets){if(c.hit)continue;let u=c.x-n.x,h=c.y-n.y,d=c.z-n.z,f=Math.hypot(u,h,d);if(f>55)continue;let p=(u*s.x+h*s.y+d*s.z)/f;if(p<.25&&f>12)continue;let x=f*(1.6-p);x<o&&(o=x,a=c)}e.active=!0,e.landed=!1,e.life=5,e.mesh.visible=!0,e.mesh.position.copy(n);let l=18;if(a){let c=Math.hypot(a.x-n.x,a.z-n.z),u=Dt(c/26,.3,1.3),h=.35;e.vel.set((a.x+(Math.random()-.5)*h-n.x)/u,(a.y+.15-n.y)/u+.5*l*u,(a.z+(Math.random()-.5)*h-n.z)/u)}else e.vel.set(s.x*28,s.y*28+5,s.z*28).addScaledVector(i.vel,.5);return t.papers--,t.thrown++,i.throwT=.35,this.game.sound.play("throw"),this.updateCargo(),!0}updatePapers(t){let e=this.active,i=this.game.world;for(let n of this.papers){if(!n.active)continue;if(n.life-=t,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}if(n.landed)continue;n.vel.y-=18*t;let s=n.vel.length()*t,a=this._v.copy(n.vel).normalize(),o=i.raycast(n.mesh.position.x,n.mesh.position.y,n.mesh.position.z,a.x,a.y,a.z,s,this._hit);if(o?(n.mesh.position.set(o.x+o.nx*.1,o.y+o.ny*.1,o.z+o.nz*.1),n.landed=o.ny>.5,n.landed||n.vel.set(o.nx*2,-2,o.nz*2),this.game.sound.play("thud",{x:o.x,z:o.z})):(n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.12&&i.groundAt(n.mesh.position.x,n.mesh.position.z)!==null&&(n.mesh.position.y=.12,n.landed=!0,this.game.sound.play("thud",{x:n.mesh.position.x,z:n.mesh.position.z}))),n.mesh.rotation.y+=t*9,n.mesh.rotation.x+=t*4,n.landed&&n.mesh.rotation.set(0,n.mesh.rotation.y,0),e&&e.type==="paper")for(let l of e.targets){if(l.hit)continue;let c=Math.hypot(n.mesh.position.x-l.x,n.mesh.position.y-l.y,n.mesh.position.z-l.z);if(c<2){l.hit=!0,l.beacon.hide(),e.hits++,e.streak++;let u=c<.9;u&&e.bulls++;let h=6+(u?3:0)+Math.min(e.streak-1,5);e.earned+=h,this.game.addMoney(h),this.game.stats.papers++,this.game.fx.sparks(l.x,l.y+.4,l.z),this.game.sound.play("cash"),this.game.hud.toast(`${u?"\u{1F3AF} Bullseye!":"\u{1F4F0} Delivered!"} +$${h}${e.streak>1?`  streak x${e.streak}`:""}`,"good"),this.game.peds.cheer(l.x,l.z,10),n.landed=!0;break}}n.landed&&e&&e.type==="paper"&&(e.targets.some(c=>c.hit&&Math.hypot(n.mesh.position.x-c.x,n.mesh.position.z-c.z)<2.2)||(e.streak=0))}}finish(t){let e=this.active;if(!e)return;this.active=null;for(let n of this.beacons)n.hide();for(let n=0;n<12;n++)this.game.peds.setSpecial(n,!1);this.updateCargo();let i;if(t)i={title:"Job cancelled",lines:["No worries - the city will always need couriers."],earned:e.earned};else if(e.type==="pizza"){let n=e.orders.filter(o=>!o.failed).length,s=e.stars.length?e.stars.reduce((o,l)=>o+l,0)/e.stars.length:0,a=0;n===e.orders.length&&e.orders.length>1&&(a=10*e.orders.length),a&&this.game.addMoney(a),n===e.orders.length?this.streak++:this.streak=0,i={title:n===e.orders.length?"Pizza run complete!":"Pizza run finished",lines:[`Delivered ${n} / ${e.orders.length} orders`,`Pizza condition: ${Math.round(e.condition)}%`,`Rating: ${"\u2605".repeat(Math.round(s))}${"\u2606".repeat(5-Math.round(s))}`,a?`Multi-order bonus: +$${a}`:"",this.streak>1?`Perfect-run streak: ${this.streak}`:""].filter(Boolean),earned:e.earned+a}}else{let n=e.targets.length,s=e.hits===n?20+Math.max(0,Math.round(e.left/3)):0,a=e.thrown?Math.round(e.hits/e.thrown*100):0;a>=80&&e.hits>3&&(s+=10),s&&this.game.addMoney(s),i={title:e.hits===n?"Route complete!":"Route finished",lines:[`Papers delivered: ${e.hits} / ${n}`,`Bullseyes: ${e.bulls}`,`Accuracy: ${a}%`,s?`Route bonus: +$${s}`:""].filter(Boolean),earned:e.earned+s}}this.game.stats.jobs+=t?0:1,this.game.onJobFinished(i,t)}objective(t){let e=this.active;if(!e)return null;let i=null,n=1/0,s=e.type==="pizza"?e.orders.filter(a=>!a.done):e.targets.filter(a=>!a.hit);for(let a of s){let o=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);o<n&&(n=o,i=a)}return i?{x:i.x,y:i.y,z:i.z,dist:n,type:e.type}:null}};var cc=8;function hc(r,t,e){let i=[],n=t;for(let s=0;s<r.length-1;s++){let[a,o]=r[s],[l,c]=r[s+1],u=Math.hypot(l-a,c-o),h=n;for(;h<=u;){let d=h/u;i.push([a+(l-a)*d,o+(c-o)*d]),h+=t}n=h-u}return i.map(([s,a],o)=>new A(s,e(o,i.length),a))}function Iv(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d");t.fillStyle="#29c46a",t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.lineWidth=6,t.strokeStyle="#fff",t.stroke();for(let e=0;e<4;e++)for(let i=0;i<5;i++)t.fillStyle=(i+e)%2?"#111":"#fff",t.fillRect(34+i*13,34+e*12,13,12);return t.fillStyle="#fff",t.fillRect(30,30,5,70),new ai(r)}var uc=class{constructor(t,e,i){this.scene=t,this.game=i,this.courses=this.buildCourses(e),this.active=null,this.nearSpot=null,this._v=new A;let n=new cs(cc,.45,10,56);this.rings=[7208880,4182271,4182271].map((a,o)=>{let l=new lt(n,new Ae({color:a,transparent:!0,opacity:o?.35:.95,blending:Li,depthWrite:!1,fog:!1}));return l.visible=!1,t.add(l),l}),this.disc=new lt(new os(cc-.3,40),new Ae({color:7208880,transparent:!0,opacity:.08,blending:Li,depthWrite:!1,side:Oe,fog:!1})),this.disc.visible=!1,t.add(this.disc);let s=Iv();for(let a of this.courses){let o=new rs(new Fn({map:s,depthWrite:!1,fog:!1}));o.position.set(a.spot.x,4.4,a.spot.z),o.scale.set(2.3,2.3,1);let l=new lt(new On(2.6,3.2,32),new Ae({color:2737258,transparent:!0,opacity:.85,side:Oe,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(a.spot.x,.09,a.spot.z);let c=new lt(new Wt(.6,.6,70,12,1,!0),new Ae({color:2737258,transparent:!0,opacity:.22,blending:Li,depthWrite:!1,side:Oe,fog:!1}));c.position.set(a.spot.x,35,a.spot.z),t.add(o,l,c),a.marker={spr:o,ring:l,pillar:c}}}buildCourses(t){let e=(g,y,S=1.7)=>_=>g+(y-g)*(.5+.5*Math.sin(_*S)),i=[],n=(g,y,S,_,M,w)=>{let v=0,b=new A(_.x,_.y,_.z);for(let P of M)v+=b.distanceTo(P),b=P;i.push({id:g,name:y,level:S,start:_,rings:M,length:v,medals:{gold:Math.round(v/26+5),silver:Math.round(v/20+10),bronze:Math.round(v/14+20)},spot:w||{x:_.x,z:_.z}})},s=ye(4);n("avenue","Avenue Sprint","Easy",{x:s,y:.9,z:470,yaw:0},hc([[s,470],[s,-440]],72,e(16,34))),n("downtown","Downtown Slalom","Medium",{x:-485,y:.9,z:ye(4),yaw:-Math.PI/2},hc([[-485,ye(4)],[ye(6),ye(4)],[ye(6),ye(7)],[ye(9),ye(7)],[ye(9),ye(3)]],64,e(16,38,1.3)));let a=ye(8),o=ye(10),l=ye(2),c=ye(4);n("park","Park Loop","Medium",{x:a,y:.9,z:c+70,yaw:0},hc([[a,c+70],[a,l],[o,l],[o,c],[a,c],[a,l+40]],58,e(13,28,1.1)));let u=Ti(5),h=Ti(5),d=ye(5),f=ye(6),p=ye(5),x=ye(6),m=hc([[d,h],[d,x],[f,x],[f,p],[d,p],[d,x],[f,x]],58,(g,y)=>22+180*Math.pow(1-g/Math.max(1,y-1),1.6));return n("tower","Tower Dive","Hard",{x:u-21,y:243.95,z:h,yaw:Math.PI/2},m,{x:u-38,z:h+8}),i}canStart(){return this.active||this.game.jobs.active?null:this.nearSpot}best(t){return(this.game.save.races||{})[t]||null}begin(t=this.nearSpot){if(!t||this.active)return;let e=this.game,i=e.player;i.teleport(t.start.x,t.start.y,t.start.z),i.state="ground",i.frozen=!0,e.cam.yaw=t.start.yaw,e.cam.pitch=t.id==="tower"?-.35:-.02,e.cam.lookIdle=0,this.active={course:t,idx:0,time:0,countdown:3,lastBeep:4,prev:i.pos.clone(),splits:[]},this.showRings(),e.sound.play("pickup")}cancel(){this.active&&(this.game.player.frozen=!1,this.game.player.preferAirZip=!1,this.active=null,this.hideRings(),this.game.hud.toast("Race cancelled"))}hideRings(){for(let t of this.rings)t.visible=!1;this.disc.visible=!1}showRings(){let t=this.active,e=t.course.rings;this.rings.forEach((n,s)=>{let a=t.idx+s;if(a>=e.length){n.visible=!1;return}n.visible=!0,n.position.copy(e[a]);let o=e[a+1]||e[a].clone().add(this._v.copy(e[a]).sub(e[a-1]||t.course.start).normalize());n.lookAt(o),n.material.color.setHex(a===e.length-1?16767053:s===0?7208880:4182271)});let i=this.rings[0];this.disc.visible=i.visible,this.disc.position.copy(i.position),this.disc.quaternion.copy(i.quaternion)}update(t,e){this.nearSpot=null;for(let w of this.courses){let v=!this.active&&!this.game.jobs.active;w.marker.spr.visible=w.marker.ring.visible=v;let b=Math.hypot(e.pos.x-w.spot.x,e.pos.z-w.spot.z);w.marker.pillar.visible=v&&b>12,w.marker.spr.position.y=4.4+Math.sin(performance.now()*.003)*.2,v&&b<6&&e.pos.y<4&&(this.nearSpot=w)}let i=this.active;if(!i)return;let n=this.game;if(i.countdown>0){i.countdown-=t;let w=Math.ceil(i.countdown);w!==i.lastBeep&&w>0&&(i.lastBeep=w,n.hud.trickText(String(w),i.course.name),n.sound.play("beep",{high:!1})),i.countdown<=0&&(e.frozen=!1,n.hud.trickText("GO!",""),n.sound.play("beep",{high:!0}),i.prev.copy(e.pos));return}i.time+=t;let s=i.course.rings,a=s[i.idx],o=i.prev,l=e.pos,c=this._v.subVectors(l,o),u=c.lengthSq(),h=u>0?((a.x-o.x)*c.x+(a.y-o.y)*c.y+(a.z-o.z)*c.z)/u:0;h=Math.max(0,Math.min(1,h));let d=o.x+c.x*h,f=o.y+c.y*h,p=o.z+c.z*h;if(Math.hypot(d-a.x,f-a.y,p-a.z)<cc+1.5){if(i.idx++,i.splits.push(i.time),n.fx.sparks(a.x,a.y,a.z),i.idx>=s.length){this.finish();return}n.sound.play("ring",{n:i.idx}),this.showRings()}i.prev.copy(e.pos);let x=s[i.idx],m=x.x-e.pos.x,g=x.y-e.pos.y,y=x.z-e.pos.z,S=Math.hypot(m,g,y),_=e.aimFwd;e.preferAirZip=S<70&&(m*_.x+g*_.y+y*_.z)/S>Math.cos(Math.atan2(cc*1.2,S)+.08);let M=1+Math.sin(performance.now()*.008)*.04;this.rings[0].scale.setScalar(M)}finish(){let t=this.active,e=this.game;this.active=null,e.player.preferAirZip=!1,this.hideRings();let i=t.course,n=t.time,s=n<=i.medals.gold?"gold":n<=i.medals.silver?"silver":n<=i.medals.bronze?"bronze":null,a={gold:3,silver:2,bronze:1};e.save.races=e.save.races||{};let o=e.save.races[i.id]||{best:null,medal:null},l=o.medal?a[o.medal]:0,c=s?a[s]:0,u=[0,40,100,200],h=Math.max(0,u[c]-u[l])+10,d=o.best===null||n<o.best;e.save.races[i.id]={best:d?n:o.best,medal:c>l?s:o.medal},e.money+=h;let f=x=>`${Math.floor(x/60)}:${(x%60).toFixed(1).padStart(4,"0")}`,p={gold:"\u{1F947}",silver:"\u{1F948}",bronze:"\u{1F949}"};e.onJobFinished({title:s?`${p[s]} ${s.toUpperCase()} medal!`:"Finished!",earned:h,lines:[`${i.name}: ${f(n)}${d?"  (new best!)":`  (best ${f(o.best)})`}`,`\u{1F947} ${f(i.medals.gold)} \xB7 \u{1F948} ${f(i.medals.silver)} \xB7 \u{1F949} ${f(i.medals.bronze)}`],retry:()=>this.begin(i)},!1)}objective(t){let e=this.active;if(!e||e.countdown>0)return null;let i=e.course.rings[e.idx];return{x:i.x,y:i.y-2,z:i.z,dist:Math.hypot(i.x-t.pos.x,i.z-t.pos.z),type:"race"}}};var ep="skylineCourier.save.v1",Lv={money:0,upgrades:{range:0,power:0,zip:0},suits:["courier"],suit:"courier",balloons:[],stats:{pizzas:0,papers:0,jobs:0,bestCombo:0,styleTips:0},tips:0,races:{},settings:{quality:"med",sens:1,invert:!1,chain:!0,vol:.8,music:.6,vib:!0,fps:!1,cam:"first",swingCam:1}};function ip(){let r={};try{r=JSON.parse(localStorage.getItem(ep)||"{}")||{}}catch{r={}}let t=JSON.parse(JSON.stringify(Lv));return{...t,...r,upgrades:{...t.upgrades,...r.upgrades||{}},stats:{...t.stats,...r.stats||{}},settings:{...t.settings,...r.settings||{}}}}function np(r){try{localStorage.setItem(ep,JSON.stringify(r))}catch{}}ae.enabled=!1;var dc={low:{ratio:.75,far:1100,fog:1.3,post:!1,samples:0,shadows:0,interior:!1},med:{ratio:1,far:1900,fog:1,post:!0,samples:0,shadows:1536,interior:!0},high:{ratio:1.6,far:4200,fog:.9,post:!0,samples:4,shadows:2048,interior:!0}},ru=["Hold SWING near buildings to web-swing. Release to let go!","Let go near the top of a swing for a PERFECT RELEASE speed boost.","Run into a wall to run up it. Look where you want to go: up, sideways, around corners.","JUMP on a wall kicks off toward where you look. JUMP as you clear a ledge to launch!","Aim at a ledge and press ZIP to zip there. ZIP in mid-air for a web-zip speed boost.","In the air, hit TRICK: push forward = front flip, back = backflip, sideways = barrel roll, no stick = spins & poses. Chain them!","Orange \u{1F355} and blue \u{1F4F0} markers on the minimap are delivery jobs. Green \u{1F3C1} markers are swing races!"],ue=r=>document.getElementById(r),Dv={move:{x:0,y:0},look:{dx:0,dy:0},swingHeld:!1,jumpHeld:!1,jumpPressed:!1,jumpReleased:!1,zipPressed:!1,trickPressed:!1};function Nv(r){let t=new er(r),e=new zn,i=new Pe({side:$e,vertexShader:"varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vD;
      void main() {
        float y = vD.y;
        vec3 sky = mix(vec3(0.78, 0.74, 0.68), vec3(0.32, 0.52, 0.86), smoothstep(0.0, 0.6, y));
        vec3 ground = mix(vec3(0.34, 0.32, 0.3), vec3(0.16, 0.16, 0.18), smoothstep(0.0, -0.5, y));
        vec3 c = y > 0.0 ? sky : ground;
        // city skyline band on the horizon
        c *= 1.0 - 0.35 * smoothstep(0.12, 0.0, abs(y - 0.04)) * step(0.5, fract(atan(vD.z, vD.x) * 6.0));
        c += vec3(1.0, 0.9, 0.75) * pow(max(dot(vD, normalize(vec3(-0.6, 0.5, 0.3))), 0.0), 80.0) * 8.0;
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new lt(new oe(10,32,16),i));let n=t.fromScene(e,0);return t.dispose(),n.texture}var au=class{constructor(){this.save=ip();let t=this.save.settings,e=dc[t.quality]||dc.med;if(this.canvas=ue("game"),this.renderer=new Rl({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=ss,this.renderer.setClearColor(922660),this.scene=new zn,this.world=new Il,this.city=new zl(this.scene,this.world),this.sky=new Fl(this.scene),this.sky.sun.layers.enable(qn),this.sky.hemi.layers.enable(qn),this.armFill=new Qr(16777215,.35),this.armFill.layers.set(qn),this.scene.add(this.armFill),this.post=new Bl(this.renderer),this.shadows=new ma(this.renderer,e.shadows||1536),this.cam=new Hl(this.scene,Xn.find(i=>i.id===this.save.suit)||Xn[0]),this.post.hdr)try{this.scene.environment=Nv(this.renderer)}catch{this.scene.environment=null}if(this.hero=new Wl(this.scene),this.player=new ql(this.world),this.webs=new Zl(this.scene),this.traffic=new Jl(this.scene,this.city),this.peds=new Kl(this.scene,this.city),this.ambient=new jl(this.scene,this.city),this.balloons=new Ql(this.scene,this.city,this.save.balloons),this.fx=new tc(this.scene,this.cam.camera),this.sound=new ec,this.input=new ic,this.stats=this.save.stats,this.money=this.save.money,this.hud=new sc(this),this.jobs=new lc(this.scene,this.city,this),this.races=new uc(this.scene,this.city,this),this.state="title",this.menuStack=[],this.time=0,this.saveTimer=0,this.tipTimer=6,this.dynScale=1,this.frameAcc=0,this.frameN=0,this.fpsAcc=0,this.fpsN=0,this.lastStyleToast=0,this.lastMissToast=-10,this.ropeLine=null,this.zipLines=[],this.prevState="air",this.handTmp=new A,this.findSpawn(),this.player.teleport(this.spawn.x,this.spawn.y,this.spawn.z),this.player.facing=Math.PI*.75,this.cam.yaw=this.player.facing+Math.PI,this.applySettings(),this.applyUpgrades(),this.spawnBuilding){let i=this.spawnBuilding.top;this.player.teleport(i.minX+1.6,i.maxY+1,(i.minZ+i.maxZ)/2),this.cam.yaw=Math.PI/2,this.cam.pitch=-.08}this.applySuit(),this.bindUI(),this.onResize(),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="play"&&this.openMenu("pause"),this.sound.suspend(),this.persist()):this.state!=="title"&&this.sound.resume()}),window.__onAndroidBack=()=>this.onBack(),window.__onAndroidPause=()=>{this.state==="play"&&this.openMenu("pause"),this.sound.suspend(),this.persist()},ue("loading").remove(),this.last=performance.now(),requestAnimationFrame(i=>this.loop(i))}showcaseHero(){if(this.showcase)return this.showcase;let t=Xn.find(l=>l.id===this.save.suit)||Xn[0];this.showcaseMats=this.cam.M;let e=new sr(this.showcaseMats),i=this.spawnBuilding,n=i?i.top:null,s=this.spawn.x,a=this.spawn.z,o=0;return n&&(s=n.minX+1.3,a=(n.minZ+n.maxZ)/2,o=-Math.PI/2),e.root.position.set(s,(n?n.maxY:this.spawn.y-1)+.9,a),e.root.rotation.y=o,e.pose($h.stand),e.apply(1,100),this.scene.add(e.root),this.showcase={body:e,facing:o},this.showcase}findSpawn(){let t=null,e=1/0;for(let i of this.city.buildings){if(i.height<45||i.height>95||i.landmark)continue;let n=i.top,s=(n.minX+n.maxX)/2,a=(n.minZ+n.maxZ)/2,o=Math.hypot(s+170,a-160);o<e&&!this.world.overlaps(s,n.maxY+1,a,.5,.9)&&(e=o,t={x:s,y:n.maxY+1,z:a},this.spawnBuilding=i)}this.spawn=t||{x:0,y:40,z:0}}applySettings(){let t=this.save.settings,e=dc[t.quality]||dc.med;this.quality=e,this.post.configure({enabled:e.post,samples:e.samples}),e.shadows&&e.shadows!==this.shadows.size&&(this.shadows.rt.dispose(),this.shadows=new ma(this.renderer,e.shadows)),this.shadows.setEnabled(!!e.shadows),Zt.uInterior.value=e.interior?1:0,this.cam.camera.far=e.far,this.cam.camera.updateProjectionMatrix(),this.sky.fogScale=e.fog,this.cam.sens=t.sens,this.cam.invertY=t.invert,this.cam.swingTilt=[0,.5,.85][t.swingCam??1]??.5,this.player.autoChain=t.chain,this.sound.setVolume(t.vol),this.sound.setMusicVolume(t.music??.6),ue("fps").classList.toggle("hidden",!t.fps),this.dynScale=1,this.onResize();let i={"set-quality":t.quality,"set-invert":t.invert?"1":"0","set-chain":t.chain?"1":"0","set-vib":t.vib?"1":"0","set-fps":t.fps?"1":"0","set-swingcam":String(t.swingCam??1)};for(let[n,s]of Object.entries(i))for(let a of ue(n).querySelectorAll("button"))a.classList.toggle("on",a.dataset.v===s);ue("set-sens").value=t.sens,ue("set-vol").value=t.vol,ue("set-music").value=t.music??.6}applyUpgrades(){let t=this.save.upgrades;this.player.stats.range=fa.range.values[t.range],this.player.stats.power=fa.power.values[t.power],this.player.stats.zip=fa.zip.values[t.zip]}applySuit(){let t=Xn.find(e=>e.id===this.save.suit)||Xn[0];this.hero.setSuit(t),this.cam.setSuit(t),this.showcase&&this.showcaseMats.setSuit(t)}onResize(){let t=window.innerWidth,e=window.innerHeight,i=window.devicePixelRatio||1,n=Math.min(i,this.quality?this.quality.ratio:1.2)*this.dynScale;this.renderer.setPixelRatio(Math.max(.5,n)),this.renderer.setSize(t,e,!1),this.cam.camera.aspect=t/e,this.cam.camera.updateProjectionMatrix(),this.fx.points.material.uniforms.uScale.value=e*this.renderer.getPixelRatio()/(2*Math.tan(this.cam.camera.fov*Math.PI/360))}persist(){this.save.money=this.money,this.save.balloons=this.balloons.items.filter(t=>t.got).map(t=>t.id),this.save.stats=this.stats,this.save.settings.cam=this.cam.mode,np(this.save)}addMoney(t){this.money+=t,this.sound.play("cash"),this.persist()}vibrate(t){if(this.save.settings.vib)try{window.AndroidBridge?window.AndroidBridge.vibrate(t):navigator.vibrate?.(t)}catch{}}bindUI(){let t=(n,s)=>n.addEventListener("click",a=>{a.stopPropagation(),this.sound.play("click"),s(a)});t(ue("play"),()=>this.startPlaying()),t(ue("resume"),()=>this.closeAllMenus()),t(ue("respawn"),()=>{this.player.teleport(this.spawn.x,this.spawn.y,this.spawn.z),this.closeAllMenus()}),t(ue("quit-job"),()=>{this.races.active?(this.races.cancel(),this.closeAllMenus()):this.jobs.cancel()}),t(ue("sum-retry"),()=>{let n=this.retry;this.closeAllMenus(),n&&n()}),t(ue("sum-ok"),()=>this.closeAllMenus()),document.querySelectorAll("[data-open]").forEach(n=>t(n,()=>this.openMenu(n.dataset.open))),document.querySelectorAll("[data-back]").forEach(n=>t(n,()=>this.back()));let e=(n,s)=>ue(n).querySelectorAll("button").forEach(a=>t(a,()=>{s(a.dataset.v),this.applySettings(),this.persist()})),i=this.save.settings;e("set-quality",n=>i.quality=n),e("set-invert",n=>i.invert=n==="1"),e("set-chain",n=>i.chain=n==="1"),e("set-vib",n=>i.vib=n==="1"),e("set-fps",n=>i.fps=n==="1"),e("set-swingcam",n=>i.swingCam=+n),ue("set-sens").addEventListener("input",n=>{i.sens=parseFloat(n.target.value),this.applySettings(),this.persist()}),ue("set-vol").addEventListener("input",n=>{i.vol=parseFloat(n.target.value),this.applySettings(),this.persist()}),ue("set-music").addEventListener("input",n=>{i.music=parseFloat(n.target.value),this.applySettings(),this.persist()}),document.querySelectorAll(".menu").forEach(n=>n.addEventListener("pointerdown",s=>s.stopPropagation()))}startPlaying(){this.sound.init(),this.sound.resume(),ue("title").classList.add("hidden"),document.body.classList.remove("on-title"),this.showcase&&(this.showcase.body.root.visible=!1),this.state="play",this.cam.smoothY=null,this.input.reset(),this.last=performance.now(),setTimeout(()=>ue("kb-hint").classList.add("fade"),3e4);try{!window.AndroidBridge&&document.documentElement.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&document.documentElement.requestFullscreen().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}this.save.tips<ru.length&&(this.tipTimer=1.5)}openMenu(t){let e=this.menuStack[this.menuStack.length-1];e!==t&&(e&&ue(e).classList.add("hidden"),this.menuStack.push(t),ue(t).classList.remove("hidden"),this.state==="play"&&(this.state="menu"),this.input.reset(),t==="pause"&&this.updatePauseMenu(),t==="shop"&&this.renderShop(),t==="map"&&this.hud.drawMinimap(this.player,this.cam,this.jobs,!0,ue("mapcanvas").getContext("2d"),900))}back(){let t=this.menuStack.pop();t&&ue(t).classList.add("hidden");let e=this.menuStack[this.menuStack.length-1];e?(ue(e).classList.remove("hidden"),e==="pause"&&this.updatePauseMenu()):this.state==="menu"&&(this.state="play",this.input.reset(),this.last=performance.now())}closeAllMenus(){for(;this.menuStack.length;)ue(this.menuStack.pop()).classList.add("hidden");this.state==="menu"&&(this.state="play"),this.input.reset(),this.last=performance.now()}onBack(){if(this.state==="title"){this.menuStack.length?this.back():window.AndroidBridge?.exitApp();return}this.menuStack.length?this.back():this.openMenu("pause")}updatePauseMenu(){ue("quit-job").style.display=this.jobs.active||this.races.active?"":"none",ue("quit-job").textContent=this.races.active?"Quit race":"Cancel current job";let t=this.stats;ue("stats-line").innerHTML=`\u{1F355} Pizzas: <b>${t.pizzas}</b> \xB7 \u{1F4F0} Papers: <b>${t.papers}</b> \xB7 \u{1F388} ${this.balloons.count}/${this.balloons.total} \xB7 Best combo: <b>${t.bestCombo}</b>`}renderShop(){ue("shop-money").textContent=`$${this.money}`;let t=this.save.upgrades,e=ue("upgrades");e.innerHTML="";for(let[n,s]of Object.entries(fa)){let a=t[n],o=a>=s.prices.length,l=o?0:s.prices[a],c=document.createElement("div");c.className="upg",c.innerHTML=`<div class="info"><b>${s.name}</b><small>${s.desc}</small><div class="pips">${[0,1,2].map(h=>`<i class="${h<a?"on":""}"></i>`).join("")}</div></div>`;let u=document.createElement("button");u.className="mbtn"+(o?"":" primary"),u.textContent=o?"MAX":`$${l}`,u.disabled=o||this.money<l,u.addEventListener("click",h=>{h.stopPropagation(),!(this.money<l||o)&&(this.money-=l,t[n]++,this.applyUpgrades(),this.sound.play("chime"),this.persist(),this.renderShop())}),c.appendChild(u),e.appendChild(c)}let i=ue("suits");i.innerHTML="";for(let n of Xn){let s=this.save.suits.includes(n.id),a=this.save.suit===n.id,o=document.createElement("div");o.className="suit"+(a?" on":"");let l=c=>"#"+c.toString(16).padStart(6,"0");o.innerHTML=`<div class="swatch" style="background:linear-gradient(135deg, ${l(n.main)} 55%, ${l(n.accent)} 55%)"></div>${n.name}<br><small>${a?"Equipped":s?"Owned":"$"+n.price}</small>`,o.addEventListener("click",c=>{if(c.stopPropagation(),!s){if(this.money<n.price){this.sound.play("miss");return}this.money-=n.price,this.save.suits.push(n.id)}this.save.suit=n.id,this.applySuit(),this.sound.play("pickup"),this.persist(),this.renderShop()}),i.appendChild(o)}}onJobFinished(t,e){this.menuStack.length&&this.closeAllMenus(),ue("sum-title").textContent=t.title,ue("sum-earned").textContent=t.earned?`+$${t.earned}`:"",ue("sum-lines").innerHTML=t.lines.map(i=>`<div>${i}</div>`).join(""),this.retry=t.retry||null,ue("sum-retry").style.display=this.retry?"":"none",ue("sum-ok").classList.toggle("wide",!this.retry),this.sound.play(e?"miss":"chime"),this.openMenu("summary"),this.persist()}handleEvents(){let t=this.player,e=i=>this.cam.handWorld(i,this.handTmp);for(let i of t.events)switch(i.type){case"web":this.ropeLine&&this.webs.release(this.ropeLine,t.vel),this.ropeLine=this.webs.shoot(i.anchor,e(i.side),t.rope.length),i.normal&&this.webs.splat(i.anchor,i.normal),this.ropeLine.side=i.side,this.sound.play("web",{pan:i.side*.4}),this.cam.kickFov(2.5),this.vibrate(12);break;case"release":this.ropeLine&&this.webs.release(this.ropeLine,t.vel),this.ropeLine=null;break;case"wrap":this.ropeLine&&this.ropeLine.anchor.copy(i.anchor);break;case"zip":for(let n of this.zipLines)this.webs.release(n,t.vel);this.zipLines=[this.webs.shoot(i.target,e(1)),this.webs.shoot(i.target,e(-1))],this.zipLines[0].side=1,this.zipLines[1].side=-1,this.sound.play("zip"),this.vibrate(15);break;case"taut":this.sound.play("taut",{amount:i.amount}),this.cam.shake(Math.min(.4,i.amount/60)),this.vibrate(10);break;case"land":this.sound.play("land",{impact:i.impact}),this.cam.land(i.impact),i.impact>12&&this.fx.dust(i.x,i.y,i.z,Math.min(2,i.impact/18)),i.impact>17&&(this.cam.shake(Math.min(1,i.impact/40)),this.vibrate(30)),i.impact>14&&i.y<1&&this.peds.cheer(i.x,i.z,16);break;case"impact":this.jobs.onImpact(i.amount),this.cam.shake(Math.min(1,i.amount/15)),this.vibrate(45);break;case"perfect":this.sound.play("perfect");break;case"style":this.time-this.lastStyleToast>.8&&(this.lastStyleToast=this.time,this.hud.toast(`\u2728 ${i.label}`,"style"));break;case"comboEnd":{let n=Math.floor(i.points/40);this.stats.bestCombo=Math.max(this.stats.bestCombo,i.points),n>0&&(this.money+=n,this.stats.styleTips+=n,this.hud.toast(`Combo x${i.count} \xB7 ${i.points} style \xB7 +$${n} tips`,"style"),this.sound.play("cash"),this.persist());break}case"miss":this.sound.play("miss"),this.time-this.lastMissToast>6&&(this.lastMissToast=this.time,this.hud.toast("Nothing to web onto here - get closer to tall buildings!","warn"));break;case"splash":this.fx.splash(i.x,st.WATER_Y,i.z),this.sound.play("splash"),this.hud.toast("Splash! Back to dry land\u2026","warn"),this.ropeLine&&(this.webs.release(this.ropeLine,t.vel),this.ropeLine=null);break;case"step":this.sound.play("step"),i.wall&&this.sound.play("jump");break;case"airzip":for(let n of this.zipLines)this.webs.release(n,t.vel);this.zipLines=[this.webs.shoot(i.target,e(1)),this.webs.shoot(i.target,e(-1))],this.zipLines[0].side=1,this.zipLines[1].side=-1,this.airZipLines=this.zipLines,this.sound.play("zip"),this.cam.kickFov(9),this.cam.shake(.25),this.vibrate(18);break;case"corner":this.cam.turn(i.delta),this.sound.play("whoosh");break;case"vault":this.cam.land(8),this.sound.play("land",{impact:8});break;case"jump":case"vault":this.sound.play("jump");break;case"launch":this.cam.kickFov(10),this.sound.play("whoosh");break;case"dive":this.sound.play("whoosh");break;case"trickStart":this.sound.play("whoosh"),this.vibrate(8);break;case"trickDone":this.hud.trickText(i.name,`+${i.pts}${i.chain>1?`   x${i.chain} CHAIN`:""}`),this.sound.play("perfect");break;case"bail":this.hud.trickText("BAIL!","landed mid-trick",!0),this.cam.shake(.6),this.sound.play("miss"),this.vibrate(40);break;case"wallLand":this.sound.play("land",{impact:Math.min(i.impact,12)});break;case"perch":this.sound.play("land",{impact:6});break}if(t.events.length=0,this.airZipLines&&t.airZipT<=0){for(let i of this.airZipLines)this.webs.release(i,t.vel);this.airZipLines=null,this.zipLines=[]}if(this.prevState==="zip"&&t.state!=="zip"){for(let i of this.zipLines)this.webs.release(i,t.vel);this.zipLines=[]}this.prevState=t.state;for(let i of this.traffic.events)i.type==="honk"&&this.sound.play("honk",i);this.traffic.events.length=0;for(let i of this.ambient.events)i.type==="birds"&&this.sound.play("birds");this.ambient.events.length=0}updateWebStarts(){let t=this.player,e=(i,n)=>this.cam.handWorld(i,n);if(this.ropeLine&&!t.rope.active&&(this.webs.release(this.ropeLine,t.vel),this.ropeLine=null),this.ropeLine&&t.rope.active){e(this.ropeLine.side,this.ropeLine.start),this.ropeLine.anchor.copy(t.rope.visual);let i=Math.max(0,t.rope.length-t.pos.distanceTo(t.rope.anchor));this.ropeLine.restLen=this.ropeLine.start.distanceTo(t.rope.visual)+i}for(let i of this.zipLines)(i.state==="shoot"||i.state==="taut")&&(e(i.side,i.start),i.restLen=0)}loop(t){requestAnimationFrame(u=>this.loop(u));let e=(t-this.last)/1e3;this.last=t;let i=Dt(e,.001,.05);this.input.poll();let n=this.input,s=this.state==="play";if(s){this.time+=i,n.pausePressed&&this.openMenu("pause"),n.mapPressed&&this.openMenu("map"),n.actionPressed&&(this.jobs.canStart()?this.jobs.start():this.races.canStart()&&this.races.begin()),n.throwPressed&&this.jobs.throwPaper(),this.player.update(i,n,this.cam),this.handleEvents(),this.traffic.update(i,this.player),this.peds.update(i,this.player),this.ambient.update(i,this.player);let u=this.balloons.update(i,this.player);if(u){this.fx.pop(u.x,u.y,u.z),this.sound.play("pop"),this.money+=10;let h=this.balloons.count;this.hud.toast(`\u{1F388} Balloon ${h}/${this.balloons.total}! +$10`,"good"),h===this.balloons.total&&(this.money+=500,this.hud.toast("\u{1F3C6} ALL BALLOONS FOUND! +$500","good")),this.persist()}this.jobs.update(i,this.player),this.races.update(i,this.player),this.sky.update(i,this.cam.camera.position),this.cam.update(i,this.player,n,this.world),this.save.tips<ru.length&&(this.tipTimer-=i,this.tipTimer<0&&(this.hud.toast("\u{1F4A1} "+ru[this.save.tips],"job"),this.save.tips++,this.tipTimer=11,this.persist())),this.saveTimer+=i,this.saveTimer>15&&(this.saveTimer=0,this.persist())}else if(this.state==="menu")this.sound.setMusicIntensity(.12,Zt.uNight.value),this.sound.scheduleMusic(i);else if(this.state==="title"){this.time+=i,this.sky.update(i*.5,this.cam.camera.position),this.traffic.update(i,this.player),this.peds.update(i,this.player),this.ambient.update(i,this.player),this.player.update(i,Dv,this.cam),this.player.events.length=0;let u=this.showcaseHero(),h=this.time,d=this.cam.camera,p=u.facing+Math.sin(h*.16)*1,x=2.35+Math.sin(h*.11)*.45,m=u.body.root.position;d.position.set(m.x+Math.sin(p)*x,m.y+.15+Math.sin(h*.13)*.25,m.z+Math.cos(p)*x);let g=m.x-d.position.x,y=m.z-d.position.z,S=Math.hypot(g,y)||1,_=Math.min(1,.45*d.aspect);d.lookAt(m.x-y/S*_,m.y+.42,m.z+g/S*_),d.fov!==48&&(d.fov=48,d.updateProjectionMatrix()),this.cam.vm.visible=!1,this.cam.legs.root.visible=!1,d.updateMatrixWorld();let M=u.body;M.pose($h.stand),M.pose({spine:[.03+Math.sin(h*1.6)*.015],neck:[.05,Math.sin(h*.35)*.5,0],head:[Math.sin(h*.5)*.08,Math.sin(h*.35)*.25,0],shL:[.05,0,.1+Math.sin(h*1.6)*.015],shR:[-.25,0,-.18],elR:[-.9],wrR:[0,0,.3]}),M.curl=.55,M.apply(i,4)}if(Zt.uTime.value=this.time,this.hero.setVisible(!1),this.shadows.update(this.scene,this.state==="title"?this.cam.camera.position:this.player.pos,Zt.uSunDir.value,Zt.uNight.value),this.state!=="title"){let u=Zt.uSunDir.value,h=this.cam.camera.position,f=Zt.uNight.value<.9&&this.world.raycast(h.x,h.y,h.z,u.x,u.y,u.z,400,this.sunHit||(this.sunHit={}))?.12:1;this.armSun=(this.armSun??1)+(f-(this.armSun??1))*Math.min(1,i*6)}let a=Zt.uNight.value;this.sky.sun.intensity=(this.state==="title"?1:this.armSun??1)*3*(1-a*.55),this.sky.hemi.intensity=1.1,this.scene.environmentIntensity=1-a*.75,this.armFill.intensity=.25+a*.35,this.hero.mats.accent.emissive.copy(this.hero.mats.accent.color),this.hero.mats.accent.emissiveIntensity=.08+Zt.uNight.value*.55,this.hero.update(i,this.player,this.world),this.updateWebStarts(),this.webs.update(i,this.cam.camera.position);let o=this.player.speed,l=s?Dt((o-26)/34,0,1):0;if(this.fx.update(i,l*(this.quality.post?.45:1),this.cam.camera.aspect,Zt.uNight.value)&&s&&this.sound.play("boom",{x:1200,z:0}),s){let u=this.cam.camera.position;this.sound.listener.x=u.x,this.sound.listener.z=u.z,this.sound.listener.rx=Math.cos(this.cam.yaw),this.sound.listener.rz=-Math.sin(this.cam.yaw);let h=this.player.state,d=h==="ground"?o>2?.28:.16:h==="swing"||h==="zip"?.45+Math.min(1,o/45)*.55:h==="wall"?.5:.35+Math.min(1,o/50)*.5;(this.races.active||this.jobs.active)&&(d=Math.max(d,.4)+.15),this.sound.setMusicIntensity(Math.min(1,d),Zt.uNight.value),this.sound.update(i,o,this.player.pos.y,this.player.state),this.hud.update(i,this)}this.post.render(this.scene,this.cam.camera,{speed:l,time:this.time,night:Zt.uNight.value}),this.trackPerf(e)}trackPerf(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc>2){let e=this.frameAcc/this.frameN;this.save.settings.fps&&(ue("fps").textContent=`${Math.round(1/e)} fps \xB7 ${this.renderer.getPixelRatio().toFixed(2)}x`),e>.026&&this.dynScale>.55?(this.dynScale=Math.max(.55,this.dynScale-.1),this.onResize()):e>.04&&this.dynScale<=.55&&this.state==="play"&&this.save.settings.quality!=="low"&&!this.autoLowered?(this.autoLowered=!0,this.save.settings.quality="low",this.applySettings(),this.persist(),this.hud.toast("Graphics set to Low for smoother play (change in Settings)","warn")):e<.0165&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale+.05),this.onResize()),this.frameAcc=0,this.frameN=0}}};function zv(){try{window.game=new au}catch(r){console.error(r);let t=document.getElementById("loading");t&&(t.textContent="Could not start: "+r.message+" (WebGL required)")}}requestAnimationFrame(()=>setTimeout(zv,30));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

(()=>{var yd=Object.defineProperty;var vd=(r,t,e)=>t in r?yd(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Jc=(r,t,e)=>vd(r,typeof t!="symbol"?t+"":t,e);var Ah=0,zl=1,Rh=2;var ur=1,Ch=2,ys=3,Yi=0,qe=1,Le=2,zn=0,vs=1,un=2,Ol=3,Bl=4,Ph=5;var On=100,Ih=101,Lh=102,Nh=103,Dh=104,Uh=200,Fh=201,zh=202,Oh=203,kl=204,Hl=205,Bh=206,kh=207,Hh=208,Gh=209,Vh=210,Wh=211,Xh=212,qh=213,Yh=214,na=0,sa=1,ra=2,hs=3,aa=4,oa=5,la=6,ca=7,Fa=0,Zh=1,$h=2,Zi=0,Gl=1,Vl=2,Wl=3,Xl=4,ql=5,Yl=6,Zl=7;var $l=300,Bn=301,Ms=302,za=303,Oa=304,ha=1e3,Hi=1001,ua=1002,Re=1003,Jh=1004;var dr=1005;var si=1006,Ba=1007;var dn=1008;var di=1009,Jl=1010,Kl=1011,Ss=1012,ka=1013,Di=1014,Ti=1015,Ui=1016,Ha=1017,Ga=1018,kn=1020,jl=35902,Ql=35899,tc=1021,ec=1022,yi=1023,on=1026,fn=1027,Va=1028,Wa=1029,Tn=1030,Xa=1031;var qa=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ya=35840,Za=35841,$a=35842,Ja=35843,Ka=36196,ja=37492,Qa=37496,to=37488,eo=37489,xr=37490,io=37491,no=37808,so=37809,ro=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,xo=37821,_o=36492,yo=36494,vo=36495,Mo=36283,So=36284,_r=36285,bo=36286;var ks=2300,da=2301,ea=2302,Cl=2303,Pl=2400,Il=2401,Ll=2402;var Kh=3200;var Eo=0,jh=1,pn="",gi="srgb",Dn="srgb-linear",Hs="linear",se="srgb";var ia=7680;var Qh=519,tu=512,eu=513,iu=514,ic=515,nu=516,su=517,nc=518,sc=519,rc=35044,Fi=35048;var ac="300 es",wi=2e3,us=2001;function Md(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ru(){let r=Gs("canvas");return r.style.display="block",r}var Kc={},ds=null;function Vs(...r){let t="THREE."+r.shift();ds?ds("log",t,...r):console.log(t,...r)}function au(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Dt(...r){r=au(r);let t="THREE."+r.shift();if(ds)ds("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Ot(...r){r=au(r);let t="THREE."+r.shift();if(ds)ds("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Bs(...r){let t=r.join(" ");t in Kc||(Kc[t]=!0,Dt(...r))}function ou(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var lu={[na]:na,[ra]:la,[aa]:aa,[hs]:oa,[sa]:sa,[la]:ra,[ca]:ca,[oa]:hs},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var al=Math.PI/180,fa=180/Math.PI;function Hn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[r&255]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function jt(r,t,e){return Math.max(t,Math.min(e,r))}function bd(r,t){return(r%t+t)%t}function ol(r,t,e){return(1-e)*r+e*t}function cu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wo(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hu(r,t){if(t.constructor===Float32Array)return r;let e=wo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function uu(r,t){if(t.constructor===Float32Array)return r;let e=wo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var uc=class uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;var Bt=uc,Qt=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],d=s[a+0],f=s[a+1],p=s[a+2],y=s[a+3];if(h!==y||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*y;g<0&&(d=-d,f=-f,p=-p,y=-y,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),T=Math.sin(_);m=Math.sin(m*_)/T,o=Math.sin(o*_)/T,l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+y*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+p*o,h=h*m+y*o;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return t[e]=o*p+u*h+l*f-c*d,t[e+1]=l*p+u*d+c*h-o*f,t[e+2]=c*p+u*f+o*d-l*h,t[e+3]=u*p-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+n*c-s*l,this._y=n*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dc=class dc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),u=2*(o*e-s*n),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=n+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dc.prototype.isVector3=!0;var C=dc,ll=new C,jc=new Qt,fc=class fc{constructor(t,e,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],y=n[0],g=n[3],m=n[6],_=n[1],T=n[4],M=n[7],v=n[2],E=n[5],x=n[8];return s[0]=a*y+o*_+l*v,s[3]=a*g+o*T+l*E,s[6]=a*m+o*M+l*x,s[1]=c*y+u*_+h*v,s[4]=c*g+u*T+h*E,s[7]=c*m+u*M+h*x,s[2]=d*y+f*_+p*v,s[5]=d*g+f*T+p*E,s[8]=d*m+f*M+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,p=e*h+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=h*y,t[1]=(n*c-u*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(u*e-n*l)*y,t[5]=(n*s-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(t,e)),this}rotate(t){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fc.prototype.isMatrix3=!0;var kt=fc,cl=new kt,Qc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){let r={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(n.r=an(n.r),n.g=an(n.g),n.b=an(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pn?Hs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Dn]:{primaries:t,whitePoint:i,transfer:Hs,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:i,transfer:se,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}var qt=Ed();function an(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Xn,pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xn===void 0&&(Xn=Gs("canvas")),Xn.width=t.width,Xn.height=t.height;let n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Xn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=an(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(an(e[i]/255)*255):e[i]=an(e[i]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wd=0,fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(hl(n[a].image)):s.push(hl(n[a]))}else s=hl(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var Td=0,ul=new C,ri=class r extends Gi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Hi,n=Hi,s=si,a=dn,o=yi,l=di,c=r.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Hn(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=$l;ri.DEFAULT_ANISOTROPY=1;var pc=class pc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(f+1)/2,v=(m+1)/2,E=(u+d)/4,x=(h+y)/4,S=(p+g)/4;return T>M&&T>v?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=E/i,s=x/i):M>v?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=E/n,s=S/n):v<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(v),i=x/s,n=S/s),this.set(i,n,s,e),this}let _=Math.sqrt((g-p)*(g-p)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-y)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pc.prototype.isVector4=!0;var xe=pc,ma=class extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new ri({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new fs(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends ma{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ws=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Re,this.minFilter=Re,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Re,this.minFilter=Re,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ua=class Ua{constructor(t,e,i,n,s,a,o,l,c,u,h,d,f,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,u,h,d,f,p,y,g)}set(t,e,i,n,s,a,o,l,c,u,h,d,f,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ua().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/qn.setFromMatrixColumn(t,0).length(),s=1/qn.setFromMatrixColumn(t,1).length(),a=1/qn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=a*u,f=a*h,p=o*u,y=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,p=c*u,y=c*h;e[0]=d+y*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-p,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,p=c*u,y=c*h;e[0]=d-y*o,e[4]=-a*h,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*u,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,p=o*u,y=o*h;e[0]=l*u,e[4]=p*c-f,e[8]=d*c+y,e[1]=l*h,e[5]=y*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*u,e[4]=y-d*h,e[8]=p*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+p,e[10]=d-y*h}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,y=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+y,e[5]=a*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=o*u,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Rd)}lookAt(t,e,i){let n=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),xn.crossVectors(i,pi),xn.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),xn.crossVectors(i,pi)),xn.normalize(),Cr.crossVectors(pi,xn),n[0]=xn.x,n[4]=Cr.x,n[8]=pi.x,n[1]=xn.y,n[5]=Cr.y,n[9]=pi.y,n[2]=xn.z,n[6]=Cr.z,n[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],y=i[6],g=i[10],m=i[14],_=i[3],T=i[7],M=i[11],v=i[15],E=n[0],x=n[4],S=n[8],P=n[12],R=n[1],N=n[5],U=n[9],z=n[13],I=n[2],H=n[6],G=n[10],V=n[14],tt=n[3],W=n[7],K=n[11],Q=n[15];return s[0]=a*E+o*R+l*I+c*tt,s[4]=a*x+o*N+l*H+c*W,s[8]=a*S+o*U+l*G+c*K,s[12]=a*P+o*z+l*V+c*Q,s[1]=u*E+h*R+d*I+f*tt,s[5]=u*x+h*N+d*H+f*W,s[9]=u*S+h*U+d*G+f*K,s[13]=u*P+h*z+d*V+f*Q,s[2]=p*E+y*R+g*I+m*tt,s[6]=p*x+y*N+g*H+m*W,s[10]=p*S+y*U+g*G+m*K,s[14]=p*P+y*z+g*V+m*Q,s[3]=_*E+T*R+M*I+v*tt,s[7]=_*x+T*N+M*H+v*W,s[11]=_*S+T*U+M*G+v*K,s[15]=_*P+T*z+M*V+v*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],y=t[7],g=t[11],m=t[15],_=l*f-c*d,T=o*f-c*h,M=o*d-l*h,v=a*f-c*u,E=a*d-l*u,x=a*h-o*u;return e*(y*_-g*T+m*M)-i*(p*_-g*v+m*E)+n*(p*T-y*v+m*x)-s*(p*M-y*E+g*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(s*u-o*l)+n*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],y=t[13],g=t[14],m=t[15],_=e*o-i*a,T=e*l-n*a,M=e*c-s*a,v=i*l-n*o,E=i*c-s*o,x=n*c-s*l,S=u*y-h*p,P=u*g-d*p,R=u*m-f*p,N=h*g-d*y,U=h*m-f*y,z=d*m-f*g,I=_*z-T*U+M*N+v*R-E*P+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(o*z-l*U+c*N)*H,t[1]=(n*U-i*z-s*N)*H,t[2]=(y*x-g*E+m*v)*H,t[3]=(d*E-h*x-f*v)*H,t[4]=(l*R-a*z-c*P)*H,t[5]=(e*z-n*R+s*P)*H,t[6]=(g*M-p*x-m*T)*H,t[7]=(u*x-d*M+f*T)*H,t[8]=(a*U-o*R+c*S)*H,t[9]=(i*R-e*U-s*S)*H,t[10]=(p*E-y*M+m*_)*H,t[11]=(h*M-u*E-f*_)*H,t[12]=(o*P-a*N-l*S)*H,t[13]=(e*N-i*P+n*S)*H,t[14]=(y*T-p*v-g*_)*H,t[15]=(u*v-h*T+d*_)*H,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,p=s*h,y=a*u,g=a*h,m=o*h,_=l*c,T=l*u,M=l*h,v=i.x,E=i.y,x=i.z;return n[0]=(1-(y+m))*v,n[1]=(f+M)*v,n[2]=(p-T)*v,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(d+m))*E,n[6]=(g+_)*E,n[7]=0,n[8]=(p+T)*x,n[9]=(g-_)*x,n[10]=(1-(d+y))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=qn.set(n[0],n[1],n[2]).length(),o=qn.set(n[4],n[5],n[6]).length(),l=qn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Pi.copy(this);let c=1/a,u=1/o,h=1/l;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=u,Pi.elements[5]*=u,Pi.elements[6]*=u,Pi.elements[8]*=h,Pi.elements[9]*=h,Pi.elements[10]*=h,e.setFromRotationMatrix(Pi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,s,a,o=wi,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,y;if(l)p=s/(a-s),y=a*s/(a-s);else if(o===wi)p=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===us)p=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=wi,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,y;if(l)p=1/(a-s),y=a/(a-s);else if(o===wi)p=-2/(a-s),y=-(a+s)/(a-s);else if(o===us)p=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ua.prototype.isMatrix4=!0;var Ut=Ua,qn=new C,Pi=new Ut,Ad=new C(0,0,0),Rd=new C(1,1,1),xn=new C,Cr=new C,pi=new C,eh=new Ut,ih=new Qt,ai=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cd=0,nh=new C,Yn=new Qt,Qi=new Ut,Pr=new C,Ps=new C,Pd=new C,Id=new Qt,sh=new C(1,0,0),rh=new C(0,1,0),ah=new C(0,0,1),oh={type:"added"},Ld={type:"removed"},Zn={type:"childadded",child:null},dl={type:"childremoved",child:null},_e=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new C,e=new ai,i=new Qt,n=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ut},normalMatrix:{value:new kt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Pr.copy(t):Pr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ps,Pr,this.up):Qi.lookAt(Pr,Ps,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),Yn.setFromRotationMatrix(Qi),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_e.DEFAULT_UP=new C(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nd={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function fl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=bd(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=fl(a,s,t+1/3),this.g=fl(a,s,t),this.b=fl(a,s,t-1/3)}return qt.colorSpaceToWorking(this,n),this}setStyle(t,e=gi){function i(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gi){let i=du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return qt.workingToColorSpace(je.copy(this),t),Math.round(jt(je.r*255,0,255))*65536+Math.round(jt(je.g*255,0,255))*256+Math.round(jt(je.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(je.copy(this),e);let i=je.r,n=je.g,s=je.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=gi){qt.workingToColorSpace(je.copy(this),t);let e=je.r,i=je.g,n=je.b;return t!==gi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(Ir);let i=ol(_n.h,Ir.h,e),n=ol(_n.s,Ir.s,e),s=ol(_n.l,Ir.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Et;Et.NAMES=du;var qs=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ys=class extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ii=new C,tn=new C,pl=new C,en=new C,$n=new C,Jn=new C,lh=new C,ml=new C,gl=new C,xl=new C,_l=new xe,yl=new xe,vl=new xe,rn=class r{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ii.subVectors(t,e),n.cross(Ii);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ii.subVectors(n,e),tn.subVectors(i,e),pl.subVectors(t,e);let a=Ii.dot(Ii),o=Ii.dot(tn),l=Ii.dot(pl),c=tn.dot(tn),u=tn.dot(pl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return _l.setScalar(0),yl.setScalar(0),vl.setScalar(0),_l.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),vl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(_l,s.x),a.addScaledVector(yl,s.y),a.addScaledVector(vl,s.z),a}static isFrontFacing(t,e,i,n){return Ii.subVectors(i,e),tn.subVectors(t,e),Ii.cross(tn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ii.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;$n.subVectors(n,i),Jn.subVectors(s,i),ml.subVectors(t,i);let l=$n.dot(ml),c=Jn.dot(ml);if(l<=0&&c<=0)return e.copy(i);gl.subVectors(t,n);let u=$n.dot(gl),h=Jn.dot(gl);if(u>=0&&h<=u)return e.copy(n);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(i).addScaledVector($n,a);xl.subVectors(t,s);let f=$n.dot(xl),p=Jn.dot(xl);if(p>=0&&f<=p)return e.copy(s);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Jn,o);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return lh.subVectors(s,n),o=(h-u)/(h-u+(f-p)),e.copy(n).addScaledVector(lh,o);let m=1/(g+y+d);return a=y*m,o=d*m,e.copy(i).addScaledVector($n,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Li):Li.fromBufferAttribute(s,a),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Nr.subVectors(this.max,Is),Kn.subVectors(t.a,Is),jn.subVectors(t.b,Is),Qn.subVectors(t.c,Is),yn.subVectors(jn,Kn),vn.subVectors(Qn,jn),Pn.subVectors(Kn,Qn);let e=[0,-yn.z,yn.y,0,-vn.z,vn.y,0,-Pn.z,Pn.y,yn.z,0,-yn.x,vn.z,0,-vn.x,Pn.z,0,-Pn.x,-yn.y,yn.x,0,-vn.y,vn.x,0,-Pn.y,Pn.x,0];return!Ml(e,Kn,jn,Qn,Nr)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,Kn,jn,Qn,Nr))?!1:(Dr.crossVectors(yn,vn),e=[Dr.x,Dr.y,Dr.z],Ml(e,Kn,jn,Qn,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nn=[new C,new C,new C,new C,new C,new C,new C,new C],Li=new C,Lr=new Vi,Kn=new C,jn=new C,Qn=new C,yn=new C,vn=new C,Pn=new C,Is=new C,Nr=new C,Dr=new C,In=new C;function Ml(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){In.fromArray(r,s);let o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),u=i.dot(In);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ie=new C,Ur=new Bt,Dd=0,Qe=class extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=t!==void 0?wo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):uu(t,this.array)}};var Zs=class extends Qe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var $s=class extends Qe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends Qe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ud=new Vi,Ls=new C,Sl=new C,ln=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ud.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Sl)),this.expandByPoint(Ls.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fd=0,Ei=new Ut,bl=new _e,ts=new C,mi=new Vi,Ns=new Vi,Ge=new C,we=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?$s:Zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,i){return Ei.makeTranslation(t,e,i),this.applyMatrix4(Ei),this}scale(t,e,i){return Ei.makeScale(t,e,i),this.applyMatrix4(Ei),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(mi.min,Ns.min),mi.expandByPoint(Ge),Ge.addVectors(mi.max,Ns.max),mi.expandByPoint(Ge)):(mi.expandByPoint(Ns.min),mi.expandByPoint(Ns.max))}mi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ge.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ge));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ge.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(t,c),Ge.add(ts)),n=Math.max(n,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Qe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new C,l[P]=new C;let u=new C,h=new C,d=new C,f=new Bt,p=new Bt,y=new Bt,g=new C,m=new C;function _(P,R,N){c[P]=c[R]=c[N]=1,u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,R),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,R),y.fromBufferAttribute(s,N),h.sub(u),d.sub(u),p.sub(f),y.sub(f);let U=1/(p.x*y.y-y.x*p.y);isFinite(U)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(U),o[P].add(g),o[R].add(g),o[N].add(g),l[P].add(m),l[R].add(m),l[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,R=T.length;P<R;++P){let N=T[P],U=N.start,z=N.count;for(let I=U,H=U+z;I<H;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let M=new C,v=new C,E=new C,x=new C;function S(P){E.fromBufferAttribute(n,P),x.copy(E);let R=o[P];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),v.crossVectors(x,R);let U=v.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,U)}for(let P=0,R=i.count;P<R;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(n,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new Qe(d,u,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(n[l]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ch(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ch(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function ch(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Hn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var ii=new C,Js=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?wo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyMatrix4(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.applyNormalMatrix(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ii.fromBufferAttribute(this,e),ii.transformDirection(t),this.setXYZ(e,ii.x,ii.y,ii.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Vs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):uu(t,this.data.array)}},El=new C,zd=new C,Od=new kt,Ni=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=El.subVectors(i,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Od.getNormalMatrix(t),n=this.coplanarPoint(El).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bd=0,Wi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=vs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ni().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Bt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ms=class extends Wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Ds=new C,is=new C,ns=new C,ss=new Bt,Us=new Bt,fu=new Ut,Fr=new C,Fs=new C,zr=new C,hh=new Bt,wl=new Bt,uh=new Bt,Ks=class extends _e{constructor(t=new ms){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xa(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Js(i,3,0,!1)),es.setAttribute("uv",new Js(i,2,3,!1))}this.geometry=es,this.material=t,this.center=new Bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ns.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Or(Fr.set(-.5,-.5,0),ns,a,is,n,s),Or(Fs.set(.5,-.5,0),ns,a,is,n,s),Or(zr.set(.5,.5,0),ns,a,is,n,s),hh.set(0,0),wl.set(1,0),uh.set(1,1);let o=t.ray.intersectTriangle(Fr,Fs,zr,!1,Ds);if(o===null&&(Or(Fs.set(-.5,.5,0),ns,a,is,n,s),wl.set(0,1),o=t.ray.intersectTriangle(Fr,zr,Fs,!1,Ds),o===null))return;let l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:rn.getInterpolation(Ds,Fr,Fs,zr,hh,wl,uh,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Or(r,t,e,i,n,s){ss.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Us.x=s*ss.x-n*ss.y,Us.y=n*ss.x+s*ss.y):Us.copy(ss),r.copy(t),r.x+=Us.x,r.y+=Us.y,r.applyMatrix4(fu)}var sn=new C,Tl=new C,Br=new C,kr=new C,js=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Tl.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),kr.copy(this.origin).sub(Tl);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Br),o=kr.dot(this.direction),l=-kr.dot(Br),c=kr.lengthSq(),u=Math.abs(1-a*a),h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=s*u,h>=0)if(d>=-p)if(d<=p){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Tl).addScaledVector(Br,d),f}intersectSphere(t,e){if(t.radius<0)return null;sn.subVectors(t.center,this.origin);let i=sn.dot(this.direction),n=sn.dot(sn)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,y=e.y-a.y,g=e.z-a.z,m=i.x-a.x,_=i.y-a.y,T=i.z-a.z,M=Math.abs(l),v=Math.abs(c),E=Math.abs(u),x,S,P,R,N,U,z,I,H,G,V,tt;if(M>=v&&M>=E?(P=l,U=h,H=p,tt=m,l>=0?(x=c,S=u,R=d,N=f,z=y,I=g,G=_,V=T):(x=u,S=c,R=f,N=d,z=g,I=y,G=T,V=_)):v>=E?(P=c,U=d,H=y,tt=_,c>=0?(x=u,S=l,R=f,N=h,z=g,I=p,G=T,V=m):(x=l,S=u,R=h,N=f,z=p,I=g,G=m,V=T)):(P=u,U=f,H=g,tt=T,u>=0?(x=l,S=c,R=h,N=d,z=p,I=y,G=m,V=_):(x=c,S=l,R=d,N=h,z=y,I=p,G=_,V=m)),P===0)return null;let W=x/P,K=S/P,Q=1/P,vt=R-W*U,Ft=N-K*U,Y=z-W*H,dt=I-K*H,yt=G-W*tt,Rt=V-K*tt,ft=yt*dt-Rt*Y,zt=vt*Rt-Ft*yt,ye=Y*Ft-dt*vt;if(n){if(ft<0||zt<0||ye<0)return null}else if((ft<0||zt<0||ye<0)&&(ft>0||zt>0||ye>0))return null;let It=ft+zt+ye;if(It===0)return null;let ae=Q*(ft*U+zt*H+ye*tt);return(It>0?ae<0:ae>0)?null:this.at(ae/It,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dh=new Ut,Ln=new js,Hr=new ln,fh=new C,Gr=new C,Vr=new C,Wr=new C,Al=new C,Xr=new C,ph=new C,qr=new C,Tt=class extends _e{constructor(t=new we,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],h=s[l];u!==0&&(Al.fromBufferAttribute(h,t),a?Xr.addScaledVector(Al,u):Xr.addScaledVector(Al.sub(e),u))}e.add(Xr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),Ln.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Hr,fh)===null||Ln.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(s).invert(),Ln.copy(t.ray).applyMatrix4(dh),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=_,v=T;M<v;M+=3){let E=o.getX(M),x=o.getX(M+1),S=o.getX(M+2);n=Yr(this,m,t,i,c,u,h,E,x,S),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let _=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);n=Yr(this,a,t,i,c,u,h,_,T,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=_,v=T;M<v;M+=3){let E=M,x=M+1,S=M+2;n=Yr(this,m,t,i,c,u,h,E,x,S),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let _=g,T=g+1,M=g+2;n=Yr(this,a,t,i,c,u,h,_,T,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function kd(r,t,e,i,n,s,a,o){let l;if(t.side===qe?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Yi,o),l===null)return null;qr.copy(o),qr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:r}}function Yr(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,Gr),r.getVertexPosition(l,Vr),r.getVertexPosition(c,Wr);let u=kd(r,t,e,i,Gr,Vr,Wr,ph);if(u){let h=new C;rn.getBarycoord(ph,Gr,Vr,Wr,h),n&&(u.uv=rn.getInterpolatedAttribute(n,o,l,c,h,new Bt)),s&&(u.uv1=rn.getInterpolatedAttribute(s,o,l,c,h,new Bt)),a&&(u.normal=rn.getInterpolatedAttribute(a,o,l,c,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};rn.getNormal(Gr,Vr,Wr,d.normal),u.face=d,u.barycoord=h}return u}var Un=class extends ri{constructor(t=null,e=1,i=1,n,s,a,o,l,c=Re,u=Re,h,d){super(null,a,o,l,c,u,n,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class extends Qe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rs=new Ut,mh=new Ut,Zr=[],gh=new Vi,Hd=new Ut,zs=new Tt,Os=new ln,cn=class extends Tt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Hd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rs),gh.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,rs),Os.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),t.ray.intersectsSphere(Os)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,rs),mh.multiplyMatrices(i,rs),zs.matrixWorld=mh,zs.raycast(t,Zr);for(let a=0,o=Zr.length;a<o;a++){let l=Zr[a];l.instanceId=s,l.object=this,e.push(l)}Zr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Un(new Float32Array(n*this.count),n,this.count,Va,Ti));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nn=new ln,Gd=new Bt(.5,.5),$r=new C,Sn=class{constructor(t=new Ni,e=new Ni,i=new Ni,n=new Ni,s=new Ni,a=new Ni){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],y=s[9],g=s[10],m=s[11],_=s[12],T=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-a,f-u,m-p,v-_).normalize(),n[1].setComponents(c+a,f+u,m+p,v+_).normalize(),n[2].setComponents(c+o,f+h,m+y,v+T).normalize(),n[3].setComponents(c-o,f-h,m-y,v-T).normalize(),i)n[4].setComponents(l,d,g,M).normalize(),n[5].setComponents(c-l,f-d,m-g,v-M).normalize();else if(n[4].setComponents(c-l,f-d,m-g,v-M).normalize(),e===wi)n[5].setComponents(c+l,f+d,m+g,v+M).normalize();else if(e===us)n[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){Nn.center.set(0,0,0);let e=Gd.distanceTo(t.center);return Nn.radius=.7071067811865476+e,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if($r.x=n.normal.x>0?t.max.x:t.min.x,$r.y=n.normal.y>0?t.max.y:t.min.y,$r.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xh=new Ut,_a=class r{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];xh.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Sn),i[n].setFromProjectionMatrix(xh,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Sn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var ya=class extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_h=new Ut,Nl=new js,Jr=new ln,Kr=new C,Qs=class extends _e{constructor(t=new we,e=new ya){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(n),Jr.radius+=s,t.ray.intersectsSphere(Jr)===!1)return;_h.copy(n).invert(),Nl.copy(t.ray).applyMatrix4(_h);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,y=f;p<y;p++){let g=c.getX(p);Kr.fromBufferAttribute(h,g),yh(Kr,g,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,y=f;p<y;p++)Kr.fromBufferAttribute(h,p),yh(Kr,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function yh(r,t,e,i,n,s,a){let o=Nl.distanceSqToPoint(r);if(o<e){let l=new C;Nl.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var tr=class extends ri{constructor(t=[],e=Bn,i,n,s,a,o,l,c,u){super(t,e,i,n,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xi=class extends ri{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hn=class extends ri{constructor(t,e,i=Di,n,s,a,o=Re,l=Re,c,u=on,h=1){if(u!==on&&u!==fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,n,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},er=class extends hn{constructor(t,e=Di,i=Bn,n,s,a=Re,o=Re,l,c=on){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,n,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ir=class extends ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Lt=class r extends we{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function p(y,g,m,_,T,M,v,E,x,S,P){let R=M/x,N=v/S,U=M/2,z=v/2,I=E/2,H=x+1,G=S+1,V=0,tt=0,W=new C;for(let K=0;K<G;K++){let Q=K*N-z;for(let vt=0;vt<H;vt++){let Ft=vt*R-U;W[y]=Ft*_,W[g]=Q*T,W[m]=I,c.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[m]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(vt/x),h.push(1-K/S),V+=1}}for(let K=0;K<S;K++)for(let Q=0;Q<x;Q++){let vt=d+Q+H*K,Ft=d+Q+H*(K+1),Y=d+(Q+1)+H*(K+1),dt=d+(Q+1)+H*K;l.push(vt,Ft,dt),l.push(Ft,Y,dt),tt+=6}o.addGroup(f,tt,P),f+=tt,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fn=class r extends we{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,p=i*2+s,y=n+1,g=new C,m=new C;for(let _=0;_<=p;_++){let T=0,M=0,v=0,E=0;if(_<=i){let P=_/i,R=P*Math.PI/2;M=-u-t*Math.cos(R),v=t*Math.sin(R),E=-t*Math.cos(R),T=P*h}else if(_<=i+s){let P=(_-i)/s;M=-u+P*e,v=t,E=0,T=h+P*d}else{let P=(_-i-s)/i,R=P*Math.PI/2;M=u+t*Math.sin(R),v=t*Math.cos(R),E=t*Math.sin(R),T=h+d+P*h}let x=Math.max(0,Math.min(1,T/f)),S=0;_===0?S=.5/n:_===p&&(S=-.5/n);for(let P=0;P<=n;P++){let R=P/n,N=R*Math.PI*2,U=Math.sin(N),z=Math.cos(N);m.x=-v*z,m.y=M,m.z=v*U,o.push(m.x,m.y,m.z),g.set(-v*z,E,v*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+S,x)}if(_>0){let P=(_-1)*y;for(let R=0;R<n;R++){let N=P+R,U=P+R+1,z=_*y+R,I=_*y+R+1;a.push(N,U,z),a.push(U,I,z)}}}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var le=class r extends we{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let u=[],h=[],d=[],f=[],p=0,y=[],g=i/2,m=0;_(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function _(){let M=new C,v=new C,E=0,x=(e-t)/i;for(let S=0;S<=s;S++){let P=[],R=S/s,N=R*(e-t)+t;for(let U=0;U<=n;U++){let z=U/n,I=z*l+o,H=Math.sin(I),G=Math.cos(I);v.x=N*H,v.y=-R*i+g,v.z=N*G,h.push(v.x,v.y,v.z),M.set(H,x,G).normalize(),d.push(M.x,M.y,M.z),f.push(z,1-R),P.push(p++)}y.push(P)}for(let S=0;S<n;S++)for(let P=0;P<s;P++){let R=y[P][S],N=y[P+1][S],U=y[P+1][S+1],z=y[P][S+1];(t>0||P!==0)&&(u.push(R,N,z),E+=3),(e>0||P!==s-1)&&(u.push(N,U,z),E+=3)}c.addGroup(m,E,0),m+=E}function T(M){let v=p,E=new Bt,x=new C,S=0,P=M===!0?t:e,R=M===!0?1:-1;for(let U=1;U<=n;U++)h.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let N=p;for(let U=0;U<=n;U++){let I=U/n*l+o,H=Math.cos(I),G=Math.sin(I);x.x=P*G,x.y=g*R,x.z=P*H,h.push(x.x,x.y,x.z),d.push(0,R,0),E.x=H*.5+.5,E.y=G*.5*R+.5,f.push(E.x,E.y),p++}for(let U=0;U<n;U++){let z=v+U,I=N+U;M===!0?u.push(I,I+1,z):u.push(I+1,I,z),S+=3}c.addGroup(m,S,M===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qi=class r extends le{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nr=class r extends we{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),u(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let T=new C,M=new C,v=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],M),f(e[E+2],v),l(T,M,v,_)}function l(_,T,M,v){let E=v+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let P=_.clone().lerp(M,S/E),R=T.clone().lerp(M,S/E),N=E-S;for(let U=0;U<=N;U++)U===0&&S===E?x[S][U]=P:x[S][U]=P.clone().lerp(R,U/N)}for(let S=0;S<E;S++)for(let P=0;P<2*(E-S)-1;P++){let R=Math.floor(P/2);P%2===0?(d(x[S][R+1]),d(x[S+1][R]),d(x[S][R])):(d(x[S][R+1]),d(x[S+1][R+1]),d(x[S+1][R]))}}function c(_){let T=new C;for(let M=0;M<s.length;M+=3)T.x=s[M+0],T.y=s[M+1],T.z=s[M+2],T.normalize().multiplyScalar(_),s[M+0]=T.x,s[M+1]=T.y,s[M+2]=T.z}function u(){let _=new C;for(let T=0;T<s.length;T+=3){_.x=s[T+0],_.y=s[T+1],_.z=s[T+2];let M=g(_)/2/Math.PI+.5,v=m(_)/Math.PI+.5;a.push(M,1-v)}p(),h()}function h(){for(let _=0;_<a.length;_+=6){let T=a[_+0],M=a[_+2],v=a[_+4],E=Math.max(T,M,v),x=Math.min(T,M,v);E>.9&&x<.1&&(T<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),v<.2&&(a[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,T){let M=_*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function p(){let _=new C,T=new C,M=new C,v=new C,E=new Bt,x=new Bt,S=new Bt;for(let P=0,R=0;P<s.length;P+=9,R+=6){_.set(s[P+0],s[P+1],s[P+2]),T.set(s[P+3],s[P+4],s[P+5]),M.set(s[P+6],s[P+7],s[P+8]),E.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),v.copy(_).add(T).add(M).divideScalar(3);let N=g(v);y(E,R+0,_,N),y(x,R+2,T,N),y(S,R+4,M,N)}}function y(_,T,M,v){v<0&&_.x===1&&(a[T]=_.x-1),M.x===0&&M.z===0&&(a[T]=v/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var gs=class r extends nr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var sr=class r extends nr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},ui=class r extends we{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=t/o,d=e/l,f=[],p=[],y=[],g=[];for(let m=0;m<u;m++){let _=m*d-a;for(let T=0;T<c;T++){let M=T*h-s;p.push(M,-_,0),y.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let T=_+c*m,M=_+c*(m+1),v=_+1+c*(m+1),E=_+1+c*m;f.push(T,M,E),f.push(M,v,E)}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},xs=class r extends we{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/n,f=new C,p=new Bt;for(let y=0;y<=n;y++){for(let g=0;g<=i;g++){let m=s+g/i*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let y=0;y<n;y++){let g=y*(i+1);for(let m=0;m<i;m++){let _=m+g,T=_,M=_+i+1,v=_+i+2,E=_+1;o.push(T,M,E),o.push(M,v,E)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ce=class r extends we{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new C,d=new C,f=[],p=[],y=[],g=[];for(let m=0;m<=i;m++){let _=[],T=m/i,M=a+T*o,v=t*Math.cos(M),E=Math.sqrt(t*t-v*v),x=0;m===0&&a===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let P=S/e,R=n+P*s;h.x=-E*Math.cos(R),h.y=v,h.z=E*Math.sin(R),p.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(P+x,1-T),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let T=u[m][_+1],M=u[m][_],v=u[m+1][_],E=u[m+1][_+1];(m!==0||a>0)&&f.push(T,M,E),(m!==i-1||l<Math.PI)&&f.push(M,v,E)}this.setIndex(f),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Gn(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(vh(n))n.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(vh(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ti(r){let t={};for(let e=0;e<r.length;e++){let i=Gn(r[e]);for(let n in i)t[n]=i[n]}return t}function vh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Vd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function oc(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var pu={clone:Gn,merge:ti},Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Se=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gn(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Et().setHex(n.value);break;case"v2":this.uniforms[i].value=new Bt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new xe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ut().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},va=class extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var be=class extends Wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ma=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function jr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var bn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ba=class extends bn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:s=t,o=2*e-i;break;case Ll:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,l=2*i-e;break;case Ll:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),y=p*p,g=y*p,m=-d*g+2*d*y-d*p,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*p+1,T=(-1-f)*g+(1.5+f)*y+.5*p,M=f*g-f*y;for(let v=0;v!==o;++v)s[v]=m*a[u+v]+_*a[c+v]+T*a[l+v]+M*a[h+v];return s}},Ea=class extends bn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(n-e),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}},wa=class extends bn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ta=class extends bn{interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-e)/(n-e),y=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*y+a[l+g]*p;return s}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let y=a[c+p],g=a[l+p],m=f*d+p*2,_=h[m],T=h[m+1],M=t*d+p*2,v=u[M],E=u[M+1],x=Yd(i,e,_,v,n);s[p]=mu(x,y,T,E,g)}return s}};function mu(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function qd(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function Yd(r,t,e,i,n){let s=(r-t)/(n-t);for(let a=0;a<8;a++){let o=mu(s,t,e,i,n)-r;if(Math.abs(o)<1e-10)break;let l=qd(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var _i=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),jr(t.settings)&&(i.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break;case Cl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;jr(this.settings)&&(Mh(this.settings.inTangents,t),Mh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;jr(this.settings)&&(Sh(this.settings.inTangents,t),Sh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Sd(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ea,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(n)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let y=e[h+p];if(y!==e[d+p]||y!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,jr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Mh(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Sh(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=da;var En=class extends _i{constructor(t,e,i){super(t,e,i)}};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=ks;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Aa.prototype.ValueTypeName="color";var Ra=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Ra.prototype.ValueTypeName="number";var Ca=class extends bn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let u=c+o;c!==u;c+=4)Qt.slerpFlat(s,0,a,c-o,a,c,l);return s}},rr=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends _i{constructor(t,e,i){super(t,e,i)}};wn.prototype.ValueTypeName="string";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=ks;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Pa.prototype.ValueTypeName="vector";var Ia=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&n.onStart!==void 0&&n.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new Ia,La=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends _e{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},or=class extends ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rl=new Ut,bh=new C,Eh=new C,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sn,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(bh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qr=new C,ta=new Qt,ki=new C,lr=class extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qr,ta,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,ta,ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Qr,ta,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,ta,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mn=new C,wh=new Bt,Th=new Bt,ni=class extends lr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Th),e.subVectors(Th,wh)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(al*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var cr=class extends lr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dl=class extends Na{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Dl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var os=-90,ls=1,_s=class extends _e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ni(os,ls,t,e);n.layers=this.layers,this.add(n);let s=new ni(os,ls,t,e);s.layers=this.layers,this.add(s);let a=new ni(os,ls,t,e);a.layers=this.layers,this.add(a);let o=new ni(os,ls,t,e);o.layers=this.layers,this.add(o);let l=new ni(os,ls,t,e);l.layers=this.layers,this.add(l);let c=new ni(os,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Da=class extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var lc="\\[\\]\\.:\\/",Zd=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",$d="[^"+lc.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",cc),Kd=/(WCOD+)?/.source.replace("WCOD",$d),jd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),Qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),tf=new RegExp("^"+Jd+Kd+jd+Qd+"$"),ef=["material","materials","bones","map"],Ul=class{constructor(t,e,i){let n=i||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},fe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zd,"")}static parseTrackName(t){let e=tf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);ef.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Ul;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fx=new Float32Array(1);var mc=class mc{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};mc.prototype.isMatrix2=!0;var Fl=mc;function hc(r,t,e,i){let n=nf(i);switch(e){case tc:return r*t;case Va:return r*t/n.components*n.byteLength;case Wa:return r*t/n.components*n.byteLength;case Tn:return r*t*2/n.components*n.byteLength;case Xa:return r*t*2/n.components*n.byteLength;case ec:return r*t*3/n.components*n.byteLength;case yi:return r*t*4/n.components*n.byteLength;case qa:return r*t*4/n.components*n.byteLength;case fr:case pr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ja:return Math.max(r,16)*Math.max(t,8)/4;case Ya:case $a:return Math.max(r,8)*Math.max(t,8)/2;case Ka:case ja:case to:case eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qa:case xr:case io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ro:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case co:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case go:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case _o:case yo:case vo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Mo:case So:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _r:case bo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nf(r){switch(r){case di:case Jl:return{byteLength:1,components:1};case Ss:case Kl:case Ui:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case Di:case ka:case Ti:return{byteLength:4,components:1};case jl:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ou(){let r=null,t=!1,e=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function rf(r){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],y=h[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let y=h[f];r.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,np=`uniform sampler2D dfgLUT;
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
}`,sp=`
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
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
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform float backgroundBlurriness;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,dm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,zm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:xf,bsdfs:_f,iridescence_fragment:yf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Ef,color_fragment:wf,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:If,displacementmap_vertex:Lf,emissivemap_fragment:Nf,emissivemap_pars_fragment:Df,colorspace_fragment:Uf,colorspace_pars_fragment:Ff,envmap_fragment:zf,envmap_common_pars_fragment:Of,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:Hf,fog_vertex:Gf,fog_pars_vertex:Vf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:$f,lights_pars_begin:Jf,lights_toon_fragment:jf,lights_toon_pars_fragment:Qf,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:ip,lights_physical_pars_fragment:np,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:ap,lightprobes_pars_fragment:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:xp,morphinstance_vertex:_p,morphcolor_vertex:yp,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:Sp,normal_fragment_begin:bp,normal_fragment_maps:Ep,normal_pars_fragment:wp,normal_pars_vertex:Tp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Lp,opaque_fragment:Np,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Fp,dithering_fragment:zp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:$p,specularmap_pars_fragment:Jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:Qp,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:im,uv_vertex:nm,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:dm,distance_vert:fm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:Sm,meshmatcap_vert:bm,meshmatcap_frag:Em,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Im,meshtoon_frag:Lm,points_vert:Nm,points_frag:Dm,shadow_vert:Um,shadow_frag:Fm,sprite_vert:zm,sprite_frag:Om},gt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ji={basic:{uniforms:ti([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ti([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ti([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ti([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ti([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ti([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ti([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ti([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ti([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ti([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ti([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:ti([gt.common,gt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:ti([gt.lights,gt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ji.physical={uniforms:ti([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var To={r:0,b:0,g:0},Bm=new Ut,Bu=new kt;Bu.set(-1,0,0,0,1,0,0,0,1);function km(r,t,e,i,n,s){let a=new Et(0),o=n===!0?0:1,l,c,u=null,h=0,d=null;function f(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){let M=_.backgroundBlurriness>0;T=t.get(T,M)}return T}function p(_){let T=!1,M=f(_);M===null?g(a,o):M&&M.isColor&&(g(M,1),T=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(_,T){let M=f(T);M&&M.isCubeTexture?(c===void 0&&(c=new Tt(new Lt(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Gn(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bu),c.material.toneMapped=qt.getTransfer(M.colorSpace)!==se,(u!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Tt(new ui(2,2),new Se({name:"BackgroundMaterial",uniforms:Gn(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qt.getTransfer(M.colorSpace)!==se,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,T){_.getRGB(To,oc(r)),e.buffers.color.setClear(To.r,To.g,To.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:y,dispose:m}}function Hm(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(N,U,z,I,H){let G=!1,V=h(N,I,z,U);s!==V&&(s=V,c(s.object)),G=f(N,I,z,H),G&&p(N,I,z,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(N,U,z,I),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function h(N,U,z,I){let H=I.wireframe===!0,G=i[U.id];G===void 0&&(G={},i[U.id]=G);let V=N.isInstancedMesh===!0?N.id:0,tt=G[V];tt===void 0&&(tt={},G[V]=tt);let W=tt[z.id];W===void 0&&(W={},tt[z.id]=W);let K=W[H];return K===void 0&&(K=d(l()),W[H]=K),K}function d(N){let U=[],z=[],I=[];for(let H=0;H<e;H++)U[H]=0,z[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,U,z,I){let H=s.attributes,G=U.attributes,V=0,tt=z.getAttributes();for(let W in tt)if(tt[W].location>=0){let Q=H[W],vt=G[W];if(vt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(vt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(vt=N.instanceColor)),Q===void 0||Q.attribute!==vt||vt&&Q.data!==vt.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function p(N,U,z,I){let H={},G=U.attributes,V=0,tt=z.getAttributes();for(let W in tt)if(tt[W].location>=0){let Q=G[W];Q===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let vt={};vt.attribute=Q,Q&&Q.data&&(vt.data=Q.data),H[W]=vt,V++}s.attributes=H,s.attributesNum=V,s.index=I}function y(){let N=s.newAttributes;for(let U=0,z=N.length;U<z;U++)N[U]=0}function g(N){m(N,0)}function m(N,U){let z=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;z[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),H[N]!==U&&(r.vertexAttribDivisor(N,U),H[N]=U)}function _(){let N=s.newAttributes,U=s.enabledAttributes;for(let z=0,I=U.length;z<I;z++)U[z]!==N[z]&&(r.disableVertexAttribArray(z),U[z]=0)}function T(N,U,z,I,H,G,V){V===!0?r.vertexAttribIPointer(N,U,z,H,G):r.vertexAttribPointer(N,U,z,I,H,G)}function M(N,U,z,I){y();let H=I.attributes,G=z.getAttributes(),V=U.defaultAttributeValues;for(let tt in G){let W=G[tt];if(W.location>=0){let K=H[tt];if(K===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let Q=K.normalized,vt=K.itemSize,Ft=t.get(K);if(Ft===void 0)continue;let Y=Ft.buffer,dt=Ft.type,yt=Ft.bytesPerElement,Rt=dt===r.INT||dt===r.UNSIGNED_INT||K.gpuType===ka;if(K.isInterleavedBufferAttribute){let ft=K.data,zt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,ye=K.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let It=0;It<W.locationSize;It++)m(W.location+It,ft.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let It=0;It<W.locationSize;It++)g(W.location+It);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let It=0;It<W.locationSize;It++)T(W.location+It,vt/W.locationSize,dt,Q,zt*yt,(ye+vt/W.locationSize*It)*yt,Rt)}else{if(K.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft,K.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ft=0;ft<W.locationSize;ft++)g(W.location+ft);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let ft=0;ft<W.locationSize;ft++)T(W.location+ft,vt/W.locationSize,dt,Q,vt*yt,vt/W.locationSize*ft*yt,Rt)}}else if(V!==void 0){let Q=V[tt];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(W.location,Q);break;case 3:r.vertexAttrib3fv(W.location,Q);break;case 4:r.vertexAttrib4fv(W.location,Q);break;default:r.vertexAttrib1fv(W.location,Q)}}}}_()}function v(){P();for(let N in i){let U=i[N];for(let z in U){let I=U[z];for(let H in I){let G=I[H];for(let V in G)u(G[V].object),delete G[V];delete I[H]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let z in U){let I=U[z];for(let H in I){let G=I[H];for(let V in G)u(G[V].object),delete G[V];delete I[H]}}delete i[N.id]}function x(N){for(let U in i){let z=i[U];for(let I in z){let H=z[I];if(H[N.id]===void 0)continue;let G=H[N.id];for(let V in G)u(G[V].object),delete G[V];delete H[N.id]}}}function S(N){for(let U in i){let z=i[U],I=N.isInstancedMesh===!0?N.id:0,H=z[I];if(H!==void 0){for(let G in H){let V=H[G];for(let tt in V)u(V[tt].object),delete V[tt];delete H[G]}delete z[I],Object.keys(z).length===0&&delete i[U]}}}function P(){R(),a=!0,s!==n&&(s=n,c(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function Gm(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Vm(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(x){return!(x!==yi&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==di&&x!==Ti&&!S&&i.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:M,maxSamples:v,samples:E}}function Wm(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Ni,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!g)s?u(null):c();else{let _=s?0:i,T=_*4,M=m.clippingState||null;l.value=M,M=u(p,d,T,f);for(let v=0;v!==T;++v)M[v]=e[v];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=f+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=f;T!==y;++T,M+=4)a.copy(h[T]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Mr=class extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new tr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Lt(5,5,5),s=new Se({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:zn});s.uniforms.tEquirect.value=e;let a=new Tt(n,s),o=e.minFilter;return e.minFilter===dn&&(e.minFilter=si),new _s(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},xu=256,Xm=3,qm=20,ku=256,Hu=16,Ym=3,Zm=new C,$m=new Et,Ro=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _s(1,10,null),this._boxMesh=new Tt(new Lt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=Zm}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor($m));let g=new _s(i,n,u);return g.position.copy(o),g.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xu,cu(t))}_fromTexture(t,e){t.mapping===Bn||t.mapping===Ms?this._setSize(t.image.length===0?xu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=_u(t,!1,!1),i=Math.log2(t)-Xm;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_u(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Bn||t.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jm(),this._integrationMaterial=Km());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Hu);for(let a=0;a<=i;a++){let o=r.lodToRoughness(a,i);if(a>i-Ym)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(ku*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=jm());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function _u(r,t,e){return new Mr(r,{minFilter:dn,generateMipmaps:t,type:Ui,colorSpace:Dn,depthBuffer:e})}function Sr(r,t,e){return new Se({name:r,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:qe,blending:zn,depthTest:!1,depthWrite:!1})}function Jm(){return Sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ku}u

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
	`)}function Km(){return Sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hu}},`

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
	`)}function jm(){return Sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qm}
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
	`)}function yu(){return Sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vu(){return Sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qm(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===za||f===Oa)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new Mr(p.height);return y.fromEquirectangularTexture(r,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===za||f===Oa,y=f===Bn||f===Ms;if(p||y){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Ro(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return p&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Ro(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===za?d.mapping=Bn:f===Oa&&(d.mapping=Ms),d}function l(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:h}}function t0(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Bs("WebGLRenderer: "+i+" extension not supported."),n}}}function e0(r,t,e,i){let n={},s=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);let y=s.get(p);y&&(t.remove(y),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,y){return n[y.id]!==void 0||(y.addEventListener("dispose",o),n[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function u(p){let y=p.attributes;for(let g in y)t.update(y[g],r.ARRAY_BUFFER)}function h(p){let y=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let _=y!==null?y.array.length:g.array.length/3-1,T=g.count>=65535?$s:Zs,M=new T(Math.ceil(_/3)*6,1),v=M.array;if(y!==null){let x=y.array;m=y.version;for(let S=0,P=0;S<_;S+=3){let R=x[S+0],N=x[S+1],U=x[S+2];v[P++]=R,v[P++]=N,v[P++]=N,v[P++]=U,v[P++]=U,v[P++]=R}}else{m=g.version;for(let x=0,S=0;x<_;x+=3){let P=x+0,R=x+1,N=x+2;v[S++]=P,v[S++]=R,v[S++]=R,v[S++]=N,v[S++]=N,v[S++]=P}}M.version=m;let E=s.get(p);E&&t.remove(E),s.set(p,M)}function d(p){let y=s.get(p);if(y){let g=p.index;g!==null&&y.version<g.version&&h(p)}else h(p);return s.get(p)}function f(){for(let p in n){let y=n[p].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function i0(r,t,e){let i;function n(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(i,d,s,h*a),e.update(d,i,1)}function c(h,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,h*a,f),e.update(d,i,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let y=0;for(let g=0;g<f;g++)y+=d[g];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function n0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function s0(r,t,e){let i=new WeakMap,n=new xe;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,v=1;M>t.maxTextureSize&&(v=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*v*4*h),x=new Ws(E,M,v,h);x.type=Ti,x.needsUpdate=!0;let S=T*4;for(let R=0;R<h;R++){let N=g[R],U=m[R],z=_[R],I=M*v*4*R;for(let H=0;H<N.count;H++){let G=H*S;f===!0&&(n.fromBufferAttribute(N,H),E[I+G+0]=n.x,E[I+G+1]=n.y,E[I+G+2]=n.z,E[I+G+3]=0),p===!0&&(n.fromBufferAttribute(U,H),E[I+G+4]=n.x,E[I+G+5]=n.y,E[I+G+6]=n.z,E[I+G+7]=0),y===!0&&(n.fromBufferAttribute(z,H),E[I+G+8]=n.x,E[I+G+9]=n.y,E[I+G+10]=n.z,E[I+G+11]=z.itemSize===4?n.w:1)}}d={count:h,texture:x,size:new Bt(M,v)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function r0(r,t,e,i,n){let s=new WeakMap;function a(c){let u=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var a0={[Gl]:"LINEAR_TONE_MAPPING",[Vl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[Xl]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function o0(r,t,e,i,n,s){let a=new xi(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new we;u.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(u,h),f=new cr(-1,1,1,-1,0,1),p=null,y=null,g=!1,m,_=null,T=[],M=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let x=0;x<T.length;x++){let S=T[x];S.setSize&&S.setSize(v,E)}},this.setEffects=function(v){T=v,M=T.length>0&&T[0].isRenderPass===!0;let E=a.width,x=a.height;T.length>0&&o===null&&(o=new xi(E,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new xi(E,x,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&T.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new hn(E,x),s===!0&&(c.format=fn,c.type=kn)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<T.length;P++){let R=T[P];R.setSize&&R.setSize(E,x),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(v,E){if(g||v.toneMapping===Zi&&T.length===0)return!1;if(_=E,E!==null){let x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return M===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Zi,!0},this.hasRenderPass=function(){return M},this.end=function(v,E){v.toneMapping=m,g=!0;let x=a,S=o;for(let P=0;P<T.length;P++){let R=T[P];R.enabled!==!1&&(R.render(v,S,x,E),R.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(p!==v.outputColorSpace||y!==v.toneMapping){p=v.outputColorSpace,y=v.toneMapping,h.defines={},qt.getTransfer(p)===se&&(h.defines.SRGB_TRANSFER="");let P=a0[y];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(d,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Gu=new ri,Vu=new hn(1,1),Wu=new er(1),Xu=new Ws,qu=new ga,Yu=new tr,Mu=[],Su=[],bu=new Float32Array(16),Eu=new Float32Array(9),wu=new Float32Array(4);function Es(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Mu[n];if(s===void 0&&(s=new Float32Array(n),Mu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Oe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Po(r,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function l0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function c0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),Oe(e,t)}}function h0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),Oe(e,t)}}function u0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),Oe(e,t)}}function d0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,i))return;wu.set(i),r.uniformMatrix2fv(this.addr,!1,wu),Oe(e,i)}}function f0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,i))return;Eu.set(i),r.uniformMatrix3fv(this.addr,!1,Eu),Oe(e,i)}}function p0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ze(e,i))return;bu.set(i),r.uniformMatrix4fv(this.addr,!1,bu),Oe(e,i)}}function m0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function g0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),Oe(e,t)}}function x0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),Oe(e,t)}}function _0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),Oe(e,t)}}function y0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function v0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),Oe(e,t)}}function M0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),Oe(e,t)}}function S0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),Oe(e,t)}}function Io(r){return r.version===0&&(r.compareFunction=sc,r.needsUpdate=!0),r}function b0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=Io(Vu):s=Gu,e.setTexture2D(t||s,n)}function E0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qu,n)}function w0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Io(Wu):s=Yu,e.setTextureCube(t||s,n)}function T0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Xu,n)}function A0(r){switch(r){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}}function R0(r,t){r.uniform1fv(this.addr,t)}function C0(r,t){let e=Es(t,this.size,2);r.uniform2fv(this.addr,e)}function P0(r,t){let e=Es(t,this.size,3);r.uniform3fv(this.addr,e)}function I0(r,t){let e=Es(t,this.size,4);r.uniform4fv(this.addr,e)}function L0(r,t){let e=Es(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function N0(r,t){let e=Es(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function D0(r,t){let e=Es(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function U0(r,t){r.uniform1iv(this.addr,t)}function F0(r,t){r.uniform2iv(this.addr,t)}function z0(r,t){r.uniform3iv(this.addr,t)}function O0(r,t){r.uniform4iv(this.addr,t)}function B0(r,t){r.uniform1uiv(this.addr,t)}function k0(r,t){r.uniform2uiv(this.addr,t)}function H0(r,t){r.uniform3uiv(this.addr,t)}function G0(r,t){r.uniform4uiv(this.addr,t)}function V0(r,t,e){let i=this.cache,n=t.length,s=Po(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Io(Vu):a=Gu;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function W0(r,t,e){let i=this.cache,n=t.length,s=Po(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||qu,s[a])}function X0(r,t,e){let i=this.cache,n=t.length,s=Po(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Io(Wu):a=Yu;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,s[o])}function q0(r,t,e){let i=this.cache,n=t.length,s=Po(e,n);ze(i,s)||(r.uniform1iv(this.addr,s),Oe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Xu,s[a])}function Y0(r){switch(r){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return N0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return z0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return k0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}var _c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}},yc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},gc=/(\w+)(\])?(\[|\.)?/g;function Tu(r,t){r.seq.push(t),r.map[t.id]=t}function Z0(r,t,e){let i=r.name,n=i.length;for(gc.lastIndex=0;;){let s=gc.exec(i),a=gc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Tu(e,c===void 0?new _c(o,r,t):new yc(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new vc(o),Tu(e,h)),e=h}}}var bs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Z0(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Au(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var $0=37297,J0=0;function K0(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Ru=new kt;function j0(r){qt._getMatrix(Ru,qt.workingColorSpace,r);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Hs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Cu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+K0(r.getShaderSource(t),o)}else return s}function Q0(r,t){let e=j0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tg={[Gl]:"Linear",[Vl]:"Reinhard",[Wl]:"Cineon",[Xl]:"ACESFilmic",[Yl]:"AgX",[Zl]:"Neutral",[ql]:"Custom"};function eg(r,t){let e=tg[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ao=new C;function ig(){qt.getLuminanceCoefficients(Ao);let r=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function sg(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rg(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function vr(r){return r!==""}function Pu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Iu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(r){return r.replace(ag,og)}function og(r,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Mc(e)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(r){return r.replace(lg,cg)}function cg(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Nu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var hg={[ur]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function ug(r){return hg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dg={[Ms]:"ENVMAP_MODE_REFRACTION"};function fg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dg[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pg={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[Zh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function mg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pg[r.combine]||"ENVMAP_BLENDING_NONE"}function gg(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ug(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=fg(e),h=mg(e),d=ng(e),f=sg(s),p=n.createProgram(),y,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),g.length>0&&(g+=`
`)):(y=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),g=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=Mc(a),a=Pu(a,e),a=Iu(a,e),o=Mc(o),o=Pu(o,e),o=Iu(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=m+y+a,T=m+g+o,M=Au(n,n.VERTEX_SHADER,_),v=Au(n,n.FRAGMENT_SHADER,T);n.attachShader(p,M),n.attachShader(p,v),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function E(R){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(p)||"",U=n.getShaderInfoLog(M)||"",z=n.getShaderInfoLog(v)||"",I=N.trim(),H=U.trim(),G=z.trim(),V=!0,tt=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,M,v);else{let W=Cu(n,M,"vertex"),K=Cu(n,v,"fragment");Ot("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+K)}else I!==""?Dt("WebGLProgram: Program Info Log:",I):(H===""||G==="")&&(tt=!1);tt&&(R.diagnostics={runnable:V,programLog:I,vertexShader:{log:H,prefix:y},fragmentShader:{log:G,prefix:g}})}n.deleteShader(M),n.deleteShader(v),x=new bs(n,p),S=rg(n,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(p,$0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=v,this}var xg=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new bc(t),e.set(t,i)),i}},bc=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function _g(r){return r===Tn||r===xr||r===_r}function yg(r,t,e,i,n,s){let a=new Xs,o=new Sc,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,P,R,N,U){let z=R.fog,I=N.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||H,G),tt=d[x.type],W=i.precision;x.precision!==null&&(W=i.getMaxPrecision(x.precision),W!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=K!==void 0?K.length:0,vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let Ft,Y,dt,yt;if(tt){let mt=Ji[tt];Ft=mt.vertexShader,Y=mt.fragmentShader}else{Ft=x.vertexShader,Y=x.fragmentShader;let mt=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,mt,oe),dt=mt.id,yt=oe.id}let Rt=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,It=!!x.map,ae=!!x.matcap,he=!!V,$t=he&&V.isPMREMTexture===!0,We=!!x.aoMap,Ue=!!x.lightMap,ci=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,Bi=!!x.displacementMap,Be=!!x.emissiveMap,vi=!!x.metalnessMap,Mi=!!x.roughnessMap,Si=x.anisotropy>0,F=x.clearcoat>0,bi=x.diffuseRoughness>0,me=x.dispersion>0,ge=x.retroreflectivity>0,pt=x.iridescence>0,Fe=x.sheen>0,Nt=x.transmission>0,Ht=Si&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,b=F&&!!x.clearcoatNormalMap,B=F&&!!x.clearcoatRoughnessMap,it=bi&&!!x.diffuseRoughnessMap,j=pt&&!!x.iridescenceMap,rt=pt&&!!x.iridescenceThicknessMap,ht=Fe&&!!x.sheenColorMap,Z=Fe&&!!x.sheenRoughnessMap,$=!!x.specularMap,ot=!!x.specularColorMap,L=!!x.specularIntensityMap,J=Nt&&!!x.transmissionMap,q=Nt&&!!x.thicknessMap,lt=!!x.gradientMap,st=!!x.alphaMap,at=x.alphaTest>0,At=!!x.alphaHash,Wt=!!x.extensions,nt=Zi;x.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(nt=r.toneMapping);let Ct=$t?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Vt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:Y,defines:x.defines,customVertexShaderID:dt,customFragmentShaderID:yt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:It,matcap:ae,envMap:he,envMapMode:he&&V.mapping,envMapPMREM:$t,envMapMaxLod:$t?Ct.length-1:null,envMapSize:$t?Ct[0].width:null,aoMap:We,lightMap:Ue,bumpMap:ci,normalMap:ve,displacementMap:Bi,emissiveMap:Be,normalMapObjectSpace:ve&&x.normalMapType===jh,normalMapTangentSpace:ve&&x.normalMapType===Eo,packedNormalMap:ve&&x.normalMapType===Eo&&_g(x.normalMap.format),metalnessMap:vi,roughnessMap:Mi,anisotropy:Si,anisotropyMap:Ht,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:B,diffuseRoughness:bi,diffuseRoughnessMap:it,dispersion:me,retroreflection:ge,iridescence:pt,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:Fe,sheenColorMap:ht,sheenRoughnessMap:Z,specularMap:$,specularColorMap:ot,specularIntensityMap:L,transmission:Nt,transmissionMap:J,thicknessMap:q,gradientMap:lt,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:At,combine:x.combine,mapUv:It&&f(x.map.channel),aoMapUv:We&&f(x.aoMap.channel),lightMapUv:Ue&&f(x.lightMap.channel),bumpMapUv:ci&&f(x.bumpMap.channel),normalMapUv:ve&&f(x.normalMap.channel),displacementMapUv:Bi&&f(x.displacementMap.channel),emissiveMapUv:Be&&f(x.emissiveMap.channel),metalnessMapUv:vi&&f(x.metalnessMap.channel),roughnessMapUv:Mi&&f(x.roughnessMap.channel),anisotropyMapUv:Ht&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(x.sheenRoughnessMap.channel),specularMapUv:$&&f(x.specularMap.channel),specularColorMapUv:ot&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:J&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:st&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ve||Si),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(It||st),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:vt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(mt=>mt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:It&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===se,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Le,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function y(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(S,x),m(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let S=d[x.type],P;if(S){let R=Ji[S];P=pu.clone(R.uniforms)}else P=x.uniforms;return P}function T(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new gg(r,S,x,n),c.push(P),u.set(S,P)),P}function M(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:_,acquireProgram:T,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:E}}function vg(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Mg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Du(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,y,g,m){let _=r[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:m},r[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=a(d),_.groupOrder=y,_.renderOrder=d.renderOrder,_.z=g,_.group=m),t++,_}function l(d,f,p,y,g,m,_){_.reversedDepth===!0&&(g=-g);let T=o(d,f,p,y,g,m);p.transmission>0?i.push(T):p.transparent===!0?n.push(T):e.push(T)}function c(d,f,p,y,g,m){let _=o(d,f,p,y,g,m);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function u(d,f){e.length>1&&e.sort(d||Mg),i.length>1&&i.sort(f||Du),n.length>1&&n.sort(f||Du)}function h(){for(let d=t,f=r.length;d<f;d++){let p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:h,sort:u}}function Sg(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Uu,r.set(i,[a])):n>=s.length?(a=new Uu,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function bg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function Eg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var wg=0;function Tg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ag(r){let t=new bg,e=Eg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let n=new C,s=new Ut,a=new Ut;function o(c){let u=0,h=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,_=0,T=0,M=0,v=0,E=0,x=0,S=0,P=0,R=0;c.sort(Tg);for(let U=0,z=c.length;U<z;U++){let I=c[U],H=I.color,G=I.intensity,V=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Tn?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=H.r*G,h+=H.g*G,d+=H.b*G;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],G);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,Q=e.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=Q,i.sunShadowMap[p]=tt;let vt=K.getViewportCount();for(let Ft=0;Ft<vt;Ft++)i.sunShadowMatrix[y+Ft]=K.getMatrix(Ft),i.sunShadowCascade[y+Ft]=K._cascadeData[Ft];y+=vt,p++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,Q=e.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=tt,i.directionalShadowMatrix[g]=I.shadow.matrix,v++}i.directional[g]=W,g++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(G),W.distance=V,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[_]=W;let K=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,K.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[_]=K.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=tt,x++}_++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(H).multiplyScalar(G),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=W,T++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let K=I.shadow,Q=e.get(I);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(G),W.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[M]=W,M++}}T>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==T||N.hemiLength!==M||N.numSunShadows!==p||N.numDirectionalShadows!==v||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==S||N.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=g,i.spot.length=_,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=_,N.rectAreaLength=T,N.hemiLength=M,N.numSunShadows=p,N.numDirectionalShadows=v,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=S,N.numLightProbes=R,i.version=wg++)}function l(c,u){let h=0,d=0,f=0,p=0,y=0,g=0,m=u.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){let M=c[_];if(M.isSunLight){let v=i.sun[h];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(M.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let v=i.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let v=i.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Fu(r){let t=new Ag(r),e=[],i=[],n=[];function s(h){u.camera=h,e.length=0,i.length=0,n.length=0}function a(h){h.isLightProbeGrid?n.push(h):e.push(h)}function o(h){i.push(h)}function l(){t.setup(e),n.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Rg(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Fu(r),t.set(n,[o])):s>=a.length?(o=new Fu(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`,Ig=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Lg=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],zu=new Ut,yr=new C,xc=new C;function Ng(r,t,e){let i=new Sn,n=new Bt,s=new Bt,a=new xe,o=new Ma,l=new Sa,c={},u=e.maxTextureSize,h={[Yi]:qe,[qe]:Yi,[Le]:Le},d=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Cg,fragmentShader:Pg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new we;p.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Tt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let m=this.type;this.render=function(E,x,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Ch&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let P=r.getRenderTarget(),R=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),U=r.state;U.setBlending(zn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=E.length;I<H;I++){let G=E[I],V=G.shadow;if(V===void 0){Dt("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let tt=V.getFrameExtents();n.multiply(tt),s.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/tt.x),n.x=s.x*tt.x,V.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/tt.y),n.y=s.y*tt.y,V.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ys){if(G.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new xi(n.x,n.y,{format:Tn,type:Ui,minFilter:si,magFilter:si,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new hn(n.x,n.y,Ti),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=on,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Re,V.map.depthTexture.magFilter=Re}else G.isPointLight?(V.map=new Mr(n.x),V.map.depthTexture=new er(n.x,Di)):(V.map=new xi(n.x,n.y),V.map.depthTexture=new hn(n.x,n.y,Di)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=on,this.type===ur?(V.map.depthTexture.compareFunction=W?nc:ic,V.map.depthTexture.minFilter=si,V.map.depthTexture.magFilter=si):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Re,V.map.depthTexture.magFilter=Re);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,S);let Q=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let vt=0;vt<K;vt++){let Ft=V.getCamera(vt);if(G.isPointLight){let Y=V.camera,dt=V.matrix,yt=G.distance||Y.far;yt!==Y.far&&(Y.far=yt,Y.updateProjectionMatrix()),yr.setFromMatrixPosition(G.matrixWorld),Y.position.copy(yr),xc.copy(Y.position),xc.add(Ig[vt]),Y.up.copy(Lg[vt]),Y.lookAt(xc),Y.updateMatrixWorld(),dt.makeTranslation(-yr.x,-yr.y,-yr.z),zu.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(zu,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,vt),r.clear();else{vt===0&&(r.setRenderTarget(V.map),r.clear());let Y=V.getViewport(vt);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),U.viewport(a)}i=V.getFrustum(vt),M(x,S,Ft,G,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ys&&_(V,S),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(P,R,N)};function _(E,x){let S=t.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new xi(n.x,n.y,{format:Tn,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,S,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,S,f,y,null)}function T(E,x,S,P){let R=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=R.uuid,z=x.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let H=I[z];H===void 0&&(H=R.clone(),I[z]=H,x.addEventListener("dispose",v)),R=H}if(R.visible=x.visible,R.wireframe=x.wireframe,P===ys?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:h[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=r.properties.get(R);U.light=S}return R}function M(E,x,S,P,R,N){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ys)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),H=E.material;if(Array.isArray(H)){let G=I.groups;for(let V=0,tt=G.length;V<tt;V++){let W=G[V],K=H[W.materialIndex];if(K&&K.visible){let Q=T(E,K,P,N);E.onBeforeShadow(r,E,x,S,I,Q,W),r.renderBufferDirect(S,null,I,Q,E,W),E.onAfterShadow(r,E,x,S,I,Q,W)}}}else if(H.visible){let G=T(E,H,P,N);E.onBeforeShadow(r,E,x,S,I,G,null),r.renderBufferDirect(S,null,I,G,E,null),E.onAfterShadow(r,E,x,S,I,G,null)}}let z=E.children;for(let I=0,H=z.length;I<H;I++)M(z[I],x,S,P,R,N)}function v(E){E.target.removeEventListener("dispose",v);for(let S in c){let P=c[S],R=E.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function Dg(r,t){function e(){let L=!1,J=new xe,q=null,lt=new xe(0,0,0,0);return{setMask:function(st){q!==st&&!L&&(r.colorMask(st,st,st,st),q=st)},setLocked:function(st){L=st},setClear:function(st,at,At,Wt,nt){nt===!0&&(st*=Wt,at*=Wt,At*=Wt),J.set(st,at,At,Wt),lt.equals(J)===!1&&(r.clearColor(st,at,At,Wt),lt.copy(J))},reset:function(){L=!1,q=null,lt.set(-1,0,0,0)}}}function i(){let L=!1,J=!1,q=null,lt=null,st=null;return{setReversed:function(at){if(J!==at){let At=t.get("EXT_clip_control");at?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),J=at;let Wt=st;st=null,this.setClear(Wt)}},getReversed:function(){return J},setTest:function(at){at?ft(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(at){q!==at&&!L&&(r.depthMask(at),q=at)},setFunc:function(at){if(J&&(at=lu[at]),lt!==at){switch(at){case na:r.depthFunc(r.NEVER);break;case sa:r.depthFunc(r.ALWAYS);break;case ra:r.depthFunc(r.LESS);break;case hs:r.depthFunc(r.LEQUAL);break;case aa:r.depthFunc(r.EQUAL);break;case oa:r.depthFunc(r.GEQUAL);break;case la:r.depthFunc(r.GREATER);break;case ca:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=at}},setLocked:function(at){L=at},setClear:function(at){st!==at&&(st=at,J&&(at=1-at),r.clearDepth(at))},reset:function(){L=!1,q=null,lt=null,st=null,J=!1}}}function n(){let L=!1,J=null,q=null,lt=null,st=null,at=null,At=null,Wt=null,nt=null;return{setTest:function(Ct){L||(Ct?ft(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Ct){J!==Ct&&!L&&(r.stencilMask(Ct),J=Ct)},setFunc:function(Ct,Vt,mt){(q!==Ct||lt!==Vt||st!==mt)&&(r.stencilFunc(Ct,Vt,mt),q=Ct,lt=Vt,st=mt)},setOp:function(Ct,Vt,mt){(at!==Ct||At!==Vt||Wt!==mt)&&(r.stencilOp(Ct,Vt,mt),at=Ct,At=Vt,Wt=mt)},setLocked:function(Ct){L=Ct},setClear:function(Ct){nt!==Ct&&(r.clearStencil(Ct),nt=Ct)},reset:function(){L=!1,J=null,q=null,lt=null,st=null,at=null,At=null,Wt=null,nt=null}}}let s=new e,a=new i,o=new n,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],y=null,g=!1,m=null,_=null,T=null,M=null,v=null,E=null,x=null,S=new Et(0,0,0),P=0,R=!1,N=null,U=null,z=null,I=null,H=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=tt>=2);let K=null,Q={},vt=r.getParameter(r.SCISSOR_BOX),Ft=r.getParameter(r.VIEWPORT),Y=new xe().fromArray(vt),dt=new xe().fromArray(Ft);function yt(L,J,q,lt){let st=new Uint8Array(4),at=r.createTexture();r.bindTexture(L,at),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<q;At++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(J+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return at}let Rt={};Rt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(r.DEPTH_TEST),a.setFunc(hs),ci(!1),ve(zl),ft(r.CULL_FACE),We(zn);function ft(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function zt(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function ye(L,J){return d[L]!==J?(r.bindFramebuffer(L,J),d[L]=J,L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=J),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=J),!0):!1}function It(L,J){let q=p,lt=!1;if(L){q=f.get(J),q===void 0&&(q=[],f.set(J,q));let st=L.textures;if(q.length!==st.length||q[0]!==r.COLOR_ATTACHMENT0){for(let at=0,At=st.length;at<At;at++)q[at]=r.COLOR_ATTACHMENT0+at;q.length=st.length,lt=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,lt=!0);lt&&r.drawBuffers(q)}function ae(L){return y!==L?(r.useProgram(L),y=L,!0):!1}let he={[On]:r.FUNC_ADD,[Ih]:r.FUNC_SUBTRACT,[Lh]:r.FUNC_REVERSE_SUBTRACT};he[Nh]=r.MIN,he[Dh]=r.MAX;let $t={[Uh]:r.ZERO,[Fh]:r.ONE,[zh]:r.SRC_COLOR,[kl]:r.SRC_ALPHA,[Vh]:r.SRC_ALPHA_SATURATE,[Hh]:r.DST_COLOR,[Bh]:r.DST_ALPHA,[Oh]:r.ONE_MINUS_SRC_COLOR,[Hl]:r.ONE_MINUS_SRC_ALPHA,[Gh]:r.ONE_MINUS_DST_COLOR,[kh]:r.ONE_MINUS_DST_ALPHA,[Wh]:r.CONSTANT_COLOR,[Xh]:r.ONE_MINUS_CONSTANT_COLOR,[qh]:r.CONSTANT_ALPHA,[Yh]:r.ONE_MINUS_CONSTANT_ALPHA};function We(L,J,q,lt,st,at,At,Wt,nt,Ct){if(L===zn){g===!0&&(zt(r.BLEND),g=!1);return}if(g===!1&&(ft(r.BLEND),g=!0),L!==Ph){if(L!==m||Ct!==R){if((_!==On||v!==On)&&(r.blendEquation(r.FUNC_ADD),_=On,v=On),Ct)switch(L){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case un:r.blendFunc(r.ONE,r.ONE);break;case Ol:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ot("WebGLState: Invalid blending: ",L);break}else switch(L){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case un:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ol:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",L);break}T=null,M=null,E=null,x=null,S.set(0,0,0),P=0,m=L,R=Ct}return}st=st||J,at=at||q,At=At||lt,(J!==_||st!==v)&&(r.blendEquationSeparate(he[J],he[st]),_=J,v=st),(q!==T||lt!==M||at!==E||At!==x)&&(r.blendFuncSeparate($t[q],$t[lt],$t[at],$t[At]),T=q,M=lt,E=at,x=At),(Wt.equals(S)===!1||nt!==P)&&(r.blendColor(Wt.r,Wt.g,Wt.b,nt),S.copy(Wt),P=nt),m=L,R=!1}function Ue(L,J){L.side===Le?zt(r.CULL_FACE):ft(r.CULL_FACE);let q=L.side===qe;J&&(q=!q),ci(q),L.blending===vs&&L.transparent===!1?We(zn):We(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let lt=L.stencilWrite;o.setTest(lt),lt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ci(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function ve(L){L!==Ah?(ft(r.CULL_FACE),L!==U&&(L===zl?r.cullFace(r.BACK):L===Rh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),U=L}function Bi(L){L!==z&&(V&&r.lineWidth(L),z=L)}function Be(L,J,q){L?(ft(r.POLYGON_OFFSET_FILL),(I!==J||H!==q)&&(I=J,H=q,a.getReversed()&&(J=-J,q=-q),r.polygonOffset(J,q))):zt(r.POLYGON_OFFSET_FILL)}function vi(L){L?ft(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function Mi(L){L===void 0&&(L=r.TEXTURE0+G-1),K!==L&&(r.activeTexture(L),K=L)}function Si(L,J,q){q===void 0&&(K===null?q=r.TEXTURE0+G-1:q=K);let lt=Q[q];lt===void 0&&(lt={type:void 0,texture:void 0},Q[q]=lt),(lt.type!==L||lt.texture!==J)&&(K!==q&&(r.activeTexture(q),K=q),r.bindTexture(L,J||Rt[L]),lt.type=L,lt.texture=J)}function F(){let L=Q[K];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function bi(){try{r.compressedTexImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function me(){try{r.compressedTexImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function ge(){try{r.texSubImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function pt(){try{r.texSubImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Fe(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Nt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function Ht(){try{r.texStorage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function A(){try{r.texStorage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function b(){try{r.texImage2D(...arguments)}catch(L){Ot("WebGLState:",L)}}function B(){try{r.texImage3D(...arguments)}catch(L){Ot("WebGLState:",L)}}function it(L){return h[L]!==void 0?h[L]:r.getParameter(L)}function j(L,J){h[L]!==J&&(r.pixelStorei(L,J),h[L]=J)}function rt(L){Y.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function ht(L){dt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function Z(L,J){let q=c.get(J);q===void 0&&(q=new WeakMap,c.set(J,q));let lt=q.get(L);lt===void 0&&(lt=r.getUniformBlockIndex(J,L.name),r.uniformBlockBinding(J,lt,lt),q.set(L,lt))}function $(L,J,q){let st=c.get(J).get(L);l[st]!==q&&(r.bindBufferBase(r.UNIFORM_BUFFER,st,q),l[st]=q)}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},K=null,Q={},d={},l={},f=new WeakMap,p=[],y=null,g=!1,m=null,_=null,T=null,M=null,v=null,E=null,x=null,S=new Et(0,0,0),P=0,R=!1,N=null,U=null,z=null,I=null,H=null,Y.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ft,disable:zt,bindFramebuffer:ye,drawBuffers:It,useProgram:ae,setBlending:We,setMaterial:Ue,setFlipSided:ci,setCullFace:ve,setLineWidth:Bi,setPolygonOffset:Be,setScissorTest:vi,activeTexture:Mi,bindTexture:Si,unbindTexture:F,compressedTexImage2D:bi,compressedTexImage3D:me,texImage2D:b,texImage3D:B,pixelStorei:j,getParameter:it,updateUBOMapping:Z,uniformBlockBinding:$,texStorage2D:Ht,texStorage3D:A,texSubImage2D:ge,texSubImage3D:pt,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Nt,scissor:rt,viewport:ht,reset:ot}}function Ug(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(A=>p.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return g?new OffscreenCanvas(A,b):Gs("canvas")}function _(A,b,B){let it=1,j=Ht(A);if((j.width>B||j.height>B)&&(it=B/Math.max(j.width,j.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(it*j.width),ht=Math.floor(it*j.height);d===void 0&&(d=m(rt,ht));let Z=b?m(rt,ht):d;return Z.width=rt,Z.height=ht,Z.getContext("2d").drawImage(A,0,0,rt,ht),Dt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+rt+"x"+ht+")."),Z}else return"data"in A&&Dt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function T(A){return A.generateMipmaps}function M(A){r.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,b,B,it,j,rt=!1){if(A!==null){if(r[A]!==void 0)return r[A];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;it&&(ht=t.get("EXT_texture_norm16"),ht||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===r.RED&&(B===r.FLOAT&&(Z=r.R32F),B===r.HALF_FLOAT&&(Z=r.R16F),B===r.UNSIGNED_BYTE&&(Z=r.R8),B===r.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),B===r.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),b===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.R8UI),B===r.UNSIGNED_SHORT&&(Z=r.R16UI),B===r.UNSIGNED_INT&&(Z=r.R32UI),B===r.BYTE&&(Z=r.R8I),B===r.SHORT&&(Z=r.R16I),B===r.INT&&(Z=r.R32I)),b===r.RG&&(B===r.FLOAT&&(Z=r.RG32F),B===r.HALF_FLOAT&&(Z=r.RG16F),B===r.UNSIGNED_BYTE&&(Z=r.RG8),B===r.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),B===r.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RG8UI),B===r.UNSIGNED_SHORT&&(Z=r.RG16UI),B===r.UNSIGNED_INT&&(Z=r.RG32UI),B===r.BYTE&&(Z=r.RG8I),B===r.SHORT&&(Z=r.RG16I),B===r.INT&&(Z=r.RG32I)),b===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),B===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),B===r.UNSIGNED_INT&&(Z=r.RGB32UI),B===r.BYTE&&(Z=r.RGB8I),B===r.SHORT&&(Z=r.RGB16I),B===r.INT&&(Z=r.RGB32I)),b===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),B===r.UNSIGNED_INT&&(Z=r.RGBA32UI),B===r.BYTE&&(Z=r.RGBA8I),B===r.SHORT&&(Z=r.RGBA16I),B===r.INT&&(Z=r.RGBA32I)),b===r.RGB&&(B===r.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),B===r.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),b===r.RGBA){let $=rt?Hs:qt.getTransfer(j);B===r.FLOAT&&(Z=r.RGBA32F),B===r.HALF_FLOAT&&(Z=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Z=$===se?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),B===r.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,b){let B;return A?b===null||b===Di||b===kn?B=r.DEPTH24_STENCIL8:b===Ti?B=r.DEPTH32F_STENCIL8:b===Ss&&(B=r.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===kn?B=r.DEPTH_COMPONENT24:b===Ti?B=r.DEPTH_COMPONENT32F:b===Ss&&(B=r.DEPTH_COMPONENT16),B}function S(A,b){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==si?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function P(A){let b=new WeakRef(A);i.get(A).__ref=b,p.add(b),y.register(A,b,b)}function R(A){let b=i.get(A).__ref;b!==void 0&&(p.delete(b),y.unregister(b))}function N(A){z(A.target)}function U(A){I(A.target)}function z(A){A.removeEventListener("dispose",N),R(A),G(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function I(A){A.removeEventListener("dispose",U),R(A),tt(A)}function H(){for(let A of p){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):z(b))}p.clear(),h.clear()}function G(A){let b=i.get(A);if(b.__webglInit===void 0)return;let B=A.source,it=f.get(B);if(it){let j=it[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(A),Object.keys(it).length===0&&f.delete(B)}i.remove(A)}function V(A){let b=i.get(A);r.deleteTexture(b.__webglTexture);let B=A.source,it=f.get(B);delete it[b.__cacheKey],a.memory.textures--}function tt(A){let b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&z(B),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let rt=0;rt<b.__webglFramebuffer[j].length;rt++)r.deleteFramebuffer(b.__webglFramebuffer[j][rt]);else r.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)r.deleteFramebuffer(b.__webglFramebuffer[j]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let it=A.textures;for(let j=0,rt=it.length;j<rt;j++){let ht=i.get(it[j]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(it[j])}i.remove(A)}let W=0;function K(){W=0}function Q(){return W}function vt(A){W=A}function Ft(){let A=W;return A>=n.maxTextures&&Dt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,A}function Y(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function dt(A,b){let B=i.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let it=A.image;if(it===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(B,A,b);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+b)}function yt(A,b){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ue(B,A,b);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+b)}function Rt(A,b){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ue(B,A,b);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+b)}function ft(A,b){let B=i.get(A);if(A.version>0&&B.__version!==A.version){ci(B,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+b)}let zt={[ha]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[ua]:r.MIRRORED_REPEAT},ye={[Re]:r.NEAREST,[Jh]:r.NEAREST_MIPMAP_NEAREST,[dr]:r.NEAREST_MIPMAP_LINEAR,[si]:r.LINEAR,[Ba]:r.LINEAR_MIPMAP_NEAREST,[dn]:r.LINEAR_MIPMAP_LINEAR},It={[tu]:r.NEVER,[sc]:r.ALWAYS,[eu]:r.LESS,[ic]:r.LEQUAL,[iu]:r.EQUAL,[nc]:r.GEQUAL,[nu]:r.GREATER,[su]:r.NOTEQUAL};function ae(A,b){if(b.type===Ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===si||b.magFilter===Ba||b.magFilter===dr||b.magFilter===dn||b.minFilter===si||b.minFilter===Ba||b.minFilter===dr||b.minFilter===dn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,zt[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,zt[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,zt[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ye[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,It[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Re||b.minFilter!==dr&&b.minFilter!==dn||b.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function he(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N),P(b));let it=b.source,j=f.get(it);j===void 0&&(j={},f.set(it,j));let rt=Y(b);if(rt!==A.__cacheKey){j[rt]===void 0&&(j[rt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[rt].usedTimes++;let ht=j[A.__cacheKey];ht!==void 0&&(j[A.__cacheKey].usedTimes--,ht.usedTimes===0&&V(b)),A.__cacheKey=rt,A.__webglTexture=j[rt].texture}return B}function $t(A,b,B){return Math.floor(Math.floor(A/B)/b)}function We(A,b,B,it){let rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,B,it,b.data);else{rt.sort((L,J)=>L.start-J.start);let ht=0;for(let L=1;L<rt.length;L++){let J=rt[ht],q=rt[L],lt=J.start+J.count,st=$t(q.start,b.width,4),at=$t(J.start,b.width,4);q.start<=lt+1&&st===at&&$t(q.start+q.count-1,b.width,4)===st?J.count=Math.max(J.count,q.start+q.count-J.start):(++ht,rt[ht]=q)}rt.length=ht+1;let Z=e.getParameter(r.UNPACK_ROW_LENGTH),$=e.getParameter(r.UNPACK_SKIP_PIXELS),ot=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let L=0,J=rt.length;L<J;L++){let q=rt[L],lt=Math.floor(q.start/4),st=Math.ceil(q.count/4),at=lt%b.width,At=Math.floor(lt/b.width),Wt=st,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,at),e.pixelStorei(r.UNPACK_SKIP_ROWS,At),e.texSubImage2D(r.TEXTURE_2D,0,at,At,Wt,nt,B,it,b.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Z),e.pixelStorei(r.UNPACK_SKIP_PIXELS,$),e.pixelStorei(r.UNPACK_SKIP_ROWS,ot)}}function Ue(A,b,B){let it=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=r.TEXTURE_3D);let j=he(A,b),rt=b.source;e.bindTexture(it,A.__webglTexture,r.TEXTURE0+B);let ht=i.get(rt);if(rt.version!==ht.__version||j===!0){if(e.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let nt=qt.getPrimaries(qt.workingColorSpace),Ct=b.colorSpace===pn?null:qt.getPrimaries(b.colorSpace),Vt=b.colorSpace===pn||nt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let $=_(b.image,!1,n.maxTextureSize);$=Nt(b,$);let ot=s.convert(b.format,b.colorSpace),L=s.convert(b.type),J=E(b.internalFormat,ot,L,b.normalized,b.colorSpace,b.isVideoTexture);ae(it,b);let q,lt=b.mipmaps,st=b.isVideoTexture!==!0,at=ht.__version===void 0||j===!0,At=rt.dataReady,Wt=S(b,$);if(b.isDepthTexture)J=x(b.format===fn,b.type),at&&(st?e.texStorage2D(r.TEXTURE_2D,1,J,$.width,$.height):e.texImage2D(r.TEXTURE_2D,0,J,$.width,$.height,0,ot,L,null));else if(b.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(r.TEXTURE_2D,Wt,J,lt[0].width,lt[0].height);for(let nt=0,Ct=lt.length;nt<Ct;nt++)q=lt[nt],st?At&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,q.width,q.height,ot,L,q.data):e.texImage2D(r.TEXTURE_2D,nt,J,q.width,q.height,0,ot,L,q.data);b.generateMipmaps=!1}else st?(at&&e.texStorage2D(r.TEXTURE_2D,Wt,J,$.width,$.height),At&&We(b,$,ot,L)):e.texImage2D(r.TEXTURE_2D,0,J,$.width,$.height,0,ot,L,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,J,lt[0].width,lt[0].height,$.depth);for(let nt=0,Ct=lt.length;nt<Ct;nt++)if(q=lt[nt],b.format!==yi)if(ot!==null)if(st){if(At)if(b.layerUpdates.size>0){let Vt=hc(q.width,q.height,b.format,b.type);for(let mt of b.layerUpdates){let oe=q.data.subarray(mt*Vt/q.data.BYTES_PER_ELEMENT,(mt+1)*Vt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,mt,q.width,q.height,1,ot,oe)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,$.depth,ot,q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,J,q.width,q.height,$.depth,0,q.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?At&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,$.depth,ot,L,q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,J,q.width,q.height,$.depth,0,ot,L,q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{st&&at&&e.texStorage2D(r.TEXTURE_2D,Wt,J,lt[0].width,lt[0].height);for(let nt=0,Ct=lt.length;nt<Ct;nt++)q=lt[nt],b.format!==yi?ot!==null?st?At&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,q.width,q.height,ot,q.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,J,q.width,q.height,0,q.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?At&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,q.width,q.height,ot,L,q.data):e.texImage2D(r.TEXTURE_2D,nt,J,q.width,q.height,0,ot,L,q.data)}else if(b.isDataArrayTexture)if(st){if(at&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,J,$.width,$.height,$.depth),At)if(b.layerUpdates.size>0){let nt=hc($.width,$.height,b.format,b.type);for(let Ct of b.layerUpdates){let Vt=$.data.subarray(Ct*nt/$.data.BYTES_PER_ELEMENT,(Ct+1)*nt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ct,$.width,$.height,1,ot,L,Vt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ot,L,$.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,J,$.width,$.height,$.depth,0,ot,L,$.data);else if(b.isData3DTexture)st?(at&&e.texStorage3D(r.TEXTURE_3D,Wt,J,$.width,$.height,$.depth),At&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ot,L,$.data)):e.texImage3D(r.TEXTURE_3D,0,J,$.width,$.height,$.depth,0,ot,L,$.data);else if(b.isFramebufferTexture){if(at)if(st)e.texStorage2D(r.TEXTURE_2D,Wt,J,$.width,$.height);else{let nt=$.width,Ct=$.height;for(let Vt=0;Vt<Wt;Vt++)e.texImage2D(r.TEXTURE_2D,Vt,J,nt,Ct,0,ot,L,null),nt>>=1,Ct>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),$.parentNode!==nt){nt.appendChild($),h.add(b),nt.onpaint=Ct=>{let Vt=Ct.changedElements;for(let mt of h)Vt.includes(mt.image)&&(mt.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,$);else{let Vt=r.RGBA,mt=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Vt,mt,oe,$)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){let nt=Ht(lt[0]);e.texStorage2D(r.TEXTURE_2D,Wt,J,nt.width,nt.height)}for(let nt=0,Ct=lt.length;nt<Ct;nt++)q=lt[nt],st?At&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ot,L,q):e.texImage2D(r.TEXTURE_2D,nt,J,ot,L,q);b.generateMipmaps=!1}else if(st){if(at){let nt=Ht($);e.texStorage2D(r.TEXTURE_2D,Wt,J,nt.width,nt.height)}At&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,L,$)}else e.texImage2D(r.TEXTURE_2D,0,J,ot,L,$);T(b)&&b.mipmapsAutoUpdate===!0&&M(it),ht.__version=rt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ci(A,b,B){if(b.image.length!==6)return;let it=he(A,b),j=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);let rt=i.get(j);if(j.version!==rt.__version||it===!0){e.activeTexture(r.TEXTURE0+B);let ht=qt.getPrimaries(qt.workingColorSpace),Z=b.colorSpace===pn?null:qt.getPrimaries(b.colorSpace),$=b.colorSpace===pn||ht===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ot=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,J=[];for(let mt=0;mt<6;mt++)!ot&&!L?J[mt]=_(b.image[mt],!0,n.maxCubemapSize):J[mt]=L?b.image[mt].image:b.image[mt],J[mt]=Nt(b,J[mt]);let q=J[0],lt=s.convert(b.format,b.colorSpace),st=s.convert(b.type),at=E(b.internalFormat,lt,st,b.normalized,b.colorSpace),At=b.isVideoTexture!==!0,Wt=rt.__version===void 0||it===!0,nt=j.dataReady,Ct=S(b,q);ae(r.TEXTURE_CUBE_MAP,b);let Vt;if(b.isDepthTexture){if(at=x(b.format===fn,b.type),Wt)if(At)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,at,q.width,q.height);else for(let mt=0;mt<6;mt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,q.width,q.height,0,lt,st,null)}else if(ot){At&&Wt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,at,q.width,q.height);for(let mt=0;mt<6;mt++){Vt=J[mt].mipmaps;for(let oe=0;oe<Vt.length;oe++){let ke=Vt[oe];b.format!==yi?lt!==null?At?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe,0,0,ke.width,ke.height,lt,ke.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe,at,ke.width,ke.height,0,ke.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe,0,0,ke.width,ke.height,lt,st,ke.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe,at,ke.width,ke.height,0,lt,st,ke.data)}}}else{if(Vt=b.mipmaps,At&&Wt){Vt.length>0&&Ct++;let mt=Ht(J[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,at,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(L){At?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,J[mt].width,J[mt].height,lt,st,J[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,J[mt].width,J[mt].height,0,lt,st,J[mt].data);for(let oe=0;oe<Vt.length;oe++){let mn=Vt[oe].image[mt].image;At?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe+1,0,0,mn.width,mn.height,lt,st,mn.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe+1,at,mn.width,mn.height,0,lt,st,mn.data)}}else{At?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,lt,st,J[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,lt,st,J[mt]);for(let oe=0;oe<Vt.length;oe++){let ke=Vt[oe];At?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe+1,0,0,lt,st,ke.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,oe+1,at,lt,st,ke.image[mt])}}}T(b)&&b.mipmapsAutoUpdate===!0&&M(r.TEXTURE_CUBE_MAP),rt.__version=j.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ve(A,b,B,it,j,rt){let ht=s.convert(B.format,B.colorSpace),Z=s.convert(B.type),$=E(B.internalFormat,ht,Z,B.normalized,B.colorSpace),ot=i.get(b),L=i.get(B);if(L.__renderTarget=b,!ot.__hasExternalTextures){let J=Math.max(1,b.width>>rt),q=Math.max(1,b.height>>rt);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,rt,$,J,q,b.depth,0,ht,Z,null):e.texImage2D(j,rt,$,J,q,0,ht,Z,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,j,L.__webglTexture,0,ge(b)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,j,L.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bi(A,b,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let it=b.depthTexture,j=it&&it.isDepthTexture?it.type:null,rt=x(b.stencilBuffer,j),ht=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge(b),rt,b.width,b.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge(b),rt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,rt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,A)}else{let it=b.textures;for(let j=0;j<it.length;j++){let rt=it[j],ht=s.convert(rt.format,rt.colorSpace),Z=s.convert(rt.type),$=E(rt.internalFormat,ht,Z,rt.normalized,rt.colorSpace);pt(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge(b),$,b.width,b.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge(b),$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(A,b,B){let it=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(b.depthTexture);j.__renderTarget=b;let rt=it?b.depthTexture.image[0]:b.depthTexture.image;(!j.__webglTexture||rt.width!==b.width||rt.height!==b.height)&&(rt.width=b.width,rt.height=b.height,b.depthTexture.needsUpdate=!0),it?ft(b.depthTexture,0):dt(b.depthTexture,0);let ht=j.__webglTexture,Z=ge(b),$=it?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,ot=b.depthTexture.format===fn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===on)pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,$,ht,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,ot,$,ht,0);else if(b.depthTexture.format===fn)pt(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,$,ht,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,ot,$,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vi(A){let b=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let it=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",j)};it.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=it}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)Be(b.__webglFramebuffer[it],A,it);else A.texture.mipmaps.length>0?Be(b.__webglFramebuffer[0],A,0):Be(b.__webglFramebuffer,A,0);else if(B){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=r.createRenderbuffer(),Bi(b.__webglDepthbuffer[it],A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Bi(b.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mi(A,b,B){let it=i.get(A);b!==void 0&&ve(it.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&vi(A)}function Si(A){let b=A.texture,B=i.get(A),it=i.get(b);A.addEventListener("dispose",U),P(A);let j=A.textures,rt=A.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=b.version,a.memory.textures++),rt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let $=0;$<b.mipmaps.length;$++)B.__webglFramebuffer[Z][$]=r.createFramebuffer()}else B.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(b.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)B.__webglFramebuffer[Z]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ht)for(let Z=0,$=j.length;Z<$;Z++){let ot=i.get(j[Z]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&pt(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let $=j[Z];B.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ot=s.convert($.format,$.colorSpace),L=s.convert($.type),J=E($.internalFormat,ot,L,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),q=ge(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,q,J,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Bi(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),ae(r.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)ve(B.__webglFramebuffer[Z][$],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else ve(B.__webglFramebuffer[Z],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(b)?M(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let Z=0,$=j.length;Z<$;Z++){let ot=j[Z],L=i.get(ot),J=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,L.__webglTexture),ae(J,ot),ve(B.__webglFramebuffer,A,ot,r.COLOR_ATTACHMENT0+Z,J,0),T(ot)&&M(J)}e.unbindTexture()}else{let Z=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Z,it.__webglTexture),ae(Z,b),b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)ve(B.__webglFramebuffer[$],A,b,r.COLOR_ATTACHMENT0,Z,$);else ve(B.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,Z,0);T(b)?M(Z):b.mipmaps.length>0&&r.texParameteri(Z,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&vi(A)}function F(A){let b=A.textures;for(let B=0,it=b.length;B<it;B++){let j=b[B];if(T(j)&&j.mipmapsAutoUpdate===!0){let rt=v(A),ht=i.get(j).__webglTexture;e.bindTexture(rt,ht),M(rt),e.unbindTexture()}}}let bi=[];function me(A){if(A.samples>0){if(pt(A)===!1){let b=A.textures,B=A.width,it=A.height,j=r.COLOR_BUFFER_BIT,rt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=i.get(A),Z=b.length>1;if(Z)for(let ot=0;ot<b.length;ot++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<b.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),Z){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let L=i.get(b[ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,B,it,0,0,B,it,j,r.NEAREST),l===!0&&(bi.length=0,bi.push(r.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&bi.push(rt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bi))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Z)for(let ot=0;ot<b.length;ot++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let L=i.get(b[ot]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,L,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ge(A){return Math.min(n.maxSamples,A.samples)}function pt(A){let b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(A){let b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Nt(A,b){let B=A.colorSpace,it=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Dn&&B!==pn&&(qt.getTransfer(B)===se?(it!==yi||j!==di)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",B)),b}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=K,this.getTextureUnits=Q,this.setTextureUnits=vt,this.setTexture2D=dt,this.setTexture2DArray=yt,this.setTexture3D=Rt,this.setTextureCube=ft,this.rebindTextures=Mi,this.setupRenderTarget=Si,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=vi,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pt,this.dispose=H}function Fg(r,t){function e(i,n=pn){let s,a=qt.getTransfer(n);if(i===di)return r.UNSIGNED_BYTE;if(i===Ha)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ga)return r.UNSIGNED_SHORT_5_5_5_1;if(i===jl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Ql)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jl)return r.BYTE;if(i===Kl)return r.SHORT;if(i===Ss)return r.UNSIGNED_SHORT;if(i===ka)return r.INT;if(i===Di)return r.UNSIGNED_INT;if(i===Ti)return r.FLOAT;if(i===Ui)return r.HALF_FLOAT;if(i===tc)return r.ALPHA;if(i===ec)return r.RGB;if(i===yi)return r.RGBA;if(i===on)return r.DEPTH_COMPONENT;if(i===fn)return r.DEPTH_STENCIL;if(i===Va)return r.RED;if(i===Wa)return r.RED_INTEGER;if(i===Tn)return r.RG;if(i===Xa)return r.RG_INTEGER;if(i===qa)return r.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===Za||i===$a||i===Ja)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ka||i===ja||i===Qa||i===to||i===eo||i===xr||i===io)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ka||i===ja)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===to)return s.COMPRESSED_R11_EAC;if(i===eo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xr)return s.COMPRESSED_RG11_EAC;if(i===io)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===no||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===xo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===no)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===so)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ro)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ao)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===co)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ho)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===po)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===go)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===yo||i===vo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===_o)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mo||i===So||i===_r||i===bo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_r)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Se({vertexShader:zg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Gi{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new Ec,m={},_=e.getContextAttributes(),T=null,M=null,v=[],E=[],x=new Bt,S=null,P=null,R=new ni;R.viewport=new xe;let N=new ni;N.viewport=new xe;let U=[R,N],z=new Da,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let dt=v[Y];return dt===void 0&&(dt=new ps,v[Y]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Y){let dt=v[Y];return dt===void 0&&(dt=new ps,v[Y]=dt),dt.getGripSpace()},this.getHand=function(Y){let dt=v[Y];return dt===void 0&&(dt=new ps,v[Y]=dt),dt.getHandSpace()};function G(Y){let dt=E.indexOf(Y.inputSource);if(dt===-1)return;let yt=v[dt];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<v.length;Y++){let dt=E[Y];dt!==null&&(E[Y]=null,v[Y].disconnect(dt))}I=null,H=null,g.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(T),f=null,d=null,h=null,n=null,M=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(n,e)),h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",V),n.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=_.stencil?fn:on,Rt=_.stencil?kn:Di);let zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(zt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new xi(d.textureWidth,d.textureHeight,{format:yi,type:di,depthTexture:new hn(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let yt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,yt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new xi(f.framebufferWidth,f.framebufferHeight,{format:yi,type:di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ft.setContext(n),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(Y){for(let dt=0;dt<Y.removed.length;dt++){let yt=Y.removed[dt],Rt=E.indexOf(yt);Rt>=0&&(E[Rt]=null,v[Rt].disconnect(yt))}for(let dt=0;dt<Y.added.length;dt++){let yt=Y.added[dt],Rt=E.indexOf(yt);if(Rt===-1){for(let zt=0;zt<v.length;zt++)if(zt>=E.length){E.push(yt),Rt=zt;break}else if(E[zt]===null){E[zt]=yt,Rt=zt;break}if(Rt===-1)break}let ft=v[Rt];ft&&ft.connect(yt)}}function W(Y,dt){dt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(dt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let dt=Y.near,yt=Y.far;g.texture!==null&&(g.depthNear>0&&(dt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),z.near=N.near=R.near=dt,z.far=N.far=R.far=yt,(I!==z.near||H!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,H=z.far),z.layers.mask=Y.layers.mask|6,R.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Rt=Y.parent,ft=z.cameras;W(z,Rt);for(let zt=0;zt<ft.length;zt++)W(ft[zt],Rt);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),K(Y,z,Rt)};function K(Y,dt,yt){yt===null?Y.matrix.copy(dt.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(dt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(dt.projectionMatrix),Y.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Y){return m[Y]};let Q=null;function vt(Y,dt){if(u=dt.getViewerPose(c||a),p=dt,u!==null){let yt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Rt=!1;yt.length!==z.cameras.length&&(z.cameras.length=0,Rt=!0);for(let It=0;It<yt.length;It++){let ae=yt[It],he=null;if(f!==null)he=f.getViewport(ae);else{let We=h.getViewSubImage(d,ae);he=We.viewport,It===0&&(t.setRenderTargetTextures(M,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(M))}let $t=U[It];$t===void 0&&($t=new ni,$t.layers.enable(It),$t.viewport=new xe,U[It]=$t),$t.matrix.fromArray(ae.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ae.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(he.x,he.y,he.width,he.height),It===0&&(z.matrix.copy($t.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Rt===!0&&z.cameras.push($t)}let ft=n.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let It=h.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&g.init(It,n.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let It=0;It<yt.length;It++){let ae=yt[It].camera;if(ae){let he=m[ae];he||(he=new ir,m[ae]=he);let $t=h.getCameraImage(ae);he.sourceTexture=$t}}}}for(let yt=0;yt<v.length;yt++){let Rt=E[yt],ft=v[yt];Rt!==null&&ft!==void 0&&ft.update(Rt,dt,c||a)}Q&&Q(Y,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),p=null}let Ft=new Ou;Ft.setAnimationLoop(vt),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},Bg=new Ut,Zu=new kt;Zu.set(-1,0,0,0,1,0,0,0,1);function kg(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,oc(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),T=_.envMap,M=_.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Zu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Hg(r,t,e,i){let n={},s={};function a(_,T){let M=T.program;i.uniformBlockBinding(_,M,n[_.id])}function o(_,T){let M=n[_.id];M===void 0&&(p(_),M=l(_),n[_.id]=M,_.addEventListener("dispose",g));let v=T.program;i.updateUBOMapping(_,v);let E=t.render.frame;s[_.id]!==E&&(c(_),s[_.id]=E)}function l(_){let T=r.createBuffer(),M=_.__size,v=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,M,v),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(_){let T=n[_.id],M=_.uniforms,v=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let E=0,x=M.length;E<x;E++){let S=M[E];if(Array.isArray(S))for(let P=0,R=S.length;P<R;P++)u(S[P],E,P,v);else u(S,E,0,v)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(_,T,M,v){if(d(_,T,M,v)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let R=x[P],N=y(R,!0);h(R,_.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,_.__data)}}function h(_,T,M){typeof _=="number"||typeof _=="boolean"?T[M]=_:_.isMatrix3?(T[M]=_.elements[0],T[M+1]=_.elements[1],T[M+2]=_.elements[2],T[M+3]=0,T[M+4]=_.elements[3],T[M+5]=_.elements[4],T[M+6]=_.elements[5],T[M+7]=0,T[M+8]=_.elements[6],T[M+9]=_.elements[7],T[M+10]=_.elements[8],T[M+11]=0):ArrayBuffer.isView(_)?T.set(_.subarray(0,T.length-M),M):_.toArray(T,M)}function d(_,T,M,v){let E=_.value,x=T+"_"+M;if(Array.isArray(E)){v[x]===void 0&&(v[x]=[]);let S=v[x],P=!1;for(let R=0;R<E.length;R++)f(E[R],S,R)===!0&&(P=!0);return P}return f(E,v,x)}function f(_,T,M){if(T[M]===void 0)return typeof _=="number"||typeof _=="boolean"?T[M]=_:ArrayBuffer.isView(_)?T[M]=_.slice():T[M]=_.clone(),!0;{let v=T[M];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return T[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(v.equals(_)===!1)return v.copy(_),!0}}return!1}function p(_){let T=_.uniforms,M=0,v=16;for(let x=0,S=T.length;x<S;x++){let P=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,N=P.length;R<N;R++){let U=P[R],z=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(T[x])||Array.isArray(U.value),H=M;for(let V=0,tt=z.length;V<tt;V++){let W=z[V],K=y(W,I),Q=M%v,vt=Q%K.boundary,Ft=Q+vt;M+=vt,Ft!==0&&v-Ft<K.storage&&(M+=v-Ft),V===0&&(H=M),M+=K.storage}let G=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new G((M-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}let E=M%v;return E>0&&(M+=v-E),_.__size=M,_.__cache={},this}function y(_,T){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",_),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(_){let T=_.target;T.removeEventListener("dispose",g),r.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function m(){for(let _ in n)r.deleteBuffer(n[_]);n={},s={}}return{bind:a,update:o,dispose:m}}var Gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function Vg(){return $i===null&&($i=new Un(Gg,16,16,Tn,Ui),$i.name="DFG_LUT",$i.minFilter=si,$i.magFilter=si,$i.wrapS=Hi,$i.wrapT=Hi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var Co=class{constructor(t={}){let{canvas:e=ru(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=di}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=f,g=new Set([qa,Xa,Wa]),m=new Set([di,Di,Ss,kn,Ha,Ga]),_=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,E=null,x=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,U=null,z=null,I=null,H=null;this._outputColorSpace=gi;let G=0,V=0,tt=null,W=-1,K=null,Q=new xe,vt=new xe,Ft=null,Y=new Et(0),dt=0,yt=e.width,Rt=e.height,ft=1,zt=null,ye=null,It=new xe(0,0,yt,Rt),ae=new xe(0,0,yt,Rt),he=!1,$t=new Sn,We=new _a,Ue=!1,ci=!1,ve=new Ut,Bi=new C,Be=new xe,vi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mi=!1;function Si(){return tt===null?ft:1}let F=i;function bi(w,D){return e.getContext(w,D)}let me,ge,pt,Fe,Nt,Ht,A,b,B,it,j,rt,ht,Z,$,ot,L,J,q,lt,st,at,At;try{let w={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),F===null){let D="webgl2";if(F=bi(D,w),F===null)throw bi(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(w){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ot("WebGLRenderer: "+w.message),w}function Wt(){me=new t0(F),me.init(),st=new Fg(F,me),ge=new Vm(F,me,t,st),pt=new Dg(F,me),ge.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),z=F.createFramebuffer(),I=F.createFramebuffer(),H=F.createFramebuffer(),Fe=new n0(F),Nt=new vg,Ht=new Ug(F,me,pt,Nt,ge,st,Fe),A=new Qm(R),b=new rf(F),at=new Hm(F,b),B=new e0(F,b,Fe,at),it=new r0(F,B,b,at,Fe),J=new s0(F,ge,Ht),$=new Wm(Nt),j=new yg(R,A,me,ge,at,$),rt=new kg(R,Nt),ht=new Sg,Z=new Rg(me),L=new km(R,A,pt,it,p,l),ot=new Ng(R,it,ge),At=new Hg(F,Fe,ge,pt),q=new Gm(F,me,Fe),lt=new i0(F,me,Fe),Fe.programs=j.programs,R.capabilities=ge,R.extensions=me,R.properties=Nt,R.renderLists=ht,R.shadowMap=ot,R.state=pt,R.info=Fe}y!==di&&(P=new o0(y,e.width,e.height,o,n,s));let nt=new wc(R,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(w){w!==void 0&&(ft=w,this.setSize(yt,Rt,!1))},this.getSize=function(w){return w.set(yt,Rt)},this.setSize=function(w,D,X=!0){if(nt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=w,Rt=D,e.width=Math.floor(w*ft),e.height=Math.floor(D*ft),X===!0&&(e.style.width=w+"px",e.style.height=D+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(yt*ft,Rt*ft).floor()},this.setDrawingBufferSize=function(w,D,X){yt=w,Rt=D,ft=X,e.width=Math.floor(w*X),e.height=Math.floor(D*X),this.setViewport(0,0,w,D)},this.setEffects=function(w){if(y===di){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let D=0;D<w.length;D++)if(w[D].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(It)},this.setViewport=function(w,D,X,O){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,D,X,O),pt.viewport(Q.copy(It).multiplyScalar(Si()).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,D,X,O){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,D,X,O),pt.scissor(vt.copy(ae).multiplyScalar(Si()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(w){pt.setScissorTest(he=w)},this.setOpaqueSort=function(w){zt=w},this.setTransparentSort=function(w){ye=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,D=!0,X=!0){let O=0;if(w){let k=!1;if(tt!==null){let ut=tt.texture.format;k=g.has(ut)}if(k){let ut=tt.texture.type,Mt=m.has(ut),ct=L.getClearColor(),xt=L.getClearAlpha(),wt=ct.r,Gt=ct.g,Jt=ct.b;Mt?(_[0]=wt,_[1]=Gt,_[2]=Jt,_[3]=xt,F.clearBufferuiv(F.COLOR,0,_)):(T[0]=wt,T[1]=Gt,T[2]=Jt,T[3]=xt,F.clearBufferiv(F.COLOR,0,T))}else O|=F.COLOR_BUFFER_BIT}D&&(O|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),L.dispose(),ht.dispose(),Z.dispose(),Ht.dispose(),Nt.dispose(),A.dispose(),it.dispose(),B.dispose(),at.dispose(),At.dispose(),j.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",kc),nt.removeEventListener("sessionend",Hc),An.stop()};function Ct(w){w.preventDefault(),Vs("WebGLRenderer: Context Lost."),N=!0}function Vt(){Vs("WebGLRenderer: Context Restored."),N=!1;let w=Fe.autoReset,D=ot.enabled,X=ot.autoUpdate,O=ot.needsUpdate,k=ot.type;Wt(),Fe.autoReset=w,ot.enabled=D,ot.autoUpdate=X,ot.needsUpdate=O,ot.type=k}function mt(w){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){let D=w.target;D.removeEventListener("dispose",oe),ke(D)}function ke(w){mn(w),Nt.remove(w)}function mn(w){let D=Nt.get(w).programs;D!==void 0&&(D.forEach(function(X){j.releaseProgram(X)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,X,O,k,ut){D===null&&(D=vi);let Mt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ct=gd(w,D,X,O,k);pt.setMaterial(O,Mt);let xt=X.index,wt=1;if(O.wireframe===!0){if(xt=B.getWireframeAttribute(X),xt===void 0)return;wt=2}let Gt=X.drawRange,Jt=X.attributes.position,St=Gt.start*wt,Kt=(Gt.start+Gt.count)*wt;ut!==null&&(St=Math.max(St,ut.start*wt),Kt=Math.min(Kt,(ut.start+ut.count)*wt)),xt!==null?(St=Math.max(St,0),Kt=Math.min(Kt,xt.count)):Jt!=null&&(St=Math.max(St,0),Kt=Math.min(Kt,Jt.count));let Pe=Kt-St;if(Pe<0||Pe===1/0)return;at.setup(k,O,ct,X,xt);let de,ue=q;if(xt!==null&&(de=b.get(xt),ue=lt,ue.setIndex(de)),k.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*Si()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(k.isLine){let $e=O.linewidth;$e===void 0&&($e=1),pt.setLineWidth($e*Si()),k.isLineSegments?ue.setMode(F.LINES):k.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else k.isPoints?ue.setMode(F.POINTS):k.isSprite&&ue.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(me.get("WEBGL_multi_draw"))ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let $e=k._multiDrawStarts,bt=k._multiDrawCounts,ei=k._multiDrawCount,ie=xt?b.get(xt).bytesPerElement:1,Rn=Nt.get(O).currentProgram.getUniforms();for(let Je=0;Je<ei;Je++)Rn.setValue(F,"_gl_DrawID",Je),ue.render($e[Je]/ie,bt[Je])}else if(k.isInstancedMesh)ue.renderInstances(St,Pe,k.count);else if(X.isInstancedBufferGeometry){let $e=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,$e);ue.renderInstances(St,Pe,bt)}else ue.render(St,Pe)};function Bc(w,D,X,O){U!==null&&w.isNodeMaterial&&U.setObject(O,w),Ue===!0&&$.setState(w,X,!1),w.transparent===!0&&w.side===Le&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,Cs(w,D,O),w.side=Yi,w.needsUpdate=!0,Cs(w,D,O),w.side=Le):Cs(w,D,O)}this.compile=function(w,D,X=null){X===null&&(X=w),U!==null&&U.renderStart(w,D,X),E=Z.get(X),E.init(D),S.push(E),X.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),w!==X&&w.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ci=this.localClippingEnabled,Ue=$.init(this.clippingPlanes,ci),Ue===!0&&$.setGlobalState(this.clippingPlanes,D),U!==null&&ot.render(E.state.shadowsArray,X,D);let O=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ut=k.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){let ct=ut[Mt];Bc(ct,X,D,k),O.add(ct)}else Bc(ut,X,D,k),O.add(ut)}),E=S.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(w,D,X=null){let O=this.compile(w,D,X);return new Promise(k=>{function ut(){if(O.forEach(function(Mt){let xt=Nt.get(Mt).currentProgram;(xt===void 0||xt.isReady())&&O.delete(Mt)}),O.size===0){k(w);return}setTimeout(ut,10)}me.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let sl=null;function pd(w){sl&&sl(w)}function kc(){An.stop()}function Hc(){An.start()}let An=new Ou;An.setAnimationLoop(pd),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(w){sl=w,nt.setAnimationLoop(w),w===null?An.stop():An.start()},nt.addEventListener("sessionstart",kc),nt.addEventListener("sessionend",Hc),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(w,D);let X=nt.enabled===!0&&nt.isPresenting===!0,O=P!==null&&(tt===null||X)&&P.begin(R,tt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,D,tt),E=Z.get(w,S.length),E.init(D),E.state.textureUnits=Ht.getTextureUnits(),S.push(E),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?We.setFromArrayCamera(D):$t.setFromProjectionMatrix(ve,wi,D.reversedDepth),ci=this.localClippingEnabled,Ue=$.init(this.clippingPlanes,ci),v=ht.get(w,x.length),v.init(),x.push(v),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Mt=R.xr.getDepthSensingMesh();Mt!==null&&rl(Mt,D,-1/0,R.sortObjects)}rl(w,D,0,R.sortObjects),v.finish(),U!==null&&U.updateLights(E.state.lightsArray),R.sortObjects===!0&&v.sort(zt,ye),Mi=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Mi&&L.addToRenderList(v,w),this.info.autoReset===!0&&this.info.reset(),Ue===!0&&$.beginShadows();let k=E.state.shadowsArray;if(ot.render(k,w,D),Ue===!0&&$.endShadows(),(O&&P.hasRenderPass())===!1){let Mt=v.opaque,ct=v.transmissive;if(E.setupLights(),D.isArrayCamera){let xt=D.cameras;if(ct.length>0)for(let wt=0,Gt=xt.length;wt<Gt;wt++){let Jt=xt[wt];Vc(Mt,ct,w,Jt)}Mi&&L.render(w);for(let wt=0,Gt=xt.length;wt<Gt;wt++){let Jt=xt[wt];Gc(v,w,Jt,Jt.viewport)}}else ct.length>0&&Vc(Mt,ct,w,D),Mi&&L.render(w),Gc(v,w,D)}tt!==null&&V===0&&(Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt)),O&&P.end(R),w.isScene===!0&&w.onAfterRender(R,w,D),at.resetDefaultState(),W=-1,K=null,S.pop(),S.length>0?(E=S[S.length-1],Ht.setTextureUnits(E.state.textureUnits),Ue===!0&&$.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,U!==null&&U.renderEnd()};function rl(w,D,X,O){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Mt=D.isArrayCamera?We:$t;if(!w.frustumCulled||w.intersectsFrustum(Mt)){O&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);let ct=it.update(w),xt=w.material;xt.visible&&v.push(w,ct,xt,X,Be.z,null,D)}}else if(w.isMesh||w.isLine||w.isPoints){let Mt=D.isArrayCamera?We:$t;if(!w.frustumCulled||w.intersectsFrustum(Mt)){let ct=it.update(w),xt=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Be.copy(ct.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(xt)){let wt=ct.groups;for(let Gt=0,Jt=wt.length;Gt<Jt;Gt++){let St=wt[Gt],Kt=xt[St.materialIndex];Kt&&Kt.visible&&v.push(w,ct,Kt,X,Be.z,St,D)}}else xt.visible&&v.push(w,ct,xt,X,Be.z,null,D)}}}let ut=w.children;for(let Mt=0,ct=ut.length;Mt<ct;Mt++)rl(ut[Mt],D,X,O)}function Gc(w,D,X,O){let{opaque:k,transmissive:ut,transparent:Mt}=w;E.setupLightsView(X),Ue===!0&&$.setGlobalState(R.clippingPlanes,X),O&&pt.viewport(Q.copy(O)),k.length>0&&Ar(k,D,X),ut.length>0&&Ar(ut,D,X),Mt.length>0&&Ar(Mt,D,X),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Vc(w,D,X,O){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){let St=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new xi(1,1,{generateMipmaps:!0,type:St?Ui:di,minFilter:dn,samples:Math.max(4,ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let ut=E.state.transmissionRenderTarget[O.id],Mt=O.viewport||Q;ut.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);let ct=R.getRenderTarget(),xt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(ut),R.getClearColor(Y),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),Mi&&L.render(X);let Gt=R.toneMapping;R.toneMapping=Zi;let Jt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),Ue===!0&&$.setGlobalState(R.clippingPlanes,O),Ar(w,X,O),Ht.updateMultisampleRenderTarget(ut),Ht.updateRenderTargetMipmap(ut),me.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Kt=0,Pe=D.length;Kt<Pe;Kt++){let de=D[Kt],{object:ue,geometry:$e,material:bt,group:ei}=de;if(bt.side===Le&&ue.layers.test(O.layers)){let ie=bt.side;bt.side=qe,bt.needsUpdate=!0,Wc(ue,X,O,$e,bt,ei),bt.side=ie,bt.needsUpdate=!0,St=!0}}St===!0&&(Ht.updateMultisampleRenderTarget(ut),Ht.updateRenderTargetMipmap(ut))}R.setRenderTarget(ct,xt,wt),R.setClearColor(Y,dt),Jt!==void 0&&(O.viewport=Jt),R.toneMapping=Gt}function Ar(w,D,X){let O=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ut=w.length;k<ut;k++){let Mt=w[k],{object:ct,geometry:xt,group:wt}=Mt,Gt=Mt.material;Gt.allowOverride===!0&&O!==null&&(Gt=O),ct.layers.test(X.layers)&&Wc(ct,D,X,xt,Gt,wt)}}function Wc(w,D,X,O,k,ut){U!==null&&k.isNodeMaterial&&U.setObject(w,k),w.onBeforeRender(R,D,X,O,k,ut),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(R,D,X,O,w,ut),k.transparent===!0&&k.side===Le&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,R.renderBufferDirect(X,D,O,k,w,ut),k.side=Yi,k.needsUpdate=!0,R.renderBufferDirect(X,D,O,k,w,ut),k.side=Le):R.renderBufferDirect(X,D,O,k,w,ut),w.onAfterRender(R,D,X,O,k,ut)}function Xc(w){let D=0;for(let X of w)X.texture!==null&&D++;return D}function Cs(w,D,X){D.isScene!==!0&&(D=vi);let O=Nt.get(w),k=E.state.lights,ut=E.state.shadowsArray,Mt=k.state.version,ct=j.getParameters(w,k.state,ut,D,X,E.state.lightProbeGridArray),xt=j.getProgramCacheKey(ct),wt=O.programs;O.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;let Gt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;O.envMap=A.get(w.envMap||O.environment,Gt),O.envMapRotation=O.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,wt===void 0&&(w.addEventListener("dispose",oe),wt=new Map,O.programs=wt,O.programVariants=new Map);let Jt=wt.get(xt);if(Jt!==void 0){if(O.currentProgram===Jt&&O.lightsStateVersion===Mt)return Yc(w,ct),Jt}else ct.uniforms=j.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,X,ct),w.onBeforeCompile(ct,R),Jt=j.acquireProgram(ct,xt),wt.set(xt,Jt),O.uniforms=ct.uniforms;let St=O.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=$.uniform),Yc(w,ct),O.needsLights=_d(w),O.lightsStateVersion=Mt,O.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.sunLights.value=k.state.sun,St.sunLightShadows.value=k.state.sunShadow,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.sunShadowMatrix.value=k.state.sunShadowMatrix,St.sunShadowCascade.value=k.state.sunShadowCascade,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=Xc(E.state.lightProbeGridArray),O.currentProgram=Jt,O.uniformsList=null,Jt}function md(w,D,X,O,k){let ut=Nt.get(w),Mt=ut.currentProgram.id+","+O+","+k,ct=ut.programVariants.get(Mt);return ct===void 0?(ct=Cs(w,D,X),ut.programVariants.set(Mt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=O,ut.toneMapping=k),ct}function qc(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=bs.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Yc(w,D){let X=Nt.get(w);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function gd(w,D,X,O,k){D.isScene!==!0&&(D=vi),Ht.resetTextureUnits();let ut=D.fog,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,ct=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:qt.workingColorSpace,xt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,wt=A.get(O.envMap||Mt,xt),Gt=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Jt=!!X.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),St=!!X.morphAttributes.position,Kt=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color,de=Zi;O.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(de=R.toneMapping);let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=ue!==void 0?ue.length:0,bt=Nt.get(O),ei=E.state.lights;if(Ue===!0&&(ci===!0||w!==K)){let Me=w===K&&O.id===W;$.setState(O,w,Me)}let ie=!1,Rn=!1;O.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==ei.state.version||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==wt||O.fog===!0&&bt.fog!==ut||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==$.numPlanes||bt.numIntersection!==$.numIntersection)||bt.vertexAlphas!==Gt||bt.vertexTangents!==Jt||bt.morphTargets!==St||bt.morphNormals!==Kt||bt.morphColors!==Pe||bt.morphTargetsCount!==$e||bt.numLightProbeGrids!==Xc(E.state.lightProbeGridArray)?ie=!0:(bt.outputColorSpace!==ct||bt.toneMapping!==de)&&(Rn=!0):(ie=!0,bt.__version=O.version);let Je=bt.currentProgram;(ie===!0||Rn===!0)&&(Je=Rn===!0?md(O,D,k,ct,de):Cs(O,D,k),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Je,bt));let Rr=!1,gn=!1,Cn=!1,ee=Je.getUniforms(),Xe=bt.uniforms;if(pt.useProgram(Je.program)&&(Rr=!0,gn=!0,Cn=!0),O.id!==W&&(W=O.id,gn=!0),Rr||K!==w){pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ee.setValue(F,"projectionMatrix",w.projectionMatrix),ee.setValue(F,"viewMatrix",w.matrixWorldInverse);let He=ee.map.cameraPosition;He!==void 0&&He.setValue(F,Bi.setFromMatrixPosition(w.matrixWorld)),ge.logarithmicDepthBuffer&&ee.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ee.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,gn=!0,Cn=!0)}if(bt.needsLights&&(ei.state.sunShadowMap.length>0&&ee.setValue(F,"sunShadowMap",ei.state.sunShadowMap,Ht),ei.state.directionalShadowMap.length>0&&ee.setValue(F,"directionalShadowMap",ei.state.directionalShadowMap,Ht),ei.state.spotShadowMap.length>0&&ee.setValue(F,"spotShadowMap",ei.state.spotShadowMap,Ht),ei.state.pointShadowMap.length>0&&ee.setValue(F,"pointShadowMap",ei.state.pointShadowMap,Ht)),k.isSkinnedMesh){ee.setOptional(F,k,"bindMatrix"),ee.setOptional(F,k,"bindMatrixInverse");let Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ee.setValue(F,"boneTexture",Me.boneTexture,Ht))}k.isBatchedMesh&&(ee.setOptional(F,k,"batchingTexture"),ee.setValue(F,"batchingTexture",k._matricesTexture,Ht),ee.setOptional(F,k,"batchingIdTexture"),ee.setValue(F,"batchingIdTexture",k._indirectTexture,Ht),ee.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ee.setValue(F,"batchingColorTexture",k._colorsTexture,Ht));let Ci=X.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&J.update(k,X,Je),(gn||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,ee.setValue(F,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Vg()),gn){if(ee.setValue(F,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&xd(Xe,Cn),ut&&O.fog===!0&&rt.refreshFogUniforms(Xe,ut),rt.refreshMaterialUniforms(Xe,O,ft,Rt,E.state.transmissionRenderTarget[w.id]),bt.needsLights&&bt.numLightProbeGrids>0){let Me=M,He=0;for(let ji of E.state.lightProbeGridArray)ji.texture!==null&&(Me.textures[He]=ji.texture,Me.min[He]=ji.boundingBox.min,Me.max[He]=ji.boundingBox.max,Me.resolution[He]=ji.resolution,He++);for(let ji in Me)Me[ji].length=He;Xe.probesSH.value=Me.textures,Xe.probesMin.value=Me.min,Xe.probesMax.value=Me.max,Xe.probesResolution.value=Me.resolution}bs.upload(F,qc(bt),Xe,Ht)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(bs.upload(F,qc(bt),Xe,Ht),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ee.setValue(F,"center",k.center),ee.setValue(F,"modelViewMatrix",k.modelViewMatrix),ee.setValue(F,"normalMatrix",k.normalMatrix),ee.setValue(F,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let Me=O.uniformsGroups;for(let He=0,ji=Me.length;He<ji;He++){let $c=Me[He];At.update($c,Je),At.bind($c,Je)}}return Je}function xd(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.sunLights.needsUpdate=D,w.sunLightShadows.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function _d(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(w,D,X){let O=Nt.get(w);O.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Nt.get(w.texture).__webglTexture=D,Nt.get(w.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:X,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,D){let X=Nt.get(w);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,X=0){tt=w,G=D,V=X;let O=null,k=!1,ut=!1;if(w){let ct=Nt.get(w);if(ct.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,ct.__webglFramebuffer),Q.copy(w.viewport),vt.copy(w.scissor),Ft=w.scissorTest,pt.viewport(Q),pt.scissor(vt),pt.setScissorTest(Ft),W=-1;return}else if(ct.__webglFramebuffer===void 0)Ht.setupRenderTarget(w);else if(ct.__hasExternalTextures)Ht.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Gt=w.depthTexture;if(ct.__boundDepthTexture!==Gt){if(Gt!==null&&Nt.has(Gt)&&(w.width!==Gt.image.width||w.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(w)}}let xt=w.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ut=!0);let wt=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?O=wt[D][X]:O=wt[D],k=!0):w.samples>0&&Ht.useMultisampledRTT(w)===!1?O=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(wt)?O=wt[X]:O=wt,Q.copy(w.viewport),vt.copy(w.scissor),Ft=w.scissorTest}else Q.copy(It).multiplyScalar(ft).floor(),vt.copy(ae).multiplyScalar(ft).floor(),Ft=he;if(X!==0&&(O=z),pt.bindFramebuffer(F.FRAMEBUFFER,O)&&pt.drawBuffers(w,O),pt.viewport(Q),pt.scissor(vt),pt.setScissorTest(Ft),k){let ct=Nt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ct.__webglTexture,X)}else if(ut){let ct=D;for(let xt=0;xt<w.textures.length;xt++){let wt=Nt.get(w.textures[xt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+xt,wt.__webglTexture,X,ct)}}else if(w!==null&&X!==0){let ct=Nt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ct.__webglTexture,X)}W=-1};function Zc(w){let D=Nt.get(w);return(D.__readFormat!==w.format||D.__readType!==w.type)&&(D.__readFormat=w.format,D.__readType=w.type,D.__formatReadable=ge.textureFormatReadable(w.format),D.__typeReadable=ge.textureTypeReadable(w.type)),D}this.readRenderTargetPixels=function(w,D,X,O,k,ut,Mt,ct=0){if(!(w&&w.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(xt=xt[Mt],Array.isArray(xt)&&(xt=xt[0])),xt){pt.bindFramebuffer(F.FRAMEBUFFER,xt);try{let wt=w.textures[ct],Gt=wt.format,Jt=wt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ct);let St=Zc(wt);if(St.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-O&&X>=0&&X<=w.height-k&&F.readPixels(D,X,O,k,st.convert(Gt),st.convert(Jt),ut)}finally{let wt=tt!==null?Nt.get(tt).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,D,X,O,k,ut,Mt,ct=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(xt=xt[Mt],Array.isArray(xt)&&(xt=xt[0])),xt)if(D>=0&&D<=w.width-O&&X>=0&&X<=w.height-k){pt.bindFramebuffer(F.FRAMEBUFFER,xt);let wt=w.textures[ct],Gt=wt.format,Jt=wt.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ct);let St=Zc(wt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.bufferData(F.PIXEL_PACK_BUFFER,ut.byteLength,F.STREAM_READ),F.readPixels(D,X,O,k,st.convert(Gt),st.convert(Jt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Pe=tt!==null?Nt.get(tt).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Pe);let de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ou(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ut),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Kt),F.deleteSync(de),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,D=null,X=0){let O=Math.pow(2,-X),k=Math.floor(w.image.width*O),ut=Math.floor(w.image.height*O),Mt=D!==null?D.x:0,ct=D!==null?D.y:0;Ht.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Mt,ct,k,ut),pt.unbindTexture()},this.copyTextureToTexture=function(w,D,X=null,O=null,k=0,ut=0){let Mt,ct,xt,wt,Gt,Jt,St,Kt,Pe,de=w.isCompressedTexture?w.mipmaps[ut]:w.image;if(X!==null)Mt=X.max.x-X.min.x,ct=X.max.y-X.min.y,xt=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Gt=X.min.y,Jt=X.isBox3?X.min.z:0;else{let ee=Math.pow(2,-k);Mt=Math.floor(de.width*ee),ct=Math.floor(de.height*ee),w.isDataArrayTexture?xt=de.depth:w.isData3DTexture?xt=Math.floor(de.depth*ee):xt=1,wt=0,Gt=0,Jt=0}O!==null?(St=O.x,Kt=O.y,Pe=O.z):(St=0,Kt=0,Pe=0);let ue=st.convert(D.format),$e=st.convert(D.type),bt;D.isData3DTexture?(Ht.setTexture3D(D,0),bt=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ht.setTexture2DArray(D,0),bt=F.TEXTURE_2D_ARRAY):(Ht.setTexture2D(D,0),bt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let ei=pt.getParameter(F.UNPACK_ROW_LENGTH),ie=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),Rn=pt.getParameter(F.UNPACK_SKIP_PIXELS),Je=pt.getParameter(F.UNPACK_SKIP_ROWS),Rr=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt);let gn=w.isDataArrayTexture||w.isData3DTexture,Cn=D.isDataArrayTexture||D.isData3DTexture;if(w.isDepthTexture){let ee=Nt.get(w),Xe=Nt.get(D),Ci=Nt.get(ee.__renderTarget),Me=Nt.get(Xe.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Ci.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let He=0;He<xt;He++)gn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(w).__webglTexture,k,Jt+He),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(D).__webglTexture,ut,Pe+He)),F.blitFramebuffer(wt,Gt,wt+Mt,Gt+ct,St,Kt,St+Mt,Kt+ct,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Nt.has(w)){let ee=Nt.get(w),Xe=Nt.get(D);pt.bindFramebuffer(F.READ_FRAMEBUFFER,I),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let Ci=0;Ci<xt;Ci++)gn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.__webglTexture,k,Jt+Ci):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ee.__webglTexture,k),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.__webglTexture,ut,Pe+Ci):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,ut),k!==0?F.blitFramebuffer(wt,Gt,wt+Mt,Gt+ct,St,Kt,St+Mt,Kt+ct,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(bt,ut,St,Kt,Pe+Ci,wt,Gt,Mt,ct):F.copyTexSubImage2D(bt,ut,St,Kt,wt,Gt,Mt,ct);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,ut,St,Kt,Pe,Mt,ct,xt,ue,$e,de.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,ut,St,Kt,Pe,Mt,ct,xt,ue,de.data):F.texSubImage3D(bt,ut,St,Kt,Pe,Mt,ct,xt,ue,$e,de):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ut,St,Kt,Mt,ct,ue,$e,de.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ut,St,Kt,de.width,de.height,ue,de.data):F.texSubImage2D(F.TEXTURE_2D,ut,St,Kt,Mt,ct,ue,$e,de);pt.pixelStorei(F.UNPACK_ROW_LENGTH,ei),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,Rn),pt.pixelStorei(F.UNPACK_SKIP_ROWS,Je),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Rr),ut===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(bt),pt.unbindTexture()},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&Ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ht.setTextureCube(w,0):w.isData3DTexture?Ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ht.setTexture2DArray(w,0):Ht.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){G=0,V=0,tt=null,pt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var et={N:12,ROAD:18,BLOCK:92,SIDEWALK:5,SEED:20261105};et.PITCH=et.BLOCK+et.ROAD;et.HALF=et.N*et.PITCH/2;et.EDGE=et.HALF+et.ROAD/2;et.SHORE=et.EDGE+28;et.WATER_Y=-2.5;var Yt={GRAVITY:24,DRAG:.0032,DIVE_DRAG:.0016,MAX_SPEED:80,RUN:8.5,SPRINT:13,GROUND_ACCEL:12,AIR_ACCEL:7,JUMP:11.5,ROPE_MAX:85,ROPE_MIN:6,SWING_ASSIST:4.5,SWING_STEER:9,ZIP_SPEED:48,WALL_RUN:11,HALF_W:.32,HALF_H:.9},br={range:{name:"Web Range",desc:"Longer web lines",values:[85,97,110,124],prices:[150,320,650]},power:{name:"Swing Power",desc:"More momentum per swing",values:[4.5,6,7.5,9],prices:[200,420,800]},zip:{name:"Zip Speed",desc:"Faster point-zips",values:[48,58,68,80],prices:[150,320,650]}},Lo=[{id:"courier",name:"Courier",price:0,main:3422794,accent:16742938,visor:3729663},{id:"midnight",name:"Midnight",price:250,main:1055290,accent:10466559,visor:16773242},{id:"lime",name:"Neon Lime",price:400,main:1908508,accent:10944302,visor:16726736},{id:"arctic",name:"Arctic",price:600,main:15331058,accent:2795519,visor:1710618},{id:"gold",name:"Gold Rush",price:1200,main:2759948,accent:16762161,visor:16777215}];var No=class{constructor(t=32){this.cs=t,this.boxes=[],this.cells=new Map,this.stamp=1,this._q=[]}key(t,e){return(t+2048)*8192+(e+2048)}addBox(t,e,i,n,s,a,o=null){let l={minX:t,minY:e,minZ:i,maxX:n,maxY:s,maxZ:a,tag:o,id:this.boxes.length,s:0};this.boxes.push(l);let c=this.cs,u=Math.floor(t/c),h=Math.floor(n/c),d=Math.floor(i/c),f=Math.floor(a/c);for(let p=u;p<=h;p++)for(let y=d;y<=f;y++){let g=this.key(p,y),m=this.cells.get(g);m||this.cells.set(g,m=[]),m.push(l)}return l}groundAt(t,e){let i=et.SHORE;return Math.abs(t)<=i&&Math.abs(e)<=i?0:null}queryAABB(t,e,i,n,s,a,o=this._q){o.length=0;let l=++this.stamp,c=this.cs,u=Math.floor(t/c),h=Math.floor(n/c),d=Math.floor(i/c),f=Math.floor(a/c);for(let p=u;p<=h;p++)for(let y=d;y<=f;y++){let g=this.cells.get(this.key(p,y));if(g)for(let m=0;m<g.length;m++){let _=g[m];_.s!==l&&(_.s=l,_.maxX>t&&_.minX<n&&_.maxY>e&&_.minY<s&&_.maxZ>i&&_.minZ<a&&o.push(_))}}return o}raycast(t,e,i,n,s,a,o,l={}){let c=this.cs,u=Math.floor(t/c),h=Math.floor(i/c),d=n>0?1:-1,f=a>0?1:-1,p=n!==0?Math.abs(c/n):1/0,y=a!==0?Math.abs(c/a):1/0,g=n!==0?(n>0?(u+1)*c-t:t-u*c)/Math.abs(n):1/0,m=a!==0?(a>0?(h+1)*c-i:i-h*c)/Math.abs(a):1/0,_=++this.stamp,T=o,M=null,v=0,E=0,x=0,S=n!==0?1/n:1/0,P=s!==0?1/s:1/0,R=a!==0?1/a:1/0,N=0;for(let U=0;U<256;U++){let z=this.cells.get(this.key(u,h));if(z)for(let H=0;H<z.length;H++){let G=z[H];if(G.s===_)continue;G.s=_;let V=(G.minX-t)*S,tt=(G.maxX-t)*S,W=Math.min(V,tt),K=Math.max(V,tt),Q=V<tt?-1:1,vt=0,Ft=0;if(n===0){if(t<G.minX||t>G.maxX)continue;W=-1/0,K=1/0,Q=0}let Y=(G.minY-e)*P,dt=(G.maxY-e)*P;if(s===0){if(e<G.minY||e>G.maxY)continue;Y=-1/0,dt=1/0}let yt=Math.min(Y,dt),Rt=Math.max(Y,dt);yt>W&&(W=yt,Q=0,vt=Y<dt?-1:1,Ft=0),Rt<K&&(K=Rt);let ft=(G.minZ-i)*R,zt=(G.maxZ-i)*R;if(a===0){if(i<G.minZ||i>G.maxZ)continue;ft=-1/0,zt=1/0}let ye=Math.min(ft,zt),It=Math.max(ft,zt);ye>W&&(W=ye,Q=0,vt=0,Ft=ft<zt?-1:1),It<K&&(K=It),!(K<W||W<0||W>=T)&&(T=W,M=G,v=Q,E=vt,x=Ft)}let I=Math.min(g,m);if(M&&T<=I||(N=I,N>o))break;g<m?(u+=d,g+=p):(h+=f,m+=y)}return M?(l.t=T,l.x=t+n*T,l.y=e+s*T,l.z=i+a*T,l.nx=v,l.ny=E,l.nz=x,l.box=M,l):null}moveBody(t,e,i,n,s,a){a.ground=!1,a.ceil=!1,a.wall=!1,a.wallNX=0,a.wallNZ=0,a.wallBox=null,a.groundBox=null,a.impactX=0,a.impactY=0,a.impactZ=0,t.x+=e.x*i,this._resolve(t,e,n,s,0,a),t.z+=e.z*i,this._resolve(t,e,n,s,2,a),t.y+=e.y*i,this._resolve(t,e,n,s,1,a);let o=this.groundAt(t.x,t.z);return o!==null&&t.y-s<o&&t.y-s>o-3&&(e.y<0&&(a.impactY=Math.max(a.impactY,-e.y)),t.y=o+s,e.y<0&&(e.y=0),a.ground=!0),a}_resolve(t,e,i,n,s,a){let o=this.queryAABB(t.x-i,t.y-n,t.z-i,t.x+i,t.y+n,t.z+i);if(o.length)for(let l=0;l<o.length;l++){let c=o[l];if(c.maxX>t.x-i&&c.minX<t.x+i&&c.maxY>t.y-n&&c.minY<t.y+n&&c.maxZ>t.z-i&&c.minZ<t.z+i)if(s===0){let u=c.minX-i-t.x,h=c.maxX+i-t.x;(e.x>0?!0:e.x<0?!1:-u<h)?(t.x+=u-1e-4,a.wallNX=-1):(t.x+=h+1e-4,a.wallNX=1),a.impactX=Math.max(a.impactX,Math.abs(e.x)),e.x=0,a.wall=!0,a.wallNZ=0,a.wallBox=c}else if(s===2){let u=c.minZ-i-t.z,h=c.maxZ+i-t.z;(e.z>0?!0:e.z<0?!1:-u<h)?(t.z+=u-1e-4,a.wallNZ=-1):(t.z+=h+1e-4,a.wallNZ=1),a.impactZ=Math.max(a.impactZ,Math.abs(e.z)),e.z=0,a.wall=!0,a.wallNX=0,a.wallBox=c}else{let u=c.minY-n-t.y,h=c.maxY+n-t.y;(e.y>0?!0:e.y<0?!1:-u<h)?(t.y+=u-1e-4,a.ceil=!0):(t.y+=h+1e-4,a.ground=!0,a.groundBox=c,a.impactY=Math.max(a.impactY,Math.abs(e.y))),e.y=0}}}overlaps(t,e,i,n,s){return this.queryAABB(t-n,e-s,i-n,t+n,e+s,i+n).length>0}};var Pt=(r,t,e)=>r<t?t:r>e?e:r,Er=(r,t,e)=>r+(t-r)*e,$u=(r,t,e)=>{let i=Pt((e-r)/(t-r),0,1);return i*i*(3-2*i)},ce=(r,t)=>1-Math.exp(-r*t);function Wg(r,t){let e=t-r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var ws=(r,t,e)=>r+Wg(r,t)*e;function Xg(r){let t=r>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var fi=class{constructor(t){this.next=Xg(t)}float(t=0,e=1){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.float(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}};function Do(r,t){let e=Math.imul(r|0,374761393)+Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Ju(r,t){let e=Math.floor(r),i=Math.floor(t),n=r-e,s=t-i,a=n*n*(3-2*n),o=s*s*(3-2*s),l=Do(e,i),c=Do(e+1,i),u=Do(e,i+1),h=Do(e+1,i+1);return Er(Er(l,c,a),Er(u,h,a),o)}var Fv=new C(0,1,0);function Tc(r){r=Math.max(0,Math.ceil(r));let t=Math.floor(r/60),e=r%60;return`${t}:${e<10?"0":""}${e}`}var ne={uSunDir:{value:new C(.4,.8,.3).normalize()},uSunColor:{value:new Et(1,.95,.85)},uSkyAmb:{value:new Et(.45,.5,.6)},uGroundAmb:{value:new Et(.28,.26,.24)},uFogColor:{value:new Et(.7,.8,.9)},uFogDensity:{value:.0011},uNight:{value:0},uTime:{value:0}},Vn=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform vec3 uGroundAmb;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uNight;
uniform float uTime;
vec3 applyLight(vec3 albedo, vec3 n) {
  float ndl = max(dot(n, uSunDir), 0.0);
  vec3 amb = mix(uGroundAmb, uSkyAmb, n.y * 0.5 + 0.5);
  return albedo * (amb + uSunColor * ndl);
}
vec3 applyFog(vec3 col, vec3 wp) {
  float d = length(wp - cameraPosition);
  float f = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
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
`;function Ne({emitDay:r=.35,emitNight:t=1.4,side:e=Yi,transparent:i=!1,opacity:n=1,tintMask:s=!1}={}){return new Se({defines:s?{TINT_MASK:1}:{},uniforms:{...ne,uEmitDay:{value:r},uEmitNight:{value:t},uOpacity:{value:n}},side:e,transparent:i,vertexShader:`
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
      ${Vn}
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
        vec3 col = applyLight(vColor, n);
        col += vColor * vEmit * mix(uEmitDay, uEmitNight, uNight);
        col = applyFog(col, vWorld);
        gl_FragColor = vec4(col, uOpacity);
      }
    `})}var Bv=new Ut,Ku=new Qt,ju=new ai,Qu=new C,td=new C;function _t(r=0,t=0,e=0,i=0,n=0,s=0,a=1,o=1,l=1){return ju.set(i,n,s),Ku.setFromEuler(ju),td.set(r,t,e),Qu.set(a,o,l),new Ut().compose(td,Ku,Qu)}var pe=class{constructor(t={}){this.pos=[],this.nor=[],this.col=[],this.emit=[],this.extraDefs=t,this.extra={};for(let e of Object.keys(t))this.extra[e]=[]}add(t,{color:e=16777215,emit:i=0,matrix:n=null,extra:s={}}={}){let a=t.index?t.toNonIndexed():t.clone();n&&a.applyMatrix4(n);let o=new Et(e),l=a.attributes.position.array,c=a.attributes.normal.array,u=l.length/3;for(let h=0;h<u;h++){this.pos.push(l[h*3],l[h*3+1],l[h*3+2]),this.nor.push(c[h*3],c[h*3+1],c[h*3+2]),this.col.push(o.r,o.g,o.b),this.emit.push(i);for(let d of Object.keys(this.extraDefs)){let f=this.extraDefs[d],p=s[d]!==void 0?s[d]:0;if(f===1)this.extra[d].push(typeof p=="number"?p:p[0]);else for(let y=0;y<f;y++)this.extra[d].push(p[y]||0)}}return a.dispose(),this}build(){let t=new we;t.setAttribute("position",new Zt(this.pos,3)),t.setAttribute("normal",new Zt(this.nor,3)),t.setAttribute("aColor",new Zt(this.col,3)),t.setAttribute("aEmit",new Zt(this.emit,1));for(let e of Object.keys(this.extraDefs))t.setAttribute(e,new Zt(this.extra[e],this.extraDefs[e]));return t.computeBoundingSphere(),t}};function De(r,t,e,{dynamic:i=!1,colors:n=!1}={}){let s=new cn(r,t,e);return i&&s.instanceMatrix.setUsage(Fi),n&&(s.instanceColor=new hi(new Float32Array(e*3).fill(1),3),i&&s.instanceColor.setUsage(Fi)),s.frustumCulled=!1,s}var Ai=r=>-et.HALF+r*et.PITCH,zi=r=>Ai(r)+et.PITCH/2,Pc=r=>Math.floor((r+et.HALF)/et.PITCH),Te={GLASS:0,OFFICE:1,BRICK:2,DECO:3},qg={[Te.GLASS]:[[.33,.45,.56],[.28,.48,.5],[.42,.44,.5],[.24,.33,.48],[.5,.55,.58]],[Te.OFFICE]:[[.64,.63,.6],[.72,.69,.63],[.52,.54,.57],[.6,.58,.55]],[Te.BRICK]:[[.56,.29,.21],[.63,.37,.26],[.47,.27,.22],[.7,.52,.37],[.5,.4,.34]],[Te.DECO]:[[.83,.75,.6],[.76,.7,.62],[.69,.61,.5],[.8,.66,.55]]},Ac=0,Rc=1,Cc=2,Uo=class{constructor(t,e){this.scene=t,this.world=e,this.rng=new fi(et.SEED),this.blocks=[],this.tiers=[],this.buildings=[],this.doors=[],this.lamps=[],this.trees=[],this.roofProps={boxes:[],towers:[],antennas:[],billboards:[]},this.landmarks={},this.layoutBlocks(),this.generateBuildings(),this.addLandmarks(),this.buildBuildingMesh(),this.buildGround(),this.buildWater(),this.buildStreetProps(),this.buildRoofProps(),this.buildBridge()}heightAt(t,e){let i=Math.hypot(t+55,e+55),n=Math.hypot(t-340,e-290),s=Math.hypot(t+380,e-380),a=210*Math.exp(-(i*i)/(420*210)),o=120*Math.exp(-(n*n)/(280*140)),l=70*Math.exp(-(s*s)/28800),c=12+Ju(t*.012+3.1,e*.012-1.7)*18;return Math.max(a,o,l)+c}layoutBlocks(){let t=et.N,e=this.rng;for(let i=0;i<t;i++){this.blocks[i]=[];for(let n=0;n<t;n++){let s=zi(i),a=zi(n),o=Ac;(i===8||i===9)&&(n===2||n===3)||Math.hypot(s,a)>260&&e.chance(.07)?o=Rc:Math.hypot(s+55,a+55)<260&&e.chance(.06)&&(o=Cc),this.blocks[i][n]={i,j:n,cx:s,cz:a,type:o,height:this.heightAt(s,a),buildings:[]}}}this.blocks[4][5].type=Cc,this.blocks[5][5].type=Ac}splitLots(t,e,i,n,s=0){let a=t.x1-t.x0,o=t.z1-t.z0;if(a<=e*1.5&&o<=e*1.5||s>6){n.push(t);return}let l=a>o*1.15?!0:o>a*1.15?!1:i.chance(.5),c=i.chance(.45)?i.float(2.5,6):0,u=i.float(.36,.64);if(l){let h=t.x0+a*u;this.splitLots({x0:t.x0,x1:h-c/2,z0:t.z0,z1:t.z1},e,i,n,s+1),this.splitLots({x0:h+c/2,x1:t.x1,z0:t.z0,z1:t.z1},e,i,n,s+1)}else{let h=t.z0+o*u;this.splitLots({x0:t.x0,x1:t.x1,z0:t.z0,z1:h-c/2},e,i,n,s+1),this.splitLots({x0:t.x0,x1:t.x1,z0:h+c/2,z1:t.z1},e,i,n,s+1)}}generateBuildings(){let t=this.rng,e=et.BLOCK/2-et.SIDEWALK;for(let i=0;i<et.N;i++)for(let n=0;n<et.N;n++){let s=this.blocks[i][n];if(s.type!==Ac||i===5&&n===5)continue;let a={x0:s.cx-e,x1:s.cx+e,z0:s.cz-e,z1:s.cz+e},o=s.height,l=o>130?44:o>60?30:21,c=[];this.splitLots(a,l,t,c);for(let u of c)this.makeBuilding(s,u,a)}}makeBuilding(t,e,i){let n=this.rng,s=.6,a={x0:Math.abs(e.x0-i.x0)<s,x1:Math.abs(e.x1-i.x1)<s,z0:Math.abs(e.z0-i.z0)<s,z1:Math.abs(e.z1-i.z1)<s},o=z=>z?n.chance(.25)?n.float(.5,2):0:n.float(.5,2.5),l={x0:e.x0+o(a.x0),x1:e.x1-o(a.x1),z0:e.z0+o(a.z0),z1:e.z1-o(a.z1)},c=l.x1-l.x0,u=l.z1-l.z0;if(c<7||u<7)return;let h=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2,f=this.heightAt(h,d)*n.float(.55,1.25);f=Math.max(9,Math.round(f/3.5)*3.5);let p=Math.min(c,u)*7;f=Math.min(f,p);let y;f>110?y=n.chance(.6)?Te.GLASS:n.chance(.5)?Te.DECO:Te.OFFICE:f>45?y=n.pick([Te.GLASS,Te.OFFICE,Te.OFFICE,Te.DECO,Te.BRICK]):y=n.pick([Te.BRICK,Te.BRICK,Te.OFFICE,Te.DECO]);let g=n.pick(qg[y]),m=n.float(.9,1.1),_=[g[0]*m,g[1]*m,g[2]*m],T=y===Te.GLASS?n.float(3.4,4):n.float(3.2,3.8),M=y===Te.BRICK?n.float(2.6,3.4):y===Te.GLASS?n.float(1.6,2.4):n.float(2.2,3),v=n.float(0,100),E=n.float(.25,.65),x={tiers:[],fp:l,height:f,style:y,i:t.i,j:t.j,id:this.buildings.length},S={...l},P=0,R=1;f>70?R=n.chance(.75)?f>150&&n.chance(.6)?3:2:1:f>35&&n.chance(.25)&&(R=2);let N=R===1?[1]:R===2?[n.float(.5,.75),1]:[n.float(.4,.55),n.float(.7,.85),1];for(let z=0;z<R;z++){let I=z===R-1?f:Math.round(f*N[z]/3.5)*3.5;if(I-P<4)continue;let H={minX:S.x0,maxX:S.x1,minZ:S.z0,maxZ:S.z1,minY:P,maxY:I,color:_,style:y,floorH:T,winW:M,seed:v+z*7.1,lit:E,top:z===R-1,building:x};this.tiers.push(H),x.tiers.push(H),H.box=this.world.addBox(H.minX,H.minY,H.minZ,H.maxX,H.maxY,H.maxZ,H),P=I;let G=S.x1-S.x0,V=S.z1-S.z0,tt=Pt(n.float(2.5,G*.18),2,G*.3),W=Pt(n.float(2.5,V*.18),2,V*.3);if(S={x0:S.x0+tt,x1:S.x1-tt,z0:S.z0+W,z1:S.z1-W},S.x1-S.x0<8||S.z1-S.z0<8)break}x.top=x.tiers[x.tiers.length-1],x.height=x.top.maxY,this.buildings.push(x),t.buildings.push(x);let U=[];a.x0&&l.x0-i.x0<2.5&&U.push({x:l.x0-2.2,z:d,nx:-1,nz:0}),a.x1&&i.x1-l.x1<2.5&&U.push({x:l.x1+2.2,z:d,nx:1,nz:0}),a.z0&&l.z0-i.z0<2.5&&U.push({x:h,z:l.z0-2.2,nx:0,nz:-1}),a.z1&&i.z1-l.z1<2.5&&U.push({x:h,z:l.z1+2.2,nx:0,nz:1}),x.doors=U.map(z=>({...z,building:x})),this.doors.push(...x.doors),this.planRoof(x)}planRoof(t){let e=this.rng,i=t.top,n=i.maxX-i.minX,s=i.maxZ-i.minZ,a=i.maxY,o=this.roofProps;if(n>10&&s>10&&e.chance(.7)){let c=e.float(3,5),u=e.float(3,4.5),h=3,d=e.float(i.minX+c/2+2,i.maxX-c/2-2),f=e.float(i.minZ+u/2+2,i.maxZ-u/2-2);o.boxes.push({x:d,y:a+h/2,z:f,w:c,h,d:u,c:[.55,.53,.5],collide:!0})}let l=Math.floor(e.float(0,Math.min(5,n*s/150)));for(let c=0;c<l;c++){let u=e.float(1.6,3),h=e.float(i.minX+2,i.maxX-2),d=e.float(i.minZ+2,i.maxZ-2);o.boxes.push({x:h,y:a+.6,z:d,w:u,h:1.2,d:u*e.float(.7,1.3),c:[.72,.73,.74],collide:!0})}if(t.height<75&&n>9&&s>9&&e.chance(.38)){let c=e.float(i.minX+3.5,i.maxX-3.5),u=e.float(i.minZ+3.5,i.maxZ-3.5);o.towers.push({x:c,y:a,z:u,s:e.float(.85,1.2)})}if(t.height>60&&e.chance(.35)){let c=e.int(1,3);for(let u=0;u<c;u++)o.antennas.push({x:e.float(i.minX+1,i.maxX-1),y:a,z:e.float(i.minZ+1,i.maxZ-1),h:e.float(6,16+t.height*.06)})}if(t.height>25&&t.height<110&&n>14&&e.chance(.13)){let c=n>=s,u=Math.min(c?n:s,18)*.85;o.billboards.push({x:c?(i.minX+i.maxX)/2:e.chance(.5)?i.minX+1.2:i.maxX-1.2,z:c?e.chance(.5)?i.minZ+1.2:i.maxZ-1.2:(i.minZ+i.maxZ)/2,y:a,len:u,rotY:c?0:Math.PI/2,ad:e.int(0,4)})}}addLandmarks(){let t=zi(5),e=zi(5),i={tiers:[],height:0,style:Te.GLASS,i:5,j:5,id:this.buildings.length,landmark:!0},n=[[34,0,70,[.5,.52,.56]],[28,70,150,[.36,.48,.6]],[22,150,235,[.36,.48,.6]],[26,235,243,[.85,.85,.82]],[15,243,300,[.36,.48,.6]]];for(let[s,a,o,l]of n){let c={minX:t-s,maxX:t+s,minZ:e-s,maxZ:e+s,minY:a,maxY:o,color:l,style:o===243?Te.OFFICE:Te.GLASS,floorH:3.8,winW:2,seed:a*.37,lit:.6,top:o===300,building:i};c.box=this.world.addBox(c.minX,c.minY,c.minZ,c.maxX,c.maxY,c.maxZ,c),this.tiers.push(c),i.tiers.push(c)}i.top=i.tiers[i.tiers.length-1],i.height=300,i.fp={x0:t-34,x1:t+34,z0:e-34,z1:e+34},i.doors=[{x:t-34-2.2,z:e,nx:-1,nz:0,building:i}],this.doors.push(...i.doors),this.buildings.push(i),this.blocks[5][5].buildings.push(i),this.roofProps.antennas.push({x:t,y:300,z:e,h:45,landmark:!0}),this.landmarks.tower={x:t,z:e,top:300,building:i}}buildBuildingMesh(){let t=this.tiers.length,e=new Lt(1,1,1),i=new Float32Array(t*3),n=new Float32Array(t*4),s=new Float32Array(t*4),a=new cn(e,this.makeBuildingMaterial(),t),o=new Ut;for(let l=0;l<t;l++){let c=this.tiers[l];o.makeScale(c.maxX-c.minX,c.maxY-c.minY,c.maxZ-c.minZ),o.setPosition((c.minX+c.maxX)/2,(c.minY+c.maxY)/2,(c.minZ+c.maxZ)/2),a.setMatrixAt(l,o),i.set(c.color,l*3),n.set([c.style,c.seed,c.floorH,c.winW],l*4),s.set([c.lit,c.top?1:0,c.minY<.5?1:0,0],l*4)}e.setAttribute("aBColor",new hi(i,3)),e.setAttribute("aBParams",new hi(n,4)),e.setAttribute("aBExtra",new hi(s,4)),a.frustumCulled=!1,this.scene.add(a),this.buildingMesh=a}makeBuildingMaterial(){return new Se({uniforms:{...ne},vertexShader:`
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
        ${Vn}
        varying vec3 vW;
        varying vec3 vN;
        varying vec3 vLocal;
        varying vec3 vSize;
        varying vec3 vCol;
        varying vec4 vP;
        varying vec4 vE;
        void main() {
          vec3 n = normalize(vN);
          vec3 base = vCol;
          vec3 col;
          vec3 emit = vec3(0.0);
          if (n.y > 0.5) {
            // Roof: tar/gravel with a lighter parapet rim.
            float g = hash12(floor(vW.xz * 1.5));
            vec2 e = vSize.xz * 0.5 - abs(vLocal.xz);
            float rim = 1.0 - step(0.7, min(e.x, e.y));
            col = mix(vec3(0.33, 0.33, 0.34) + g * 0.05, base * 1.05, rim);
            col = applyLight(col, n);
          } else if (n.y < -0.5) {
            col = applyLight(base * 0.4, n);
          } else {
            float style = vP.x;
            float floorH = vP.z;
            float winW = vP.w;
            bool xFace = abs(n.x) > 0.5;
            float h = xFace ? vLocal.z : vLocal.x;
            float width = xFace ? vSize.z : vSize.x;
            float yLocal = vLocal.y + vSize.y * 0.5;
            float cols = max(1.0, floor(width / winW));
            float spacing = width / cols;
            vec2 cell = vec2(floor((h + width * 0.5) / spacing), floor(yLocal / floorH));
            vec2 f = vec2(fract((h + width * 0.5) / spacing), fract(yLocal / floorH));
            vec4 wr; // window rect x0,x1,y0,y1
            if (style < 0.5) wr = vec4(0.05, 0.95, 0.1, 0.96);
            else if (style < 1.5) wr = vec4(0.14, 0.86, 0.28, 0.86);
            else if (style < 2.5) wr = vec4(0.26, 0.74, 0.25, 0.8);
            else wr = vec4(0.22, 0.78, 0.16, 0.9);
            float win = step(wr.x, f.x) * step(f.x, wr.y) * step(wr.z, f.y) * step(f.y, wr.w);
            float topGap = vSize.y - yLocal;
            float isGroundTier = vE.z;
            bool groundFloor = isGroundTier > 0.5 && yLocal < floorH * 1.2;
            if (topGap < 1.2) win = 0.0; // parapet band
            // corner pilasters for masonry buildings
            float edgeDist = width * 0.5 - abs(h);
            if (style > 0.5 && edgeDist < 0.6) win = 0.0;
            float rnd = hash12(cell + vP.y);
            vec3 wall = base * (0.92 + 0.08 * hash12(vec2(cell.y, vP.y)));
            if (style > 2.5 && fract((h + width * 0.5) / spacing) < 0.1) wall *= 1.12;
            if (topGap < 1.2) wall *= 1.12;
            vec3 V = normalize(vW - cameraPosition);
            float fres = pow(1.0 - abs(dot(V, n)), 2.0);
            vec3 sky = mix(uFogColor, uSkyAmb * 1.4, 0.4);
            vec3 glassBase = style < 0.5 ? base * 0.55 : vec3(0.12, 0.15, 0.2);
            vec3 glass = mix(glassBase, sky, 0.25 + 0.55 * fres);
            glass *= 0.85 + 0.3 * rnd * (1.0 - uNight);
            if (groundFloor) {
              // storefront: big windows, lit signage at night
              float sf = step(0.06, f.x) * step(f.x, 0.94) * step(0.06, yLocal / floorH) * step(yLocal / floorH, 0.72);
              win = sf;
              glass = mix(vec3(0.1, 0.12, 0.14), sky, 0.3 * fres + 0.1);
              float hue = hash12(vec2(cell.x, vP.y * 3.1));
              vec3 shop = 0.5 + 0.5 * cos(6.2831 * (hue + vec3(0.0, 0.33, 0.67)));
              emit = win * mix(vec3(1.0, 0.85, 0.6), shop, 0.35) * (0.25 + 0.95 * uNight);
              if (yLocal / floorH > 0.78 && yLocal / floorH < 0.98) {
                wall = mix(wall, shop * 0.8, 0.85);
                emit += shop * 0.5 * uNight;
              }
            } else {
              float litW = step(1.0 - vE.x, rnd) * uNight;
              vec3 warm = mix(vec3(1.0, 0.78, 0.45), vec3(0.75, 0.85, 1.0), step(0.82, hash12(cell * 1.7 + vP.y)));
              emit = win * litW * warm * (0.7 + 0.5 * hash12(cell + 3.0));
            }
            vec3 albedo = mix(wall, glass, win);
            col = applyLight(albedo, n);
            // sun glint on glass
            vec3 R = reflect(V, n);
            float spec = pow(max(dot(R, uSunDir), 0.0), 40.0) * win * (1.0 - uNight);
            col += uSunColor * spec * 0.6;
            // ambient occlusion near the street
            col *= mix(0.55, 1.0, smoothstep(0.0, 14.0, vW.y));
            col += emit;
          }
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `})}buildGround(){let t=et.N,e=new Uint8Array(t*t*4);for(let g=0;g<t;g++)for(let m=0;m<t;m++){let _=(m*t+g)*4;e[_]=this.blocks[g][m].type*80,e[_+3]=255}let i=new Un(e,t,t,yi);i.magFilter=Re,i.minFilter=Re,i.needsUpdate=!0;let n=et.SHORE*2,s=new ui(n,n,1,1);s.rotateX(-Math.PI/2);let a=new Se({uniforms:{...ne,uBlocks:{value:i},uHalf:{value:et.HALF},uPitch:{value:et.PITCH},uRoad:{value:et.ROAD},uSide:{value:et.SIDEWALK},uN:{value:et.N},uEdge:{value:et.EDGE}},vertexShader:`
        varying vec3 vW;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${Vn}
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
          col = applyLight(col, vec3(0.0, 1.0, 0.0));
          // street lamp pools at night
          float pool = 0.0;
          if (!outside) {
            pool = lampPool(p.y, du.x) + lampPool(p.x, du.y);
          }
          col += vec3(1.0, 0.75, 0.42) * pool * uNight * 0.55;
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),o=new Tt(s,a);this.scene.add(o),this.groundMesh=o;let l=Ne({emitDay:0,emitNight:0}),c=new pe,u=et.SHORE,h=et.WATER_Y,d=-h+.01+3,f=new Lt(1,1,1);for(let[g,m,_,T]of[[0,u,2*u,1.2],[0,-u,2*u,1.2],[u,0,1.2,2*u],[-u,0,1.2,2*u]])c.add(f,{color:7301730,matrix:_t(g,h-3+d/2,m,0,0,0,_+1.2,d,T)}),c.add(f,{color:3159098,matrix:_t(g,1.05,m,0,0,0,_===1.2?.12:_,.08,T===1.2?.12:T)});let p=new Lt(.1,1.05,.1);for(let g=-u;g<=u;g+=4)for(let[m,_]of[[g,u],[g,-u],[u,g],[-u,g]])c.add(p,{color:3159098,matrix:_t(m,.52,_)});let y=new Tt(c.build(),l);this.scene.add(y)}buildWater(){let t=new ui(9e3,9e3,1,1);t.rotateX(-Math.PI/2);let e=new Se({uniforms:{...ne},vertexShader:`
        varying vec3 vW;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${Vn}
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
      `}),i=new Tt(t,e);i.position.y=et.WATER_Y,this.scene.add(i)}buildStreetProps(){let t=this.rng,e=et.N,i=et.BLOCK/2-.8;for(let p=0;p<e;p++)for(let y=0;y<e;y++){let{cx:g,cz:m}=this.blocks[p][y];for(let _ of[-30,0,30])this.lamps.push({x:g+_,z:m-i,rot:0}),this.lamps.push({x:g+_,z:m+i,rot:Math.PI}),this.lamps.push({x:g-i,z:m+_,rot:-Math.PI/2}),this.lamps.push({x:g+i,z:m+_,rot:Math.PI/2})}let n=new pe;n.add(new le(.09,.13,7,4),{color:2895926,matrix:_t(0,3.5,0)}),n.add(new Lt(.1,.1,1.6),{color:2895926,matrix:_t(0,6.9,-.75)}),n.add(new Lt(.45,.16,.7),{color:16773577,emit:1,matrix:_t(0,6.82,-1.45)});let s=De(n.build(),Ne({emitDay:.05,emitNight:2.2}),this.lamps.length),a=new Ut,o=new Qt,l=new C(1,1,1);this.lamps.forEach((p,y)=>{o.setFromAxisAngle(new C(0,1,0),p.rot),a.compose(new C(p.x,0,p.z),o,l),s.setMatrixAt(y,a)}),this.scene.add(s);for(let p=0;p<e;p++)for(let y=0;y<e;y++){let g=this.blocks[p][y];if(g.type===Rc){let m=et.BLOCK/2-et.SIDEWALK-2;for(let _=0;_<34;_++){let T=g.cx+t.float(-m,m),M=g.cz+t.float(-m,m),v=T-g.cx,E=M-g.cz;Math.min(Math.abs(v),Math.abs(E))<3.5||Math.abs(Math.hypot(v,E)-26)<3.5||Math.hypot(v,E)<11||this.trees.push({x:T,z:M,s:t.float(.8,1.5)})}}else if(g.height<60||g.type===Cc){let m=et.BLOCK/2-2.2;for(let _ of[-45,-15,15,45])Math.abs(_)>44||(t.chance(.6)&&this.trees.push({x:g.cx+_,z:g.cz-m,s:t.float(.7,1)}),t.chance(.6)&&this.trees.push({x:g.cx+_,z:g.cz+m,s:t.float(.7,1)}),t.chance(.6)&&this.trees.push({x:g.cx-m,z:g.cz+_,s:t.float(.7,1)}),t.chance(.6)&&this.trees.push({x:g.cx+m,z:g.cz+_,s:t.float(.7,1)}))}}let c=et.EDGE+14;for(let p=-c;p<=c;p+=16)for(let[y,g]of[[p,c],[p,-c],[c,p],[-c,p]])this.trees.push({x:y,z:g,s:t.float(.9,1.3)});let u=new pe;u.add(new le(.18,.28,3.2,6),{color:5914672,matrix:_t(0,1.6,0)}),u.add(new gs(2.3,0),{color:4160052,matrix:_t(0,4.6,0,0,0,0,1,1.15,1)}),u.add(new gs(1.6,0),{color:4950588,matrix:_t(.5,5.9,.3,.5,.3,0)});let h=De(u.build(),Ne({emitDay:0,emitNight:0}),this.trees.length,{colors:!0}),d=new Et;this.trees.forEach((p,y)=>{o.setFromAxisAngle(new C(0,1,0),t.float(0,6.28)),a.compose(new C(p.x,0,p.z),o,new C(p.s,p.s,p.s)),h.setMatrixAt(y,a),d.setRGB(t.float(.8,1.1),t.float(.85,1.15),t.float(.7,1)),h.setColorAt(y,d)}),this.scene.add(h),this.signals=[];let f=et.ROAD/2+.7;for(let p=0;p<=e;p++)for(let y=0;y<=e;y++){let g=Ai(p),m=Ai(y);this.signals.push({x:g+f,z:m+f,axis:1,rot:0}),this.signals.push({x:g-f,z:m-f,axis:1,rot:Math.PI}),this.signals.push({x:g-f,z:m+f,axis:0,rot:-Math.PI/2}),this.signals.push({x:g+f,z:m-f,axis:0,rot:Math.PI/2})}}buildRoofProps(){let t=this.roofProps,e=Ne({emitDay:.2,emitNight:1.6}),i=new Ut,n=new Qt,s=new C,a=new C,o=new Et,l=new pe;l.add(new Lt(1,1,1),{color:16777215});let c=De(l.build(),e,t.boxes.length,{colors:!0});t.boxes.forEach((v,E)=>{i.compose(s.set(v.x,v.y,v.z),n.identity(),a.set(v.w,v.h,v.d)),c.setMatrixAt(E,i),c.setColorAt(E,o.setRGB(v.c[0],v.c[1],v.c[2])),v.collide&&this.world.addBox(v.x-v.w/2,v.y-v.h/2,v.z-v.d/2,v.x+v.w/2,v.y+v.h/2,v.z+v.d/2,null)}),this.scene.add(c);let u=new pe;for(let[v,E]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]])u.add(new le(.12,.12,4,5),{color:3879984,matrix:_t(v,2,E)});u.add(new le(2.3,2.3,4.2,12),{color:9071180,matrix:_t(0,6.1,0)}),u.add(new qi(2.55,1.8,12),{color:4930867,matrix:_t(0,9.1,0)});let h=De(u.build(),e,t.towers.length);t.towers.forEach((v,E)=>{i.compose(s.set(v.x,v.y,v.z),n.identity(),a.set(v.s,v.s,v.s)),h.setMatrixAt(E,i);let x=2.3*v.s;this.world.addBox(v.x-x,v.y+4*v.s,v.z-x,v.x+x,v.y+10*v.s,v.z+x,null)}),this.scene.add(h);let d=new pe;d.add(new le(.08,.16,1,5),{color:10133672,matrix:_t(0,.5,0)});let f=De(d.build(),Ne({emitDay:0,emitNight:0}),t.antennas.length),p=new pe;p.add(new Ce(.4,6,4),{color:16722474,emit:1});let y=De(p.build(),Ne({emitDay:.6,emitNight:3}),t.antennas.length);t.antennas.forEach((v,E)=>{let x=v.landmark?3:1;i.compose(s.set(v.x,v.y,v.z),n.identity(),a.set(x,v.h,x)),f.setMatrixAt(E,i),i.compose(s.set(v.x,v.y+v.h,v.z),n.identity(),a.set(x,x,x)),y.setMatrixAt(E,i)}),this.scene.add(f,y);let g=Yg(),m=new pe;m.add(new Lt(.25,7,.25),{color:3356219,matrix:_t(-.4,3.5,0)}),m.add(new Lt(.25,7,.25),{color:3356219,matrix:_t(.4,3.5,0)}),m.add(new Lt(1,4.6,.3),{color:2369066,matrix:_t(0,6.2,0)});let _=De(m.build(),Ne({emitDay:0,emitNight:0}),t.billboards.length),T=new ui(1,1),M=g.map(v=>new Ve({map:v,side:Le,fog:!0}));this.billboardPanels=M,t.billboards.forEach((v,E)=>{n.setFromAxisAngle(new C(0,1,0),v.rotY),i.compose(s.set(v.x,v.y,v.z),n,a.set(v.len,1,1)),_.setMatrixAt(E,i);let x=new Tt(T,M[v.ad%M.length]);x.position.set(v.x,v.y+6.2,v.z),x.rotation.y=v.rotY,x.scale.set(v.len*.96,4.3,1),this.scene.add(x);let S=v.rotY===0?v.len/2:.3,P=v.rotY===0?.3:v.len/2;this.world.addBox(v.x-S,v.y+3.9,v.z-P,v.x+S,v.y+8.5,v.z+P,null)}),this.scene.add(_)}buildBridge(){let t=et.SHORE+15,e=980,i=16,n=zi(7),s=new pe,a=new Lt(1,1,1),o=26;s.add(a,{color:5001302,matrix:_t(t+e/2,i-1,n,0,0,0,e,2,o)}),s.add(a,{color:2763824,matrix:_t(t+e/2,i+.01,n,0,0,0,e,.05,o-4)}),this.world.addBox(t,i-2,n-o/2,t+e,i,n+o/2,null);let l=[t+220,t+760],c=125;for(let d of l){for(let f of[-1,1]){let p=n+f*(o/2+1.5);s.add(a,{color:11879724,matrix:_t(d,(c+et.WATER_Y)/2,p,0,0,0,5,c-et.WATER_Y,5)}),this.world.addBox(d-2.5,et.WATER_Y,p-2.5,d+2.5,c,p+2.5,null),s.add(a,{color:16777215,emit:0,matrix:_t(d,c+.6,p,0,0,0,1,1.2,1)})}for(let f of[i+30,c-8])s.add(a,{color:11879724,matrix:_t(d,f,n,0,0,0,4,4,o+6)}),this.world.addBox(d-2,f-2,n-o/2-3,d+2,f+2,n+o/2+3,null)}let u=(d,f,p,y,g)=>{for(let _ of[-1,1]){let T=n+_*(o/2+1.5),M=d,v=p;for(let E=1;E<=24;E++){let x=E/24,S=d+(f-d)*x,P=p+(y-p)*x-g*4*x*(1-x),R=S-M,N=P-v,U=Math.hypot(R,N);s.add(new le(.35,.35,1,5),{color:11879724,matrix:_t((S+M)/2,(P+v)/2,T,0,0,-Math.atan2(R,N),1,U,1)}),E<24&&P-i>2&&s.add(new le(.06,.06,1,4),{color:8010282,matrix:_t(S,(P+i)/2,T,0,0,0,1,P-i,1)}),M=S,v=P}}};u(t,l[0],i+4,c,30),u(l[0],l[1],c,c,95),u(l[1],t+e,c,i+4,30);let h=new Tt(s.build(),Ne({emitDay:0,emitNight:0}));this.scene.add(h),this.landmarks.bridge={x0:t,len:e,z:n,deckY:i}}sidewalkPoint(t,e,i,n=0){let s=this.blocks[t][e],a=et.BLOCK/2-et.SIDEWALK/2+n,o=2*a,l=(i%(4*o)+4*o)%(4*o);return l<o?{x:s.cx-a+l,z:s.cz-a,dir:0}:(l-=o,l<o?{x:s.cx+a,z:s.cz-a+l,dir:1}:(l-=o,l<o?{x:s.cx+a-l,z:s.cz+a,dir:2}:(l-=o,{x:s.cx-a,z:s.cz+a-l,dir:3})))}buildingsNear(t,e,i){return this.buildings.filter(n=>{let s=(n.fp.x0+n.fp.x1)/2,a=(n.fp.z0+n.fp.z1)/2;return Math.hypot(s-t,a-e)<i})}};function Yg(){return[{bg:["#ff5a1f","#ffb21f"],title:"SLICE EXPRESS",sub:"Hot pizza. Delivered by air.",fg:"#fff"},{bg:["#14213d","#2b4c8c"],title:"THE DAILY SWING",sub:"News that hangs around.",fg:"#ffd166"},{bg:["#06d6a0","#118ab2"],title:"FIZZ COLA",sub:"Pop to the top!",fg:"#fff"},{bg:["#ef476f","#7b2cbf"],title:"ZOOM SNEAKERS",sub:"Run up walls in style",fg:"#fff"},{bg:["#f1faee","#a8dadc"],title:"SKYLINE BANK",sub:"Your money, higher.",fg:"#1d3557"}].map(t=>{let e=document.createElement("canvas");e.width=512,e.height=160;let i=e.getContext("2d"),n=i.createLinearGradient(0,0,512,160);n.addColorStop(0,t.bg[0]),n.addColorStop(1,t.bg[1]),i.fillStyle=n,i.fillRect(0,0,512,160),i.fillStyle=t.fg,i.font="bold 64px sans-serif",i.textAlign="center",i.fillText(t.title,256,82),i.font="28px sans-serif",i.fillText(t.sub,256,128);let s=new Xi(e);return s.anisotropy=4,s})}var re=r=>new Et(r),Wn=[{e:-.35,zen:re(330268),hor:re(1450303),sun:re(4872837),amb:re(3424618),gnd:re(1711402),fog:.0013},{e:-.1,zen:re(923704),hor:re(3421274),sun:re(5263482),amb:re(3817576),gnd:re(1842212),fog:.00125},{e:0,zen:re(2833003),hor:re(15760207),sun:re(16742976),amb:re(5917280),gnd:re(2761252),fog:.0012},{e:.14,zen:re(4156072),hor:re(16300152),sun:re(16760960),amb:re(6975624),gnd:re(3814448),fog:.00105},{e:.45,zen:re(3832008),hor:re(11588846),sun:re(16773336),amb:re(8161956),gnd:re(4867648),fog:95e-5},{e:1.3,zen:re(3108816),hor:re(11064050),sun:re(16775920),amb:re(8688816),gnd:re(5130820),fog:9e-4}],Fo=class{constructor(t){Jc(this,"fogScale",1);this.scene=t,this.hour=16.5,this.daySpeed=1/30,this.zenith=new Et,this.horizon=new Et;let e=new Ce(4e3,32,16);this.mat=new Se({side:qe,depthWrite:!1,uniforms:{uZenith:{value:this.zenith},uHorizon:{value:this.horizon},uSunDir:ne.uSunDir,uSunColor:ne.uSunColor,uNight:ne.uNight,uTime:ne.uTime},vertexShader:`
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
        void main() {
          vec3 d = normalize(vDir);
          float y = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(y, 0.55));
          if (d.y < 0.0) col = uHorizon * (1.0 + d.y * 1.5);
          float sd = max(dot(d, uSunDir), 0.0);
          col += uSunColor * pow(sd, 8.0) * 0.35 * (1.0 - uNight);
          col += uSunColor * smoothstep(0.9993, 0.9997, sd) * (1.0 - uNight);
          // moon opposite to the sun
          float md = max(dot(d, -uSunDir), 0.0);
          col += vec3(0.85, 0.9, 1.0) * smoothstep(0.9990, 0.9994, md) * uNight;
          col += vec3(0.3, 0.35, 0.5) * pow(md, 30.0) * 0.3 * uNight;
          // stars
          vec3 sp = floor(d * 380.0);
          float s = step(0.9975, h(sp)) * smoothstep(0.05, 0.3, d.y);
          float tw = 0.6 + 0.4 * sin(uTime * 3.0 + h(sp + 1.0) * 30.0);
          col += vec3(s * tw) * uNight;
          // soft clouds
          if (d.y > 0.02) {
            vec2 cp = d.xz / (d.y + 0.15) * 2.0 + vec2(uTime * 0.01, 0.0);
            float c = n2(cp) * 0.6 + n2(cp * 2.3) * 0.3 + n2(cp * 5.1) * 0.1;
            c = smoothstep(0.55, 0.85, c) * smoothstep(0.02, 0.25, d.y);
            vec3 cc = mix(uHorizon * 1.1 + uSunColor * 0.15, vec3(0.15, 0.17, 0.24), uNight);
            col = mix(col, cc, c * 0.75);
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `}),this.mesh=new Tt(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,t.add(this.mesh),this.sun=new hr(16777215,1),this.hemi=new or(16777215,4473924,1),t.add(this.sun,this.hemi,this.sun.target),this.fog=new qs(8947848,.001),t.fog=this.fog,this.update(0,new C)}get isNight(){return ne.uNight.value>.5}update(t,e){this.hour=(this.hour+t*this.daySpeed)%24;let i=(this.hour-6)/12*Math.PI,n=Math.sin(i)*1.15,s=ne.uSunDir.value;s.set(Math.cos(i)*.8,Math.sin(i),.35+Math.cos(i)*.1).normalize();let a=Pt(n,Wn[0].e,Wn[Wn.length-1].e),o=0;for(;o<Wn.length-2&&a>Wn[o+1].e;)o++;let l=Wn[o],c=Wn[o+1],u=Pt((a-l.e)/(c.e-l.e),0,1);this.zenith.copy(l.zen).lerp(c.zen,u),this.horizon.copy(l.hor).lerp(c.hor,u),ne.uSunColor.value.copy(l.sun).lerp(c.sun,u),ne.uSkyAmb.value.copy(l.amb).lerp(c.amb,u).multiplyScalar(1.3),ne.uGroundAmb.value.copy(l.gnd).lerp(c.gnd,u).multiplyScalar(1.3),ne.uFogColor.value.copy(this.horizon).lerp(this.zenith,.15),ne.uFogDensity.value=Er(l.fog,c.fog,u)*this.fogScale,ne.uNight.value=1-$u(-.12,.08,n),n<0&&(s.negate(),s.y=Math.max(s.y,.25),s.normalize()),this.sun.color.copy(ne.uSunColor.value),this.sun.intensity=1,this.sun.position.copy(e).addScaledVector(s,100),this.sun.target.position.copy(e),this.hemi.color.copy(ne.uSkyAmb.value).multiplyScalar(1.5),this.hemi.groundColor.copy(ne.uGroundAmb.value).multiplyScalar(1.4),this.fog.color.copy(ne.uFogColor.value),this.fog.density=ne.uFogDensity.value,this.mesh.position.copy(e)}clockString(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60),i=t>=12?"PM":"AM";return`${(t+11)%12+1}:${e<10?"0":""}${e} ${i}`}};var oi=new C,Zg=new C,Ic=new Qt,$g={},ed=new C(0,0,-1),zo=class{constructor(t){this.camera=new ni(70,16/9,.08,6e3),this.camera.rotation.order="YXZ",t.add(this.camera),this.position=this.camera.position,this.mode="third",this.yaw=0,this.pitch=-.12,this.dist=6,this.target=new C,this.lookIdle=10,this.shakeAmt=0,this.roll=0,this.fov=70,this.sens=1,this.invertY=!1,this.blend=1,this.blendFrom=new C,this.blendFromQ=new Qt,this.time=0,this.buildViewmodel()}getForward(t){let e=Math.cos(this.pitch);return t.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}setMode(t){t!==this.mode&&(this.blendFrom.copy(this.camera.position),this.blendFromQ.copy(this.camera.quaternion),this.blend=0,this.mode=t)}toggle(){return this.setMode(this.mode==="third"?"first":"third"),this.mode}shake(t){this.shakeAmt=Math.min(1.5,this.shakeAmt+t)}buildViewmodel(){let t=new Ae;this.camera.add(t),this.vm=t,this.vmMats={main:new be({color:2303534}),accent:new be({color:16742938}),dark:new be({color:1381914})};let e=i=>{let n=new Ae;n.position.set(.28*i,-.34,-.05),t.add(n);let s=new Tt(new Fn(.055,.5,3,8),this.vmMats.main);s.rotation.x=Math.PI/2,s.position.z=-.3,n.add(s);let a=new Tt(new le(.065,.06,.14,8),this.vmMats.accent);a.rotation.x=Math.PI/2,a.position.z=-.52,n.add(a);let o=new Tt(new Ce(.065,10,8),this.vmMats.dark);return o.position.z=-.62,o.scale.set(1,.8,1.2),n.add(o),{pivot:n,hand:o,q:new Qt}};this.armL=e(-1),this.armR=e(1),t.visible=!1;for(let i of t.children)i.traverse(n=>{n.isMesh&&(n.renderOrder=10,n.material.depthTest=!0)})}setSuit(t){this.vmMats.main.color.setHex(t.main),this.vmMats.accent.color.setHex(t.accent)}handWorld(t,e){return(t>0?this.armR:this.armL).hand.getWorldPosition(e)}update(t,e,i,n){this.time+=t;let s=this.camera,a=.0042*this.sens;i.look.dx||i.look.dy?(this.yaw-=i.look.dx*a,this.pitch-=i.look.dy*a*(this.invertY?-1:1),this.lookIdle=0):this.lookIdle+=t,this.pitch=Pt(this.pitch,-1.35,1.2);let o=e.vel,l=o.length(),c=Math.hypot(o.x,o.z),u=e.state;if(this.lookIdle>1.1&&c>5&&u!=="wall"){let m=Math.atan2(-o.x,-o.z),_=Pt(c/25,.2,1)*(this.mode==="first"?1.1:1.8);if(this.yaw=ws(this.yaw,m,ce(_,t)),u==="swing"||u==="air"){let T=this.mode==="first"?Pt(-o.y/60,-.3,.5)*-1-.05:-.22+Pt(o.y/80,-.25,.1);this.pitch+=(T-this.pitch)*ce(.9,t)}}if(u==="wall"&&this.lookIdle>.5&&this.mode==="third"){let m=Math.atan2(e.wall.nx,e.wall.nz);this.yaw=ws(this.yaw,m,ce(2.5,t));let _=e.vel.y>2?.55:e.vel.y<-2?-.5:.15;this.pitch+=(_-this.pitch)*ce(2.5,t)}this.shakeAmt=Math.max(0,this.shakeAmt-t*2.5);let h=this.shakeAmt*this.shakeAmt*.25,d=(Math.random()-.5)*h,f=(Math.random()-.5)*h,p=0;if(u==="swing"){let m=Math.cos(this.yaw),_=-Math.sin(this.yaw);p=Pt(-(o.x*m+o.z*_)/45,-.22,.22)}this.roll+=(p-this.roll)*ce(3,t);let g=(this.mode==="first"?80:68)+Pt((l-12)/45,0,1)*20+(e.diving?6:0);if(this.fov+=(g-this.fov)*ce(3,t),Math.abs(s.fov-this.fov)>.05&&(s.fov=this.fov,s.updateProjectionMatrix()),this.mode==="third"){let m=5.2+Pt((l-10)/40,0,1)*3.2+(u==="swing"?.8:0);this.dist+=(m-this.dist)*ce(2.5,t),oi.set(e.pos.x,e.pos.y+1.05,e.pos.z),this.target.distanceToSquared(oi)>400&&this.target.copy(oi),this.target.lerp(oi,ce(22,t));let _=this.getForward(Zg),T=this.dist,M=n.raycast(this.target.x,this.target.y,this.target.z,-_.x,-_.y,-_.z,T+.4,$g);M&&(T=Math.max(.6,M.t-.4)),s.position.copy(this.target).addScaledVector(_,-T);let v=n.groundAt(s.position.x,s.position.z);v!==null&&s.position.y<v+.35&&(s.position.y=v+.35),s.rotation.set(this.pitch,this.yaw,this.roll),s.position.x+=d,s.position.y+=f,this.vm.visible=!1}else{let m=0;u==="ground"&&c>1&&(m=Math.sin(e.runPhase*2)*.045*Pt(c/10,0,1)),s.position.set(e.pos.x,e.pos.y+.62+m-(e.landT>0?.25:0),e.pos.z),s.rotation.set(this.pitch+f*.05,this.yaw+d*.05,this.roll*1.4),this.vm.visible=!0,this.updateViewmodel(t,e)}if(this.blend<1){this.blend=Math.min(1,this.blend+t/.35);let m=this.blend*this.blend*(3-2*this.blend);s.position.lerpVectors(this.blendFrom,s.position,m),Ic.copy(s.quaternion),s.quaternion.copy(this.blendFromQ).slerp(Ic,m)}s.updateMatrixWorld()}updateViewmodel(t,e){let i=this.camera,n=Ic.copy(i.quaternion).invert(),s=e.state,a=(c,u,h)=>{oi.copy(u).sub(i.position).applyQuaternion(n).normalize(),oi.y=Math.min(oi.y,.55),oi.x=Math.max(-.7,Math.min(.7,oi.x)),oi.z>-.75&&(oi.z=-.75),oi.normalize(),c.q.setFromUnitVectors(ed,oi),c.pivot.quaternion.slerp(c.q,ce(h,t))},o=(c,u,h,d)=>{oi.set(h*u,d,-1).normalize(),c.q.setFromUnitVectors(ed,oi),c.pivot.quaternion.slerp(c.q,ce(10,t))},l=Math.sin(e.runPhase)*.12;if(s==="swing"){let c=e.rope.side>0?this.armR:this.armL,u=e.rope.side>0?this.armL:this.armR;a(c,e.rope.visual,25),o(u,e.rope.side>0?-1:1,.5,-.6),c.pivot.position.y=-.3}else s==="zip"?(a(this.armL,e.zip.target,25),a(this.armR,e.zip.target,25)):s==="wall"?(o(this.armL,-1,.35,.5+l),o(this.armR,1,.35,.5-l)):e.throwT>0?(o(this.armR,1,.1,.4),o(this.armL,-1,.3,-.5)):s==="ground"?(o(this.armL,-1,.15,-.75+l*.3),o(this.armR,1,.15,-.75-l*.3)):(o(this.armL,-1,.6,-.2),o(this.armR,1,.6,-.2));this.armL.pivot.position.y+=(-.36-this.armL.pivot.position.y)*ce(8,t),this.armR.pivot.position.y+=(-.36-this.armR.pivot.position.y)*ce(8,t)}};var Oo=new Qt,Ts=new Qt,id=new ai,Lc=new C,Bo=new C,nd=new Ut,Jg=new C(0,-1,0),Kg=new C(0,1,0);function wr(r,t,e){return new Tt(new Fn(r,t,3,8),e)}var ko=class{constructor(t){this.root=new Ae,this.body=new Ae,this.root.add(this.body),t.add(this.root),this.mats={main:new be({color:2303534}),accent:new be({color:16742938}),visor:new be({color:3729663,emissive:3729663,emissiveIntensity:.6}),dark:new be({color:1381914}),bag:new be({color:3817290})};let e=this.mats,i=(E,x,S,P)=>{let R=new Ae;return R.position.set(x,S,P),E.add(R),R};this.hips=i(this.body,0,.03,0);let n=new Tt(new Lt(.3,.17,.2),e.main);this.hips.add(n);let s=new Tt(new Lt(.32,.05,.22),e.accent);s.position.y=.07,this.hips.add(s),this.spine=i(this.hips,0,.08,0);let a=wr(.16,.26,e.main);a.position.y=.24,a.scale.set(1.18,1,.78),this.spine.add(a);let o=new Tt(new Lt(.06,.5,.03),e.accent);o.position.set(0,.25,.12),o.rotation.z=.55,this.spine.add(o),this.pack=new Ae,this.pack.position.set(0,.27,-.17),this.spine.add(this.pack);let l=new Tt(new Lt(.3,.34,.14),e.bag);this.pack.add(l);let c=new Tt(new Lt(.31,.06,.15),e.accent);c.position.y=.12,this.pack.add(c),this.cargo=new Ae,this.cargo.position.set(0,.05,-.1),this.pack.add(this.cargo),this.head=i(this.spine,0,.5,0);let u=new Tt(new Ce(.13,14,10),e.main);u.position.y=.11,u.scale.set(.95,1.08,1),this.head.add(u);let h=new Tt(new Lt(.2,.055,.08),e.visor);h.position.set(0,.13,.095),this.head.add(h);let d=new Tt(new Lt(.035,.05,.22),e.accent);d.position.set(0,.24,-.01),this.head.add(d),this.headMeshes=[u,h,d];let f=E=>{let x=i(this.spine,.215*E,.43,0),S=wr(.055,.17,e.main);S.position.y=-.13,x.add(S);let P=new Tt(new Lt(.02,.2,.03),e.accent);P.position.set(.05*E,-.13,0),x.add(P);let R=i(x,0,-.27,0),N=wr(.05,.15,e.main);N.position.y=-.12,R.add(N);let U=new Tt(new le(.058,.052,.1,8),e.accent);U.position.y=-.2,R.add(U);let z=new Tt(new Ce(.055,8,6),e.dark);return z.position.y=-.28,R.add(z),{sh:x,el:R,hand:z}},p=f(1),y=f(-1);this.shL=p.sh,this.elL=p.el,this.handL=p.hand,this.shR=y.sh,this.elR=y.el,this.handR=y.hand;let g=E=>{let x=i(this.hips,.095*E,-.06,0),S=wr(.075,.25,e.main);S.position.y=-.2,x.add(S);let P=new Tt(new Lt(.02,.3,.03),e.accent);P.position.set(.07*E,-.2,0),x.add(P);let R=i(x,0,-.41,0),N=wr(.06,.26,e.main);N.position.y=-.19,R.add(N);let U=new Tt(new Lt(.11,.075,.24),e.accent);return U.position.set(0,-.42,.05),R.add(U),{hp:x,kn:R}},m=g(1),_=g(-1);this.hipL=m.hp,this.knL=m.kn,this.hipR=_.hp,this.knR=_.kn,this.joints=["spine","head","shL","elL","shR","elR","hipL","knL","hipR","knR"],this.targets={};for(let E of this.joints)this.targets[E]=new Qt;this.bodyQuat=new Qt,this.t=0,this.crouch=0,this.visible=!0;let T=document.createElement("canvas");T.width=T.height=64;let M=T.getContext("2d"),v=M.createRadialGradient(32,32,2,32,32,30);v.addColorStop(0,"rgba(0,0,0,0.55)"),v.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=v,M.fillRect(0,0,64,64),this.shadow=new Tt(new ui(1.6,1.6),new Ve({map:new Xi(T),transparent:!0,depthWrite:!1,fog:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=2,t.add(this.shadow)}setSuit(t){this.mats.main.color.setHex(t.main),this.mats.accent.color.setHex(t.accent),this.mats.visor.color.setHex(t.visor),this.mats.visor.emissive.setHex(t.visor)}setVisible(t){this.body.visible=t}pose(t,e=0,i=0,n=0){id.set(e,i,n,"XYZ"),this.targets[t].setFromEuler(id)}aim(t,e,i){let n=e.parent;n.updateWorldMatrix(!0,!1),e.getWorldPosition(Lc),Bo.copy(i).sub(Lc).normalize(),n.getWorldQuaternion(Ts).invert(),Bo.applyQuaternion(Ts),this.targets[t].setFromUnitVectors(Jg,Bo)}update(t,e,i){this.t+=t;let n=this.t,s=e.vel,a=Math.hypot(s.x,s.z),o=s.length();this.root.position.copy(e.pos);let l=Lc.set(0,1,0),c=Bo.set(Math.sin(e.facing),0,Math.cos(e.facing)),u=0,h=e.state;if(h==="swing")l.copy(e.rope.anchor).sub(e.pos).normalize(),c.copy(s).addScaledVector(l,-s.dot(l)),c.lengthSq()<.01&&c.set(Math.sin(e.facing),0,Math.cos(e.facing));else if(h==="wall")e.wall.climbing?(l.set(e.wall.nx,0,e.wall.nz),c.set(0,Math.sign(s.y||1),0)):c.set(-e.wall.nx,0,-e.wall.nz);else if(h==="zip")c.copy(e.zip.target).sub(e.pos),c.y*=.4,l.set(0,1,0).addScaledVector(c.normalize(),.8);else if(h==="air")if(a>1&&c.set(s.x,0,s.z),e.diving&&o>5)l.copy(s).normalize(),c.set(0,-1,0).addScaledVector(l,l.y),c.lengthSq()<.01&&c.set(Math.sin(e.facing),0,Math.cos(e.facing));else{let v=Pt(a/40,0,.5);l.set(0,1,0).addScaledVector(c.clone().normalize(),v)}else if(h==="ground"){let v=Pt((a-3)/30,0,.25);l.set(0,1,0).addScaledVector(c,v)}l.normalize(),c.addScaledVector(l,-c.dot(l)).normalize();let d=new C().crossVectors(l,c);if(nd.makeBasis(d,l,c),Oo.setFromRotationMatrix(nd),e.flipT>=0){let v=Math.min(e.flipT/e.flipDur,1),E=(1-Math.pow(1-v,2))*Math.PI*2*(e.flipDir||1);Ts.setFromAxisAngle(new C(1,0,0),E),Oo.multiply(Ts)}if(e.twistT>=0){let v=Math.min(e.twistT/.6,1);Ts.setFromAxisAngle(Kg,v*Math.PI*2),Oo.multiply(Ts)}let f=h==="swing"?9:h==="wall"?14:10;this.bodyQuat.slerp(Oo,ce(e.flipT>=0||e.twistT>=0?30:f,t)),this.root.quaternion.copy(this.bodyQuat);let p=(v,E,x,S)=>this.pose(v,E,x,S),y=e.runPhase;if(h==="ground")if(e.landT>0||e.perchT>0)u=e.perchT>0?.42:.35*Math.min(1,e.landT/.2),p("spine",.55,0,0),p("head",-.45,0,0),p("hipL",-1.5,0,.25),p("knL",2.1,0,0),p("hipR",-1.2,0,-.2),p("knR",2,0,0),p("shL",-.7,0,.35),p("elL",-.4,0,0),p("shR",-.2,0,-.7),p("elR",-.3,0,0);else if(a>.6){let v=Pt(a/13,.25,1.15),E=Math.sin(y),x=Math.cos(y);p("spine",.08+.22*v,0,0),p("head",-.12-.15*v,0,0),p("hipL",-E*.95*v,0,.02),p("knL",(.25+Math.max(0,x)*1.5)*v,0,0),p("hipR",E*.95*v,0,-.02),p("knR",(.25+Math.max(0,-x)*1.5)*v,0,0),p("shL",E*.9*v,0,.12),p("elL",-.4-.8*v,0,0),p("shR",-E*.9*v,0,-.12),p("elR",-.4-.8*v,0,0),u=.03*Math.abs(Math.sin(y))*v}else{let v=Math.sin(n*2.2)*.03;p("spine",v,0,0),p("head",-v,Math.sin(n*.5)*.3,0),p("hipL",0,0,.06),p("knL",.05,0,0),p("hipR",0,0,-.06),p("knR",.05,0,0),p("shL",.05,0,.16),p("elL",-.2,0,0),p("shR",.05,0,-.16),p("elR",-.2,0,0)}else if(h==="swing"){let v=e.rope.side>0?"shR":"shL",E=e.rope.side>0?"L":"R",x=E==="L"?1:-1,S=Math.sin(n*2.5)*.15;p("spine",-.18,0,0),p("head",-.25,0,0),p("sh"+E,.35,0,x*1.3),p("el"+E,-.5,0,0),p(e.rope.side>0?"elR":"elL",-.05,0,0),p("hipL",-.5+S,0,.12),p("knL",1.1,0,0),p("hipR",.15-S,0,-.08),p("knR",.45,0,0),this.aim(v,e.rope.side>0?this.shR:this.shL,e.rope.visual)}else if(h==="zip")p("spine",.1,0,0),p("head",-.3,0,0),p("shL",-2.7,0,.2),p("elL",-.1,0,0),p("shR",-2.7,0,-.2),p("elR",-.1,0,0),p("hipL",.35,0,.05),p("knL",.6,0,0),p("hipR",.15,0,-.05),p("knR",.3,0,0);else if(h==="wall")if(e.wall.climbing){let E=Math.sin(y),x=Math.cos(y);p("spine",.35,0,0),p("head",-.5,0,0),p("hipL",-E*1.1*1.1,0,0),p("knL",(.3+Math.max(0,x)*1.6)*1.1,0,0),p("hipR",E*1.1*1.1,0,0),p("knR",(.3+Math.max(0,-x)*1.6)*1.1,0,0),p("shL",E*1,0,.2),p("elL",-1.2,0,0),p("shR",-E*1,0,-.2),p("elR",-1.2,0,0)}else{let v=Math.sin(y)*.4;u=.1,p("spine",.35,0,0),p("head",-.6,0,0),p("shL",-2.4+v,0,.6),p("elL",-.6,0,0),p("shR",-2-v,0,-.6),p("elR",-.7,0,0),p("hipL",-1.3-v,0,.7),p("knL",1.9,0,0),p("hipR",-.9+v,0,-.7),p("knR",1.7,0,0)}else{if(e.diving)p("spine",-.1,0,0),p("head",-.9,0,0),p("shL",.35,0,.22),p("elL",0,0,0),p("shR",.35,0,-.22),p("elR",0,0,0),p("hipL",.05,0,.05),p("knL",.15,0,0),p("hipR",.12,0,-.05),p("knR",.3,0,0);else if(s.y>2||e.flipT>=0)p("spine",.25,0,0),p("head",-.2,0,0),p("hipL",-1.1,0,.1),p("knL",1.7,0,0),p("hipR",-.5,0,-.1),p("knR",1.3,0,0),p("shL",-.4,0,.9),p("elL",-.7,0,0),p("shR",-.4,0,-.9),p("elR",-.7,0,0);else{let v=Math.sin(n*7)*.12;p("spine",.1,0,0),p("head",-.3,0,0),p("shL",-.2+v,0,1.5),p("elL",-.4,0,0),p("shR",-.2-v,0,-1.5),p("elR",-.4,0,0),p("hipL",-.5-v,0,.2),p("knL",.8,0,0),p("hipR",.15+v,0,-.15),p("knR",.5,0,0)}e.rollT>=0&&(p("hipL",-1.8,0,0),p("knL",2.2,0,0),p("hipR",-1.8,0,0),p("knR",2.2,0,0),p("spine",.8,0,0))}if(e.throwT>0){let v=e.throwT/.35;p("shR",-2.2*v-.4,0,-.3),p("elR",-.3,0,0)}let g=ce(h==="ground"&&a>.6?22:13,t);for(let v of this.joints)this[v].quaternion.slerp(this.targets[v],g);this.crouch+=(u-this.crouch)*ce(14,t),this.body.position.y=-this.crouch;let m=i.raycast(e.pos.x,e.pos.y,e.pos.z,0,-1,0,80,this._shadowHit||(this._shadowHit={})),_=0,T;m?_=m.y:i.groundAt(e.pos.x,e.pos.z)===null&&(_=-100),T=e.pos.y-.9-_,this.shadow.visible=_>-50&&T<60,this.shadow.position.set(e.pos.x,_+.05,e.pos.z);let M=1+T*.04;this.shadow.scale.set(M,M,M),this.shadow.material.opacity=Pt(1-T/60,0,1)}handWorld(t,e){return(t>0?this.handR:this.handL).getWorldPosition(e)}};var Oi=new C,sd=new C,li=new C,Nc={},Ho=class{constructor(t){this.world=t,this.pos=new C(0,40,0),this.vel=new C,this.state="air",this.c={},this.facing=0,this.rope={active:!1,anchor:new C,visual:new C,length:0,target:0,side:1,time:0,box:null},this.nextSide=1,this.zip={target:new C,perch:!1,nx:0,nz:0,time:0,launchQueued:!1,box:null},this.zipCandidate={valid:!1,target:new C,perch:!1,nx:0,nz:0,box:null},this.wall={nx:0,nz:0,box:null,time:0,climbing:!1},this.diving=!1,this.flipT=-1,this.flipDur=.6,this.flipDir=1,this.twistT=-1,this.rollT=-1,this.landT=0,this.perchT=0,this.throwT=0,this.runPhase=0,this.stepAcc=0,this.coyote=0,this.swingCooldown=0,this.wallCooldown=0,this.jumpHeldT=0,this.airTime=0,this.groundTime=0,this.respawnT=-1,this.lastSafe=new C(0,40,0),this.safeTimer=0,this.events=[],this.anchorHint=!1,this.hintTimer=0,this.combo={count:0,score:0,best:0},this.stats={range:Yt.ROPE_MAX,power:Yt.SWING_ASSIST,zip:Yt.ZIP_SPEED},this.autoChain=!0,this.moveDir=new C,this.camFwd=new C(0,0,-1)}emit(t,e={}){this.events.push({type:t,...e})}teleport(t,e,i){this.rope.active&&this.emit("release",{side:this.rope.side,anchor:this.rope.anchor.clone(),kind:"teleport"}),this.pos.set(t,e,i),this.vel.set(0,0,0),this.state="air",this.rope.active=!1,this.lastSafe.copy(this.pos)}get speed(){return this.vel.length()}addStyle(t,e){this.combo.count++,this.combo.score+=t*Math.min(1+this.combo.count*.1,4),e&&this.emit("style",{label:e,points:t})}update(t,e,i){if(this.respawnT>=0){this.respawnT-=t,this.respawnT<0&&(this.teleport(this.lastSafe.x,this.lastSafe.y+.5,this.lastSafe.z),this.emit("respawn"));return}let n=i.yaw,s=-Math.sin(n),a=-Math.cos(n),o=Math.cos(n),l=-Math.sin(n);this.moveDir.set(s*e.move.y+o*e.move.x,0,a*e.move.y+l*e.move.x),this.moveDir.lengthSq()>1&&this.moveDir.normalize(),i.getForward(this.camFwd),this.swingCooldown-=t,this.wallCooldown-=t,this.coyote-=t,this.landT=Math.max(0,this.landT-t),this.perchT=Math.max(0,this.perchT-t),this.throwT=Math.max(0,this.throwT-t),this.flipT>=0&&(this.flipT+=t,this.flipT>this.flipDur&&(this.flipT=-1)),this.twistT>=0&&(this.twistT+=t,this.twistT>.6&&(this.twistT=-1)),this.rollT>=0&&(this.rollT+=t,this.rollT>.5&&(this.rollT=-1)),e.zipPressed&&this.tryZip(),e.jumpPressed&&this.onJumpPressed(),e.jumpHeld&&(this.jumpHeldT+=t),e.jumpReleased&&this.onJumpReleased(),this.state==="air"&&e.jumpHeld&&this.jumpHeldT>.2&&!this.diving&&this.airTime>.15&&(this.diving=!0,this.emit("dive")),(!e.jumpHeld||this.state!=="air")&&(this.diving=this.state==="air"&&this.diving&&e.jumpHeld);let c=e.swingHeld&&!this.prevSwingHeld;this.prevSwingHeld=e.swingHeld,e.swingHeld&&!this.rope.active&&this.state!=="zip"&&this.swingCooldown<=0&&(c||this.state==="air"&&this.vel.y<4)&&this.tryAttach(),!e.swingHeld&&this.rope.active&&this.release("manual"),e.swingHeld||(this._missEmitted=!1);let u=Math.min(8,Math.ceil(t/(1/120))),h=t/u;for(let p=0;p<u;p++)this.step(h,e);this.rope.active&&this.checkWrap();let d=Math.hypot(this.vel.x,this.vel.z);this.state==="ground"?d>.5&&(this.facing=Math.atan2(this.vel.x,this.vel.z)):d>2&&(this.facing=Math.atan2(this.vel.x,this.vel.z)),this.state==="ground"?(this.groundTime+=t,this.airTime=0,this.groundTime>.6&&this.combo.count>0&&this.endCombo(),this.safeTimer+=t,this.safeTimer>1&&(this.safeTimer=0,this.lastSafe.copy(this.pos))):(this.airTime+=t,this.groundTime=0),this.pos.y<et.WATER_Y+.3&&this.world.groundAt(this.pos.x,this.pos.z)===null&&(this.emit("splash",{x:this.pos.x,z:this.pos.z}),this.respawnT=1.2,this.rope.active=!1,this.state="air",this.vel.set(0,0,0),this.endCombo());let f=2600;this.pos.x=Pt(this.pos.x,-f,f),this.pos.z=Pt(this.pos.z,-f,f),this.updateZipCandidate(i),this.hintTimer-=t,this.hintTimer<=0&&(this.hintTimer=.2,this.anchorHint=this.rope.active||!!this.findAnchor(this.desiredDir(sd),this.nextSide))}endCombo(){if(this.combo.count>=3){let t=Math.round(this.combo.score);this.emit("comboEnd",{points:t,count:this.combo.count}),this.combo.best=Math.max(this.combo.best,t)}this.combo.count=0,this.combo.score=0}onJumpPressed(){this.jumpHeldT=0;let t=this.state;if(t==="ground"||t==="air"&&this.coyote>0){let e=Math.hypot(this.vel.x,this.vel.z);this.vel.y=Yt.JUMP+Math.min(e*.12,3),this.state="air",this.coyote=0,this.emit("jump"),this.perchT>0&&(this.vel.x+=this.camFwd.x*12,this.vel.z+=this.camFwd.z*12,this.vel.y=16,this.flip(.7),this.addStyle(40,"POINT LAUNCH"),this.emit("launch"))}else t==="wall"?this.wallJump():t==="swing"?this.release("jump"):t==="zip"&&(this.zip.launchQueued=!0)}onJumpReleased(){this.state==="air"&&this.jumpHeldT<.2&&this.airTime>.25&&this.flipT<0&&this.twistT<0&&!this.diving&&(Math.random()<.5?this.flip(.6):this.twistT=0,this.addStyle(25,"TRICK"),this.emit("trick")),this.diving=!1,this.jumpHeldT=0}flip(t){this.flipT=0,this.flipDur=t,this.flipDir=1}desiredDir(t){let e=Math.hypot(this.vel.x,this.vel.z);return t.set(this.camFwd.x,0,this.camFwd.z),t.lengthSq()<1e-4&&t.set(Math.sin(this.facing),0,Math.cos(this.facing)),t.normalize(),e>4&&t.multiplyScalar(.6).add(li.set(this.vel.x/e,0,this.vel.z/e).multiplyScalar(.4)).normalize(),this.moveDir.lengthSq()>.04&&t.multiplyScalar(.35).addScaledVector(this.moveDir,.65).normalize(),t}findAnchor(t,e){let i=this.pos,n=this.vel,s=this.stats.range,a=Math.hypot(n.x,n.z),o=Pt(16+a*.55,16,44),l=Pt(22+a*.2,22,34),c=-t.z,u=t.x,h=i.x+t.x*o+c*e*9,d=i.y+l,f=i.z+t.z*o+u*e*9,p=s,y=this.world.queryAABB(i.x-p,i.y-5,i.z-p,i.x+p,i.y+p,i.z+p).slice(),g=null,m=1/0,_=null,T=1/0;for(let M of y){if(M.maxY<7)continue;let v=Pt(h,M.minX,M.maxX),E=Pt(d,M.minY,M.maxY),x=Pt(f,M.minZ,M.maxZ);if(E>=M.maxY-.001&&v>M.minX&&v<M.maxX&&x>M.minZ&&x<M.maxZ){let H=i.x<M.minX?M.minX-i.x:i.x>M.maxX?i.x-M.maxX:0,G=i.z<M.minZ?M.minZ-i.z:i.z>M.maxZ?i.z-M.maxZ:0;if(H===0&&G===0)continue;H>=G?v=i.x<M.minX?M.minX:M.maxX:x=i.z<M.minZ?M.minZ:M.maxZ}let S=v-i.x,P=E-i.y,R=x-i.z,N=Math.sqrt(S*S+P*P+R*R);if(N<8||N>s||P<7)continue;let U=Math.hypot(S,R)||1,z=(S*t.x+R*t.z)/U,I=Math.hypot(v-h,E-d,x-f);P<16&&(I+=(16-P)*2.5),z<-.15&&(I+=70),I-=z*10,N>s*.85&&(I+=(N-s*.85)*2),I<m?(_=g,T=m,g={x:v,y:E,z:x,box:M,L:N},m=I):I<T&&(_={x:v,y:E,z:x,box:M,L:N},T=I)}for(let M of[g,_]){if(!M)continue;let v=(M.x-i.x)/M.L,E=(M.y-i.y)/M.L,x=(M.z-i.z)/M.L,S=this.world.raycast(i.x,i.y+.5,i.z,v,E,x,M.L+1,Nc);if(!S||S.t>=M.L-1.2)return M;if((S.box===M.box||S.t>10)&&S.y>i.y+7&&S.t>8)return{x:S.x,y:S.y,z:S.z,box:S.box,L:S.t}}return null}tryAttach(){let t=this.desiredDir(sd),e=this.nextSide,i=this.findAnchor(t,e);if(i||(e=-e,i=this.findAnchor(t,e)),!i)return this._missEmitted||(this.emit("miss"),this._missEmitted=!0),!1;this._missEmitted=!1;let n=this.rope;n.active=!0,n.visual.set(i.x,i.y,i.z);let s=Math.hypot(this.vel.x,this.vel.z),a=s>3?this.vel.x/s:t.x,o=s>3?this.vel.z/s:t.z,l=i.x-this.pos.x,c=i.z-this.pos.z,u=l*a+c*o,h=l-a*u,d=c-o*u,f=Pt(u,5,60);if(n.anchor.set(this.pos.x+a*f+h*.08,i.y,this.pos.z+o*f+d*.08),n.box=i.box,n.length=this.pos.distanceTo(n.anchor),n.target=Math.max(Yt.ROPE_MIN,Math.min(n.length,i.y-3.4)),n.side=e,n.time=0,this.nextSide=-e,this.state==="ground"?(this.vel.y=Math.max(this.vel.y,7),this.pos.y+=.05):this.state==="wall"&&(this.vel.x+=this.wall.nx*6,this.vel.z+=this.wall.nz*6,this.wallCooldown=.5),n.dirX=a,n.dirZ=o,this.vel.y<-10){let p=Math.min(-this.vel.y-10,12)*.25;this.vel.x+=t.x*p,this.vel.z+=t.z*p}return this.state="swing",this.diving=!1,this.addStyle(10,null),this.emit("web",{side:e,anchor:n.visual.clone()}),!0}release(t){let e=this.rope;if(!e.active)return;e.active=!1,this.state="air",this.swingCooldown=t==="auto"?.06:.12,Oi.copy(this.pos).sub(e.anchor);let i=Oi.length()||1,n=-Oi.y/i,s=Math.hypot(this.vel.x,this.vel.z)||1,a=Oi.x*e.dirX+Oi.z*e.dirZ>0,o=Math.acos(Pt(n,-1,1)),l=this.vel.y>1&&a&&o>.45&&o<1.05&&e.time>.35;if(t==="jump"&&(this.vel.y+=7.5,this.vel.x+=this.vel.x/s*3,this.vel.z+=this.vel.z/s*3,this.flip(.65),this.addStyle(20,null)),l&&t!=="auto")this.vel.multiplyScalar(1.1),this.vel.y+=3,this.addStyle(35,"PERFECT RELEASE"),this.emit("perfect");else if(t==="auto"&&(this.vel.multiplyScalar(1.02),this.vel.y+=1.5,this.vel.y>16)){let c=this.vel.y-16;this.vel.y=16+c*.3;let u=c*.5/s;this.vel.x+=this.vel.x*u,this.vel.z+=this.vel.z*u}this.emit("release",{side:e.side,anchor:e.anchor.clone(),kind:t})}checkWrap(){let t=this.rope;li.copy(t.visual).sub(this.pos);let e=li.length();if(e<4||t.time<.15)return;li.divideScalar(e);let i=this.world.raycast(this.pos.x,this.pos.y,this.pos.z,li.x,li.y,li.z,e-.8,Nc);i&&i.t<e-1.5&&i.t>2&&(t.visual.set(i.x+i.nx*.05,i.y+i.ny*.05,i.z+i.nz*.05),this.emit("wrap",{anchor:t.visual.clone()}))}updateZipCandidate(t){let e=this.zipCandidate;e.valid=!1;let i=t.position,n=this.camFwd,s=Math.max(0,Oi.copy(this.pos).sub(i).dot(n))+2,a=s+115,o=this.world.raycast(i.x+n.x*s,i.y+n.y*s,i.z+n.z*s,n.x,n.y,n.z,a-s,Nc);if(!o)return;let l=o.box,c=Math.hypot(o.x-this.pos.x,o.y-this.pos.y,o.z-this.pos.z);if(!(c<6||c>115)){if(e.box=l,o.ny>.5)e.target.set(o.x,o.y+Yt.HALF_H+.05,o.z),e.perch=!0;else if(Math.abs(o.ny)<.5&&l.maxY-o.y<14){if(e.target.set(o.x-o.nx*.7,l.maxY+Yt.HALF_H+.05,o.z-o.nz*.7),e.perch=!0,this.world.overlaps(e.target.x,e.target.y,e.target.z,Yt.HALF_W,Yt.HALF_H))return}else if(Math.abs(o.ny)<.5)e.target.set(o.x+o.nx*.45,o.y,o.z+o.nz*.45),e.perch=!1;else return;e.nx=o.nx,e.nz=o.nz,e.valid=!0}}tryZip(){let t=this.zipCandidate;if(!t.valid||this.state==="zip")return;this.rope.active&&(this.rope.active=!1,this.emit("release",{side:this.rope.side,anchor:this.rope.anchor.clone(),kind:"zip"}));let e=this.zip;e.target.copy(t.target),e.perch=t.perch,e.nx=t.nx,e.nz=t.nz,e.box=t.box,e.time=0,e.launchQueued=!1,e.useVia=!1;let i=t.box;if(t.perch&&i&&this.pos.y-Yt.HALF_H<i.maxY){let n=this.pos,s=n.x<i.minX?i.minX-n.x:n.x>i.maxX?n.x-i.maxX:-1,a=n.z<i.minZ?i.minZ-n.z:n.z>i.maxZ?n.z-i.maxZ:-1,o=Yt.HALF_W+.9;e.via=e.via||new C,(s>=0||a>=0)&&(e.via.copy(e.target),e.via.y=i.maxY+Yt.HALF_H+.4,s>=a?e.via.x=n.x<i.minX?i.minX-o:i.maxX+o:e.via.z=n.z<i.minZ?i.minZ-o:i.maxZ+o,e.useVia=!0)}this.state="zip",this.diving=!1,this.addStyle(15,null),this.emit("zip",{target:e.target.clone()})}wallJump(){let t=this.wall;this.vel.set(t.nx*9+this.camFwd.x*4,10,t.nz*9+this.camFwd.z*4),this.state="air",this.wallCooldown=.35,this.flip(.55),this.addStyle(20,"WALL JUMP"),this.emit("jump")}enterWall(t,e,i,n){if((!i||i.maxY-this.pos.y<1.2)&&i&&i.maxY-(this.pos.y-Yt.HALF_H)<2.2){this.pos.y=i.maxY+Yt.HALF_H+.02;return}let s=this.wall,a=this.state;s.nx=t,s.nz=e,s.box=i,s.time=0;let o=n;this.vel.y=Math.max(this.vel.y,Math.min(26,o*.75+(a==="ground"?4:2))),this.rope.active&&(this.rope.active=!1,this.emit("release",{side:this.rope.side,anchor:this.rope.anchor.clone(),kind:"wall"})),this.state="wall",this.diving=!1,n>16&&this.emit("impact",{amount:n-16}),this.emit("wallLand",{impact:n}),this.addStyle(10,null)}step(t,e){switch(this.state){case"ground":return this.stepGround(t,e);case"air":return this.stepAir(t,e);case"swing":return this.stepSwing(t,e);case"wall":return this.stepWall(t,e);case"zip":return this.stepZip(t,e)}}applyDrag(t,e){let i=this.vel,n=i.length();n>0&&i.multiplyScalar(Math.max(0,1-e*n*t)),n>Yt.MAX_SPEED&&i.multiplyScalar(Yt.MAX_SPEED/n)}move(t){return this.world.moveBody(this.pos,this.vel,t,Yt.HALF_W,Yt.HALF_H,this.c)}stepGround(t){let e=this.vel,i=this.moveDir,n=i.length(),s=n>.85?Yt.SPRINT:Yt.RUN*n/.85,a=n>.01?i.x/n*s:0,o=n>.01?i.z/n*s:0,l=Math.hypot(e.x,e.z),c=l>Yt.SPRINT+1?2.2:this.landT>0?3:Yt.GROUND_ACCEL,u=ce(c,t);e.x+=(a-e.x)*u,e.z+=(o-e.z)*u,e.y-=Yt.GRAVITY*t;let h=this.move(t),d=Math.hypot(e.x,e.z);if(this.runPhase+=d*t*(Math.PI*2/2.7),this.stepAcc+=d*t,this.stepAcc>1.35&&(this.stepAcc=0,this.emit("step",{speed:d})),h.wall&&n>.5&&this.wallCooldown<=0&&-(i.x*h.wallNX+i.z*h.wallNZ)/n>.6){this.enterWall(h.wallNX,h.wallNZ,h.wallBox,Math.max(l,4));return}h.ground||(this.state="air",this.coyote=.15)}stepAir(t){let e=this.vel;e.y-=Yt.GRAVITY*t*(this.diving?1.35:1),this.applyDrag(t,this.diving?Yt.DIVE_DRAG:Yt.DRAG);let i=this.moveDir;if(i.lengthSq()>.01){let a=Math.hypot(e.x,e.z);e.x+=i.x*Yt.AIR_ACCEL*t,e.z+=i.z*Yt.AIR_ACCEL*t;let o=Math.hypot(e.x,e.z),l=Math.max(a,10);o>l&&(e.x*=l/o,e.z*=l/o)}let n=e.clone(),s=this.move(t);if(s.ground){this.land(s.impactY,n);return}s.wall&&this.wallCooldown<=0&&this.wantsWall(n,s)&&this.enterWall(s.wallNX,s.wallNZ,s.wallBox,Math.abs(n.x*s.wallNX+n.z*s.wallNZ))}wantsWall(t,e){let i=this.moveDir,n=i.lengthSq()>.04?-(i.x*e.wallNX+i.z*e.wallNZ)/i.length():0,s=Math.abs(t.x*e.wallNX+t.z*e.wallNZ),a=Math.hypot(t.x,t.z);return n>.75?!0:s>3&&s>a*.6}land(t,e){this.state="ground",this.diving=!1;let i=Math.hypot(e.x,e.z);t>13&&i>12?(this.rollT=0,this.vel.x=e.x*.85,this.vel.z=e.z*.85,this.addStyle(15,null)):t>18?(this.landT=.35,this.vel.x*=.4,this.vel.z*=.4):t>8&&(this.landT=.15),t>22&&this.emit("impact",{amount:(t-22)*(this.rollT>=0?.4:1)}),this.emit("land",{impact:t,x:this.pos.x,y:this.pos.y-.9,z:this.pos.z})}stepSwing(t,e){let i=this.rope,n=this.vel;i.time+=t,n.y-=Yt.GRAVITY*t,this.applyDrag(t,Yt.DRAG),li.copy(this.pos).sub(i.anchor);let s=li.length()||1,a=li.divideScalar(s),o=this.moveDir;if(o.lengthSq()>.01){let _=o.dot(a);n.x+=(o.x-a.x*_)*Yt.SWING_STEER*t,n.y+=-a.y*_*Yt.SWING_STEER*t,n.z+=(o.z-a.z*_)*Yt.SWING_STEER*t}let l=n.length();if(l>1&&l<42&&s>=i.length-.5&&n.y<0){let _=Pt(-a.y,0,1),T=this.stats.power*t*(.4+.6*_);n.multiplyScalar(1+T/l)}if(i.length>i.target){let _=Math.min(i.length-i.target,18*t);if(i.length-=_,s>i.length){let T=Math.min(s-i.length,_);this.pos.addScaledVector(a,-T),n.multiplyScalar(Math.min(1.004,s/Math.max(1,s-T)))}}else-a.y>.9&&(i.length=Math.max(Yt.ROPE_MIN,i.length-.4*t));let c=this.pos.x+n.x*t,u=this.pos.y+n.y*t,h=this.pos.z+n.z*t,d=c-i.anchor.x,f=u-i.anchor.y,p=h-i.anchor.z,y=Math.sqrt(d*d+f*f+p*p);if(y>i.length){let _=n.x*a.x+n.y*a.y+n.z*a.z,T=i.length/y,M=i.anchor.x+d*T,v=i.anchor.y+f*T,E=i.anchor.z+p*T;n.set((M-this.pos.x)/t,(v-this.pos.y)/t,(E-this.pos.z)/t),_>9&&i.time>.05&&!this._tautEmitted&&(this.emit("taut",{amount:_}),this._tautEmitted=!0)}else y<i.length-2&&(this._tautEmitted=!1);let g=n.clone(),m=this.move(t);if(m.ground){i.active=!1,this.emit("release",{side:i.side,anchor:i.anchor.clone(),kind:"ground"}),this.land(m.impactY,g);return}if(m.wall&&this.wallCooldown<=0&&i.time>.25&&this.wantsWall(g,m)){this.enterWall(m.wallNX,m.wallNZ,m.wallBox,Math.abs(g.x*m.wallNX+g.z*m.wallNZ));return}if(this.autoChain&&e.swingHeld&&i.time>.55){Oi.copy(this.pos).sub(i.anchor);let _=Oi.x*i.dirX+Oi.z*i.dirZ,T=Math.acos(Pt(-Oi.y/Oi.length(),-1,1));_>0&&(T>.82||T>.6&&n.y<3)&&this.release("auto")}}stepWall(t){let e=this.wall,i=this.vel;e.time+=t;let n=this.moveDir,s=n.length(),a=-e.nz,o=e.nx,l=s>.05?-(n.x*e.nx+n.z*e.nz):0,c=s>.05?n.x*a+n.z*o:0;if(l<-.55&&e.time>.15){this.vel.set(e.nx*4,1,e.nz*4),this.state="air",this.wallCooldown=.4;return}let u=0;l>.2?u=Yt.WALL_RUN*Math.min(1,l*1.2):l<-.2&&(u=-Yt.WALL_RUN*.7);let h=i.y>u?ce(1.6,t):ce(8,t);i.y+=(u-i.y)*h;let d=i.x*a+i.z*o,f=c*7,p=d+(f-d)*ce(6,t);i.x=a*p-e.nx*2,i.z=o*p-e.nz*2,e.climbing=Math.abs(i.y)>1.5||Math.abs(p)>1.5,e.climbing&&(this.runPhase+=Math.hypot(i.y,p)*t*(Math.PI*2/2.4),this.stepAcc+=Math.abs(i.y)*t,this.stepAcc>1.3&&(this.stepAcc=0,this.emit("step",{speed:10})));let y=this.move(t),g=e.box;if(y.ground&&i.y<=0){this.state="ground";return}if(g&&this.pos.y-Yt.HALF_H*.3>g.maxY){this.vel.set(-e.nx*6,6.5,-e.nz*6),this.state="air",this.wallCooldown=.3,this.addStyle(10,null),this.emit("vault");return}if(!y.wall){this.state="air",this.wallCooldown=.2;return}y.wallBox&&y.wallBox!==g&&(e.box=y.wallBox),(y.wallNX!==e.nx||y.wallNZ!==e.nz)&&(e.nx=y.wallNX,e.nz=y.wallNZ)}stepZip(t){let e=this.zip;e.time+=t;let i=Math.min(this.stats.zip,18+e.time*110);e.useVia&&(li.copy(e.via).sub(this.pos),li.length()<Math.max(.9,i*t*1.5)&&(e.useVia=!1,this.pos.copy(e.via))),e.useVia||li.copy(e.target).sub(this.pos);let n=li.length();if(!e.useVia&&n<Math.max(.8,i*t*1.2)||e.time>4){this.arriveZip();return}this.vel.copy(li).multiplyScalar(i/n);let s=this.move(t);if(e.perch&&s.wall&&n<3){this.pos.copy(e.target),this.arriveZip();return}if((s.wall||s.ground||s.ceil)&&(n>2.5||e.useVia)){if(s.ground){this.state="ground";return}if(s.wall){this.enterWall(s.wallNX,s.wallNZ,s.wallBox,0);return}this.state="air"}}arriveZip(){let t=this.zip;t.perch?(this.pos.copy(t.target),t.launchQueued?(this.vel.set(this.camFwd.x*13,16,this.camFwd.z*13),this.state="air",this.flip(.7),this.addStyle(40,"POINT LAUNCH"),this.emit("launch")):(this.vel.set(-t.nx*1.5,0,-t.nz*1.5),this.state="ground",this.perchT=.45,this.emit("perch"))):(this.vel.set(0,0,0),this.enterWall(t.nx,t.nz,t.box,0),t.launchQueued&&this.wallJump())}};var Ze=14,jg=new C(0,1,0),As=new C,Dc=new C,Ri=new C,Go=new Ut,rd=new Qt,Qg=new C,Uc=class{constructor(){this.pts=Array.from({length:Ze},()=>new C),this.prev=Array.from({length:Ze},()=>new C),this.state="off",this.anchor=new C,this.start=new C,this.t=0,this.life=0,this.restLen=1,this.radius=.032}},Vo=class{constructor(t){this.lines=Array.from({length:8},()=>new Uc);let e=new le(1,1,1,5,1,!0),i=new Ve({color:15660031,fog:!0});this.mesh=De(e,i,this.lines.length*(Ze-1),{dynamic:!0}),t.add(this.mesh)}shoot(t,e,i){let n=this.lines.find(s=>s.state==="off")||this.lines.reduce((s,a)=>s.life<a.life?s:a);n.state="shoot",n.anchor.copy(t),n.start.copy(e),n.t=0,n.life=1,n.restLen=i||e.distanceTo(t);for(let s=0;s<Ze;s++)n.pts[s].copy(e),n.prev[s].copy(e);return n}release(t,e){if(!(!t||t.state==="off"||t.state==="free")){t.state="free",t.life=1.6;for(let i=0;i<Ze;i++){let n=i/(Ze-1);t.pts[i].lerpVectors(t.start,t.anchor,n),t.prev[i].copy(t.pts[i]).addScaledVector(e,-(1-n)*.016)}t.restLen=t.start.distanceTo(t.anchor)*1.05}}update(t,e){let i=-20*t*t,n=0;for(let s of this.lines){if(s.state==="off"){for(let o=0;o<Ze-1;o++)this.hide(n++);continue}if(s.state==="shoot"||s.state==="taut"){s.t+=t;let o=s.start.distanceTo(s.anchor),l=Math.min(1,s.t*320/Math.max(1,o));l>=1&&s.state==="shoot"&&(s.state="taut");let c=Math.max(0,s.restLen-o);Ri.subVectors(s.anchor,s.start);let u=As.set(-Ri.z,0,Ri.x).normalize();for(let h=0;h<Ze;h++){let d=h/(Ze-1)*l;if(s.pts[h].copy(s.start).addScaledVector(Ri,d),s.state==="shoot"){let f=Math.sin(d*18-s.t*40)*.25*(1-l)*Math.sin(Math.PI*(h/(Ze-1)));s.pts[h].addScaledVector(u,f)}c>.05&&(s.pts[h].y-=Math.sin(Math.PI*d)*Math.min(c*.5,6))}}else if(s.state==="free"){if(s.life-=t,s.life<=0){s.state="off";for(let u=0;u<Ze-1;u++)this.hide(n++);continue}let o=s.pts,l=s.prev;for(let u=0;u<Ze-1;u++){let h=o[u],d=(h.x-l[u].x)*.985,f=(h.y-l[u].y)*.985,p=(h.z-l[u].z)*.985;l[u].copy(h),h.x+=d,h.y+=f+i,h.z+=p,h.y<.05&&(h.y=.05)}o[Ze-1].copy(s.anchor);let c=s.restLen/(Ze-1);for(let u=0;u<4;u++)for(let h=0;h<Ze-1;h++){let d=o[h],f=o[h+1];Ri.subVectors(f,d);let p=Ri.length()||1e-6,y=(p-c)/p;h+1===Ze-1?d.addScaledVector(Ri,y):(d.addScaledVector(Ri,y*.5),f.addScaledVector(Ri,-y*.5))}}let a=s.state==="free"?s.radius*Math.min(1,s.life/.8):s.radius;for(let o=0;o<Ze-1;o++){As.copy(s.pts[o]),Dc.copy(s.pts[o+1]),Ri.subVectors(Dc,As);let l=Ri.length();if(l<1e-4){this.hide(n++);continue}rd.setFromUnitVectors(jg,Ri.divideScalar(l)),As.add(Dc).multiplyScalar(.5);let c=e?Math.max(a,a*As.distanceTo(e)*.09):a;Go.compose(As,rd,Qg.set(c,l,c)),this.mesh.setMatrixAt(n++,Go)}}this.mesh.instanceMatrix.needsUpdate=!0}hide(t){Go.makeScale(0,0,0),this.mesh.setMatrixAt(t,Go)}};var ad=[2.4,6],tx=22,Rs=et.ROAD/2;function Tr(r,t,e,i,n,s){return r===0?(s.x=n,s.z=Ai(t)+(e>0?1:-1)*ad[i]):(s.z=n,s.x=Ai(t)+(e>0?-1:1)*ad[i]),s}var Fc=(r,t)=>r===0?t>0?Math.PI/2:-Math.PI/2:t>0?0:Math.PI;function od(r){let t=new pe({aTint:1}),e=new Lt(1,1,1),i=new le(.36,.36,.28,8),n={extra:{aTint:1}},s={extra:{aTint:0}};if(r==="bus"){t.add(e,{color:16777215,matrix:_t(0,1.7,0,0,0,0,2.5,2.6,11),...n}),t.add(e,{color:1909808,matrix:_t(0,2.1,.3,0,0,0,2.54,.9,9.6),...s}),t.add(e,{color:1909808,matrix:_t(0,2,5.48,0,0,0,2.2,1.4,.1),...s});for(let a of[-3.8,3.8])for(let o of[-1.15,1.15])t.add(i,{color:1118481,matrix:_t(o,.4,a,0,0,Math.PI/2),...s});t.add(e,{color:16773824,emit:1,matrix:_t(-.9,.8,5.51,0,0,0,.4,.25,.05),...s}),t.add(e,{color:16773824,emit:1,matrix:_t(.9,.8,5.51,0,0,0,.4,.25,.05),...s}),t.add(e,{color:16719904,emit:1,matrix:_t(-1,.9,-5.51,0,0,0,.3,.3,.05),...s}),t.add(e,{color:16719904,emit:1,matrix:_t(1,.9,-5.51,0,0,0,.3,.3,.05),...s}),t.add(e,{color:16756736,emit:.8,matrix:_t(0,3.05,5.4,0,0,0,1.6,.3,.1),...s})}else{t.add(e,{color:16777215,matrix:_t(0,.62,0,0,0,0,1.86,.62,4.3),...n}),t.add(e,{color:16777215,matrix:_t(0,1.15,-.25,0,0,0,1.6,.5,2.1),...n}),t.add(e,{color:1778220,matrix:_t(0,1.15,-.25,0,0,0,1.64,.4,1.9),...s});for(let a of[-1.35,1.35])for(let o of[-.9,.9])t.add(i,{color:1118481,matrix:_t(o,.36,a,0,0,Math.PI/2),...s});t.add(e,{color:16773824,emit:1,matrix:_t(-.62,.68,2.16,0,0,0,.36,.18,.04),...s}),t.add(e,{color:16773824,emit:1,matrix:_t(.62,.68,2.16,0,0,0,.36,.18,.04),...s}),t.add(e,{color:16719904,emit:1,matrix:_t(-.66,.72,-2.16,0,0,0,.34,.16,.04),...s}),t.add(e,{color:16719904,emit:1,matrix:_t(.66,.72,-2.16,0,0,0,.34,.16,.04),...s})}return t.build()}var ex=[12597547,3049182,15856374,2238513,8359053,2600544,15965202,9323693,14673130,1980313,11745593],Wo=class{constructor(t,e){this.city=e,this.rng=new fi(77),this.time=0,this.cars=[],this.nCars=120,this.nBus=14;let i=Ne({emitDay:.25,emitNight:2.2,tintMask:!0});this.carMesh=De(od("car"),i,this.nCars,{dynamic:!0,colors:!0}),this.busMesh=De(od("bus"),i,this.nBus,{dynamic:!0,colors:!0}),t.add(this.carMesh,this.busMesh);let n=new Et;for(let s=0;s<this.nCars+this.nBus;s++){let a=s>=this.nCars,o={bus:a,idx:a?s-this.nCars:s,axis:0,k:0,dir:1,lane:0,s:0,speed:0,cruise:a?10:this.rng.float(11,16),len:a?11:4.3,turn:null,decided:-999,pos:new C,yaw:0,honk:0};a?n.setHex(this.rng.chance(.5)?2060241:15246103):this.rng.chance(.18)?n.setHex(16238080):n.setHex(this.rng.pick(ex)),(a?this.busMesh:this.carMesh).setColorAt(o.idx,n),this.cars.push(o),this.spawn(o,null)}this.buildSignals(t),this.lastPhase=-1,this._m=new Ut,this._q=new Qt,this._p=new C,this._s=new C(1,1,1),this.events=[]}buildSignals(t){let e=this.city.signals,i=new pe;i.add(new le(.1,.12,5,4),{color:2830133,matrix:_t(0,2.5,0)}),i.add(new Lt(.5,1.4,.5),{color:1776928,matrix:_t(0,5.2,0)});let n=De(i.build(),Ne({emitDay:0,emitNight:0}),e.length),s=new pe;s.add(new sr(.34,0),{color:16777215,emit:1}),this.signalLamps=De(s.build(),Ne({emitDay:.9,emitNight:2}),e.length,{colors:!0});let a=new Ut;e.forEach((o,l)=>{a.makeTranslation(o.x,0,o.z),n.setMatrixAt(l,a),a.makeTranslation(o.x,5.4,o.z),this.signalLamps.setMatrixAt(l,a)}),t.add(n,this.signalLamps)}light(t){let e=this.time%tx;return t===0?e<9?2:e<11?1:0:e>=11&&e<20?2:e>=20?1:0}spawn(t,e){let i=this.rng,n=et.N;for(let s=0;s<20;s++){if(t.axis=i.chance(.5)?0:1,t.dir=i.chance(.5)?1:-1,t.lane=t.bus?1:i.int(0,1),e){let o=i.float(0,Math.PI*2),l=i.float(140,380),c=e.x+Math.cos(o)*l,u=e.z+Math.sin(o)*l,h=t.axis===0?c:u,d=t.axis===0?u:c;t.k=Pt(Math.round((d+et.HALF)/et.PITCH),0,n);let f=Pt(Math.floor((h+et.HALF)/et.PITCH),0,n-1);t.s=Ai(f)+Rs+3+i.float(0,et.BLOCK-6)}else{t.k=i.int(0,n);let o=i.int(0,n-1);t.s=Ai(o)+Rs+3+i.float(0,et.BLOCK-6)}Tr(t.axis,t.k,t.dir,t.lane,t.s,t.pos);let a=!0;for(let o of this.cars)if(o!==t&&o.pos&&Math.abs(o.pos.x-t.pos.x)<8&&Math.abs(o.pos.z-t.pos.z)<8){a=!1;break}if(a)break}t.turn=null,t.speed=t.cruise*.6,t.decided=-999,t.yaw=Fc(t.axis,t.dir)}nextIntersection(t){let e=(t.s+et.HALF)/et.PITCH;return t.dir>0?Math.floor(e+1e-6)+1:Math.ceil(e-1e-6)-1}chooseTurn(t,e){let i=et.N,n=[];e+t.dir>=0&&e+t.dir<=i&&n.push(0,0,0);for(let s of[-1,1])t.k+s>=0&&t.k+s<=i&&n.push(s);return n.length?this.rng.pick(n):0}startTurn(t,e,i){let n=1-t.axis,s=Tr(t.axis,t.k,t.dir,t.lane,Ai(e)-t.dir*Rs,new C),a=Tr(n,e,i,t.lane,Ai(t.k)+i*Rs,new C),o=t.axis===0?new C(a.x,0,s.z):new C(s.x,0,a.z),l=0,c=s.x,u=s.z;for(let h=1;h<=8;h++){let d=h/8,f=(1-d)*(1-d),p=2*(1-d)*d,y=d*d,g=f*s.x+p*o.x+y*a.x,m=f*s.z+p*o.z+y*a.z;l+=Math.hypot(g-c,m-u),c=g,u=m}t.turn={E:s,C:o,X:a,t:0,len:l,axis:n,k:e,dir:i,s:Ai(t.k)+i*Rs}}update(t,e){this.time+=t;let i=this.light(0)*3+this.light(1);if(i!==this.lastPhase){this.lastPhase=i;let h=new Et;this.city.signals.forEach((d,f)=>{let p=this.light(d.axis);h.setHex(p===2?3211104:p===1?16760864:16722464),this.signalLamps.setColorAt(f,h)}),this.signalLamps.instanceColor.needsUpdate=!0}let n=new Map;for(let h of this.cars){if(h.turn)continue;let d=h.axis*1e5+h.k*100+(h.dir>0?10:0)+h.lane,f=n.get(d);f||n.set(d,f=[]),f.push(h)}for(let h of n.values()){h.sort((d,f)=>(d.s-f.s)*d.dir);for(let d=0;d<h.length;d++)h[d].ahead=h[d+1]||null}let s=e.pos,a=s.y<2.5;for(let h of this.cars){if(Math.abs(h.pos.x-s.x)>520||Math.abs(h.pos.z-s.z)>520){this.spawn(h,s);continue}if(h.turn){let y=h.turn;if(h.speed+=(h.cruise*.6-h.speed)*ce(2,t),y.t+=h.speed*t/y.len,y.t>=1)h.axis=y.axis,h.k=y.k,h.dir=y.dir,h.s=y.s,h.turn=null,Tr(h.axis,h.k,h.dir,h.lane,h.s,h.pos),h.yaw=Fc(h.axis,h.dir);else{let g=y.t,m=(1-g)*(1-g),_=2*(1-g)*g,T=g*g;h.pos.set(m*y.E.x+_*y.C.x+T*y.X.x,0,m*y.E.z+_*y.C.z+T*y.X.z);let M=2*(1-g)*(y.C.x-y.E.x)+2*g*(y.X.x-y.C.x),v=2*(1-g)*(y.C.z-y.E.z)+2*g*(y.X.z-y.C.z);h.yaw=Math.atan2(M,v)}continue}let d=this.nextIntersection(h),f=h.cruise;if(d>=0&&d<=et.N){let y=Ai(d)-h.dir*Rs,m=(y-h.dir*(1.2+h.len/2)-h.s)*h.dir,_=this.light(h.axis);if(h.decided!==d)_!==2&&m>-.5&&m<45&&!(_===1&&m<4)&&(f=Math.min(f,Math.max(0,m*.7))),(m<=.3&&(_===2||_===1&&m>-2)||m<-.5)&&(h.decided=d,h.plan=this.chooseTurn(h,d));else if(h.plan&&(f=Math.min(f,h.cruise*.6),(y-h.s)*h.dir<=0)){this.startTurn(h,d,h.plan),h.plan=0;continue}}if(h.ahead){let y=(h.ahead.s-h.s)*h.dir-(h.len+h.ahead.len)/2;f=Math.min(f,Math.max(0,(y-3)*.9))}if(a){let y=s.x-h.pos.x,g=s.z-h.pos.z,m=h.axis===0?y*h.dir:g*h.dir,_=h.axis===0?g:y;m>0&&m<16&&Math.abs(_)<1.8&&(f=Math.min(f,Math.max(0,(m-4)*.8)),h.honk-=t,h.honk<=0&&m<12&&(h.honk=3+Math.random()*3,this.events.push({type:"honk",x:h.pos.x,z:h.pos.z})))}let p=f>h.speed?4:11;h.speed+=Pt(f-h.speed,-p*t,p*t),h.s+=h.dir*h.speed*t,Tr(h.axis,h.k,h.dir,h.lane,h.s,h.pos),h.yaw=Fc(h.axis,h.dir),(h.s<-et.HALF-30||h.s>et.HALF+30)&&this.spawn(h,s)}let o=this._m,l=this._q,c=this._p,u=this._s;for(let h of this.cars)l.setFromAxisAngle(_e.DEFAULT_UP,h.yaw),o.compose(c.set(h.pos.x,0,h.pos.z),l,u),(h.bus?this.busMesh:this.carMesh).setMatrixAt(h.idx,o);this.carMesh.instanceMatrix.needsUpdate=!0,this.busMesh.instanceMatrix.needsUpdate=!0}carAt(t,e,i){for(let n of this.cars){let s=n.bus?3:1.45;if(e<s-.6||e>s+1.2)continue;let a=t-n.pos.x,o=i-n.pos.z,l=Math.sin(n.yaw),c=Math.cos(n.yaw),u=a*l+o*c,h=a*c-o*l;if(Math.abs(h)<(n.bus?1.3:.95)&&Math.abs(u)<n.len/2)return{car:n,top:s}}return null}};var ix=[15158332,3447003,15844367,3066993,15528177,10181046,3426654,15105570,1752220,16739201,6236109,2236962],nx=[2899536,3426654,1976110,8359053,4020864,6111287,13808780];function sx(){let r=new pe({aPart:1,aLimb:1,aPivot:3}),t=(e,i,n,s,a,o,l,c,u,h=16777215)=>r.add(new Lt(e,i,n),{color:h,matrix:_t(s,a,o),extra:{aPart:l,aLimb:c,aPivot:u}});return t(.16,.85,.18,.1,.45,0,2,1,[.1,.88,0]),t(.16,.85,.18,-.1,.45,0,2,-1,[-.1,.88,0]),t(.17,.08,.26,.1,.04,.04,3,1,[.1,.88,0],1710618),t(.17,.08,.26,-.1,.04,.04,3,-1,[-.1,.88,0],1710618),t(.42,.6,.24,0,1.17,0,1,0,[0,0,0]),t(.12,.62,.14,.28,1.15,0,1,2,[.28,1.44,0]),t(.12,.62,.14,-.28,1.15,0,1,-2,[-.28,1.44,0]),t(.11,.12,.12,.28,.8,0,0,2,[.28,1.44,0]),t(.11,.12,.12,-.28,.8,0,0,-2,[-.28,1.44,0]),t(.24,.26,.24,0,1.62,0,0,0,[0,0,0]),t(.26,.09,.26,0,1.77,-.01,3,0,[0,0,0],2759956),r.build()}var Xo=class{constructor(t,e){this.city=e,this.rng=new fi(99),this.count=240,this.special=12;let i=this.count+this.special,n=sx();this.anim=new Float32Array(i*4),this.pants=new Float32Array(i*3);let s=new hi(this.anim,4);s.setUsage(Fi),n.setAttribute("aAnim",s),n.setAttribute("aPants",new hi(this.pants,3)),this.animAttr=s;let a=new Se({uniforms:{...ne},vertexShader:`
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
        ${Vn}
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main() {
          vec3 col = applyLight(vColor, normalize(vNormal));
          col = applyFog(col, vWorld);
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.mesh=new cn(n,a,i),this.mesh.instanceMatrix.setUsage(Fi),this.mesh.frustumCulled=!1;let o=new Et;this.peds=[];for(let l=0;l<i;l++)if(o.setHex(this.rng.pick(ix)),this.mesh.setColorAt(l,o),o.setHex(this.rng.pick(nx)),this.pants.set([o.r,o.g,o.b],l*3),this.anim[l*4+3]=this.rng.float(0,1),l<this.count){let c={k:l,i:0,j:0,t:0,dir:1,lat:0,speed:1.3,phase:this.rng.float(0,6.28),mode:"walk",timer:0,x:0,z:0,y:0,yaw:0,cheer:0,scale:this.rng.float(.92,1.08)};this.peds.push(c)}this.specials=Array.from({length:this.special},(l,c)=>({k:this.count+c,active:!1,x:0,y:0,z:0,yaw:0,cheer:0,phase:0})),this.initialized=!1,t.add(this.mesh),this._m=new Ut,this._q=new Qt,this._v=new C,this._s=new C,this.cheerCooldown=0}respawn(t,e,i,n){let s=et.N,a=this.rng,o=n?3:2;t.i=Pt(e+a.int(-o,o),0,s-1),t.j=Pt(i+a.int(-o,o),0,s-1),t.t=a.float(0,400),t.dir=a.chance(.5)?1:-1,t.lat=a.float(-1.4,1.4),t.speed=a.float(1,1.7),t.mode="walk",t.timer=a.float(5,25),t.cheer=0;let l=this.city.sidewalkPoint(t.i,t.j,t.t,t.lat);t.x=l.x,t.z=l.z}cheer(t,e,i=14){for(let n of this.peds){let s=n.x-t,a=n.z-e;s*s+a*a<i*i&&Math.random()<.85&&(n.mode="cheer",n.timer=1.8+Math.random()*1.8,n.lookX=t,n.lookZ=e)}}setSpecial(t,e,i=0,n=0,s=0,a=0,o=0){let l=this.specials[t];l.active=e,l.x=i,l.y=n,l.z=s,l.yaw=a,l.cheer=o}update(t,e){let i=Pt(Pc(e.pos.x),0,et.N-1),n=Pt(Pc(e.pos.z),0,et.N-1);if(!this.initialized){this.initialized=!0;for(let f of this.peds)this.respawn(f,i,n,!0)}let s=this._m,a=this._q,o=this._v,l=this._s,c=this.anim,u=_e.DEFAULT_UP,h=e.pos,d=e.state==="ground"&&Math.hypot(e.vel.x,e.vel.z)>7;for(let f of this.peds){(Math.abs(f.i-i)>3||Math.abs(f.j-n)>3)&&this.respawn(f,i,n,!1);let p=0,y=0;if(f.mode==="walk"){f.t+=f.dir*f.speed*t,f.phase+=f.speed*t*4.2,p=.45,f.timer-=t,f.timer<0&&(f.mode="idle",f.timer=1.5+Math.random()*4);let g=this.city.sidewalkPoint(f.i,f.j,f.t,f.lat),m=[Math.PI/2,0,-Math.PI/2,Math.PI][g.dir]+(f.dir<0?Math.PI:0);f.yaw=ws(f.yaw,m,ce(8,t)),f.x=g.x,f.z=g.z}else f.mode==="idle"?(f.timer-=t,f.timer<0&&(f.mode="walk",f.timer=6+Math.random()*20,Math.random()<.3&&(f.dir*=-1))):f.mode==="cheer"&&(f.timer-=t,f.phase+=t*9,y=1,f.yaw=ws(f.yaw,Math.atan2(f.lookX-f.x,f.lookZ-f.z),ce(10,t)),f.timer<0&&(f.mode="walk",f.timer=5+Math.random()*10));if(d){let g=f.x-h.x,m=f.z-h.z;g*g+m*m<4&&Math.abs(h.y-.9)<1.2&&(f.lat=Pt(f.lat+(f.lat>0?1:-1)*1.2,-2,2),f.mode!=="cheer"&&(f.mode="cheer",f.timer=1.2,f.lookX=h.x,f.lookZ=h.z))}a.setFromAxisAngle(u,f.yaw),s.compose(o.set(f.x,0,f.z),a,l.setScalar(f.scale)),this.mesh.setMatrixAt(f.k,s),c[f.k*4]=f.phase,c[f.k*4+1]=p,c[f.k*4+2]=y}for(let f of this.specials){if(!f.active){s.makeScale(0,0,0),this.mesh.setMatrixAt(f.k,s);continue}f.phase+=t*(f.cheer?8:2),a.setFromAxisAngle(u,f.yaw),s.compose(o.set(f.x,f.y,f.z),a,l.setScalar(1)),this.mesh.setMatrixAt(f.k,s),c[f.k*4]=f.phase,c[f.k*4+1]=0,c[f.k*4+2]=f.cheer?1:.55+Math.sin(f.phase*2)*.35}this.mesh.instanceMatrix.needsUpdate=!0,this.animAttr.needsUpdate=!0}};var qo=class{constructor(t,e){this.rng=new fi(4242),this.t=0,this.scene=t;let i=new pe,n=new we;n.setAttribute("position",new Zt([0,0,.15,.55,.12,-.05,0,0,-.15,0,0,.15,0,0,-.15,-.55,.12,-.05],3)),n.computeVertexNormals(),i.add(n,{color:5593182}),i.add(new Lt(.12,.1,.4),{color:6975093});let s=Ne({emitDay:0,emitNight:0,side:Le});this.flocks=[];let a=7,o=9;this.birdMesh=De(i.build(),s,a*o,{dynamic:!0});for(let p=0;p<a;p++){let y=new C(this.rng.float(-550,550),this.rng.float(30,120),this.rng.float(-550,550)),g=[];for(let m=0;m<o;m++)g.push({a:this.rng.float(0,6.28),r:this.rng.float(4,14),h:this.rng.float(-3,3),sp:this.rng.float(.5,.9),ph:this.rng.float(0,6.28)});this.flocks.push({home:y,center:y.clone(),scatter:0,R:this.rng.float(18,40),a:this.rng.float(0,6),birds:g})}t.add(this.birdMesh);let l=new pe;l.add(new Ce(1.6,12,8),{color:1989288,matrix:_t(0,0,0,0,0,0,1,.9,1.5)}),l.add(new Ce(1.2,10,6),{color:10146047,emit:.3,matrix:_t(0,.25,1.1,0,0,0,1,.75,.8)}),l.add(new Lt(.4,.4,5),{color:1989288,matrix:_t(0,.3,-4)}),l.add(new Lt(.15,1.4,.8),{color:16777215,matrix:_t(0,.9,-6.3)}),l.add(new Lt(.12,.12,2.6),{color:3355443,matrix:_t(.9,-1.4,0)}),l.add(new Lt(.12,.12,2.6),{color:3355443,matrix:_t(-.9,-1.4,0)}),l.add(new Lt(2.2,.06,.4),{color:16777215,matrix:_t(0,-.3,.5)}),l.add(new Ce(.15,6,4),{color:16719904,emit:1,matrix:_t(0,1.6,-6.6)}),this.heli=new Tt(l.build(),Ne({emitDay:.3,emitNight:2}));let c=new Tt(new Lt(11,.06,.35),new be({color:2236962}));c.position.y=1.6,this.heli.add(c);let u=c.clone();u.rotation.y=Math.PI/2,this.heli.add(u),this.rotors=[c,u];let h=new Tt(new qi(14,120,16,1,!0),new Ve({color:16774864,transparent:!0,opacity:.08,depthWrite:!1,blending:un,side:Le,fog:!1}));h.position.y=-60,h.rotation.x=0,this.spot=new Ae,this.spot.add(h),this.spot.rotation.x=.35,this.heli.add(this.spot),t.add(this.heli);let d=new pe;d.add(new Ce(1,20,12),{color:15658734,matrix:_t(0,0,0,0,0,0,9,9,32)}),d.add(new Lt(3,2,7),{color:3357252,matrix:_t(0,-9.5,2)});for(let p of[0,Math.PI/2,Math.PI,-Math.PI/2])d.add(new Lt(.4,7,6),{color:16742938,matrix:_t(Math.sin(p)*5,Math.cos(p)*5,-27,0,0,p)});d.add(new le(9.08,9.08,6,20,1,!0),{color:16742938,emit:.4,matrix:_t(0,0,4,Math.PI/2,0,0)}),this.blimp=new Tt(d.build(),Ne({emitDay:.1,emitNight:1.2})),t.add(this.blimp);let f=new pe;f.add(new Lt(4,1.4,12),{color:16777215,matrix:_t(0,.4,0)}),f.add(new Lt(3,1.6,4),{color:14673641,matrix:_t(0,1.8,-1)}),f.add(new Lt(3.05,.5,3.8),{color:2962486,matrix:_t(0,2.2,-1)}),f.add(new qi(2,3,4),{color:16777215,matrix:_t(0,.4,7.2,Math.PI/2,Math.PI/4,0,1,1,.7)}),f.add(new Ce(.2,6,4),{color:3211104,emit:1,matrix:_t(1.9,1.4,4)}),f.add(new Ce(.2,6,4),{color:16724016,emit:1,matrix:_t(-1.9,1.4,4)}),this.boats=[];for(let p=0;p<6;p++)this.boats.push({r:et.SHORE+this.rng.float(90,600),a:this.rng.float(0,6.28),sp:this.rng.float(.006,.012)*(this.rng.chance(.5)?1:-1),s:this.rng.float(.8,1.6)});this.boatMesh=De(f.build(),Ne({emitDay:.2,emitNight:2}),this.boats.length,{dynamic:!0}),t.add(this.boatMesh),this._m=new Ut,this._q=new Qt,this._e=new ai,this._v=new C,this._s=new C,this.events=[],this.heliCenter=new C(zi(5),0,zi(5))}update(t,e){this.t+=t;let i=this.t,n=this._m,s=this._q,a=this._e,o=this._v,l=this._s,c=0;for(let _ of this.flocks){_.a+=t*.25,_.center.distanceTo(e.pos)<18&&_.scatter<=0&&(_.scatter=7,_.flee=new C().subVectors(_.center,e.pos).setY(0).normalize(),this.events.push({type:"birds",x:_.center.x,y:_.center.y,z:_.center.z})),_.scatter>0?(_.scatter-=t,_.center.addScaledVector(_.flee,t*16),_.center.y+=t*7):_.center.lerp(_.home,ce(.15,t));let M=_.scatter>0?1.8:1;for(let v of _.birds){let E=_.a*v.sp*3+v.a,x=_.center.x+Math.cos(E)*(_.R*.4+v.r)*M,S=_.center.z+Math.sin(E)*(_.R*.4+v.r)*M,P=_.center.y+v.h+Math.sin(i*1.3+v.ph)*1.2,R=Math.sin(i*(_.scatter>0?22:13)+v.ph);a.set(0,-E,0),s.setFromEuler(a),n.compose(o.set(x,P,S),s,l.set(1.2,1.2*R,1.2)),this.birdMesh.setMatrixAt(c++,n)}}this.birdMesh.instanceMatrix.needsUpdate=!0;let u=i*.07,h=this.heliCenter.x+Math.sin(u)*380,d=this.heliCenter.z+Math.sin(u*2)*200,f=175+Math.sin(i*.3)*10,p=this.heliCenter.x+Math.sin(u+.01)*380,y=this.heliCenter.z+Math.sin((u+.01)*2)*200;this.heli.position.set(h,f,d),this.heli.rotation.set(.12,Math.atan2(p-h,y-d),Math.sin(u*2)*.15);for(let _ of this.rotors)_.rotation.y+=t*25;this.spot.visible=ne.uNight.value>.4,this.spot.rotation.z=Math.sin(i*.5)*.3;let g=i*.012+1,m=et.HALF*.9;this.blimp.position.set(Math.cos(g)*m,240,Math.sin(g)*m),this.blimp.rotation.y=-g,this.boats.forEach((_,T)=>{_.a+=_.sp*t*6;let M=Math.cos(_.a)*_.r,v=Math.sin(_.a)*_.r,E=Math.atan2(-Math.sin(_.a)*Math.sign(_.sp),Math.cos(_.a)*Math.sign(_.sp));a.set(Math.sin(i+T)*.03,E,Math.sin(i*1.3+T)*.04),s.setFromEuler(a),n.compose(o.set(M,et.WATER_Y+Math.sin(i*1.5+T)*.15,v),s,l.setScalar(_.s)),this.boatMesh.setMatrixAt(T,n)}),this.boatMesh.instanceMatrix.needsUpdate=!0}};var ld=[16731501,16766474,5032432,8449433,13073919,16752412],Yo=class{constructor(t,e,i=[]){let n=new fi(1337);this.items=[];let s=(d,f,p)=>this.items.push({id:this.items.length,x:d,y:f,z:p,ph:n.float(0,6.28),got:!1}),a=e.buildings.filter(d=>d.height>45&&!d.landmark);for(let d=0;d<22&&a.length;d++){let p=a.splice(n.int(0,a.length-1),1)[0].top;s(n.chance(.5)?p.minX+1.5:p.maxX-1.5,p.maxY+2.5,n.chance(.5)?p.minZ+1.5:p.maxZ-1.5)}for(let d=0;d<10;d++){let f=n.int(1,et.N-1),p=n.float(-et.HALF,et.HALF),y=n.float(25,70);n.chance(.5)?s(-et.HALF+f*et.PITCH,y,p):s(p,y,-et.HALF+f*et.PITCH)}let o=e.landmarks.tower;s(o.x,o.top+48,o.z),s(o.x+27,246,o.z);let l=e.landmarks.bridge;s(l.x0+220,129,l.z),s(l.x0+760,129,l.z),s(l.x0+490,l.deckY+6,l.z);let c=e.blocks.flat().filter(d=>d.type===1);for(let d=0;d<3&&c.length;d++){let f=c[n.int(0,c.length-1)];s(f.cx+n.float(-20,20),4,f.cz+n.float(-20,20))}for(let d of i)this.items[d]&&(this.items[d].got=!0);let u=new pe;u.add(new Ce(.9,12,10),{color:16777215,emit:.25,matrix:_t(0,0,0,0,0,0,1,1.18,1)}),u.add(new qi(.18,.25,6),{color:16777215,matrix:_t(0,-1.12,0,Math.PI,0,0)}),u.add(new le(.015,.015,2.2,3),{color:15658734,matrix:_t(0,-2.3,0)}),this.mesh=De(u.build(),Ne({emitDay:.25,emitNight:.9}),this.items.length,{dynamic:!0,colors:!0});let h=new Et;this.items.forEach((d,f)=>this.mesh.setColorAt(f,h.setHex(ld[f%ld.length]))),t.add(this.mesh),this.t=0,this._m=new Ut,this._v=new C,this._q=new Qt,this._s=new C}get total(){return this.items.length}get count(){return this.items.filter(t=>t.got).length}update(t,e){this.t+=t;let i=null,n=e.pos;return this.items.forEach((s,a)=>{if(s.got)this._m.makeScale(0,0,0);else{let o=s.y+Math.sin(this.t*1.4+s.ph)*.4,l=n.x-s.x,c=n.y-o,u=n.z-s.z;l*l+c*c+u*u<2.6*2.6&&(s.got=!0,i=s),this._q.setFromAxisAngle(_e.DEFAULT_UP,this.t*.6+s.ph),this._m.compose(this._v.set(s.x,o,s.z),this._q,this._s.setScalar(1.3))}this.mesh.setMatrixAt(a,this._m)}),this.mesh.instanceMatrix.needsUpdate=!0,i}nearest(t){let e=null,i=1/0;for(let n of this.items){if(n.got)continue;let s=Math.hypot(n.x-t.x,n.z-t.z);s<i&&(i=s,e=n)}return e}};var Ki=700,Zo=class{constructor(t,e){this.pos=new Float32Array(Ki*3),this.col=new Float32Array(Ki*4),this.size=new Float32Array(Ki),this.vel=new Float32Array(Ki*3),this.life=new Float32Array(Ki),this.maxLife=new Float32Array(Ki),this.drag=new Float32Array(Ki),this.grav=new Float32Array(Ki),this.next=0;let i=new we;i.setAttribute("position",new Qe(this.pos,3).setUsage(Fi)),i.setAttribute("aColor",new Qe(this.col,4).setUsage(Fi)),i.setAttribute("aSize",new Qe(this.size,1).setUsage(Fi)),this.geo=i,this.points=new Qs(i,new Se({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400}},vertexShader:`
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
        `})),this.points.frustumCulled=!1,t.add(this.points);let n=new we;n.setAttribute("position",new Zt([-1,-1,0,3,-1,0,-1,3,0],3)),this.speedMat=new Se({transparent:!0,depthTest:!1,depthWrite:!1,blending:un,uniforms:{uAmt:{value:0},uTime:{value:0},uAspect:{value:1.7}},vertexShader:`
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
      `}),this.speedLines=new Tt(n,this.speedMat),this.speedLines.frustumCulled=!1,this.speedLines.renderOrder=999,t.add(this.speedLines),this.fireworkTimer=8}spawn(t,e,i,n,s,a,o,l,c,u,h,d,f=1.5,p=9.8){let y=this.next;this.next=(this.next+1)%Ki,this.pos.set([t,e,i],y*3),this.vel.set([n,s,a],y*3),this.col.set([o,l,c,u],y*4),this.size[y]=h,this.life[y]=d,this.maxLife[y]=d,this.drag[y]=f,this.grav[y]=p}dust(t,e,i,n=1){let s=Math.floor(14*n);for(let a=0;a<s;a++){let o=Math.random()*Math.PI*2,l=2+Math.random()*5*n;this.spawn(t,e+.2,i,Math.cos(o)*l,.5+Math.random()*2,Math.sin(o)*l,.75,.72,.68,.55,.9+Math.random()*.8,.6+Math.random()*.5,3,-.5)}}confetti(t,e,i){let n=[[1,.3,.4],[1,.85,.1],[.3,.8,1],[.5,1,.5],[.8,.5,1]];for(let s=0;s<60;s++){let a=n[s%n.length];this.spawn(t,e+1,i,(Math.random()-.5)*9,4+Math.random()*7,(Math.random()-.5)*9,a[0],a[1],a[2],1,.22,1.6+Math.random(),1.2,6)}}pop(t,e,i,n=[1,.4,.6]){for(let s=0;s<24;s++){let a=Math.random()*6.28,o=(Math.random()-.5)*3,l=4+Math.random()*4;this.spawn(t,e,i,Math.cos(a)*l,o*2,Math.sin(a)*l,n[0],n[1],n[2],1,.3,.6,2,3)}}splash(t,e,i){for(let n=0;n<50;n++){let s=Math.random()*6.28,a=Math.random()*4;this.spawn(t,e,i,Math.cos(s)*a,6+Math.random()*8,Math.sin(s)*a,.8,.9,1,.8,.6,1.2,.5,18)}}sparks(t,e,i){for(let n=0;n<10;n++)this.spawn(t,e,i,(Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6,1,1,1,.9,.18,.35,2,5)}firework(t,e,i){let n=Math.random(),s=new Et().setHSL(n,.9,.6);for(let a=0;a<90;a++){let o=Math.random()*2-1,l=Math.random()*6.28,c=22+Math.random()*6,u=Math.sqrt(1-o*o);this.spawn(t,e,i,u*Math.cos(l)*c,o*c,u*Math.sin(l)*c,s.r,s.g,s.b,1,3.5,2.2,1.6,6)}}update(t,e,i,n){let s=this.pos,a=this.vel,o=this.col;for(let l=0;l<Ki;l++){if(this.life[l]<=0)continue;this.life[l]-=t;let c=Math.max(0,1-this.drag[l]*t);a[l*3]*=c,a[l*3+1]=a[l*3+1]*c-this.grav[l]*t,a[l*3+2]*=c,s[l*3]+=a[l*3]*t,s[l*3+1]+=a[l*3+1]*t,s[l*3+2]+=a[l*3+2]*t,this.life[l]<=0?o[l*4+3]=0:o[l*4+3]=Math.min(o[l*4+3],this.life[l]/this.maxLife[l]+.1)}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.speedMat.uniforms.uAmt.value+=(e-this.speedMat.uniforms.uAmt.value)*Math.min(1,t*4),this.speedMat.uniforms.uTime.value+=t,this.speedMat.uniforms.uAspect.value=i,this.speedLines.visible=this.speedMat.uniforms.uAmt.value>.01,n>.7&&(this.fireworkTimer-=t,this.fireworkTimer<0)?(this.fireworkTimer=Math.random()<.3?.4:4+Math.random()*10,this.firework(1100+Math.random()*300,180+Math.random()*120,-300+Math.random()*600),!0):!1}};var $o=class{constructor(){this.ctx=null,this.volume=.8,this.listener={x:0,y:0,z:0,rx:1,rz:0},this.sirenTimer=20,this.hornTimer=6}init(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.volume;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination);let n=e.sampleRate*2;this.noise=e.createBuffer(1,n,e.sampleRate);let s=this.noise.getChannelData(0);for(let d=0;d<n;d++)s[d]=Math.random()*2-1;this.brown=e.createBuffer(1,n,e.sampleRate);let a=this.brown.getChannelData(0),o=0;for(let d=0;d<n;d++)o=(o+.02*(Math.random()*2-1))/1.02,a[d]=o*3.5;let l=this.loop(this.noise);this.windFilter=e.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.Q.value=.7,this.windGain=e.createGain(),this.windGain.gain.value=0,l.connect(this.windFilter).connect(this.windGain).connect(this.master);let c=this.loop(this.noise);this.whistle=e.createBiquadFilter(),this.whistle.type="bandpass",this.whistle.Q.value=9,this.whistleGain=e.createGain(),this.whistleGain.gain.value=0,c.connect(this.whistle).connect(this.whistleGain).connect(this.master);let u=this.loop(this.brown),h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=420,this.humGain=e.createGain(),this.humGain.gain.value=.08,u.connect(h).connect(this.humGain).connect(this.master)}loop(t){let e=this.ctx.createBufferSource();return e.buffer=t,e.loop=!0,e.start(0,Math.random()*1.5),e}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}spatial(t,e,i=60){let n=this.listener,s=t-n.x,a=e-n.z,o=Math.hypot(s,a)||1,l=Math.max(-1,Math.min(1,(s*n.rx+a*n.rz)/o)),c=Math.min(1,i/(i+o));return{pan:l,gain:c}}out(t=1,e=0){let i=this.ctx,n=i.createGain();if(n.gain.value=t,e&&i.createStereoPanner){let s=i.createStereoPanner();s.pan.value=e,n.connect(s).connect(this.master)}else n.connect(this.master);return n}noiseBurst({dur:t=.2,type:e="bandpass",f0:i=1e3,f1:n=i,q:s=1,gain:a=.5,attack:o=.005,pan:l=0,delay:c=0}){let u=this.ctx,h=u.currentTime+c,d=u.createBufferSource();d.buffer=this.noise;let f=u.createBiquadFilter();f.type=e,f.Q.value=s,f.frequency.setValueAtTime(i,h),f.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+t);let p=u.createGain();p.gain.setValueAtTime(1e-4,h),p.gain.exponentialRampToValueAtTime(a,h+o),p.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(f).connect(p).connect(this.out(1,l)),d.start(h,Math.random()*1.5),d.stop(h+t+.05)}tone({dur:t=.2,type:e="sine",f0:i=440,f1:n=i,gain:s=.3,attack:a=.005,pan:o=0,delay:l=0}){let c=this.ctx,u=c.currentTime+l,h=c.createOscillator();h.type=e,h.frequency.setValueAtTime(i,u),n!==i&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),u+t);let d=c.createGain();d.gain.setValueAtTime(1e-4,u),d.gain.exponentialRampToValueAtTime(s,u+a),d.gain.exponentialRampToValueAtTime(1e-4,u+t),h.connect(d).connect(this.out(1,o)),h.start(u),h.stop(u+t+.05)}play(t,e={}){if(!(!this.ctx||this.ctx.state!=="running"))switch(t){case"web":this.noiseBurst({dur:.16,type:"bandpass",f0:4200,f1:1400,q:2.5,gain:.45,pan:e.pan||0}),this.tone({dur:.12,type:"triangle",f0:1900,f1:700,gain:.08,pan:e.pan||0});break;case"zip":this.noiseBurst({dur:.14,type:"bandpass",f0:4500,f1:1600,q:2.5,gain:.4}),this.tone({dur:.35,type:"sawtooth",f0:180,f1:900,gain:.05});break;case"taut":this.tone({dur:.22,type:"sine",f0:95,f1:55,gain:Math.min(.5,.12+e.amount*.012)}),this.noiseBurst({dur:.1,type:"lowpass",f0:900,f1:200,gain:.15});break;case"land":{let i=Math.min(1,e.impact/30);this.noiseBurst({dur:.18+i*.2,type:"lowpass",f0:600+i*400,f1:80,gain:.15+i*.5}),i>.6&&this.tone({dur:.3,f0:70,f1:40,gain:.4});break}case"step":this.noiseBurst({dur:.05,type:"bandpass",f0:1600,f1:900,q:1.5,gain:.07+Math.random()*.03});break;case"whoosh":this.noiseBurst({dur:.4,type:"bandpass",f0:350,f1:1600,q:1.2,gain:.25,attack:.12});break;case"jump":this.noiseBurst({dur:.12,type:"lowpass",f0:900,f1:300,gain:.12});break;case"perfect":this.tone({dur:.18,type:"triangle",f0:880,gain:.12}),this.tone({dur:.25,type:"triangle",f0:1320,gain:.12,delay:.07});break;case"chime":[523,659,784,1047].forEach((i,n)=>this.tone({dur:.35,type:"triangle",f0:i,gain:.16,delay:n*.09}));break;case"cash":this.tone({dur:.08,type:"square",f0:1568,gain:.06}),this.tone({dur:.25,type:"square",f0:2093,gain:.06,delay:.08});break;case"fail":[392,330,262].forEach((i,n)=>this.tone({dur:.3,type:"triangle",f0:i,gain:.15,delay:n*.12}));break;case"pickup":this.tone({dur:.15,type:"sine",f0:660,f1:990,gain:.2});break;case"pop":this.noiseBurst({dur:.08,type:"highpass",f0:2500,gain:.5}),this.tone({dur:.3,type:"sine",f0:900,f1:1800,gain:.1,delay:.03});break;case"splash":this.noiseBurst({dur:.9,type:"lowpass",f0:2500,f1:200,gain:.5,attack:.02});break;case"throw":this.noiseBurst({dur:.22,type:"bandpass",f0:800,f1:2400,q:1.5,gain:.2,attack:.04});break;case"thud":{let i=this.spatial(e.x,e.z,30);this.noiseBurst({dur:.12,type:"lowpass",f0:1200,f1:300,gain:.35*i.gain,pan:i.pan});break}case"honk":{let i=this.spatial(e.x,e.z,40),n=330+Math.random()*120;this.tone({dur:.35,type:"square",f0:n,gain:.07*i.gain,pan:i.pan,attack:.02}),this.tone({dur:.35,type:"square",f0:n*1.26,gain:.05*i.gain,pan:i.pan,attack:.02});break}case"birds":for(let i=0;i<8;i++)this.noiseBurst({dur:.06,type:"bandpass",f0:1200,q:2,gain:.12,delay:i*.05+Math.random()*.03});break;case"boom":{let i=this.spatial(e.x,e.z,400);this.noiseBurst({dur:1.4,type:"lowpass",f0:500,f1:60,gain:.5*i.gain,pan:i.pan,delay:.6});break}case"click":this.tone({dur:.05,type:"triangle",f0:1200,gain:.08});break;case"miss":this.tone({dur:.15,type:"triangle",f0:300,f1:200,gain:.1});break}}update(t,e,i,n){if(!this.ctx||this.ctx.state!=="running")return;let s=this.ctx.currentTime,a=Math.min(1,e/55);if(this.windGain.gain.setTargetAtTime(.02+a*a*.55,s,.15),this.windFilter.frequency.setTargetAtTime(250+a*1500,s,.15),this.whistleGain.gain.setTargetAtTime(Math.max(0,a-.55)*.25,s,.2),this.whistle.frequency.setTargetAtTime(1200+a*1400,s,.2),this.humGain.gain.setTargetAtTime(.09*Math.max(.15,1-i/160),s,.5),this.hornTimer-=t,this.hornTimer<0){this.hornTimer=4+Math.random()*10;let o=Math.random()*6.28;this.play("honk",{x:this.listener.x+Math.cos(o)*120,z:this.listener.z+Math.sin(o)*120})}if(this.sirenTimer-=t,this.sirenTimer<0){this.sirenTimer=35+Math.random()*50;let o=Math.random()*2-1;for(let l=0;l<6;l++)this.tone({dur:.7,type:"sine",f0:650,f1:1050,gain:.025,pan:o,delay:l*.75})}}};var Jo=class{constructor(t){this.move={x:0,y:0},this.look={dx:0,dy:0},this._look={dx:0,dy:0},this.swingHeld=!1,this.jumpHeld=!1,this.jumpPressed=!1,this.jumpReleased=!1,this.zipPressed=!1,this.throwPressed=!1,this.camPressed=!1,this.pausePressed=!1,this.mapPressed=!1,this.actionPressed=!1,this._edges={},this.keys=new Set,this.joy={id:null,ox:0,oy:0,x:0,y:0},this.lookId=null,this.lookLast={x:0,y:0},this.touchMode=!1,this.enabled=!0,this.root=t,this.joyBase=document.getElementById("joy"),this.joyKnob=document.getElementById("joy-knob"),this.bindTouch(),this.bindKeys(),this.bindButtons();let e=window.matchMedia&&matchMedia("(pointer: coarse)").matches;(window.AndroidBridge||e&&(navigator.maxTouchPoints>0||"ontouchstart"in window))&&this.setTouchMode(!0)}bindTouch(){let t=document.getElementById("touch");t.addEventListener("pointerdown",i=>{if(!this.enabled)return;if(i.pointerType==="touch"&&this.setTouchMode(!0),i.pointerType==="mouse"){i.button===0&&(this._edges.swingDown=!0,this.mouseSwing=!0),document.pointerLockElement!==t&&this.wantPointerLock&&t.requestPointerLock?.(),this.lookId=i.pointerId,this.lookLast.x=i.clientX,this.lookLast.y=i.clientY;return}let n=window.innerWidth;i.clientX<n*.42&&this.joy.id===null?(this.joy.id=i.pointerId,this.joy.ox=i.clientX,this.joy.oy=i.clientY,this.joy.x=0,this.joy.y=0,this.joyBase.style.display="block",this.joyBase.style.left=i.clientX+"px",this.joyBase.style.top=i.clientY+"px",this.joyKnob.style.transform="translate(-50%,-50%)"):this.lookId===null&&(this.lookId=i.pointerId,this.lookLast.x=i.clientX,this.lookLast.y=i.clientY),t.setPointerCapture?.(i.pointerId)}),t.addEventListener("pointermove",i=>{if(i.pointerId===this.joy.id){let s=i.clientX-this.joy.ox,a=i.clientY-this.joy.oy,o=Math.hypot(s,a);o>58&&(this.joy.ox+=s/o*(o-58),this.joy.oy+=a/o*(o-58),this.joyBase.style.left=this.joy.ox+"px",this.joyBase.style.top=this.joy.oy+"px",s=s/o*58,a=a/o*58),this.joy.x=s/58,this.joy.y=-a/58,this.joyKnob.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${a}px))`}else if(i.pointerId===this.lookId){if(document.pointerLockElement)this._look.dx+=i.movementX,this._look.dy+=i.movementY;else if(i.pointerType!=="mouse"||i.buttons){let n=i.pointerType==="touch"?1.25:1;this._look.dx+=(i.clientX-this.lookLast.x)*n,this._look.dy+=(i.clientY-this.lookLast.y)*n}this.lookLast.x=i.clientX,this.lookLast.y=i.clientY}else i.pointerType==="mouse"&&document.pointerLockElement&&(this._look.dx+=i.movementX,this._look.dy+=i.movementY)});let e=i=>{i.pointerId===this.joy.id&&(this.joy.id=null,this.joy.x=0,this.joy.y=0,this.joyBase.style.display="none"),i.pointerId===this.lookId&&(this.lookId=null),i.pointerType==="mouse"&&i.button===0&&(this.mouseSwing=!1)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),window.addEventListener("contextmenu",i=>i.preventDefault())}setTouchMode(t){this.touchMode!==t&&(this.touchMode=t,document.body.classList.toggle("touch",t))}bindButtons(){let t=(i,n,s,a=!1)=>{let o=document.getElementById(i);if(!o)return;let l=null,c=0,u=0;o.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),d.pointerType==="touch"&&this.setTouchMode(!0),l=d.pointerId,c=d.clientX,u=d.clientY,o.setPointerCapture?.(d.pointerId),o.classList.add("down"),n()}),o.addEventListener("pointermove",d=>{a&&d.pointerId===l&&(this._look.dx+=(d.clientX-c)*1.4,this._look.dy+=(d.clientY-u)*1,c=d.clientX,u=d.clientY)});let h=d=>{d.pointerId===l&&(l=null,o.classList.remove("down"),s&&s())};o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h)};t("btn-swing",()=>this.touchSwing=!0,()=>this.touchSwing=!1,!0),t("btn-jump",()=>{this._edges.jumpDown=!0,this.touchJump=!0},()=>{this._edges.jumpUp=!0,this.touchJump=!1}),t("btn-zip",()=>this._edges.zip=!0),t("btn-throw",()=>this._edges.throw=!0),t("btn-cam",()=>this._edges.cam=!0),t("btn-pause",()=>this._edges.pause=!0),t("btn-action",()=>this._edges.action=!0),document.getElementById("minimap")?.addEventListener("pointerdown",i=>{i.stopPropagation(),this._edges.map=!0})}bindKeys(){window.addEventListener("keydown",t=>{if(t.repeat)return;this.setTouchMode(!1);let e=t.code;this.keys.add(e),e==="Space"&&(this._edges.jumpDown=!0,t.preventDefault()),(e==="KeyE"||e==="KeyQ")&&(this._edges.zip=!0),e==="KeyF"&&(this._edges.throw=!0),(e==="KeyV"||e==="KeyC")&&(this._edges.cam=!0),(e==="Escape"||e==="KeyP")&&(this._edges.pause=!0),e==="KeyM"&&(this._edges.map=!0),(e==="Enter"||e==="KeyR")&&(this._edges.action=!0)}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="Space"&&(this._edges.jumpUp=!0)}),window.addEventListener("blur",()=>this.keys.clear())}poll(){let t=this.keys,e=this.joy.x,i=this.joy.y;(t.has("KeyW")||t.has("ArrowUp"))&&(i+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1);let n=Math.hypot(e,i);n>1&&(e/=n,i/=n),this.move.x=e,this.move.y=i,this.look.dx=this._look.dx,this.look.dy=this._look.dy,this._look.dx=0,this._look.dy=0;let s=t.has("ShiftLeft")||t.has("ShiftRight");this.swingHeld=this.enabled&&(this.touchSwing||this.mouseSwing||s);let a=this._edges;this.jumpPressed=!!a.jumpDown,this.jumpReleased=!!a.jumpUp,this.jumpHeld=!!this.touchJump||t.has("Space"),this.zipPressed=!!a.zip,this.throwPressed=!!a.throw,this.camPressed=!!a.cam,this.pausePressed=!!a.pause,this.mapPressed=!!a.map,this.actionPressed=!!a.action,this._edges={},this.enabled||(this.move.x=this.move.y=0,this.look.dx=this.look.dy=0,this.jumpPressed=this.zipPressed=this.throwPressed=!1)}reset(){this.touchSwing=!1,this.touchJump=!1,this.mouseSwing=!1,this.keys.clear(),this.joy.id=null,this.joy.x=0,this.joy.y=0,this.joyBase&&(this.joyBase.style.display="none"),this.lookId=null,this._edges={}}};var Ee=r=>document.getElementById(r),Ko=new C,jo=class{constructor(t){this.game=t,this.el={money:Ee("money"),balloons:Ee("balloons"),clock:Ee("clock"),speed:Ee("speed"),job:Ee("job"),jobTitle:Ee("job-title"),jobBody:Ee("job-body"),toasts:Ee("toasts"),combo:Ee("combo"),reticle:Ee("reticle"),zipMark:Ee("zip-mark"),objArrow:Ee("obj-arrow"),objMark:Ee("obj-mark"),objDist:Ee("obj-dist"),action:Ee("btn-action"),actionLabel:Ee("action-label"),swing:Ee("btn-swing"),zip:Ee("btn-zip"),throwBtn:Ee("btn-throw"),papers:Ee("papers-left"),camLabel:Ee("cam-label"),hint:Ee("hint")},this.cache={},this.mm=Ee("minimap"),this.mmCtx=this.mm.getContext("2d"),this.mapTimer=0,this.buildMapImage()}set(t,e,i){this.cache[t]!==i&&(this.cache[t]=i,e.textContent=i)}setHTML(t,e,i){this.cache[t]!==i&&(this.cache[t]=i,e.innerHTML=i)}show(t,e,i){let n="vis_"+t;this.cache[n]!==i&&(this.cache[n]=i,e.style.display=i?"":"none")}toast(t,e=""){let i=document.createElement("div");for(i.className="toast "+e,i.textContent=t,this.el.toasts.appendChild(i);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove();setTimeout(()=>i.classList.add("out"),2600),setTimeout(()=>i.remove(),3200)}buildMapImage(){let t=this.game.city,e=1024,i=et.SHORE+80;this.mapExt=i,this.mapScale=e/(i*2);let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),a=u=>(u+i)*this.mapScale;s.fillStyle="#1d4e66",s.fillRect(0,0,e,e),s.fillStyle="#5d6168";let o=a(-et.SHORE),l=a(et.SHORE);s.fillRect(o,o,l-o,l-o);for(let u of t.blocks)for(let h of u){let d=et.BLOCK/2;s.fillStyle=h.type===1?"#4f8a3c":h.type===2?"#a19a8e":"#8a8a86",s.fillRect(a(h.cx-d),a(h.cz-d),et.BLOCK*this.mapScale,et.BLOCK*this.mapScale)}for(let u of t.buildings){let h=u.tiers[0],d=Pt(u.height/220,0,1),f=Math.round(200-d*120);s.fillStyle=`rgb(${f},${f+4},${f+12})`,s.fillRect(a(h.minX),a(h.minZ),(h.maxX-h.minX)*this.mapScale,(h.maxZ-h.minZ)*this.mapScale)}let c=t.landmarks.bridge;s.fillStyle="#b5452c",s.fillRect(a(c.x0),a(c.z-13),c.len*this.mapScale,26*this.mapScale),this.mapImg=n}drawMinimap(t,e,i,n=!1,s=this.mmCtx,a=this.mm.width){let o=s,l=this.mapScale,c=this.mapExt,u=a/2;o.save(),o.clearRect(0,0,a,a),n||(o.beginPath(),o.arc(u,u,u-2,0,Math.PI*2),o.clip());let h=n?a/this.mapImg.width:1.6*(a/300);o.fillStyle="#1d4e66",o.fillRect(0,0,a,a),o.translate(u,u),n||o.rotate(e.yaw),o.scale(h,h);let d=(n?0:t.pos.x+c)*l,f=(n?0:t.pos.z+c)*l;n?o.drawImage(this.mapImg,-this.mapImg.width/2,-this.mapImg.height/2):o.drawImage(this.mapImg,-d,-f);let p=(E,x)=>n?[E*l,x*l]:[(E+c)*l-d,(x+c)*l-f],y=n?1/0:(u-10)/h,g=n?2.6:1,m=(E,x,S,P,R=!1,N)=>{P*=g;let[U,z]=p(E,x),I=Math.hypot(U,z);if(I>y){if(!R)return;U=U/I*y,z=z/I*y}o.fillStyle=S,o.beginPath(),o.arc(U,z,P/h,0,Math.PI*2),o.fill(),o.lineWidth=2/h,o.strokeStyle="#fff",o.stroke(),N&&(o.save(),o.translate(U,z),n||o.rotate(-e.yaw),o.fillStyle="#fff",o.font=`bold ${11*g/h}px sans-serif`,o.lineWidth=3*g/h,o.strokeStyle="rgba(0,0,0,0.8)",o.strokeText(N,0,-P/h-3/h),o.textAlign="center",o.fillText(N,0,-P/h-3/h),o.restore())},_=i.active;if(!_)for(let E of i.spots)m(E.x,E.z,E.type==="pizza"?"#ff8a1f":"#3fd0ff",n?7:6,!0,n?E.name:null);if(_&&_.type==="pizza")for(let E of _.orders)E.done||m(E.x,E.z,"#ff8a1f",6,!0,n?E.who:null);if(_&&_.type==="paper")for(let E of _.targets)E.hit||m(E.x,E.z,"#3fd0ff",5,!0);let[T,M]=p(t.pos.x,t.pos.z);o.translate(T,M),o.rotate(-t.facing+Math.PI),o.fillStyle="#ffe14d",o.strokeStyle="#000",o.lineWidth=1.5/h;let v=(n?22:8)/h;if(o.beginPath(),o.moveTo(0,-v*1.2),o.lineTo(v*.8,v),o.lineTo(0,v*.5),o.lineTo(-v*.8,v),o.closePath(),o.fill(),o.stroke(),o.restore(),!n){let E=e.yaw,x=u+Math.sin(-E)*(u-11)*-1,S=u-Math.cos(-E)*(u-11);o.fillStyle="#ff5050",o.font="bold 13px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("N",x,S),o.strokeStyle="rgba(255,255,255,0.8)",o.lineWidth=3,o.beginPath(),o.arc(u,u,u-2,0,Math.PI*2),o.stroke()}}project(t,e,i,n){Ko.set(t,e,i).project(n);let s=Ko.z>1,a=window.innerWidth,o=window.innerHeight,l=(Ko.x*.5+.5)*a,c=(-Ko.y*.5+.5)*o;return s&&(l=a-l,c=o-c),{x:l,y:c,behind:s}}update(t,e){let{player:i,jobs:n,cam:s,sky:a}=e,o=this.el;this.set("money",o.money,`$${e.money}`),this.set("balloons",o.balloons,`${e.balloons.count}/${e.balloons.total}`),this.set("clock",o.clock,a.clockString());let l=Math.round(i.speed*3.6);this.set("speed",o.speed,`${l}`);let c=i.combo;c.count>=3?(this.show("combo",o.combo,!0),this.setHTML("combo",o.combo,`<b>x${c.count}</b> COMBO <span>${Math.round(c.score)}</span>`)):this.show("combo",o.combo,!1);let u=n.active;if(u)if(this.show("job",o.job,!0),u.type==="pizza"){this.set("jobTitle",o.jobTitle,`\u{1F355} ${u.spot.name}`);let p=u.orders.map(m=>{let _=m.done?m.failed?"failed":"done":m.left<15?"urgent":"",T=m.roof?"rooftop":"front door";return`<div class="order ${_}"><span>${m.who} \xB7 ${T}</span><b>${m.done?m.failed?"\u2717":"\u2713":Tc(m.left)}</b></div>`}),y=Math.round(u.condition),g=y>70?"#5be37a":y>40?"#ffd166":"#ff5a5a";p.push(`<div class="bar"><i style="width:${y}%;background:${g}"></i><label>Pizza condition ${y}%</label></div>`),this.setHTML("jobBody",o.jobBody,p.join(""))}else{this.set("jobTitle",o.jobTitle,`\u{1F4F0} ${u.spot.name} route`);let p=u.targets.filter(y=>!y.hit).length;this.setHTML("jobBody",o.jobBody,`<div class="order ${u.left<15?"urgent":""}"><span>Subscribers left: ${p}</span><b>${Tc(u.left)}</b></div><div class="order"><span>Papers: ${u.papers}</span><b>${u.hits} hit</b></div>`)}else this.show("job",o.job,!1);let h=u&&u.type==="paper";this.show("throw",o.throwBtn,!!h),h&&this.set("papers",o.papers,`${u.papers}`);let d=n.canStart();if(this.show("action",o.action,!!d),d&&this.set("actionLabel",o.actionLabel,d.type==="pizza"?"Start pizza delivery":"Start paper route"),o.swing.classList.toggle("ready",i.anchorHint),o.zip.classList.toggle("ready",i.zipCandidate.valid),o.reticle.classList.toggle("ready",i.zipCandidate.valid),i.zipCandidate.valid&&i.state!=="zip"){let p=i.zipCandidate.target,y=this.project(p.x,p.y-(i.zipCandidate.perch?.9:0),p.z,s.camera);y.behind?this.show("zipm",o.zipMark,!1):(this.show("zipm",o.zipMark,!0),o.zipMark.style.transform=`translate(${y.x}px, ${y.y}px) translate(-50%,-50%)`,o.zipMark.classList.toggle("perch",i.zipCandidate.perch))}else this.show("zipm",o.zipMark,!1);let f=n.objective(i);if(f){let p=this.project(f.x,f.y+2,f.z,s.camera),y=window.innerWidth,g=window.innerHeight,m=46,_=86,T=!p.behind&&p.x>m&&p.x<y-m&&p.y>m&&p.y<g-_;if(this.set("objd",o.objDist,`${Math.round(Math.hypot(f.dist,f.y-i.pos.y))} m`),o.objMark.className=f.type,o.objArrow.className=f.type,T)this.show("objm",o.objMark,!0),this.show("obja",o.objArrow,!1),o.objMark.style.transform=`translate(${p.x}px, ${p.y}px) translate(-50%,-100%)`,o.objMark.appendChild(o.objDist);else{this.show("objm",o.objMark,!1),this.show("obja",o.objArrow,!0);let M=y/2,v=g/2,E=p.x-M,x=p.y-v;p.behind&&Math.abs(x)<1&&(x=1);let S=Math.min((M-m-20)/Math.abs(E||.001),(x>0?v-_:v-m-30)/Math.abs(x||.001)),P=M+E*S,R=v+x*S,N=Math.atan2(x,E);o.objArrow.style.transform=`translate(${P}px, ${R}px) translate(-50%,-50%)`,o.objArrow.firstElementChild.style.transform=`rotate(${N}rad)`,o.objArrow.appendChild(o.objDist)}}else this.show("objm",o.objMark,!1),this.show("obja",o.objArrow,!1);this.mapTimer-=t,this.mapTimer<=0&&(this.mapTimer=1/15,this.drawMinimap(i,(s.camera,s),n))}};var Qo=16747039,tl=4182271,rx=[{name:"Slice Express",near:[-300,330]},{name:"Rocco's Pizza",near:[330,-260]},{name:"Mamma Pie",near:[420,470]}],ax=[{name:"Daily Swing Stand",near:[-420,-380]},{name:"Uptown News",near:[150,520]}],ox=["Maple","Harbor","Ash","Cedar","Union","Bay","Elm","Market","Pine","Grand","Hill","River","Oak"],lx=["Alex","Sam","Priya","Jordan","Mei","Diego","Noor","Kai","Lena","Omar","Rosa","Theo","Ivy","Ben"];function cd(r){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");if(e.fillStyle=r==="pizza"?"#ff8a1f":"#3fd0ff",e.beginPath(),e.arc(64,64,58,0,Math.PI*2),e.fill(),e.lineWidth=6,e.strokeStyle="#fff",e.stroke(),r==="pizza"){e.fillStyle="#ffd36b",e.beginPath(),e.moveTo(64,104),e.lineTo(30,36),e.quadraticCurveTo(64,18,98,36),e.closePath(),e.fill(),e.fillStyle="#c8742f",e.beginPath(),e.moveTo(30,36),e.quadraticCurveTo(64,18,98,36),e.lineTo(94,44),e.quadraticCurveTo(64,28,34,44),e.closePath(),e.fill(),e.fillStyle="#d6332a";for(let[n,s]of[[62,52],[50,66],[74,70],[64,86]])e.beginPath(),e.arc(n,s,6,0,6.3),e.fill()}else{e.fillStyle="#f4f4f4",e.fillRect(30,32,68,64),e.fillStyle="#333",e.fillRect(36,38,56,10);for(let n=0;n<5;n++)e.fillRect(36,54+n*8,n%2?26:56,4);e.fillRect(66,54,26,20)}return new Xi(t)}function hd(r,t,e){let i=document.createElement("canvas");i.width=512,i.height=128;let n=i.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,512,128),n.strokeStyle=e,n.lineWidth=8,n.strokeRect(8,8,496,112),n.fillStyle=e,n.font="bold 60px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(r,256,68),new Xi(i)}var el=class{constructor(t,e,i=260,n=1.4){this.group=new Ae;let s=new Tt(new le(n,n,i,12,1,!0),new Ve({color:e,transparent:!0,opacity:.28,blending:un,depthWrite:!1,side:Le,fog:!1}));s.position.y=i/2,this.ring=new Tt(new xs(2.2,3,32),new Ve({color:e,transparent:!0,opacity:.8,side:Le,depthWrite:!1,fog:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.12,this.group.add(s,this.ring),this.group.visible=!1,t.add(this.group),this.t=Math.random()*6}show(t,e,i){this.group.position.set(t,e,i),this.group.visible=!0}hide(){this.group.visible=!1}update(t,e){this.t+=t;let i=1+Math.sin(this.t*4)*.12;if(this.ring.scale.set(i,i,i),e){let n=Math.hypot(e.pos.x-this.group.position.x,e.pos.z-this.group.position.z);this.group.children[0].material.opacity=.28*Math.min(1,Math.max(0,(n-6)/30))}}},il=class{constructor(t,e,i){this.scene=t,this.city=e,this.game=i,this.rng=new fi(Date.now()&65535),this.spots=[],this.active=null,this.icons={pizza:cd("pizza"),paper:cd("paper")},this.placeSpots(),this.beacons=Array.from({length:12},()=>new el(t,16777215)),this.papers=[];let n=new le(.11,.11,.42,8);n.rotateZ(Math.PI/2);let s=new be({color:15262936});for(let a=0;a<10;a++){let o=new Tt(n,s);o.visible=!1,t.add(o),this.papers.push({mesh:o,active:!1,vel:new C,life:0,landed:!1})}this.nearSpot=null,this.streak=0,this._v=new C,this._hit={},this.buildCargo()}placeSpots(){let t=this.city,e=new Set,i=n=>{let s=null,a=1/0;for(let o of t.doors){if(e.has(o.building)||o.building.landmark||o.building.height>90)continue;let l=Math.hypot(o.x-n[0],o.z-n[1]);l<a&&(a=l,s=o)}return e.add(s.building),s};for(let n of rx){let s=i(n.near),a={type:"pizza",name:n.name,x:s.x,y:0,z:s.z,nx:s.nx,nz:s.nz};this.spots.push(a),this.buildShop(a)}for(let n of ax){let s=Pt(Math.floor((n.near[0]+et.HALF)/et.PITCH),0,et.N-1),a=Pt(Math.floor((n.near[1]+et.HALF)/et.PITCH),0,et.N-1),o=et.BLOCK/2-3.2,l={type:"paper",name:n.name,x:zi(s)+o,y:0,z:zi(a)+o,nx:1,nz:0};this.buildKiosk(l),l.x-=4.5,this.spots.push(l)}for(let n of this.spots){let s=new Ks(new ms({map:this.icons[n.type],depthWrite:!1,fog:!1}));s.position.set(n.x,4.2,n.z),s.scale.set(2.2,2.2,1),this.scene.add(s),n.sprite=s;let a=new Tt(new xs(2.6,3.2,32),new Ve({color:n.type==="pizza"?Qo:tl,transparent:!0,opacity:.85,side:Le,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(n.x,.08,n.z),this.scene.add(a),n.ring=a;let o=new el(this.scene,n.type==="pizza"?Qo:tl,70,.6);o.ring.visible=!1,o.show(n.x,0,n.z),n.pillar=o}}buildShop(t){let e=t.x-t.nx*2.2,i=t.z-t.nz*2.2,n=Math.atan2(t.nx,t.nz),s=new Tt(new ui(6,1.5),new Ve({map:hd(t.name.toUpperCase(),"#d6332a","#fff3c4")}));s.position.set(e+t.nx*.08,4.4,i+t.nz*.08),s.rotation.y=n;let a=new Tt(new Lt(7,.25,1.6),new be({color:16747039}));a.position.set(e+t.nx*.8,3.4,i+t.nz*.8),a.rotation.y=n,a.rotation.x=0,this.scene.add(s,a)}buildKiosk(t){let e=new Ae,i=new Tt(new Lt(2.6,2.6,2),new be({color:2062925}));i.position.y=1.3;let n=new Tt(new Lt(3.2,.25,2.6),new be({color:1333562}));n.position.y=2.75;let s=new Tt(new ui(2.6,.65),new Ve({map:hd("NEWS","#fff","#14213d"),side:Le}));s.position.set(0,3.25,0),s.rotation.y=Math.PI/2;let a=new Tt(new Lt(.8,.5,.6),new be({color:15658734}));a.position.set(0,.25,-1.35),e.add(i,n,s,a),e.position.set(t.x,0,t.z),this.scene.add(e),this.game.world.addBox(t.x-1.3,0,t.z-1,t.x+1.3,2.9,t.z+1,null)}buildCargo(){let t=this.game.hero;this.pizzaBoxes=[];let e=new be({color:15918022});for(let i=0;i<3;i++){let n=new Tt(new Lt(.42,.07,.42),e);n.position.set(0,.22+i*.075,-.12),n.visible=!1,t.cargo.add(n),this.pizzaBoxes.push(n)}this.paperBundle=new Tt(new le(.12,.12,.34,8),new be({color:15262936})),this.paperBundle.rotation.z=Math.PI/2,this.paperBundle.position.set(0,.25,-.05),this.paperBundle.visible=!1,t.cargo.add(this.paperBundle)}updateCargo(){let t=this.active,e=t&&t.type==="pizza"?t.orders.filter(i=>!i.done).length:0;this.pizzaBoxes.forEach((i,n)=>i.visible=n<e),this.paperBundle.visible=!!(t&&t.type==="paper"&&t.papers>0),this.paperBundle.visible&&this.paperBundle.scale.set(1,1,.5+Math.min(1,t.papers/12)*1.2)}canStart(){return!this.active&&this.nearSpot}start(){let t=this.nearSpot;!t||this.active||(t.type==="pizza"?this.startPizza(t):this.startPaper(t),this.updateCargo(),this.game.sound.play("pickup"))}randomDestination(t,e,i){let n=this.city;for(let s=0;s<60;s++){let a=n.buildings[this.rng.int(0,n.buildings.length-1)],o=a.top,l=(o.minX+o.maxX)/2,c=(o.minZ+o.maxZ)/2,u=Math.hypot(l-t.x,c-t.z);if(u<e||u>i)continue;if(this.rng.chance(.55)||!a.doors.length){for(let f=0;f<6;f++){let p=this.rng.float(o.minX+2,o.maxX-2),y=this.rng.float(o.minZ+2,o.maxZ-2);if(!this.game.world.overlaps(p,o.maxY+1,y,.6,.9))return{x:p,y:o.maxY,z:y,roof:!0,building:a}}continue}let d=this.rng.pick(a.doors);return{x:d.x,y:0,z:d.z,roof:!1,building:a,nx:d.nx,nz:d.nz}}return null}startPizza(t){let e=1+(this.rng.chance(.55)?1:0)+(this.rng.chance(.25)?1:0),i=[];for(let n=0;n<e;n++){let s=this.randomDestination(t,200,700);if(!s)continue;let a=Math.hypot(s.x-t.x,s.z-t.z),o=Math.round(28+a/11+n*18+(s.roof?8:0));i.push({...s,dist:a,limit:o,left:o,done:!1,failed:!1,who:this.rng.pick(lx),street:`${this.rng.int(10,990)} ${this.rng.pick(ox)} St`,slot:n})}this.active={type:"pizza",spot:t,orders:i,condition:100,earned:0,stars:[],time:0},i.forEach((n,s)=>{let a=Math.atan2(t.x-n.x,t.z-n.z);this.game.peds.setSpecial(s,!0,n.x,n.y,n.z,a,0);let o=this.beacons[s];o.group.children[0].material.color.setHex(Qo),o.ring.material.color.setHex(Qo),o.show(n.x,n.y,n.z),n.beacon=o}),this.game.hud.toast(`\u{1F355} ${i.length} order${i.length>1?"s":""} from ${t.name}! Deliver while they're hot.`,"job")}startPaper(t){let e=this.city,i=e.doors.filter(u=>u.building.height<60&&Math.hypot(u.x-t.x,u.z-t.z)<300&&Math.hypot(u.x-t.x,u.z-t.z)>25),n=e.buildings.filter(u=>u.height<28&&!u.landmark&&Math.hypot((u.fp.x0+u.fp.x1)/2-t.x,(u.fp.z0+u.fp.z1)/2-t.z)<280),s=[],a=(u,h)=>s.every(d=>Math.hypot(d.x-u,d.z-h)>28),o=0;for(;s.length<6&&i.length&&o++<200;){let u=i[this.rng.int(0,i.length-1)];a(u.x,u.z)&&s.push({x:u.x,y:.05,z:u.z,roof:!1,hit:!1})}for(o=0;s.length<8&&n.length&&o++<100;){let h=n[this.rng.int(0,n.length-1)].top,d=(h.minX+h.maxX)/2,f=(h.minZ+h.maxZ)/2;a(d,f)&&!this.game.world.overlaps(d,h.maxY+.5,f,.5,.4)&&s.push({x:d,y:h.maxY+.05,z:f,roof:!0,hit:!1})}let l=s.length+5,c=50+s.length*9;this.active={type:"paper",spot:t,targets:s,papers:l,thrown:0,hits:0,bulls:0,limit:c,left:c,earned:0,streak:0},s.forEach((u,h)=>{let d=this.beacons[h];d.group.children[0].material.color.setHex(tl),d.ring.material.color.setHex(tl),d.show(u.x,u.y,u.z),u.beacon=d}),this.game.hud.toast(`\u{1F4F0} Paper route: ${s.length} subscribers, ${l} papers. Throw with the \u{1F4F0} button!`,"job")}cancel(){this.active&&this.finish(!0)}onImpact(t){let e=this.active;if(!e||e.type!=="pizza")return;let i=Math.min(40,t*2.2);e.condition=Math.max(0,e.condition-i),i>2&&this.game.hud.toast(`Careful! Pizza condition ${Math.round(e.condition)}%`,"warn")}update(t,e){for(let n of this.beacons)n.group.visible&&n.update(t,e);this.nearSpot=null;for(let n of this.spots){n.sprite.position.y=4.2+Math.sin(performance.now()*.003)*.2;let s=Math.hypot(e.pos.x-n.x,e.pos.z-n.z);!this.active&&s<6&&e.pos.y<4&&(this.nearSpot=n),n.ring.visible=!this.active,n.pillar.group.visible=!this.active&&s>12}this.updatePapers(t);let i=this.active;if(i)if(i.type==="pizza"){i.time+=t;for(let n of i.orders){if(n.done)continue;n.left-=t;let s=e.pos.x-n.x,a=e.pos.z-n.z,o=e.pos.y-.9-n.y;s*s+a*a<4.5*4.5&&Math.abs(o)<3.5?this.deliver(n):n.left<=0&&(n.done=!0,n.failed=!0,n.beacon.hide(),this.game.peds.setSpecial(n.slot,!1),this.game.hud.toast(`\u231B ${n.who}'s order was too late and got cancelled.`,"bad"),this.game.sound.play("fail"),this.updateCargo())}i.orders.every(n=>n.done)&&this.finish(!1)}else{i.left-=t;let n=this.papers.some(s=>s.active&&!s.landed);(i.targets.every(s=>s.hit)||i.left<=0||i.papers<=0&&!n)&&this.finish(!1)}}deliver(t){let e=this.active;t.done=!0,t.beacon.hide();let i=Pt(t.left/t.limit,0,1),n=e.condition,s=10+Math.round(t.dist/25),a=Math.round(i*12),o=Math.round(n/100*10*(i>.2?1:.4)),l=s+a+o,c=i>.45&&n>85?5:i>.25&&n>65?4:n>45?3:n>20?2:1;e.earned+=l,e.stars.push(c),this.game.addMoney(l),this.game.stats.pizzas++,this.game.peds.setSpecial(t.slot,!0,t.x,t.y,t.z,Math.atan2(this.game.player.pos.x-t.x,this.game.player.pos.z-t.z),1),setTimeout(()=>this.game.peds.setSpecial(t.slot,!1),2500),this.game.fx.confetti(t.x,t.y+1,t.z),this.game.sound.play("chime"),this.game.hud.toast(`\u{1F355} Delivered to ${t.who}! +$${l} ${"\u2605".repeat(c)}${"\u2606".repeat(5-c)}`,"good"),this.game.peds.cheer(t.x,t.z,12),this.updateCargo()}throwPaper(){let t=this.active;if(!t||t.type!=="paper"||t.papers<=0)return!1;let e=this.papers.find(c=>!c.active)||this.papers[0],i=this.game.player,n=this._v.copy(i.pos);n.y+=.5;let s=i.camFwd,a=null,o=1/0;for(let c of t.targets){if(c.hit)continue;let u=c.x-n.x,h=c.y-n.y,d=c.z-n.z,f=Math.hypot(u,h,d);if(f>55)continue;let p=(u*s.x+h*s.y+d*s.z)/f;if(p<.25&&f>12)continue;let y=f*(1.6-p);y<o&&(o=y,a=c)}e.active=!0,e.landed=!1,e.life=5,e.mesh.visible=!0,e.mesh.position.copy(n);let l=18;if(a){let c=Math.hypot(a.x-n.x,a.z-n.z),u=Pt(c/26,.3,1.3),h=.35;e.vel.set((a.x+(Math.random()-.5)*h-n.x)/u,(a.y+.15-n.y)/u+.5*l*u,(a.z+(Math.random()-.5)*h-n.z)/u)}else e.vel.set(s.x*28,s.y*28+5,s.z*28).addScaledVector(i.vel,.5);return t.papers--,t.thrown++,i.throwT=.35,this.game.sound.play("throw"),this.updateCargo(),!0}updatePapers(t){let e=this.active,i=this.game.world;for(let n of this.papers){if(!n.active)continue;if(n.life-=t,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}if(n.landed)continue;n.vel.y-=18*t;let s=n.vel.length()*t,a=this._v.copy(n.vel).normalize(),o=i.raycast(n.mesh.position.x,n.mesh.position.y,n.mesh.position.z,a.x,a.y,a.z,s,this._hit);if(o?(n.mesh.position.set(o.x+o.nx*.1,o.y+o.ny*.1,o.z+o.nz*.1),n.landed=o.ny>.5,n.landed||n.vel.set(o.nx*2,-2,o.nz*2),this.game.sound.play("thud",{x:o.x,z:o.z})):(n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.12&&i.groundAt(n.mesh.position.x,n.mesh.position.z)!==null&&(n.mesh.position.y=.12,n.landed=!0,this.game.sound.play("thud",{x:n.mesh.position.x,z:n.mesh.position.z}))),n.mesh.rotation.y+=t*9,n.mesh.rotation.x+=t*4,n.landed&&n.mesh.rotation.set(0,n.mesh.rotation.y,0),e&&e.type==="paper")for(let l of e.targets){if(l.hit)continue;let c=Math.hypot(n.mesh.position.x-l.x,n.mesh.position.y-l.y,n.mesh.position.z-l.z);if(c<2){l.hit=!0,l.beacon.hide(),e.hits++,e.streak++;let u=c<.9;u&&e.bulls++;let h=6+(u?3:0)+Math.min(e.streak-1,5);e.earned+=h,this.game.addMoney(h),this.game.stats.papers++,this.game.fx.sparks(l.x,l.y+.4,l.z),this.game.sound.play("cash"),this.game.hud.toast(`${u?"\u{1F3AF} Bullseye!":"\u{1F4F0} Delivered!"} +$${h}${e.streak>1?`  streak x${e.streak}`:""}`,"good"),this.game.peds.cheer(l.x,l.z,10),n.landed=!0;break}}n.landed&&e&&e.type==="paper"&&(e.targets.some(c=>c.hit&&Math.hypot(n.mesh.position.x-c.x,n.mesh.position.z-c.z)<2.2)||(e.streak=0))}}finish(t){let e=this.active;if(!e)return;this.active=null;for(let n of this.beacons)n.hide();for(let n=0;n<12;n++)this.game.peds.setSpecial(n,!1);this.updateCargo();let i;if(t)i={title:"Job cancelled",lines:["No worries - the city will always need couriers."],earned:e.earned};else if(e.type==="pizza"){let n=e.orders.filter(o=>!o.failed).length,s=e.stars.length?e.stars.reduce((o,l)=>o+l,0)/e.stars.length:0,a=0;n===e.orders.length&&e.orders.length>1&&(a=10*e.orders.length),a&&this.game.addMoney(a),n===e.orders.length?this.streak++:this.streak=0,i={title:n===e.orders.length?"Pizza run complete!":"Pizza run finished",lines:[`Delivered ${n} / ${e.orders.length} orders`,`Pizza condition: ${Math.round(e.condition)}%`,`Rating: ${"\u2605".repeat(Math.round(s))}${"\u2606".repeat(5-Math.round(s))}`,a?`Multi-order bonus: +$${a}`:"",this.streak>1?`Perfect-run streak: ${this.streak}`:""].filter(Boolean),earned:e.earned+a}}else{let n=e.targets.length,s=e.hits===n?20+Math.max(0,Math.round(e.left/3)):0,a=e.thrown?Math.round(e.hits/e.thrown*100):0;a>=80&&e.hits>3&&(s+=10),s&&this.game.addMoney(s),i={title:e.hits===n?"Route complete!":"Route finished",lines:[`Papers delivered: ${e.hits} / ${n}`,`Bullseyes: ${e.bulls}`,`Accuracy: ${a}%`,s?`Route bonus: +$${s}`:""].filter(Boolean),earned:e.earned+s}}this.game.stats.jobs+=t?0:1,this.game.onJobFinished(i,t)}objective(t){let e=this.active;if(!e)return null;let i=null,n=1/0,s=e.type==="pizza"?e.orders.filter(a=>!a.done):e.targets.filter(a=>!a.hit);for(let a of s){let o=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);o<n&&(n=o,i=a)}return i?{x:i.x,y:i.y,z:i.z,dist:n,type:e.type}:null}};var ud="skylineCourier.save.v1",cx={money:0,upgrades:{range:0,power:0,zip:0},suits:["courier"],suit:"courier",balloons:[],stats:{pizzas:0,papers:0,jobs:0,bestCombo:0,styleTips:0},tips:0,settings:{quality:"med",sens:1,invert:!1,chain:!0,vol:.8,vib:!0,fps:!1,cam:"third"}};function dd(){let r={};try{r=JSON.parse(localStorage.getItem(ud)||"{}")||{}}catch{r={}}let t=JSON.parse(JSON.stringify(cx));return{...t,...r,upgrades:{...t.upgrades,...r.upgrades||{}},stats:{...t.stats,...r.stats||{}},settings:{...t.settings,...r.settings||{}}}}function fd(r){try{localStorage.setItem(ud,JSON.stringify(r))}catch{}}qt.enabled=!1;var nl={low:{ratio:.8,far:1100,fog:1.35,aa:!1},med:{ratio:1.2,far:1900,fog:1,aa:!1},high:{ratio:2,far:4200,fog:.85,aa:!0}},zc=["Hold SWING near buildings to web-swing. Release to let go!","Let go near the top of a swing for a PERFECT RELEASE speed boost.","Run into a wall to run straight up it. Jump to kick off.","Aim the crosshair at a ledge and press ZIP. Press JUMP as you land to launch!","Orange \u{1F355} and blue \u{1F4F0} markers on the minimap are delivery jobs.","Tap the \u{1F441} button to switch between first and third person."],te=r=>document.getElementById(r),hx={move:{x:0,y:0},look:{dx:0,dy:0},swingHeld:!1,jumpHeld:!1,jumpPressed:!1,jumpReleased:!1,zipPressed:!1},Oc=class{constructor(){this.save=dd();let t=this.save.settings,e=nl[t.quality]||nl.med;this.canvas=te("game"),this.renderer=new Co({canvas:this.canvas,antialias:e.aa,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Dn,this.renderer.setClearColor(922660),this.scene=new Ys,this.world=new No,this.city=new Uo(this.scene,this.world),this.sky=new Fo(this.scene),this.cam=new zo(this.scene),this.hero=new ko(this.scene),this.player=new Ho(this.world),this.webs=new Vo(this.scene),this.traffic=new Wo(this.scene,this.city),this.peds=new Xo(this.scene,this.city),this.ambient=new qo(this.scene,this.city),this.balloons=new Yo(this.scene,this.city,this.save.balloons),this.fx=new Zo(this.scene,this.cam.camera),this.sound=new $o,this.input=new Jo,this.stats=this.save.stats,this.money=this.save.money,this.hud=new jo(this),this.jobs=new il(this.scene,this.city,this),this.state="title",this.menuStack=[],this.time=0,this.saveTimer=0,this.tipTimer=6,this.dynScale=1,this.frameAcc=0,this.frameN=0,this.fpsAcc=0,this.fpsN=0,this.lastStyleToast=0,this.lastMissToast=-10,this.ropeLine=null,this.zipLines=[],this.prevState="air",this.handTmp=new C,this.findSpawn(),this.player.teleport(this.spawn.x,this.spawn.y,this.spawn.z),this.player.facing=Math.PI*.75,this.cam.yaw=this.player.facing+Math.PI,this.applySettings(),this.applyUpgrades(),this.applySuit(),this.cam.setMode(t.cam==="first"?"first":"third"),this.cam.blend=1,this.bindUI(),this.onResize(),window.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="play"&&this.openMenu("pause"),this.sound.suspend(),this.persist()):this.state!=="title"&&this.sound.resume()}),window.__onAndroidBack=()=>this.onBack(),window.__onAndroidPause=()=>{this.state==="play"&&this.openMenu("pause"),this.sound.suspend(),this.persist()},te("loading").remove(),this.last=performance.now(),requestAnimationFrame(i=>this.loop(i))}findSpawn(){let t=null,e=1/0;for(let i of this.city.buildings){if(i.height<45||i.height>95||i.landmark)continue;let n=i.top,s=(n.minX+n.maxX)/2,a=(n.minZ+n.maxZ)/2,o=Math.hypot(s+170,a-160);o<e&&!this.world.overlaps(s,n.maxY+1,a,.5,.9)&&(e=o,t={x:s,y:n.maxY+1,z:a})}this.spawn=t||{x:0,y:40,z:0}}applySettings(){let t=this.save.settings,e=nl[t.quality]||nl.med;this.quality=e,this.cam.camera.far=e.far,this.cam.camera.updateProjectionMatrix(),this.sky.fogScale=e.fog,this.cam.sens=t.sens,this.cam.invertY=t.invert,this.player.autoChain=t.chain,this.sound.setVolume(t.vol),te("fps").classList.toggle("hidden",!t.fps),this.dynScale=1,this.onResize();let i={"set-quality":t.quality,"set-invert":t.invert?"1":"0","set-chain":t.chain?"1":"0","set-vib":t.vib?"1":"0","set-fps":t.fps?"1":"0"};for(let[n,s]of Object.entries(i))for(let a of te(n).querySelectorAll("button"))a.classList.toggle("on",a.dataset.v===s);te("set-sens").value=t.sens,te("set-vol").value=t.vol}applyUpgrades(){let t=this.save.upgrades;this.player.stats.range=br.range.values[t.range],this.player.stats.power=br.power.values[t.power],this.player.stats.zip=br.zip.values[t.zip]}applySuit(){let t=Lo.find(e=>e.id===this.save.suit)||Lo[0];this.hero.setSuit(t),this.cam.setSuit(t)}onResize(){let t=window.innerWidth,e=window.innerHeight,i=window.devicePixelRatio||1,n=Math.min(i,this.quality?this.quality.ratio:1.2)*this.dynScale;this.renderer.setPixelRatio(Math.max(.5,n)),this.renderer.setSize(t,e,!1),this.cam.camera.aspect=t/e,this.cam.camera.updateProjectionMatrix(),this.fx.points.material.uniforms.uScale.value=e*this.renderer.getPixelRatio()/(2*Math.tan(this.cam.camera.fov*Math.PI/360))}persist(){this.save.money=this.money,this.save.balloons=this.balloons.items.filter(t=>t.got).map(t=>t.id),this.save.stats=this.stats,this.save.settings.cam=this.cam.mode,fd(this.save)}addMoney(t){this.money+=t,this.sound.play("cash"),this.persist()}vibrate(t){if(this.save.settings.vib)try{window.AndroidBridge?window.AndroidBridge.vibrate(t):navigator.vibrate?.(t)}catch{}}bindUI(){let t=(n,s)=>n.addEventListener("click",a=>{a.stopPropagation(),this.sound.play("click"),s(a)});t(te("play"),()=>this.startPlaying()),t(te("resume"),()=>this.closeAllMenus()),t(te("toggle-cam"),()=>{this.toggleCamera(),this.updatePauseMenu()}),t(te("respawn"),()=>{this.player.teleport(this.spawn.x,this.spawn.y,this.spawn.z),this.closeAllMenus()}),t(te("quit-job"),()=>{this.jobs.cancel()}),t(te("sum-ok"),()=>this.closeAllMenus()),document.querySelectorAll("[data-open]").forEach(n=>t(n,()=>this.openMenu(n.dataset.open))),document.querySelectorAll("[data-back]").forEach(n=>t(n,()=>this.back()));let e=(n,s)=>te(n).querySelectorAll("button").forEach(a=>t(a,()=>{s(a.dataset.v),this.applySettings(),this.persist()})),i=this.save.settings;e("set-quality",n=>i.quality=n),e("set-invert",n=>i.invert=n==="1"),e("set-chain",n=>i.chain=n==="1"),e("set-vib",n=>i.vib=n==="1"),e("set-fps",n=>i.fps=n==="1"),te("set-sens").addEventListener("input",n=>{i.sens=parseFloat(n.target.value),this.applySettings(),this.persist()}),te("set-vol").addEventListener("input",n=>{i.vol=parseFloat(n.target.value),this.applySettings(),this.persist()}),document.querySelectorAll(".menu").forEach(n=>n.addEventListener("pointerdown",s=>s.stopPropagation()))}startPlaying(){this.sound.init(),this.sound.resume(),te("title").classList.add("hidden"),this.state="play",this.input.reset(),this.last=performance.now(),setTimeout(()=>te("kb-hint").classList.add("fade"),3e4);try{!window.AndroidBridge&&document.documentElement.requestFullscreen&&matchMedia("(pointer: coarse)").matches&&document.documentElement.requestFullscreen().then(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}this.save.tips<zc.length&&(this.tipTimer=1.5)}openMenu(t){let e=this.menuStack[this.menuStack.length-1];e!==t&&(e&&te(e).classList.add("hidden"),this.menuStack.push(t),te(t).classList.remove("hidden"),this.state==="play"&&(this.state="menu"),this.input.reset(),t==="pause"&&this.updatePauseMenu(),t==="shop"&&this.renderShop(),t==="map"&&this.hud.drawMinimap(this.player,this.cam,this.jobs,!0,te("mapcanvas").getContext("2d"),900))}back(){let t=this.menuStack.pop();t&&te(t).classList.add("hidden");let e=this.menuStack[this.menuStack.length-1];e?(te(e).classList.remove("hidden"),e==="pause"&&this.updatePauseMenu()):this.state==="menu"&&(this.state="play",this.input.reset(),this.last=performance.now())}closeAllMenus(){for(;this.menuStack.length;)te(this.menuStack.pop()).classList.add("hidden");this.state==="menu"&&(this.state="play"),this.input.reset(),this.last=performance.now()}onBack(){if(this.state==="title"){this.menuStack.length?this.back():window.AndroidBridge?.exitApp();return}this.menuStack.length?this.back():this.openMenu("pause")}updatePauseMenu(){te("toggle-cam").textContent=`Camera: ${this.cam.mode==="first"?"1st":"3rd"} person`,te("quit-job").style.display=this.jobs.active?"":"none";let t=this.stats;te("stats-line").innerHTML=`\u{1F355} Pizzas: <b>${t.pizzas}</b> \xB7 \u{1F4F0} Papers: <b>${t.papers}</b> \xB7 \u{1F388} ${this.balloons.count}/${this.balloons.total} \xB7 Best combo: <b>${t.bestCombo}</b>`}renderShop(){te("shop-money").textContent=`$${this.money}`;let t=this.save.upgrades,e=te("upgrades");e.innerHTML="";for(let[n,s]of Object.entries(br)){let a=t[n],o=a>=s.prices.length,l=o?0:s.prices[a],c=document.createElement("div");c.className="upg",c.innerHTML=`<div class="info"><b>${s.name}</b><small>${s.desc}</small><div class="pips">${[0,1,2].map(h=>`<i class="${h<a?"on":""}"></i>`).join("")}</div></div>`;let u=document.createElement("button");u.className="mbtn"+(o?"":" primary"),u.textContent=o?"MAX":`$${l}`,u.disabled=o||this.money<l,u.addEventListener("click",h=>{h.stopPropagation(),!(this.money<l||o)&&(this.money-=l,t[n]++,this.applyUpgrades(),this.sound.play("chime"),this.persist(),this.renderShop())}),c.appendChild(u),e.appendChild(c)}let i=te("suits");i.innerHTML="";for(let n of Lo){let s=this.save.suits.includes(n.id),a=this.save.suit===n.id,o=document.createElement("div");o.className="suit"+(a?" on":"");let l=c=>"#"+c.toString(16).padStart(6,"0");o.innerHTML=`<div class="swatch" style="background:linear-gradient(135deg, ${l(n.main)} 55%, ${l(n.accent)} 55%)"></div>${n.name}<br><small>${a?"Equipped":s?"Owned":"$"+n.price}</small>`,o.addEventListener("click",c=>{if(c.stopPropagation(),!s){if(this.money<n.price){this.sound.play("miss");return}this.money-=n.price,this.save.suits.push(n.id)}this.save.suit=n.id,this.applySuit(),this.sound.play("pickup"),this.persist(),this.renderShop()}),i.appendChild(o)}}toggleCamera(){let t=this.cam.toggle();te("cam-label").textContent=t==="first"?"1ST":"3RD",this.hud.toast(t==="first"?"\u{1F441} First-person view":"\u{1F3A5} Third-person view"),this.persist()}onJobFinished(t,e){this.menuStack.length&&this.closeAllMenus(),te("sum-title").textContent=t.title,te("sum-earned").textContent=t.earned?`+$${t.earned}`:"",te("sum-lines").innerHTML=t.lines.map(i=>`<div>${i}</div>`).join(""),this.sound.play(e?"miss":"chime"),this.openMenu("summary"),this.persist()}handleEvents(){let t=this.player,e=i=>this.cam.mode==="first"?this.cam.handWorld(i,this.handTmp):this.hero.handWorld(i,this.handTmp);for(let i of t.events)switch(i.type){case"web":this.ropeLine&&this.webs.release(this.ropeLine,t.vel),this.ropeLine=this.webs.shoot(i.anchor,e(i.side),t.rope.length),this.ropeLine.side=i.side,this.sound.play("web",{pan:i.side*.4}),this.vibrate(12);break;case"release":this.ropeLine&&this.webs.release(this.ropeLine,t.vel),this.ropeLine=null;break;case"wrap":this.ropeLine&&this.ropeLine.anchor.copy(i.anchor);break;case"zip":for(let n of this.zipLines)this.webs.release(n,t.vel);this.zipLines=[this.webs.shoot(i.target,e(1)),this.webs.shoot(i.target,e(-1))],this.zipLines[0].side=1,this.zipLines[1].side=-1,this.sound.play("zip"),this.vibrate(15);break;case"taut":this.sound.play("taut",{amount:i.amount}),this.cam.shake(Math.min(.4,i.amount/60)),this.vibrate(10);break;case"land":this.sound.play("land",{impact:i.impact}),i.impact>12&&this.fx.dust(i.x,i.y,i.z,Math.min(2,i.impact/18)),i.impact>17&&(this.cam.shake(Math.min(1,i.impact/40)),this.vibrate(30)),i.impact>14&&i.y<1&&this.peds.cheer(i.x,i.z,16);break;case"impact":this.jobs.onImpact(i.amount),this.cam.shake(Math.min(1,i.amount/15)),this.vibrate(45);break;case"perfect":this.sound.play("perfect");break;case"style":this.time-this.lastStyleToast>.8&&(this.lastStyleToast=this.time,this.hud.toast(`\u2728 ${i.label}`,"style"));break;case"comboEnd":{let n=Math.floor(i.points/40);this.stats.bestCombo=Math.max(this.stats.bestCombo,i.points),n>0&&(this.money+=n,this.stats.styleTips+=n,this.hud.toast(`Combo x${i.count} \xB7 ${i.points} style \xB7 +$${n} tips`,"style"),this.sound.play("cash"),this.persist());break}case"miss":this.sound.play("miss"),this.time-this.lastMissToast>6&&(this.lastMissToast=this.time,this.hud.toast("Nothing to web onto here - get closer to tall buildings!","warn"));break;case"splash":this.fx.splash(i.x,et.WATER_Y,i.z),this.sound.play("splash"),this.hud.toast("Splash! Back to dry land\u2026","warn"),this.ropeLine&&(this.webs.release(this.ropeLine,t.vel),this.ropeLine=null);break;case"step":this.sound.play("step");break;case"jump":case"vault":this.sound.play("jump");break;case"launch":case"trick":case"dive":this.sound.play("whoosh");break;case"wallLand":this.sound.play("land",{impact:Math.min(i.impact,12)});break;case"perch":this.sound.play("land",{impact:6});break}if(t.events.length=0,this.prevState==="zip"&&t.state!=="zip"){for(let i of this.zipLines)this.webs.release(i,t.vel);this.zipLines=[]}this.prevState=t.state;for(let i of this.traffic.events)i.type==="honk"&&this.sound.play("honk",i);this.traffic.events.length=0;for(let i of this.ambient.events)i.type==="birds"&&this.sound.play("birds");this.ambient.events.length=0}updateWebStarts(){let t=this.player,e=this.cam.mode==="first",i=(n,s)=>e?this.cam.handWorld(n,s):this.hero.handWorld(n,s);if(this.ropeLine&&!t.rope.active&&(this.webs.release(this.ropeLine,t.vel),this.ropeLine=null),this.ropeLine&&t.rope.active){i(this.ropeLine.side,this.ropeLine.start),this.ropeLine.anchor.copy(t.rope.visual);let n=Math.max(0,t.rope.length-t.pos.distanceTo(t.rope.anchor));this.ropeLine.restLen=this.ropeLine.start.distanceTo(t.rope.visual)+n}for(let n of this.zipLines)(n.state==="shoot"||n.state==="taut")&&(i(n.side,n.start),n.restLen=0)}loop(t){requestAnimationFrame(l=>this.loop(l));let e=(t-this.last)/1e3;this.last=t;let i=Pt(e,.001,.05);this.input.poll();let n=this.input,s=this.state==="play";if(s){this.time+=i,n.pausePressed&&this.openMenu("pause"),n.camPressed&&this.toggleCamera(),n.mapPressed&&this.openMenu("map"),n.actionPressed&&this.jobs.canStart()&&this.jobs.start(),n.throwPressed&&this.jobs.throwPaper(),this.player.update(i,n,this.cam),this.handleEvents(),this.traffic.update(i,this.player),this.peds.update(i,this.player),this.ambient.update(i,this.player);let l=this.balloons.update(i,this.player);if(l){this.fx.pop(l.x,l.y,l.z),this.sound.play("pop"),this.money+=10;let c=this.balloons.count;this.hud.toast(`\u{1F388} Balloon ${c}/${this.balloons.total}! +$10`,"good"),c===this.balloons.total&&(this.money+=500,this.hud.toast("\u{1F3C6} ALL BALLOONS FOUND! +$500","good")),this.persist()}this.jobs.update(i,this.player),this.sky.update(i,this.cam.camera.position),this.cam.update(i,this.player,n,this.world),this.save.tips<zc.length&&(this.tipTimer-=i,this.tipTimer<0&&(this.hud.toast("\u{1F4A1} "+zc[this.save.tips],"job"),this.save.tips++,this.tipTimer=11,this.persist())),this.saveTimer+=i,this.saveTimer>15&&(this.saveTimer=0,this.persist())}else if(this.state==="title"){this.time+=i,this.sky.update(i*.5,this.cam.camera.position),this.traffic.update(i,this.player),this.peds.update(i,this.player),this.ambient.update(i,this.player),this.player.update(i,hx,this.cam),this.player.events.length=0;let l=this.time*.08,c=this.cam.camera;c.position.set(this.player.pos.x+Math.cos(l)*14,this.player.pos.y+4.5,this.player.pos.z+Math.sin(l)*14),c.lookAt(this.player.pos.x,this.player.pos.y+.5,this.player.pos.z),this.cam.yaw=Math.atan2(-(this.player.pos.x-c.position.x),-(this.player.pos.z-c.position.z)),this.cam.pitch=-.15}ne.uTime.value=this.time,this.hero.setVisible(this.cam.mode!=="first"||this.state==="title"),this.hero.mats.accent.emissive.copy(this.hero.mats.accent.color),this.hero.mats.accent.emissiveIntensity=.08+ne.uNight.value*.55,this.hero.update(i,this.player,this.world),this.updateWebStarts(),this.webs.update(i,this.cam.camera.position);let a=this.player.speed;if(this.fx.update(i,s?Pt((a-28)/30,0,1):0,this.cam.camera.aspect,ne.uNight.value)&&s&&this.sound.play("boom",{x:1200,z:0}),s){let l=this.cam.camera.position;this.sound.listener.x=l.x,this.sound.listener.z=l.z,this.sound.listener.rx=Math.cos(this.cam.yaw),this.sound.listener.rz=-Math.sin(this.cam.yaw),this.sound.update(i,a,this.player.pos.y,this.player.state),this.hud.update(i,this)}this.renderer.render(this.scene,this.cam.camera),this.trackPerf(e)}trackPerf(t){if(this.frameAcc+=t,this.frameN++,this.frameAcc>2){let e=this.frameAcc/this.frameN;this.save.settings.fps&&(te("fps").textContent=`${Math.round(1/e)} fps \xB7 ${this.renderer.getPixelRatio().toFixed(2)}x`),e>.026&&this.dynScale>.55?(this.dynScale=Math.max(.55,this.dynScale-.1),this.onResize()):e<.0165&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale+.05),this.onResize()),this.frameAcc=0,this.frameN=0}}};function ux(){try{window.game=new Oc}catch(r){console.error(r);let t=document.getElementById("loading");t&&(t.textContent="Could not start: "+r.message+" (WebGL required)")}}requestAnimationFrame(()=>setTimeout(ux,30));})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

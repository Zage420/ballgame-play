const ua={ru:{title:"Колодец",eyebrow:"эксперимент",lead:"Крути кольца и проваливай шар в отверстие. Классика сохранена — рядом новые режимы и магазин.",best:"Рекорд",play:"Играть",hint:"Свайп влево-вправо или стрелки / A D",over:"Конец",score:"Счёт",continue:"Продолжить · реклама",again:"Играть снова",menu:"В меню",sound:"Звук",coins:"Монеты",shop:"Магазин",howto:"Как играть",back:"Назад",classic:"Классика",classicHint:"Та самая бесконечная партия",floors:"Этажи",easy:"Лёгкий",normal:"Средний",hard:"Сложный",fuse:"Запал",fuseHint:"Катающиеся бомбы. Наехал — взрыв, тап — перепрыгнуть",hop:"Перепрыгнуть",hopHint:"Пробел / тап по шару",won:"Этаж пройден",chest:"Сундук",chestCoins:"В сундуке монеты",chestSkin:"В сундуке скин",equipped:"Надето",buy:"Купить",owned:"Есть",fromChest:"Из сундука",earned:"Монет за забег",helpTitle:"Как это работает",helpRedTitle:"Ярко-красные плиты",helpRed:"Это опасность, не декор. Если шар приземляется на ярко-красную плиту — партия сразу кончается. Крути кольца так, чтобы падать в отверстие или на обычные цветные платформы.",helpClassicTitle:"Классика",helpClassic:"Бесконечный колодец. За каждый этаж — 100 очков. Если пролетаешь несколько этажей подряд, шар вспыхивает, разгоняется и выбивает 200, 300… прямо на себе.",helpFuseTitle:"Режим «Запал»",helpFuse:"По кольцам катаются чёрные шарики-бомбы с искрой. Это живые препятствия, не плиты. Наехал — взрыв. Перепрыгни бомбу тапом по шару, кнопкой внизу или пробелом, пока она катится под тобой.",helpShopTitle:"Монеты и скины",helpShop:"Монеты капают за игру, этажи и достижения. В магазине скины с узорами и материалами, не просто смена цвета. Сундук после этажей даёт более простые скины.",slotBall:"Шар",slotPlatform:"Платформы",slotPole:"Шест",slotBg:"Фон",combo:"серия"},en:{title:"The Well",eyebrow:"experiment",lead:"Spin the rings and drop the ball through the gap. Classic is still here — plus new modes and a shop.",best:"Best",play:"Play",hint:"Swipe left-right or use arrows / A D",over:"Game over",score:"Score",continue:"Continue · ad",again:"Play again",menu:"Menu",sound:"Sound",coins:"Coins",shop:"Shop",howto:"How to play",back:"Back",classic:"Classic",classicHint:"The endless run people liked",floors:"Floors",easy:"Easy",normal:"Normal",hard:"Hard",fuse:"Fuse",fuseHint:"Rolling bomb balls. Touch one and it explodes; tap to hop over",hop:"Vault",hopHint:"Space / tap the ball",won:"Floor cleared",chest:"Chest",chestCoins:"Coins in the chest",chestSkin:"A skin in the chest",equipped:"Equipped",buy:"Buy",owned:"Owned",fromChest:"From a chest",earned:"Coins this run",helpTitle:"How it works",helpRedTitle:"Bright-red tiles",helpRed:"They are danger, not decoration. Landing on a bright-red tile ends the run. Spin the rings so the ball falls through a gap or onto ordinary colored platforms.",helpClassicTitle:"Classic",helpClassic:"Endless well. Each floor is 100 points. Fall through several floors in one drop and the ball flares, speeds up, and pops 200, 300… right on itself.",helpFuseTitle:"Fuse mode",helpFuse:"Black sparking bomb balls roll around the rings. They are moving obstacles, not tiles. Touch one and it explodes. Hop over a rolling bomb by tapping the ball, the button, or Space while it passes under you.",helpShopTitle:"Coins and skins",helpShop:"Coins come from play, floors, and achievements. Shop skins have patterns and materials, not just a color swap. Chests after staged floors give simpler skins.",slotBall:"Ball",slotPlatform:"Platforms",slotPole:"Pole",slotBg:"Background",combo:"combo"}},nc={ru:1,be:1,kk:1,uk:1,uz:1};function ic(i){return nc[i]?"ru":"en"}function rc(i){const e=ua[i]||ua.ru;document.documentElement.lang=i==="en"?"en":"ru",document.title=e.title,document.querySelectorAll("[data-i18n]").forEach(n=>{const r=n.getAttribute("data-i18n"),s=e[r];s&&(n.textContent=s)});const t=document.getElementById("btn-sound");return t&&t.setAttribute("aria-label",e.sound),e}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ks="160",sc=0,ha=1,ac=2,nl=1,oc=2,rn=3,Mn=0,bt=1,Jt=2,gn=0,li=1,fa=2,da=3,pa=4,lc=5,Ln=100,cc=101,uc=102,ma=103,ga=104,hc=200,fc=201,dc=202,pc=203,ws=204,Rs=205,mc=206,gc=207,_c=208,vc=209,xc=210,Mc=211,Sc=212,yc=213,Ec=214,bc=0,Tc=1,Ac=2,Er=3,wc=4,Rc=5,Cc=6,Lc=7,Ws=0,Pc=1,Dc=2,_n=0,Uc=1,Ic=2,Nc=3,Oc=4,Fc=5,Bc=6,il=300,ui=301,hi=302,Cs=303,Ls=304,Pr=306,Ii=1e3,Gt=1001,Ps=1002,yt=1003,_a=1004,Vr=1005,Ut=1006,zc=1007,Ni=1008,vn=1009,Gc=1010,Hc=1011,Xs=1012,rl=1013,pn=1014,mn=1015,Oi=1016,sl=1017,al=1018,Un=1020,Vc=1021,Ht=1023,kc=1024,Wc=1025,In=1026,fi=1027,Xc=1028,ol=1029,qc=1030,ll=1031,cl=1033,kr=33776,Wr=33777,Xr=33778,qr=33779,va=35840,xa=35841,Ma=35842,Sa=35843,ul=36196,ya=37492,Ea=37496,ba=37808,Ta=37809,Aa=37810,wa=37811,Ra=37812,Ca=37813,La=37814,Pa=37815,Da=37816,Ua=37817,Ia=37818,Na=37819,Oa=37820,Fa=37821,Yr=36492,Ba=36494,za=36495,Yc=36283,Ga=36284,Ha=36285,Va=36286,hl=3e3,Nn=3001,Jc=3200,Kc=3201,fl=0,Zc=1,It="",pt="srgb",ln="srgb-linear",qs="display-p3",Dr="display-p3-linear",br="linear",Ze="srgb",Tr="rec709",Ar="p3",kn=7680,ka=519,$c=512,jc=513,Qc=514,dl=515,eu=516,tu=517,nu=518,iu=519,Wa=35044,Xa="300 es",Ds=1035,on=2e3,wr=2001;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,Us=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function ru(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function qa(i){return(i&i-1)===0&&i!==0}function Is(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],h=n[4],c=n[7],p=n[2],m=n[5],g=n[8],_=r[0],f=r[3],d=r[6],S=r[1],x=r[4],v=r[7],C=r[2],w=r[5],A=r[8];return s[0]=o*_+a*S+l*C,s[3]=o*f+a*x+l*w,s[6]=o*d+a*v+l*A,s[1]=u*_+h*S+c*C,s[4]=u*f+h*x+c*w,s[7]=u*d+h*v+c*A,s[2]=p*_+m*S+g*C,s[5]=p*f+m*x+g*w,s[8]=p*d+m*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*s*h+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],c=h*o-a*u,p=a*l-h*s,m=u*s-o*l,g=t*c+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=c*_,e[1]=(r*u-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=p*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-u*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zr.makeScale(e,t)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new ke;function pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){const i=Rr("canvas");return i.style.display="block",i}const Ya={};function Ri(i){i in Ya||(Ya[i]=!0,console.warn(i))}const Ja=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ka=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[ln]:{transfer:br,primaries:Tr,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:Ze,primaries:Tr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Dr]:{transfer:br,primaries:Ar,toReference:i=>i.applyMatrix3(Ka),fromReference:i=>i.applyMatrix3(Ja)},[qs]:{transfer:Ze,primaries:Ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ka),fromReference:i=>i.applyMatrix3(Ja).convertLinearToSRGB()}},au=new Set([ln,Dr]),qe={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!au.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Yi[e].toReference,r=Yi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yi[i].primaries},getTransfer:function(i){return i===It?br:Yi[i].transfer}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class ml{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Rr("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ou=0;class gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jr(r[o].image)):s.push(jr(r[o]))}else s=jr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lu=0;class Tt extends mi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Gt,r=Gt,s=Ut,o=Ni,a=Ht,l=vn,u=Tt.DEFAULT_ANISOTROPY,h=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=gi(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Nn?pt:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Nn:hl}set encoding(e){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nn?pt:It}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=il;Tt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],c=l[8],p=l[1],m=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(c-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(c+_)<.1&&Math.abs(g+f)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,v=(m+1)/2,C=(d+1)/2,w=(h+p)/4,A=(c+_)/4,X=(g+f)/4;return x>v&&x>C?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=A/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=X/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=X/s),this.set(n,r,s,t),this}let S=Math.sqrt((f-g)*(f-g)+(c-_)*(c-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(c-_)/S,this.z=(p-h)/S,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cu extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nn?pt:It),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends cu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _l extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],h=n[r+2],c=n[r+3];const p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=c;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(c!==_||l!==p||u!==m||h!==g){let f=1-a;const d=l*p+u*m+h*g+c*_,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,d*S);f=Math.sin(f*w)/C,a=Math.sin(a*w)/C}const v=a*S;if(l=l*f+p*v,u=u*f+m*v,h=h*f+g*v,c=c*f+_*v,f===1-a){const C=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=C,u*=C,h*=C,c*=C}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],h=n[r+3],c=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*c+l*m-u*p,e[t+1]=l*g+h*p+u*c-a*m,e[t+2]=u*g+h*m+a*p-l*c,e[t+3]=h*g-a*c-l*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),h=a(r/2),c=a(s/2),p=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*h*c+u*m*g,this._y=u*m*c-p*h*g,this._z=u*h*g+p*m*c,this._w=u*h*c-p*m*g;break;case"YXZ":this._x=p*h*c+u*m*g,this._y=u*m*c-p*h*g,this._z=u*h*g-p*m*c,this._w=u*h*c+p*m*g;break;case"ZXY":this._x=p*h*c-u*m*g,this._y=u*m*c+p*h*g,this._z=u*h*g+p*m*c,this._w=u*h*c-p*m*g;break;case"ZYX":this._x=p*h*c-u*m*g,this._y=u*m*c+p*h*g,this._z=u*h*g-p*m*c,this._w=u*h*c+p*m*g;break;case"YZX":this._x=p*h*c+u*m*g,this._y=u*m*c+p*h*g,this._z=u*h*g-p*m*c,this._w=u*h*c-p*m*g;break;case"XZY":this._x=p*h*c-u*m*g,this._y=u*m*c-p*h*g,this._z=u*h*g+p*m*c,this._w=u*h*c+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],c=t[10],p=n+a+c;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(n>a&&n>c){const m=2*Math.sqrt(1+n-a-c);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>c){const m=2*Math.sqrt(1+a-n-c);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+c-n-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-n*u,this._z=s*h+o*u+n*l-r*a,this._w=o*h-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),c=Math.sin((1-t)*h)/u,p=Math.sin(t*h)/u;return this._w=o*c+this._w*p,this._x=n*c+this._x*p,this._y=r*c+this._y*p,this._z=s*c+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*n),h=2*(a*t-s*r),c=2*(s*n-o*t);return this.x=t+l*u+o*c-a*h,this.y=n+l*h+a*u-s*c,this.z=r+l*c+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new D,Za=new Gi;class Hi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(s,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),Ki.subVectors(this.max,Si),Xn.subVectors(e.a,Si),qn.subVectors(e.b,Si),Yn.subVectors(e.c,Si),cn.subVectors(qn,Xn),un.subVectors(Yn,qn),En.subVectors(Xn,Yn);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-En.z,En.y,cn.z,0,-cn.x,un.z,0,-un.x,En.z,0,-En.x,-cn.y,cn.x,0,-un.y,un.x,0,-En.y,En.x,0];return!es(t,Xn,qn,Yn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!es(t,Xn,qn,Yn,Ki))?!1:(Zi.crossVectors(cn,un),t=[Zi.x,Zi.y,Zi.z],es(t,Xn,qn,Yn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new D,new D,new D,new D,new D,new D,new D,new D],Nt=new D,Ji=new Hi,Xn=new D,qn=new D,Yn=new D,cn=new D,un=new D,En=new D,Si=new D,Ki=new D,Zi=new D,bn=new D;function es(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bn.fromArray(i,s);const a=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),l=e.dot(bn),u=t.dot(bn),h=n.dot(bn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const hu=new Hi,yi=new D,ts=new D;class Ur{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(ts)),this.expandByPoint(yi.copy(e.center).sub(ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new D,ns=new D,$i=new D,hn=new D,is=new D,ji=new D,rs=new D;class vl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ns.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(ns);const s=e.distanceTo(t)*.5,o=-this.direction.dot($i),a=hn.dot(this.direction),l=-hn.dot($i),u=hn.lengthSq(),h=Math.abs(1-o*o);let c,p,m,g;if(h>0)if(c=o*l-a,p=o*a-l,g=s*h,c>=0)if(p>=-g)if(p<=g){const _=1/h;c*=_,p*=_,m=c*(c+o*p+2*a)+p*(o*c+p+2*l)+u}else p=s,c=Math.max(0,-(o*p+a)),m=-c*c+p*(p+2*l)+u;else p=-s,c=Math.max(0,-(o*p+a)),m=-c*c+p*(p+2*l)+u;else p<=-g?(c=Math.max(0,-(-o*s+a)),p=c>0?-s:Math.min(Math.max(-s,-l),s),m=-c*c+p*(p+2*l)+u):p<=g?(c=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+u):(c=Math.max(0,-(o*s+a)),p=c>0?s:Math.min(Math.max(-s,-l),s),m=-c*c+p*(p+2*l)+u);else p=o>0?-s:s,c=Math.max(0,-(o*p+a)),m=-c*c+p*(p+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(ns).addScaledVector($i,p),m}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),r=jt.dot(jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,p=this.origin;return u>=0?(n=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(n=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-p.z)*c,l=(e.max.z-p.z)*c):(a=(e.max.z-p.z)*c,l=(e.min.z-p.z)*c),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,r,s){is.subVectors(t,e),ji.subVectors(n,e),rs.crossVectors(is,ji);let o=this.direction.dot(rs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const l=a*this.direction.dot(ji.crossVectors(hn,ji));if(l<0)return null;const u=a*this.direction.dot(is.cross(hn));if(u<0||l+u>o)return null;const h=-a*hn.dot(rs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,r,s,o,a,l,u,h,c,p,m,g,_,f){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,h,c,p,m,g,_,f)}set(e,t,n,r,s,o,a,l,u,h,c,p,m,g,_,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=h,d[10]=c,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const p=o*h,m=o*c,g=a*h,_=a*c;t[0]=l*h,t[4]=-l*c,t[8]=u,t[1]=m+g*u,t[5]=p-_*u,t[9]=-a*l,t[2]=_-p*u,t[6]=g+m*u,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*c,g=u*h,_=u*c;t[0]=p+_*a,t[4]=g*a-m,t[8]=o*u,t[1]=o*c,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*c,g=u*h,_=u*c;t[0]=p-_*a,t[4]=-o*c,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*c,g=a*h,_=a*c;t[0]=l*h,t[4]=g*u-m,t[8]=p*u+_,t[1]=l*c,t[5]=_*u+p,t[9]=m*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*u,g=a*l,_=a*u;t[0]=l*h,t[4]=_-p*c,t[8]=g*c+m,t[1]=c,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=m*c+g,t[10]=p-_*c}else if(e.order==="XZY"){const p=o*l,m=o*u,g=a*l,_=a*u;t[0]=l*h,t[4]=-c,t[8]=u*h,t[1]=p*c+_,t[5]=o*h,t[9]=m*c-g,t[2]=g*c-m,t[6]=a*h,t[10]=_*c+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,du)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),fn.crossVectors(n,wt),fn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),fn.crossVectors(n,wt)),fn.normalize(),Qi.crossVectors(wt,fn),r[0]=fn.x,r[4]=Qi.x,r[8]=wt.x,r[1]=fn.y,r[5]=Qi.y,r[9]=wt.y,r[2]=fn.z,r[6]=Qi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],h=n[1],c=n[5],p=n[9],m=n[13],g=n[2],_=n[6],f=n[10],d=n[14],S=n[3],x=n[7],v=n[11],C=n[15],w=r[0],A=r[4],X=r[8],y=r[12],T=r[1],O=r[5],H=r[9],Z=r[13],L=r[2],F=r[6],V=r[10],K=r[14],q=r[3],$=r[7],j=r[11],ie=r[15];return s[0]=o*w+a*T+l*L+u*q,s[4]=o*A+a*O+l*F+u*$,s[8]=o*X+a*H+l*V+u*j,s[12]=o*y+a*Z+l*K+u*ie,s[1]=h*w+c*T+p*L+m*q,s[5]=h*A+c*O+p*F+m*$,s[9]=h*X+c*H+p*V+m*j,s[13]=h*y+c*Z+p*K+m*ie,s[2]=g*w+_*T+f*L+d*q,s[6]=g*A+_*O+f*F+d*$,s[10]=g*X+_*H+f*V+d*j,s[14]=g*y+_*Z+f*K+d*ie,s[3]=S*w+x*T+v*L+C*q,s[7]=S*A+x*O+v*F+C*$,s[11]=S*X+x*H+v*V+C*j,s[15]=S*y+x*Z+v*K+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],c=e[6],p=e[10],m=e[14],g=e[3],_=e[7],f=e[11],d=e[15];return g*(+s*l*c-r*u*c-s*a*p+n*u*p+r*a*m-n*l*m)+_*(+t*l*m-t*u*p+s*o*p-r*o*m+r*u*h-s*l*h)+f*(+t*u*c-t*a*m-s*o*c+n*o*m+s*a*h-n*u*h)+d*(-r*a*h-t*l*c+t*a*p+r*o*c-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],c=e[9],p=e[10],m=e[11],g=e[12],_=e[13],f=e[14],d=e[15],S=c*f*u-_*p*u+_*l*m-a*f*m-c*l*d+a*p*d,x=g*p*u-h*f*u-g*l*m+o*f*m+h*l*d-o*p*d,v=h*_*u-g*c*u+g*a*m-o*_*m-h*a*d+o*c*d,C=g*c*l-h*_*l-g*a*p+o*_*p+h*a*f-o*c*f,w=t*S+n*x+r*v+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=S*A,e[1]=(_*p*s-c*f*s-_*r*m+n*f*m+c*r*d-n*p*d)*A,e[2]=(a*f*s-_*l*s+_*r*u-n*f*u-a*r*d+n*l*d)*A,e[3]=(c*l*s-a*p*s-c*r*u+n*p*u+a*r*m-n*l*m)*A,e[4]=x*A,e[5]=(h*f*s-g*p*s+g*r*m-t*f*m-h*r*d+t*p*d)*A,e[6]=(g*l*s-o*f*s-g*r*u+t*f*u+o*r*d-t*l*d)*A,e[7]=(o*p*s-h*l*s+h*r*u-t*p*u-o*r*m+t*l*m)*A,e[8]=v*A,e[9]=(g*c*s-h*_*s-g*n*m+t*_*m+h*n*d-t*c*d)*A,e[10]=(o*_*s-g*a*s+g*n*u-t*_*u-o*n*d+t*a*d)*A,e[11]=(h*a*s-o*c*s-h*n*u+t*c*u+o*n*m-t*a*m)*A,e[12]=C*A,e[13]=(h*_*r-g*c*r+g*n*p-t*_*p-h*n*f+t*c*f)*A,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*f-t*a*f)*A,e[15]=(o*c*r-h*a*r+h*n*l-t*c*l-o*n*p+t*a*p)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+n,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,h=o+o,c=a+a,p=s*u,m=s*h,g=s*c,_=o*h,f=o*c,d=a*c,S=l*u,x=l*h,v=l*c,C=n.x,w=n.y,A=n.z;return r[0]=(1-(_+d))*C,r[1]=(m+v)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(m-v)*w,r[5]=(1-(p+d))*w,r[6]=(f+S)*w,r[7]=0,r[8]=(g+x)*A,r[9]=(f-S)*A,r[10]=(1-(p+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Jn.set(r[0],r[1],r[2]).length();const o=Jn.set(r[4],r[5],r[6]).length(),a=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const u=1/s,h=1/o,c=1/a;return Ot.elements[0]*=u,Ot.elements[1]*=u,Ot.elements[2]*=u,Ot.elements[4]*=h,Ot.elements[5]*=h,Ot.elements[6]*=h,Ot.elements[8]*=c,Ot.elements[9]*=c,Ot.elements[10]*=c,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=on){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),c=(t+e)/(t-e),p=(n+r)/(n-r);let m,g;if(a===on)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=on){const l=this.elements,u=1/(t-e),h=1/(n-r),c=1/(o-s),p=(t+e)*u,m=(n+r)*h;let g,_;if(a===on)g=(o+s)*c,_=-2*c;else if(a===wr)g=s*c,_=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new D,Ot=new nt,fu=new D(0,0,0),du=new D(1,1,1),fn=new D,Qi=new D,wt=new D,$a=new nt,ja=new Gi;class Ir{constructor(e=0,t=0,n=0,r=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],c=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-c,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ja.setFromEuler(this),this.setFromQuaternion(ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Qa=new D,Kn=new Gi,Qt=new nt,er=new D,Ei=new D,mu=new D,gu=new Gi,eo=new D(1,0,0),to=new D(0,1,0),no=new D(0,0,1),_u={type:"added"},vu={type:"removed"};class ft extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new D,t=new Ir,n=new Gi,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new ke}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(no,e)}translateOnAxis(e,t){return Qa.copy(e).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(no,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Ei,er,this.up):Qt.lookAt(er,Ei,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(Qt),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_u)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),c=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new D(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new D,en=new D,ss=new D,tn=new D,Zn=new D,$n=new D,io=new D,as=new D,os=new D,ls=new D;let tr=!1;class zt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ft.subVectors(r,t),en.subVectors(n,t),ss.subVectors(e,t);const o=Ft.dot(Ft),a=Ft.dot(en),l=Ft.dot(ss),u=en.dot(en),h=en.dot(ss),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const p=1/c,m=(u*l-a*h)*p,g=(o*h-a*l)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,r,s,o,a,l){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),en.subVectors(e,t),Ft.cross(en).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ft.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Zn.subVectors(r,n),$n.subVectors(s,n),as.subVectors(e,n);const l=Zn.dot(as),u=$n.dot(as);if(l<=0&&u<=0)return t.copy(n);os.subVectors(e,r);const h=Zn.dot(os),c=$n.dot(os);if(h>=0&&c<=h)return t.copy(r);const p=l*c-h*u;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Zn,o);ls.subVectors(e,s);const m=Zn.dot(ls),g=$n.dot(ls);if(g>=0&&m<=g)return t.copy(s);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(n).addScaledVector($n,a);const f=h*g-m*c;if(f<=0&&c-h>=0&&m-g>=0)return io.subVectors(s,r),a=(c-h)/(c-h+(m-g)),t.copy(r).addScaledVector(io,a);const d=1/(f+_+p);return o=_*d,a=p*d,t.copy(n).addScaledVector(Zn,o).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function cs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=ru(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=cs(o,s,e+1/3),this.g=cs(o,s,e),this.b=cs(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=Ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return qe.fromWorkingColorSpace(_t.copy(this),e),Math.round(vt(_t.r*255,0,255))*65536+Math.round(vt(_t.g*255,0,255))*256+Math.round(vt(_t.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,s=_t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=h<=.5?c/(o+a):c/(2-o-a),o){case n:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-n)/c+2;break;case s:l=(n-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=pt){qe.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(nr);const n=Kr(dn.h,nr.h,t),r=Kr(dn.s,nr.s,t),s=Kr(dn.l,nr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new We;We.NAMES=Ml;let xu=0;class _i extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=li,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ws,this.blendDst=Rs,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ws&&(n.blendSrc=this.blendSrc),this.blendDst!==Rs&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bn extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new D,ir=new fe;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}}class Sl extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mu=0;const Dt=new nt,us=new ft,jn=new D,Rt=new Hi,bi=new Hi,ht=new D;class Lt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pl(e)?yl:Sl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return us.lookAt(e),us.updateMatrix(),this.applyMatrix4(us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Rt.min,bi.min),Rt.expandByPoint(ht),ht.addVectors(Rt.max,bi.max),Rt.expandByPoint(ht)):(Rt.expandByPoint(bi.min),Rt.expandByPoint(bi.max))}Rt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)ht.fromBufferAttribute(a,u),l&&(jn.fromBufferAttribute(e,u),ht.add(jn)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let T=0;T<a;T++)u[T]=new D,h[T]=new D;const c=new D,p=new D,m=new D,g=new fe,_=new fe,f=new fe,d=new D,S=new D;function x(T,O,H){c.fromArray(r,T*3),p.fromArray(r,O*3),m.fromArray(r,H*3),g.fromArray(o,T*2),_.fromArray(o,O*2),f.fromArray(o,H*2),p.sub(c),m.sub(c),_.sub(g),f.sub(g);const Z=1/(_.x*f.y-f.x*_.y);isFinite(Z)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(Z),S.copy(m).multiplyScalar(_.x).addScaledVector(p,-f.x).multiplyScalar(Z),u[T].add(d),u[O].add(d),u[H].add(d),h[T].add(S),h[O].add(S),h[H].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,O=v.length;T<O;++T){const H=v[T],Z=H.start,L=H.count;for(let F=Z,V=Z+L;F<V;F+=3)x(n[F+0],n[F+1],n[F+2])}const C=new D,w=new D,A=new D,X=new D;function y(T){A.fromArray(s,T*3),X.copy(A);const O=u[T];C.copy(O),C.sub(A.multiplyScalar(A.dot(O))).normalize(),w.crossVectors(X,O);const Z=w.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=Z}for(let T=0,O=v.length;T<O;++T){const H=v[T],Z=H.start,L=H.count;for(let F=Z,V=Z+L;F<V;F+=3)y(n[F+0]),y(n[F+1]),y(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,h=new D,c=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,s),c.subVectors(r,s),h.cross(c),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,f),a.add(h),l.add(h),u.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),c.subVectors(r,s),h.cross(c),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,c=a.normalized,p=new u.constructor(l.length*h);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)p[g++]=u[m++]}return new Vt(p,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,c=u.length;h<c;h++){const p=u[h],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,p=u.length;c<p;c++){const m=u[c];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],c=s[u];for(let p=0,m=c.length;p<m;p++)h.push(c[p].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new nt,Tn=new vl,rr=new Ur,so=new D,Qn=new D,ei=new D,ti=new D,hs=new D,sr=new D,ar=new fe,or=new fe,lr=new fe,ao=new D,oo=new D,lo=new D,cr=new D,ur=new D;class at extends ft{constructor(e=new Lt,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],c=s[l];h!==0&&(hs.fromBufferAttribute(c,e),o?sr.addScaledVector(hs,h):sr.addScaledVector(hs.sub(t),h))}t.add(sr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),Tn.copy(e.ray).recast(e.near),!(rr.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(rr,so)===null||Tn.origin.distanceToSquared(so)>(e.far-e.near)**2))&&(ro.copy(s).invert(),Tn.copy(e.ray).applyMatrix4(ro),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,c=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=o[f.materialIndex],S=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let v=S,C=x;v<C;v+=3){const w=a.getX(v),A=a.getX(v+1),X=a.getX(v+2);r=hr(this,d,e,n,u,h,c,w,A,X),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const S=a.getX(f),x=a.getX(f+1),v=a.getX(f+2);r=hr(this,o,e,n,u,h,c,S,x,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=o[f.materialIndex],S=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=S,C=x;v<C;v+=3){const w=v,A=v+1,X=v+2;r=hr(this,d,e,n,u,h,c,w,A,X),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const S=f,x=f+1,v=f+2;r=hr(this,o,e,n,u,h,c,S,x,v),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Su(i,e,t,n,r,s,o,a){let l;if(e.side===bt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Mn,a),l===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ur);return u<t.near||u>t.far?null:{distance:u,point:ur.clone(),object:i}}function hr(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,Qn),i.getVertexPosition(l,ei),i.getVertexPosition(u,ti);const h=Su(i,e,t,n,Qn,ei,ti,cr);if(h){r&&(ar.fromBufferAttribute(r,a),or.fromBufferAttribute(r,l),lr.fromBufferAttribute(r,u),h.uv=zt.getInterpolation(cr,Qn,ei,ti,ar,or,lr,new fe)),s&&(ar.fromBufferAttribute(s,a),or.fromBufferAttribute(s,l),lr.fromBufferAttribute(s,u),h.uv1=zt.getInterpolation(cr,Qn,ei,ti,ar,or,lr,new fe),h.uv2=h.uv1),o&&(ao.fromBufferAttribute(o,a),oo.fromBufferAttribute(o,l),lo.fromBufferAttribute(o,u),h.normal=zt.getInterpolation(cr,Qn,ei,ti,ao,oo,lo,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new D,materialIndex:0};zt.getNormal(Qn,ei,ti,c.normal),h.face=c}return h}class Vi extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],c=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(c,2));function g(_,f,d,S,x,v,C,w,A,X,y){const T=v/A,O=C/X,H=v/2,Z=C/2,L=w/2,F=A+1,V=X+1;let K=0,q=0;const $=new D;for(let j=0;j<V;j++){const ie=j*O-Z;for(let ae=0;ae<F;ae++){const k=ae*T-H;$[_]=k*S,$[f]=ie*x,$[d]=L,u.push($.x,$.y,$.z),$[_]=0,$[f]=0,$[d]=w>0?1:-1,h.push($.x,$.y,$.z),c.push(ae/A),c.push(1-j/X),K+=1}}for(let j=0;j<X;j++)for(let ie=0;ie<A;ie++){const ae=p+ie+F*j,k=p+ie+F*(j+1),ee=p+(ie+1)+F*(j+1),de=p+(ie+1)+F*j;l.push(ae,k,de),l.push(k,ee,de),q+=6}a.addGroup(m,q,y),m+=q,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function yu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function El(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}const Eu={clone:di,merge:St};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bl extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Au extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new Ct(ni,ii,e,t);s.layers=this.layers,this.add(s);const o=new Ct(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new Ct(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new Ct(ni,ii,e,t);l.layers=this.layers,this.add(l);const u=new Ct(ni,ii,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,c=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(c,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tl extends Tt{constructor(e,t,n,r,s,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wu extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Nn?pt:It),this.texture=new Tl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:gn});s.uniforms.tEquirect.value=t;const o=new at(r,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Ut),new Au(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const fs=new D,Ru=new D,Cu=new ke;class wn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=fs.subVectors(n,t).cross(Ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cu.getNormalMatrix(e),r=this.coplanarPoint(fs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Ur,fr=new D;class Ys{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,o=new wn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],c=r[6],p=r[7],m=r[8],g=r[9],_=r[10],f=r[11],d=r[12],S=r[13],x=r[14],v=r[15];if(n[0].setComponents(l-s,p-u,f-m,v-d).normalize(),n[1].setComponents(l+s,p+u,f+m,v+d).normalize(),n[2].setComponents(l+o,p+h,f+g,v+S).normalize(),n[3].setComponents(l-o,p-h,f-g,v-S).normalize(),n[4].setComponents(l-a,p-c,f-_,v-x).normalize(),t===on)n[5].setComponents(l+a,p+c,f+_,v+x).normalize();else if(t===wr)n[5].setComponents(a,c,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fr.x=r.normal.x>0?e.max.x:e.min.x,fr.y=r.normal.y>0?e.max.y:e.min.y,fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Lu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,h){const c=u.array,p=u.usage,m=c.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,c,p),u.onUploadCallback();let _;if(c instanceof Float32Array)_=i.FLOAT;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=i.SHORT;else if(c instanceof Uint32Array)_=i.UNSIGNED_INT;else if(c instanceof Int32Array)_=i.INT;else if(c instanceof Int8Array)_=i.BYTE;else if(c instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,h,c){const p=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(c,u),m.count===-1&&g.length===0&&i.bufferSubData(c,0,p),g.length!==0){for(let _=0,f=g.length;_<f;_++){const d=g[_];t?i.bufferSubData(c,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(c,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(c,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(c,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const p=n.get(u);(!p||p.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);if(c===void 0)n.set(u,r(u,h));else if(c.version<u.version){if(c.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(c.buffer,u,h),c.version=u.version}}return{get:o,remove:a,update:l}}class Js extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,h=l+1,c=e/a,p=t/l,m=[],g=[],_=[],f=[];for(let d=0;d<h;d++){const S=d*p-o;for(let x=0;x<u;x++){const v=x*c-s;g.push(v,-S,0),_.push(0,0,1),f.push(x/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const x=S+u*d,v=S+u*(d+1),C=S+1+u*(d+1),w=S+1+u*d;m.push(x,v,w),m.push(v,C,w)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",lh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vh=`#ifdef USE_GRADIENTMAP
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
}`,xh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,bh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ch=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Lh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ph=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
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
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Af=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zf=`#define DISTANCE
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
}`,Gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yf=`#define LAMBERT
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
}`,Jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kf=`#define MATCAP
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
}`,Zf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$f=`#define NORMAL
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
}`,jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qf=`#define PHONG
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
}`,ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,td=`#define STANDARD
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
}`,nd=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,id=`#define TOON
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
}`,rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sd=`uniform float size;
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
}`,ad=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,od=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ld=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ud=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ze={alphahash_fragment:Pu,alphahash_pars_fragment:Du,alphamap_fragment:Uu,alphamap_pars_fragment:Iu,alphatest_fragment:Nu,alphatest_pars_fragment:Ou,aomap_fragment:Fu,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:Gu,begin_vertex:Hu,beginnormal_vertex:Vu,bsdfs:ku,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Ku,color_fragment:Zu,color_pars_fragment:$u,color_pars_vertex:ju,color_vertex:Qu,common:eh,cube_uv_reflection_fragment:th,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:rh,emissivemap_fragment:sh,emissivemap_pars_fragment:ah,colorspace_fragment:oh,colorspace_pars_fragment:lh,envmap_fragment:ch,envmap_common_pars_fragment:uh,envmap_pars_fragment:hh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:bh,envmap_vertex:dh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:_h,gradientmap_pars_fragment:vh,lightmap_fragment:xh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:yh,lights_pars_begin:Eh,lights_toon_fragment:Th,lights_toon_pars_fragment:Ah,lights_phong_fragment:wh,lights_phong_pars_fragment:Rh,lights_physical_fragment:Ch,lights_physical_pars_fragment:Lh,lights_fragment_begin:Ph,lights_fragment_maps:Dh,lights_fragment_end:Uh,logdepthbuf_fragment:Ih,logdepthbuf_pars_fragment:Nh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Fh,map_fragment:Bh,map_pars_fragment:zh,map_particle_fragment:Gh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:kh,morphcolor_vertex:Wh,morphnormal_vertex:Xh,morphtarget_pars_vertex:qh,morphtarget_vertex:Yh,normal_fragment_begin:Jh,normal_fragment_maps:Kh,normal_pars_fragment:Zh,normal_pars_vertex:$h,normal_vertex:jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:nf,iridescence_pars_fragment:rf,opaque_fragment:sf,packing:af,premultiplied_alpha_fragment:of,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:uf,roughnessmap_fragment:hf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:df,shadowmap_pars_vertex:pf,shadowmap_vertex:mf,shadowmask_pars_fragment:gf,skinbase_vertex:_f,skinning_pars_vertex:vf,skinning_vertex:xf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:yf,tonemapping_fragment:Ef,tonemapping_pars_fragment:bf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:wf,uv_pars_vertex:Rf,uv_vertex:Cf,worldpos_vertex:Lf,background_vert:Pf,background_frag:Df,backgroundCube_vert:Uf,backgroundCube_frag:If,cube_vert:Nf,cube_frag:Of,depth_vert:Ff,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:Gf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:kf,linedashed_frag:Wf,meshbasic_vert:Xf,meshbasic_frag:qf,meshlambert_vert:Yf,meshlambert_frag:Jf,meshmatcap_vert:Kf,meshmatcap_frag:Zf,meshnormal_vert:$f,meshnormal_frag:jf,meshphong_vert:Qf,meshphong_frag:ed,meshphysical_vert:td,meshphysical_frag:nd,meshtoon_vert:id,meshtoon_frag:rd,points_vert:sd,points_frag:ad,shadow_vert:od,shadow_frag:ld,sprite_vert:cd,sprite_frag:ud},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Yt={basic:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:St([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:St([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:St([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:St([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:St([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:St([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:St([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:St([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:St([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:St([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Yt.physical={uniforms:St([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const dr={r:0,b:0,g:0};function hd(i,e,t,n,r,s,o){const a=new We(0);let l=s===!0?0:1,u,h,c=null,p=0,m=null;function g(f,d){let S=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Pr)?(h===void 0&&(h=new at(new Vi(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:di(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=qe.getTransfer(x.colorSpace)!==Ze,(c!==x||p!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,c=x,p=x.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new at(new Js(2,2),new zn({name:"BackgroundMaterial",uniforms:di(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=qe.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||p!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,c=x,p=x.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function _(f,d){f.getRGB(dr,El(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:g}}function fd(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let u=l,h=!1;function c(L,F,V,K,q){let $=!1;if(o){const j=_(K,V,F);u!==j&&(u=j,m(u.object)),$=d(L,K,V,q),$&&S(L,K,V,q)}else{const j=F.wireframe===!0;(u.geometry!==K.id||u.program!==V.id||u.wireframe!==j)&&(u.geometry=K.id,u.program=V.id,u.wireframe=j,$=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,X(L,F,V,K),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,V){const K=V.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let $=q[F.id];$===void 0&&($={},q[F.id]=$);let j=$[K];return j===void 0&&(j=f(p()),$[K]=j),j}function f(L){const F=[],V=[],K=[];for(let q=0;q<r;q++)F[q]=0,V[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,F,V,K){const q=u.attributes,$=F.attributes;let j=0;const ie=V.getAttributes();for(const ae in ie)if(ie[ae].location>=0){const ee=q[ae];let de=$[ae];if(de===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;j++}return u.attributesNum!==j||u.index!==K}function S(L,F,V,K){const q={},$=F.attributes;let j=0;const ie=V.getAttributes();for(const ae in ie)if(ie[ae].location>=0){let ee=$[ae];ee===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),q[ae]=de,j++}u.attributes=q,u.attributesNum=j,u.index=K}function x(){const L=u.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function v(L){C(L,0)}function C(L,F){const V=u.newAttributes,K=u.enabledAttributes,q=u.attributeDivisors;V[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),q[L]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),q[L]=F)}function w(){const L=u.newAttributes,F=u.enabledAttributes;for(let V=0,K=F.length;V<K;V++)F[V]!==L[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(L,F,V,K,q,$,j){j===!0?i.vertexAttribIPointer(L,F,V,q,$):i.vertexAttribPointer(L,F,V,K,q,$)}function X(L,F,V,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=K.attributes,$=V.getAttributes(),j=F.defaultAttributeValues;for(const ie in $){const ae=$[ie];if(ae.location>=0){let k=q[ie];if(k===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){const ee=k.normalized,de=k.itemSize,ye=t.get(k);if(ye===void 0)continue;const ge=ye.buffer,Ce=ye.type,Ue=ye.bytesPerElement,Te=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||k.gpuType===rl);if(k.isInterleavedBufferAttribute){const De=k.data,R=De.stride,se=k.offset;if(De.isInstancedInterleavedBuffer){for(let J=0;J<ae.locationSize;J++)C(ae.location+J,De.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let J=0;J<ae.locationSize;J++)v(ae.location+J);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let J=0;J<ae.locationSize;J++)A(ae.location+J,de/ae.locationSize,Ce,ee,R*Ue,(se+de/ae.locationSize*J)*Ue,Te)}else{if(k.isInstancedBufferAttribute){for(let De=0;De<ae.locationSize;De++)C(ae.location+De,k.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let De=0;De<ae.locationSize;De++)v(ae.location+De);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let De=0;De<ae.locationSize;De++)A(ae.location+De,de/ae.locationSize,Ce,ee,de*Ue,de/ae.locationSize*De*Ue,Te)}}else if(j!==void 0){const ee=j[ie];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(ae.location,ee);break;case 3:i.vertexAttrib3fv(ae.location,ee);break;case 4:i.vertexAttrib4fv(ae.location,ee);break;default:i.vertexAttrib1fv(ae.location,ee)}}}}w()}function y(){H();for(const L in a){const F=a[L];for(const V in F){const K=F[V];for(const q in K)g(K[q].object),delete K[q];delete F[V]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const V in F){const K=F[V];for(const q in K)g(K[q].object),delete K[q];delete F[V]}delete a[L.id]}function O(L){for(const F in a){const V=a[F];if(V[L.id]===void 0)continue;const K=V[L.id];for(const q in K)g(K[q].object),delete K[q];delete V[L.id]}}function H(){Z(),h=!0,u!==l&&(u=l,m(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:H,resetDefaultState:Z,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function dd(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,c){i.drawArrays(s,h,c),t.update(c,s,1)}function l(h,c,p){if(p===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,c,p),t.update(c,s,p)}function u(h,c,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],c[g]);else{m.multiDrawArraysWEBGL(s,h,0,c,0,p);let g=0;for(let _=0;_<p;_++)g+=c[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function pd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,v=o||e.has("OES_texture_float"),C=x&&v,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:C,maxSamples:w}}function md(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new wn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,p){const m=c.length!==0||p||n!==0||r;return r=p,n=c.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,p){t=h(c,p,0)},this.setState=function(c,p,m){const g=c.clippingPlanes,_=c.clipIntersection,f=c.clipShadows,d=i.get(c);if(!r||g===null||g.length===0||s&&!f)s?h(null):u();else{const S=s?0:n,x=S*4;let v=d.clippingState||null;l.value=v,v=h(g,p,x,m);for(let C=0;C!==x;++C)v[C]=t[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(c,p,m,g){const _=c!==null?c.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=m+_*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<d)&&(f=new Float32Array(d));for(let x=0,v=m;x!==_;++x,v+=4)o.copy(c[x]).applyMatrix4(S,a),o.normal.toArray(f,v),f[v+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function gd(i){let e=new WeakMap;function t(o,a){return a===Cs?o.mapping=ui:a===Ls&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cs||a===Ls)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new wu(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wl extends bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,co=[.125,.215,.35,.446,.526,.582],Pn=20,ds=new wl,uo=new We;let ps=null,ms=0,gs=0;const Rn=(1+Math.sqrt(5))/2,ri=1/Rn,ho=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Rn,ri),new D(0,Rn,-ri),new D(ri,0,Rn),new D(-ri,0,Rn),new D(Rn,ri,0),new D(-Rn,ri,0)];class fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ps,ms,gs),e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Oi,format:Ht,colorSpace:ln,depthBuffer:!1},r=po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_d(s)),this._blurMaterial=vd(s,e,t)}return r}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,n,r){const a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,c=h.autoClear,p=h.toneMapping;h.getClearColor(uo),h.toneMapping=_n,h.autoClear=!1;const m=new Bn({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new at(new Vi,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(uo),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;pr(r,S*x,d>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=c,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ds)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(r-1)%ho.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new at(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Pn;f>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pn}`);const d=[];let S=0;for(let A=0;A<Pn;++A){const X=A/_,y=Math.exp(-X*X/2);d.push(y),A===0?S+=y:A<f&&(S+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const v=this._sizeLods[r],C=3*v*(r>x-si?r-x+si:0),w=4*(this._cubeSize-v);pr(t,C,w,3*v,2*v),l.setRenderTarget(t),l.render(c,ds)}}function _d(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+co.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-si?l=co[o-i+si-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),h=-u,c=1+u,p=[h,h,c,h,c,c,h,h,c,c,h,c],m=6,g=6,_=3,f=2,d=1,S=new Float32Array(_*g*m),x=new Float32Array(f*g*m),v=new Float32Array(d*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,X=w>2?0:-1,y=[A,X,0,A+2/3,X,0,A+2/3,X+1,0,A,X,0,A+2/3,X+1,0,A,X+1,0];S.set(y,_*g*w),x.set(p,f*g*w);const T=[w,w,w,w,w,w];v.set(T,d*g*w)}const C=new Lt;C.setAttribute("position",new Vt(S,_)),C.setAttribute("uv",new Vt(x,f)),C.setAttribute("faceIndex",new Vt(v,d)),e.push(C),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function po(i,e,t){const n=new Fn(i,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function vd(i,e,t){const n=new Float32Array(Pn),r=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function mo(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function go(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cs||l===Ls,h=l===ui||l===hi;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=e.get(a);return t===null&&(t=new fo(i)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),e.set(a,c),c.texture}else{if(e.has(a))return e.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||h&&c&&r(c)){t===null&&(t=new fo(i));const p=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Md(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Sd(i,e,t,n){const r={},s=new WeakMap;function o(c){const p=c.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)e.remove(_[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(c,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(c){const p=c.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=c.morphAttributes;for(const g in m){const _=m[g];for(let f=0,d=_.length;f<d;f++)e.update(_[f],i.ARRAY_BUFFER)}}function u(c){const p=[],m=c.index,g=c.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let x=0,v=S.length;x<v;x+=3){const C=S[x+0],w=S[x+1],A=S[x+2];p.push(C,w,w,A,A,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const C=x+0,w=x+1,A=x+2;p.push(C,w,w,A,A,C)}}else return;const f=new(pl(p)?yl:Sl)(p,1);f.version=_;const d=s.get(c);d&&e.remove(d),s.set(c,f)}function h(c){const p=s.get(c);if(p){const m=c.index;m!==null&&p.version<m.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function yd(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(s,g,a,m*l),t.update(g,s,1)}function c(m,g,_){if(_===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,g,a,m*l,_),t.update(g,s,_)}function p(m,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{f.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let S=0;S<_;S++)d+=g[S];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=c,this.renderMultiDraw=p}function Ed(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bd(i,e){return i[0]-e[0]}function Td(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ad(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,c){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==_){let F=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var m=F;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),C===!0&&(y=3);let T=h.attributes.position.count*y,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*O*4*_),Z=new _l(H,T,O,_);Z.type=mn,Z.needsUpdate=!0;const L=y*4;for(let V=0;V<_;V++){const K=w[V],q=A[V],$=X[V],j=T*O*4*V;for(let ie=0;ie<K.count;ie++){const ae=ie*L;x===!0&&(o.fromBufferAttribute(K,ie),H[j+ae+0]=o.x,H[j+ae+1]=o.y,H[j+ae+2]=o.z,H[j+ae+3]=0),v===!0&&(o.fromBufferAttribute(q,ie),H[j+ae+4]=o.x,H[j+ae+5]=o.y,H[j+ae+6]=o.z,H[j+ae+7]=0),C===!0&&(o.fromBufferAttribute($,ie),H[j+ae+8]=o.x,H[j+ae+9]=o.y,H[j+ae+10]=o.z,H[j+ae+11]=$.itemSize===4?o.w:1)}}f={count:_,texture:Z,size:new fe(T,O)},s.set(h,f),h.addEventListener("dispose",F)}let d=0;for(let x=0;x<p.length;x++)d+=p[x];const S=h.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",p),c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const g=p===void 0?0:p.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<g;v++){const C=_[v];C[0]=v,C[1]=p[v]}_.sort(Td);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(bd);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const C=a[v],w=C[0],A=C[1];w!==Number.MAX_SAFE_INTEGER&&A?(f&&h.getAttribute("morphTarget"+v)!==f[w]&&h.setAttribute("morphTarget"+v,f[w]),d&&h.getAttribute("morphNormal"+v)!==d[w]&&h.setAttribute("morphNormal"+v,d[w]),r[v]=A,S+=A):(f&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const x=h.morphTargetsRelative?1:1-S;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function wd(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,h=l.geometry,c=e.get(l,h);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Rl extends Tt{constructor(e,t,n,r,s,o,a,l,u,h){if(h=h!==void 0?h:In,h!==In&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=pn),n===void 0&&h===fi&&(n=Un),super(null,r,s,o,a,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cl=new Tt,Ll=new Rl(1,1);Ll.compareFunction=dl;const Pl=new _l,Dl=new uu,Ul=new Tl,_o=[],vo=[],xo=new Float32Array(16),Mo=new Float32Array(9),So=new Float32Array(4);function vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_o[r];if(s===void 0&&(s=new Float32Array(r),_o[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nr(i,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Dd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),lt(t,n)}}function Ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Mo.set(n),i.uniformMatrix3fv(this.addr,!1,Mo),lt(t,n)}}function Id(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),lt(t,n)}}function Nd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function Bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ll:Cl;t.setTexture2D(e||s,r)}function Wd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dl,r)}function Xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ul,r)}function qd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pl,r)}function Yd(i){switch(i){case 5126:return Rd;case 35664:return Cd;case 35665:return Ld;case 35666:return Pd;case 35674:return Dd;case 35675:return Ud;case 35676:return Id;case 5124:case 35670:return Nd;case 35667:case 35671:return Od;case 35668:case 35672:return Fd;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return Gd;case 36295:return Hd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return qd}}function Jd(i,e){i.uniform1fv(this.addr,e)}function Kd(i,e){const t=vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zd(i,e){const t=vi(e,this.size,3);i.uniform3fv(this.addr,t)}function $d(i,e){const t=vi(e,this.size,4);i.uniform4fv(this.addr,t)}function jd(i,e){const t=vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qd(i,e){const t=vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ep(i,e){const t=vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tp(i,e){i.uniform1iv(this.addr,e)}function np(i,e){i.uniform2iv(this.addr,e)}function ip(i,e){i.uniform3iv(this.addr,e)}function rp(i,e){i.uniform4iv(this.addr,e)}function sp(i,e){i.uniform1uiv(this.addr,e)}function ap(i,e){i.uniform2uiv(this.addr,e)}function op(i,e){i.uniform3uiv(this.addr,e)}function lp(i,e){i.uniform4uiv(this.addr,e)}function cp(i,e,t){const n=this.cache,r=e.length,s=Nr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cl,s[o])}function up(i,e,t){const n=this.cache,r=e.length,s=Nr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dl,s[o])}function hp(i,e,t){const n=this.cache,r=e.length,s=Nr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ul,s[o])}function fp(i,e,t){const n=this.cache,r=e.length,s=Nr(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pl,s[o])}function dp(i){switch(i){case 5126:return Jd;case 35664:return Kd;case 35665:return Zd;case 35666:return $d;case 35674:return jd;case 35675:return Qd;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return fp}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yd(t.type)}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dp(t.type)}}class gp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const _s=/(\w+)(\])?(\[|\.)?/g;function yo(i,e){i.seq.push(e),i.map[e.id]=e}function _p(i,e,t){const n=i.name,r=n.length;for(_s.lastIndex=0;;){const s=_s.exec(n),o=_s.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){yo(t,u===void 0?new pp(a,i,e):new mp(a,i,e));break}else{let c=t.map[a];c===void 0&&(c=new gp(a),yo(t,c)),t=c}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_p(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vp=37297;let xp=0;function Mp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Sp(i){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i);let n;switch(e===t?n="":e===Ar&&t===Tr?n="LinearDisplayP3ToLinearSRGB":e===Tr&&t===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case ln:case Dr:return[n,"LinearTransferOETF"];case pt:case qs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Mp(i.getShaderSource(e),o)}else return r}function yp(i,e){const t=Sp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ep(i,e){let t;switch(e){case Uc:t="Linear";break;case Ic:t="Reinhard";break;case Nc:t="OptimizedCineon";break;case Oc:t="ACESFilmic";break;case Bc:t="AgX";break;case Fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ai).join(`
`)}function Ap(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ai(i){return i!==""}function To(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(i){return i.replace(Rp,Lp)}const Cp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lp(i,e){let t=ze[e];if(t===void 0){const n=Cp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ns(t)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(i){return i.replace(Pp,Dp)}function Dp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ro(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Np(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Op(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ws:e="ENVMAP_BLENDING_MULTIPLY";break;case Pc:e="ENVMAP_BLENDING_MIX";break;case Dc:e="ENVMAP_BLENDING_ADD";break}return e}function Fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Up(t),u=Ip(t),h=Np(t),c=Op(t),p=Fp(t),m=t.isWebGL2?"":bp(t),g=Tp(t),_=Ap(s),f=r.createProgram();let d,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ai).join(`
`),d.length>0&&(d+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ai).join(`
`),S.length>0&&(S+=`
`)):(d=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),S=[m,Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?ze.tonemapping_pars_fragment:"",t.toneMapping!==_n?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,yp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ai).join(`
`)),o=Ns(o),o=To(o,t),o=Ao(o,t),a=Ns(a),a=To(a,t),a=Ao(a,t),o=wo(o),a=wo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const v=x+d+o,C=x+S+a,w=Eo(r,r.VERTEX_SHADER,v),A=Eo(r,r.FRAGMENT_SHADER,C);r.attachShader(f,w),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function X(H){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(f).trim(),L=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(A).trim();let V=!0,K=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,w,A);else{const q=bo(r,w,"vertex"),$=bo(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||F==="")&&(K=!1);K&&(H.diagnostics={runnable:V,programLog:Z,vertexShader:{log:L,prefix:d},fragmentShader:{log:F,prefix:S}})}r.deleteShader(w),r.deleteShader(A),y=new Mr(r,f),T=wp(r,f)}let y;this.getUniforms=function(){return y===void 0&&X(this),y};let T;this.getAttributes=function(){return T===void 0&&X(this),T};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(f,vp)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=A,this}let zp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hp(e),t.set(e,n)),n}}class Hp{constructor(e){this.id=zp++,this.code=e,this.usedTimes=0}}function Vp(i,e,t,n,r,s,o){const a=new xl,l=new Gp,u=[],h=r.isWebGL2,c=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function f(y,T,O,H,Z){const L=H.fog,F=Z.geometry,V=y.isMeshStandardMaterial?H.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),q=K&&K.mapping===Pr?K.image.height:null,$=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ie=j!==void 0?j.length:0;let ae=0;F.morphAttributes.position!==void 0&&(ae=1),F.morphAttributes.normal!==void 0&&(ae=2),F.morphAttributes.color!==void 0&&(ae=3);let k,ee,de,ye;if($){const xt=Yt[$];k=xt.vertexShader,ee=xt.fragmentShader}else k=y.vertexShader,ee=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);const ge=i.getRenderTarget(),Ce=Z.isInstancedMesh===!0,Ue=Z.isBatchedMesh===!0,Te=!!y.map,De=!!y.matcap,R=!!K,se=!!y.aoMap,J=!!y.lightMap,re=!!y.bumpMap,Y=!!y.normalMap,Ae=!!y.displacementMap,_e=!!y.emissiveMap,E=!!y.metalnessMap,M=!!y.roughnessMap,N=y.anisotropy>0,ne=y.clearcoat>0,te=y.iridescence>0,Q=y.sheen>0,be=y.transmission>0,ue=N&&!!y.anisotropyMap,xe=ne&&!!y.clearcoatMap,Re=ne&&!!y.clearcoatNormalMap,B=ne&&!!y.clearcoatRoughnessMap,U=te&&!!y.iridescenceMap,ve=te&&!!y.iridescenceThicknessMap,he=Q&&!!y.sheenColorMap,oe=Q&&!!y.sheenRoughnessMap,Me=!!y.specularMap,Ee=!!y.specularColorMap,Fe=!!y.specularIntensityMap,Xe=be&&!!y.transmissionMap,je=be&&!!y.thicknessMap,He=!!y.gradientMap,le=!!y.alphaMap,P=y.alphaTest>0,pe=!!y.alphaHash,me=!!y.extensions,Ie=!!F.attributes.uv1,Le=!!F.attributes.uv2,Ye=!!F.attributes.uv3;let Je=_n;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:ee,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ue,instancing:Ce,instancingColor:Ce&&Z.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ln,map:Te,matcap:De,envMap:R,envMapMode:R&&K.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:J,bumpMap:re,normalMap:Y,displacementMap:p&&Ae,emissiveMap:_e,normalMapObjectSpace:Y&&y.normalMapType===Zc,normalMapTangentSpace:Y&&y.normalMapType===fl,metalnessMap:E,roughnessMap:M,anisotropy:N,anisotropyMap:ue,clearcoat:ne,clearcoatMap:xe,clearcoatNormalMap:Re,clearcoatRoughnessMap:B,iridescence:te,iridescenceMap:U,iridescenceThicknessMap:ve,sheen:Q,sheenColorMap:he,sheenRoughnessMap:oe,specularMap:Me,specularColorMap:Ee,specularIntensityMap:Fe,transmission:be,transmissionMap:Xe,thicknessMap:je,gradientMap:He,opaque:y.transparent===!1&&y.blending===li,alphaMap:le,alphaTest:P,alphaHash:pe,combine:y.combine,mapUv:Te&&_(y.map.channel),aoMapUv:se&&_(y.aoMap.channel),lightMapUv:J&&_(y.lightMap.channel),bumpMapUv:re&&_(y.bumpMap.channel),normalMapUv:Y&&_(y.normalMap.channel),displacementMapUv:Ae&&_(y.displacementMap.channel),emissiveMapUv:_e&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ue&&_(y.anisotropyMap.channel),clearcoatMapUv:xe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:oe&&_(y.sheenRoughnessMap.channel),specularMapUv:Me&&_(y.specularMap.channel),specularColorMapUv:Ee&&_(y.specularColorMap.channel),specularIntensityMapUv:Fe&&_(y.specularIntensityMap.channel),transmissionMapUv:Xe&&_(y.transmissionMap.channel),thicknessMapUv:je&&_(y.thicknessMap.channel),alphaMapUv:le&&_(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Y||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Le,vertexUv3s:Ye,pointsUvs:Z.isPoints===!0&&!!F.attributes.uv&&(Te||le),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:Z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===Ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jt,flipSided:y.side===bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:me&&y.extensions.derivatives===!0,extensionFragDepth:me&&y.extensions.fragDepth===!0,extensionDrawBuffers:me&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)T.push(O),T.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(S(T,y),x(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function v(y){const T=g[y.type];let O;if(T){const H=Yt[T];O=Eu.clone(H.uniforms)}else O=y.uniforms;return O}function C(y,T){let O;for(let H=0,Z=u.length;H<Z;H++){const L=u[H];if(L.cacheKey===T){O=L,++O.usedTimes;break}}return O===void 0&&(O=new Bp(i,T,y,s),u.push(O)),O}function w(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function X(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:X}}function kp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Co(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(c,p,m,g,_,f){let d=i[e];return d===void 0?(d={id:c.id,object:c,geometry:p,material:m,groupOrder:g,renderOrder:c.renderOrder,z:_,group:f},i[e]=d):(d.id=c.id,d.object=c,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=c.renderOrder,d.z=_,d.group=f),e++,d}function a(c,p,m,g,_,f){const d=o(c,p,m,g,_,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(c,p,m,g,_,f){const d=o(c,p,m,g,_,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function u(c,p){t.length>1&&t.sort(c||Wp),n.length>1&&n.sort(p||Co),r.length>1&&r.sort(p||Co)}function h(){for(let c=e,p=i.length;c<p;c++){const m=i[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function Xp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Lo,i.set(n,[o])):r>=s.length?(o=new Lo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jp=0;function Kp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zp(i,e){const t=new qp,n=Yp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const s=new D,o=new nt,a=new nt;function l(h,c){let p=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,f=0,d=0,S=0,x=0,v=0,C=0,w=0,A=0,X=0,y=0;h.sort(Kp);const T=c===!0?Math.PI:1;for(let H=0,Z=h.length;H<Z;H++){const L=h[H],F=L.color,V=L.intensity,K=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=F.r*V*T,m+=F.g*V*T,g+=F.b*V*T;else if(L.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(L.sh.coefficients[$],V);y++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const j=L.shadow,ie=n.get(L);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=L.shadow.matrix,v++}r.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(V*T),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,r.spot[d]=$;const j=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&X++),r.spotLightMatrix[d]=j.matrix,L.castShadow){const ie=n.get(L);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,r.spotShadow[d]=ie,r.spotShadowMap[d]=q,w++}d++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(F).multiplyScalar(V),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),r.rectArea[S]=$,S++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*T),$.distance=L.distance,$.decay=L.decay,L.castShadow){const j=L.shadow,ie=n.get(L);ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,r.pointShadow[f]=ie,r.pointShadowMap[f]=q,r.pointShadowMatrix[f]=L.shadow.matrix,C++}r.point[f]=$,f++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(V*T),$.groundColor.copy(L.groundColor).multiplyScalar(V*T),r.hemi[x]=$,x++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==_||O.pointLength!==f||O.spotLength!==d||O.rectAreaLength!==S||O.hemiLength!==x||O.numDirectionalShadows!==v||O.numPointShadows!==C||O.numSpotShadows!==w||O.numSpotMaps!==A||O.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=S,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+A-X,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=y,O.directionalLength=_,O.pointLength=f,O.spotLength=d,O.rectAreaLength=S,O.hemiLength=x,O.numDirectionalShadows=v,O.numPointShadows=C,O.numSpotShadows=w,O.numSpotMaps=A,O.numLightProbes=y,r.version=Jp++)}function u(h,c){let p=0,m=0,g=0,_=0,f=0;const d=c.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const v=h[S];if(v.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),p++}else if(v.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),g++}else if(v.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){const C=r.hemi[f];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(d),f++}}}return{setup:l,setupView:u,state:r}}function Po(i,e){const t=new Zp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(c){n.push(c)}function a(c){r.push(c)}function l(c){t.setup(n,c)}function u(c){t.setupView(n,c)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function $p(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Po(i,e),t.set(s,[l])):o>=a.length?(l=new Po(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class jp extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qp extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(i,e,t){let n=new Ys;const r=new fe,s=new fe,o=new $e,a=new jp({depthPacking:Kc}),l=new Qp,u={},h=t.maxTextureSize,c={[Mn]:bt,[bt]:Mn,[Jt]:Jt},p=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:em,fragmentShader:tm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let d=this.type;this.render=function(w,A,X){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),T=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending(gn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=d!==rn&&this.type===rn,L=d===rn&&this.type!==rn;for(let F=0,V=w.length;F<V;F++){const K=w[F],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const $=q.getFrameExtents();if(r.multiply($),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,q.mapSize.y=s.y)),q.map===null||Z===!0||L===!0){const ie=this.type!==rn?{minFilter:yt,magFilter:yt}:{};q.map!==null&&q.map.dispose(),q.map=new Fn(r.x,r.y,ie),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const j=q.getViewportCount();for(let ie=0;ie<j;ie++){const ae=q.getViewport(ie);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),H.viewport(o),q.updateMatrices(K,ie),n=q.getFrustum(),v(A,X,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===rn&&S(q,X),q.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(y,T,O)};function S(w,A){const X=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,X,p,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,X,m,_,null)}function x(w,A,X,y){let T=null;const O=X.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)T=O;else if(T=X.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=T.uuid,Z=A.uuid;let L=u[H];L===void 0&&(L={},u[H]=L);let F=L[Z];F===void 0&&(F=T.clone(),L[Z]=F,A.addEventListener("dispose",C)),T=F}if(T.visible=A.visible,T.wireframe=A.wireframe,y===rn?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:c[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=i.properties.get(T);H.light=X}return T}function v(w,A,X,y,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const F=Z.groups;for(let V=0,K=F.length;V<K;V++){const q=F[V],$=L[q.materialIndex];if($&&$.visible){const j=x(w,$,y,T);w.onBeforeShadow(i,w,A,X,Z,j,q),i.renderBufferDirect(X,null,Z,j,w,q),w.onAfterShadow(i,w,A,X,Z,j,q)}}}else if(L.visible){const F=x(w,L,y,T);w.onBeforeShadow(i,w,A,X,Z,F,null),i.renderBufferDirect(X,null,Z,F,w,null),w.onAfterShadow(i,w,A,X,Z,F,null)}}const H=w.children;for(let Z=0,L=H.length;Z<L;Z++)v(H[Z],A,X,y,T)}function C(w){w.target.removeEventListener("dispose",C);for(const X in u){const y=u[X],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function im(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const pe=new $e;let me=null;const Ie=new $e(0,0,0,0);return{setMask:function(Le){me!==Le&&!P&&(i.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){P=Le},setClear:function(Le,Ye,Je,ct,xt){xt===!0&&(Le*=ct,Ye*=ct,Je*=ct),pe.set(Le,Ye,Je,ct),Ie.equals(pe)===!1&&(i.clearColor(Le,Ye,Je,ct),Ie.copy(pe))},reset:function(){P=!1,me=null,Ie.set(-1,0,0,0)}}}function s(){let P=!1,pe=null,me=null,Ie=null;return{setTest:function(Le){Le?Ue(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!P&&(i.depthMask(Le),pe=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case bc:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case wc:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Cc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Le}},setLocked:function(Le){P=Le},setClear:function(Le){Ie!==Le&&(i.clearDepth(Le),Ie=Le)},reset:function(){P=!1,pe=null,me=null,Ie=null}}}function o(){let P=!1,pe=null,me=null,Ie=null,Le=null,Ye=null,Je=null,ct=null,xt=null;return{setTest:function(Ke){P||(Ke?Ue(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Ke){pe!==Ke&&!P&&(i.stencilMask(Ke),pe=Ke)},setFunc:function(Ke,Mt,kt){(me!==Ke||Ie!==Mt||Le!==kt)&&(i.stencilFunc(Ke,Mt,kt),me=Ke,Ie=Mt,Le=kt)},setOp:function(Ke,Mt,kt){(Ye!==Ke||Je!==Mt||ct!==kt)&&(i.stencilOp(Ke,Mt,kt),Ye=Ke,Je=Mt,ct=kt)},setLocked:function(Ke){P=Ke},setClear:function(Ke){xt!==Ke&&(i.clearStencil(Ke),xt=Ke)},reset:function(){P=!1,pe=null,me=null,Ie=null,Le=null,Ye=null,Je=null,ct=null,xt=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,c=new WeakMap;let p={},m={},g=new WeakMap,_=[],f=null,d=!1,S=null,x=null,v=null,C=null,w=null,A=null,X=null,y=new We(0,0,0),T=0,O=!1,H=null,Z=null,L=null,F=null,V=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=$>=2);let ie=null,ae={};const k=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),de=new $e().fromArray(k),ye=new $e().fromArray(ee);function ge(P,pe,me,Ie){const Le=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(P,Ye),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<me;Je++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(pe+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Ye}const Ce={};Ce[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(i.DEPTH_TEST),l.setFunc(Er),_e(!1),E(ha),Ue(i.CULL_FACE),Y(gn);function Ue(P){p[P]!==!0&&(i.enable(P),p[P]=!0)}function Te(P){p[P]!==!1&&(i.disable(P),p[P]=!1)}function De(P,pe){return m[P]!==pe?(i.bindFramebuffer(P,pe),m[P]=pe,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=pe),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function R(P,pe){let me=_,Ie=!1;if(P)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),P.isWebGLMultipleRenderTargets){const Le=P.texture;if(me.length!==Le.length||me[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,Je=Le.length;Ye<Je;Ye++)me[Ye]=i.COLOR_ATTACHMENT0+Ye;me.length=Le.length,Ie=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,Ie=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function se(P){return f!==P?(i.useProgram(P),f=P,!0):!1}const J={[Ln]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};if(n)J[ma]=i.MIN,J[ga]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(J[ma]=P.MIN_EXT,J[ga]=P.MAX_EXT)}const re={[hc]:i.ZERO,[fc]:i.ONE,[dc]:i.SRC_COLOR,[ws]:i.SRC_ALPHA,[xc]:i.SRC_ALPHA_SATURATE,[_c]:i.DST_COLOR,[mc]:i.DST_ALPHA,[pc]:i.ONE_MINUS_SRC_COLOR,[Rs]:i.ONE_MINUS_SRC_ALPHA,[vc]:i.ONE_MINUS_DST_COLOR,[gc]:i.ONE_MINUS_DST_ALPHA,[Mc]:i.CONSTANT_COLOR,[Sc]:i.ONE_MINUS_CONSTANT_COLOR,[yc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(P,pe,me,Ie,Le,Ye,Je,ct,xt,Ke){if(P===gn){d===!0&&(Te(i.BLEND),d=!1);return}if(d===!1&&(Ue(i.BLEND),d=!0),P!==lc){if(P!==S||Ke!==O){if((x!==Ln||w!==Ln)&&(i.blendEquation(i.FUNC_ADD),x=Ln,w=Ln),Ke)switch(P){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.ONE,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,C=null,A=null,X=null,y.set(0,0,0),T=0,S=P,O=Ke}return}Le=Le||pe,Ye=Ye||me,Je=Je||Ie,(pe!==x||Le!==w)&&(i.blendEquationSeparate(J[pe],J[Le]),x=pe,w=Le),(me!==v||Ie!==C||Ye!==A||Je!==X)&&(i.blendFuncSeparate(re[me],re[Ie],re[Ye],re[Je]),v=me,C=Ie,A=Ye,X=Je),(ct.equals(y)===!1||xt!==T)&&(i.blendColor(ct.r,ct.g,ct.b,xt),y.copy(ct),T=xt),S=P,O=!1}function Ae(P,pe){P.side===Jt?Te(i.CULL_FACE):Ue(i.CULL_FACE);let me=P.side===bt;pe&&(me=!me),_e(me),P.blending===li&&P.transparent===!1?Y(gn):Y(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ie=P.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),N(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(P){H!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),H=P)}function E(P){P!==sc?(Ue(i.CULL_FACE),P!==Z&&(P===ha?i.cullFace(i.BACK):P===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),Z=P}function M(P){P!==L&&(q&&i.lineWidth(P),L=P)}function N(P,pe,me){P?(Ue(i.POLYGON_OFFSET_FILL),(F!==pe||V!==me)&&(i.polygonOffset(pe,me),F=pe,V=me)):Te(i.POLYGON_OFFSET_FILL)}function ne(P){P?Ue(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function te(P){P===void 0&&(P=i.TEXTURE0+K-1),ie!==P&&(i.activeTexture(P),ie=P)}function Q(P,pe,me){me===void 0&&(ie===null?me=i.TEXTURE0+K-1:me=ie);let Ie=ae[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[me]=Ie),(Ie.type!==P||Ie.texture!==pe)&&(ie!==me&&(i.activeTexture(me),ie=me),i.bindTexture(P,pe||Ce[P]),Ie.type=P,Ie.texture=pe)}function be(){const P=ae[ie];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(P){de.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function Xe(P){ye.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function je(P,pe){let me=c.get(pe);me===void 0&&(me=new WeakMap,c.set(pe,me));let Ie=me.get(P);Ie===void 0&&(Ie=i.getUniformBlockIndex(pe,P.name),me.set(P,Ie))}function He(P,pe){const Ie=c.get(pe).get(P);h.get(pe)!==Ie&&(i.uniformBlockBinding(pe,Ie,P.__bindingPointIndex),h.set(pe,Ie))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ie=null,ae={},m={},g=new WeakMap,_=[],f=null,d=!1,S=null,x=null,v=null,C=null,w=null,A=null,X=null,y=new We(0,0,0),T=0,O=!1,H=null,Z=null,L=null,F=null,V=null,de.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ue,disable:Te,bindFramebuffer:De,drawBuffers:R,useProgram:se,setBlending:Y,setMaterial:Ae,setFlipSided:_e,setCullFace:E,setLineWidth:M,setPolygonOffset:N,setScissorTest:ne,activeTexture:te,bindTexture:Q,unbindTexture:be,compressedTexImage2D:ue,compressedTexImage3D:xe,texImage2D:Me,texImage3D:Ee,updateUBOMapping:je,uniformBlockBinding:He,texStorage2D:he,texStorage3D:oe,texSubImage2D:Re,texSubImage3D:B,compressedTexSubImage2D:U,compressedTexSubImage3D:ve,scissor:Fe,viewport:Xe,reset:le}}function rm(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let c;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return m?new OffscreenCanvas(E,M):Rr("canvas")}function _(E,M,N,ne){let te=1;if((E.width>ne||E.height>ne)&&(te=ne/Math.max(E.width,E.height)),te<1||M===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const Q=M?Is:Math.floor,be=Q(te*E.width),ue=Q(te*E.height);c===void 0&&(c=g(be,ue));const xe=N?g(be,ue):c;return xe.width=be,xe.height=ue,xe.getContext("2d").drawImage(E,0,0,be,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+ue+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return qa(E.width)&&qa(E.height)}function d(E){return a?!1:E.wrapS!==Gt||E.wrapT!==Gt||E.minFilter!==yt&&E.minFilter!==Ut}function S(E,M){return E.generateMipmaps&&M&&E.minFilter!==yt&&E.minFilter!==Ut}function x(E){i.generateMipmap(E)}function v(E,M,N,ne,te=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=M;if(M===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),M===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RGBA){const be=te?br:qe.getTransfer(ne);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=be===Ze?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(E,M,N){return S(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==yt&&E.minFilter!==Ut?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function w(E){return E===yt||E===_a||E===Vr?i.NEAREST:i.LINEAR}function A(E){const M=E.target;M.removeEventListener("dispose",A),y(M),M.isVideoTexture&&h.delete(M)}function X(E){const M=E.target;M.removeEventListener("dispose",X),O(M)}function y(E){const M=n.get(E);if(M.__webglInit===void 0)return;const N=E.source,ne=p.get(N);if(ne){const te=ne[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(E),Object.keys(ne).length===0&&p.delete(N)}n.remove(E)}function T(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const N=E.source,ne=p.get(N);delete ne[M.__cacheKey],o.memory.textures--}function O(E){const M=E.texture,N=n.get(E),ne=n.get(M);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(N.__webglFramebuffer[te]))for(let Q=0;Q<N.__webglFramebuffer[te].length;Q++)i.deleteFramebuffer(N.__webglFramebuffer[te][Q]);else i.deleteFramebuffer(N.__webglFramebuffer[te]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[te])}else{if(Array.isArray(N.__webglFramebuffer))for(let te=0;te<N.__webglFramebuffer.length;te++)i.deleteFramebuffer(N.__webglFramebuffer[te]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let te=0;te<N.__webglColorRenderbuffer.length;te++)N.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[te]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,Q=M.length;te<Q;te++){const be=n.get(M[te]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(E)}let H=0;function Z(){H=0}function L(){const E=H;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),H+=1,E}function F(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function V(E,M){const N=n.get(E);if(E.isVideoTexture&&Ae(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(N,E,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function K(E,M){const N=n.get(E);if(E.version>0&&N.__version!==E.version){de(N,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function q(E,M){const N=n.get(E);if(E.version>0&&N.__version!==E.version){de(N,E,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function $(E,M){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ye(N,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}const j={[Ii]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Ps]:i.MIRRORED_REPEAT},ie={[yt]:i.NEAREST,[_a]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[zc]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},ae={[$c]:i.NEVER,[iu]:i.ALWAYS,[jc]:i.LESS,[dl]:i.LEQUAL,[Qc]:i.EQUAL,[nu]:i.GEQUAL,[eu]:i.GREATER,[tu]:i.NOTEQUAL};function k(E,M,N){if(N?(i.texParameteri(E,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,j[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ie[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ie[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Gt||M.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==yt&&M.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===yt||M.minFilter!==Vr&&M.minFilter!==Ni||M.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ee(E,M){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const ne=M.source;let te=p.get(ne);te===void 0&&(te={},p.set(ne,te));const Q=F(M);if(Q!==E.__cacheKey){te[Q]===void 0&&(te[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),te[Q].usedTimes++;const be=te[E.__cacheKey];be!==void 0&&(te[E.__cacheKey].usedTimes--,be.usedTimes===0&&T(M)),E.__cacheKey=Q,E.__webglTexture=te[Q].texture}return N}function de(E,M,N){let ne=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=i.TEXTURE_3D);const te=ee(E,M),Q=M.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+N);const be=n.get(Q);if(Q.version!==be.__version||te===!0){t.activeTexture(i.TEXTURE0+N);const ue=qe.getPrimaries(qe.workingColorSpace),xe=M.colorSpace===It?null:qe.getPrimaries(M.colorSpace),Re=M.colorSpace===It||ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const B=d(M)&&f(M.image)===!1;let U=_(M.image,B,!1,r.maxTextureSize);U=_e(M,U);const ve=f(U)||a,he=s.convert(M.format,M.colorSpace);let oe=s.convert(M.type),Me=v(M.internalFormat,he,oe,M.colorSpace,M.isVideoTexture);k(ne,M,ve);let Ee;const Fe=M.mipmaps,Xe=a&&M.isVideoTexture!==!0&&Me!==ul,je=be.__version===void 0||te===!0,He=C(M,U,ve);if(M.isDepthTexture)Me=i.DEPTH_COMPONENT,a?M.type===mn?Me=i.DEPTH_COMPONENT32F:M.type===pn?Me=i.DEPTH_COMPONENT24:M.type===Un?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:M.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===In&&Me===i.DEPTH_COMPONENT&&M.type!==Xs&&M.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=pn,oe=s.convert(M.type)),M.format===fi&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,M.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Un,oe=s.convert(M.type))),je&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Me,U.width,U.height):t.texImage2D(i.TEXTURE_2D,0,Me,U.width,U.height,0,he,oe,null));else if(M.isDataTexture)if(Fe.length>0&&ve){Xe&&je&&t.texStorage2D(i.TEXTURE_2D,He,Me,Fe[0].width,Fe[0].height);for(let le=0,P=Fe.length;le<P;le++)Ee=Fe[le],Xe?t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ee.width,Ee.height,he,oe,Ee.data):t.texImage2D(i.TEXTURE_2D,le,Me,Ee.width,Ee.height,0,he,oe,Ee.data);M.generateMipmaps=!1}else Xe?(je&&t.texStorage2D(i.TEXTURE_2D,He,Me,U.width,U.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,U.width,U.height,he,oe,U.data)):t.texImage2D(i.TEXTURE_2D,0,Me,U.width,U.height,0,he,oe,U.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Me,Fe[0].width,Fe[0].height,U.depth);for(let le=0,P=Fe.length;le<P;le++)Ee=Fe[le],M.format!==Ht?he!==null?Xe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,U.depth,he,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Me,Ee.width,Ee.height,U.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,U.depth,he,oe,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Me,Ee.width,Ee.height,U.depth,0,he,oe,Ee.data)}else{Xe&&je&&t.texStorage2D(i.TEXTURE_2D,He,Me,Fe[0].width,Fe[0].height);for(let le=0,P=Fe.length;le<P;le++)Ee=Fe[le],M.format!==Ht?he!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Ee.width,Ee.height,he,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ee.width,Ee.height,he,oe,Ee.data):t.texImage2D(i.TEXTURE_2D,le,Me,Ee.width,Ee.height,0,he,oe,Ee.data)}else if(M.isDataArrayTexture)Xe?(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Me,U.width,U.height,U.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,he,oe,U.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,U.width,U.height,U.depth,0,he,oe,U.data);else if(M.isData3DTexture)Xe?(je&&t.texStorage3D(i.TEXTURE_3D,He,Me,U.width,U.height,U.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,he,oe,U.data)):t.texImage3D(i.TEXTURE_3D,0,Me,U.width,U.height,U.depth,0,he,oe,U.data);else if(M.isFramebufferTexture){if(je)if(Xe)t.texStorage2D(i.TEXTURE_2D,He,Me,U.width,U.height);else{let le=U.width,P=U.height;for(let pe=0;pe<He;pe++)t.texImage2D(i.TEXTURE_2D,pe,Me,le,P,0,he,oe,null),le>>=1,P>>=1}}else if(Fe.length>0&&ve){Xe&&je&&t.texStorage2D(i.TEXTURE_2D,He,Me,Fe[0].width,Fe[0].height);for(let le=0,P=Fe.length;le<P;le++)Ee=Fe[le],Xe?t.texSubImage2D(i.TEXTURE_2D,le,0,0,he,oe,Ee):t.texImage2D(i.TEXTURE_2D,le,Me,he,oe,Ee);M.generateMipmaps=!1}else Xe?(je&&t.texStorage2D(i.TEXTURE_2D,He,Me,U.width,U.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,oe,U)):t.texImage2D(i.TEXTURE_2D,0,Me,he,oe,U);S(M,ve)&&x(ne),be.__version=Q.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ye(E,M,N){if(M.image.length!==6)return;const ne=ee(E,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const Q=n.get(te);if(te.version!==Q.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const be=qe.getPrimaries(qe.workingColorSpace),ue=M.colorSpace===It?null:qe.getPrimaries(M.colorSpace),xe=M.colorSpace===It||be===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,B=M.image[0]&&M.image[0].isDataTexture,U=[];for(let le=0;le<6;le++)!Re&&!B?U[le]=_(M.image[le],!1,!0,r.maxCubemapSize):U[le]=B?M.image[le].image:M.image[le],U[le]=_e(M,U[le]);const ve=U[0],he=f(ve)||a,oe=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),Ee=v(M.internalFormat,oe,Me,M.colorSpace),Fe=a&&M.isVideoTexture!==!0,Xe=Q.__version===void 0||ne===!0;let je=C(M,ve,he);k(i.TEXTURE_CUBE_MAP,M,he);let He;if(Re){Fe&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Ee,ve.width,ve.height);for(let le=0;le<6;le++){He=U[le].mipmaps;for(let P=0;P<He.length;P++){const pe=He[P];M.format!==Ht?oe!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,0,0,pe.width,pe.height,oe,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,0,0,pe.width,pe.height,oe,Me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,Ee,pe.width,pe.height,0,oe,Me,pe.data)}}}else{He=M.mipmaps,Fe&&Xe&&(He.length>0&&je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Ee,U[0].width,U[0].height));for(let le=0;le<6;le++)if(B){Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,U[le].width,U[le].height,oe,Me,U[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ee,U[le].width,U[le].height,0,oe,Me,U[le].data);for(let P=0;P<He.length;P++){const me=He[P].image[le].image;Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,0,0,me.width,me.height,oe,Me,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,Ee,me.width,me.height,0,oe,Me,me.data)}}else{Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,oe,Me,U[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ee,oe,Me,U[le]);for(let P=0;P<He.length;P++){const pe=He[P];Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,0,0,oe,Me,pe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,Ee,oe,Me,pe.image[le])}}}S(M,he)&&x(i.TEXTURE_CUBE_MAP),Q.__version=te.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ge(E,M,N,ne,te,Q){const be=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),xe=v(N.internalFormat,be,ue,N.colorSpace);if(!n.get(M).__hasExternalTextures){const B=Math.max(1,M.width>>Q),U=Math.max(1,M.height>>Q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,xe,B,U,M.depth,0,be,ue,null):t.texImage2D(te,Q,xe,B,U,0,be,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,te,n.get(N).__webglTexture,0,re(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,te,n.get(N).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(E,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||Y(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===mn?ne=i.DEPTH_COMPONENT32F:te.type===pn&&(ne=i.DEPTH_COMPONENT24));const Q=re(M);Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,ne,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ne,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const ne=re(M);N&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,M.width,M.height):Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<ne.length;te++){const Q=ne[te],be=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),xe=v(Q.internalFormat,be,ue,Q.colorSpace),Re=re(M);N&&Y(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,xe,M.width,M.height):Y(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const ne=n.get(M.depthTexture).__webglTexture,te=re(M);if(M.depthTexture.format===In)Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(M.depthTexture.format===fi)Y(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Te(E){const M=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,E)}else if(N){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ce(M.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ce(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,M,N){const ne=n.get(E);M!==void 0&&ge(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Te(E)}function R(E){const M=E.texture,N=n.get(E),ne=n.get(M);E.addEventListener("dispose",X),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=M.version,o.memory.textures++);const te=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,be=f(E)||a;if(te){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let xe=0;xe<M.mipmaps.length;xe++)N.__webglFramebuffer[ue][xe]=i.createFramebuffer()}else N.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)N.__webglFramebuffer[ue]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Q)if(r.drawBuffers){const ue=E.texture;for(let xe=0,Re=ue.length;xe<Re;xe++){const B=n.get(ue[xe]);B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Y(E)===!1){const ue=Q?M:[M];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){const Re=ue[xe];N.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[xe]);const B=s.convert(Re.format,Re.colorSpace),U=s.convert(Re.type),ve=v(Re.internalFormat,B,U,Re.colorSpace,E.isXRRenderTarget===!0),he=re(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,N.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),k(i.TEXTURE_CUBE_MAP,M,be);for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ge(N.__webglFramebuffer[ue][xe],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else ge(N.__webglFramebuffer[ue],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(M,be)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ue=E.texture;for(let xe=0,Re=ue.length;xe<Re;xe++){const B=ue[xe],U=n.get(B);t.bindTexture(i.TEXTURE_2D,U.__webglTexture),k(i.TEXTURE_2D,B,be),ge(N.__webglFramebuffer,E,B,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),S(B,be)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ue=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ne.__webglTexture),k(ue,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ge(N.__webglFramebuffer[xe],E,M,i.COLOR_ATTACHMENT0,ue,xe);else ge(N.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ue,0);S(M,be)&&x(ue),t.unbindTexture()}E.depthBuffer&&Te(E)}function se(E){const M=f(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,te=N.length;ne<te;ne++){const Q=N[ne];if(S(Q,M)){const be=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ue=n.get(Q).__webglTexture;t.bindTexture(be,ue),x(be),t.unbindTexture()}}}function J(E){if(a&&E.samples>0&&Y(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,ne=E.height;let te=i.COLOR_BUFFER_BIT;const Q=[],be=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){Q.push(i.COLOR_ATTACHMENT0+Re),E.depthBuffer&&Q.push(be);const B=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(B===!1&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Re]),B===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),xe){const U=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,N,ne,0,0,N,ne,te,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Re]);const B=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,B,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function re(E){return Math.min(r.maxSamples,E.samples)}function Y(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(E){const M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function _e(E,M){const N=E.colorSpace,ne=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ds||N!==ln&&N!==It&&(qe.getTransfer(N)===Ze?a===!1?e.has("EXT_sRGB")===!0&&ne===Ht?(E.format=Ds,E.minFilter=Ut,E.generateMipmaps=!1):M=ml.sRGBToLinear(M):(ne!==Ht||te!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=De,this.setupRenderTarget=R,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Y}function sm(i,e,t){const n=t.isWebGL2;function r(s,o=It){let a;const l=qe.getTransfer(o);if(s===vn)return i.UNSIGNED_BYTE;if(s===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===al)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Gc)return i.BYTE;if(s===Hc)return i.SHORT;if(s===Xs)return i.UNSIGNED_SHORT;if(s===rl)return i.INT;if(s===pn)return i.UNSIGNED_INT;if(s===mn)return i.FLOAT;if(s===Oi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vc)return i.ALPHA;if(s===Ht)return i.RGBA;if(s===kc)return i.LUMINANCE;if(s===Wc)return i.LUMINANCE_ALPHA;if(s===In)return i.DEPTH_COMPONENT;if(s===fi)return i.DEPTH_STENCIL;if(s===Ds)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xc)return i.RED;if(s===ol)return i.RED_INTEGER;if(s===qc)return i.RG;if(s===ll)return i.RG_INTEGER;if(s===cl)return i.RGBA_INTEGER;if(s===kr||s===Wr||s===Xr||s===qr)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===va||s===xa||s===Ma||s===Sa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===va)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ma)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ul)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ya||s===Ea)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ya)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ea)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ba||s===Ta||s===Aa||s===wa||s===Ra||s===Ca||s===La||s===Pa||s===Da||s===Ua||s===Ia||s===Na||s===Oa||s===Fa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ba)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ta)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Aa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ra)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ca)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===La)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Da)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ua)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ia)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Na)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fa)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yr||s===Ba||s===za)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Yr)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ba)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===za)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yc||s===Ga||s===Ha||s===Va)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ha)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Un?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class am extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const om={type:"move"};class vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),d=this._getHandJoint(u,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],p=h.position.distanceTo(c.position),m=.02,g=.005;u.inputState.pinching&&p>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(om)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lm extends mi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,c=null,p=null,m=null,g=null;const _=t.getContextAttributes();let f=null,d=null;const S=[],x=[],v=new fe;let C=null;const w=new Ct;w.layers.enable(1),w.viewport=new $e;const A=new Ct;A.layers.enable(2),A.viewport=new $e;const X=[w,A],y=new am;y.layers.enable(1),y.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ee=S[k];return ee===void 0&&(ee=new vs,S[k]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(k){let ee=S[k];return ee===void 0&&(ee=new vs,S[k]=ee),ee.getGripSpace()},this.getHand=function(k){let ee=S[k];return ee===void 0&&(ee=new vs,S[k]=ee),ee.getHandSpace()};function H(k){const ee=x.indexOf(k.inputSource);if(ee===-1)return;const de=S[ee];de!==void 0&&(de.update(k.inputSource,k.frame,u||o),de.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let k=0;k<S.length;k++){const ee=x[k];ee!==null&&(x[k]=null,S[k].disconnect(ee))}T=null,O=null,e.setRenderTarget(f),m=null,p=null,c=null,r=null,d=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(v),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Fn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,de=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?fi:In,de=_.stencil?Un:pn);const ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};c=new XRWebGLBinding(r,t),p=c.createProjectionLayer(ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Fn(p.textureWidth,p.textureHeight,{format:Ht,type:vn,depthTexture:new Rl(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(k){for(let ee=0;ee<k.removed.length;ee++){const de=k.removed[ee],ye=x.indexOf(de);ye>=0&&(x[ye]=null,S[ye].disconnect(de))}for(let ee=0;ee<k.added.length;ee++){const de=k.added[ee];let ye=x.indexOf(de);if(ye===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=x.length){x.push(de),ye=Ce;break}else if(x[Ce]===null){x[Ce]=de,ye=Ce;break}if(ye===-1)break}const ge=S[ye];ge&&ge.connect(de)}}const F=new D,V=new D;function K(k,ee,de){F.setFromMatrixPosition(ee.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);const ye=F.distanceTo(V),ge=ee.projectionMatrix.elements,Ce=de.projectionMatrix.elements,Ue=ge[14]/(ge[10]-1),Te=ge[14]/(ge[10]+1),De=(ge[9]+1)/ge[5],R=(ge[9]-1)/ge[5],se=(ge[8]-1)/ge[0],J=(Ce[8]+1)/Ce[0],re=Ue*se,Y=Ue*J,Ae=ye/(-se+J),_e=Ae*-se;ee.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(_e),k.translateZ(Ae),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const E=Ue+Ae,M=Te+Ae,N=re-_e,ne=Y+(ye-_e),te=De*Te/M*E,Q=R*Te/M*E;k.projectionMatrix.makePerspective(N,ne,te,Q,E,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,ee){ee===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ee.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.near=A.near=w.near=k.near,y.far=A.far=w.far=k.far,(T!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,O=y.far);const ee=k.parent,de=y.cameras;q(y,ee);for(let ye=0;ye<de.length;ye++)q(de[ye],ee);de.length===2?K(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),$(k,y,ee)};function $(k,ee,de){de===null?k.matrix.copy(ee.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(ee.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ee.projectionMatrix),k.projectionMatrixInverse.copy(ee.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Us*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let j=null;function ie(k,ee){if(h=ee.getViewerPose(u||o),g=ee,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ye=!1;de.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let ge=0;ge<de.length;ge++){const Ce=de[ge];let Ue=null;if(m!==null)Ue=m.getViewport(Ce);else{const De=c.getViewSubImage(p,Ce);Ue=De.viewport,ge===0&&(e.setRenderTargetTextures(d,De.colorTexture,p.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let Te=X[ge];Te===void 0&&(Te=new Ct,Te.layers.enable(ge),Te.viewport=new $e,X[ge]=Te),Te.matrix.fromArray(Ce.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ce.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ge===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(Te)}}for(let de=0;de<S.length;de++){const ye=x[de],ge=S[de];ye!==null&&ge!==void 0&&ge.update(ye,ee,u||o)}j&&j(k,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ae=new Al;ae.setAnimationLoop(ie),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function cm(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,El(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,S,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),c(f,d)):d.isMeshPhongMaterial?(s(f,d),h(f,d)):d.isMeshStandardMaterial?(s(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,v)):d.isMeshMatcapMaterial?(s(f,d),g(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),_(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,S,x):d.isSpriteMaterial?u(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===bt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===bt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,S,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*S,f.scale.value=x*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function c(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,S){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const S=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function um(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function u(S,x){let v=r[S.id];v===void 0&&(g(S),v=h(S),r[S.id]=v,S.addEventListener("dispose",f));const C=x.program;n.updateUBOMapping(S,C);const w=e.render.frame;s[S.id]!==w&&(p(S),s[S.id]=w)}function h(S){const x=c();S.__bindingPointIndex=x;const v=i.createBuffer(),C=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function c(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const x=r[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=v.length;w<A;w++){const X=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,T=X.length;y<T;y++){const O=X[y];if(m(O,w,y,C)===!0){const H=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let F=0;F<Z.length;F++){const V=Z[F],K=_(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+L,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,v,C){const w=S.value,A=x+"_"+v;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const X=C[A];if(typeof w=="number"||typeof w=="boolean"){if(X!==w)return C[A]=w,!0}else if(X.equals(w)===!1)return X.copy(w),!0}return!1}function g(S){const x=S.uniforms;let v=0;const C=16;for(let A=0,X=x.length;A<X;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,O=y.length;T<O;T++){const H=y[T],Z=Array.isArray(H.value)?H.value:[H.value];for(let L=0,F=Z.length;L<F;L++){const V=Z[L],K=_(V),q=v%C;q!==0&&C-q<K.boundary&&(v+=C-q),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=K.storage}}}const w=v%C;return w>0&&(v+=C-w),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Il{constructor(e={}){const{canvas:t=su(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const x=this;let v=!1,C=0,w=0,A=null,X=-1,y=null;const T=new $e,O=new $e;let H=null;const Z=new We(0);let L=0,F=t.width,V=t.height,K=1,q=null,$=null;const j=new $e(0,0,F,V),ie=new $e(0,0,F,V);let ae=!1;const k=new Ys;let ee=!1,de=!1,ye=null;const ge=new nt,Ce=new fe,Ue=new D,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return A===null?K:1}let R=n;function se(b,I){for(let G=0;G<b.length;G++){const W=b[G],z=t.getContext(W,I);if(z!==null)return z}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ks}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",pe,!1),R===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),R=se(I,b),R===null)throw se(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,re,Y,Ae,_e,E,M,N,ne,te,Q,be,ue,xe,Re,B,U,ve,he,oe,Me,Ee,Fe,Xe;function je(){J=new Md(R),re=new pd(R,J,e),J.init(re),Ee=new sm(R,J,re),Y=new im(R,J,re),Ae=new Ed(R),_e=new kp,E=new rm(R,J,Y,_e,re,Ee,Ae),M=new gd(x),N=new xd(x),ne=new Lu(R,re),Fe=new fd(R,J,ne,re),te=new Sd(R,ne,Ae,Fe),Q=new wd(R,te,ne,Ae),he=new Ad(R,re,E),B=new md(_e),be=new Vp(x,M,N,J,re,Fe,B),ue=new cm(x,_e),xe=new Xp,Re=new $p(J,re),ve=new hd(x,M,N,Y,Q,p,l),U=new nm(x,Q,re),Xe=new um(R,Ae,re,Y),oe=new dd(R,J,Ae,re),Me=new yd(R,J,Ae,re),Ae.programs=be.programs,x.capabilities=re,x.extensions=J,x.properties=_e,x.renderLists=xe,x.shadowMap=U,x.state=Y,x.info=Ae}je();const He=new lm(x,R);this.xr=He,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(F,V,!1))},this.getSize=function(b){return b.set(F,V)},this.setSize=function(b,I,G=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,V=I,t.width=Math.floor(b*K),t.height=Math.floor(I*K),G===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(F*K,V*K).floor()},this.setDrawingBufferSize=function(b,I,G){F=b,V=I,K=G,t.width=Math.floor(b*G),t.height=Math.floor(I*G),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,I,G,W){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,I,G,W),Y.viewport(T.copy(j).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,I,G,W){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,I,G,W),Y.scissor(O.copy(ie).multiplyScalar(K).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){Y.setScissorTest(ae=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(b=!0,I=!0,G=!0){let W=0;if(b){let z=!1;if(A!==null){const Se=A.texture.format;z=Se===cl||Se===ll||Se===ol}if(z){const Se=A.texture.type,we=Se===vn||Se===pn||Se===Xs||Se===Un||Se===sl||Se===al,Pe=ve.getClearColor(),Ne=ve.getClearAlpha(),Ge=Pe.r,Oe=Pe.g,Be=Pe.b;we?(m[0]=Ge,m[1]=Oe,m[2]=Be,m[3]=Ne,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Ge,g[1]=Oe,g[2]=Be,g[3]=Ne,R.clearBufferiv(R.COLOR,0,g))}else W|=R.COLOR_BUFFER_BIT}I&&(W|=R.DEPTH_BUFFER_BIT),G&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Re.dispose(),_e.dispose(),M.dispose(),N.dispose(),Q.dispose(),Fe.dispose(),Xe.dispose(),be.dispose(),He.dispose(),He.removeEventListener("sessionstart",xt),He.removeEventListener("sessionend",Ke),ye&&(ye.dispose(),ye=null),Mt.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const b=Ae.autoReset,I=U.enabled,G=U.autoUpdate,W=U.needsUpdate,z=U.type;je(),Ae.autoReset=b,U.enabled=I,U.autoUpdate=G,U.needsUpdate=W,U.type=z}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){const I=b.target;I.removeEventListener("dispose",me),Ie(I)}function Ie(b){Le(b),_e.remove(b)}function Le(b){const I=_e.get(b).programs;I!==void 0&&(I.forEach(function(G){be.releaseProgram(G)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,G,W,z,Se){I===null&&(I=Te);const we=z.isMesh&&z.matrixWorld.determinant()<0,Pe=jl(b,I,G,W,z);Y.setMaterial(W,we);let Ne=G.index,Ge=1;if(W.wireframe===!0){if(Ne=te.getWireframeAttribute(G),Ne===void 0)return;Ge=2}const Oe=G.drawRange,Be=G.attributes.position;let it=Oe.start*Ge,At=(Oe.start+Oe.count)*Ge;Se!==null&&(it=Math.max(it,Se.start*Ge),At=Math.min(At,(Se.start+Se.count)*Ge)),Ne!==null?(it=Math.max(it,0),At=Math.min(At,Ne.count)):Be!=null&&(it=Math.max(it,0),At=Math.min(At,Be.count));const ut=At-it;if(ut<0||ut===1/0)return;Fe.setup(z,W,Pe,G,Ne);let Zt,Qe=oe;if(Ne!==null&&(Zt=ne.get(Ne),Qe=Me,Qe.setIndex(Zt)),z.isMesh)W.wireframe===!0?(Y.setLineWidth(W.wireframeLinewidth*De()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(z.isLine){let Ve=W.linewidth;Ve===void 0&&(Ve=1),Y.setLineWidth(Ve*De()),z.isLineSegments?Qe.setMode(R.LINES):z.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else z.isPoints?Qe.setMode(R.POINTS):z.isSprite&&Qe.setMode(R.TRIANGLES);if(z.isBatchedMesh)Qe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Qe.renderInstances(it,ut,z.count);else if(G.isInstancedBufferGeometry){const Ve=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Br=Math.min(G.instanceCount,Ve);Qe.renderInstances(it,ut,Br)}else Qe.render(it,ut)};function Ye(b,I,G){b.transparent===!0&&b.side===Jt&&b.forceSinglePass===!1?(b.side=bt,b.needsUpdate=!0,qi(b,I,G),b.side=Mn,b.needsUpdate=!0,qi(b,I,G),b.side=Jt):qi(b,I,G)}this.compile=function(b,I,G=null){G===null&&(G=b),f=Re.get(G),f.init(),S.push(f),G.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(x._useLegacyLights);const W=new Set;return b.traverse(function(z){const Se=z.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const Pe=Se[we];Ye(Pe,G,z),W.add(Pe)}else Ye(Se,G,z),W.add(Se)}),S.pop(),f=null,W},this.compileAsync=function(b,I,G=null){const W=this.compile(b,I,G);return new Promise(z=>{function Se(){if(W.forEach(function(we){_e.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){z(b);return}setTimeout(Se,10)}J.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Je=null;function ct(b){Je&&Je(b)}function xt(){Mt.stop()}function Ke(){Mt.start()}const Mt=new Al;Mt.setAnimationLoop(ct),typeof self!="undefined"&&Mt.setContext(self),this.setAnimationLoop=function(b){Je=b,He.setAnimationLoop(b),b===null?Mt.stop():Mt.start()},He.addEventListener("sessionstart",xt),He.addEventListener("sessionend",Ke),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(I),I=He.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,A),f=Re.get(b,S.length),f.init(),S.push(f),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(ge),de=this.localClippingEnabled,ee=B.init(this.clippingPlanes,de),_=xe.get(b,d.length),_.init(),d.push(_),kt(b,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,$),this.info.render.frame++,ee===!0&&B.beginShadows();const G=f.state.shadowsArray;if(U.render(G,b,I),ee===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,b),f.setupLights(x._useLegacyLights),I.isArrayCamera){const W=I.cameras;for(let z=0,Se=W.length;z<Se;z++){const we=W[z];ra(_,b,we,we.viewport)}}else ra(_,b,I);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,I),Fe.resetDefaultState(),X=-1,y=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function kt(b,I,G,W){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){W&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);const we=Q.update(b),Pe=b.material;Pe.visible&&_.push(b,we,Pe,G,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){const we=Q.update(b),Pe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ue.copy(we.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(Pe)){const Ne=we.groups;for(let Ge=0,Oe=Ne.length;Ge<Oe;Ge++){const Be=Ne[Ge],it=Pe[Be.materialIndex];it&&it.visible&&_.push(b,we,it,G,Ue.z,Be)}}else Pe.visible&&_.push(b,we,Pe,G,Ue.z,null)}}const Se=b.children;for(let we=0,Pe=Se.length;we<Pe;we++)kt(Se[we],I,G,W)}function ra(b,I,G,W){const z=b.opaque,Se=b.transmissive,we=b.transparent;f.setupLightsView(G),ee===!0&&B.setGlobalState(x.clippingPlanes,G),Se.length>0&&$l(z,Se,I,G),W&&Y.viewport(T.copy(W)),z.length>0&&Xi(z,I,G),Se.length>0&&Xi(Se,I,G),we.length>0&&Xi(we,I,G),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function $l(b,I,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Se=re.isWebGL2;ye===null&&(ye=new Fn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Oi:vn,minFilter:Ni,samples:Se?4:0})),x.getDrawingBufferSize(Ce),Se?ye.setSize(Ce.x,Ce.y):ye.setSize(Is(Ce.x),Is(Ce.y));const we=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=_n,Xi(b,G,W),E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye);let Ne=!1;for(let Ge=0,Oe=I.length;Ge<Oe;Ge++){const Be=I[Ge],it=Be.object,At=Be.geometry,ut=Be.material,Zt=Be.group;if(ut.side===Jt&&it.layers.test(W.layers)){const Qe=ut.side;ut.side=bt,ut.needsUpdate=!0,sa(it,G,W,At,ut,Zt),ut.side=Qe,ut.needsUpdate=!0,Ne=!0}}Ne===!0&&(E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye)),x.setRenderTarget(we),x.setClearColor(Z,L),x.toneMapping=Pe}function Xi(b,I,G){const W=I.isScene===!0?I.overrideMaterial:null;for(let z=0,Se=b.length;z<Se;z++){const we=b[z],Pe=we.object,Ne=we.geometry,Ge=W===null?we.material:W,Oe=we.group;Pe.layers.test(G.layers)&&sa(Pe,I,G,Ne,Ge,Oe)}}function sa(b,I,G,W,z,Se){b.onBeforeRender(x,I,G,W,z,Se),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(x,I,G,W,b,Se),z.transparent===!0&&z.side===Jt&&z.forceSinglePass===!1?(z.side=bt,z.needsUpdate=!0,x.renderBufferDirect(G,I,W,z,b,Se),z.side=Mn,z.needsUpdate=!0,x.renderBufferDirect(G,I,W,z,b,Se),z.side=Jt):x.renderBufferDirect(G,I,W,z,b,Se),b.onAfterRender(x,I,G,W,z,Se)}function qi(b,I,G){I.isScene!==!0&&(I=Te);const W=_e.get(b),z=f.state.lights,Se=f.state.shadowsArray,we=z.state.version,Pe=be.getParameters(b,z.state,Se,I,G),Ne=be.getProgramCacheKey(Pe);let Ge=W.programs;W.environment=b.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(b.isMeshStandardMaterial?N:M).get(b.envMap||W.environment),Ge===void 0&&(b.addEventListener("dispose",me),Ge=new Map,W.programs=Ge);let Oe=Ge.get(Ne);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===we)return oa(b,Pe),Oe}else Pe.uniforms=be.getUniforms(b),b.onBuild(G,Pe,x),b.onBeforeCompile(Pe,x),Oe=be.acquireProgram(Pe,Ne),Ge.set(Ne,Oe),W.uniforms=Pe.uniforms;const Be=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=B.uniform),oa(b,Pe),W.needsLights=ec(b),W.lightsStateVersion=we,W.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function aa(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Mr.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function oa(b,I){const G=_e.get(b);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function jl(b,I,G,W,z){I.isScene!==!0&&(I=Te),E.resetTextureUnits();const Se=I.fog,we=W.isMeshStandardMaterial?I.environment:null,Pe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ln,Ne=(W.isMeshStandardMaterial?N:M).get(W.envMap||we),Ge=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,At=!!G.morphAttributes.color;let ut=_n;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Zt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=Zt!==void 0?Zt.length:0,Ve=_e.get(W),Br=f.state.lights;if(ee===!0&&(de===!0||b!==y)){const Pt=b===y&&W.id===X;B.setState(W,b,Pt)}let tt=!1;W.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Br.state.version||Ve.outputColorSpace!==Pe||z.isBatchedMesh&&Ve.batching===!1||!z.isBatchedMesh&&Ve.batching===!0||z.isInstancedMesh&&Ve.instancing===!1||!z.isInstancedMesh&&Ve.instancing===!0||z.isSkinnedMesh&&Ve.skinning===!1||!z.isSkinnedMesh&&Ve.skinning===!0||z.isInstancedMesh&&Ve.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ve.instancingColor===!1&&z.instanceColor!==null||Ve.envMap!==Ne||W.fog===!0&&Ve.fog!==Se||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==B.numPlanes||Ve.numIntersection!==B.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Oe||Ve.morphTargets!==Be||Ve.morphNormals!==it||Ve.morphColors!==At||Ve.toneMapping!==ut||re.isWebGL2===!0&&Ve.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ve.__version=W.version);let Sn=Ve.currentProgram;tt===!0&&(Sn=qi(W,I,z));let la=!1,xi=!1,zr=!1;const mt=Sn.getUniforms(),yn=Ve.uniforms;if(Y.useProgram(Sn.program)&&(la=!0,xi=!0,zr=!0),W.id!==X&&(X=W.id,xi=!0),la||y!==b){mt.setValue(R,"projectionMatrix",b.projectionMatrix),mt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Pt=mt.map.cameraPosition;Pt!==void 0&&Pt.setValue(R,Ue.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,xi=!0,zr=!0)}if(z.isSkinnedMesh){mt.setOptional(R,z,"bindMatrix"),mt.setOptional(R,z,"bindMatrixInverse");const Pt=z.skeleton;Pt&&(re.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),mt.setValue(R,"boneTexture",Pt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(mt.setOptional(R,z,"batchingTexture"),mt.setValue(R,"batchingTexture",z._matricesTexture,E));const Gr=G.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&re.isWebGL2===!0)&&he.update(z,G,Sn),(xi||Ve.receiveShadow!==z.receiveShadow)&&(Ve.receiveShadow=z.receiveShadow,mt.setValue(R,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=Ne,yn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),xi&&(mt.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Ql(yn,zr),Se&&W.fog===!0&&ue.refreshFogUniforms(yn,Se),ue.refreshMaterialUniforms(yn,W,K,V,ye),Mr.upload(R,aa(Ve),yn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Mr.upload(R,aa(Ve),yn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(R,"center",z.center),mt.setValue(R,"modelViewMatrix",z.modelViewMatrix),mt.setValue(R,"normalMatrix",z.normalMatrix),mt.setValue(R,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let Hr=0,tc=Pt.length;Hr<tc;Hr++)if(re.isWebGL2){const ca=Pt[Hr];Xe.update(ca,Sn),Xe.bind(ca,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Ql(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function ec(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,I,G){_e.get(b.texture).__webglTexture=I,_e.get(b.depthTexture).__webglTexture=G;const W=_e.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const G=_e.get(b);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,G=0){A=b,C=I,w=G;let W=!0,z=null,Se=!1,we=!1;if(b){const Ne=_e.get(b);Ne.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(R.FRAMEBUFFER,null),W=!1):Ne.__webglFramebuffer===void 0?E.setupRenderTarget(b):Ne.__hasExternalTextures&&E.rebindTextures(b,_e.get(b.texture).__webglTexture,_e.get(b.depthTexture).__webglTexture);const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const Oe=_e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[I])?z=Oe[I][G]:z=Oe[I],Se=!0):re.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?z=_e.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[G]:z=Oe,T.copy(b.viewport),O.copy(b.scissor),H=b.scissorTest}else T.copy(j).multiplyScalar(K).floor(),O.copy(ie).multiplyScalar(K).floor(),H=ae;if(Y.bindFramebuffer(R.FRAMEBUFFER,z)&&re.drawBuffers&&W&&Y.drawBuffers(b,z),Y.viewport(T),Y.scissor(O),Y.setScissorTest(H),Se){const Ne=_e.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ne.__webglTexture,G)}else if(we){const Ne=_e.get(b.texture),Ge=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,Ge)}X=-1},this.readRenderTargetPixels=function(b,I,G,W,z,Se,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=_e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Y.bindFramebuffer(R.FRAMEBUFFER,Pe);try{const Ne=b.texture,Ge=Ne.format,Oe=Ne.type;if(Ge!==Ht&&Ee.convert(Ge)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===Oi&&(J.has("EXT_color_buffer_half_float")||re.isWebGL2&&J.has("EXT_color_buffer_float"));if(Oe!==vn&&Ee.convert(Oe)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===mn&&(re.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-W&&G>=0&&G<=b.height-z&&R.readPixels(I,G,W,z,Ee.convert(Ge),Ee.convert(Oe),Se)}finally{const Ne=A!==null?_e.get(A).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(b,I,G=0){const W=Math.pow(2,-G),z=Math.floor(I.image.width*W),Se=Math.floor(I.image.height*W);E.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,b.x,b.y,z,Se),Y.unbindTexture()},this.copyTextureToTexture=function(b,I,G,W=0){const z=I.image.width,Se=I.image.height,we=Ee.convert(G.format),Pe=Ee.convert(G.type);E.setTexture2D(G,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment),I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,W,b.x,b.y,z,Se,we,Pe,I.image.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,W,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,we,I.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,W,b.x,b.y,we,Pe,I.image),W===0&&G.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(b,I,G,W,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=b.max.x-b.min.x+1,we=b.max.y-b.min.y+1,Pe=b.max.z-b.min.z+1,Ne=Ee.convert(W.format),Ge=Ee.convert(W.type);let Oe;if(W.isData3DTexture)E.setTexture3D(W,0),Oe=R.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Oe=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,W.unpackAlignment);const Be=R.getParameter(R.UNPACK_ROW_LENGTH),it=R.getParameter(R.UNPACK_IMAGE_HEIGHT),At=R.getParameter(R.UNPACK_SKIP_PIXELS),ut=R.getParameter(R.UNPACK_SKIP_ROWS),Zt=R.getParameter(R.UNPACK_SKIP_IMAGES),Qe=G.isCompressedTexture?G.mipmaps[z]:G.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,b.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,b.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?R.texSubImage3D(Oe,z,I.x,I.y,I.z,Se,we,Pe,Ne,Ge,Qe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Oe,z,I.x,I.y,I.z,Se,we,Pe,Ne,Qe.data)):R.texSubImage3D(Oe,z,I.x,I.y,I.z,Se,we,Pe,Ne,Ge,Qe),R.pixelStorei(R.UNPACK_ROW_LENGTH,Be),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,ut),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt),z===0&&W.generateMipmaps&&R.generateMipmap(Oe),Y.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Y.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qs?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Dr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Nn:hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nn?pt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hm extends Il{}hm.prototype.isWebGL1Renderer=!0;class Zs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new Zs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fm extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Nl extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Do=new nt,Os=new vl,mr=new Ur,gr=new D;class dm extends ft{constructor(e=new Lt,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;Do.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Do);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,c=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,_=m;g<_;g++){const f=u.getX(g);gr.fromBufferAttribute(c,f),Uo(gr,f,l,r,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=p,_=m;g<_;g++)gr.fromBufferAttribute(c,g),Uo(gr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uo(i,e,t,n,r,s,o){const a=Os.distanceSqToPoint(i);if(a<t){const l=new D;Os.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class pm extends Tt{constructor(e,t,n,r,s,o,a,l,u){super(e,t,n,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],p=n[r+1]-h,m=(o-h)/p;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new fe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],o=[],a=new D,l=new nt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),c=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=u&&(u=h,n.set(1,0,0)),c<=u&&(u=c,n.set(0,1,0)),p<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(vt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $s extends Kt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new fe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),p=l-this.aX,m=u-this.aY;l=p*h-m*c+this.aX,u=p*c+m*h+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mm extends $s{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function js(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,h,c){let p=(o-s)/u-(a-s)/(u+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+c)+(l-a)/c;p*=h,m*=h,r(o,a,p,m)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const _r=new D,xs=new js,Ms=new js,Ss=new js;class gm extends Kt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,h;this.closed||a>0?u=r[(a-1)%s]:(_r.subVectors(r[0],r[1]).add(r[0]),u=_r);const c=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(_r.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(c),m),_=Math.pow(c.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),xs.initNonuniformCatmullRom(u.x,c.x,p.x,h.x,g,_,f),Ms.initNonuniformCatmullRom(u.y,c.y,p.y,h.y,g,_,f),Ss.initNonuniformCatmullRom(u.z,c.z,p.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(xs.initCatmullRom(u.x,c.x,p.x,h.x,this.tension),Ms.initCatmullRom(u.y,c.y,p.y,h.y,this.tension),Ss.initCatmullRom(u.z,c.z,p.z,h.z,this.tension));return n.set(xs.calc(l),Ms.calc(l),Ss.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Io(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function _m(i,e){const t=1-i;return t*t*e}function vm(i,e){return 2*(1-i)*i*e}function xm(i,e){return i*i*e}function Ci(i,e,t,n){return _m(i,e)+vm(i,t)+xm(i,n)}function Mm(i,e){const t=1-i;return t*t*t*e}function Sm(i,e){const t=1-i;return 3*t*t*i*e}function ym(i,e){return 3*(1-i)*i*i*e}function Em(i,e){return i*i*i*e}function Li(i,e,t,n,r){return Mm(i,e)+Sm(i,t)+ym(i,n)+Em(i,r)}class Ol extends Kt{constructor(e=new fe,t=new fe,n=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new fe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Li(e,r.x,s.x,o.x,a.x),Li(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bm extends Kt{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Li(e,r.x,s.x,o.x,a.x),Li(e,r.y,s.y,o.y,a.y),Li(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fl extends Kt{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tm extends Kt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bl extends Kt{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ci(e,r.x,s.x,o.x),Ci(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Am extends Kt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ci(e,r.x,s.x,o.x),Ci(e,r.y,s.y,o.y),Ci(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zl extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],c=r[o>r.length-3?r.length-1:o+2];return n.set(Io(a,l.x,u.x,h.x,c.x),Io(a,l.y,u.y,h.y,c.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var Fs=Object.freeze({__proto__:null,ArcCurve:mm,CatmullRomCurve3:gm,CubicBezierCurve:Ol,CubicBezierCurve3:bm,EllipseCurve:$s,LineCurve:Fl,LineCurve3:Tm,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:Am,SplineCurve:zl});class wm extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const h=l[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Fs[r.type]().fromJSON(r))}return this}}class No extends wm{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fl(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Bl(this.currentPoint.clone(),new fe(e,t),new fe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Ol(this.currentPoint.clone(),new fe(e,t),new fe(n,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const u=new $s(e,t,n,r,s,o,a,l);if(this.curves.length>0){const c=u.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ki extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],c=[],p=[],m=[];let g=0;const _=[],f=n/2;let d=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2));function S(){const v=new D,C=new D;let w=0;const A=(t-e)/n;for(let X=0;X<=s;X++){const y=[],T=X/s,O=T*(t-e)+e;for(let H=0;H<=r;H++){const Z=H/r,L=Z*l+a,F=Math.sin(L),V=Math.cos(L);C.x=O*F,C.y=-T*n+f,C.z=O*V,c.push(C.x,C.y,C.z),v.set(F,A,V).normalize(),p.push(v.x,v.y,v.z),m.push(Z,1-T),y.push(g++)}_.push(y)}for(let X=0;X<r;X++)for(let y=0;y<s;y++){const T=_[y][X],O=_[y+1][X],H=_[y+1][X+1],Z=_[y][X+1];h.push(T,O,Z),h.push(O,H,Z),w+=6}u.addGroup(d,w,0),d+=w}function x(v){const C=g,w=new fe,A=new D;let X=0;const y=v===!0?e:t,T=v===!0?1:-1;for(let H=1;H<=r;H++)c.push(0,f*T,0),p.push(0,T,0),m.push(.5,.5),g++;const O=g;for(let H=0;H<=r;H++){const L=H/r*l+a,F=Math.cos(L),V=Math.sin(L);A.x=y*V,A.y=f*T,A.z=y*F,c.push(A.x,A.y,A.z),p.push(0,T,0),w.x=F*.5+.5,w.y=V*.5*T+.5,m.push(w.x,w.y),g++}for(let H=0;H<r;H++){const Z=C+H,L=O+H;v===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),X+=3}u.addGroup(d,X,v===!0?1:2),d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends No{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new No().fromJSON(r))}return this}}const Rm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Hl(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,h,c,p,m;if(n&&(s=Um(i,e,s,t)),i.length>80*t){a=u=i[0],l=h=i[1];for(let g=t;g<r;g+=t)c=i[g],p=i[g+1],c<a&&(a=c),p<l&&(l=p),c>u&&(u=c),p>h&&(h=p);m=Math.max(u-a,h-l),m=m!==0?32767/m:0}return Fi(s,o,t,a,l,m,0),o}};function Hl(i,e,t,n,r){let s,o;if(r===Wm(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Oo(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Oo(s,i[s],i[s+1],o);return o&&Or(o,o.next)&&(zi(o),o=o.next),o}function Gn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Or(t,t.next)||et(t.prev,t,t.next)===0)){if(zi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fi(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Bm(i,n,r,s);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,s?Lm(i,n,r,s):Cm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),zi(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=Pm(Gn(i),e,t),Fi(i,e,t,n,r,s,2)):o===2&&Dm(i,e,t,n,r,s):Fi(Gn(i),e,t,n,r,s,1);break}}}function Cm(i){const e=i.prev,t=i,n=i.next;if(et(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,u=n.y,h=r<s?r<o?r:o:s<o?s:o,c=a<l?a<u?a:u:l<u?l:u,p=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=c&&g.y<=m&&oi(r,a,s,l,o,u,g.x,g.y)&&et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lm(i,e,t,n){const r=i.prev,s=i,o=i.next;if(et(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,h=r.y,c=s.y,p=o.y,m=a<l?a<u?a:u:l<u?l:u,g=h<c?h<p?h:p:c<p?c:p,_=a>l?a>u?a:u:l>u?l:u,f=h>c?h>p?h:p:c>p?c:p,d=Bs(m,g,e,t,n),S=Bs(_,f,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=d&&v&&v.z<=S;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&oi(a,h,l,c,u,p,x.x,x.y)&&et(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==r&&v!==o&&oi(a,h,l,c,u,p,v.x,v.y)&&et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&oi(a,h,l,c,u,p,x.x,x.y)&&et(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=f&&v!==r&&v!==o&&oi(a,h,l,c,u,p,v.x,v.y)&&et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pm(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Or(r,s)&&Vl(r,n,n.next,s)&&Bi(r,s)&&Bi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),zi(n),zi(n.next),n=i=s),n=n.next}while(n!==i);return Gn(n)}function Dm(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hm(o,a)){let l=kl(o,a);o=Gn(o,o.next),l=Gn(l,l.next),Fi(o,e,t,n,r,s,0),Fi(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Um(i,e,t,n){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,u=Hl(i,a,l,n,!1),u===u.next&&(u.steiner=!0),r.push(Gm(u));for(r.sort(Im),s=0;s<r.length;s++)t=Nm(r[s],t);return t}function Im(i,e){return i.x-e.x}function Nm(i,e){const t=Om(i,e);if(!t)return e;const n=kl(t,i);return Gn(n,n.next),Gn(t,t.next)}function Om(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let h=1/0,c;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&oi(o<u?s:n,o,l,u,o<u?n:s,o,t.x,t.y)&&(c=Math.abs(o-t.y)/(s-t.x),Bi(t,i)&&(c<h||c===h&&(t.x>r.x||t.x===r.x&&Fm(r,t)))&&(r=t,h=c)),t=t.next;while(t!==a);return r}function Fm(i,e){return et(i.prev,i,e.prev)<0&&et(e.next,i,i.next)<0}function Bm(i,e,t,n){let r=i;do r.z===0&&(r.z=Bs(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,zm(r)}function zm(i){let e,t,n,r,s,o,a,l,u=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<u&&(a++,n=n.nextZ,!!n);e++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,u*=2}while(o>1);return i}function Bs(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Gm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oi(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Hm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vm(i,e)&&(Bi(i,e)&&Bi(e,i)&&km(i,e)&&(et(i.prev,i,e.prev)||et(i,e.prev,e))||Or(i,e)&&et(i.prev,i,i.next)>0&&et(e.prev,e,e.next)>0)}function et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Or(i,e){return i.x===e.x&&i.y===e.y}function Vl(i,e,t,n){const r=xr(et(i,e,t)),s=xr(et(i,e,n)),o=xr(et(t,n,i)),a=xr(et(t,n,e));return!!(r!==s&&o!==a||r===0&&vr(i,t,e)||s===0&&vr(i,n,e)||o===0&&vr(t,i,n)||a===0&&vr(t,e,n))}function vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xr(i){return i>0?1:i<0?-1:0}function Vm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bi(i,e){return et(i.prev,i,i.next)<0?et(i,e,i.next)>=0&&et(i,i.prev,e)>=0:et(i,e,i.prev)<0||et(i,i.next,e)<0}function km(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function kl(i,e){const t=new zs(i.i,i.x,i.y),n=new zs(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Oo(i,e,t,n){const r=new zs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zs(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wm(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Pi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Pi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Fo(e),Bo(n,e);let o=e.length;t.forEach(Fo);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Bo(n,t[l]);const a=Rm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Fo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qs extends Lt{constructor(e=new Gl([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,c=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Xm;let x,v=!1,C,w,A,X;d&&(x=d.getSpacedPoints(h),v=!0,p=!1,C=d.computeFrenetFrames(h,!1),w=new D,A=new D,X=new D),p||(f=0,m=0,g=0,_=0);const y=a.extractPoints(u);let T=y.shape;const O=y.holes;if(!Pi.isClockWise(T)){T=T.reverse();for(let R=0,se=O.length;R<se;R++){const J=O[R];Pi.isClockWise(J)&&(O[R]=J.reverse())}}const Z=Pi.triangulateShape(T,O),L=T;for(let R=0,se=O.length;R<se;R++){const J=O[R];T=T.concat(J)}function F(R,se,J){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(se,J)}const V=T.length,K=Z.length;function q(R,se,J){let re,Y,Ae;const _e=R.x-se.x,E=R.y-se.y,M=J.x-R.x,N=J.y-R.y,ne=_e*_e+E*E,te=_e*N-E*M;if(Math.abs(te)>Number.EPSILON){const Q=Math.sqrt(ne),be=Math.sqrt(M*M+N*N),ue=se.x-E/Q,xe=se.y+_e/Q,Re=J.x-N/be,B=J.y+M/be,U=((Re-ue)*N-(B-xe)*M)/(_e*N-E*M);re=ue+_e*U-R.x,Y=xe+E*U-R.y;const ve=re*re+Y*Y;if(ve<=2)return new fe(re,Y);Ae=Math.sqrt(ve/2)}else{let Q=!1;_e>Number.EPSILON?M>Number.EPSILON&&(Q=!0):_e<-Number.EPSILON?M<-Number.EPSILON&&(Q=!0):Math.sign(E)===Math.sign(N)&&(Q=!0),Q?(re=-E,Y=_e,Ae=Math.sqrt(ne)):(re=_e,Y=E,Ae=Math.sqrt(ne/2))}return new fe(re/Ae,Y/Ae)}const $=[];for(let R=0,se=L.length,J=se-1,re=R+1;R<se;R++,J++,re++)J===se&&(J=0),re===se&&(re=0),$[R]=q(L[R],L[J],L[re]);const j=[];let ie,ae=$.concat();for(let R=0,se=O.length;R<se;R++){const J=O[R];ie=[];for(let re=0,Y=J.length,Ae=Y-1,_e=re+1;re<Y;re++,Ae++,_e++)Ae===Y&&(Ae=0),_e===Y&&(_e=0),ie[re]=q(J[re],J[Ae],J[_e]);j.push(ie),ae=ae.concat(ie)}for(let R=0;R<f;R++){const se=R/f,J=m*Math.cos(se*Math.PI/2),re=g*Math.sin(se*Math.PI/2)+_;for(let Y=0,Ae=L.length;Y<Ae;Y++){const _e=F(L[Y],$[Y],re);ge(_e.x,_e.y,-J)}for(let Y=0,Ae=O.length;Y<Ae;Y++){const _e=O[Y];ie=j[Y];for(let E=0,M=_e.length;E<M;E++){const N=F(_e[E],ie[E],re);ge(N.x,N.y,-J)}}}const k=g+_;for(let R=0;R<V;R++){const se=p?F(T[R],ae[R],k):T[R];v?(A.copy(C.normals[0]).multiplyScalar(se.x),w.copy(C.binormals[0]).multiplyScalar(se.y),X.copy(x[0]).add(A).add(w),ge(X.x,X.y,X.z)):ge(se.x,se.y,0)}for(let R=1;R<=h;R++)for(let se=0;se<V;se++){const J=p?F(T[se],ae[se],k):T[se];v?(A.copy(C.normals[R]).multiplyScalar(J.x),w.copy(C.binormals[R]).multiplyScalar(J.y),X.copy(x[R]).add(A).add(w),ge(X.x,X.y,X.z)):ge(J.x,J.y,c/h*R)}for(let R=f-1;R>=0;R--){const se=R/f,J=m*Math.cos(se*Math.PI/2),re=g*Math.sin(se*Math.PI/2)+_;for(let Y=0,Ae=L.length;Y<Ae;Y++){const _e=F(L[Y],$[Y],re);ge(_e.x,_e.y,c+J)}for(let Y=0,Ae=O.length;Y<Ae;Y++){const _e=O[Y];ie=j[Y];for(let E=0,M=_e.length;E<M;E++){const N=F(_e[E],ie[E],re);v?ge(N.x,N.y+x[h-1].y,x[h-1].x+J):ge(N.x,N.y,c+J)}}}ee(),de();function ee(){const R=r.length/3;if(p){let se=0,J=V*se;for(let re=0;re<K;re++){const Y=Z[re];Ce(Y[2]+J,Y[1]+J,Y[0]+J)}se=h+f*2,J=V*se;for(let re=0;re<K;re++){const Y=Z[re];Ce(Y[0]+J,Y[1]+J,Y[2]+J)}}else{for(let se=0;se<K;se++){const J=Z[se];Ce(J[2],J[1],J[0])}for(let se=0;se<K;se++){const J=Z[se];Ce(J[0]+V*h,J[1]+V*h,J[2]+V*h)}}n.addGroup(R,r.length/3-R,0)}function de(){const R=r.length/3;let se=0;ye(L,se),se+=L.length;for(let J=0,re=O.length;J<re;J++){const Y=O[J];ye(Y,se),se+=Y.length}n.addGroup(R,r.length/3-R,1)}function ye(R,se){let J=R.length;for(;--J>=0;){const re=J;let Y=J-1;Y<0&&(Y=R.length-1);for(let Ae=0,_e=h+f*2;Ae<_e;Ae++){const E=V*Ae,M=V*(Ae+1),N=se+re+E,ne=se+Y+E,te=se+Y+M,Q=se+re+M;Ue(N,ne,te,Q)}}}function ge(R,se,J){l.push(R),l.push(se),l.push(J)}function Ce(R,se,J){Te(R),Te(se),Te(J);const re=r.length/3,Y=S.generateTopUV(n,r,re-3,re-2,re-1);De(Y[0]),De(Y[1]),De(Y[2])}function Ue(R,se,J,re){Te(R),Te(se),Te(re),Te(se),Te(J),Te(re);const Y=r.length/3,Ae=S.generateSideWallUV(n,r,Y-6,Y-3,Y-2,Y-1);De(Ae[0]),De(Ae[1]),De(Ae[3]),De(Ae[1]),De(Ae[2]),De(Ae[3])}function Te(R){r.push(l[R*3+0]),r.push(l[R*3+1]),r.push(l[R*3+2])}function De(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qm(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fs[r.type]().fromJSON(r)),new Qs(n,e.options)}}const Xm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],u=e[r*3],h=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(u,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[n*3],h=e[n*3+1],c=e[n*3+2],p=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[s*3],f=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-u)?[new fe(o,1-l),new fe(u,1-c),new fe(p,1-g),new fe(_,1-d)]:[new fe(a,1-l),new fe(h,1-c),new fe(m,1-g),new fe(f,1-d)]}};function qm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ea extends Lt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],u=[],h=[];let c=e;const p=(t-e)/r,m=new D,g=new fe;for(let _=0;_<=r;_++){for(let f=0;f<=n;f++){const d=s+f/n*o;m.x=c*Math.cos(d),m.y=c*Math.sin(d),l.push(m.x,m.y,m.z),u.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}c+=p}for(let _=0;_<r;_++){const f=_*(n+1);for(let d=0;d<n;d++){const S=d+f,x=S,v=S+n+1,C=S+n+2,w=S+1;a.push(x,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hn extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const h=[],c=new D,p=new D,m=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const S=[],x=d/n;let v=0;d===0&&o===0?v=.5/t:d===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const w=C/t;c.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),c.y=e*Math.cos(o+x*a),c.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(c.x,c.y,c.z),p.copy(c).normalize(),_.push(p.x,p.y,p.z),f.push(w+v,1-x),S.push(u++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const x=h[d][S+1],v=h[d][S],C=h[d+1][S],w=h[d+1][S+1];(d!==0||o>0)&&m.push(x,v,w),(d!==n-1||l<Math.PI)&&m.push(v,C,w)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vn extends _i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Ym extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ys=new nt,zo=new D,Go=new D;class Wl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(zo),Go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Go),t.updateMatrixWorld(),ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ho=new nt,Ti=new D,Es=new D;class Jm extends Wl{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ti),Es.copy(n.position),Es.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Es),n.updateMatrixWorld(),r.makeTranslation(-Ti.x,-Ti.y,-Ti.z),Ho.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho)}}class Km extends Fr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zm extends Wl{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $m extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jm extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ks}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ks);const Vo=.32,Qm=.62,eg=2.35,On=.3,ta=1.58,Cn=.26,xn=1.5,Xl=8.05,tg=5.55,ng=4.4,sn=.33,ig=-7.1,Sr=100,ko=14,rt=12,rg=.0075,Wo=2.6,sg=.72,ag=[6211781,15909198,15242602,8302824,13213916],og=16718354,lg=6948352,ql=16774885,cg=12887412,Xo=1314332,bs=new Map;function Wi(i,e){const t=document.createElement("canvas");t.width=i,t.height=i,e(t.getContext("2d"),i);const n=new pm(t);return n.wrapS=Ii,n.wrapT=Ii,n.needsUpdate=!0,n}function ug(i){return`#${i.toString(16).padStart(6,"0")}`}function Cr(i,e){const t=`${i}:${e}`;if(bs.has(t))return bs.get(t);const n=hg(i,e);return bs.set(t,n),n}function hg(i,e){return i==="ball"?dg(e):i==="platform"?pg(e):i==="pole"?mg(e):i==="bomb"?fg():gg(e)}function fg(){return Wi(64,(i,e)=>{i.fillStyle="#1a1a22",i.fillRect(0,0,e,e),i.fillStyle="#3a3a48",i.beginPath(),i.arc(22,18,16,0,7),i.fill(),i.strokeStyle="#0c0c10",i.lineWidth=2,i.beginPath(),i.arc(32,32,22,.2,4),i.stroke(),i.fillStyle="#6a3118",i.fillRect(28,4,6,10),i.fillStyle="#ffb347",i.fillRect(30,0,3,5)})}function dg(i){return Wi(64,(e,t)=>{if(i==="pebble"){e.fillStyle="#b9b2a6",e.fillRect(0,0,t,t);for(let r=0;r<80;r++)e.fillStyle=r%2?"#8a8278":"#d4cdc4",e.beginPath(),e.arc(Math.random()*t,Math.random()*t,1+Math.random()*2.4,0,7),e.fill();return}if(i==="mint"){e.fillStyle="#8ff0c8",e.fillRect(0,0,t,t),e.fillStyle="#5bc9a4";for(let r=-t;r<t*2;r+=10)e.save(),e.translate(r,0),e.rotate(.5),e.fillRect(0,-t,5,t*3),e.restore();return}if(i==="gold"){const r=e.createLinearGradient(0,0,t,t);r.addColorStop(0,"#fff1a8"),r.addColorStop(.4,"#ffd24a"),r.addColorStop(.7,"#c4921a"),r.addColorStop(1,"#ffe58a"),e.fillStyle=r,e.fillRect(0,0,t,t),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(8,0,6,t),e.fillRect(28,0,3,t);return}if(i==="night"){e.fillStyle="#1c2258",e.fillRect(0,0,t,t),e.fillStyle="#5a6cff",e.fillRect(0,20,t,8),e.fillStyle="#fff6a8";for(let r=0;r<28;r++)e.fillRect(r*17%t,r*29%t,2,2);return}const n=e.createRadialGradient(22,18,4,32,32,36);n.addColorStop(0,"#ffffff"),n.addColorStop(.35,"#fff6e5"),n.addColorStop(1,"#e8c9a0"),e.fillStyle=n,e.fillRect(0,0,t,t)})}function pg(i){return Wi(64,(e,t)=>{if(i==="clay"){e.fillStyle="#c48a62",e.fillRect(0,0,t,t),e.strokeStyle="rgba(80,40,20,0.35)",e.lineWidth=1.2;for(let n=0;n<9;n++)e.beginPath(),e.moveTo(Math.random()*t,Math.random()*t),e.lineTo(Math.random()*t,Math.random()*t),e.stroke();return}if(i==="ice"){const n=e.createLinearGradient(0,0,t,t);n.addColorStop(0,"#e8f7ff"),n.addColorStop(1,"#7ec0ea"),e.fillStyle=n,e.fillRect(0,0,t,t),e.strokeStyle="rgba(255,255,255,0.7)",e.lineWidth=1;for(let r=0;r<12;r++)e.beginPath(),e.moveTo(r*7,0),e.lineTo(r*7+18,t),e.stroke();return}if(i==="candy"){e.fillStyle="#ff8ab8",e.fillRect(0,0,t,t);const n=["#ffc36b","#9dffc1","#c9a6ff","#ff9e7a"];for(let r=0;r<8;r++)e.fillStyle=n[r%n.length],e.fillRect(r*8,0,5,t);return}if(i==="ember"){e.fillStyle="#4a140c",e.fillRect(0,0,t,t),e.fillStyle="#ff6a3d";for(let n=0;n<18;n++)e.fillRect(n*11%t,n*19%t,3,8+n%5);e.fillStyle="#ffb347",e.fillRect(20,10,4,20),e.fillRect(40,28,3,16);return}e.fillStyle="#d8d0c4",e.fillRect(0,0,t,t),e.fillStyle="rgba(0,0,0,0.06)";for(let n=0;n<t;n+=4)e.fillRect(0,n,t,1)})}function mg(i){return Wi(64,(e,t)=>{if(i==="stone"){e.fillStyle="#8d8a86",e.fillRect(0,0,t,t),e.fillStyle="#6a6762";for(let n=0;n<50;n++)e.fillRect(n*13%t,n*23%t,3,2);return}if(i==="marble"){e.fillStyle="#eee8dc",e.fillRect(0,0,t,t),e.strokeStyle="rgba(80,70,60,0.4)",e.lineWidth=2,e.beginPath(),e.moveTo(0,10),e.quadraticCurveTo(40,30,64,18),e.moveTo(0,40),e.quadraticCurveTo(20,60,64,44),e.stroke();return}if(i==="neon"){e.fillStyle="#041614",e.fillRect(0,0,t,t),e.fillStyle="#4ef0d0",e.fillRect(0,8,t,6),e.fillRect(0,28,t,4),e.fillRect(0,48,t,6),e.fillStyle="#ffffff",e.fillRect(0,10,t,2);return}e.fillStyle="#c4a574",e.fillRect(0,0,t,t),e.strokeStyle="rgba(90,60,30,0.35)";for(let n=6;n<t;n+=10)e.beginPath(),e.moveTo(0,n),e.bezierCurveTo(20,n+3,40,n-3,64,n),e.stroke()})}function gg(i){return Wi(64,(e,t)=>{e.fillStyle=ug({dusk:1314332,mist:1844272,sky:1520202,void:460300}[i]||1314332),e.fillRect(0,0,t,t),e.fillStyle=i==="sky"?"rgba(180,220,255,0.35)":"rgba(255,246,200,0.55)";for(let n=0;n<(i==="void"?40:18);n++)e.fillRect(n*19%t,n*37%t,i==="void"?1:2,1)})}function Gs(i,e){return i==="ball"?e==="mint"?"repeating-linear-gradient(135deg,#8ff0c8 0 8px,#5bc9a4 8px 14px)":e==="gold"?"linear-gradient(135deg,#fff1a8,#ffd24a 40%,#c4921a 70%,#ffe58a)":e==="night"?"radial-gradient(circle at 30% 30%,#7a88ff,#1c2258 70%)":e==="pebble"?"radial-gradient(circle at 20% 20%,#d4cdc4,#8a8278)":"radial-gradient(circle at 30% 25%,#fff,#fff6e5 45%,#e8c9a0)":i==="platform"?e==="ice"?"linear-gradient(135deg,#e8f7ff,#7ec0ea)":e==="candy"?"repeating-linear-gradient(90deg,#ff8ab8 0 8px,#ffc36b 8px 16px,#9dffc1 16px 24px)":e==="ember"?"linear-gradient(180deg,#ffb347,#ff6a3d 40%,#4a140c)":e==="clay"?"linear-gradient(135deg,#d4a07a,#8c5a3a)":"linear-gradient(135deg,#5ec8c5,#f2c14e,#e8956a)":i==="pole"?e==="neon"?"repeating-linear-gradient(#041614 0 8px,#4ef0d0 8px 14px)":e==="marble"?"linear-gradient(135deg,#fff,#cfc6b8 50%,#eee8dc)":e==="stone"?"radial-gradient(circle at 40% 40%,#b0aca6,#6a6762)":"repeating-linear-gradient(#c4a574 0 10px,#a07d4e 10px 12px)":e==="sky"?"linear-gradient(#4a90c8,#17324a)":e==="void"?"radial-gradient(circle at 50% 20%,#2a2040,#07060c)":e==="mist"?"linear-gradient(#3a4a5c,#1c2430)":"linear-gradient(#3a2450,#140e1c)"}const qo=new Hn(Cn,16,12),Bt=new Vn({color:ql,emissive:9071168});function _g(i){const e=new at(qo,Bt);e.position.set(0,2.2,xn);const t=new Km(16761162,0,5);e.add(t);const n=[];for(let h=0;h<10;h++){const c=new Vn({color:16769162,emissive:16751146,transparent:!0,opacity:0,depthWrite:!1}),p=new at(qo,c);p.visible=!1,i.add(p),n.push(p)}let r=ql,s=9071168,o=0,a=0,l=0;function u(h){if(h<2&&l<=0){Bt.color.setHex(r),Bt.emissive.setHex(s),t.intensity=0;return}const c=Math.min(1,(h-1)/5),p=Math.max(c,l);Bt.color.setRGB(1,.92-c*.35,.55-c*.4),Bt.emissive.setRGB(.85+p*.15,.35+c*.25,.05),t.color.setRGB(1,.65-c*.2,.15),t.intensity=1.1+h*.55+l*2}return{mesh:e,vy:0,invuln:0,hopCd:0,vault:0,combo:0,reset(){e.position.set(0,2.2,xn),e.scale.set(1,1,1),this.vy=0,this.invuln=0,this.hopCd=0,this.vault=0,this.combo=0,l=0,n.forEach(h=>{h.visible=!1,h.material.opacity=0}),u(0)},setSkin(h){var c;r=h.color,s=(c=h.emissive)!=null?c:0,Bt.map=Cr("ball",h.id||"cream"),Bt.needsUpdate=!0,u(this.combo)},idle(h){e.rotation.y+=h*1.6;const c=performance.now()*.0022;e.position.y=2.2+Math.sin(c)*.16,e.scale.set(1+Math.sin(c*2)*.03,1-Math.sin(c*2)*.03,1+Math.sin(c*2)*.03),Bt.map&&(Bt.map.offset.x+=h*.12)},fall(h,c=0){this.combo=c,this.vy-=(Xl+c*1.9)*h;const p=ig-c*1.85;if(this.vy<p&&(this.vy=p),e.position.y+=this.vy*h,this.hopCd>0&&(this.hopCd-=h),this.vault>0&&(this.vault-=h),l>0&&(l=Math.max(0,l-h*4)),e.rotation.y+=h*(1.2+c*1.8),Bt.map&&(Bt.map.offset.x+=h*(.18+c*.12)),c>=2&&this.vy<0){const m=Math.min(1,c/5);e.scale.x+=(.72-m*.08-e.scale.x)*Math.min(1,h*12),e.scale.y+=(1.38+m*.22-e.scale.y)*Math.min(1,h*12),e.scale.z=e.scale.x}else e.scale.y+=(1-e.scale.y)*Math.min(1,h*10),e.scale.x+=(1-e.scale.x)*Math.min(1,h*10),e.scale.z=e.scale.x;if(u(c),o+=h,c>=2&&o>.028){o=0;const m=n[a%n.length];a+=1,m.visible=!0,m.position.copy(e.position),m.scale.set(e.scale.x*.92,e.scale.y*.92,e.scale.z*.92),m.material.opacity=.58}n.forEach(m=>{m.visible&&(m.material.opacity-=h*3.4,m.position.y+=h*.4,m.material.opacity<=0&&(m.visible=!1))})},bounce(h){e.position.y=h,this.vy=tg,e.scale.set(1.22,.68,1.22)},hop(h){return this.hopCd>0||this.vy>2.4||e.position.y>h?!1:(this.vy=ng,this.hopCd=.64,this.vault=.52,e.scale.set(.78,1.28,.78),!0)},burst(){l=1,e.scale.set(1.35,1.35,1.35)}}}const Yo=14,vg=280;function xg(i,{onRotate:e,onTap:t,onHop:n}){const r={left:!1,right:!1};let s=!1,o=0,a=0,l=0,u=0,h=0,c=null;function p(f){var d;f.button!=null&&f.button!==0||(s=!0,o=f.clientX,a=f.clientX,l=f.clientY,u=performance.now(),h=0,c=f.pointerId,(d=i.setPointerCapture)==null||d.call(i,f.pointerId))}function m(f){if(!s||c!=null&&f.pointerId!==c)return;const d=f.clientX-o;h+=Math.abs(d)+Math.abs(f.clientY-l),e(d*rg),o=f.clientX}function g(f){if(c!=null&&f.pointerId!==c)return;const d=performance.now()-u,S=Math.hypot(f.clientX-a,f.clientY-l);s=!1,c=null,S<Yo&&h<Yo&&d<vg&&(t==null||t())}function _(f,d){(f.code==="ArrowLeft"||f.code==="KeyA")&&(r.left=d),(f.code==="ArrowRight"||f.code==="KeyD")&&(r.right=d),(f.code==="ArrowLeft"||f.code==="ArrowRight"||f.code==="KeyA"||f.code==="KeyD")&&f.preventDefault(),d&&(f.code==="Space"||f.code==="KeyW")&&(f.preventDefault(),n==null||n())}return i.addEventListener("pointerdown",p),window.addEventListener("pointermove",m),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g),window.addEventListener("keydown",f=>_(f,!0)),window.addEventListener("keyup",f=>_(f,!1)),{step(f){r.left&&e(-Wo*f),r.right&&e(Wo*f)}}}const na={ball:[{id:"cream",ru:"Сливки",en:"Cream",color:16774885,emissive:9071168,price:0},{id:"pebble",ru:"Галька",en:"Pebble",color:12169894,emissive:3814444,price:0,chest:!0},{id:"mint",ru:"Мята",en:"Mint",color:9433288,emissive:1334336,price:120},{id:"gold",ru:"Золото",en:"Gold",color:16765514,emissive:6963968,price:260},{id:"night",ru:"Ночь",en:"Night",color:5926143,emissive:1581152,price:340}],platform:[{id:"original",ru:"Колодец",en:"Well",colors:[6211781,15909198,15242602,8302824,13213916],price:0},{id:"clay",ru:"Глина",en:"Clay",colors:[12880482,11039308,13934714,11828050,9198138],price:0,chest:!0},{id:"ice",ru:"Лёд",en:"Ice",colors:[10475519,8306922,13168895,6990040,11460607],price:140},{id:"candy",ru:"Конфета",en:"Candy",colors:[16747192,16761707,10354625,13215487,16752250],price:220},{id:"ember",ru:"Угли",en:"Ember",colors:[16738877,16757575,14240555,16747586,12073770],price:300}],pole:[{id:"wood",ru:"Дерево",en:"Wood",color:12887412,price:0},{id:"stone",ru:"Камень",en:"Stone",color:9276038,price:0,chest:!0},{id:"marble",ru:"Мрамор",en:"Marble",color:15261908,price:160},{id:"neon",ru:"Неон",en:"Neon",color:5173456,price:280}],bg:[{id:"dusk",ru:"Сумерки",en:"Dusk",color:1314332,fog:1314332,price:0},{id:"mist",ru:"Туман",en:"Mist",color:1844272,fog:1844272,price:0,chest:!0},{id:"sky",ru:"Небо",en:"Sky",color:1520202,fog:1718868,price:180},{id:"void",ru:"Бездна",en:"Void",color:460300,fog:723218,price:320}]},Mg=[{slot:"ball",id:"pebble"},{slot:"platform",id:"clay"},{slot:"pole",id:"stone"},{slot:"bg",id:"mist"}],Sg=[{id:"easy",floors:14,introRings:3,introGap:4,gapStart:4,gapMin:3,ramp:50,dangerStart:7,dangerMax:2,dangerEvery:12,secondGapAt:99},{id:"normal",floors:22,introRings:2,introGap:4,gapStart:3,gapMin:2,ramp:18,dangerStart:3,dangerMax:4,dangerEvery:4,secondGapAt:12,secondGapSize:2},{id:"hard",floors:32,introRings:1,introGap:3,gapStart:2,gapMin:2,ramp:8,dangerStart:2,dangerMax:6,dangerEvery:3,secondGapAt:6,secondGapSize:2}],pi={floors:0,introRings:2,introGap:4,gapStart:4,gapMin:2,ramp:36,dangerStart:6,dangerMax:4,dangerEvery:7,secondGapAt:99},yg={floors:0,introRings:2,introGap:4,gapStart:4,gapMin:2,ramp:40,dangerStart:14,dangerMax:2,dangerEvery:12,secondGapAt:99,bombs:!0,bombStart:2,bombMax:3,bombEvery:5};function nn(i,e){return na[i].find(t=>t.id===e)}function ia(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Ts(i,e,t){for(let n=0;n<t;n++)i[(e+n)%rt]="gap"}function Eg(i,e,t,n,r){let s=0,o=0;for(;s<t&&o<48;){const a=Math.floor(ia(e*19+o+r)*rt);i[a]==="safe"&&(i[a]=n,s+=1),o+=1}}function Hs(i,e=pi){var p,m,g,_,f,d;const t=Array(rt).fill("safe"),n=e.floors||0;if(n&&i>=n)return t;const r=(p=e.introRings)!=null?p:2;if(i<r)return Ts(t,i*3%rt,(m=e.introGap)!=null?m:4),t;const s=e.ramp||36,o=Math.min(1,(i-r)/s),a=(g=e.gapStart)!=null?g:4,l=(_=e.gapMin)!=null?_:2,u=Math.max(l,Math.round(a-o*(a-l))),h=Math.floor(ia(i+1)*rt);Ts(t,h,u),i>=(e.secondGapAt||99)&&Ts(t,(h+6)%rt,e.secondGapSize||2);const c=(f=e.dangerStart)!=null?f:8;if(i>=c){const S=Math.floor((i-c)/(e.dangerEvery||6)),x=Math.min((d=e.dangerMax)!=null?d:3,1+S);Eg(t,i,x,"danger",3)}return t.includes("gap")||(t[0]="gap"),t}function Jo(i,e){var o,a;if(!(e!=null&&e.bombs))return 0;const t=(o=e.bombStart)!=null?o:2;if(i<t)return 0;const n=ia(i*47.3+8.1),r=Math.min(1,(i-t)/16),s=(a=e.bombMax)!=null?a:3;return n<.12||n<.48-r*.1?1:n<.82?Math.min(s,2):Math.min(s,3)}const an=Math.PI*2/rt,bg=Cg(),Tg=new D,Ag=new ki(Vo,Vo,90,12),Xt=new Vn({color:cg}),qt=ag.map(i=>new Vn({color:i})),Vs=new Vn({color:og,emissive:lg}),Yl=new Vn({color:16777215,emissive:3805704,map:Cr("bomb","core")}),Jl=new Vn({color:3811864,emissive:2233352}),Lr=new Bn({color:16742930}),wg=new Hn(sn,14,12),Rg=new ki(.04,.055,.22,6),Ko=new Hn(.09,8,6),Zo=new Set([Vs,Yl,Jl,Lr,Xt,...qt]);let Ai=0;function Cg(){const i=Qm,e=eg,t=an*.48,n=new Gl,r=8;for(let o=0;o<=r;o++){const a=-t+2*t*o/r,l=Math.cos(a)*e,u=Math.sin(a)*e;o===0?n.moveTo(l,u):n.lineTo(l,u)}for(let o=r;o>=0;o--){const a=-t+2*t*o/r;n.lineTo(Math.cos(a)*i,Math.sin(a)*i)}const s=new Qs(n,{depth:On,bevelEnabled:!1});return s.rotateX(-Math.PI/2),s.translate(0,-On/2,0),s}function $o(i){return-i*ta}function Wt(i){const e=Math.sin(i*127.1)*43758.5453;return e-Math.floor(e)}function Lg(){const i=new Dn,e=new at(wg,Yl);i.add(e);const t=new at(Rg,Jl);t.position.y=sn+.08,i.add(t);const n=new at(Ko,Lr);n.position.y=sn+.22,i.add(n);const r=[0,1].map(()=>{const s=new at(Ko,Lr);return s.scale.setScalar(.42),i.add(s),s});return i.userData.body=e,i.userData.fuse=t,i.userData.spark=n,i.userData.embers=r,i}function yr(i){const e=Math.PI*2;let t=i%e;return t<0&&(t+=e),Math.round(t/an)%rt}function jo(i,e){const t=yr(e);for(let n=0;n<rt;n++){const r=(t+rt-n)%rt,s=(t+n)%rt;if(i[r]!=="gap")return r*an;if(i[s]!=="gap")return s*an}return e}function As(i,e,t=0,n=0){const r=On/2+sn+Math.abs(Math.sin(t*14+e*3))*.045+n;i.position.set(Math.cos(e)*xn,r,-Math.sin(e)*xn)}function Pg(i){const e=new Dn;i.add(e);const t=new at(Ag,Xt);i.add(t);const n=[];let r=c=>Hs(c,pi),s=c=>Jo(c,pi);function o(c,p){const m=new Dn;m.position.y=$o(c);const g=qt[c%qt.length];return p.forEach((_,f)=>{if(_==="gap")return;const d=new at(bg,_==="danger"?Vs:g);d.rotation.y=f*an,m.add(d)}),m}function a(c){const p=s(c.index),m=[];c.cells.forEach((d,S)=>{d!=="gap"&&m.push(S)});const g=[],_=m.slice(),f=Math.min(p,_.length);for(let d=0;d<f;d++){const S=Math.floor(Wt(c.index*13+d+2)*_.length),x=_.splice(S,1)[0],v=x*an,C=Wt(c.index*17+d*31+9),w=Wt(c.index*41+d*7+3),A=Wt(c.index*23+d*11+5),X=C>.5?1:-1,y=.45+w*2.35,T=A<.22?"dash":A<.48?"lunge":A<.72?"wander":"patrol";let O=m[Math.floor(Wt(c.index*53+d+4)*m.length)];O===x&&m.length>1&&(O=m[(m.indexOf(x)+3)%m.length]);const H=Lg();As(H,v),c.group.add(H),g.push({mesh:H,angle:v,speed:y*X,base:y,mood:T,turn:O*an,burst:0,dead:!1,wait:C*.7,timer:.35+w*1.1,lunge:0,hop:0,pulse:A*6})}c.rollers=g}function l(c){const p=r(c),m=o(c,p);e.add(m);const g={index:c,y:$o(c),cells:p,group:m,rollers:[],scored:!1,breaking:!1,shards:[],thump:0};a(g),n.push(g)}function u(c,p=[]){return c.isMesh&&p.push(c),c.children.forEach(m=>u(m,p)),p}function h(c){c.breaking||(c.breaking=!0,c.shards=u(c.group).map((p,m)=>{const g=p.material.clone();g.transparent=!0,g.depthWrite=!1,p.material=g;const _=Wt(c.index*17+m+1),f=Wt(c.index*31+m+5);return{mesh:p,vx:(_-.5)*2.6,vy:1.1+f*1.8,vz:(f-.5)*1.6,spinX:(_-.5)*9,spinZ:(f-.5)*11,life:.55+_*.35}}))}for(let c=0;c<ko;c++)l(c);return{root:e,rings:n,setGenerator(c,p){r=c,s=m=>Jo(m,p)},applyTheme({platformColors:c,poleColor:p,platformSkin:m,poleSkin:g}){const _=Cr("platform",m||"original");_.repeat.set(2,2),c&&c.forEach((f,d)=>{qt[d]&&(qt[d].color.setHex(f),qt[d].map=_,qt[d].emissive.setHex(m==="ember"?3803136:m==="ice"?532520:0),qt[d].needsUpdate=!0)}),p!=null&&Xt.color.setHex(p),Xt.map=Cr("pole",g||"wood"),Xt.map.repeat.set(1,10),Xt.emissive.setHex(g==="neon"?538672:0),Xt.needsUpdate=!0},rotate(c){e.rotation.y+=c},ballLocalAngle(c){const p=Tg.copy(c);e.updateMatrixWorld(),e.worldToLocal(p);let m=Math.atan2(-p.z,p.x);return m<0&&(m+=Math.PI*2),m},segmentIndex(c){const p=Math.PI*2;let m=c%p;return m<0&&(m+=p),Math.round(m/an)%rt},carveGap(c,p){const m=this.segmentIndex(p);[m,(m+1)%rt,(m+rt-1)%rt].forEach(f=>{c.cells[f]="gap"}),c.group.children.filter(f=>{if(!f.isMesh)return!1;const d=(f.rotation.y+Math.PI*2)%(Math.PI*2),S=Math.round(d/an)%rt;return c.cells[S]==="gap"}).forEach(f=>c.group.remove(f));for(const f of c.rollers)f.dead||c.cells[yr(f.angle)]==="gap"&&(f.angle=jo(c.cells,f.angle),As(f.mesh,f.angle,Ai))},kindAt(c,p){if(c.breaking)return"gap";const m=this.segmentIndex(p),g=c.cells[m];if(g!=="gap")return g;const _=Math.PI*2/rt,f=Math.PI*2;let d=p%f;d<0&&(d+=f);const S=m*_;let x=d-S;if(x>Math.PI&&(x-=f),x<-Math.PI&&(x+=f),Math.abs(x)<_*.32)return"gap";const v=x>=0?(m+1)%rt:(m+rt-1)%rt,C=c.cells[v];return C==="gap"?"gap":C},hitRoller(c,p,m){const g=xn*.01;for(const _ of n){if(_.breaking)continue;const f=_.y+On/2+sn;if(!(Math.abs(c-f)>sn+.28))for(const d of _.rollers){if(d.dead||d.burst>0||m&&c>f-.02)continue;let S=p-d.angle;if(S>Math.PI&&(S-=Math.PI*2),S<-Math.PI&&(S+=Math.PI*2),Math.abs(S)*xn<sn+.22+g)return d}}return null},burstRoller(c){c.burst=.42},thumpRing(c){c.thump=1},shatterAbove(c){for(const p of n)p.breaking||!p.scored||p.y>c+ta*sg&&h(p)},update(c,p){Ai+=c;const m=.45+.55*Math.abs(Math.sin(Ai*10));Lr.color.setRGB(1,.28+m*.5,.04);const g=.28+.42*Math.abs(Math.sin(Ai*3.4));Vs.emissive.setRGB(g,.03,.01),Xt.map&&(Xt.map.offset.y+=c*(Xt.emissive.g>.1?.45:.08)),qt[0].map&&(qt[0].map.offset.x+=c*.05);for(const _ of n){if(_.thump>0){_.thump=Math.max(0,_.thump-c*5.5);const f=1+_.thump*.07;_.group.scale.set(f,1-_.thump*.1,f)}else _.group.scale.set(1,1,1);if(!_.breaking){for(const f of _.rollers){if(f.dead)continue;if(f.pulse+=c,f.burst>0){f.burst-=c;const A=.42-f.burst,X=A<.08?1-A*4:1+A*9;f.mesh.scale.setScalar(Math.max(.01,X));const y=f.mesh.userData.spark;y&&y.scale.setScalar(2+A*10),f.burst<=0&&(f.dead=!0,f.mesh.visible=!1);continue}if(f.timer-=c,f.hop>0&&(f.hop=Math.max(0,f.hop-c*3.2)),f.wait>0)f.wait-=c;else{let A=f.speed;if(f.mood==="dash")A=f.speed*(.35+1.85*Math.abs(Math.sin(f.pulse*2.1)));else if(f.mood==="lunge")f.timer<=0&&(f.lunge=.28+Wt(_.index+f.pulse)*.18,f.hop=.16,f.timer=.7+Wt(_.index*9+f.angle)*1.35),A=f.lunge>0?f.speed*2.7:f.speed*.22,f.lunge>0&&(f.lunge-=c);else if(f.mood==="wander")f.timer<=0&&(f.speed*=-1,f.hop=.08,f.timer=.4+Wt(f.pulse*17+_.index)*1.6);else if(f.mood==="patrol"){let y=f.angle-f.turn;y>Math.PI&&(y-=Math.PI*2),y<-Math.PI&&(y+=Math.PI*2),Math.abs(y)<.22&&f.timer<=0&&(f.speed*=-1,f.timer=.5)}const X=f.angle+A*c;_.cells[yr(f.angle)]==="gap"?(f.angle=jo(_.cells,f.angle),f.speed*=-1):_.cells[yr(X)]==="gap"?f.speed*=-1:f.angle=X}const d=Math.PI*2;f.angle=(f.angle%d+d)%d,As(f.mesh,f.angle,Ai,f.hop);const S=1+Math.abs(Math.sin(f.pulse*6))*.08;f.mesh.scale.set(S,1.05-(S-1),S);const x=f.mesh.userData.body;x&&(x.rotation.z-=f.speed*c*(xn/sn)*1.2,x.rotation.x=Math.sin(f.pulse*8)*.15);const v=f.mesh.userData.spark;v&&(v.scale.setScalar(.7+m*1.1),v.position.x=Math.sin(f.pulse*14)*.08,v.position.z=Math.cos(f.pulse*11)*.08);const C=f.mesh.userData.fuse;C&&(C.rotation.z=Math.sin(f.pulse*9)*.35);const w=f.mesh.userData.embers;w&&w.forEach((A,X)=>{const y=f.pulse*(9+X*4)+X;A.position.set(Math.sin(y)*.22,sn*.2+y%.35,Math.cos(y*1.3)*.22),A.scale.setScalar(.25+m*.4)})}continue}for(const f of _.shards){f.life-=c,f.vy-=Xl*1.6*c,f.mesh.position.x+=f.vx*c,f.mesh.position.y+=f.vy*c,f.mesh.position.z+=f.vz*c,f.mesh.rotation.x+=f.spinX*c,f.mesh.rotation.z+=f.spinZ*c;const d=Math.max(0,f.life/.7);f.mesh.scale.setScalar(.4+.6*d),f.mesh.material&&(f.mesh.material.opacity=d)}}for(;n.length&&n[0].breaking&&n[0].shards.every(_=>_.life<=0);){const _=n.shift();_.shards.forEach(f=>{f.mesh.material&&!Zo.has(f.mesh.material)&&f.mesh.material.dispose()}),e.remove(_.group),l(n[n.length-1].index+1)}t.position.y=p-20},reset(){var c;for(;n.length;){const p=n.shift();(c=p.shards)==null||c.forEach(m=>{m.mesh.material&&!Zo.has(m.mesh.material)&&m.mesh.material.dispose()}),e.remove(p.group)}e.rotation.y=0;for(let p=0;p<ko;p++)l(p);t.position.y=-20}}}const Dg=["ball","platform","pole","bg"];function Ug(i,{progress:e,locale:t,pack:n,onBuy:r,onEquip:s}){const o=e.data.equipped;i.innerHTML=Dg.map(a=>{const l=na[a].map(h=>{const c=e.owns(a,h.id),p=o[a]===h.id,m=h[t]||h.ru;let g="";return p?g=`<span class="tag">${n.equipped}</span>`:c?g=`<button class="btn mini" data-act="equip" data-slot="${a}" data-id="${h.id}">${n.owned}</button>`:h.chest?g=`<span class="tag dim">${n.fromChest}</span>`:g=`<button class="btn mini primary" data-act="buy" data-slot="${a}" data-id="${h.id}">${n.buy} · ${h.price}</button>`,`<div class="shop-item${p?" on":""}">
          <i class="swatch live" style="background:${Gs(a,h.id)}"></i>
          <div>
            <b>${m}</b>
            ${g}
          </div>
        </div>`}).join("");return`<section class="shop-slot"><h3>${a==="ball"?n.slotBall:a==="platform"?n.slotPlatform:a==="pole"?n.slotPole:n.slotBg}</h3>${l}</section>`}).join(""),i.querySelectorAll("[data-act]").forEach(a=>{a.addEventListener("click",()=>{const l=a.getAttribute("data-slot"),u=a.getAttribute("data-id");a.getAttribute("data-act")==="buy"?r(l,u):s(l,u)})})}const Qo=new Hn(.05,6,6),Ig=new Hn(.28,10,8),Ng=new ea(.18,.42,24),Og=new ki(.16,.16,.045,14),Fg=new Bn({color:16769126,transparent:!0,opacity:1});function el(i,e,t,n,r={}){const s=[];for(let o=0;o<t;o++){const a=new at(i,new Bn({color:e,transparent:!0,opacity:0,depthWrite:!1,...r}));a.visible=!1,n.add(a),s.push({mesh:a,vx:0,vy:0,vz:0,life:0,max:.4,spin:0})}return s}function Bg(i){const e=el(Qo,16770752,48,i),t=el(Qo,16738840,40,i),n=[];for(let S=0;S<20;S++){const x=new at(Og,Fg.clone());x.visible=!1,x.material.transparent=!0,x.rotation.x=Math.PI/2,i.add(x),n.push({mesh:x,vx:0,vy:0,vz:0,life:0,spin:0})}const r=new at(Ig,new Bn({color:16772744,transparent:!0,opacity:0,depthWrite:!1}));r.visible=!1,i.add(r);const s=r.clone();s.material=r.material.clone(),s.material.color.setHex(16726546),i.add(s);const o=new at(Ng,new Bn({color:16761162,transparent:!0,opacity:0,depthWrite:!1,side:Jt}));o.rotation.x=-Math.PI/2,o.visible=!1,i.add(o);const a=48,l=new Float32Array(a*3);for(let S=0;S<a;S++)l[S*3]=(Math.random()-.5)*22,l[S*3+1]=(Math.random()-.5)*28,l[S*3+2]=-6-Math.random()*16;const u=new Lt;u.setAttribute("position",new Vt(l,3));const h=new Nl({color:16773832,size:.08,transparent:!0,opacity:.55,depthWrite:!1}),c=new dm(u,h);i.add(c);let p=0,m=0,g=0,_=0,f=0;function d(S,x,v,C,w,A,X,y,T){let O=x;for(let H=0;H<X;H++){const Z=S[O%S.length];O+=1,Z.mesh.visible=!0,Z.mesh.position.set(v,C,w),Z.mesh.material.color.setHex(A),Z.mesh.material.opacity=.95,Z.vx=(Math.random()-.5)*y,Z.vy=.4+Math.random()*y,Z.vz=(Math.random()-.5)*y,Z.life=T*(.7+Math.random()*.5),Z.max=Z.life}return O}return{burst(S,x,v,C=16770752,w=8){m=d(e,m,S,x,v,C,w,2.4,.42)},explode(S,x,v){f=.55,r.visible=!0,r.position.set(S,x,v),r.scale.setScalar(.35),r.material.opacity=1,r.material.color.setHex(16774320),s.visible=!0,s.position.set(S,x,v),s.scale.setScalar(.2),s.material.opacity=.95,o.visible=!0,o.position.set(S,x,v),o.scale.setScalar(.3),o.material.opacity=.9,g=d(t,g,S,x,v,16751130,14,5.4,.55),g=d(t,g,S,x,v,16772710,10,6.2,.4),g=d(t,g,S,x,v,3809816,8,2.2,.7)},coins(S,x,v,C=3){for(let w=0;w<C;w++){const A=n[_%n.length];_+=1,A.mesh.visible=!0,A.mesh.position.set(S,x,v),A.mesh.scale.setScalar(1),A.vx=(Math.random()-.5)*1.8,A.vy=2.2+Math.random()*2.2,A.vz=(Math.random()-.5)*1.8,A.life=.95+Math.random()*.3,A.spin=10+Math.random()*12}},punch(S=.16){p=S},camKick(){const S=p;return p*=.84,p<.002&&(p=0),S},setStarColor(S){h.color.setHex(S)},update(S,x){c.position.y=x,c.rotation.y+=S*.04,h.opacity=.35+Math.abs(Math.sin(performance.now()*.0016))*.25,f>0&&(f-=S,r.scale.addScalar(S*9),r.material.opacity=Math.max(0,f*1.8),s.scale.addScalar(S*14),s.material.opacity=Math.max(0,f*1.4),o.scale.addScalar(S*11),o.material.opacity=Math.max(0,f*1.6),o.rotation.z+=S*4,f<=0&&(r.visible=!1,s.visible=!1,o.visible=!1));for(const v of e)v.mesh.visible&&(v.life-=S,v.vy-=6*S,v.mesh.position.x+=v.vx*S,v.mesh.position.y+=v.vy*S,v.mesh.position.z+=v.vz*S,v.mesh.material.opacity=Math.max(0,v.life*2.2),v.mesh.scale.setScalar(.6+v.life),v.life<=0&&(v.mesh.visible=!1));for(const v of t){if(!v.mesh.visible)continue;v.life-=S,v.vy-=8*S,v.mesh.position.x+=v.vx*S,v.mesh.position.y+=v.vy*S,v.mesh.position.z+=v.vz*S;const C=Math.max(0,v.life/(v.max||.4));v.mesh.material.opacity=C,v.mesh.scale.setScalar(.5+(1-C)*1.4),v.life<=0&&(v.mesh.visible=!1)}for(const v of n){if(!v.mesh.visible)continue;v.life-=S,v.vy-=7.2*S,v.mesh.position.x+=v.vx*S,v.mesh.position.y+=v.vy*S,v.mesh.position.z+=v.vz*S,v.mesh.rotation.y+=v.spin*S,v.mesh.rotation.z+=S*3;const C=Math.max(0,v.life);v.mesh.material.transparent=!0,v.mesh.material.opacity=Math.min(1,C*3),v.mesh.scale.setScalar(.7+C),v.life<=0&&(v.mesh.visible=!1)}}}}function zg(i){return i>0&&i<80?i*Sr:i}function Gg(i,e,t,n){if(!i)return;const r=i.createOscillator(),s=i.createGain();r.frequency.value=e,r.type="sine",s.gain.value=n,r.connect(s),s.connect(i.destination),r.start(),s.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+t),r.stop(i.currentTime+t)}function Hg(i){if(i==="fuse")return yg;const e=Sg.find(t=>t.id===i);return e||pi}function Vg(i,e,t,{progress:n,locale:r,pack:s}){var Re;const o=new fm;o.background=new We(Xo),o.fog=new Zs(Xo,14,34);const a=new Ct(55,1,.1,80),l=new Il({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),o.add(new jm(16777215,.35)),o.add(new Ym(16771272,4008778,.85));const u=new $m(16773852,.65);u.position.set(4,10,6),o.add(u);const h=Pg(o),c=_g(o),p=Bg(o);o.add(c.mesh);const m=new D;let g="menu",_="classic",f=0,d=zg(e.getBest());d!==e.getBest()&&e.setBest(d);let S=!0,x=!1,v=e.soundOn(),C=null,w=performance.now(),A=0,X=0,y=0,T=!1,O=!1,H=0,Z=0,L=2.2;function F(){g!=="play"||x||!O||c.hop(L+ta*.85)&&(q(700,.07,.05),p.burst(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z,16769162,10),p.punch(.08))}const V=xg(i,{onRotate(B){g!=="play"||x||h.rotate(B)},onTap:F,onHop:F});function K(){if(C)return;const B=window.AudioContext||window.webkitAudioContext;B&&(C=new B)}function q(B,U,ve){v&&(K(),(C==null?void 0:C.state)==="suspended"&&C.resume(),Gg(C,B,U,ve))}function $(B){v=B,e.setSoundOn(B),t.sound.classList.toggle("muted",!B),!B&&C&&C.suspend()}function j(){return _}function ie(){return n.data.best[j()]||0}function ae(){n.recordScore(j(),f),_==="classic"&&f>d&&(d=f,e.setBest(d)),t.menuBest.textContent=String(ie()||d),t.deadBest.textContent=String(ie()||d)}function k(B){t.menu.classList.toggle("hidden",B!=="menu"),t.dead.classList.toggle("hidden",B!=="dead"),t.shop.classList.toggle("hidden",B!=="shop"),t.help.classList.toggle("hidden",B!=="help"),t.win.classList.toggle("hidden",B!=="win"),t.hud.classList.toggle("hidden",B!=="play")}let ee=null;function de(B){B&&(B.classList.remove("pop"),B.offsetWidth,B.classList.add("pop"))}function ye(){const B=String(n.data.coins);t.menuCoins.textContent=B,t.shopCoins.textContent=B,t.hudCoins.textContent=B,ee!==null&&ee!==B&&(de(t.menuCoins),de(t.shopCoins),de(t.hudCoins)),ee=B}function ge(){const B=nn("ball",n.data.equipped.ball)||nn("ball","cream"),U=nn("platform",n.data.equipped.platform)||nn("platform","original"),ve=nn("pole",n.data.equipped.pole)||nn("pole","wood"),he=nn("bg",n.data.equipped.bg)||nn("bg","dusk");c.setSkin(B),h.applyTheme({platformColors:U.colors,poleColor:ve.color,platformSkin:U.id,poleSkin:ve.id}),o.background.setHex(he.color),o.fog.color.setHex(he.fog),p.setStarColor(he.id==="sky"?11065599:he.id==="void"?8939263:16773832),document.documentElement.style.setProperty("--bg",`#${he.color.toString(16).padStart(6,"0")}`)}function Ce(){Ug(t.shopRoot,{progress:n,locale:r,pack:s,onBuy(B,U){n.buy(B,U)&&(ge(),ye(),Ce(),q(620,.08,.05))},onEquip(B,U){n.equip(B,U),ge(),Ce(),q(480,.06,.04)}})}function Ue(){var he,oe;const B=window.visualViewport,U=Math.max(1,Math.floor((he=B==null?void 0:B.width)!=null?he:window.innerWidth)),ve=Math.max(1,Math.floor((oe=B==null?void 0:B.height)!=null?oe:window.innerHeight));document.documentElement.style.setProperty("--app-h",`${ve}px`),l.setSize(U,ve,!1),a.aspect=U/ve,a.updateProjectionMatrix()}function Te(){const B=c.mesh.position.y,U=a.aspect<.86,ve=U?62:54;a.fov!==ve&&(a.fov=ve,a.updateProjectionMatrix());const he=p.camKick();U?(a.position.set(0,B+6.5+he,8.6+he*2),a.lookAt(0,B-1.35,0)):(a.position.set(0,B+5.8+he,7.2+he*2),a.lookAt(0,B-1.1,0))}function De(){A>=2?(t.combo.classList.remove("hidden"),t.combo.textContent=`x${A}`,t.combo.classList.remove("pulse"),t.combo.offsetWidth,t.combo.classList.add("pulse")):(t.combo.classList.add("hidden"),t.combo.classList.remove("pulse"))}function R(){if(!Z){t.score.textContent=String(f);return}t.score.replaceChildren();const B=document.createElement("span");B.textContent=String(f);const U=document.createElement("span");U.className="hud-need",U.textContent=`/${Z}`,t.score.append(B,U)}function se(B){B&&(_=B);const U=Hg(_);O=_==="fuse",H=U.floors||0,Z=H?H*Sr:0,T=!1,A=0,L=2.2,X=0,y=0,h.setGenerator(ve=>Hs(ve,U),U),ge(),h.reset(),c.reset(),f=0,S=!0,t.score.classList.toggle("has-goal",Z>0),R(),t.continueBtn.classList.remove("hidden"),t.hopBtn.classList.toggle("hidden",!O),t.comboLayer&&t.comboLayer.replaceChildren(),De(),ye(),g="play",x=!1,k("play"),e.startGameplay(),n.achieve("first_play",20),ye(),q(520,.08,.05)}function J(B){const U=Math.floor(X/8),ve=Math.floor(f/200),he=B?25:0,oe=Math.max(1,y+U+ve+he);return n.addCoins(oe),f>=1e3&&n.achieve("score_1000",40),ae(),ye(),oe}function re(){t.flash.classList.remove("hidden"),t.flash.classList.remove("boom"),t.flash.offsetWidth,t.flash.classList.add("boom"),window.setTimeout(()=>{t.flash.classList.add("hidden"),t.flash.classList.remove("boom")},360)}function Y(B=!1){if(g!=="play"||c.invuln>0)return;O&&!B&&re(),p.punch(B?.5:.32),p.burst(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z,16724760,B?6:12),e.stopGameplay();const U=J(!1),ve=()=>{g="dead",t.deadScore.textContent=String(f),t.deadBest.textContent=String(ie()||d),t.deadCoins.textContent=String(U),t.continueBtn.classList.toggle("hidden",!S),k("dead"),q(140,.28,.08)};if(B){g="boom",q(80,.22,.12),window.setTimeout(ve,580);return}ve()}function Ae(){const B=Mg.filter(ve=>!n.owns(ve.slot,ve.id));if(!B.length){const ve=18+Math.floor(Math.random()*18);return n.addCoins(ve),{type:"coins",amount:ve}}const U=B[Math.floor(Math.random()*B.length)];return n.grant(U.slot,U.id),{type:"skin",...U}}function _e(B){const U=t.chest,ve=t.chestFlies;if(U&&(U.classList.remove("open","shake"),U.offsetWidth,U.classList.add("shake"),window.setTimeout(()=>U.classList.add("open"),360)),ve){ve.replaceChildren();const he=B.type==="coins"?Math.min(16,7+Math.floor(B.amount/3)):12;for(let oe=0;oe<he;oe++){const Me=document.createElement("i");Me.className="fly-coin",Me.style.setProperty("--dx",`${(Math.random()-.5)*170}px`),Me.style.setProperty("--dy",`${-30-Math.random()*110}px`),Me.style.animationDelay=`${.32+oe*.045}s`,ve.appendChild(Me)}if(B.type==="skin"){const oe=document.createElement("i");oe.className="fly-skin",oe.style.background=Gs(B.slot,B.id),ve.appendChild(oe)}}if(t.chestLoot)if(t.chestLoot.replaceChildren(),B.type==="skin"){const he=nn(B.slot,B.id),oe=document.createElement("i");oe.className="swatch live prize-swatch",oe.style.background=Gs(B.slot,B.id);const Me=document.createElement("b");Me.textContent=(he==null?void 0:he[r])||B.id,t.chestLoot.append(oe,Me)}else{const he=document.createElement("i");he.className="coin-icon";const oe=document.createElement("b");oe.textContent=`+${B.amount}`,t.chestLoot.append(he,oe)}}function E(){if(g!=="play")return;g="win",e.stopGameplay(),(_==="easy"||_==="normal"||_==="hard")&&(n.data.cleared[_]=!0,n.save(),_==="easy"&&n.achieve("beat_easy",50),_==="normal"&&n.achieve("beat_normal",80),_==="hard"&&n.achieve("beat_hard",120));const B=Ae(),U=J(!0);p.punch(.22),p.burst(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z,16770406,14),p.coins(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z,8),t.winScore.textContent=String(f),t.winCoins.textContent=String(U),_e(B),ye(),ge(),k("win"),q(880,.2,.06),window.setTimeout(()=>q(980,.12,.05),280),window.setTimeout(()=>q(1180,.16,.06),520)}function M(){S=!1,c.invuln=.9,c.vy=0;const B=c.mesh.position.y,U=h.rings.find(ve=>Math.abs(ve.y-B)<1.4)||h.rings[0];U&&(h.carveGap(U,h.ballLocalAngle(c.mesh.position)),c.bounce(U.y+On/2+Cn+.12),L=c.mesh.position.y,h.shatterAbove(U.y)),g="play",k("play"),e.startGameplay()}function N(B){if(!t.comboLayer)return;m.copy(c.mesh.position).project(a);const U=(m.x*.5+.5)*i.clientWidth,ve=(-m.y*.5+.5)*i.clientHeight,he=document.createElement("div");he.className=B>=300?"combo-pop hot":"combo-pop",he.textContent=`+${B}`,he.style.left=`${U}px`,he.style.top=`${ve}px`,t.comboLayer.appendChild(he),window.setTimeout(()=>he.remove(),800)}function ne(B,U){const ve=Math.atan2(Cn,xn);let he="gap";for(let oe=-2;oe<=2;oe++){const Me=h.kindAt(B,U+ve*oe/2);if(Me==="danger")return"danger";Me==="safe"&&(he="safe")}return he}function te(){const B=c.mesh.position.y,U=h.ballLocalAngle(c.mesh.position),ve=B-Cn,he=B+Cn;if(O&&c.invuln<=0){const oe=h.hitRoller(B,U,c.vault>0);if(oe){oe.mesh.getWorldPosition(m),h.burstRoller(oe),p.explode(m.x,m.y,m.z),Y(!0);return}}for(const oe of h.rings){const Me=oe.y+On/2,Ee=oe.y-On/2;if(!oe.scored&&he<Ee-.02&&(oe.scored=!0,A+=1,f+=Sr*A,y+=A,R(),t.score.classList.remove("pop"),t.score.offsetWidth,t.score.classList.add("pop"),De(),A>=2&&(c.burst(),N(Sr*A),p.burst(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z,16765514,10),p.punch(.1)),p.coins(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z,Math.min(6,A)),f>=1e3&&n.achieve("rings_run",15),A>=4&&n.achieve("combo_4",25),q(660+Math.min(8,A)*28,.07,.04),H&&oe.index+1>=H&&(T=!0)),!(ve<Me&&he>Ee))continue;const Xe=ne(oe,U);if(Xe==="gap")continue;if(B<oe.y){if(Xe==="danger"){Y();return}c.mesh.position.y=Ee-Cn-.02,c.vy>0?c.vy=-Math.abs(c.vy)*.45:c.vy=Math.min(c.vy,-1.2),q(300,.05,.03);return}if(!(c.vy>.55&&ve>=Me-.02)){if(Xe==="danger"){Y();return}c.bounce(Me+Cn),L=c.mesh.position.y,A=0,De(),h.thumpRing(oe),h.shatterAbove(oe.y),p.burst(c.mesh.position.x,c.mesh.position.y,c.mesh.position.z),p.punch(.14),q(420,.06,.035),T&&E();return}}}function Q(B){const U=Math.min(.033,(B-w)/1e3);w=B,g==="play"&&!x?(X+=U,Math.floor(X/10)>Math.floor((X-U)/10)&&(n.addCoins(1),ye()),V.step(U),c.invuln>0&&(c.invuln-=U),c.fall(U,Math.max(0,A-1)),te(),h.update(U,c.mesh.position.y),p.update(U,c.mesh.position.y),Te()):(g==="menu"||g==="shop"||g==="help"?(h.rotate(U*.25),c.idle(U)):g!=="boom"&&h.rotate(U*.08),h.update(U,c.mesh.position.y),p.update(U,c.mesh.position.y),Te()),l.render(o,a),requestAnimationFrame(Q)}function be(){x=!0,e.stopGameplay(),C&&v&&C.suspend()}function ue(){document.hidden||(x=!1,w=performance.now(),g==="play"&&e.startGameplay(),C&&v&&C.resume())}function xe(){g="menu",k("menu"),c.reset(),h.setGenerator(B=>Hs(B,pi),pi),ge(),h.reset(),t.hopBtn.classList.add("hidden"),t.menuBest.textContent=String(n.data.best.classic||d),ye(),Te()}return t.classic.addEventListener("click",()=>{K(),se("classic")}),t.easy.addEventListener("click",()=>{K(),se("easy")}),t.normal.addEventListener("click",()=>{K(),se("normal")}),t.hard.addEventListener("click",()=>{K(),se("hard")}),t.fuse.addEventListener("click",()=>{K(),se("fuse")}),t.shopBtn.addEventListener("click",()=>{Ce(),ye(),g="shop",k("shop")}),t.shopBack.addEventListener("click",xe),t.helpBtn.addEventListener("click",()=>{g="help",k("help")}),t.helpBack.addEventListener("click",xe),t.winMenu.addEventListener("click",xe),t.again.addEventListener("click",async()=>{be(),await e.showFullscreen(),se(_)}),t.continueBtn.addEventListener("click",async()=>{if(be(),!await e.showRewarded()){t.continueBtn.classList.add("hidden"),ue();return}M(),x=!1}),t.menuBtn.addEventListener("click",async()=>{be(),await e.showFullscreen(),xe()}),t.hopBtn.addEventListener("click",B=>{B.stopPropagation(),F()}),t.sound.addEventListener("click",()=>{K(),$(!v),v&&q(500,.06,.05)}),document.addEventListener("visibilitychange",()=>{document.hidden?be():ue()}),e.onPause(be),e.onResume(ue),window.addEventListener("resize",Ue),(Re=window.visualViewport)==null||Re.addEventListener("resize",Ue),t.menuBest.textContent=String(n.data.best.classic||d),t.deadBest.textContent=String(d),$(v),t.sound.classList.remove("hidden"),ge(),ye(),Ce(),Ue(),Te(),requestAnimationFrame(Q),{renderer:l,markReady(){return e.ready()}}}const Di="kolodets_best",Ui="kolodets_sound";function Kl(){return Number(localStorage.getItem(Di))||0}function Zl(){return localStorage.getItem(Ui)!=="0"}function kg(){let i=!1;return{isMock:!0,localeLang:"ru",async ready(){},startGameplay(){i=!0},stopGameplay(){i=!1},isGameplay(){return i},getBest(){return Kl()},setBest(e){localStorage.setItem(Di,String(e))},soundOn(){return Zl()},setSoundOn(e){localStorage.setItem(Ui,e?"1":"0")},showFullscreen(){return Promise.resolve(!1)},showRewarded(){return Promise.resolve(!0)},onPause(){},onResume(){},getJSON(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},setJSON(e,t){localStorage.setItem(e,JSON.stringify(t))}}}function Wg(i){var s,o;let e=!1,t=null;function n(){var a,l;e||(e=!0,(l=(a=i.features)==null?void 0:a.GameplayAPI)==null||l.start())}function r(){var a,l;e&&(e=!1,(l=(a=i.features)==null?void 0:a.GameplayAPI)==null||l.stop())}return{isMock:!1,localeLang:((o=(s=i.environment)==null?void 0:s.i18n)==null?void 0:o.lang)||"ru",async ready(){var a,l,u;t=await((a=i.getStorage)==null?void 0:a.call(i).catch(()=>null)),(u=(l=i.features)==null?void 0:l.LoadingAPI)==null||u.ready()},startGameplay:n,stopGameplay:r,isGameplay(){return e},getBest(){var u;const a=Number((u=t==null?void 0:t.getItem)==null?void 0:u.call(t,Di)),l=Kl();return a>l?a:l},setBest(a){var l;localStorage.setItem(Di,String(a)),(l=t==null?void 0:t.setItem)==null||l.call(t,Di,String(a))},soundOn(){if(t){const a=t.getItem(Ui);if(a!=null)return a!=="0"}return Zl()},setSoundOn(a){var u;const l=a?"1":"0";localStorage.setItem(Ui,l),(u=t==null?void 0:t.setItem)==null||u.call(t,Ui,l)},showFullscreen(){return new Promise(a=>{var l;if(!((l=i.adv)!=null&&l.showFullscreenAdv)){a(!1);return}r(),i.adv.showFullscreenAdv({callbacks:{onClose(u){a(!!u)},onError(){a(!1)}}})})},showRewarded(){return new Promise(a=>{var u;if(!((u=i.adv)!=null&&u.showRewardedVideo)){a(!1);return}let l=!1;r(),i.adv.showRewardedVideo({callbacks:{onRewarded(){l=!0},onClose(){a(l)},onError(){a(!1)}}})})},onPause(a){var l;(l=i.on)==null||l.call(i,"game_api_pause",a)},onResume(a){var l;(l=i.on)==null||l.call(i,"game_api_resume",a)},getJSON(a,l){var u;try{const c=((u=t==null?void 0:t.getItem)==null?void 0:u.call(t,a))||localStorage.getItem(a);return c?JSON.parse(c):l}catch{return l}},setJSON(a,l){var h;const u=JSON.stringify(l);localStorage.setItem(a,u),(h=t==null?void 0:t.setItem)==null||h.call(t,a,u)}}}async function Xg(){const i=window.YaGames;if(!i)return kg();const e=await i.init();return Wg(e)}const tl="kolodets_progress_v2";function wi(){return{coins:40,owned:{ball:["cream"],platform:["original"],pole:["wood"],bg:["dusk"]},equipped:{ball:"cream",platform:"original",pole:"wood",bg:"dusk"},best:{classic:0,fuse:0,easy:0,normal:0,hard:0},cleared:{easy:!1,normal:!1,hard:!1},fuseUnlocked:!1,achievements:{}}}function qg(i){const e=Object.assign(wi(),i.getJSON(tl,{}));e.owned||(e.owned=wi().owned),e.equipped||(e.equipped=wi().equipped),e.best||(e.best=wi().best),e.cleared||(e.cleared=wi().cleared),e.achievements||(e.achievements={});function t(){i.setJSON(tl,e)}function n(h,c){return e.owned[h].includes(c)}function r(h){return h<=0?0:(e.coins+=h,t(),h)}function s(h,c){return n(h,c)?!1:(e.owned[h].push(c),t(),!0)}function o(h,c){const p=na[h].find(m=>m.id===c);return!p||p.chest||n(h,c)||e.coins<p.price?!1:(e.coins-=p.price,e.owned[h].push(c),e.equipped[h]=c,t(),!0)}function a(h,c){return n(h,c)?(e.equipped[h]=c,t(),!0):!1}function l(h,c){return c>(e.best[h]||0)?(e.best[h]=c,t(),!0):!1}function u(h,c){return e.achievements[h]?0:(e.achievements[h]=!0,r(c))}return t(),{data:e,save:t,owns:n,addCoins:r,grant:s,buy:o,equip:a,recordScore:l,achieve:u}}function Yg(){const i=e=>e.preventDefault();document.addEventListener("contextmenu",i),document.addEventListener("selectstart",i),document.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1}),document.addEventListener("gesturestart",i),window.addEventListener("touchmove",e=>{var t,n;(n=(t=e.target)==null?void 0:t.closest)!=null&&n.call(t,".panel.scroll")||e.preventDefault()},{passive:!1})}function Jg(){return{menu:document.getElementById("screen-menu"),dead:document.getElementById("screen-dead"),shop:document.getElementById("screen-shop"),help:document.getElementById("screen-help"),win:document.getElementById("screen-win"),hud:document.getElementById("hud"),score:document.getElementById("hud-score"),combo:document.getElementById("hud-combo"),hudCoins:document.getElementById("hud-coins"),chest:document.getElementById("chest"),chestFlies:document.getElementById("chest-flies"),menuCoins:document.getElementById("menu-coins"),shopCoins:document.getElementById("shop-coins"),menuBest:document.getElementById("menu-best"),deadScore:document.getElementById("dead-score"),deadBest:document.getElementById("dead-best"),deadCoins:document.getElementById("dead-coins"),winScore:document.getElementById("win-score"),winCoins:document.getElementById("win-coins"),chestLoot:document.getElementById("chest-loot"),classic:document.getElementById("btn-classic"),easy:document.getElementById("btn-easy"),normal:document.getElementById("btn-normal"),hard:document.getElementById("btn-hard"),fuse:document.getElementById("btn-fuse"),shopBtn:document.getElementById("btn-shop"),shopBack:document.getElementById("btn-shop-back"),shopRoot:document.getElementById("shop-root"),helpBtn:document.getElementById("btn-help"),helpBack:document.getElementById("btn-help-back"),winMenu:document.getElementById("btn-win-menu"),again:document.getElementById("btn-again"),continueBtn:document.getElementById("btn-continue"),menuBtn:document.getElementById("btn-menu"),hopBtn:document.getElementById("btn-hop"),comboLayer:document.getElementById("combo-layer"),sound:document.getElementById("btn-sound"),flash:document.getElementById("flash")}}async function Kg(){Yg();const i=await Xg(),e=ic(i.localeLang),t=rc(e),n=qg(i),r=Vg(document.getElementById("game-canvas"),i,Jg(),{progress:n,locale:e,pack:t});await new Promise(s=>requestAnimationFrame(s)),await r.markReady()}Kg();

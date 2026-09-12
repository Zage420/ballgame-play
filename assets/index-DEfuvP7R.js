const fa={ru:{title:"Колодец",eyebrow:"эксперимент",lead:"Крути кольца и проваливай шар в отверстие. Классика сохранена — рядом новые режимы и магазин.",best:"Рекорд",play:"Играть",hint:"Свайп влево-вправо или стрелки / A D",over:"Конец",score:"Счёт",continue:"Продолжить · реклама",again:"Играть снова",menu:"В меню",sound:"Звук",coins:"Монеты",shop:"Магазин",howto:"Как играть",back:"Назад",classic:"Классика",classicHint:"Та самая бесконечная партия",floors:"Этажи",easy:"Лёгкий",normal:"Средний",hard:"Сложный",fuse:"Запал",fuseHint:"Катающиеся бомбы. Наехал — взрыв, тап — перепрыгнуть",hop:"Перепрыгнуть",hopHint:"Пробел / тап по шару",won:"Этаж пройден",chest:"Сундук",chestCoins:"В сундуке монеты",chestSkin:"В сундуке скин",equipped:"Надето",buy:"Купить",owned:"Есть",fromChest:"Из сундука",earned:"Монет за забег",helpTitle:"Как это работает",helpRedTitle:"Ярко-красные плиты",helpRed:"Это опасность, не декор. Если шар приземляется на ярко-красную плиту — партия сразу кончается. Крути кольца так, чтобы падать в отверстие или на обычные цветные платформы.",helpClassicTitle:"Классика",helpClassic:"Бесконечный колодец. За каждый этаж — 100 очков. Если пролетаешь несколько этажей подряд, шар вспыхивает, разгоняется и выбивает 200, 300… прямо на себе.",helpFuseTitle:"Режим «Запал»",helpFuse:"По кольцам катаются чёрные шарики-бомбы с искрой. Это живые препятствия, не плиты. Наехал — взрыв. Перепрыгни бомбу тапом по шару, кнопкой внизу или пробелом, пока она катится под тобой.",helpShopTitle:"Монеты и скины",helpShop:"Монеты капают за игру, этажи и достижения. В магазине скины с узорами и материалами, не просто смена цвета. Сундук после этажей даёт более простые скины.",slotBall:"Шар",slotPlatform:"Платформы",slotPole:"Шест",slotBg:"Фон",combo:"серия"},en:{title:"The Well",eyebrow:"experiment",lead:"Spin the rings and drop the ball through the gap. Classic is still here — plus new modes and a shop.",best:"Best",play:"Play",hint:"Swipe left-right or use arrows / A D",over:"Game over",score:"Score",continue:"Continue · ad",again:"Play again",menu:"Menu",sound:"Sound",coins:"Coins",shop:"Shop",howto:"How to play",back:"Back",classic:"Classic",classicHint:"The endless run people liked",floors:"Floors",easy:"Easy",normal:"Normal",hard:"Hard",fuse:"Fuse",fuseHint:"Rolling bomb balls. Touch one and it explodes; tap to hop over",hop:"Vault",hopHint:"Space / tap the ball",won:"Floor cleared",chest:"Chest",chestCoins:"Coins in the chest",chestSkin:"A skin in the chest",equipped:"Equipped",buy:"Buy",owned:"Owned",fromChest:"From a chest",earned:"Coins this run",helpTitle:"How it works",helpRedTitle:"Bright-red tiles",helpRed:"They are danger, not decoration. Landing on a bright-red tile ends the run. Spin the rings so the ball falls through a gap or onto ordinary colored platforms.",helpClassicTitle:"Classic",helpClassic:"Endless well. Each floor is 100 points. Fall through several floors in one drop and the ball flares, speeds up, and pops 200, 300… right on itself.",helpFuseTitle:"Fuse mode",helpFuse:"Black sparking bomb balls roll around the rings. They are moving obstacles, not tiles. Touch one and it explodes. Hop over a rolling bomb by tapping the ball, the button, or Space while it passes under you.",helpShopTitle:"Coins and skins",helpShop:"Coins come from play, floors, and achievements. Shop skins have patterns and materials, not just a color swap. Chests after staged floors give simpler skins.",slotBall:"Ball",slotPlatform:"Platforms",slotPole:"Pole",slotBg:"Background",combo:"combo"}},sc={ru:1,be:1,kk:1,uk:1,uz:1};function ac(i){return sc[i]?"ru":"en"}function oc(i){const e=fa[i]||fa.ru;document.documentElement.lang=i==="en"?"en":"ru",document.title=e.title,document.querySelectorAll("[data-i18n]").forEach(n=>{const r=n.getAttribute("data-i18n"),s=e[r];s&&(n.textContent=s)});const t=document.getElementById("btn-sound");return t&&t.setAttribute("aria-label",e.sound),e}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="160",lc=0,da=1,cc=2,sl=1,uc=2,an=3,En=0,bt=1,Kt=2,xn=0,ci=1,pa=2,ma=3,ga=4,hc=5,Dn=100,fc=101,dc=102,_a=103,va=104,pc=200,mc=201,gc=202,_c=203,As=204,ws=205,vc=206,xc=207,Mc=208,Sc=209,yc=210,Ec=211,bc=212,Tc=213,Ac=214,wc=0,Rc=1,Cc=2,yr=3,Lc=4,Pc=5,Dc=6,Uc=7,qs=0,Ic=1,Nc=2,Mn=0,Fc=1,Oc=2,Bc=3,zc=4,Gc=5,Hc=6,al=300,hi=301,fi=302,Rs=303,Cs=304,Lr=306,Ii=1e3,Gt=1001,Ls=1002,yt=1003,xa=1004,Hr=1005,Ut=1006,Vc=1007,Ni=1008,Sn=1009,kc=1010,Wc=1011,Ys=1012,ol=1013,gn=1014,_n=1015,Fi=1016,ll=1017,cl=1018,Nn=1020,Xc=1021,Ht=1023,qc=1024,Yc=1025,Fn=1026,di=1027,Jc=1028,ul=1029,Kc=1030,hl=1031,fl=1033,Vr=33776,kr=33777,Wr=33778,Xr=33779,Ma=35840,Sa=35841,ya=35842,Ea=35843,dl=36196,ba=37492,Ta=37496,Aa=37808,wa=37809,Ra=37810,Ca=37811,La=37812,Pa=37813,Da=37814,Ua=37815,Ia=37816,Na=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,qr=36492,Ga=36494,Ha=36495,Zc=36283,Va=36284,ka=36285,Wa=36286,pl=3e3,On=3001,$c=3200,jc=3201,ml=0,Qc=1,It="",mt="srgb",ln="srgb-linear",Js="display-p3",Pr="display-p3-linear",Er="linear",je="srgb",br="rec709",Tr="p3",kn=7680,Xa=519,eu=512,tu=513,nu=514,gl=515,iu=516,ru=517,su=518,au=519,qa=35044,Ya="300 es",Ps=1035,on=2e3,Ar=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,Ds=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function ou(i,e){return(i%e+e)%e}function Jr(i,e,t){return(1-t)*i+t*e}function Ja(i){return(i&i-1)===0&&i!==0}function Us(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],_=r[0],p=r[3],d=r[6],v=r[1],M=r[4],x=r[7],R=r[2],E=r[5],w=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*p+a*M+l*E,s[6]=o*d+a*x+l*w,s[1]=c*_+u*v+f*R,s[4]=c*p+u*M+f*E,s[7]=c*d+u*x+f*w,s[2]=h*_+m*v+g*R,s[5]=h*p+m*M+g*E,s[8]=h*d+m*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new We;function _l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lu(){const i=wr("canvas");return i.style.display="block",i}const Ka={};function Ri(i){i in Ka||(Ka[i]=!0,console.warn(i))}const Za=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$a=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[ln]:{transfer:Er,primaries:br,toReference:i=>i,fromReference:i=>i},[mt]:{transfer:je,primaries:br,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Pr]:{transfer:Er,primaries:Tr,toReference:i=>i.applyMatrix3($a),fromReference:i=>i.applyMatrix3(Za)},[Js]:{transfer:je,primaries:Tr,toReference:i=>i.convertSRGBToLinear().applyMatrix3($a),fromReference:i=>i.applyMatrix3(Za).convertLinearToSRGB()}},cu=new Set([ln,Pr]),Ke={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Yi[e].toReference,r=Yi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yi[i].primaries},getTransfer:function(i){return i===It?Er:Yi[i].transfer}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=wr("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uu=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($r(r[o].image)):s.push($r(r[o]))}else s=$r(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;class Tt extends gi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Gt,r=Gt,s=Ut,o=Ni,a=Ht,l=Sn,c=Tt.DEFAULT_ANISOTROPY,u=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=_i(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===On?mt:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?On:pl}set encoding(e){Ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===On?mt:It}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=al;Tt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(m+1)/2,R=(d+1)/2,E=(u+h)/4,w=(f+_)/4,z=(g+p)/4;return M>x&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=w/n):x>R?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=E/r,s=z/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=w/s,r=z/s),this.set(n,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===On?mt:It),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ml extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class du extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==m||u!==g){let p=1-a;const d=l*h+c*m+u*g+f*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const R=Math.sqrt(M),E=Math.atan2(R,d*v);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const x=a*v;if(l=l*p+h*x,c=c*p+m*x,u=u*p+g*x,f=f*p+_*x,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new D,ja=new Gi;class Hi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(s,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),Ki.subVectors(this.max,yi),Xn.subVectors(e.a,yi),qn.subVectors(e.b,yi),Yn.subVectors(e.c,yi),un.subVectors(qn,Xn),hn.subVectors(Yn,qn),An.subVectors(Xn,Yn);let t=[0,-un.z,un.y,0,-hn.z,hn.y,0,-An.z,An.y,un.z,0,-un.x,hn.z,0,-hn.x,An.z,0,-An.x,-un.y,un.x,0,-hn.y,hn.x,0,-An.y,An.x,0];return!Qr(t,Xn,qn,Yn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Qr(t,Xn,qn,Yn,Ki))?!1:(Zi.crossVectors(un,hn),t=[Zi.x,Zi.y,Zi.z],Qr(t,Xn,qn,Yn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new D,new D,new D,new D,new D,new D,new D,new D],Nt=new D,Ji=new Hi,Xn=new D,qn=new D,Yn=new D,un=new D,hn=new D,An=new D,yi=new D,Ki=new D,Zi=new D,wn=new D;function Qr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wn.fromArray(i,s);const a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),u=n.dot(wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pu=new Hi,Ei=new D,es=new D;class Dr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ei,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(es)),this.expandByPoint(Ei.copy(e.center).sub(es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new D,ts=new D,$i=new D,fn=new D,ns=new D,ji=new D,is=new D;class Sl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ts.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(ts);const s=e.distanceTo(t)*.5,o=-this.direction.dot($i),a=fn.dot(this.direction),l=-fn.dot($i),c=fn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ts).addScaledVector($i,h),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),r=en.dot(en)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,r,s){ns.subVectors(t,e),ji.subVectors(n,e),is.crossVectors(ns,ji);let o=this.direction.dot(is),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,e);const l=a*this.direction.dot(ji.crossVectors(fn,ji));if(l<0)return null;const c=a*this.direction.dot(ns.cross(fn));if(c<0||l+c>o)return null;const u=-a*fn.dot(is);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,o,a,l,c,u,f,h,m,g,_,p){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,m,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,f,h,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mu,e,gu)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),dn.crossVectors(n,wt),dn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),dn.crossVectors(n,wt)),dn.normalize(),Qi.crossVectors(wt,dn),r[0]=dn.x,r[4]=Qi.x,r[8]=wt.x,r[1]=dn.y,r[5]=Qi.y,r[9]=wt.y,r[2]=dn.z,r[6]=Qi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],v=n[3],M=n[7],x=n[11],R=n[15],E=r[0],w=r[4],z=r[8],y=r[12],A=r[1],U=r[5],V=r[9],$=r[13],P=r[2],I=r[6],H=r[10],Z=r[14],K=r[3],q=r[7],j=r[11],se=r[15];return s[0]=o*E+a*A+l*P+c*K,s[4]=o*w+a*U+l*I+c*q,s[8]=o*z+a*V+l*H+c*j,s[12]=o*y+a*$+l*Z+c*se,s[1]=u*E+f*A+h*P+m*K,s[5]=u*w+f*U+h*I+m*q,s[9]=u*z+f*V+h*H+m*j,s[13]=u*y+f*$+h*Z+m*se,s[2]=g*E+_*A+p*P+d*K,s[6]=g*w+_*U+p*I+d*q,s[10]=g*z+_*V+p*H+d*j,s[14]=g*y+_*$+p*Z+d*se,s[3]=v*E+M*A+x*P+R*K,s[7]=v*w+M*U+x*I+R*q,s[11]=v*z+M*V+x*H+R*j,s[15]=v*y+M*$+x*Z+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*m-n*l*m)+_*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],v=f*p*c-_*h*c+_*l*m-a*p*m-f*l*d+a*h*d,M=g*h*c-u*p*c-g*l*m+o*p*m+u*l*d-o*h*d,x=u*_*c-g*f*c+g*a*m-o*_*m-u*a*d+o*f*d,R=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,E=t*v+n*M+r*x+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(_*h*s-f*p*s-_*r*m+n*p*m+f*r*d-n*h*d)*w,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*d+n*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*m-n*l*m)*w,e[4]=M*w,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*d+t*h*d)*w,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*w,e[8]=x*w,e[9]=(g*f*s-u*_*s-g*n*m+t*_*m+u*n*d-t*f*d)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*d+t*a*d)*w,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*w,e[12]=R*w,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*p+t*f*p)*w,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,_=o*u,p=o*f,d=a*f,v=l*c,M=l*u,x=l*f,R=n.x,E=n.y,w=n.z;return r[0]=(1-(_+d))*R,r[1]=(m+x)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(m-x)*E,r[5]=(1-(h+d))*E,r[6]=(p+v)*E,r[7]=0,r[8]=(g+M)*w,r[9]=(p-v)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Jn.set(r[0],r[1],r[2]).length();const o=Jn.set(r[4],r[5],r[6]).length(),a=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,u=1/o,f=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=on){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let m,g;if(a===on)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ar)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=on){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,m=(n+r)*u;let g,_;if(a===on)g=(o+s)*f,_=-2*f;else if(a===Ar)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new D,Ft=new it,mu=new D(0,0,0),gu=new D(1,1,1),dn=new D,Qi=new D,wt=new D,Qa=new it,eo=new Gi;class Ur{constructor(e=0,t=0,n=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _u=0;const to=new D,Kn=new Gi,tn=new it,er=new D,bi=new D,vu=new D,xu=new Gi,no=new D(1,0,0),io=new D(0,1,0),ro=new D(0,0,1),Mu={type:"added"},Su={type:"removed"};class dt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new D,t=new Ur,n=new Gi,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new We}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(ro,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(bi,er,this.up):tn.lookAt(er,bi,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(tn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new D(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new D,nn=new D,rs=new D,rn=new D,Zn=new D,$n=new D,so=new D,ss=new D,as=new D,os=new D;let tr=!1;class zt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),nn.subVectors(n,t),rs.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(nn),l=Ot.dot(rs),c=nn.dot(nn),u=nn.dot(rs),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,r,s,o,a,l){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(a,rn.z),l)}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),nn.subVectors(e,t),Ot.cross(nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ot.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Zn.subVectors(r,n),$n.subVectors(s,n),ss.subVectors(e,n);const l=Zn.dot(ss),c=$n.dot(ss);if(l<=0&&c<=0)return t.copy(n);as.subVectors(e,r);const u=Zn.dot(as),f=$n.dot(as);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Zn,o);os.subVectors(e,s);const m=Zn.dot(os),g=$n.dot(os);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($n,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return so.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(so,a);const d=1/(p+_+h);return o=_*d,a=h*d,t.copy(n).addScaledVector(Zn,o).addScaledVector($n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function ls(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=ou(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ls(o,s,e+1/3),this.g=ls(o,s,e),this.b=ls(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ke.fromWorkingColorSpace(vt.copy(this),e),Math.round(xt(vt.r*255,0,255))*65536+Math.round(xt(vt.g*255,0,255))*256+Math.round(xt(vt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,s=vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=mt){Ke.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(nr);const n=Jr(pn.h,nr.h,t),r=Jr(pn.s,nr.s,t),s=Jr(pn.l,nr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new qe;qe.NAMES=El;let yu=0;class vi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=ci,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=As,this.blendDst=ws,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==As&&(n.blendSrc=this.blendSrc),this.blendDst!==ws&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zn extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new D,ir=new me;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class bl extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tl extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eu=0;const Dt=new it,cs=new dt,jn=new D,Rt=new Hi,Ti=new Hi,ft=new D;class Lt extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?Tl:bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return cs.lookAt(e),cs.updateMatrix(),this.applyMatrix4(cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Rt.min,Ti.min),Rt.expandByPoint(ft),ft.addVectors(Rt.max,Ti.max),Rt.expandByPoint(ft)):(Rt.expandByPoint(Ti.min),Rt.expandByPoint(Ti.max))}Rt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ft.fromBufferAttribute(a,c),l&&(jn.fromBufferAttribute(e,c),ft.add(jn)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new D,u[A]=new D;const f=new D,h=new D,m=new D,g=new me,_=new me,p=new me,d=new D,v=new D;function M(A,U,V){f.fromArray(r,A*3),h.fromArray(r,U*3),m.fromArray(r,V*3),g.fromArray(o,A*2),_.fromArray(o,U*2),p.fromArray(o,V*2),h.sub(f),m.sub(f),_.sub(g),p.sub(g);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar($),v.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar($),c[A].add(d),c[U].add(d),c[V].add(d),u[A].add(v),u[U].add(v),u[V].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,U=x.length;A<U;++A){const V=x[A],$=V.start,P=V.count;for(let I=$,H=$+P;I<H;I+=3)M(n[I+0],n[I+1],n[I+2])}const R=new D,E=new D,w=new D,z=new D;function y(A){w.fromArray(s,A*3),z.copy(w);const U=c[A];R.copy(U),R.sub(w.multiplyScalar(w.dot(U))).normalize(),E.crossVectors(z,U);const $=E.dot(u[A])<0?-1:1;l[A*4]=R.x,l[A*4+1]=R.y,l[A*4+2]=R.z,l[A*4+3]=$}for(let A=0,U=x.length;A<U;++A){const V=x[A],$=V.start,P=V.count;for(let I=$,H=$+P;I<H;I+=3)y(n[I+0]),y(n[I+1]),y(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[m++]}return new Vt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new it,Rn=new Sl,rr=new Dr,oo=new D,Qn=new D,ei=new D,ti=new D,us=new D,sr=new D,ar=new me,or=new me,lr=new me,lo=new D,co=new D,uo=new D,cr=new D,ur=new D;class at extends dt{constructor(e=new Lt,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(us.fromBufferAttribute(f,e),o?sr.addScaledVector(us,u):sr.addScaledVector(us.sub(t),u))}t.add(sr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),Rn.copy(e.ray).recast(e.near),!(rr.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(rr,oo)===null||Rn.origin.distanceToSquared(oo)>(e.far-e.near)**2))&&(ao.copy(s).invert(),Rn.copy(e.ray).applyMatrix4(ao),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,R=M;x<R;x+=3){const E=a.getX(x),w=a.getX(x+1),z=a.getX(x+2);r=hr(this,d,e,n,c,u,f,E,w,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=a.getX(p),M=a.getX(p+1),x=a.getX(p+2);r=hr(this,o,e,n,c,u,f,v,M,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,R=M;x<R;x+=3){const E=x,w=x+1,z=x+2;r=hr(this,d,e,n,c,u,f,E,w,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=p,M=p+1,x=p+2;r=hr(this,o,e,n,c,u,f,v,M,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function bu(i,e,t,n,r,s,o,a){let l;if(e.side===bt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===En,a),l===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ur);return c<t.near||c>t.far?null:{distance:c,point:ur.clone(),object:i}}function hr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Qn),i.getVertexPosition(l,ei),i.getVertexPosition(c,ti);const u=bu(i,e,t,n,Qn,ei,ti,cr);if(u){r&&(ar.fromBufferAttribute(r,a),or.fromBufferAttribute(r,l),lr.fromBufferAttribute(r,c),u.uv=zt.getInterpolation(cr,Qn,ei,ti,ar,or,lr,new me)),s&&(ar.fromBufferAttribute(s,a),or.fromBufferAttribute(s,l),lr.fromBufferAttribute(s,c),u.uv1=zt.getInterpolation(cr,Qn,ei,ti,ar,or,lr,new me),u.uv2=u.uv1),o&&(lo.fromBufferAttribute(o,a),co.fromBufferAttribute(o,l),uo.fromBufferAttribute(o,c),u.normal=zt.getInterpolation(cr,Qn,ei,ti,lo,co,uo,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};zt.getNormal(Qn,ei,ti,f.normal),u.face=f}return u}class Vi extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function g(_,p,d,v,M,x,R,E,w,z,y){const A=x/w,U=R/z,V=x/2,$=R/2,P=E/2,I=w+1,H=z+1;let Z=0,K=0;const q=new D;for(let j=0;j<H;j++){const se=j*U-$;for(let ae=0;ae<I;ae++){const X=ae*A-V;q[_]=X*v,q[p]=se*M,q[d]=P,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[d]=E>0?1:-1,u.push(q.x,q.y,q.z),f.push(ae/w),f.push(1-j/z),Z+=1}}for(let j=0;j<z;j++)for(let se=0;se<w;se++){const ae=h+se+I*j,X=h+se+I*(j+1),ne=h+(se+1)+I*(j+1),he=h+(se+1)+I*j;l.push(ae,X,he),l.push(X,ne,he),K+=6}a.addGroup(m,K,y),m+=K,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Tu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Al(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}const Au={clone:pi,merge:St};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wl extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Cu extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new Ct(ni,ii,e,t);s.layers=this.layers,this.add(s);const o=new Ct(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new Ct(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new Ct(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new Ct(ni,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rl extends Tt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===On?mt:It),this.texture=new Rl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:xn});s.uniforms.tEquirect.value=t;const o=new at(r,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Ut),new Cu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const hs=new D,Pu=new D,Du=new We;class Ln{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=hs.subVectors(n,t).cross(Pu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Du.getNormalMatrix(e),r=this.coplanarPoint(hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Dr,fr=new D;class Ks{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],v=r[13],M=r[14],x=r[15];if(n[0].setComponents(l-s,h-c,p-m,x-d).normalize(),n[1].setComponents(l+s,h+c,p+m,x+d).normalize(),n[2].setComponents(l+o,h+u,p+g,x+v).normalize(),n[3].setComponents(l-o,h-u,p-g,x-v).normalize(),n[4].setComponents(l-a,h-f,p-_,x-M).normalize(),t===on)n[5].setComponents(l+a,h+f,p+_,x+M).normalize();else if(t===Ar)n[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(e){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fr.x=r.normal.x>0?e.max.x:e.min.x,fr.y=r.normal.y>0?e.max.y:e.min.y,fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Uu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const h=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];t?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Zs extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const v=d*h-o;for(let M=0;M<c;M++){const x=M*f-s;g.push(x,-v,0),_.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const M=v+c*d,x=v+c*(d+1),R=v+1+c*(d+1),E=v+1+c*d;m.push(M,x,E),m.push(x,R,E)}this.setIndex(m),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`#ifdef USE_BATCHING
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
#endif`,ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ju=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,rh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uh="gl_FragColor = linearToOutputTexel( gl_FragColor );",hh=`
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
}`,fh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ah=`uniform bool receiveShadow;
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
#endif`,wh=`#ifdef USE_ENVMAP
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
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Uh=`struct PhysicalMaterial {
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
}`,Ih=`
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wh=`#if defined( USE_POINTS_UV )
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
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
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
#endif`,$h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Hf=`#if DEPTH_PACKING == 3200
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
}`,Vf=`#define DISTANCE
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
}`,kf=`#define DISTANCE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,jf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,ed=`#define NORMAL
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
}`,td=`#define NORMAL
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
}`,nd=`#define PHONG
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
}`,id=`#define PHONG
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
}`,rd=`#define STANDARD
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
}`,sd=`#define STANDARD
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
}`,ad=`#define TOON
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
}`,od=`#define TOON
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
}`,ld=`uniform float size;
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
}`,cd=`uniform vec3 diffuse;
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
}`,ud=`#include <common>
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
}`,hd=`uniform vec3 color;
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
}`,fd=`uniform float rotation;
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
}`,dd=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Iu,alphahash_pars_fragment:Nu,alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:Gu,aomap_pars_fragment:Hu,batching_pars_vertex:Vu,batching_vertex:ku,begin_vertex:Wu,beginnormal_vertex:Xu,bsdfs:qu,iridescence_fragment:Yu,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:ju,color_fragment:Qu,color_pars_fragment:eh,color_pars_vertex:th,color_vertex:nh,common:ih,cube_uv_reflection_fragment:rh,defaultnormal_vertex:sh,displacementmap_pars_vertex:ah,displacementmap_vertex:oh,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,colorspace_fragment:uh,colorspace_pars_fragment:hh,envmap_fragment:fh,envmap_common_pars_fragment:dh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:wh,envmap_vertex:gh,fog_vertex:_h,fog_pars_vertex:vh,fog_fragment:xh,fog_pars_fragment:Mh,gradientmap_pars_fragment:Sh,lightmap_fragment:yh,lightmap_pars_fragment:Eh,lights_lambert_fragment:bh,lights_lambert_pars_fragment:Th,lights_pars_begin:Ah,lights_toon_fragment:Rh,lights_toon_pars_fragment:Ch,lights_phong_fragment:Lh,lights_phong_pars_fragment:Ph,lights_physical_fragment:Dh,lights_physical_pars_fragment:Uh,lights_fragment_begin:Ih,lights_fragment_maps:Nh,lights_fragment_end:Fh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:Bh,logdepthbuf_pars_vertex:zh,logdepthbuf_vertex:Gh,map_fragment:Hh,map_pars_fragment:Vh,map_particle_fragment:kh,map_particle_pars_fragment:Wh,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:qh,morphcolor_vertex:Yh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:$h,normal_fragment_maps:jh,normal_pars_fragment:Qh,normal_pars_vertex:ef,normal_vertex:tf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:af,iridescence_pars_fragment:of,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:uf,project_vertex:hf,dithering_fragment:ff,dithering_pars_fragment:df,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:_f,shadowmap_vertex:vf,shadowmask_pars_fragment:xf,skinbase_vertex:Mf,skinning_pars_vertex:Sf,skinning_vertex:yf,skinnormal_vertex:Ef,specularmap_fragment:bf,specularmap_pars_fragment:Tf,tonemapping_fragment:Af,tonemapping_pars_fragment:wf,transmission_fragment:Rf,transmission_pars_fragment:Cf,uv_pars_fragment:Lf,uv_pars_vertex:Pf,uv_vertex:Df,worldpos_vertex:Uf,background_vert:If,background_frag:Nf,backgroundCube_vert:Ff,backgroundCube_frag:Of,cube_vert:Bf,cube_frag:zf,depth_vert:Gf,depth_frag:Hf,distanceRGBA_vert:Vf,distanceRGBA_frag:kf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:Yf,meshbasic_vert:Jf,meshbasic_frag:Kf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:jf,meshmatcap_frag:Qf,meshnormal_vert:ed,meshnormal_frag:td,meshphong_vert:nd,meshphong_frag:id,meshphysical_vert:rd,meshphysical_frag:sd,meshtoon_vert:ad,meshtoon_frag:od,points_vert:ld,points_frag:cd,shadow_vert:ud,shadow_frag:hd,sprite_vert:fd,sprite_frag:dd},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Yt={basic:{uniforms:St([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:St([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:St([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:St([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:St([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:St([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:St([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:St([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:St([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:St([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:St([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:St([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:St([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Yt.physical={uniforms:St([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const dr={r:0,b:0,g:0};function pd(i,e,t,n,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(p,d){let v=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,l):M&&M.isColor&&(_(M,1),v=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Lr)?(u===void 0&&(u=new at(new Vi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:pi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==je,(f!==M||h!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new at(new Zs(2,2),new Gn({name:"BackgroundMaterial",uniforms:pi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==je,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(dr,Al(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function md(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(P,I,H,Z,K){let q=!1;if(o){const j=_(Z,H,I);c!==j&&(c=j,m(c.object)),q=d(P,Z,H,K),q&&v(P,Z,H,K)}else{const j=I.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==j)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=j,q=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,z(P,I,H,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,I,H){const Z=H.wireframe===!0;let K=a[P.id];K===void 0&&(K={},a[P.id]=K);let q=K[I.id];q===void 0&&(q={},K[I.id]=q);let j=q[Z];return j===void 0&&(j=p(h()),q[Z]=j),j}function p(P){const I=[],H=[],Z=[];for(let K=0;K<r;K++)I[K]=0,H[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:Z,object:P,attributes:{},index:null}}function d(P,I,H,Z){const K=c.attributes,q=I.attributes;let j=0;const se=H.getAttributes();for(const ae in se)if(se[ae].location>=0){const ne=K[ae];let he=q[ae];if(he===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;j++}return c.attributesNum!==j||c.index!==Z}function v(P,I,H,Z){const K={},q=I.attributes;let j=0;const se=H.getAttributes();for(const ae in se)if(se[ae].location>=0){let ne=q[ae];ne===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),K[ae]=he,j++}c.attributes=K,c.attributesNum=j,c.index=Z}function M(){const P=c.newAttributes;for(let I=0,H=P.length;I<H;I++)P[I]=0}function x(P){R(P,0)}function R(P,I){const H=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;H[P]=1,Z[P]===0&&(i.enableVertexAttribArray(P),Z[P]=1),K[P]!==I&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),K[P]=I)}function E(){const P=c.newAttributes,I=c.enabledAttributes;for(let H=0,Z=I.length;H<Z;H++)I[H]!==P[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function w(P,I,H,Z,K,q,j){j===!0?i.vertexAttribIPointer(P,I,H,K,q):i.vertexAttribPointer(P,I,H,Z,K,q)}function z(P,I,H,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const K=Z.attributes,q=H.getAttributes(),j=I.defaultAttributeValues;for(const se in q){const ae=q[se];if(ae.location>=0){let X=K[se];if(X===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const ne=X.normalized,he=X.itemSize,Ee=t.get(X);if(Ee===void 0)continue;const ve=Ee.buffer,be=Ee.type,Le=Ee.bytesPerElement,Se=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||X.gpuType===ol);if(X.isInterleavedBufferAttribute){const Ie=X.data,L=Ie.stride,oe=X.offset;if(Ie.isInstancedInterleavedBuffer){for(let J=0;J<ae.locationSize;J++)R(ae.location+J,Ie.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let J=0;J<ae.locationSize;J++)x(ae.location+J);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let J=0;J<ae.locationSize;J++)w(ae.location+J,he/ae.locationSize,be,ne,L*Le,(oe+he/ae.locationSize*J)*Le,Se)}else{if(X.isInstancedBufferAttribute){for(let Ie=0;Ie<ae.locationSize;Ie++)R(ae.location+Ie,X.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ie=0;Ie<ae.locationSize;Ie++)x(ae.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ie=0;Ie<ae.locationSize;Ie++)w(ae.location+Ie,he/ae.locationSize,be,ne,he*Le,he/ae.locationSize*Ie*Le,Se)}}else if(j!==void 0){const ne=j[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(ae.location,ne);break;case 3:i.vertexAttrib3fv(ae.location,ne);break;case 4:i.vertexAttrib4fv(ae.location,ne);break;default:i.vertexAttrib1fv(ae.location,ne)}}}}E()}function y(){V();for(const P in a){const I=a[P];for(const H in I){const Z=I[H];for(const K in Z)g(Z[K].object),delete Z[K];delete I[H]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const H in I){const Z=I[H];for(const K in Z)g(Z[K].object),delete Z[K];delete I[H]}delete a[P.id]}function U(P){for(const I in a){const H=a[I];if(H[P.id]===void 0)continue;const Z=H[P.id];for(const K in Z)g(Z[K].object),delete Z[K];delete H[P.id]}}function V(){$(),u=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:$,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function gd(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let m,g;if(r)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function _d(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,x=o||e.has("OES_texture_float"),R=M&&x,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:R,maxSamples:E}}function vd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ln,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,M=v*4;let x=d.clippingState||null;l.value=x,x=u(g,h,M,m);for(let R=0;R!==M;++R)x[R]=t[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,x=m;M!==_;++M,x+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function xd(i){let e=new WeakMap;function t(o,a){return a===Rs?o.mapping=hi:a===Cs&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rs||a===Cs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lu(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ll extends wl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=4,ho=[.125,.215,.35,.446,.526,.582],Un=20,fs=new Ll,fo=new qe;let ds=null,ps=0,ms=0;const Pn=(1+Math.sqrt(5))/2,ri=1/Pn,po=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Pn,ri),new D(0,Pn,-ri),new D(ri,0,Pn),new D(-ri,0,Pn),new D(Pn,ri,0),new D(-Pn,ri,0)];class mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ds=this._renderer.getRenderTarget(),ps=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds,ps,ms),e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget(),ps=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Fi,format:Ht,colorSpace:ln,depthBuffer:!1},r=go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Md(s)),this._blurMaterial=Sd(s,e,t)}return r}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,n,r){const a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(fo),u.toneMapping=Mn,u.autoClear=!1;const m=new zn({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new at(new Vi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(fo),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;pr(r,v*M,d>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hi||e.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=po[(r-1)%po.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new at(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Un-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Un;p>Un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Un}`);const d=[];let v=0;for(let w=0;w<Un;++w){const z=w/_,y=Math.exp(-z*z/2);d.push(y),w===0?v+=y:w<p&&(v+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const x=this._sizeLods[r],R=3*x*(r>M-ai?r-M+ai:0),E=4*(this._cubeSize-x);pr(t,R,E,3*x,2*x),l.setRenderTarget(t),l.render(f,fs)}}function Md(i){const e=[],t=[],n=[];let r=i;const s=i-ai+1+ho.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ai?l=ho[o-i+ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,d=1,v=new Float32Array(_*g*m),M=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,z=E>2?0:-1,y=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];v.set(y,_*g*E),M.set(h,p*g*E);const A=[E,E,E,E,E,E];x.set(A,d*g*E)}const R=new Lt;R.setAttribute("position",new Vt(v,_)),R.setAttribute("uv",new Vt(M,p)),R.setAttribute("faceIndex",new Vt(x,d)),e.push(R),r>ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function go(i,e,t){const n=new Bn(i,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sd(i,e,t){const n=new Float32Array(Un),r=new D(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$s(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function _o(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function vo(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function $s(){return`

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
	`}function yd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rs||l===Cs,u=l===hi||l===fi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new mo(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new mo(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ed(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bd(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let M=0,x=v.length;M<x;M+=3){const R=v[M+0],E=v[M+1],w=v[M+2];h.push(R,E,E,w,w,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const R=M+0,E=M+1,w=M+2;h.push(R,E,E,w,w,R)}}else return;const p=new(_l(h)?Tl:bl)(h,1);p.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Td(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(s,g,a,m*l),t.update(g,s,1)}function f(m,g,_){if(_===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*l,_),t.update(g,s,_)}function h(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Ad(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wd(i,e){return i[0]-e[0]}function Rd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cd(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let I=function(){$.dispose(),s.delete(u),u.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let y=0;M===!0&&(y=1),x===!0&&(y=2),R===!0&&(y=3);let A=u.attributes.position.count*y,U=1;A>e.maxTextureSize&&(U=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const V=new Float32Array(A*U*4*_),$=new Ml(V,A,U,_);$.type=_n,$.needsUpdate=!0;const P=y*4;for(let H=0;H<_;H++){const Z=E[H],K=w[H],q=z[H],j=A*U*4*H;for(let se=0;se<Z.count;se++){const ae=se*P;M===!0&&(o.fromBufferAttribute(Z,se),V[j+ae+0]=o.x,V[j+ae+1]=o.y,V[j+ae+2]=o.z,V[j+ae+3]=0),x===!0&&(o.fromBufferAttribute(K,se),V[j+ae+4]=o.x,V[j+ae+5]=o.y,V[j+ae+6]=o.z,V[j+ae+7]=0),R===!0&&(o.fromBufferAttribute(q,se),V[j+ae+8]=o.x,V[j+ae+9]=o.y,V[j+ae+10]=o.z,V[j+ae+11]=q.itemSize===4?o.w:1)}}p={count:_,texture:$,size:new me(A,U)},s.set(u,p),u.addEventListener("dispose",I)}let d=0;for(let M=0;M<h.length;M++)d+=h[M];const v=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const R=_[x];R[0]=x,R[1]=h[x]}_.sort(Rd);for(let x=0;x<8;x++)x<g&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(wd);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const R=a[x],E=R[0],w=R[1];E!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+x)!==p[E]&&u.setAttribute("morphTarget"+x,p[E]),d&&u.getAttribute("morphNormal"+x)!==d[E]&&u.setAttribute("morphNormal"+x,d[E]),r[x]=w,v+=w):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const M=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Ld(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Pl extends Tt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Fn,u!==Fn&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fn&&(n=gn),n===void 0&&u===di&&(n=Nn),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dl=new Tt,Ul=new Pl(1,1);Ul.compareFunction=gl;const Il=new Ml,Nl=new du,Fl=new Rl,xo=[],Mo=[],So=new Float32Array(16),yo=new Float32Array(9),Eo=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xo[r];if(s===void 0&&(s=new Float32Array(r),xo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ir(i,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function Nd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Eo.set(n),i.uniformMatrix2fv(this.addr,!1,Eo),ct(t,n)}}function Fd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;yo.set(n),i.uniformMatrix3fv(this.addr,!1,yo),ct(t,n)}}function Od(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;So.set(n),i.uniformMatrix4fv(this.addr,!1,So),ct(t,n)}}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function Vd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function Wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function Xd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function qd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ul:Dl;t.setTexture2D(e||s,r)}function Yd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nl,r)}function Jd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fl,r)}function Kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Il,r)}function Zd(i){switch(i){case 5126:return Pd;case 35664:return Dd;case 35665:return Ud;case 35666:return Id;case 35674:return Nd;case 35675:return Fd;case 35676:return Od;case 5124:case 35670:return Bd;case 35667:case 35671:return zd;case 35668:case 35672:return Gd;case 35669:case 35673:return Hd;case 5125:return Vd;case 36294:return kd;case 36295:return Wd;case 36296:return Xd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return Jd;case 36289:case 36303:case 36311:case 36292:return Kd}}function $d(i,e){i.uniform1fv(this.addr,e)}function jd(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function Qd(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function ep(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function tp(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function np(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ip(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rp(i,e){i.uniform1iv(this.addr,e)}function sp(i,e){i.uniform2iv(this.addr,e)}function ap(i,e){i.uniform3iv(this.addr,e)}function op(i,e){i.uniform4iv(this.addr,e)}function lp(i,e){i.uniform1uiv(this.addr,e)}function cp(i,e){i.uniform2uiv(this.addr,e)}function up(i,e){i.uniform3uiv(this.addr,e)}function hp(i,e){i.uniform4uiv(this.addr,e)}function fp(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dl,s[o])}function dp(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nl,s[o])}function pp(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fl,s[o])}function mp(i,e,t){const n=this.cache,r=e.length,s=Ir(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Il,s[o])}function gp(i){switch(i){case 5126:return $d;case 35664:return jd;case 35665:return Qd;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class _p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zd(t.type)}}class vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gp(t.type)}}class xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const gs=/(\w+)(\])?(\[|\.)?/g;function bo(i,e){i.seq.push(e),i.map[e.id]=e}function Mp(i,e,t){const n=i.name,r=n.length;for(gs.lastIndex=0;;){const s=gs.exec(n),o=gs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bo(t,c===void 0?new _p(a,i,e):new vp(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new xp(a),bo(t,f)),t=f}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function To(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sp=37297;let yp=0;function Ep(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function bp(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===Tr&&t===br?n="LinearDisplayP3ToLinearSRGB":e===br&&t===Tr&&(n="LinearSRGBToLinearDisplayP3"),i){case ln:case Pr:return[n,"LinearTransferOETF"];case mt:case Js:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ao(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ep(i.getShaderSource(e),o)}else return r}function Tp(i,e){const t=bp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ap(i,e){let t;switch(e){case Fc:t="Linear";break;case Oc:t="Reinhard";break;case Bc:t="OptimizedCineon";break;case zc:t="ACESFilmic";break;case Hc:t="AgX";break;case Gc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oi).join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oi).join(`
`)}function Cp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function oi(i){return i!==""}function wo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ro(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(i){return i.replace(Pp,Up)}const Dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Up(i,e){let t=He[e];if(t===void 0){const n=Dp.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Is(t)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(i){return i.replace(Ip,Np)}function Np(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Op(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case fi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function zp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ic:e="ENVMAP_BLENDING_MIX";break;case Nc:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fp(t),c=Op(t),u=Bp(t),f=zp(t),h=Gp(t),m=t.isWebGL2?"":wp(t),g=Rp(t),_=Cp(s),p=r.createProgram();let d,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(oi).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(oi).join(`
`),v.length>0&&(v+=`
`)):(d=[Lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oi).join(`
`),v=[m,Lo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?He.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Tp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oi).join(`
`)),o=Is(o),o=wo(o,t),o=Ro(o,t),a=Is(a),a=wo(a,t),a=Ro(a,t),o=Co(o),a=Co(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=M+d+o,R=M+v+a,E=To(r,r.VERTEX_SHADER,x),w=To(r,r.FRAGMENT_SHADER,R);r.attachShader(p,E),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(V){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(E).trim(),I=r.getShaderInfoLog(w).trim();let H=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,E,w);else{const K=Ao(r,E,"vertex"),q=Ao(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+K+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||I==="")&&(Z=!1);Z&&(V.diagnostics={runnable:H,programLog:$,vertexShader:{log:P,prefix:d},fragmentShader:{log:I,prefix:v}})}r.deleteShader(E),r.deleteShader(w),y=new Mr(r,p),A=Lp(r,p)}let y;this.getUniforms=function(){return y===void 0&&z(this),y};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(p,Sp)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=w,this}let Vp=0;class kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wp(e),t.set(e,n)),n}}class Wp{constructor(e){this.id=Vp++,this.code=e,this.usedTimes=0}}function Xp(i,e,t,n,r,s,o){const a=new yl,l=new kp,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,A,U,V,$){const P=V.fog,I=$.geometry,H=y.isMeshStandardMaterial?V.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),K=Z&&Z.mapping===Lr?Z.image.height:null,q=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=j!==void 0?j.length:0;let ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let X,ne,he,Ee;if(q){const ut=Yt[q];X=ut.vertexShader,ne=ut.fragmentShader}else X=y.vertexShader,ne=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const ve=i.getRenderTarget(),be=$.isInstancedMesh===!0,Le=$.isBatchedMesh===!0,Se=!!y.map,Ie=!!y.matcap,L=!!Z,oe=!!y.aoMap,J=!!y.lightMap,re=!!y.bumpMap,Y=!!y.normalMap,Te=!!y.displacementMap,ge=!!y.emissiveMap,b=!!y.metalnessMap,S=!!y.roughnessMap,F=y.anisotropy>0,te=y.clearcoat>0,ie=y.iridescence>0,ee=y.sheen>0,ye=y.transmission>0,pe=F&&!!y.anisotropyMap,xe=te&&!!y.clearcoatMap,Re=te&&!!y.clearcoatNormalMap,Oe=te&&!!y.clearcoatRoughnessMap,Q=ie&&!!y.iridescenceMap,Xe=ie&&!!y.iridescenceThicknessMap,Be=ee&&!!y.sheenColorMap,Ne=ee&&!!y.sheenRoughnessMap,O=!!y.specularMap,k=!!y.specularColorMap,ue=!!y.specularIntensityMap,_e=ye&&!!y.transmissionMap,De=ye&&!!y.thicknessMap,Ce=!!y.gradientMap,le=!!y.alphaMap,C=y.alphaTest>0,ce=!!y.alphaHash,fe=!!y.extensions,Pe=!!I.attributes.uv1,we=!!I.attributes.uv2,Je=!!I.attributes.uv3;let Ye=Mn;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:u,shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ne,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Le,instancing:be,instancingColor:be&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ln,map:Se,matcap:Ie,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:K,aoMap:oe,lightMap:J,bumpMap:re,normalMap:Y,displacementMap:h&&Te,emissiveMap:ge,normalMapObjectSpace:Y&&y.normalMapType===Qc,normalMapTangentSpace:Y&&y.normalMapType===ml,metalnessMap:b,roughnessMap:S,anisotropy:F,anisotropyMap:pe,clearcoat:te,clearcoatMap:xe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Oe,iridescence:ie,iridescenceMap:Q,iridescenceThicknessMap:Xe,sheen:ee,sheenColorMap:Be,sheenRoughnessMap:Ne,specularMap:O,specularColorMap:k,specularIntensityMap:ue,transmission:ye,transmissionMap:_e,thicknessMap:De,gradientMap:Ce,opaque:y.transparent===!1&&y.blending===ci,alphaMap:le,alphaTest:C,alphaHash:ce,combine:y.combine,mapUv:Se&&_(y.map.channel),aoMapUv:oe&&_(y.aoMap.channel),lightMapUv:J&&_(y.lightMap.channel),bumpMapUv:re&&_(y.bumpMap.channel),normalMapUv:Y&&_(y.normalMap.channel),displacementMapUv:Te&&_(y.displacementMap.channel),emissiveMapUv:ge&&_(y.emissiveMap.channel),metalnessMapUv:b&&_(y.metalnessMap.channel),roughnessMapUv:S&&_(y.roughnessMap.channel),anisotropyMapUv:pe&&_(y.anisotropyMap.channel),clearcoatMapUv:xe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(y.sheenRoughnessMap.channel),specularMapUv:O&&_(y.specularMap.channel),specularColorMapUv:k&&_(y.specularColorMap.channel),specularIntensityMapUv:ue&&_(y.specularIntensityMap.channel),transmissionMapUv:_e&&_(y.transmissionMap.channel),thicknessMapUv:De&&_(y.thicknessMap.channel),alphaMapUv:le&&_(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Y||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:we,vertexUv3s:Je,pointsUvs:$.isPoints===!0&&!!I.attributes.uv&&(Se||le),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:fe&&y.extensions.derivatives===!0,extensionFragDepth:fe&&y.extensions.fragDepth===!0,extensionDrawBuffers:fe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)A.push(U),A.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(v(A,y),M(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function x(y){const A=g[y.type];let U;if(A){const V=Yt[A];U=Au.clone(V.uniforms)}else U=y.uniforms;return U}function R(y,A){let U;for(let V=0,$=c.length;V<$;V++){const P=c[V];if(P.cacheKey===A){U=P,++U.usedTimes;break}}return U===void 0&&(U=new Hp(i,A,y,s),c.push(U)),U}function E(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:z}}function qp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Do(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,g,_,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=p),e++,d}function a(f,h,m,g,_,p){const d=o(f,h,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,g,_,p){const d=o(f,h,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Yp),n.length>1&&n.sort(h||Po),r.length>1&&r.sort(h||Po)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Jp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Do,i.set(n,[o])):r>=s.length?(o=new Do,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Zp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $p=0;function jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qp(i,e){const t=new Kp,n=Zp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new it,a=new it;function l(u,f){let h=0,m=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,p=0,d=0,v=0,M=0,x=0,R=0,E=0,w=0,z=0,y=0;u.sort(jp);const A=f===!0?Math.PI:1;for(let V=0,$=u.length;V<$;V++){const P=u[V],I=P.color,H=P.intensity,Z=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*H*A,m+=I.g*H*A,g+=I.b*H*A;else if(P.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(P.sh.coefficients[q],H);y++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const j=P.shadow,se=n.get(P);se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,r.directionalShadow[_]=se,r.directionalShadowMap[_]=K,r.directionalShadowMatrix[_]=P.shadow.matrix,x++}r.directional[_]=q,_++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(I).multiplyScalar(H*A),q.distance=Z,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,r.spot[d]=q;const j=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,j.updateMatrices(P),P.castShadow&&z++),r.spotLightMatrix[d]=j.matrix,P.castShadow){const se=n.get(P);se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,r.spotShadow[d]=se,r.spotShadowMap[d]=K,E++}d++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(I).multiplyScalar(H),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=q,v++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*A),q.distance=P.distance,q.decay=P.decay,P.castShadow){const j=P.shadow,se=n.get(P);se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,se.shadowCameraNear=j.camera.near,se.shadowCameraFar=j.camera.far,r.pointShadow[p]=se,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=P.shadow.matrix,R++}r.point[p]=q,p++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(H*A),q.groundColor.copy(P.groundColor).multiplyScalar(H*A),r.hemi[M]=q,M++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==_||U.pointLength!==p||U.spotLength!==d||U.rectAreaLength!==v||U.hemiLength!==M||U.numDirectionalShadows!==x||U.numPointShadows!==R||U.numSpotShadows!==E||U.numSpotMaps!==w||U.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=E+w-z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=y,U.directionalLength=_,U.pointLength=p,U.spotLength=d,U.rectAreaLength=v,U.hemiLength=M,U.numDirectionalShadows=x,U.numPointShadows=R,U.numSpotShadows=E,U.numSpotMaps=w,U.numLightProbes=y,r.version=$p++)}function c(u,f){let h=0,m=0,g=0,_=0,p=0;const d=f.matrixWorldInverse;for(let v=0,M=u.length;v<M;v++){const x=u[v];if(x.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),h++}else if(x.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(x.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(x.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),m++}else if(x.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Uo(i,e){const t=new Qp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function em(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Uo(i,e),t.set(s,[l])):o>=a.length?(l=new Uo(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class tm extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nm extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
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
}`;function sm(i,e,t){let n=new Ks;const r=new me,s=new me,o=new Qe,a=new tm({depthPacking:jc}),l=new nm,c={},u=t.maxTextureSize,f={[En]:bt,[bt]:En,[Kt]:Kt},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:im,fragmentShader:rm}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let d=this.type;this.render=function(E,w,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),A=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(xn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=d!==an&&this.type===an,P=d===an&&this.type!==an;for(let I=0,H=E.length;I<H;I++){const Z=E[I],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const q=K.getFrameExtents();if(r.multiply(q),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,K.mapSize.y=s.y)),K.map===null||$===!0||P===!0){const se=this.type!==an?{minFilter:yt,magFilter:yt}:{};K.map!==null&&K.map.dispose(),K.map=new Bn(r.x,r.y,se),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const j=K.getViewportCount();for(let se=0;se<j;se++){const ae=K.getViewport(se);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),V.viewport(o),K.updateMatrices(Z,se),n=K.getFrustum(),x(w,z,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===an&&v(K,z),K.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,A,U)};function v(E,w){const z=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,z,h,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,z,m,_,null)}function M(E,w,z,y){let A=null;const U=z.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)A=U;else if(A=z.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=A.uuid,$=w.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let I=P[$];I===void 0&&(I=A.clone(),P[$]=I,w.addEventListener("dispose",R)),A=I}if(A.visible=w.visible,A.wireframe=w.wireframe,y===an?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const V=i.properties.get(A);V.light=z}return A}function x(E,w,z,y,A){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===an)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld);const $=e.update(E),P=E.material;if(Array.isArray(P)){const I=$.groups;for(let H=0,Z=I.length;H<Z;H++){const K=I[H],q=P[K.materialIndex];if(q&&q.visible){const j=M(E,q,y,A);E.onBeforeShadow(i,E,w,z,$,j,K),i.renderBufferDirect(z,null,$,j,E,K),E.onAfterShadow(i,E,w,z,$,j,K)}}}else if(P.visible){const I=M(E,P,y,A);E.onBeforeShadow(i,E,w,z,$,I,null),i.renderBufferDirect(z,null,$,I,E,null),E.onAfterShadow(i,E,w,z,$,I,null)}}const V=E.children;for(let $=0,P=V.length;$<P;$++)x(V[$],w,z,y,A)}function R(E){E.target.removeEventListener("dispose",R);for(const z in c){const y=c[z],A=E.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function am(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const ce=new Qe;let fe=null;const Pe=new Qe(0,0,0,0);return{setMask:function(we){fe!==we&&!C&&(i.colorMask(we,we,we,we),fe=we)},setLocked:function(we){C=we},setClear:function(we,Je,Ye,ot,ut){ut===!0&&(we*=ot,Je*=ot,Ye*=ot),ce.set(we,Je,Ye,ot),Pe.equals(ce)===!1&&(i.clearColor(we,Je,Ye,ot),Pe.copy(ce))},reset:function(){C=!1,fe=null,Pe.set(-1,0,0,0)}}}function s(){let C=!1,ce=null,fe=null,Pe=null;return{setTest:function(we){we?Le(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(we){ce!==we&&!C&&(i.depthMask(we),ce=we)},setFunc:function(we){if(fe!==we){switch(we){case wc:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Pc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=we}},setLocked:function(we){C=we},setClear:function(we){Pe!==we&&(i.clearDepth(we),Pe=we)},reset:function(){C=!1,ce=null,fe=null,Pe=null}}}function o(){let C=!1,ce=null,fe=null,Pe=null,we=null,Je=null,Ye=null,ot=null,ut=null;return{setTest:function(Ze){C||(Ze?Le(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!C&&(i.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,Mt,kt){(fe!==Ze||Pe!==Mt||we!==kt)&&(i.stencilFunc(Ze,Mt,kt),fe=Ze,Pe=Mt,we=kt)},setOp:function(Ze,Mt,kt){(Je!==Ze||Ye!==Mt||ot!==kt)&&(i.stencilOp(Ze,Mt,kt),Je=Ze,Ye=Mt,ot=kt)},setLocked:function(Ze){C=Ze},setClear:function(Ze){ut!==Ze&&(i.clearStencil(Ze),ut=Ze)},reset:function(){C=!1,ce=null,fe=null,Pe=null,we=null,Je=null,Ye=null,ot=null,ut=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,M=null,x=null,R=null,E=null,w=null,z=null,y=new qe(0,0,0),A=0,U=!1,V=null,$=null,P=null,I=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=q>=2);let se=null,ae={};const X=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),he=new Qe().fromArray(X),Ee=new Qe().fromArray(ne);function ve(C,ce,fe,Pe){const we=new Uint8Array(4),Je=i.createTexture();i.bindTexture(C,Je),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<fe;Ye++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ce+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Je}const be={};be[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(yr),ge(!1),b(da),Le(i.CULL_FACE),Y(xn);function Le(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Se(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ie(C,ce){return m[C]!==ce?(i.bindFramebuffer(C,ce),m[C]=ce,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ce),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function L(C,ce){let fe=_,Pe=!1;if(C)if(fe=g.get(ce),fe===void 0&&(fe=[],g.set(ce,fe)),C.isWebGLMultipleRenderTargets){const we=C.texture;if(fe.length!==we.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Ye=we.length;Je<Ye;Je++)fe[Je]=i.COLOR_ATTACHMENT0+Je;fe.length=we.length,Pe=!0}}else fe[0]!==i.COLOR_ATTACHMENT0&&(fe[0]=i.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==i.BACK&&(fe[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function oe(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const J={[Dn]:i.FUNC_ADD,[fc]:i.FUNC_SUBTRACT,[dc]:i.FUNC_REVERSE_SUBTRACT};if(n)J[_a]=i.MIN,J[va]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(J[_a]=C.MIN_EXT,J[va]=C.MAX_EXT)}const re={[pc]:i.ZERO,[mc]:i.ONE,[gc]:i.SRC_COLOR,[As]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[vc]:i.DST_ALPHA,[_c]:i.ONE_MINUS_SRC_COLOR,[ws]:i.ONE_MINUS_SRC_ALPHA,[Sc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[bc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(C,ce,fe,Pe,we,Je,Ye,ot,ut,Ze){if(C===xn){d===!0&&(Se(i.BLEND),d=!1);return}if(d===!1&&(Le(i.BLEND),d=!0),C!==hc){if(C!==v||Ze!==U){if((M!==Dn||E!==Dn)&&(i.blendEquation(i.FUNC_ADD),M=Dn,E=Dn),Ze)switch(C){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}x=null,R=null,w=null,z=null,y.set(0,0,0),A=0,v=C,U=Ze}return}we=we||ce,Je=Je||fe,Ye=Ye||Pe,(ce!==M||we!==E)&&(i.blendEquationSeparate(J[ce],J[we]),M=ce,E=we),(fe!==x||Pe!==R||Je!==w||Ye!==z)&&(i.blendFuncSeparate(re[fe],re[Pe],re[Je],re[Ye]),x=fe,R=Pe,w=Je,z=Ye),(ot.equals(y)===!1||ut!==A)&&(i.blendColor(ot.r,ot.g,ot.b,ut),y.copy(ot),A=ut),v=C,U=!1}function Te(C,ce){C.side===Kt?Se(i.CULL_FACE):Le(i.CULL_FACE);let fe=C.side===bt;ce&&(fe=!fe),ge(fe),C.blending===ci&&C.transparent===!1?Y(xn):Y(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Pe=C.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(C){V!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),V=C)}function b(C){C!==lc?(Le(i.CULL_FACE),C!==$&&(C===da?i.cullFace(i.BACK):C===cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),$=C}function S(C){C!==P&&(K&&i.lineWidth(C),P=C)}function F(C,ce,fe){C?(Le(i.POLYGON_OFFSET_FILL),(I!==ce||H!==fe)&&(i.polygonOffset(ce,fe),I=ce,H=fe)):Se(i.POLYGON_OFFSET_FILL)}function te(C){C?Le(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function ie(C){C===void 0&&(C=i.TEXTURE0+Z-1),se!==C&&(i.activeTexture(C),se=C)}function ee(C,ce,fe){fe===void 0&&(se===null?fe=i.TEXTURE0+Z-1:fe=se);let Pe=ae[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ae[fe]=Pe),(Pe.type!==C||Pe.texture!==ce)&&(se!==fe&&(i.activeTexture(fe),se=fe),i.bindTexture(C,ce||be[C]),Pe.type=C,Pe.texture=ce)}function ye(){const C=ae[se];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){he.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),he.copy(C))}function _e(C){Ee.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ee.copy(C))}function De(C,ce){let fe=f.get(ce);fe===void 0&&(fe=new WeakMap,f.set(ce,fe));let Pe=fe.get(C);Pe===void 0&&(Pe=i.getUniformBlockIndex(ce,C.name),fe.set(C,Pe))}function Ce(C,ce){const Pe=f.get(ce).get(C);u.get(ce)!==Pe&&(i.uniformBlockBinding(ce,Pe,C.__bindingPointIndex),u.set(ce,Pe))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ae={},m={},g=new WeakMap,_=[],p=null,d=!1,v=null,M=null,x=null,R=null,E=null,w=null,z=null,y=new qe(0,0,0),A=0,U=!1,V=null,$=null,P=null,I=null,H=null,he.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Se,bindFramebuffer:Ie,drawBuffers:L,useProgram:oe,setBlending:Y,setMaterial:Te,setFlipSided:ge,setCullFace:b,setLineWidth:S,setPolygonOffset:F,setScissorTest:te,activeTexture:ie,bindTexture:ee,unbindTexture:ye,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:O,texImage3D:k,updateUBOMapping:De,uniformBlockBinding:Ce,texStorage2D:Be,texStorage3D:Ne,texSubImage2D:Re,texSubImage3D:Oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Xe,scissor:ue,viewport:_e,reset:le}}function om(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return m?new OffscreenCanvas(b,S):wr("canvas")}function _(b,S,F,te){let ie=1;if((b.width>te||b.height>te)&&(ie=te/Math.max(b.width,b.height)),ie<1||S===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const ee=S?Us:Math.floor,ye=ee(ie*b.width),pe=ee(ie*b.height);f===void 0&&(f=g(ye,pe));const xe=F?g(ye,pe):f;return xe.width=ye,xe.height=pe,xe.getContext("2d").drawImage(b,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+pe+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Ja(b.width)&&Ja(b.height)}function d(b){return a?!1:b.wrapS!==Gt||b.wrapT!==Gt||b.minFilter!==yt&&b.minFilter!==Ut}function v(b,S){return b.generateMipmaps&&S&&b.minFilter!==yt&&b.minFilter!==Ut}function M(b){i.generateMipmap(b)}function x(b,S,F,te,ie=!1){if(a===!1)return S;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=S;if(S===i.RED&&(F===i.FLOAT&&(ee=i.R32F),F===i.HALF_FLOAT&&(ee=i.R16F),F===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ee=i.R8UI),F===i.UNSIGNED_SHORT&&(ee=i.R16UI),F===i.UNSIGNED_INT&&(ee=i.R32UI),F===i.BYTE&&(ee=i.R8I),F===i.SHORT&&(ee=i.R16I),F===i.INT&&(ee=i.R32I)),S===i.RG&&(F===i.FLOAT&&(ee=i.RG32F),F===i.HALF_FLOAT&&(ee=i.RG16F),F===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RGBA){const ye=ie?Er:Ke.getTransfer(te);F===i.FLOAT&&(ee=i.RGBA32F),F===i.HALF_FLOAT&&(ee=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ee=ye===je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(b,S,F){return v(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==yt&&b.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function E(b){return b===yt||b===xa||b===Hr?i.NEAREST:i.LINEAR}function w(b){const S=b.target;S.removeEventListener("dispose",w),y(S),S.isVideoTexture&&u.delete(S)}function z(b){const S=b.target;S.removeEventListener("dispose",z),U(S)}function y(b){const S=n.get(b);if(S.__webglInit===void 0)return;const F=b.source,te=h.get(F);if(te){const ie=te[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&A(b),Object.keys(te).length===0&&h.delete(F)}n.remove(b)}function A(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const F=b.source,te=h.get(F);delete te[S.__cacheKey],o.memory.textures--}function U(b){const S=b.texture,F=n.get(b),te=n.get(S);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(F.__webglFramebuffer[ie]))for(let ee=0;ee<F.__webglFramebuffer[ie].length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[ie][ee]);else i.deleteFramebuffer(F.__webglFramebuffer[ie]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ie])}else{if(Array.isArray(F.__webglFramebuffer))for(let ie=0;ie<F.__webglFramebuffer.length;ie++)i.deleteFramebuffer(F.__webglFramebuffer[ie]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ie=0;ie<F.__webglColorRenderbuffer.length;ie++)F.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ie]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,ee=S.length;ie<ee;ie++){const ye=n.get(S[ie]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(b)}let V=0;function $(){V=0}function P(){const b=V;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),V+=1,b}function I(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function H(b,S){const F=n.get(b);if(b.isVideoTexture&&Te(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,b,S);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function Z(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){he(F,b,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function K(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){he(F,b,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function q(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Ee(F,b,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const j={[Ii]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Ls]:i.MIRRORED_REPEAT},se={[yt]:i.NEAREST,[xa]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Vc]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},ae={[eu]:i.NEVER,[au]:i.ALWAYS,[tu]:i.LESS,[gl]:i.LEQUAL,[nu]:i.EQUAL,[su]:i.GEQUAL,[iu]:i.GREATER,[ru]:i.NOTEQUAL};function X(b,S,F){if(F?(i.texParameteri(b,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,j[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,se[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,se[S.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Gt||S.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,E(S.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==yt&&S.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===yt||S.minFilter!==Hr&&S.minFilter!==Ni||S.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ne(b,S){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",w));const te=S.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const ee=I(S);if(ee!==b.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[ee].usedTimes++;const ye=ie[b.__cacheKey];ye!==void 0&&(ie[b.__cacheKey].usedTimes--,ye.usedTimes===0&&A(S)),b.__cacheKey=ee,b.__webglTexture=ie[ee].texture}return F}function he(b,S,F){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const ie=ne(b,S),ee=S.source;t.bindTexture(te,b.__webglTexture,i.TEXTURE0+F);const ye=n.get(ee);if(ee.version!==ye.__version||ie===!0){t.activeTexture(i.TEXTURE0+F);const pe=Ke.getPrimaries(Ke.workingColorSpace),xe=S.colorSpace===It?null:Ke.getPrimaries(S.colorSpace),Re=S.colorSpace===It||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Oe=d(S)&&p(S.image)===!1;let Q=_(S.image,Oe,!1,r.maxTextureSize);Q=ge(S,Q);const Xe=p(Q)||a,Be=s.convert(S.format,S.colorSpace);let Ne=s.convert(S.type),O=x(S.internalFormat,Be,Ne,S.colorSpace,S.isVideoTexture);X(te,S,Xe);let k;const ue=S.mipmaps,_e=a&&S.isVideoTexture!==!0&&O!==dl,De=ye.__version===void 0||ie===!0,Ce=R(S,Q,Xe);if(S.isDepthTexture)O=i.DEPTH_COMPONENT,a?S.type===_n?O=i.DEPTH_COMPONENT32F:S.type===gn?O=i.DEPTH_COMPONENT24:S.type===Nn?O=i.DEPTH24_STENCIL8:O=i.DEPTH_COMPONENT16:S.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fn&&O===i.DEPTH_COMPONENT&&S.type!==Ys&&S.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=gn,Ne=s.convert(S.type)),S.format===di&&O===i.DEPTH_COMPONENT&&(O=i.DEPTH_STENCIL,S.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Nn,Ne=s.convert(S.type))),De&&(_e?t.texStorage2D(i.TEXTURE_2D,1,O,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,O,Q.width,Q.height,0,Be,Ne,null));else if(S.isDataTexture)if(ue.length>0&&Xe){_e&&De&&t.texStorage2D(i.TEXTURE_2D,Ce,O,ue[0].width,ue[0].height);for(let le=0,C=ue.length;le<C;le++)k=ue[le],_e?t.texSubImage2D(i.TEXTURE_2D,le,0,0,k.width,k.height,Be,Ne,k.data):t.texImage2D(i.TEXTURE_2D,le,O,k.width,k.height,0,Be,Ne,k.data);S.generateMipmaps=!1}else _e?(De&&t.texStorage2D(i.TEXTURE_2D,Ce,O,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Be,Ne,Q.data)):t.texImage2D(i.TEXTURE_2D,0,O,Q.width,Q.height,0,Be,Ne,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){_e&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,O,ue[0].width,ue[0].height,Q.depth);for(let le=0,C=ue.length;le<C;le++)k=ue[le],S.format!==Ht?Be!==null?_e?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,k.width,k.height,Q.depth,Be,k.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,O,k.width,k.height,Q.depth,0,k.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,k.width,k.height,Q.depth,Be,Ne,k.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,O,k.width,k.height,Q.depth,0,Be,Ne,k.data)}else{_e&&De&&t.texStorage2D(i.TEXTURE_2D,Ce,O,ue[0].width,ue[0].height);for(let le=0,C=ue.length;le<C;le++)k=ue[le],S.format!==Ht?Be!==null?_e?t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,k.width,k.height,Be,k.data):t.compressedTexImage2D(i.TEXTURE_2D,le,O,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(i.TEXTURE_2D,le,0,0,k.width,k.height,Be,Ne,k.data):t.texImage2D(i.TEXTURE_2D,le,O,k.width,k.height,0,Be,Ne,k.data)}else if(S.isDataArrayTexture)_e?(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,O,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Be,Ne,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,O,Q.width,Q.height,Q.depth,0,Be,Ne,Q.data);else if(S.isData3DTexture)_e?(De&&t.texStorage3D(i.TEXTURE_3D,Ce,O,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Be,Ne,Q.data)):t.texImage3D(i.TEXTURE_3D,0,O,Q.width,Q.height,Q.depth,0,Be,Ne,Q.data);else if(S.isFramebufferTexture){if(De)if(_e)t.texStorage2D(i.TEXTURE_2D,Ce,O,Q.width,Q.height);else{let le=Q.width,C=Q.height;for(let ce=0;ce<Ce;ce++)t.texImage2D(i.TEXTURE_2D,ce,O,le,C,0,Be,Ne,null),le>>=1,C>>=1}}else if(ue.length>0&&Xe){_e&&De&&t.texStorage2D(i.TEXTURE_2D,Ce,O,ue[0].width,ue[0].height);for(let le=0,C=ue.length;le<C;le++)k=ue[le],_e?t.texSubImage2D(i.TEXTURE_2D,le,0,0,Be,Ne,k):t.texImage2D(i.TEXTURE_2D,le,O,Be,Ne,k);S.generateMipmaps=!1}else _e?(De&&t.texStorage2D(i.TEXTURE_2D,Ce,O,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Ne,Q)):t.texImage2D(i.TEXTURE_2D,0,O,Be,Ne,Q);v(S,Xe)&&M(te),ye.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ee(b,S,F){if(S.image.length!==6)return;const te=ne(b,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const ee=n.get(ie);if(ie.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const ye=Ke.getPrimaries(Ke.workingColorSpace),pe=S.colorSpace===It?null:Ke.getPrimaries(S.colorSpace),xe=S.colorSpace===It||ye===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!Re&&!Oe?Q[le]=_(S.image[le],!1,!0,r.maxCubemapSize):Q[le]=Oe?S.image[le].image:S.image[le],Q[le]=ge(S,Q[le]);const Xe=Q[0],Be=p(Xe)||a,Ne=s.convert(S.format,S.colorSpace),O=s.convert(S.type),k=x(S.internalFormat,Ne,O,S.colorSpace),ue=a&&S.isVideoTexture!==!0,_e=ee.__version===void 0||te===!0;let De=R(S,Xe,Be);X(i.TEXTURE_CUBE_MAP,S,Be);let Ce;if(Re){ue&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,k,Xe.width,Xe.height);for(let le=0;le<6;le++){Ce=Q[le].mipmaps;for(let C=0;C<Ce.length;C++){const ce=Ce[C];S.format!==Ht?Ne!==null?ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C,0,0,ce.width,ce.height,Ne,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C,k,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C,0,0,ce.width,ce.height,Ne,O,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C,k,ce.width,ce.height,0,Ne,O,ce.data)}}}else{Ce=S.mipmaps,ue&&_e&&(Ce.length>0&&De++,t.texStorage2D(i.TEXTURE_CUBE_MAP,De,k,Q[0].width,Q[0].height));for(let le=0;le<6;le++)if(Oe){ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Q[le].width,Q[le].height,Ne,O,Q[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,k,Q[le].width,Q[le].height,0,Ne,O,Q[le].data);for(let C=0;C<Ce.length;C++){const fe=Ce[C].image[le].image;ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C+1,0,0,fe.width,fe.height,Ne,O,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C+1,k,fe.width,fe.height,0,Ne,O,fe.data)}}else{ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ne,O,Q[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,k,Ne,O,Q[le]);for(let C=0;C<Ce.length;C++){const ce=Ce[C];ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C+1,0,0,Ne,O,ce.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,C+1,k,Ne,O,ce.image[le])}}}v(S,Be)&&M(i.TEXTURE_CUBE_MAP),ee.__version=ie.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ve(b,S,F,te,ie,ee){const ye=s.convert(F.format,F.colorSpace),pe=s.convert(F.type),xe=x(F.internalFormat,ye,pe,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Oe=Math.max(1,S.width>>ee),Q=Math.max(1,S.height>>ee);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,xe,Oe,Q,S.depth,0,ye,pe,null):t.texImage2D(ie,ee,xe,Oe,Q,0,ye,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Y(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ie,n.get(F).__webglTexture,0,re(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ie,n.get(F).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(b,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||Y(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===_n?te=i.DEPTH_COMPONENT32F:ie.type===gn&&(te=i.DEPTH_COMPONENT24));const ee=re(S);Y(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,te,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,te,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const te=re(S);F&&Y(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):Y(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<te.length;ie++){const ee=te[ie],ye=s.convert(ee.format,ee.colorSpace),pe=s.convert(ee.type),xe=x(ee.internalFormat,ye,pe,ee.colorSpace),Re=re(S);F&&Y(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,xe,S.width,S.height):Y(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ie=re(S);if(S.depthTexture.format===Fn)Y(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===di)Y(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Se(b){const S=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,b)}else if(F){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),be(S.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),be(S.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(b,S,F){const te=n.get(b);S!==void 0&&ve(te.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Se(b)}function L(b){const S=b.texture,F=n.get(b),te=n.get(S);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,o.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,ye=p(b)||a;if(ie){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let xe=0;xe<S.mipmaps.length;xe++)F.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else F.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)F.__webglFramebuffer[pe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const pe=b.texture;for(let xe=0,Re=pe.length;xe<Re;xe++){const Oe=n.get(pe[xe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Y(b)===!1){const pe=ee?S:[S];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){const Re=pe[xe];F.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);const Oe=s.convert(Re.format,Re.colorSpace),Q=s.convert(Re.type),Xe=x(Re.internalFormat,Oe,Q,Re.colorSpace,b.isXRRenderTarget===!0),Be=re(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),be(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,ye);for(let pe=0;pe<6;pe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ve(F.__webglFramebuffer[pe][xe],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else ve(F.__webglFramebuffer[pe],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(S,ye)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const pe=b.texture;for(let xe=0,Re=pe.length;xe<Re;xe++){const Oe=pe[xe],Q=n.get(Oe);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),X(i.TEXTURE_2D,Oe,ye),ve(F.__webglFramebuffer,b,Oe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),v(Oe,ye)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?pe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,te.__webglTexture),X(pe,S,ye),a&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)ve(F.__webglFramebuffer[xe],b,S,i.COLOR_ATTACHMENT0,pe,xe);else ve(F.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,pe,0);v(S,ye)&&M(pe),t.unbindTexture()}b.depthBuffer&&Se(b)}function oe(b){const S=p(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ie=F.length;te<ie;te++){const ee=F[te];if(v(ee,S)){const ye=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(ee).__webglTexture;t.bindTexture(ye,pe),M(ye),t.unbindTexture()}}}function J(b){if(a&&b.samples>0&&Y(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,te=b.height;let ie=i.COLOR_BUFFER_BIT;const ee=[],ye=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(b),xe=b.isWebGLMultipleRenderTargets===!0;if(xe)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){ee.push(i.COLOR_ATTACHMENT0+Re),b.depthBuffer&&ee.push(ye);const Oe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Oe===!1&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),xe){const Q=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const Oe=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function re(b){return Math.min(r.maxSamples,b.samples)}function Y(b){const S=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function ge(b,S){const F=b.colorSpace,te=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ps||F!==ln&&F!==It&&(Ke.getTransfer(F)===je?a===!1?e.has("EXT_sRGB")===!0&&te===Ht?(b.format=Ps,b.minFilter=Ut,b.generateMipmaps=!1):S=vl.sRGBToLinear(S):(te!==Ht||ie!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Ie,this.setupRenderTarget=L,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Y}function lm(i,e,t){const n=t.isWebGL2;function r(s,o=It){let a;const l=Ke.getTransfer(o);if(s===Sn)return i.UNSIGNED_BYTE;if(s===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(s===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===kc)return i.BYTE;if(s===Wc)return i.SHORT;if(s===Ys)return i.UNSIGNED_SHORT;if(s===ol)return i.INT;if(s===gn)return i.UNSIGNED_INT;if(s===_n)return i.FLOAT;if(s===Fi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xc)return i.ALPHA;if(s===Ht)return i.RGBA;if(s===qc)return i.LUMINANCE;if(s===Yc)return i.LUMINANCE_ALPHA;if(s===Fn)return i.DEPTH_COMPONENT;if(s===di)return i.DEPTH_STENCIL;if(s===Ps)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jc)return i.RED;if(s===ul)return i.RED_INTEGER;if(s===Kc)return i.RG;if(s===hl)return i.RG_INTEGER;if(s===fl)return i.RGBA_INTEGER;if(s===Vr||s===kr||s===Wr||s===Xr)if(l===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ma||s===Sa||s===ya||s===Ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ma)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ba||s===Ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ba)return l===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ta)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Aa||s===wa||s===Ra||s===Ca||s===La||s===Pa||s===Da||s===Ua||s===Ia||s===Na||s===Fa||s===Oa||s===Ba||s===za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Aa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ra)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ca)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===La)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Da)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ua)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ia)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Na)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ba)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===za)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qr||s===Ga||s===Ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qr)return l===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ga)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ha)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zc||s===Va||s===ka||s===Wa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Va)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ka)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class cm extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class In extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(um)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hm extends gi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const v=[],M=[],x=new me;let R=null;const E=new Ct;E.layers.enable(1),E.viewport=new Qe;const w=new Ct;w.layers.enable(2),w.viewport=new Qe;const z=[E,w],y=new cm;y.layers.enable(1),y.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];return ne===void 0&&(ne=new _s,v[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];return ne===void 0&&(ne=new _s,v[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=v[X];return ne===void 0&&(ne=new _s,v[X]=ne),ne.getHandSpace()};function V(X){const ne=M.indexOf(X.inputSource);if(ne===-1)return;const he=v[ne];he!==void 0&&(he.update(X.inputSource,X.frame,c||o),he.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",P);for(let X=0;X<v.length;X++){const ne=M[X];ne!==null&&(M[X]=null,v[X].disconnect(ne))}A=null,U=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,he=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?di:Fn,he=_.stencil?Nn:gn);const ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Bn(h.textureWidth,h.textureHeight,{format:Ht,type:Sn,depthTexture:new Pl(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(d);be.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(X){for(let ne=0;ne<X.removed.length;ne++){const he=X.removed[ne],Ee=M.indexOf(he);Ee>=0&&(M[Ee]=null,v[Ee].disconnect(he))}for(let ne=0;ne<X.added.length;ne++){const he=X.added[ne];let Ee=M.indexOf(he);if(Ee===-1){for(let be=0;be<v.length;be++)if(be>=M.length){M.push(he),Ee=be;break}else if(M[be]===null){M[be]=he,Ee=be;break}if(Ee===-1)break}const ve=v[Ee];ve&&ve.connect(he)}}const I=new D,H=new D;function Z(X,ne,he){I.setFromMatrixPosition(ne.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);const Ee=I.distanceTo(H),ve=ne.projectionMatrix.elements,be=he.projectionMatrix.elements,Le=ve[14]/(ve[10]-1),Se=ve[14]/(ve[10]+1),Ie=(ve[9]+1)/ve[5],L=(ve[9]-1)/ve[5],oe=(ve[8]-1)/ve[0],J=(be[8]+1)/be[0],re=Le*oe,Y=Le*J,Te=Ee/(-oe+J),ge=Te*-oe;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ge),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=Le+Te,S=Se+Te,F=re-ge,te=Y+(Ee-ge),ie=Ie*Se/S*b,ee=L*Se/S*b;X.projectionMatrix.makePerspective(F,te,ie,ee,b,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.near=w.near=E.near=X.near,y.far=w.far=E.far=X.far,(A!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,U=y.far);const ne=X.parent,he=y.cameras;K(y,ne);for(let Ee=0;Ee<he.length;Ee++)K(he[Ee],ne);he.length===2?Z(y,E,w):y.projectionMatrix.copy(E.projectionMatrix),q(X,y,ne)};function q(X,ne,he){he===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ds*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let j=null;function se(X,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let Ee=!1;he.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let ve=0;ve<he.length;ve++){const be=he[ve];let Le=null;if(m!==null)Le=m.getViewport(be);else{const Ie=f.getViewSubImage(h,be);Le=Ie.viewport,ve===0&&(e.setRenderTargetTextures(d,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(d))}let Se=z[ve];Se===void 0&&(Se=new Ct,Se.layers.enable(ve),Se.viewport=new Qe,z[ve]=Se),Se.matrix.fromArray(be.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(be.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Le.x,Le.y,Le.width,Le.height),ve===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(Se)}}for(let he=0;he<v.length;he++){const Ee=M[he],ve=v[he];Ee!==null&&ve!==void 0&&ve.update(Ee,ne,c||o)}j&&j(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ae=new Cl;ae.setAnimationLoop(se),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function fm(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Al(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,v,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",p));const R=M.program;n.updateUBOMapping(v,R);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const M=f();v.__bindingPointIndex=M;const x=i.createBuffer(),R=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const M=r[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=x.length;E<w;E++){const z=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,A=z.length;y<A;y++){const U=z[y];if(m(U,E,y,R)===!0){const V=U.__offset,$=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let I=0;I<$.length;I++){const H=$[I],Z=_(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+P,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,M,x,R){const E=v.value,w=M+"_"+x;if(R[w]===void 0)return typeof E=="number"||typeof E=="boolean"?R[w]=E:R[w]=E.clone(),!0;{const z=R[w];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return R[w]=E,!0}else if(z.equals(E)===!1)return z.copy(E),!0}return!1}function g(v){const M=v.uniforms;let x=0;const R=16;for(let w=0,z=M.length;w<z;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let A=0,U=y.length;A<U;A++){const V=y[A],$=Array.isArray(V.value)?V.value:[V.value];for(let P=0,I=$.length;P<I;P++){const H=$[P],Z=_(H),K=x%R;K!==0&&R-K<Z.boundary&&(x+=R-K),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=Z.storage}}}const E=x%R;return E>0&&(x+=R-E),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Ol{constructor(e={}){const{canvas:t=lu(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const M=this;let x=!1,R=0,E=0,w=null,z=-1,y=null;const A=new Qe,U=new Qe;let V=null;const $=new qe(0);let P=0,I=t.width,H=t.height,Z=1,K=null,q=null;const j=new Qe(0,0,I,H),se=new Qe(0,0,I,H);let ae=!1;const X=new Ks;let ne=!1,he=!1,Ee=null;const ve=new it,be=new me,Le=new D,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?Z:1}let L=n;function oe(T,N){for(let G=0;G<T.length;G++){const W=T[G],B=t.getContext(W,N);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xs}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),L=oe(N,T),L===null)throw oe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,re,Y,Te,ge,b,S,F,te,ie,ee,ye,pe,xe,Re,Oe,Q,Xe,Be,Ne,O,k,ue,_e;function De(){J=new Ed(L),re=new _d(L,J,e),J.init(re),k=new lm(L,J,re),Y=new am(L,J,re),Te=new Ad(L),ge=new qp,b=new om(L,J,Y,ge,re,k,Te),S=new xd(M),F=new yd(M),te=new Uu(L,re),ue=new md(L,J,te,re),ie=new bd(L,te,Te,ue),ee=new Ld(L,ie,te,Te),Be=new Cd(L,re,b),Oe=new vd(ge),ye=new Xp(M,S,F,J,re,ue,Oe),pe=new fm(M,ge),xe=new Jp,Re=new em(J,re),Xe=new pd(M,S,F,Y,ee,h,l),Q=new sm(M,ee,re),_e=new dm(L,Te,re,Y),Ne=new gd(L,J,Te,re),O=new Td(L,J,Te,re),Te.programs=ye.programs,M.capabilities=re,M.extensions=J,M.properties=ge,M.renderLists=xe,M.shadowMap=Q,M.state=Y,M.info=Te}De();const Ce=new hm(M,L);this.xr=Ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(I,H,!1))},this.getSize=function(T){return T.set(I,H)},this.setSize=function(T,N,G=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,H=N,t.width=Math.floor(T*Z),t.height=Math.floor(N*Z),G===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(I*Z,H*Z).floor()},this.setDrawingBufferSize=function(T,N,G){I=T,H=N,Z=G,t.width=Math.floor(T*G),t.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,N,G,W){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,N,G,W),Y.viewport(A.copy(j).multiplyScalar(Z).floor())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,N,G,W){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,N,G,W),Y.scissor(U.copy(se).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Y.setScissorTest(ae=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(T=!0,N=!0,G=!0){let W=0;if(T){let B=!1;if(w!==null){const Me=w.texture.format;B=Me===fl||Me===hl||Me===ul}if(B){const Me=w.texture.type,Ae=Me===Sn||Me===gn||Me===Ys||Me===Nn||Me===ll||Me===cl,Ue=Xe.getClearColor(),Fe=Xe.getClearAlpha(),Ve=Ue.r,ze=Ue.g,Ge=Ue.b;Ae?(m[0]=Ve,m[1]=ze,m[2]=Ge,m[3]=Fe,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Ve,g[1]=ze,g[2]=Ge,g[3]=Fe,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}N&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),xe.dispose(),Re.dispose(),ge.dispose(),S.dispose(),F.dispose(),ee.dispose(),ue.dispose(),_e.dispose(),ye.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ut),Ce.removeEventListener("sessionend",Ze),Ee&&(Ee.dispose(),Ee=null),Mt.stop()};function le(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=Te.autoReset,N=Q.enabled,G=Q.autoUpdate,W=Q.needsUpdate,B=Q.type;De(),Te.autoReset=T,Q.enabled=N,Q.autoUpdate=G,Q.needsUpdate=W,Q.type=B}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function fe(T){const N=T.target;N.removeEventListener("dispose",fe),Pe(N)}function Pe(T){we(T),ge.remove(T)}function we(T){const N=ge.get(T).programs;N!==void 0&&(N.forEach(function(G){ye.releaseProgram(G)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,W,B,Me){N===null&&(N=Se);const Ae=B.isMesh&&B.matrixWorld.determinant()<0,Ue=tc(T,N,G,W,B);Y.setMaterial(W,Ae);let Fe=G.index,Ve=1;if(W.wireframe===!0){if(Fe=ie.getWireframeAttribute(G),Fe===void 0)return;Ve=2}const ze=G.drawRange,Ge=G.attributes.position;let rt=ze.start*Ve,At=(ze.start+ze.count)*Ve;Me!==null&&(rt=Math.max(rt,Me.start*Ve),At=Math.min(At,(Me.start+Me.count)*Ve)),Fe!==null?(rt=Math.max(rt,0),At=Math.min(At,Fe.count)):Ge!=null&&(rt=Math.max(rt,0),At=Math.min(At,Ge.count));const ht=At-rt;if(ht<0||ht===1/0)return;ue.setup(B,W,Ue,G,Fe);let jt,et=Ne;if(Fe!==null&&(jt=te.get(Fe),et=O,et.setIndex(jt)),B.isMesh)W.wireframe===!0?(Y.setLineWidth(W.wireframeLinewidth*Ie()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(B.isLine){let ke=W.linewidth;ke===void 0&&(ke=1),Y.setLineWidth(ke*Ie()),B.isLineSegments?et.setMode(L.LINES):B.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else B.isPoints?et.setMode(L.POINTS):B.isSprite&&et.setMode(L.TRIANGLES);if(B.isBatchedMesh)et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)et.renderInstances(rt,ht,B.count);else if(G.isInstancedBufferGeometry){const ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Or=Math.min(G.instanceCount,ke);et.renderInstances(rt,ht,Or)}else et.render(rt,ht)};function Je(T,N,G){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=bt,T.needsUpdate=!0,qi(T,N,G),T.side=En,T.needsUpdate=!0,qi(T,N,G),T.side=Kt):qi(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),p=Re.get(G),p.init(),v.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==G&&T.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(M._useLegacyLights);const W=new Set;return T.traverse(function(B){const Me=B.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const Ue=Me[Ae];Je(Ue,G,B),W.add(Ue)}else Je(Me,G,B),W.add(Me)}),v.pop(),p=null,W},this.compileAsync=function(T,N,G=null){const W=this.compile(T,N,G);return new Promise(B=>{function Me(){if(W.forEach(function(Ae){ge.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){B(T);return}setTimeout(Me,10)}J.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ye=null;function ot(T){Ye&&Ye(T)}function ut(){Mt.stop()}function Ze(){Mt.start()}const Mt=new Cl;Mt.setAnimationLoop(ot),typeof self!="undefined"&&Mt.setContext(self),this.setAnimationLoop=function(T){Ye=T,Ce.setAnimationLoop(T),T===null?Mt.stop():Mt.start()},Ce.addEventListener("sessionstart",ut),Ce.addEventListener("sessionend",Ze),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(N),N=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,w),p=Re.get(T,v.length),p.init(),v.push(p),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(ve),he=this.localClippingEnabled,ne=Oe.init(this.clippingPlanes,he),_=xe.get(T,d.length),_.init(),d.push(_),kt(T,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(K,q),this.info.render.frame++,ne===!0&&Oe.beginShadows();const G=p.state.shadowsArray;if(Q.render(G,T,N),ne===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(_,T),p.setupLights(M._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let B=0,Me=W.length;B<Me;B++){const Ae=W[B];aa(_,T,Ae,Ae.viewport)}}else aa(_,T,N);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(M,T,N),ue.resetDefaultState(),z=-1,y=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function kt(T,N,G,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){W&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Ae=ee.update(T),Ue=T.material;Ue.visible&&_.push(T,Ae,Ue,G,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Ae=ee.update(T),Ue=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Le.copy(Ae.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Ue)){const Fe=Ae.groups;for(let Ve=0,ze=Fe.length;Ve<ze;Ve++){const Ge=Fe[Ve],rt=Ue[Ge.materialIndex];rt&&rt.visible&&_.push(T,Ae,rt,G,Le.z,Ge)}}else Ue.visible&&_.push(T,Ae,Ue,G,Le.z,null)}}const Me=T.children;for(let Ae=0,Ue=Me.length;Ae<Ue;Ae++)kt(Me[Ae],N,G,W)}function aa(T,N,G,W){const B=T.opaque,Me=T.transmissive,Ae=T.transparent;p.setupLightsView(G),ne===!0&&Oe.setGlobalState(M.clippingPlanes,G),Me.length>0&&ec(B,Me,N,G),W&&Y.viewport(A.copy(W)),B.length>0&&Xi(B,N,G),Me.length>0&&Xi(Me,N,G),Ae.length>0&&Xi(Ae,N,G),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function ec(T,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const Me=re.isWebGL2;Ee===null&&(Ee=new Bn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Fi:Sn,minFilter:Ni,samples:Me?4:0})),M.getDrawingBufferSize(be),Me?Ee.setSize(be.x,be.y):Ee.setSize(Us(be.x),Us(be.y));const Ae=M.getRenderTarget();M.setRenderTarget(Ee),M.getClearColor($),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear();const Ue=M.toneMapping;M.toneMapping=Mn,Xi(T,G,W),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee);let Fe=!1;for(let Ve=0,ze=N.length;Ve<ze;Ve++){const Ge=N[Ve],rt=Ge.object,At=Ge.geometry,ht=Ge.material,jt=Ge.group;if(ht.side===Kt&&rt.layers.test(W.layers)){const et=ht.side;ht.side=bt,ht.needsUpdate=!0,oa(rt,G,W,At,ht,jt),ht.side=et,ht.needsUpdate=!0,Fe=!0}}Fe===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee)),M.setRenderTarget(Ae),M.setClearColor($,P),M.toneMapping=Ue}function Xi(T,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,Me=T.length;B<Me;B++){const Ae=T[B],Ue=Ae.object,Fe=Ae.geometry,Ve=W===null?Ae.material:W,ze=Ae.group;Ue.layers.test(G.layers)&&oa(Ue,N,G,Fe,Ve,ze)}}function oa(T,N,G,W,B,Me){T.onBeforeRender(M,N,G,W,B,Me),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(M,N,G,W,T,Me),B.transparent===!0&&B.side===Kt&&B.forceSinglePass===!1?(B.side=bt,B.needsUpdate=!0,M.renderBufferDirect(G,N,W,B,T,Me),B.side=En,B.needsUpdate=!0,M.renderBufferDirect(G,N,W,B,T,Me),B.side=Kt):M.renderBufferDirect(G,N,W,B,T,Me),T.onAfterRender(M,N,G,W,B,Me)}function qi(T,N,G){N.isScene!==!0&&(N=Se);const W=ge.get(T),B=p.state.lights,Me=p.state.shadowsArray,Ae=B.state.version,Ue=ye.getParameters(T,B.state,Me,N,G),Fe=ye.getProgramCacheKey(Ue);let Ve=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?F:S).get(T.envMap||W.environment),Ve===void 0&&(T.addEventListener("dispose",fe),Ve=new Map,W.programs=Ve);let ze=Ve.get(Fe);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===Ae)return ca(T,Ue),ze}else Ue.uniforms=ye.getUniforms(T),T.onBuild(G,Ue,M),T.onBeforeCompile(Ue,M),ze=ye.acquireProgram(Ue,Fe),Ve.set(Fe,ze),W.uniforms=Ue.uniforms;const Ge=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Oe.uniform),ca(T,Ue),W.needsLights=ic(T),W.lightsStateVersion=Ae,W.needsLights&&(Ge.ambientLightColor.value=B.state.ambient,Ge.lightProbe.value=B.state.probe,Ge.directionalLights.value=B.state.directional,Ge.directionalLightShadows.value=B.state.directionalShadow,Ge.spotLights.value=B.state.spot,Ge.spotLightShadows.value=B.state.spotShadow,Ge.rectAreaLights.value=B.state.rectArea,Ge.ltc_1.value=B.state.rectAreaLTC1,Ge.ltc_2.value=B.state.rectAreaLTC2,Ge.pointLights.value=B.state.point,Ge.pointLightShadows.value=B.state.pointShadow,Ge.hemisphereLights.value=B.state.hemi,Ge.directionalShadowMap.value=B.state.directionalShadowMap,Ge.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ge.spotShadowMap.value=B.state.spotShadowMap,Ge.spotLightMatrix.value=B.state.spotLightMatrix,Ge.spotLightMap.value=B.state.spotLightMap,Ge.pointShadowMap.value=B.state.pointShadowMap,Ge.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function la(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function ca(T,N){const G=ge.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function tc(T,N,G,W,B){N.isScene!==!0&&(N=Se),b.resetTextureUnits();const Me=N.fog,Ae=W.isMeshStandardMaterial?N.environment:null,Ue=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ln,Fe=(W.isMeshStandardMaterial?F:S).get(W.envMap||Ae),Ve=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,At=!!G.morphAttributes.color;let ht=Mn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=M.toneMapping);const jt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=jt!==void 0?jt.length:0,ke=ge.get(W),Or=p.state.lights;if(ne===!0&&(he===!0||T!==y)){const Pt=T===y&&W.id===z;Oe.setState(W,T,Pt)}let nt=!1;W.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Or.state.version||ke.outputColorSpace!==Ue||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||ke.envMap!==Fe||W.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Oe.numPlanes||ke.numIntersection!==Oe.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==ze||ke.morphTargets!==Ge||ke.morphNormals!==rt||ke.morphColors!==At||ke.toneMapping!==ht||re.isWebGL2===!0&&ke.morphTargetsCount!==et)&&(nt=!0):(nt=!0,ke.__version=W.version);let bn=ke.currentProgram;nt===!0&&(bn=qi(W,N,B));let ua=!1,Mi=!1,Br=!1;const gt=bn.getUniforms(),Tn=ke.uniforms;if(Y.useProgram(bn.program)&&(ua=!0,Mi=!0,Br=!0),W.id!==z&&(z=W.id,Mi=!0),ua||y!==T){gt.setValue(L,"projectionMatrix",T.projectionMatrix),gt.setValue(L,"viewMatrix",T.matrixWorldInverse);const Pt=gt.map.cameraPosition;Pt!==void 0&&Pt.setValue(L,Le.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Mi=!0,Br=!0)}if(B.isSkinnedMesh){gt.setOptional(L,B,"bindMatrix"),gt.setOptional(L,B,"bindMatrixInverse");const Pt=B.skeleton;Pt&&(re.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),gt.setValue(L,"boneTexture",Pt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(gt.setOptional(L,B,"batchingTexture"),gt.setValue(L,"batchingTexture",B._matricesTexture,b));const zr=G.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&re.isWebGL2===!0)&&Be.update(B,G,bn),(Mi||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,gt.setValue(L,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Mi&&(gt.setValue(L,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&nc(Tn,Br),Me&&W.fog===!0&&pe.refreshFogUniforms(Tn,Me),pe.refreshMaterialUniforms(Tn,W,Z,H,Ee),Mr.upload(L,la(ke),Tn,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Mr.upload(L,la(ke),Tn,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(L,"center",B.center),gt.setValue(L,"modelViewMatrix",B.modelViewMatrix),gt.setValue(L,"normalMatrix",B.normalMatrix),gt.setValue(L,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let Gr=0,rc=Pt.length;Gr<rc;Gr++)if(re.isWebGL2){const ha=Pt[Gr];_e.update(ha,bn),_e.bind(ha,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function nc(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ic(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,N,G){ge.get(T.texture).__webglTexture=N,ge.get(T.depthTexture).__webglTexture=G;const W=ge.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const G=ge.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){w=T,R=N,E=G;let W=!0,B=null,Me=!1,Ae=!1;if(T){const Fe=ge.get(T);Fe.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(L.FRAMEBUFFER,null),W=!1):Fe.__webglFramebuffer===void 0?b.setupRenderTarget(T):Fe.__hasExternalTextures&&b.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const ze=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?B=ze[N][G]:B=ze[N],Me=!0):re.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?B=ge.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[G]:B=ze,A.copy(T.viewport),U.copy(T.scissor),V=T.scissorTest}else A.copy(j).multiplyScalar(Z).floor(),U.copy(se).multiplyScalar(Z).floor(),V=ae;if(Y.bindFramebuffer(L.FRAMEBUFFER,B)&&re.drawBuffers&&W&&Y.drawBuffers(T,B),Y.viewport(A),Y.scissor(U),Y.setScissorTest(V),Me){const Fe=ge.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe.__webglTexture,G)}else if(Ae){const Fe=ge.get(T.texture),Ve=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,G||0,Ve)}z=-1},this.readRenderTargetPixels=function(T,N,G,W,B,Me,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ue=Ue[Ae]),Ue){Y.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Fe=T.texture,Ve=Fe.format,ze=Fe.type;if(Ve!==Ht&&k.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===Fi&&(J.has("EXT_color_buffer_half_float")||re.isWebGL2&&J.has("EXT_color_buffer_float"));if(ze!==Sn&&k.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===_n&&(re.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&G>=0&&G<=T.height-B&&L.readPixels(N,G,W,B,k.convert(Ve),k.convert(ze),Me)}finally{const Fe=w!==null?ge.get(w).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(T,N,G=0){const W=Math.pow(2,-G),B=Math.floor(N.image.width*W),Me=Math.floor(N.image.height*W);b.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,T.x,T.y,B,Me),Y.unbindTexture()},this.copyTextureToTexture=function(T,N,G,W=0){const B=N.image.width,Me=N.image.height,Ae=k.convert(G.format),Ue=k.convert(G.type);b.setTexture2D(G,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,T.x,T.y,B,Me,Ae,Ue,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Ae,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,W,T.x,T.y,Ae,Ue,N.image),W===0&&G.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G,W,B=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Fe=k.convert(W.format),Ve=k.convert(W.type);let ze;if(W.isData3DTexture)b.setTexture3D(W,0),ze=L.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const Ge=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),At=L.getParameter(L.UNPACK_SKIP_PIXELS),ht=L.getParameter(L.UNPACK_SKIP_ROWS),jt=L.getParameter(L.UNPACK_SKIP_IMAGES),et=G.isCompressedTexture?G.mipmaps[B]:G.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?L.texSubImage3D(ze,B,N.x,N.y,N.z,Me,Ae,Ue,Fe,Ve,et.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,B,N.x,N.y,N.z,Me,Ae,Ue,Fe,et.data)):L.texSubImage3D(ze,B,N.x,N.y,N.z,Me,Ae,Ue,Fe,Ve,et),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jt),B===0&&W.generateMipmaps&&L.generateMipmap(ze),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){R=0,E=0,w=null,Y.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Js?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Pr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?On:pl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===On?mt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pm extends Ol{}pm.prototype.isWebGL1Renderer=!0;class js{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new js(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mm extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bl extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Io=new it,Ns=new Sl,mr=new Dr,gr=new D;class gm extends dt{constructor(e=new Lt,t=new Bl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),mr.radius+=s,e.ray.intersectsSphere(mr)===!1)return;Io.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Io);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,_=m;g<_;g++){const p=c.getX(g);gr.fromBufferAttribute(f,p),No(gr,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,_=m;g<_;g++)gr.fromBufferAttribute(f,g),No(gr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function No(i,e,t,n,r,s,o){const a=Ns.distanceSqToPoint(i);if(a<t){const l=new D;Ns.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _m extends Tt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,m=(o-u)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new me:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],o=[],a=new D,l=new it;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(xt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qs extends $t{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new me,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*f+this.aX,c=h*f+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vm extends Qs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ea(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,m*=u,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const _r=new D,vs=new ea,xs=new ea,Ms=new ea;class xm extends $t{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(_r.subVectors(r[0],r[1]).add(r[0]),c=_r);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(_r.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),vs.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,p),xs.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,p),Ms.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(vs.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),xs.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ms.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(vs.calc(l),xs.calc(l),Ms.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fo(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Mm(i,e){const t=1-i;return t*t*e}function Sm(i,e){return 2*(1-i)*i*e}function ym(i,e){return i*i*e}function Ci(i,e,t,n){return Mm(i,e)+Sm(i,t)+ym(i,n)}function Em(i,e){const t=1-i;return t*t*t*e}function bm(i,e){const t=1-i;return 3*t*t*i*e}function Tm(i,e){return 3*(1-i)*i*i*e}function Am(i,e){return i*i*i*e}function Li(i,e,t,n,r){return Em(i,e)+bm(i,t)+Tm(i,n)+Am(i,r)}class zl extends $t{constructor(e=new me,t=new me,n=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Li(e,r.x,s.x,o.x,a.x),Li(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wm extends $t{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Li(e,r.x,s.x,o.x,a.x),Li(e,r.y,s.y,o.y,a.y),Li(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gl extends $t{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends $t{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hl extends $t{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ci(e,r.x,s.x,o.x),Ci(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cm extends $t{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ci(e,r.x,s.x,o.x),Ci(e,r.y,s.y,o.y),Ci(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vl extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Fo(a,l.x,c.x,u.x,f.x),Fo(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var Fs=Object.freeze({__proto__:null,ArcCurve:vm,CatmullRomCurve3:xm,CubicBezierCurve:zl,CubicBezierCurve3:wm,EllipseCurve:Qs,LineCurve:Gl,LineCurve3:Rm,QuadraticBezierCurve:Hl,QuadraticBezierCurve3:Cm,SplineCurve:Vl});class Lm extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Fs[r.type]().fromJSON(r))}return this}}class Oo extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gl(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Hl(this.currentPoint.clone(),new me(e,t),new me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new zl(this.currentPoint.clone(),new me(e,t),new me(n,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Qs(e,t,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ki extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],m=[];let g=0;const _=[],p=n/2;let d=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(m,2));function v(){const x=new D,R=new D;let E=0;const w=(t-e)/n;for(let z=0;z<=s;z++){const y=[],A=z/s,U=A*(t-e)+e;for(let V=0;V<=r;V++){const $=V/r,P=$*l+a,I=Math.sin(P),H=Math.cos(P);R.x=U*I,R.y=-A*n+p,R.z=U*H,f.push(R.x,R.y,R.z),x.set(I,w,H).normalize(),h.push(x.x,x.y,x.z),m.push($,1-A),y.push(g++)}_.push(y)}for(let z=0;z<r;z++)for(let y=0;y<s;y++){const A=_[y][z],U=_[y+1][z],V=_[y+1][z+1],$=_[y][z+1];u.push(A,U,$),u.push(U,V,$),E+=6}c.addGroup(d,E,0),d+=E}function M(x){const R=g,E=new me,w=new D;let z=0;const y=x===!0?e:t,A=x===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,p*A,0),h.push(0,A,0),m.push(.5,.5),g++;const U=g;for(let V=0;V<=r;V++){const P=V/r*l+a,I=Math.cos(P),H=Math.sin(P);w.x=y*H,w.y=p*A,w.z=y*I,f.push(w.x,w.y,w.z),h.push(0,A,0),E.x=I*.5+.5,E.y=H*.5*A+.5,m.push(E.x,E.y),g++}for(let V=0;V<r;V++){const $=R+V,P=U+V;x===!0?u.push(P,P+1,$):u.push(P+1,P,$),z+=3}c.addGroup(d,z,x===!0?1:2),d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends Oo{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Oo().fromJSON(r))}return this}}const Pm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Wl(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,m;if(n&&(s=Fm(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)f=i[g],h=i[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Oi(s,o,t,a,l,m,0),o}};function Wl(i,e,t,n,r){let s,o;if(r===Ym(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Bo(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Bo(s,i[s],i[s+1],o);return o&&Nr(o,o.next)&&(zi(o),o=o.next),o}function Hn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Nr(t,t.next)||tt(t.prev,t,t.next)===0)){if(zi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oi(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Hm(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Um(i,n,r,s):Dm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),zi(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Im(Hn(i),e,t),Oi(i,e,t,n,r,s,2)):o===2&&Nm(i,e,t,n,r,s):Oi(Hn(i),e,t,n,r,s,1);break}}}function Dm(i){const e=i.prev,t=i,n=i.next;if(tt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=m&&li(r,a,s,l,o,c,g.x,g.y)&&tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Um(i,e,t,n){const r=i.prev,s=i,o=i.next;if(tt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,_=a>l?a>c?a:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,d=Os(m,g,e,t,n),v=Os(_,p,e,t,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=d&&x&&x.z<=v;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&li(a,u,l,f,c,h,M.x,M.y)&&tt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&li(a,u,l,f,c,h,x.x,x.y)&&tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=d;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&li(a,u,l,f,c,h,M.x,M.y)&&tt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&li(a,u,l,f,c,h,x.x,x.y)&&tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Im(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Nr(r,s)&&Xl(r,n,n.next,s)&&Bi(r,s)&&Bi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),zi(n),zi(n.next),n=i=s),n=n.next}while(n!==i);return Hn(n)}function Nm(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wm(o,a)){let l=ql(o,a);o=Hn(o,o.next),l=Hn(l,l.next),Oi(o,e,t,n,r,s,0),Oi(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Fm(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Wl(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(km(c));for(r.sort(Om),s=0;s<r.length;s++)t=Bm(r[s],t);return t}function Om(i,e){return i.x-e.x}function Bm(i,e){const t=zm(i,e);if(!t)return e;const n=ql(t,i);return Hn(n,n.next),Hn(t,t.next)}function zm(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&li(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Bi(t,i)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&Gm(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function Gm(i,e){return tt(i.prev,i,e.prev)<0&&tt(e.next,i,i.next)<0}function Hm(i,e,t,n){let r=i;do r.z===0&&(r.z=Os(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Vm(r)}function Vm(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Os(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function km(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function li(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Wm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xm(i,e)&&(Bi(i,e)&&Bi(e,i)&&qm(i,e)&&(tt(i.prev,i,e.prev)||tt(i,e.prev,e))||Nr(i,e)&&tt(i.prev,i,i.next)>0&&tt(e.prev,e,e.next)>0)}function tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Nr(i,e){return i.x===e.x&&i.y===e.y}function Xl(i,e,t,n){const r=xr(tt(i,e,t)),s=xr(tt(i,e,n)),o=xr(tt(t,n,i)),a=xr(tt(t,n,e));return!!(r!==s&&o!==a||r===0&&vr(i,t,e)||s===0&&vr(i,n,e)||o===0&&vr(t,i,n)||a===0&&vr(t,e,n))}function vr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xr(i){return i>0?1:i<0?-1:0}function Xm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bi(i,e){return tt(i.prev,i,i.next)<0?tt(i,e,i.next)>=0&&tt(i,i.prev,e)>=0:tt(i,e,i.prev)<0||tt(i,i.next,e)<0}function qm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ql(i,e){const t=new Bs(i.i,i.x,i.y),n=new Bs(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Bo(i,e,t,n){const r=new Bs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bs(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ym(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Pi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Pi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];zo(e),Go(n,e);let o=e.length;t.forEach(zo);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Go(n,t[l]);const a=Pm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function zo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Go(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ta extends Lt{constructor(e=new kl([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pt(r,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Jm;let M,x=!1,R,E,w,z;d&&(M=d.getSpacedPoints(u),x=!0,h=!1,R=d.computeFrenetFrames(u,!1),E=new D,w=new D,z=new D),h||(p=0,m=0,g=0,_=0);const y=a.extractPoints(c);let A=y.shape;const U=y.holes;if(!Pi.isClockWise(A)){A=A.reverse();for(let L=0,oe=U.length;L<oe;L++){const J=U[L];Pi.isClockWise(J)&&(U[L]=J.reverse())}}const $=Pi.triangulateShape(A,U),P=A;for(let L=0,oe=U.length;L<oe;L++){const J=U[L];A=A.concat(J)}function I(L,oe,J){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(oe,J)}const H=A.length,Z=$.length;function K(L,oe,J){let re,Y,Te;const ge=L.x-oe.x,b=L.y-oe.y,S=J.x-L.x,F=J.y-L.y,te=ge*ge+b*b,ie=ge*F-b*S;if(Math.abs(ie)>Number.EPSILON){const ee=Math.sqrt(te),ye=Math.sqrt(S*S+F*F),pe=oe.x-b/ee,xe=oe.y+ge/ee,Re=J.x-F/ye,Oe=J.y+S/ye,Q=((Re-pe)*F-(Oe-xe)*S)/(ge*F-b*S);re=pe+ge*Q-L.x,Y=xe+b*Q-L.y;const Xe=re*re+Y*Y;if(Xe<=2)return new me(re,Y);Te=Math.sqrt(Xe/2)}else{let ee=!1;ge>Number.EPSILON?S>Number.EPSILON&&(ee=!0):ge<-Number.EPSILON?S<-Number.EPSILON&&(ee=!0):Math.sign(b)===Math.sign(F)&&(ee=!0),ee?(re=-b,Y=ge,Te=Math.sqrt(te)):(re=ge,Y=b,Te=Math.sqrt(te/2))}return new me(re/Te,Y/Te)}const q=[];for(let L=0,oe=P.length,J=oe-1,re=L+1;L<oe;L++,J++,re++)J===oe&&(J=0),re===oe&&(re=0),q[L]=K(P[L],P[J],P[re]);const j=[];let se,ae=q.concat();for(let L=0,oe=U.length;L<oe;L++){const J=U[L];se=[];for(let re=0,Y=J.length,Te=Y-1,ge=re+1;re<Y;re++,Te++,ge++)Te===Y&&(Te=0),ge===Y&&(ge=0),se[re]=K(J[re],J[Te],J[ge]);j.push(se),ae=ae.concat(se)}for(let L=0;L<p;L++){const oe=L/p,J=m*Math.cos(oe*Math.PI/2),re=g*Math.sin(oe*Math.PI/2)+_;for(let Y=0,Te=P.length;Y<Te;Y++){const ge=I(P[Y],q[Y],re);ve(ge.x,ge.y,-J)}for(let Y=0,Te=U.length;Y<Te;Y++){const ge=U[Y];se=j[Y];for(let b=0,S=ge.length;b<S;b++){const F=I(ge[b],se[b],re);ve(F.x,F.y,-J)}}}const X=g+_;for(let L=0;L<H;L++){const oe=h?I(A[L],ae[L],X):A[L];x?(w.copy(R.normals[0]).multiplyScalar(oe.x),E.copy(R.binormals[0]).multiplyScalar(oe.y),z.copy(M[0]).add(w).add(E),ve(z.x,z.y,z.z)):ve(oe.x,oe.y,0)}for(let L=1;L<=u;L++)for(let oe=0;oe<H;oe++){const J=h?I(A[oe],ae[oe],X):A[oe];x?(w.copy(R.normals[L]).multiplyScalar(J.x),E.copy(R.binormals[L]).multiplyScalar(J.y),z.copy(M[L]).add(w).add(E),ve(z.x,z.y,z.z)):ve(J.x,J.y,f/u*L)}for(let L=p-1;L>=0;L--){const oe=L/p,J=m*Math.cos(oe*Math.PI/2),re=g*Math.sin(oe*Math.PI/2)+_;for(let Y=0,Te=P.length;Y<Te;Y++){const ge=I(P[Y],q[Y],re);ve(ge.x,ge.y,f+J)}for(let Y=0,Te=U.length;Y<Te;Y++){const ge=U[Y];se=j[Y];for(let b=0,S=ge.length;b<S;b++){const F=I(ge[b],se[b],re);x?ve(F.x,F.y+M[u-1].y,M[u-1].x+J):ve(F.x,F.y,f+J)}}}ne(),he();function ne(){const L=r.length/3;if(h){let oe=0,J=H*oe;for(let re=0;re<Z;re++){const Y=$[re];be(Y[2]+J,Y[1]+J,Y[0]+J)}oe=u+p*2,J=H*oe;for(let re=0;re<Z;re++){const Y=$[re];be(Y[0]+J,Y[1]+J,Y[2]+J)}}else{for(let oe=0;oe<Z;oe++){const J=$[oe];be(J[2],J[1],J[0])}for(let oe=0;oe<Z;oe++){const J=$[oe];be(J[0]+H*u,J[1]+H*u,J[2]+H*u)}}n.addGroup(L,r.length/3-L,0)}function he(){const L=r.length/3;let oe=0;Ee(P,oe),oe+=P.length;for(let J=0,re=U.length;J<re;J++){const Y=U[J];Ee(Y,oe),oe+=Y.length}n.addGroup(L,r.length/3-L,1)}function Ee(L,oe){let J=L.length;for(;--J>=0;){const re=J;let Y=J-1;Y<0&&(Y=L.length-1);for(let Te=0,ge=u+p*2;Te<ge;Te++){const b=H*Te,S=H*(Te+1),F=oe+re+b,te=oe+Y+b,ie=oe+Y+S,ee=oe+re+S;Le(F,te,ie,ee)}}}function ve(L,oe,J){l.push(L),l.push(oe),l.push(J)}function be(L,oe,J){Se(L),Se(oe),Se(J);const re=r.length/3,Y=v.generateTopUV(n,r,re-3,re-2,re-1);Ie(Y[0]),Ie(Y[1]),Ie(Y[2])}function Le(L,oe,J,re){Se(L),Se(oe),Se(re),Se(oe),Se(J),Se(re);const Y=r.length/3,Te=v.generateSideWallUV(n,r,Y-6,Y-3,Y-2,Y-1);Ie(Te[0]),Ie(Te[1]),Ie(Te[3]),Ie(Te[1]),Ie(Te[2]),Ie(Te[3])}function Se(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Ie(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Km(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fs[r.type]().fromJSON(r)),new ta(n,e.options)}}const Jm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[r*3],m=e[r*3+1],g=e[r*3+2],_=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-f),new me(h,1-g),new me(_,1-d)]:[new me(a,1-l),new me(u,1-f),new me(m,1-g),new me(p,1-d)]}};function Km(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class na extends Lt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,m=new D,g=new me;for(let _=0;_<=r;_++){for(let p=0;p<=n;p++){const d=s+p/n*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const p=_*(n+1);for(let d=0;d<n;d++){const v=d+p,M=v,x=v+n+1,R=v+n+2,E=v+1;a.push(M,x,E),a.push(x,R,E)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vn extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new D,h=new D,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const v=[],M=d/n;let x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const E=R/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(E+x,1-M),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){const M=u[d][v+1],x=u[d][v],R=u[d+1][v],E=u[d+1][v+1];(d!==0||o>0)&&m.push(M,x,E),(d!==n-1||l<Math.PI)&&m.push(x,R,E)}this.setIndex(m),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cn extends vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Zm extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ss=new it,Ho=new D,Vo=new D;class Yl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ho),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),Ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ko=new it,Ai=new D,ys=new D;class $m extends Yl{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ai),ys.copy(n.position),ys.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ys),n.updateMatrixWorld(),r.makeTranslation(-Ai.x,-Ai.y,-Ai.z),ko.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko)}}class jm extends Fr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qm extends Yl{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eg extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tg extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);const Wo=.32,ng=.62,ig=2.35,Zt=.3,ia=1.58,Wt=.15,yn=1.5,Jl=8.05,rg=5.55,sg=4.4,Jt=.33,ag=-7.1,zs=100,Xo=14,$e=12,og=.0075,qo=2.6,lg=.72,cg=[6211781,15909198,15242602,8302824,13213916],ug=16718354,hg=6948352,Kl=16774885,fg=12887412,Yo=1314332,Es=new Map;function Wi(i,e){const t=document.createElement("canvas");t.width=i,t.height=i,e(t.getContext("2d"),i);const n=new _m(t);return n.wrapS=Ii,n.wrapT=Ii,n.needsUpdate=!0,n}function dg(i){return`#${i.toString(16).padStart(6,"0")}`}function Rr(i,e){const t=`${i}:${e}`;if(Es.has(t))return Es.get(t);const n=pg(i,e);return Es.set(t,n),n}function pg(i,e){return i==="ball"?gg(e):i==="platform"?_g(e):i==="pole"?vg(e):i==="bomb"?mg():xg(e)}function mg(){return Wi(64,(i,e)=>{i.fillStyle="#1a1a22",i.fillRect(0,0,e,e),i.fillStyle="#3a3a48",i.beginPath(),i.arc(22,18,16,0,7),i.fill(),i.strokeStyle="#0c0c10",i.lineWidth=2,i.beginPath(),i.arc(32,32,22,.2,4),i.stroke(),i.fillStyle="#6a3118",i.fillRect(28,4,6,10),i.fillStyle="#ffb347",i.fillRect(30,0,3,5)})}function gg(i){return Wi(64,(e,t)=>{if(i==="pebble"){e.fillStyle="#b9b2a6",e.fillRect(0,0,t,t);for(let r=0;r<80;r++)e.fillStyle=r%2?"#8a8278":"#d4cdc4",e.beginPath(),e.arc(Math.random()*t,Math.random()*t,1+Math.random()*2.4,0,7),e.fill();return}if(i==="mint"){e.fillStyle="#8ff0c8",e.fillRect(0,0,t,t),e.fillStyle="#5bc9a4";for(let r=-t;r<t*2;r+=10)e.save(),e.translate(r,0),e.rotate(.5),e.fillRect(0,-t,5,t*3),e.restore();return}if(i==="gold"){const r=e.createLinearGradient(0,0,t,t);r.addColorStop(0,"#fff1a8"),r.addColorStop(.4,"#ffd24a"),r.addColorStop(.7,"#c4921a"),r.addColorStop(1,"#ffe58a"),e.fillStyle=r,e.fillRect(0,0,t,t),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(8,0,6,t),e.fillRect(28,0,3,t);return}if(i==="night"){e.fillStyle="#1c2258",e.fillRect(0,0,t,t),e.fillStyle="#5a6cff",e.fillRect(0,20,t,8),e.fillStyle="#fff6a8";for(let r=0;r<28;r++)e.fillRect(r*17%t,r*29%t,2,2);return}const n=e.createRadialGradient(22,18,4,32,32,36);n.addColorStop(0,"#ffffff"),n.addColorStop(.35,"#fff6e5"),n.addColorStop(1,"#e8c9a0"),e.fillStyle=n,e.fillRect(0,0,t,t)})}function _g(i){return Wi(64,(e,t)=>{if(i==="clay"){e.fillStyle="#c48a62",e.fillRect(0,0,t,t),e.strokeStyle="rgba(80,40,20,0.35)",e.lineWidth=1.2;for(let n=0;n<9;n++)e.beginPath(),e.moveTo(Math.random()*t,Math.random()*t),e.lineTo(Math.random()*t,Math.random()*t),e.stroke();return}if(i==="ice"){const n=e.createLinearGradient(0,0,t,t);n.addColorStop(0,"#e8f7ff"),n.addColorStop(1,"#7ec0ea"),e.fillStyle=n,e.fillRect(0,0,t,t),e.strokeStyle="rgba(255,255,255,0.7)",e.lineWidth=1;for(let r=0;r<12;r++)e.beginPath(),e.moveTo(r*7,0),e.lineTo(r*7+18,t),e.stroke();return}if(i==="candy"){e.fillStyle="#ff8ab8",e.fillRect(0,0,t,t);const n=["#ffc36b","#9dffc1","#c9a6ff","#ff9e7a"];for(let r=0;r<8;r++)e.fillStyle=n[r%n.length],e.fillRect(r*8,0,5,t);return}if(i==="ember"){e.fillStyle="#4a140c",e.fillRect(0,0,t,t),e.fillStyle="#ff6a3d";for(let n=0;n<18;n++)e.fillRect(n*11%t,n*19%t,3,8+n%5);e.fillStyle="#ffb347",e.fillRect(20,10,4,20),e.fillRect(40,28,3,16);return}e.fillStyle="#d8d0c4",e.fillRect(0,0,t,t),e.fillStyle="rgba(0,0,0,0.06)";for(let n=0;n<t;n+=4)e.fillRect(0,n,t,1)})}function vg(i){return Wi(64,(e,t)=>{if(i==="stone"){e.fillStyle="#8d8a86",e.fillRect(0,0,t,t),e.fillStyle="#6a6762";for(let n=0;n<50;n++)e.fillRect(n*13%t,n*23%t,3,2);return}if(i==="marble"){e.fillStyle="#eee8dc",e.fillRect(0,0,t,t),e.strokeStyle="rgba(80,70,60,0.4)",e.lineWidth=2,e.beginPath(),e.moveTo(0,10),e.quadraticCurveTo(40,30,64,18),e.moveTo(0,40),e.quadraticCurveTo(20,60,64,44),e.stroke();return}if(i==="neon"){e.fillStyle="#041614",e.fillRect(0,0,t,t),e.fillStyle="#4ef0d0",e.fillRect(0,8,t,6),e.fillRect(0,28,t,4),e.fillRect(0,48,t,6),e.fillStyle="#ffffff",e.fillRect(0,10,t,2);return}e.fillStyle="#c4a574",e.fillRect(0,0,t,t),e.strokeStyle="rgba(90,60,30,0.35)";for(let n=6;n<t;n+=10)e.beginPath(),e.moveTo(0,n),e.bezierCurveTo(20,n+3,40,n-3,64,n),e.stroke()})}function xg(i){return Wi(64,(e,t)=>{e.fillStyle=dg({dusk:1314332,mist:1844272,sky:1520202,void:460300}[i]||1314332),e.fillRect(0,0,t,t),e.fillStyle=i==="sky"?"rgba(180,220,255,0.35)":"rgba(255,246,200,0.55)";for(let n=0;n<(i==="void"?40:18);n++)e.fillRect(n*19%t,n*37%t,i==="void"?1:2,1)})}function Gs(i,e){return i==="ball"?e==="mint"?"repeating-linear-gradient(135deg,#8ff0c8 0 8px,#5bc9a4 8px 14px)":e==="gold"?"linear-gradient(135deg,#fff1a8,#ffd24a 40%,#c4921a 70%,#ffe58a)":e==="night"?"radial-gradient(circle at 30% 30%,#7a88ff,#1c2258 70%)":e==="pebble"?"radial-gradient(circle at 20% 20%,#d4cdc4,#8a8278)":"radial-gradient(circle at 30% 25%,#fff,#fff6e5 45%,#e8c9a0)":i==="platform"?e==="ice"?"linear-gradient(135deg,#e8f7ff,#7ec0ea)":e==="candy"?"repeating-linear-gradient(90deg,#ff8ab8 0 8px,#ffc36b 8px 16px,#9dffc1 16px 24px)":e==="ember"?"linear-gradient(180deg,#ffb347,#ff6a3d 40%,#4a140c)":e==="clay"?"linear-gradient(135deg,#d4a07a,#8c5a3a)":"linear-gradient(135deg,#5ec8c5,#f2c14e,#e8956a)":i==="pole"?e==="neon"?"repeating-linear-gradient(#041614 0 8px,#4ef0d0 8px 14px)":e==="marble"?"linear-gradient(135deg,#fff,#cfc6b8 50%,#eee8dc)":e==="stone"?"radial-gradient(circle at 40% 40%,#b0aca6,#6a6762)":"repeating-linear-gradient(#c4a574 0 10px,#a07d4e 10px 12px)":e==="sky"?"linear-gradient(#4a90c8,#17324a)":e==="void"?"radial-gradient(circle at 50% 20%,#2a2040,#07060c)":e==="mist"?"linear-gradient(#3a4a5c,#1c2430)":"linear-gradient(#3a2450,#140e1c)"}const Jo=new Vn(Wt,14,10),Bt=new cn({color:Kl,emissive:9071168});function Mg(i){const e=new at(Jo,Bt);e.position.set(0,2.2,yn);const t=new jm(16761162,0,2.2);e.add(t);const n=[];for(let u=0;u<10;u++){const f=new cn({color:16769162,emissive:16751146,transparent:!0,opacity:0,depthWrite:!1}),h=new at(Jo,f);h.visible=!1,i.add(h),n.push(h)}let r=Kl,s=9071168,o=0,a=0,l=0;function c(u){if(u<2&&l<=0){Bt.color.setHex(r),Bt.emissive.setHex(s),t.intensity=0;return}const f=Math.min(1,(u-1)/5),h=Math.max(f,l);Bt.color.setRGB(1,.92-f*.35,.55-f*.4),Bt.emissive.setRGB(.85+h*.15,.35+f*.25,.05),t.color.setRGB(1,.65-f*.2,.15),t.intensity=u>=2?.28+u*.1+l*.35:l*.25}return{mesh:e,vy:0,invuln:0,hopCd:0,vault:0,combo:0,reset(){e.position.set(0,2.2,yn),e.scale.set(1,1,1),this.vy=0,this.invuln=0,this.hopCd=0,this.vault=0,this.combo=0,l=0,n.forEach(u=>{u.visible=!1,u.material.opacity=0}),c(0)},setSkin(u){var f;r=u.color,s=(f=u.emissive)!=null?f:0,Bt.map=Rr("ball",u.id||"cream"),Bt.needsUpdate=!0,c(this.combo)},idle(u){e.rotation.y+=u*1.6;const f=performance.now()*.0022;e.position.y=2.2+Math.sin(f)*.16,e.scale.set(1+Math.sin(f*2)*.03,1-Math.sin(f*2)*.03,1+Math.sin(f*2)*.03),Bt.map&&(Bt.map.offset.x+=u*.12)},fall(u,f=0){this.combo=f,this.vy-=(Jl+f*1.9)*u;const h=ag-f*1.85;if(this.vy<h&&(this.vy=h),e.position.y+=this.vy*u,this.hopCd>0&&(this.hopCd-=u),this.vault>0&&(this.vault-=u),l>0&&(l=Math.max(0,l-u*4)),e.rotation.y+=u*(1.2+f*1.8),Bt.map&&(Bt.map.offset.x+=u*(.18+f*.12)),f>=2&&this.vy<0){const m=Math.min(1,f/5);e.scale.x+=(.78-m*.06-e.scale.x)*Math.min(1,u*12),e.scale.y+=(1.22+m*.12-e.scale.y)*Math.min(1,u*12),e.scale.z=e.scale.x}else e.scale.y+=(1-e.scale.y)*Math.min(1,u*10),e.scale.x+=(1-e.scale.x)*Math.min(1,u*10),e.scale.z=e.scale.x;if(c(f),o+=u,f>=2&&o>.028){o=0;const m=n[a%n.length];a+=1,m.visible=!0,m.position.copy(e.position),m.scale.set(e.scale.x*.92,e.scale.y*.92,e.scale.z*.92),m.material.opacity=.58}n.forEach(m=>{m.visible&&(m.material.opacity-=u*3.4,m.position.y+=u*.4,m.material.opacity<=0&&(m.visible=!1))})},bounce(u){e.position.y=u,this.vy=rg,e.scale.set(1.12,.82,1.12)},hop(u){return this.hopCd>0||this.vy>2.4||e.position.y>u?!1:(this.vy=sg,this.hopCd=.64,this.vault=.52,e.scale.set(.78,1.28,.78),!0)},burst(){l=1,e.scale.set(1.18,1.18,1.18)}}}const Ko=14,Sg=280;function yg(i,{onRotate:e,onTap:t,onHop:n}){const r={left:!1,right:!1};let s=!1,o=0,a=0,l=0,c=0,u=0,f=null;function h(p){var d;p.button!=null&&p.button!==0||(s=!0,o=p.clientX,a=p.clientX,l=p.clientY,c=performance.now(),u=0,f=p.pointerId,(d=i.setPointerCapture)==null||d.call(i,p.pointerId))}function m(p){if(!s||f!=null&&p.pointerId!==f)return;const d=p.clientX-o;u+=Math.abs(d)+Math.abs(p.clientY-l),e(d*og),o=p.clientX}function g(p){if(f!=null&&p.pointerId!==f)return;const d=performance.now()-c,v=Math.hypot(p.clientX-a,p.clientY-l);s=!1,f=null,v<Ko&&u<Ko&&d<Sg&&(t==null||t())}function _(p,d){(p.code==="ArrowLeft"||p.code==="KeyA")&&(r.left=d),(p.code==="ArrowRight"||p.code==="KeyD")&&(r.right=d),(p.code==="ArrowLeft"||p.code==="ArrowRight"||p.code==="KeyA"||p.code==="KeyD")&&p.preventDefault(),d&&(p.code==="Space"||p.code==="KeyW")&&(p.preventDefault(),n==null||n())}return i.addEventListener("pointerdown",h),window.addEventListener("pointermove",m),window.addEventListener("pointerup",g),window.addEventListener("pointercancel",g),window.addEventListener("keydown",p=>_(p,!0)),window.addEventListener("keyup",p=>_(p,!1)),{step(p){r.left&&e(-qo*p),r.right&&e(qo*p)}}}const ra={ball:[{id:"cream",ru:"Сливки",en:"Cream",color:16774885,emissive:9071168,price:0},{id:"pebble",ru:"Галька",en:"Pebble",color:12169894,emissive:3814444,price:0,chest:!0},{id:"mint",ru:"Мята",en:"Mint",color:9433288,emissive:1334336,price:120},{id:"gold",ru:"Золото",en:"Gold",color:16765514,emissive:6963968,price:260},{id:"night",ru:"Ночь",en:"Night",color:5926143,emissive:1581152,price:340}],platform:[{id:"original",ru:"Колодец",en:"Well",colors:[6211781,15909198,15242602,8302824,13213916],price:0},{id:"clay",ru:"Глина",en:"Clay",colors:[12880482,11039308,13934714,11828050,9198138],price:0,chest:!0},{id:"ice",ru:"Лёд",en:"Ice",colors:[10475519,8306922,13168895,6990040,11460607],price:140},{id:"candy",ru:"Конфета",en:"Candy",colors:[16747192,16761707,10354625,13215487,16752250],price:220},{id:"ember",ru:"Угли",en:"Ember",colors:[16738877,16757575,14240555,16747586,12073770],price:300}],pole:[{id:"wood",ru:"Дерево",en:"Wood",color:12887412,price:0},{id:"stone",ru:"Камень",en:"Stone",color:9276038,price:0,chest:!0},{id:"marble",ru:"Мрамор",en:"Marble",color:15261908,price:160},{id:"neon",ru:"Неон",en:"Neon",color:5173456,price:280}],bg:[{id:"dusk",ru:"Сумерки",en:"Dusk",color:1314332,fog:1314332,price:0},{id:"mist",ru:"Туман",en:"Mist",color:1844272,fog:1844272,price:0,chest:!0},{id:"sky",ru:"Небо",en:"Sky",color:1520202,fog:1718868,price:180},{id:"void",ru:"Бездна",en:"Void",color:460300,fog:723218,price:320}]},Eg=[{slot:"ball",id:"pebble"},{slot:"platform",id:"clay"},{slot:"pole",id:"stone"},{slot:"bg",id:"mist"}],bg=[{id:"easy",floors:14,introRings:3,introGap:4,gapStart:4,gapMin:3,ramp:50,dangerStart:7,dangerMax:2,dangerEvery:12,secondGapAt:99},{id:"normal",floors:16,introRings:3,introGap:4,gapStart:4,gapMin:3,ramp:28,dangerStart:7,dangerMax:2,dangerEvery:7,secondGapAt:99},{id:"hard",floors:32,introRings:1,introGap:3,gapStart:2,gapMin:2,ramp:8,dangerStart:2,dangerMax:6,dangerEvery:3,secondGapAt:6,secondGapSize:2}],mi={floors:0,introRings:2,introGap:4,gapStart:4,gapMin:2,ramp:36,dangerStart:6,dangerMax:4,dangerEvery:7,secondGapAt:99},Tg={floors:0,introRings:2,introGap:4,gapStart:4,gapMin:2,ramp:40,dangerStart:14,dangerMax:2,dangerEvery:12,secondGapAt:99,bombs:!0,bombStart:2,bombMax:2,bombEvery:5};function sn(i,e){return ra[i].find(t=>t.id===e)}function sa(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function bs(i,e,t){for(let n=0;n<t;n++)i[(e+n)%$e]="gap"}function Ag(i,e,t,n,r){let s=0,o=0;for(;s<t&&o<48;){const a=Math.floor(sa(e*19+o+r)*$e);i[a]==="safe"&&(i[a]=n,s+=1),o+=1}}function Hs(i,e=mi){var h,m,g,_,p,d;const t=Array($e).fill("safe"),n=e.floors||0;if(n&&i>=n)return t;const r=(h=e.introRings)!=null?h:2;if(i<r)return bs(t,i*3%$e,(m=e.introGap)!=null?m:4),t;const s=e.ramp||36,o=Math.min(1,(i-r)/s),a=(g=e.gapStart)!=null?g:4,l=(_=e.gapMin)!=null?_:2,c=Math.max(l,Math.round(a-o*(a-l))),u=Math.floor(sa(i+1)*$e);bs(t,u,c),i>=(e.secondGapAt||99)&&bs(t,(u+6)%$e,e.secondGapSize||2);const f=(p=e.dangerStart)!=null?p:8;if(i>=f){const v=Math.floor((i-f)/(e.dangerEvery||6)),M=Math.min((d=e.dangerMax)!=null?d:3,1+v);Ag(t,i,M,"danger",3)}return t.includes("gap")||(t[0]="gap"),t}function Zo(i,e){var r;if(!(e!=null&&e.bombs))return 0;const t=(r=e.bombStart)!=null?r:2;return i<t||(i-t)%2===1?0:sa(i*47.3+8.1)<.58?1:2}const vn=Math.PI*2/$e,wg=Dg(),Rg=new D,Cg=new ki(Wo,Wo,90,12),Xt=new cn({color:fg}),qt=cg.map(i=>new cn({color:i})),Vs=new cn({color:ug,emissive:hg}),Zl=new cn({color:16777215,emissive:3805704,map:Rr("bomb","core")}),$l=new cn({color:3811864,emissive:2233352}),Cr=new zn({color:16742930}),Lg=new Vn(Jt,14,12),Pg=new ki(.04,.055,.22,6),$o=new Vn(.09,8,6),ks=new cn({color:16774084,emissive:12876306}),Ws=new cn({color:16776422,emissive:16757800}),jo=new Set([Vs,Zl,$l,Cr,Xt,ks,Ws,...qt]);let mn=0;function Dg(){const i=ng,e=ig,t=vn*.48,n=new kl,r=8;for(let o=0;o<=r;o++){const a=-t+2*t*o/r,l=Math.cos(a)*e,c=Math.sin(a)*e;o===0?n.moveTo(l,c):n.lineTo(l,c)}for(let o=r;o>=0;o--){const a=-t+2*t*o/r;n.lineTo(Math.cos(a)*i,Math.sin(a)*i)}const s=new ta(n,{depth:Zt,bevelEnabled:!1});return s.rotateX(-Math.PI/2),s.translate(0,-Zt/2,0),s}function Qo(i){return-i*ia}function si(i){const e=Math.sin(i*127.1)*43758.5453;return e-Math.floor(e)}function Ug(){const i=new In,e=new at(Lg,Zl);i.add(e);const t=new at(Pg,$l);t.position.y=Jt+.08,i.add(t);const n=new at($o,Cr);n.position.y=Jt+.22,i.add(n);const r=[0,1].map(()=>{const s=new at($o,Cr);return s.scale.setScalar(.42),i.add(s),s});return i.userData.body=e,i.userData.fuse=t,i.userData.spark=n,i.userData.embers=r,i}function el(i){const e=Array($e).fill(!1);i.forEach((n,r)=>{n==="gap"&&(e[r]=!0,e[(r+1)%$e]=!0,e[(r+$e-1)%$e]=!0)});const t=[];return i.forEach((n,r)=>{n!=="gap"&&!e[r]&&t.push(r)}),{blocked:e,lane:t}}function Ig(i,e){const t=Math.abs(i-e);return Math.min(t,$e-t)}function Sr(i){const e=Math.PI*2;let t=i%e;return t<0&&(t+=e),Math.round(t/vn)%$e}function tl(i,e){const t=Sr(e);for(let n=0;n<$e;n++){const r=(t+$e-n)%$e,s=(t+n)%$e;if(i[r]!=="gap")return r*vn;if(i[s]!=="gap")return s*vn}return e}function Ts(i,e,t=0,n=0){const r=Zt/2+Jt+Math.abs(Math.sin(t*14+e*3))*.045+n;i.position.set(Math.cos(e)*yn,r,-Math.sin(e)*yn)}function Ng(i){const e=new In;i.add(e);const t=new at(Cg,Xt);i.add(t);const n=[];let r=h=>Hs(h,mi),s=h=>Zo(h,mi),o=0;function a(h,m){const g=new In;g.position.y=Qo(h);const _=o>0&&h===o,p=o>0&&h===o-1,d=_?Ws:p?ks:qt[h%qt.length];return m.forEach((v,M)=>{if(v==="gap")return;const x=new at(wg,v==="danger"?Vs:d);x.rotation.y=M*vn,g.add(x)}),g}function l(h){const m=s(h.index),{blocked:g,lane:_}=el(h.cells);h.bombBlock=g;const p=[];if(m<=0||_.length<3){h.rollers=p;return}const d=si(h.index*3+1)>.5?1:-1,v=Math.min(m,_.length>=7?2:1),M=[],x=_.slice();for(let R=0;R<v&&x.length;R++){const E=Math.floor(si(h.index*13+R+2)*x.length),w=x.splice(E,1)[0];M.push(w);for(let z=x.length-1;z>=0;z--)Ig(x[z],w)<4&&x.splice(z,1)}M.forEach((R,E)=>{const w=si(h.index*41+E*7+3),z=R*vn,y=.55+w*.7,A=Ug();Ts(A,z),h.group.add(A),p.push({mesh:A,angle:z,speed:y*d,burst:0,dead:!1,wait:si(h.index+E)*.35,hop:0,pulse:w*6})}),h.rollers=p}function c(h){const m=r(h),g=a(h,m);e.add(g);const _={index:h,y:Qo(h),cells:m,group:g,rollers:[],bombBlock:Array($e).fill(!1),scored:!1,breaking:!1,shards:[],thump:0,finish:o>0&&h===o-1,finishPad:o>0&&h===o};l(_),n.push(_)}function u(h,m=[]){return h.isMesh&&m.push(h),h.children.forEach(g=>u(g,m)),m}function f(h){h.breaking||(h.breaking=!0,h.shards=u(h.group).map((m,g)=>{const _=m.material.clone();_.transparent=!0,_.depthWrite=!1,m.material=_;const p=si(h.index*17+g+1),d=si(h.index*31+g+5);return{mesh:m,vx:(p-.5)*2.6,vy:1.1+d*1.8,vz:(d-.5)*1.6,spinX:(p-.5)*9,spinZ:(d-.5)*11,life:.55+p*.35}}))}for(let h=0;h<Xo;h++)c(h);return{root:e,rings:n,setGenerator(h,m){r=h,s=g=>Zo(g,m),o=m.floors||0},applyTheme({platformColors:h,poleColor:m,platformSkin:g,poleSkin:_}){const p=Rr("platform",g||"original");p.repeat.set(2,2),h&&h.forEach((d,v)=>{qt[v]&&(qt[v].color.setHex(d),qt[v].map=p,qt[v].emissive.setHex(g==="ember"?3803136:g==="ice"?532520:0),qt[v].needsUpdate=!0)}),m!=null&&Xt.color.setHex(m),Xt.map=Rr("pole",_||"wood"),Xt.map.repeat.set(1,10),Xt.emissive.setHex(_==="neon"?538672:0),Xt.needsUpdate=!0},rotate(h){e.rotation.y+=h},ballLocalAngle(h){const m=Rg.copy(h);e.updateMatrixWorld(),e.worldToLocal(m);let g=Math.atan2(-m.z,m.x);return g<0&&(g+=Math.PI*2),g},segmentIndex(h){const m=Math.PI*2;let g=h%m;return g<0&&(g+=m),Math.round(g/vn)%$e},carveGap(h,m){const g=this.segmentIndex(m);[g,(g+1)%$e,(g+$e-1)%$e].forEach(v=>{h.cells[v]="gap"}),h.group.children.filter(v=>{if(!v.isMesh)return!1;const M=(v.rotation.y+Math.PI*2)%(Math.PI*2),x=Math.round(M/vn)%$e;return h.cells[x]==="gap"}).forEach(v=>h.group.remove(v));const d=el(h.cells);h.bombBlock=d.blocked;for(const v of h.rollers){if(v.dead)continue;const M=Sr(v.angle);(h.cells[M]==="gap"||h.bombBlock[M])&&(v.angle=tl(h.cells,v.angle),Ts(v.mesh,v.angle,mn))}},kindAt(h,m){if(h.breaking)return"gap";const g=this.segmentIndex(m),_=h.cells[g];if(_!=="gap")return _;const p=Math.PI*2/$e,d=Math.PI*2;let v=m%d;v<0&&(v+=d);const M=g*p;let x=v-M;if(x>Math.PI&&(x-=d),x<-Math.PI&&(x+=d),Math.abs(x)<p*.32)return"gap";const R=x>=0?(g+1)%$e:(g+$e-1)%$e,E=h.cells[R];return E==="gap"?"gap":E},hitRoller(h,m,g){const _=yn*.01;for(const p of n){if(p.breaking)continue;const d=p.y+Zt/2+Jt;if(!(Math.abs(h-d)>Jt+.28))for(const v of p.rollers){if(v.dead||v.burst>0||g&&h>d-.02)continue;let M=m-v.angle;if(M>Math.PI&&(M-=Math.PI*2),M<-Math.PI&&(M+=Math.PI*2),Math.abs(M)*yn<Jt+.22+_)return v}}return null},bombThreat(h,m){let g=0;for(const _ of n){if(_.breaking)continue;const p=_.y+Zt/2+Jt,d=Math.abs(h-p);if(!(d>1.35))for(const v of _.rollers){if(v.dead||v.burst>0)continue;let M=m-v.angle;M>Math.PI&&(M-=Math.PI*2),M<-Math.PI&&(M+=Math.PI*2);const x=(1-Math.min(1,Math.abs(M)/1.15))*(1-d/1.35);x>g&&(g=x)}}return g},burstRoller(h){h.burst=.42},thumpRing(h){h.thump=1},shatterAbove(h){for(const m of n)m.breaking||!m.scored||m.y>h+ia*lg&&f(m)},update(h,m){mn+=h;const g=.45+.55*Math.abs(Math.sin(mn*10));Cr.color.setRGB(1,.28+g*.5,.04);const _=.28+.42*Math.abs(Math.sin(mn*3.4));Vs.emissive.setRGB(_,.03,.01);const p=.38+.52*Math.abs(Math.sin(mn*2.5));ks.emissive.setRGB(p,p*.52,.06),Ws.emissive.setRGB(.55+p*.45,.38+p*.4,.1),Xt.map&&(Xt.map.offset.y+=h*(Xt.emissive.g>.1?.45:.08)),qt[0].map&&(qt[0].map.offset.x+=h*.05);for(const d of n){if(d.thump>0){d.thump=Math.max(0,d.thump-h*5.5);const v=1+d.thump*.07;d.group.scale.set(v,1-d.thump*.1,v)}else if(d.finishPad){const v=1.04+Math.sin(mn*2.3)*.035;d.group.scale.set(v,1,v)}else if(d.finish){const v=1.02+Math.sin(mn*2.3)*.02;d.group.scale.set(v,1,v)}else d.group.scale.set(1,1,1);if(!d.breaking){for(const v of d.rollers){if(v.dead)continue;if(v.pulse+=h,v.burst>0){v.burst-=h;const y=.42-v.burst,A=y<.08?1-y*4:1+y*9;v.mesh.scale.setScalar(Math.max(.01,A));const U=v.mesh.userData.spark;U&&U.scale.setScalar(2+y*10),v.burst<=0&&(v.dead=!0,v.mesh.visible=!1);continue}if(v.hop>0&&(v.hop=Math.max(0,v.hop-h*3.2)),v.wait>0)v.wait-=h;else{const y=v.speed*(.88+.12*Math.sin(v.pulse*1.6)),A=v.angle+y*h,U=d.bombBlock||[],V=$=>d.cells[$]==="gap"||U[$];V(Sr(v.angle))?(v.angle=tl(d.cells,v.angle),v.speed*=-1):V(Sr(A))?v.speed*=-1:v.angle=A}const M=Math.PI*2;v.angle=(v.angle%M+M)%M,Ts(v.mesh,v.angle,mn,v.hop);const x=1+Math.abs(Math.sin(v.pulse*6))*.08;v.mesh.scale.set(x,1.05-(x-1),x);const R=v.mesh.userData.body;R&&(R.rotation.z-=v.speed*h*(yn/Jt)*1.2,R.rotation.x=Math.sin(v.pulse*8)*.15);const E=v.mesh.userData.spark;E&&(E.scale.setScalar(.7+g*1.1),E.position.x=Math.sin(v.pulse*14)*.08,E.position.z=Math.cos(v.pulse*11)*.08);const w=v.mesh.userData.fuse;w&&(w.rotation.z=Math.sin(v.pulse*9)*.35);const z=v.mesh.userData.embers;z&&z.forEach((y,A)=>{const U=v.pulse*(9+A*4)+A;y.position.set(Math.sin(U)*.22,Jt*.2+U%.35,Math.cos(U*1.3)*.22),y.scale.setScalar(.25+g*.4)})}continue}for(const v of d.shards){v.life-=h,v.vy-=Jl*1.6*h,v.mesh.position.x+=v.vx*h,v.mesh.position.y+=v.vy*h,v.mesh.position.z+=v.vz*h,v.mesh.rotation.x+=v.spinX*h,v.mesh.rotation.z+=v.spinZ*h;const M=Math.max(0,v.life/.7);v.mesh.scale.setScalar(.4+.6*M),v.mesh.material&&(v.mesh.material.opacity=M)}}for(;n.length&&n[0].breaking&&n[0].shards.every(d=>d.life<=0);){const d=n.shift();d.shards.forEach(v=>{v.mesh.material&&!jo.has(v.mesh.material)&&v.mesh.material.dispose()}),e.remove(d.group),c(n[n.length-1].index+1)}t.position.y=m-20},reset(){var h;for(;n.length;){const m=n.shift();(h=m.shards)==null||h.forEach(g=>{g.mesh.material&&!jo.has(g.mesh.material)&&g.mesh.material.dispose()}),e.remove(m.group)}e.rotation.y=0;for(let m=0;m<Xo;m++)c(m);t.position.y=-20}}}const Fg=["ball","platform","pole","bg"];function Og(i,{progress:e,locale:t,pack:n,onBuy:r,onEquip:s}){const o=e.data.equipped;i.innerHTML=Fg.map(a=>{const l=ra[a].map(u=>{const f=e.owns(a,u.id),h=o[a]===u.id,m=u[t]||u.ru;let g="";return h?g=`<span class="tag">${n.equipped}</span>`:f?g=`<button class="btn mini" data-act="equip" data-slot="${a}" data-id="${u.id}">${n.owned}</button>`:u.chest?g=`<span class="tag dim">${n.fromChest}</span>`:g=`<button class="btn mini primary" data-act="buy" data-slot="${a}" data-id="${u.id}">${n.buy} · ${u.price}</button>`,`<div class="shop-item${h?" on":""}">
          <i class="swatch live" style="background:${Gs(a,u.id)}"></i>
          <div>
            <b>${m}</b>
            ${g}
          </div>
        </div>`}).join("");return`<section class="shop-slot"><h3>${a==="ball"?n.slotBall:a==="platform"?n.slotPlatform:a==="pole"?n.slotPole:n.slotBg}</h3>${l}</section>`}).join(""),i.querySelectorAll("[data-act]").forEach(a=>{a.addEventListener("click",()=>{const l=a.getAttribute("data-slot"),c=a.getAttribute("data-id");a.getAttribute("data-act")==="buy"?r(l,c):s(l,c)})})}const nl=new Vn(.05,6,6),Bg=new Vn(.28,10,8),zg=new na(.18,.42,24),Gg=new ki(.16,.16,.045,14),Hg=new zn({color:16769126,transparent:!0,opacity:1});function il(i,e,t,n,r={}){const s=[];for(let o=0;o<t;o++){const a=new at(i,new zn({color:e,transparent:!0,opacity:0,depthWrite:!1,...r}));a.visible=!1,n.add(a),s.push({mesh:a,vx:0,vy:0,vz:0,life:0,max:.4,spin:0})}return s}function Vg(i){const e=il(nl,16770752,48,i),t=il(nl,16738840,40,i),n=[];for(let x=0;x<20;x++){const R=new at(Gg,Hg.clone());R.visible=!1,R.material.transparent=!0,R.rotation.x=Math.PI/2,i.add(R),n.push({mesh:R,vx:0,vy:0,vz:0,life:0,spin:0})}const r=new at(Bg,new zn({color:16772744,transparent:!0,opacity:0,depthWrite:!1}));r.visible=!1,i.add(r);const s=r.clone();s.material=r.material.clone(),s.material.color.setHex(16726546),i.add(s);const o=new at(zg,new zn({color:16761162,transparent:!0,opacity:0,depthWrite:!1,side:Kt}));o.rotation.x=-Math.PI/2,o.visible=!1,i.add(o);const a=48,l=new Float32Array(a*3);for(let x=0;x<a;x++)l[x*3]=(Math.random()-.5)*22,l[x*3+1]=(Math.random()-.5)*28,l[x*3+2]=-6-Math.random()*16;const c=new Lt;c.setAttribute("position",new Vt(l,3));const u=new Bl({color:16773832,size:.08,transparent:!0,opacity:.55,depthWrite:!1}),f=new gm(c,u);i.add(f);let h=0,m=0,g=0,_=0,p=0,d=!1,v=0;function M(x,R,E,w,z,y,A,U,V){let $=R;for(let P=0;P<A;P++){const I=x[$%x.length];$+=1,I.mesh.visible=!0,I.mesh.position.set(E,w,z),I.mesh.material.color.setHex(y),I.mesh.material.opacity=.95,I.vx=(Math.random()-.5)*U,I.vy=.4+Math.random()*U,I.vz=(Math.random()-.5)*U,I.life=V*(.7+Math.random()*.5),I.max=I.life}return $}return{burst(x,R,E,w=16770752,z=8){m=M(e,m,x,R,E,w,z,2.4,.42)},explode(x,R,E){p=.55,r.visible=!0,r.position.set(x,R,E),r.scale.setScalar(.35),r.material.opacity=1,r.material.color.setHex(16774320),s.visible=!0,s.position.set(x,R,E),s.scale.setScalar(.2),s.material.opacity=.95,o.visible=!0,o.position.set(x,R,E),o.scale.setScalar(.3),o.material.opacity=.9,g=M(t,g,x,R,E,16751130,14,5.4,.55),g=M(t,g,x,R,E,16772710,10,6.2,.4),g=M(t,g,x,R,E,3809816,8,2.2,.7)},coins(x,R,E,w=3){for(let z=0;z<w;z++){const y=n[_%n.length];_+=1,y.mesh.visible=!0,y.mesh.position.set(x,R,E),y.mesh.scale.setScalar(1),y.vx=(Math.random()-.5)*1.8,y.vy=2.2+Math.random()*2.2,y.vz=(Math.random()-.5)*1.8,y.life=.95+Math.random()*.3,y.spin=10+Math.random()*12}},punch(x=.16){h=x},camKick(){const x=h;return h*=.84,h<.002&&(h=0),x},setStarColor(x){u.color.setHex(x)},setThreat(x){d=x},update(x,R){if(f.position.y=R,f.rotation.y+=x*(d?.12:.04),u.opacity=.35+Math.abs(Math.sin(performance.now()*(d?.004:.0016)))*(d?.4:.25),d&&(v+=x,v>.05)){v=0;const E=t[g%t.length];g+=1,E.mesh.visible=!0,E.mesh.position.set((Math.random()-.5)*10,R+6.5,-2-Math.random()*8),E.mesh.material.color.setHex(Math.random()>.5?16730642:16761162),E.mesh.material.opacity=.9,E.vx=(Math.random()-.5)*.8,E.vy=-3.2-Math.random()*3.5,E.vz=(Math.random()-.5)*.8,E.life=.7+Math.random()*.3,E.max=E.life}p>0&&(p-=x,r.scale.addScalar(x*9),r.material.opacity=Math.max(0,p*1.8),s.scale.addScalar(x*14),s.material.opacity=Math.max(0,p*1.4),o.scale.addScalar(x*11),o.material.opacity=Math.max(0,p*1.6),o.rotation.z+=x*4,p<=0&&(r.visible=!1,s.visible=!1,o.visible=!1));for(const E of e)E.mesh.visible&&(E.life-=x,E.vy-=6*x,E.mesh.position.x+=E.vx*x,E.mesh.position.y+=E.vy*x,E.mesh.position.z+=E.vz*x,E.mesh.material.opacity=Math.max(0,E.life*2.2),E.mesh.scale.setScalar(.6+E.life),E.life<=0&&(E.mesh.visible=!1));for(const E of t){if(!E.mesh.visible)continue;E.life-=x,E.vy-=8*x,E.mesh.position.x+=E.vx*x,E.mesh.position.y+=E.vy*x,E.mesh.position.z+=E.vz*x;const w=Math.max(0,E.life/(E.max||.4));E.mesh.material.opacity=w,E.mesh.scale.setScalar(.5+(1-w)*1.4),E.life<=0&&(E.mesh.visible=!1)}for(const E of n){if(!E.mesh.visible)continue;E.life-=x,E.vy-=7.2*x,E.mesh.position.x+=E.vx*x,E.mesh.position.y+=E.vy*x,E.mesh.position.z+=E.vz*x,E.mesh.rotation.y+=E.spin*x,E.mesh.rotation.z+=x*3;const w=Math.max(0,E.life);E.mesh.material.transparent=!0,E.mesh.material.opacity=Math.min(1,w*3),E.mesh.scale.setScalar(.7+w),E.life<=0&&(E.mesh.visible=!1)}}}}function kg(i){return i>0&&i<80?i*zs:i}function Wg(i,e,t,n){if(!i||i.state!=="running")return;const r=i.createOscillator(),s=i.createGain();r.frequency.value=e,r.type="sine",s.gain.setValueAtTime(Math.max(1e-4,n),i.currentTime),r.connect(s),s.connect(i.destination),r.start();const o=i.currentTime+Math.max(.02,t);s.gain.exponentialRampToValueAtTime(1e-4,o),r.stop(o)}function Xg(i){if(i==="fuse")return Tg;const e=bg.find(t=>t.id===i);return e||mi}function qg(i,e,t,{progress:n,locale:r,pack:s}){var Ne;const o=new mm;o.background=new qe(Yo),o.fog=new js(Yo,14,34);const a=new Ct(55,1,.1,80),l=new Ol({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),o.add(new tg(16777215,.35)),o.add(new Zm(16771272,4008778,.85));const c=new eg(16773852,.65);c.position.set(4,10,6),o.add(c);const u=Ng(o),f=Mg(o),h=Vg(o);o.add(f.mesh);const m=new D;let g="menu",_="classic",p=0,d=kg(e.getBest());d!==e.getBest()&&e.setBest(d);let v=!0,M=!1,x=e.soundOn(),R=null,E=performance.now(),w=0,z=0,y=0,A=!1,U=!1,V=0,$=0,P=0,I=2.2;function H(){g!=="play"||M||!U||f.hop(I+ia*.85)&&(q(700,.07,.05),h.burst(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z,16769162,10),h.punch(.08))}const Z=yg(i,{onRotate(O){g!=="play"||M||u.rotate(O)},onTap:H,onHop:H});function K(){if(R)return;const O=window.AudioContext||window.webkitAudioContext;O&&(R=new O)}function q(O,k,ue){x&&(K(),R&&(R.state==="suspended"&&R.resume(),Wg(R,O,k,ue)))}function j(){e.stopGameplay()}function se(O){x=O,e.setSoundOn(O),t.sound.classList.toggle("muted",!O),!O&&R&&R.suspend()}function ae(){return _}function X(){return n.data.best[ae()]||0}function ne(){n.recordScore(ae(),p),_==="classic"&&p>d&&(d=p,e.setBest(d)),t.menuBest.textContent=String(X()||d),t.deadBest.textContent=String(X()||d)}function he(O){t.menu.classList.toggle("hidden",O!=="menu"),t.dead.classList.toggle("hidden",O!=="dead"),t.shop.classList.toggle("hidden",O!=="shop"),t.help.classList.toggle("hidden",O!=="help"),t.win.classList.toggle("hidden",O!=="win"),t.hud.classList.toggle("hidden",O!=="play"),t.heat&&t.heat.classList.toggle("hidden",!(O==="play"&&U)),t.heat&&t.heat.classList.toggle("on",O==="play"&&U)}let Ee=null;function ve(O){O&&(O.classList.remove("pop"),O.offsetWidth,O.classList.add("pop"))}function be(){const O=String(n.data.coins);t.menuCoins.textContent=O,t.shopCoins.textContent=O,t.hudCoins.textContent=O,Ee!==null&&Ee!==O&&(ve(t.menuCoins),ve(t.shopCoins),ve(t.hudCoins)),Ee=O}function Le(){const O=sn("ball",n.data.equipped.ball)||sn("ball","cream"),k=sn("platform",n.data.equipped.platform)||sn("platform","original"),ue=sn("pole",n.data.equipped.pole)||sn("pole","wood"),_e=sn("bg",n.data.equipped.bg)||sn("bg","dusk");f.setSkin(O),u.applyTheme({platformColors:k.colors,poleColor:ue.color,platformSkin:k.id,poleSkin:ue.id}),o.background.setHex(_e.color),o.fog.color.setHex(_e.fog),h.setStarColor(_e.id==="sky"?11065599:_e.id==="void"?8939263:16773832),document.documentElement.style.setProperty("--bg",`#${_e.color.toString(16).padStart(6,"0")}`)}function Se(){Og(t.shopRoot,{progress:n,locale:r,pack:s,onBuy(O,k){n.buy(O,k)&&(Le(),be(),Se(),q(620,.08,.05))},onEquip(O,k){n.equip(O,k),Le(),Se(),q(480,.06,.04)}})}function Ie(){var _e,De;const O=window.visualViewport,k=Math.max(1,Math.floor((_e=O==null?void 0:O.width)!=null?_e:window.innerWidth)),ue=Math.max(1,Math.floor((De=O==null?void 0:O.height)!=null?De:window.innerHeight));document.documentElement.style.setProperty("--app-h",`${ue}px`),l.setSize(k,ue,!1),a.aspect=k/ue,a.updateProjectionMatrix()}function L(){const O=f.mesh.position.y,k=a.aspect<.86,ue=k?62:54;a.fov!==ue&&(a.fov=ue,a.updateProjectionMatrix());const _e=h.camKick();k?(a.position.set(0,O+6.5+_e,8.6+_e*2),a.lookAt(0,O-1.35,0)):(a.position.set(0,O+5.8+_e,7.2+_e*2),a.lookAt(0,O-1.1,0))}function oe(){w>=2?(t.combo.classList.remove("hidden"),t.combo.textContent=`x${w}`,t.combo.classList.remove("pulse"),t.combo.offsetWidth,t.combo.classList.add("pulse")):(t.combo.classList.add("hidden"),t.combo.classList.remove("pulse"))}function J(){if(t.score.textContent=String(p),t.score.classList.remove("has-goal"),!!t.goal){if(!V){t.goal.classList.add("hidden");return}t.goal.classList.remove("hidden"),t.goal.textContent=`${s.floors} ${$}/${V}`}}function re(O){O&&(_=O);const k=Xg(_);U=_==="fuse",V=k.floors||0,$=0,A=!1,w=0,I=2.2,z=0,y=0,u.setGenerator(ue=>Hs(ue,k),k),Le(),u.reset(),f.reset(),p=0,v=!0,t.score.classList.remove("has-goal"),J(),t.continueBtn.classList.remove("hidden"),t.hopBtn.classList.toggle("hidden",!U),t.comboLayer&&t.comboLayer.replaceChildren(),oe(),be(),g="play",M=!1,he("play"),e.startGameplay(),h.setThreat(U),U&&h.setStarColor(16737860),P=0,n.achieve("first_play",20),be(),q(520,.08,.05)}function Y(O){const k=Math.floor(z/8),ue=Math.floor(p/200),_e=O?25:0,De=Math.max(1,y+k+ue+_e);return n.addCoins(De),p>=1e3&&n.achieve("score_1000",40),ne(),be(),De}function Te(){t.flash.classList.remove("hidden"),t.flash.classList.remove("boom"),t.flash.offsetWidth,t.flash.classList.add("boom"),window.setTimeout(()=>{t.flash.classList.add("hidden"),t.flash.classList.remove("boom")},360)}function ge(O){t.flash.classList.add("hidden"),t.flash.classList.remove("boom"),g="dead",t.deadScore.textContent=String(p),t.deadBest.textContent=String(X()||d),t.deadCoins.textContent=String(O),t.continueBtn.classList.toggle("hidden",!v),he("dead"),j(),q(140,.28,.08)}function b(O=!1){if(g!=="play"||f.invuln>0)return;g="boom",U&&!O&&Te(),h.punch(O?.5:.32),h.burst(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z,16724760,O?6:12);const k=Y(!1);if(O){q(80,.22,.12),window.setTimeout(()=>ge(k),420);return}ge(k)}function S(){const O=Eg.filter(ue=>!n.owns(ue.slot,ue.id));if(!O.length){const ue=18+Math.floor(Math.random()*18);return n.addCoins(ue),{type:"coins",amount:ue}}const k=O[Math.floor(Math.random()*O.length)];return n.grant(k.slot,k.id),{type:"skin",...k}}function F(O){const k=t.chest,ue=t.chestFlies;if(k&&(k.classList.remove("open","shake"),k.offsetWidth,k.classList.add("shake"),window.setTimeout(()=>k.classList.add("open"),360)),ue){ue.replaceChildren();const _e=O.type==="coins"?Math.min(16,7+Math.floor(O.amount/3)):12;for(let De=0;De<_e;De++){const Ce=document.createElement("i");Ce.className="fly-coin",Ce.style.setProperty("--dx",`${(Math.random()-.5)*170}px`),Ce.style.setProperty("--dy",`${-30-Math.random()*110}px`),Ce.style.animationDelay=`${.32+De*.045}s`,ue.appendChild(Ce)}if(O.type==="skin"){const De=document.createElement("i");De.className="fly-skin",De.style.background=Gs(O.slot,O.id),ue.appendChild(De)}}if(t.chestLoot)if(t.chestLoot.replaceChildren(),O.type==="skin"){const _e=sn(O.slot,O.id),De=document.createElement("i");De.className="swatch live prize-swatch",De.style.background=Gs(O.slot,O.id);const Ce=document.createElement("b");Ce.textContent=(_e==null?void 0:_e[r])||O.id,t.chestLoot.append(De,Ce)}else{const _e=document.createElement("i");_e.className="coin-icon";const De=document.createElement("b");De.textContent=`+${O.amount}`,t.chestLoot.append(_e,De)}}function te(){if(g==="win"){he("win");return}if(g!=="play"&&g!=="boom")return;g="win",t.flash.classList.add("hidden"),t.flash.classList.remove("boom"),t.winScore.textContent=String(p),he("win"),j(),(_==="easy"||_==="normal"||_==="hard")&&(n.data.cleared[_]=!0,n.save(),_==="easy"&&n.achieve("beat_easy",50),_==="normal"&&n.achieve("beat_normal",80),_==="hard"&&n.achieve("beat_hard",120));const O=S(),k=Y(!0);h.punch(.22),h.burst(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z,16770406,14),h.coins(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z,8),t.winCoins.textContent=String(k),F(O),be(),Le(),q(880,.2,.06),window.setTimeout(()=>q(980,.12,.05),280),window.setTimeout(()=>q(1180,.16,.06),520)}function ie(){v=!1,f.invuln=.9,f.vy=0;const O=f.mesh.position.y,k=u.rings.find(ue=>Math.abs(ue.y-O)<1.4)||u.rings[0];k&&(u.carveGap(k,u.ballLocalAngle(f.mesh.position)),f.bounce(k.y+Zt/2+Wt+.12),I=f.mesh.position.y,u.shatterAbove(k.y)),g="play",he("play"),e.startGameplay()}function ee(O){if(!t.comboLayer)return;m.copy(f.mesh.position).project(a);const k=(m.x*.5+.5)*i.clientWidth,ue=(-m.y*.5+.5)*i.clientHeight,_e=document.createElement("div");_e.className=O>=300?"combo-pop hot":"combo-pop",_e.textContent=`+${O}`,_e.style.left=`${k}px`,_e.style.top=`${ue}px`,t.comboLayer.appendChild(_e),window.setTimeout(()=>_e.remove(),800)}function ye(O,k){return O.cells[u.segmentIndex(k)]}function pe(O,k){const ue=Math.atan2(Wt*1.05,yn);return[k,k-ue,k+ue].some(_e=>ye(O,_e)==="danger")}function xe(O,k){return pe(O,k)?"danger":ye(O,k)==="gap"?"gap":"safe"}function Re(O){const k=f.mesh.position.y,ue=u.ballLocalAngle(f.mesh.position),_e=k-Wt,De=k+Wt,Ce=k-f.vy*O-Wt;if(U&&f.invuln<=0){const C=u.hitRoller(k,ue,f.vault>0);if(C){C.mesh.getWorldPosition(m),u.burstRoller(C),h.explode(m.x,m.y,m.z),b(!0);return}}for(const C of u.rings){const ce=C.y+Zt/2,fe=C.y-Zt/2;if(!C.scored&&De<fe-.02){if(xe(C,ue)==="danger"){b();return}C.scored=!0,w+=1,p+=zs*w,y+=w,$+=1,J(),t.score.classList.remove("pop"),t.score.offsetWidth,t.score.classList.add("pop"),oe(),w>=2&&(f.burst(),ee(zs*w),h.burst(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z,16765514,10),h.punch(.1)),h.coins(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z,Math.min(6,w)),p>=1e3&&n.achieve("rings_run",15),w>=4&&n.achieve("combo_4",25),q(660+Math.min(8,w)*28,.07,.04),V&&(C.index+1>=V||$>=V)&&(A=!0)}const Pe=_e<ce+.28&&De>fe-.1,we=_e<ce+.12&&De>fe,Je=f.vy<0&&Ce>=ce-.04&&_e<=ce+.14,Ye=f.vy<0&&Ce>ce&&_e<fe;if((C.finishPad||V>0&&C.index>=V)&&(Pe||we||Je||Ye)){A=!0,f.bounce(ce+Wt),I=f.mesh.position.y,te();return}if(Pe&&pe(C,ue)&&f.vy<3){b();return}if(!we&&!Je&&!Ye||C.scored&&!Ye)continue;const ut=xe(C,ue);if(ut==="danger"){b();return}if(ut==="gap")continue;if(k<C.y){f.mesh.position.y=fe-Wt-.08,f.vy>0?f.vy=-Math.abs(f.vy)*.45:f.vy=Math.min(f.vy,-1.2),q(300,.05,.03);return}if(!(f.vy>.55&&_e>=ce-.02)){f.bounce(ce+Wt),I=f.mesh.position.y,w=0,oe(),u.thumpRing(C),u.shatterAbove(C.y),h.burst(f.mesh.position.x,f.mesh.position.y,f.mesh.position.z),h.punch(.14),q(420,.06,.035),A&&te();return}}if(!A)return;const le=u.rings.find(C=>C.finishPad);le&&De<le.y-Zt/2&&(f.bounce(le.y+Zt/2+Wt),te())}function Oe(O){requestAnimationFrame(Oe);const k=Math.min(.033,(O-E)/1e3);if(E=O,g==="play"&&!M){if(z+=k,Math.floor(z/10)>Math.floor((z-k)/10)&&(n.addCoins(1),be()),U){P+=k;const ue=u.bombThreat(f.mesh.position.y,u.ballLocalAngle(f.mesh.position));t.heat&&t.heat.classList.toggle("hot",ue>.48),P>1.05&&(P=0,q(196,.06,.028))}Z.step(k),f.invuln>0&&(f.invuln-=k),f.fall(k,Math.max(0,w-1)),Re(k),u.update(k,f.mesh.position.y),h.update(k,f.mesh.position.y),L()}else g==="menu"||g==="shop"||g==="help"?(u.rotate(k*.25),f.idle(k)):g!=="boom"&&u.rotate(k*.08),u.update(k,f.mesh.position.y),h.update(k,f.mesh.position.y),L();l.render(o,a)}function Q(){M=!0,e.stopGameplay(),R&&x&&R.suspend()}function Xe(){document.hidden||(M=!1,E=performance.now(),g==="play"&&e.startGameplay(),R&&x&&R.resume())}function Be(){g="menu",he("menu"),f.reset(),u.setGenerator(O=>Hs(O,mi),mi),h.setThreat(!1),Le(),u.reset(),t.hopBtn.classList.add("hidden"),t.menuBest.textContent=String(n.data.best.classic||d),be(),L()}return t.classic.addEventListener("click",()=>{K(),re("classic")}),t.easy.addEventListener("click",()=>{K(),re("easy")}),t.normal.addEventListener("click",()=>{K(),re("normal")}),t.hard.addEventListener("click",()=>{K(),re("hard")}),t.fuse.addEventListener("click",()=>{K(),re("fuse")}),t.shopBtn.addEventListener("click",()=>{Se(),be(),g="shop",he("shop")}),t.shopBack.addEventListener("click",Be),t.helpBtn.addEventListener("click",()=>{g="help",he("help")}),t.helpBack.addEventListener("click",Be),t.winMenu.addEventListener("click",Be),t.again.addEventListener("click",async()=>{Q(),await e.showFullscreen(),re(_)}),t.continueBtn.addEventListener("click",async()=>{if(Q(),!await e.showRewarded()){t.continueBtn.classList.add("hidden"),Xe();return}ie(),M=!1}),t.menuBtn.addEventListener("click",async()=>{Q(),await e.showFullscreen(),Be()}),t.hopBtn.addEventListener("click",O=>{O.stopPropagation(),H()}),t.sound.addEventListener("click",()=>{K(),se(!x),x&&q(500,.06,.05)}),document.addEventListener("visibilitychange",()=>{document.hidden?Q():Xe()}),e.onPause(Q),e.onResume(Xe),window.addEventListener("resize",Ie),(Ne=window.visualViewport)==null||Ne.addEventListener("resize",Ie),t.menuBest.textContent=String(n.data.best.classic||d),t.deadBest.textContent=String(d),se(x),t.sound.classList.remove("hidden"),Le(),be(),Se(),Ie(),L(),requestAnimationFrame(Oe),{renderer:l,markReady(){return e.ready()}}}const Di="kolodets_best",Ui="kolodets_sound";function jl(){return Number(localStorage.getItem(Di))||0}function Ql(){return localStorage.getItem(Ui)!=="0"}function Yg(){let i=!1;return{isMock:!0,localeLang:"ru",async ready(){},startGameplay(){i=!0},stopGameplay(){i=!1},isGameplay(){return i},getBest(){return jl()},setBest(e){localStorage.setItem(Di,String(e))},soundOn(){return Ql()},setSoundOn(e){localStorage.setItem(Ui,e?"1":"0")},showFullscreen(){return Promise.resolve(!1)},showRewarded(){return Promise.resolve(!0)},onPause(){},onResume(){},getJSON(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},setJSON(e,t){localStorage.setItem(e,JSON.stringify(t))}}}function Jg(i){var s,o;let e=!1,t=null;function n(){var a,l;if(!e){e=!0;try{(l=(a=i.features)==null?void 0:a.GameplayAPI)==null||l.start()}catch{e=!1}}}function r(){var a,l;if(e){e=!1;try{(l=(a=i.features)==null?void 0:a.GameplayAPI)==null||l.stop()}catch{e=!1}}}return{isMock:!1,localeLang:((o=(s=i.environment)==null?void 0:s.i18n)==null?void 0:o.lang)||"ru",async ready(){var a,l,c;t=await((a=i.getStorage)==null?void 0:a.call(i).catch(()=>null)),(c=(l=i.features)==null?void 0:l.LoadingAPI)==null||c.ready()},startGameplay:n,stopGameplay:r,isGameplay(){return e},getBest(){var c;const a=Number((c=t==null?void 0:t.getItem)==null?void 0:c.call(t,Di)),l=jl();return a>l?a:l},setBest(a){var l;localStorage.setItem(Di,String(a)),(l=t==null?void 0:t.setItem)==null||l.call(t,Di,String(a))},soundOn(){if(t){const a=t.getItem(Ui);if(a!=null)return a!=="0"}return Ql()},setSoundOn(a){var c;const l=a?"1":"0";localStorage.setItem(Ui,l),(c=t==null?void 0:t.setItem)==null||c.call(t,Ui,l)},showFullscreen(){return new Promise(a=>{var l;if(!((l=i.adv)!=null&&l.showFullscreenAdv)){a(!1);return}r(),i.adv.showFullscreenAdv({callbacks:{onClose(c){a(!!c)},onError(){a(!1)}}})})},showRewarded(){return new Promise(a=>{var c;if(!((c=i.adv)!=null&&c.showRewardedVideo)){a(!1);return}let l=!1;r(),i.adv.showRewardedVideo({callbacks:{onRewarded(){l=!0},onClose(){a(l)},onError(){a(!1)}}})})},onPause(a){var l;(l=i.on)==null||l.call(i,"game_api_pause",a)},onResume(a){var l;(l=i.on)==null||l.call(i,"game_api_resume",a)},getJSON(a,l){var c;try{const f=((c=t==null?void 0:t.getItem)==null?void 0:c.call(t,a))||localStorage.getItem(a);return f?JSON.parse(f):l}catch{return l}},setJSON(a,l){var u;const c=JSON.stringify(l);localStorage.setItem(a,c),(u=t==null?void 0:t.setItem)==null||u.call(t,a,c)}}}async function Kg(){const i=window.YaGames;if(!i)return Yg();const e=await i.init();return Jg(e)}const rl="kolodets_progress_v2";function wi(){return{coins:40,owned:{ball:["cream"],platform:["original"],pole:["wood"],bg:["dusk"]},equipped:{ball:"cream",platform:"original",pole:"wood",bg:"dusk"},best:{classic:0,fuse:0,easy:0,normal:0,hard:0},cleared:{easy:!1,normal:!1,hard:!1},fuseUnlocked:!1,achievements:{}}}function Zg(i){const e=Object.assign(wi(),i.getJSON(rl,{}));e.owned||(e.owned=wi().owned),e.equipped||(e.equipped=wi().equipped),e.best||(e.best=wi().best),e.cleared||(e.cleared=wi().cleared),e.achievements||(e.achievements={});function t(){i.setJSON(rl,e)}function n(u,f){return e.owned[u].includes(f)}function r(u){return u<=0?0:(e.coins+=u,t(),u)}function s(u,f){return n(u,f)?!1:(e.owned[u].push(f),t(),!0)}function o(u,f){const h=ra[u].find(m=>m.id===f);return!h||h.chest||n(u,f)||e.coins<h.price?!1:(e.coins-=h.price,e.owned[u].push(f),e.equipped[u]=f,t(),!0)}function a(u,f){return n(u,f)?(e.equipped[u]=f,t(),!0):!1}function l(u,f){return f>(e.best[u]||0)?(e.best[u]=f,t(),!0):!1}function c(u,f){return e.achievements[u]?0:(e.achievements[u]=!0,r(f))}return t(),{data:e,save:t,owns:n,addCoins:r,grant:s,buy:o,equip:a,recordScore:l,achieve:c}}function $g(){const i=e=>e.preventDefault();document.addEventListener("contextmenu",i),document.addEventListener("selectstart",i),document.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1}),document.addEventListener("gesturestart",i),window.addEventListener("touchmove",e=>{var t,n;(n=(t=e.target)==null?void 0:t.closest)!=null&&n.call(t,".panel.scroll, .shop-body")||e.preventDefault()},{passive:!1})}function jg(){return{menu:document.getElementById("screen-menu"),dead:document.getElementById("screen-dead"),shop:document.getElementById("screen-shop"),help:document.getElementById("screen-help"),win:document.getElementById("screen-win"),hud:document.getElementById("hud"),score:document.getElementById("hud-score"),goal:document.getElementById("hud-goal"),heat:document.getElementById("fuse-heat"),combo:document.getElementById("hud-combo"),hudCoins:document.getElementById("hud-coins"),chest:document.getElementById("chest"),chestFlies:document.getElementById("chest-flies"),menuCoins:document.getElementById("menu-coins"),shopCoins:document.getElementById("shop-coins"),menuBest:document.getElementById("menu-best"),deadScore:document.getElementById("dead-score"),deadBest:document.getElementById("dead-best"),deadCoins:document.getElementById("dead-coins"),winScore:document.getElementById("win-score"),winCoins:document.getElementById("win-coins"),chestLoot:document.getElementById("chest-loot"),classic:document.getElementById("btn-classic"),easy:document.getElementById("btn-easy"),normal:document.getElementById("btn-normal"),hard:document.getElementById("btn-hard"),fuse:document.getElementById("btn-fuse"),shopBtn:document.getElementById("btn-shop"),shopBack:document.getElementById("btn-shop-back"),shopRoot:document.getElementById("shop-root"),helpBtn:document.getElementById("btn-help"),helpBack:document.getElementById("btn-help-back"),winMenu:document.getElementById("btn-win-menu"),again:document.getElementById("btn-again"),continueBtn:document.getElementById("btn-continue"),menuBtn:document.getElementById("btn-menu"),hopBtn:document.getElementById("btn-hop"),comboLayer:document.getElementById("combo-layer"),sound:document.getElementById("btn-sound"),flash:document.getElementById("flash")}}async function Qg(){$g();const i=await Kg(),e=ac(i.localeLang),t=oc(e),n=Zg(i),r=qg(document.getElementById("game-canvas"),i,jg(),{progress:n,locale:e,pack:t});await new Promise(s=>requestAnimationFrame(s)),await r.markReady()}Qg();

"use strict";var Q=function(c,u){return function(){return u||c((u={exports:{}}).exports,u),u.exports}};var w=Q(function(qr,o){
var S=require('@stdlib/strided-base-reinterpret-complex64/dist');function O(c,u,J,H,j,h,z,b,l,G,B,C,R,x,E){var D,v,i,r,a,q,F,m,e,M,$,U,I,y,K,g,n,_;if(D=c+j+l,D<=1)return R;if(q=S(u,0),F=S(h,0),m=S(G,0),e=S(R,0),M=J*2,$=z*2,U=B*2,I=x*2,y=H*2,K=b*2,g=C*2,n=E*2,j===0&&l===0){for(v=q[y],i=q[y+1],_=1;_<c;_++)y+=M,r=q[y],a=q[y+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I;return R}if(j>0){for(v=F[K],i=F[K+1],_=1;_<j;_++)K+=$,r=F[K],a=F[K+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I;c>0?(r=q[y],a=q[y+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I):l>0&&(r=m[g],a=m[g+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I)}else c>0?(v=q[y],i=q[y+1]):(v=m[g],i=m[g+1]);if(c>0){for(y+=M,_=1;_<c;_++)r=q[y],a=q[y+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I,y+=M;l>0&&(r=m[g],a=m[g+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I)}if(l>0)for(g+=U,_=1;_<l;_++)r=m[g],a=m[g+1],e[n]=r-v,e[n+1]=a-i,v=r,i=a,n+=I,g+=U;return R}o.exports=O
});var Y=Q(function(er,f){
var V=require('@stdlib/blas-base-ccopy/dist').ndarray,T=w();function s(c,u,J,H,j,h,z,b,l,G,B,C,R,x,E,D,v,i,r){var a,q,F,m;if(a=c+h+G,a<=1||u>=a)return x;if(u===0)return V(h,z,b,l,x,E,D),q=D+h*E,V(c,J,H,j,x,E,q),q=D+(h+c)*E,V(G,B,C,R,x,E,q),x;if(u===1)return T(c,J,H,j,h,z,b,l,G,B,C,R,x,E,D),x;for(T(c,J,H,j,h,z,b,l,G,B,C,R,v,i,r),F=a-1,m=1;m<u-1;m++)T(F,v,i,r,0,z,b,l,0,B,C,R,v,i,r),F-=1;return T(F,v,i,r,0,z,b,l,0,B,C,R,x,E,D),x}f.exports=s
});var X=Q(function(ur,p){
var L=require('@stdlib/strided-base-stride2offset/dist'),d=Y();function t(c,u,J,H,j,h,z,b,l,G,B,C,R,x){var E=L(c,H),D=L(j,z),v=L(b,G),i=L(c+j+b-u,C),r=L(c+j+b-1,x);return d(c,u,J,H,E,j,h,z,D,b,l,G,v,B,C,i,R,x,r),B}p.exports=t
});var A=Q(function(lr,W){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=X(),rr=Y();N(k,"ndarray",rr);W.exports=k
});var ar=require("path").join,vr=require('@stdlib/utils-try-require/dist'),ir=require('@stdlib/assert-is-error/dist'),nr=A(),Z,P=vr(ar(__dirname,"./native.js"));ir(P)?Z=nr:Z=P;module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

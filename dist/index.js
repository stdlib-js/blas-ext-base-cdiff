"use strict";var Q=function(c,e){return function(){try{return e||c((e={exports:{}}).exports,e),e.exports}catch(G){throw (e=0, G)}};};var w=Q(function(qr,o){
var S=require('@stdlib/strided-base-reinterpret-complex64/dist');function O(c,e,G,I,j,h,z,b,l,H,B,C,R,x,E){var D,v,i,r,a,q,F,m,u,M,$,U,J,y,K,g,n,_;if(D=c+j+l,D<=1)return R;if(q=S(e,0),F=S(h,0),m=S(H,0),u=S(R,0),M=G*2,$=z*2,U=B*2,J=x*2,y=I*2,K=b*2,g=C*2,n=E*2,j===0&&l===0){for(v=q[y],i=q[y+1],_=1;_<c;_++)y+=M,r=q[y],a=q[y+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J;return R}if(j>0){for(v=F[K],i=F[K+1],_=1;_<j;_++)K+=$,r=F[K],a=F[K+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J;c>0?(r=q[y],a=q[y+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J):l>0&&(r=m[g],a=m[g+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J)}else c>0?(v=q[y],i=q[y+1]):(v=m[g],i=m[g+1]);if(c>0){for(y+=M,_=1;_<c;_++)r=q[y],a=q[y+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J,y+=M;l>0&&(r=m[g],a=m[g+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J)}if(l>0)for(g+=U,_=1;_<l;_++)r=m[g],a=m[g+1],u[n]=r-v,u[n+1]=a-i,v=r,i=a,n+=J,g+=U;return R}o.exports=O
});var Y=Q(function(er,f){
var V=require('@stdlib/blas-base-ccopy/dist').ndarray,T=w();function s(c,e,G,I,j,h,z,b,l,H,B,C,R,x,E,D,v,i,r){var a,q,F,m;if(a=c+h+H,a<=1||e>=a)return x;if(e===0)return V(h,z,b,l,x,E,D),q=D+h*E,V(c,G,I,j,x,E,q),q=D+(h+c)*E,V(H,B,C,R,x,E,q),x;if(e===1)return T(c,G,I,j,h,z,b,l,H,B,C,R,x,E,D),x;for(T(c,G,I,j,h,z,b,l,H,B,C,R,v,i,r),F=a-1,m=1;m<e-1;m++)T(F,v,i,r,0,z,b,l,0,B,C,R,v,i,r),F-=1;return T(F,v,i,r,0,z,b,l,0,B,C,R,x,E,D),x}f.exports=s
});var X=Q(function(ur,p){
var L=require('@stdlib/strided-base-stride2offset/dist'),d=Y();function t(c,e,G,I,j,h,z,b,l,H,B,C,R,x){var E=L(c,I),D=L(j,z),v=L(b,H),i=L(c+j+b-e,C),r=L(c+j+b-1,x);return d(c,e,G,I,E,j,h,z,D,b,l,H,v,B,C,i,R,x,r),B}p.exports=t
});var A=Q(function(lr,W){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=X(),rr=Y();N(k,"ndarray",rr);W.exports=k
});var ar=require("path").join,vr=require('@stdlib/utils-try-require/dist'),ir=require('@stdlib/assert-is-error/dist'),nr=A(),Z,P=vr(ar(__dirname,"./native.js"));ir(P)?Z=nr:Z=P;module.exports=Z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

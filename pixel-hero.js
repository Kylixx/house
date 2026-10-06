/* Пиксельная сцена на главном экране: сердце собирается из пикселей и остаётся, плывут облака, мерцают звёзды */
(function(){try{
  const hero=document.getElementById('hero'); if(!hero) return;
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const cv=document.createElement('canvas'); cv.className='px-scene'; cv.setAttribute('aria-hidden','true'); hero.prepend(cv);
  const g=cv.getContext('2d');
  const P=['#0d0b1a','#14102a','#1b1438','#2a1a47','#3d2255','#5a2a62','#7a3568','#a04870'];
  const CS=[[-8,0,5],[-2,-3,6],[5,-1,5],[10,1,4]];
  let W,H,cell,bg,fg,hc,stars,cx,cy,s,gy,t0=performance.now(),lastW=0,run=true,looping=false,last=0;
  const inH=(x,y)=>{const u=(x-cx)/s,v=-(y-cy)/s;return Math.pow(u*u+v*v-1,3)-u*u*v*v*v<=0;};
  function build(){
    const w=hero.clientWidth,h=hero.clientHeight; lastW=w; cell=w<700?4:6; W=Math.ceil(w/cell); H=Math.ceil(h/cell); cv.width=W; cv.height=H;
    let seed=7; const R=()=>(seed=(seed*16807)%2147483647)/2147483647;
    const mk=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;return c;};
    bg=mk(); fg=mk(); const b=bg.getContext('2d'), f=fg.getContext('2d');
    gy=Math.round(H*.81); s=Math.round(Math.min(W*.23,H*.17)); cx=Math.round(W<110?W*.5:W*.7); cy=Math.round(H*(W<110?.46:.5));
    for(let y=0;y<gy+10;y++){const p=y/(gy/8),i=Math.min(7,Math.floor(p)),fr=p-i;for(let x=0;x<W;x++){b.fillStyle=(fr>.8&&(x+y)%2===0&&i<7)?P[i+1]:P[i];b.fillRect(x,y,1,1);}}
    b.fillStyle='#4a2658';
    for(let y=Math.round(cy-1.6*s);y<cy+1.5*s;y++)for(let x=Math.round(cx-1.6*s);x<cx+1.6*s;x++)if((x+y)%2===0&&Math.hypot((x-cx)/(1.55*s),(y-cy)/(1.45*s))<1&&!inH(x,y)) b.fillRect(x,y,1,1);
    for(let x=0;x<W;x++){const y1=gy+Math.round(5*Math.sin(x/10)),y2=Math.round(H*.89)+Math.round(4*Math.sin(x/6+2));
      f.fillStyle='#1a1230';f.fillRect(x,y1,1,H-y1);f.fillStyle='#2a1a47';f.fillRect(x,y1,1,1);f.fillStyle='#141414';f.fillRect(x,y2,1,H-y2);}
    stars=Array.from({length:Math.round(W*H/340)},()=>({x:Math.floor(R()*W),y:Math.floor(R()*gy*.9),p:R()*6}));
    hc=[]; const bot=cy+s*1.1;
    for(let y=Math.round(cy-1.4*s);y<cy+1.2*s;y++)for(let x=Math.round(cx-1.3*s);x<cx+1.3*s;x++){
      if(!inH(x,y)) continue; const u=(x-cx)/s,v=-(y-cy)/s; let c='#f08aa8';
      if(u<-.25&&v>.3) c='#ffd1de'; else if(v<-.25||u>.6) c='#d9468a';
      if(!inH(x-1,y)||!inH(x+1,y)||!inH(x,y-1)||!inH(x,y+1)) c='#8a2a52';
      hc.push({x,y,c,d:Math.max(0,(bot-y))*18+R()*300,o:40+R()*50}); }
  }
  function cloud(x0,y0,k,a,bb){for(let y=-9*k;y<=3*k;y++)for(let x=-14*k;x<=16*k;x++){const px=x/k,py=y/k;
    if(CS.some(c=>Math.hypot(px-c[0],py-c[1])<=c[2])){g.fillStyle=py>.5?bb:a;g.fillRect(Math.round(x0+x),y0+y,1,1);}}}
  function draw(t){
    g.drawImage(bg,0,0);
    stars.forEach(q=>{ if(Math.floor(t/500+q.p)%3===0){g.fillStyle='#ffe9f0';g.fillRect(q.x,q.y,1,1);} });
    const bob=t>2600?Math.round(Math.sin(t/700)*1.4):0;
    hc.forEach(q=>{const u=Math.min(1,Math.max(0,(t-q.d)/600)); if(u<=0) return; const e=1-Math.pow(1-u,3);
      g.fillStyle=q.c; g.fillRect(q.x,q.y-Math.round((1-e)*q.o)+bob,1,1);});
    const k2=cell>4?1:2;
    cloud((t/300)%(W+60)-20,Math.round(H*.13),1,'#e9dff5','#b7a3d3');
    cloud((t/180+40)%(W+80)-30,Math.round(H*.69),k2,'#cdbfe3','#9783b8');
    cloud((t/220+70)%(W+60)-20,Math.round(H*.61),1,'#e9dff5','#b7a3d3');
    g.drawImage(fg,0,0);
  }
  function frame(now){ if(!run){looping=false;return;} requestAnimationFrame(frame); if(now-last<33) return; last=now; draw(now-t0); }
  const start=()=>{ if(!looping){looping=true;requestAnimationFrame(frame);} };
  build();
  if(reduce){ draw(1e5); }
  else{
    new IntersectionObserver(es=>{ run=es[0].isIntersecting&&!document.hidden; if(run) start(); }).observe(hero);
    document.addEventListener('visibilitychange',()=>{ run=!document.hidden; if(run) start(); });
    start();
  }
  let rt; addEventListener('resize',()=>{ clearTimeout(rt); rt=setTimeout(()=>{ if(Math.abs(hero.clientWidth-lastW)>1){ build(); t0=performance.now()-1e5; if(reduce) draw(1e5); } },200); },{passive:true});
}catch(e){ console.warn('pixel hero:',e); }})();

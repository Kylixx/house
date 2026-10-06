/* 35mm-слой: HUD, видоискатель, зерно, автофокус */
(function(){try{
  const $=s=>document.querySelector(s), reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const mk=h=>{const d=document.createElement('div');d.innerHTML=h;return d.firstElementChild};
  document.body.append(mk('<div id="grain" aria-hidden="true"></div>'),
    mk('<div id="vf" aria-hidden="true"><i></i><i></i><i></i><i></i></div>'),
    mk('<div id="hud" aria-hidden="true"><span id="hFps">00fps</span><span id="hRes">0x0</span><span id="hTc">00:00:00</span><span id="hPct">0%</span></div>'));
  const fps=$('#hFps'), res=$('#hRes'), tc=$('#hTc'), pct=$('#hPct'), p2=n=>String(n).padStart(2,'0');
  const setRes=()=>{ res.textContent=innerWidth+'x'+innerHeight; };
  const setPct=()=>{ const m=document.documentElement.scrollHeight-innerHeight; pct.textContent=Math.round(m>0?Math.min(1,scrollY/m)*100:0)+'%'; };
  setRes(); setPct(); addEventListener('resize',setRes,{passive:true});
  let tick=false; addEventListener('scroll',()=>{ if(tick) return; tick=true; requestAnimationFrame(()=>{ setPct(); tick=false; }); },{passive:true});
  let frames=0, last=performance.now();
  (function loop(t){ frames++;
    if(t-last>=500){ if(!document.hidden) fps.textContent=p2(Math.min(99,Math.round(frames*1000/(t-last))))+'fps';
      const s=Math.floor(t/1000); tc.textContent=p2(Math.floor(s/3600))+':'+p2(Math.floor(s/60)%60)+':'+p2(s%60); frames=0; last=t; }
    requestAnimationFrame(loop); })(last);
}catch(e){ console.warn('film layer:',e); }})();

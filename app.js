/* =====================================================
   ✎ ЗДЕСЬ ВСЁ, ЧТО МОЖНО МЕНЯТЬ (фото, стихи, письма — в data.js)
   ===================================================== */
const DOOR_OPENS = '2026-10-06T00:00:00';   // когда откроется секретная дверь. Для проверки закрытой двери добавь в адрес #lock
const VOICES = [];                            // голосовые: [{src:'voice/1.mp3', cap:'Моё первое голосовое'}]
const STORIES = [                             // кухня, холодильник: смешные истории (замени на ваши)
  {t:'Тот самый завтрак', d:'Здесь будет история про ваш самый смешной завтрак. Впиши свою в home.js, в массив STORIES.'},
  {t:'Магнитик с сердцем', d:'А здесь — история про что-то, что знаете только вы двое.'},
  {t:'Подгоревшие тосты', d:'Самые вкусные тосты в мире. Потому что с тобой.'},
];
const MESSAGES = [                            // библиотека, телефон: ваши сообщения (me — твои)
  {me:0, t:'доброе утро, зайка'}, {me:1, t:'доброе утро, любимая'}, {me:0, t:'я скучаю'}, {me:1, t:'я тоже. очень'}, {me:0, t:'♥'},
];
const SECRET = {                              // секретная комната
  title:'Комната, которой не было на плане',
  pages:[
    `<div class="paper"><h4>Ты нашла последнюю дверь</h4>Эту комнату я не показывал никому. Она появляется только тогда, когда мы дойдём до нужной даты.<br><br>Здесь пока пусто, потому что самое важное мы ещё не успели прожить. Но я знаю, что мы наполним её вместе.</div>`,
    `<div class="paper"><h4>Последняя строчка</h4>Я люблю тебя. И это не конец квартиры, а только начало.<br><br>Твой котенок ♥</div>`,
  ]};

/* =====================================================
   Дальше всё работает само
   ===================================================== */
(()=>{
const $=s=>document.querySelector(s), cv=$('#cv'), g=cv.getContext('2d');
const H=128, FY=100;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const br=s=>esc(s).replace(/\n/g,'<br>');
const R=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),w,h)};
const AL=(a,f)=>{g.globalAlpha=a;f();g.globalAlpha=1};
const hs=n=>{n=Math.sin(n*127.1)*43758.5453;return n-Math.floor(n)};
const glow=(x,y,r,c,a)=>{const q=g.createRadialGradient(x,y,0,x,y,r);q.addColorStop(0,c);q.addColorStop(1,c+'00');g.globalAlpha=a;g.fillStyle=q;g.fillRect(x-r,y-r,r*2,r*2);g.globalAlpha=1};
const mini=(src,w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;const i=new Image();i.onload=()=>{const k=Math.max(w/i.width,h/i.height),sw=w/k,sh=h/k,x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(i,(i.width-sw)/2,(i.height-sh)/2,sw,sh,0,0,w,h)};i.onerror=()=>{const x=c.getContext('2d');x.fillStyle='#3d2255';x.fillRect(0,0,w,h);x.fillStyle='#f08aa8';const cx=w/2|0,cy=h/2|0;[[-2,-1],[-1,-1],[1,-1],[2,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,1],[0,1],[1,1],[0,2]].forEach(p=>x.fillRect(cx+p[0],cy+p[1],1,1))};i.src=src;return c};

/* ---------- Комнаты ---------- */
const RM=[['Спальня',230],['Кухня',200],['Библиотека',230],['Галерея',390],['Кинозал',250],['Балкон',230],['Дверь',150]].map(a=>({n:a[0],w:a[1]}));
let WORLD=0; RM.forEach(r=>{r.x=WORLD;WORLD+=r.w});
const [BED,KIT,LIB,GAL,CIN,BAL,DOR]=RM;
const ALL=PHOTOS.concat(ARTS), thumbs=ALL.map(p=>mini(p.src,26,34)), poster=mini(CLIP.poster,150,58);
const pol=PHOTOS.slice(0,5).map(p=>mini(p.src,9,10));
const doorAt=new Date(location.hash==='#lock'?'2099-01-01T00:00:00':DOOR_OPENS);
const isOpen=()=>Date.now()>=doorAt;
const P=['#0d0b1a','#14102a','#1b1438','#2a1a47','#3d2255','#5a2a62','#7a3568','#a04870'];

/* ---------- Окно с содержимым ---------- */
const modal=$('#modal'); let mTimer=0, isModal=false;
function openM(title,pages,o={}){
  let i=o.start||0; isModal=true; modal.classList.add('on');
  modal.innerHTML=`<div class="card ${o.cls||''}"><button class="x" aria-label="Закрыть">×</button><h3>${esc(title)}</h3><div class="pg"></div>${pages.length>1?'<div class="nav"><button class="pv">←</button><span></span><button class="nx">→</button></div>':''}</div>`;
  const pg=modal.querySelector('.pg'), dots=modal.querySelector('.nav span');
  const show=()=>{clearInterval(mTimer);pg.innerHTML=pages[i];if(dots)dots.innerHTML=pages.map((_,k)=>`<i class="${k===i?'on':''}"></i>`).join('');if(o.after)o.after(pg,i)};
  show();
  if(dots){modal.querySelector('.pv').onclick=()=>{i=(i+pages.length-1)%pages.length;show()};modal.querySelector('.nx').onclick=()=>{i=(i+1)%pages.length;show()}}
  modal.querySelector('.x').onclick=closeM; modal.onclick=e=>{if(e.target===modal)closeM()};
}
function closeM(){clearInterval(mTimer);modal.classList.remove('on');modal.innerHTML='';isModal=false}
const paper=(h,t)=>`<div class="paper"><h4>${esc(h)}</h4>${br(t)}</div>`;
window.PH="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="360"><rect width="300" height="360" fill="#3d2255"/><text x="150" y="190" font-size="64" text-anchor="middle" fill="#f08aa8">♥</text></svg>');
const fig=(s,c)=>`<figure><img src="${s}" onerror="this.onerror=null;this.src=PH" alt=""><figcaption>${esc(c)}</figcaption></figure>`;

/* ---------- Что можно «осмотреть» ---------- */
const I=[]; const add=(x,y,label,fn)=>I.push({x,y,label,fn});
add(BED.x+103,FY-42,'Письма',()=>openM('Письма',[paper('Тебе',LETTER)].concat(ENVELOPES.map(e=>paper('Открой, когда '+e.when,e.text)))));
add(BED.x+155,FY-66,'Наши фотографии',()=>openM('Наши фотографии',PHOTOS.map(p=>fig(p.src,p.cap))));
if(VOICES.length) add(BED.x+60,FY-12,'Голосовые',()=>openM('Голосовые',VOICES.map(v=>`<p style="margin-bottom:12px;font:italic 22px var(--serif)">${esc(v.cap)}</p><audio controls src="${v.src}" style="width:100%"></audio>`)));
add(KIT.x+30,FY-58,'Холодильник',()=>openM('Наши завтраки и истории',STORIES.map(s=>paper(s.t,s.d))));
add(KIT.x+150,FY-28,'Что на завтрак?',()=>openM('Меню на сегодня',[`<div class="poem"><i>крутим судьбу</i><div class="wish" style="min-height:120px;font-size:26px">Нажми на кнопку</div><button class="act">Выбрать</button></div>`],{after:pg=>{pg.querySelector('.act').onclick=()=>{const w=WISHES[Math.floor(Math.random()*WISHES.length)];pg.querySelector('.wish').innerHTML=`${esc(w.t)}<div class="nt">${esc(w.d)}</div>`}}}));
add(LIB.x+68,FY-50,'Книжная полка',()=>openM('Стихи и слова',POEMS.map(p=>`<div class="poem"><i>${esc(p.author)}</i><h4>${esc(p.title)}</h4>${p.stanzas.map(s=>s.map(esc).join('<br>')).join('<br><br>')}</div>`).concat(QUOTES.map(q=>`<div class="poem">«${esc(q.text)}»<div class="nt">${esc(q.who)}</div></div>`))));
add(LIB.x+142,FY-26,'Переписка',()=>openM('Наши сообщения',[`<div class="msg">${MESSAGES.map(m=>`<div class="${m.me?'me':''}">${esc(m.t)}</div>`).join('')}</div>`]));
add(LIB.x+186,FY-44,'Кресло',()=>openM('Слова для тебя',LOVE_TEXT.map((t,k)=>paper(k?'':LOVE_TITLE,t)),{cls:''}));
ALL.forEach((p,k)=>add(GAL.x+38+k*40,FY-52,p.cap,()=>openM('Выставка',ALL.map(q=>fig(q.src,q.cap)),{start:k})));
add(CIN.x+125,FY-60,'Кинозал',()=>openM('Кинозал',[`<video controls playsinline poster="${CLIP.poster}" src="${CLIP.src}"></video><p style="margin-top:12px;font:italic 22px var(--serif)">${esc(CLIP.label)}</p>`],{cls:'light'}));
add(BAL.x+62,FY-26,'Радио',()=>toggleMusic());
add(BAL.x+158,FY-30,'Телескоп',()=>openM('Мы вместе',[`<div class="poem"><i>с ${new Date(SINCE).toLocaleDateString('ru',{day:'numeric',month:'long',year:'numeric'})}</i><div class="big">0</div><div class="nt" style="font-size:16px"></div></div>`],{after:pg=>{const t=()=>{const ms=Date.now()-new Date(SINCE),d=Math.floor(ms/864e5);pg.querySelector('.big').textContent=d;pg.querySelector('.nt').innerHTML=(d>=365&&d<366?'Сегодня нам ровно год ♥<br>':'')+`ещё ${Math.floor(ms/36e5)%24} ч ${Math.floor(ms/6e4)%60} мин ${Math.floor(ms/1e3)%60} с`};t();mTimer=setInterval(t,1000)}}));
add(DOR.x+75,FY-40,'Дверь',()=>{
  if(isOpen()){const f=document.createElement('div');f.className='fade';document.body.appendChild(f);setTimeout(()=>f.remove(),2300);openM(SECRET.title,SECRET.pages)}
  else openM('Дверь закрыта',[`<div class="poem"><i>откроется ${doorAt.toLocaleDateString('ru',{day:'numeric',month:'long',year:'numeric'})}</i><div class="big">0</div><div class="nt" style="font-size:16px"></div></div>`],{after:pg=>{const t=()=>{const ms=doorAt-Date.now();if(ms<=0)return closeM();const d=Math.floor(ms/864e5);pg.querySelector('.big').textContent=d;pg.querySelector('.nt').innerHTML=`дней. И ещё ${Math.floor(ms/36e5)%24} ч ${Math.floor(ms/6e4)%60} мин ${Math.floor(ms/1e3)%60} с`};t();mTimer=setInterval(t,1000)}});
});

/* ---------- Отрисовка комнат ---------- */
function shell(r,wall,dark,fl,fl2){R(r.x,0,r.w,FY,wall);R(r.x,0,r.w,5,dark);R(r.x,FY-4,r.w,4,dark);R(r.x,FY,r.w,H-FY,fl);for(let x=r.x;x<r.x+r.w;x+=14)R(x,FY,1,H-FY,fl2);R(r.x,FY,r.w,1,fl2)}
function bedroom(t){const x=BED.x;shell(BED,'#3b1d3a','#24112a','#3a1d2b','#2a1220');
  for(let yy=12;yy<FY-6;yy+=10)for(let xx=6;xx<BED.w;xx+=10)R(x+xx+(yy/10%2)*5,yy,1,1,'#5a2f58');
  R(x+18,FY-76,44,44,'#e6c79c');R(x+20,FY-74,40,40,'#14102a');R(x+39,FY-74,2,40,'#e6c79c');R(x+20,FY-55,40,2,'#e6c79c');
  for(let i=0;i<7;i++)if((t*2+i)%3<2)R(x+22+hs(i)*34,FY-72+hs(i+9)*30,1,1,'#ffe9f0');
  R(x+46,FY-70,8,8,'#f6ede3');R(x+49,FY-70,5,8,'#14102a');R(x+49,FY-68,4,4,'#f6ede3');
  R(x+14,FY-80,10,50,'#d9468a');R(x+56,FY-80,10,50,'#d9468a');
  for(let k=0;k<5;k++){const px=x+115+k*20,py=FY-70+Math.sin(k*1.2)*2;R(px,py,11,13,'#f6ede3');g.drawImage(pol[k],px+1,py+1);R(px+4,py-3,1,3,'#e6c79c')}
  R(x+112,FY-72,90,1,'#e6c79c');
  R(x+118,FY-10,88,10,'#5a3320');R(x+198,FY-48,6,48,'#5a3320');R(x+120,FY-18,80,9,'#f6ede3');R(x+138,FY-20,62,11,'#f08aa8');R(x+183,FY-24,14,7,'#fff');
  for(let k=0;k<4;k++){R(x+146+k*12,FY-16,3,2,'#ffd1de');R(x+145+k*12,FY-15,5,1,'#ffd1de')}
  R(x+97,FY-22,16,22,'#5a3320');R(x+98,FY-12,14,1,'#3a1d2b');R(x+103,FY-30,3,8,'#e6c79c');R(x+99,FY-38,11,8,'#f6d9a0');
  glow(x+104,FY-32,34,'#ffd27a',.25+.03*Math.sin(t*2));R(x+99,FY-25,9,3,'#f4e9db');R(x+103,FY-25,1,1,'#d9468a');
  R(x+30,FY+10,100,9,'#7a2142');R(x+34,FY+12,92,5,'#a04870');
  if(VOICES.length){R(x+56,FY-13,8,13,'#f08aa8');R(x+58,FY-11,4,6,'#2a1220')}}
function kitchen(t){const x=KIT.x;shell(KIT,'#4a2a3a','#2e1824','#4a2a35','#33192a');
  R(x,FY-44,KIT.w,40,'#d9c5b0');for(let xx=0;xx<KIT.w;xx+=10)R(x+xx,FY-44,1,40,'#bfa992');for(let yy=FY-44;yy<FY-4;yy+=10)R(x,yy,KIT.w,1,'#bfa992');
  R(x+84,FY-78,38,36,'#e6c79c');R(x+86,FY-76,34,32,'#f6b8a0');R(x+97,FY-68,12,12,'#ffe9b0');glow(x+103,FY-62,26,'#ffd27a',.3);R(x+102,FY-76,2,32,'#e6c79c');
  R(x+14,FY-62,30,62,'#e9e2dc');R(x+14,FY-36,30,2,'#b9a5ad');R(x+38,FY-56,2,10,'#b9a5ad');R(x+38,FY-30,2,8,'#b9a5ad');
  R(x+18,FY-52,6,6,'#d9468a');R(x+27,FY-46,5,5,'#e6c79c');R(x+20,FY-42,7,5,'#fff3d6');
  R(x+50,FY-30,66,30,'#6b3a4d');R(x+50,FY-32,66,3,'#e6c79c');R(x+58,FY-40,10,8,'#c9d2d8');R(x+68,FY-38,3,4,'#c9d2d8');
  for(let i=0;i<4;i++){const p=((t*.7+i*.25)%1);AL(1-p,()=>R(x+62+Math.sin(p*6+i)*3,FY-42-p*18,2,2,'#fff'))}
  R(x+124,FY-30,52,3,'#a56a43');R(x+128,FY-27,3,27,'#7a4a2c');R(x+169,FY-27,3,27,'#7a4a2c');
  R(x+140,FY-33,14,3,'#fff3d6');R(x+143,FY-35,7,2,'#e6b96b');R(x+158,FY-35,5,5,'#f08aa8');R(x+166,FY-35,5,5,'#e6c79c');
  R(x+112,FY-24,8,24,'#7a2142');R(x+181,FY-24,8,24,'#7a2142');
  R(x+150,5,1,24,'#e6c79c');R(x+142,29,17,6,'#f6d9a0');glow(x+150,34,50,'#ffd27a',.28)}
function library(t){const x=LIB.x;shell(LIB,'#2a1a2f','#1a0f20','#33202a','#24131d');
  const cols=['#f08aa8','#e6c79c','#7a2142','#d9468a','#8f6bb3','#4b7a8c','#c9a46a'];
  R(x+8,10,124,FY-10,'#5a3320');
  for(let row=0;row<4;row++){const by=12+row*22;R(x+10,by,120,20,'#1a0f20');let bx=x+12;for(let k=0;bx<x+126;k++){const w=3+Math.floor(hs(row*50+k)*3),h=12+Math.floor(hs(row*50+k+.5)*7);R(bx,by+20-h,w,h,cols[Math.floor(hs(row*9+k*3)*7)]);bx+=w+(hs(k+row)<.1?3:0)}R(x+10,by+20,120,2,'#7a4a2c')}
  R(x+140,FY-30,12,30,'#5a3320');R(x+142,FY-34,8,5,'#cfd8dc');R(x+143,FY-33,6,3,'#2a1220');
  R(x+168,FY-44,38,44,'#7a2142');R(x+160,FY-24,54,24,'#a04870');R(x+154,FY-30,12,30,'#7a2142');R(x+208,FY-30,12,30,'#7a2142');R(x+168,FY-14,38,3,'#c25a85');
  R(x+224,FY-70,2,70,'#e6c79c');R(x+216,FY-80,18,12,'#f6d9a0');glow(x+225,FY-70,55,'#ffd27a',.3+.03*Math.sin(t*2));
  R(x+60,FY+10,90,8,'#4a2658')}
function gallery(t){const x=GAL.x;shell(GAL,'#cbbfb4','#8f847b','#7a5a4a','#5f4236');
  R(x,FY-4,GAL.w,4,'#a99c90');
  ALL.forEach((p,k)=>{const fx=x+25+k*40;AL(.1,()=>{g.fillStyle='#fff6d8';g.beginPath();g.moveTo(fx+13,5);g.lineTo(fx-10,FY-4);g.lineTo(fx+36,FY-4);g.fill()});
    R(fx-3,FY-71,32,40,'#e6c79c');R(fx-1,FY-69,28,36,'#2a1220');g.drawImage(thumbs[k],fx,FY-68);R(fx+8,FY-26,10,3,'#2a1220')});
  R(x+8,FY-14,12,14,'#b0603a');R(x+10,FY-30,8,16,'#4f8a5a');R(x+7,FY-36,6,10,'#6fb07a');R(x+15,FY-34,6,8,'#6fb07a');
  R(x+170,FY-9,48,5,'#2a1220');R(x+172,FY-4,3,4,'#2a1220');R(x+211,FY-4,3,4,'#2a1220')}
function cinema(t){const x=CIN.x;shell(CIN,'#120a16','#0a050c','#2a1220','#1a0b16');
  R(x+34,12,182,FY-24,'#181018');R(x+38,16,174,FY-32,'#0b060e');
  g.drawImage(poster,x+50,24);AL(.35,()=>R(x+50,24,150,58,'#8f6bb3'));AL(.1+.06*Math.sin(t*9),()=>R(x+50,24,150,58,'#fff'));
  R(x+119,45,12,16,'#f6ede3');R(x+122,48,6,10,'#d9468a');
  for(let i=0;i<14;i++){R(x,0,10,FY,i%2?'#7a2142':'#5e1632');R(x,0,1,1,'#7a2142')}
  for(let i=0;i<8;i++){R(x+i*3+1,0,2,FY,'#7a2142');R(x+CIN.w-26+i*3,0,2,FY,'#7a2142')}R(x,0,24,FY,'#5e1632');R(x+CIN.w-24,0,24,FY,'#5e1632');
  for(let i=0;i<8;i++){R(x+i*3,0,1,FY,'#7a2142');R(x+CIN.w-24+i*3,0,1,FY,'#7a2142')}
  AL(.07,()=>{g.fillStyle='#fff';g.beginPath();g.moveTo(x+125,2);g.lineTo(x+48,24);g.lineTo(x+202,24);g.lineTo(x+202,82);g.lineTo(x+48,82);g.fill()});
  R(x+119,0,12,5,'#555');
  [60,98,136,174].forEach(sx=>{R(sx+x-12,FY-22,28,22,'#7a2142');R(sx+x-10,FY-26,24,5,'#a02a55')});
  R(x+100,FY-34,9,9,'#3a1d1a');R(x+101,FY-30,7,5,'#f2c9a8');R(x+112,FY-34,9,9,'#3a1d1a');R(x+113,FY-30,7,5,'#e6c79c')}
function balcony(t){const x=BAL.x;
  for(let i=0;i<8;i++){R(x,i*13,BAL.w,13,P[i]);if(i<7)for(let xx=0;xx<BAL.w;xx+=2)R(x+xx+(xx/2%2),i*13+11,1,2,P[i+1])}
  for(let i=0;i<30;i++)if((Math.floor(t*2+i)%3)!==0)R(x+hs(i)*BAL.w,hs(i+3)*50,1,1,'#ffe9f0');
  R(x+170,16,18,18,'#f6ede3');R(x+176,16,12,18,'#e8dcd0');R(x+174,22,3,3,'#d8ccc0');glow(x+179,25,34,'#ffe9f0',.16);
  for(let L=0;L<2;L++){let bx=x-4;for(let k=0;bx<x+BAL.w;k++){const w=14+Math.floor(hs(k+L*30)*12),h=(L?24:38)+Math.floor(hs(k*2+L)*(L?22:30));R(bx,FY-4-h,w,h+4,L?'#241640':'#1a1230');for(let yy=FY-h;yy<FY-10;yy+=6)for(let xx=bx+3;xx<bx+w-3;xx+=5)if(hs(xx*3+yy+L)>.55&&(Math.floor(t/2+xx+yy)%7)!==0)R(xx,yy,2,3,'#ffd27a');bx+=w+1}}
  R(x,FY-4,BAL.w,4,'#3a1d2b');R(x,FY,BAL.w,H-FY,'#4a3040');for(let xx=0;xx<BAL.w;xx+=18)R(x+xx,FY,1,H-FY,'#2e1824');R(x,FY,BAL.w,1,'#2e1824');
  R(x,FY-24,BAL.w,2,'#e6c79c');for(let xx=0;xx<BAL.w;xx+=12)R(x+xx,FY-24,1,22,'#b99a6e');
  for(let k=0;k<BAL.w;k+=6){const yy=8+Math.sin(k/BAL.w*Math.PI)*8;R(x+k,yy,1,1,'#777');if(k%12===0)R(x+k,yy+1,2,2,(Math.floor(t*2+k)%2)?'#ffd27a':'#f08aa8')}
  R(x+50,FY-22,24,3,'#a56a43');R(x+54,FY-19,2,19,'#7a4a2c');R(x+68,FY-19,2,19,'#7a4a2c');R(x+54,FY-30,14,8,'#f08aa8');R(x+57,FY-28,5,4,'#2a1220');R(x+64,FY-34,1,4,'#e6c79c');
  if(musicOn&&ac)for(let i=0;i<3;i++){const p=((t*.6+i/3)%1);AL(1-p,()=>R(x+66+Math.sin(p*7+i*2)*6,FY-36-p*26,2,3,'#ffd1de'))}
  R(x+155,FY-26,2,26,'#c9a46a');R(x+148,FY-8,16,2,'#c9a46a');R(x+150,FY-34,14,5,'#e6c79c');R(x+164,FY-36,4,7,'#7a2142');
  R(x+196,FY-14,12,14,'#b0603a');R(x+198,FY-28,8,14,'#4f8a5a')}
function door(t){const x=DOR.x,o=isOpen();shell(DOR,'#3a2030','#24112a','#3a1d2b','#2a1220');
  R(x,FY-34,DOR.w,30,'#2e1824');for(let xx=0;xx<DOR.w;xx+=25)R(x+xx,FY-34,1,30,'#24112a');R(x,FY-35,DOR.w,1,'#e6c79c');
  R(x+53,FY-70,44,70,'#e6c79c');
  if(o){R(x+56,FY-67,38,67,'#fff0c4');glow(x+75,FY-34,60,'#ffe9b0',.55+.1*Math.sin(t*3));R(x+56,FY-67,8,67,'#7a2142');for(let i=0;i<6;i++){const p=(t*.4+i/6)%1;AL(1-p,()=>R(x+60+hs(i)*30,FY-10-p*50,2,2,'#fff'))}
    glow(x+75,FY+6,40,'#ffe9b0',.3)}
  else{R(x+56,FY-67,38,67,'#7a2142');R(x+60,FY-62,30,24,'#5e1632');R(x+60,FY-32,30,26,'#5e1632');R(x+86,FY-36,4,4,'#e6c79c');R(x+72,FY-1,6,1,'#ffd27a');AL(.4+.2*Math.sin(t*2),()=>R(x+56,FY-1,38,1,'#ffd27a'))}
  R(x+68,FY-80,14,6,'#e6c79c');R(x+70,FY-79,10,4,'#2a1220');
  R(x+14,FY-60,6,10,'#f6d9a0');R(x+130,FY-60,6,10,'#f6d9a0');glow(x+17,FY-55,22,'#ffd27a',.22);glow(x+133,FY-55,22,'#ffd27a',.22)}

/* ---------- Героиня ---------- */
const SP=['...hh...','..hhhh..','.hhhhhh.','.hssssh.','.hssesh.','..ssss..','.sdddds.','.sdddds.','..dddd..','.dddddd.','dddddddd'];
const LG=[['..s..s..','..f..f..'],['.s....s.','.f....f.'],['...ss...','...ff...']];
const CL={h:'#3a1f1a',s:'#f2c9a8',e:'#140a14',d:'#f08aa8',f:'#7a2142'};
let px=BED.x+40,face=1,walk=0,tgt=null;
function hero(t){const bob=walk?0:Math.round(Math.sin(t*3)*.5);const y0=FY+5-14+bob,fr=walk?(Math.floor(t*8)%2?1:2):0;
  const rows=SP.concat(LG[fr]);rows.forEach((row,j)=>{for(let k=0;k<8;k++){const c=row[face>0?k:7-k];if(c!=='.')R(px-4+k,y0+j,1,1,CL[c])}});
  AL(.3,()=>R(px-5,FY+6,10,2,'#000'))}

/* ---------- Музыка ---------- */
let ac,mg,musicOn=true,nT=0,st=0;
const MEL=[0,4,7,4,9,7,4,2,0,4,7,12,9,7,4,7],SC=s=>220*Math.pow(2,s/12);
function note(f,at,d,v,ty){const o=ac.createOscillator(),e=ac.createGain();o.type=ty;o.frequency.value=f;e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(v,at+.01);e.gain.exponentialRampToValueAtTime(.0001,at+d);o.connect(e);e.connect(mg);o.start(at);o.stop(at+d+.05)}
function sched(){if(!ac)return;if(nT<ac.currentTime)nT=ac.currentTime+.05;while(nT<ac.currentTime+.4){note(SC(MEL[st%16]),nT,1.6,.35,'triangle');if(st%4===0)note(SC([-12,-8,-5,-8][(st>>2)%4]),nT,2.4,.3,'sine');st++;nT+=.5}}
function startAudio(){if(ac){ac.resume();return}try{ac=new(window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();mg.gain.value=0;mg.connect(ac.destination);setInterval(sched,150)}catch(e){}}
function toggleMusic(){musicOn=!musicOn;$('#snd').classList.toggle('off',!musicOn)}
$('#snd').onclick=()=>{startAudio();toggleMusic()};

/* ---------- Размер, ввод ---------- */
let S=3,W=300;
function fit(){const touch=matchMedia('(hover:none)').matches;S=Math.max(2,Math.floor(Math.min(innerWidth/200,(innerHeight-(touch?190:80))/H)));W=Math.floor(innerWidth/S);cv.width=W;cv.height=H;cv.style.width=W*S+'px';cv.style.height=H*S+'px'}
fit();addEventListener('resize',fit);
const K={};let held=0,cam=0,started=false,near=null;
const key=e=>{const k=e.code;if(k==='Escape'){closeM();return}if(isModal||!started)return;
  if(['ArrowLeft','KeyA'].includes(k))K.l=e.type==='keydown';if(['ArrowRight','KeyD'].includes(k))K.r=e.type==='keydown';
  if(e.type==='keydown'&&['KeyE','Space','Enter','ArrowUp'].includes(k)){e.preventDefault();act()}};
addEventListener('keydown',key);addEventListener('keyup',key);
const hold=(id,d)=>{const b=$(id);const on=e=>{e.preventDefault();held=d;tgt=null};const off=()=>{if(held===d)held=0};b.addEventListener('pointerdown',on);['pointerup','pointerleave','pointercancel'].forEach(n=>b.addEventListener(n,off))};
hold('#bL',-1);hold('#bR',1);
$('#bA').onclick=()=>act();
cv.addEventListener('pointerdown',e=>{if(isModal||!started)return;const r=cv.getBoundingClientRect();tgt=cam+(e.clientX-r.left)/S;const hit=I.find(o=>Math.abs(o.x-tgt)<8&&Math.abs(o.x-px)<26);if(hit){hit.fn();tgt=null}});
function act(){if(near&&!isModal)near.fn()}
$('#go').onclick=()=>{startAudio();started=true;$('#intro').classList.add('gone')};

/* ---------- Главный цикл ---------- */
let last=performance.now(),roomN='';
function loop(now){requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;const t=now/1000;
  let d=(K.r?1:0)-(K.l?1:0)+held;if(!d&&tgt!==null){if(Math.abs(tgt-px)<2)tgt=null;else d=Math.sign(tgt-px)}
  if(isModal||!started)d=0;walk=d!==0;if(d){face=d;px=Math.max(10,Math.min(WORLD-10,px+d*58*dt))}
  cam+=((Math.max(0,Math.min(WORLD-W,px-W/2)))-cam)*Math.min(1,dt*6);
  near=null;let bd=24;I.forEach(o=>{const q=Math.abs(o.x-px);if(q<bd){bd=q;near=o}});
  const rm=RM.find(r=>px>=r.x&&px<r.x+r.w)||RM[RM.length-1];
  if(rm.n!==roomN){roomN=rm.n;const e=$('#room');e.style.opacity=0;setTimeout(()=>{e.textContent=roomN;e.style.opacity=1},200)}
  $('#hint').classList.toggle('on',!!near&&!isModal);if(near)$('#hint').innerHTML=(matchMedia('(hover:none)').matches?'':'<b>E</b>')+esc(near.label);$('#bA').classList.toggle('on',!!near);
  if(mg)mg.gain.setTargetAtTime(musicOn&&started?(rm===BAL?.5:.12):0,ac.currentTime,.4);
  g.fillStyle='#0a050c';g.fillRect(0,0,W,H);g.save();g.translate(-Math.round(cam),0);
  bedroom(t);kitchen(t);library(t);gallery(t);cinema(t);balcony(t);door(t);
  RM.forEach((r,i)=>{if(i){R(r.x-2,0,4,FY-1,'#1a0d1a');R(r.x-2,FY-1,4,1,'#3a1d2b')}});
  I.forEach(o=>{if(Math.floor(t*1.5+o.x)%4)AL(.9,()=>{R(o.x,o.y-10,1,3,'#ffe9b0');R(o.x-1,o.y-9,3,1,'#ffe9b0')});if(o===near)R(o.x-1,o.y-16+Math.round(Math.sin(t*5)),3,3,'#f08aa8')});
  hero(t);g.restore();
}
requestAnimationFrame(loop);
})();

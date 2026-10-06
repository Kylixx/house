/* =====================================================
   ✎ ЗДЕСЬ ВСЁ, ЧТО НУЖНО ПОМЕНЯТЬ
   ===================================================== */
const NAME  = 'моя любимая зайка';        // например: 'Анечка' → «Для тебя / Анечка»
const SINCE = '2025-10-06';                       // дата, когда вы вместе (ГГГГ-ММ-ДД)
const EYEBROW = 'Моё сердце — твоё';   // маленькая надпись над заголовком

// Уведомления и фото приходят тебе через приложение ntfy (бесплатное, без регистрации).
// Подпишись в приложении на канал с таким же названием. Название — как пароль, никому не показывай.
// Если оставить пустым, кнопка с фото не появится и уведомлений не будет.
const NTFY_SERVER = 'https://ntfy.sh';
const NTFY_TOPIC  = 'lovenote-fllhcypchakd27qfkoay';

// Фото лежат в папке photos рядом с index.html
const PHOTOS = [
  {src:'photos/1.jpg', cap:'Тот самый день'},
  {src:'photos/2.jpg', cap:'Ты смеёшься — я счастлив'},
  {src:'photos/3.jpg', cap:'Моё любимое место — рядом с тобой'},
  {src:'photos/4.jpg', cap:'Просто мы'},
  {src:'photos/5.jpg', cap:'Наш вечер'},
  {src:'photos/6.jpg', cap:'Навсегда в кадре'},
];

// Рисунки и картинки: отдельный раздел «Мы в рисунках» между «Причинами» и «Небом»
// draw:true — белый фон рисунка сливается с бумагой карточки; draw:false — обычная фотография
const ARTS = [
  {src:'photos/art1.jpg', cap:'Рука в руке', draw:true},
  {src:'photos/art2.jpg', cap:'Два маленьких нас', draw:true},
  {src:'photos/art3.jpg', cap:'Чмоки-чмоки', draw:false},
];

const REASONS = [
  'За твою улыбку, от которой у меня сбивается всё внутри',
  'За то, как ты смеёшься над моими шутками, даже плохими',
  'За то, что рядом с тобой я становлюсь лучше',
  'За твои глаза, в которых можно потеряться',
  'За каждое «доброе утро» и «спокойной ночи»',
  'За то, что ты — это ты',
];

const LETTER = `Лера, любимая моя,

я не умею говорить так красиво, как поэты, но умею чувствовать.

Рядом с тобой даже обычный день становится особенным. Спасибо тебе за тепло, за смех, за то, что ты есть.

Я люблю тебя. Сегодня, завтра и всегда.

Твой котенок ♥`;

/* Большое признание: два абзаца. Первое предложение крупно, остальное по две фразы, они появляются при прокрутке. */
// Видеоклип между «Колесом желаний» и признанием. Положи файл в папку video рядом с index.html
const CLIP = {src:'video/monolog.mp4', poster:'video/monolog-poster.jpg', label:'Слова, которые лучше меня сказали за меня', hint:'нажми, чтобы включить звук и видео'};

const LOVE_TITLE = 'Это то, что находится у меня на душе, и то, что хотелось тебе всё это время сказать';
const LOVE_TEXT = [
  `Ты для меня — человек, чью значимость невозможно выразить словами, любовь моя. Иногда я пытаюсь найти идеальные слова, чтобы объяснить, что ты для меня значишь, но любые слова кажутся слишком незначительными. Ты стала такой прекрасной и важной частью моей жизни, что я просто не представляю, как бы она выглядела без тебя. Ты не просто человек, присутствующий в моей жизни, - ты стала той, с кем мое сердце связано неразрывными узами. До встречи с тобой я и представить не мог, что один человек может стать для меня настолько важным. Постепенно ты стала частью всего, что меня окружает. Ты — первая, кому я хочу рассказать о своей радости; та, о ком я думаю в трудные дни; та, кого мое сердце ищет само собой, даже когда я этого не осознаю. Надеюсь, ты всегда будешь помнить, как много ты для меня значишь — особенно в те моменты, когда тебе кажется, что ты недостаточно хороша. Тебя ценят так, как ты, вероятно, даже не замечаешь. Я люблю твое сердце, твой характер, твою доброту, твой образ мыслей и все те мелочи, которые делают тебя именно такой, какая ты есть. Даже те черты, которые ты можешь считать недостатками, — это то, что я никогда не хотел бы в тебе менять. Твое счастье всегда будет для меня важным.`,
  `Я часто ловлю себя на мыслях о том, все ли у тебя хорошо, поела ли ты, не устала ли, не беспокоит ли тебя что-то. И не потому, что я обязан заботиться, а потому, что забота о тебе стала для меня чем-то естественным. Когда кто-то становится так дорог сердцу, начинаешь обращать внимание на самые мелкие детали, даже не задумываясь об этом. Спасибо тебе за каждое мгновение, которое мы разделили: за каждую улыбку, каждый смех, каждый разговор и каждое воспоминание, созданное нами вместе. Осознаешь ты это или нет, но ты принесла в мою жизнь столько счастья и изменила меня так, что я всегда буду тебе за это благодарен. Ты показала мне, как прекрасно - искренне заботиться о ком-то и любить всем сердцем. Если и есть что-то, что я хочу, чтобы ты всегда помнила, так это то, что для меня ты никогда не станешь «просто еще одним человеком». Ты всегда будешь для меня особенной — той, кого невозможно заменить; куда бы ни забросила нас жизнь, в моем сердце всегда будет место, принадлежащее только тебе. Ведь на самом деле ты для меня не просто важна. Ты та, кем я искренне дорожу, чье счастье мне по-настоящему дорого, и та, кому я всегда буду благодарен. Я люблю тебя сильнее, чем можно выразить словами, и надеюсь, ты никогда не забудешь, как глубоко я тебя люблю, ценю и как ты мне дорога.`
];

// Звёздочками отмечены слова, которые подсветятся розовым
const STATEMENT = 'Здесь слова, которые я бы хотел сказать *красивее*, чем умею. Поэтому часть из них мне помогли найти *поэты* разных времён.';

/* Стихи. Теперь их четыре, и между ними другие страницы.
   Толстой, Пушкин и Тютчев — подлинные тексты (общественное достояние).
   «Забыть тебя?» — четверостишие, которое в интернете чаще всего подписывают именем Есенина,
   но в его собраниях сочинений я его не нашёл, поэтому честно пишу «приписывают». */
const POEMS = [
  {author:'Для тебя', title:'Спасибо судьбе', stanzas:[
    ['Я мог никогда не узнать,','Как выглядит счастье земное.','Спасибо судьбе,','Что однажды','Свела нас с тобою.']
  ]},

  {author:'Для тебя', title:'Я зависим тобой', stanzas:[
    ['Я, кажется, стал тобой зависим.','Как ночь — от луны и сердце в огне.','И сколько бы ни путал я мысли,','Всё сводится снова к тебе.']
  ]},

  {author:'Для тебя', title:'Моё счастье — с тобой', stanzas:[
    ['Нехватка тебя, порой, бывает очень острой,','Пропадает улыбка, сон, погибает покой.','Понимаешь, у меня всё очень просто,','Моё счастье в секундах, проведённых с тобой...']
  ]},

  {author:'Приписывается С. А. Есенину', title:'Забыть тебя?', stanzas:[
    ['Забыть тебя? А с кем я буду','Печали, радости делить?','Пусть лучше все меня забудут,','Чем я смогу тебя забыть.']
  ]},
];

/* «Открой, когда…» — конверты. Впиши свои слова: сколько конвертов, столько и страниц. */
const ENVELOPES = [
  {when:'тебе грустно', text:'Представь, что я рядом и крепко тебя обнимаю. Плохие дни проходят, а я остаюсь. Ты справишься, ты всегда справляешься, но если не хочешь справляться одна, просто позови меня.'},
  {when:'ты скучаешь по мне', text:'Я тоже. Прямо сейчас я, скорее всего, думаю о тебе. Закрой глаза, вспомни, как мы смеялись в тот самый день, и знай: каждая минута до встречи стоит того.'},
  {when:'не получается уснуть', text:'Всё, что тревожит, подождёт до утра. А сейчас просто вдохни поглубже и думай о чём-нибудь тёплом. Например, о том, что кто-то на другом конце города тоже думает о тебе. Спокойной ночи, любимая.'},
  {when:'ты в себе сомневаешься', text:'Ты красивая, умная и добрая, и это не комплименты, а факты, которые я наблюдаю каждый день. Если когда-нибудь забудешь, перечитай это письмо.'},
  {when:'нужно просто улыбнуться', text:'Улыбнись. Вот так. Именно ради этой улыбки у меня сбивается всё внутри. Спасибо, что ты есть.'},
];

const JAPAN = [
  {ja:'月が綺麗ですね', ro:'Tsuki ga kirei desu ne', ru:'«Какая сегодня красивая луна».', note:'Так в Японии, по легенде, признаются в любви, не произнося этих слов.'},
  {ja:'君に出会えて、よかった', ro:'Kimi ni deaete, yokatta', ru:'«Как хорошо, что я встретил тебя».', note:''},
  {ja:'運命の赤い糸', ro:'Unmei no akai ito', ru:'«Красная нить судьбы».', note:'Невидимая нить, которая связывает людей, предназначенных друг другу. Такая же нить тянется сбоку по этой странице.'},
  {ja:'一期一会', ro:'Ichigo ichie', ru:'«Одна жизнь — одна встреча».', note:'Каждая встреча неповторима, и ты — самая драгоценная из них.'},
  {ja:'あなたと見る景色が、いちばん綺麗', ro:'Anata to miru keshiki ga, ichiban kirei', ru:'«Пейзаж, который я вижу рядом с тобой, — самый красивый».', note:''},
  {ja:'ずっと、そばにいてね', ro:'Zutto, soba ni ite ne', ru:'«Будь рядом всегда».', note:''},
];

// Колесо желаний: s — короткая надпись на колесе, t — что выпало, d — пояснение
const WISHES = [
  {s:'Обнимашки',  t:'Долгие обнимашки',        d:'Крепкие, тёплые и сколько захочешь. Требуй при встрече.'},
  {s:'Ужин',       t:'Ужин за мой счёт',        d:'Выбираешь любое место, я просто прихожу и плачу.'},
  {s:'Фильм',      t:'Фильм выбираешь ты',      d:'И я не ною, даже если это в пятый раз.'},
  {s:'Завтрак',    t:'Завтрак для тебя',        d:'Я готовлю, ты просыпаешься и улыбаешься.'},
  {s:'Массаж',     t:'Массаж плеч',             d:'Столько, сколько выдержат мои руки.'},
  {s:'Свидание',    t:'Свидание от меня',        d:'Место, время и сюрприз придумываю я. Тебе нужно только прийти.'},
  {s:'Поцелуй',    t:'Поцелуй',                 d:'Один очень долгий. Или много коротких.'},
  {s:'Мороженое',  t:'Прогулка и мороженое',    d:'Идём гулять, а я угощаю.'}
];

const MARQUEE = ['я люблю тебя','I love you','愛してる','Je t’aime','Ti amo','Te quiero','Ich liebe dich'];

/* =====================================================
   Дальше всё работает само
   ===================================================== */
const $  = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => Array.from(r.querySelectorAll(s));
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
const rnd = (a,b)=>a+Math.random()*(b-a);
const pad = n => String(n).padStart(2,'0');
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const haptic = p => { try{ if(!finePointer && navigator.vibrate) navigator.vibrate(p); }catch(e){} };
let vw = innerWidth, vh = innerHeight;

/* ---------- Сборка страницы ---------- */
const HEART_D = 'M100 170C20 110 0 70 0 45C0 20 20 0 50 0C75 0 92 15 100 30C108 15 125 0 150 0C180 0 200 20 200 45C200 70 180 110 100 170Z';
const heartArt = `<svg class="heart-art" viewBox="0 0 200 180" aria-hidden="true">
  <defs>
    <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f08aa8"/><stop offset="1" stop-color="#e6c79c"/></linearGradient>
    <radialGradient id="hf" cx=".5" cy=".4" r=".62"><stop offset="0" stop-color="#f08aa8" stop-opacity=".4"/><stop offset="1" stop-color="#d9468a" stop-opacity="0"/></radialGradient>
  </defs>
  <g>
    <path class="fillh" d="${HEART_D}"/>
    ${[1,.84,.68,.52,.36].map((s,i)=>`<path pathLength="1" style="--k:${i}" transform="translate(100 85) scale(${s}) translate(-100 -85)" d="${HEART_D}"/>`).join('')}
  </g></svg>`;

const splitWordsHtml = (text,cls='') => text.split(' ').map((w,i)=>`<span class="w"><span class="wi" style="--i:${i}">${w}</span></span>`).join(' ');

const wheelSvg = () => {
  const n = WISHES.length, step = 360/n, R = 100;
  const pt = (deg,r)=>[(r*Math.sin(deg*Math.PI/180)).toFixed(2),(-r*Math.cos(deg*Math.PI/180)).toFixed(2)];
  const fills = ['#4a1230','#2c1429'];
  const segs = WISHES.map((w,i)=>{
    const a0 = i*step, a1 = (i+1)*step, c = a0+step/2, p0 = pt(a0,R), p1 = pt(a1,R);
    return `<path d="M0 0L${p0}A${R} ${R} 0 0 1 ${p1}Z" fill="${fills[i%2]}" stroke="rgba(230,199,156,.45)" stroke-width=".8"/>`
      + `<text transform="rotate(${c-90})" x="${R-9}" y="0" text-anchor="end" dominant-baseline="central" class="wl">${esc(w.s)}</text>`;
  }).join('');
  const dots = Array.from({length:16},(_,i)=>{ const p = pt(i*22.5,106); return `<circle cx="${p[0]}" cy="${p[1]}" r="1.7" class="wd" style="--i:${i}"/>`; }).join('');
  return `<svg viewBox="-114 -114 228 228" class="wheel-svg" aria-hidden="true">
    <circle r="110" fill="#1d0f1d" stroke="rgba(230,199,156,.55)" stroke-width="1.2"/>
    ${segs}${dots}
    <circle r="15" fill="#140a14" stroke="rgba(230,199,156,.7)" stroke-width="1"/>
    <path d="M0 6C-9 -1 -7 -9 -3.4 -9C-1.4 -9 0 -7.6 0 -6C0 -7.6 1.4 -9 3.4 -9C7 -9 9 -1 0 6Z" fill="#f08aa8"/>
  </svg>`;
};

const poemSection = (p,i) => {
  const variant = ['center','tint','flip','center'][i] || '';
  let n = 0;
  return `<section class="sec poem ${variant}" data-tag="Стихи"><div class="in-w"><div class="poem-grid">
    <div class="p-l">
      <div class="qm" aria-hidden="true">“</div>
      <div class="lab rv">${p.author}</div>
      <h2 class="ttl split">${splitWordsHtml(p.title)}</h2>
    </div>
    <div class="p-r">${p.stanzas.map(st=>`<div class="st">${st.map(l=>`<div class="ln rv" style="--d:${(n++%4)*80}">${l}</div>`).join('')}</div>`).join('')}
      ${p.note?`<div class="note rv">${p.note}</div>`:''}</div>
  </div></div></section>`;
};

const stmtWords = STATEMENT.split(' ').map(w=>{
  const hl = w.startsWith('*'); const t = w.replace(/\*/g,'');
  return `<span class="sw${hl?' hl':''}">${t}</span>`;
}).join(' ');

const marqSet = MARQUEE.map(t=>`<span>${t}<b>♥</b></span>`).join('');

const loveSection = (()=>{
  if(!LOVE_TEXT.length) return '';
  const sents = p => p.match(/[^.!?]+[.!?]+[»"]?\s*/g) || [p];
  const first = sents(LOVE_TEXT[0]);
  const lead = first.shift().trim();
  let d = 0;
  const chunks = (list, gap) => {
    const out = [];
    for(let i=0;i<list.length;i+=2){
      out.push(`<p class="rv${gap && i===0 ? ' gap' : ''}" style="--d:${(d++%2)*90}">${esc(list.slice(i,i+2).join('').trim())}</p>`);
    }
    return out.join('');
  };
  const body = chunks(first,false) + LOVE_TEXT.slice(1).map(p=>chunks(sents(p),true)).join('');
  return `<section class="sec words" id="words" data-tag="Для тебя"><div class="in-w">
  <div class="lab rv">Для тебя</div>
  <p class="words-title rv">${esc(LOVE_TITLE)}</p>
  <p class="words-lead rv">${esc(lead)}</p>
  <div class="words-body">${body}</div>
  <div class="words-heart rv" aria-hidden="true">♥</div>
</div></section>`;
})();

$('#app').innerHTML = `
<section id="hero" data-tag=""><div class="orb a"></div><div class="orb b"></div><div class="orb c"></div>
  <div class="hero-grid">
    <div class="hero-in">
      <div class="eyebrow rv">${esc(EYEBROW)}</div>
      <h1 class="split"><span class="l1">${splitWordsHtml('Для тебя,')}</span><span class="l2">${splitWordsHtml(esc(NAME))}</span></h1>
      <p class="hero-p rv" style="--d:500">Я собрал это для одного человека. Листай вниз: каждая страница — маленький привет от меня.</p>
    </div>
    <div class="hero-art">${heartArt}</div>
  </div>
  <div class="scroll-hint" aria-hidden="true"><span>листай</span><i></i></div>
</section>

<section class="sec statement" id="manifest" data-tag="Для тебя"><div class="in-w"><p id="stmt">${stmtWords}</p></div></section>

<div class="marq" aria-hidden="true"><div class="marq-t">${marqSet}${marqSet}${marqSet}${marqSet}</div></div>

${POEMS[0]?poemSection(POEMS[0],0):''}

<section class="sec desk-sec" id="desk" data-tag="Мы"><div class="in-w">
  <div class="lab rv">Фотографии</div>
  <h2 class="big split">${splitWordsHtml('Мы с тобой')}</h2>
  <p class="sub rv">Тащи окна за заголовок, нажми на фото — оно откроется.</p>
  <div class="desk" id="deskEl">
    <div class="desk-m"><b>♥</b><span>Мы с тобой</span><span>Файл</span><span>Вид</span><em id="deskClock">--:--</em></div>
    ${PHOTOS.map((p,i)=>`<figure class="win" style="--i:${i}"><div class="win-t"><i></i><i></i><i></i><span>${pad(i+1)}_${esc(p.cap)}.jpg</span></div><div class="win-b" role="button" tabindex="0" aria-label="Открыть фото: ${esc(p.cap)}"><img src="${p.src}" alt="${esc(p.cap)}" loading="lazy" decoding="async"></div></figure>`).join('')}
  </div>
</div></section>

${POEMS[1]?poemSection(POEMS[1],1):''}

<section class="jap" id="jap" data-tag="Япония" style="--n:${JAPAN.length}"><div class="jap-pin"><div class="in-w">
  <div class="lab">Слова из Японии</div>
  ${JAPAN.map(j=>`<div class="jp"><div class="ja" lang="ja">${j.ja}</div><div class="r"><div class="ro">${j.ro}</div><div class="ru">${j.ru}</div>${j.note?`<div class="note">${j.note}</div>`:''}</div></div>`).join('')}
  <div class="jap-bar"><span id="japN">01</span><div class="ln"><i></i></div><span>${pad(JAPAN.length)}</span></div>
</div></div></section>

<section class="sec cnt-sec" id="cnt" data-tag="Вместе"><div class="in-w">
  <div class="heart3d rv" id="h3dBox"><canvas id="h3d" aria-label="Вращающееся 3D-сердце: потяни, чтобы покрутить" role="img"></canvas></div>
  <div class="lab rv">Время рядом с тобой</div>
  <div class="cnt-badge" id="cntBadge" aria-live="polite"></div>
  <p class="cnt-t rv">Мы вместе уже</p>
  <div class="cnt-stage" id="cntStage"><div class="cnt-fx" id="cntFx" aria-hidden="true"></div>
  <div class="cnt-num rv" id="days" style="--d:100">0</div>
  <p class="cnt-word rv" id="daysWord" style="--d:200">дней</p></div>
  <div class="cnt-live rv" style="--d:300"><div><b id="cH">0</b><small>часов</small></div><div><b id="cM">0</b><small>минут</small></div><div><b id="cS">0</b><small>секунд</small></div></div>
  <p class="cnt-detail rv" id="detail" style="--d:400"></p>
</div></section>

${POEMS[2]?poemSection(POEMS[2],2):''}

<section class="sec rs" id="rs" data-tag="Причины"><div class="in-w">
  <div class="lab rv">Причины</div>
  <h2 class="big split">${splitWordsHtml('За что я тебя')} <em>${splitWordsHtml('люблю')}</em></h2>
  <p class="sub rv">Коснись карточки, чтобы её перевернуть.</p>
  <div class="rs-grid">${REASONS.map((r,i)=>`
    <button class="rc rv" style="--d:${(i%3)*100}" aria-pressed="false" aria-label="Причина ${i+1}: открыть">
      <span class="fl"><span class="fa"><b>${pad(i+1)}</b><span>причина <i>♥</i></span></span><span class="fb"><p>${r}</p></span></span>
    </button>`).join('')}</div>
</div></section>

<section class="sec arts" id="arts" data-tag="Мы"><div class="in-w">
  <div class="lab rv">Ещё немного нас</div>
  <h2 class="big split">${splitWordsHtml('Мы в')} <em>${splitWordsHtml('рисунках')}</em></h2>
  <div class="arts-row">${ARTS.map((a,i)=>`
    <figure class="art rv" style="--d:${i*130};--r:${[-3,2.4,-1.8][i%3]}deg">
      <button class="art-b" data-i="${i}" aria-label="Открыть: ${esc(a.cap)}">
        <img class="${a.draw?'draw':'pic'}" src="${a.src}" alt="${esc(a.cap)}" loading="lazy" decoding="async">
        <span class="cap">${esc(a.cap)}</span>
      </button>
    </figure>`).join('')}</div>
</div></section>

<section class="sec" id="sky" data-tag="Небо"><div class="in-w">
  <div class="lab rv">Наше небо</div>
  <h2 class="big split">${splitWordsHtml('Зажги')} <em>${splitWordsHtml('звезду')}</em></h2>
  <p class="sub rv">Коснись неба, и появится звезда. Звёзды соединятся в созвездие, которое никто, кроме нас, не прочтёт.</p>
  <div class="sky-box rv" id="skyBox"><canvas id="skyc" aria-label="Звёздное небо: касайтесь, чтобы зажигать звёзды"></canvas><div class="sky-hint">коснись неба</div></div>
</div></section>

${POEMS[3]?poemSection(POEMS[3],3):''}

<section class="sec env" id="env" data-tag="Конверты"><div class="in-w">
  <div class="lab rv">Открой, когда…</div>
  <h2 class="big split">${splitWordsHtml('Письма на')} <em>${splitWordsHtml('каждый случай')}</em></h2>
  <p class="sub rv">Я оставил для тебя несколько конвертов. Открывай тот, который подходит под настроение.</p>
  <div class="env-grid">${ENVELOPES.map((e,i)=>`
    <button class="envl rv" style="--d:${(i%3)*100}" data-i="${i}" aria-label="Открыть конверт: ${esc(e.when)}">
      <span class="eb"><span class="ef"></span><span class="es"><svg viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21S2 14.6 2 7.8C2 4.6 4.4 2.4 7.2 2.4c2 0 3.8 1.1 4.8 2.8 1-1.7 2.8-2.8 4.8-2.8C19.6 2.4 22 4.6 22 7.8 22 14.6 12 21 12 21Z"/></svg></span></span>
      <span class="et"><small>открой, когда</small><b>${esc(e.when)}</b></span>
    </button>`).join('')}</div>
</div></section>

<section class="sec wheel-sec" id="wheel" data-tag="Колесо"><div class="in-w">
  <div class="lab rv">Колесо желаний</div>
  <h2 class="big split">${splitWordsHtml('Крути, и я')} <em>${splitWordsHtml('исполню')}</em></h2>
  <p class="sub rv">Нажми на кнопку, и колесо решит, чем я тебя порадую. Всё честно, я ничего не подкручиваю.</p>
  <div class="wheel-box rv">
    <div class="wheel-wrap"><i class="wptr" aria-hidden="true"></i><div class="wheel" id="wheel-rot">${wheelSvg()}</div></div>
    <button class="btn" id="wheelBtn" type="button">Крутить</button>
    <div class="wheel-res" id="wheelRes" role="status" aria-live="polite"></div>
  </div>
</div></section>

${CLIP && CLIP.src ? `<section class="sec clip" id="clip" data-tag="Видео"><div class="in-w">
  <div class="lab rv">Момент для тебя</div>
  <p class="clip-t rv">${esc(CLIP.label)}</p>
  <div class="clip-box rv" id="clipBox">
    <video id="clipV" playsinline preload="metadata" poster="${esc(CLIP.poster||'')}" src="${esc(CLIP.src)}"></video>
    <button class="clip-play" id="clipPlay" type="button" aria-label="Смотреть видео"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span><em>${esc(CLIP.hint||'')}</em></button>
  </div>
</div></section>` : ''}

${loveSection}

<section class="sec letter-sec" id="letter" data-tag="Письмо" data-light="1"><div class="in-w">
  <div class="lab rv">Письмо</div>
  <div class="paper" id="paper" aria-live="polite"></div>
  <div class="seal-wrap rv">
    <button class="seal" id="heart" aria-label="Нажми, если тоже" aria-pressed="false" data-mag>
      <i class="ring"></i><i class="ring r2"></i>
      <svg class="sheart" viewBox="0 0 200 180" aria-hidden="true">
        <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6a3bb"/><stop offset=".55" stop-color="#e0487f"/><stop offset="1" stop-color="#a81f4e"/></linearGradient></defs>
        <path d="${HEART_D}" fill="url(#sg)"/>
        <path d="M32 58C28 38 42 22 62 22C48 32 40 44 38 62Z" fill="#fff" opacity=".32"/>
      </svg>
    </button>
    <div class="seal-txt" id="heartTxt">Нажми, если тоже</div>
  </div>
</div></section>
${NTFY_TOPIC?`<section class="sec ask" id="ask" data-tag="Просьба" data-light="1"><div class="in-w">
  <div class="lab rv">Одна просьба</div>
  <h2 class="big split">${splitWordsHtml('Срочно нужно фото')} <em>${splitWordsHtml('моей любимой')}</em></h2>
  <p class="sub rv">Сделай снимок прямо сейчас и отправь мне. Он придёт только ко мне.</p>
  <div class="ask-box rv" id="askBox">
    <input type="file" id="askFile" accept="image/*" capture="user" hidden>
    <div class="ask-prev" id="askPrev" hidden><img id="askImg" alt="Твоё фото перед отправкой"></div>
    <div class="ask-btns">
      <button class="btn" id="askShoot" type="button">Сделать фото</button>
      <button class="btn" id="askSend" type="button" hidden>Отправить мне</button>
      <button class="btn ghost" id="askRetake" type="button" hidden>Переснять</button>
    </div>
    <p class="ask-msg" id="askMsg" role="status" aria-live="polite"></p>
  </div>
</div></section>`:''}
<footer>сделано с любовью, только для тебя <b>♥</b></footer>`;

/* ---------- Появление при прокрутке ---------- */
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('.rv,.split').forEach(el=>io.observe(el));

/* ---------- Лайтбокс ---------- */
const lightbox = $('#lightbox');
const lbOpen = ()=>lightbox.classList.contains('on');
function openLightbox(src,cap){
  lightbox.innerHTML = src ? `<img src="${src}" alt="${esc(cap)}">` : `<span class="heart">♥</span>`;
  lightbox.classList.add('on');
}
lightbox.addEventListener('click',()=>lightbox.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') lightbox.classList.remove('on'); });
$$('.art-b').forEach(b=>b.addEventListener('click',()=>{ const a = ARTS[+b.dataset.i]; openLightbox(a.src, a.cap); }));

/* ---------- Конверты ---------- */
const envm = document.createElement('div');
envm.id = 'envm'; envm.setAttribute('role','dialog'); envm.setAttribute('aria-label','Письмо');
document.body.appendChild(envm);
const envOpen = ()=>envm.classList.contains('on');
function openEnv(i){
  const e = ENVELOPES[i];
  envm.innerHTML = `<div class="ep"><small>открой, когда</small><h3>${esc(e.when)}</h3><p>${esc(e.text)}</p><span class="ec">♥</span><em>нажми, чтобы закрыть</em></div>`;
  envm.classList.add('on'); haptic(8);
  const now = Date.now();
  if(!(openEnv.last && openEnv.last.i===i && now-openEnv.last.t<20000)) notify('Конверт открыт ♥','Она открыла конверт «Открой, когда '+e.when+'» в '+nowTime(),'love_letter');
  openEnv.last = {i,t:now};
}
$$('.envl').forEach(b=>b.addEventListener('click',()=>openEnv(+b.dataset.i)));
envm.addEventListener('click',()=>envm.classList.remove('on'));
addEventListener('keydown',e=>{ if(e.key==='Escape') envm.classList.remove('on'); });

/* ---------- Фото: «рабочий стол» с перетаскиваемыми окнами ---------- */
const deskEl = $('#deskEl'), wins = $$('.win'), deskClock = $('#deskClock');
let zTop = 10;
const place = (w,x,y,r)=>{ w.dataset.x = x; w.dataset.y = y; w.dataset.r = r; w.style.transform = `translate3d(${x}px,${y}px,0) rotate(${r}deg)`; };
function layoutDesk(){
  const W = deskEl.clientWidth, cols = W < 560 ? 2 : W < 900 ? 3 : 4, gap = W < 560 ? 14 : 30;
  const ww = Math.min(300,(W - gap*(cols+1))/cols), x0 = (W - (cols*ww + (cols-1)*gap))/2, hs = Array(cols).fill(54);
  wins.forEach((w,i)=>{
    const c = hs.indexOf(Math.min(...hs));
    w.style.width = ww+'px';
    if(!w.dataset.moved) place(w, x0 + c*(ww+gap) + ((i*37)%11-5), hs[c] + ((i*29)%9-4), ((i*53)%9-4)*.7);
    hs[c] += w.offsetHeight + gap;
  });
  deskEl.style.height = Math.max(...hs) + 10 + 'px';
}
wins.forEach((w,i)=>{
  const p = PHOTOS[i], t = $('.win-t',w), b = $('.win-b',w), img = $('img',w);
  const loaded = ()=>{ w.dataset.ar = img.naturalWidth/img.naturalHeight; b.style.aspectRatio = img.naturalWidth+'/'+img.naturalHeight; layoutDesk(); };
  if(img.complete && img.naturalWidth) loaded(); else img.addEventListener('load',loaded);
  const open = ()=>openLightbox(img.complete && img.naturalWidth ? p.src : null, p.cap);
  b.addEventListener('click',open);
  b.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
  w.addEventListener('pointerdown',()=>{ w.style.zIndex = ++zTop; });
  t.addEventListener('pointerdown',e=>{
    if(e.button>0) return;
    t.setPointerCapture(e.pointerId); w.classList.add('drag'); haptic(6);
    const sx = e.clientX, sy = e.clientY, ox = +w.dataset.x, oy = +w.dataset.y;
    const mv = ev=>{
      const x = clamp(ox + ev.clientX - sx, -w.offsetWidth*.5, deskEl.clientWidth - w.offsetWidth*.5);
      const y = clamp(oy + ev.clientY - sy, 32, deskEl.clientHeight - 40);
      w.dataset.moved = 1; place(w,x,y,0);
    };
    const up = ()=>{ w.classList.remove('drag'); t.removeEventListener('pointermove',mv); t.removeEventListener('pointerup',up); t.removeEventListener('pointercancel',up); };
    t.addEventListener('pointermove',mv); t.addEventListener('pointerup',up); t.addEventListener('pointercancel',up);
  });
});
layoutDesk(); addEventListener('resize',layoutDesk,{passive:true});
if(reduce) deskEl.classList.add('in','ready');
else new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ deskEl.classList.add('in'); setTimeout(()=>deskEl.classList.add('ready'), 900 + wins.length*90); o.disconnect(); } }),{threshold:.1}).observe(deskEl);
const deskTick = ()=>{ deskClock.textContent = new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}); };
deskTick(); setInterval(deskTick,20000);
function setSizes(){ if(reduce) $('#jap').classList.add('static'); }

/* ---------- Манифест, японские фразы ---------- */
const sw = $$('#stmt .sw'), stmtEl = $('#stmt');
const jps = $$('.jp'), jap = $('#jap'), japBar = $('.jap-bar .ln i'), japN = $('#japN');
let japIdx = -1;

/* ---------- Нить и подпись в шапке ---------- */
const threadEl = $('#thread i'), tagEl = $('#tag');
const tagSecs = $$('[data-tag]');
let lastTag = null, lastY = scrollY, scrollVel = 0;

let ticking = false;
function update(){
  ticking = false;
  const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - vh);
  scrollVel = y - lastY; lastY = y;
  threadEl.parentNode.style.setProperty('--p', clamp(y/max,0,1).toFixed(4));

  // слова манифеста зажигаются по мере прокрутки
  const sr = stmtEl.getBoundingClientRect();
  if(sr.top < vh && sr.bottom > 0){
    const t = reduce ? 1 : clamp((vh*.8 - sr.top)/(sr.height*.9 + vh*.1),0,1);
    const n = Math.round(t*sw.length);
    sw.forEach((w,i)=>w.classList.toggle('lit', i<n));
  }

  if(!reduce){

    // японские фразы: по одной на экран
    const jr = jap.getBoundingClientRect();
    if(jr.bottom > 0 && jr.top < vh){
      const range = Math.max(1, jr.height - vh);
      const jp = clamp(-jr.top/range,0,1);
      const idx = clamp(Math.floor(jp*jps.length), 0, jps.length-1);
      jap.style.setProperty('--jprog', jp.toFixed(4));
      if(idx!==japIdx){
        japIdx = idx; japN.textContent = pad(idx+1);
        jps.forEach((j,i)=>{ j.classList.toggle('on', i===idx); j.classList.toggle('past', i<idx); });
      }
    }
  }

  // что сейчас на экране
  let cur = null;
  for(const s of tagSecs){ const r = s.getBoundingClientRect(); if(r.top <= vh*.5 && r.bottom > vh*.5){ cur = s; break; } }
  if(cur !== lastTag){
    lastTag = cur;
    tagEl.textContent = cur ? cur.dataset.tag : '';
    document.body.classList.toggle('light', !!(cur && cur.dataset.light));
  }
}
const onScroll = ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } };
addEventListener('scroll',onScroll,{passive:true});

/* ---------- Лепестки ---------- */
const pc = $('#petals'), pg = pc.getContext('2d');
const PCOL = ['240,138,168','240,138,168','217,70,138','230,199,156','255,226,232'];
let petals = [], mpx = -9999, mpy = -9999;
function newPetal(init){
  const z = rnd(.45,1.3);
  return {x:rnd(0,vw), y:init?rnd(0,vh):rnd(-80,-20), z, s:rnd(6,13)*z, vy:rnd(.25,.7)*z, sw:rnd(0,6.28), ss:rnd(.005,.013),
    rot:rnd(0,6.28), vr:rnd(-.02,.02), fl:rnd(0,6.28), fv:rnd(.01,.03), col:PCOL[Math.floor(rnd(0,PCOL.length))], a:rnd(.14,.36)};
}
function initPetals(){ petals = Array.from({length: vw<700 ? 14 : 28},()=>newPetal(true)); }
function drawPetal(c,s){
  c.beginPath(); c.moveTo(0,-s);
  c.bezierCurveTo(s*.95,-s*.55,s*.85,s*.55,0,s);
  c.bezierCurveTo(-s*.85,s*.55,-s*.95,-s*.55,0,-s);
  c.fill();
}
function petalFrame(){
  pg.clearRect(0,0,vw,vh);
  if(!document.hidden){
    for(const p of petals){
      p.sw += p.ss; p.rot += p.vr; p.fl += p.fv;
      p.y += p.vy*1.2 + scrollVel*.28*p.z;
      p.x += Math.sin(p.sw)*.45*p.z;
      const dx = p.x-mpx, dy = p.y-mpy, d2 = dx*dx+dy*dy;
      if(d2 < 14400){ const d = Math.sqrt(d2)||1, f = (1-d/120)*2.2; p.x += dx/d*f; p.y += dy/d*f; }
      if(p.y > vh+40){ p.y = rnd(-80,-20); p.x = rnd(0,vw); }
      else if(p.y < -90){ p.y = vh+30; p.x = rnd(0,vw); }
      if(p.x < -40) p.x = vw+30; else if(p.x > vw+40) p.x = -30;
      pg.save(); pg.translate(p.x,p.y); pg.rotate(p.rot); pg.scale(Math.abs(Math.cos(p.fl))*.8+.25, 1);
      pg.fillStyle = `rgba(${p.col},${p.a})`; drawPetal(pg,p.s); pg.restore();
    }
  }
  scrollVel *= .9;
  requestAnimationFrame(petalFrame);
}

/* ---------- Размеры ---------- */
const bc = $('#burst'), bx = bc.getContext('2d');
function resize(){
  vw = innerWidth; vh = innerHeight;
  const d = Math.min(devicePixelRatio||1,2);
  [[pc,pg],[bc,bx]].forEach(([c,g])=>{ c.width = vw*d; c.height = vh*d; g.setTransform(d,0,0,d,0,0); });
  const was = petals.length; if(!was || (vw<700) !== (was<20)) initPetals();
  setSizes(); sizeSky(); update();
}
let rzT; addEventListener('resize',()=>{ clearTimeout(rzT); rzT = setTimeout(resize,120); });

/* ---------- Небо: звёзды-искры ---------- */
const skc = $('#skyc'), sx = skc.getContext('2d'), skyBox = $('#skyBox');
let SW=0, SH=0, sstars=[], sbg=[], shoot=null, skyVis=false;
function sizeSky(){
  SW = skc.offsetWidth; SH = skc.offsetHeight; if(!SW) return;
  const d = Math.min(devicePixelRatio||1,2);
  skc.width = SW*d; skc.height = SH*d; sx.setTransform(d,0,0,d,0,0);
  sbg = Array.from({length:90},()=>({x:rnd(0,SW),y:rnd(0,SH),r:rnd(.3,1.3),p:rnd(0,6.28)}));
}
function sparkle(c,x,y,R){
  c.beginPath(); c.moveTo(x,y-R);
  c.quadraticCurveTo(x,y,x+R,y); c.quadraticCurveTo(x,y,x,y+R);
  c.quadraticCurveTo(x,y,x-R,y); c.quadraticCurveTo(x,y,x,y-R); c.closePath();
}
const SCOL = ['255,240,224','230,199,156','240,138,168'];
skc.addEventListener('pointerdown',e=>{
  const r = skc.getBoundingClientRect();
  sstars.push({x:(e.clientX-r.left)*(SW/r.width||1), y:(e.clientY-r.top)*(SH/r.height||1), born:performance.now(), p:rnd(0,6.28), col:sstars.length%3});
  if(sstars.length>14) sstars.shift();
  skyBox.classList.add('used'); haptic(6);
  if(reduce) drawSky(performance.now());
});
setInterval(()=>{ if(!reduce && !shoot && SW && skyVis) shoot = {x:rnd(SW*.4,SW*.95), y:rnd(0,SH*.3), t:0}; },4600);
function drawSky(now){
  if(!SW) return;
  sx.clearRect(0,0,SW,SH);
  sbg.forEach(s=>{ const a = .25+.35*Math.sin(now/900+s.p); sx.fillStyle = `rgba(255,240,224,${Math.max(.06,a)})`; sx.beginPath(); sx.arc(s.x,s.y,s.r,0,6.28); sx.fill(); });
  if(sstars.length>1){
    sx.strokeStyle = 'rgba(230,199,156,.55)'; sx.lineWidth = 1; sx.lineJoin = 'round'; sx.beginPath();
    sstars.forEach((s,i)=>{ i?sx.lineTo(s.x,s.y):sx.moveTo(s.x,s.y); }); sx.stroke();
  }
  sstars.forEach(s=>{
    const k = Math.min(1,(now-s.born)/700), R = 4+15*(1-Math.pow(1-k,3)) + Math.sin(now/500+s.p)*1.2;
    const col = SCOL[s.col];
    const gr = sx.createRadialGradient(s.x,s.y,0,s.x,s.y,R*2.6);
    gr.addColorStop(0,`rgba(${col},.45)`); gr.addColorStop(1,`rgba(${col},0)`);
    sx.fillStyle = gr; sx.beginPath(); sx.arc(s.x,s.y,R*2.6,0,6.28); sx.fill();
    sx.fillStyle = `rgb(${col})`; sparkle(sx,s.x,s.y,R); sx.fill();
  });
  if(shoot){
    shoot.t += .018; const x = shoot.x-shoot.t*SW*.6, y = shoot.y+shoot.t*SH*.5;
    const gr = sx.createLinearGradient(x,y,x+90,y-70); gr.addColorStop(0,'rgba(255,240,224,.95)'); gr.addColorStop(1,'rgba(255,240,224,0)');
    sx.strokeStyle = gr; sx.lineWidth = 1.6; sx.beginPath(); sx.moveTo(x,y); sx.lineTo(x+90,y-70); sx.stroke();
    if(shoot.t>1) shoot = null;
  }
}
new IntersectionObserver(es=>es.forEach(e=>{ skyVis = e.isIntersecting; if(skyVis) sizeSky(); }),{threshold:0}).observe(skyBox);
function skyLoop(now){ if(skyVis) drawSky(now); requestAnimationFrame(skyLoop); }

/* ---------- Причины ---------- */
$$('.rc').forEach(c=>c.addEventListener('click',()=>{
  const o = c.classList.toggle('open'); c.setAttribute('aria-pressed',o); haptic(8);
}));

/* ---------- Счётчик ---------- */
function plural(n,a,b,c){ n=Math.abs(n)%100; const m=n%10; if(n>10&&n<20) return c; if(m>1&&m<5) return b; if(m===1) return a; return c; }
const sinceMs = new Date(SINCE+'T00:00:00').getTime();
let counted = false, liveOn = false;
/* Круглые даты: годовщина, «месяцы вместе», сотни дней и «красивые» числа. Проверка: открой сайт с ?party в адресе */
const SPECIAL_DAYS = [50,111,222,333,444,555,666,777,888,999,1111];
function milestone(){
  const n = new Date(), s = new Date(SINCE+'T00:00:00');
  const days = Math.round((new Date(n.getFullYear(),n.getMonth(),n.getDate()) - new Date(s.getFullYear(),s.getMonth(),s.getDate()))/864e5);
  const dim = new Date(n.getFullYear(),n.getMonth()+1,0).getDate();
  const same = n.getDate()===s.getDate() || (s.getDate()>dim && n.getDate()===dim);
  const months = (n.getFullYear()-s.getFullYear())*12 + n.getMonth()-s.getMonth();
  if(same && months>0){
    if(months%12===0){ const y = months/12; return y===1 ? 'ровно год вместе' : `ровно ${y} ${plural(y,'год','года','лет')} вместе`; }
    return `ровно ${months} ${plural(months,'месяц','месяца','месяцев')} вместе`;
  }
  if(days>0 && (days%100===0 || SPECIAL_DAYS.includes(days))) return `ровно ${days} ${plural(days,'день','дня','дней')} вместе`;
  return /[?&]party\b/.test(location.search) ? 'ровно год вместе' : '';
}
function celebrate(){
  const text = milestone(); if(!text) return;
  const badge = $('#cntBadge'), stage = $('#cntStage'), fx = $('#cntFx');
  badge.textContent = 'сегодня '+text;
  badge.classList.add('show'); stage.classList.add('party');
  if(reduce) return;
  fx.innerHTML = '<i class="rg"></i><i class="rg r2"></i>' + Array.from({length:16},(_,i)=>{
    const heart = i%3===0, sz = heart ? rnd(10,16) : rnd(9,17);
    return `<i class="sp${heart?' h':''}" style="left:${rnd(4,96).toFixed(1)}%;top:${rnd(14,86).toFixed(1)}%;font-size:${sz.toFixed(1)}px;--dl:${rnd(0,4.5).toFixed(2)}s;--du:${rnd(3.2,5.4).toFixed(2)}s;--dx:${rnd(-14,14).toFixed(1)}px">${heart?'♥':'✦'}</i>`;
  }).join('');
  const r = $('#days').getBoundingClientRect();
  spawnBurst(r.left+r.width/2, r.top+r.height*.45); haptic([12,50,12]);
}
function tickLive(){
  const ms = Math.max(0, Date.now()-sinceMs);
  $('#cH').textContent = Math.floor(ms/36e5)%24;
  $('#cM').textContent = pad(Math.floor(ms/6e4)%60);
  $('#cS').textContent = pad(Math.floor(ms/1e3)%60);
}
function startCount(){
  if(counted) return; counted = true;
  const ms = Math.max(0, Date.now()-sinceMs), days = Math.floor(ms/864e5), hours = Math.floor(ms/36e5);
  const el = $('#days');
  $('#daysWord').textContent = plural(days,'день','дня','дней');
  $('#detail').textContent = `это ${hours.toLocaleString('ru-RU')} ${plural(hours,'час','часа','часов')}, и я ни о чём не жалею`;
  tickLive(); setInterval(tickLive,1000);
  if(reduce){ el.textContent = days; celebrate(); return; }
  const t0 = performance.now(), dur = 2400;
  (function tick(){ const k = Math.min(1,(performance.now()-t0)/dur); el.textContent = Math.round(days*(1-Math.pow(1-k,4))); if(k<1) requestAnimationFrame(tick); else celebrate(); })();
}
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ startCount(); o.disconnect(); } }),{threshold:.3}).observe($('#cnt'));

/* ---------- Письмо ---------- */
const paper = $('#paper');
let typed = false, skipType = false;
function renderLetter(n,caret){
  paper.innerHTML = `<span>${esc(LETTER.slice(0,n))}</span>${caret?'<span class="caret"></span>':''}<span style="visibility:hidden">${esc(LETTER.slice(n))}</span>`;
}
function typeLetter(){
  if(typed) return; typed = true;
  if(reduce){ paper.textContent = LETTER; return; }
  let i = 0;
  (function step(){
    if(skipType){ renderLetter(LETTER.length,false); return; }
    renderLetter(++i, i<LETTER.length);
    if(i<LETTER.length){ const ch = LETTER[i-1]; setTimeout(step, ch==='\n'?280:(/[.,!]/.test(ch)?180:34)); }
  })();
}
paper.addEventListener('click',()=>{ skipType = true; });
renderLetter(0,false);
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ typeLetter(); o.disconnect(); } }),{threshold:.35}).observe(paper);

/* ---------- Конфетти из сердец и лепестков ---------- */
let bparts = [], burstOn = false;
function heartShape(c,x,y,s){
  c.beginPath(); c.moveTo(x,y+s*.9);
  c.bezierCurveTo(x-s*1.5,y-s*.2,x-s*.7,y-s*1.2,x,y-s*.4);
  c.bezierCurveTo(x+s*.7,y-s*1.2,x+s*1.5,y-s*.2,x,y+s*.9); c.fill();
}
const BCOL = ['240,138,168','217,70,138','230,199,156','255,240,224'];
function spawnBurst(cx,cy){
  for(let i=0;i<130;i++){
    const a = rnd(0,6.283), s = rnd(3,13);
    bparts.push({x:cx,y:cy,vx:Math.cos(a)*s,vy:Math.sin(a)*s-6,rot:rnd(0,6.28),vr:rnd(-.2,.2),r:rnd(5,12),
      col:BCOL[i%4],life:rnd(90,160),heart:i%3===0});
  }
  if(!burstOn){ burstOn = true; requestAnimationFrame(burstFrame); }
}
function burstFrame(){
  bx.clearRect(0,0,vw,vh);
  bparts = bparts.filter(p=>p.life>0);
  for(const p of bparts){
    p.vy += .18; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
    bx.globalAlpha = clamp(p.life/40,0,1); bx.fillStyle = `rgb(${p.col})`;
    bx.save(); bx.translate(p.x,p.y); bx.rotate(p.rot);
    if(p.heart) heartShape(bx,0,0,p.r*.7); else drawPetal(bx,p.r);
    bx.restore();
  }
  bx.globalAlpha = 1;
  if(bparts.length) requestAnimationFrame(burstFrame); else { burstOn = false; bx.clearRect(0,0,vw,vh); }
}
/* ---------- Эффект свечи: по первому нажатию на сердце свет гаснет, остаётся один огонёк ---------- */
let candleDone = false, heartSent = false;
function lightsOut(x,y){
  const d = document.createElement('div'); d.id = 'dusk'; d.setAttribute('aria-hidden','true');
  d.style.setProperty('--fx',x+'px'); d.style.setProperty('--fy',y+'px');
  d.innerHTML = '<i class="flame"></i><p class="dusk-t"></p>';
  const t = d.querySelector('.dusk-t'); t.style.top = (y+110 > vh ? y-120 : y+64) + 'px';
  document.body.appendChild(d); document.body.classList.add('dusk-on');
  requestAnimationFrame(()=>d.classList.add('on'));
  const stop = e=>e.preventDefault();
  d.addEventListener('wheel',stop,{passive:false}); d.addEventListener('touchmove',stop,{passive:false});
  const t0 = performance.now(), base = vw<700 ? 200 : 290, timers = [];
  let alive = true, raf = 0;
  const say = (txt)=>{ t.classList.remove('show'); timers.push(setTimeout(()=>{ t.textContent = txt; t.classList.add('show'); }, 700)); };
  const loop = now=>{
    const g = clamp((now-t0-900)/1900,0,1), e = 1-Math.pow(1-g,3);
    const k = 1 + Math.sin(now/90)*.04 + Math.sin(now/37)*.03 + Math.sin(now/230)*.05;
    d.style.setProperty('--fr',(base*e*k).toFixed(1)+'px');
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  timers.push(setTimeout(()=>say('Если вдруг всё погаснет…'),1500));
  timers.push(setTimeout(()=>say('…я всё равно найду дорогу к тебе.'),3700));
  const finish = ()=>{
    if(!alive) return; alive = false; timers.forEach(clearTimeout);
    const b = document.createElement('div'); b.className = 'bloom';
    b.style.setProperty('--fx',x+'px'); b.style.setProperty('--fy',y+'px'); document.body.appendChild(b);
    b.animate([{opacity:0},{opacity:1,offset:.16},{opacity:0}],{duration:1500,easing:'ease-out'});
    d.classList.remove('on'); document.body.classList.remove('dusk-on');
    spawnBurst(x,y); haptic([12,50,12]);
    setTimeout(()=>{ cancelAnimationFrame(raf); d.remove(); b.remove(); },1600);
  };
  timers.push(setTimeout(finish,6600));
  d.addEventListener('click',()=>{ if(performance.now()-t0 > 1600) finish(); });
}
$('#heart').addEventListener('click',e=>{
  const btn = e.currentTarget, r = btn.getBoundingClientRect(), txt = $('#heartTxt');
  if(!heartSent){ heartSent = true; notify('Она нажала ♥','Нажала на сердечко в конце сайта, в '+nowTime(),'heart'); }
  if(!reduce && !candleDone){ candleDone = true; lightsOut(r.left+r.width/2, r.top+r.height/2); }
  else if(!reduce){ spawnBurst(r.left+r.width/2, r.top+r.height/2); haptic([12,50,12]); }
  btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop','on');
  btn.setAttribute('aria-pressed','true');
  if(txt.textContent !== 'Я знал ♥'){
    txt.style.opacity = 0;
    setTimeout(()=>{ txt.textContent = 'Я знал ♥'; txt.classList.add('done'); txt.style.opacity = 1; }, 320);
  }
});

/* ---------- Курсор: свечение и «магнитные» кнопки (только на компьютере) ---------- */
const glow = $('#glow'), mags = $$('[data-mag]');
addEventListener('pointermove',e=>{
  mpx = e.clientX; mpy = e.clientY;
  if(e.pointerType!=='mouse' || reduce) return;
  glow.classList.add('on'); glow.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
  for(const el of mags){
    const r = el.getBoundingClientRect();
    if(!r.width || r.bottom<0 || r.top>vh) continue;
    const dx = e.clientX-(r.left+r.width/2), dy = e.clientY-(r.top+r.height/2);
    el.style.translate = Math.hypot(dx,dy) < Math.max(r.width,r.height)*.9+30 ? `${(dx*.25).toFixed(1)}px ${(dy*.25).toFixed(1)}px` : '';
  }
});
addEventListener('pointerleave',()=>{ mpx = mpy = -9999; });
addEventListener('touchend',()=>{ mpx = mpy = -9999; },{passive:true});
document.addEventListener('mouseleave',()=>{ mpx = mpy = -9999; glow.classList.remove('on'); });

/* ---------- Запуск ---------- */
resize();
if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>{ setSizes(); layoutDesk(); update(); });
addEventListener('load',()=>{ setSizes(); layoutDesk(); update(); });
/* ---------- Фото для тебя (ntfy) ---------- */
const nowTime = () => new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
const nUrl = o => `${NTFY_SERVER}/${NTFY_TOPIC}?` + Object.entries(o).map(([k,v])=>k+'='+encodeURIComponent(v)).join('&');
function shrink(file,max=1600,q=.86){
  return new Promise((res,rej)=>{
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = ()=>{
      const k = Math.min(1, max/Math.max(img.naturalWidth,img.naturalHeight));
      const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth*k); c.height = Math.round(img.naturalHeight*k);
      c.getContext('2d').drawImage(img,0,0,c.width,c.height);
      c.toBlob(b=>{ URL.revokeObjectURL(url); b ? res(b) : rej(new Error('blob')); },'image/jpeg',q);
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); rej(new Error('img')); };
    img.src = url;
  });
}
(function(){
  const box = $('#askBox'); if(!box) return;
  const file = $('#askFile'), prev = $('#askPrev'), img = $('#askImg'), msg = $('#askMsg');
  const bShoot = $('#askShoot'), bSend = $('#askSend'), bRe = $('#askRetake');
  let blob = null, prevUrl = null, busy = false;
  const say = s => { msg.style.opacity = 0; setTimeout(()=>{ msg.textContent = s; msg.style.opacity = 1; }, 200); };
  function show(state){
    prev.hidden = !(state==='preview'||state==='sending');
    bShoot.hidden = state!=='idle' && state!=='done';
    bSend.hidden = !(state==='preview'||state==='sending');
    bRe.hidden = state!=='preview';
    box.dataset.state = state;
  }
  show('idle');
  const pick = ()=>{ if(!busy){ file.value = ''; file.click(); } };
  bShoot.addEventListener('click',pick); bRe.addEventListener('click',pick);
  file.addEventListener('change',async()=>{
    const f = file.files && file.files[0]; if(!f) return;
    try{
      say('Секунду…');
      blob = await shrink(f);
      if(prevUrl) URL.revokeObjectURL(prevUrl);
      prevUrl = URL.createObjectURL(blob); img.src = prevUrl;
      show('preview'); say('Так и отправим? Фото уйдёт только мне.');
    }catch(e){ show('idle'); say('Не получилось открыть фото. Попробуй ещё раз.'); }
  });
  bSend.addEventListener('click',async()=>{
    if(!blob || busy) return;
    busy = true; show('sending'); bSend.disabled = true; bSend.textContent = 'Отправляю…'; say('');
    try{
      const r = await fetch(nUrl({title:'Фото от любимой ♥', message:'Прислала фото в '+nowTime(), filename:'photo.jpg', tags:'heart', priority:'4'}),{method:'PUT',body:blob});
      if(!r.ok) throw new Error('http '+r.status);
      blob = null; show('done'); bShoot.textContent = 'Отправить ещё одно';
      say('Фото уже у меня. Спасибо, моя любимая ♥');
      haptic([12,50,12]);
      if(!reduce){ const b = bShoot.getBoundingClientRect(); spawnBurst(b.left+b.width/2, b.top); }
    }catch(e){ show('preview'); say('Не получилось отправить. Проверь интернет и нажми ещё раз.'); }
    busy = false; bSend.disabled = false; bSend.textContent = 'Отправить мне';
  });
})();

/* ---------- Колесо желаний ---------- */
/* Надёжная отправка: очередь в памяти и в localStorage, повторные попытки, keepalive.
   Так уведомление дойдёт, даже если связь моргнула или экран погас во время отправки. */
const NQ_KEY = 'ntfyQueue';
let nq = (()=>{ try{ return JSON.parse(localStorage.getItem(NQ_KEY)||'[]'); }catch(e){ return []; } })();
let nFlushing = false, nFails = 0;
const nSave = ()=>{ try{ localStorage.setItem(NQ_KEY, JSON.stringify(nq.slice(-30))); }catch(e){} };
async function nFlush(){
  if(nFlushing || !nq.length || !NTFY_TOPIC) return;
  nFlushing = true;
  try{
    while(nq.length){
      const m = nq[0];
      const r = await fetch(nUrl({title:m.title,tags:m.tags}),{method:'POST',body:m.message,keepalive:true});
      if(!r.ok) throw new Error('http '+r.status);
      nq.shift(); nSave(); nFails = 0;
    }
  }catch(e){
    if(++nFails <= 8) setTimeout(nFlush, Math.min(30000, 2500*nFails));
  }
  nFlushing = false;
}
function notify(title,message,tags='gift'){
  if(!NTFY_TOPIC) return;
  nq.push({title,message,tags}); nSave(); nFlush();
}
addEventListener('online',nFlush);
document.addEventListener('visibilitychange',()=>{ if(!document.hidden) nFlush(); });
addEventListener('pageshow',nFlush);
nFlush();
(function(){
  const box = $('#wheel-rot'), btn = $('#wheelBtn'), res = $('#wheelRes'); if(!box) return;
  const rot = box.querySelector('.wheel-svg');
  const n = WISHES.length, step = 360/n;
  let angle = 0, spinning = false;
  btn.addEventListener('click',()=>{
    if(spinning) return; spinning = true; btn.disabled = true;
    res.classList.remove('show'); res.replaceChildren(); haptic(10);
    const idx = Math.floor(Math.random()*n), center = idx*step + step/2, jitter = rnd(-step*.35, step*.35);
    const need = (((-center + jitter - angle) % 360) + 360) % 360;
    angle += 360*(5 + Math.floor(rnd(0,3))) + need;
    rot.style.transform = `rotate(${angle}deg)`;
    setTimeout(()=>{
      const w = WISHES[idx];
      // уведомление уходит только когда колесо остановилось и результат показан
      notify('Колесо желаний ♥','Ей выпало: '+w.t+' ('+nowTime()+')');
      res.innerHTML = `<b>${esc(w.t)}</b><span>${esc(w.d)}</span>`; void res.offsetWidth; res.classList.add('show');
      haptic([12,50,12]);
      if(!reduce){ const r = box.getBoundingClientRect(); spawnBurst(r.left+r.width/2, r.top+r.height/2); }
      btn.textContent = 'Крутить ещё'; btn.disabled = false; spinning = false;
    }, reduce ? 60 : 5400);
  });
})();

if(!reduce){ requestAnimationFrame(petalFrame); requestAnimationFrame(skyLoop); }
else { drawSky(0); }
update();

/* ---------- Видеоклип ---------- */
(function(){
  const v = $('#clipV'), b = $('#clipPlay'), box = $('#clipBox'); if(!v) return;
  b.addEventListener('click',()=>{ v.controls = true; box.classList.add('playing'); v.play().catch(()=>{ v.controls = true; }); });
  v.addEventListener('ended',()=>{ box.classList.remove('playing'); v.controls = false; v.currentTime = 0; });
  new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting && !v.paused) v.pause(); }),{threshold:.1}).observe(box);
})();

/* ---------- 3D-сердце в венке из роз с шипами (WebGL, без библиотек) ---------- */
(function(){
  const cv = $('#h3d'), box = $('#h3dBox'); if(!cv || !box) return;
  const gl = cv.getContext('webgl',{antialias:true,alpha:true,premultipliedAlpha:true});
  if(!gl){ box.remove(); return; }

  /* ---- мини-математика ---- */
  const hex = h => [parseInt(h.slice(1,3),16)/255, parseInt(h.slice(3,5),16)/255, parseInt(h.slice(5,7),16)/255];
  const lerp = (a,b,t)=>a+(b-a)*t;
  const lerp3 = (a,b,t)=>[lerp(a[0],b[0],t),lerp(a[1],b[1],t),lerp(a[2],b[2],t)];
  const sstep = (a,b,x)=>{ const t = clamp((x-a)/(b-a),0,1); return t*t*(3-2*t); };
  const add = (a,b)=>[a[0]+b[0],a[1]+b[1],a[2]+b[2]];
  const sub = (a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
  const mulv = (a,s)=>[a[0]*s,a[1]*s,a[2]*s];
  const crs = (a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const nrm = (a,f)=>{ const l = Math.hypot(a[0],a[1],a[2]); return l<1e-12 ? (f||[0,1,0]) : [a[0]/l,a[1]/l,a[2]/l]; };
  let seed = 11;
  const rnd2 = ()=>{ seed = seed+0x6D2B79F5|0; let t = Math.imul(seed^seed>>>15,1|seed); t = t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; };

  // матрицы 4×4 (по столбцам)
  const mm = (a,b)=>{ const o = new Array(16); for(let c=0;c<4;c++) for(let r=0;r<4;r++){ let s=0; for(let k=0;k<4;k++) s+=a[k*4+r]*b[c*4+k]; o[c*4+r]=s; } return o; };
  const rotY = a=>{ const c=Math.cos(a), s=Math.sin(a); return [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]; };
  const rotX = a=>{ const c=Math.cos(a), s=Math.sin(a); return [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]; };
  const trans = (x,y,z)=>[1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1];
  const scl = s=>[s,0,0,0, 0,s,0,0, 0,0,s,0, 0,0,0,1];
  const persp = (fy,as,n,f)=>{ const t = 1/Math.tan(fy/2); return [t/as,0,0,0, 0,t,0,0, 0,0,(f+n)/(n-f),-1, 0,0,2*f*n/(n-f),0]; };

  /* ---- сетка вершин → треугольники, сглаженные нормали ---- */
  function Mesh(){ this.v = []; this.i = []; this.n = 0; }
  // f(u,v) → {p,c,a,g}; a — «затенённость» у основания, g — глянцевость
  Mesh.prototype.grid = function(nu,nv,f,xf,o){
    o = o||{}; const V = [];
    for(let i=0;i<nu;i++){ const r=[]; for(let j=0;j<nv;j++) r.push(f(o.wu?i/nu:i/(nu-1), o.wv?j/nv:j/(nv-1))); V.push(r); }
    const at = (i,j)=>{ i = o.wu ? (i+nu)%nu : clamp(i,0,nu-1); j = o.wv ? (j+nv)%nv : clamp(j,0,nv-1); return V[i][j].p; };
    const base = this.n;
    for(let i=0;i<nu;i++) for(let j=0;j<nv;j++){
      const q = V[i][j];
      let n = nrm(crs(sub(at(i+1,j),at(i-1,j)),sub(at(i,j+1),at(i,j-1))), q.f);
      if(o.p0 && i===0) n = o.p0; if(o.p1 && i===nu-1) n = o.p1;
      const p = xf.p(q.p), nn = nrm(xf.n(n));
      this.v.push(p[0],p[1],p[2],nn[0],nn[1],nn[2],q.c[0],q.c[1],q.c[2],q.a,q.g); this.n++;
    }
    const nI = o.wu?nu:nu-1, mI = o.wv?nv:nv-1;
    for(let i=0;i<nI;i++) for(let j=0;j<mI;j++){
      const i2=(i+1)%nu, j2=(j+1)%nv, a=base+i*nv+j, b=base+i*nv+j2, c=base+i2*nv+j, d=base+i2*nv+j2;
      this.i.push(a,b,c,b,d,c);
    }
  };
  // система координат: ось y — «вверх» детали, hint — куда смотрит её «верх»
  function frame(o,axis,hint,s){
    const y = nrm(axis), x = nrm(crs(y,hint),[1,0,0]), z = crs(x,y);
    return {
      p:q=>[o[0]+s*(x[0]*q[0]+y[0]*q[1]+z[0]*q[2]), o[1]+s*(x[1]*q[0]+y[1]*q[1]+z[1]*q[2]), o[2]+s*(x[2]*q[0]+y[2]*q[1]+z[2]*q[2])],
      n:q=>[x[0]*q[0]+y[0]*q[1]+z[0]*q[2], x[1]*q[0]+y[1]*q[1]+z[1]*q[2], x[2]*q[0]+y[2]*q[1]+z[2]*q[2]]
    };
  }
  const compose = (A,B)=>({p:q=>A.p(B.p(q)), n:q=>A.n(B.n(q))});
  const ID = {p:q=>q, n:q=>q};

  /* =====================================================
     Сердце: неявная поверхность, радиус по лучам + сглаживание
     ===================================================== */
  function buildHeart(){
    const NP = 96, NT = 168;
    const F = (x,y,z)=>{ const a = x*x+2.25*y*y+z*z-1; return a*a*a - x*x*z*z*z - .1125*y*y*z*z*z; };
    let R = [];
    for(let i=0;i<=NP;i++){
      const ph = i/NP*Math.PI, row = [];
      for(let j=0;j<NT;j++){
        const th = j/NT*Math.PI*2, d = [Math.sin(ph)*Math.cos(th), Math.sin(ph)*Math.sin(th), Math.cos(ph)];
        let lo = 0, hi = 1.8;
        for(let r=.02;r<=1.8;r+=.02){ if(F(d[0]*r,d[1]*r,d[2]*r)>0){ hi = r; lo = r-.02; break; } }
        for(let k=0;k<30;k++){ const m=(lo+hi)/2; if(F(d[0]*m,d[1]*m,d[2]*m)>0) hi=m; else lo=m; }
        row.push((lo+hi)/2);
      }
      R.push(row);
    }
    // мягкое сглаживание: убирает острые углы у выемки и кончика
    for(let pass=0;pass<3;pass++){
      const N2 = R.map(r=>r.slice());
      for(let i=1;i<NP;i++) for(let j=0;j<NT;j++){
        let s=0, w=0;
        for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){ const k=(2-Math.abs(di))*(2-Math.abs(dj)); s += R[i+di][(j+dj+NT)%NT]*k; w += k; }
        N2[i][j] = s/w;
      }
      for(const i of [0,NP]){ const m = N2[i===0?1:NP-1].reduce((a,b)=>a+b,0)/NT; N2[i] = N2[i].map(()=>m); }
      R = N2;
    }
    // в координаты сцены: X — вширь, Y — вверх, Z — толщина; ширина = 2
    let mx = 0; for(const row of R) row.forEach((r,j)=>{ const i = R.indexOf(row); mx = Math.max(mx, Math.abs(r*Math.sin(i/NP*Math.PI)*Math.cos(j/NT*Math.PI*2))); });
    const S = 1/mx;
    let y0 = 1e9, y1 = -1e9;
    for(let i=0;i<=NP;i++) for(let j=0;j<NT;j++){ const y = R[i][j]*Math.cos(i/NP*Math.PI)*S; y0 = Math.min(y0,y); y1 = Math.max(y1,y); }
    const cy = (y0+y1)/2, hh = (y1-y0)/2;
    const cBot = hex('#b01d5a'), cTop = hex('#f47fa4');
    const M = new Mesh();
    M.grid(NP+1,NT,(u,v)=>{
      const i = Math.round(u*NP), j = Math.round(v*NT)%NT, ph = u*Math.PI, th = v*Math.PI*2, r = R[i][j]*S;
      const p = [r*Math.sin(ph)*Math.cos(th), r*Math.cos(ph)-cy, r*Math.sin(ph)*Math.sin(th)*.82];
      const t = sstep(-.9,.95,p[1]/hh);
      return {p, c:lerp3(cBot,cTop,t), a:1, g:120, f:nrm(p)};
    },ID,{wv:true,p0:[0,1,0],p1:[0,-1,0]});
    return {mesh:M, h:hh};
  }

  /* =====================================================
     Роза: лепестки-«чашечки» по спирали, чашелистики
     ===================================================== */
  function leaf(M,xf,L,W,c0,c1,fold,droop,gloss){
    const NU = 12, NV = 7;
    M.grid(NU,NV,(u,v)=>{
      const vv = v*2-1, w = W*Math.pow(Math.sin(Math.PI*(.04+.96*Math.pow(u,.85))),.75)*(1+.05*Math.sin(u*38));
      const x = vv*w, y = L*u, z = fold*Math.abs(x) - droop*u*u*L + .015*Math.sin(u*7+vv*2);
      return {p:[x,y,z], c:lerp3(c0,c1,Math.pow(u,.8)*.8+Math.abs(vv)*.2), a:.45+.55*u, g:gloss, f:[0,0,1]};
    },xf);
  }
  function rose(M,xf,pal){
    const deep = hex(pal[0]), bright = hex(pal[1]);
    // [лепестков, угол у основания, закрутка, длина]
    const LY = [[3,0,-.22,.52],[4,.07,.03,.64],[5,.22,.34,.76],[5,.36,.62,.88],[6,.50,.88,.98],[7,.60,1.12,1.06]];
    let rot = rnd2()*6.28;
    LY.forEach(([n,a0,cu,L],l)=>{
      const f = l/(LY.length-1); rot += .9+rnd2()*.3;
      for(let k=0;k<n;k++){
        const th = rot+k/n*Math.PI*2+(rnd2()-.5)*.25, aa = a0+(rnd2()-.5)*.08, LL = L*(1+(rnd2()-.5)*.08);
        const hw = Math.PI/n*(l===0?1.75:1.55), rb = .09+.03*l+k*.011, yb = .05+.014*l;
        const NU = 14, NV = 19, rr = [rb], yy = [yb];
        for(let i=1;i<NU;i++){ const um=(i-.5)/(NU-1), a = aa+cu*um*um; rr.push(rr[i-1]+Math.sin(a)*LL/(NU-1)); yy.push(yy[i-1]+Math.cos(a)*LL/(NU-1)); }
        M.grid(NU,NV,(u,v)=>{
          const i = Math.round(u*(NU-1)), vv = v*2-1;
          const w = Math.max(.05,Math.pow(Math.sin(Math.PI*(.08+.92*Math.pow(u,1.5))),.5));
          const ph = th+vv*hw*w, rad = rr[i]+(.10*f+.02)*vv*vv*u*u*LL, y = yy[i]+.05*vv*vv*u*(1+f);
          let c = lerp3(deep,bright,.12+.72*Math.pow(u,1.2));
          c = lerp3(c,[1,.88,.9],Math.pow(Math.abs(vv),4)*.14*u);
          return {p:[rad*Math.cos(ph),y,rad*Math.sin(ph)], c, a:(.34+.66*Math.pow(u,.7))*(.55+.45*f), g:14, f:[Math.cos(th),0,Math.sin(th)]};
        },xf);
      }
    });
    // сердцевина-бутон
    M.grid(8,14,(u,v)=>{ const ps = u*1.5, th = v*Math.PI*2, r = .075*Math.sin(ps);
      return {p:[r*Math.cos(th),.5+.06*Math.cos(ps),r*Math.sin(th)], c:lerp3(deep,[.25,0,.08],.4), a:.3, g:10, f:[0,1,0]}; },xf,{wv:true,p0:[0,1,0]});
    // чашечка и чашелистики
    const gA = hex('#2c4a31'), gB = hex('#4f7f58');
    M.grid(8,16,(u,v)=>{ const ps = .05+u*1.9, th = v*Math.PI*2, r = .2*Math.sin(ps);
      return {p:[r*Math.cos(th),-.17*Math.cos(ps),r*Math.sin(th)], c:lerp3(gA,gB,u), a:.7, g:22, f:[0,-1,0]}; },xf,{wv:true,p0:[0,-1,0]});
    for(let k=0;k<5;k++){
      const ps = k/5*Math.PI*2+.3, ax = [Math.cos(ps)*.85,-.42,Math.sin(ps)*.85];
      leaf(M,compose(xf,frame([Math.cos(ps)*.15,.03,Math.sin(ps)*.15],ax,[0,1,0],1)),.42,.07,gA,gB,.5,.5,26);
    }
  }

  /* =====================================================
     Шип: изогнутый конус с золотистым кончиком
     ===================================================== */
  const thC0 = hex('#6e2430'), thC1 = hex('#d6ae7c');
  function thorn(M,xf,L,R0){
    M.grid(6,6,(u,v)=>{
      const th = v*Math.PI*2, r = R0*Math.pow(1-u,.85)+.0007, x = r*Math.cos(th)+.45*L*u*u, y = L*u;
      return {p:[x,y,r*Math.sin(th)], c:lerp3(thC0,thC1,Math.pow(u,1.4)), a:.85, g:34, f:[0,1,0]};
    },xf,{wv:true});
  }

  /* =====================================================
     Венок: две переплетённые лозы по кольцу, розы, листья
     ===================================================== */
  function buildGarland(){
    const M = new Mesh(), RR = 1.62, TW = 15, UP = [0,1,0];
    const ring = t=>[RR*Math.cos(t), .11*Math.sin(3*t+.5)+.04, RR*Math.sin(t)];
    const rad = t=>[Math.cos(t),0,Math.sin(t)];
    const tan = t=>nrm([-Math.sin(t),0,Math.cos(t)]);
    const strand = (t,ph)=>{ const a = TW*t+ph, o = add(mulv(rad(t),Math.cos(a)*.055), mulv(UP,Math.sin(a)*.055)); return add(ring(t),o); };
    const stA = hex('#355a3d'), stB = hex('#58804f');
    [0,Math.PI].forEach((ph,si)=>{
      const rT = .034, Q = t=>strand(t,ph);
      M.grid(360,9,(u,v)=>{
        const t = u*Math.PI*2, c = Q(t), T = nrm(sub(Q(t+.002),Q(t-.002))), sd = nrm(crs(T,UP)), up = crs(sd,T), a = v*Math.PI*2;
        const p = add(c,add(mulv(sd,Math.cos(a)*rT),mulv(up,Math.sin(a)*rT)));
        return {p, c:lerp3(stA,stB,.5+.5*Math.sin(t*23+si*2)), a:.9, g:20, f:sd};
      },ID,{wu:true,wv:true});
      // шипы вдоль лозы
      const NT = 46;
      for(let k=0;k<NT;k++){
        const t = (k+.5*si+rnd2()*.25)/NT*Math.PI*2, c = Q(t), T = nrm(sub(Q(t+.002),Q(t-.002))), sd = nrm(crs(T,UP)), up = crs(sd,T), ps = k*2.4+si*1.3;
        const out = add(mulv(sd,Math.cos(ps)),mulv(up,Math.sin(ps))), ax = nrm(sub(out,mulv(T,.65)));
        thorn(M,frame(add(c,mulv(out,rT*.7)),ax,T,1),.17+rnd2()*.06,.04);
      }
    });
    // розы и листья
    const pal = [['#7a0e2b','#e0305c'],['#a62a52','#f58fae'],['#85122f','#d92b57'],['#b98a68','#f8e6d4'],['#7a0e2b','#e0305c'],['#a62a52','#f58fae']];
    const NR = pal.length, lA = hex('#244428'), lB = hex('#5f9468');
    for(let k=0;k<NR;k++){
      const t = k/NR*Math.PI*2+.15, o = ring(t), big = k%2===0;
      const ax = nrm(add(mulv(rad(t),.6),mulv(UP,.8)));
      rose(M,frame(add(o,mulv(ax,.0)),ax,tan(t),big?.40:.32),pal[k]);
      for(const sg of [-1,1]){
        const d = nrm(add(add(mulv(rad(t),1),mulv(tan(t),sg*.9)),mulv(UP,.12)));
        leaf(M,frame(o,d,UP,1),.52,.17,lA,lB,.45,.55,30);
        const t2 = t+sg*Math.PI/NR, o2 = ring(t2), d2 = nrm(add(add(rad(t2),mulv(tan(t2),sg*.5)),mulv(UP,.25)));
        leaf(M,frame(o2,d2,UP,1),.42,.14,lA,lB,.45,.5,30);
      }
    }
    return M;
  }

  /* =====================================================
     WebGL
     ===================================================== */
  const VS = `attribute vec3 aP;attribute vec3 aN;attribute vec3 aC;attribute vec2 aM;
uniform mat4 uMV;uniform mat4 uPr;varying vec3 vN;varying vec3 vV;varying vec3 vC;varying vec2 vM;
void main(){vec4 m=uMV*vec4(aP,1.);vV=m.xyz;vN=(uMV*vec4(aN,0.)).xyz;vC=aC;vM=aM;gl_Position=uPr*m;}`;
  const FS = `#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec3 vN;varying vec3 vV;varying vec3 vC;varying vec2 vM;uniform vec3 uL;
void main(){
  vec3 N=normalize(vN);vec3 V=normalize(-vV);
  if(dot(N,V)<0.)N=-N;
  vec3 L=normalize(uL);vec3 alb=pow(vC,vec3(2.2));float ao=vM.x;float gls=vM.y;
  float nl=dot(N,L);float diff=clamp(nl*.6+.4,0.,1.);diff*=diff;
  vec3 amb=mix(vec3(.05,.02,.05),vec3(.32,.21,.3),N.y*.5+.5);
  vec3 H=normalize(L+V);
  float sp=pow(max(dot(N,H),0.),gls)*(gls>60.?1.7:.5);
  vec3 R=reflect(-V,N);
  float env=smoothstep(-.2,1.,R.y)*.3+pow(max(dot(R,normalize(vec3(-.5,.6,.7))),0.),22.)*.9;
  float fr=pow(1.-max(dot(N,V),0.),3.);
  float ea=clamp((gls-40.)/80.,0.,1.);
  vec3 rim=vec3(1.,.42,.66)*pow(1.-max(dot(N,V),0.),2.)*(max(dot(N,normalize(vec3(.9,.2,-.5))),0.)*.7+.3)*.45;
  vec3 col=alb*(amb+diff*vec3(1.,.9,.85)*1.15)*ao;
  col+=alb*vec3(1.,.55,.5)*max(-nl,0.)*.28*ao*(1.-ea);
  col+=sp*vec3(1.,.93,.88)*(.35+.65*ao);
  col+=ea*env*vec3(1.,.8,.88)*(.25+fr*.9);
  col+=rim*ao*(.55+ea);
  col=pow(col,vec3(1./2.2));
  gl_FragColor=vec4(col,1.);
}`;
  function sh(t,s){ const o = gl.createShader(t); gl.shaderSource(o,s); gl.compileShader(o); return o; }
  const prog = gl.createProgram();
  gl.attachShader(prog,sh(gl.VERTEX_SHADER,VS)); gl.attachShader(prog,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(prog);
  if(!gl.getProgramParameter(prog,gl.LINK_STATUS)){ box.remove(); return; }
  gl.useProgram(prog);
  const A = n=>gl.getAttribLocation(prog,n), U = n=>gl.getUniformLocation(prog,n);
  const uMV = U('uMV'), uPr = U('uPr'), uL = U('uL');
  const ext32 = gl.getExtension('OES_element_index_uint');

  function upload(M){
    const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,vb); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(M.v),gl.STATIC_DRAW);
    const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);
    const big = M.n > 65535 && ext32;
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, big ? new Uint32Array(M.i) : new Uint16Array(M.i), gl.STATIC_DRAW);
    return {vb,ib,n:M.i.length,t:big?gl.UNSIGNED_INT:gl.UNSIGNED_SHORT};
  }
  function drawMesh(b){
    gl.bindBuffer(gl.ARRAY_BUFFER,b.vb); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,b.ib);
    [['aP',3,0],['aN',3,3],['aC',3,6],['aM',2,9]].forEach(([n,s,o])=>{ const l = A(n); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l,s,gl.FLOAT,false,44,o*4); });
    gl.drawElements(gl.TRIANGLES,b.n,b.t,0);
  }

  let heart, garland, ready = false, hh = 1;
  function build(){
    const h = buildHeart(); hh = h.h;
    const g = buildGarland();
    heart = upload(h.mesh); garland = upload(g); ready = true;
  }

  let W = 0, H = 0;
  function size(){
    const d = Math.min(devicePixelRatio||1,2), r = box.getBoundingClientRect();
    W = Math.round(r.width); H = Math.round(r.height); if(!W) return;
    cv.width = Math.round(W*d); cv.height = Math.round(H*d);
  }

  let yaw = .6, pitch = .33, vyaw = .0115, drag = false, lx = 0, vis = false, raf = 0, t0 = 0;
  function draw(now){
    if(!ready || !W) return;
    gl.viewport(0,0,cv.width,cv.height); gl.clearColor(0,0,0,0);
    gl.enable(gl.DEPTH_TEST); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.uniformMatrix4fv(uPr,false,persp(.52,W/H,3,16));
    gl.uniform3f(uL,-.45,.65,.62);
    const ph = ((now-t0)/1000 % 1.8)/1.8;
    const beat = 1+(ph<.14 ? Math.sin(ph/.14*Math.PI)*.06 : (ph>.28&&ph<.42 ? Math.sin((ph-.28)/.14*Math.PI)*.04 : 0));
    const view = mm(trans(0,-.1,-8.5),mm(rotX(pitch),rotY(yaw)));
    gl.uniformMatrix4fv(uMV,false,view); drawMesh(garland);
    gl.uniformMatrix4fv(uMV,false,mm(view,mm(trans(0,.18,0),scl(beat)))); drawMesh(heart);
  }
  function tick(now){
    if(!vis) return;
    if(!drag){ vyaw += (.0115-vyaw)*.04; yaw += vyaw; }
    pitch += ((.33+Math.sin(now/1900)*.05)-pitch)*.05;
    draw(now); raf = requestAnimationFrame(tick);
  }
  cv.addEventListener('pointerdown',e=>{ drag = true; lx = e.clientX; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove',e=>{ if(!drag) return; const dx = e.clientX-lx; lx = e.clientX; yaw += dx*.012; vyaw = dx*.012; if(reduce) draw(0); });
  const up = ()=>{ drag = false; }; cv.addEventListener('pointerup',up); cv.addEventListener('pointercancel',up);
  addEventListener('resize',()=>{ size(); if(reduce) draw(0); });

  new IntersectionObserver(es=>es.forEach(e=>{
    vis = e.isIntersecting;
    if(vis){
      size(); if(!ready) build();
      t0 = performance.now();
      if(reduce){ yaw = .5; draw(0); } else { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); }
    }
  }),{threshold:0,rootMargin:'200px 0px'}).observe(box);
})();

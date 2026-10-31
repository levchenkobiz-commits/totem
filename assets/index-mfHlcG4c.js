(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function pg({gsap:r,ScrollTrigger:e,reduced:t}){const n=document.createElement("section");n.className="orbit-scene",n.dataset.orbitFont="akony",n.setAttribute("aria-labelledby","orbit-title"),n.innerHTML=`<h2 id="orbit-title" class="orbit-accessible">Останься чуть дольше</h2><div class="orbit-window"><div class="orbit-type" aria-hidden="true">${["ОСТАНЬСЯ","ЧУТЬ","ДОЛЬШЕ"].map((h,f)=>`<span class="orbit-word" style="--row:${f}">${h}</span>`).join("")}</div></div><div class="orbit-variants" role="group" aria-label="Шрифт тестовой сцены"><button type="button" data-orbit-font="akony" aria-pressed="true">Akony</button><button type="button" data-orbit-font="benzin" aria-pressed="false">Benzin</button></div>`,document.querySelector(".atmosphere").before(n);const i=[...n.querySelectorAll(".orbit-word")],s={progress:0};let o=0,a=0;const l=(h,f,d)=>{const _=Math.max(0,Math.min(1,(d-h)/(f-h)));return _*_*(3-2*_)};function c(){o=Math.min(n.clientWidth*.36,520),a=Math.min(n.clientWidth*.3,340)}function u(){i.forEach((h,f)=>{const d=148-s.progress*296+f*21,_=d*Math.PI/180,g=Math.sin(_)*o,m=Math.cos(_)*a,p=l(16,48,Math.abs(d)),S=1-l(132,174,Math.abs(d));h.style.transform=`translate3d(calc(-50% + ${g}px),calc(-50% + ${Math.sin(_)*18}px),${m}px) rotateY(${d*.42}deg) rotateZ(${-d*.025}deg)`,h.style.opacity=String(p*S*.93)})}n.querySelectorAll("[data-orbit-font]").forEach(h=>h.addEventListener("click",()=>{n.dataset.orbitFont=h.dataset.orbitFont,n.querySelectorAll("[data-orbit-font]").forEach(f=>f.setAttribute("aria-pressed",String(f===h))),t||r.fromTo(n.querySelector(".orbit-type"),{opacity:.15},{opacity:1,duration:.65,ease:"power2.out",overwrite:!0})})),!t&&(c(),u(),r.to(s,{progress:1,ease:"none",onUpdate:u,scrollTrigger:{trigger:n,start:"top 95%",end:"bottom 5%",scrub:1.35,onRefresh:()=>{c(),u()}}}))}const mg=null;function gg({form:r,gsap:e,ScrollTrigger:t,reduced:n}){const i=location.hostname==="localhost"||location.hostname==="127.0.0.1"||new URLSearchParams(location.search).has("edit"),s=r.querySelector(".booking-fields"),o=r.querySelector(".booking-success"),a=r.querySelector(".booking-error"),l=r.querySelector("[type=submit]");let c=!1;r.elements.phone.addEventListener("input",()=>r.elements.phone.setCustomValidity("")),r.addEventListener("submit",async u=>{if(u.preventDefault(),c)return;const h=r.elements.phone.value.replace(/\D/g,"");if(h.length<10||h.length>15){r.elements.phone.setCustomValidity("Укажите номер телефона с кодом города или оператора."),r.elements.phone.reportValidity();return}if(a.hidden=!0,!i){a.textContent="Онлайн-заявки пока недоступны. Для бронирования позвоните: +7 (985) 429-18-75.",a.hidden=!1,t.refresh();return}const f=Object.fromEntries(new FormData(r));c=!0,l.disabled=!0,l.textContent="Отправляем…",r.setAttribute("aria-busy","true");try{o.querySelector(".booking-confirm-phone").textContent=f.phone;const d=String(f.date).split("-").reverse().join(".");o.querySelector(".booking-confirm-details").textContent=`${d} · ${f.time} · гостей: ${f.guests}`,s.hidden=!0,o.hidden=!1,o.focus({preventScroll:!0}),n||e.fromTo(o,{opacity:0,y:12},{opacity:1,y:0,duration:.5,ease:"power3.out"})}catch{a.textContent="Не удалось отправить заявку. Попробуйте ещё раз или позвоните: +7 (985) 429-18-75.",a.hidden=!1}finally{c=!1,l.disabled=!1,l.textContent="Отправить заявку",r.removeAttribute("aria-busy"),t.refresh()}}),r.querySelector(".booking-reset").addEventListener("click",()=>{o.hidden=!0,s.hidden=!1,r.elements.phone.focus({preventScroll:!0}),t.refresh()})}function _g({gsap:r,ScrollTrigger:e,reduced:t,onLogoHold:n}){const i=matchMedia("(min-width: 901px) and (pointer: fine)"),s=[{src:"/totem/images/atmosphere.jpg",title:"Основной зал",text:"Камень, дерево и мягкий свет"},{src:"/totem/images/atmosphere-bar.jpg",title:"Бар",text:"Тактильные материалы и камерный масштаб"},{src:"/totem/images/atmosphere-private.jpg",title:"Приватная зона",text:"Отдельное пространство для компании"},{src:"/totem/images/atmosphere-detail.jpg",title:"Детали",text:"Фактура, свет и предметы"}],o=document.querySelector(".atmosphere-image"),a=document.createElement("div");a.className="gallery-shell",a.id="gallery",a.innerHTML=`<div class="gallery-stage"><button class="gallery-open" aria-label="Открыть фото: Основной зал">${s.map((X,de)=>`<span class="gallery-frame ${de===0?"is-active":""}" aria-hidden="${de!==0}"><img src="${X.src}" alt="Концепция Totem: ${X.title.toLowerCase()}" decoding="async" ${de?'loading="lazy"':""}></span>`).join("")}<span class="gallery-shade"></span><span class="gallery-photo-title">Основной зал</span><span class="gallery-cursor" aria-hidden="true">↗</span></button><div class="gallery-meter" aria-hidden="true">${s.map((X,de)=>`<i class="${de===0?"is-active":""}"></i>`).join("")}</div><div class="gallery-arrows"><button class="gallery-prev" aria-label="Предыдущее фото">Назад</button><button class="gallery-next" aria-label="Следующее фото">Далее</button></div></div><div class="gallery-rail" aria-label="Фотографии атмосферы">${s.map((X,de)=>`<button data-gallery-index="${de}" aria-pressed="${de===0}" aria-label="Показать фото: ${X.title}"><img src="${X.src}" alt="" loading="lazy"><span>${X.title}</span></button>`).join("")}</div>`,o.replaceWith(a),document.querySelector(".atmosphere-bottom")?.remove();const l=[...a.querySelectorAll(".gallery-frame")],c=[...a.querySelectorAll("[data-gallery-index]")],u=[...a.querySelectorAll(".gallery-meter i")];let h=0;function f(X){if(X=(X+s.length)%s.length,X===h)return;const de=h;if(h=X,l.forEach((De,G)=>{De.classList.toggle("is-active",G===X),De.setAttribute("aria-hidden",String(G!==X))}),c.forEach((De,G)=>De.setAttribute("aria-pressed",String(G===X))),u.forEach((De,G)=>De.classList.toggle("is-active",G===X)),a.querySelector(".gallery-photo-title").textContent=s[X].title,a.querySelector(".gallery-open").setAttribute("aria-label","Открыть фото: "+s[X].title),!t){const De=X===0&&de===s.length-1?1:X===s.length-1&&de===0?-1:X>de?1:-1;r.killTweensOf(l),r.set(l.filter((G,z)=>z!==X&&z!==de),{clearProps:"transform,opacity,visibility"}),r.fromTo(l[de],{visibility:"visible",opacity:1},{xPercent:-De*18,opacity:0,duration:.85,ease:"power3.inOut",onComplete:()=>r.set(l[de],{clearProps:"transform,opacity,visibility"})}),r.fromTo(l[X],{visibility:"visible",xPercent:De*22,opacity:0},{xPercent:0,opacity:1,duration:.95,ease:"power3.inOut",onComplete:()=>r.set(l[X],{clearProps:"transform,opacity,visibility"})}),r.fromTo(l[X].querySelector("img"),{scale:1.07},{scale:1,duration:1.4,ease:"power3.out",overwrite:!0}),r.fromTo(".gallery-photo-title",{y:13,opacity:.1},{y:0,opacity:1,duration:.6,ease:"power3.out",overwrite:!0})}}c.forEach(X=>X.addEventListener("click",()=>f(Number(X.dataset.galleryIndex)))),a.querySelector(".gallery-prev").addEventListener("click",()=>f(h-1)),a.querySelector(".gallery-next").addEventListener("click",()=>f(h+1));let d=0,_=0,g=0,m=!1;const p=a.querySelector(".gallery-open");a.querySelectorAll("img").forEach(X=>X.draggable=!1),p.addEventListener("pointerdown",X=>{d=X.clientX,_=X.clientY,g=0,m=!0,p.setPointerCapture(X.pointerId)}),p.addEventListener("pointermove",X=>{if(!m)return;const de=X.clientX-d;Math.abs(de)>Math.abs(X.clientY-_)&&Math.abs(de)>8&&(g=de,p.classList.add("is-dragging"),t||r.set(l[h],{x:de*.18}))}),p.addEventListener("pointerup",()=>{m&&(m=!1,p.classList.remove("is-dragging"),r.set(l[h],{x:0}),Math.abs(g)>35&&f(h+(g<0?1:-1)))}),p.addEventListener("pointercancel",()=>{m=!1,g=0,p.classList.remove("is-dragging"),r.set(l[h],{x:0})}),p.addEventListener("keydown",X=>{(X.key==="ArrowRight"||X.key==="ArrowLeft")&&(X.preventDefault(),f(h+(X.key==="ArrowRight"?1:-1)))});const S=document.createElement("dialog");S.className="photo-viewer",S.setAttribute("aria-label","Фотографии атмосферы Totem"),S.innerHTML='<div class="viewer-top"><span>Атмосфера</span><button class="viewer-close" aria-label="Закрыть фотографии">ЗАКРЫТЬ <span>×</span></button></div><div class="viewer-photo-wrap"><img class="viewer-photo" alt=""><button class="viewer-zoom" aria-pressed="false" aria-label="Приблизить фотографию">ПРИБЛИЗИТЬ +</button></div><div class="viewer-bottom"><button class="viewer-prev" aria-label="Предыдущее фото в просмотре">Назад</button><div><h2 class="viewer-title"></h2></div><button class="viewer-next" aria-label="Следующее фото в просмотре">Далее</button></div>',document.body.append(S);const x=S.querySelector(".viewer-photo"),v=S.querySelector(".viewer-zoom");let b=!1;function C(X,de=!0){f(X),b=!1,v.setAttribute("aria-pressed","false"),v.textContent="ПРИБЛИЗИТЬ +",r.set(x,{scale:1,x:0,y:0}),x.src=s[h].src,x.alt="Концепция интерьера Totem: "+s[h].title,S.querySelector(".viewer-title").textContent=s[h].title,de&&!t&&r.fromTo(x,{opacity:0,scale:1.025},{opacity:1,scale:1,duration:.65,ease:"power3.out"})}function w(){if(Math.abs(g)>35){g=0;return}p.getBoundingClientRect(),S.showModal(),document.body.classList.add("viewer-open"),C(h,!1),t||(x.getBoundingClientRect(),r.fromTo(x,{clipPath:"inset(8% 8% 8% 8%)",scale:.94,opacity:.3},{clipPath:"inset(0% 0% 0% 0%)",scale:1,opacity:1,duration:.85,ease:"power3.out"}),r.fromTo(".viewer-top,.viewer-bottom",{y:8,opacity:0},{y:0,opacity:1,duration:.7,delay:.18})),S.querySelector(".viewer-close").focus({preventScroll:!0})}function I(){S.open&&(r.killTweensOf(x),S.close(),document.body.classList.remove("viewer-open"),p.focus({preventScroll:!0}))}if(p.addEventListener("click",w),S.querySelector(".viewer-close").addEventListener("click",I),S.addEventListener("cancel",X=>{X.preventDefault(),I()}),S.querySelector(".viewer-prev").addEventListener("click",()=>C(h-1)),S.querySelector(".viewer-next").addEventListener("click",()=>C(h+1)),S.addEventListener("keydown",X=>{X.key==="ArrowRight"&&(X.preventDefault(),C(h+1)),X.key==="ArrowLeft"&&(X.preventDefault(),C(h-1))}),v.addEventListener("click",()=>{b=!b,v.setAttribute("aria-pressed",String(b)),v.textContent=b?"ОТДАЛИТЬ −":"ПРИБЛИЗИТЬ +",r.to(x,{scale:b?1.35:1,x:0,y:0,duration:t?0:.8,ease:"power3.out"})}),S.querySelector(".viewer-photo-wrap").addEventListener("pointermove",X=>{if(!b||X.pointerType!=="mouse"||t)return;const de=X.currentTarget.getBoundingClientRect();r.to(x,{x:(.5-(X.clientX-de.left)/de.width)*de.width*.2,y:(.5-(X.clientY-de.top)/de.height)*de.height*.2,duration:.8,ease:"power2.out",overwrite:"auto"})}),!t){const X=a.querySelector(".gallery-cursor");p.addEventListener("pointermove",de=>{if(!i.matches)return;const De=p.getBoundingClientRect();r.to(X,{x:de.clientX-De.left,y:de.clientY-De.top,opacity:1,duration:.35,ease:"power3.out",overwrite:"auto"})}),p.addEventListener("pointerleave",()=>r.to(X,{opacity:0,duration:.2})),document.querySelectorAll(".header-book,.booking-submit").forEach(de=>{de.addEventListener("pointermove",De=>{if(!i.matches)return;const G=de.getBoundingClientRect();r.to(de,{x:((De.clientX-G.left)/G.width-.5)*6,y:((De.clientY-G.top)/G.height-.5)*5,duration:.4,ease:"power2.out"})}),de.addEventListener("pointerleave",()=>r.to(de,{x:0,y:0,duration:.65,ease:"power3.out"}))})}const M=document.querySelector("#booking-form"),y=document.querySelector(".booking-panel"),N=document.createElement("div");N.className="guest-orbit",N.setAttribute("aria-hidden","true"),N.innerHTML='<i class="guest-table"></i><span class="guest-seats"></span>',y.append(N);function F(){const X=parseInt(M.elements.guests.value,10)||2;N.querySelector(".guest-seats").innerHTML=Array.from({length:X},(de,De)=>`<i style="--angle:${De*360/X}deg"></i>`).join(""),t||r.fromTo(N.querySelectorAll(".guest-seats i"),{opacity:0,scale:.4},{opacity:1,scale:1,duration:.5,stagger:.035,ease:"back.out(1.4)"})}F(),M.elements.guests.addEventListener("change",F);const $=[...document.querySelectorAll("#menu-list details")];function Z(X,de){r.killTweensOf(X);const De=X.getBoundingClientRect().height,G=X.querySelector("summary").getBoundingClientRect().height;de&&(X.open=!0),X.style.height="auto";const z=de?X.scrollHeight:G;if(t){X.open=de,X.style.height="",e.refresh();return}r.fromTo(X,{height:De},{height:z,duration:.65,ease:"power3.inOut",onComplete:()=>{X.open=de,X.style.height="",e.refresh()}}),de&&r.fromTo(X.querySelectorAll(".dish"),{opacity:0,y:9},{opacity:1,y:0,duration:.5,stagger:.025,delay:.1,ease:"power3.out",overwrite:!0})}$.forEach(X=>X.querySelector("summary").addEventListener("click",de=>{de.preventDefault();const De=!X.open;De&&$.forEach(G=>{G!==X&&G.open&&Z(G,!1)}),Z(X,De)})),M.elements.time.addEventListener("change",()=>{t||r.fromTo(y,{borderColor:"#bb7795"},{borderColor:"#563040",duration:1.4,ease:"power2.out"})});const ie=document.querySelector(".logo-interaction");let te,K=0,k=0;function ue(){clearTimeout(te)}ie.addEventListener("pointerdown",X=>{t||(K=X.clientX,k=X.clientY,te=setTimeout(()=>{ie.dataset.materialHold="true",n?.()},700))}),ie.addEventListener("pointermove",X=>{Math.hypot(X.clientX-K,X.clientY-k)>12&&ue()}),["pointerup","pointercancel","pointerleave"].forEach(X=>ie.addEventListener(X,ue));const O=document.createElement("span");return O.className="reading-progress",O.setAttribute("aria-hidden","true"),document.querySelector(".header").append(O),e.create({start:0,end:"max",onUpdate:X=>{O.style.transform=`scaleX(${X.progress})`}}),s.forEach(X=>{const de=new Image;de.onload=()=>e.refresh(),de.src=X.src}),{selectPhoto:f,openViewer:w}}function vg({gsap:r,reduced:e}){if(e)return;const t=document.createElement("div");t.className="ambient-light",t.setAttribute("aria-hidden","true"),t.innerHTML='<div class="ambient-orb ambient-orb-wine"></div><div class="ambient-orb ambient-orb-warm"></div>',document.body.prepend(t);const n=matchMedia("(hover:hover) and (pointer:fine)"),i=t.firstElementChild,s=t.lastElementChild;let o=0,a=0,l=0,c=!1;const u=r.quickTo(i,"x",{duration:2.4,ease:"power2.out"}),h=r.quickTo(i,"y",{duration:2.4,ease:"power2.out"}),f=r.quickTo(s,"x",{duration:3,ease:"power2.out"}),d=r.quickTo(s,"y",{duration:3,ease:"power2.out"});function _(){c=!1,u(o*70+Math.sin(l*Math.PI)*95),h(a*45-l*90),f(-o*45-l*75),d(-a*35+l*100)}function g(){c||(c=!0,requestAnimationFrame(_))}document.addEventListener("pointermove",m=>{n.matches&&(o=m.clientX/innerWidth-.5,a=m.clientY/innerHeight-.5,g())},{passive:!0}),document.addEventListener("pointerleave",()=>{o=0,a=0,g()}),addEventListener("scroll",()=>{l=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),g()},{passive:!0}),document.querySelectorAll(".form-row label").forEach(m=>{m.addEventListener("pointermove",p=>{if(!n.matches)return;const S=m.getBoundingClientRect();m.style.setProperty("--field-x",`${(p.clientX-S.left)/S.width*100}%`)})})}function xg(){const r=document.querySelector("#sound"),e=document.querySelector("#sound-label"),t=matchMedia("(min-width:901px) and (hover:hover) and (pointer:fine)"),n=location.hostname==="127.0.0.1"||location.hostname==="localhost"||new URLSearchParams(location.search).has("edit");let i=!1;try{i=sessionStorage.getItem("totem-sound-muted")==="1"}catch{}let s=!n&&!i,o,a,l=0;function c(){try{sessionStorage.setItem("totem-sound-muted",s?"0":"1")}catch{}}function u(g){r.dataset.playback=g?"playing":"paused",r.setAttribute("aria-pressed",String(g));const m=g?"Выключить звук":"Включить звук";r.setAttribute("aria-label",m),e.textContent=m}function h(g,m,p){cancelAnimationFrame(a);const S=o.volume,x=performance.now();function v(b){const C=Math.min(1,(b-x)/(m*1e3));o.volume=S+(g-S)*C*C*(3-2*C),C<1?a=requestAnimationFrame(v):p?.()}a=requestAnimationFrame(v)}async function f(){if(!t.matches||!s||document.hidden||o&&!o.paused&&r.dataset.playback==="playing")return;const g=++l;o||(o=document.createElement("audio"),o.src="/totem/audio/positive-aura-cleanse.mp3",o.loop=!0,o.preload="auto",o.hidden=!0,o.id="ambience-track",o.volume=0,o.muted=!1,document.body.append(o),o.addEventListener("error",()=>{u(!1),r.dataset.playback="error"}));try{if(await o.play(),g!==l||!s||!t.matches||document.hidden){s||o.pause();return}u(!0),h(.38,6)}catch{g===l&&(u(!1),r.dataset.playback="waiting-for-gesture")}}function d(g=!1){++l,cancelAnimationFrame(a),u(!1),o&&(g?(o.pause(),o.volume=0):h(0,.8,()=>o.pause()))}r.addEventListener("click",()=>{o&&!o.paused&&r.dataset.playback==="playing"?(s=!1,c(),d(!0)):(s=!0,c(),f())});function _(g){g.target.closest?.("#sound")||f()}document.addEventListener("click",_),document.addEventListener("keydown",_),t.addEventListener("change",()=>{t.matches?f():d(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden?d(!0):f()}),u(!1),f()}const jc=[{id:"hookah",title:"Кальян",en:"Hookah",note:"Классика, премиум и особая подача",items:[["Классика","1–3 человека",2500],["Премиум","1–3 человека",3e3],["Сигара","1–3 человека",4e3],["Грейпфрут","1–3 человека",3e3],["Комплект: 2 кальяна","4–5 человек",4600]]},{id:"lemonades",title:"Лимонады",en:"Lemonades",note:"По бокалу или на компанию",serving:"350 мл / 1 л",items:[["Манго-маракуйя","",550,990],["Персик-молочный улун","",550,990],["Черника-лаванда","",550,990],["Ананас-лемонграсс","",550,990],["Клубника-ревень","",550,990],["Апельсин-ваниль","",550,990],["Яблоко-Саган дайля","",550,990],["Копченая груша-Габа","",550,990]]},{id:"tea",title:"Чай",en:"Tea collection",note:"От лёгких улунов до плотного пуэра",items:[["Те гуань инь","Улун",850],["Жоу гуй","Улун",800],["Дун дин","Улун",900],["Наньтоу","Габа",800],["Алишань","Габа",900],["Медовая","Габа",1100],["Лао ча тоу","Шу пуэр",850],["Шен из Иу","Шен пуэр",800],["Дян хун","Красный чай",800],["Гречишный чай","Тизан",700],["Вишневый пуэр","1 л",1e3]]},{id:"food",title:"Кухня",en:"Kitchen",note:"Закуски, горячее и что-нибудь к чаю",items:[["Батат фри с пармезаном","210 г",650],["Роти с креветками","180 г",950],["Поке с лососем","330 г",980],["Салат греческий","190 г",790],["Ролл с креветкой темпура","245 г",790],["Том-ям с морепродуктами","395 г",850],["Бургер с мраморной говядиной","310 г",890],["Тальятелле с курицей и грибами","350 г",650],["Стейк лосось с мятым авокадо","220 г",1290],["Пивная тарелка","480 г",1100],["Чизкейк с соусом маракуйя","",650],["Тарталетка с фисташками","",650]]},{id:"beer",title:"Пиво и сидр",en:"Beer & cider",note:"Лагер, эль, ламбик и сухой сидр",items:[["Эггенберг Фрайбир","330 мл · безалкогольный лагер",650],["Эггенберг Хопфенкениг","330 мл · лагер",690],["Блю Мун","330 мл · пшеничный эль",690],["Гиннес Драфт","440 мл · тёмное фильтрованное",750],["Моро Субит Крик Ламбик","250 мл · вишнёвый ламбик",790],["Корона Экстра","355 мл",650],["Дикий крест","450 мл · сухой / полусухой",880]]}];function yg({gsap:r,ScrollTrigger:e,reduced:t}){const n=jc.find(S=>S.id==="beer"),i=jc.flatMap(S=>S.id==="beer"?[{...n,id:"zero-beer",title:"Безалкогольное пиво",items:n.items.filter(x=>x[1].includes("безалкогольный"))},{...n,items:n.items.filter(x=>!x[1].includes("безалкогольный"))}]:[S]),s=document.querySelector(".menu-section");s.classList.add("menu-library","menu-cabinet");const o=s.querySelector("#menu-list"),a=S=>`${new Intl.NumberFormat("ru-RU").format(S)} ₽`;o.className="cabinet-experience",o.innerHTML=`<nav class="cabinet-index" aria-label="Разделы меню">${i.map((S,x)=>`<button type="button" data-category="${x}" aria-controls="cabinet-content" aria-pressed="${x===0}"><span>${S.title}</span><i aria-hidden="true"></i></button>`).join("")}<div class="cabinet-downloads"><a href="/totem/menu/Totem-menu-01-ivory.pdf" target="_blank" rel="noopener">Меню PDF</a><a href="/totem/menu/Totem-menu-04-wine.pdf" target="_blank" rel="noopener">Барная карта PDF</a></div></nav>
    <div class="cabinet-stage"><div class="cabinet-content" id="cabinet-content" role="region" aria-label="Позиции меню"></div><div class="cabinet-shutter cabinet-shutter--left" aria-hidden="true"><img src="/totem/brand/totem-symbol-light.svg" alt=""></div><div class="cabinet-shutter cabinet-shutter--right" aria-hidden="true"><img src="/totem/brand/totem-symbol-light.svg" alt=""></div><div class="cabinet-seam" aria-hidden="true"></div></div>`;const l=o.querySelector(".cabinet-stage"),c=o.querySelector(".cabinet-content"),u=o.querySelectorAll(".cabinet-shutter");function h(S){const x=i[S];c.innerHTML=`<h3>${x.title}</h3>${x.serving?`<p class="cabinet-serving">${x.serving}</p>`:""}<div class="cabinet-dishes">${x.items.map(([v,b,C,w])=>`<article class="cabinet-dish"><div><h4>${v}</h4>${b?`<p>${b}</p>`:""}</div><span>${a(C)}${w?" / "+a(w):""}</span></article>`).join("")}</div>`,o.querySelectorAll("[data-category]").forEach((v,b)=>v.setAttribute("aria-pressed",String(b===S)))}let f=0,d=!1,_=null,g,m;function p(S){if(d){_=S;return}if(S!==f){if(t){f=S,h(S);return}g?.scrollTrigger?.kill(),m?.scrollTrigger?.kill(),g?.kill(),m?.kill(),d=!0,o.setAttribute("aria-busy","true"),r.timeline({onComplete:()=>{if(f=S,d=!1,o.removeAttribute("aria-busy"),_!==null){const x=_;_=null,p(x)}}}).to(u,{scaleX:1,duration:.38,ease:"power3.inOut"}).call(()=>h(S)).to(u,{scaleX:0,duration:.7,ease:"power3.inOut"},"+=.06").fromTo(c,{y:16,opacity:.3},{y:0,opacity:1,duration:.65,ease:"power3.out"},"<")}}if(h(0),o.querySelectorAll("[data-category]").forEach(S=>S.addEventListener("click",()=>p(Number(S.dataset.category)))),t){r.set(u,{scaleX:0});return}if(g=r.fromTo(u,{scaleX:1},{scaleX:0,ease:"power2.inOut",scrollTrigger:{trigger:s,start:"top 80%",end:"top 12%",scrub:.8,once:!0}}),m=r.fromTo(c,{y:45,opacity:.1},{y:0,opacity:1,ease:"none",scrollTrigger:{trigger:s,start:"top 75%",end:"top 15%",scrub:.8,once:!0}}),matchMedia("(hover:hover) and (pointer:fine)").matches){const S=r.quickTo(l,"rotationY",{duration:1.6,ease:"power3.out"}),x=r.quickTo(l,"rotationX",{duration:1.6,ease:"power3.out"});l.addEventListener("pointermove",v=>{const b=l.getBoundingClientRect();S(((v.clientX-b.left)/b.width-.5)*1.3),x(-((v.clientY-b.top)/b.height-.5)*1.1)}),l.addEventListener("pointerleave",()=>{S(0),x(0)})}}function Sg({gsap:r,ScrollTrigger:e,reduced:t}){const n=document.querySelector(".booking-zone"),i=document.querySelector(".booking-panel"),s=document.createElement("div");s.className="booking-body",s.append(document.querySelector(".booking-switch"),document.querySelector("#booking-form"),document.querySelector("#booking-self")),i.append(s),i.querySelector("h2").innerHTML="<span>Бронь</span><span>столика</span>";const o=document.createElement("div");if(o.className="booking-scenery",o.setAttribute("aria-hidden","true"),o.innerHTML='<img src="/totem/images/atmosphere-detail.jpg" alt="">',n.prepend(o),yg({gsap:r,ScrollTrigger:e,reduced:t}),t)return;const a=document.querySelector(".welcome");r.to(".hero-media>img",{yPercent:14,scale:1.13,ease:"none",scrollTrigger:{trigger:a,start:"top top",end:"bottom top",scrub:1.3}}),r.to(".welcome-identity",{yPercent:-18,opacity:.12,ease:"none",scrollTrigger:{trigger:a,start:"top top",end:"bottom 10%",scrub:1}});const l=document.querySelector(".gallery-shell"),c=document.querySelector(".atmosphere-heading h2");e.matchMedia({"(min-width:901px)":()=>{r.timeline({scrollTrigger:{trigger:n,start:"top 95%",end:"bottom 15%",scrub:1.25}}).fromTo(o,{y:70,rotation:-4,scale:.95},{y:-50,rotation:3,scale:1.05,ease:"none"},0);const h=document.createElement("div");return h.className="gallery-wings",h.setAttribute("aria-hidden","true"),h.innerHTML='<img class="gallery-wing" src="/totem/images/atmosphere-bar.jpg" alt=""><img class="gallery-wing" src="/totem/images/atmosphere-private.jpg" alt="">',l.prepend(h),r.timeline({scrollTrigger:{trigger:".atmosphere",start:"top 85%",end:()=>`top ${-innerHeight*.08}px`,scrub:1.1}}).fromTo(c,{xPercent:-10,opacity:.3},{xPercent:4,opacity:.85,ease:"none"},0).fromTo(".gallery-stage",{clipPath:"inset(5% 24% 5% 24%)",scale:.9},{clipPath:"inset(0% 0% 0% 0%)",scale:1,ease:"none"},0).fromTo(h.children,{y:120,opacity:.9},{y:-15,opacity:0,stagger:.035,ease:"none"},0),()=>h.remove()},"(max-width:900px)":()=>{r.fromTo(o,{y:30},{y:-35,ease:"none",scrollTrigger:{trigger:n,start:"top bottom",end:"bottom top",scrub:.8}}),r.fromTo(c,{xPercent:-7},{xPercent:1,ease:"none",scrollTrigger:{trigger:".atmosphere",start:"top 95%",end:"top 20%",scrub:.8}}),r.fromTo(".gallery-stage",{clipPath:"inset(4% 8% 4% 8%)"},{clipPath:"inset(0% 0% 0% 0%)",ease:"none",scrollTrigger:{trigger:l,start:"top 95%",end:"top 35%",scrub:.6}})}})}function Mg({variant:r="flight",gsap:e,reduced:t,introScreen:n,sceneHost:i,logoMount:s,getMark:o,onComplete:a,fast:l=!1}){const c=document.querySelector("#home-title img"),u=document.querySelector(".intro-wordmark"),h=document.querySelector(".booking-panel"),f=document.querySelector("main"),d=()=>{s.prepend(i),e.set(i,{clearProps:"position,left,top,width,height,zIndex,transform,opacity"}),i.dispatchEvent(new Event("scene:resize")),n.append(u),e.set(u,{clearProps:"position,left,top,width,height,zIndex,transform,opacity,margin"}),e.set(c,{opacity:1}),e.set(h,{clearProps:"clipPath,transform,opacity"}),e.set(f,{clearProps:"clipPath,zIndex,position"}),e.set(n,{clearProps:"clipPath"}),n.hidden=!0,n.inert=!0,document.querySelector(".shared-flight")?.remove(),a()};if(t){d();return}const _=i.getBoundingClientRect(),g=u.getBoundingClientRect();e.set(".welcome-identity",{clearProps:"opacity,transform"}),e.set(h,{clearProps:"transform,clipPath"});const m=s.getBoundingClientRect(),p=c.getBoundingClientRect(),S=document.createElement("div");S.className="shared-flight",document.body.append(S),S.append(i,u);const x=(y,N)=>e.set(y,{position:"fixed",left:N.left,top:N.top,width:N.width,height:N.height,margin:0,zIndex:1,opacity:1,transform:"none"}),v=Math.min(_.width,_.height),b=Math.min(m.width,m.height);x(i,{left:_.left+(_.width-v)/2,top:_.top+(_.height-v)/2,width:v,height:v}),x(u,g),e.set(i,{transformOrigin:"50% 50%"}),e.set(u,{transformOrigin:"0% 0%"}),e.set(c,{opacity:0}),e.set(h,{opacity:0});const C=l?1:2.2,w=e.timeline({onComplete:d}),I={x:m.left+m.width/2-(_.left+_.width/2),y:m.top+m.height/2-(_.top+_.height/2),scale:b/v,ease:"sine.inOut"},M={x:p.left-g.left,y:p.top-g.top,scaleX:p.width/g.width,scaleY:p.height/g.height,ease:"sine.inOut"};if(r==="portal"&&!l){const y=innerWidth*.49,N=innerHeight*.4;e.set(f,{position:"relative",zIndex:101,clipPath:`circle(0px at ${y}px ${N}px)`}),w.to(i,{scale:1.24,duration:.5,ease:"sine.inOut"},0).to(f,{clipPath:`circle(${Math.hypot(innerWidth,innerHeight)*1.12}px at ${y}px ${N}px)`,duration:1.25,ease:"power3.inOut"},.3).to(i,{...I,duration:1.3},.45).to(u,{...M,duration:1.4},.3).fromTo(h,{y:13,opacity:0},{y:0,opacity:1,duration:.95,ease:"power3.out"},.75).to(n,{opacity:0,duration:.7},.85)}else if(w.to(i,{...I,duration:C},0).to(u,{...M,duration:C*.9},C*.08).to(n,{opacity:0,duration:C*.7,ease:"power2.inOut"},C*.12).fromTo(h,{y:18,opacity:0,clipPath:"inset(0% 8% 0% 0%)"},{y:0,opacity:1,clipPath:"inset(0% 0% 0% 0%)",duration:C*.75,ease:"power3.out"},C*.35),r==="assembly"&&!l){const y=[];o()?.traverse(N=>{N.isMesh&&y.push(N)}),y.forEach((N,F)=>{const $=N.position.clone();w.to(N.position,{x:$.x+(F%2?9:-9),z:$.z+35+F*5,duration:.48,ease:"power2.out"},0).to(N.position,{x:$.x,y:$.y,z:$.z,duration:1.18,ease:"power3.inOut"},.4)})}return w}const _h="180",Eg=0,uf=1,Tg=2,ip=1,bg=2,Hi=3,yr=0,Mn=1,Wi=2,mr=0,Gs=1,hf=2,ff=3,df=4,wg=5,Gr=100,Ag=101,Cg=102,Rg=103,Pg=104,Lg=200,Dg=201,Ig=202,Ug=203,Qc=204,eu=205,Ng=206,Og=207,Fg=208,Bg=209,kg=210,zg=211,Hg=212,Vg=213,Gg=214,tu=0,nu=1,iu=2,Qs=3,ru=4,su=5,ou=6,au=7,vh=0,Wg=1,Xg=2,gr=0,qg=1,Yg=2,$g=3,rp=4,Zg=5,Kg=6,Jg=7,sp=300,eo=301,to=302,lu=303,cu=304,ql=306,uu=1e3,qr=1001,hu=1002,Yn=1003,jg=1004,Aa=1005,bi=1006,nc=1007,Yr=1008,Di=1009,op=1010,ap=1011,na=1012,xh=1013,rs=1014,wi=1015,Ma=1016,yh=1017,Sh=1018,ia=1020,lp=35902,cp=35899,up=1021,hp=1022,gi=1023,ra=1026,sa=1027,Mh=1028,Eh=1029,fp=1030,Th=1031,bh=1033,fl=33776,dl=33777,pl=33778,ml=33779,fu=35840,du=35841,pu=35842,mu=35843,gu=36196,_u=37492,vu=37496,xu=37808,yu=37809,Su=37810,Mu=37811,Eu=37812,Tu=37813,bu=37814,wu=37815,Au=37816,Cu=37817,Ru=37818,Pu=37819,Lu=37820,Du=37821,Iu=36492,Uu=36494,Nu=36495,Ou=36283,Fu=36284,Bu=36285,ku=36286,Qg=3200,e_=3201,wh=0,t_=1,ar="",kn="srgb",no="srgb-linear",Cl="linear",_t="srgb",ps=7680,pf=519,n_=512,i_=513,r_=514,dp=515,s_=516,o_=517,a_=518,l_=519,mf=35044,gf="300 es",Ai=2e3,Rl=2001;class po{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _f=1234567;const ko=Math.PI/180,oa=180/Math.PI;function hs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function Ah(r,e){return(r%e+e)%e}function c_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function u_(r,e,t){return r!==e?(t-r)/(e-r):0}function zo(r,e,t){return(1-t)*r+t*e}function h_(r,e,t,n){return zo(r,e,1-Math.exp(-t*n))}function f_(r,e=1){return e-Math.abs(Ah(r,e*2)-e)}function d_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function p_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function m_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function g_(r,e){return r+Math.random()*(e-r)}function __(r){return r*(.5-Math.random())}function v_(r){r!==void 0&&(_f=r);let e=_f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x_(r){return r*ko}function y_(r){return r*oa}function S_(r){return(r&r-1)===0&&r!==0}function M_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function E_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function T_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Us(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ic={DEG2RAD:ko,RAD2DEG:oa,generateUUID:hs,clamp:st,euclideanModulo:Ah,mapLinear:c_,inverseLerp:u_,lerp:zo,damp:h_,pingpong:f_,smoothstep:d_,smootherstep:p_,randInt:m_,randFloat:g_,randFloatSpread:__,seededRandom:v_,degToRad:x_,radToDeg:y_,isPowerOfTwo:S_,ceilPowerOfTwo:M_,floorPowerOfTwo:E_,setQuaternionFromProperEuler:T_,normalize:mn,denormalize:Us};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ea{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),C=Math.atan2(b,p*S);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rc.copy(this).projectOnVector(e),this.sub(rc)}reflect(e){return this.sub(rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rc=new Q,vf=new Ea;class Je{constructor(e,t,n,i,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],x=i[4],v=i[7],b=i[2],C=i[5],w=i[8];return s[0]=o*g+a*S+l*b,s[3]=o*m+a*x+l*C,s[6]=o*p+a*v+l*w,s[1]=c*g+u*S+h*b,s[4]=c*m+u*x+h*C,s[7]=c*p+u*v+h*w,s[2]=f*g+d*S+_*b,s[5]=f*m+d*x+_*C,s[8]=f*p+d*v+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sc.makeScale(e,t)),this}rotate(e){return this.premultiply(sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sc=new Je;function pp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b_(){const r=Pl("canvas");return r.style.display="block",r}const xf={};function aa(r){r in xf||(xf[r]=!0,console.warn(r))}function w_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const yf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A_(){const r={enabled:!0,workingColorSpace:no,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ar?Cl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return aa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return aa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[no]:{primaries:e,whitePoint:n,transfer:Cl,toXYZ:yf,fromXYZ:Sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:yf,fromXYZ:Sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}const dt=A_();function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ms;class C_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Pl("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oc(i[o].image)):s.push(oc(i[o]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?C_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P_=0;const ac=new Q;class En extends po{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=qr,i=qr,s=bi,o=Yr,a=gi,l=Di,c=En.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=hs(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uu:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uu:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=sp;En.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,b=(p+1)/2,C=(u+f)/4,w=(h+g)/4,I=(_+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=w/n):v>b?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=I/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=I/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L_ extends po{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new En(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ch(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends L_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mp extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Ra.subVectors(this.max,xo),gs.subVectors(e.a,xo),_s.subVectors(e.b,xo),vs.subVectors(e.c,xo),Qi.subVectors(_s,gs),er.subVectors(vs,_s),Rr.subVectors(gs,vs);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Rr.z,Rr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Rr.z,0,-Rr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Rr.y,Rr.x,0];return!lc(t,gs,_s,vs,Ra)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,gs,_s,vs,Ra))?!1:(Pa.crossVectors(Qi,er),t=[Pa.x,Pa.y,Pa.z],lc(t,gs,_s,vs,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ci=new Q,Ca=new wr,gs=new Q,_s=new Q,vs=new Q,Qi=new Q,er=new Q,Rr=new Q,xo=new Q,Ra=new Q,Pa=new Q,Pr=new Q;function lc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pr.fromArray(r,s);const a=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=n.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const I_=new wr,yo=new Q,cc=new Q;class Ta{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):I_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(cc)),this.expandByPoint(yo.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new Q,uc=new Q,La=new Q,tr=new Q,hc=new Q,Da=new Q,fc=new Q;class U_{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(uc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=tr.dot(this.direction),l=-tr.dot(La),c=tr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(uc).addScaledVector(La,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){hc.subVectors(t,e),Da.subVectors(n,e),fc.crossVectors(hc,Da);let o=this.direction.dot(fc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(tr,Da));if(l<0)return null;const c=a*this.direction.dot(hc.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(fc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N_,e,O_)}lookAt(e,t,n){const i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),nr.crossVectors(n,Nn),nr.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),nr.crossVectors(n,Nn)),nr.normalize(),Ia.crossVectors(Nn,nr),i[0]=nr.x,i[4]=Ia.x,i[8]=Nn.x,i[1]=nr.y,i[5]=Ia.y,i[9]=Nn.y,i[2]=nr.z,i[6]=Ia.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],b=n[15],C=i[0],w=i[4],I=i[8],M=i[12],y=i[1],N=i[5],F=i[9],$=i[13],Z=i[2],ie=i[6],te=i[10],K=i[14],k=i[3],ue=i[7],O=i[11],X=i[15];return s[0]=o*C+a*y+l*Z+c*k,s[4]=o*w+a*N+l*ie+c*ue,s[8]=o*I+a*F+l*te+c*O,s[12]=o*M+a*$+l*K+c*X,s[1]=u*C+h*y+f*Z+d*k,s[5]=u*w+h*N+f*ie+d*ue,s[9]=u*I+h*F+f*te+d*O,s[13]=u*M+h*$+f*K+d*X,s[2]=_*C+g*y+m*Z+p*k,s[6]=_*w+g*N+m*ie+p*ue,s[10]=_*I+g*F+m*te+p*O,s[14]=_*M+g*$+m*K+p*X,s[3]=S*C+x*y+v*Z+b*k,s[7]=S*w+x*N+v*ie+b*ue,s[11]=S*I+x*F+v*te+b*O,s[15]=S*M+x*$+v*K+b*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,x=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,v=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,b=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,C=t*S+n*x+i*v+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=S*w,e[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=x*w,e[5]=(u*m*s-_*f*s+_*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=v*w,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=b*w,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,S=l*c,x=l*u,v=l*h,b=n.x,C=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+v)*b,i[2]=(_-x)*b,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(f+p))*C,i[6]=(m+S)*C,i[7]=0,i[8]=(_+x)*w,i[9]=(m-S)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xs.set(i[0],i[1],i[2]).length();const o=xs.set(i[4],i[5],i[6]).length(),a=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ui.copy(this);const c=1/s,u=1/o,h=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,t.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ai,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Ai)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Rl)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ai,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Ai)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Rl)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new Q,ui=new Et,N_=new Q(0,0,0),O_=new Q(1,1,1),nr=new Q,Ia=new Q,Nn=new Q,Mf=new Et,Ef=new Ea;class vi{constructor(e=0,t=0,n=0,i=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const Tf=new Q,ys=new Ea,Fi=new Et,Ua=new Q,So=new Q,B_=new Q,k_=new Ea,bf=new Q(1,0,0),wf=new Q(0,1,0),Af=new Q(0,0,1),Cf={type:"added"},z_={type:"removed"},Ss={type:"childadded",child:null},dc={type:"childremoved",child:null};class nn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new Q,t=new vi,n=new Ea,i=new Q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new Je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(wf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(wf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(So,Ua,this.up):Fi.lookAt(Ua,So,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(Fi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,B_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nn.DEFAULT_UP=new Q(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new Q,Bi=new Q,pc=new Q,ki=new Q,Ms=new Q,Es=new Q,Rf=new Q,mc=new Q,gc=new Q,_c=new Q,vc=new vt,xc=new vt,yc=new vt;class mi{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Bi.subVectors(n,t),pc.subVectors(e,t);const o=hi.dot(hi),a=hi.dot(Bi),l=hi.dot(pc),c=Bi.dot(Bi),u=Bi.dot(pc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return vc.setScalar(0),xc.setScalar(0),yc.setScalar(0),vc.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,n),yc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vc,s.x),o.addScaledVector(xc,s.y),o.addScaledVector(yc,s.z),o}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Bi.subVectors(e,t),hi.cross(Bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),hi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ms.subVectors(i,n),Es.subVectors(s,n),mc.subVectors(e,n);const l=Ms.dot(mc),c=Es.dot(mc);if(l<=0&&c<=0)return t.copy(n);gc.subVectors(e,i);const u=Ms.dot(gc),h=Es.dot(gc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ms,o);_c.subVectors(e,s);const d=Ms.dot(_c),_=Es.dot(_c);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Es,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Rf.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Rf,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Ah(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sc(o,s,e+1/3),this.g=Sc(o,s,e),this.b=Sc(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=_p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return dt.workingToColorSpace(on.copy(this),e),Math.round(st(on.r*255,0,255))*65536+Math.round(st(on.g*255,0,255))*256+Math.round(st(on.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=kn){dt.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Na);const n=zo(ir.h,Na.h,t),i=zo(ir.s,Na.s,t),s=zo(ir.l,Na.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new lt;lt.NAMES=_p;let H_=0;class mo extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Gs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=eu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qc&&(n.blendSrc=this.blendSrc),this.blendDst!==eu&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vp extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new Q,Oa=new ge;let V_=0;class _i{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mf,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class xp extends _i{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yp extends _i{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ai extends _i{constructor(e,t,n){super(new Float32Array(e),t,n)}}let G_=0;const ti=new Et,Mc=new nn,Ts=new Q,On=new wr,Mo=new wr,Jt=new Q;class ji extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?yp:xp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(On.min,Mo.min),On.expandByPoint(Jt),Jt.addVectors(On.max,Mo.max),On.expandByPoint(Jt)):(On.expandByPoint(Mo.min),On.expandByPoint(Mo.max))}On.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Jt.add(Ts)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new Q,l[I]=new Q;const c=new Q,u=new Q,h=new Q,f=new ge,d=new ge,_=new ge,g=new Q,m=new Q;function p(I,M,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(N),a[I].add(g),a[M].add(g),a[y].add(g),l[I].add(m),l[M].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,M=S.length;I<M;++I){const y=S[I],N=y.start,F=y.count;for(let $=N,Z=N+F;$<Z;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const x=new Q,v=new Q,b=new Q,C=new Q;function w(I){b.fromBufferAttribute(i,I),C.copy(b);const M=a[I];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),v.crossVectors(C,M);const N=v.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,N)}for(let I=0,M=S.length;I<M;++I){const y=S[I],N=y.start,F=y.count;for(let $=N,Z=N+F;$<Z;$+=3)w(e.getX($+0)),w(e.getX($+1)),w(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new _i(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pf=new Et,Lr=new U_,Fa=new Ta,Lf=new Q,Ba=new Q,ka=new Q,za=new Q,Ec=new Q,Ha=new Q,Df=new Q,Va=new Q;class $t extends nn{constructor(e=new ji,t=new vp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ec.fromBufferAttribute(h,e),o?Ha.addScaledVector(Ec,u):Ha.addScaledVector(Ec.sub(t),u))}t.add(Ha)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Fa.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Fa,Lf)===null||Lr.origin.distanceToSquared(Lf)>(e.far-e.near)**2))&&(Pf.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,b=x;v<b;v+=3){const C=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);i=Ga(this,p,e,n,c,u,h,C,w,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Ga(this,o,e,n,c,u,h,S,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,b=x;v<b;v+=3){const C=v,w=v+1,I=v+2;i=Ga(this,p,e,n,c,u,h,C,w,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,x=m+1,v=m+2;i=Ga(this,o,e,n,c,u,h,S,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function W_(r,e,t,n,i,s,o,a){let l;if(e.side===Mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===yr,a),l===null)return null;Va.copy(a),Va.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Va);return c<t.near||c>t.far?null:{distance:c,point:Va.clone(),object:r}}function Ga(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ba),r.getVertexPosition(l,ka),r.getVertexPosition(c,za);const u=W_(r,e,t,n,Ba,ka,za,Df);if(u){const h=new Q;mi.getBarycoord(Df,Ba,ka,za,h),i&&(u.uv=mi.getInterpolatedAttribute(i,a,l,c,h,new ge)),s&&(u.uv1=mi.getInterpolatedAttribute(s,a,l,c,h,new ge)),o&&(u.normal=mi.getInterpolatedAttribute(o,a,l,c,h,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Q,materialIndex:0};mi.getNormal(Ba,ka,za,f.normal),u.face=f,u.barycoord=h}return u}class go extends ji{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(h,2));function _(g,m,p,S,x,v,b,C,w,I,M){const y=v/w,N=b/I,F=v/2,$=b/2,Z=C/2,ie=w+1,te=I+1;let K=0,k=0;const ue=new Q;for(let O=0;O<te;O++){const X=O*N-$;for(let de=0;de<ie;de++){const De=de*y-F;ue[g]=De*S,ue[m]=X*x,ue[p]=Z,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[m]=0,ue[p]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(de/w),h.push(1-O/I),K+=1}}for(let O=0;O<I;O++)for(let X=0;X<w;X++){const de=f+X+ie*O,De=f+X+ie*(O+1),G=f+(X+1)+ie*(O+1),z=f+(X+1)+ie*O;l.push(de,De,z),l.push(De,G,z),k+=6}a.addGroup(d,k,M),d+=k,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(r){const e={};for(let t=0;t<r.length;t++){const n=io(r[t]);for(const i in n)e[i]=n[i]}return e}function X_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const q_={clone:io,merge:_n};var Y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mp extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new Q,If=new ge,Uf=new ge;class Hn extends Mp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,If,Uf),t.subVectors(Uf,If)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,ws=1;class Z_ extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Hn(bs,ws,e,t);i.layers=this.layers,this.add(i);const s=new Hn(bs,ws,e,t);s.layers=this.layers,this.add(s);const o=new Hn(bs,ws,e,t);o.layers=this.layers,this.add(o);const a=new Hn(bs,ws,e,t);a.layers=this.layers,this.add(a);const l=new Hn(bs,ws,e,t);l.layers=this.layers,this.add(l);const c=new Hn(bs,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ep extends En{constructor(e=[],t=eo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K_ extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ep(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new go(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:mr});s.uniforms.tEquirect.value=t;const o=new $t(i,s),a=t.minFilter;return t.minFilter===Yr&&(t.minFilter=bi),new Z_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Fs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tp extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class j_ extends En{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Yn,u=Yn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nf extends _i{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new Et,Of=new Et,Wa=[],Ff=new wr,Q_=new Et,Eo=new $t,To=new Ta;class e0 extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Nf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Q_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Ff.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Ff)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ta),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),To.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(To)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(n),e.ray.intersectsSphere(To)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,As),Of.multiplyMatrices(n,As),Eo.matrixWorld=Of,Eo.raycast(e,Wa);for(let o=0,a=Wa.length;o<a;o++){const l=Wa[o];l.instanceId=s,l.object=this,t.push(l)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Nf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new j_(new Float32Array(i*this.count),i,this.count,Mh,wi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bc=new Q,t0=new Q,n0=new Je;class Br{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bc.subVectors(n,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||n0.getNormalMatrix(e),i=this.coplanarPoint(bc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Ta,i0=new ge(.5,.5),Xa=new Q;class Rh{constructor(e=new Br,t=new Br,n=new Br,i=new Br,s=new Br,o=new Br){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],m=s[10],p=s[11],S=s[12],x=s[13],v=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,p-_,b-S).normalize(),i[1].setComponents(c+o,d+u,p+_,b+S).normalize(),i[2].setComponents(c+a,d+h,p+g,b+x).normalize(),i[3].setComponents(c-a,d-h,p-g,b-x).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,p-m,b-v).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-v).normalize(),t===Ai)i[5].setComponents(c+l,d+f,p+m,b+v).normalize();else if(t===Rl)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const t=i0.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xa.x=i.normal.x>0?e.max.x:e.min.x,Xa.y=i.normal.y>0?e.max.y:e.min.y,Xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends En{constructor(e,t,n=rs,i,s,o,a=Yn,l=Yn,c,u=ra,h=1){if(u!==ra&&u!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wp extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ge:new Q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new Q,i=[],s=[],o=[],a=new Q,l=new Et;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new Q)}s[0]=new Q,o[0]=new Q;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(st(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(st(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ph extends Ui{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class r0 extends Ph{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lh(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const qa=new Q,wc=new Lh,Ac=new Lh,Cc=new Lh;class s0 extends Ui{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Q){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(qa.subVectors(i[0],i[1]).add(i[0]),c=qa);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(qa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=qa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),wc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),Ac.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),Cc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ac.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Cc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(wc.calc(l),Ac.calc(l),Cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bf(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function o0(r,e){const t=1-r;return t*t*e}function a0(r,e){return 2*(1-r)*r*e}function l0(r,e){return r*r*e}function Ho(r,e,t,n){return o0(r,e)+a0(r,t)+l0(r,n)}function c0(r,e){const t=1-r;return t*t*t*e}function u0(r,e){const t=1-r;return 3*t*t*r*e}function h0(r,e){return 3*(1-r)*r*r*e}function f0(r,e){return r*r*r*e}function Vo(r,e,t,n,i){return c0(r,e)+u0(r,t)+h0(r,n)+f0(r,i)}class Ap extends Ui{constructor(e=new ge,t=new ge,n=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ge){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vo(e,i.x,s.x,o.x,a.x),Vo(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d0 extends Ui{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vo(e,i.x,s.x,o.x,a.x),Vo(e,i.y,s.y,o.y,a.y),Vo(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cp extends Ui{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p0 extends Ui{constructor(e=new Q,t=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rp extends Ui{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ho(e,i.x,s.x,o.x),Ho(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m0 extends Ui{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ho(e,i.x,s.x,o.x),Ho(e,i.y,s.y,o.y),Ho(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Bf(a,l.x,c.x,u.x,h.x),Bf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ge().fromArray(i))}return this}}var zu=Object.freeze({__proto__:null,ArcCurve:r0,CatmullRomCurve3:s0,CubicBezierCurve:Ap,CubicBezierCurve3:d0,EllipseCurve:Ph,LineCurve:Cp,LineCurve3:p0,QuadraticBezierCurve:Rp,QuadraticBezierCurve3:m0,SplineCurve:Pp});class g0 extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zu[i.type]().fromJSON(i))}return this}}class Xs extends g0{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cp(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Rp(this.currentPoint.clone(),new ge(e,t),new ge(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Ap(this.currentPoint.clone(),new ge(e,t),new ge(n,i),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Ph(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Go extends Xs{constructor(e){super(e),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xs().fromJSON(i))}return this}}function _0(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Lp(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=M0(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<i;f+=t){const d=r[f],_=r[f+1];d<a&&(a=d),_<l&&(l=_),d>u&&(u=d),_>h&&(h=_)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return la(s,o,t,a,l,c,0),o}function Lp(r,e,t,n,i){let s;if(i===I0(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=kf(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=kf(o/n|0,r[o],r[o+1],s);return s&&ro(s,s.next)&&(ua(s),s=s.next),s}function os(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ro(t,t.next)||It(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function la(r,e,t,n,i,s,o){if(!r)return;!o&&s&&A0(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?x0(r,n,i,s):v0(r)){e.push(l.i,r.i,c.i),ua(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=y0(os(r),e),la(r,e,t,n,i,s,2)):o===2&&S0(r,e,t,n,i,s):la(os(r),e,t,n,i,s,1);break}}}function v0(r){const e=r.prev,t=r,n=r.next;if(It(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),h=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Po(i,a,s,l,o,c,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function x0(r,e,t,n){const i=r.prev,s=r,o=r.next;if(It(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=Math.min(a,l,c),_=Math.min(u,h,f),g=Math.max(a,l,c),m=Math.max(u,h,f),p=Hu(d,_,e,t,n),S=Hu(g,m,e,t,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&Po(a,u,l,h,c,f,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&Po(a,u,l,h,c,f,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&Po(a,u,l,h,c,f,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&Po(a,u,l,h,c,f,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function y0(r,e){let t=r;do{const n=t.prev,i=t.next.next;!ro(n,i)&&Ip(n,t,t.next,i)&&ca(n,i)&&ca(i,n)&&(e.push(n.i,t.i,i.i),ua(t),ua(t.next),t=r=i),t=t.next}while(t!==r);return os(t)}function S0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&P0(o,a)){let l=Up(o,a);o=os(o,o.next),l=os(l,l.next),la(o,e,t,n,i,s,0),la(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function M0(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Lp(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(R0(c))}i.sort(E0);for(let s=0;s<i.length;s++)t=T0(i[s],t);return t}function E0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function T0(r,e){const t=b0(r,e);if(!t)return e;const n=Up(t,r);return os(n,n.next),os(t,t.next)}function b0(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(ro(r,t))return t;do{if(ro(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Dp(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);ca(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&w0(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function w0(r,e){return It(r.prev,r,e.prev)<0&&It(e.next,r,r.next)<0}function A0(r,e,t,n){let i=r;do i.z===0&&(i.z=Hu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,C0(i)}function C0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Hu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function R0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Dp(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Po(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Dp(r,e,t,n,i,s,o,a)}function P0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!L0(r,e)&&(ca(r,e)&&ca(e,r)&&D0(r,e)&&(It(r.prev,r,e.prev)||It(r,e.prev,e))||ro(r,e)&&It(r.prev,r,r.next)>0&&It(e.prev,e,e.next)>0)}function It(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ro(r,e){return r.x===e.x&&r.y===e.y}function Ip(r,e,t,n){const i=$a(It(r,e,t)),s=$a(It(r,e,n)),o=$a(It(t,n,r)),a=$a(It(t,n,e));return!!(i!==s&&o!==a||i===0&&Ya(r,t,e)||s===0&&Ya(r,n,e)||o===0&&Ya(t,r,n)||a===0&&Ya(t,e,n))}function Ya(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function $a(r){return r>0?1:r<0?-1:0}function L0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ip(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ca(r,e){return It(r.prev,r,r.next)<0?It(r,e,r.next)>=0&&It(r,r.prev,e)>=0:It(r,e,r.prev)<0||It(r,r.next,e)<0}function D0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Up(r,e){const t=Vu(r.i,r.x,r.y),n=Vu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function kf(r,e,t,n){const i=Vu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ua(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Vu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class U0{static triangulate(e,t,n=2){return _0(e,t,n)}}class cr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];zf(e),Hf(n,e);let o=e.length;t.forEach(zf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hf(n,t[l]);const a=U0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function zf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Hf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Dh extends ji{constructor(e=new Go([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ai(i,3)),this.setAttribute("uv",new ai(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:N0;let x,v=!1,b,C,w,I;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,b=p.computeFrenetFrames(u,!1),C=new Q,w=new Q,I=new Q),f||(m=0,d=0,_=0,g=0);const M=a.extractPoints(c);let y=M.shape;const N=M.holes;if(!cr.isClockWise(y)){y=y.reverse();for(let V=0,W=N.length;V<W;V++){const ee=N[V];cr.isClockWise(ee)&&(N[V]=ee.reverse())}}function $(V){const ee=10000000000000001e-36;let D=V[0];for(let B=1;B<=V.length;B++){const L=B%V.length,oe=V[L],xe=oe.x-D.x,Ne=oe.y-D.y,U=xe*xe+Ne*Ne,E=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(D.x),Math.abs(D.y)),q=ee*E*E;if(U<=q){V.splice(L,1),B--;continue}D=oe}}$(y),N.forEach($);const Z=N.length,ie=y;for(let V=0;V<Z;V++){const W=N[V];y=y.concat(W)}function te(V,W,ee){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(W,ee)}const K=y.length;function k(V,W,ee){let D,B,L;const oe=V.x-W.x,xe=V.y-W.y,Ne=ee.x-V.x,U=ee.y-V.y,E=oe*oe+xe*xe,q=oe*U-xe*Ne;if(Math.abs(q)>Number.EPSILON){const ae=Math.sqrt(E),he=Math.sqrt(Ne*Ne+U*U),le=W.x-xe/ae,Ce=W.y+oe/ae,ye=ee.x-U/he,Ue=ee.y+Ne/he,Te=((ye-le)*U-(Ue-Ce)*Ne)/(oe*U-xe*Ne);D=le+oe*Te-V.x,B=Ce+xe*Te-V.y;const Se=D*D+B*B;if(Se<=2)return new ge(D,B);L=Math.sqrt(Se/2)}else{let ae=!1;oe>Number.EPSILON?Ne>Number.EPSILON&&(ae=!0):oe<-Number.EPSILON?Ne<-Number.EPSILON&&(ae=!0):Math.sign(xe)===Math.sign(U)&&(ae=!0),ae?(D=-xe,B=oe,L=Math.sqrt(E)):(D=oe,B=xe,L=Math.sqrt(E/2))}return new ge(D/L,B/L)}const ue=[];for(let V=0,W=ie.length,ee=W-1,D=V+1;V<W;V++,ee++,D++)ee===W&&(ee=0),D===W&&(D=0),ue[V]=k(ie[V],ie[ee],ie[D]);const O=[];let X,de=ue.concat();for(let V=0,W=Z;V<W;V++){const ee=N[V];X=[];for(let D=0,B=ee.length,L=B-1,oe=D+1;D<B;D++,L++,oe++)L===B&&(L=0),oe===B&&(oe=0),X[D]=k(ee[D],ee[L],ee[oe]);O.push(X),de=de.concat(X)}let De;if(m===0)De=cr.triangulateShape(ie,N);else{const V=[],W=[];for(let ee=0;ee<m;ee++){const D=ee/m,B=d*Math.cos(D*Math.PI/2),L=_*Math.sin(D*Math.PI/2)+g;for(let oe=0,xe=ie.length;oe<xe;oe++){const Ne=te(ie[oe],ue[oe],L);se(Ne.x,Ne.y,-B),D===0&&V.push(Ne)}for(let oe=0,xe=Z;oe<xe;oe++){const Ne=N[oe];X=O[oe];const U=[];for(let E=0,q=Ne.length;E<q;E++){const ae=te(Ne[E],X[E],L);se(ae.x,ae.y,-B),D===0&&U.push(ae)}D===0&&W.push(U)}}De=cr.triangulateShape(V,W)}const G=De.length,z=_+g;for(let V=0;V<K;V++){const W=f?te(y[V],de[V],z):y[V];v?(w.copy(b.normals[0]).multiplyScalar(W.x),C.copy(b.binormals[0]).multiplyScalar(W.y),I.copy(x[0]).add(w).add(C),se(I.x,I.y,I.z)):se(W.x,W.y,0)}for(let V=1;V<=u;V++)for(let W=0;W<K;W++){const ee=f?te(y[W],de[W],z):y[W];v?(w.copy(b.normals[V]).multiplyScalar(ee.x),C.copy(b.binormals[V]).multiplyScalar(ee.y),I.copy(x[V]).add(w).add(C),se(I.x,I.y,I.z)):se(ee.x,ee.y,h/u*V)}for(let V=m-1;V>=0;V--){const W=V/m,ee=d*Math.cos(W*Math.PI/2),D=_*Math.sin(W*Math.PI/2)+g;for(let B=0,L=ie.length;B<L;B++){const oe=te(ie[B],ue[B],D);se(oe.x,oe.y,h+ee)}for(let B=0,L=N.length;B<L;B++){const oe=N[B];X=O[B];for(let xe=0,Ne=oe.length;xe<Ne;xe++){const U=te(oe[xe],X[xe],D);v?se(U.x,U.y+x[u-1].y,x[u-1].x+ee):se(U.x,U.y,h+ee)}}}A(),T();function A(){const V=i.length/3;if(f){let W=0,ee=K*W;for(let D=0;D<G;D++){const B=De[D];J(B[2]+ee,B[1]+ee,B[0]+ee)}W=u+m*2,ee=K*W;for(let D=0;D<G;D++){const B=De[D];J(B[0]+ee,B[1]+ee,B[2]+ee)}}else{for(let W=0;W<G;W++){const ee=De[W];J(ee[2],ee[1],ee[0])}for(let W=0;W<G;W++){const ee=De[W];J(ee[0]+K*u,ee[1]+K*u,ee[2]+K*u)}}n.addGroup(V,i.length/3-V,0)}function T(){const V=i.length/3;let W=0;ne(ie,W),W+=ie.length;for(let ee=0,D=N.length;ee<D;ee++){const B=N[ee];ne(B,W),W+=B.length}n.addGroup(V,i.length/3-V,1)}function ne(V,W){let ee=V.length;for(;--ee>=0;){const D=ee;let B=ee-1;B<0&&(B=V.length-1);for(let L=0,oe=u+m*2;L<oe;L++){const xe=K*L,Ne=K*(L+1),U=W+D+xe,E=W+B+xe,q=W+B+Ne,ae=W+D+Ne;fe(U,E,q,ae)}}}function se(V,W,ee){l.push(V),l.push(W),l.push(ee)}function J(V,W,ee){_e(V),_e(W),_e(ee);const D=i.length/3,B=S.generateTopUV(n,i,D-3,D-2,D-1);P(B[0]),P(B[1]),P(B[2])}function fe(V,W,ee,D){_e(V),_e(W),_e(D),_e(W),_e(ee),_e(D);const B=i.length/3,L=S.generateSideWallUV(n,i,B-6,B-3,B-2,B-1);P(L[0]),P(L[1]),P(L[3]),P(L[1]),P(L[2]),P(L[3])}function _e(V){i.push(l[V*3+0]),i.push(l[V*3+1]),i.push(l[V*3+2])}function P(V){s.push(V.x),s.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return O0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zu[i.type]().fromJSON(i)),new Dh(n,e.options)}}const N0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],_=e[i*3+2],g=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-h),new ge(f,1-_),new ge(g,1-p)]:[new ge(a,1-l),new ge(u,1-h),new ge(d,1-_),new ge(m,1-p)]}};function O0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yl extends ji{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let x=0;x<c;x++){const v=x*h-s;_.push(v,-S,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const x=S+c*p,v=S+c*(p+1),b=S+1+c*(p+1),C=S+1+c*p;d.push(x,v,C),d.push(v,b,C)}this.setIndex(d),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ll extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class F0 extends Ll{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class B0 extends mo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k0 extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z0 extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class H0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const V0=new H0;class Ih{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class G0 extends Error{constructor(e,t){super(e),this.response=t}}class W0 extends Ih{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vf.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:i});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{g+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let C=0,w=u.length;C<w;C++){const I=u[C];I.onProgress&&I.onProgress(b)}p.enqueue(v),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new G0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Vf.add(`file:${e}`,c);const u=zi[e];delete zi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete zi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Uh extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Rc=new Et,Gf=new Q,Wf=new Q;class Np{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gf),Wf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wf),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xf=new Et,bo=new Q,Pc=new Q;class X0 extends Np{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bo.setFromMatrixPosition(e.matrixWorld),n.position.copy(bo),Pc.copy(n.position),Pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pc),n.updateMatrixWorld(),i.makeTranslation(-bo.x,-bo.y,-bo.z),Xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf,n.coordinateSystem,n.reversedDepth)}}class Op extends Uh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new X0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fp extends Mp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class q0 extends Np{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qf extends Uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Y0 extends Uh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $0 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yf=new ge;class Z0{constructor(e=new ge(1/0,1/0),t=new ge(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ir{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Xs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const S=[];for(let x=0,v=p.length;x<v;x++){const b=p[x],C=new Go;C.curves=b.curves,S.push(C)}return S}function n(p,S){const x=S.length;let v=!1;for(let b=x-1,C=0;C<x;b=C++){let w=S[b],I=S[C],M=I.x-w.x,y=I.y-w.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(w=S[C],M=-M,I=S[b],y=-y),p.y<w.y||p.y>I.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const N=y*(p.x-w.x)-M*(p.y-w.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(p.y!==w.y)continue;if(I.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=I.x)return!0}}return v}const i=cr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Go,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let p=0,S=s.length;p<S;p++)a=s[p],g=a.getPoints(),o=i(g),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new Go,p:g},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,S=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const b=d[x];for(let C=0;C<b.length;C++){const w=b[C];let I=!0;for(let M=0;M<f.length;M++)n(w.p,f[M].p)&&(x!==M&&S++,I?(I=!1,h[M].push(w)):p=!0);I&&h[x].push(w)}}S>0&&p===!1&&(d=h)}let m;for(let p=0,S=f.length;p<S;p++){l=f[p].s,c.push(l),m=d[p];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}function $f(r,e,t,n){const i=K0(n);switch(t){case up:return r*e;case Mh:return r*e/i.components*i.byteLength;case Eh:return r*e/i.components*i.byteLength;case fp:return r*e*2/i.components*i.byteLength;case Th:return r*e*2/i.components*i.byteLength;case hp:return r*e*3/i.components*i.byteLength;case gi:return r*e*4/i.components*i.byteLength;case bh:return r*e*4/i.components*i.byteLength;case fl:case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case du:case mu:return Math.max(r,16)*Math.max(e,8)/4;case fu:case pu:return Math.max(r,8)*Math.max(e,8)/2;case gu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Iu:case Uu:case Nu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ou:case Fu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bu:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K0(r){switch(r){case Di:case op:return{byteLength:1,components:1};case na:case ap:case Ma:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case rs:case xh:case wi:return{byteLength:4,components:1};case lp:case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);function Bp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function J0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
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
#endif`,sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hv=`#ifdef USE_IRIDESCENCE
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
#endif`,fv=`#ifdef USE_BUMPMAP
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
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
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ev=`vec3 transformedNormal = objectNormal;
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
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zv=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Jv=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`#include <common>
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
}`,ry=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,oy=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,uy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
}`,dy=`#define LAMBERT
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
}`,py=`#define LAMBERT
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
}`,my=`#define MATCAP
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
}`,gy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,vy=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xy=`#define PHONG
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
}`,yy=`#define PHONG
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
}`,Sy=`#define STANDARD
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
}`,My=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Ey=`#define TOON
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
}`,Ty=`#define TOON
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
}`,by=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Cy=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Py=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:j0,alphahash_pars_fragment:Q0,alphamap_fragment:ev,alphamap_pars_fragment:tv,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:rv,aomap_pars_fragment:sv,batching_pars_vertex:ov,batching_vertex:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:hv,bumpmap_pars_fragment:fv,clipping_planes_fragment:dv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:vv,color_pars_vertex:xv,color_vertex:yv,common:Sv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Tv,displacementmap_vertex:bv,emissivemap_fragment:wv,emissivemap_pars_fragment:Av,colorspace_fragment:Cv,colorspace_pars_fragment:Rv,envmap_fragment:Pv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Dv,envmap_pars_vertex:Iv,envmap_physical_pars_fragment:Wv,envmap_vertex:Uv,fog_vertex:Nv,fog_pars_vertex:Ov,fog_fragment:Fv,fog_pars_fragment:Bv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:zv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:$v,lights_physical_fragment:Zv,lights_physical_pars_fragment:Kv,lights_fragment_begin:Jv,lights_fragment_maps:jv,lights_fragment_end:Qv,logdepthbuf_fragment:ex,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:rx,map_pars_fragment:sx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:ux,morphcolor_vertex:hx,morphnormal_vertex:fx,morphtarget_pars_vertex:dx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:_x,normal_pars_vertex:vx,normal_vertex:xx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:bx,packing:wx,premultiplied_alpha_fragment:Ax,project_vertex:Cx,dithering_fragment:Rx,dithering_pars_fragment:Px,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Ux,shadowmap_vertex:Nx,shadowmask_pars_fragment:Ox,skinbase_vertex:Fx,skinning_pars_vertex:Bx,skinning_vertex:kx,skinnormal_vertex:zx,specularmap_fragment:Hx,specularmap_pars_fragment:Vx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:qx,uv_pars_fragment:Yx,uv_pars_vertex:$x,uv_vertex:Zx,worldpos_vertex:Kx,background_vert:Jx,background_frag:jx,backgroundCube_vert:Qx,backgroundCube_frag:ey,cube_vert:ty,cube_frag:ny,depth_vert:iy,depth_frag:ry,distanceRGBA_vert:sy,distanceRGBA_frag:oy,equirect_vert:ay,equirect_frag:ly,linedashed_vert:cy,linedashed_frag:uy,meshbasic_vert:hy,meshbasic_frag:fy,meshlambert_vert:dy,meshlambert_frag:py,meshmatcap_vert:my,meshmatcap_frag:gy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:xy,meshphong_frag:yy,meshphysical_vert:Sy,meshphysical_frag:My,meshtoon_vert:Ey,meshtoon_frag:Ty,points_vert:by,points_frag:wy,shadow_vert:Ay,shadow_frag:Cy,sprite_vert:Ry,sprite_frag:Py},Le={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Ei={basic:{uniforms:_n([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:_n([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:_n([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:_n([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:_n([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:_n([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:_n([Le.points,Le.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:_n([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:_n([Le.common,Le.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:_n([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:_n([Le.sprite,Le.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:_n([Le.common,Le.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:_n([Le.lights,Le.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ei.physical={uniforms:_n([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Za={r:0,b:0,g:0},Ur=new vi,Ly=new Et;function Dy(r,e,t,n,i,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function g(x){let v=!1;const b=_(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===ql)?(u===void 0&&(u=new $t(new go(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:io(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ur.copy(v.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(Ur)),u.material.toneMapped=dt.getTransfer(b.colorSpace)!==_t,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new $t(new Yl(2,2),new Sr({name:"BackgroundMaterial",uniforms:io(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=dt.getTransfer(b.colorSpace)!==_t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Za,Sp(r)),n.buffers.color.setClear(Za.r,Za.g,Za.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:m,dispose:S}}function Iy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,N,F,$,Z){let ie=!1;const te=h($,F,N);s!==te&&(s=te,c(s.object)),ie=d(y,$,F,Z),ie&&_(y,$,F,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,v(y,N,F,$),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,N,F){const $=F.wireframe===!0;let Z=n[y.id];Z===void 0&&(Z={},n[y.id]=Z);let ie=Z[N.id];ie===void 0&&(ie={},Z[N.id]=ie);let te=ie[$];return te===void 0&&(te=f(l()),ie[$]=te),te}function f(y){const N=[],F=[],$=[];for(let Z=0;Z<t;Z++)N[Z]=0,F[Z]=0,$[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:$,object:y,attributes:{},index:null}}function d(y,N,F,$){const Z=s.attributes,ie=N.attributes;let te=0;const K=F.getAttributes();for(const k in K)if(K[k].location>=0){const O=Z[k];let X=ie[k];if(X===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),O===void 0||O.attribute!==X||X&&O.data!==X.data)return!0;te++}return s.attributesNum!==te||s.index!==$}function _(y,N,F,$){const Z={},ie=N.attributes;let te=0;const K=F.getAttributes();for(const k in K)if(K[k].location>=0){let O=ie[k];O===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(O=y.instanceColor));const X={};X.attribute=O,O&&O.data&&(X.data=O.data),Z[k]=X,te++}s.attributes=Z,s.attributesNum=te,s.index=$}function g(){const y=s.newAttributes;for(let N=0,F=y.length;N<F;N++)y[N]=0}function m(y){p(y,0)}function p(y,N){const F=s.newAttributes,$=s.enabledAttributes,Z=s.attributeDivisors;F[y]=1,$[y]===0&&(r.enableVertexAttribArray(y),$[y]=1),Z[y]!==N&&(r.vertexAttribDivisor(y,N),Z[y]=N)}function S(){const y=s.newAttributes,N=s.enabledAttributes;for(let F=0,$=N.length;F<$;F++)N[F]!==y[F]&&(r.disableVertexAttribArray(F),N[F]=0)}function x(y,N,F,$,Z,ie,te){te===!0?r.vertexAttribIPointer(y,N,F,Z,ie):r.vertexAttribPointer(y,N,F,$,Z,ie)}function v(y,N,F,$){g();const Z=$.attributes,ie=F.getAttributes(),te=N.defaultAttributeValues;for(const K in ie){const k=ie[K];if(k.location>=0){let ue=Z[K];if(ue===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){const O=ue.normalized,X=ue.itemSize,de=e.get(ue);if(de===void 0)continue;const De=de.buffer,G=de.type,z=de.bytesPerElement,A=G===r.INT||G===r.UNSIGNED_INT||ue.gpuType===xh;if(ue.isInterleavedBufferAttribute){const T=ue.data,ne=T.stride,se=ue.offset;if(T.isInstancedInterleavedBuffer){for(let J=0;J<k.locationSize;J++)p(k.location+J,T.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);r.bindBuffer(r.ARRAY_BUFFER,De);for(let J=0;J<k.locationSize;J++)x(k.location+J,X/k.locationSize,G,O,ne*z,(se+X/k.locationSize*J)*z,A)}else{if(ue.isInstancedBufferAttribute){for(let T=0;T<k.locationSize;T++)p(k.location+T,ue.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let T=0;T<k.locationSize;T++)m(k.location+T);r.bindBuffer(r.ARRAY_BUFFER,De);for(let T=0;T<k.locationSize;T++)x(k.location+T,X/k.locationSize,G,O,X*z,X/k.locationSize*T*z,A)}}else if(te!==void 0){const O=te[K];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(k.location,O);break;case 3:r.vertexAttrib3fv(k.location,O);break;case 4:r.vertexAttrib4fv(k.location,O);break;default:r.vertexAttrib1fv(k.location,O)}}}}S()}function b(){I();for(const y in n){const N=n[y];for(const F in N){const $=N[F];for(const Z in $)u($[Z].object),delete $[Z];delete N[F]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const N=n[y.id];for(const F in N){const $=N[F];for(const Z in $)u($[Z].object),delete $[Z];delete N[F]}delete n[y.id]}function w(y){for(const N in n){const F=n[N];if(F[y.id]===void 0)continue;const $=F[y.id];for(const Z in $)u($[Z].object),delete $[Z];delete F[y.id]}}function I(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Uy(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ny(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==gi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Di&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wi&&!I)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,maxSamples:C}}function Oy(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Br,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let v=p.clippingState||null;l.value=v,v=u(_,f,x,d);for(let b=0;b!==x;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==g;++x,v+=4)o.copy(h[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Fy(r){let e=new WeakMap;function t(o,a){return a===lu?o.mapping=eo:a===cu&&(o.mapping=to),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===lu||a===cu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new K_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Bs=4,Zf=[.125,.215,.35,.446,.526,.582],Wr=20,Lc=new Fp,Kf=new lt;let Dc=null,Ic=0,Uc=0,Nc=!1;const kr=(1+Math.sqrt(5))/2,Cs=1/kr,Jf=[new Q(-kr,Cs,0),new Q(kr,Cs,0),new Q(-Cs,0,kr),new Q(Cs,0,kr),new Q(0,kr,-Cs),new Q(0,kr,Cs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],By=new Q;class Gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=By}=s;Dc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Ic,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ma,format:gi,colorSpace:no,depthBuffer:!1},i=jf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ky(s)),this._blurMaterial=zy(s,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,i,s){const l=new Hn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Kf),h.toneMapping=gr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const g=new vp({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),m=new $t(new go,g);let p=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(Kf),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const b=this._cubeSize;Ka(i,v*b,x>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===eo||e.mapping===to;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Lc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jf[(i-s-1)%Jf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Wr;m>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const p=[];let S=0;for(let w=0;w<Wr;++w){const I=w/g,M=Math.exp(-I*I/2);p.push(M),w===0?S+=M:w<m&&(S+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-Bs?i-x+Bs:0),C=4*(this._cubeSize-v);Ka(t,b,C,3*v,2*v),l.setRenderTarget(t),l.render(h,Lc)}}function ky(r){const e=[],t=[],n=[];let i=r;const s=r-Bs+1+Zf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Bs?l=Zf[o-r+Bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),x=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,I=C>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];S.set(M,g*_*C),x.set(f,m*_*C);const y=[C,C,C,C,C,C];v.set(y,p*_*C)}const b=new ji;b.setAttribute("position",new _i(S,g)),b.setAttribute("uv",new _i(x,m)),b.setAttribute("faceIndex",new _i(v,p)),e.push(b),i>Bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jf(r,e,t){const n=new ss(r,e,t);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zy(r,e,t){const n=new Float32Array(Wr),i=new Q(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Qf(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function ed(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Nh(){return`

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
	`}function Hy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lu||l===cu,u=l===eo||l===to;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Gu(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Gu(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gy(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,v=S.length;x<v;x+=3){const b=S[x+0],C=S[x+1],w=S[x+2];f.push(b,C,C,w,w,b)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const b=x+0,C=x+1,w=x+2;f.push(b,C,C,w,w,b)}}else return;const m=new(pp(f)?yp:xp)(f,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Wy(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*g[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qy(r,e,t){const n=new WeakMap,i=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let v=a.attributes.position.count*x,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const C=new Float32Array(v*b*4*h),w=new mp(C,v,b,h);w.type=wi,w.needsUpdate=!0;const I=x*4;for(let y=0;y<h;y++){const N=m[y],F=p[y],$=S[y],Z=v*b*4*y;for(let ie=0;ie<N.count;ie++){const te=ie*I;d===!0&&(i.fromBufferAttribute(N,ie),C[Z+te+0]=i.x,C[Z+te+1]=i.y,C[Z+te+2]=i.z,C[Z+te+3]=0),_===!0&&(i.fromBufferAttribute(F,ie),C[Z+te+4]=i.x,C[Z+te+5]=i.y,C[Z+te+6]=i.z,C[Z+te+7]=0),g===!0&&(i.fromBufferAttribute($,ie),C[Z+te+8]=i.x,C[Z+te+9]=i.y,C[Z+te+10]=i.z,C[Z+te+11]=$.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new ge(v,b)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Yy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const kp=new En,td=new bp(1,1),zp=new mp,Hp=new D_,Vp=new Ep,nd=[],id=[],rd=new Float32Array(16),sd=new Float32Array(9),od=new Float32Array(4);function _o(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nd[i];if(s===void 0&&(s=new Float32Array(i),nd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $l(r,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $y(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function Ky(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function Jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function jy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;od.set(n),r.uniformMatrix2fv(this.addr,!1,od),Kt(t,n)}}function Qy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;sd.set(n),r.uniformMatrix3fv(this.addr,!1,sd),Kt(t,n)}}function eS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;rd.set(n),r.uniformMatrix4fv(this.addr,!1,rd),Kt(t,n)}}function tS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function iS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function rS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function sS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function oS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function aS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function lS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function cS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(td.compareFunction=dp,s=td):s=kp,t.setTexture2D(e||s,i)}function uS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hp,i)}function hS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vp,i)}function fS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zp,i)}function dS(r){switch(r){case 5126:return $y;case 35664:return Zy;case 35665:return Ky;case 35666:return Jy;case 35674:return jy;case 35675:return Qy;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return fS}}function pS(r,e){r.uniform1fv(this.addr,e)}function mS(r,e){const t=_o(e,this.size,2);r.uniform2fv(this.addr,t)}function gS(r,e){const t=_o(e,this.size,3);r.uniform3fv(this.addr,t)}function _S(r,e){const t=_o(e,this.size,4);r.uniform4fv(this.addr,t)}function vS(r,e){const t=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xS(r,e){const t=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yS(r,e){const t=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function SS(r,e){r.uniform1iv(this.addr,e)}function MS(r,e){r.uniform2iv(this.addr,e)}function ES(r,e){r.uniform3iv(this.addr,e)}function TS(r,e){r.uniform4iv(this.addr,e)}function bS(r,e){r.uniform1uiv(this.addr,e)}function wS(r,e){r.uniform2uiv(this.addr,e)}function AS(r,e){r.uniform3uiv(this.addr,e)}function CS(r,e){r.uniform4uiv(this.addr,e)}function RS(r,e,t){const n=this.cache,i=e.length,s=$l(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||kp,s[o])}function PS(r,e,t){const n=this.cache,i=e.length,s=$l(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hp,s[o])}function LS(r,e,t){const n=this.cache,i=e.length,s=$l(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vp,s[o])}function DS(r,e,t){const n=this.cache,i=e.length,s=$l(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zp,s[o])}function IS(r){switch(r){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return _S;case 35674:return vS;case 35675:return xS;case 35676:return yS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return ES;case 35669:case 35673:return TS;case 5125:return bS;case 36294:return wS;case 36295:return AS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return DS}}class US{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dS(t.type)}}class NS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IS(t.type)}}class OS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Oc=/(\w+)(\])?(\[|\.)?/g;function ad(r,e){r.seq.push(e),r.map[e.id]=e}function FS(r,e,t){const n=r.name,i=n.length;for(Oc.lastIndex=0;;){const s=Oc.exec(n),o=Oc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ad(t,c===void 0?new US(a,r,e):new NS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new OS(a),ad(t,h)),t=h}}}class gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);FS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ld(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const BS=37297;let kS=0;function zS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const cd=new Je;function HS(r){dt._getMatrix(cd,dt.workingColorSpace,r);const e=`mat3( ${cd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Cl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ud(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+zS(r.getShaderSource(e),a)}else return s}function VS(r,e){const t=HS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GS(r,e){let t;switch(e){case qg:t="Linear";break;case Yg:t="Reinhard";break;case $g:t="Cineon";break;case rp:t="ACESFilmic";break;case Kg:t="AgX";break;case Jg:t="Neutral";break;case Zg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new Q;function WS(){dt.getLuminanceCoefficients(Ja);const r=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function qS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Lo(r){return r!==""}function hd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(r){return r.replace($S,KS)}const ZS=new Map;function KS(r,e){let t=it[e];if(t===void 0){const n=ZS.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wu(t)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(r){return r.replace(JS,jS)}function jS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pd(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ip?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===bg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function eM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tM(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===to&&(e="ENVMAP_MODE_REFRACTION"),e}function nM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wg:e="ENVMAP_BLENDING_MIX";break;case Xg:e="ENVMAP_BLENDING_ADD";break}return e}function iM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=QS(t),c=eM(t),u=tM(t),h=nM(t),f=iM(t),d=XS(t),_=qS(s),g=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(m=[pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?it.tonemapping_pars_fragment:"",t.toneMapping!==gr?GS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),WS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Wu(o),o=hd(o,t),o=fd(o,t),a=Wu(a),a=hd(a,t),a=fd(a,t),o=dd(o),a=dd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,b=ld(i,i.VERTEX_SHADER,x),C=ld(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(N){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(g)||"",$=i.getShaderInfoLog(b)||"",Z=i.getShaderInfoLog(C)||"",ie=F.trim(),te=$.trim(),K=Z.trim();let k=!0,ue=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,C);else{const O=ud(i,b,"vertex"),X=ud(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ie+`
`+O+`
`+X)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(te===""||K==="")&&(ue=!1);ue&&(N.diagnostics={runnable:k,programLog:ie,vertexShader:{log:te,prefix:m},fragmentShader:{log:K,prefix:p}})}i.deleteShader(b),i.deleteShader(C),I=new gl(i,g),M=YS(i,g)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,BS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let sM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aM(e),t.set(e,n)),n}}class aM{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}}function lM(r,e,t,n,i,s,o){const a=new gp,l=new oM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,N,F,$){const Z=F.fog,ie=$.geometry,te=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),k=K&&K.mapping===ql?K.image.height:null,ue=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const O=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,X=O!==void 0?O.length:0;let de=0;ie.morphAttributes.position!==void 0&&(de=1),ie.morphAttributes.normal!==void 0&&(de=2),ie.morphAttributes.color!==void 0&&(de=3);let De,G,z,A;if(ue){const Ie=Ei[ue];De=Ie.vertexShader,G=Ie.fragmentShader}else De=M.vertexShader,G=M.fragmentShader,l.update(M),z=l.getVertexShaderID(M),A=l.getFragmentShaderID(M);const T=r.getRenderTarget(),ne=r.state.buffers.depth.getReversed(),se=$.isInstancedMesh===!0,J=$.isBatchedMesh===!0,fe=!!M.map,_e=!!M.matcap,P=!!K,V=!!M.aoMap,W=!!M.lightMap,ee=!!M.bumpMap,D=!!M.normalMap,B=!!M.displacementMap,L=!!M.emissiveMap,oe=!!M.metalnessMap,xe=!!M.roughnessMap,Ne=M.anisotropy>0,U=M.clearcoat>0,E=M.dispersion>0,q=M.iridescence>0,ae=M.sheen>0,he=M.transmission>0,le=Ne&&!!M.anisotropyMap,Ce=U&&!!M.clearcoatMap,ye=U&&!!M.clearcoatNormalMap,Ue=U&&!!M.clearcoatRoughnessMap,Te=q&&!!M.iridescenceMap,Se=q&&!!M.iridescenceThicknessMap,be=ae&&!!M.sheenColorMap,Xe=ae&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Ae=!!M.specularColorMap,Ke=!!M.specularIntensityMap,H=he&&!!M.transmissionMap,Me=he&&!!M.thicknessMap,Ee=!!M.gradientMap,Pe=!!M.alphaMap,ve=M.alphaTest>0,pe=!!M.alphaHash,Fe=!!M.extensions;let Ye=gr;M.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ye=r.toneMapping);const ht={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:De,fragmentShader:G,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:A,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:J,batchingColor:J&&$._colorsTexture!==null,instancing:se,instancingColor:se&&$.instanceColor!==null,instancingMorph:se&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:T===null?r.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:no,alphaToCoverage:!!M.alphaToCoverage,map:fe,matcap:_e,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:k,aoMap:V,lightMap:W,bumpMap:ee,normalMap:D,displacementMap:f&&B,emissiveMap:L,normalMapObjectSpace:D&&M.normalMapType===t_,normalMapTangentSpace:D&&M.normalMapType===wh,metalnessMap:oe,roughnessMap:xe,anisotropy:Ne,anisotropyMap:le,clearcoat:U,clearcoatMap:Ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ue,dispersion:E,iridescence:q,iridescenceMap:Te,iridescenceThicknessMap:Se,sheen:ae,sheenColorMap:be,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:Ae,specularIntensityMap:Ke,transmission:he,transmissionMap:H,thicknessMap:Me,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===Gs&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ve,alphaHash:pe,combine:M.combine,mapUv:fe&&g(M.map.channel),aoMapUv:V&&g(M.aoMap.channel),lightMapUv:W&&g(M.lightMap.channel),bumpMapUv:ee&&g(M.bumpMap.channel),normalMapUv:D&&g(M.normalMap.channel),displacementMapUv:B&&g(M.displacementMap.channel),emissiveMapUv:L&&g(M.emissiveMap.channel),metalnessMapUv:oe&&g(M.metalnessMap.channel),roughnessMapUv:xe&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:Ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&g(M.sheenRoughnessMap.channel),specularMapUv:ze&&g(M.specularMap.channel),specularColorMapUv:Ae&&g(M.specularColorMap.channel),specularIntensityMapUv:Ke&&g(M.specularIntensityMap.channel),transmissionMapUv:H&&g(M.transmissionMap.channel),thicknessMapUv:Me&&g(M.thicknessMap.channel),alphaMapUv:Pe&&g(M.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(D||Ne),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ie.attributes.uv&&(fe||Pe),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ne,skinning:$.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,decodeVideoTexture:fe&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&dt.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wi,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)y.push(N),y.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(S(y,M),x(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=_[M.type];let N;if(y){const F=Ei[y];N=q_.clone(F.uniforms)}else N=M.uniforms;return N}function b(M,y){let N;for(let F=0,$=u.length;F<$;F++){const Z=u[F];if(Z.cacheKey===y){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new rM(r,y,M,s),u.push(N)),N}function C(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:I}}function cM(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function uM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function md(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||uM),n.length>1&&n.sort(f||md),i.length>1&&i.sort(f||md)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function hM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new gd,r.set(n,[o])):i>=s.length?(o=new gd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function fM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new lt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function dM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pM=0;function mM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gM(r){const e=new fM,t=dM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const i=new Q,s=new Et,o=new Et;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,x=0,v=0,b=0,C=0,w=0;c.sort(mM);for(let M=0,y=c.length;M<y;M++){const N=c[M],F=N.color,$=N.intensity,Z=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*$,h+=F.g*$,f+=F.b*$;else if(N.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(N.sh.coefficients[te],$);w++}else if(N.isDirectionalLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,k=t.get(N);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=ie,n.directionalShadowMatrix[d]=N.shadow.matrix,S++}n.directional[d]=te,d++}else if(N.isSpotLight){const te=e.get(N);te.position.setFromMatrixPosition(N.matrixWorld),te.color.copy(F).multiplyScalar($),te.distance=Z,te.coneCos=Math.cos(N.angle),te.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),te.decay=N.decay,n.spot[g]=te;const K=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,K.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[g]=K.matrix,N.castShadow){const k=t.get(N);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=ie,v++}g++}else if(N.isRectAreaLight){const te=e.get(N);te.color.copy(F).multiplyScalar($),te.halfWidth.set(N.width*.5,0,0),te.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=te,m++}else if(N.isPointLight){const te=e.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity),te.distance=N.distance,te.decay=N.decay,N.castShadow){const K=N.shadow,k=t.get(N);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=ie,n.pointShadowMatrix[_]=N.shadow.matrix,x++}n.point[_]=te,_++}else if(N.isHemisphereLight){const te=e.get(N);te.skyColor.copy(N.color).multiplyScalar($),te.groundColor.copy(N.groundColor).multiplyScalar($),n.hemi[p]=te,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==b||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,I.directionalLength=d,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=b,I.numLightProbes=w,n.version=pM++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function _d(r){const e=new gM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _M(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new _d(r),e.set(i,[a])):s>=o.length?(a=new _d(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
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
}`;function yM(r,e,t){let n=new Rh;const i=new ge,s=new ge,o=new vt,a=new k0({depthPacking:e_}),l=new z0,c={},u=t.maxTextureSize,h={[yr]:Mn,[Mn]:yr,[Wi]:Wi},f=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new ji;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $t(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ip;let p=this.type;this.render=function(C,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),F=r.state;F.setBlending(mr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=p!==Hi&&this.type===Hi,Z=p===Hi&&this.type!==Hi;for(let ie=0,te=C.length;ie<te;ie++){const K=C[ie],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ue=k.getFrameExtents();if(i.multiply(ue),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ue.x),i.x=s.x*ue.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ue.y),i.y=s.y*ue.y,k.mapSize.y=s.y)),k.map===null||$===!0||Z===!0){const X=this.type!==Hi?{minFilter:Yn,magFilter:Yn}:{};k.map!==null&&k.map.dispose(),k.map=new ss(i.x,i.y,X),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const O=k.getViewportCount();for(let X=0;X<O;X++){const de=k.getViewport(X);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),F.viewport(o),k.updateMatrices(K,X),n=k.getFrustum(),v(w,I,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Hi&&S(k,I),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,N)};function S(C,w){const I=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ss(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(w,null,I,f,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(w,null,I,d,g,null)}function x(C,w,I,M){let y=null;const N=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)y=N;else if(y=I.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=y.uuid,$=w.uuid;let Z=c[F];Z===void 0&&(Z={},c[F]=Z);let ie=Z[$];ie===void 0&&(ie=y.clone(),Z[$]=ie,w.addEventListener("dispose",b)),y=ie}if(y.visible=w.visible,y.wireframe=w.wireframe,M===Hi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=r.properties.get(y);F.light=I}return y}function v(C,w,I,M,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Hi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const $=e.update(C),Z=C.material;if(Array.isArray(Z)){const ie=$.groups;for(let te=0,K=ie.length;te<K;te++){const k=ie[te],ue=Z[k.materialIndex];if(ue&&ue.visible){const O=x(C,ue,M,y);C.onBeforeShadow(r,C,w,I,$,O,k),r.renderBufferDirect(I,null,$,O,C,k),C.onAfterShadow(r,C,w,I,$,O,k)}}}else if(Z.visible){const ie=x(C,Z,M,y);C.onBeforeShadow(r,C,w,I,$,ie,null),r.renderBufferDirect(I,null,$,ie,C,null),C.onAfterShadow(r,C,w,I,$,ie,null)}}const F=C.children;for(let $=0,Z=F.length;$<Z;$++)v(F[$],w,I,M,y)}function b(C){C.target.removeEventListener("dispose",b);for(const I in c){const M=c[I],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const SM={[tu]:nu,[iu]:ou,[ru]:au,[Qs]:su,[nu]:tu,[ou]:iu,[au]:ru,[su]:Qs};function MM(r,e){function t(){let H=!1;const Me=new vt;let Ee=null;const Pe=new vt(0,0,0,0);return{setMask:function(ve){Ee!==ve&&!H&&(r.colorMask(ve,ve,ve,ve),Ee=ve)},setLocked:function(ve){H=ve},setClear:function(ve,pe,Fe,Ye,ht){ht===!0&&(ve*=Ye,pe*=Ye,Fe*=Ye),Me.set(ve,pe,Fe,Ye),Pe.equals(Me)===!1&&(r.clearColor(ve,pe,Fe,Ye),Pe.copy(Me))},reset:function(){H=!1,Ee=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,Me=!1,Ee=null,Pe=null,ve=null;return{setReversed:function(pe){if(Me!==pe){const Fe=e.get("EXT_clip_control");pe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Me=pe;const Ye=ve;ve=null,this.setClear(Ye)}},getReversed:function(){return Me},setTest:function(pe){pe?T(r.DEPTH_TEST):ne(r.DEPTH_TEST)},setMask:function(pe){Ee!==pe&&!H&&(r.depthMask(pe),Ee=pe)},setFunc:function(pe){if(Me&&(pe=SM[pe]),Pe!==pe){switch(pe){case tu:r.depthFunc(r.NEVER);break;case nu:r.depthFunc(r.ALWAYS);break;case iu:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case ru:r.depthFunc(r.EQUAL);break;case su:r.depthFunc(r.GEQUAL);break;case ou:r.depthFunc(r.GREATER);break;case au:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=pe}},setLocked:function(pe){H=pe},setClear:function(pe){ve!==pe&&(Me&&(pe=1-pe),r.clearDepth(pe),ve=pe)},reset:function(){H=!1,Ee=null,Pe=null,ve=null,Me=!1}}}function i(){let H=!1,Me=null,Ee=null,Pe=null,ve=null,pe=null,Fe=null,Ye=null,ht=null;return{setTest:function(Ie){H||(Ie?T(r.STENCIL_TEST):ne(r.STENCIL_TEST))},setMask:function(Ie){Me!==Ie&&!H&&(r.stencilMask(Ie),Me=Ie)},setFunc:function(Ie,He,et){(Ee!==Ie||Pe!==He||ve!==et)&&(r.stencilFunc(Ie,He,et),Ee=Ie,Pe=He,ve=et)},setOp:function(Ie,He,et){(pe!==Ie||Fe!==He||Ye!==et)&&(r.stencilOp(Ie,He,et),pe=Ie,Fe=He,Ye=et)},setLocked:function(Ie){H=Ie},setClear:function(Ie){ht!==Ie&&(r.clearStencil(Ie),ht=Ie)},reset:function(){H=!1,Me=null,Ee=null,Pe=null,ve=null,pe=null,Fe=null,Ye=null,ht=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,x=null,v=null,b=null,C=null,w=new lt(0,0,0),I=0,M=!1,y=null,N=null,F=null,$=null,Z=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),te=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),te=K>=2);let ue=null,O={};const X=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),De=new vt().fromArray(X),G=new vt().fromArray(de);function z(H,Me,Ee,Pe){const ve=new Uint8Array(4),pe=r.createTexture();r.bindTexture(H,pe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<Ee;Fe++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Me,0,r.RGBA,1,1,Pe,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(Me+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return pe}const A={};A[r.TEXTURE_2D]=z(r.TEXTURE_2D,r.TEXTURE_2D,1),A[r.TEXTURE_CUBE_MAP]=z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),A[r.TEXTURE_2D_ARRAY]=z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),A[r.TEXTURE_3D]=z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),T(r.DEPTH_TEST),o.setFunc(Qs),ee(!1),D(uf),T(r.CULL_FACE),V(mr);function T(H){u[H]!==!0&&(r.enable(H),u[H]=!0)}function ne(H){u[H]!==!1&&(r.disable(H),u[H]=!1)}function se(H,Me){return h[H]!==Me?(r.bindFramebuffer(H,Me),h[H]=Me,H===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Me),H===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Me),!0):!1}function J(H,Me){let Ee=d,Pe=!1;if(H){Ee=f.get(Me),Ee===void 0&&(Ee=[],f.set(Me,Ee));const ve=H.textures;if(Ee.length!==ve.length||Ee[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Fe=ve.length;pe<Fe;pe++)Ee[pe]=r.COLOR_ATTACHMENT0+pe;Ee.length=ve.length,Pe=!0}}else Ee[0]!==r.BACK&&(Ee[0]=r.BACK,Pe=!0);Pe&&r.drawBuffers(Ee)}function fe(H){return _!==H?(r.useProgram(H),_=H,!0):!1}const _e={[Gr]:r.FUNC_ADD,[Ag]:r.FUNC_SUBTRACT,[Cg]:r.FUNC_REVERSE_SUBTRACT};_e[Rg]=r.MIN,_e[Pg]=r.MAX;const P={[Lg]:r.ZERO,[Dg]:r.ONE,[Ig]:r.SRC_COLOR,[Qc]:r.SRC_ALPHA,[kg]:r.SRC_ALPHA_SATURATE,[Fg]:r.DST_COLOR,[Ng]:r.DST_ALPHA,[Ug]:r.ONE_MINUS_SRC_COLOR,[eu]:r.ONE_MINUS_SRC_ALPHA,[Bg]:r.ONE_MINUS_DST_COLOR,[Og]:r.ONE_MINUS_DST_ALPHA,[zg]:r.CONSTANT_COLOR,[Hg]:r.ONE_MINUS_CONSTANT_COLOR,[Vg]:r.CONSTANT_ALPHA,[Gg]:r.ONE_MINUS_CONSTANT_ALPHA};function V(H,Me,Ee,Pe,ve,pe,Fe,Ye,ht,Ie){if(H===mr){g===!0&&(ne(r.BLEND),g=!1);return}if(g===!1&&(T(r.BLEND),g=!0),H!==wg){if(H!==m||Ie!==M){if((p!==Gr||v!==Gr)&&(r.blendEquation(r.FUNC_ADD),p=Gr,v=Gr),Ie)switch(H){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hf:r.blendFunc(r.ONE,r.ONE);break;case ff:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case df:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ff:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case df:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}S=null,x=null,b=null,C=null,w.set(0,0,0),I=0,m=H,M=Ie}return}ve=ve||Me,pe=pe||Ee,Fe=Fe||Pe,(Me!==p||ve!==v)&&(r.blendEquationSeparate(_e[Me],_e[ve]),p=Me,v=ve),(Ee!==S||Pe!==x||pe!==b||Fe!==C)&&(r.blendFuncSeparate(P[Ee],P[Pe],P[pe],P[Fe]),S=Ee,x=Pe,b=pe,C=Fe),(Ye.equals(w)===!1||ht!==I)&&(r.blendColor(Ye.r,Ye.g,Ye.b,ht),w.copy(Ye),I=ht),m=H,M=!1}function W(H,Me){H.side===Wi?ne(r.CULL_FACE):T(r.CULL_FACE);let Ee=H.side===Mn;Me&&(Ee=!Ee),ee(Ee),H.blending===Gs&&H.transparent===!1?V(mr):V(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const Pe=H.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),L(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?T(r.SAMPLE_ALPHA_TO_COVERAGE):ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(H){y!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),y=H)}function D(H){H!==Eg?(T(r.CULL_FACE),H!==N&&(H===uf?r.cullFace(r.BACK):H===Tg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ne(r.CULL_FACE),N=H}function B(H){H!==F&&(te&&r.lineWidth(H),F=H)}function L(H,Me,Ee){H?(T(r.POLYGON_OFFSET_FILL),($!==Me||Z!==Ee)&&(r.polygonOffset(Me,Ee),$=Me,Z=Ee)):ne(r.POLYGON_OFFSET_FILL)}function oe(H){H?T(r.SCISSOR_TEST):ne(r.SCISSOR_TEST)}function xe(H){H===void 0&&(H=r.TEXTURE0+ie-1),ue!==H&&(r.activeTexture(H),ue=H)}function Ne(H,Me,Ee){Ee===void 0&&(ue===null?Ee=r.TEXTURE0+ie-1:Ee=ue);let Pe=O[Ee];Pe===void 0&&(Pe={type:void 0,texture:void 0},O[Ee]=Pe),(Pe.type!==H||Pe.texture!==Me)&&(ue!==Ee&&(r.activeTexture(Ee),ue=Ee),r.bindTexture(H,Me||A[H]),Pe.type=H,Pe.texture=Me)}function U(){const H=O[ue];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{r.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{r.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{r.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{r.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{r.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{r.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{r.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(H){De.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function Xe(H){G.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),G.copy(H))}function ze(H,Me){let Ee=c.get(Me);Ee===void 0&&(Ee=new WeakMap,c.set(Me,Ee));let Pe=Ee.get(H);Pe===void 0&&(Pe=r.getUniformBlockIndex(Me,H.name),Ee.set(H,Pe))}function Ae(H,Me){const Pe=c.get(Me).get(H);l.get(Me)!==Pe&&(r.uniformBlockBinding(Me,Pe,H.__bindingPointIndex),l.set(Me,Pe))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ue=null,O={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,x=null,v=null,b=null,C=null,w=new lt(0,0,0),I=0,M=!1,y=null,N=null,F=null,$=null,Z=null,De.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:T,disable:ne,bindFramebuffer:se,drawBuffers:J,useProgram:fe,setBlending:V,setMaterial:W,setFlipSided:ee,setCullFace:D,setLineWidth:B,setPolygonOffset:L,setScissorTest:oe,activeTexture:xe,bindTexture:Ne,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:Te,texImage3D:Se,updateUBOMapping:ze,uniformBlockBinding:Ae,texStorage2D:ye,texStorage3D:Ue,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:Ce,scissor:be,viewport:Xe,reset:Ke}}function EM(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,E){return d?new OffscreenCanvas(U,E):Pl("canvas")}function g(U,E,q){let ae=1;const he=Ne(U);if((he.width>q||he.height>q)&&(ae=q/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(ae*he.width),Ce=Math.floor(ae*he.height);h===void 0&&(h=_(le,Ce));const ye=E?_(le,Ce):h;return ye.width=le,ye.height=Ce,ye.getContext("2d").drawImage(U,0,0,le,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+le+"x"+Ce+")."),ye}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){r.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(U,E,q,ae,he=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=E;if(E===r.RED&&(q===r.FLOAT&&(le=r.R32F),q===r.HALF_FLOAT&&(le=r.R16F),q===r.UNSIGNED_BYTE&&(le=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(le=r.R8UI),q===r.UNSIGNED_SHORT&&(le=r.R16UI),q===r.UNSIGNED_INT&&(le=r.R32UI),q===r.BYTE&&(le=r.R8I),q===r.SHORT&&(le=r.R16I),q===r.INT&&(le=r.R32I)),E===r.RG&&(q===r.FLOAT&&(le=r.RG32F),q===r.HALF_FLOAT&&(le=r.RG16F),q===r.UNSIGNED_BYTE&&(le=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(le=r.RG8UI),q===r.UNSIGNED_SHORT&&(le=r.RG16UI),q===r.UNSIGNED_INT&&(le=r.RG32UI),q===r.BYTE&&(le=r.RG8I),q===r.SHORT&&(le=r.RG16I),q===r.INT&&(le=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(le=r.RGB8UI),q===r.UNSIGNED_SHORT&&(le=r.RGB16UI),q===r.UNSIGNED_INT&&(le=r.RGB32UI),q===r.BYTE&&(le=r.RGB8I),q===r.SHORT&&(le=r.RGB16I),q===r.INT&&(le=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(le=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(le=r.RGBA16UI),q===r.UNSIGNED_INT&&(le=r.RGBA32UI),q===r.BYTE&&(le=r.RGBA8I),q===r.SHORT&&(le=r.RGBA16I),q===r.INT&&(le=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(le=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(le=r.R11F_G11F_B10F)),E===r.RGBA){const Ce=he?Cl:dt.getTransfer(ae);q===r.FLOAT&&(le=r.RGBA32F),q===r.HALF_FLOAT&&(le=r.RGBA16F),q===r.UNSIGNED_BYTE&&(le=Ce===_t?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function v(U,E){let q;return U?E===null||E===rs||E===ia?q=r.DEPTH24_STENCIL8:E===wi?q=r.DEPTH32F_STENCIL8:E===na&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rs||E===ia?q=r.DEPTH_COMPONENT24:E===wi?q=r.DEPTH_COMPONENT32F:E===na&&(q=r.DEPTH_COMPONENT16),q}function b(U,E){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Yn&&U.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function C(U){const E=U.target;E.removeEventListener("dispose",C),I(E),E.isVideoTexture&&u.delete(E)}function w(U){const E=U.target;E.removeEventListener("dispose",w),y(E)}function I(U){const E=n.get(U);if(E.__webglInit===void 0)return;const q=U.source,ae=f.get(q);if(ae){const he=ae[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&M(U),Object.keys(ae).length===0&&f.delete(q)}n.remove(U)}function M(U){const E=n.get(U);r.deleteTexture(E.__webglTexture);const q=U.source,ae=f.get(q);delete ae[E.__cacheKey],o.memory.textures--}function y(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let he=0;he<E.__webglFramebuffer[ae].length;he++)r.deleteFramebuffer(E.__webglFramebuffer[ae][he]);else r.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)r.deleteFramebuffer(E.__webglFramebuffer[ae]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=U.textures;for(let ae=0,he=q.length;ae<he;ae++){const le=n.get(q[ae]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(q[ae])}n.remove(U)}let N=0;function F(){N=0}function $(){const U=N;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),N+=1,U}function Z(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ie(U,E){const q=n.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const ae=U.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(q,U,E);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function te(U,E){const q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){A(q,U,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function K(U,E){const q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){A(q,U,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function k(U,E){const q=n.get(U);if(U.version>0&&q.__version!==U.version){T(q,U,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const ue={[uu]:r.REPEAT,[qr]:r.CLAMP_TO_EDGE,[hu]:r.MIRRORED_REPEAT},O={[Yn]:r.NEAREST,[jg]:r.NEAREST_MIPMAP_NEAREST,[Aa]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[nc]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},X={[n_]:r.NEVER,[l_]:r.ALWAYS,[i_]:r.LESS,[dp]:r.LEQUAL,[r_]:r.EQUAL,[a_]:r.GEQUAL,[s_]:r.GREATER,[o_]:r.NOTEQUAL};function de(U,E){if(E.type===wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===nc||E.magFilter===Aa||E.magFilter===Yr||E.minFilter===bi||E.minFilter===nc||E.minFilter===Aa||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ue[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ue[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ue[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,O[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,O[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,X[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yn||E.minFilter!==Aa&&E.minFilter!==Yr||E.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function De(U,E){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",C));const ae=E.source;let he=f.get(ae);he===void 0&&(he={},f.set(ae,he));const le=Z(E);if(le!==U.__cacheKey){he[le]===void 0&&(he[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[le].usedTimes++;const Ce=he[U.__cacheKey];Ce!==void 0&&(he[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(E)),U.__cacheKey=le,U.__webglTexture=he[le].texture}return q}function G(U,E,q){return Math.floor(Math.floor(U/q)/E)}function z(U,E,q,ae){const le=U.updateRanges;if(le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,ae,E.data);else{le.sort((Se,be)=>Se.start-be.start);let Ce=0;for(let Se=1;Se<le.length;Se++){const be=le[Ce],Xe=le[Se],ze=be.start+be.count,Ae=G(Xe.start,E.width,4),Ke=G(be.start,E.width,4);Xe.start<=ze+1&&Ae===Ke&&G(Xe.start+Xe.count-1,E.width,4)===Ae?be.count=Math.max(be.count,Xe.start+Xe.count-be.start):(++Ce,le[Ce]=Xe)}le.length=Ce+1;const ye=r.getParameter(r.UNPACK_ROW_LENGTH),Ue=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Se=0,be=le.length;Se<be;Se++){const Xe=le[Se],ze=Math.floor(Xe.start/4),Ae=Math.ceil(Xe.count/4),Ke=ze%E.width,H=Math.floor(ze/E.width),Me=Ae,Ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,Ke,H,Me,Ee,q,ae,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ye),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function A(U,E,q){let ae=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=r.TEXTURE_3D);const he=De(U,E),le=E.source;t.bindTexture(ae,U.__webglTexture,r.TEXTURE0+q);const Ce=n.get(le);if(le.version!==Ce.__version||he===!0){t.activeTexture(r.TEXTURE0+q);const ye=dt.getPrimaries(dt.workingColorSpace),Ue=E.colorSpace===ar?null:dt.getPrimaries(E.colorSpace),Te=E.colorSpace===ar||ye===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Se=g(E.image,!1,i.maxTextureSize);Se=xe(E,Se);const be=s.convert(E.format,E.colorSpace),Xe=s.convert(E.type);let ze=x(E.internalFormat,be,Xe,E.colorSpace,E.isVideoTexture);de(ae,E);let Ae;const Ke=E.mipmaps,H=E.isVideoTexture!==!0,Me=Ce.__version===void 0||he===!0,Ee=le.dataReady,Pe=b(E,Se);if(E.isDepthTexture)ze=v(E.format===sa,E.type),Me&&(H?t.texStorage2D(r.TEXTURE_2D,1,ze,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,be,Xe,null));else if(E.isDataTexture)if(Ke.length>0){H&&Me&&t.texStorage2D(r.TEXTURE_2D,Pe,ze,Ke[0].width,Ke[0].height);for(let ve=0,pe=Ke.length;ve<pe;ve++)Ae=Ke[ve],H?Ee&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,be,Xe,Ae.data):t.texImage2D(r.TEXTURE_2D,ve,ze,Ae.width,Ae.height,0,be,Xe,Ae.data);E.generateMipmaps=!1}else H?(Me&&t.texStorage2D(r.TEXTURE_2D,Pe,ze,Se.width,Se.height),Ee&&z(E,Se,be,Xe)):t.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,be,Xe,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,ze,Ke[0].width,Ke[0].height,Se.depth);for(let ve=0,pe=Ke.length;ve<pe;ve++)if(Ae=Ke[ve],E.format!==gi)if(be!==null)if(H){if(Ee)if(E.layerUpdates.size>0){const Fe=$f(Ae.width,Ae.height,E.format,E.type);for(const Ye of E.layerUpdates){const ht=Ae.data.subarray(Ye*Fe/Ae.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Ye,Ae.width,Ae.height,1,be,ht)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,be,Ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ze,Ae.width,Ae.height,Se.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Se.depth,be,Xe,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,ze,Ae.width,Ae.height,Se.depth,0,be,Xe,Ae.data)}else{H&&Me&&t.texStorage2D(r.TEXTURE_2D,Pe,ze,Ke[0].width,Ke[0].height);for(let ve=0,pe=Ke.length;ve<pe;ve++)Ae=Ke[ve],E.format!==gi?be!==null?H?Ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,be,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,be,Xe,Ae.data):t.texImage2D(r.TEXTURE_2D,ve,ze,Ae.width,Ae.height,0,be,Xe,Ae.data)}else if(E.isDataArrayTexture)if(H){if(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,ze,Se.width,Se.height,Se.depth),Ee)if(E.layerUpdates.size>0){const ve=$f(Se.width,Se.height,E.format,E.type);for(const pe of E.layerUpdates){const Fe=Se.data.subarray(pe*ve/Se.data.BYTES_PER_ELEMENT,(pe+1)*ve/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,be,Xe,Fe)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,be,Xe,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Se.width,Se.height,Se.depth,0,be,Xe,Se.data);else if(E.isData3DTexture)H?(Me&&t.texStorage3D(r.TEXTURE_3D,Pe,ze,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,be,Xe,Se.data)):t.texImage3D(r.TEXTURE_3D,0,ze,Se.width,Se.height,Se.depth,0,be,Xe,Se.data);else if(E.isFramebufferTexture){if(Me)if(H)t.texStorage2D(r.TEXTURE_2D,Pe,ze,Se.width,Se.height);else{let ve=Se.width,pe=Se.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,ze,ve,pe,0,be,Xe,null),ve>>=1,pe>>=1}}else if(Ke.length>0){if(H&&Me){const ve=Ne(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Pe,ze,ve.width,ve.height)}for(let ve=0,pe=Ke.length;ve<pe;ve++)Ae=Ke[ve],H?Ee&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,be,Xe,Ae):t.texImage2D(r.TEXTURE_2D,ve,ze,be,Xe,Ae);E.generateMipmaps=!1}else if(H){if(Me){const ve=Ne(Se);t.texStorage2D(r.TEXTURE_2D,Pe,ze,ve.width,ve.height)}Ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,Xe,Se)}else t.texImage2D(r.TEXTURE_2D,0,ze,be,Xe,Se);m(E)&&p(ae),Ce.__version=le.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function T(U,E,q){if(E.image.length!==6)return;const ae=De(U,E),he=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+q);const le=n.get(he);if(he.version!==le.__version||ae===!0){t.activeTexture(r.TEXTURE0+q);const Ce=dt.getPrimaries(dt.workingColorSpace),ye=E.colorSpace===ar?null:dt.getPrimaries(E.colorSpace),Ue=E.colorSpace===ar||Ce===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Te=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!Te&&!Se?be[pe]=g(E.image[pe],!0,i.maxCubemapSize):be[pe]=Se?E.image[pe].image:E.image[pe],be[pe]=xe(E,be[pe]);const Xe=be[0],ze=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Ke=x(E.internalFormat,ze,Ae,E.colorSpace),H=E.isVideoTexture!==!0,Me=le.__version===void 0||ae===!0,Ee=he.dataReady;let Pe=b(E,Xe);de(r.TEXTURE_CUBE_MAP,E);let ve;if(Te){H&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,Ke,Xe.width,Xe.height);for(let pe=0;pe<6;pe++){ve=be[pe].mipmaps;for(let Fe=0;Fe<ve.length;Fe++){const Ye=ve[Fe];E.format!==gi?ze!==null?H?Ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,0,0,Ye.width,Ye.height,ze,Ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,Ke,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,0,0,Ye.width,Ye.height,ze,Ae,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe,Ke,Ye.width,Ye.height,0,ze,Ae,Ye.data)}}}else{if(ve=E.mipmaps,H&&Me){ve.length>0&&Pe++;const pe=Ne(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,Ke,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){H?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,ze,Ae,be[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ke,be[pe].width,be[pe].height,0,ze,Ae,be[pe].data);for(let Fe=0;Fe<ve.length;Fe++){const ht=ve[Fe].image[pe].image;H?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,0,0,ht.width,ht.height,ze,Ae,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,Ke,ht.width,ht.height,0,ze,Ae,ht.data)}}else{H?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze,Ae,be[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ke,ze,Ae,be[pe]);for(let Fe=0;Fe<ve.length;Fe++){const Ye=ve[Fe];H?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,0,0,ze,Ae,Ye.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe+1,Ke,ze,Ae,Ye.image[pe])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),le.__version=he.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ne(U,E,q,ae,he,le){const Ce=s.convert(q.format,q.colorSpace),ye=s.convert(q.type),Ue=x(q.internalFormat,Ce,ye,q.colorSpace),Te=n.get(E),Se=n.get(q);if(Se.__renderTarget=E,!Te.__hasExternalTextures){const be=Math.max(1,E.width>>le),Xe=Math.max(1,E.height>>le);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,le,Ue,be,Xe,E.depth,0,Ce,ye,null):t.texImage2D(he,le,Ue,be,Xe,0,Ce,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),L(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,he,Se.__webglTexture,0,B(E)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,he,Se.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(U,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const ae=E.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,le=v(E.stencilBuffer,he),Ce=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=B(E);L(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,le,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,le,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,le,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,U)}else{const ae=E.textures;for(let he=0;he<ae.length;he++){const le=ae[he],Ce=s.convert(le.format,le.colorSpace),ye=s.convert(le.type),Ue=x(le.internalFormat,Ce,ye,le.colorSpace),Te=B(E);q&&L(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,Ue,E.width,E.height):L(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,Ue,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ue,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function J(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(E.depthTexture);ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);const he=ae.__webglTexture,le=B(E);if(E.depthTexture.format===ra)L(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0);else if(E.depthTexture.format===sa)L(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0,le):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function fe(U){const E=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ae}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ae=U.texture.mipmaps;ae&&ae.length>0?J(E.__webglFramebuffer[0],U):J(E.__webglFramebuffer,U)}else if(q){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=r.createRenderbuffer(),se(E.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,le)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),se(E.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,le)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(U,E,q){const ae=n.get(U);E!==void 0&&ne(ae.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&fe(U)}function P(U){const E=U.texture,q=n.get(U),ae=n.get(E);U.addEventListener("dispose",w);const he=U.textures,le=U.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=E.version,o.memory.textures++),le){q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ye]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)q.__webglFramebuffer[ye][Ue]=r.createFramebuffer()}else q.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)q.__webglFramebuffer[ye]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let ye=0,Ue=he.length;ye<Ue;ye++){const Te=n.get(he[ye]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&L(U)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const Ue=he[ye];q.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ye]);const Te=s.convert(Ue.format,Ue.colorSpace),Se=s.convert(Ue.type),be=x(Ue.internalFormat,Te,Se,Ue.colorSpace,U.isXRRenderTarget===!0),Xe=B(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,be,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,q.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),se(q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),de(r.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)ne(q.__webglFramebuffer[ye][Ue],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue);else ne(q.__webglFramebuffer[ye],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ye=0,Ue=he.length;ye<Ue;ye++){const Te=he[ye],Se=n.get(Te);let be=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,Se.__webglTexture),de(be,Te),ne(q.__webglFramebuffer,U,Te,r.COLOR_ATTACHMENT0+ye,be,0),m(Te)&&p(be)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ye=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,ae.__webglTexture),de(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)ne(q.__webglFramebuffer[Ue],U,E,r.COLOR_ATTACHMENT0,ye,Ue);else ne(q.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,ye,0);m(E)&&p(ye),t.unbindTexture()}U.depthBuffer&&fe(U)}function V(U){const E=U.textures;for(let q=0,ae=E.length;q<ae;q++){const he=E[q];if(m(he)){const le=S(U),Ce=n.get(he).__webglTexture;t.bindTexture(le,Ce),p(le),t.unbindTexture()}}}const W=[],ee=[];function D(U){if(U.samples>0){if(L(U)===!1){const E=U.textures,q=U.width,ae=U.height;let he=r.COLOR_BUFFER_BIT;const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(U),ye=E.length>1;if(ye)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ue=U.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const Se=n.get(E[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,q,ae,0,0,q,ae,he,r.NEAREST),l===!0&&(W.length=0,ee.length=0,W.push(r.COLOR_ATTACHMENT0+Te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(W.push(le),ee.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const Se=n.get(E[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function B(U){return Math.min(i.maxSamples,U.samples)}function L(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(U){const E=o.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function xe(U,E){const q=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==no&&q!==ar&&(dt.getTransfer(q)===_t?(ae!==gi||he!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ne(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=te,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=_e,this.setupRenderTarget=P,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=L}function TM(r,e){function t(n,i=ar){let s;const o=dt.getTransfer(i);if(n===Di)return r.UNSIGNED_BYTE;if(n===yh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===cp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===op)return r.BYTE;if(n===ap)return r.SHORT;if(n===na)return r.UNSIGNED_SHORT;if(n===xh)return r.INT;if(n===rs)return r.UNSIGNED_INT;if(n===wi)return r.FLOAT;if(n===Ma)return r.HALF_FLOAT;if(n===up)return r.ALPHA;if(n===hp)return r.RGB;if(n===gi)return r.RGBA;if(n===ra)return r.DEPTH_COMPONENT;if(n===sa)return r.DEPTH_STENCIL;if(n===Mh)return r.RED;if(n===Eh)return r.RED_INTEGER;if(n===fp)return r.RG;if(n===Th)return r.RG_INTEGER;if(n===bh)return r.RGBA_INTEGER;if(n===fl||n===dl||n===pl||n===ml)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===_u||n===vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gu||n===_u)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xu||n===yu||n===Su||n===Mu||n===Eu||n===Tu||n===bu||n===wu||n===Au||n===Cu||n===Ru||n===Pu||n===Lu||n===Du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ru)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Iu||n===Uu||n===Nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Iu)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ou||n===Fu||n===Bu||n===ku)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ou)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
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

}`;class AM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sr({vertexShader:bM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Yl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CM extends po{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new AM,p={},S=t.getContextAttributes();let x=null,v=null;const b=[],C=[],w=new ge;let I=null;const M=new Hn;M.viewport=new vt;const y=new Hn;y.viewport=new vt;const N=[M,y],F=new $0;let $=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let T=b[A];return T===void 0&&(T=new Tc,b[A]=T),T.getTargetRaySpace()},this.getControllerGrip=function(A){let T=b[A];return T===void 0&&(T=new Tc,b[A]=T),T.getGripSpace()},this.getHand=function(A){let T=b[A];return T===void 0&&(T=new Tc,b[A]=T),T.getHandSpace()};function ie(A){const T=C.indexOf(A.inputSource);if(T===-1)return;const ne=b[T];ne!==void 0&&(ne.update(A.inputSource,A.frame,c||o),ne.dispatchEvent({type:A.type,data:A.inputSource}))}function te(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",K);for(let A=0;A<b.length;A++){const T=C[A];T!==null&&(C[A]=null,b[A].disconnect(T))}$=null,Z=null,m.reset();for(const A in p)delete p[A];e.setRenderTarget(x),d=null,f=null,h=null,i=null,v=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){s=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",te),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,se=null,J=null;S.depth&&(J=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?sa:ra,se=S.stencil?ia:rs);const fe={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ss(f.textureWidth,f.textureHeight,{format:gi,type:Di,depthTexture:new bp(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ss(d.framebufferWidth,d.framebufferHeight,{format:gi,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(A){for(let T=0;T<A.removed.length;T++){const ne=A.removed[T],se=C.indexOf(ne);se>=0&&(C[se]=null,b[se].disconnect(ne))}for(let T=0;T<A.added.length;T++){const ne=A.added[T];let se=C.indexOf(ne);if(se===-1){for(let fe=0;fe<b.length;fe++)if(fe>=C.length){C.push(ne),se=fe;break}else if(C[fe]===null){C[fe]=ne,se=fe;break}if(se===-1)break}const J=b[se];J&&J.connect(ne)}}const k=new Q,ue=new Q;function O(A,T,ne){k.setFromMatrixPosition(T.matrixWorld),ue.setFromMatrixPosition(ne.matrixWorld);const se=k.distanceTo(ue),J=T.projectionMatrix.elements,fe=ne.projectionMatrix.elements,_e=J[14]/(J[10]-1),P=J[14]/(J[10]+1),V=(J[9]+1)/J[5],W=(J[9]-1)/J[5],ee=(J[8]-1)/J[0],D=(fe[8]+1)/fe[0],B=_e*ee,L=_e*D,oe=se/(-ee+D),xe=oe*-ee;if(T.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(xe),A.translateZ(oe),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),J[10]===-1)A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{const Ne=_e+oe,U=P+oe,E=B-xe,q=L+(se-xe),ae=V*P/U*Ne,he=W*P/U*Ne;A.projectionMatrix.makePerspective(E,q,ae,he,Ne,U),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function X(A,T){T===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(T.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;let T=A.near,ne=A.far;m.texture!==null&&(m.depthNear>0&&(T=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),F.near=y.near=M.near=T,F.far=y.far=M.far=ne,($!==F.near||Z!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),$=F.near,Z=F.far),F.layers.mask=A.layers.mask|6,M.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const se=A.parent,J=F.cameras;X(F,se);for(let fe=0;fe<J.length;fe++)X(J[fe],se);J.length===2?O(F,M,y):F.projectionMatrix.copy(M.projectionMatrix),de(A,F,se)};function de(A,T,ne){ne===null?A.matrix.copy(T.matrixWorld):(A.matrix.copy(ne.matrixWorld),A.matrix.invert(),A.matrix.multiply(T.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(T.projectionMatrix),A.projectionMatrixInverse.copy(T.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=oa*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(A){l=A,f!==null&&(f.fixedFoveation=A),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=A)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(A){return p[A]};let De=null;function G(A,T){if(u=T.getViewerPose(c||o),_=T,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let se=!1;ne.length!==F.cameras.length&&(F.cameras.length=0,se=!0);for(let P=0;P<ne.length;P++){const V=ne[P];let W=null;if(d!==null)W=d.getViewport(V);else{const D=h.getViewSubImage(f,V);W=D.viewport,P===0&&(e.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(v))}let ee=N[P];ee===void 0&&(ee=new Hn,ee.layers.enable(P),ee.viewport=new vt,N[P]=ee),ee.matrix.fromArray(V.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(V.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(W.x,W.y,W.width,W.height),P===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),se===!0&&F.cameras.push(ee)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const P=h.getDepthInformation(ne[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(J&&J.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<ne.length;P++){const V=ne[P].camera;if(V){let W=p[V];W||(W=new wp,p[V]=W);const ee=h.getCameraImage(V);W.sourceTexture=ee}}}}for(let ne=0;ne<b.length;ne++){const se=C[ne],J=b[ne];se!==null&&J!==void 0&&J.update(se,T,c||o)}De&&De(A,T),T.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:T}),_=null}const z=new Bp;z.setAnimationLoop(G),this.setAnimationLoop=function(A){De=A},this.dispose=function(){}}}const Nr=new vi,RM=new Et;function PM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,Nr.copy(v),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(Nr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function LM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=i[S.id];v===void 0&&(_(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(S,b);const C=e.render.frame;s[S.id]!==C&&(f(S),s[S.id]=C)}function u(S){const x=h();S.__bindingPointIndex=x;const v=r.createBuffer(),b=S.__size,C=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,b,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],v=S.uniforms,b=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,w=v.length;C<w;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,y=I.length;M<y;M++){const N=I[M];if(d(N,C,M,b)===!0){const F=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let Z=0;for(let ie=0;ie<$.length;ie++){const te=$[ie],K=g(te);typeof te=="number"||typeof te=="boolean"?(N.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,F+Z,N.__data)):te.isMatrix3?(N.__data[0]=te.elements[0],N.__data[1]=te.elements[1],N.__data[2]=te.elements[2],N.__data[3]=0,N.__data[4]=te.elements[3],N.__data[5]=te.elements[4],N.__data[6]=te.elements[5],N.__data[7]=0,N.__data[8]=te.elements[6],N.__data[9]=te.elements[7],N.__data[10]=te.elements[8],N.__data[11]=0):(te.toArray(N.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,v,b){const C=S.value,w=x+"_"+v;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const I=b[w];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return b[w]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(S){const x=S.uniforms;let v=0;const b=16;for(let w=0,I=x.length;w<I;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,N=M.length;y<N;y++){const F=M[y],$=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,ie=$.length;Z<ie;Z++){const te=$[Z],K=g(te),k=v%b,ue=k%K.boundary,O=k+ue;v+=ue,O!==0&&b-O<K.storage&&(v+=b-O),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=K.storage}}}const C=v%b;return C>0&&(v+=b-C),S.__size=v,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class DM{constructor(e={}){const{canvas:t=b_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=kn;let C=0,w=0,I=null,M=-1,y=null;const N=new vt,F=new vt;let $=null;const Z=new lt(0);let ie=0,te=t.width,K=t.height,k=1,ue=null,O=null;const X=new vt(0,0,te,K),de=new vt(0,0,te,K);let De=!1;const G=new Rh;let z=!1,A=!1;const T=new Et,ne=new Q,se=new vt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function _e(){return I===null?k:1}let P=n;function V(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),P===null){const Y="webgl2";if(P=V(Y,R),P===null)throw V(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let W,ee,D,B,L,oe,xe,Ne,U,E,q,ae,he,le,Ce,ye,Ue,Te,Se,be,Xe,ze,Ae,Ke;function H(){W=new Vy(P),W.init(),ze=new TM(P,W),ee=new Ny(P,W,e,ze),D=new MM(P,W),ee.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),B=new Xy(P),L=new cM,oe=new EM(P,W,D,L,ee,ze,B),xe=new Fy(v),Ne=new Hy(v),U=new J0(P),Ae=new Iy(P,U),E=new Gy(P,U,B,Ae),q=new Yy(P,E,U,B),Se=new qy(P,ee,oe),ye=new Oy(L),ae=new lM(v,xe,Ne,W,ee,Ae,ye),he=new PM(v,L),le=new hM,Ce=new _M(W),Te=new Dy(v,xe,Ne,D,q,d,l),Ue=new yM(v,q,ee),Ke=new LM(P,B,ee,D),be=new Uy(P,W,B),Xe=new Wy(P,W,B),B.programs=ae.programs,v.capabilities=ee,v.extensions=W,v.properties=L,v.renderLists=le,v.shadowMap=Ue,v.state=D,v.info=B}H();const Me=new CM(v,P);this.xr=Me,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=W.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=W.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(te,K,!1))},this.getSize=function(R){return R.set(te,K)},this.setSize=function(R,Y,re=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,K=Y,t.width=Math.floor(R*k),t.height=Math.floor(Y*k),re===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(te*k,K*k).floor()},this.setDrawingBufferSize=function(R,Y,re){te=R,K=Y,k=re,t.width=Math.floor(R*re),t.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,Y,re,ce){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,Y,re,ce),D.viewport(N.copy(X).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,Y,re,ce){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,Y,re,ce),D.scissor(F.copy(de).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){D.setScissorTest(De=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,re=!0){let ce=0;if(R){let j=!1;if(I!==null){const me=I.texture.format;j=me===bh||me===Th||me===Eh}if(j){const me=I.texture.type,we=me===Di||me===rs||me===na||me===ia||me===yh||me===Sh,Be=Te.getClearColor(),Oe=Te.getClearAlpha(),qe=Be.r,Ge=Be.g,Ve=Be.b;we?(_[0]=qe,_[1]=Ge,_[2]=Ve,_[3]=Oe,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=qe,g[1]=Ge,g[2]=Ve,g[3]=Oe,P.clearBufferiv(P.COLOR,0,g))}else ce|=P.COLOR_BUFFER_BIT}Y&&(ce|=P.DEPTH_BUFFER_BIT),re&&(ce|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Te.dispose(),le.dispose(),Ce.dispose(),L.dispose(),xe.dispose(),Ne.dispose(),q.dispose(),Ae.dispose(),Ke.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",et),Me.removeEventListener("sessionend",Re),$e.stop()};function Ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=B.autoReset,Y=Ue.enabled,re=Ue.autoUpdate,ce=Ue.needsUpdate,j=Ue.type;H(),B.autoReset=R,Ue.enabled=Y,Ue.autoUpdate=re,Ue.needsUpdate=ce,Ue.type=j}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const Y=R.target;Y.removeEventListener("dispose",pe),Fe(Y)}function Fe(R){Ye(R),L.remove(R)}function Ye(R){const Y=L.get(R).programs;Y!==void 0&&(Y.forEach(function(re){ae.releaseProgram(re)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,ce,j,me){Y===null&&(Y=J);const we=j.isMesh&&j.matrixWorld.determinant()<0,Be=mt(R,Y,re,ce,j);D.setMaterial(ce,we);let Oe=re.index,qe=1;if(ce.wireframe===!0){if(Oe=E.getWireframeAttribute(re),Oe===void 0)return;qe=2}const Ge=re.drawRange,Ve=re.attributes.position;let tt=Ge.start*qe,ct=(Ge.start+Ge.count)*qe;me!==null&&(tt=Math.max(tt,me.start*qe),ct=Math.min(ct,(me.start+me.count)*qe)),Oe!==null?(tt=Math.max(tt,0),ct=Math.min(ct,Oe.count)):Ve!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,Ve.count));const Nt=ct-tt;if(Nt<0||Nt===1/0)return;Ae.setup(j,ce,Be,re,Oe);let wt,yt=be;if(Oe!==null&&(wt=U.get(Oe),yt=Xe,yt.setIndex(wt)),j.isMesh)ce.wireframe===!0?(D.setLineWidth(ce.wireframeLinewidth*_e()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(j.isLine){let Ze=ce.linewidth;Ze===void 0&&(Ze=1),D.setLineWidth(Ze*_e()),j.isLineSegments?yt.setMode(P.LINES):j.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else j.isPoints?yt.setMode(P.POINTS):j.isSprite&&yt.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)aa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ze=j._multiDrawStarts,Rt=j._multiDrawCounts,ft=j._multiDrawCount,In=Oe?U.get(Oe).bytesPerElement:1,ds=L.get(ce).currentProgram.getUniforms();for(let Un=0;Un<ft;Un++)ds.setValue(P,"_gl_DrawID",Un),yt.render(Ze[Un]/In,Rt[Un])}else if(j.isInstancedMesh)yt.renderInstances(tt,Nt,j.count);else if(re.isInstancedBufferGeometry){const Ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Rt=Math.min(re.instanceCount,Ze);yt.renderInstances(tt,Nt,Rt)}else yt.render(tt,Nt)};function ht(R,Y,re){R.transparent===!0&&R.side===Wi&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Bt(R,Y,re),R.side=yr,R.needsUpdate=!0,Bt(R,Y,re),R.side=Wi):Bt(R,Y,re)}this.compile=function(R,Y,re=null){re===null&&(re=R),p=Ce.get(re),p.init(Y),x.push(p),re.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),R!==re&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const ce=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const me=j.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Be=me[we];ht(Be,re,j),ce.add(Be)}else ht(me,re,j),ce.add(me)}),p=x.pop(),ce},this.compileAsync=function(R,Y,re=null){const ce=this.compile(R,Y,re);return new Promise(j=>{function me(){if(ce.forEach(function(we){L.get(we).currentProgram.isReady()&&ce.delete(we)}),ce.size===0){j(R);return}setTimeout(me,10)}W.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ie=null;function He(R){Ie&&Ie(R)}function et(){$e.stop()}function Re(){$e.start()}const $e=new Bp;$e.setAnimationLoop(He),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(R){Ie=R,Me.setAnimationLoop(R),R===null?$e.stop():$e.start()},Me.addEventListener("sessionstart",et),Me.addEventListener("sessionend",Re),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(Y),Y=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,I),p=Ce.get(R,x.length),p.init(Y),x.push(p),T.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G.setFromProjectionMatrix(T,Ai,Y.reversedDepth),A=this.localClippingEnabled,z=ye.init(this.clippingPlanes,A),m=le.get(R,S.length),m.init(),S.push(m),Me.enabled===!0&&Me.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&We(me,Y,-1/0,v.sortObjects)}We(R,Y,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,O),fe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,fe&&Te.addToRenderList(m,R),this.info.render.frame++,z===!0&&ye.beginShadows();const re=p.state.shadowsArray;Ue.render(re,R,Y),z===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,j=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const me=Y.cameras;if(j.length>0)for(let we=0,Be=me.length;we<Be;we++){const Oe=me[we];Ft(ce,j,R,Oe)}fe&&Te.render(R);for(let we=0,Be=me.length;we<Be;we++){const Oe=me[we];je(m,R,Oe,Oe.viewport)}}else j.length>0&&Ft(ce,j,R,Y),fe&&Te.render(R),je(m,R,Y);I!==null&&w===0&&(oe.updateMultisampleRenderTarget(I),oe.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(v,R,Y),Ae.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],z===!0&&ye.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function We(R,Y,re,ce){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){ce&&se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(T);const we=q.update(R),Be=R.material;Be.visible&&m.push(R,we,Be,re,se.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const we=q.update(R),Be=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),se.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),se.copy(we.boundingSphere.center)),se.applyMatrix4(R.matrixWorld).applyMatrix4(T)),Array.isArray(Be)){const Oe=we.groups;for(let qe=0,Ge=Oe.length;qe<Ge;qe++){const Ve=Oe[qe],tt=Be[Ve.materialIndex];tt&&tt.visible&&m.push(R,we,tt,re,se.z,Ve)}}else Be.visible&&m.push(R,we,Be,re,se.z,null)}}const me=R.children;for(let we=0,Be=me.length;we<Be;we++)We(me[we],Y,re,ce)}function je(R,Y,re,ce){const j=R.opaque,me=R.transmissive,we=R.transparent;p.setupLightsView(re),z===!0&&ye.setGlobalState(v.clippingPlanes,re),ce&&D.viewport(N.copy(ce)),j.length>0&&nt(j,Y,re),me.length>0&&nt(me,Y,re),we.length>0&&nt(we,Y,re),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Ft(R,Y,re,ce){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new ss(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Ma:Di,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const me=p.state.transmissionRenderTarget[ce.id],we=ce.viewport||N;me.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Be=v.getRenderTarget(),Oe=v.getActiveCubeFace(),qe=v.getActiveMipmapLevel();v.setRenderTarget(me),v.getClearColor(Z),ie=v.getClearAlpha(),ie<1&&v.setClearColor(16777215,.5),v.clear(),fe&&Te.render(re);const Ge=v.toneMapping;v.toneMapping=gr;const Ve=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),z===!0&&ye.setGlobalState(v.clippingPlanes,ce),nt(R,re,ce),oe.updateMultisampleRenderTarget(me),oe.updateRenderTargetMipmap(me),W.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ct=0,Nt=Y.length;ct<Nt;ct++){const wt=Y[ct],yt=wt.object,Ze=wt.geometry,Rt=wt.material,ft=wt.group;if(Rt.side===Wi&&yt.layers.test(ce.layers)){const In=Rt.side;Rt.side=Mn,Rt.needsUpdate=!0,At(yt,re,ce,Ze,Rt,ft),Rt.side=In,Rt.needsUpdate=!0,tt=!0}}tt===!0&&(oe.updateMultisampleRenderTarget(me),oe.updateRenderTargetMipmap(me))}v.setRenderTarget(Be,Oe,qe),v.setClearColor(Z,ie),Ve!==void 0&&(ce.viewport=Ve),v.toneMapping=Ge}function nt(R,Y,re){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,me=R.length;j<me;j++){const we=R[j],Be=we.object,Oe=we.geometry,qe=we.group;let Ge=we.material;Ge.allowOverride===!0&&ce!==null&&(Ge=ce),Be.layers.test(re.layers)&&At(Be,Y,re,Oe,Ge,qe)}}function At(R,Y,re,ce,j,me){R.onBeforeRender(v,Y,re,ce,j,me),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,Y,re,ce,R,me),j.transparent===!0&&j.side===Wi&&j.forceSinglePass===!1?(j.side=Mn,j.needsUpdate=!0,v.renderBufferDirect(re,Y,ce,j,R,me),j.side=yr,j.needsUpdate=!0,v.renderBufferDirect(re,Y,ce,j,R,me),j.side=Wi):v.renderBufferDirect(re,Y,ce,j,R,me),R.onAfterRender(v,Y,re,ce,j,me)}function Bt(R,Y,re){Y.isScene!==!0&&(Y=J);const ce=L.get(R),j=p.state.lights,me=p.state.shadowsArray,we=j.state.version,Be=ae.getParameters(R,j.state,me,Y,re),Oe=ae.getProgramCacheKey(Be);let qe=ce.programs;ce.environment=R.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(R.isMeshStandardMaterial?Ne:xe).get(R.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",pe),qe=new Map,ce.programs=qe);let Ge=qe.get(Oe);if(Ge!==void 0){if(ce.currentProgram===Ge&&ce.lightsStateVersion===we)return xt(R,Be),Ge}else Be.uniforms=ae.getUniforms(R),R.onBeforeCompile(Be,v),Ge=ae.acquireProgram(Be,Oe),qe.set(Oe,Ge),ce.uniforms=Be.uniforms;const Ve=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=ye.uniform),xt(R,Be),ce.needsLights=bt(R),ce.lightsStateVersion=we,ce.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMap.value=j.state.directionalShadowMap,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotShadowMap.value=j.state.spotShadowMap,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMap.value=j.state.pointShadowMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),ce.currentProgram=Ge,ce.uniformsList=null,Ge}function Tt(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=gl.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function xt(R,Y){const re=L.get(R);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function mt(R,Y,re,ce,j){Y.isScene!==!0&&(Y=J),oe.resetTextureUnits();const me=Y.fog,we=ce.isMeshStandardMaterial?Y.environment:null,Be=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:no,Oe=(ce.isMeshStandardMaterial?Ne:xe).get(ce.envMap||we),qe=ce.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ge=!!re.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ve=!!re.morphAttributes.position,tt=!!re.morphAttributes.normal,ct=!!re.morphAttributes.color;let Nt=gr;ce.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,yt=wt!==void 0?wt.length:0,Ze=L.get(ce),Rt=p.state.lights;if(z===!0&&(A===!0||R!==y)){const dn=R===y&&ce.id===M;ye.setState(ce,R,dn)}let ft=!1;ce.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Rt.state.version||Ze.outputColorSpace!==Be||j.isBatchedMesh&&Ze.batching===!1||!j.isBatchedMesh&&Ze.batching===!0||j.isBatchedMesh&&Ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ze.instancing===!1||!j.isInstancedMesh&&Ze.instancing===!0||j.isSkinnedMesh&&Ze.skinning===!1||!j.isSkinnedMesh&&Ze.skinning===!0||j.isInstancedMesh&&Ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ze.instancingMorph===!1&&j.morphTexture!==null||Ze.envMap!==Oe||ce.fog===!0&&Ze.fog!==me||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ye.numPlanes||Ze.numIntersection!==ye.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Ge||Ze.morphTargets!==Ve||Ze.morphNormals!==tt||Ze.morphColors!==ct||Ze.toneMapping!==Nt||Ze.morphTargetsCount!==yt)&&(ft=!0):(ft=!0,Ze.__version=ce.version);let In=Ze.currentProgram;ft===!0&&(In=Bt(ce,Y,j));let ds=!1,Un=!1,vo=!1;const Pt=In.getUniforms(),Qn=Ze.uniforms;if(D.useProgram(In.program)&&(ds=!0,Un=!0,vo=!0),ce.id!==M&&(M=ce.id,Un=!0),ds||y!==R){D.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(P,"projectionMatrix",R.projectionMatrix),Pt.setValue(P,"viewMatrix",R.matrixWorldInverse);const Tn=Pt.map.cameraPosition;Tn!==void 0&&Tn.setValue(P,ne.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&Pt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Pt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Un=!0,vo=!0)}if(j.isSkinnedMesh){Pt.setOptional(P,j,"bindMatrix"),Pt.setOptional(P,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Pt.setValue(P,"boneTexture",dn.boneTexture,oe))}j.isBatchedMesh&&(Pt.setOptional(P,j,"batchingTexture"),Pt.setValue(P,"batchingTexture",j._matricesTexture,oe),Pt.setOptional(P,j,"batchingIdTexture"),Pt.setValue(P,"batchingIdTexture",j._indirectTexture,oe),Pt.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(P,"batchingColorTexture",j._colorsTexture,oe));const ei=re.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Se.update(j,re,In),(Un||Ze.receiveShadow!==j.receiveShadow)&&(Ze.receiveShadow=j.receiveShadow,Pt.setValue(P,"receiveShadow",j.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Qn.envMap.value=Oe,Qn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(Qn.envMapIntensity.value=Y.environmentIntensity),Un&&(Pt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Dn(Qn,vo),me&&ce.fog===!0&&he.refreshFogUniforms(Qn,me),he.refreshMaterialUniforms(Qn,ce,k,K,p.state.transmissionRenderTarget[R.id]),gl.upload(P,Tt(Ze),Qn,oe)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(gl.upload(P,Tt(Ze),Qn,oe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Pt.setValue(P,"center",j.center),Pt.setValue(P,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(P,"normalMatrix",j.normalMatrix),Pt.setValue(P,"modelMatrix",j.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const dn=ce.uniformsGroups;for(let Tn=0,tc=dn.length;Tn<tc;Tn++){const Cr=dn[Tn];Ke.update(Cr,In),Ke.bind(Cr,In)}}return In}function Dn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function bt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,Y,re){const ce=L.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),L.get(R.texture).__webglTexture=Y,L.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:re,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const re=L.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const fn=P.createFramebuffer();this.setRenderTarget=function(R,Y=0,re=0){I=R,C=Y,w=re;let ce=!0,j=null,me=!1,we=!1;if(R){const Oe=L.get(R);if(Oe.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(P.FRAMEBUFFER,null),ce=!1;else if(Oe.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Oe.__hasExternalTextures)oe.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Oe.__boundDepthTexture!==Ve){if(Ve!==null&&L.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(we=!0);const Ge=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?j=Ge[Y][re]:j=Ge[Y],me=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?j=L.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?j=Ge[re]:j=Ge,N.copy(R.viewport),F.copy(R.scissor),$=R.scissorTest}else N.copy(X).multiplyScalar(k).floor(),F.copy(de).multiplyScalar(k).floor(),$=De;if(re!==0&&(j=fn),D.bindFramebuffer(P.FRAMEBUFFER,j)&&ce&&D.drawBuffers(R,j),D.viewport(N),D.scissor(F),D.setScissorTest($),me){const Oe=L.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,re)}else if(we){const Oe=Y;for(let qe=0;qe<R.textures.length;qe++){const Ge=L.get(R.textures[qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qe,Ge.__webglTexture,re,Oe)}}else if(R!==null&&re!==0){const Oe=L.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oe.__webglTexture,re)}M=-1},this.readRenderTargetPixels=function(R,Y,re,ce,j,me,we,Be=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe){D.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const qe=R.textures[Be],Ge=qe.format,Ve=qe.type;if(!ee.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ce&&re>=0&&re<=R.height-j&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),P.readPixels(Y,re,ce,j,ze.convert(Ge),ze.convert(Ve),me))}finally{const qe=I!==null?L.get(I).__webglFramebuffer:null;D.bindFramebuffer(P.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,re,ce,j,me,we,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Oe=Oe[we]),Oe)if(Y>=0&&Y<=R.width-ce&&re>=0&&re<=R.height-j){D.bindFramebuffer(P.FRAMEBUFFER,Oe);const qe=R.textures[Be],Ge=qe.format,Ve=qe.type;if(!ee.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be),P.readPixels(Y,re,ce,j,ze.convert(Ge),ze.convert(Ve),0);const ct=I!==null?L.get(I).__webglFramebuffer:null;D.bindFramebuffer(P.FRAMEBUFFER,ct);const Nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await w_(P,Nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.deleteBuffer(tt),P.deleteSync(Nt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,re=0){const ce=Math.pow(2,-re),j=Math.floor(R.image.width*ce),me=Math.floor(R.image.height*ce),we=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;oe.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,we,Be,j,me),D.unbindTexture()};const jn=P.createFramebuffer(),Xt=P.createFramebuffer();this.copyTextureToTexture=function(R,Y,re=null,ce=null,j=0,me=null){me===null&&(j!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=j,j=0):me=0);let we,Be,Oe,qe,Ge,Ve,tt,ct,Nt;const wt=R.isCompressedTexture?R.mipmaps[me]:R.image;if(re!==null)we=re.max.x-re.min.x,Be=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,qe=re.min.x,Ge=re.min.y,Ve=re.isBox3?re.min.z:0;else{const ei=Math.pow(2,-j);we=Math.floor(wt.width*ei),Be=Math.floor(wt.height*ei),R.isDataArrayTexture?Oe=wt.depth:R.isData3DTexture?Oe=Math.floor(wt.depth*ei):Oe=1,qe=0,Ge=0,Ve=0}ce!==null?(tt=ce.x,ct=ce.y,Nt=ce.z):(tt=0,ct=0,Nt=0);const yt=ze.convert(Y.format),Ze=ze.convert(Y.type);let Rt;Y.isData3DTexture?(oe.setTexture3D(Y,0),Rt=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(oe.setTexture2DArray(Y,0),Rt=P.TEXTURE_2D_ARRAY):(oe.setTexture2D(Y,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);const ft=P.getParameter(P.UNPACK_ROW_LENGTH),In=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ds=P.getParameter(P.UNPACK_SKIP_PIXELS),Un=P.getParameter(P.UNPACK_SKIP_ROWS),vo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,wt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const Pt=R.isDataArrayTexture||R.isData3DTexture,Qn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const ei=L.get(R),dn=L.get(Y),Tn=L.get(ei.__renderTarget),tc=L.get(dn.__renderTarget);D.bindFramebuffer(P.READ_FRAMEBUFFER,Tn.__webglFramebuffer),D.bindFramebuffer(P.DRAW_FRAMEBUFFER,tc.__webglFramebuffer);for(let Cr=0;Cr<Oe;Cr++)Pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(R).__webglTexture,j,Ve+Cr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(Y).__webglTexture,me,Nt+Cr)),P.blitFramebuffer(qe,Ge,we,Be,tt,ct,we,Be,P.DEPTH_BUFFER_BIT,P.NEAREST);D.bindFramebuffer(P.READ_FRAMEBUFFER,null),D.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||L.has(R)){const ei=L.get(R),dn=L.get(Y);D.bindFramebuffer(P.READ_FRAMEBUFFER,jn),D.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xt);for(let Tn=0;Tn<Oe;Tn++)Pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ei.__webglTexture,j,Ve+Tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ei.__webglTexture,j),Qn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,me,Nt+Tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,me),j!==0?P.blitFramebuffer(qe,Ge,we,Be,tt,ct,we,Be,P.COLOR_BUFFER_BIT,P.NEAREST):Qn?P.copyTexSubImage3D(Rt,me,tt,ct,Nt+Tn,qe,Ge,we,Be):P.copyTexSubImage2D(Rt,me,tt,ct,qe,Ge,we,Be);D.bindFramebuffer(P.READ_FRAMEBUFFER,null),D.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Qn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Rt,me,tt,ct,Nt,we,Be,Oe,yt,Ze,wt.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,me,tt,ct,Nt,we,Be,Oe,yt,wt.data):P.texSubImage3D(Rt,me,tt,ct,Nt,we,Be,Oe,yt,Ze,wt):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,me,tt,ct,we,Be,yt,Ze,wt.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,me,tt,ct,wt.width,wt.height,yt,wt.data):P.texSubImage2D(P.TEXTURE_2D,me,tt,ct,we,Be,yt,Ze,wt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,In),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ds),P.pixelStorei(P.UNPACK_SKIP_ROWS,Un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vo),me===0&&Y.generateMipmaps&&P.generateMipmap(Rt),D.unbindTexture()},this.initRenderTarget=function(R){L.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),D.unbindTexture()},this.resetState=function(){C=0,w=0,I=null,D.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class IM extends Tp{constructor(){super();const e=new go;e.deleteAttribute("uv");const t=new Ll({side:Mn}),n=new Ll,i=new Op(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new $t(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new e0(e,n,6),a=new nn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new $t(e,Rs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new $t(e,Rs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new $t(e,Rs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new $t(e,Rs(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new $t(e,Rs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new $t(e,Rs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Rs(r){return new B0({color:0,emissive:16777215,emissiveIntensity:r})}function Vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Gp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ha={duration:.5,overwrite:!1,delay:0},Oh,rn,Ct,si=1e8,Mt=1/si,Xu=Math.PI*2,UM=Xu/4,NM=0,Wp=Math.sqrt,OM=Math.cos,FM=Math.sin,en=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},Fh=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},An=function(e){return e!==!1},Bh=function(){return typeof window<"u"},ja=function(e){return Ot(e)||en(e)},Xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,BM=/random\([^)]+\)/g,kM=/,\s*/g,vd=/(?:-?\.?\d|\.)+/gi,qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yp=/[+-]=-?[.\d]+/,zM=/[^,'"\[\]\s]+/gi,HM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,yi,qu,kh,Zn={},Dl={},$p,Zp=function(e){return(Dl=so(e,Zn))&&Ln},zh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fa=function(e,t){return!t&&console.warn(e)},Kp=function(e,t){return e&&(Zn[e]=t)&&Dl&&(Dl[e]=t)||Zn},da=function(){return 0},VM={suppressEvents:!0,isStart:!0,kill:!1},_l={suppressEvents:!0,kill:!1},GM={suppressEvents:!0},Hh={},_r=[],Yu={},Jp,zn={},Bc={},xd=30,vl=[],Vh="",Gh=function(e){var t=e[0],n,i;if(Ii(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=vl.length;i--&&!vl[i].targetTest(t););n=vl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xm(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||Gh(oi(e))[0]._gsap},jp=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():Fh(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},qs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},WM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Il=function(){var e=_r.length,t=_r.slice(0),n,i;for(Yu={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wh=function(e){return!!(e._initted||e._startAt||e.add)},Qp=function(e,t,n,i){_r.length&&!rn&&Il(),e.render(t,n,!!(rn&&t<0&&Wh(e))),_r.length&&!rn&&Il()},em=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zM).length<2?t:en(e)?e.trim():e},tm=function(e){return e},Kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},XM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},so=function(e,t){for(var n in t)e[n]=t[n];return e},yd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ul=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wo=function(e){var t=e.parent||Dt,n=e.keyframes?XM(hn(e.keyframes)):Kn;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},qM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},nm=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Zl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},YM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$u=function(e,t,n,i){return e._startAt&&(rn?e._startAt.revert(_l):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},$M=function r(e){return!e||e._ts&&r(e.parent)},Sd=function(e){return e._repeat?oo(e._tTime,e=e.duration()+e._rDelay)*e:0},oo=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},Nl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kl=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Jl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kl(e),n._dirty||jr(n,e)),e},im=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nl(e.rawTime(),t),(!t._dur||ba(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ti=function(e,t,n,i){return t.parent&&Mr(t),t._start=Lt((Ki(n)?n:n||e!==Dt?ni(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nm(e,t,"_first","_last",e._sort?"_start":0),Zu(t)||(e._recent=t),i||im(e,t),e._ts<0&&Jl(e,e._tTime),e},rm=function(e,t){return(Zn.ScrollTrigger||zh("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},sm=function(e,t,n,i,s){if(qh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jp!==Gn.frame)return _r.push(e),e._lazy=[s,i],1},ZM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KM=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&ZM(e)&&!(!e._initted&&Zu(e))||(e._ts<0||e._dp._ts<0)&&!Zu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ba(0,e._tDur,t),u=oo(l,a),e._yoyo&&u&1&&(o=1-o),u!==oo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||rn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&sm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$u(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Mr(e,1),!n&&!rn&&(Xn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},JM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ao=function(e,t,n,i){var s=e._repeat,o=Lt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Lt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Jl(e,e._tTime=e._tDur*a),e.parent&&Kl(e),n||jr(e.parent,e),e},Md=function(e){return e instanceof wn?jr(e):ao(e,e._dur)},jM={_start:0,endTime:da,totalDuration:da},ni=function r(e,t,n){var i=e.labels,s=e._recent||jM,o=e.duration()>=si?s.endTime(!1):e._dur,a,l,c;return en(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xo=function(e,t,n){var i=Ki(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Gt(t[0],o,t[s+1])},Ar=function(e,t){return e||e===0?t(e):t},ba=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!en(e)||!(t=HM.exec(e))?"":t[1]},QM=function(e,t,n){return Ar(n,function(i){return ba(e,t,i)})},Ku=[].slice,om=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==yi},eE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return en(i)&&!t||om(i,1)?(s=n).push.apply(s,oi(i)):n.push(i)})||n},oi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):en(e)&&!n&&(qu||!lo())?Ku.call((t||kh).querySelectorAll(e),0):hn(e)?eE(e,n):om(e)?Ku.call(e,0):e?[e]:[]},Ju=function(e){return e=oi(e)[0]||fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?fa("Invalid scope")||kh.createElement("div"):e)}},am=function(e){return e.sort(function(){return .5-Math.random()})},lm=function(e){if(Ot(e))return e;var t=Ii(e)?e:{each:e},n=Qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return en(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,S,x,v,b,C,w,I,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,si])[1],!M){for(w=-si;w<(w=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*u-.5:i%M,S=M===si?0:l?g*h/M-.5:i/M|0,w=0,I=si,C=0;C<g;C++)x=C%M-p,v=S-(C/M|0),m[C]=b=c?Math.abs(c==="y"?v:x):Wp(x*x+v*v),b>w&&(w=b),b<I&&(I=b);i==="random"&&am(m),m.max=w-I,m.min=I,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=cn(t.amount||t.each)||0,n=n&&g<0?dE(n):n}return g=(m[f]-m.min)/m.max||0,Lt(m.b+(n?n(g):g)*m.v)+m.u}},ju=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ki(n)?0:cn(n))}},cm=function(e,t){var n=hn(e),i,s;return!n&&Ii(e)&&(i=n=e.radius||si,e.values?(e=oi(e.values),(s=!Ki(e[0]))&&(i*=i)):e=ju(e.increment)),Ar(t,n?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=si,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ki(o)?u:u+cn(o)}:ju(e))},um=function(e,t,n,i){return Ar(hn(e)?!t:n===!0?!!(n=0):!i,function(){return hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},tE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},nE=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},iE=function(e,t,n){return fm(e,t,0,1,n)},hm=function(e,t,n){return Ar(n,function(i){return e[~~t(i)]})},rE=function r(e,t,n){var i=t-e;return hn(e)?hm(e,r(0,e.length),t):Ar(n,function(s){return(i+(s-e)%i)%i+e})},sE=function r(e,t,n){var i=t-e,s=i*2;return hn(e)?hm(e,r(0,e.length-1),t):Ar(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},pa=function(e){return e.replace(BM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(kM);return um(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},fm=function(e,t,n,i,s){var o=t-e,a=i-n;return Ar(s,function(l){return n+((l-e)/o*a||0)})},oE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=en(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=so(hn(e)?[]:{},e));if(!u){for(l in t)Xh.call(a,e,l,"get",t[l]);s=function(_){return Zh(_,a)||(o?e.p:e)}}}return Ar(n,s)},Ed=function(e,t,n){var i=e.labels,s=si,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xn=function(e,t,n){var i=e.vars,s=i[t],o=Ct,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&_r.length&&Il(),a&&(Ct=a),u=l?s.apply(c,l):s.call(c),Ct=o,u},Do=function(e){return Mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Xn(e,"onInterrupt"),e},zs,dm=[],pm=function(e){if(e)if(e=!e.name&&e.default||e,Bh()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:da,render:Zh,add:Xh,kill:EE,modifier:ME,rawVars:0},o={targetTest:0,get:0,getSetter:$h,aliases:{},register:0};if(lo(),e!==i){if(zn[t])return;Kn(i,Kn(Ul(e,s),o)),so(i.prototype,so(s,Ul(e,o))),zn[i.prop=t]=i,e.targetTest&&(vl.push(i),Hh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kp(t,i),e.register&&e.register(Ln,i,Rn)}else dm.push(e)},St=255,Io={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},kc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},mm=function(e,t,n){var i=e?Ki(e)?[e>>16,e>>8&St,e&St]:0:Io.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Io[e])i=Io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(vd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=kc(l+1/3,s,o),i[1]=kc(l,s,o),i[2]=kc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(qp),n&&i.length<4&&(i[3]=1),i}else i=e.match(vd)||Io.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},gm=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(s){var o=s.match(ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Td=function(e,t,n){var i="",s=(e+i).match(vr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=mm(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=gm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vr,"1").split(ks),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(vr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Io)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),aE=/hsl[a]?\(/,_m=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=aE.test(t),e[1]=Td(e[1],n),e[0]=Td(e[0],n,gm(e[1])),!0},ma,Gn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,S=m===!0,x,v,b,C;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,x=b-o,(x>0||S)&&(C=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=x+(x>=s?4:s-x),v=1),S||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](b,f,C,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$p&&(!qu&&Bh()&&(yi=qu=window,kh=yi.document||{},Zn.gsap=Ln,(yi.gsapVersions||(yi.gsapVersions=[])).push(Ln.version),Zp(Dl||yi.GreenSockGlobals||!yi.gsap&&yi||{}),dm.forEach(pm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ma=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ma=0,c=da},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,S){var x=p?function(v,b,C,w){m(v,b,C,w),h.remove(x)}:m;return h.remove(m),a[S?"unshift":"push"](x),lo(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),lo=function(){return!ma&&Gn.wake()},ut={},lE=/^[\d.\-M][\d.\-,\s]/,cE=/["']/g,uE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(cE,"").trim():+c,i=l.substr(a+1).trim();return t},hE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},fE=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uE(t[1])]:hE(e).split(",").map(em)):ut._CE&&lE.test(e)?ut._CE("",e):n},dE=function(e){return function(t){return 1-e(1-t)}},Qr=function(e,t){return e&&(Ot(e)?e:ut[e]||fE(e))||t},fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Cn(e,function(a){ut[a]=Zn[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},vm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Xu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*FM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:vm(a);return s=Xu/s,l.config=function(c,u){return r(e,c,u)},l},Hc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:vm(n);return i.config=function(s){return r(e,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;fs("Elastic",zc("in"),zc("out"),zc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fs("Circ",function(r){return-(Wp(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-OM(r*UM)+1});fs("Back",Hc("in"),Hc("out"),Hc());ut.SteppedEase=ut.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((i*ba(0,o,a)|0)+s)*n}}};ha.ease=ut["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vh+=r+","+r+"Params,"});var xm=function(e,t){this.id=NM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jp,this.set=t?t.getSetter:$h},ga=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ao(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),ma||Gn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ao(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(lo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Jl(this,n),!s._dp||s.parent||im(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?oo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(ba(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Kl(this),YM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ti(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=GM);var i=rn;return rn=n,Wh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Md(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Md(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ni(this,n),An(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ot(n)?n:tm,l=function(){var u=i.then;i.then=null,s&&s(),Ot(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Do(this)},r})();Kn(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var wn=(function(r){Gp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Dt&&Ti(n.parent||Dt,Vi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&rm(Vi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Xo(0,arguments,this),this},t.from=function(i,s,o){return Xo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Xo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(i,s,ni(this,o),1),this},t.call=function(i,s,o){return Ti(this,Gt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Gt(i,o,ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Wo(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Wo(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,S,x,v,b,C,w;if(this!==Dt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Lt(u%m),u===l?(g=this._repeat,f=c):(b=Lt(u/m),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=oo(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),C&&g&1&&(f=c-f,w=1),g!==b&&!this._lock){var I=C&&b&1,M=I===(C&&g&1);if(g<b&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Lt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=JM(this,Lt(a),Lt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Xn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-Mt);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||rn&&Wh(d)),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=y?-Mt:Mt);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Mt)._zTime=f>=a?1:-1,this._ts))return this._start=v,Kl(this),this.render(i,s,o);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ki(s)||(s=ni(this,s,i)),!(i instanceof ga)){if(hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(en(i))return this.addLabel(i,s);if(Ot(i))i=Gt.delayedCall(0,i);else return this}return this!==i?Ti(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Gt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return en(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&Zl(this,i),i===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Gt.delayedCall(0,s||da,o);return a.data="isPause",this._hasPause=1,Ti(this,a,ni(this,i))},t.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=oi(i),l=this._first,c=Ki(s),u;l;)l instanceof Gt?WM(l._targets,a)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Gt.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&ao(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Kn({startAt:{time:ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ed(this,ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ed(this,ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Lt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return jr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),jr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=si,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ti(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Lt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ao(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(Qp(Dt,Nl(i,Dt)),Jp=Gn.frame),Gn.frame>=xd){xd+=$n.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&$n.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e})(ga);Kn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pE=function(e,t,n,i,s,o,a){var l=new Rn(this._pt,e,t,0,1,bm,null,s),c=0,u=0,h,f,d,_,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=pa(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(Fc)||[];h=Fc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?qs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Fc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yp.test(i)||p)&&(l.e=0),this._pt=l,l},Xh=function(e,t,n,i,s,o,a,l,c,u){Ot(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ot(h)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ot(h)?c?xE:Em:Yh,_;if(en(i)&&(~i.indexOf("random(")&&(i=pa(i)),i.charAt(1)==="="&&(_=qs(f,i)+(cn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Qu)return!isNaN(f*i)&&i!==""?(_=new Rn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?SE:Tm,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&zh(t,i),pE.call(this,e,t,f,i,d,l||$n.stringFilter,c))},mE=function(e,t,n,i,s){if(Ot(e)&&(e=qo(e,s,t,n,i)),!Ii(e)||e.style&&e.nodeType||hn(e)||Xp(e))return en(e)?qo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=qo(e[a],s,t,n,i);return o},ym=function(e,t,n,i,s,o){var a,l,c,u;if(zn[e]&&(a=new zn[e]).init(s,a.rawVars?t[e]:mE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Rn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ur,Qu,qh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Oh,v=e.timeline,b=i.easeReverse||h,C,w,I,M,y,N,F,$,Z,ie,te,K,k;if(v&&(!f||!s)&&(s="none"),e._ease=Qr(s,ha.ease),e._rEase=b&&(Qr(b)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if($=m[0]?Jr(m[0]).harness:0,K=$&&i[$.prop],C=Ul(i,Hh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?_l:VM),g._lazy=0),o){if(Mr(e._startAt=Gt.set(m,Kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!a&&!d)&&e._startAt.revert(_l),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),I=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&An(l),immediateRender:a,stagger:0,parent:p},C),K&&(I[$.prop]=K),Mr(e._startAt=Gt.set(m,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(_l):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,w=0;w<m.length;w++){if(y=m[w],F=y._gsap||Gh(m)[w]._gsap,e._ptLookup[w]=ie={},Yu[F.id]&&_r.length&&Il(),te=S===m?w:S.indexOf(y),$&&(Z=new $).init(y,K||C,e,te,S)!==!1&&(e._pt=M=new Rn(e._pt,y,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(ue){ie[ue]=M}),Z.priority&&(N=1)),!$||K)for(I in C)zn[I]&&(Z=ym(I,C,e,te,y,S))?Z.priority&&(N=1):ie[I]=M=Xh.call(e,y,I,"get",C[I],te,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),x&&e._pt&&(ur=e,Dt.killTweensOf(y,ie,e.globalTime(t)),k=!e.parent,ur=0),e._pt&&l&&(Yu[F.id]=1)}N&&wm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&v.render(si,!0,!0)},gE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qu=1,e.vars[t]="+=0",qh(e,a),Qu=0,l?fa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=kt(n)+cn(h.e)),h.b&&(h.b=u.s+cn(h.b))},_E=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=so({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},qo=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):en(e)&&~e.indexOf("random(")?pa(e):e},Sm=Vh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Mm={};Cn(Sm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Mm[r]=1});var Gt=(function(r){Gp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Wo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Dt,S=(hn(n)||Xp(n)?Ki(n[0]):"length"in i)?[n]:oi(n),x,v,b,C,w,I,M,y;if(a._targets=S.length?Gh(S):fa("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||ja(c)||ja(u)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(x=a.timeline=new wn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),x.kill(),x.parent=x._dp=Vi(a),x._start=0,f||ja(c)||ja(u)){if(C=S.length,M=f&&lm(f),Ii(f))for(w in f)~Sm.indexOf(w)&&(y||(y={}),y[w]=f[w]);for(v=0;v<C;v++)b=Ul(i,Mm),b.stagger=0,N&&(b.easeReverse=N),y&&so(b,y),I=S[v],b.duration=+qo(c,Vi(a),v,I,S),b.delay=(+qo(u,Vi(a),v,I,S)||0)-a._delay,!f&&C===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),x.to(I,b,M?M(v,I,S):0),x._ease=ut.none;x.duration()?c=u=0:a.timeline=0}else if(_){Wo(Kn(x.vars.defaults,{ease:"none"})),x._ease=Qr(_.ease||i.ease||"none");var F=0,$,Z,ie;if(hn(_))_.forEach(function(te){return x.to(S,te,">")}),x.duration();else{b={};for(w in _)w==="ease"||w==="easeEach"||vE(w,_[w],b,_.easeEach);for(w in b)for($=b[w].sort(function(te,K){return te.t-K.t}),F=0,v=0;v<$.length;v++)Z=$[v],ie={ease:Z.e,duration:(Z.t-(v?$[v-1].t:0))/100*c},ie[w]=Z.v,x.to(S,ie,F),F+=ie.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Oh&&(ur=Vi(a),Dt.killTweensOf(S),ur=0),Ti(p,Vi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Lt(p._time)&&An(h)&&$M(Vi(a))&&p.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-u)||0)),m&&rm(Vi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Mt&&!u?l:i<Mt?0:i,f,d,_,g,m,p,S,x;if(!c)KM(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Lt(h%g),h===l?(_=this._repeat,f=c):(m=Lt(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=oo(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Lt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(sm(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Xn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$u(this,i,s,o),Xn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&$u(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Mr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Xn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ma||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||qh(this,c),u=this._ease(c/this._dur),gE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Jl(this,0),this.parent||nm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Do(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||Do(this),this.parent&&o!==this.timeline.totalDuration()&&ao(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?oi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&qM(a,l))return s==="all"&&(this._pt=0),Do(this);for(h=this._op=this._op||[],s!=="all"&&(en(s)&&(g={},Cn(s,function(S){return g[S]=1}),s=g),s=_E(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Zl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Do(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Xo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Xo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Dt.killTweensOf(i,s,o)},e})(ga);Kn(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var e=new wn,t=Ku.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Yh=function(e,t,n){return e[t]=n},Em=function(e,t,n){return e[t](n)},xE=function(e,t,n,i){return e[t](i.fp,n)},yE=function(e,t,n){return e.setAttribute(t,n)},$h=function(e,t){return Ot(e[t])?Em:Fh(e[t])&&e.setAttribute?yE:Yh},Tm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},SE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Zh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ME=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},EE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Zl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},TE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Rn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Tm,this.d=l||this,this.set=c||Yh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=TE,this.m=n,this.mt=s,this.tween=i},r})();Cn(Vh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Hh[r]=1});Zn.TweenMax=Zn.TweenLite=Gt;Zn.TimelineLite=Zn.TimelineMax=wn;Dt=new wn({sortChildren:!1,defaults:ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=_m;var es=[],xl={},bE=[],bd=0,wE=0,Vc=function(e){return(xl[e]||bE).map(function(t){return t()})},eh=function(){var e=Date.now(),t=[];e-bd>2&&(Vc("matchMediaInit"),es.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=yi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Vc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bd=e,Vc("matchMedia"))},Am=(function(){function r(t,n){this.selector=n&&Ju(n),this.data=[],this._r=[],this.isReverted=!1,this.id=wE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var o=this,a=function(){var c=Ct,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ju(s)),Ct=o,h=i.apply(o,arguments),Ot(h)&&o._r.push(h),Ct=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ot?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=es.length;o--;)es[o].id===this.id&&es.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),AE=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ii(n)||(n={matches:n});var o=new Am(0,s||this.scope),a=o.conditions={},l,c,u;Ct&&!o.selector&&(o.selector=Ct.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&(es.indexOf(o)<0&&es.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(eh):l.addEventListener("change",eh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pm(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){en(e)&&(e=oi(e)[0]);var s=Jr(e||{}).get,o=n?tm:em;return n==="native"&&(n=""),e&&(t?o((zn[t]&&zn[t].get||s)(e,t,n,i)):function(a,l,c){return o((zn[a]&&zn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var i=e.map(function(u){return Ln.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=zn[t],a=Jr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;zs._pt=0,h.init(e,n?u+n:u,zs,0,[e]),h.render(1,h),zs._pt&&Zh(1,zs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Ln.to(e,Kn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qr(e.ease,ha.ease)),yd(ha,e||{})},config:function(e){return yd($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!zn[a]&&!Zn[a]&&fa(t+" effect requires "+a+" plugin.")}),Bc[t]=function(a,l,c){return n(oi(a),Kn(l||{},s),c)},o&&(wn.prototype[t]=function(a,l,c){return this.add(Bc[t](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Qr(t)},parseEase:function(e,t){return arguments.length?Qr(e,t):ut},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&Ti(n,i,i._start-i._delay),i=s;return Ti(Dt,n,0),n},context:function(e,t){return e?new Am(e,t):Ct},matchMedia:function(e){return new AE(e)},matchMediaRefresh:function(){return es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||eh()},addEventListener:function(e,t){var n=xl[e]||(xl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rE,wrapYoyo:sE,distribute:lm,random:um,snap:cm,normalize:iE,getUnit:cn,clamp:QM,splitColor:mm,toArray:oi,selector:Ju,mapRange:fm,pipe:tE,unitize:nE,interpolate:oE,shuffle:am},install:Zp,effects:Bc,ticker:Gn,updateRoot:wn.updateRoot,plugins:zn,globalTimeline:Dt,core:{PropTween:Rn,globals:Kp,Tween:Gt,Timeline:wn,Animation:ga,getCache:Jr,_removeLinkedListItem:Zl,reverting:function(){return rn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return Oh=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ol[r]=Gt[r]});Gn.add(wn.updateRoot);zs=Ol.to({},{duration:0});var CE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},RE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=CE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Gc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(en(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}RE(a,s)}}}},Ln=Ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Gc("roundProps",ju),Gc("modifiers"),Gc("snap",cm))||Ol;Gt.version=wn.version=Ln.version="3.15.0";$p=1;Bh()&&lo();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;var wd,hr,Ys,Kh,$r,Ad,Jh,PE=function(){return typeof window<"u"},Ji={},zr=180/Math.PI,$s=Math.PI/180,Ps=Math.atan2,Cd=1e8,jh=/([A-Z])/g,LE=/(left|right|width|margin|padding|x)/i,DE=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},FE=function(e,t,n){return e.style[t]=n},BE=function(e,t,n){return e.style.setProperty(t,n)},kE=function(e,t,n){return e._gsap[t]=n},zE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},HE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},VE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ut="transform",Pn=Ut+"Origin",GE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ci[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Gi(i,a)}):this.tfm[e]=o.x?o[e]:Gi(i,e),e===Pn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ut)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},Pm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},WE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(jh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jh(),(!s||!s.isStart)&&!n[Ut]&&(Pm(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lm=function(e,t){var n={target:e,props:[],revert:WE,save:GE};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Dm,nh=function(e,t){var n=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return n&&n.style?n:hr.createElement(e)},qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(jh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,co(t)||t,1)||""},Rd="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,n){var i=t||$r,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Rd[o]:"")+e},ih=function(){PE()&&window.document&&(wd=window,hr=wd.document,Ys=hr.documentElement,$r=nh("div")||{style:{}},nh("div"),Ut=co(Ut),Pn=Ut+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dm=!!co("perspective"),Jh=Ln.core.reverting,Kh=1)},Pd=function(e){var t=e.ownerSVGElement,n=nh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ys.removeChild(n),s},Ld=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Im=function(e){var t,n;try{t=e.getBBox()}catch{t=Pd(e),n=1}return t&&(t.width||t.height)||n||(t=Pd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ld(e,["x","cx","x1"])||0,y:+Ld(e,["y","cy","y1"])||0,width:0,height:0}:t},Um=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Im(e))},Er=function(e,t){if(t){var n=e.style,i;t in Ji&&t!==Pn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(jh,"-$1").toLowerCase())):n.removeAttribute(t)}},fr=function(e,t,n,i,s,o){var a=new Rn(e._pt,t,n,0,1,o?Rm:Cm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Dd={deg:1,rad:1,turn:1},XE={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=$r.style,l=LE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||Dd[i]||Dd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Um(e),(d||o==="%")&&(Ji[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],kt(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===hr||!g.appendChild)&&(g=hr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Gn.time&&!m.uncache)return kt(s/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:Er(e,t)}else(d||o==="%")&&!XE[qn(g,"display")]&&(a.position=qn(e,"position")),g===e&&(a.position="static"),g.appendChild($r),_=$r[u],g.removeChild($r),a.position="absolute";return l&&d&&(m=Jr(g),m.time=Gn.time,m.width=g[u]),kt(f?_*s/h:_&&s?h/_*s:0)},Gi=function(e,t,n,i){var s;return Kh||ih(),t in Ci&&t!=="transform"&&(t=Ci[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bl(qn(e,Pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Fl[t]&&Fl[t](e,t,n)||qn(e,t)||jp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},qE=function(e,t,n,i){if(!n||n==="none"){var s=co(t,e,1),o=s&&qn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=qn(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,bm),l=0,c=0,u,h,f,d,_,g,m,p,S,x,v,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=qn(e,t)||i,g?e.style[t]=g:Er(e,t)),u=[n,i],_m(u),n=u[0],i=u[1],f=n.match(ks)||[],b=i.match(ks)||[],b.length){for(;h=ks.exec(i);)m=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=qs(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=ks.lastIndex-x.length,x||(x=x||$n.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=Tr(e,t,g,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Rm:Cm;return Yp.test(i)&&(a.e=0),this._pt=a,a},Id={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},YE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Id[n]||n,t[1]=Id[i]||i,t.join(" ")},$E=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ji[a]&&(l=1,a=a==="transformOrigin"?Pn:Ut),Er(n,a);l&&(Er(n,Ut),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",va(n,1),o.uncache=1,Pm(i)))}},Fl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,$E);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},_a=[1,0,0,1,0,0],Nm={},Om=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ud=function(e){var t=qn(e,Ut);return Om(t)?_a:t.substr(7).match(qp).map(kt)},Qh=function(e,t){var n=e._gsap||Jr(e),i=e.style,s=Ud(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_a:s):(s===_a&&!e.offsetParent&&e!==Ys&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ys.appendChild(e)),s=Ud(e),l?i.display=l:Er(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Qh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],x=t.split(" "),v=parseFloat(x[0])||0,b=parseFloat(x[1])||0,C,w,I,M;n?l!==_a&&(w=d*m-_*g)&&(I=v*(m/w)+b*(-g/w)+(g*S-m*p)/w,M=v*(-_/w)+b*(d/w)-(d*S-_*p)/w,v=I,b=M):(C=Im(e),v=C.x+(~x[0].indexOf("%")?v/100*C.width:v),b=C.y+(~(x[1]||x[0]).indexOf("%")?b/100*C.height:b)),i||i!==!1&&a.smooth?(p=v-c,S=b-u,a.xOffset=h+(p*d+S*g)-p,a.yOffset=f+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Pn]="0px 0px",o&&(fr(o,a,"xOrigin",c,v),fr(o,a,"yOrigin",u,b),fr(o,a,"xOffset",h,a.xOffset),fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},va=function(e,t){var n=e._gsap||new xm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qn(e,Pn)||"0",u,h,f,d,_,g,m,p,S,x,v,b,C,w,I,M,y,N,F,$,Z,ie,te,K,k,ue,O,X,de,De,G,z;return u=h=f=g=m=p=S=x=v=0,d=_=1,n.svg=!!(e.getCTM&&Um(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),w=Qh(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),rh(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,C=n.yOrigin||0,w!==_a&&(N=w[0],F=w[1],$=w[2],Z=w[3],u=ie=w[4],h=te=w[5],w.length===6?(d=Math.sqrt(N*N+F*F),_=Math.sqrt(Z*Z+$*$),g=N||F?Ps(F,N)*zr:0,S=$||Z?Ps($,Z)*zr+g:0,S&&(_*=Math.abs(Math.cos(S*$s))),n.svg&&(u-=b-(b*N+C*$),h-=C-(b*F+C*Z))):(z=w[6],De=w[7],O=w[8],X=w[9],de=w[10],G=w[11],u=w[12],h=w[13],f=w[14],I=Ps(z,de),m=I*zr,I&&(M=Math.cos(-I),y=Math.sin(-I),K=ie*M+O*y,k=te*M+X*y,ue=z*M+de*y,O=ie*-y+O*M,X=te*-y+X*M,de=z*-y+de*M,G=De*-y+G*M,ie=K,te=k,z=ue),I=Ps(-$,de),p=I*zr,I&&(M=Math.cos(-I),y=Math.sin(-I),K=N*M-O*y,k=F*M-X*y,ue=$*M-de*y,G=Z*y+G*M,N=K,F=k,$=ue),I=Ps(F,N),g=I*zr,I&&(M=Math.cos(I),y=Math.sin(I),K=N*M+F*y,k=ie*M+te*y,F=F*M-N*y,te=te*M-ie*y,N=K,ie=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=kt(Math.sqrt(N*N+F*F+$*$)),_=kt(Math.sqrt(te*te+z*z)),I=Ps(ie,te),S=Math.abs(I)>2e-4?I*zr:0,v=G?1/(G<0?-G:G):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Om(qn(e,Ut)),K&&e.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=kt(d),n.scaleY=kt(_),n.rotation=kt(g)+a,n.rotationX=kt(m)+a,n.rotationY=kt(p)+a,n.skewX=S+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Pn]=Bl(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?KE:Dm?Fm:ZE,n.uncache=0,n},Bl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wc=function(e,t,n){var i=cn(t);return kt(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},ZE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fm(e,t)},Or="0deg",wo="0px",Fr=") ",Fm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Or||u!==Or)){var C=parseFloat(u)*$s,w=Math.sin(C),I=Math.cos(C),M;C=parseFloat(h)*$s,M=Math.cos(C),o=Wc(S,o,w*M*-x),a=Wc(S,a,-Math.sin(C)*-x),l=Wc(S,l,I*M*-x+x)}m!==wo&&(v+="perspective("+m+Fr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(b||o!==wo||a!==wo||l!==wo)&&(v+=l!==wo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Fr),c!==Or&&(v+="rotate("+c+Fr),u!==Or&&(v+="rotateY("+u+Fr),h!==Or&&(v+="rotateX("+h+Fr),(f!==Or||d!==Or)&&(v+="skew("+f+", "+d+Fr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Fr),S.style[Ut]=v||"translate(0, 0)"},KE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(o),v=parseFloat(a),b,C,w,I,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$s,c*=$s,b=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=$s,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,I*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),b*=M,C*=M)),b=kt(b),C=kt(C),w=kt(w),I=kt(I)):(b=h,I=f,C=w=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Tr(d,"x",o,"px"),v=Tr(d,"y",a,"px")),(_||g||m||p)&&(x=kt(x+_-(_*b+g*w)+m),v=kt(v+g-(_*C+g*I)+p)),(i||s)&&(M=d.getBBox(),x=kt(x+i/100*M.width),v=kt(v+s/100*M.height)),M="matrix("+b+","+C+","+w+","+I+","+x+","+v+")",d.setAttribute("transform",M),S&&(d.style[Ut]=M)},JE=function(e,t,n,i,s){var o=360,a=en(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Cd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Cd)%o-~~(c/o)*o)),e._pt=f=new Rn(e._pt,t,n,i,c,IE),f.e=u,f.u="deg",e._props.push(n),f},Nd=function(e,t){for(var n in t)e[n]=t[n];return e},jE=function(e,t,n){var i=Nd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ut]=t,a=va(n,1),Er(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],o[Ut]=t,a=va(n,1),o[Ut]=c);for(l in Ji)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=cn(c),_=cn(u),h=d!==_?Tr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Rn(e._pt,a,l,h,f-h,th),e._pt.u=_||0,e._props.push(l));Nd(a,i)};Cn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Fl[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Gi(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Bm={name:"css",register:ih,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,S,x,v,b,C,w,I,M;Kh||ih(),this.styles=this.styles||Lm(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(zn[g]&&ym(g,t,n,i,e,s)))){if(d=typeof u,_=Fl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=pa(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=cn(c),p=cn(u),p?m!==p&&(c=Tr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],en(c)&&~c.indexOf("random(")&&(c=pa(c)),cn(c+"")||c==="auto"||(c+=$n.units[g]||cn(Gi(e,g))||""),(c+"").charAt(1)==="="&&(c=Gi(e,g))):c=Gi(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Ci&&(g==="autoAlpha"&&(f===1&&Gi(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ji,x){if(this.styles.save(g),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=qn(e,"perspective"),y?e.style.perspective=y:Er(e,"perspective")}h=parseFloat(u)}if(v||(b=e._gsap,b.renderTransform&&!t.parseTransform||va(e,t.parseTransform),C=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new Rn(this._pt,a,Ut,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new Rn(this._pt,b,"scaleY",b.scaleY,(S?qs(b.scaleY,S+h):h)-b.scaleY||0,th),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(Pn,0,a[Pn]),u=YE(u),b.svg?rh(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&fr(this,b,"zOrigin",b.zOrigin,p),fr(this,a,g,Bl(c),Bl(u)));continue}else if(g==="svgOrigin"){rh(e,u,1,C,0,this);continue}else if(g in Nm){JE(this,b,g,f,S?qs(f,S+u):u);continue}else if(g==="smoothOrigin"){fr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){jE(this,u,e);continue}}else g in a||(g=co(g)||g);if(x||(h||h===0)&&(f||f===0)&&!DE.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=cn(u)||(g in $n.units?$n.units[g]:m),m!==p&&(f=Tr(e,g,c,p)),this._pt=new Rn(this._pt,x?b:a,g,f,(S?qs(f,S+h):h)-f,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?OE:th),this._pt.u=p||0,x&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=NE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=UE);else if(g in a)qE.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){zh(g,u);continue}x||(g in a?I.push(g,0,a[g]):typeof e[g]=="function"?I.push(g,2,e[g]()):I.push(g,1,c||e[g])),o.push(g)}}w&&wm(this)},render:function(e,t){if(t.tween._time||!Jh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ci,getSetter:function(e,t,n){var i=Ci[t];return i&&i.indexOf(",")<0&&(t=i),t in Ji&&t!==Pn&&(e._gsap.x||Gi(e,"x"))?n&&Ad===n?t==="scale"?zE:kE:(Ad=n||{})&&(t==="scale"?HE:VE):e.style&&!Fh(e.style[t])?FE:~t.indexOf("-")?BE:$h(e,t)},core:{_removeProperty:Er,_getMatrix:Qh}};Ln.utils.checkPrefix=co;Ln.core.getStyleSaver=Lm;(function(r,e,t,n){var i=Cn(r+","+e+","+t,function(s){Ji[s]=1});Cn(e,function(s){$n.units[s]="deg",Nm[s]=1}),Ci[i[13]]=r+","+e,Cn(n,function(s){var o=s.split(":");Ci[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){$n.units[r]="px"});Ln.registerPlugin(Bm);var Wt=Ln.registerPlugin(Bm)||Ln;Wt.core.Tween;function QE(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function eT(r,e,t){return e&&QE(r.prototype,e),r}var tn,yl,Wn,dr,pr,Zs,km,Hr,Ks,zm,qi,pi,Hm,Vm=function(){return tn||typeof window<"u"&&(tn=window.gsap)&&tn.registerPlugin&&tn},Gm=1,Hs=[],at=[],Li=[],Yo=Date.now,sh=function(e,t){return t},tT=function(){var e=Ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Li),at=n,Li=i,sh=function(o,a){return t[o](a)}},xr=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},$o=function(e){return!!~zm.indexOf(e)},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qa="scrollLeft",el="scrollTop",oh=function(){return qi&&qi.isPressed||at.cache++},kl=function(e,t){var n=function i(s){if(s||s===0){Gm&&(Wn.history.scrollRestoration="manual");var o=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),e(s),i.cacheID=at.cache,o&&sh("ss",s)}else(t||at.cache!==i.cacheID||sh("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:kl(function(r){return arguments.length?Wn.scrollTo(r,Yt.sc()):Wn.pageXOffset||dr[Qa]||pr[Qa]||Zs[Qa]||0})},Yt={s:el,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:kl(function(r){return arguments.length?Wn.scrollTo(Sn.sc(),r):Wn.pageYOffset||dr[el]||pr[el]||Zs[el]||0})},bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||tn.utils.toArray)(e)[0]||(typeof e=="string"&&tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},nT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},br=function(e,t){var n=t.s,i=t.sc;$o(e)&&(e=dr.scrollingElement||pr);var s=at.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||gn(e,"scroll",oh);var a=at[s+o],l=a||(at[s+o]=kl(xr(e,n),!0)||($o(e)?i:kl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=tn.getProperty(e,"scrollBehavior")==="smooth"),l},ah=function(e,t,n){var i=e,s=e,o=Yo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Yo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,m=s,p=Yo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Ao=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Od=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wm=function(){Ks=tn.core.globals().ScrollTrigger,Ks&&Ks.core&&tT()},Xm=function(e){return tn=e||Vm(),!yl&&tn&&typeof document<"u"&&document.body&&(Wn=window,dr=document,pr=dr.documentElement,Zs=dr.body,zm=[Wn,dr,pr,Zs],tn.utils.clamp,Hm=tn.core.context||function(){},Hr="onpointerenter"in Zs?"pointer":"mouse",km=zt.isTouch=Wn.matchMedia&&Wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,pi=zt.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gm=0},500),yl=1),Ks||Wm(),yl};Sn.op=Yt;at.cache=0;var zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){yl||Xm(tn)||console.warn("Please gsap.registerPlugin(Observer)"),Ks||Wm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,x=n.onPress,v=n.onRelease,b=n.onRight,C=n.onLeft,w=n.onUp,I=n.onDown,M=n.onChangeX,y=n.onChangeY,N=n.onChange,F=n.onToggleX,$=n.onToggleY,Z=n.onHover,ie=n.onHoverEnd,te=n.onMove,K=n.ignoreCheck,k=n.isNormalizer,ue=n.onGestureStart,O=n.onGestureEnd,X=n.onWheel,de=n.onEnable,De=n.onDisable,G=n.onClick,z=n.scrollSpeed,A=n.capture,T=n.allowClicks,ne=n.lockAxis,se=n.onLockAxis;this.target=a=bn(a)||pr,this.vars=n,d&&(d=tn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,z=z||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Wn.getComputedStyle(Zs).lineHeight)||22);var J,fe,_e,P,V,W,ee,D=this,B=0,L=0,oe=n.passive||!u&&n.passive!==!1,xe=br(a,Sn),Ne=br(a,Yt),U=xe(),E=Ne(),q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&pi[0]==="pointerdown",ae=$o(a),he=a.ownerDocument||dr,le=[0,0,0],Ce=[0,0,0],ye=0,Ue=function(){return ye=Yo()},Te=function(He,et){return(D.event=He)&&d&&nT(He.target,d)||et&&q&&He.pointerType!=="touch"||K&&K(He,et)},Se=function(){D._vx.reset(),D._vy.reset(),fe.pause(),h&&h(D)},be=function(){var He=D.deltaX=Od(le),et=D.deltaY=Od(Ce),Re=Math.abs(He)>=i,$e=Math.abs(et)>=i;N&&(Re||$e)&&N(D,He,et,le,Ce),Re&&(b&&D.deltaX>0&&b(D),C&&D.deltaX<0&&C(D),M&&M(D),F&&D.deltaX<0!=B<0&&F(D),B=D.deltaX,le[0]=le[1]=le[2]=0),$e&&(I&&D.deltaY>0&&I(D),w&&D.deltaY<0&&w(D),y&&y(D),$&&D.deltaY<0!=L<0&&$(D),L=D.deltaY,Ce[0]=Ce[1]=Ce[2]=0),(P||_e)&&(te&&te(D),_e&&(m&&_e===1&&m(D),S&&S(D),_e=0),P=!1),W&&!(W=!1)&&se&&se(D),V&&(X(D),V=!1),J=0},Xe=function(He,et,Re){le[Re]+=He,Ce[Re]+=et,D._vx.update(He),D._vy.update(et),c?J||(J=requestAnimationFrame(be)):be()},ze=function(He,et){ne&&!ee&&(D.axis=ee=Math.abs(He)>Math.abs(et)?"x":"y",W=!0),ee!=="y"&&(le[2]+=He,D._vx.update(He,!0)),ee!=="x"&&(Ce[2]+=et,D._vy.update(et,!0)),c?J||(J=requestAnimationFrame(be)):be()},Ae=function(He){if(!Te(He,1)){He=Ao(He,u);var et=He.clientX,Re=He.clientY,$e=et-D.x,We=Re-D.y,je=D.isDragging;D.x=et,D.y=Re,(je||($e||We)&&(Math.abs(D.startX-et)>=s||Math.abs(D.startY-Re)>=s))&&(_e||(_e=je?2:1),je||(D.isDragging=!0),ze($e,We))}},Ke=D.onPress=function(Ie){Te(Ie,1)||Ie&&Ie.button||(D.axis=ee=null,fe.pause(),D.isPressed=!0,Ie=Ao(Ie),B=L=0,D.startX=D.x=Ie.clientX,D.startY=D.y=Ie.clientY,D._vx.reset(),D._vy.reset(),gn(k?a:he,pi[1],Ae,oe,!0),D.deltaX=D.deltaY=0,x&&x(D))},H=D.onRelease=function(Ie){if(!Te(Ie,1)){pn(k?a:he,pi[1],Ae,!0);var He=!isNaN(D.y-D.startY),et=D.isDragging,Re=et&&(Math.abs(D.x-D.startX)>3||Math.abs(D.y-D.startY)>3),$e=Ao(Ie);!Re&&He&&(D._vx.reset(),D._vy.reset(),u&&T&&tn.delayedCall(.08,function(){if(Yo()-ye>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(he.createEvent){var We=he.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Wn,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(We)}}})),D.isDragging=D.isGesturing=D.isPressed=!1,h&&et&&!k&&fe.restart(!0),_e&&be(),p&&et&&p(D),v&&v(D,Re)}},Me=function(He){return He.touches&&He.touches.length>1&&(D.isGesturing=!0)&&ue(He,D.isDragging)},Ee=function(){return(D.isGesturing=!1)||O(D)},Pe=function(He){if(!Te(He)){var et=xe(),Re=Ne();Xe((et-U)*z,(Re-E)*z,1),U=et,E=Re,h&&fe.restart(!0)}},ve=function(He){if(!Te(He)){He=Ao(He,u),X&&(V=!0);var et=(He.deltaMode===1?l:He.deltaMode===2?Wn.innerHeight:1)*_;Xe(He.deltaX*et,He.deltaY*et,0),h&&!k&&fe.restart(!0)}},pe=function(He){if(!Te(He)){var et=He.clientX,Re=He.clientY,$e=et-D.x,We=Re-D.y;D.x=et,D.y=Re,P=!0,h&&fe.restart(!0),($e||We)&&ze($e,We)}},Fe=function(He){D.event=He,Z(D)},Ye=function(He){D.event=He,ie(D)},ht=function(He){return Te(He)||Ao(He,u)&&G(D)};fe=D._dc=tn.delayedCall(f||.25,Se).pause(),D.deltaX=D.deltaY=0,D._vx=ah(0,50,!0),D._vy=ah(0,50,!0),D.scrollX=xe,D.scrollY=Ne,D.isDragging=D.isGesturing=D.isPressed=!1,Hm(this),D.enable=function(Ie){return D.isEnabled||(gn(ae?he:a,"scroll",oh),o.indexOf("scroll")>=0&&gn(ae?he:a,"scroll",Pe,oe,A),o.indexOf("wheel")>=0&&gn(a,"wheel",ve,oe,A),(o.indexOf("touch")>=0&&km||o.indexOf("pointer")>=0)&&(gn(a,pi[0],Ke,oe,A),gn(he,pi[2],H),gn(he,pi[3],H),T&&gn(a,"click",Ue,!0,!0),G&&gn(a,"click",ht),ue&&gn(he,"gesturestart",Me),O&&gn(he,"gestureend",Ee),Z&&gn(a,Hr+"enter",Fe),ie&&gn(a,Hr+"leave",Ye),te&&gn(a,Hr+"move",pe)),D.isEnabled=!0,D.isDragging=D.isGesturing=D.isPressed=P=_e=!1,D._vx.reset(),D._vy.reset(),U=xe(),E=Ne(),Ie&&Ie.type&&Ke(Ie),de&&de(D)),D},D.disable=function(){D.isEnabled&&(Hs.filter(function(Ie){return Ie!==D&&$o(Ie.target)}).length||pn(ae?he:a,"scroll",oh),D.isPressed&&(D._vx.reset(),D._vy.reset(),pn(k?a:he,pi[1],Ae,!0)),pn(ae?he:a,"scroll",Pe,A),pn(a,"wheel",ve,A),pn(a,pi[0],Ke,A),pn(he,pi[2],H),pn(he,pi[3],H),pn(a,"click",Ue,!0),pn(a,"click",ht),pn(he,"gesturestart",Me),pn(he,"gestureend",Ee),pn(a,Hr+"enter",Fe),pn(a,Hr+"leave",Ye),pn(a,Hr+"move",pe),D.isEnabled=D.isPressed=D.isDragging=!1,De&&De(D))},D.kill=D.revert=function(){D.disable();var Ie=Hs.indexOf(D);Ie>=0&&Hs.splice(Ie,1),qi===D&&(qi=0)},Hs.push(D),k&&$o(a)&&(qi=D),D.enable(g)},eT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();zt.version="3.15.0";zt.create=function(r){return new zt(r)};zt.register=Xm;zt.getAll=function(){return Hs.slice()};zt.getById=function(r){return Hs.filter(function(e){return e.vars.id===r})[0]};Vm()&&tn.registerPlugin(zt);var ke,Ns,ot,gt,Vn,pt,ef,zl,xa,Zo,Uo,tl,an,jl,lh,xn,Fd,Bd,Os,qm,Xc,Ym,vn,ch,$m,Zm,or,uh,tf,Js,nf,Ko,hh,qc,nl=1,ln=Date.now,Yc=ln(),li=0,No=0,kd=function(e,t,n){var i=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},zd=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iT=function r(){return No&&requestAnimationFrame(r)},Hd=function(){return jl=1},Vd=function(){return jl=0},Si=function(e){return e},Oo=function(e){return Math.round(e*1e5)/1e5||0},Km=function(){return typeof window<"u"},Jm=function(){return ke||Km()&&(ke=window.gsap)&&ke.registerPlugin&&ke},as=function(e){return!!~ef.indexOf(e)},jm=function(e){return(e==="Height"?nf:ot["inner"+e])||Vn["client"+e]||pt["client"+e]},Qm=function(e){return xr(e,"getBoundingClientRect")||(as(e)?function(){return bl.width=ot.innerWidth,bl.height=nf,bl}:function(){return Xi(e)})},rT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?jm(s):e["client"+s])||0}},sT=function(e,t){return!t||~Li.indexOf(e)?Qm(e):function(){return bl}},Ri=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=xr(e,n))?o()-Qm(e)()[s]:as(e)?(Vn[n]||pt[n])-jm(i):e[n]-e["offset"+i])},il=function(e,t){for(var n=0;n<Os.length;n+=3)(!t||~t.indexOf(Os[n+1]))&&e(Os[n],Os[n+1],Os[n+2])},Bn=function(e){return typeof e=="string"},un=function(e){return typeof e=="function"},Fo=function(e){return typeof e=="number"},Vr=function(e){return typeof e=="object"},Co=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ls=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ds=Math.abs,eg="left",tg="top",rf="right",sf="bottom",ts="width",ns="height",Jo="Right",jo="Left",Qo="Top",ea="Bottom",Vt="padding",ii="margin",uo="Width",of="Height",qt="px",ri=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},oT=function(e){var t=ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Xi=function(e,t){var n=t&&ri(e)[lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Hl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ng=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},aT=function(e){return function(t){return ke.utils.snap(ng(e),t)}},af=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},lT=function(e){return function(t,n){return af(ng(e))(t,n.direction)}},rl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},jt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ol={toggleActions:"play",anticipatePin:0},Vl={top:0,left:0,center:.5,bottom:1,right:1},Sl=function(e,t){if(Bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Vl?Vl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},al=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=gt.createElement("div"),g=as(n)||xr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,x=S?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Yt?rf:sf)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Ml(_,0,i,S),_},Ml=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+uo]=1,s["border"+a+uo]=0,s[n.p]=t+"px",ke.set(e,s)},rt=[],fh={},ya,Xd=function(){return ln()-li>34&&(ya||(ya=requestAnimationFrame($i)))},Is=function(){(!vn||!vn.isPressed||vn.startX>pt.clientWidth)&&(at.cache++,vn?ya||(ya=requestAnimationFrame($i)):$i(),li||cs("scrollStart"),li=ln())},$c=function(){Zm=ot.innerWidth,$m=ot.innerHeight},Bo=function(e){at.cache++,(e===!0||!an&&!Ym&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!ch||Zm!==ot.innerWidth||Math.abs(ot.innerHeight-$m)>ot.innerHeight*.25))&&zl.restart(!0)},ls={},cT=[],ig=function r(){return jt(Qe,"scrollEnd",r)||Zr(!0)},cs=function(e){return ls[e]&&ls[e].map(function(t){return t()})||cT},Fn=[],rg=function(e){for(var t=0;t<Fn.length;t+=5)(!e||Fn[t+4]&&Fn[t+4].query===e)&&(Fn[t].style.cssText=Fn[t+1],Fn[t].getBBox&&Fn[t].setAttribute("transform",Fn[t+2]||""),Fn[t+3].uncache=1)},sg=function(){return at.forEach(function(e){return un(e)&&++e.cacheID&&(e.rec=e())})},lf=function(e,t){var n;for(xn=0;xn<rt.length;xn++)n=rt[xn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ko=!0,t&&rg(t),t||cs("revert")},og=function(e,t){at.cache++,(t||!yn)&&at.forEach(function(n){return un(n)&&n.cacheID++&&(n.rec=0)}),Bn(e)&&(ot.history.scrollRestoration=tf=e)},yn,is=0,qd,uT=function(){if(qd!==is){var e=qd=is;requestAnimationFrame(function(){return e===is&&Zr(!0)})}},ag=function(){pt.appendChild(Js),nf=!vn&&Js.offsetHeight||ot.innerHeight,pt.removeChild(Js)},Yd=function(e){return xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Zr=function(e,t){if(Vn=gt.documentElement,pt=gt.body,ef=[ot,gt,Vn,pt],li&&!e&&!Ko){Qt(Qe,"scrollEnd",ig);return}ag(),yn=Qe.isRefreshing=!0,Ko||sg();var n=cs("refreshInit");qm&&Qe.sort(),t||lf(),at.forEach(function(i){un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Ko=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),hh=1,Yd(!0),rt.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Yd(!1),hh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),og(tf,1),zl.pause(),is++,yn=2,$i(2),rt.forEach(function(i){return un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),yn=Qe.isRefreshing=!1,cs("refresh")},dh=0,El=1,ta,$i=function(e){if(e===2||!yn&&!Ko){Qe.isUpdating=!0,ta&&ta.update(0);var t=rt.length,n=ln(),i=n-Yc>=50,s=t&&rt[0].scroll();if(El=dh>s?-1:1,yn||(dh=s),i&&(li&&!jl&&n-li>200&&(li=0,cs("scrollEnd")),Uo=Yc,Yc=n),El<0){for(xn=t;xn-- >0;)rt[xn]&&rt[xn].update(0,i);El=1}else for(xn=0;xn<t;xn++)rt[xn]&&rt[xn].update(0,i);Qe.isUpdating=!1}ya=0},ph=[eg,tg,sf,rf,ii+ea,ii+Jo,ii+Qo,ii+jo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Tl=ph.concat([ts,ns,"boxSizing","max"+uo,"max"+of,"position",ii,Vt,Vt+Qo,Vt+Jo,Vt+ea,Vt+jo]),hT=function(e,t,n){js(n);var i=e._gsap;if(i.spacerIsNative)js(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Zc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ph.length,o=t.style,a=e.style,l;s--;)l=ph[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[sf]=a[rf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ts]=Hl(e,Sn)+qt,o[ns]=Hl(e,Yt)+qt,o[Vt]=a[ii]=a[tg]=a[eg]="0",js(i),a[ts]=a["max"+uo]=n[ts],a[ns]=a["max"+of]=n[ns],a[Vt]=n[Vt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fT=/([A-Z])/g,js=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fT,"-$1").toLowerCase())}},ll=function(e){for(var t=Tl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Tl[s],n[Tl[s]]);return i.t=e,i},dT=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},bl={left:0,top:0},$d=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){un(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Sl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Fo(e))d&&(e=ke.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ml(a,n,i,!0);else{un(t)&&(t=t(l));var x=(e||"0").split(" "),v,b,C,w;S=bn(t,l)||pt,v=Xi(S)||{},(!v||!v.left&&!v.top)&&ri(S).display==="none"&&(w=S.style.display,S.style.display="block",v=Xi(S),w?S.style.display=w:S.style.removeProperty("display")),b=Sl(x[0],v[i.d]),C=Sl(x[1]||"0",n),e=v[i.p]-c[i.p]-u+b+s-C,a&&Ml(a,C,i,n-C<20||a._isStart&&C>20),n-=n-C}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var I=e+n,M=o._isStart;m="scroll"+i.d2,Ml(o,I,i,M&&I>20||!M&&(h?Math.max(pt[m],Vn[m]):o.parentNode[m])<=I+1),h&&(c=Xi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qt))}return d&&S&&(m=Xi(S),d.seek(f),p=Xi(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},pT=/(webkit|moz|length|cssText|inset)/i,Zd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=ri(e);for(o in a)!+o&&!pT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},lg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},cl=function(e,t,n){var i={};i[t.p]="+="+n,ke.set(e,i)},Kd=function(e,t){var n=br(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=lg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,o.tween&&$i()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ke.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qt(e,"wheel",n.wheelHandler),Qe.isTouch&&Qt(e,"touchmove",n.wheelHandler),s},Qe=(function(){function r(t,n){Ns||r.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!No){this.update=this.refresh=this.kill=Si;return}n=Gd(Bn(n)||Fo(n)||n.nodeType?{trigger:n}:n,ol);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,x=s.once,v=s.snap,b=s.pinReparent,C=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Yt,N=!h&&h!==0,F=bn(n.scroller||ot),$=ke.core.getCache(F),Z=as(F),ie=("pinType"in n?n.pinType:xr(F,"pinType")||Z&&"fixed")==="fixed",te=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=N&&n.toggleActions.split(" "),k="markers"in n?n.markers:ol.markers,ue=Z?0:parseFloat(ri(F)["border"+y.p2+uo])||0,O=this,X=n.onRefreshInit&&function(){return n.onRefreshInit(O)},de=rT(F,Z,y),De=sT(F,Z),G=0,z=0,A=0,T=br(F,y),ne,se,J,fe,_e,P,V,W,ee,D,B,L,oe,xe,Ne,U,E,q,ae,he,le,Ce,ye,Ue,Te,Se,be,Xe,ze,Ae,Ke,H,Me,Ee,Pe,ve,pe,Fe,Ye;if(O._startClamp=O._endClamp=!1,O._dir=y,m*=45,O.scroller=F,O.scroll=w?w.time.bind(w):T,fe=T(),O.vars=n,i=i||n.animation,"refreshPriority"in n&&(qm=1,n.refreshPriority===-9999&&(ta=O)),$.tweenScroll=$.tweenScroll||{top:Kd(F,Yt),left:Kd(F,Sn)},O.tweenTo=ne=$.tweenScroll[y.p],O.scrubDuration=function(Re){Me=Fo(Re)&&Re,Me?H?H.duration(Re):H=ke.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Me,paused:!0,onComplete:function(){return p&&p(O)}}):(H&&H.progress(1).kill(),H=0)},i&&(i.vars.lazy=!1,i._initted&&!O.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),O.animation=i.pause(),i.scrollTrigger=O,O.scrubDuration(h),Ae=0,l||(l=i.vars.id)),v&&((!Vr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in pt.style&&ke.set(Z?[pt,Vn]:F,{scrollBehavior:"auto"}),at.forEach(function(Re){return un(Re)&&Re.target===(Z?gt.scrollingElement||Vn:F)&&(Re.smooth=!1)}),J=un(v.snapTo)?v.snapTo:v.snapTo==="labels"?aT(i):v.snapTo==="labelsDirectional"?lT(i):v.directional!==!1?function(Re,$e){return af(v.snapTo)(Re,ln()-z<500?0:$e.direction)}:ke.utils.snap(v.snapTo),Ee=v.duration||{min:.1,max:2},Ee=Vr(Ee)?Zo(Ee.min,Ee.max):Zo(Ee,Ee),Pe=ke.delayedCall(v.delay||Me/2||.1,function(){var Re=T(),$e=ln()-z<500,We=ne.tween;if(($e||Math.abs(O.getVelocity())<10)&&!We&&!jl&&G!==Re){var je=(Re-P)/xe,Ft=i&&!N?i.totalProgress():je,nt=$e?0:(Ft-Ke)/(ln()-Uo)*1e3||0,At=ke.utils.clamp(-je,1-je,Ds(nt/2)*nt/.185),Bt=je+(v.inertia===!1?0:At),Tt,xt,mt=v,Dn=mt.onStart,bt=mt.onInterrupt,fn=mt.onComplete;if(Tt=J(Bt,O),Fo(Tt)||(Tt=Bt),xt=Math.max(0,Math.round(P+Tt*xe)),Re<=V&&Re>=P&&xt!==Re){if(We&&!We._initted&&We.data<=Ds(xt-Re))return;v.inertia===!1&&(At=Tt-je),ne(xt,{duration:Ee(Ds(Math.max(Ds(Bt-Ft),Ds(Tt-Ft))*.185/nt/.05||0)),ease:v.ease||"power3",data:Ds(xt-Re),onInterrupt:function(){return Pe.restart(!0)&&bt&&Ls(O,bt)},onComplete:function(){O.update(),G=T(),i&&!N&&(H?H.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),Ae=Ke=i&&!N?i.totalProgress():O.progress,S&&S(O),fn&&Ls(O,fn)}},Re,At*xe,xt-Re-At*xe),Dn&&Ls(O,Dn,ne.tween)}}else O.isActive&&G!==Re&&Pe.restart(!0)}).pause()),l&&(fh[l]=O),f=O.trigger=bn(f||d!==!0&&d),Ye=f&&f._gsap&&f._gsap.stRevert,Ye&&(Ye=Ye(O)),d=d===!0?f:bn(d),Bn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===ii||(_=!_&&d.parentNode&&d.parentNode.style&&ri(d.parentNode).display==="flex"?!1:Vt),O.pin=d,se=ke.core.getCache(d),se.spacer?Ne=se.pinState:(C&&(C=bn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),se.spacerIsNative=!!C,C&&(se.spacerState=ll(C))),se.spacer=q=C||gt.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),se.pinState=Ne=ll(d)),n.force3D!==!1&&ke.set(d,{force3D:!0}),O.spacer=q=se.spacer,ze=ri(d),Ue=ze[_+y.os2],he=ke.getProperty(d),le=ke.quickSetter(d,y.a,qt),Zc(d,q,ze),E=ll(d)),k){L=Vr(k)?Gd(k,Wd):Wd,D=al("scroller-start",l,F,y,L,0),B=al("scroller-end",l,F,y,L,0,D),ae=D["offset"+y.op.d2];var ht=bn(xr(F,"content")||F);W=this.markerStart=al("start",l,ht,y,L,ae,0,w),ee=this.markerEnd=al("end",l,ht,y,L,ae,0,w),w&&(Fe=ke.quickSetter([W,ee],y.a,qt)),!ie&&!(Li.length&&xr(F,"fixedMarkers")===!0)&&(oT(Z?pt:F),ke.set([D,B],{force3D:!0}),Se=ke.quickSetter(D,y.a,qt),Xe=ke.quickSetter(B,y.a,qt))}if(w){var Ie=w.vars.onUpdate,He=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){O.update(0,0,1),Ie&&Ie.apply(w,He||[])})}if(O.previous=function(){return rt[rt.indexOf(O)-1]},O.next=function(){return rt[rt.indexOf(O)+1]},O.revert=function(Re,$e){if(!$e)return O.kill(!0);var We=Re!==!1||!O.enabled,je=an;We!==O.isReverted&&(We&&(ve=Math.max(T(),O.scroll.rec||0),A=O.progress,pe=i&&i.progress()),W&&[W,ee,D,B].forEach(function(Ft){return Ft.style.display=We?"none":"block"}),We&&(an=O,O.update(We)),d&&(!b||!O.isActive)&&(We?hT(d,q,Ne):Zc(d,q,ri(d),Te)),We||O.update(We),an=je,O.isReverted=We)},O.refresh=function(Re,$e,We,je){if(!((an||!O.enabled)&&!$e)){if(d&&Re&&li){Qt(r,"scrollEnd",ig);return}!yn&&X&&X(O),an=O,ne.tween&&!We&&(ne.tween.kill(),ne.tween=0),H&&H.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var Ft=de(),nt=De(),At=w?w.duration():Ri(F,y),Bt=xe<=.01||!xe,Tt=0,xt=je||0,mt=Vr(We)?We.end:n.end,Dn=n.endTrigger||f,bt=Vr(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),fn=O.pinnedContainer=n.pinnedContainer&&bn(n.pinnedContainer,O),jn=f&&Math.max(0,rt.indexOf(O))||0,Xt=jn,R,Y,re,ce,j,me,we,Be,Oe,qe,Ge,Ve,tt;for(k&&Vr(We)&&(Ve=ke.getProperty(D,y.p),tt=ke.getProperty(B,y.p));Xt-- >0;)me=rt[Xt],me.end||me.refresh(0,1)||(an=O),we=me.pin,we&&(we===f||we===d||we===fn)&&!me.isReverted&&(qe||(qe=[]),qe.unshift(me),me.revert(!0,!0)),me!==rt[Xt]&&(jn--,Xt--);for(un(bt)&&(bt=bt(O)),bt=kd(bt,"start",O),P=$d(bt,f,Ft,y,T(),W,D,O,nt,ue,ie,At,w,O._startClamp&&"_startClamp")||(d?-.001:0),un(mt)&&(mt=mt(O)),Bn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Bn(bt)?bt.split(" ")[0]:"")+mt:(Tt=Sl(mt.substr(2),Ft),mt=Bn(bt)?bt:(w?ke.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,P):P)+Tt,Dn=f)),mt=kd(mt,"end",O),V=Math.max(P,$d(mt||(Dn?"100% 0":At),Dn,Ft,y,T()+Tt,ee,B,O,nt,ue,ie,At,w,O._endClamp&&"_endClamp"))||-.001,Tt=0,Xt=jn;Xt--;)me=rt[Xt]||{},we=me.pin,we&&me.start-me._pinPush<=P&&!w&&me.end>0&&(R=me.end-(O._startClamp?Math.max(0,me.start):me.start),(we===f&&me.start-me._pinPush<P||we===fn)&&isNaN(bt)&&(Tt+=R*(1-me.progress)),we===d&&(xt+=R));if(P+=Tt,V+=Tt,O._startClamp&&(O._startClamp+=Tt),O._endClamp&&!yn&&(O._endClamp=V||-.001,V=Math.min(V,Ri(F,y))),xe=V-P||(P-=.01)&&.001,Bt&&(A=ke.utils.clamp(0,1,ke.utils.normalize(P,V,ve))),O._pinPush=xt,W&&Tt&&(R={},R[y.a]="+="+Tt,fn&&(R[y.p]="-="+T()),ke.set([W,ee],R)),d&&!(hh&&O.end>=Ri(F,y)))R=ri(d),ce=y===Yt,re=T(),Ce=parseFloat(he(y.a))+xt,!At&&V>1&&(Ge=(Z?gt.scrollingElement||Vn:F).style,Ge={style:Ge,value:Ge["overflow"+y.a.toUpperCase()]},Z&&ri(pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ge.style["overflow"+y.a.toUpperCase()]="scroll")),Zc(d,q,R),E=ll(d),Y=Xi(d,!0),Be=ie&&br(F,ce?Sn:Yt)(),_?(Te=[_+y.os2,xe+xt+qt],Te.t=q,Xt=_===Vt?Hl(d,y)+xe+xt:0,Xt&&(Te.push(y.d,Xt+qt),q.style.flexBasis!=="auto"&&(q.style.flexBasis=Xt+qt)),js(Te),fn&&rt.forEach(function(ct){ct.pin===fn&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),ie&&T(ve)):(Xt=Hl(d,y),Xt&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=Xt+qt)),ie&&(j={top:Y.top+(ce?re-P:Be)+qt,left:Y.left+(ce?Be:re-P)+qt,boxSizing:"border-box",position:"fixed"},j[ts]=j["max"+uo]=Math.ceil(Y.width)+qt,j[ns]=j["max"+of]=Math.ceil(Y.height)+qt,j[ii]=j[ii+Qo]=j[ii+Jo]=j[ii+ea]=j[ii+jo]="0",j[Vt]=R[Vt],j[Vt+Qo]=R[Vt+Qo],j[Vt+Jo]=R[Vt+Jo],j[Vt+ea]=R[Vt+ea],j[Vt+jo]=R[Vt+jo],U=dT(Ne,j,b),yn&&T(0)),i?(Oe=i._initted,Xc(1),i.render(i.duration(),!0,!0),ye=he(y.a)-Ce+xe+xt,be=Math.abs(xe-ye)>1,ie&&be&&U.splice(U.length-2,2),i.render(0,!0,!0),Oe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Xc(0)):ye=xe,Ge&&(Ge.value?Ge.style["overflow"+y.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+y.a));else if(f&&T()&&!w)for(Y=f.parentNode;Y&&Y!==pt;)Y._pinOffset&&(P-=Y._pinOffset,V-=Y._pinOffset),Y=Y.parentNode;qe&&qe.forEach(function(ct){return ct.revert(!1,!0)}),O.start=P,O.end=V,fe=_e=yn?ve:T(),!w&&!yn&&(fe<ve&&T(ve),O.scroll.rec=0),O.revert(!1,!0),z=ln(),Pe&&(G=-1,Pe.restart(!0)),an=0,i&&N&&(i._initted||pe)&&i.progress()!==pe&&i.progress(pe||0,!0).render(i.time(),!0,!0),(Bt||A!==O.progress||w||g||i&&!i._initted)&&(i&&!N&&(i._initted||A||i.vars.immediateRender!==!1)&&i.totalProgress(w&&P<-.001&&!A?ke.utils.normalize(P,V,0):A,!0),O.progress=Bt||(fe-P)/xe===A?0:A),d&&_&&(q._pinOffset=Math.round(O.progress*ye)),H&&H.invalidate(),isNaN(Ve)||(Ve-=ke.getProperty(D,y.p),tt-=ke.getProperty(B,y.p),cl(D,y,Ve),cl(W,y,Ve-(je||0)),cl(B,y,tt),cl(ee,y,tt-(je||0))),Bt&&!yn&&O.update(),u&&!yn&&!oe&&(oe=!0,u(O),oe=!1)}},O.getVelocity=function(){return(T()-_e)/(ln()-Uo)*1e3||0},O.endAnimation=function(){Co(O.callbackAnimation),i&&(H?H.progress(1):i.paused()?N||Co(i,O.direction<0,1):Co(i,i.reversed()))},O.labelToScroll=function(Re){return i&&i.labels&&(P||O.refresh()||P)+i.labels[Re]/i.duration()*xe||0},O.getTrailing=function(Re){var $e=rt.indexOf(O),We=O.direction>0?rt.slice(0,$e).reverse():rt.slice($e+1);return(Bn(Re)?We.filter(function(je){return je.vars.preventOverlaps===Re}):We).filter(function(je){return O.direction>0?je.end<=P:je.start>=V})},O.update=function(Re,$e,We){if(!(w&&!We&&!Re)){var je=yn===!0?ve:O.scroll(),Ft=Re?0:(je-P)/xe,nt=Ft<0?0:Ft>1?1:Ft||0,At=O.progress,Bt,Tt,xt,mt,Dn,bt,fn,jn;if($e&&(_e=fe,fe=w?T():je,v&&(Ke=Ae,Ae=i&&!N?i.totalProgress():nt)),m&&d&&!an&&!nl&&li&&(!nt&&P<je+(je-_e)/(ln()-Uo)*m?nt=1e-4:nt===1&&V>je+(je-_e)/(ln()-Uo)*m&&(nt=.9999)),nt!==At&&O.enabled){if(Bt=O.isActive=!!nt&&nt<1,Tt=!!At&&At<1,bt=Bt!==Tt,Dn=bt||!!nt!=!!At,O.direction=nt>At?1:-1,O.progress=nt,Dn&&!an&&(xt=nt&&!At?0:nt===1?1:At===1?2:3,N&&(mt=!bt&&K[xt+1]!=="none"&&K[xt+1]||K[xt],jn=i&&(mt==="complete"||mt==="reset"||mt in i))),M&&(bt||jn)&&(jn||h||!i)&&(un(M)?M(O):O.getTrailing(M).forEach(function(re){return re.endAnimation()})),N||(H&&!an&&!nl?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",nt,i._tTime/i._tDur):(H.vars.totalProgress=nt,H.invalidate().restart())):i&&i.totalProgress(nt,!!(an&&(z||Re)))),d){if(Re&&_&&(q.style[_+y.os2]=Ue),!ie)le(Oo(Ce+ye*nt));else if(Dn){if(fn=!Re&&nt>At&&V+1>je&&je+1>=Ri(F,y),b)if(!Re&&(Bt||fn)){var Xt=Xi(d,!0),R=je-P;Zd(d,pt,Xt.top+(y===Yt?R:0)+qt,Xt.left+(y===Yt?0:R)+qt)}else Zd(d,q);js(Bt||fn?U:E),be&&nt<1&&Bt||le(Ce+(nt===1&&!fn?ye:0))}}v&&!ne.tween&&!an&&!nl&&Pe.restart(!0),a&&(bt||x&&nt&&(nt<1||!qc))&&xa(a.targets).forEach(function(re){return re.classList[Bt||x?"add":"remove"](a.className)}),o&&!N&&!Re&&o(O),Dn&&!an?(N&&(jn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(O)),(bt||!qc)&&(c&&bt&&Ls(O,c),te[xt]&&Ls(O,te[xt]),x&&(nt===1?O.kill(!1,1):te[xt]=0),bt||(xt=nt===1?1:3,te[xt]&&Ls(O,te[xt]))),I&&!Bt&&Math.abs(O.getVelocity())>(Fo(I)?I:2500)&&(Co(O.callbackAnimation),H?H.progress(1):Co(i,mt==="reverse"?1:!nt,1))):N&&o&&!an&&o(O)}if(Xe){var Y=w?je/w.duration()*(w._caScrollDist||0):je;Se(Y+(D._isFlipped?1:0)),Xe(Y)}Fe&&Fe(-je/w.duration()*(w._caScrollDist||0))}},O.enable=function(Re,$e){O.enabled||(O.enabled=!0,Qt(F,"resize",Bo),Z||Qt(F,"scroll",Is),X&&Qt(r,"refreshInit",X),Re!==!1&&(O.progress=A=0,fe=_e=G=T()),$e!==!1&&O.refresh())},O.getTween=function(Re){return Re&&ne?ne.tween:H},O.setPositions=function(Re,$e,We,je){if(w){var Ft=w.scrollTrigger,nt=w.duration(),At=Ft.end-Ft.start;Re=Ft.start+At*Re/nt,$e=Ft.start+At*$e/nt}O.refresh(!1,!1,{start:zd(Re,We&&!!O._startClamp),end:zd($e,We&&!!O._endClamp)},je),O.update()},O.adjustPinSpacing=function(Re){if(Te&&Re){var $e=Te.indexOf(y.d)+1;Te[$e]=parseFloat(Te[$e])+Re+qt,Te[1]=parseFloat(Te[1])+Re+qt,js(Te)}},O.disable=function(Re,$e){if(Re!==!1&&O.revert(!0,!0),O.enabled&&(O.enabled=O.isActive=!1,$e||H&&H.pause(),ve=0,se&&(se.uncache=1),X&&jt(r,"refreshInit",X),Pe&&(Pe.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!Z)){for(var We=rt.length;We--;)if(rt[We].scroller===F&&rt[We]!==O)return;jt(F,"resize",Bo),Z||jt(F,"scroll",Is)}},O.kill=function(Re,$e){O.disable(Re,$e),H&&!$e&&H.kill(),l&&delete fh[l];var We=rt.indexOf(O);We>=0&&rt.splice(We,1),We===xn&&El>0&&xn--,We=0,rt.forEach(function(je){return je.scroller===O.scroller&&(We=1)}),We||yn||(O.scroll.rec=0),i&&(i.scrollTrigger=null,Re&&i.revert({kill:!1}),$e||i.kill()),W&&[W,ee,D,B].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),ta===O&&(ta=0),d&&(se&&(se.uncache=1),We=0,rt.forEach(function(je){return je.pin===d&&We++}),We||(se.spacer=0)),n.onKill&&n.onKill(O)},rt.push(O),O.enable(!1,!1),Ye&&Ye(O),i&&i.add&&!xe){var et=O.update;O.update=function(){O.update=et,at.cache++,P||V||O.refresh()},ke.delayedCall(.01,O.update),xe=.01,P=V=0}else O.refresh();d&&uT()},r.register=function(n){return Ns||(ke=n||Jm(),Km()&&window.document&&r.enable(),Ns=No),Ns},r.defaults=function(n){if(n)for(var i in n)ol[i]=n[i];return ol},r.disable=function(n,i){No=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),jt(ot,"wheel",Is),jt(gt,"scroll",Is),clearInterval(tl),jt(gt,"touchcancel",Si),jt(pt,"touchstart",Si),rl(jt,gt,"pointerdown,touchstart,mousedown",Hd),rl(jt,gt,"pointerup,touchend,mouseup",Vd),zl.kill(),il(jt);for(var s=0;s<at.length;s+=3)sl(jt,at[s],at[s+1]),sl(jt,at[s],at[s+2])},r.enable=function(){if(ot=window,gt=document,Vn=gt.documentElement,pt=gt.body,ke){if(xa=ke.utils.toArray,Zo=ke.utils.clamp,uh=ke.core.context||Si,Xc=ke.core.suppressOverwrites||Si,tf=ot.history.scrollRestoration||"auto",dh=ot.pageYOffset||0,ke.core.globals("ScrollTrigger",r),pt){No=1,Js=document.createElement("div"),Js.style.height="100vh",Js.style.position="absolute",ag(),iT(),zt.register(ke),r.isTouch=zt.isTouch,or=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ch=zt.isTouch===1,Qt(ot,"wheel",Is),ef=[ot,gt,Vn,pt],ke.matchMedia?(r.matchMedia=function(u){var h=ke.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},ke.addEventListener("matchMediaInit",function(){sg(),lf()}),ke.addEventListener("matchMediaRevert",function(){return rg()}),ke.addEventListener("matchMedia",function(){Zr(0,1),cs("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return $c(),$c})):console.warn("Requires GSAP 3.11.0 or later"),$c(),Qt(gt,"scroll",Is);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,o=ke.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Xi(pt),Yt.m=Math.round(a.top+Yt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),tl=setInterval(Xd,250),ke.delayedCall(.5,function(){return nl=0}),Qt(gt,"touchcancel",Si),Qt(pt,"touchstart",Si),rl(Qt,gt,"pointerdown,touchstart,mousedown",Hd),rl(Qt,gt,"pointerup,touchend,mouseup",Vd),lh=ke.utils.checkPrefix("transform"),Tl.push(lh),Ns=ln(),zl=ke.delayedCall(.2,Zr).pause(),Os=[gt,"visibilitychange",function(){var u=ot.innerWidth,h=ot.innerHeight;gt.hidden?(Fd=u,Bd=h):(Fd!==u||Bd!==h)&&Bo()},gt,"DOMContentLoaded",Zr,ot,"load",Zr,ot,"resize",Bo],il(Qt),rt.forEach(function(u){return u.enable(0,1)}),l=0;l<at.length;l+=3)sl(jt,at[l],at[l+1]),sl(jt,at[l],at[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(qc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(tl)||(tl=i)&&setInterval(Xd,i),"ignoreMobileResize"in n&&(ch=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(il(jt)||il(Qt,n.autoRefreshEvents||"none"),Ym=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=bn(n),o=at.indexOf(s),a=as(s);~o&&at.splice(o,a?6:2),i&&(a?Li.unshift(ot,i,pt,i,Vn,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Bn(n)?bn(n):n).getBoundingClientRect(),a=o[s?ts:ns]*i||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},r.positionInViewport=function(n,i,s){Bn(n)&&(n=bn(n));var o=n.getBoundingClientRect(),a=o[s?ts:ns],l=i==null?a/2:i in Vl?Vl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ls.killAll||[];ls={},i.forEach(function(s){return s()})}},r})();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?xa(r).forEach(function(e){if(e&&e.style){var t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),uh())}}):Fn};Qe.revert=function(r,e){return lf(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Bo(!0):(Ns||Qe.register())&&Zr(!0)};Qe.update=function(r){return++at.cache&&$i(r===!0?2:0)};Qe.clearScrollMemory=og;Qe.maxScroll=function(r,e){return Ri(r,e?Sn:Yt)};Qe.getScrollFunc=function(r,e){return br(bn(r),e?Sn:Yt)};Qe.getById=function(r){return fh[r]};Qe.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!li};Qe.snapDirectional=af;Qe.addEventListener=function(r,e){var t=ls[r]||(ls[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=ls[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=ke.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return un(s)&&(s=s(),Qt(Qe,"refresh",function(){return s=e.batchMax()})),xa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var Jd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Kc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===Vn&&r(pt,t)},ul={auto:1,scroll:1},mT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ke.core.getCache(s),a=ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ul[(l=ri(s)).overflowY]||ul[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!as(s)&&(ul[(l=ri(s)).overflowY]||ul[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},cg=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&mT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qt(gt,zt.eventTypes[0],Qd,!1,!0)},onDisable:function(){return jt(gt,zt.eventTypes[0],Qd,!0)}})},gT=/(input|label|select|textarea)/i,jd,Qd=function(e){var t=gT.test(e.target.tagName);(t||jd)&&(e._gsapAllow=!0,jd=t)},_T=function(e){Vr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=bn(e.target)||Vn,u=ke.core.globals().ScrollSmoother,h=u&&u.get(),f=or&&(e.content&&bn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=br(c,Yt),_=br(c,Sn),g=1,m=(zt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,S=un(i)?function(){return i(a)}:function(){return i||2.8},x,v,b=cg(c,e.type,!0,s),C=function(){return v=!1},w=Si,I=Si,M=function(){l=Ri(c,Yt),I=Zo(or?1:0,l),n&&(w=Zo(0,Ri(c,Sn))),x=is},y=function(){f._gsap.y=Oo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(v){requestAnimationFrame(C);var k=Oo(a.deltaY/2),ue=I(d.v-k);if(f&&ue!==d.v+d.offset){d.offset=ue-d.v;var O=Oo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",f._gsap.y=O+"px",d.cacheID=at.cache,$i()}return!0}d.offset&&y(),v=!0},F,$,Z,ie,te=function(){M(),F.isActive()&&F.vars.scrollY>l&&(d()>l?F.progress(1)&&d(l):F.resetTo("scrollY",l))};return f&&ke.set(f,{y:"+=0"}),e.ignoreCheck=function(K){return or&&K.type==="touchmove"&&N()||g>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){v=!1;var K=g;g=Oo((ot.visualViewport&&ot.visualViewport.scale||1)/m),F.pause(),K!==g&&Kc(c,g>1.01?!0:n?!1:"x"),$=_(),Z=d(),M(),x=is},e.onRelease=e.onGestureStart=function(K,k){if(d.offset&&y(),!k)ie.restart(!0);else{at.cache++;var ue=S(),O,X;n&&(O=_(),X=O+ue*.05*-K.velocityX/.227,ue*=Jd(_,O,X,Ri(c,Sn)),F.vars.scrollX=w(X)),O=d(),X=O+ue*.05*-K.velocityY/.227,ue*=Jd(d,O,X,Ri(c,Yt)),F.vars.scrollY=I(X),F.invalidate().duration(ue).play(.01),(or&&F.vars.scrollY>=l||O>=l-1)&&ke.to({},{onUpdate:te,duration:ue})}o&&o(K)},e.onWheel=function(){F._ts&&F.pause(),ln()-p>1e3&&(x=0,p=ln())},e.onChange=function(K,k,ue,O,X){if(is!==x&&M(),k&&n&&_(w(O[2]===k?$+(K.startX-K.x):_()+k-O[1])),ue){d.offset&&y();var de=X[2]===ue,De=de?Z+K.startY-K.y:d()+ue-X[1],G=I(De);de&&De!==G&&(Z+=G-De),d(G)}(ue||k)&&$i()},e.onEnable=function(){Kc(c,n?!1:"x"),Qe.addEventListener("refresh",te),Qt(ot,"resize",te),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){Kc(c,!0),jt(ot,"resize",te),Qe.removeEventListener("refresh",te),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=or,or&&!d()&&d(1),or&&ke.ticker.add(Si),ie=a._dc,F=ke.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lg(d,d(),function(){return F.pause()})},onUpdate:$i,onComplete:ie.vars.onComplete}),a};Qe.sort=function(r){if(un(r))return rt.sort(r);var e=ot.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ot.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new zt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return vn;if(r===!0&&vn)return vn.enable();if(r===!1){vn&&vn.kill(),vn=r;return}var e=r instanceof zt?r:_T(r);return vn&&vn.target===e.target&&vn.kill(),as(e.target)&&(vn=e),e};Qe.core={_getVelocityProp:ah,_inputObserver:cg,_scrollers:at,_proxies:Li,bridge:{ss:function(){li||cs("scrollStart"),li=ln()},ref:function(){return an}}};Jm()&&ke.registerPlugin(Qe);const vT=kn;class Gl extends Ih{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,o=new W0(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(G,z){if(G.nodeType!==1)return;const A=v(G);let T=!1,ne=null;switch(G.nodeName){case"svg":z=_(G,z);break;case"style":s(G);break;case"g":z=_(G,z);break;case"path":z=_(G,z),G.hasAttribute("d")&&(ne=i(G));break;case"rect":z=_(G,z),ne=l(G);break;case"polygon":z=_(G,z),ne=c(G);break;case"polyline":z=_(G,z),ne=u(G);break;case"circle":z=_(G,z),ne=h(G);break;case"ellipse":z=_(G,z),ne=f(G);break;case"line":z=_(G,z),ne=d(G);break;case"defs":T=!0;break;case"use":z=_(G,z);const fe=(G.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),_e=G.viewportElement.getElementById(fe);_e?n(_e,z):console.warn("SVGLoader: 'use node' references non-existent node id: "+fe);break}ne&&(z.fill!==void 0&&z.fill!=="none"&&ne.color.setStyle(z.fill,vT),C(ne,X),F.push(ne),ne.userData={node:G,style:z});const se=G.childNodes;for(let J=0;J<se.length;J++){const fe=se[J];T&&fe.nodeName!=="style"&&fe.nodeName!=="defs"||n(fe,z)}A&&(Z.pop(),Z.length>0?X.copy(Z[Z.length-1]):X.identity())}function i(G){const z=new Ir,A=new ge,T=new ge,ne=new ge;let se=!0,J=!1;const fe=G.getAttribute("d");if(fe===""||fe==="none")return null;const _e=fe.match(/[a-df-z][^a-df-z]*/ig);for(let P=0,V=_e.length;P<V;P++){const W=_e[P],ee=W.charAt(0),D=W.slice(1).trim();se===!0&&(J=!0,se=!1);let B;switch(ee){case"M":B=m(D);for(let L=0,oe=B.length;L<oe;L+=2)A.x=B[L+0],A.y=B[L+1],T.x=A.x,T.y=A.y,L===0?z.moveTo(A.x,A.y):z.lineTo(A.x,A.y),L===0&&ne.copy(A);break;case"H":B=m(D);for(let L=0,oe=B.length;L<oe;L++)A.x=B[L],T.x=A.x,T.y=A.y,z.lineTo(A.x,A.y),L===0&&J===!0&&ne.copy(A);break;case"V":B=m(D);for(let L=0,oe=B.length;L<oe;L++)A.y=B[L],T.x=A.x,T.y=A.y,z.lineTo(A.x,A.y),L===0&&J===!0&&ne.copy(A);break;case"L":B=m(D);for(let L=0,oe=B.length;L<oe;L+=2)A.x=B[L+0],A.y=B[L+1],T.x=A.x,T.y=A.y,z.lineTo(A.x,A.y),L===0&&J===!0&&ne.copy(A);break;case"C":B=m(D);for(let L=0,oe=B.length;L<oe;L+=6)z.bezierCurveTo(B[L+0],B[L+1],B[L+2],B[L+3],B[L+4],B[L+5]),T.x=B[L+2],T.y=B[L+3],A.x=B[L+4],A.y=B[L+5],L===0&&J===!0&&ne.copy(A);break;case"S":B=m(D);for(let L=0,oe=B.length;L<oe;L+=4)z.bezierCurveTo(g(A.x,T.x),g(A.y,T.y),B[L+0],B[L+1],B[L+2],B[L+3]),T.x=B[L+0],T.y=B[L+1],A.x=B[L+2],A.y=B[L+3],L===0&&J===!0&&ne.copy(A);break;case"Q":B=m(D);for(let L=0,oe=B.length;L<oe;L+=4)z.quadraticCurveTo(B[L+0],B[L+1],B[L+2],B[L+3]),T.x=B[L+0],T.y=B[L+1],A.x=B[L+2],A.y=B[L+3],L===0&&J===!0&&ne.copy(A);break;case"T":B=m(D);for(let L=0,oe=B.length;L<oe;L+=2){const xe=g(A.x,T.x),Ne=g(A.y,T.y);z.quadraticCurveTo(xe,Ne,B[L+0],B[L+1]),T.x=xe,T.y=Ne,A.x=B[L+0],A.y=B[L+1],L===0&&J===!0&&ne.copy(A)}break;case"A":B=m(D,[3,4],7);for(let L=0,oe=B.length;L<oe;L+=7){if(B[L+5]==A.x&&B[L+6]==A.y)continue;const xe=A.clone();A.x=B[L+5],A.y=B[L+6],T.x=A.x,T.y=A.y,o(z,B[L],B[L+1],B[L+2],B[L+3],B[L+4],xe,A),L===0&&J===!0&&ne.copy(A)}break;case"m":B=m(D);for(let L=0,oe=B.length;L<oe;L+=2)A.x+=B[L+0],A.y+=B[L+1],T.x=A.x,T.y=A.y,L===0?z.moveTo(A.x,A.y):z.lineTo(A.x,A.y),L===0&&ne.copy(A);break;case"h":B=m(D);for(let L=0,oe=B.length;L<oe;L++)A.x+=B[L],T.x=A.x,T.y=A.y,z.lineTo(A.x,A.y),L===0&&J===!0&&ne.copy(A);break;case"v":B=m(D);for(let L=0,oe=B.length;L<oe;L++)A.y+=B[L],T.x=A.x,T.y=A.y,z.lineTo(A.x,A.y),L===0&&J===!0&&ne.copy(A);break;case"l":B=m(D);for(let L=0,oe=B.length;L<oe;L+=2)A.x+=B[L+0],A.y+=B[L+1],T.x=A.x,T.y=A.y,z.lineTo(A.x,A.y),L===0&&J===!0&&ne.copy(A);break;case"c":B=m(D);for(let L=0,oe=B.length;L<oe;L+=6)z.bezierCurveTo(A.x+B[L+0],A.y+B[L+1],A.x+B[L+2],A.y+B[L+3],A.x+B[L+4],A.y+B[L+5]),T.x=A.x+B[L+2],T.y=A.y+B[L+3],A.x+=B[L+4],A.y+=B[L+5],L===0&&J===!0&&ne.copy(A);break;case"s":B=m(D);for(let L=0,oe=B.length;L<oe;L+=4)z.bezierCurveTo(g(A.x,T.x),g(A.y,T.y),A.x+B[L+0],A.y+B[L+1],A.x+B[L+2],A.y+B[L+3]),T.x=A.x+B[L+0],T.y=A.y+B[L+1],A.x+=B[L+2],A.y+=B[L+3],L===0&&J===!0&&ne.copy(A);break;case"q":B=m(D);for(let L=0,oe=B.length;L<oe;L+=4)z.quadraticCurveTo(A.x+B[L+0],A.y+B[L+1],A.x+B[L+2],A.y+B[L+3]),T.x=A.x+B[L+0],T.y=A.y+B[L+1],A.x+=B[L+2],A.y+=B[L+3],L===0&&J===!0&&ne.copy(A);break;case"t":B=m(D);for(let L=0,oe=B.length;L<oe;L+=2){const xe=g(A.x,T.x),Ne=g(A.y,T.y);z.quadraticCurveTo(xe,Ne,A.x+B[L+0],A.y+B[L+1]),T.x=xe,T.y=Ne,A.x=A.x+B[L+0],A.y=A.y+B[L+1],L===0&&J===!0&&ne.copy(A)}break;case"a":B=m(D,[3,4],7);for(let L=0,oe=B.length;L<oe;L+=7){if(B[L+5]==0&&B[L+6]==0)continue;const xe=A.clone();A.x+=B[L+5],A.y+=B[L+6],T.x=A.x,T.y=A.y,o(z,B[L],B[L+1],B[L+2],B[L+3],B[L+4],xe,A),L===0&&J===!0&&ne.copy(A)}break;case"Z":case"z":z.currentPath.autoClose=!0,z.currentPath.curves.length>0&&(A.copy(ne),z.currentPath.currentPoint.copy(A),se=!0);break;default:console.warn(W)}J=!1}return z}function s(G){if(!(!G.sheet||!G.sheet.cssRules||!G.sheet.cssRules.length))for(let z=0;z<G.sheet.cssRules.length;z++){const A=G.sheet.cssRules[z];if(A.type!==1)continue;const T=A.selectorText.split(/,/gm).filter(Boolean).map(ne=>ne.trim());for(let ne=0;ne<T.length;ne++){const se=Object.fromEntries(Object.entries(A.style).filter(([,J])=>J!==""));$[T[ne]]=Object.assign($[T[ne]]||{},se)}}}function o(G,z,A,T,ne,se,J,fe){if(z==0||A==0){G.lineTo(fe.x,fe.y);return}T=T*Math.PI/180,z=Math.abs(z),A=Math.abs(A);const _e=(J.x-fe.x)/2,P=(J.y-fe.y)/2,V=Math.cos(T)*_e+Math.sin(T)*P,W=-Math.sin(T)*_e+Math.cos(T)*P;let ee=z*z,D=A*A;const B=V*V,L=W*W,oe=B/ee+L/D;if(oe>1){const ye=Math.sqrt(oe);z=ye*z,A=ye*A,ee=z*z,D=A*A}const xe=ee*L+D*B,Ne=(ee*D-xe)/xe;let U=Math.sqrt(Math.max(0,Ne));ne===se&&(U=-U);const E=U*z*W/A,q=-U*A*V/z,ae=Math.cos(T)*E-Math.sin(T)*q+(J.x+fe.x)/2,he=Math.sin(T)*E+Math.cos(T)*q+(J.y+fe.y)/2,le=a(1,0,(V-E)/z,(W-q)/A),Ce=a((V-E)/z,(W-q)/A,(-V-E)/z,(-W-q)/A)%(Math.PI*2);G.currentPath.absellipse(ae,he,z,A,le,le+Ce,se===0,T)}function a(G,z,A,T){const ne=G*A+z*T,se=Math.sqrt(G*G+z*z)*Math.sqrt(A*A+T*T);let J=Math.acos(Math.max(-1,Math.min(1,ne/se)));return G*T-z*A<0&&(J=-J),J}function l(G){const z=x(G.getAttribute("x")||0),A=x(G.getAttribute("y")||0),T=x(G.getAttribute("rx")||G.getAttribute("ry")||0),ne=x(G.getAttribute("ry")||G.getAttribute("rx")||0),se=x(G.getAttribute("width")),J=x(G.getAttribute("height")),fe=1-.551915024494,_e=new Ir;return _e.moveTo(z+T,A),_e.lineTo(z+se-T,A),(T!==0||ne!==0)&&_e.bezierCurveTo(z+se-T*fe,A,z+se,A+ne*fe,z+se,A+ne),_e.lineTo(z+se,A+J-ne),(T!==0||ne!==0)&&_e.bezierCurveTo(z+se,A+J-ne*fe,z+se-T*fe,A+J,z+se-T,A+J),_e.lineTo(z+T,A+J),(T!==0||ne!==0)&&_e.bezierCurveTo(z+T*fe,A+J,z,A+J-ne*fe,z,A+J-ne),_e.lineTo(z,A+ne),(T!==0||ne!==0)&&_e.bezierCurveTo(z,A+ne*fe,z+T*fe,A,z+T,A),_e}function c(G){function z(se,J,fe){const _e=x(J),P=x(fe);ne===0?T.moveTo(_e,P):T.lineTo(_e,P),ne++}const A=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ir;let ne=0;return G.getAttribute("points").replace(A,z),T.currentPath.autoClose=!0,T}function u(G){function z(se,J,fe){const _e=x(J),P=x(fe);ne===0?T.moveTo(_e,P):T.lineTo(_e,P),ne++}const A=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ir;let ne=0;return G.getAttribute("points").replace(A,z),T.currentPath.autoClose=!1,T}function h(G){const z=x(G.getAttribute("cx")||0),A=x(G.getAttribute("cy")||0),T=x(G.getAttribute("r")||0),ne=new Xs;ne.absarc(z,A,T,0,Math.PI*2);const se=new Ir;return se.subPaths.push(ne),se}function f(G){const z=x(G.getAttribute("cx")||0),A=x(G.getAttribute("cy")||0),T=x(G.getAttribute("rx")||0),ne=x(G.getAttribute("ry")||0),se=new Xs;se.absellipse(z,A,T,ne,0,Math.PI*2);const J=new Ir;return J.subPaths.push(se),J}function d(G){const z=x(G.getAttribute("x1")||0),A=x(G.getAttribute("y1")||0),T=x(G.getAttribute("x2")||0),ne=x(G.getAttribute("y2")||0),se=new Ir;return se.moveTo(z,A),se.lineTo(T,ne),se.currentPath.autoClose=!1,se}function _(G,z){z=Object.assign({},z);let A={};if(G.hasAttribute("class")){const J=G.getAttribute("class").split(/\s/).filter(Boolean).map(fe=>fe.trim());for(let fe=0;fe<J.length;fe++)A=Object.assign(A,$["."+J[fe]])}G.hasAttribute("id")&&(A=Object.assign(A,$["#"+G.getAttribute("id")]));function T(J,fe,_e){_e===void 0&&(_e=function(V){return V.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),V}),G.hasAttribute(J)&&(z[fe]=_e(G.getAttribute(J))),A[J]&&(z[fe]=_e(A[J])),G.style&&G.style[J]!==""&&(z[fe]=_e(G.style[J]))}function ne(J){return Math.max(0,Math.min(1,x(J)))}function se(J){return Math.max(0,x(J))}return T("fill","fill"),T("fill-opacity","fillOpacity",ne),T("fill-rule","fillRule"),T("opacity","opacity",ne),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",ne),T("stroke-width","strokeWidth",se),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",se),T("visibility","visibility"),z}function g(G,z){return G-(z-G)}function m(G,z,A){if(typeof G!="string")throw new TypeError("Invalid input: "+typeof G);const T={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ne=0,se=1,J=2,fe=3;let _e=ne,P=!0,V="",W="";const ee=[];function D(xe,Ne,U){const E=new SyntaxError('Unexpected character "'+xe+'" at index '+Ne+".");throw E.partial=U,E}function B(){V!==""&&(W===""?ee.push(Number(V)):ee.push(Number(V)*Math.pow(10,Number(W)))),V="",W=""}let L;const oe=G.length;for(let xe=0;xe<oe;xe++){if(L=G[xe],Array.isArray(z)&&z.includes(ee.length%A)&&T.FLAGS.test(L)){_e=se,V=L,B();continue}if(_e===ne){if(T.WHITESPACE.test(L))continue;if(T.DIGIT.test(L)||T.SIGN.test(L)){_e=se,V=L;continue}if(T.POINT.test(L)){_e=J,V=L;continue}T.COMMA.test(L)&&(P&&D(L,xe,ee),P=!0)}if(_e===se){if(T.DIGIT.test(L)){V+=L;continue}if(T.POINT.test(L)){V+=L,_e=J;continue}if(T.EXP.test(L)){_e=fe;continue}T.SIGN.test(L)&&V.length===1&&T.SIGN.test(V[0])&&D(L,xe,ee)}if(_e===J){if(T.DIGIT.test(L)){V+=L;continue}if(T.EXP.test(L)){_e=fe;continue}T.POINT.test(L)&&V[V.length-1]==="."&&D(L,xe,ee)}if(_e===fe){if(T.DIGIT.test(L)){W+=L;continue}if(T.SIGN.test(L)){if(W===""){W+=L;continue}W.length===1&&T.SIGN.test(W)&&D(L,xe,ee)}}T.WHITESPACE.test(L)?(B(),_e=ne,P=!1):T.COMMA.test(L)?(B(),_e=ne,P=!0):T.SIGN.test(L)?(B(),_e=se,V=L):T.POINT.test(L)?(B(),_e=J,V=L):D(L,xe,ee)}return B(),ee}const p=["mm","cm","in","pt","pc","px"],S={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(G){let z="px";if(typeof G=="string"||G instanceof String)for(let T=0,ne=p.length;T<ne;T++){const se=p[T];if(G.endsWith(se)){z=se,G=G.substring(0,G.length-se.length);break}}let A;return z==="px"&&t.defaultUnit!=="px"?A=S.in[t.defaultUnit]/t.defaultDPI:(A=S[z][t.defaultUnit],A<0&&(A=S[z].in*t.defaultDPI)),A*parseFloat(G)}function v(G){if(!(G.hasAttribute("transform")||G.nodeName==="use"&&(G.hasAttribute("x")||G.hasAttribute("y"))))return null;const z=b(G);return Z.length>0&&z.premultiply(Z[Z.length-1]),X.copy(z),Z.push(z),z}function b(G){const z=new Je,A=ie;if(G.nodeName==="use"&&(G.hasAttribute("x")||G.hasAttribute("y"))){const T=x(G.getAttribute("x")),ne=x(G.getAttribute("y"));z.translate(T,ne)}if(G.hasAttribute("transform")){const T=G.getAttribute("transform").split(")");for(let ne=T.length-1;ne>=0;ne--){const se=T[ne].trim();if(se==="")continue;const J=se.indexOf("("),fe=se.length;if(J>0&&J<fe){const _e=se.slice(0,J),P=m(se.slice(J+1));switch(A.identity(),_e){case"translate":if(P.length>=1){const V=P[0];let W=0;P.length>=2&&(W=P[1]),A.translate(V,W)}break;case"rotate":if(P.length>=1){let V=0,W=0,ee=0;V=P[0]*Math.PI/180,P.length>=3&&(W=P[1],ee=P[2]),te.makeTranslation(-W,-ee),K.makeRotation(V),k.multiplyMatrices(K,te),te.makeTranslation(W,ee),A.multiplyMatrices(te,k)}break;case"scale":if(P.length>=1){const V=P[0];let W=V;P.length>=2&&(W=P[1]),A.scale(V,W)}break;case"skewX":P.length===1&&A.set(1,Math.tan(P[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":P.length===1&&A.set(1,0,0,Math.tan(P[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":P.length===6&&A.set(P[0],P[2],P[4],P[1],P[3],P[5],0,0,1);break}}z.premultiply(A)}}return z}function C(G,z){function A(J){O.set(J.x,J.y,1).applyMatrix3(z),J.set(O.x,O.y)}function T(J){const fe=J.xRadius,_e=J.yRadius,P=Math.cos(J.aRotation),V=Math.sin(J.aRotation),W=new Q(fe*P,fe*V,0),ee=new Q(-_e*V,_e*P,0),D=W.applyMatrix3(z),B=ee.applyMatrix3(z),L=ie.set(D.x,B.x,0,D.y,B.y,0,0,0,1),oe=te.copy(L).invert(),U=K.copy(oe).transpose().multiply(oe).elements,E=N(U[0],U[1],U[4]),q=Math.sqrt(E.rt1),ae=Math.sqrt(E.rt2);if(J.xRadius=1/q,J.yRadius=1/ae,J.aRotation=Math.atan2(E.sn,E.cs),!((J.aEndAngle-J.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const le=te.set(q,0,0,0,ae,0,0,0,1),Ce=K.set(E.cs,E.sn,0,-E.sn,E.cs,0,0,0,1),ye=le.multiply(Ce).multiply(L),Ue=Te=>{const{x:Se,y:be}=new Q(Math.cos(Te),Math.sin(Te),0).applyMatrix3(ye);return Math.atan2(be,Se)};J.aStartAngle=Ue(J.aStartAngle),J.aEndAngle=Ue(J.aEndAngle),w(z)&&(J.aClockwise=!J.aClockwise)}}function ne(J){const fe=M(z),_e=y(z);J.xRadius*=fe,J.yRadius*=_e;const P=fe>Number.EPSILON?Math.atan2(z.elements[1],z.elements[0]):Math.atan2(-z.elements[3],z.elements[4]);J.aRotation+=P,w(z)&&(J.aStartAngle*=-1,J.aEndAngle*=-1,J.aClockwise=!J.aClockwise)}const se=G.subPaths;for(let J=0,fe=se.length;J<fe;J++){const P=se[J].curves;for(let V=0;V<P.length;V++){const W=P[V];W.isLineCurve?(A(W.v1),A(W.v2)):W.isCubicBezierCurve?(A(W.v0),A(W.v1),A(W.v2),A(W.v3)):W.isQuadraticBezierCurve?(A(W.v0),A(W.v1),A(W.v2)):W.isEllipseCurve&&(ue.set(W.aX,W.aY),A(ue),W.aX=ue.x,W.aY=ue.y,I(z)?T(W):ne(W))}}}function w(G){const z=G.elements;return z[0]*z[4]-z[1]*z[3]<0}function I(G){const z=G.elements,A=z[0]*z[3]+z[1]*z[4];if(A===0)return!1;const T=M(G),ne=y(G);return Math.abs(A/(T*ne))>Number.EPSILON}function M(G){const z=G.elements;return Math.sqrt(z[0]*z[0]+z[1]*z[1])}function y(G){const z=G.elements;return Math.sqrt(z[3]*z[3]+z[4]*z[4])}function N(G,z,A){let T,ne,se,J,fe;const _e=G+A,P=G-A,V=Math.sqrt(P*P+4*z*z);return _e>0?(T=.5*(_e+V),fe=1/T,ne=G*fe*A-z*fe*z):_e<0?ne=.5*(_e-V):(T=.5*V,ne=-.5*V),P>0?se=P+V:se=P-V,Math.abs(se)>2*Math.abs(z)?(fe=-2*z/se,J=1/Math.sqrt(1+fe*fe),se=fe*J):Math.abs(z)===0?(se=1,J=0):(fe=-.5*se/z,se=1/Math.sqrt(1+fe*fe),J=fe*se),P>0&&(fe=se,se=-J,J=fe),{rt1:T,rt2:ne,cs:se,sn:J}}const F=[],$={},Z=[],ie=new Je,te=new Je,K=new Je,k=new Je,ue=new ge,O=new Q,X=new Je,de=new DOMParser().parseFromString(e,"image/svg+xml");return n(de.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:F,xml:de.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(g,m,p,S){const x=g.x,v=m.x,b=p.x,C=S.x,w=g.y,I=m.y,M=p.y,y=S.y,N=(C-b)*(w-M)-(y-M)*(x-b),F=(v-x)*(w-M)-(I-w)*(x-b),$=(y-M)*(v-x)-(C-b)*(I-w),Z=N/$,ie=F/$;if($===0&&N!==0||Z<=0||Z>=1||ie<0||ie>1)return null;if(N===0&&$===0){for(let te=0;te<2;te++)if(o(te===0?p:S,g,m),i.loc==n.ORIGIN){const K=te===0?p:S;return{x:K.x,y:K.y,t:i.t}}else if(i.loc==n.BETWEEN){const K=+(x+i.t*(v-x)).toPrecision(10),k=+(w+i.t*(I-w)).toPrecision(10);return{x:K,y:k,t:i.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?p:S,g,m),i.loc==n.ORIGIN){const ue=k===0?p:S;return{x:ue.x,y:ue.y,t:i.t}}const te=+(x+Z*(v-x)).toPrecision(10),K=+(w+Z*(I-w)).toPrecision(10);return{x:te,y:K,t:Z}}}function o(g,m,p){const S=p.x-m.x,x=p.y-m.y,v=g.x-m.x,b=g.y-m.y,C=S*b-v*x;if(g.x===m.x&&g.y===m.y){i.loc=n.ORIGIN,i.t=0;return}if(g.x===p.x&&g.y===p.y){i.loc=n.DESTINATION,i.t=1;return}if(C<-Number.EPSILON){i.loc=n.LEFT;return}if(C>Number.EPSILON){i.loc=n.RIGHT;return}if(S*v<0||x*b<0){i.loc=n.BEHIND;return}if(Math.sqrt(S*S+x*x)<Math.sqrt(v*v+b*b)){i.loc=n.BEYOND;return}let w;S!==0?w=v/S:w=b/x,i.loc=n.BETWEEN,i.t=w}function a(g,m){const p=[],S=[];for(let x=1;x<g.length;x++){const v=g[x-1],b=g[x];for(let C=1;C<m.length;C++){const w=m[C-1],I=m[C],M=s(v,b,w,I);M!==null&&p.find(y=>y.t<=M.t+Number.EPSILON&&y.t>=M.t-Number.EPSILON)===void 0&&(p.push(M),S.push(new ge(M.x,M.y)))}}return S}function l(g,m,p){const S=new ge;m.getCenter(S);const x=[];return p.forEach(v=>{v.boundingBox.containsPoint(S)&&a(g,v.points).forEach(C=>{x.push({identifier:v.identifier,isCW:v.isCW,point:C})})}),x.sort((v,b)=>v.point.x-b.point.x),x}function c(g,m,p,S,x){(x==null||x==="")&&(x="nonzero");const v=new ge;g.boundingBox.getCenter(v);const b=[new ge(p,v.y),new ge(S,v.y)],C=l(b,g.boundingBox,m);C.sort((F,$)=>F.point.x-$.point.x);const w=[],I=[];C.forEach(F=>{F.identifier===g.identifier?w.push(F):I.push(F)});const M=w[0].point.x,y=[];let N=0;for(;N<I.length&&I[N].point.x<M;)y.length>0&&y[y.length-1]===I[N].identifier?y.pop():y.push(I[N].identifier),N++;if(y.push(g.identifier),x==="evenodd"){const F=y.length%2===0,$=y[y.length-2];return{identifier:g.identifier,isHole:F,for:$}}else if(x==="nonzero"){let F=!0,$=null,Z=null;for(let ie=0;ie<y.length;ie++){const te=y[ie];F?(Z=m[te].isCW,F=!1,$=te):Z!==m[te].isCW&&(Z=m[te].isCW,F=!0)}return{identifier:g.identifier,isHole:F,for:$}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(g=>{const m=g.getPoints();let p=-999999999,S=999999999,x=-999999999,v=999999999;for(let b=0;b<m.length;b++){const C=m[b];C.y>p&&(p=C.y),C.y<S&&(S=C.y),C.x>x&&(x=C.x),C.x<v&&(v=C.x)}return h<=x&&(h=x+1),u>=v&&(u=v-1),{curves:g.curves,points:m,isCW:cr.isClockWise(m),identifier:-1,boundingBox:new Z0(new ge(v,S),new ge(x,p))}});f=f.filter(g=>g.points.length>1);for(let g=0;g<f.length;g++)f[g].identifier=g;const d=f.map(g=>c(g,f,u,h,e.userData?e.userData.style.fillRule:void 0)),_=[];return f.forEach(g=>{if(!d[g.identifier].isHole){const p=new Go;p.curves=g.curves,d.filter(x=>x.isHole&&x.for===g.identifier).forEach(x=>{const v=f[x.identifier],b=new Xs;b.curves=v.curves,p.holes.push(b)}),_.push(p)}}),_}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],o=[],a=[];if(Gl.pointsToStrokeWithBuffers(e,t,n,i,s,o,a)===0)return null;const l=new ji;return l.setAttribute("position",new ai(s,3)),l.setAttribute("normal",new ai(o,3)),l.setAttribute("uv",new ai(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,o,a,l){const c=new ge,u=new ge,h=new ge,f=new ge,d=new ge,_=new ge,g=new ge,m=new ge,p=new ge,S=new ge,x=new ge,v=new ge,b=new ge,C=new ge,w=new ge,I=new ge,M=new ge;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=P(e);const y=e.length;if(y<2)return 0;const N=e[0].equals(e[y-1]);let F,$=e[0],Z;const ie=t.strokeWidth/2,te=1/(y-1);let K=0,k,ue,O,X,de=!1,De=0,G=l*3,z=l*2;A(e[0],e[1],c).multiplyScalar(ie),m.copy(e[0]).sub(c),p.copy(e[0]).add(c),S.copy(m),x.copy(p);for(let V=1;V<y;V++){F=e[V],V===y-1?N?Z=e[1]:Z=void 0:Z=e[V+1];const W=c;if(A($,F,W),h.copy(W).multiplyScalar(ie),v.copy(F).sub(h),b.copy(F).add(h),k=K+te,ue=!1,Z!==void 0){A(F,Z,u),h.copy(u).multiplyScalar(ie),C.copy(F).sub(h),w.copy(F).add(h),O=!0,h.subVectors(Z,$),W.dot(h)<0&&(O=!1),V===1&&(de=O),h.subVectors(Z,F),h.normalize();const ee=Math.abs(W.dot(h));if(ee>Number.EPSILON){const D=ie/ee;h.multiplyScalar(-D),f.subVectors(F,$),d.copy(f).setLength(D).add(h),I.copy(d).negate();const B=d.length(),L=f.length();f.divideScalar(L),_.subVectors(Z,F);const oe=_.length();switch(_.divideScalar(oe),f.dot(I)<L&&_.dot(I)<oe&&(ue=!0),M.copy(d).add(F),I.add(F),X=!1,ue?O?(w.copy(I),b.copy(I)):(C.copy(I),v.copy(I)):se(),t.strokeLineJoin){case"bevel":J(O,ue,k);break;case"round":fe(O,ue),O?ne(F,v,C,k,0):ne(F,w,b,k,1);break;default:const xe=ie*t.strokeMiterLimit/B;if(xe<1)if(t.strokeLineJoin!=="miter-clip"){J(O,ue,k);break}else fe(O,ue),O?(_.subVectors(M,v).multiplyScalar(xe).add(v),g.subVectors(M,C).multiplyScalar(xe).add(C),T(v,k,0),T(_,k,0),T(F,k,.5),T(F,k,.5),T(_,k,0),T(g,k,0),T(F,k,.5),T(g,k,0),T(C,k,0)):(_.subVectors(M,b).multiplyScalar(xe).add(b),g.subVectors(M,w).multiplyScalar(xe).add(w),T(b,k,1),T(_,k,1),T(F,k,.5),T(F,k,.5),T(_,k,1),T(g,k,1),T(F,k,.5),T(g,k,1),T(w,k,1));else ue?(O?(T(p,K,1),T(m,K,0),T(M,k,0),T(p,K,1),T(M,k,0),T(I,k,1)):(T(p,K,1),T(m,K,0),T(M,k,1),T(m,K,0),T(I,k,0),T(M,k,1)),O?C.copy(M):w.copy(M)):O?(T(v,k,0),T(M,k,0),T(F,k,.5),T(F,k,.5),T(M,k,0),T(C,k,0)):(T(b,k,1),T(M,k,1),T(F,k,.5),T(F,k,.5),T(M,k,1),T(w,k,1)),X=!0;break}}else se()}else se();!N&&V===y-1&&_e(e[0],S,x,O,!0,K),K=k,$=F,m.copy(C),p.copy(w)}if(!N)_e(F,v,b,O,!1,k);else if(ue&&s){let V=M,W=I;de!==O&&(V=I,W=M),O?(X||de)&&(W.toArray(s,0),W.toArray(s,9),X&&V.toArray(s,3)):(X||!de)&&(W.toArray(s,3),W.toArray(s,9),X&&V.toArray(s,0))}return De;function A(V,W,ee){return ee.subVectors(W,V),ee.set(-ee.y,ee.x).normalize()}function T(V,W,ee){s&&(s[G]=V.x,s[G+1]=V.y,s[G+2]=0,o&&(o[G]=0,o[G+1]=0,o[G+2]=1),G+=3,a&&(a[z]=W,a[z+1]=ee,z+=2)),De+=3}function ne(V,W,ee,D,B){c.copy(W).sub(V).normalize(),u.copy(ee).sub(V).normalize();let L=Math.PI;const oe=c.dot(u);Math.abs(oe)<1&&(L=Math.abs(Math.acos(oe))),L/=n,h.copy(W);for(let xe=0,Ne=n-1;xe<Ne;xe++)f.copy(h).rotateAround(V,L),T(h,D,B),T(f,D,B),T(V,D,.5),h.copy(f);T(f,D,B),T(ee,D,B),T(V,D,.5)}function se(){T(p,K,1),T(m,K,0),T(v,k,0),T(p,K,1),T(v,k,0),T(b,k,1)}function J(V,W,ee){W?V?(T(p,K,1),T(m,K,0),T(v,k,0),T(p,K,1),T(v,k,0),T(I,k,1),T(v,ee,0),T(C,ee,0),T(I,ee,.5)):(T(p,K,1),T(m,K,0),T(b,k,1),T(m,K,0),T(I,k,0),T(b,k,1),T(b,ee,1),T(I,ee,0),T(w,ee,1)):V?(T(v,ee,0),T(C,ee,0),T(F,ee,.5)):(T(b,ee,1),T(w,ee,0),T(F,ee,.5))}function fe(V,W){W&&(V?(T(p,K,1),T(m,K,0),T(v,k,0),T(p,K,1),T(v,k,0),T(I,k,1),T(v,K,0),T(F,k,.5),T(I,k,1),T(F,k,.5),T(C,K,0),T(I,k,1)):(T(p,K,1),T(m,K,0),T(b,k,1),T(m,K,0),T(I,k,0),T(b,k,1),T(b,K,1),T(I,k,0),T(F,k,.5),T(F,k,.5),T(I,k,0),T(w,K,1)))}function _e(V,W,ee,D,B,L){switch(t.strokeLineCap){case"round":B?ne(V,ee,W,L,.5):ne(V,W,ee,L,.5);break;case"square":if(B)c.subVectors(W,V),u.set(c.y,-c.x),h.addVectors(c,u).add(V),f.subVectors(u,c).add(V),D?(h.toArray(s,3),f.toArray(s,0),f.toArray(s,9)):(h.toArray(s,3),a[7]===1?f.toArray(s,9):h.toArray(s,9),f.toArray(s,0));else{c.subVectors(ee,V),u.set(c.y,-c.x),h.addVectors(c,u).add(V),f.subVectors(u,c).add(V);const oe=s.length;D?(h.toArray(s,oe-3),f.toArray(s,oe-6),f.toArray(s,oe-12)):(f.toArray(s,oe-6),h.toArray(s,oe-3),f.toArray(s,oe-12))}break}}function P(V){let W=!1;for(let D=1,B=V.length-1;D<B;D++)if(V[D].distanceTo(V[D+1])<i){W=!0;break}if(!W)return V;const ee=[];ee.push(V[0]);for(let D=1,B=V.length-1;D<B;D++)V[D].distanceTo(V[D+1])>=i&&ee.push(V[D]);return ee.push(V[V.length-1]),ee}}}async function xT(){const r=await new Gl().loadAsync("/totem/brand/totem-symbol.svg"),e=new F0({color:14078147,metalness:.12,roughness:.75,clearcoat:.12}),t=new Ll({color:7349038,metalness:.35,roughness:.7}),n=new Fs;for(const o of r.paths)for(const a of Gl.createShapes(o)){const l=new Dh(a,{depth:28,bevelEnabled:!0,bevelThickness:3,bevelSize:2.2,bevelSegments:3,steps:1,curveSegments:32});n.add(new $t(l,[e,t]))}n.scale.set(.0049,-.0049,.0049),n.updateMatrixWorld(!0);const i=new wr().setFromObject(n).getCenter(new Q);n.position.sub(i);const s=new Fs;return s.add(n),s.userData.baseY=.1,s.userData.faceMaterial=e,s.userData.edgeMaterial=t,s.position.y=.1,s}const Kr={phone:"+79854291875",whatsapp:"+79854291875",address:"Аминьевское шоссе, д. 6",mapUrl:"https://yandex.ru/maps/?rtext=~55.706701%2C37.456457&rtt=auto"};function yT(r){return r==="phone"&&Kr.phone?`tel:${Kr.phone.replace(/[^+\d]/g,"")}`:r==="whatsapp"&&Kr.whatsapp?`https://wa.me/${Kr.whatsapp.replace(/\D/g,"")}`:""}const ST=[["18+","По запросу предъявите оригинал паспорта или водительского удостоверения."],["Трезвость","При алкогольном либо наркотическом опьянении возможен отказ во входе."],["Питомцы","Собаки — до 25 см в холке. Чистота, спокойствие и комфорт окружающих — ответственность хозяина."],["Места","Администратор размещает компанию по числу гостей. Выбор конкретного стола при бронировании недоступен."],["Заказы","Кухню, напитки и кальяны по телефону не заказывают."],["Кальян","Курение — 90 минут после подачи, далее предлагается новый кальян."],["Еда","Кухня доступна в часы заведения. Стороннюю еду оставляют администратору и забирают при уходе."],["Безопасность","Помещение оборудовано камерами."],["Курение","Сигареты, сигары, сигариллы, вейпы, Iqos и Glo запрещены."],["Игры","Азартные игры запрещены."],["Имущество","Повреждения могут потребовать денежного возмещения."],["Компания","От 8 гостей — депозит; сумму уточняйте у администратора."],["Бронирование","Стоимость кальянов рассчитана на одновременный заказ. Стол — на 90 минут от подачи. Число и цена кальянов не зависят от курящих. Замена не понравившегося кальяна — в первые 10 минут."],["VIP","До 6 гостей; 2000 ₽/час, минимум 2 часа. Еда, напитки, кальян оплачиваются дополнительно. Кальян необязателен."]];document.documentElement.dataset.contactFont="unbounded";Wt.registerPlugin(Qe);const Jn=matchMedia("(prefers-reduced-motion: reduce)").matches,MT=new URLSearchParams(location.search).get("transition")||"flight";history.scrollRestoration="manual";location.hash&&history.replaceState(history.state,"",location.pathname+location.search);document.documentElement.dataset.font="unbounded";const wl=document.querySelector(".intro-screen"),lr=document.querySelector("#scene"),ug=document.querySelector("#logo-mount"),us={value:0},ho={x:0,y:0};let fi,di,sr,xi,hl,Sa=!1,Wl=!1;const Mi=new URLSearchParams(location.search).has("motionDebug")?{gaps:[],resizes:0,last:0}:null;Mi&&setTimeout(()=>{const r=Mi.gaps.slice(1).sort((t,n)=>t-n),e=document.createElement("output");e.id="motion-report",e.style.cssText="position:fixed;bottom:4px;left:4px;z-index:999;background:#111;color:#fff;padding:8px;font:11px monospace;max-width:95vw",e.textContent=JSON.stringify({frames:r.length,medianMs:+(r[Math.floor(r.length*.5)]||0).toFixed(1),p95Ms:+(r[Math.floor(r.length*.95)]||0).toFixed(1),gapsOver50ms:r.filter(t=>t>50).length,bufferResizes:Mi.resizes}),document.body.append(e)},6500);async function ET(){fi=new DM({antialias:!0,alpha:!0,powerPreference:"high-performance"}),fi.setPixelRatio(Math.min(devicePixelRatio,1.75)),fi.toneMapping=rp,fi.toneMappingExposure=1.1,lr.append(fi.domElement),di=new Tp,sr=new Hn(35,1,.1,100),sr.position.set(0,0,10);const r=new IM,e=new Gu(fi);di.environment=e.fromScene(r,.04).texture,di.environmentIntensity=.25,r.dispose(),e.dispose(),di.add(new Y0(14078147,.8));const t=new qf(16774367,3.8);t.position.set(-3,4,5),di.add(t),hl=new Op(7349038,8,20),hl.position.set(3,1,3),di.add(hl);const n=new qf(7349038,1);n.position.set(2,3,-3),di.add(n),xi=await xT(),di.add(xi);let i=0,s=0;const o=()=>{const c=lr.getBoundingClientRect();if(c.width<1||c.height<1||lr.closest(".shared-flight"))return;const u=Math.round(Math.min(c.width,c.height));(u!==i||u!==s)&&(fi.setSize(u,u,!1),i=u,s=u,Mi&&Mi.resizes++),Object.assign(fi.domElement.style,{width:u+"px",height:u+"px",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}),sr.aspect=1,sr.position.z=10,sr.updateProjectionMatrix()};lr.addEventListener("scene:resize",o),new ResizeObserver(o).observe(lr),o(),await fi.compileAsync(di,sr),fi.render(di,sr);let a=0;function l(c){if(requestAnimationFrame(l),document.hidden){a=0;return}const u=a?Math.min((c-a)/1e3,.05):1/60;if(a=c,!Jn){const h=Sa&&!Wl,f=h?Math.min(scrollY/innerHeight,1):0,d=1-Math.exp(-4.4*u),_=h?ho.x:0,g=h?ho.y:0;xi.rotation.y=ic.lerp(xi.rotation.y,us.value+_*.23+f*.4,d),xi.rotation.x=ic.lerp(xi.rotation.x,g*.13,d),Wl||(xi.position.y=ic.lerp(xi.position.y,.07+Math.sin(c*5e-4)*.035,d)),hl.position.x=3+_*1.5}Mi&&(Mi.last&&Mi.gaps.push(c-Mi.last),Mi.last=c),fi.render(di,sr)}requestAnimationFrame(l)}let Al;function ep(r=!1){Sa||(Sa=!0,Wl=!0,Al?.kill(),Mg({variant:MT,gsap:Wt,reduced:Jn,introScreen:wl,sceneHost:lr,logoMount:ug,getMark:()=>xi,fast:r,onComplete:()=>{document.querySelector("main").inert=!1,document.querySelector(".header").inert=!1,document.querySelector(".utility").inert=!1,document.querySelector(".call-widget").inert=!1,document.body.classList.remove("intro-playing"),Wl=!1,window.scrollTo({top:0,behavior:"instant"}),Qe.refresh(),window.scrollTo({top:0,behavior:"instant"})}}))}function hg(){if(Sa=!1,Al?.kill(),window.scrollTo({top:0,behavior:"instant"}),wl.hidden=!1,wl.inert=!1,document.querySelector("main").inert=!0,document.querySelector(".header").inert=!0,document.querySelector(".utility").inert=!0,document.querySelector(".call-widget").inert=!0,document.body.classList.add("intro-playing"),document.querySelector(".intro-stage").append(lr),Wt.set(wl,{opacity:1}),Jn){ep();return}us.value=-.75,Al=Wt.timeline({onComplete:ep}),Al.fromTo(".intro-stage",{scale:.8,opacity:0},{scale:1,opacity:1,duration:1.45,ease:"power3.out"},0).to(us,{value:0,duration:2.4,ease:"power3.inOut"},0).fromTo(".intro-wordmark",{y:25,opacity:0},{y:0,opacity:1,duration:.9,ease:"power3.out"},.85).to({},{duration:.25})}document.body.classList.add("intro-playing");try{await ET()}catch(r){lr.innerHTML='<img class="static-mark" src="/totem/brand/totem-symbol-light.svg" alt="">',console.warn("Using static logo fallback.",r)}Sa||hg();document.querySelector("#replay")?.addEventListener("click",hg);const Zi=document.querySelector(".logo-interaction");let wa=!1,mh=0,Xl=0;Zi.addEventListener("pointermove",r=>{const e=ug.getBoundingClientRect();if(ho.x=((r.clientX-e.left)/e.width-.5)*2,ho.y=((r.clientY-e.top)/e.height-.5)*2,wa&&!Jn){const t=r.clientX-mh;mh=r.clientX,Xl+=Math.abs(t),us.value+=t*.009}});Zi.addEventListener("pointerleave",()=>{wa||(ho.x=0,ho.y=0)});Zi.addEventListener("pointerdown",r=>{wa=!0,mh=r.clientX,Xl=0,Wt.killTweensOf(us),Zi.setPointerCapture(r.pointerId)});Zi.addEventListener("pointerup",()=>wa=!1);Zi.addEventListener("pointercancel",()=>wa=!1);Zi.addEventListener("click",()=>{if(Zi.dataset.materialHold==="true"){delete Zi.dataset.materialHold;return}if(Xl>8){Xl=0;return}Jn||Wt.to(us,{value:us.value+Math.PI*2,duration:2.8,ease:"power3.inOut"})});const tp=r=>Number(r).toLocaleString("ru-RU")+" ₽";document.querySelector("#menu-list").innerHTML=jc.map((r,e)=>`<details ${e===0?"open":""}><summary><span>${r.title}</span><span class="detail-plus">+</span></summary><div class="menu-items">${r.serving?`<p class="serving">${r.serving}</p>`:""}${r.items.map(([t,n,i,s])=>`<div class="dish"><div><h3>${t}</h3>${n?`<p>${n}</p>`:""}</div><span>${tp(i)}${s?" / "+tp(s):""}</span></div>`).join("")}</div></details>`).join("");const TT=document.querySelector(".header");Qe.create({start:0,end:"max",onUpdate:r=>TT.classList.toggle("is-scrolled",r.scroll()>25)});Jn||(Wt.from(".menu-section .section-title",{y:35,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:".menu-section",start:"top 80%"}}),Wt.from(".atmosphere-heading",{y:35,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:".atmosphere",start:"top 80%"}}));const Ql=document.querySelector("#booking-form"),Jc=new Date,fg=`${Jc.getFullYear()}-${String(Jc.getMonth()+1).padStart(2,"0")}-${String(Jc.getDate()).padStart(2,"0")}`;Ql.elements.date.min=fg;Ql.elements.date.value=fg;gg({form:Ql,gsap:Wt,ScrollTrigger:Qe,reduced:Jn});const cf=document.querySelector(".menu-toggle"),Xr=document.querySelector(".navigation");let fo=!1,np;function ec(r){fo=r,cf.setAttribute("aria-expanded",String(r)),document.querySelector(".menu-label").textContent=r?"ЗАКРЫТЬ":"МЕНЮ",Xr.inert=!r,document.querySelector("main").inert=r,document.querySelector(".call-widget").inert=r,document.querySelector(".utility").inert=r,document.body.classList.toggle("menu-open",r),r&&(np=document.activeElement,Wt.set(Xr,{visibility:"visible"})),Wt.to(Xr,{clipPath:r?"inset(0% 0% 0% 0%)":"inset(0% 0% 100% 0%)",duration:Jn?0:.6,ease:"power3.inOut",onComplete:()=>{r?Xr.querySelector("a").focus({preventScroll:!0}):(Wt.set(Xr,{visibility:"hidden"}),document.querySelector("dialog[open]")||np?.focus({preventScroll:!0}))}})}cf.addEventListener("click",()=>ec(!fo));Xr.querySelectorAll("a").forEach(r=>r.addEventListener("click",()=>ec(!1)));addEventListener("keydown",r=>{if(!document.querySelector("dialog[open]")&&(r.key==="Escape"&&fo&&ec(!1),r.key==="Tab"&&fo)){const e=[...document.querySelectorAll(".header a,.header button"),...Xr.querySelectorAll("a,button")],t=e.indexOf(document.activeElement);r.shiftKey&&t<=0?(r.preventDefault(),e.at(-1).focus()):!r.shiftKey&&t===e.length-1&&(r.preventDefault(),e[0].focus())}});const Vs=document.querySelector(".contact-dialog"),bT={phone:["Телефон","Номер Totem пока не добавлен. Здесь будет прямой звонок в заведение."],telegram:["Telegram","Контакт Totem в Telegram пока не добавлен."],whatsapp:["WhatsApp","Номер Totem в WhatsApp пока не добавлен."],route:["Как добраться","Адрес Totem пока не добавлен. После подключения контактов здесь откроется маршрут."],rules:["Правила заведения","Посещение — с 18 лет. Полные правила Totem будут добавлены перед открытием."],loyalty:["Программа лояльности","Информация о программе лояльности Totem будет добавлена позже."]};function dg(r){const[e,t]=bT[r];document.querySelector("#contact-dialog-title").textContent=e,document.querySelector("#contact-dialog-text").textContent=t,Vs.showModal()}document.querySelectorAll("[data-contact]").forEach(r=>r.addEventListener("click",()=>{const e=r.dataset.contact,t=yT(e);t?e==="phone"?location.href=t:window.open(t,"_blank","noopener,noreferrer"):dg(e)}));document.querySelectorAll("[data-info]").forEach(r=>r.addEventListener("click",()=>{r.dataset.info==="route"&&Kr.mapUrl?window.open(Kr.mapUrl,"_blank","noopener,noreferrer"):dg(r.dataset.info)}));document.querySelector(".info-close").addEventListener("click",()=>Vs.close());Vs.addEventListener("click",r=>{if(r.target!==Vs)return;const e=Vs.getBoundingClientRect();(r.clientX<e.left||r.clientX>e.right||r.clientY<e.top||r.clientY>e.bottom)&&Vs.close()});document.querySelectorAll(".header-phone,.nav-phone,.contact-number,.booking-call-number").forEach(r=>r.textContent="+7 (985) 429-18-75");document.querySelectorAll(".contact-address,.nav-contact>p").forEach(r=>r.textContent=Kr.address);xg();const wT=document.querySelector(".booking-panel");document.querySelectorAll("[data-booking-mode]").forEach(r=>r.addEventListener("click",()=>{const e=r.dataset.bookingMode==="self";wT.dataset.mode=e?"self":"callback",document.querySelectorAll("[data-booking-mode]").forEach(t=>t.setAttribute("aria-pressed",String(t===r))),Ql.hidden=e,document.querySelector("#booking-self").hidden=!e,Jn||Wt.fromTo(e?"#booking-self":"#booking-form",{opacity:0,y:8},{opacity:1,y:0,duration:.4,ease:"power2.out",clearProps:"transform,opacity"}),Qe.refresh()}));let Ro=!1;const AT=document.querySelector(".rules-list");ST.forEach(([r,e])=>{const t=document.createElement("article"),n=document.createElement("h3"),i=document.createElement("p");n.textContent=r,i.textContent=e,t.append(n,i),AT.append(t)});const Pi=document.querySelector(".rules-dialog");let gh;document.querySelectorAll("[data-open-rules]").forEach(r=>r.addEventListener("click",()=>{gh=r,fo&&ec(!1),Pi.showModal(),Pi.scrollTop=0,Pi.querySelector(".rules-close").focus({preventScroll:!0})}));Pi.querySelector(".rules-close").addEventListener("click",()=>Pi.close());Pi.addEventListener("click",r=>{if(r.target===Pi){const e=Pi.getBoundingClientRect();(r.clientX<e.left||r.clientX>e.right||r.clientY<e.top||r.clientY>e.bottom)&&Pi.close()}});Pi.addEventListener("close",()=>{gh?.closest(".navigation")&&!fo?cf.focus({preventScroll:!0}):gh?.focus({preventScroll:!0})});vg({gsap:Wt,reduced:Jn});_g({gsap:Wt,ScrollTrigger:Qe,reduced:Jn,onLogoHold:()=>{const r=xi?.userData.faceMaterial;if(!r)return;Ro=!Ro;const e=new lt(Ro?7349038:14078147);Wt.to(r.color,{r:e.r,g:e.g,b:e.b,duration:1.15,ease:"power2.inOut"}),Wt.to(r,{roughness:Ro?.8:.75,metalness:Ro?.2:.12,duration:1.15})}});Sg({gsap:Wt,ScrollTrigger:Qe,reduced:Jn});pg({gsap:Wt,ScrollTrigger:Qe,reduced:Jn});

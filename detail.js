const app = document.querySelector('#app');
let zoom = 1;

function exhibitArt(item, detailed = false) {
  if (item.image) {
    return `<figure class="art photo ${item.id}"><img src="${item.image}" alt="${item.title}" />${detailed ? '<figcaption class="art-note">제공 이미지 · 확대 보기</figcaption>' : ''}</figure>`;
  }
  const halo = item.id === 'seokgulam' ? '<span class="halo"></span>' : '';
  const crown = item.id === 'mireuk' ? '<span class="crown">✦</span>' : '';
  const pose = item.id === 'mireuk' ? 'thinking' : item.id === 'nahan' ? 'nahan' : 'seated';
  return `<div class="art ${pose}" role="img" aria-label="${item.title}을 상징적으로 표현한 이미지 자리표시자">${halo}${crown}<span class="head"></span><span class="neck"></span><span class="torso"></span><span class="arm left"></span><span class="arm right"></span><span class="leg"></span><span class="pedestal"></span>${detailed ? '<span class="art-note">이미지 교체 영역</span>' : ''}</div>`;
}

function nav(current) {
  return `<header class="site-header"><a class="brand" href="#home" aria-label="디지털 불상 컬렉션 홈"><span>佛</span><strong>디지털 불상 컬렉션</strong></a><nav aria-label="주요 메뉴"><a href="#home" class="${current === 'home' ? 'active' : ''}">전시 소개</a><a href="#collection" class="${current === 'collection' ? 'active' : ''}">컬렉션</a><a href="#guide" class="${current === 'guide' ? 'active' : ''}">조형 도감</a></nav></header>`;
}

function home() {
  app.innerHTML = `${nav('home')}<section class="hero"><div class="hero-copy"><p class="eyebrow">DIGITAL HERITAGE EXHIBITION</p><h1>손짓과 표정에<br><em>담긴 진리</em></h1><p>한국의 대표 불상을 통해 조형의 언어를 읽어 봅니다. 고요한 사유, 깨달음의 순간, 수행자의 표정이 한 화면에서 이어집니다.</p><a class="button" href="#collection">컬렉션 감상하기 <span>→</span></a></div><div class="hero-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>${exhibitArt(exhibits[0])}<p>금동미륵보살반가사유상<br><small>국보 제83호</small></p></div></section><section class="intro"><p class="eyebrow">THE COLLECTION</p><h2>불상은 단순한 조각상이 아닙니다.</h2><p>시대의 미의식과 깨달음의 진리, 그리고 사람들의 소망이 손짓과 표정으로 표현된 결정체입니다.</p><div class="type-row"><span>보살 · 자비와 사유</span><i></i><span>여래 · 깨달음과 위엄</span><i></i><span>나한 · 수행과 친근함</span></div></section>`;
}

function collection() {
  app.innerHTML = `${nav('collection')}<section class="page-title"><p class="eyebrow">EXPLORE THE COLLECTION</p><h1>불상의 유형별 컬렉션</h1><p>카드를 선택하면 작품의 세부 특징과 손짓에 담긴 의미를 살펴볼 수 있습니다.</p></section><section class="cards">${exhibits.map(item => `<a class="exhibit-card ${item.id}" href="#detail/${item.id}"><div class="card-art">${exhibitArt(item)}</div><div class="card-info"><div><span class="tag">${item.type}</span><span class="number">${item.number}</span></div><h2>${item.title}</h2><p>${item.subtitle}</p><span class="card-link">자세히 보기 <b>→</b></span></div></a>`).join('')}</section><section class="compare"><p class="eyebrow">LOOK CLOSER</p><h2>같은 불교 조각, 다른 표정</h2><p>손끝의 위치, 머리의 형태, 몸의 자세를 비교하며 각 불상이 맡은 역할과 시대의 미감을 발견해 보세요.</p><a href="#guide">불상 조형 도감 보기 →</a></section>`;
}

function detail(id) {
  const item = exhibits.find(x => x.id === id) || exhibits[0];
  const index = exhibits.indexOf(item);
  const prev = exhibits[(index + 2) % 3], next = exhibits[(index + 1) % 3];
  app.innerHTML = `${nav('collection')}<section class="detail"><aside class="detail-info"><a class="back" href="#collection">← 컬렉션으로 돌아가기</a><p class="eyebrow">${item.number} · ${item.type}</p><h1>${item.title}</h1><p class="subtitle">${item.subtitle}</p><dl><div><dt>시대</dt><dd>${item.era}</dd></div><div><dt>소장처</dt><dd>${item.collection}</dd></div></dl><p class="summary">${item.body}</p><a class="source" href="${item.url}" target="_blank" rel="noreferrer">출처: ${item.source} ↗</a></aside><section class="viewer" aria-label="작품 이미지 뷰어"><div class="viewer-top"><span>DETAIL VIEW</span><div><button id="zoomOut" aria-label="축소">−</button><output id="zoomLabel">100%</output><button id="zoomIn" aria-label="확대">+</button></div></div><div class="art-stage"><div id="zoomTarget" style="transform: scale(1)">${exhibitArt(item, true)}</div>${item.points.map((p, i) => `<button class="hotspot" style="left:${p[2]};top:${p[3]}" data-point="${i}" aria-label="${p[0]} 설명 보기">${i + 1}</button>`).join('')}</div><p class="viewer-caption">현재는 조형 실루엣 데모입니다. 실제 고해상도 이미지 또는 3D 모델로 교체할 수 있습니다.</p></section><section class="point-panel"><p class="eyebrow">OBSERVATION POINT</p><h2 id="pointTitle">${item.points[0][0]}</h2><p id="pointText">${item.points[0][1]}</p><ol>${item.points.map((p, i) => `<li class="${i === 0 ? 'selected' : ''}"><button data-point="${i}"><b>0${i + 1}</b>${p[0]}</button></li>`).join('')}</ol></section></section><nav class="next-prev" aria-label="다른 전시품"><a href="#detail/${prev.id}"><small>← 이전 전시품</small><strong>${prev.title}</strong></a><a href="#detail/${next.id}"><small>다음 전시품 →</small><strong>${next.title}</strong></a></nav>`;
  document.querySelectorAll('[data-point]').forEach(btn => btn.addEventListener('click', () => selectPoint(item, Number(btn.dataset.point))));
  document.querySelector('#zoomIn').addEventListener('click', () => setZoom(zoom + .15));
  document.querySelector('#zoomOut').addEventListener('click', () => setZoom(zoom - .15));
}

function selectPoint(item, n) {
  document.querySelector('#pointTitle').textContent = item.points[n][0];
  document.querySelector('#pointText').textContent = item.points[n][1];
  document.querySelectorAll('[data-point]').forEach(el => el.classList.toggle('selected', Number(el.dataset.point) === n));
}
function setZoom(value) { zoom = Math.max(.8, Math.min(1.6, value)); document.querySelector('#zoomTarget').style.transform = `scale(${zoom})`; document.querySelector('#zoomLabel').textContent = `${Math.round(zoom * 100)}%`; }
function guide() { app.innerHTML = `${nav('guide')}<section class="page-title"><p class="eyebrow">FORM GUIDE</p><h1>불상 조형 도감</h1><p>작품을 보는 데 도움이 되는 기본 조형 언어입니다.</p></section><section class="guide-grid"><article><b>01</b><h2>불신</h2><p>머리·몸통·손·발로 이루어진 부처의 몸입니다. 자세와 비례에서 성격을 읽을 수 있습니다.</p></article><article><b>02</b><h2>수인</h2><p>손으로 만든 상징적 모양입니다. 항마촉지인처럼 부처의 행적과 의미를 전달합니다.</p></article><article><b>03</b><h2>광배</h2><p>머리와 몸 뒤에서 발하는 빛을 형상화한 장식으로, 신성함을 드러냅니다.</p></article><article><b>04</b><h2>대좌</h2><p>불상을 받치는 좌대로, 연꽃·사자 등 다양한 문양이 조각됩니다.</p></article></section>`; }
function route() { zoom = 1; const hash = location.hash.slice(1) || 'home'; if (hash.startsWith('detail/')) detail(hash.split('/')[1]); else if (hash === 'collection') collection(); else if (hash === 'guide') guide(); else home(); window.scrollTo(0, 0); }
window.addEventListener('hashchange', route); route();

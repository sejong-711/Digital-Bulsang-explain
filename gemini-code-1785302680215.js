// 불상 유물 데이터 정의
const heritageData = {
  1: {
    id: 1,
    category: "보살상",
    tag: "#보살상 #반가사유상",
    name: "금동미륵보살반가사유상 (국보 제83호)",
    period: "삼국시대 7세기 초",
    location: "국립중앙박물관",
    summary: "한쪽 다리를 올리고 손가락을 뺨에 댄 채 깊은 생각에 잠겨 있는 반가사유 형태의 대표적 불상입니다.",
    description: "삼산관(三山冠)을 쓰고 상반신을 벗은 채 오른쪽 다리를 왼쪽 무릎 위에 올린 반가(半跏) 자세를 취하고 있습니다. 오른손 손가락을 뺨에 살짝 대고 깊은 사유에 잠긴 듯한 오묘한 미소는 한국 불교 조각 예술의 최고봉으로 평가받습니다.",
    points: [
      "깊은 생각에 잠긴 사유(思惟)의 손짓과 오묘한 미소",
      "뺨에 살짝 댄 손가락과 반가(半跏)의 입체적 자세",
      "군더더기 없는 완벽한 신체 균형과 삼산관 장식"
    ],
    sourceName: "국립중앙박물관 소장품 검색",
    sourceUrl: "https://www.museum.go.kr/site/main/relic/search/view?relicId=827",
    notice: "국립중앙박물관 공공누리 출처표시 조건(제1유형) 준수",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=800&q=80", // 대표 예시 이미지
    hotspots: [
      { top: "25%", left: "50%", title: "삼산관 및 오묘한 미소", text: "세 개의 산 모양 봉우리가 그려진 머리관과 입가에 살짝 띤 미소가 돋보입니다." },
      { top: "35%", left: "58%", title: "사유의 손짓", text: "오른손 손가락을 뺨에 살짝 대어 깊은 명상과 사유의 순간을 연출합니다." },
      { top: "65%", left: "45%", title: "반가 자세", text: "오른쪽 다리를 왼쪽 무릎 위에 얹은 독특하고 유려한 인체 곡선을 보여줍니다." }
    ]
  },
  2: {
    id: 2,
    category: "여래상",
    tag: "#여래상 #항마촉지인",
    name: "경주 석굴암 석가여래좌상",
    period: "통일신라 8세기",
    location: "국립석굴암 (경주)",
    summary: "당당한 체구와 항마촉지인의 수인을 통해 깨달음의 순간을 웅장하게 표현한 여래상입니다.",
    description: "석굴암 주실 중앙에 위치한 석가여래좌상은 화강암으로 조각된 통일신라 불교 미술의 결정체입니다. 오른손은 아래로 내려 손가락으로 땅을 가리키는 '항마촉지인'을 하고 있어 마귀를 물리치고 깨달음을 얻은 순간을 상징합니다.",
    points: [
      "깨달음을 상징하는 오른손의 항마촉지인(降魔觸地印)",
      "머리의 소발(나발)과 정수리의 육계 표현",
      "양 어깨를 감싼 유려한 대의(옷주름)와 당당한 신체 구도"
    ],
    sourceName: "국가유산포털 (문화재청)",
    sourceUrl: "https://www.heritage.go.kr",
    notice: "공공누리 유형 및 상업적/비영리 이용 조건 확인",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80", // 대표 예시 이미지
    hotspots: [
      { top: "20%", left: "50%", title: "육계 및 나발", text: "지혜의 상징인 정수리의 육계와 소라 껍데기 모양의 머리카락(나발)입니다." },
      { top: "60%", left: "60%", title: "항마촉지인", text: "땅을 가리켜 자신의 깨달음을 증명하고 악귀를 물리침을 의미하는 손짓입니다." }
    ]
  },
  3: {
    id: 3,
    category: "나한상",
    tag: "#나한상 #성자",
    name: "영전사지 석조나한상",
    period: "고려시대",
    location: "국립중앙박물관",
    summary: "엄격한 형식을 벗어나 인간적이고 자유로운 표정을 지닌 부처의 제자, 나한의 모습입니다.",
    description: "나한(羅漢)은 수행을 통해 모든 번뇌를 끊고 성자의 지위에 오른 부처의 제자들입니다. 여래나 보살상과 달리 인체 규범에 구애받지 않고 실제 스님의 모습처럼 생생한 인상과 친근한 조형미를 보여줍니다.",
    points: [
      "민머리 승려의 모습을 한 친근하고 다채로운 얼굴 표정",
      "자유로운 손짓과 지주(지팡이), 경전, 발우 등 보유물 표현",
      "여래/보살상에 비해 일상적이고 풍자적인 조형미"
    ],
    sourceName: "국립중앙박물관",
    sourceUrl: "https://www.museum.go.kr",
    notice: "제공 기관의 이미지 사용 범위 규칙 준수",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80", // 대표 예시 이미지
    hotspots: [
      { top: "22%", left: "50%", title: "사실적인 표정", text: "신성함보다 친근하고 생생한 성자의 얼굴 표정이 살아있습니다." },
      { top: "55%", left: "50%", title: "보유물 및 복식", text: "지팡이, 경전 등 성자가 지닌 물건과 승려의 가사 복식을 보여줍니다." }
    ]
  }
};

// 모달 열기/닫기 처리 함수
function openModal(title, text) {
  const modal = document.getElementById("infoModal");
  if(modal) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerText = text;
    modal.style.display = "flex";
  }
}

function closeModal() {
  const modal = document.getElementById("infoModal");
  if(modal) modal.style.display = "none";
}

// 상세 페이지 렌더링 함수
function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 1;
  const data = heritageData[id];

  if (!data) return;

  document.getElementById('itemTag').innerText = data.tag;
  document.getElementById('itemName').innerText = data.name;
  document.getElementById('itemSummary').innerText = data.summary;
  document.getElementById('itemPeriod').innerText = data.period;
  document.getElementById('itemLocation').innerText = data.location;
  document.getElementById('itemDesc').innerText = data.description;
  document.getElementById('itemImg').src = data.image;

  // 출처 정보
  const sourceEl = document.getElementById('itemSource');
  sourceEl.href = data.sourceUrl;
  sourceEl.innerText = `${data.sourceName} (${data.notice})`;

  // 관전 포인트
  const pointContainer = document.getElementById('itemPoints');
  pointContainer.innerHTML = '';
  data.points.forEach(pt => {
    const li = document.createElement('li');
    li.innerText = pt;
    pointContainer.appendChild(li);
  });

  // 핫스팟 생성
  const viewer = document.getElementById('viewerContainer');
  // 기존 핫스팟 제거
  const oldSpots = viewer.querySelectorAll('.hotspot');
  oldSpots.forEach(s => s.remove());

  data.hotspots.forEach((hs, idx) => {
    const spot = document.createElement('div');
    spot.className = 'hotspot';
    spot.style.top = hs.top;
    spot.style.left = hs.left;
    spot.innerText = idx + 1;
    spot.onclick = () => openModal(hs.title, hs.text);
    viewer.appendChild(spot);
  });

  // 이전/다음 버튼 링크 세팅
  const prevId = Number(id) === 1 ? 3 : Number(id) - 1;
  const nextId = Number(id) === 3 ? 1 : Number(id) + 1;
  
  document.getElementById('prevBtn').href = `detail.html?id=${prevId}`;
  document.getElementById('nextBtn').href = `detail.html?id=${nextId}`;
}
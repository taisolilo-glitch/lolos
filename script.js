// Pin data: title, image URL, and description text
const pinData = [
  {
    title: "La nostra primera \"cita\"",
    image: "IMG_0791.jpeg",
    text: `Mai havia sentit una connexió tan forta amb ningú, em semblaves la persona més guapa del món i a més, em vas fer riure com feia temps que no reia. Des d'aquell moment vaig saber que acabariem juntes. Ets l'amor de la meva vida.`
  },
  {
    title: "El primer partit de la temporada",
    image: "IMG_2907.jpeg",
    text: `Qui havia de dir que després de tant de temps, ens retrobariem a una pista. Erets la friki més guapa del món, i la que millor juga a bàsquet també.`
  },
  {
    title: "La nostra primera cita real",
    image: "IMG_2683.jpg",
    text: `Segurament va ser la millor cita que he tingut mai amb algú. És la cita que posaré d'exemple als nostres fills sobre el que han de fer i sentir en una relació. Al teu costat tot és tan especial...`
  },
  {
    title: "La conversa més important",
    image: "WhatsApp Image 2026-06-23 at 18.42.46.jpeg",
    text: `Tenia tan clar que no volia que fossis algo ràpid, que volia creixer amb tu, que volia que fossis la mare dels meus fills... i tenia tanta por de dir-t'ho i que no sentissis el mateix... Des del primer dia has sigut diferent.`
  },
  {
    title: "La nostra primera festa juntes",
    image: "WhatsApp Image 2026-06-23 at 18.43.12.jpeg",
    text: `Quin dia més guai vam crear en un moment i que bé m'ho vaig passar al teu costat. Vas portar-te tan bé amb els meus amics, i els hi vas caure tan bé. No podia estar més orgullosa de dir que estava amb tu i de que em diguessin que erets -mi nalga- tot i que jo volia que fossis meva sencera.`
  },
  {
    title: "La nostra rutina de dilluns",
    image: "WhatsApp Image 2026-06-23 at 18.39.08.jpeg",
    text: `No puc ser més feliç quan surto de la feina reventada i et veig allà, somrient, preparada per anar a dinar amb mi. Gràcies per alegrar-me la vida d'aquesta manera, per fer totes aquestes coses per mi, no se que faria sense tu -ni vull saber-ho-`
  },
  {
    title: "La nostra senyal (wolf)",
    image: "https://via.placeholder.com/400x280?text=Location+7",
    text: `Sense saber-ho es va convertir en una nit tan important i especial, i mira que no tenia ganes ni de sortir. Quan et vaig veure, no vaig poder deixar de mirar-te en tot el tros de nit que vaig passar allà. Erets tu des del principi, des de que vam creuar mirades, havies de ser tu. Tinc tanta sort.`
  },
  {
    title: "El dia que ens vam conèixer",
    image: "WhatsApp Image 2026-06-23 at 18.49.09.jpeg",
    text: `Quines voltes dona la vida i quina por vaig passar quan vaig entrar al pavelló i vaig veure al teu equip fent entrades i a tu botant amb dues boles. Pensava que series bona i tot, sort que no (és broma). Erets tan guapa, i tan flipada, (amb una vamba negra i un mitjó blanc i el missmatch a l'altre peu) i vaig haver de defensar-te tot el partit... Sort que vaig jugar bé, tot i que el meu equip ho fes fatal. I quina sort de que et fixessis en mi.`
  },
  {
    title: "El nostre primer museu",
    image: "IMG_3044.jpg",
    text: `Em fa tan feliç abraçar-te que mai em queixaré d'arribar tard als llocs per fer-ho. Tot i que ens perdessim dues parades, va ser, com sempre amb tu, un dia super especial. M-encanta que siguis la meva millor amiga.`
  },
  {
    title: "My sheila",
    image: "IMG_2524.jpeg",
    text: `Gràcies per voler viure-ho absolutament tot amb mi, fins i tot les coses que et fan por. Aquest dia vaig tenir tan clar que volia que fossis tu, que volia compartir-ho tot al teu costat. Fas que els moments més normals, es converteixin en moments de pel·lícula. T-adoro`
  },
  {
    title: "El nostre primer partit juntes",
    image: "IMG_8622.jpeg",
    text: `El destí ens volia juntes fos com fos i ens va fer coincidir en un partit on cap de les dues pintava res. Ara el destí no vol que ens separem, perquè va fer que juguessis al meu costat i ha sigut de les experiències més guais que hem viscut juntes. Ets la meva altra mitat, ets tot el que vull i tot el que sempre voldré en aquesta vida. Gràcies per fer-me tan feliç sempre.`
  },
  {
    title: "Les nostres dormicitas",
    image: "IMG_0767.jpeg",
    text: "No és una cita com a tal suposo, però no podia deixar fora totes les vegades que dormim juntes. Tenir-te a sobre, omplir-te de petons, despertar-me només per tornar-te a abraçar i sentir-te així d'aprop són els millors sentiments del món. Crec que són les meves preferides perquè el primer que veig pel matí es la teva cara de dormida i ja sóc feliç tot el dia"
  },
  {
    title: "El nostre primer retrobament",
    image: "IMG_8793.PNG",
    text: "No tenia fotos nostres, així que he ficat una meva. Segurament és la pista més lletja de la historia però és la pista on vaig aconseguir que et fixessis del tot en mi i, per tant, ara és de les meves preferides. No se que em vas veure i no sé com vaig jugar, però estic tan contenta d'haver-te fet aquella xapa... T'estimo"
  }
];

// Get all pins
const pins = document.querySelectorAll('.pin');
const modal = document.getElementById('modal');

// Add click listeners to each pin
pins.forEach((pin, index) => {
  pin.addEventListener('click', () => openModal(index));
});

// Open modal with pin data
function openModal(index) {
  if (pinData[index]) {
    document.getElementById('modalTitle').textContent = pinData[index].title;
    document.getElementById('modalImage').src = pinData[index].image;
    document.getElementById('modalImage').alt = pinData[index].title;
    document.getElementById('modalText').textContent = pinData[index].text;
    modal.classList.add('active');
  }
}

// Close modal
function closeModal() {
  modal.classList.remove('active');
}

// Close modal when clicking outside the card
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Count time since 15/04/2026 23:00 Spanish time
function updateDaysCounter() {
  const startDate = new Date('2026-04-15T21:00:00Z'); // 23:00 CEST is 21:00 UTC
  const now = new Date();
  let months = 0;
  let current = new Date(startDate);

  while (true) {
    const nextMonth = new Date(current);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth <= now) {
      months += 1;
      current = nextMonth;
    } else {
      break;
    }
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerHour = 1000 * 60 * 60;
  const remainingMs = now - current;
  const days = Math.floor(remainingMs / msPerDay);
  const hours = Math.floor((remainingMs % msPerDay) / msPerHour);

  document.getElementById('daysCounter').textContent = `${months} mesos · ${days} dies · ${hours} hores`;
}

updateDaysCounter();
setInterval(updateDaysCounter, 1000);











const music = {
  love: [
    {
      title: "Hey Soul Sister",
      artist: "Train",
      text: "Energía que em recorda a nosaltres.",
    },
    {
      title: "Cheerleader",
      artist: "OMI",
      text: "Simple, alegre, com tu.",
    }
  ],

  miss: [
    {
      title: "Yellow",
      artist: "Coldplay",
      text: "Quan et trobo a faltar massa.",
    },
    {
      title: "Never Be Alone",
      artist: "Shawn Mendes",
      text: "Quan la distància pesa.",
    },
    {
      title: "Hey There Delilah",
      artist: "Plain White T's",
      text: "Quan només vull parlar amb tu.",
    }
  ]
};

function showMusic(category) {
  const container = document.getElementById("musicList");

  const songs = music[category];

  if (!songs || songs.length === 0) return;

  // 👉 escoger UNA aleatoria
  const song = songs[Math.floor(Math.random() * songs.length)];

  container.innerHTML = `
    <div class="music-card">
      <h3>${song.title}</h3>
      <p class="artist">${song.artist}</p>
      <p class="text">${song.text}</p>
    </div>
  `;
}
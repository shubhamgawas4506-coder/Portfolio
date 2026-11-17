/* ==================== 1. SMOOTH 5-ROLE KINETIC ENGINE ==================== */
(function initRoleEngine() {
  const roles = [
    "AI RESEARCHER",
    "ML ENGINEER",
    "PYTHON DEVELOPER",
    "DATA SCIENTIST",
    "FRONTEND DEVELOPER"
  ];
  let roleIdx = 0;
  const roleEl = document.getElementById("role-text");
  if (!roleEl) return;

  setInterval(() => {
    roleEl.classList.remove("role-in");
    roleEl.classList.add("role-out");
    setTimeout(() => {
      roleIdx = (roleIdx + 1) % roles.length;
      roleEl.textContent = roles[roleIdx];
      roleEl.classList.remove("role-out");
      roleEl.classList.add("role-in");
    }, 260);
  }, 1800);
})();

/* ==================== 2. STADIUM FLOODLIGHT, AVATAR PARALLAX & 3D TILT ==================== */
(function initHeroInteractions() {
  const beamL = document.getElementById("beam-left");
  const beamR = document.getElementById("beam-right");
  const avatar = document.getElementById("hero-avatar");

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    if (beamL) beamL.style.transform = `rotate(${x * 5}deg) translate(${x * 14}px, ${y * 8}px)`;
    if (beamR) beamR.style.transform = `rotate(${x * -5}deg) translate(${x * -14}px, ${y * 8}px)`;
    if (avatar) avatar.style.transform = `translate3d(${x * -10}px, ${y * -5}px, 0)`;
  });

  // Interactive 3D Perspective Tilt on Cards
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 768) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-2px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // Interactive Tactical Wagon-Wheel Radar Nodes
  document.querySelectorAll(".radar-node").forEach((node) => {
    const updateZone = () => {
      const labelEl = document.getElementById("radar-zone-label");
      if (labelEl) labelEl.textContent = node.getAttribute("data-zone");
    };
    node.addEventListener("click", updateZone);
    node.addEventListener("mouseenter", updateZone);
  });
})();

/* ==================== 3. HERO 3D WEBGL GLOSSY CRICKET SPHERE ==================== */
(function initHeroCricketBall() {
  const canvas = document.getElementById("hero-cricket-ball-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
  camera.position.z = 3.3;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(64, 64);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  const light1 = new THREE.PointLight(0x38bdf8, 3.2, 15);
  light1.position.set(3, 3, 4);
  scene.add(light1);

  const ballGroup = new THREE.Group();
  scene.add(ballGroup);

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.MeshPhysicalMaterial({
      color: 0x1d4ed8,
      roughness: 0.14,
      metalness: 0.32,
      clearcoat: 1.0
    })
  );
  ballGroup.add(sphere);

  const seam = new THREE.Mesh(
    new THREE.TorusGeometry(1.01, 0.032, 12, 64),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  seam.rotation.x = Math.PI / 3;
  ballGroup.add(seam);

  let isDragging = false;
  let prevX = 0;
  let prevY = 0;

  canvas.addEventListener("pointerdown", (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prevX;
    const dy = e.clientY - prevY;
    ballGroup.rotation.y += dx * 0.03;
    ballGroup.rotation.x += dy * 0.03;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
  });

  function animateBall() {
    requestAnimationFrame(animateBall);
    if (!isDragging) {
      ballGroup.rotation.y += 0.022;
      ballGroup.rotation.x += 0.01;
    }
    renderer.render(scene, camera);
  }
  animateBall();
})();

/* ==================== 4. RANKED CERTIFICATIONS DATA & RENDERER ==================== */
const priority1Certs = [
  {
    title: "GENERATIVE AI LEADER",
    issuer: "Google Cloud Skills Boost",
    date: "April 2026",
    id: "AU4U2LT8YA0V",
    link: "https://www.coursera.org/account/accomplishments/specialization/AU4U2LT8YA0V",
    bg: "linear-gradient(135deg, #05070B 0%, #0B1938 55%, #2563EB 100%)",
    accent: "text-iceCyan",
    passNo: "01"
  },
  {
    title: "TATA GENAI ANALYTICS",
    issuer: "Tata / Forage",
    date: "May 2026",
    id: "Wb8qJLfNzr7sxZEo7",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a12c87d13f440b6cf16902a_1779704698482_completion_certificate.pdf",
    bg: "linear-gradient(135deg, #2563EB 0%, #003366 55%, #05070B 100%)",
    accent: "text-white",
    passNo: "02"
  },
  {
    title: "APPLIED ML IN PYTHON",
    issuer: "Univ. of Michigan / Coursera",
    date: "April 2026",
    id: "QDW67QWQ0OUD",
    link: "https://www.coursera.org/account/accomplishments/verify/QDW67QWQ0OUD",
    bg: "linear-gradient(135deg, #00274C 0%, #0D3B66 55%, #05070B 100%)",
    accent: "text-amber-300",
    passNo: "03"
  },
  {
    title: "DATA SCIENCE & ML",
    issuer: "Coursera",
    date: "March 2026",
    id: "5EXWUKUYAF8N",
    link: "https://www.coursera.org/account/accomplishments/specialization/5EXWUKUYAF8N",
    bg: "linear-gradient(135deg, #0056D2 0%, #0A2540 55%, #05070B 100%)",
    accent: "text-iceCyan",
    passNo: "04"
  }
];

const priority2Certs = [
  {
    title: "PYTHON FOR DATA SCIENCE, AI & DEVELOPMENT",
    issuer: "IBM • Coursera",
    date: "April 2026",
    id: "VIYR53XZHWF1",
    link: "https://www.coursera.org/account/accomplishments/certificate/VIYR53XZHWF1",
    logoText: "IBM",
    logoBg: "bg-blue-50 border-blue-200 text-blue-700",
    desc: "Professional certification covering Python core programming, data structures, logic, libraries, and AI application development pipelines."
  },
  {
    title: "GOOGLE PROMPTING ESSENTIALS",
    issuer: "Google • Coursera",
    date: "May 2026",
    id: "Z8EHNGBJMVC5",
    link: "https://www.coursera.org/account/accomplishments/specialization/Z8EHNGBJMVC5",
    logoText: "G",
    logoBg: "bg-amber-50 border-amber-200 text-amber-700",
    desc: "Advanced prompt engineering certification by Google covering zero-shot, few-shot prompting, chain-of-thought logic, and LLM orchestration."
  }
];

const priority3Certs = [
  {
    title: "SQL (INTERMEDIATE)",
    issuer: "HackerRank",
    date: "May 2026",
    id: "c5dd4b9435ba",
    link: "https://www.hackerrank.com/certificates/c5dd4b9435ba",
    logoText: "HR",
    desc: "Complex queries, window functions, joins, subqueries, aggregation, and indexing verified by HackerRank."
  },
  {
    title: "SQL (BASIC)",
    issuer: "HackerRank",
    date: "May 2026",
    id: "fe3dd76bc9b0",
    link: "https://www.hackerrank.com/certificates/fe3dd76bc9b0",
    logoText: "HR",
    desc: "Core relational queries, filtering, grouping, table joins, and fundamental database operations verified by HackerRank."
  }
];

const priority4Cert = {
  title: "COMPLETE DATA SCIENCE, MACHINE LEARNING, DL, NLP BOOTCAMP",
  issuer: "Udemy Bootcamp",
  date: "October 2025",
  id: "UC-9312a3b8-b756-4938-af88-7afc7cda00b2",
  link: "https://www.udemy.com/certificate/UC-9312a3b8-b756-4938-af88-7afc7cda00b2/",
  desc: "Comprehensive foundational mastery spanning Python for data science, exploratory data analysis, classical machine learning algorithms, deep neural architectures, and natural language processing pipelines."
};

function renderCertificates() {
  const p1Container = document.getElementById("priority1-certs");
  if (p1Container) {
    p1Container.innerHTML = priority1Certs.map((c, i) => `
      <div class="lanyard-badge bg-white p-5 rounded-2xl border border-black/15 shadow-xl relative flex flex-col justify-between" style="transform: rotate(${i % 2 === 0 ? -2 : 2}deg);">
        <div class="hidden md:block w-[2px] h-8 bg-slate-400 mx-auto -mt-11 mb-3"></div>
        <div class="w-8 h-2 rounded-full bg-slate-300 mx-auto mb-3 border border-black/20"></div>
        <div class="h-36 rounded-xl p-4 flex flex-col justify-between text-white" style="background: ${c.bg};">
          <div class="flex justify-between items-center font-tech text-[10px]">
            <span class="${c.accent} font-bold">TOP PASS // ${c.passNo}</span>
            <span>${c.date.split(" ")[0].toUpperCase()} ${c.date.split(" ")[1]}</span>
          </div>
          <div>
            <p class="font-tech text-[10px] ${c.accent} font-bold uppercase">${c.issuer}</p>
            <h4 class="font-anton text-2xl tracking-wide leading-tight mt-0.5">${c.title}</h4>
          </div>
        </div>
        <div class="pt-4 space-y-3">
          <div>
            <p class="font-tech text-[10px] text-slate-500 uppercase">Credential ID</p>
            <span class="font-mono text-xs font-bold text-inkBlack bg-slate-100 px-2 py-0.5 rounded border border-slate-200 block truncate">${c.id}</span>
          </div>
          <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 rounded-xl bg-electricBlue hover:bg-inkBlack text-white font-tech text-[11px] font-bold uppercase tracking-wider text-center block transition shadow-md">VIEW CREDENTIAL ↗</a>
        </div>
      </div>
    `).join("");
  }

  const p2Container = document.getElementById("priority2-certs");
  if (p2Container) {
    p2Container.innerHTML = priority2Certs.map(c => `
      <div class="bg-white p-6 rounded-2xl border border-black/15 shadow-lg hover:shadow-xl transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-black/10">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl ${c.logoBg || 'bg-blue-50 border-blue-200 text-blue-700'} border flex items-center justify-center font-bold text-xs">${c.logoText || 'IBM'}</div>
              <div><p class="font-tech text-[10px] font-bold uppercase text-blue-700">${c.issuer}</p><p class="font-tech text-[10px] text-slate-500">Issued: ${c.date}</p></div>
            </div>
            <span class="font-mono text-[11px] font-bold text-inkBlack bg-slate-100 px-2.5 py-1 rounded border border-slate-200">${c.id}</span>
          </div>
          <h4 class="font-anton text-2xl text-inkBlack mt-4 tracking-wide">${c.title}</h4>
          <p class="text-xs text-slate-600 mt-2 leading-relaxed">${c.desc}</p>
        </div>
        <div class="pt-4 mt-4 border-t border-black/10 flex items-center justify-between">
          <span class="font-tech text-[10px] font-bold uppercase text-slate-500">Verified</span>
          <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-blue-700 hover:bg-inkBlack text-white font-tech text-xs font-bold uppercase tracking-wider transition">VIEW CREDENTIAL ↗</a>
        </div>
      </div>
    `).join("");
  }

  const p3Container = document.getElementById("priority3-certs");
  if (p3Container) {
    p3Container.innerHTML = priority3Certs.map(c => `
      <div class="bg-white p-6 rounded-2xl border border-black/15 shadow-lg hover:shadow-xl transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-black/10">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center font-bold text-xs text-emerald-700">${c.logoText}</div>
              <div><p class="font-tech text-[10px] font-bold uppercase text-emerald-700">${c.issuer}</p><p class="font-tech text-[10px] text-slate-500">Issued: ${c.date}</p></div>
            </div>
            <span class="font-mono text-[11px] font-bold text-inkBlack bg-slate-100 px-2.5 py-1 rounded border border-slate-200">${c.id}</span>
          </div>
          <h4 class="font-anton text-2xl text-inkBlack mt-4 tracking-wide">${c.title}</h4>
          <p class="text-xs text-slate-600 mt-2 leading-relaxed">${c.desc}</p>
        </div>
        <div class="pt-4 mt-4 border-t border-black/10 flex items-center justify-between">
          <span class="font-tech text-[10px] font-bold uppercase text-slate-500">Verified by HackerRank</span>
          <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-inkBlack text-white font-tech text-xs font-bold uppercase tracking-wider transition">VIEW CREDENTIAL ↗</a>
        </div>
      </div>
    `).join("");
  }

  const p4Container = document.getElementById("priority4-cert");
  if (p4Container) {
    p4Container.innerHTML = `
      <div class="flex items-center gap-3 mb-6"><span class="w-3 h-3 rounded-full bg-purple-600"></span><h3 class="font-tech text-xs font-bold uppercase tracking-[0.22em] text-inkBlack">PRIORITY 04 // COMPREHENSIVE DATA SCIENCE & AI BOOTCAMP</h3></div>
      <div class="bg-white p-6 rounded-2xl border border-black/15 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="space-y-2 max-w-3xl">
          <div class="flex flex-wrap items-center gap-3">
            <span class="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-800 font-tech text-[10px] font-bold uppercase">Udemy Bootcamp</span>
            <span class="font-tech text-[10px] text-slate-500">Issued: ${priority4Cert.date}</span>
            <span class="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">${priority4Cert.id}</span>
          </div>
          <h4 class="font-anton text-2xl sm:text-3xl text-inkBlack tracking-wide">${priority4Cert.title}</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${priority4Cert.desc}</p>
        </div>
        <div class="flex-shrink-0">
          <a href="${priority4Cert.link}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-xl bg-purple-700 hover:bg-inkBlack text-white font-tech text-xs font-bold uppercase tracking-wider block text-center transition shadow-md">VIEW CREDENTIAL ↗</a>
        </div>
      </div>
    `;
  }
}

renderCertificates();

/* ==================== 5. GSAP SCROLL CHOREOGRAPHY ==================== */
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".gsap-section-header").forEach((header) => {
    gsap.from(header, {
      scrollTrigger: { trigger: header, start: "top 85%", toggleActions: "play none none reverse" },
      y: 45,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });
  });
}

/* ==================== 6. THREE.JS 3D GLOSSY SPHERE CLUSTER (RESPONSIVE) ==================== */
(function initThreeCertificates() {
  const canvas = document.getElementById("three-cert-canvas");
  if (!canvas || typeof THREE === "undefined") return;
  const parent = canvas.parentElement;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, parent.clientWidth / parent.clientHeight, 0.1, 100);
  camera.position.z = 11;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(parent.clientWidth, parent.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene.add(new THREE.AmbientLight(0xffffff, 0.65));
  const point1 = new THREE.PointLight(0x38bdf8, 3.4, 35);
  point1.position.set(6, 6, 7);
  scene.add(point1);
  const point2 = new THREE.PointLight(0x2563eb, 3.0, 35);
  point2.position.set(-6, -4, 6);
  scene.add(point2);

  const group = new THREE.Group();
  scene.add(group);

  const geo = new THREE.SphereGeometry(1, 40, 40);
  const matBlue = new THREE.MeshPhysicalMaterial({ color: 0x2563eb, roughness: 0.1, metalness: 0.25, clearcoat: 1.0 });
  const matSilver = new THREE.MeshPhysicalMaterial({ color: 0xe2e8f0, roughness: 0.14, metalness: 0.65, clearcoat: 1.0 });

  const spheres = [];
  for (let i = 0; i < 18; i++) {
    const mesh = new THREE.Mesh(geo, i % 2 === 0 ? matBlue : matSilver);
    const scale = 0.55 + Math.random() * 0.85;
    mesh.scale.set(scale, scale, scale);
    mesh.userData = {
      baseX: (Math.random() - 0.5) * 7.5,
      baseY: (Math.random() - 0.5) * 3.5,
      baseZ: (Math.random() - 0.5) * 3,
      speed: 0.75 + Math.random() * 1.1,
      offset: Math.random() * Math.PI * 2
    };
    group.add(mesh);
    spheres.push(mesh);
  }

  let mouseX = 0;
  let mouseY = 0;
  parent.addEventListener("mousemove", (e) => {
    const rect = parent.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  window.addEventListener("resize", () => {
    if (!parent.clientWidth || !parent.clientHeight) return;
    camera.aspect = parent.clientWidth / parent.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(parent.clientWidth, parent.clientHeight);
  });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    spheres.forEach((s) => {
      const u = s.userData;
      s.position.x = u.baseX + Math.sin(t * u.speed + u.offset) * 0.65 + mouseX * 1.15;
      s.position.y = u.baseY + Math.cos(t * u.speed + u.offset) * 0.55 + mouseY * 0.85;
      s.position.z = u.baseZ + Math.sin(t * 0.7 + u.offset) * 0.4;
    });
    group.rotation.y = t * 0.12 + mouseX * 0.3;
    renderer.render(scene, camera);
  }
  animate();
})();
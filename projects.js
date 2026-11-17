/* ==================== 6 REAL VERIFIED GITHUB PROJECTS & WORKSTATION DATA ==================== */
const projectsData = [
  {
    title: "MULTI-AGENT AI RESEARCH SYSTEM",
    tag: "{ GENAI // MULTI-AGENT ARCHITECTURE }",
    year: "NOV 2026",
    date: "November 2026",
    desc: "An AI-powered multi-agent research system built using LangChain, where specialized AI agents collaborate to research topics, gather information, analyze findings and generate structured research reports.",
    stack: ["Python", "LangChain", "Multi-Agent AI", "LLMs", "Agent Architecture"],
    github: "https://github.com/shubhamgawas4506-coder/Multi-Agent-AI-Research-System-Using-Langchain",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #0A1936 55%, #05070B 100%)",
    dirName: "LANGCHAIN_AGENTS.DIR"
  },
  {
    title: "NYC AIRBNB ROOM PREDICTOR",
    tag: "{ MACHINE LEARNING // CLASSIFICATION }",
    year: "NOV 2026",
    date: "November 2026",
    desc: "Built a Machine Learning model to classify Airbnb room types in New York City. The project covers the complete ML pipeline, including data cleaning, exploratory data analysis, feature engineering, model training and performance evaluation.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analysis"],
    github: "https://github.com/shubhamgawas4506-coder/NYC-Airbnb-Room-Type-Predictor-Using-Machine-Learning",
    gradient: "linear-gradient(135deg, #0284C7 0%, #0F172A 55%, #05070B 100%)",
    dirName: "NYC_AIRBNB.DIR"
  },
  {
    title: "ECOMMERCE DATA PIPELINE",
    tag: "{ DATA ENGINEERING // REAL-TIME ML }",
    year: "OCT 2026",
    date: "October 2026",
    desc: "Architected an end-to-end e-commerce data engineering pipeline that transforms raw transactional JSON order logs into actionable customer churn predictions. Utilizes PySpark and Pandas to export partitioned Parquet files into a DuckDB SQL data warehouse, extracting RFM metrics to train a Random Forest classifier served via a FastAPI REST microservice and orchestrated with Apache Airflow and AWS S3.",
    stack: ["Python", "PySpark", "Pandas", "DuckDB", "Parquet", "Random Forest", "FastAPI", "Apache Airflow", "AWS S3"],
    github: "https://github.com/shubhamgawas4506-coder/ecommerce-data-pipeline",
    gradient: "linear-gradient(135deg, #2563EB 0%, #1E1B4B 60%, #05070B 100%)",
    dirName: "DATA_PIPELINE.DIR"
  },
  {
    title: "AIVORAML PLATFORM",
    tag: "{ AUTO-ML // PLATFORM ARCHITECTURE }",
    year: "JUL–AUG 2026",
    date: "July 2026 – August 2026",
    desc: "Built AivoraML, an automated machine learning platform designed to simplify the end-to-end ML workflow. Transforms raw datasets into trained and evaluated machine learning models by automating data preprocessing, model selection, training, performance evaluation and prediction generation.",
    stack: ["Python", "FastAPI", "Scikit-learn", "Pandas", "Machine Learning"],
    github: "https://github.com/shubhamgawas4506-coder/AivoraML-Automated-Machine-Learning-Platform",
    gradient: "linear-gradient(135deg, #0284C7 0%, #1E293B 65%, #05070B 100%)",
    dirName: "AIVORAML.DIR"
  },
  {
    title: "CUSTOMER CHURN PREDICTOR",
    tag: "{ FINANCIAL ML // CLASSIFICATION PIPELINE }",
    year: "APR 2026",
    date: "April 2026",
    desc: "Developed an end-to-end Customer Churn Prediction project using Machine Learning in Python, focusing on identifying customers likely to leave a bank. Involved data preprocessing, exploratory data analysis and feature engineering, training and comparing Logistic Regression, Random Forest and XGBoost models using accuracy, precision and recall.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Logistic Regression", "Random Forest", "XGBoost"],
    github: "https://github.com/shubhamgawas4506-coder/Customer-Churn-Prediction-Using-Machine-Learning",
    gradient: "linear-gradient(135deg, #10B981 0%, #064E3B 55%, #05070B 100%)",
    dirName: "CHURN_PREDICT.DIR"
  },
  {
    title: "HOUSE PRICE PREDICTOR",
    tag: "{ REGRESSION // PROPERTY ANALYTICS }",
    year: "APR 2026",
    date: "April 2026",
    desc: "Developed a Machine Learning model to predict house prices based on property features such as location, area, number of rooms and other housing attributes. Includes data preprocessing, missing-value handling, feature engineering and exploratory data analysis, evaluating Linear Regression, Random Forest and XGBoost.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression", "Random Forest", "XGBoost"],
    github: "https://github.com/shubhamgawas4506-coder/House-Price-Prediction-Using-Machine-Learning",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1E293B 60%, #05070B 100%)",
    dirName: "HOUSE_PRICES.DIR"
  }
];

let activeProj = 0;
const isoDeck = document.getElementById("iso-deck");
const foldersGrid = document.getElementById("folders-grid");

function renderFoldersGrid() {
  if (!foldersGrid) return;
  foldersGrid.innerHTML = "";
  projectsData.forEach((proj, idx) => {
    const card = document.createElement("div");
    card.className = "folder-3d-card";
    card.onclick = () => selectProjectFromFolder(idx);
    card.innerHTML = `
      <div class="folder-backplate" style="background: ${proj.gradient}; padding: 1rem;">
        <span class="font-tech text-[10px] uppercase tracking-widest text-iceCyan">DIR // 00${idx + 1}</span>
      </div>
      <div class="folder-inner-doc flex flex-col justify-between">
        <div class="flex justify-between items-center border-b border-slate-300 pb-1.5">
          <span class="font-tech text-[10px] font-bold uppercase text-electricBlue">${proj.stack[0]}</span>
          <span class="font-tech text-[9px] font-bold text-slate-500">${proj.year}</span>
        </div>
        <p class="font-anton text-lg text-inkBlack leading-tight my-1">${proj.title}</p>
        <p class="text-[11px] text-slate-600 line-clamp-2">${proj.desc}</p>
        <div class="flex items-center justify-between pt-1">
          <span class="font-tech text-[9px] font-bold text-electricBlue uppercase">Inspect Spec →</span>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="p-1 rounded bg-black/10 hover:bg-black hover:text-white text-inkBlack transition" title="View GitHub Repo">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
      <div class="folder-front-glass p-5 flex flex-col justify-between">
        <div class="flex justify-between items-center">
          <span class="font-tech text-[10px] uppercase tracking-[0.2em] text-iceCyan font-bold">${proj.dirName}</span>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="w-7 h-7 rounded-lg bg-obsidian/80 border border-white/20 hover:border-iceCyan flex items-center justify-center text-white text-xs hover:text-iceCyan transition" title="GitHub Repo">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
        <div>
          <h3 class="font-anton text-2xl tracking-wide text-white">0${idx + 1}. ${proj.title}</h3>
          <p class="font-tech text-[10px] text-silverMist/80 uppercase tracking-wider mt-0.5">${proj.stack.slice(0, 3).join(" • ")}</p>
        </div>
      </div>
    `;
    foldersGrid.appendChild(card);
  });
}

function renderProjects() {
  if (!isoDeck) return;
  isoDeck.innerHTML = "";
  const isMobile = window.innerWidth < 640;

  projectsData.forEach((proj, idx) => {
    const offset = idx - activeProj;
    const card = document.createElement("div");
    card.className = "iso-card p-6 flex flex-col justify-between cursor-pointer";
    card.style.background = proj.gradient;

    const translateX = offset * (isMobile ? 28 : 48);
    const translateY = offset * (isMobile ? -16 : -24);
    const translateZ = -Math.abs(offset) * (isMobile ? 55 : 80);
    const rotateY = isMobile ? -16 : -28;
    const rotateX = isMobile ? 8 : 12;
    const opacity = Math.abs(offset) > 3 ? 0 : 1 - Math.abs(offset) * 0.22;

    card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    card.style.opacity = opacity;
    card.style.zIndex = 20 - Math.abs(offset);

    card.innerHTML = `
      <div class="flex items-center justify-between font-tech text-[10px] tracking-[0.2em] uppercase text-white/75">
        <span>0${idx + 1} // CASE STUDY</span>
        <span class="text-iceCyan font-bold">${proj.year}</span>
      </div>
      <div>
        <p class="font-tech text-xs text-iceCyan uppercase tracking-widest mb-1">${proj.tag}</p>
        <h4 class="font-anton text-2xl sm:text-3xl tracking-wide text-white">${proj.title}</h4>
      </div>
      <div class="flex items-center justify-between pt-2 border-t border-white/15">
        <div class="flex flex-wrap gap-1 font-tech max-w-[200px]">
          ${proj.stack.slice(0, 3).map(s => `<span class="px-1.5 py-0.5 rounded bg-black/45 border border-white/15 text-[9px] text-white/90">${s}</span>`).join("")}
        </div>
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"
          class="p-1.5 rounded-lg bg-black/40 hover:bg-white hover:text-obsidian text-white border border-white/20 transition flex items-center justify-center" title="Open GitHub Repo">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
      </div>
    `;
    card.addEventListener("click", () => {
      activeProj = idx;
      updateMonitorAndDeck();
    });
    isoDeck.appendChild(card);
  });
}

function updateMonitorAndDeck() {
  const p = projectsData[activeProj];
  document.getElementById("monitor-title").textContent = p.title;
  document.getElementById("monitor-tag").textContent = p.tag;
  document.getElementById("monitor-year").textContent = p.year;
  document.getElementById("monitor-desc").textContent = p.desc;
  document.getElementById("monitor-screen").style.background = p.gradient;
  const ghBtn = document.getElementById("monitor-github");
  if (ghBtn) ghBtn.href = p.github;
  document.getElementById("monitor-stack").innerHTML = p.stack
    .map(s => `<span class="px-2.5 py-1 rounded bg-black/45 border border-white/20 text-[10px] uppercase tracking-wider">${s}</span>`)
    .join("");
  renderProjects();
}

window.selectProjectFromFolder = function (index) {
  activeProj = index;
  updateMonitorAndDeck();
  openCaseStudyModal();
};

window.openCaseStudyModal = function () {
  const p = projectsData[activeProj];
  document.getElementById("modal-tag").textContent = p.tag;
  document.getElementById("modal-title").textContent = p.title;
  const modalDate = document.getElementById("modal-date");
  if (modalDate) modalDate.textContent = `📅 ${p.date}`;
  document.getElementById("modal-desc").textContent = p.desc;
  const modalGh = document.getElementById("modal-github");
  if (modalGh) modalGh.href = p.github;
  document.getElementById("modal-stack").innerHTML = p.stack
    .map(s => `<span class="px-3 py-1 rounded-full bg-white/10 border border-iceCyan/30 text-xs text-white">${s}</span>`)
    .join("");
  const modal = document.getElementById("case-study-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

window.closeCaseStudyModal = function () {
  const modal = document.getElementById("case-study-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};

document.getElementById("prev-proj").addEventListener("click", () => {
  activeProj = (activeProj - 1 + projectsData.length) % projectsData.length;
  updateMonitorAndDeck();
});
document.getElementById("next-proj").addEventListener("click", () => {
  activeProj = (activeProj + 1) % projectsData.length;
  updateMonitorAndDeck();
});

window.addEventListener("resize", () => {
  renderProjects();
});

renderFoldersGrid();
updateMonitorAndDeck();
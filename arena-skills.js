/* ==================== SKILL STADIUM — ENLARGED BOWL & VERIFIED OFFICIAL BRAND LOGOS ONLY ==================== */
(function initMasterCricketSkillStadium() {
    const { Engine, Render, Runner, World, Bodies, Body, Mouse, MouseConstraint, Events, Query } = Matter;
    const canvas = document.getElementById("skills-physics-canvas");
    if (!canvas) return;
    const container = canvas.parentElement;
    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Authentic Inline Brand SVGs (Zero URL-encoding bugs so every single logo renders 100% of the time)
    const langchainSvg = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="#1C3C3C"/><path d="M36 64 L64 36 M30 44 A17 17 0 1 1 56 20 L66 30 M70 56 A17 17 0 1 1 44 80 L34 70" fill="none" stroke="#38BDF8" stroke-width="10" stroke-linecap="round"/><circle cx="32" cy="32" r="7" fill="#10B981"/><circle cx="68" cy="68" r="7" fill="#FFFFFF"/></svg>`);
    const geminiSvg = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1BA1E3"/><stop offset="50%" stop-color="#5B5CF6"/><stop offset="100%" stop-color="#D96570"/></linearGradient></defs><rect width="100" height="100" rx="50" fill="#FFFFFF"/><path d="M50 12 C50 34, 34 50, 12 50 C34 50, 50 66, 50 88 C50 66, 66 50, 88 50 C66 50, 50 34, 50 12 Z" fill="url(#gem)"/></svg>`);
    const openaiSvg = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="#10A37F"/><path d="M50 20 C54 20 57 23 57 27 L57 38 C60 36 64 36 67 38 C70 40 72 43 72 47 C72 50 71 53 68 55 C71 57 73 60 73 64 C73 68 70 72 66 73 C65 76 62 78 59 79 C56 80 52 80 49 79 L49 68 C46 70 42 70 39 68 C36 66 34 63 34 59 C34 56 35 53 38 51 C35 49 33 46 33 42 C33 38 36 34 40 33 C41 30 44 28 47 27 C48 27 49 27 50 20 Z" fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linejoin="round"/><circle cx="50" cy="50" r="10" fill="#FFFFFF"/></svg>`);
    const xgboostSvg = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="#FFFFFF"/><path d="M22 28 L44 50 L22 72 M46 28 L68 50 L46 72" fill="none" stroke="#0284C7" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><text x="50" y="88" font-family="sans-serif" font-weight="900" font-size="14" fill="#0F172A" text-anchor="middle">XGBoost</text></svg>`);
    const awsS3Svg = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="#FFFFFF"/><path d="M24 34 L50 20 L76 34 L50 48 Z" fill="#E05243"/><path d="M24 34 L50 48 V78 L24 64 Z" fill="#8C3123"/><path d="M76 34 L50 48 V78 L76 64 Z" fill="#E05243"/><text x="50" y="92" font-family="sans-serif" font-weight="900" font-size="13" fill="#0F172A" text-anchor="middle">AWS S3</text></svg>`);

    // Curated Verified Official Brand Logo Spheres (All broken/black balls removed, radii enlarged to 40-44px)
    const skillDatabase = [
        // Languages
        { label: "Python", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", surface: "#FFFFFF", r: 44, logoScale: 1.36, role: "Primary AI & Data Science Language", desc: "Core language for Multi-Agent AI research, data engineering, and machine learning pipelines.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM", "ECOMMERCE DATA PIPELINE", "NYC AIRBNB ROOM PREDICTOR"] },
        { label: "JavaScript", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", surface: "#F7DF1E", r: 41, logoScale: 1.36, role: "Interactive Web & Scripting", desc: "Used for interactive web UIs, event loops, physics scripts, and real-time frontend applications.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "TypeScript", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", surface: "#3178C6", r: 41, logoScale: 1.36, role: "Type-Safe Full-Stack Systems", desc: "Strict type safety for robust full-stack architecture and reliable client interfaces.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "PHP", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", surface: "#FFFFFF", r: 39, logoScale: 1.34, role: "Server-Side Scripting", desc: "Server scripting and backend web programming for web services.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },

        // Frontend & 3D
        { label: "React", category: "Frontend & 3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", surface: "#FFFFFF", r: 42, logoScale: 1.34, role: "Interactive Component UI", desc: "Component-driven interfaces and reactive dashboards for AI & analytics applications.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "Next.js", category: "Frontend & 3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", surface: "#FFFFFF", r: 42, logoScale: 1.42, role: "Full-Stack React Framework", desc: "Server-side rendering, streaming interfaces, and production web application delivery.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "Three.js", category: "Frontend & 3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", surface: "#FFFFFF", r: 41, logoScale: 1.34, role: "3D WebGL Visualization", desc: "Real-time 3D WebGL rendering, custom shaders, and interactive stadium environments.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "Tailwind CSS", category: "Frontend & 3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", surface: "#FFFFFF", r: 40, logoScale: 1.34, role: "Utility-First Styling", desc: "Responsive design systems, glassmorphic surfaces, and modern UI styling.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "HTML5", category: "Frontend & 3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", surface: "#FFFFFF", r: 39, logoScale: 1.32, role: "Modern Web Markup", desc: "Semantic structure, responsive containers, Canvas APIs, and accessibility foundation.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "CSS3", category: "Frontend & 3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", surface: "#FFFFFF", r: 39, logoScale: 1.32, role: "Modern Web Styling", desc: "Grid systems, flexbox, 3D transforms, fluid typography, and responsive animations.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },

        // Backend & APIs
        { label: "FastAPI", category: "Backend & APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", surface: "#009688", r: 43, logoScale: 1.36, role: "High-Speed Python API", desc: "Sub-millisecond REST API framework serving real-time machine learning predictions.", projects: ["ECOMMERCE DATA PIPELINE", "AIVORAML PLATFORM"] },
        { label: "Node.js", category: "Backend & APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", surface: "#FFFFFF", r: 41, logoScale: 1.34, role: "Asynchronous Runtime", desc: "Event-driven runtime for microservices, asynchronous workers, and backend API orchestration.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "Flask", category: "Backend & APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", surface: "#FFFFFF", r: 39, logoScale: 1.32, role: "Micro Web Framework", desc: "Lightweight Python framework used for rapid prototyping and ML inference endpoints.", projects: ["AIVORAML PLATFORM"] },

        // AI & ML
        { label: "Scikit-Learn", category: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", surface: "#FFFFFF", r: 44, logoScale: 1.38, role: "Machine Learning Toolkit", desc: "Classification, regression, Random Forest, model evaluation, and cross-validation pipelines.", projects: ["NYC AIRBNB ROOM PREDICTOR", "AIVORAML PLATFORM", "CUSTOMER CHURN PREDICTOR", "HOUSE PRICE PREDICTOR"] },
        { label: "PyTorch", category: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", surface: "#FFFFFF", r: 43, logoScale: 1.34, role: "Deep Learning Framework", desc: "Deep neural architectures, representation learning, and AI research experimentation.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "TensorFlow", category: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", surface: "#FFFFFF", r: 42, logoScale: 1.34, role: "Neural Pipeline & Modeling", desc: "End-to-end deep learning and neural network training workflows.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "XGBoost", category: "AI & ML", logo: xgboostSvg, surface: "#FFFFFF", r: 42, logoScale: 1.38, role: "Gradient Boosted Trees", desc: "High-performance gradient boosting for customer churn classification and house price regression.", projects: ["CUSTOMER CHURN PREDICTOR", "HOUSE PRICE PREDICTOR"] },
        { label: "NumPy", category: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", surface: "#FFFFFF", r: 41, logoScale: 1.34, role: "Numerical Computing", desc: "Vectorized array calculations, linear algebra, and mathematical operations.", projects: ["NYC AIRBNB ROOM PREDICTOR", "CUSTOMER CHURN PREDICTOR", "HOUSE PRICE PREDICTOR"] },
        { label: "Matplotlib", category: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", surface: "#FFFFFF", r: 40, logoScale: 1.34, role: "Exploratory Data Visualization", desc: "Publication-grade plots, feature importance charts, and EDA diagnostics.", projects: ["NYC AIRBNB ROOM PREDICTOR", "HOUSE PRICE PREDICTOR"] },
        { label: "Jupyter", category: "AI & ML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg", surface: "#FFFFFF", r: 40, logoScale: 1.32, role: "Interactive ML Notebooks", desc: "Interactive exploratory data analysis, feature engineering, and model benchmarking.", projects: ["NYC AIRBNB ROOM PREDICTOR", "CUSTOMER CHURN PREDICTOR"] },

        // GenAI & LLMs
        { label: "LangChain", category: "GenAI & LLMs", logo: langchainSvg, surface: "#1C3C3C", r: 44, logoScale: 1.44, role: "Multi-Agent AI Orchestration", desc: "Core framework powering collaborative multi-agent research workflows and report generation.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "Google Gemini", category: "GenAI & LLMs", logo: geminiSvg, surface: "#FFFFFF", r: 43, logoScale: 1.38, role: "Multimodal LLM Reasoning", desc: "Long-context reasoning, prompt engineering, and autonomous agent synthesis.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "OpenAI API", category: "GenAI & LLMs", logo: openaiSvg, surface: "#10A37F", r: 42, logoScale: 1.40, role: "LLM API & Tool Calling", desc: "Function calling, embeddings, and structured multi-agent research generation.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },

        // Data Engineering
        { label: "Pandas", category: "Data Engineering", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", surface: "#FFFFFF", r: 43, logoScale: 1.36, role: "DataFrame ETL & Wrangling", desc: "High-velocity data cleaning, missing-value imputation, and RFM feature extraction.", projects: ["ECOMMERCE DATA PIPELINE", "NYC AIRBNB ROOM PREDICTOR", "AIVORAML PLATFORM"] },
        { label: "PySpark", category: "Data Engineering", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg", surface: "#FFFFFF", r: 43, logoScale: 1.36, role: "Distributed ETL Processing", desc: "Distributed ingestion and transformation of raw JSON logs into partitioned Parquet files.", projects: ["ECOMMERCE DATA PIPELINE"] },
        { label: "Apache Airflow", category: "Data Engineering", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg", surface: "#FFFFFF", r: 42, logoScale: 1.34, role: "Workflow Orchestration", desc: "Automated DAG scheduling and end-to-end e-commerce data pipeline orchestration.", projects: ["ECOMMERCE DATA PIPELINE"] },

        // Databases
        { label: "DuckDB", category: "Databases", logo: "https://cdn.simpleicons.org/duckdb/FFF000", surface: "#161B22", r: 41, logoScale: 1.28, role: "Analytical SQL Data Warehouse", desc: "High-speed in-process analytical SQL warehouse querying partitioned Parquet datasets.", projects: ["ECOMMERCE DATA PIPELINE"] },
        { label: "PostgreSQL", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", surface: "#FFFFFF", r: 41, logoScale: 1.34, role: "Relational Database", desc: "ACID-compliant relational storage, window functions, and analytical SQL.", projects: ["ECOMMERCE DATA PIPELINE"] },
        { label: "MySQL", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", surface: "#FFFFFF", r: 41, logoScale: 1.34, role: "Relational SQL Engine", desc: "Structured relational tables, indexing, and HackerRank-verified SQL query optimization.", projects: ["ECOMMERCE DATA PIPELINE"] },
        { label: "MongoDB", category: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", surface: "#FFFFFF", r: 40, logoScale: 1.34, role: "NoSQL Document Store", desc: "Flexible JSON document storage and unstructured log ingestion.", projects: ["ECOMMERCE DATA PIPELINE"] },

        // Cloud & Tools
        { label: "AWS", category: "Cloud & Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", surface: "#FFFFFF", r: 43, logoScale: 1.34, role: "Cloud Compute & Infrastructure", desc: "Cloud data lake architecture and scalable microservice deployment.", projects: ["ECOMMERCE DATA PIPELINE"] },
        { label: "AWS S3", category: "Cloud & Tools", logo: awsS3Svg, surface: "#FFFFFF", r: 41, logoScale: 1.38, role: "Cloud Data Lake Storage", desc: "Cloud object storage for partitioned Parquet files and raw e-commerce order logs.", projects: ["ECOMMERCE DATA PIPELINE"] },
        { label: "Google Cloud", category: "Cloud & Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", surface: "#FFFFFF", r: 42, logoScale: 1.36, role: "Generative AI Leader Certified", desc: "Google Cloud Skills Boost certified Generative AI and cloud ML ecosystem.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM"] },
        { label: "Docker", category: "Cloud & Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", surface: "#FFFFFF", r: 41, logoScale: 1.34, role: "Containerized ML & APIs", desc: "Reproducible container environments for FastAPI, Airflow, and ML model serving.", projects: ["ECOMMERCE DATA PIPELINE", "AIVORAML PLATFORM"] },
        { label: "Git", category: "Cloud & Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", surface: "#FFFFFF", r: 39, logoScale: 1.34, role: "Distributed Version Control", desc: "Branching workflows, commits, and release management across all 6 repositories.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM", "ECOMMERCE DATA PIPELINE"] },
        { label: "GitHub", category: "Cloud & Tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", surface: "#FFFFFF", r: 40, logoScale: 1.34, role: "Production Code Repositories", desc: "Hosts all 6 verified AI, ML, and Data Engineering open-source repositories.", projects: ["MULTI-AGENT AI RESEARCH SYSTEM", "ECOMMERCE DATA PIPELINE"] }
    ];

    let activeCategory = "ALL";
    let ballBodies = [];
    let selectedBall = null;
    let hoveredBall = null;

    // Preload & Verify Every Logo Image — Any logo that fails to load is automatically excluded so zero empty/broken balls ever appear
    const logoCache = {};
    skillDatabase.forEach((skill) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            skill.loaded = true;
        };
        img.onerror = () => {
            skill.loaded = false;
            // Remove any sphere whose logo failed to load
            const brokenIdx = ballBodies.findIndex((b) => b.skillMeta && b.skillMeta.label === skill.label);
            if (brokenIdx !== -1) {
                World.remove(world, ballBodies[brokenIdx]);
                ballBodies.splice(brokenIdx, 1);
                updateCounter();
            }
        };
        img.src = skill.logo;
        logoCache[skill.label] = img;
    });

    // Enlarged High-Resolution Cricket Stadium Bowl Texture
    const stadiumBgCanvas = document.createElement("canvas");
    function buildCricketStadiumTexture(w, h, ratio) {
        stadiumBgCanvas.width = w * ratio;
        stadiumBgCanvas.height = h * ratio;
        const sctx = stadiumBgCanvas.getContext("2d");
        sctx.save();
        sctx.scale(ratio, ratio);

        const cx = w / 2;
        const cy = h / 2 - 4;
        // Larger Stadium Bowl Proportions Filling the Container Cleanly
        const ovalRx = w * 0.486;
        const ovalRy = h * 0.478;

        const bowlGrad = sctx.createRadialGradient(cx, cy, ovalRy * 0.72, cx, cy, Math.max(w, h) * 0.76);
        bowlGrad.addColorStop(0, "#0F291A");
        bowlGrad.addColorStop(0.55, "#0B161E");
        bowlGrad.addColorStop(0.85, "#060A10");
        bowlGrad.addColorStop(1, "#030508");
        sctx.fillStyle = bowlGrad;
        sctx.fillRect(0, 0, w, h);

        // Tiered Stadium Seating Bowl Rings
        for (let t = 3; t >= 1; t--) {
            sctx.beginPath();
            sctx.ellipse(cx, cy, ovalRx + t * 18, ovalRy + t * 15, 0, 0, Math.PI * 2);
            sctx.fillStyle = t % 2 === 0 ? "rgba(30, 41, 59, 0.48)" : "rgba(15, 23, 42, 0.65)";
            sctx.fill();
            sctx.strokeStyle = "rgba(148, 163, 184, 0.14)";
            sctx.lineWidth = 1.2;
            sctx.stroke();
        }

        // Radial Stadium Seating Aisles
        sctx.save();
        sctx.translate(cx, cy);
        for (let a = 0; a < 24; a++) {
            const ang = (a * Math.PI * 2) / 24;
            sctx.beginPath();
            sctx.moveTo(Math.cos(ang) * ovalRx, Math.sin(ang) * ovalRy);
            sctx.lineTo(Math.cos(ang) * (ovalRx + 60), Math.sin(ang) * (ovalRy + 50));
            sctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
            sctx.lineWidth = 1.5;
            sctx.stroke();
        }
        sctx.restore();

        // Outer Turf Apron
        sctx.save();
        sctx.beginPath();
        sctx.ellipse(cx, cy, ovalRx, ovalRy, 0, 0, Math.PI * 2);
        sctx.shadowColor = "rgba(0, 0, 0, 0.85)";
        sctx.shadowBlur = 35;
        sctx.fillStyle = "#175220";
        sctx.fill();
        sctx.restore();

        // Clip to Cricket Ground Oval
        sctx.save();
        sctx.beginPath();
        sctx.ellipse(cx, cy, ovalRx, ovalRy, 0, 0, Math.PI * 2);
        sctx.clip();

        const turfGrad = sctx.createRadialGradient(cx, cy - 20, 20, cx, cy, ovalRx);
        turfGrad.addColorStop(0, "#2E8B3C");
        turfGrad.addColorStop(0.55, "#23702E");
        turfGrad.addColorStop(0.88, "#1A5923");
        turfGrad.addColorStop(1, "#124219");
        sctx.fillStyle = turfGrad;
        sctx.fillRect(0, 0, w, h);

        const stripeWidth = 36;
        for (let sx = cx - ovalRx; sx < cx + ovalRx; sx += stripeWidth * 2) {
            sctx.fillStyle = "rgba(255, 255, 255, 0.045)";
            sctx.fillRect(sx, cy - ovalRy, stripeWidth, ovalRy * 2);
        }

        for (let rStep = 0.25; rStep < 0.9; rStep += 0.2) {
            sctx.beginPath();
            sctx.ellipse(cx, cy, ovalRx * rStep, ovalRy * rStep, 0, 0, Math.PI * 2);
            sctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
            sctx.lineWidth = 14;
            sctx.stroke();
        }

        // White Perimeter Boundary Rope
        const boundRx = ovalRx * 0.94;
        const boundRy = ovalRy * 0.93;
        sctx.beginPath();
        sctx.ellipse(cx, cy, boundRx, boundRy, 0, 0, Math.PI * 2);
        sctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
        sctx.lineWidth = 3.5;
        sctx.shadowColor = "rgba(0, 0, 0, 0.45)";
        sctx.shadowBlur = 6;
        sctx.stroke();
        sctx.shadowBlur = 0;

        // Sight Screens
        sctx.fillStyle = "#F8FAFC";
        sctx.fillRect(cx - 38, cy - boundRy - 11, 76, 8);
        sctx.fillRect(cx - 38, cy + boundRy + 4, 76, 8);

        // 30-Yard Fielding Circle
        const innerRx = ovalRx * 0.58;
        const innerRy = ovalRy * 0.60;
        sctx.beginPath();
        sctx.setLineDash([8, 7]);
        sctx.ellipse(cx, cy, innerRx, innerRy, 0, 0, Math.PI * 2);
        sctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
        sctx.lineWidth = 2;
        sctx.stroke();
        sctx.setLineDash([]);

        // Central Clay Pitch Square
        const pitchW = 50;
        const pitchH = Math.min(235, ovalRy * 0.76);
        const px = cx - pitchW / 2;
        const py = cy - pitchH / 2;

        sctx.fillStyle = "rgba(186, 164, 126, 0.25)";
        sctx.fillRect(px - 26, py + 8, 20, pitchH - 16);
        sctx.fillRect(px + pitchW + 6, py + 8, 20, pitchH - 16);

        const clayGrad = sctx.createLinearGradient(px, py, px + pitchW, py + pitchH);
        clayGrad.addColorStop(0, "#DFC8A2");
        clayGrad.addColorStop(0.5, "#CBB084");
        clayGrad.addColorStop(1, "#BFA172");
        sctx.save();
        sctx.shadowColor = "rgba(0, 0, 0, 0.4)";
        sctx.shadowBlur = 12;
        sctx.fillStyle = clayGrad;
        sctx.fillRect(px, py, pitchW, pitchH);
        sctx.restore();

        sctx.strokeStyle = "#FFFFFF";
        sctx.lineWidth = 1.8;
        const bowlOffset = 18;
        const popOffset = 32;
        const returnInset = 6;

        sctx.beginPath();
        sctx.moveTo(px + returnInset, py + bowlOffset);
        sctx.lineTo(px + pitchW - returnInset, py + bowlOffset);
        sctx.moveTo(px - 6, py + popOffset);
        sctx.lineTo(px + pitchW + 6, py + popOffset);
        sctx.moveTo(px + returnInset, py + 6);
        sctx.lineTo(px + returnInset, py + popOffset + 6);
        sctx.moveTo(px + pitchW - returnInset, py + 6);
        sctx.lineTo(px + pitchW - returnInset, py + popOffset + 6);
        sctx.stroke();

        sctx.beginPath();
        sctx.moveTo(px + returnInset, py + pitchH - bowlOffset);
        sctx.lineTo(px + pitchW - returnInset, py + pitchH - bowlOffset);
        sctx.moveTo(px - 6, py + pitchH - popOffset);
        sctx.lineTo(px + pitchW + 6, py + pitchH - popOffset);
        sctx.moveTo(px + returnInset, py + pitchH - 6);
        sctx.lineTo(px + returnInset, py + pitchH - popOffset - 6);
        sctx.moveTo(px + pitchW - returnInset, py + pitchH - 6);
        sctx.lineTo(px + pitchW - returnInset, py + pitchH - popOffset - 6);
        sctx.stroke();

        [-1, 1].forEach((dir) => {
            const sy = dir === -1 ? py + bowlOffset : py + pitchH - bowlOffset;
            [-5, 0, 5].forEach((ox) => {
                sctx.fillStyle = "rgba(0,0,0,0.45)";
                sctx.fillRect(cx + ox - 1, sy + 1, 3, 6 * dir);
                sctx.fillStyle = "#FBBF24";
                sctx.beginPath();
                sctx.arc(cx + ox, sy, 2.2, 0, Math.PI * 2);
                sctx.fill();
            });
            sctx.strokeStyle = "#FFFFFF";
            sctx.lineWidth = 1.5;
            sctx.beginPath();
            sctx.moveTo(cx - 6, sy);
            sctx.lineTo(cx + 6, sy);
            sctx.stroke();
        });

        sctx.restore();

        const corners = [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: 0, y: h }, { x: w, y: h }];
        corners.forEach((c) => {
            const flGrad = sctx.createRadialGradient(c.x, c.y, 5, c.x, c.y, w * 0.42);
            flGrad.addColorStop(0, "rgba(255, 255, 255, 0.24)");
            flGrad.addColorStop(0.25, "rgba(56, 189, 248, 0.08)");
            flGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
            sctx.fillStyle = flGrad;
            sctx.fillRect(0, 0, w, h);
        });

        sctx.restore();
    }

    buildCricketStadiumTexture(width, height, dpr);

    const engine = Engine.create();
    const world = engine.world;
    engine.world.gravity.y = 0.65;

    const render = Render.create({
        canvas: canvas,
        engine: engine,
        options: { width, height, pixelRatio: dpr, wireframes: false, background: "transparent" }
    });

    const wallOpts = { isStatic: true, restitution: 0.82, render: { visible: false } };
    let groundFloorY = height - 32;
    let floorBody = Bodies.rectangle(width / 2, groundFloorY + 30, width * 2, 60, wallOpts);
    let leftWallBody = Bodies.rectangle(20, height / 2, 40, height * 2, wallOpts);
    let rightWallBody = Bodies.rectangle(width - 20, height / 2, 40, height * 2, wallOpts);
    let ceilingBody = Bodies.rectangle(width / 2, -60, width * 2, 60, wallOpts);
    let pitchGuard = Bodies.rectangle(width / 2, height / 2 - 4, 46, 180, { isStatic: true, restitution: 0.9, render: { visible: false } });

    World.add(world, [floorBody, leftWallBody, rightWallBody, ceilingBody, pitchGuard]);

    function updateCounter() {
        const countEl = document.getElementById("arena-active-count");
        if (countEl) countEl.textContent = `${ballBodies.length} OFFICIAL LOGOS ON FIELD`;
    }

    function getScaleFactor() {
        if (width < 640) return 0.74;
        if (width < 1024) return 0.88;
        return 1.05;
    }

    function spawnSkillBalls(filterCat = "ALL") {
        ballBodies.forEach((b) => World.remove(world, b));
        ballBodies = [];

        const validSkills = skillDatabase.filter((s) => s.loaded !== false);
        const filtered = filterCat === "ALL"
            ? validSkills
            : validSkills.filter((s) => s.category === filterCat);

        const scaleFactor = getScaleFactor();
        const centerGap = width < 640 ? 55 : 105;
        const leftMin = 65;
        const leftMax = Math.max(leftMin + 40, width / 2 - centerGap);
        const rightMin = Math.min(width - 105, width / 2 + centerGap);
        const rightMax = width - 65;
        const colsPerWing = width < 640 ? 2 : 4;

        filtered.forEach((skill, i) => {
            const isLeftWing = i % 2 === 0;
            const wingIndex = Math.floor(i / 2);
            const col = wingIndex % colsPerWing;
            const row = Math.floor(wingIndex / colsPerWing);

            const xRange = isLeftWing ? (leftMax - leftMin) : (rightMax - rightMin);
            const xStart = isLeftWing ? leftMin : rightMin;
            const x = xStart + (col / Math.max(1, colsPerWing - 1)) * xRange + (Math.random() * 14 - 7);
            const y = 65 + row * 74 + (Math.random() * 10 - 5);
            const radius = Math.round(skill.r * scaleFactor);

            const body = Bodies.circle(x, y, radius, {
                restitution: 0.84,
                friction: 0.012,
                frictionAir: 0.005,
                density: 0.002,
                render: { visible: false }
            });
            body.skillMeta = skill;
            ballBodies.push(body);
            World.add(world, body);
        });

        updateCounter();
    }

    spawnSkillBalls("ALL");

    Events.on(render, "afterRender", () => {
        const ctx = render.context;
        ctx.save();
        ctx.drawImage(stadiumBgCanvas, 0, 0, width, height);

        // Ground Contact Shadows
        ballBodies.forEach((b) => {
            const img = logoCache[b.skillMeta.label];
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const { x, y } = b.position;
            const r = b.circleRadius;
            const heightAboveTurf = Math.max(0, (groundFloorY - r) - y);
            const shadowScale = Math.max(0.45, 1 - heightAboveTurf / 600);
            const shadowAlpha = Math.max(0.18, 0.52 - heightAboveTurf / 750);

            ctx.save();
            ctx.beginPath();
            ctx.ellipse(x, y + r * 0.88, r * 0.82 * shadowScale, r * 0.28 * shadowScale, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(3, 12, 6, ${shadowAlpha})`;
            ctx.fill();
            ctx.restore();
        });

        // Full-Bleed Official Brand Spheres (Only draws when logo is verified loaded)
        ballBodies.forEach((b) => {
            const s = b.skillMeta;
            const img = logoCache[s.label];
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const { x, y } = b.position;
            const r = b.circleRadius;
            const isSelected = selectedBall === b;
            const isHovered = hoveredBall === b;

            ctx.save();
            ctx.translate(x, y);

            ctx.shadowColor = isSelected ? "rgba(255, 255, 255, 0.7)" : isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.58)";
            ctx.shadowBlur = isSelected ? 26 : isHovered ? 18 : 12;
            ctx.shadowOffsetY = 6;

            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fillStyle = s.surface || "#FFFFFF";
            ctx.fill();

            ctx.shadowBlur = 0;
            ctx.shadowOffsetY = 0;
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.clip();

            const scale = s.logoScale || 1.35;
            const drawSize = r * scale;
            ctx.save();
            ctx.rotate(b.angle * 0.22);
            ctx.drawImage(img, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
            ctx.restore();

            const shadeGrad = ctx.createRadialGradient(-r * 0.32, -r * 0.35, r * 0.05, 0, 0, r);
            shadeGrad.addColorStop(0, "rgba(255, 255, 255, 0.34)");
            shadeGrad.addColorStop(0.32, "rgba(255, 255, 255, 0.0)");
            shadeGrad.addColorStop(0.74, "rgba(0, 0, 0, 0.08)");
            shadeGrad.addColorStop(1, "rgba(0, 0, 0, 0.38)");
            ctx.fillStyle = shadeGrad;
            ctx.fillRect(-r, -r, r * 2, r * 2);

            const glint = ctx.createRadialGradient(-r * 0.38, -r * 0.38, 1, -r * 0.38, -r * 0.38, r * 0.32);
            glint.addColorStop(0, "rgba(255, 255, 255, 0.55)");
            glint.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.fillStyle = glint;
            ctx.beginPath();
            ctx.arc(-r * 0.38, -r * 0.38, r * 0.32, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            if (isHovered || isSelected) {
                ctx.save();
                ctx.font = "700 11px 'Space Grotesk', sans-serif";
                const textW = ctx.measureText(s.label).width + 16;
                ctx.fillStyle = "rgba(5, 7, 11, 0.9)";
                ctx.beginPath();
                ctx.roundRect(-textW / 2, -r - 28, textW, 20, 6);
                ctx.fill();
                ctx.fillStyle = "#FFFFFF";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(s.label, 0, -r - 18);
                ctx.restore();
            }

            ctx.restore();
        });

        ctx.restore();
    });

    const mouse = Mouse.create(render.canvas);
    mouse.pixelRatio = dpr;
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.22, damping: 0.1, render: { visible: false } }
    });
    World.add(world, mouseConstraint);

    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    let downPos = null;
    canvas.addEventListener("pointerdown", (e) => { downPos = { x: e.clientX, y: e.clientY }; });
    canvas.addEventListener("pointermove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const hits = Query.point(ballBodies, { x: e.clientX - rect.left, y: e.clientY - rect.top });
        hoveredBall = hits.length > 0 ? hits[0] : null;
        canvas.style.cursor = hoveredBall ? "pointer" : "grab";
    });
    canvas.addEventListener("pointerup", (e) => {
        if (!downPos) return;
        if (Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) < 10) {
            const rect = canvas.getBoundingClientRect();
            const hits = Query.point(ballBodies, { x: e.clientX - rect.left, y: e.clientY - rect.top });
            if (hits.length > 0) openSkillInspector(hits[0]);
        }
        downPos = null;
    });

    const inspector = document.getElementById("skill-inspector");
    function openSkillInspector(body) {
        selectedBall = body;
        const s = body.skillMeta;
        Body.setVelocity(body, { x: (Math.random() - 0.5) * 4, y: -7 });
        document.getElementById("insp-category").textContent = s.category;
        document.getElementById("insp-logo").src = s.logo;
        document.getElementById("insp-name").textContent = s.label;
        document.getElementById("insp-role").textContent = s.role;
        document.getElementById("insp-desc").textContent = s.desc;
        document.getElementById("insp-radius").textContent = `${Math.round(body.circleRadius * 2)}px Sphere`;
        document.getElementById("insp-projects").innerHTML = s.projects
            .map((p) => `<a href="#projects" class="px-3 py-1.5 rounded-lg bg-electricBlue/20 border border-iceCyan/40 font-tech text-[10px] font-bold uppercase tracking-wider text-white hover:bg-iceCyan hover:text-obsidian transition">${p} ↗</a>`)
            .join("");
        inspector.classList.remove("translate-x-[120%]", "opacity-0");
        inspector.classList.add("translate-x-0", "opacity-100");
    }

    document.getElementById("close-inspector").addEventListener("click", () => {
        selectedBall = null;
        inspector.classList.add("translate-x-[120%]", "opacity-0");
        inspector.classList.remove("translate-x-0", "opacity-100");
    });

    document.querySelectorAll(".cat-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".cat-pill").forEach((b) => b.classList.remove("cat-pill-active"));
            btn.classList.add("cat-pill-active");
            activeCategory = btn.getAttribute("data-cat");
            spawnSkillBalls(activeCategory);
        });
    });

    document.getElementById("impulse-wave").addEventListener("click", () => {
        ballBodies.forEach((b) => Body.setVelocity(b, { x: (Math.random() - 0.5) * 18, y: -8 - Math.random() * 12 }));
    });

    let zeroG = false;
    const gravBtn = document.getElementById("toggle-gravity");
    gravBtn.addEventListener("click", () => {
        zeroG = !zeroG;
        engine.world.gravity.y = zeroG ? 0 : 0.65;
        gravBtn.textContent = zeroG ? "Zero-G: ON" : "Zero-G: OFF";
        if (zeroG) ballBodies.forEach((b) => Body.setVelocity(b, { x: (Math.random() - 0.5) * 5, y: (Math.random() - 0.5) * 5 }));
    });

    document.getElementById("respawn-balls").addEventListener("click", () => {
        const validSkills = skillDatabase.filter((s) => s.loaded !== false);
        const s = validSkills[Math.floor(Math.random() * validSkills.length)];
        const side = Math.random() > 0.5 ? 1 : -1;
        const spawnX = width / 2 + side * (120 + Math.random() * 130);
        const radius = Math.round(s.r * getScaleFactor());
        const body = Bodies.circle(spawnX, 60, radius, { restitution: 0.84, friction: 0.012, render: { visible: false } });
        body.skillMeta = s;
        ballBodies.push(body);
        World.add(world, body);
        updateCounter();
    });

    // Responsive Resize Handler for Mobile, Tablet & Desktop
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!container.clientWidth || !container.clientHeight) return;
            width = container.clientWidth;
            height = container.clientHeight;
            render.canvas.width = width * dpr;
            render.canvas.height = height * dpr;
            render.options.width = width;
            render.options.height = height;
            groundFloorY = height - 32;

            buildCricketStadiumTexture(width, height, dpr);

            Body.setPosition(floorBody, { x: width / 2, y: groundFloorY + 30 });
            Body.setPosition(rightWallBody, { x: width - 20, y: height / 2 });
            Body.setPosition(pitchGuard, { x: width / 2, y: height / 2 - 4 });
        }, 200);
    });

    Render.run(render);
    Runner.run(Runner.create(), engine);
})();
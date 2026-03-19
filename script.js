// === DATA ===
const aboutData = [
  { input: 'whoami', output: 'Thejas Vijaykumar Koiloorkar' },
  { input: 'pwd', output: '/home/work/data-engineering' },
  { input: 'cat education.txt', output: 'MS Information Systems • Stevens Institute of Technology (May 2026)' },
  { input: 'ls skills/', output: 'Python, AWS, LLMs, FastAPI, SQL, React, Data Pipelines, ML' },
  { input: 'echo $passion', output: 'Building intelligent systems that solve real problems' },
];

const projects = [
  {
    title: 'AI Resume & Interview Reviewer',
    description: 'Hackathon-winning platform automating resume screening with live facial-expression analysis.',
    skills: ['Python', 'LLMs', 'Computer Vision', 'FastAPI'],
    github: 'https://github.com/ThejasVK/AgileAnalysts',
    live: 'https://github.com/ThejasVK/AgileAnalysts',
  },
  {
    title: 'QuantFolio',
    description: 'Python package for portfolio risk analysis and performance metrics with OOP principles.',
    skills: ['Python', 'Pandas', 'NumPy', 'yFinance'],
    github: 'https://github.com/ThejasVK/PyPairs',
    live: 'https://github.com/ThejasVK/PyPairs',
  },
  {
    title: 'Sales & Profitability Analysis',
    description: 'Deep-dive analysis uncovering profitability drivers across retail datasets.',
    skills: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    github: 'https://github.com/ThejasVK',
    live: 'https://github.com/ThejasVK',
  },
  {
    title: 'Crop Supply & Demand Predictor',
    description: 'ML model forecasting agricultural supply-demand with published research.',
    skills: ['Python', 'Scikit-learn', 'ML', 'Research'],
    github: 'https://github.com/ThejasVK',
    live: 'https://www.irjmets.com/uploadedfiles/paper/issue_3_march_2022/20343/final/fin_irjmets1648559406.pdf',
  },
];

const experiences = [
  {
    role: 'Wellness Peer Leader',
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    dates: 'Sept 2025 - Present',
    brief: 'Use student wellness data to shape programs and stakeholder decisions across campus.',
    tech: ['Data-driven program design', 'Survey analytics', 'Stakeholder reporting', 'Agile'],
    points: [
      'Translate wellness survey and participation metrics into stakeholder-ready reports to support evidence-based decisions for a 500+ student community.',
      'Iterate on wellness programs using agile methods and communicate outcomes across faculty, counseling services, and student affairs teams.'
    ]
  },
  {
    role: 'Teaching Assistant - Management of AI Technologies',
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    dates: 'Sept 2025 - Dec 2025',
    brief: 'Guided graduate students on SQL and data modeling through hands-on academic support.',
    tech: ['SQL', 'Python', 'Data modeling', 'Teaching support'],
    points: [
      'Supported 40+ graduate students in SQL querying, structured data concepts, and analytical frameworks through office hours and assignment feedback.'
    ]
  },
  {
    role: 'Graduate Assistant - Data & Operations',
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    dates: 'May 2025 - Sept 2025',
    brief: 'Automated operational data workflows and improved enrollment analytics for better outcomes.',
    tech: ['Python', 'SQL', 'Salesforce CRM', 'Excel', 'Agile'],
    points: [
      'Built automated Python and SQL pipelines for course scheduling workflows, reducing manual workload by 40 hours per semester and enabling real-time data access.',
      'Engineered Salesforce CRM workflows for enrollment tracking across programs, supporting configuration updates that contributed to 25% growth in prospective student engagement.',
      'Identified a 12% enrollment decline in key demographics through multi-program yield analysis; insights informed outreach strategy and drove a 20% conversion increase.'
    ]
  },
  {
    role: 'Marketing & Research Intern',
    organization: 'Grant Park Holdings, LLC',
    location: 'New York, NY',
    dates: 'June 2025 - Aug 2025',
    brief: 'Built analytics and financial automation that accelerated due diligence and investment reporting.',
    tech: ['Python', 'Excel', 'Financial modeling', 'Data visualization'],
    points: [
      'Automated pro forma financial statement preparation with Python across 10+ target companies, accelerating investment cycles and reducing manual reporting by ~30%.',
      'Built analytical reports combining P/L, acquisition cost, and market indicators into actionable due diligence insights for investment decisions.',
      'Designed visualizations and executive-ready presentations that communicated complex financial research to senior stakeholders.'
    ]
  },
  {
    role: 'Peer Leader',
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    dates: 'Jan 2025 - May 2025',
    brief: 'Mentored incoming students and coordinated orientation programs at scale.',
    tech: ['Program coordination', 'Mentorship', 'Cross-functional communication'],
    points: [
      'Mentored 20+ incoming students through structured orientation programs, strengthening collaboration and communication skills aligned to engineering environments.'
    ]
  },
  {
    role: 'Associate Network Engineer (Client: Woolworths Group, Australia)',
    organization: 'NTT DATA',
    location: 'Bangalore, India',
    dates: 'Aug 2022 - Aug 2024',
    brief: 'Delivered AI-driven network automation, security monitoring, and large-scale infrastructure migration.',
    tech: ['Python', 'Bash', 'Cisco DNAC', 'SQL', 'AI/ML automation', 'Network security'],
    points: [
      'Developed an AI-powered Python bot for real-time alert ingestion and network performance analysis, improving operational efficiency by 35%.',
      'Built Cisco DNAC API pipelines to monitor security metrics, identify vulnerabilities, and apply mitigation actions that reduced incidents by 40% annually.',
      'Led data-integrity-focused migration of 10,000+ routers and switches across data centers using validation scripts to ensure zero data loss and minimal downtime.',
      'Automated recurring network diagnostics and reporting using Python and Bash, delivering an additional 15% efficiency gain and better operational visibility.'
    ]
  },
  {
    role: 'Android Developer Intern',
    organization: 'Atal Incubation Centre',
    location: 'Bangalore, India',
    dates: 'Aug 2021 - Oct 2021',
    brief: 'Developed a cross-platform e-commerce app with measurable efficiency and UX gains.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Android/iOS'],
    points: [
      'Built a cross-platform e-commerce app with Flutter and Dart, integrating REST APIs for real-time data exchange and achieving 25% RAM reduction plus 30% transaction efficiency improvement.',
      'Integrated secure payment APIs and responsive UI flows, improving user interaction metrics by 40% while gaining end-to-end mobile product experience.'
    ]
  }
];

// === HERO NAME ===
function initHeroName() {
  const textElement = document.getElementById('typed-text');
  if (!textElement) {
    return;
  }

  const fullName = '> Thejas VK';
  textElement.textContent = '';

  let index = 0;
  const typeInterval = setInterval(() => {
    textElement.textContent += fullName[index];
    index += 1;

    if (index >= fullName.length) {
      clearInterval(typeInterval);
    }
  }, 95);
}

// === TERMINAL OUTPUT ===
function renderTerminal() {
  const terminal = document.getElementById('terminal-output');
  let delay = 0;
  
  aboutData.forEach((line, index) => {
    setTimeout(() => {
      const lineEl = document.createElement('div');
      lineEl.className = 'terminal-line';
      
      const input = document.createElement('div');
      input.className = 'terminal-input';
      input.textContent = line.input;
      lineEl.appendChild(input);
      
      const output = document.createElement('div');
      output.className = 'terminal-output';
      output.textContent = line.output;
      lineEl.appendChild(output);
      
      terminal.appendChild(lineEl);
    }, delay);
    delay += 300;
  });
}

// === PROJECTS GRID ===
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal reveal-pop';
    card.style.setProperty('--reveal-delay', `${index * 90}ms`);
    
    const skillsHTML = project.skills
      .map(skill => `<span class="skill-badge">${skill}</span>`)
      .join('');
    
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-skills">${skillsHTML}</div>
      <div class="project-links">
        <a href="${project.live}" target="_blank" rel="noopener" class="project-link">View</a>
        <a href="${project.github}" target="_blank" rel="noopener" class="project-link">Code</a>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// === EXPERIENCE TIMELINE ===
function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) {
    return;
  }

  timeline.innerHTML = '';

  experiences.forEach((job, index) => {
    const item = document.createElement('article');
    item.className = `experience-item reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`;
    item.style.setProperty('--reveal-delay', `${index * 70}ms`);

    const techHTML = job.tech
      .map((t) => `<span class="tech-badge">${t}</span>`)
      .join('');

    const pointsHTML = job.points
      .map((point) => `<li>${point}</li>`)
      .join('');

    item.innerHTML = `
      <h3 class="experience-role">${job.role}</h3>
      <div class="experience-org-row">
        <p class="experience-org">${job.organization}</p>
        <p class="experience-location">${job.location}</p>
      </div>
      <div class="experience-meta-row">
        <p class="experience-dates">${job.dates}</p>
      </div>
      <p class="experience-brief">${job.brief}</p>
      <button class="experience-toggle" type="button" aria-expanded="false">View impact</button>
      <div class="experience-expanded" hidden>
        <div class="experience-tech">${techHTML}</div>
        <ul class="experience-points">${pointsHTML}</ul>
      </div>
    `;

    const toggleButton = item.querySelector('.experience-toggle');
    const expandedContent = item.querySelector('.experience-expanded');
    if (toggleButton && expandedContent) {
      toggleButton.addEventListener('click', () => {
        const isOpen = item.classList.toggle('is-open');
        expandedContent.hidden = !isOpen;
        toggleButton.setAttribute('aria-expanded', String(isOpen));
        toggleButton.textContent = isOpen ? 'Hide details' : 'View impact';
      });
    }

    timeline.appendChild(item);
  });
}

function markRevealTargets() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, sectionIndex) => {
    section.classList.add('reveal');
    section.style.setProperty('--reveal-delay', `${sectionIndex * 60}ms`);
  });

  const headers = document.querySelectorAll('.section-title, .hero-title, .hero-description, .hero-interests, .hero-cta');
  headers.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${index * 50}ms`);
  });
}

// === SMOOTH SCROLL ===
function initSmoothScroll() {
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// === INTERSECTION OBSERVER (Fade in on scroll) ===
function initScrollAnimation() {
  const observerOptions = {
    threshold: 0.18,
    rootMargin: '0px 0px -60px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
  });
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
  initHeroName();
  renderTerminal();
  renderExperience();
  renderProjects();
  markRevealTargets();
  initSmoothScroll();
  initScrollAnimation();
});

// ==========================================================================
// MAIN JAVASCRIPT - Dynamic rendering, AI Chatbot Engine & Interactive UI
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error("Configuration file config.js not loaded.");
    return;
  }

  // Initialize all components
  initDeveloperInfo(config);
  initStats(config);
  initSkills(config);
  initServices(config);
  initProjects(config);
  initPricing(config);
  initTestimonials(config);
  initFAQs(config);
  initAIChatbot(config);
  initParticles();
  initMobileMenu();
  initCopyButtons();
  
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

// Render Developer Info & Social Links
function initDeveloperInfo(config) {
  const dev = config.developer;
  const links = config.links;

  // Texts
  document.querySelectorAll(".dev-name").forEach(el => el.textContent = dev.name);
  document.querySelectorAll(".dev-title").forEach(el => el.textContent = dev.title);
  document.querySelectorAll(".dev-tagline").forEach(el => el.textContent = dev.tagline);
  document.querySelectorAll(".dev-badge").forEach(el => el.textContent = dev.badge);
  document.querySelectorAll(".dev-bio").forEach(el => el.textContent = dev.bio);
  document.querySelectorAll(".dev-location").forEach(el => el.textContent = dev.location);

  // Avatars
  document.querySelectorAll(".dev-avatar").forEach(el => {
    el.src = dev.avatar;
    el.alt = dev.name;
  });

  // Links
  document.querySelectorAll(".link-fiverr").forEach(el => el.href = links.fiverr);
  document.querySelectorAll(".link-upwork").forEach(el => el.href = links.upwork);
  document.querySelectorAll(".link-github").forEach(el => el.href = links.github);
  document.querySelectorAll(".link-linkedin").forEach(el => el.href = links.linkedin);
  document.querySelectorAll(".link-email").forEach(el => el.href = `mailto:${links.email}`);
  document.querySelectorAll(".link-whatsapp").forEach(el => {
    const cleanNumber = links.whatsapp.replace(/[^0-9]/g, "");
    el.href = `https://wa.me/${cleanNumber}?text=Hi%20${encodeURIComponent(dev.name)},%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!`;
  });
}

// Render Key Stats
function initStats(config) {
  const container = document.getElementById("stats-container");
  if (!container) return;

  container.innerHTML = config.stats.map(stat => `
    <div class="glass-panel p-5 rounded-2xl flex items-center space-x-4">
      <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
        <i data-lucide="${stat.icon || 'check-circle'}" class="w-6 h-6"></i>
      </div>
      <div>
        <div class="text-3xl font-extrabold text-white font-heading">${stat.value}</div>
        <div class="text-xs text-slate-400 font-medium">${stat.label}</div>
      </div>
    </div>
  `).join("");
}

// Render Skills Matrix
function initSkills(config) {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = config.skills.map(group => `
    <div class="glass-panel p-6 rounded-3xl">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <i data-lucide="${group.icon || 'code'}" class="w-5 h-5"></i>
        </div>
        <h3 class="text-xl font-bold text-white font-heading">${group.category}</h3>
      </div>
      <div class="space-y-4">
        ${group.skills.map(skill => `
          <div>
            <div class="flex justify-between text-sm mb-1.5">
              <span class="text-slate-300 font-medium">${skill.name}</span>
              <span class="text-blue-400 font-mono font-semibold">${skill.level}%</span>
            </div>
            <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Render Services
function initServices(config) {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = config.services.map(srv => `
    <div class="glass-panel p-7 rounded-3xl relative group hover:border-blue-500/40">
      <div class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
        ${srv.badge}
      </div>
      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
        <i data-lucide="${srv.icon || 'zap'}" class="w-7 h-7"></i>
      </div>
      <h3 class="text-xl font-bold text-white mb-3 font-heading">${srv.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed mb-6">${srv.description}</p>
      <a href="${config.links.fiverr}" target="_blank" class="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
        Order Service on Fiverr <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
      </a>
    </div>
  `).join("");
}

// Render Projects with Filtering
function initProjects(config) {
  const container = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".project-filter-btn");
  if (!container) return;

  function render(filter = "all") {
    const filtered = filter === "all" 
      ? config.projects 
      : config.projects.filter(p => p.category === filter);

    container.innerHTML = filtered.map(p => `
      <div class="glass-panel rounded-2xl overflow-hidden group flex flex-col justify-between">
        <div class="relative overflow-hidden h-36 bg-slate-900">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <span class="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-slate-900/80 backdrop-blur border border-white/10 text-cyan-300">
            ${p.categoryLabel}
          </span>
          ${p.featured ? '<span class="absolute top-3 right-3 px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-500/90 text-slate-950">Featured</span>' : ''}
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-bold text-white mb-1.5 font-heading group-hover:text-blue-400 transition-colors line-clamp-1">${p.title}</h3>
            <p class="text-slate-400 text-xs mb-3 leading-relaxed line-clamp-2">${p.description}</p>
            <div class="flex flex-wrap gap-1 mb-4">
              ${p.tags.map(t => `<span class="tech-badge text-[11px] px-2 py-0.5 rounded-md text-slate-300 font-mono">${t}</span>`).join("")}
            </div>
          </div>
          <div class="flex items-center justify-between pt-3 border-t border-white/5 flex-wrap gap-2">
            <a href="${p.liveDemo === '#ai-demo' ? '#ai-showcase' : p.liveDemo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors">
              <i data-lucide="external-link" class="w-3.5 h-3.5 mr-1.5"></i> Live Demo
            </a>
            <div class="flex items-center gap-1.5">
              ${p.instagram ? `
                <a href="${p.instagram}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border border-pink-500/30 transition-colors">
                  <i data-lucide="instagram" class="w-3.5 h-3.5 mr-1 text-pink-400"></i> Insta (300k)
                </a>
              ` : ''}
              ${p.github ? `
                <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors">
                  <i data-lucide="github" class="w-3.5 h-3.5 mr-1"></i> Code
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join("");

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  render("all");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active", "bg-blue-600", "text-white"));
      filterButtons.forEach(b => b.classList.add("bg-slate-800/80", "text-slate-400"));
      btn.classList.add("active", "bg-blue-600", "text-white");
      btn.classList.remove("bg-slate-800/80", "text-slate-400");
      render(btn.dataset.category);
    });
  });
}

// Render Pricing Packages
function initPricing(config) {
  const container = document.getElementById("pricing-container");
  if (!container) return;

  container.innerHTML = config.pricingPackages.map(pkg => `
    <div class="glass-panel p-8 rounded-3xl relative flex flex-col justify-between ${pkg.popular ? 'border-blue-500 ring-1 ring-blue-500/50 shadow-2xl shadow-blue-500/20' : ''}">
      ${pkg.popular ? '<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold tracking-wide uppercase shadow-lg">Most Popular on Fiverr</div>' : ''}
      <div>
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-xl font-bold text-white font-heading">${pkg.name}</h3>
          <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 font-medium">${pkg.tag}</span>
        </div>
        <div class="my-6">
          <span class="text-4xl font-extrabold text-white font-heading">${pkg.price}</span>
          <span class="text-slate-400 text-sm"> / starting package</span>
        </div>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">${pkg.description}</p>
        <div class="flex items-center space-x-4 text-xs text-slate-300 mb-6 pb-4 border-b border-white/5">
          <span class="flex items-center"><i data-lucide="clock" class="w-3.5 h-3.5 mr-1 text-blue-400"></i> ${pkg.delivery}</span>
          <span class="flex items-center"><i data-lucide="refresh-cw" class="w-3.5 h-3.5 mr-1 text-purple-400"></i> ${pkg.revisions}</span>
        </div>
        <ul class="space-y-3 mb-8">
          ${pkg.features.map(f => `
            <li class="flex items-center text-sm text-slate-300">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 mr-2.5 shrink-0"></i>
              <span>${f}</span>
            </li>
          `).join("")}
        </ul>
      </div>
      <a href="${config.links.fiverr}" target="_blank" class="w-full text-center py-3.5 px-6 rounded-2xl font-bold text-sm transition-all ${pkg.popular ? 'btn-glow-primary text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}">
        ${pkg.ctaText}
      </a>
    </div>
  `).join("");
}

// Render Testimonials
function initTestimonials(config) {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = config.testimonials.map(t => `
    <div class="glass-panel p-7 rounded-3xl flex flex-col justify-between">
      <div>
        <div class="flex items-center space-x-1 text-amber-400 mb-4">
          ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join("")}
        </div>
        <p class="text-slate-300 text-sm leading-relaxed italic mb-6">"${t.review}"</p>
      </div>
      <div class="flex items-center space-x-3 pt-4 border-t border-white/5">
        <img src="${t.avatar}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover border border-white/10">
        <div>
          <h4 class="text-sm font-bold text-white">${t.name}</h4>
          <p class="text-xs text-slate-400">${t.role}</p>
          <span class="inline-flex items-center text-[10px] text-emerald-400 font-medium mt-0.5">
            <i data-lucide="shield-check" class="w-3 h-3 mr-1"></i> ${t.platform}
          </span>
        </div>
      </div>
    </div>
  `).join("");
}

// Render FAQs
function initFAQs(config) {
  const container = document.getElementById("faqs-container");
  if (!container) return;

  container.innerHTML = config.faqs.map((faq, index) => `
    <div class="glass-panel rounded-2xl overflow-hidden">
      <button class="faq-toggle w-full p-6 text-left flex justify-between items-center transition-colors focus:outline-none" data-faq="${index}">
        <span class="font-bold text-white text-base">${faq.question}</span>
        <i data-lucide="chevron-down" class="faq-icon w-5 h-5 text-slate-400 transition-transform duration-300"></i>
      </button>
      <div class="faq-content px-6 pb-6 text-slate-400 text-sm leading-relaxed hidden">
        ${faq.answer}
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".faq-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");
      const isHidden = content.classList.contains("hidden");

      document.querySelectorAll(".faq-content").forEach(c => c.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach(i => i.classList.remove("rotate-180"));

      if (isHidden) {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180");
      }
    });
  });
}

// Interactive AI Chatbot Engine
function initAIChatbot(config) {
  const chatToggle = document.getElementById("ai-chat-toggle");
  const chatWindow = document.getElementById("ai-chat-window");
  const chatClose = document.getElementById("ai-chat-close");
  const chatMessages = document.getElementById("ai-chat-messages");
  const chatForm = document.getElementById("ai-chat-form");
  const chatInput = document.getElementById("ai-chat-input");
  const quickSuggestionsContainer = document.getElementById("ai-quick-suggestions");

  // In-page Showcase Bot Elements
  const showcaseMessages = document.getElementById("showcase-chat-messages");
  const showcaseForm = document.getElementById("showcase-chat-form");
  const showcaseInput = document.getElementById("showcase-chat-input");
  const showcaseQuickContainer = document.getElementById("showcase-quick-suggestions");

  const knowledge = config.aiBotKnowledge;

  // Toggle Floating Widget
  if (chatToggle && chatWindow) {
    chatToggle.addEventListener("click", () => {
      const isHidden = chatWindow.classList.contains("hidden-chat");
      if (isHidden) {
        chatWindow.classList.remove("hidden-chat");
        chatWindow.classList.add("active-chat");
        chatInput?.focus();
      } else {
        chatWindow.classList.add("hidden-chat");
        chatWindow.classList.remove("active-chat");
      }
    });
  }

  if (chatClose && chatWindow) {
    chatClose.addEventListener("click", () => {
      chatWindow.classList.add("hidden-chat");
      chatWindow.classList.remove("active-chat");
    });
  }

  // Populate Quick Suggestions for Floating Bot
  if (quickSuggestionsContainer && knowledge.quickSuggestions) {
    quickSuggestionsContainer.innerHTML = knowledge.quickSuggestions.map(s => `
      <button class="quick-prompt-btn text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-all text-left whitespace-nowrap">
        ${s}
      </button>
    `).join("");

    quickSuggestionsContainer.querySelectorAll(".quick-prompt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        handleUserMessage(btn.textContent.trim(), chatMessages, chatInput, config);
      });
    });
  }

  // Populate Quick Suggestions for In-Page Showcase Bot
  if (showcaseQuickContainer && knowledge.quickSuggestions) {
    showcaseQuickContainer.innerHTML = knowledge.quickSuggestions.map(s => `
      <button class="showcase-prompt-btn text-xs px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-blue-600/30 hover:text-blue-300 border border-white/5 transition-all text-left">
        ${s}
      </button>
    `).join("");

    showcaseQuickContainer.querySelectorAll(".showcase-prompt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        handleUserMessage(btn.textContent.trim(), showcaseMessages, showcaseInput, config);
      });
    });
  }

  // Handle Form Submission - Floating Bot
  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;
      handleUserMessage(text, chatMessages, chatInput, config);
    });
  }

  // Handle Form Submission - In-Page Showcase Bot
  if (showcaseForm && showcaseInput) {
    showcaseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = showcaseInput.value.trim();
      if (!text) return;
      handleUserMessage(text, showcaseMessages, showcaseInput, config);
    });
  }
}

// Process AI Bot User Message & Generate Smart Response
function handleUserMessage(query, container, inputEl, config) {
  if (!container) return;

  // Append user message
  appendChatMessage(container, query, "user");
  if (inputEl) inputEl.value = "";

  // Show typing indicator
  const typingId = `typing-${Date.now()}`;
  const typingHtml = `
    <div id="${typingId}" class="flex items-center space-x-2 text-slate-400 text-xs py-2 px-3 bg-slate-800/60 rounded-2xl w-fit">
      <span class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
      <span class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span class="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      <span class="ml-1 font-mono">DevBot is thinking...</span>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", typingHtml);
  container.scrollTop = container.scrollHeight;

  // Simulate intelligent response delay
  setTimeout(() => {
    const typingIndicator = document.getElementById(typingId);
    if (typingIndicator) typingIndicator.remove();

    const response = getAIResponse(query, config);
    appendChatMessage(container, response, "bot", config);
  }, 700);
}

// Bot Knowledge Engine (Matches keywords & queries)
function getAIResponse(query, config) {
  const q = query.toLowerCase();
  const k = config.aiBotKnowledge.responses;
  const dev = config.developer;
  const links = config.links;

  if (q.includes("service") || q.includes("offer") || q.includes("what can you do") || q.includes("kya karte ho")) {
    return k.services;
  }
  if (q.includes("bot") || q.includes("ai") || q.includes("chatgpt") || q.includes("gemini") || q.includes("openai") || q.includes("robot")) {
    return `${k.ai_bot} Would you like to add one to your website?`;
  }
  if (q.includes("price") || q.includes("cost") || q.includes("package") || q.includes("rate") || q.includes("kitna")) {
    return `${k.pricing} Check out the Pricing section below to order directly on Fiverr!`;
  }
  if (q.includes("delivery") || q.includes("fast") || q.includes("time") || q.includes("how long") || q.includes("din")) {
    return k.delivery;
  }
  if (q.includes("stack") || q.includes("tech") || q.includes("react") || q.includes("html") || q.includes("language")) {
    return k.tech_stack;
  }
  if (q.includes("hire") || q.includes("contact") || q.includes("order") || q.includes("fiverr") || q.includes("whatsapp")) {
    return `${k.hire} Click here to <a href="${links.fiverr}" target="_blank" class="text-blue-400 underline font-semibold">Open Fiverr Profile</a>.`;
  }
  if (q.includes("experience") || q.includes("exp") || q.includes("year")) {
    return `${dev.name} has ${dev.experienceYears} of professional experience building high-performing web applications and smart AI integrations.`;
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("salam") || q.includes("namaste")) {
    return `Hello! 👋 I am ${config.aiBotKnowledge.botName}, AI assistant for ${dev.name}. How can I assist you with web development or AI bot integration today?`;
  }

  return `Thanks for asking! As an AI integration expert and web developer, ${dev.name} can build custom web apps, integrate AI assistants, and deliver ready-to-launch projects on Fiverr. You can send a direct inquiry or select any package below!`;
}

// Append Chat Message Bubble
function appendChatMessage(container, text, sender = "bot", config = null) {
  const isUser = sender === "user";
  const bubble = document.createElement("div");
  bubble.className = `flex ${isUser ? 'justify-end' : 'justify-start'} my-2`;

  bubble.innerHTML = `
    <div class="max-w-[85%] rounded-2xl p-3.5 text-sm ${isUser ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none' : 'bg-slate-800/90 text-slate-200 border border-white/5 rounded-bl-none shadow-md'}">
      ${!isUser ? '<div class="flex items-center space-x-1.5 text-xs text-blue-400 font-semibold mb-1"><i data-lucide="bot" class="w-3.5 h-3.5"></i><span>DevBot AI</span></div>' : ''}
      <div class="leading-relaxed">${text}</div>
    </div>
  `;

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Background Particle Canvas
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 45; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// Mobile Menu Navigation
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Copy URL / Share Feature
function initCopyButtons() {
  const shareBtn = document.getElementById("share-portfolio-btn");
  if (!shareBtn) return;

  shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const originalText = shareBtn.innerHTML;
      shareBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4 mr-1.5 text-emerald-400"></i> Link Copied!';
      if (typeof lucide !== "undefined") lucide.createIcons();
      setTimeout(() => {
        shareBtn.innerHTML = originalText;
        if (typeof lucide !== "undefined") lucide.createIcons();
      }, 2500);
    });
  });
}
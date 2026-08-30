// ==========================================================================
// PORTFOLIO CONFIGURATION - Easily customize your personal details here!
// ==========================================================================

const PORTFOLIO_CONFIG = {
  // Personal & Professional Information
  developer: {
    name: "Alex Dev", // Change to your name
    title: "Full Stack Web Developer & AI Integration Specialist",
    badge: "🚀 Available for Fiverr & Freelance Projects",
    tagline: "I build high-converting websites and integrate smart AI bots that drive real business results.",
    experienceYears: "1+",
    completedProjects: "25+",
    satisfactionRate: "100%",
    aiBotsBuilt: "15+",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Passionate Web Developer with 1+ year of intensive hands-on experience building lightning-fast modern websites, responsive frontend UIs, backend API architectures, and cutting-edge AI chatbot integrations. I help clients on Fiverr and global businesses automate customer engagement, showcase their brands, and increase conversion rates.",
    location: "Global / Remote Freelancer"
  },

  // Social & Platform Links
  links: {
    fiverr: "https://www.fiverr.com", // Replace with your Fiverr profile/gig link
    upwork: "https://www.upwork.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "developer.pro@example.com", // Replace with your email
    whatsapp: "+1234567890", // Replace with your WhatsApp number with country code (e.g. +91...)
    resume: "#"
  },

  // Key Highlights / Metrics
  stats: [
    { label: "Years Hands-on Experience", value: "1+", icon: "award" },
    { label: "Projects Completed", value: "25+", icon: "briefcase" },
    { label: "AI Chatbots Deployed", value: "15+", icon: "bot" },
    { label: "Fiverr 5-Star Feedback", value: "100%", icon: "star" }
  ],

  // Skills Breakdown
  skills: [
    {
      category: "Frontend Development",
      icon: "layout",
      skills: [
        { name: "HTML5 & Semantic Markup", level: 95 },
        { name: "CSS3, Flexbox & CSS Grid", level: 92 },
        { name: "Modern JavaScript (ES6+)", level: 90 },
        { name: "React.js / Next.js Components", level: 85 },
        { name: "Tailwind CSS & Responsive UI", level: 95 }
      ]
    },
    {
      category: "Backend & APIs",
      icon: "server",
      skills: [
        { name: "Node.js & Express API", level: 85 },
        { name: "REST APIs & Webhooks", level: 90 },
        { name: "Database (MongoDB, SQL, Firebase)", level: 80 },
        { name: "Authentication & Secure Endpoints", level: 85 }
      ]
    },
    {
      category: "AI & Bot Integration (Specialty)",
      icon: "sparkles",
      skills: [
        { name: "OpenAI & Gemini API Integration", level: 95 },
        { name: "Custom Website AI Chatbots", level: 92 },
        { name: "Lead Capture & FAQ AI Agents", level: 90 },
        { name: "Workflow Automations (Zapier / Webhooks)", level: 88 }
      ]
    }
  ],

  // Services offered to clients on Fiverr
  services: [
    {
      id: "ai-chatbots",
      badge: "🔥 High Demand on Fiverr",
      icon: "bot",
      title: "AI Chatbot & Virtual Assistant Integration",
      description: "Add an intelligent AI chatbot to your website that speaks with your visitors 24/7, answers business FAQs, qualifies leads, and connects with OpenAI / Gemini APIs."
    },
    {
      id: "custom-web",
      badge: "Core Expertise",
      icon: "code-2",
      title: "Full-Stack Web Development",
      description: "Custom websites built with clean, modern code, blazing fast load times, dynamic interactions, database integrations, and seamless user experience across all devices."
    },
    {
      id: "landing-pages",
      badge: "High Conversion",
      icon: "zap",
      title: "High-Converting Landing Pages",
      description: "Modern, sleek landing pages with engaging animations, clear call-to-actions, and glassmorphic designs engineered to turn web visitors into paying customers."
    },
    {
      id: "ecommerce",
      badge: "Business Growth",
      icon: "shopping-bag",
      title: "E-Commerce & Online Stores",
      description: "Responsive online shopping experiences featuring product showcases, filters, shopping cart systems, secure checkout integrations, and AI product finders."
    },
    {
      id: "api-integration",
      badge: "Automation",
      icon: "cpu",
      title: "API & Webhook Integrations",
      description: "Connect payment gateways (Stripe, PayPal), CRM systems, email autoresponders, and third-party tools to automate your business operations."
    },
    {
      id: "speed-seo",
      badge: "Optimization",
      icon: "gauge",
      title: "Website Speed, Responsive Fixes & SEO",
      description: "Fix mobile responsiveness issues, optimize site performance to score 90+ on Google PageSpeed, and implement essential on-page SEO meta tags."
    }
  ],

  // Featured Projects
  projects: [
    {
      id: 1,
      title: "AI Customer Support & Lead Generation Bot",
      category: "ai",
      categoryLabel: "AI & Chatbots",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      description: "An intelligent, customizable website chatbot powered by LLM APIs that handles customer inquiries, books appointments, and captures lead emails 24/7.",
      tags: ["OpenAI API", "Gemini API", "JavaScript", "Tailwind CSS", "Node.js"],
      liveDemo: "#ai-demo",
      github: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "SaaS AI Copywriting & Marketing Dashboard",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "A complete SaaS web application allowing users to generate marketing copies, blog posts, and social media captions with real-time editing and export.",
      tags: ["React", "Tailwind CSS", "Express.js", "AI Integration", "Stripe"],
      liveDemo: "https://github.com",
      github: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Modern E-Commerce Store with AI Recommendation",
      category: "ecommerce",
      categoryLabel: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Sleek online storefront featuring instant search, dynamic cart, checkout integration, and an AI assistant that suggests matching products.",
      tags: ["HTML5", "CSS3", "JavaScript", "REST API", "Responsive"],
      liveDemo: "https://github.com",
      github: "https://github.com",
      featured: true
    },
    {
      id: 4,
      title: "High-Converting Tech Startup Landing Page",
      category: "landing",
      categoryLabel: "Landing Page",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description: "A high-conversion dark-mode landing page with smooth scroll animations, glassmorphism UI, interactive pricing cards, and FAQ accordion.",
      tags: ["Tailwind CSS", "Modern UI/UX", "JavaScript", "SEO Optimized"],
      liveDemo: "https://github.com",
      github: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Automated Real Estate Lead Assistant Bot",
      category: "ai",
      categoryLabel: "AI & Chatbots",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      description: "Interactive real-estate bot that qualifies buyer budgets, filters available properties, and routes hot leads directly to WhatsApp / CRM.",
      tags: ["AI Assistant", "Webhooks", "WhatsApp API", "JavaScript"],
      liveDemo: "https://github.com",
      github: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Interactive Analytics & Finance Dashboard",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description: "Real-time finance and metrics tracking web dashboard with interactive charts, dark/light theme switcher, and CSV/PDF report generator.",
      tags: ["React", "Chart.js", "Tailwind CSS", "Node.js"],
      liveDemo: "https://github.com",
      github: "https://github.com",
      featured: false
    }
  ],

  // Fiverr Gig Pricing Packages
  pricingPackages: [
    {
      name: "Starter / Basic",
      tag: "Single Page / Landing Page",
      price: "$45",
      delivery: "2 Days Delivery",
      revisions: "Unlimited Revisions",
      description: "Perfect for personal portfolios, startup landing pages, or high-converting product pages.",
      features: [
        "1-Page Responsive Modern Website",
        "Clean HTML5 / CSS3 / Tailwind / JS",
        "Mobile & Tablet Optimized",
        "Fast Page Speed & Essential SEO",
        "Contact Form & Social Media Integration",
        "Free Deployment to Vercel/Netlify"
      ],
      ctaText: "Order Basic on Fiverr",
      popular: false
    },
    {
      name: "Standard / Growth",
      tag: "Full Website + AI Bot",
      price: "$120",
      delivery: "4 Days Delivery",
      revisions: "Unlimited Revisions",
      description: "Complete multi-page website equipped with an interactive AI Chatbot for 24/7 client support.",
      features: [
        "Up to 5 Responsive Web Pages",
        "✨ Smart AI Chatbot Integration",
        "Modern UI/UX with Glassmorphic Design",
        "Lead Capture & Email Notifications",
        "Dynamic Interactivity & Smooth Animations",
        "Source Code + 14 Days Free Support"
      ],
      ctaText: "Order Standard on Fiverr",
      popular: true
    },
    {
      name: "Premium / Pro AI",
      tag: "Full-Stack Web App + Custom AI",
      price: "$250",
      delivery: "7 Days Delivery",
      revisions: "Unlimited Revisions",
      description: "Custom full-stack web application with advanced AI integrations, database & API workflows.",
      features: [
        "Full-Stack Web Application (React/Node)",
        "🤖 Custom Trained AI Chatbot (Gemini / OpenAI)",
        "Database & Authentication Setup",
        "Payment Gateway / E-Commerce Integration",
        "API Automation & Webhooks Workflow",
        "30 Days Dedicated Support & Maintenance"
      ],
      ctaText: "Order Premium on Fiverr",
      popular: false
    }
  ],

  // Testimonials / Fiverr Reviews
  testimonials: [
    {
      name: "David Miller",
      role: "E-commerce Business Owner (USA)",
      rating: 5,
      review: "Incredible developer! He built a modern website and integrated an AI chatbot that immediately started handling customer questions. Fast delivery and super communicative on Fiverr.",
      platform: "Fiverr Verified Buyer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "Sophia Martinez",
      role: "Startup Founder (UK)",
      rating: 5,
      review: "The AI bot integration blew our clients away! The website is super clean, responsive on all phones, and was delivered 1 day ahead of schedule. Will definitely hire again.",
      platform: "Fiverr Verified Buyer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      name: "Rahim Khan",
      role: "Agency Director (UAE)",
      rating: 5,
      review: "Top notch coding skills! Even with 1 year of experience, his knowledge of modern React, Tailwind, and AI API integrations is better than many senior developers I worked with.",
      platform: "Fiverr Verified Buyer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ],

  // FAQs for Fiverr clients
  faqs: [
    {
      question: "Can you integrate an AI chatbot with my existing website?",
      answer: "Yes! I can integrate a custom AI chatbot (using OpenAI, Google Gemini, or custom scripts) into any website, whether it is built on HTML/CSS, React, WordPress, Shopify, or Webflow."
    },
    {
      question: "What do you need to start my web development project?",
      answer: "Simply share your project idea, references or design inspirations (Figma, example URLs), and any specific features you need. I will guide you through the rest and deliver on time."
    },
    {
      question: "Will my website be mobile-friendly and fast?",
      answer: "Absolutely! 100% of the websites I build are fully responsive on smartphones, tablets, laptops, and desktops, with clean code optimized for fast loading and SEO."
    },
    {
      question: "How do we order on Fiverr?",
      answer: "You can click any of the 'Order on Fiverr' buttons on this portfolio to visit my Fiverr gig directly, or send me a direct message to discuss custom requirements."
    }
  ],

  // Pre-configured intelligent knowledge base for the interactive AI Bot
  aiBotKnowledge: {
    botName: "DevBot AI",
    developerName: "Alex Dev",
    quickSuggestions: [
      "What services do you offer?",
      "Can you integrate an AI bot into my website?",
      "What are your Fiverr prices?",
      "How fast can you deliver a project?",
      "What tech stack do you use?",
      "How can I hire you?"
    ],
    responses: {
      services: "I specialize in Full-Stack Web Development, Custom AI Chatbot / Assistant Integrations (OpenAI/Gemini), High-Converting Landing Pages, E-commerce Stores, and API Automations.",
      ai_bot: "Yes! I can integrate intelligent AI chatbots into any website. The bot can answer customer FAQs, capture leads, recommend products, or connect with your custom business knowledge base using OpenAI or Google Gemini APIs.",
      pricing: "My Fiverr packages start at $45 for single-page websites, $120 for full multi-page sites with AI bot integration, and $250 for custom full-stack web applications with advanced AI workflows.",
      delivery: "Standard landing pages take 2-3 days, while complete websites with AI bot integrations take 4-7 days depending on your requirements.",
      tech_stack: "My core tech stack includes HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, Node.js, Express, REST APIs, and OpenAI / Google Gemini AI SDKs.",
      hire: "You can hire me directly on Fiverr, Upwork, or send a message via WhatsApp/Email from the Contact section below!"
    }
  }
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
// ============================================================
// CUSTOM DATA — Amir Raza Rangrez
// Scraped from: https://amirrangrez.netlify.app/
// ============================================================

const CUSTOM_DATA = {

    // ── PROFILE ──────────────────────────────────────────────
    profile: {
        name: "Amir Raza Rangrez",
        title: "Full-Stack Developer",
        location: "Solapur, Maharashtra, India",
        email: "amirrazarangrez@gmail.com",
        phone: "+91 9322686550",
        portfolio: "https://amirrangrez.netlify.app",
        github_personal: "https://github.com/Aamirrangrez",
        github_org: "https://github.com/dominaltech/",
        linkedin: "https://linkedin.com/in/amir-rangrez",
        about: "Passionate Full-Stack Developer crafting high-performance web systems and interactive client experiences. Specialized in React, Node.js, and Supabase.",
        tagline: "Full-Stack Developer — building lightning-fast digital systems, AI-powered apps, and real-world production software.",
        stats: [
            "Deployed a Government project (live & in use)",
            "All projects are live, visit any time",
            "Real-world deployments used by actual clients daily"
        ],
        achievements: [
            "DSA, C, Python & Software Development Certificates",
            "Front-End Developer Intern at AIZTS Info-tech Pvt. Ltd."
        ]
    },

    // ── EDUCATION ────────────────────────────────────────────
    education: [
        {
            degree: "B.Tech — Computer Science & Engineering",
            institution: "VVPIET Institute of Engineering & Technology, Solapur",
            year: "2022 – 2026",
            status: "Pursuing 4th Year",
            focus: "Software Engineering, DSA, Full-Stack Development"
        },
        {
            degree: "HSC — Science",
            institution: "SSA Jr. College of Science, Solapur",
            year: "2022",
            status: "Completed"
        },
        {
            degree: "Secondary School (SSC)",
            institution: "Solapur Social Association High School (SSA), Solapur",
            year: "2020",
            status: "Completed"
        }
    ],

    // ── EXPERIENCE ───────────────────────────────────────────
    experience: [
        {
            role: "Front-End Developer Intern",
            company: "AIZTS Info-tech Pvt. Ltd.",
            type: "Internship",
            description: "Worked as a Front-End Developer intern, building UI components and interactive web features."
        }
    ],

    // ── SKILLS ───────────────────────────────────────────────
    skills: {
        frontend: ["React 19", "JavaScript", "jQuery", "Electron", "HTML", "CSS"],
        backend: ["Python", "Node.js", "Express.js", "Payment Integration (PhonePe)"],
        databases: ["Supabase", "Neon DB", "PostgreSQL", "MongoDB", "IndexedDB"],
        ai: ["OpenAI API", "AI Integration", "RAG Systems", "Ollama (Local AI)"],
        tools: ["DSA", "GitHub", "Git"],
        deployment: ["Netlify", "Vercel", "Railway", "Render"],
        other: ["PWA (Progressive Web Apps)", "Offline-First Apps", "PDF Generation", "Push Notifications"]
    },

    // ── PROJECTS ─────────────────────────────────────────────
    projects: [
        {
            name: "Libas Collection Store",
            description: "Full-featured E-Commerce PWA for a clothing store in Solapur with PhonePe payment integration.",
            tags: ["ecommerce", "pwa", "payment", "supabase", "phonePe", "shop", "store", "libas"],
            features: [
                "PhonePe Payment Integration",
                "Protected Wholesale Portal",
                "Real-time Order Dispatch Tracking",
                "Installable Mobile-Friendly PWA"
            ],
            impact: "Live commercial PWA processing real customer orders and PhonePe transaction volume daily.",
            link: "https://libassolapur.in",
            category: "E-Commerce Storefront"
        },
        {
            name: "RazaCodeBuddy",
            description: "AI-powered coding mentor platform with in-browser live code compiler and execution visualizer.",
            tags: ["ai", "coding", "mentor", "compiler", "editor", "razacodebuddy", "code"],
            features: [
                "AI Smart Teacher Mentorship",
                "In-Browser Live Code Compiler",
                "Execution Stack Code Visualizer",
                "Dark-Mode Responsive Editor"
            ],
            impact: "Guides aspiring programmers using AI-powered contextual feedback and visual code compilation tools.",
            link: "https://razacodebuddy.netlify.app",
            category: "AI Coding Mentor"
        },
        {
            name: "Society Maintenance System",
            description: "Web portal for housing societies to manage resident registration, maintenance billing, and admin controls.",
            tags: ["society", "maintenance", "admin", "pwa", "billing", "housing", "management"],
            features: [
                "Granular Admin Permission Tiers",
                "Resident Registration & Auth",
                "Digital Maintenance Receipts",
                "Offline Logs Caching Support"
            ],
            impact: "Streamlined secure resident onboarding, centralized maintenance logs, and financial administration for local housing societies.",
            link: "#",
            category: "Admin CRM Portal"
        },
        {
            name: "SmartExpense AI Assistant",
            description: "Offline AI-powered expense tracking and accounting app using Ollama local AI for insights.",
            tags: ["expense", "ai", "budget", "accounting", "ollama", "voice", "smart", "finance"],
            features: [
                "Local AI Insights (Ollama Integration)",
                "Sales & Expense Margin Tracking",
                "Voice Commands Parsing Engine",
                "Fully Offline Secured Database"
            ],
            impact: "Leveraged by users for zero-downtime, secure offline accounting and audits.",
            link: "https://raza-sm-shop-advisor.netlify.app/",
            category: "AI Finance Tool"
        },
        {
            name: "School Web Platform",
            description: "Full institutional website for Hindustan Convent School, Solapur with admissions and CMS.",
            tags: ["school", "education", "cms", "admissions", "government", "hcs", "hindustan"],
            features: [
                "Online Admissions Portal Form",
                "Announcements & Events CMS",
                "Distinguished Alumni Showcase",
                "User Settings for Push Alerts"
            ],
            impact: "Active institutional portal handling admissions and data logging for Hindustan Convent School. Government-level deployment.",
            link: "http://hccsolapur.in",
            category: "Government / Institutional"
        },
        {
            name: "Billing & Analytics System",
            description: "Automated billing and analytics tool for retail businesses with PDF invoice generation.",
            tags: ["billing", "invoice", "analytics", "retail", "sales", "pdf", "ledger", "finance"],
            features: [
                "Automated PDF Invoicing Engine",
                "Sales Margin Analytics Tables",
                "Offline-Capable Local Ledgers",
                "Client Transactions Logger"
            ],
            impact: "Utilized by active retail businesses daily for offline accounting and billing sheets.",
            link: "https://billingbyraza.netlify.app/",
            category: "Business Analytics"
        },
        {
            name: "Zaid Mobiles E-Commerce",
            description: "Mobile phone store e-commerce PWA for Solapur's prominent smartphone dealer.",
            tags: ["mobile", "phones", "ecommerce", "pwa", "whatsapp", "zaid", "store"],
            features: [
                "New & Second-Hand Phone Catalogs",
                "WhatsApp Chat Order Generation",
                "Instant Customer Purchase Inquiry",
                "Installable Offline-Ready PWA"
            ],
            impact: "Actively supports daily retail inventory tracking for Solapur's prominent smartphone dealer.",
            link: "https://zaidmobiles.netlify.app",
            category: "E-Commerce"
        },
        {
            name: "Railway Exam Prep System",
            description: "Government exam preparation portal with PDF archives and Google Drive sync for railway aspirants.",
            tags: ["railway", "exam", "government", "pdf", "study", "aspirants", "education"],
            features: [
                "Question Paper PDF Archives",
                "Google Drive Cloud Storage Sync",
                "High Contrast Readable Interface",
                "Fast Low-Bandwidth Asset Load"
            ],
            impact: "Actively used by state aspirants to instantly download cloud study files.",
            link: "https://railwayadmin.netlify.app/",
            category: "Government Education Portal"
        },
        {
            name: "Group Expense Splitter",
            description: "Collaborative bill-splitting app with real-time sync and natural language voice input.",
            tags: ["expense", "splitter", "group", "bill", "voice", "realtime", "split"],
            features: [
                "Natural Language Voice Input",
                "Flexible Custom Calculations Split",
                "Multi-Client Real-Time Sync",
                "Activity Log & Ledger Security"
            ],
            impact: "Deployed to help multiple user clusters parse and calculate shared bills on the fly.",
            link: "https://smartexpencesplitter.netlify.app",
            category: "Finance Utility"
        }
    ],

    // ── CONTACT ──────────────────────────────────────────────
    contact: {
        email: "amirrazarangrez@gmail.com",
        phone: "+91 9322686550",
        whatsapp_number: "919322686550",  // for wa.me links (country code + number, no +)
        portfolio: "https://amirrangrez.netlify.app",
        github: "https://github.com/Aamirrangrez",
        linkedin: "https://linkedin.com/in/amir-rangrez",
        location: "Solapur, Maharashtra, India"
    }
};

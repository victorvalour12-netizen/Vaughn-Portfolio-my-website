const COURSES = [
  {
    courseName: "AI + Full Stack Web Development",
    slug: "full-stack-web-development",
    courseImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    courseDescription: "Build and deploy full web apps with MERN. Learn to use AI to code faster, debug, and generate components.",
    courseContent: `
      <p>Become a job-ready Full Stack Developer. Build 4 real projects and use AI tools to ship 3x faster.</p>
      <h3>What You'll Learn</h3>
      <ul>
        <li><b>Frontend:</b> HTML5, CSS3, JavaScript ES6+, React, TailwindCSS</li>
        <li><b>Backend:</b> Node.js, Express.js, REST APIs, Authentication, JWT</li>
        <li><b>Database:</b> MongoDB, Mongoose, SQL Basics</li>
        <li><b>DevOps:</b> Git, GitHub, Docker, Deployment to Vercel/Render</li>
        <li><b>AI Usage:</b> ChatGPT, GitHub Copilot, Cursor AI for code generation, debugging, writing APIs, and creating UI components</li>
        <li><b>Extras:</b> Payment Integration, File Uploads, Email</li>
      </ul>
      <h3>Tools & Frameworks</h3>
      <p>VS Code, Git, Postman, MongoDB Compass, ChatGPT, Copilot. Final Project: E-commerce + SaaS App built with AI assistance</p>
      <p> <b>Project:</b> 4 Full Stack Apps in Portfolio. <b>AI Edge:</b> Learn prompt engineering for developers</p>
    `,
    category: "Coding",
    level: "Beginner to Advanced",
    duration: "24 Weeks",
    price: "564,000",
    date: "2026-08-20",
    DATE: [{date: "2026-08-20"}],
    TOOL: [{name: "VS Code"}, {name: "React"}, {name: "Node.js"}, {name: "MongoDB"}, {name: "ChatGPT"}, {name: "GitHub Copilot"}],
    aiFocus: "Use AI to generate 70% of boilerplate code, explain errors instantly, and build features in minutes instead of hours."
  },

  {
    courseName: "AI + Frontend Development",
    slug: "frontend-development",
    courseImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    courseDescription: "Build beautiful, responsive websites with HTML, CSS, React. Use AI to generate UI components and fix bugs instantly.",
    courseContent: `
      <p>Become a job-ready Frontend Developer. Build 5 real projects and ship them with AI assistance.</p>
      <h3>What You'll Learn</h3>
      <ul>
        <li><b>Core:</b> HTML5, CSS3, Flexbox, Grid, Responsive Design</li>
        <li><b>JavaScript:</b> ES6+, DOM, Fetch API, Async/Await</li>
        <li><b>Framework:</b> React, React Router, State Management, TailwindCSS</li>
        <li><b>Tools:</b> Git, GitHub, Figma to Code, Vercel Deployment</li>
        <li><b>AI Usage:</b> ChatGPT, GitHub Copilot, v0.dev, Cursor AI for generating components, CSS, and debugging code</li>
        <li><b>Extras:</b> Animations, Accessibility, Performance Optimization</li>
      </ul>
      <h3>Tools & Frameworks</h3>
      <p>VS Code, React, TailwindCSS, Git, ChatGPT, Copilot, Figma. Final Project: Portfolio + E-commerce Frontend</p>
      <p><b>Project:</b> 5 Deployed Frontend Projects. <b>AI Edge:</b> Turn Figma designs to React code in minutes</p>
    `,
    category: "Coding",
    level: "Beginner to Advanced",
    duration: "16 Weeks",
    price: "264,000",
    date: "2026-08-25",
    DATE: [{date: "2026-08-25"}],
    TOOL: [{name: "HTML5"}, {name: "CSS3"}, {name: "JavaScript"}, {name: "React"}, {name: "TailwindCSS"}, {name: "GitHub Copilot"}, {name: "ChatGPT"}],
    aiFocus: "Use AI to convert designs to code, generate React components, and debug 10x faster."
  },

  {
    courseName: "AI + Backend Development",
    slug: "backend-development",
    courseImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    courseDescription: "Build APIs, Databases, and Server logic with Node.js. Use AI to write routes, handle auth, and test APIs.",
    courseContent: `
      <p>Become a Backend Engineer. Build secure APIs and scale them with AI tools.</p>
      <h3>What You'll Learn</h3>
      <ul>
        <li><b>Runtime:</b> Node.js, Express.js, REST APIs, GraphQL Basics</li>
        <li><b>Database:</b> MongoDB, Mongoose, PostgreSQL, SQL Basics, Prisma</li>
        <li><b>Auth & Security:</b> JWT, OAuth, Clerk, Rate Limiting, Validation</li>
        <li><b>DevOps:</b> Git, Docker, Postman, Deployment to Render/Railway</li>
        <li><b>AI Usage:</b> ChatGPT, Cursor AI for writing API routes, generating DB schemas, writing tests, and explaining errors</li>
        <li><b>Extras:</b> File Uploads, Payment Integration, Email, Caching</li>
      </ul>
      <h3>Tools & Frameworks</h3>
      <p>Node.js, Express, MongoDB, PostgreSQL, Postman, Docker, ChatGPT. Final Project: SaaS API + E-commerce Backend</p>
      <p> <b>Project:</b> 3 Full Backend APIs. <b>AI Edge:</b> Generate entire CRUD APIs from a prompt</p>
    `,
    category: "Coding",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    price: "264,000",
    date: "2026-09-01",
    DATE: [{date: "2026-09-01"}],
    TOOL: [{name: "Node.js"}, {name: "Express.js"}, {name: "MongoDB"}, {name: "PostgreSQL"}, {name: "Docker"}, {name: "ChatGPT"}, {name: "Postman"}],
    aiFocus: "Use AI to scaffold APIs, write database queries, and generate test cases in seconds."
  },

  {
    courseName: "Content Creation + AI Video",
    slug: "content-creation-ai",
    courseImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop", 
    courseDescription: "Script, Shoot, Edit videos. Use AI to write scripts, edit videos, and grow your brand 10x faster.",
    courseContent: `
      <p>Master content creation for TikTok, Reels, and YouTube. Build a system that runs with AI.</p>
      <h3>What You'll Learn</h3>
      <ul>
        <li><b>Video:</b> Scripting, Shooting, Lighting, CapCut, Premiere Pro</li>
        <li><b>Growth:</b> Hooks, Thumbnails, Short-form strategy, Monetization</li>
        <li><b>Branding:</b> Personal Brand, Storytelling, Content Calendar</li>
        <li><b>AI Usage:</b> ChatGPT for 30 scripts at once, ElevenLabs for voiceovers, Pictory/Runway for auto-editing, AI for captions and repurposing 1 video into 10 shorts</li>
      </ul>
      <h3>Tools & Frameworks</h3>
      <p>CapCut, Premiere Pro, Canva, ChatGPT, ElevenLabs, Pictory. Final Project: 30-day content plan + 10 published videos</p>
      <p><b>Project:</b> Grow a channel to 1k followers. <b>AI Edge:</b> Cut editing time from 4hrs to 30mins</p>
    `,
    category: "Creative",
    level: "Beginner to Pro",
    duration: "8 Weeks",
    price: "124,000",
    date: "2026-09-01",
    DATE: [{date: "2026-09-01"}],
    TOOL: [{name: "CapCut"}, {name: "Premiere Pro"}, {name: "ChatGPT"}, {name: "ElevenLabs"}, {name: "Canva"}],
    aiFocus: "Use AI to write scripts, auto-generate captions, remove silence, and turn long videos into viral shorts automatically."
  },

  {
    courseName: "Graphics Design + AI Tools",
    slug: "graphics-design-ai",
    courseImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    courseDescription: "Master Adobe, Figma and use AI to design logos, brands, and UI 5x faster.",
    courseContent: `
      <p>Become a pro designer. From concept to client delivery using Adobe, Figma and AI.</p>
      <h3>What You'll Learn</h3>
      <ul>
        <li><b>Tools:</b> Adobe Photoshop, Illustrator, Figma</li>
        <li><b>Design:</b> Branding, Logo Design, Social Media, UI/UX, Flyers</li>
        <li><b>Portfolio:</b> 6 client-ready projects</li>
        <li><b>AI Usage:</b> Midjourney, Adobe Firefly, Figma AI for concepts, background removal, mockups, and turning text prompts into designs</li>
      </ul>
      <h3>Tools & Frameworks</h3>
      <p>Photoshop, Illustrator, Figma, Midjourney, Firefly. Final Project: Complete brand identity for a real business</p>
      <p><b>Project:</b> Portfolio + Client Project. <b>AI Edge:</b> Generate 20 logo ideas in 5 minutes</p>
    `,
    category: "Creative",
    level: "Beginner to Advanced",
    duration: "10 Weeks",
    price: "154,000",
    date: "2026-09-10",
    DATE: [{date: "2026-09-10"}],
    TOOL: [{name: "Photoshop"}, {name: "Illustrator"}, {name: "Figma"}, {name: "Midjourney"}, {name: "Firefly"}],
    aiFocus: "Use AI to generate design concepts, remove backgrounds in 1 click, and create mockups instantly. No more starting from blank."
  },

  {
    courseName: "Excel + Data Analysis with AI",
    slug: "excel-data-ai",
    courseImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    courseDescription: "Master Excel, Pivot Tables, and use AI to write formulas and analyze data in seconds.",
    courseContent: `
      <p>Go from Excel basics to job-ready Data Analyst. Let AI do the hard formulas for you.</p>
      <h3>What You'll Learn</h3>
      <ul>
        <li><b>Excel:</b> Formulas, VLOOKUP, XLOOKUP, Pivot Tables, Dashboards</li>
        <li><b>Data:</b> Cleaning, Charts, Google Sheets, Data Visualization</li>
        <li><b>Business:</b> Reporting, Budgeting, KPI Tracking</li>
        <li><b>AI Usage:</b> ChatGPT to write complex formulas, analyze datasets, build dashboards from plain English, and automate reports</li>
      </ul>
      <h3>Tools & Frameworks</h3>
      <p>MS Excel, Google Sheets, ChatGPT, Power BI Basics. Final Project: Interactive business dashboard</p>
      <p><b>Project:</b> Dashboard for Sales/Finance. <b>AI Edge:</b> "Write me a formula to..." instead of Googling</p>
    `,
    category: "Business",
    level: "Beginner to Advanced",
    duration: "6 Weeks",
    price: "104,000",
    date: "2026-09-15",
    DATE: [{date: "2026-09-15"}],
    TOOL: [{name: "MS Excel"}, {name: "Google Sheets"}, {name: "ChatGPT"}, {name: "Power BI"}],
    aiFocus: "Stop memorizing formulas. Use AI to build pivot tables and dashboards by just describing what you want."
  }
];

module.exports = COURSES;
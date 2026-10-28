// All the content of the website lives here. Edit this file and every page updates.

export const site = {
  name: "John Dutch",
  fullName: "John Ezebius Dutch",
  role: "Full-stack developer and IT trainer",
  location: "Arusha, Tanzania",
  email: "dutchjohn80@gmail.com",
  phone: "0744 853 054",
  phoneHref: "+255744853054",
  github: "https://github.com/dutchjohn80-rgb",
  githubLabel: "github.com/dutchjohn80-rgb",
  summary:
    "John Dutch is a full-stack developer and IT trainer in Arusha, Tanzania. He builds websites, web systems and mobile apps, sets up networks, and teaches programming.",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact", cta: true },
];

export const services = [
  {
    title: "Web development",
    icon: "globe",
    summary:
      "Business websites, landing pages and portfolios that load fast and read well on a phone.",
    items: [
      "Websites built with Astro, React and Tailwind CSS",
      "Mobile-friendly layouts",
      "Pages in more than one language, as on the ALAREDEFO NGO site",
      "Hosting set up on Vercel",
    ],
  },
  {
    title: "Full-stack systems",
    icon: "server",
    summary:
      "Custom web systems with an API, a database and an admin dashboard for your team.",
    items: [
      "Back ends in Laravel and Django, with REST APIs",
      "Live updates with WebSockets (Laravel Reverb)",
      "Dashboards in React",
      "MySQL and PostgreSQL databases, with backups",
    ],
  },
  {
    title: "Mobile apps",
    icon: "phone",
    summary: "Android and iOS apps from one Flutter codebase, connected to your system.",
    items: [
      "Login with secure tokens",
      "Maps and GPS features",
      "Apps that talk to a Laravel or Django API",
    ],
  },
  {
    title: "Networks and IT support",
    icon: "network",
    summary: "Setting up and looking after office networks and computers.",
    items: [
      "LAN and WAN with Cisco routers, switches and access points",
      "Firewall rules and access control lists",
      "Linux and Windows installation",
      "DNS, DHCP, SSH and FTP services",
    ],
  },
  {
    title: "Health information systems",
    icon: "pulse",
    summary:
      "Support for the clinical and reporting systems used in hospitals and health centres.",
    items: [
      "GoT-HOMIS, DHIS2 and EMR/EHR platforms",
      "Database checks and troubleshooting",
      "Workstation and network support in a clinical setting",
    ],
  },
  {
    title: "Training",
    icon: "cap",
    summary:
      "Hands-on classes for people who want to learn to build or secure systems.",
    items: [
      "Programming and software engineering",
      "Web development with Astro, Django and Laravel",
      "Router and network security labs",
      "Graphics design",
    ],
  },
  {
    title: "Graphics and video",
    icon: "film",
    summary: "Video editing and design for promotion, events and apps.",
    items: [
      "Video editing in Adobe Premiere Pro and CapCut",
      "UI and UX design for websites and apps",
    ],
  },
];

// Add a `link` to a project once you have its GitHub or live address.
export const projects: { title: string; kind: string; summary: string; stack: string; link?: string }[] = [
  {
    title: "Public transport real-time tracking",
    kind: "map",
    summary:
      "A fleet tracking platform that follows vehicles by GPS, predicts arrival times and shows routes on a map. Drivers and passengers each have their own app.",
    stack: "Laravel 11, Laravel Reverb, Flutter, React, Google Maps SDK",
  },
  {
    title: "Inventory management system",
    kind: "table",
    summary:
      "A web and mobile app for managing products, with secure login and cloud storage of stock records.",
    stack: "Laravel Sanctum (hosted on Railway), React and Tailwind CSS (hosted on Vercel), Flutter, MySQL",
  },
  {
    title: "ALAREDEFO NGO website",
    kind: "lang",
    summary:
      "A production website for an NGO, with an English and Swahili language switch and a contact form that sends email.",
    stack: "React, TypeScript, Tailwind CSS, Express.js, Nodemailer",
  },
  {
    title: "Health web panel and API",
    kind: "dash",
    summary:
      "A modular system for recording clinical data in a consistent way and showing it securely in dashboards.",
    stack: "Laravel REST API, React (Vite)",
  },
];

export const experience = [
  {
    when: "Oct 2025 to present",
    role: "IT Tutor",
    org: "Arusha Computing Centre, Arusha",
    points: [
      "Teach programming, software engineering, web development, graphics design and network security.",
      "Mentor new developers in Astro, Django and Laravel.",
      "Run practical labs on router set-up, database design and deploying full-stack apps.",
    ],
  },
  {
    when: "2024 to 2025",
    role: "ICT Support Intern",
    org: "Mount Meru Regional Referral Hospital, Arusha",
    points: [
      "Looked after the local network and the set-up of staff computers.",
      "Gave second-level database support for GoT-HOMIS, DHIS2 and EMR systems.",
    ],
  },
  {
    when: "Jul 2023 to Aug 2024",
    role: "Healthcare IT Assistant (field intern)",
    org: "Arusha Lutheran Medical Centre, Arusha",
    points: [
      "Checked hardware and secure terminal access against the centre’s data-privacy rules.",
    ],
  },
  {
    when: "Mar 2022 to Aug 2024",
    role: "ICT Support Intern",
    org: "Levolosi Health Centre, Arusha",
    points: ["Installed and configured Linux and Windows computers."],
  },
];

export const education = [
  {
    when: "2022 to 2025",
    title: "Bachelor of Information Technology",
    school: "Arusha Technical College",
  },
  {
    when: "2020 to 2022",
    title: "Advanced Certificate of Secondary Education (EGM)",
    school: "Inyonga Secondary School",
  },
  {
    when: "2016 to 2019",
    title: "Certificate of Secondary Education",
    school: "Mwangaza Secondary School",
  },
];

export const skills = [
  { group: "Back end", text: "Laravel, Django, Node.js, Express.js" },
  { group: "Front end and mobile", text: "Astro, React (Vite), Tailwind CSS, Flutter" },
  { group: "Languages", text: "Python, PHP, JavaScript, TypeScript, SQL, C++" },
  { group: "Databases", text: "MySQL, PostgreSQL, Firebase" },
  { group: "Networking and security", text: "Cisco routers and switches, LAN/WAN, firewall policies, ACLs, TCP/IP, DNS, DHCP, SSH, FTP" },
  { group: "Health systems", text: "GoT-HOMIS, DHIS2, EMR/EHR" },
  { group: "Design and video", text: "Adobe Premiere Pro, CapCut, UI/UX design" },
];

export const languages = "English and Kiswahili, both fluent";

export const tools = [
  "Laravel", "Django", "Node.js", "React", "Astro", "Flutter", "Tailwind CSS",
  "Python", "PHP", "TypeScript", "MySQL", "PostgreSQL", "Cisco", "Linux",
];

// Edit these four steps to match how you really work with clients.
export const process = [
  { title: "Tell me what you need", text: "Send a short message. We agree on the goal, who will use it and the deadline." },
  { title: "I plan it", text: "You get a clear plan with what will be built and how long it will take." },
  { title: "I build and test", text: "You see progress along the way and can ask for changes." },
  { title: "Launch and hand over", text: "I put it online and show your team how to use and look after it." },
];

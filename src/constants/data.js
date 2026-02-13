import AboutImg from "../assets/about.jpg";
import CV from "../assets/Ameer Resume.pdf";

export const PERSONAL_INFO = {
    name: "Ameer Bajracharya",
    title: "Full Stack Dev",
    subtitle: "Full Stack Dev",
    description:
        "I'm a Full Stack Developer based in Sydney, focused on building scalable, efficient web applications and data-driven solutions.",
    aboutDescription:
        "As a seasoned Software Engineer with over 5 years of experience, I specialize in the full software development lifecycle. I create robust web applications using PHP, Laravel, Docker, and modern JavaScript frameworks (React, VUE, NEST, NEXT), delivering clean code and high-quality user experiences.",
    cv: CV,
    aboutImg: AboutImg,
};

export const SOCIAL_LINKS = [
    {
        name: "Twitter",
        url: "https://twitter.com/Ameerbajrachar2",
        icon: "uil uil-twitter-alt",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ameerbajracharya/",
        icon: "uil uil-linkedin-alt",
    },
    {
        name: "GitHub",
        url: "https://github.com/ameerbajracharya/",
        icon: "uil uil-github-alt",
    },
];

export const NAV_LINKS = [
    { name: "Home", href: "#home", icon: "uil uil-estate" },
    { name: "About", href: "#about", icon: "uil uil-user" },
    { name: "Skills", href: "#skills", icon: "uil uil-file-alt" },
    { name: "Services", href: "#services", icon: "uil uil-briefcase-alt" },
    { name: "Portfolio", href: "#portfolio", icon: "uil uil-scenery" },
    { name: "Contact", href: "#contact", icon: "uil uil-message" },
];

export const ABOUT_STATS = [
    { title: "Experience", subtitle: "5+ Years", icon: "bx bx-award" },
    { title: "Projects", subtitle: "12+ Systems", icon: "bx bx-briefcase-alt" },
    {
        title: "Support",
        subtitle: "Mon - Fri (9am - 8pm)",
        icon: "bx bx-support",
    },
];

export const SKILLS = {
    frontend: [
        { name: "HTML", level: "Expertise" },
        { name: "CSS", level: "Intermediate" },
        { name: "Bootstrap", level: "Expertise" },
        { name: "Tailwind", level: "Intermediate" },
        { name: "Javascript", level: "Advance" },
        { name: "GIT", level: "Advance" },
        { name: "React", level: "Advance" },
        { name: "Vue JS", level: "Intermediate" },
        { name: "NEXT JS", level: "Intermediate" },
    ],
    backend: [
        { name: "PHP", level: "Expertise" },
        { name: "Laravel", level: "Expertise" },
        { name: "My SQL", level: "Expertise" },
        { name: "Postgres", level: "Intermediate" },
        { name: "RESTful API", level: "Expertise" },
        { name: "AJAX", level: "Expertise" },
        { name: "NEST JS", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
    ],
    // AI: [
    //     { name: "Claude Code CLI", level: "Intermediate" },
    //     { name: "GPT-5-Codex", level: "Intermediate" },
    //     { name: "Gemini Pro CLI", level: "Intermediate" },
    //     { name: "Gemini Pro CLI", level: "Intermediate" },
    // ],
};

export const SERVICES = [
    {
        title: "Software Engineering",
        description:
            "Service with more than 5 years of experience. Providing Quality of Products to Clients and Companies",
        points: [
            "Web Application Developments",
            "AI Integrations",
            "Data Visualization Dashboards",
            "System Developments",
            "UI/UX Enhancements",
        ],
        icon: "uil uil-web-grid",
    },
    {
        title: "Web App Developement",
        description:
            "Service with more than 5 years of experience. Providing Quality of Products to Clients and Companies.",
        points: [
            "HTML/CSS/JS",
            "PHP/Python/Laravel/NEST",
            "REACT/NEXT/JQuery/Bootstrap/Tailwind",
            "MySQL/PostgreSQL",
            "AWS/Docker",
        ],
        icon: "uil uil-arrow",
    },
    {
        title: "Business Analysis",
        description:
            "Engaged in Master's of Business Infomration System course at Australian Institute of higher education.",
        points: [
            "Business Analytics.",
            "System Analysis.",
            "Business Process Modeling.",
            "Project Management.",
            "Strategic Information Management.",
        ],
        icon: "uil uil-edit",
    },
];

export const PROJECTS = [
    {
        title: "AI-Powered NEPSE Portfolio Tracker",
        description:
            "Real-time stock analysis platform featuring AI-driven investment insights, automated web scraping, and dynamic profit reporting.",
        tech: ["Python", "Laravel", "MySQL", "OpenAI", "Scrapy"],
        liveUrl: "",
        sourceUrl: "",
    },
    {
        title: "Domain Performance Analytics",
        description:
            "Scalable monitoring solution for domain SEO metrics, built with a high-performance NestJS API and a reactive Vue 3 frontend.",
        tech: ["NestJS", "Vue 3", "PostgreSQL", "REST API"],
        liveUrl: "https://domain-ranking.ameer.com.np/",
        sourceUrl: "https://github.com/Ameerbajracharya/domain-ranking-app",
    },
    {
        title: "Live Gold & Silver Tracker (Nepal)",
        description:
            "Real-time Gold & Silver Price History dashboard with interactive price visualization.",
        tech: ["React 19", "Vite", "PHP", "Tailwind"],
        liveUrl: "https://www.bajracharyajyaasa.com.np/",
        sourceUrl: "#",
    },
];

export const QUALIFICATIONS = {
    education: [
        {
            title: "Master's of Business Infromation System",
            subtitle: "Australian Institute of Higher Education",
            calendar: "2022 - Present",
        },
        {
            title: "Bachelors in Computer Science and Information Technology",
            subtitle: "Tribhuvan University - Nepal",
            calendar: "2016 - 2020",
        },
        {
            title: "Higher Secondary School - Science",
            subtitle: "HSEB - Nepal",
            calendar: "2012 - 2014",
        },
    ],
    experience: [
        {
            title: "Full Stack Developer",
            subtitle: "SQM Research",
            calendar: "2023 - Present",
        },
        {
            title: "Laravel (Backend) Developer",
            subtitle: "Zillicom.com",
            calendar: "2020 - 2022",
        },
        {
            title: "Laravel Developer",
            subtitle: "Kite Nepal",
            calendar: "2019 - 2020",
        },
    ],
};

export const TESTIMONIALS = [
    {
        id: 1,
        title: "Uttam K.C.",
        description:"Really Great Job, all projects aspects were being followed as instructions provided.",
    },
    {
        id: 2,
        title: "Sushant Sigdel",
        description:"Great Team Player, Hard Working, Dedicated towards goals.",
    },
    {
        id: 3,
        title: "Santosh Budathoki",
        description:"Co-operative, Helpful, and really great colleague to have.",
    },
];

export const CONTACT_INFO = {
    email: "ameerbajracharya2022@gmail.com",
    phone: "+61 426 171 165",
    whatsapp_link:
        "https://api.whatsapp.com/send?phone=+61426171164&text=Hello, Let Chat!",
    messenger_user: "ameer.bajracharya",
    messenger_link: "https://m.me/ameer.bajracharya",
};

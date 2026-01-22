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
        { name: "HTML", level: "Advance" },
        { name: "CSS", level: "Basic" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "Javascript", level: "Intermediate" },
        { name: "GIT", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Vue JS", level: "Intermediate" },
        { name: "NEST JS", level: "Intermediate" },
        { name: "NEXT JS", level: "Intermediate" },
    ],
    backend: [
        { name: "PHP", level: "Advance" },
        { name: "Python", level: "Basic" },
        { name: "Laravel", level: "Advance" },
        { name: "My SQL", level: "Advance" },
        { name: "RESTful API", level: "Intermediate" },
        { name: "AJAX", level: "Intermediate" },
    ],
};

export const SERVICES = [
    {
        title: "Software Engineer",
        description:
            "Service with more than 3 years of experience. Providing Quality of Products to Clients and Companies.",
        points: [
            "Web Application Development.",
            "Database Management.",
            "System Architecture Development.",
            "UX Element Interaction.",
            "System Analysis.",
            "Business Process Analysis.",
        ],
        icon: "uil uil-web-grid",
    },
    {
        title: "Web App Developer",
        description:
            "Service with more than 3 years of experience. Providing Quality of Products to Clients and Companies.",
        points: [
            "Web Application Development.",
            "HTML/CSS/JS.",
            "PHP/Python/Laravel/MySQL.",
            "AJAX/REACT/JQuery/Bootstrap.",
        ],
        icon: "uil uil-arrow",
    },
    {
        title: "Business Analyst",
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
        image: "https://zillicom.com/storage/teams/1608544846100538764_1153040085060473_4684079173965185024_o.jpg", // Local fallback: Testimonial1
        title: "Uttam K.C.",
        description:
            "Really Great Job, all projects aspects were being followed as instructions provided.",
    },
    {
        id: 2,
        image: "https://zillicom.com/storage/teams/1611039572132896124_3546755625372257_4441453274890941305_o.jpg", // Local fallback: Testimonial2
        title: "Sushant Sigdel",
        description:
            "Great Team Player, Hard Working, Dedicated towards goals.",
    },
    {
        id: 3,
        image: "https://zillicom.com/storage/teams/1608545607103610654_3239513492766204_209846512416942743_n.jpg", // Local fallback: Testimonial3
        title: "Santosh Budathoki",
        description:
            "Co-operative, Helpful, and really great colleague to have.",
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

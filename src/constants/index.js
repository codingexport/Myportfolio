import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React  Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "SQL Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "COMPUTER TEACHER",
        company_name: "Kids Valley English School",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023 - April 2024",
        points: [
            "Taught web development concepts and technologies like React.js to students.",
            "Focused on continuous self-improvement to enhance teaching methods.",
            "Developed and implemented engaging lesson plans with responsive design examples.",
            "Participated in faculty meetings and provided constructive feedback to students."
        ],
    },
    {
        title: "Computer Teacher",
        company_name: "New Sunrise English School",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Present",
        points: [
            "Teaching computer science concepts, including web development and programming languages like JavaScript and React.js.",
            "Collaborating with other teachers to integrate technology effectively into the curriculum.",
            "Creating engaging lessons and assignments that focus on web development, coding, and computer applications.",
            "Providing one-on-one support and feedback to students to enhance their technical skills and problem-solving abilities."
        ],
    },
    {
        title: "Web Developer",
        company_name: "mySelf",
        icon: shopify,
        iconBg: "#FFFFFF",
        date: "Jan 2023 - Persent",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Successfully built and deployed multiple full-stack applications, improving user engagement by 20%",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Learn and Practice from Pw-Skill",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "BookStore",
        description:
            "Web-based platform that allows users to search, book, and manage book  from various providers, providing a convenient and efficient solution for intiligent needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "bootsrap react",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/codingexport/Bookstore-Web",
    },
    {
        name: "Akhil Blogging Web",
        description:
            "A blogging website designed specifically for college students to share ideas, knowledge, and creativity. and also share daily base activity at college days  ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/codingexport/Akhil-bloging-website",
    },
    {
        name: "Resume Builder",
        description:
            "A professional resume builder platform that helps users create personalized resumes, choose templates, and provides expert tips for enhancing career opportunities.",
        tags: [
            {
                name: "javaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Css",
                color: "green-text-gradient",
            },
            {
                name: "Html",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/codingexport/ResumeBuilder",
    },
];

export { services, technologies, experiences, testimonials, projects };
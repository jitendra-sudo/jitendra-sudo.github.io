import resumeFile from '../assets/Jitendra_FullStack_MERN_Developer.pdf';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import justflip from "../assets/justflip.png"
import DataPng from "../assets/Data.png"
import responsivePng from "../assets/responsive.png"
import g1 from "../assets/gallery/Screenshot1.png"
import g2 from "../assets/gallery/Screenshot2.png"
import g3 from "../assets/gallery/Screenshot3.png"
import g4 from "../assets/gallery/Screenshot4.png"
import g5 from "../assets/gallery/Screenshot5.png"
import g6 from "../assets/gallery/Screenshot6.png"
import g7 from "../assets/gallery/Screenshot7.png"
import g8 from "../assets/gallery/Screenshot8.png"
import g9 from "../assets/gallery/Screenshot9.png"

export const data = {
    name: "Jitendra Saini",
    number: "+91 7023187924",
    email: "jitusaini2705@gmail.com",
    role: 'Software Developer',
    title: "Full Stack Developer – React, Redux, MUI, Tailwind CSS, Node.js, Express.",
    portfolioLink: "https://www.linkedin.com/in/jitendra2705/",
    experience: "0.8 Years",
    companyExperience: [
        {
            company: "M&A Venture",
            date: "03/2025 - Present",
            role: "Software Developer",
            description:
                "Lead end-to-end development of scalable web applications using Node.js, Express.js,MongoDB ,PostgreSQL, and MySQL, architecting robust backend.",
        },
    ],
    whyHireMe: "Full Stack Developer with 0.8+ years of experience building scalable web applications using React.js, Node.js, Express.js, and PostgreSQL. Skilled in creating responsive UIs with MUI, Tailwind CSS  and experienced in backend development, REST APIs, and cloud platforms like AWS. Proven track record in leading development teams, architecting end-to-end solutions, and delivering high-performance, user-centric products.",
    ProjectsCompleted: '05',
    technicalSkills: [
        { name: 'Frontend Development', percent: 86 },
        { name: 'Backend Development', percent: 76 },
        { name: 'SEO Optimization', percent: 65 },
        { name: 'API Integration', percent: 70 },
        { name: 'Web Performance Optimization', percent: 68 },
    ],
    professionalSkills: [
        { name: 'Communication', percent: 95 },
        { name: 'Team Work', percent: 85 },
        { name: 'Project Management', percent: 66 },
        { name: 'Creativity', percent: 60 },
    ],
    skills: [
        { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'TailwindCSS', src: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
        { name: 'GraphQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'Bootstrap', src: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000' },
        { name: 'Vercel', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg' },
        { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
    Gallery: [
        { id: 1, title: "Blog 1", image: g1 },
        { id: 2, title: "Blog 2", image: g2},
        { id: 3, title: "Blog 3", image: g3 },
        { id: 4, title: "Blog 4", image: g4 },
        { id: 5, title: "Blog 5", image: g5 },
        { id: 6, title: "Blog 6", image: g6 },
        { id: 7, title: "Blog 7", image: g7 },
        { id: 8, title: "Blog 8", image: g8 },
        { id: 9, title: "Blog 9", image: g9 },
    ],
    services: [
        {
            name: "Frontend Coding",
            image: justflip,
            link: "https://justflip.in",
            github: 'https://justflip.in'
        },
        {
            name: "Responsive Design",
            image: responsivePng,
            link: "https://shopsutra.vercel.app",
            github: 'https://github.com/jitendra-sudo/E-Commerce'
        },
        {
            name: "Data Visualization",
            image: DataPng,
            link: "https://easyrenter.netlify.app/",
            github: 'https://github.com/jitendra-sudo/EasyRent'
        }
    ],
    serviceID: "service_x3a2i6m",
    templateID: "template_7eau2ve",
    userID: "gYBZNlFsdDCwi81la",
    PortfolioName: "New Portfolio Contact",
    Portfoliotitle: "Have an Awesome Project Idea? Let’s Discuss",
    footerTitle: " I'm a passionate React Frontend Developer with hands-on experience in building responsive, dynamic, and user-friendly web applications.",
    resume: {
        resumePng: resumeFile,
        name: "Jitendra_FullStack_MERN_Developer.pdf",
        link: 'https://drive.google.com/file/d/1Pr2cjIV0UcBn0Oqf0rjFCXFAKqasJqvn/view?usp=sharing'
    },

    mediaLink: [
        {
            icon: FaLinkedinIn,
            link: 'https://www.linkedin.com/in/jitendra2705/',
        },
        {
            icon: FaInstagram,
            link: 'https://www.instagram.com/jitendravibe',
        },
        // {
        // icon: FaTwitter,
        // link: '',
        //  },
        // {
        // icon:FaFacebookF,
        // link: '',
        //  },
    ]
}
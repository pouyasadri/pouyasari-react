/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
    title: "Freelancer,Full Stack Developer,Software & Mobile App Developer & SEO Expert|PouyaSadri",
    description: "Are you ready to skyrocket your business to new heights of success? Look no further!As a professional web developer, full stack developer, mobile developer and SEO expert, I offer custom software solutions, optimized websites and SEO strategies to take your business to new heights of success.. My expertise in SEO guarantees your business will soar above the competition. Imagine achieving business greatness with ease, let's make it a reality.",
    og: {
        title: "Freelancer,Full Stack Developer,Software & Mobile App Developer & SEO Expert|PouyaSadri",
        type: "website",
        url: "https://www.pouyasadri.com/",
    },
};

//Home Page
const greeting = {
    title: "SEYEDPOUYA SADRIFARD",
    logo_name: "Pouya Sadri",
    nickname: "Pouya Sadri",
    subTitle: "Are you ready to skyrocket your business to new heights of success? Look no further!As a professional web developer, full stack developer, mobile developer and SEO expert, I offer custom software solutions, optimized websites and SEO strategies to take your business to new heights of success.. My expertise in SEO guarantees your business will soar above the competition. Imagine achieving business greatness with ease, let's make it a reality.",
    resumeLink: "",
    portfolio_repository: "https://github.com/pouyasadri",
    githubProfile: "https://github.com/pouyasadri",
};

const socialMediaLinks = [/* Your Social Media Link */
    // github: "https://github.com/ashutosh1919",
    // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
    // gmail: "ashutoshhathidara98@gmail.com",
    // gitlab: "https://gitlab.com/ashutoshhathidara98",
    // facebook: "https://www.facebook.com/laymanbrother.19/",
    // twitter: "https://twitter.com/ashutosh_1919",
    // instagram: "https://www.instagram.com/layman_brother/"

    {
        id: '1s', name: "Github", link: "https://github.com/pouyasadri", fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
        backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    }, {
        id: '2s', name: "Gmail", link: "mailto:info@pouyasadri.com", fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    }, {
        id: '3s', name: "Telegram", link: "https://t.me/pouyasadri", fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/instagram?style=brands
        backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    }, // {
    //     name: "Skype",
    //     link: "https://t.me/RainbowSunDev",
    //     fontAwesomeIcon: "fa-skype", // Reference https://fontawesome.com/icons/instagram?style=brands
    //     backgroundColor: "Blue", // Reference https://simpleicons.org/?q=instagram
    // },
];

const skills = {
    data: [{
        id: '1S',
        title: "Search Engine Optimization (SEO)",
        fileName: "DataScienceImg",
        skills: ["⚡ SEO is crucial for the success of a business as it helps to boost the visibility and searchability of a website, making it more discoverable by potential customers, resulting in increased traffic and revenue for the business. Investing in SEO is a smart move for any business looking to thrive in today's digital landscape.", "⚡ As a skilled SEO freelancer, I drive exceptional results with precision and skill. Utilizing advanced tools like Google Analytics, Google Search Console, Google Ads, and Bing Webmaster Tools, I consistently outrank competitors and drive targeted traffic to websites. From keyword research to on-page optimization and link building, I am the expert you need to take your SEO efforts to the next level.", "⚡ Maximize your online potential and skyrocket your business success with my cutting-edge SEO strategies. By elevating your website's visibility and positioning on search engines, I open the door for potential customers to effortlessly discover and visit your site, resulting in a surge of traffic and ultimately a flood of new customers.",],
        softwareSkills: [{
            id: '2', skillName: "Google Analytics", fontAwesomeClassname: "logos:google-analytics", style: {
                backgroundColor: "transparent",
            },
        }, {
            id: '3', skillName: "Google Search Console", fontAwesomeClassname: "logos:google-search-console", style: {
                backgroundColor: "transparent",
            },
        }, {
            id: '4', skillName: "Bing Webmaster Tools", fontAwesomeClassname: "logos:bing", style: {
                backgroundColor: "transparent",
            },
        }, {
            id: '5', skillName: "Google Ads", fontAwesomeClassname: "logos:google-ads", style: {
                backgroundColor: "transparent", color: "#3776AB",
            },
        },],
    }, {
        id: "2S",
        title: "Full Stack Development",
        fileName: "FullStackImg",
        skills: ["⚡ Full stack development is the ultimate tool for website and application development, covering every aspect from the front-end design to the back-end functionality, and everything in between. It's the key to a captivating, functional and SEO-friendly website, delivering an unbeatable user experience and boosting your search engine rankings.", "⚡ Designing both the front-end and back-end of a website is like weaving a magic spell, it creates a seamless user experience that captivates visitors, and it also improves search engine optimization. With proper functionality and efficient crawling by search engines, your website will be at the top of the search results, making it easily discoverable by potential customers.", "⚡ As a full stack developer freelancer, I specialize in creating beautiful and responsive front-end applications and secure and efficient back-end systems that drive digital success. With my unique skills, I craft a seamless experience that improves SEO and sets your business apart. Trust me to deliver a product that exceeds expectations and propels your business to new heights of success as a full stack developer freelancer",

        ],
        softwareSkills: [{
            id: '6', skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: {
                color: "#E34F26",
            },
        }, {
            id: '7', skillName: "CSS3", fontAwesomeClassname: "fa-css3", style: {
                color: "#1572B6",
            },
        }, {
            id: '8', skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: {
                backgroundColor: "#000000", color: "#F7DF1E",
            },
        },

            {
                id: '9', skillName: "Bootstrap", fontAwesomeClassname: "logos:bootstrap",
            }, {
                id: '10', skillName: "Tailwindcss", fontAwesomeClassname: "logos:tailwindcss-icon",
            }, {
                id: '11', skillName: "ReactJS", fontAwesomeClassname: "simple-icons:react", style: {
                    color: "#61DAFB",
                },
            }, {
                id: '12', skillName: "Vue.js", fontAwesomeClassname: "logos:vue", style: {
                    color: "#61DAFB",
                },
            },

            {
                id: '13', skillName: "PHP", fontAwesomeClassname: "vscode-icons:file-type-php2",
            }, {
                id: '14', skillName: "Laravel", fontAwesomeClassname: "logos:laravel",
            }, {
                id: '15', skillName: "MySQL", fontAwesomeClassname: "logos:mysql", style: {
                    color: "#CB3837",
                },
            }, {
                id: '16', skillName: "GoLang", fontAwesomeClassname: "fa6-brands:golang", style: {
                    color: "#2C8EBB",
                },
            },


            {
                id: '17', skillName: "Git", fontAwesomeClassname: "mdi:git", style: {
                    color: "#F1502F",
                },
            }, {
                id: '18', skillName: "GraphQL", fontAwesomeClassname: "logos:graphql",
            }, {
                id: '19', skillName: "RESTful API", fontAwesomeClassname: "tabler:api",
            },],
    }, {
        id: "3S",
        title: "Mobile App development",
        fileName: "CloudInfraImg",
        skills: ["⚡ Creating a mobile app is like having a secret weapon for your business. Not only does it improve your search engine optimization, but it also allows you to reach a wider audience and provide a more personalized and engaging experience for users. It will be the key to unlocking a whole new world of digital opportunities.", "⚡ Transform your mobile strategy with my expertise as a freelancer mobile app developer. As a seasoned android developer and iOS developer, I specialize in crafting exceptional apps using Flutter, that run seamlessly on both Android and iOS. Take your iOS experience to the next level with my ability to create native apps using Swift and SwiftUI, pushing the boundaries of what's possible.", "⚡ Maximize app potential with my expert freelancer mobile app developer skills. From crafting cutting-edge apps to deploying and publishing them on the Google Play Store and Apple App Store, I'll make your app stand out and reach the widest audience possible.", "⚡ With my expertise in cutting-edge technologies, let's build the app of your dreams that is both efficient and secure, guaranteeing exceptional results. Innovate and excel with my help.",],
        softwareSkills: [

            {
                id: '20', skillName: "Flutter", fontAwesomeClassname: "simple-icons:flutter", style: {
                    color: "#02569B",
                },
            }, {
                id: '20', skillName: "Firebase", fontAwesomeClassname: "simple-icons:firebase", style: {
                    color: "#FFCA28",
                },
            }, {
                id: '21', skillName: "Google Play Store", fontAwesomeClassname: "logos:google-play-icon", style: {
                    color: "#0089D6",
                },
            }, {
                id: '22', skillName: "Swift", fontAwesomeClassname: "logos:swift",
            },

            {
                id: '23', skillName: "App Store", fontAwesomeClassname: "simple-icons:appstore", style: {
                    color: "#326CE5",
                },
            },],
    }, {
        id: "4S",
        title: "Maintenance & Support",
        fileName: "DesignImg",
        skills: ["⚡ Think of maintaining your website or mobile app like taking care of a garden, it's a continuous effort that ensures its beauty and functionality. Regular maintenance is crucial for not only keeping the bugs at bay, but also for providing an unparalleled user experience. It's also an opportunity to stay ahead of the curve by incorporating the latest technologies and security updates, which ultimately improves search engine optimization and online visibility, like a blooming flower that shines in the spotlight.", "⚡ Entrust your project to me and soar to success with peace of mind. My exceptional maintenance and 24/7 support guarantee a smooth functioning of your project and your satisfaction, at all times. Rely on my comprehensive support and maintenance services to keep your projects running at peak performance, ensuring smooth operation and continued success for all your existing apps.", "⚡ Achieving success is not a one-time effort, it's an ongoing journey, and I am here to guide you through it with my expert maintenance and top-notch support. I take pride in ensuring the sustained success of all your projects.",],
        softwareSkills: [{
            id: '24', skillName: "Nginx", fontAwesomeClassname: "vscode-icons:file-type-nginx",
        }, {
            id: '25', skillName: "Apache", fontAwesomeClassname: "logos:apache",
        }, {
            id: '26', skillName: "Cpanel", fontAwesomeClassname: "logos:cpanel", style: {
                color: "#F24E1E",
            },
        },],
    },],
};

// Education Page
const competitiveSites = {
    competitiveSites: [{
        siteName: "Coursera", iconifyClassname: "logos:coursera", profileLink: "https://www.coursera.com",
    }, {
        siteName: "Codechef", iconifyClassname: "simple-icons:codechef", style: {
            color: "#5B4638",
        }, profileLink: "https://www.codechef.com/users/pouyasadri",
    },],
};

const degrees = {
    degrees: [],
};

const certifications = {
    certifications: [{
        id: '1C',
        title: "Introduction to Cloud Computing",
        subtitle: "- IBM Skills Network",
        logo_path: "ibm_logo.png",
        certificate_link: "https://www.coursera.org/account/accomplishments/certificate/DD85MJZ8XQ26",
        alt_name: "Introduction to Cloud Computing IBM Skills Network",
        color_code: "#1F70C199",
    }, {
        id: '2C',
        title: "Foundations of User Experience (UX) Design",
        subtitle: "- Google",
        logo_path: "google_logo.png",
        certificate_link: "https://www.coursera.org/account/accomplishments/certificate/ECUL65NF36QH",
        alt_name: "Foundations of User Experience (UX) Design Google",
        color_code: "#00000099",
    }, {
        id: '3C',
        title: "Foundations: Data, Data, Everywhere",
        subtitle: "- Google",
        logo_path: "google_logo.png",
        certificate_link: "https://www.coursera.org/account/accomplishments/certificate/CW5TXDPSU8MU",
        alt_name: "Foundations: Data, Data, Everywhere Google",
        color_code: "#0C9D5899",
    }, {
        id: '4C',
        title: "Decentralized Finance (DeFi) Infrastructure",
        subtitle: "- Duke University",
        logo_path: "Duke_University_logo.png",
        certificate_link: "https://www.coursera.org/account/accomplishments/certificate/KYPJKKNJVN58",
        alt_name: "Decentralized Finance (DeFi) Infrastructure Duke University",
        color_code: "#4285F499",
    }, {
        id: '5C',
        title: "Introduction to Front-End Development",
        subtitle: "- Meta",
        logo_path: "meta_logo.png",
        certificate_link: "https://www.coursera.org/account/accomplishments/certificate/H2VYNQB5ANBL",
        alt_name: "Introduction to Front-End Development Meta",
        color_code: "#00000099",
    },],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Work, Internship, and Freelance Experience",
    description: "As a junior developer, designer, software architect, and team leader in software and web development, I have successfully supported the growth of startups and companies worldwide. I thrive on challenges and am always seeking new opportunities to further develop my skills and expertise as a freelancer.",
    header_image_path: "experience.svg",
    sections: [{
        title: "Work", experiences: [{
            id: '1E',
            title: "Junior Software engineer",
            company: "Edalat",
            company_url: "",
            logo_path: "edalat_logo.jpg",
            duration: "2014 - 2015",
            location: "Mashhad, Iran",
            description: "As a software engineer at Edalat, a company with numerous factories, I worked on a team of 6 developers to create a CRM using the .NET framework to manage and streamline the work of factory employees.",
            color: "#0879bf",
        }, {
            id: '2E',
            title: "Start to work as a Freelancer",
            company: "Independent Freelancer",
            company_url: "Freelancer.com",
            logo_path: "freelance_logo.webp",
            duration: "2015 - 2016",
            location: "Any Where around the World",
            description: "Experience the challenges and rewards of freelancing as a .NET developer, with over 15 completed projects in desktop application development.",
            color: "#9b1578",
        }, {
            id: '3E',
            title: "Chief Technology Officer (CTO)",
            company: "dr.sadrifard Pharmaceutical company",
            company_url: "",
            logo_path: "freecopy_logo.png",
            duration: "2016 - 2019",
            location: "Mashhad, Iran",
            description: "As CTO of Dr.Sadrifard pharmaceutical company, I led the tech team in developing a comprehensive web-based application featuring an e-commerce system, CRM, and financial tools to streamline the company's operations.",
            color: "#fc1f20",
        }, {
            id: '4E',
            title: "Freelancer",
            company: "Freelance Professional",
            company_url: "pouyasadri.com",
            logo_path: "freelance_logo.webp",
            duration: "2019 - Now",
            location: "Any Where around the World",
            description: "As a full stack web developer with over 25 completed projects, I continue my freelance journey providing top-quality development services.",
            color: "#fc1f20",
        },],
    },],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description: "Utilizing a diverse range of cutting-edge technology tools, I have developed and deployed impressive web and mobile applications (Android and iOS) with strong front-end and back-end capabilities.",
    avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "pouyasadri_image.png",
        description: "Connect with me on various social media platforms for quick replies and to learn about my services including website, app, and software development with 24/7 maintenance and support, SEO, full stack development for both front and back end, and native and hybrid Android and iOS apps.",
    }, blogSection: {
        title: "Blogs",
        subtitle: "Stay up-to-date with new technologies and enhance your skills with my weekly blog featuring tutorials for beginners and professionals. Discover my wide range of services by following my blog and getting in touch.",
        link: "https://blog.pouyasadri.com",
        avatar_image_path: "blogs_image.svg",
    },
};

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
};

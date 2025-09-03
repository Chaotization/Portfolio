/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chaotization",
  title: "Hi all, I'm Eric",
  subTitle: emoji(
    "A results-driven Full Stack Developer 🚀 with over 8 years of experience building high-performance web applications using modern technologies like JavaScript, TypeScript, React.js, Next.js, Node.js, and Vue. Skilled in crafting responsive UIs, developing scalable backend services, and deploying cloud-native applications on AWS. Adept at building reusable components, implementing robust state management, and optimizing performance across the full stack. Passionate about delivering clean, maintainable code and continuously exploring new tools and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pEpMmqP1IEOfoFd0VYCKA9T8-ZPP1SQv/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/chaotization",
  linkedin: "https://www.linkedin.com/in/eric-z17/",
  gmail: "ericz17career@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER WITH A FOCUS ON SCALABLE SYSTEMS AND MODERN WEB ARCHITECTURE",
  skills: [
    emoji(
      "⚡ Build responsive and dynamic web interfaces using React.js, TypeScript, Next.js, and Redux"
    ),
    emoji(
      "⚡ Develop full-stack applications with RESTful APIs, optimized backend services, and real-time data handling"
    ),
    emoji(
      "⚡ Integrate and deploy cloud-native solutions using AWS (ECS, Lambda, API Gateway) and Firebase"
    ),
    emoji(
      "⚡ Optimize performance through code splitting, caching, virtualization, and database tuning"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
}

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / UI Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend / API Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming & Scripting",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "65%"
    },
    {
      Stack: "Data & Analytics",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Engineer",
      company: "MoneyLion",
      companylogo: require("./assets/images/moneylionLogo.png"),
      date: "Jul 2023 – May 2025",
      desc: "Built a full-stack wealth management platform with real-time portfolio analytics, trading dashboards, and market data processing using Spring Boot, Kafka, React/TypeScript, and AWS.",
      descBullets: [
        "Architected portfolio analytics platform using Spring Boot with Java virtual threads and Kafka event streaming, implementing real-time investment recommendation engines and portfolio performance tracking services supporting concurrent wealth management operations",
        "Built high-frequency trading dashboard with React/TypeScript consuming Spring WebSocket APIs, developing live market data visualization and order execution interfaces with drag-and-drop portfolio rebalancing tools for financial advisors",
        "Designed market data processing infrastructure using Spring Cloud Gateway and AWS RDS Aurora PostgreSQL clusters, implementing real-time market event ingestion services and fault-tolerant message delivery for portfolio value calculations",
        "Developed multi-tenant advisor platform with Next.js SSR and JWT authentication, creating role-based dashboard interfaces for financial advisors and clients with compliance tracking and portfolio management capabilities",
        "Implemented portfolio management system with event sourcing and CQRS architecture, building real-time risk calculation engines and trade reconciliation services across equities, bonds, and crypto assets with audit trail functionality",
        "Optimized trading interface performance through Redis distributed caching and D3.js portfolio visualizations, implementing interactive charts and dashboards for complex financial data analytics and portfolio monitoring",
        "Built financial data integration pipelines using Spring Batch and AWS Lambda, developing automated Bloomberg and Refinitiv API processors with data validation and portfolio calculation services",
        "Established automated deployment infrastructure implementing GitHub Actions CI/CD with Kubernetes, creating comprehensive testing frameworks and deployment automation for wealth management platform releases"
      ]
    },
    {
      role: "Software Engineer",
      company: "neARabl",
      companylogo: require("./assets/images/neARablLogo.webp"),
      date: "Feb 2021 – Apr 2023",
      desc: "Developed a secure authorization platform for managing user access across financial products.",
      descBullets: [
        "Developed AR navigation dashboard using React.js and Next.js, building floor-switching interfaces, zoom-capable spatial maps, and real-time asset tracking visualization for complex building environments",
        "Created reusable AR overlay components using TypeScript and Tailwind CSS, building modular architecture for interactive floor maps, live position tracking, and facility maintenance alerts",
        "Collaborated with design teams to translate AR interface wireframes into functional spatial navigation components, establishing consistent design system for directional arrows and position markers",
        "Optimized AR interface performance implementing React.memo and virtualized rendering for spatial data visualization, ensuring smooth performance during continuous WebSocket streams from IoT sensors",
        "Troubleshot AR dashboard issues resolving real-time position synchronization problems, cross-device compatibility, and spatial data rendering bugs for indoor navigation systems",
        "Participated in code reviews for AR visualization components, providing feedback on React performance optimization for continuous data streams and maintaining 60fps rendering",
        "Integrated GraphQL with Django REST APIs for efficient spatial data fetching, implementing fine-grained queries for building layouts and real-time facility data to improve dashboard responsiveness",
        "Configured CI/CD pipelines using Github Action for automated testing and deployment of AR dashboard components to AWS ECS, improving release reliability for spatial intelligence platform",
      ]
    },
    {
      role: "Software Engineer",
      company: "Basis Technologies",
      companylogo: require("./assets/images/basisTechLogo.png"),
      date: "Aug 2018 – Nov 2020",
      desc: "Supported a large-scale migration of campaign performance data from MySQL to MongoDB with QA automation tooling.",
      descBullets: [
        "Created data migration validation dashboard using React.js with Redux, enabling QA analysts to verify campaign record integrity during MySQL to MongoDB migration with interactive data comparison interfaces",
        "Developed real-time data comparison visualizations using D3.js and WebSocket connections, building side-by-side record views with metric filtering for impressions, clicks, conversions and automated anomaly detection",
        "Built campaign analytics interface integrating Chart.js for trend analysis and implementing React.memo with virtualization to maintain responsive performance when displaying large campaign datasets",
        "Engineered data transformation services using Node.js streams and worker threads, creating automated pipelines converting relational campaign data into MongoDB-compatible JSON schemas with validation reporting",
        "Optimized dashboard query performance designing MongoDB compound indexes and aggregation pipelines for campaign data retrieval, reducing dashboard load times significantly through database optimization",
        "Established API testing framework using Postman collections and Newman automation, creating comprehensive REST endpoint validation with documentation for frontend dashboard integration workflows"
      ]
    },
    {
      role: "Junior Backend Engineer",
      company: "HDR",
      companylogo: require("./assets/images/HDRLogo.png"),
      date: "Aug 2018 – Nov 2020",
      desc: "Supported a large-scale migration of campaign performance data from MySQL to MongoDB with QA automation tooling.",
      descBullets: [
        "Built project tracking platform using Java and Spring Boot, creating backend services for engineering team resource management, timeline monitoring, and project status reporting",
        "Developed project management APIs with Spring MVC for project timeline creation, document version control, and team collaboration workflows including task assignment and progress tracking",
        "Designed engineering documentation database using PostgreSQL with JPA/Hibernate, creating schemas for project specifications storage and compliance record management systems",
        "Created legacy data migration pipelines using Java processing services, building automated workflows converting Excel project data into structured database records with validation",
        "Optimized project dashboard performance designing MongoDB indexes for query acceleration, implementing database optimizations that minimize load times for engineering resource reporting",
        "Implemented secure access control system using Spring Security with role-based permissions, creating authentication services for project data protection with comprehensive unit testing"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PRODUCTS & PLATFORMS I HELPED ARCHITECT, SHIP, OR SCALE",
  projects: [
    {
      image: require("./assets/images/moneylion-1.png"),
      projectName: "MoneyLion – Wealth Management Platform",
      projectDesc:
        "Built a centralized access management dashboard for a fintech platform. Used Next.js, Spring Boot, Kafka and AWS to control real-time permissions across banking, credit, and investment modules.",
      footerLink: [
        {
          name: "Visit Company",
          url: "https://www.moneylion.com"
        }
      ]
    },
    {
      image: require("./assets/images/neARabl-1.png"),
      projectName: "neARabl – Spatial Operations Dashboard",
      projectDesc:
        "Developed a real-time AR dashboard for indoor navigation and spatial data visualization using React, Flask, AWS ECS, and Scikit-learn. Enabled seamless 2D overlay accuracy and live telemetry analytics.",
      footerLink: [
        {
          name: "View Company",
          url: "https://www.nearabl.com"
        }
      ]
    },
    {
      image: require("./assets/images/basisTech-1.png"),
      projectName: "Basis Technologies - Campaign Insights Data Migration",
      projectDesc:
        "Developed a high-performance data migration validation dashboard using React.js, D3.js, and Node.js, enabling real-time QA verification and analytics during MySQL to MongoDB migration.",
      footerLink: [
        {
          name: "View Company",
          url: "https://www.basistechnologies.com/"
        }
      ]
    },
    {
      image: require("./assets/images/HDRLogo.png"),
      projectName: "HDR - Management Platform",
      projectDesc:
        "Developed a full-stack project tracking platform using Java, Spring Boot, and PostgreSQL/MongoDB, featuring secure APIs for engineering resource management, timeline tracking, and document collaboration.",
      footerLink: [
        {
          name: "View Company",
          url: "https://www.hdrinc.com/"
        }
      ]
    },

  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle:
    "Certifications, recognitions, and notable project accomplishments from academic and professional experience.",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Earned AWS Developer Associate certification, demonstrating proficiency in designing, deploying, and debugging cloud-native applications.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Certification Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/6ee094b2-394d-4018-b463-b706eb393eb3/public_url" // Optional: replace with your public badge if available
        }
      ]
    }
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(347) 503-3321",
  email_address: "ericz17career@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

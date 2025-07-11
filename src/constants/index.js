// -------------------------------Hero----------------------------------------------
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Academic Projects Completed" },
  { value: 3, suffix: "+", label: "Personal Projects" },
  { value: 90, suffix: "+", label: "GitHub Contributions" },
  { value: 100, suffix: "%", label: "Passion for Learning" },
];

//--------------------------------------Work--------------------------------------------
export const projects = [
  {
    title: "MedicareHub - Health Insurance Management System",
    description:
      "A web app to manage health insurance plans, claims, and users efficiently.",
    imgPath: "/images/project1.png",
    bgColor: "#f9f9f9",
    link: "https://github.com/KumodN/Health-Insurance-Management_WebPages",
    tech: "[ HTML | CSS | JavaScript | PHP | MySQL ]",
  },
  {
    title: "Clear Vision - Optical Management System",
    description:
      "Full-stack app for managing optical inventory and orders efficiently.",
    imgPath: "/images/project2.png",
    bgColor: "#ffefdb",
    link: "https://github.com/KumodN/Optical_Business_Management_System",
    tech: "[ React.js | Express.js | Node.js | MongoDB ]",
  },
  {
    title: "WashIt - Laundry Management System",
    description:
      "Automated laundry service web platform built with modern technologies.",
    imgPath: "/images/project3.png",
    bgColor: "#ffe7db",
    link: "https://github.com/KumodN/WashIt-Online-Laundry-Management-System",
    tech: "[ HTML | CSS | JavaScript | Java (Servlet, JDBC, JSP) | MySQL | Apache Tomcat ]",
  },
  {
    title: "Pocket Ledger - Personal Finance Tracker",
    description:
      "A mobile app to track income, expenses, and savings goals efficiently.",
    imgPath: "/images/project4.png",
    bgColor: "#fce4ec",
    link: "https://github.com/KumodN/PersonalFinanceTracker",
    tech: "[ Kotlin | Maven ]",
  },
];

//---------------------------Logo-Icon List-------------------------------

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

//----------------------Feature Crads ---------------------------------------------
const abilities = [
  {
    imgPath: "/images/academic.jpg",
    title: "Academic Excellence",
    desc: "Recognized on the Dean’s List for outstanding academic performance and consistent dedication to learning.",
  },
  {
    imgPath: "/images/team.jpg",
    title: "Collaborative Team Player",
    desc: "Thrives in team environments by fostering open communication, supporting peers, and contributing actively to group success.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

//--------------------Tech Stack -------------------------------
const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Java",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.png",
  },
  {
    name: "PHP",
    imgPath: "/images/logos/php.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three - JS",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Management",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// -----------------------Experience------------------------------------------
const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

//-------------------------Testimonial-------------------------------------
const testimonials = [
  {
    name: "Roshani Leitch",
    mentions: "@roshaniL",
    review:
      "I can’t say enough good things about Kumod. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  // {
  //   name: "Wade Warren",
  //   mentions: "@wadewarren",
  //   review:
  //     "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  //   imgPath: "/images/client3.png",
  // },
  // {
  //   name: "Guy Hawkins",
  //   mentions: "@guyhawkins",
  //   review:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   imgPath: "/images/client2.png",
  // },
];

//----------------------Footer-----------------------------------
const socialImgs = [
  {
    name: "mail",
    url: "mailto:kumodnenuk@gmail.com?subject=Inquiry&body=Hi, I would like to know more about your services.",
    imgPath: "/images/mail.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kumoddesilva",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "git",
    url: "https://www.github.com/KumodN",
    imgPath: "/images/git.png",
  },

  {
    name: "x",
    url: "https://www.x.com/KumodNenuka",
    imgPath: "/images/x.png",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/94761130407?text=Hello%20Kumod%2C%20I%20am%20interested%20to%20hire%20you.",
    imgPath: "/images/wa.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

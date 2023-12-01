import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  svelte,
  rails,
  scss,
  simplenexus,
  taylor,
  austin,
  peachtree,
  tomodachi,
  asl,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Svelte Kit",
    icon: svelte,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "scss",
    icon: scss,
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "SimpleNexus",
    icon: simplenexus,
    iconBg: "#383E56",
    date: "January 2021 - Present",
    points: [
      "Developed and maintained backend systems using Ruby on Rails.",
      "Wrote clean, stable, and maintainable code in production environments.",
      "Collaborated with cross-functional teams to deliver high-quality software, in code reviews and other mediums.",
      "Document components in our style guide to help drive consistency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He was conscious of the project scope as a whole and wrote code with the future in mind.\n He'll excel wherever he decides to go!",
    name: "Taylor Hakes",
    designation: "Technical Lead",
    company: "Eve Financial",
    image: taylor,
  },
  {
    testimonial:
      "He not only carried his weight and more when it comes to the workload, but also helped the moral with his leaderlike mentality and team building attitude.",
    name: "Austin Ewell",
    designation: "Web Developer",
    company: "Balance of Nature",
    image: austin,
  },
  {
    testimonial:
      "After Michael optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Peach Tree Counseling",
    description:
      "A website to help people find a great therapist for them to work with. Includes various pages describing the business that is built for SEO.",
    tags: [
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: peachtree,
    source_code_link: "https://peachtreecounselingservice.com/",
  },
  {
    name: "Tomodachi",
    description:
      "Web game that plays like the classic game \"Tomogachi\" but with a planet instead. The game has a set amount of turns and depending how you care for your planet you will end up with a unique ending.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: tomodachi,
    source_code_link: "https://github.com/Johnson90cm/Tomodachi",
  },
  {
    name: "ASL Neural Network Translator",
    description:
      "A machine learning, neural network that takes feedback from your webcam on your computer and translates any ASL sign language into English live.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: asl,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

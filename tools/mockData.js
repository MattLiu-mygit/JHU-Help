const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const SGA_Survey_Results = [
  {
    id: 1,
    label: "Personal Mental Health Issues",
    percentage: "46.77%"
  },
  {
    id: 2,
    label: "Take care of relatives/siblings/etc",
    percentage: "33.48%"
  },
  {
    id: 2,
    label: "Unstable home environment",
    percentage: "29.01%"
  },
  {
    id: 3,
    label: "Unstable income",
    percentage: "25.31%"
  },
  {
    id: 4,
    label: "Lack of reliable internet",
    percentage: "25.11%"
  },
  {
    id: 5,
    label: "Lack of resources",
    percentage: "23.69%"
  },
  {
    id: 6,
    label: "Disadvantageous time zones",
    percentage: "22.13%"
  },
  {
    id: 7,
    label: "Other",
    percentage: "15.65%"
  },
  {
    id: 8,
    label: "Working to supplement income",
    percentage: "9.73%"
  },
  {
    id: 9,
    label: "Covid-19 related sickness/death",
    percentage: "5.23%"
  }
]

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  SGA_Survey_Results
};

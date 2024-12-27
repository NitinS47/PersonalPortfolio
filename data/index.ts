export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/b1.svg",
    // spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Music Recommendation System",
    des: "Created a Music Recommendation System using machine learning and algorithms such as KNN and cosine similarity.",
    img: "/p1.svg",
    iconLists: [],
    link: "https://github.com/NitinS47/MusicRecommendationSystem",
  },
  {
    id: 2,
    title: "Room Booking System",
    des: "Created a Classroom Booking System for an educational institute.The front end was created using Java and the backend was done using MySQL.",
    img: "/p2.svg",
    iconLists: [],
    link: "https://github.com/NitinS47/RoomBooking",
  },
  {
    id: 3,
    title: "Facial Recognition Attendance System",
    des: "The team and I created a facial recognition that identified faces and marked their attendance.",
    img: "/p3.svg",
    iconLists: [],
    link: "https://github.com/NitinS47/Facial_Recognition_Attendance_System",
  },
  {
    id: 4,
    title: "F1 Car Identification",
    des: "Utilized Computer Vision to identify Formula 1 cars and detect racing rule breaches using Python and YOLOv5.",
    img: "/p4.svg",
    iconLists: [],
    link: "https://github.com/NitinS47/F1CarIdentification",
  },
];

export const testimonials = [
  {
    quote:
      "I have collaborated with Nitin on multiple projects, he is a hard worker a go getter and any project we have worked on he has brought life he gives his all, he has a great personality and is someone you definitely want to colaborate in the future",
    name: "Ryan Netto",
    title: "Ex-Intern at CGI",
    src: "/Ryan.jpeg",
  },
  {
    quote:
      "Nitin is an exceptional teammate and a true asset to any team. There were moments when I faced challenges, and Nitin consistently stepped up, delivering outstanding support and solutions.",
    name: "Rejoy Cherian Regi",
    title: "Ex-Intern at Tech Avant Garde",
    src: "/Rejoy.jpeg",
  },
  {
    quote:
      "Collaborating with Nitin on the music SWO website has been a game-changer for our workflow. His technical expertise, creativity, and dedication to understanding our needs have resulted in a seamless, efficient solution. Nitin's ability to translate complex requirements into a user-friendly platform has made the entire process effortless for us. He’s a brilliant developer and an absolute pleasure to work with!",
    name: "Roshan Yohann Anand",
    title: "Music Coordinator at Christ University Kengeri Campus",
    src: "/Roshan.jpeg",

  },
  {
    quote:
      "Working with Nitin has been an exceptional experience. He brings a unique blend of technical knowledge and creativity to every project. With a strong commitment to innovation and a passion for learning, Nitin is a dedicated professional who adds immense value to any team.",
    name: "Joed Thomas Jackson",
    title: "Information Security Intern at SmartQ",
    src: "/Joed.png",
  },
  {
    quote:
      "Collaborating with Nitin was an absolute pleasure. His expertise, dedication, and ability to deliver exceptional results were evident throughout our project. Nitin’s enthusiasm for every aspect of development, networking, and AIML truly sets him apart. If you’re looking for a versatile professional to elevate your project, Nitin is the perfect choice.",
    name: "Allen Tomy",
    title: "Ex-Intern at UniBites",
    src: "/Allen.jpeg",
  },
  {
    quote:
      "Working with Nitin has been an incredible experience. His problem-solving skills, adaptability, and deep knowledge in AIML, development, and networking make him an invaluable teammate. Nitin's consistent support and proactive approach ensure that every project we tackle together exceeds expectations. He's truly someone you can rely on to get the job done right.",
    name: "Noel John Varghese",
    title: "Ex-Intern at DRDO",
    src: "/Noel.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Tech Avant Garde",
    img: "/TAG.jpeg",
  },
  {
    id: 2,
    name: "Christ University",
    img: "/CU.png",
  },
];

export const workExperience = [
  {
    id: 1,
    year: 2024,
    details: {
      title: "SWO Website",
      desc: "In the process of developing a website for the Student Welfare Organization of Christ University Kengeri Campus. The website is currently under development and is expected to be completed by the end of the year. The website is built using Next.js, Tailwind CSS, and TypeScript.",
      thumbnail: "/exp1.svg",
    },
    gridSpan: "md:col-span-2",
  },
  {
    id: 2,
    year: 2024,
    details: {
      title: "Team Midnight",
      desc: "Started a Community of Muscicians in Christ University Kengeri Campus. Currently consists of 2 Bands and an Acapella Group ",
      thumbnail: "/exp2.svg",
    },
    gridSpan: "md:col-span-2",
  },
  {
    id: 3,
    year: 2024,
    details: {
      title: "Event Head of ASCII",
      desc: "I am currently the Event Management Head of ASCII for the academic year 2024-25.",
      thumbnail: "/exp3.svg",
    },
    gridSpan: "md:col-span-2",
  },
  {
    id: 4,
    year: 2024,
    details: {
      title: "AIML Intern at Tech Avant Garde",
      desc: "Worked at Tech Avant Garde as a machine learning Intern for a span of one month.The team and I created a facial recognition that identified faces and marked their attendance.This project was done in real time with a backend and front end.",
      thumbnail: "/exp4.svg",
    },
    gridSpan: "md:col-span-2",
  },
  {
    id: 5,
    year: 2024,
    details: {
      title: "Frontend Intern at Nexus Software",
      desc: "I created various websites helping me to showcase and learn the different aspects of how to implement html and css to create a front end for a software company’s website",
      thumbnail: "/exp5.svg",
    },
    gridSpan: "md:col-span-2",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NitinS47",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "",
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nitin-peter-22992a289/?trk=opento_nprofile_pfbanner",
  },
];
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
  username: "Faisal Javed",
  title: "Hi all, Faisal",
  subTitle: emoji(
    "An aspiring Data Science Student 🚀, skilled in Python, R, SQL, and machine learning with scikit-learn and TensorFlow. Passionate about using data insights to address real-world problems."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1YPyGl59vG0bTQaq_e95ACjLNMKAGcOP9K_jUIEuYkXo/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/syedfaisaljaved",
  linkedin: "https://www.linkedin.com/in/syedfaisaljaved/",
  gmail: "syedfaisaljaved@gmail.com",
  facebook: "https://www.facebook.com/linkin.faisal",
  medium: "https://medium.com/@syedfaisaljaved",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about data analysis and machine learning, I'm dedicated to mastering these fields, driven by the desire to excel and solve complex problems.",
  skills: [
    emoji(
      "⚡ Craft interactive UIs for web/mobile analytics and ML applications"
    ),
    emoji("⚡ Implement scalable machine learning models for predictive analytics"),
    emoji(
      "⚡ Integrate services like Firebase/AWS/Digital Ocean for data projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fab fa-head-side-gear"
    },
    {
      skillName: "Artifical Intelligence",
      fontAwesomeClassname: "fab fa-microchip-ai"
    },
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "fab fa-magnifying-glass-chart"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Regina",
      logo: require("./assets/images/uofr.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2012 - Present",
      // desc: "",
      // descBullets: [
      //   ""
      // ]
    },
    {
      schoolName: "Jamia Hamdard",
      logo: require("./assets/images/hamdard.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "July 2016 - September 2020",
      // desc: "",
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Statistics", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Information Analyst",
      company: "eHealth Saskatchewan",
      companylogo: require("./assets/images/ehealth.png"),
      date: "January 2023 – Present",
      desc: "Spearheaded data optimization and IT service improvements using SQL and dashboard analytics, enhancing efficiency and teamwork.",
      descBullets: [
        "Enhanced healthcare data accuracy and security with SQL; streamlined ITIL for business alignment.",
        "Created dashboards for email backlog and ServiceNow issues, boosting IT service efficiency."
      ]
    },
    {
      role: "Flutter Developer",
      company: "uFaber Edutech Pvt. Ltd.",
      companylogo: require("./assets/images/ufaber.png"),
      date: "August 2020 – July 2022",
      desc: "Native Android and Flutter (Android/iOS) Developer with Expertise on Serverless Backend.",
      descBullets: [
        "Developed 8 Flutter apps for iOS/Android, integrating Firestore for real-time updates and performance gains.",
        "Set up BigQuery for robust data analytics and insights, supporting data-driven decision-making."
      ]
    },
    {
      role: "Lead Mobile Developer",
      company: "Flunkey",
      companylogo: require("./assets/images/flunkey.png"),
      date: "August 2022 – Sep 2023",
      desc: "Flutter Developer managing a team of developers building Flunkey from scratch.",
      descBullets: [
        "Led Flutter app development, achieving a 20% increase in performance.",
        "Implemented coding standards, reducing issues by 30% and boosting user engagement by 10%."
      ] 
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hidden Camera App",
      subtitle:
        "National Recognition in India for a Mobile App Detecting Hidden Cameras",
      image: require("./assets/images/hiddencameraapp.png"),
      imageAlt: "Hidden camera app",
      footerLink: [
        
        {
          name: "News Article",
          url: "https://www.edexlive.com/news/2020/sep/11/no-more-sneaky-peeks-this-jamia-hamdard-students-app-lets-you-detect-hidden-cameras-in-public-spac-14554.html"
        }
      ]
    },
    {
      title: "IBM Data Science Specialization",
      subtitle:
        "Acquiring In-Depth Knowledge and Practical Skills in Data Science with IBM",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/db2626726486fd9f5cf29d557e761071"
        }
      ]
    },

    {
      title: "Applied Data Science for Data Analysts",
      subtitle: "Completed Certifcation from Coursera",
      image: require("./assets/images/databricks.png"),
      imageAlt: "databricks",
      footerLink: [
        {name: "Certification", 
        url: "https://www.coursera.org/account/accomplishments/verify/KHBY7HFJKXZ6"
      }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(306) 351-9777",
  email_address: "syedfaisaljaved@gmail.com"
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
  isHireable
};

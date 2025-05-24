import { 
  ProjectType, 
  ExperienceType, 
  EducationType, 
  SkillType, 
  AchievementType, 
  SocialLinkType 
} from '../types';

export const projectData: ProjectType[] = [
  {
    id: 1,
    title: "Student Management System",
    description: "A comprehensive console-based system for managing student records and book inventory.",
    detailedDescription: "Developed a Java console application that provides robust management of student records and library resources. The system includes advanced features for book management, user authentication, and reporting capabilities.",
    technologies: ["Java", "OOP", "File I/O", "Collections Framework"],
    features: [
      "Book Management – Add, update, delete, and search books based on title, author, genre, or ISBN",
      "User Management – Maintain records of students/members, including their borrowing history and fines",
      "Authentication system for secure access",
      "Data persistence using file storage"
    ],
    github: "https://github.com/pranjalibhatt/student-management-system",
    image : "../img/pngwing.png"
  }
];

export const experienceData: ExperienceType[] = [
  {
    id: 1,
    company: "SAMYAK COMPUTER CLASSES",
    position: "Core Java Trainee",
    duration: "Aug 16, 2024 - Sept 30, 2024",
    description: "Completed intensive training in Core Java development fundamentals.",
    details: [
      "Learned basic syntax of Core Java",
      "Mastered the fundamentals of Object Oriented Programming",
      "Created a console based student management system",
      "Implemented data structures and algorithms using Java"
    ],
    technologies: ["Java", "OOP", "Data Structures", "Algorithms"]
  }
];

export const educationData: EducationType[] = [
  {
    id: 1,
    institution: "M. L. V. Textile and Engineering College (RTU)",
    degree: "Bachelor of Technology - Computer Science Engineering (IoT)",
    duration: "2022 - 2026",
    description: "Pursuing B.Tech with focus on Internet of Things and Computer Science fundamentals.",
    details: [
      "Coursework includes Data Structures, Algorithms, Database Management Systems, and IoT Technologies",
      "Active participant in college technical events and workshops",
      "Member of the college coding club"
    ]
  },
  {
    id: 2,
    institution: "A'S Steward Morris School Bhilwara",
    degree: "Senior Secondary Education",
    duration: "2021 - 2022",
    description: "Completed senior secondary education with focus on science and mathematics."
  },
  {
    id: 3,
    institution: "A'S Steward Morris School Bhilwara",
    degree: "Secondary Education",
    duration: "2019 - 2020",
    description: "Completed secondary education with distinction in core subjects."
  }
];

export const skillsData: SkillType[] = [
  { name: "HTML", level: 85, category: "frontend" },
  { name: "CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "Express", level: 60, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "Figma", level: 65, category: "design" },
  { name: "RESTful API", level: 70, category: "backend" }
];

export const achievementsData: AchievementType[] = [
  {
    id: 1,
    title: "Creator of the Year",
    description: "Awarded 'Creator of the Year' for the Best Project at CreateX Intercollege Tech Event",
    date: "2023",
    icon: "Trophy"
  }
];

export const socialLinks: SocialLinkType[] = [
  {
    platform: "GitHub",
    url: "https://github.com/pranjalibhatt",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/pranjalibhatt",
    icon: "Linkedin"
  },
  {
    platform: "Email",
    url: "mailto:pranjalibhatt09@gmail.com",
    icon: "Mail"
  }
];

export const personalInfo = {
  name: "Pranjali Bhatt",
  title: "Core Java Developer",
  summary: "Core Java Developer with strong expertise in object-oriented programming, data structures, and algorithms. Experienced in building scalable applications using Java, multithreading, and database management.",
  address: "C-256, Near Gopal Dairy Sanjay Colony, Bhilwara",
  phone: "+91 8769531371",
  email: "pranjalibhatt09@gmail.com",
  softSkills: ["Leadership", "Teamwork", "Critical Thinking"]
};
import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'aadityasahu1203@gmail.com',

    emailSubject: "Let's collaborate",
    emailBody: 'Hi Aaditya, I am reaching out to you because...',

    oldPortfolio: '#',
    upworkProfile: '#',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/aadicoder1' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/aaditya-kumar-sahu-aadicoder/'},
    { name: 'instagram', url: 'https://www.instagram.com/aaditya.sahuu/'},
];

export const MY_STACK = {
    languages: [
        {
            name:'Java',
            icon:'/logo/java.webp'
        },
        {
            name:'Python',
            icon:'/logo/python.webp'
        },
        {
            name:'C',
            icon:'/logo/C.webp'
        },
        {
            name:'C++',
            icon:'/logo/cpp.webp'
        },
    ],
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'FastAPI',
            icon: '/logo/fastapi.webp',
        },
        {
            name: 'Django',
            icon: '/logo/django.jpg',
        },
        {
            name: 'Flask',
            icon: '/logo/Flask_logo.svg.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [

    {
    title: 'EduMind',
    slug: 'edumind',
    techStack: [
        'Spring Boot',
        'React',
        'Tailwind CSS',
        'PostgreSQL',
        'Supabase',
        'Groq AI',
        'Docker',
        'AWS EC2',
        'GitHub Actions',
        'JWT',
    ],
    thumbnail: '/projects/thumbnail/edumind.png',
    longThumbnail: '/projects/long/edumind.png',
    images: [
        '/projects/images/edumind-1.webp',
        '/projects/images/edumind-2.webp',
    ],
    liveUrl: 'https://edumind.vercel.app/', // replace with your hosted link
    year: 2026,
    description: `
    EduMind is a full-stack AI-powered study assistant built for Indian university students to study smarter.
    Upload your PDFs or images and EduMind automatically generates summaries, flashcards, and lets you chat
    with your own notes — all powered by Groq's LLaMA 3.3 70B model. <br/><br/>

    Key Features:<br/>
    <ul>
        <li>🤖 AI Summarization: Auto-generate concise summaries from uploaded notes</li>
        <li>🃏 Flashcard Generation: AI creates flashcards for quick revision</li>
        <li>💬 Chat with Notes: ChatGPT-style persistent conversations per note</li>
        <li>📂 Smart Organization: Notes organized by Course → Year → Semester → Subject → Chapter</li>
        <li>🌍 Community: Browse and learn from other students' public notes</li>
        <li>🔐 Google OAuth + JWT: Secure one-click login with token-based authentication</li>
        <li>🐳 Docker + CI/CD: Containerized deployment with automated GitHub Actions pipeline</li>
    </ul><br/>

    Technical Highlights:<br/>
    <ul>
        <li>Spring Boot REST API deployed on AWS EC2 via Docker</li>
        <li>React + Tailwind CSS frontend deployed on Vercel</li>
        <li>Groq AI (LLaMA 3.3 70B) for summarization, flashcards, and context-aware chat</li>
        <li>AI outputs cached in PostgreSQL to avoid redundant API calls</li>
        <li>Supabase for PostgreSQL database and file storage</li>
        <li>Automated CI/CD pipeline using GitHub Actions</li>
    </ul>
    `,
    role: `
    Full-Stack Developer <br/>
    Led the complete design, development, and deployment of the platform:
    <ul>
        <li>🧩 Designed the full database schema across users, subjects, chapters, notes, AI outputs, and chat messages</li>
        <li>⚙️ Built Spring Boot REST API with Google OAuth2, JWT authentication, and role-based access</li>
        <li>🤖 Integrated Groq AI for summarization, flashcard generation, and multi-turn note chat</li>
        <li>🎨 Developed React + Tailwind frontend with ChatGPT-style conversation sidebar</li>
        <li>🐳 Containerized backend with Docker and deployed on AWS EC2 with GitHub Actions CI/CD</li>
    </ul>
    `,
},
    {
    title: 'KMRL DMS',
    slug: 'kmrl-dms',
    techStack: [
        'FastAPI',
        'SQLite',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'FastAPI-Mail',
    ],
    thumbnail: '/projects/thumbnail/kmrl.png', 
    longThumbnail: '/projects/long/kmrl.png',
    images: [
        '/projects/images/kmrl-smartdocs-1.webp',
        '/projects/images/kmrl-smartdocs-2.webp',
    ],
    liveUrl: 'https://kmrl-smartdocs-demo.vercel.app/', // replace with your hosted link
    year: 2025,
    description: `
    KMRL SmartDocs is a digital document management system designed for Kochi Metro Rail Limited to streamline internal workflows and documentation. 
    It enables secure upload, approval, and retrieval of organizational files within an easy-to-use dashboard. <br/><br/>
    
    Key Features:<br/>
    <ul>
        <li>📂 Document Upload & Management: Secure document storage with categorized folders</li>
        <li>🧾 Approval Workflow: Role-based verification and approval for submitted files</li>
        <li>🔐 Authentication System: Login-based access for admins and staff</li>
        <li>📧 Email Alerts: Automatic mail notifications for document status updates</li>
        <li>📱 Responsive Dashboard: Simple, accessible interface for all devices</li>
    </ul><br/>

    Technical Highlights:<br/>
    <ul>
        <li>Developed backend in FastAPI with SQLite for lightweight, efficient data handling</li>
        <li>Implemented file upload and role-based document approval modules</li>
        <li>Used FastAPI-Mail for automated notifications</li>
        <li>Ensured mobile responsiveness and cross-browser compatibility</li>
    </ul>
    `,
    role: `
    Full-Stack Developer <br/>
    Led the complete development and deployment process:
    <ul>
        <li>🧩 Designed the database schema for document and user management</li>
        <li>⚙️ Built secure FastAPI routes for uploading, approving, and retrieving documents</li>
        <li>🎨 Developed the frontend using HTML, CSS, and Bootstrap for a clean layout</li>
        <li>📧 Integrated FastAPI-Mail for real-time notifications</li>
        <li>🚀 Deployed and tested across environments ensuring performance and reliability</li>
    </ul>
    `,
},
    {
    title: 'SocioSphere',
    slug: 'sociosphere',
    liveUrl: 'https://sociosphere-eh34.onrender.com/', 
    year: 2025,
    description: `
    A community-driven platform that connects NGOs and individuals to collaborate on social causes and local issue resolution. <br/><br/>
    
    Key Features:<br/>
    <ul>
      <li>📍 Issue Reporting: Users can report social or environmental issues with location, description, and image support</li>
      <li>🏢 NGO Dashboard: NGOs can view, manage, and mark issues as resolved</li>
      <li>🎉 Event Management: NGOs can post and manage upcoming events</li>
      <li>👤 Dual Interfaces: Separate user and NGO panels with authentication</li>
      <li>🔍 Search & Filters: Find issues or events by keywords or location</li>
      <li>📬 Email Notifications: Automated alerts to NGOs for new reports</li>
    </ul><br/>
    
    Technical Highlights:
    <ul>
      <li>Integrated Flask backend with SQLite for structured data management</li>
      <li>Implemented authentication using Flask-Login and Werkzeug</li>
      <li>Designed responsive layouts with Tailwind CSS</li>
      <li>Optimized routes and templates for smoother navigation</li>
      <li>Planned modular code structure for scalability</li>
    </ul>
    `,
    role: `
    Full-Stack Developer <br/>
    Owned end-to-end design and development:
    <ul>
      <li>🧠 Concept & Architecture: Designed database schema and feature flow</li>
      <li>⚙️ Backend: Developed REST routes, authentication, and CRUD features using Flask</li>
      <li>🎨 Frontend: Built user and NGO interfaces with HTML, CSS, and Jinja templates</li>
      <li>📊 Database: Managed persistent data with SQLite</li>
      <li>☁️ Deployment: Configured project for web hosting (Vercel/Render planned)</li>
      <li>🚧 Future Scope: Admin panel, maps integration, and push notifications</li>
    </ul>
    `,
    techStack: [
        'Flask',
        'SQLite',
        'Flask-Login',
        'Werkzeug',
        'Tailwind CSS',
        'HTML',
        'Jinja2'
    ],
    thumbnail: '/projects/thumbnail/sociosphere.jpeg', // replace with your image path
    longThumbnail: '/projects/long/sociosphere.jpeg',
    images: [
        '/projects/images/sociosphere-1.webp',
        '/projects/images/sociosphere-2.webp',
    ],
},

{
    title: 'Echo',
    slug: 'echo',
    techStack: [
        'Django',
        'SQLite',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'Media Handling',
    ],
    thumbnail: '/projects/thumbnail/echo.png', 
    longThumbnail: '/projects/long/echo.png',
    images: [
        '/projects/images/echo-1.jpg',
        '/projects/images/echo-2.jpg',
        '/projects/images/echo-3.jpg',
    ],
    liveUrl: '#', // replace with deployed link if available
    year: 2024,
    description: `
    Echo was my first full-fledged web project — a modern, browser-based music player built using Django. 
    It allows users to upload, manage, and stream their favorite songs seamlessly through a clean and responsive interface. <br/><br/>

    Key Features:<br/>
    <ul>
        <li>🎵 Upload and stream audio files directly from the browser</li>
        <li>📂 Playlist management with create/edit/delete options</li>
        <li>⏯️ Custom audio player with play, pause, next, and shuffle controls</li>
        <li>🎧 Responsive design optimized for both desktop and mobile</li>
        <li>🧠 Metadata extraction for track details like title, artist, and duration</li>
    </ul><br/>

    Technical Highlights:<br/>
    <ul>
        <li>Developed using Django with SQLite for data storage</li>
        <li>Implemented secure file uploads and media management</li>
        <li>Used Bootstrap and JavaScript for responsive player UI</li>
        <li>Optimized server-side logic for smooth streaming experience</li>
    </ul>
    `,
    role: `
    Full-Stack Developer <br/>
    <ul>
        <li>🎶 Built the project from scratch as my first step into web development</li>
        <li>⚙️ Implemented backend logic using Django models and views</li>
        <li>💾 Designed database models for users, playlists, and tracks</li>
        <li>🎨 Styled frontend using Bootstrap and custom CSS</li>
        <li>🚀 Deployed a functional prototype for local streaming</li>
    </ul>
    `,
}
,
    
];

export const MY_EXPERIENCE = [  
    {
        title: 'Developer (Part-time)',
        company: 'GDG GLBITM (College club)',
        duration: 'Oct 2025 - May 2026',
    },
];

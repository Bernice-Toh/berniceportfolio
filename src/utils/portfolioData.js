/* Shared portfolio data: the section/route map and the full project list.
   Used by the router shell, the QuickJump panel and the Projects page.
   Content source: "Portfolio Information.docx" (June 2026). */

export const SECTIONS = [
  { id: "home", label: "Home", path: "/" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "recognitions", label: "Recognitions", path: "/recognitions" },
  { id: "testimonials", label: "Testimonials", path: "/testimonials" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "education", label: "Education", path: "/education" },
];

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/bernicetohjiayi/",
};

export const PROJECTS = [
  {
    slug: "capstone-threatvision",
    image: "/images/ThreatVision%20%E2%80%94%20AI%20Weapon%20Detection.jpeg",
    title: "ThreatVision — AI Weapon Detection",
    category: "AI / ML",
    accent: "rose",
    tags: ["YOLOv11s", "Computer Vision", "Raspberry Pi", "Python"],
    summary:
      "Capstone project: a real-time, AI-powered weapon detection system pairing a Raspberry Pi body camera with a custom-trained YOLOv11s model.",
    description: [
      "For this Capstone Project, I worked as part of a team to develop ThreatVision, an AI-powered weapon detection system designed to enhance security in public spaces.",
      "The project involved designing and building a solution that combines a Raspberry Pi body camera with a custom-trained YOLOv11s computer vision model to detect potential weapon threats in real time. We collected and labelled image datasets, trained and fine-tuned the AI model, and developed a system that automatically captures detected threats and generates incident reports with AI-generated scene descriptions.",
      "In addition, we created a secure web application featuring a login system and an interactive dashboard, allowing users to review detection results, view incident details, and download reports for record-keeping and investigation purposes.",
      "This project helped me strengthen my skills in artificial intelligence, computer vision, Python programming, system development, and teamwork. It also gave me valuable experience in applying emerging technologies to solve real-world security challenges while considering factors such as usability, security, and ethical responsibility.",
    ],
    highlights: [
      "Collaborated in a team to develop ThreatVision, an AI-powered weapon detection system designed to enhance security in public spaces.",
      "Designed and built a solution that integrates a Raspberry Pi body camera with a custom-trained YOLOv11s computer vision model for real-time weapon detection.",
      "Collected, labelled, and prepared image datasets to train and fine-tune the AI model for improved detection accuracy.",
      "Developed a system that automatically captures detected threats and generates incident reports with AI-generated scene descriptions.",
      "Contributed to the development and testing of the threat detection workflow to ensure reliable real-time performance.",
      "Built a secure web application featuring user authentication, report management, and an interactive dashboard.",
      "Implemented functionalities that allow users to review detection results, view incident details, and download reports for record-keeping and investigation purposes.",
      "Gained practical experience in applying emerging technologies to address real-world security challenges while considering usability, security, and ethical considerations.",
    ],
  },
  {
    slug: "crafted-artt",
    image:
      "/images/Crafted.artt%20%E2%80%94%20Makers%27%20Enterprise%20Challenge%202026.jpeg",
    title: "Crafted.artt — Makers' Enterprise Challenge 2026",
    category: "Business",
    accent: "mauve",
    tags: ["Entrepreneurship", "Marketing", "Finance", "3rd Place · $500"],
    summary:
      "Co-founded a small business selling customised resin keychains, toploaders and phone charms; awarded 3rd place with a $500 cash prize.",
    description: [
      "I participated in the Makers' Enterprise Challenge 2026, an entrepreneurship programme that provides students with the opportunity to develop and launch their own business ventures with seed funding support.",
      "Working as part of a team, we founded Crafted.artt, a small business specialising in customised resin keychains, toploaders, and phone charms. The project involved developing a business proposal, conducting market research, planning product offerings, managing finances, and executing marketing and sales strategies. With the funding provided through the programme, we were able to source materials, create products, and bring our business idea to life.",
      "Throughout the challenge, we engaged with customers, managed orders, and gained hands-on experience in running a business while adapting to market demands. Our efforts were recognised when Crafted.artt was awarded Third Place in the competition, receiving a cash prize of $500.",
      "This project helped me develop valuable skills in entrepreneurship, business development, marketing, financial planning, customer engagement, and teamwork. It also strengthened my ability to turn ideas into practical solutions and gain real-world experience in managing a business from concept to execution.",
    ],
    highlights: [
      "Participated in the Makers' Enterprise Challenge 2026, an entrepreneurship programme that supports students in launching business ventures through seed funding.",
      "Co-founded Crafted.artt, a small business specialising in customised resin keychains, toploaders, and phone charms.",
      "Developed a business proposal, conducted market research, and planned product offerings to establish the business.",
      "Managed budgeting, sourcing of materials, and production processes using the funding provided by the programme.",
      "Executed marketing and sales strategies to attract customers and generate revenue.",
      "Engaged directly with customers, managed orders, and adapted products based on market demand and feedback.",
      "Awarded 3rd Place in the competition, receiving a $500 cash prize in recognition of the team's business performance and innovation.",
    ],
  },
  {
    slug: "wingstop-uiux",
    image:
      "/images/Wingstop%20App%20Kiosk%20UIUX%20Design.png",
    title: "Wingstop App & Kiosk — UI/UX Design",
    category: "UI/UX",
    accent: "mint",
    tags: ["Adobe XD", "Prototyping", "User Research"],
    summary:
      "Designed a mobile app and self-service kiosk interface to streamline Wingstop's dine-in ordering, from low-fi wireframes to hi-fi prototypes.",
    description: [
      "For this project, my team and I focused on enhancing the dining experience at Wingstop by developing a user-friendly mobile app and self-service kiosk interface. The goal was to improve convenience and streamline the ordering process for customers dining in.",
      "Using Adobe XD, we designed both low-fidelity and high-fidelity prototypes to illustrate our design thinking and development process. These wireframes allowed us to visualize and iterate on our ideas effectively, ensuring a smooth and intuitive user experience.",
      "Throughout the project, we applied critical thinking and user-centered design principles. We conducted research to understand the customer journey, identified pain points such as long queues and unclear menus, and used our designs to address these challenges. Our final solutions aimed to make ordering faster, reduce wait times, and improve overall customer satisfaction.",
    ],
    highlights: [
      "Collaborated in a team to design a mobile application and self-service kiosk interface for Wingstop to enhance the customer dining experience.",
      "Used Adobe XD to create both low-fidelity and high-fidelity prototypes, showcasing the design and development process.",
      "Developed wireframes and interactive prototypes to visualise, test, and refine design concepts.",
      "Conducted user research to understand customer behaviours, needs, and pain points throughout the ordering journey.",
      "Identified key challenges such as long queues, unclear menu navigation, and inefficient ordering processes.",
      "Applied user-centred design principles to create intuitive and accessible user interfaces.",
      "Designed solutions aimed at reducing wait times, simplifying ordering, and improving overall customer satisfaction.",
    ],
  },
  {
    slug: "kpop-web",
    image: "/images/K-pop%20Merchandise%20Website.png",
    title: "K-pop Merchandise Website",
    category: "Web",
    accent: "blush",
    tags: ["HTML", "Adobe Dreamweaver", "Web Design"],
    summary:
      "Built a K-pop merchandise sales website from scratch, combining HTML coding with layout, colour and typography design principles.",
    description: [
      "As part of my Web Development module, I was tasked with creating a website using Adobe Dreamweaver, applying the HTML and design principles taught in class. For this project, I chose to design something aligned with my personal interests: a K-pop merchandise sales website.",
      "It allowed me to apply my technical skills in HTML coding while also tapping into creative design thinking. It helped me understand how layout, color schemes, typography, and responsive design contribute to overall user experience. It also sparked my interest in building real-world applications that combine functionality with visual appeal.",
      "By integrating what I learned in class with my personal passion, this project became a meaningful experience that strengthened both my technical and creative web development abilities.",
    ],
    highlights: [
      "Developed a K-pop merchandise sales website as part of the Web Development module.",
      "Utilised Adobe Dreamweaver and HTML to design and build a functional website from scratch.",
      "Applied web design principles to create an engaging and visually appealing user interface.",
      "Incorporated elements such as layout design, colour schemes, typography, and navigation to enhance the user experience.",
      "Explored how responsive design and visual presentation contribute to usability and accessibility.",
      "Strengthened skills in web development, HTML, user interface design, problem-solving, and creative thinking.",
    ],
  },
  {
    slug: "nlp-sentiment",
    image: "/images/YouTube%20Comment%20Sentiment%20Analysis.jpg",
    title: "YouTube Comment Sentiment Analysis",
    category: "AI / ML",
    accent: "rose",
    tags: ["Python", "NLP", "TensorFlow/Keras", "TF-IDF"],
    summary:
      "End-to-end NLP pipeline classifying YouTube comments as positive, negative or neutral, comparing classic ML against a neural network.",
    description: [
      "As part of my Natural Language Processing (NLP) module, I worked on a project that involved analyzing and predicting the sentiment of YouTube comments using Python in Visual Studio Code. The objective was to classify each comment as positive, negative, or neutral, based on its textual content.",
      "To complete this task, I applied foundational NLP techniques such as text preprocessing (including tokenization, stop word removal, and lemmatization), followed by feature extraction using methods like TF-IDF. The project required us to implement and compare two different machine learning models for sentiment prediction, one of which had to be a Neural Network. For this, I used TensorFlow/Keras to build and train a basic feedforward neural network model.",
      "This project gave me hands-on experience in the end-to-end NLP pipeline, from preparing raw text data to training models and interpreting results. It also taught me how different algorithms perform on the same dataset and how to evaluate their accuracy and effectiveness using metrics such as precision, recall, and F1-score.",
    ],
    highlights: [
      "Developed a sentiment analysis system to classify YouTube comments as positive, negative, or neutral using Python.",
      "Applied key NLP techniques including tokenization, stop word removal, and lemmatization to preprocess textual data.",
      "Performed feature extraction using TF-IDF to transform text into machine-readable data.",
      "Implemented and compared two machine learning models for sentiment prediction, including a Neural Network model.",
      "Built and trained a feedforward neural network using TensorFlow/Keras for text classification tasks.",
      "Evaluated model performance using metrics such as accuracy, precision, recall, and F1-score.",
      "Gained hands-on experience with the complete NLP workflow, from data preprocessing and feature engineering to model training and evaluation.",
    ],
  },
  {
    slug: "traffic-sign-cv",
    image: "/images/Traffic%20Sign%20Recognition.jpg",
    title: "Traffic Sign Recognition",
    category: "AI / ML",
    accent: "rose",
    tags: ["Python", "OpenCV", "CNN", "TensorFlow/Keras"],
    summary:
      "Trained a CNN to recognise Stop and U-turn signs, simulating how a self-driving vehicle detects and responds to road signs.",
    description: [
      "As part of my Computer Vision module, I developed a project that focused on recognizing traffic signs, specifically Stop and U-turn signs, using Python in Visual Studio Code. The goal was to simulate how a self-driving vehicle would detect and respond to essential road signs, contributing to the broader application of AI in autonomous driving systems.",
      "In this project, I applied the core concepts of computer vision, including image preprocessing, feature extraction, and classification. Using libraries such as OpenCV and TensorFlow/Keras, I trained a model to recognize and classify images of traffic signs. The process involved collecting and preparing datasets, converting images to grayscale, applying filters, and using data augmentation techniques to improve model performance and generalization.",
      "A convolutional neural network (CNN) was used as the primary model due to its effectiveness in image classification tasks. The model was trained to distinguish between stop and U-turn signs with the aim of achieving high accuracy and reliability.",
    ],
    highlights: [
      "Developed a traffic sign recognition system to identify Stop and U-turn signs using Python.",
      "Simulated how autonomous vehicles detect and respond to essential road signs in real-world driving environments.",
      "Applied computer vision techniques such as image preprocessing, feature extraction, and image classification.",
      "Used OpenCV to process images, including grayscale conversion, filtering, and image enhancement.",
      "Applied data augmentation techniques to improve model accuracy, robustness, and generalisation.",
      "Built and trained a Convolutional Neural Network (CNN) using TensorFlow/Keras for traffic sign classification.",
      "Evaluated and optimised the model to improve recognition accuracy and reliability.",
    ],
  },
  {
    slug: "adidas-reel",
    image: "/images/Adidas%20Short-form%20Video%20Ad.jpg",
    title: "Adidas Short-form Video Ad",
    category: "Media",
    accent: "peach",
    tags: ["CapCut", "Instagram Reels", "Storyboarding"],
    summary:
      "Produced a 30–60 second Instagram Reels advertisement for Adidas, edited in CapCut with brand-consistent, high-energy visuals.",
    description: [
      "As part of my Video Creation for Social Media module, I was tasked with producing a short-form video advertisement designed specifically for platforms like Instagram Reels. The objective was to promote a brand through engaging visuals, keeping the video length between 30 to 60 seconds to align with social media best practices.",
      "For this project, I chose to create an advertisement reel for Adidas, focusing on its brand identity, lifestyle appeal, and athletic performance. I used CapCut for the entire video editing process, applying transitions, effects, text overlays, and synchronized background music to create a dynamic and eye-catching final product.",
      "Throughout the project, I applied key concepts such as storyboarding, audience targeting, brand consistency, and editing for impact. I ensured that the reel aligned with Adidas' branding by using high-energy visuals, motivational captions, and a tone that resonates with active and style-conscious viewers.",
    ],
    highlights: [
      "Produced a short-form video advertisement for Adidas as part of the Video Creation for Social Media module.",
      "Created content specifically for social media platforms such as Instagram Reels, following industry best practices for short-form video content.",
      "Used CapCut to edit and produce a 30–60 second promotional video.",
      "Applied video editing techniques including transitions, visual effects, text overlays, and synchronised background music to enhance viewer engagement.",
      "Developed a storyboard and content plan to ensure a clear and impactful message.",
      "Incorporated Adidas' brand identity through high-energy visuals, motivational messaging, and a consistent visual style.",
      "Applied digital marketing concepts such as audience targeting, brand consistency, and content optimisation for social media platforms.",
    ],
  },
  {
    slug: "apple-infographic",
    image: "/images/Apple%20Inc.%20Infographic.png",
    title: "Apple Inc. Infographic",
    category: "Media",
    accent: "peach",
    tags: ["Canva", "Data Visualisation", "Marketing"],
    summary:
      "Designed a clean, minimalist infographic on Apple's key products and revenue trends, reflecting the brand's visual identity.",
    description: [
      "For this project, I applied what I learned from my Infographics for Presentation & Marketing module to design an infographic for Apple Inc.",
      "Using Canva, I created a clean and professional layout that highlights Apple's key products and revenue trends.",
      "The infographic was designed to reflect Apple's minimalist brand style while presenting information in a visually engaging and easy-to-understand format. This project helped me improve my skills in visual and layout design, and turning data into effective marketing content.",
    ],
    highlights: [
      "Designed an infographic for Apple Inc. as part of the Infographics for Presentation & Marketing module.",
      "Used Canva to create a clean, professional, and visually appealing infographic layout.",
      "Researched and presented information on Apple's key products and revenue trends.",
      "Applied design principles such as visual hierarchy, colour selection, and layout organisation to improve readability.",
      "Incorporated Apple's minimalist brand style to create a consistent and engaging visual presentation.",
      "Transformed data and information into an easy-to-understand format for effective communication.",
    ],
  },
  {
    slug: "dmt-sustainability",
    image: "/images/Sustainability%20Short%20Video.jpg",
    title: "Sustainability Short Video",
    category: "Media",
    accent: "peach",
    tags: ["CapCut", "Photography", "Storyboarding"],
    summary:
      "Planned, shot and edited a short awareness video on sustainability using original photography and a structured storyboard.",
    description: [
      "For this project, I applied what I learned from my Digital Media Technologies (DMT) module to create a short video on sustainability.",
      "Using CapCut, I developed a storyboard to plan the sequence of scenes and visual content before producing the final video. I then went out to capture the necessary photographs and edited them into a video format, incorporating transitions, timing, and other editing techniques to create an engaging and coherent narrative.",
      "The video was designed to raise awareness about sustainability while presenting information in a visually appealing and easy-to-understand manner. This project helped me improve my skills in storyboarding, photography, video editing, and visual storytelling.",
    ],
    highlights: [
      "Created a short video on sustainability using CapCut as part of the Digital Media Technologies (DMT) module.",
      "Developed a detailed storyboard to plan the sequence of scenes and visual content before production.",
      "Captured original photographs to support the sustainability theme and convey key messages effectively.",
      "Edited and assembled the photographs into a video format using transitions, timing adjustments, and other video editing techniques.",
      "Applied principles of visual storytelling to create a coherent and easy-to-understand narrative.",
      "Strengthened skills in storyboarding, photography, video editing, multimedia production, and visual communication.",
    ],
  },
  {
    slug: "sustainability-rpa",
    image: "/images/Sustainability%20Digitalisation%20Challenge.jpeg",
    title: "Sustainability Digitalisation Challenge",
    category: "Automation",
    accent: "mint",
    tags: ["RPA", "IoT Sensors", "Process Optimisation"],
    summary:
      "Designed an RPA + sensor automation system that optimises rubbish transport logistics, cutting vehicle trips and carbon footprint.",
    description: [
      "Developed a viable automation system using RPA and physical sensor technology to optimise rubbish transport logistics. By maximising load capacity per trip, the system reduces the number of vehicle runs needed, cutting both the carbon footprint and the environmental impact of waste collection.",
    ],
    highlights: [
      "Developed an automated waste management solution using Robotic Process Automation (RPA) and physical sensor technology.",
      "Designed a system to optimise rubbish transport logistics and improve operational efficiency.",
      "Utilised sensors to monitor waste levels and support data-driven collection processes.",
      "Increased load capacity utilisation for each collection trip to maximise transport efficiency.",
      "Reduced the number of vehicle trips required for waste collection operations.",
      "Contributed to lowering carbon emissions and minimising the environmental impact of waste management activities.",
      "Strengthened skills in RPA, process optimisation, automation system design, and sustainable technology solutions.",
    ],
  },
];

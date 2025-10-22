//Having this file allows us to keep all the data in on e place, allowing for easy modification of data as needed

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize UX in my applications, curating digital experiences",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
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
      title: "Tech enthusiast with a passion for building.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a SparkNotes for AI-Research Papers",
      description: "The Inside Scoop",
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
      title: "Apex SAT - Full Stack SAT Prep Platform",
      des: "Built full-stack SAT prep platform with React + TypeScript and Supabase for 40+ students",
      img: "Apex.jpeg",
      iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
       links: [
        {title: "Demo Video", url: "https://github.com/blu3542/query_gpt"}
      ]
    },
    {
      id: 2,
      title: "ChatDB - Natural Language Database Interface",
      des: "CLI application enabling natural language queries across MySQL and MongoDB using Google Gemini API",
      img: "CLI.jpg",
      iconLists: ["/python-3.svg", "/mysql.svg", "/mongodb.svg"],
      links: [
        {title: "GitHub", url: "https://github.com/blu3542/query_gpt"}
      ]
    },
    {
      id: 3,
      title: "Melanoma Detection Model",
      des: "Built ensemble melanoma detection system combining XGBoost and TensorFlow CNN, achieving ROC-AUC 0.92",
      img: "ML_model.jpg",
      iconLists: ["/python-3.svg"],
      links: [
        {title: "GitHub", url: "https://github.com/rjordonez/10x-uci-datathon"}
      ]
    },
    {
      id: 4,
      title: "STOQ - AI-Driven Inventory Management",
      des: "AI-driven inventory management system for small businesses with Firebase backend",
      img: "FinanceTracker.png",
      iconLists: ["/python-3.svg", "/firebase.png"],
      links: [
        { title: "Demo Video", url: "https://youtu.be/WXz3Cs176bE" },
        { title: "Demo Video 2", url: "https://youtu.be/Eu_7O4HJAuA" } // Add your second link URL here
      ]
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "AI DevOps Intern - Paramount",
      desc: "Integrating ML-based anomaly detection model into CI/CD pipelines, reducing production errors by 10%. Managed infrastructure access via Terraform, cutting access request turnaround time by 30%.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "AI Engineer Intern - Unilever (Contracted through Infosys)",
      desc: "Created multi-language transcription tool across 50+ languages. Optimized keyword generation from audio utilizing Azure AI studio, increasing accuracy by 25%.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Co-Founder | Backend Engineer - STOQ",
      desc: "Spearheaded development of AI-driven inventory management system for small businesses. Created ML discount algorithm in Python based on product information, reducing spoilage costs by 15%.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Director of Digital Content - The 988 Initiative",
      desc: "Led development and deployment of website for mental health charity",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/blu-445984217/"
    },
    {
      id: 2,
      img: "/git.svg",
      link: "https://github.com/blu3542"
    }
  ];


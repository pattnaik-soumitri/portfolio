export const siteConfig = {
  name: "Soumitri Pattnaik",
  title: "Principal Software Engineer & Tech Enthusiast",
  description: "Portfolio website of Soumitri Pattnaik",
  accentColor: "#1d4ed8",
  social: {
    email: "soumitri@picogeeks.com",
    linkedin: "https://linkedin.com/in/soumitri-pattnaik",
    twitter: "https://x.com/biki636",
    github: "https://github.com/pattnaik-soumitri",
  },
  aboutMe: [
    "I build distributed systems, data insgestion systems, microservice backends, web & desktop applications using Cloud, Kubertestes and Full-Stack technologies — brining over 12 years of industry experience and a genuine passion for clean design, automation, developer productivity and tech in general.",
    "Outside of work, I love building tools that simplify real-world workflows, exploring everything from cloud architectures and system designs to Linux setups, Raspberry Pis, developer tooling - and yes, I'm always up for a good chat about tech, gadgets, or games.",
    "Building since 2008",
  ],
  skills: {
    architecture: ["Distribute Systems", "Data Ingestion", "Microservice Backends", "Event Driven", "Cloud Native", "Serverless", "Full-Stack", "Desktop"],
    cloud: ["Google Cloud Platform", "PubSub", "Dataflow", "BigQuery", "GKE", "Composer", "Cloud Function", "Cloud Run", "CloudSQL", "Cloud Storage", "Cloud Scheduler", "Cloud Memorystore", "IAM", "AWS", "EC2", "Lambdas", "S3", "RDS", "Aurora", "Firebase", "Firestore", "Supabase", "Pocketbase"],
    devOps: ["Kubernetes", "Docker", "Containerd", "Jenkins", "Github CI", "ArgoCD", "Linux", "Shell", "Raspberry Pi", "SSH"],
    programmingLanguage: ["Java", "JavaScript", "TypeScript", "Python", "Go"],
    backend: ["Spring Boot", "Express", "Nest JS", "Apache Beam", "Apache Airflow", "Flask"],
    frontend: ["Vue 3", "Astro", "Angular", "Electron", "Go Wails", "Alpine.js", "HTML", "CSS", "Markdown", "Bootstrap", "Bulma", "PicoCss"],
    database: ["MySQL", "Postgres", "BigQuery", "SQLite", "MongoDB", "Cassandra", "Redis", "Spanner"],
    messaging: ["PubSub", "Kafka", "Redpanda", "RabbitMQ", "EMQX"],
  },

  projects: [
    {
      name: "DevKube: Kubernetes at your fingertips",
      description: "Cross-platform desktop app that brings Kubernetes to your fingertips — perform common kubectl operations, view services, and manage clusters with a single click.",
      link: "https://github.com/pattnaik-soumitri/DevKube",
      skills: ["Electron", "Node.js", "Shell", "Bulma", "kubectl"],
    },
    {
      name: "Weretro: Run team retros in seconds",
      description:
        "Run team retros in seconds — no sign-ups, no setup, just reflect and share.",
      link: "https://weretro.in",
      skills: ["Vue 3", "Pocketbase", "PicoCSS"],
    },
    {
      name: "AUS Orders: Order placement system for a pharmacutical comapny",
      description: "Cross-platform desktop app that brings Kubernetes to your fingertips — perform common kubectl operations, view services, and manage clusters with a single click.",
      link: "https://github.com/pattnaik-soumitri/DevKube",
      skills: ["Vue 3", "Firebase", "Firestore", "Chart.js", "PicoCSS"],
    },
    {
      name: "Redish-UI: Serverless Redis GUI for private Redis instances",
      description:
        "A serverless Redis GUI that connects securely to private Redis instances via their VPC — no public exposure, no extra setup.",
      link: "https://github.com/Redish-UI/redish-ui",
      skills: ["Alpine.js", "PicoCSS", "Serverless", "Edge Function"],
    },
  ],
  experience: [
    {
      company: "Sensormatic, Johnson Controls",
      title: "Principal Software Engineer",
      dateRange: "Mar 2018 - Present",
      bullets: [
        "Tech Lead, building cost-effective, scalable distributed systems, handling data ingestion for 10,000+ IoT sensors.",
        "Led transition from cloud-managed services to Kubernetes-based solutions, cutting cloud costs by 60%.",
        "Migrated long-running streaming jobs to batch processing, reducing GCP costs by 90%.",
        "Partnered with Solution Management to define initiatives, create architectural designs, and lead design walkthroughs."
      ],
    },
    {
      company: "General Electric",
      title: "Senior Software Engineer",
      dateRange: "Nov 2016 - Mar 2018",
      bullets: [
        "Owned the development of a multiple backned services.",
        "Built backend services powering real-time dashboards for locomotive service stations in collaboration with the sensors team — reducing redundant testing and driving $80M in savings in Q2 FY16.",
        "Increased code coverage from ~60% to > 90%, reducing bugs.",
      ],
    },
    {
      company: "Mindfire Solutions",
      title: "Senior Software Engineer",
      dateRange: "Oct 2013 - Oct 2016",
      bullets: [
        "Provided end-to-end development, mainatance, support & consulating for clients in healthcare and e-comerce domain.",
        "Led backend and web development for Caren Remote Patient Monotoring (from inception), integrating with Omoron & iHealth devives to provide real-time  healthcare dashboards.",
        "Enhanced customer experience by modernizing Sales & CRM modules for Optimum Systems with mobile-responsive design, improving on field salesman effecieny.",
      ],
    },
  ],
  education: [
    {
      school: "Biju Patnaik University of Technology",
      degree: "Bachelor of Technology in Computer Science",
      dateRange: "2008 - 2012",
      achievements: [
        "Organized and hosted ECOSS 2011 & 2012, tech event held on Software Freedom Day, promoting open-source awareness.",
        "Led Linux installation drives & Open Source softwares workshops, emabling students to adopt Linux and open-source technologies.",
        "Designed and distributed several tools, including a CGPA calculator, music player, and mini-games, fostering peer learning, collaboration and inspiration.",
      ],
    },
    // {
    //   school: "Online Platform",
    //   degree: "Full Stack Development Certificate",
    //   dateRange: "2019",
    //   achievements: [
    //     "Completed 500+ hours of coursework",
    //     "Built 10+ portfolio projects",
    //     "Specialized in React and Node.js",
    //   ],
    // },
  ],
};

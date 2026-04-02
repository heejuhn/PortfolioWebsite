import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Terminal, 
  Globe, 
  Mail, 
  MapPin, 
  ExternalLink,
  Code2,
  Award,
  Briefcase,
  GraduationCap,
  Database,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

// --- Custom Brand Icons ---
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.1a5.8 5.8 0 0 0-1.6-4.03 5.5 5.5 0 0 0 .15-3.97s-1.3-.4-4 1.5a13.9 13.9 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3a5.5 5.5 0 0 0 .15 3.97A5.8 5.8 0 0 0 1.5 10.3c0 5.6 3.3 6.8 6.5 7.1A4.8 4.8 0 0 0 7 20.4v3.6"/>
    <path d="M8 20.5c-3 1-4-1-5-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// --- Data ---
const PERSONAL_INFO = {
  name: "Connor Yang",
  role: "Data Analytics & Tech Assurance",
  tagline: "leveraging data intelligence and IT governance to drive strategic decisions",
  about: "I'm a senior at the University of California, Riverside, pursuing a B.S. in Computer Science with Business Applications. I specialize at the intersection of data analytics, business intelligence, and IT risk management. From architecting secure relational databases to engineering predictive data pipelines, I focus on ensuring data integrity and leveraging actionable insights to optimize operations.",
  email: "connor.h.yang@gmail.com",
  phone: "(949) 426-2512",
  location: "Riverside, CA",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

const SKILLS = [
  "Data Visualization", "Forecasting", "A/B Testing", "Pandas", "NumPy", 
  "SQL", "Python", "PostgreSQL", "C++", "Machine Learning", "Digital Assurance", 
  "Risk Assessment", "Data Governance", "RBAC", "Project Management"
];

const EDUCATION = [
  {
    school: "University of California, Riverside",
    degree: "B.S., Computer Science with Business Applications",
    minor: "Minor in Management: Organizational Behavior/HR",
    period: "Expected: Fall 2026",
    coursework: ["Data Analysis Methods", "Database Management Systems", "Marketing and Distribution", "Organizational Behavioral Management", "Designing and Leading Teams", "Introduction to Information Retrieval"],
    logo: "/logos/ucr.png"
  }
];

const EXPERIENCE = [
  {
    role: "Junior Account Manager",
    company: "Aflac Incorporated",
    period: "Aug. 2024 – May 2025",
    location: "Remote",
    description: "Analyzed the end-to-end lifecycle of voluntary benefit accounts to understand the operational impact of supplemental insurance on corporate financial wellness.",
    logo: "/logos/aflac.png"
  },
  {
    role: "President & Founder",
    company: "Beta Sigma Mobile Gaming Club",
    period: "Sept. 2025 – Present",
    location: "Remote / UCR",
    description: "Orchestrated the launch of the first mobile gaming organization at UCR, managing end-to-end operations and a core leadership team.",
    logo: "/logos/betasigma.jpg"
  }
];

const PROJECTS = [
  {
    title: "Airline Management System",
    period: "April 2025",
    description: "Architected a relational PostgreSQL database schema and orchestrated a role-based access control (RBAC) framework for 4 distinct user personas, ensuring strict data governance and security for mission-critical airline information.",
    tech: ["PostgreSQL", "Data Governance", "RBAC", "SQL"],
    link: "https://github.com/heejuhn/Airline-DBMS-Project",
    logo: "/logos/ucr.png",
    color: "bg-white/5"
  },
  {
    title: "Intel Sustainability Analysis",
    period: "Aug 2025",
    description: "Analyzed large datasets in Excel to identify high-ROI sustainability opportunities. Evaluated environmental impact data to forecast cost-efficiency metrics, providing strategic business intelligence for corporate sustainability goals.",
    tech: ["Business Intelligence", "Excel", "Data Analysis", "Forecasting"],
    link: "https://docs.google.com/presentation/d/1zv1HwqOSDqR1TW3dgjL_wW-0V0Wq-BAGyizwWSQlyew/edit?usp=sharing",
    logo: "/logos/intel.png",
    color: "bg-white/5"
  },
  {
    title: "Food Insecurity Analysis",
    period: "Jan – Feb 2026",
    description: "Performed comprehensive statistical analysis of student food purchasing behaviors using Python. Engineered a robust data cleaning pipeline for 247 survey responses to prepare for accurate regression analysis and derive actionable insights.",
    tech: ["Python", "Pandas", "NumPy", "Data Pipeline"],
    link: "https://drive.google.com/file/d/1kH8DdM0ewPUfOwSvf5dZk_XQfGRwQM8G/view?usp=sharing",
    logo: "/logos/food-insecurity.png",
    color: "bg-white/5"
  },
  {
    title: "Student Dropout Prediction",
    period: "March 2026",
    description: "Developed a machine learning pipeline using Python and scikit-learn to analyze a 4,424-instance dataset. Implemented clustering to predict academic outcomes, turning raw behavioral data into predictive intelligence.",
    tech: ["Python", "Machine Learning", "Predictive Analytics"],
    link: "https://drive.google.com/file/d/1HvdsocqmgO_9JZoBzSmh3qLSKsyxq_ID/view?usp=sharing",
    logo: "/logos/dropout.png",
    color: "bg-white/5"
  },
  {
    title: "Grammy.com A/B Testing",
    period: "Aug 2025",
    description: "Analyzed A/B test results on social media engagement to make data-driven recommendations for optimal CTA buttons. Developed a targeted ad campaign and produced a comprehensive analytics report.",
    tech: ["A/B Testing", "Marketing Analytics", "Data Analysis"],
    link: "#",
    logo: "/logos/grammy.png",
    color: "bg-white/5"
  },
  {
    title: "Schedule Master",
    period: "Jan - May 2025",
    description: "Led a four-person student team in developing a command-line task management application in C++. Directed system architecture using OOP principles for a modular, maintainable, and scalable codebase.",
    tech: ["C++", "Google Test", "System Architecture"],
    link: "https://github.com/cs100/final-project-cs100-projectteam11-sec024",
    logo: "/logos/ucr.png",
    color: "bg-white/5"
  }
];

const CERTIFICATIONS = [
  { 
    name: "PwC US Digital Assurance & Transparency", 
    issuer: "Forage", 
    year: "2026", 
    logo: "/logos/pwc.png",
    description: "Completed a job simulation focused on client engagement to assess digital processes for PwC's Digital Assurance and Transparency team. Used a workpaper to test sample items to understand if the control is working. Completed a deficiency analysis with information provided by the client."
  },
  { 
    name: "EY Technology Risk Job Simulation", 
    issuer: "Forage", 
    year: "2026", 
    logo: "/logos/ey.png",
    description: "Completed a virtual job simulation involving understanding of typical IT risks and processes for EY’s Tech Risk team. Engaged in practical tasks to improve my relationship building skills, teaming and productivity. Learned the importance of teaming."
  },
  { 
    name: "McKinsey Forward Program", 
    issuer: "McKinsey & Company", 
    year: "In Progress", 
    logo: "/logos/mckinsey.png",
    description: "Forward is a multi-week learning program designed to equip individuals with practical skills to succeed in the future of work. It focuses on essential workplace skills that are relevant and transferable across industries and roles, including adaptability, effective communication, relationship building, structured problem-solving, and digital and AI essentials."
  },
  { 
    name: "Data Visualization Certification", 
    issuer: "The Global Career Accelerator", 
    year: "2025", 
    logo: "/logos/gca.jpg",
    description: "Recipient gained hands-on experience with data analysis and visualization work utilizing Microsoft Excel. Working with large, real-world data sets and a business problem from Intel they analyzed data and made data-driven recommendations to inform business decisions. Professional skills mastered include: communicating with data, understanding business metrics, and presenting findings to stakeholders."
  },
  { 
    name: "AI Professional Skills Certification", 
    issuer: "The Global Career Accelerator", 
    year: "2025", 
    logo: "/logos/gca.jpg",
    description: "Recipient gained practical knowledge of artificial intelligence, including how large language models (LLMs) like ChatGPT function, and how to responsibly and effectively use them in professional settings. Through real-world examples and guided instruction, they explored the use of Gen AI as a tool to complete tasks, a teammate to support problem-solving, and a tutor to guide rapid skill acquisition. Professional skills mastered include: designing effective prompts, evaluating AI-generated content critically, integrating AI into workplace tasks, and understanding how AI is shaping the future of work."
  },
  { 
    name: "UX/UI Prototyping Certification", 
    issuer: "The Global Career Accelerator", 
    year: "2025", 
    logo: "/logos/gca.jpg",
    description: "Recipient gained hands-on experience with UX research and design. Working with a L'Oréal brand, they applied user-centered design principles, and created and user-tested a digital app solution that supports first-time skincare users. Professional skills mastered include: translating research insights into creative ideas, building low-fidelity sketches/wireframes, and gathering feedback through usability testing."
  }
];


// --- High-Performance Animation Hooks ---

const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref); 
      }
    }, options);
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isVisible];
};

const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, isVisible] = useScrollReveal();
  
  const transforms = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "scale-95"
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : `opacity-0 ${transforms[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Premium Magnetic Button Effect
const MagneticButton = ({ children, className = "", href, onClick, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      {...props}
    >
      {children}
    </Component>
  );
};

// Glass Card Component
const GlassCard = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-12 shadow-2xl transition-all duration-500 group ${onClick ? 'cursor-pointer hover:bg-white/[0.06] hover:border-white/[0.2] hover:-translate-y-2' : ''} ${className}`}
  >
    {/* Inner glow effect on hover */}
    {onClick && (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    )}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

// --- UI Components ---

const LiquidBackground = () => (
  <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1] bg-[#030712]">
    {/* Animated Gradient Orbs */}
    <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] bg-indigo-900/40 animate-blob"></div>
    <div className="absolute top-[10%] right-[-20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[120px] bg-purple-900/40 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-[-20%] left-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[150px] bg-cyan-900/30 animate-blob animation-delay-4000"></div>
    
    {/* Subtle Grid Overlay for Tech Vibe */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50"></div>
  </div>
);

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'pt-6' : 'pt-10'}`}>
      <div className={`flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-full ${isScrolled ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl w-[90%] md:w-[600px]' : 'w-full md:px-24 border-transparent'}`}>
        <Reveal delay={100} direction="down" className="flex-shrink-0">
          <a href="#" className="font-futura font-bold text-xl tracking-tighter text-white">hello!</a>
        </Reveal>
        
        {isScrolled && (
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">about</a>
            <a href="#projects" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">works</a>
            <a href="#experience" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">experience</a>
          </div>
        )}

        <Reveal delay={200} direction="down" className="flex-shrink-0 flex items-center gap-6">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:flex text-sm font-medium text-zinc-300 hover:text-white transition-colors items-center gap-2">
            resume
          </a>
          <MagneticButton href="#contact" className="text-sm font-medium text-white px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all">
            let's talk!
          </MagneticButton>
        </Reveal>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 overflow-hidden">
      
      {/* Glow at the top */}
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto w-full z-10 text-center flex flex-col items-center">
        
        <Reveal delay={300}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-sm font-medium text-cyan-100">open to work!</span>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <h1 className="font-futura text-[12vw] md:text-[8rem] lg:text-[9rem] leading-[0.9] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 pb-4">
            connor yang
          </h1>
        </Reveal>

        <Reveal delay={600}>
          <h2 className="text-xl md:text-3xl text-zinc-300 font-light leading-snug tracking-wide max-w-3xl mt-8">
            {PERSONAL_INFO.tagline}
          </h2>
        </Reveal>

        <Reveal delay={800} className="mt-16 flex flex-wrap gap-6 justify-center">
          <MagneticButton href="#projects" className="px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            explore works
          </MagneticButton>
          <MagneticButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
            download resume <ExternalLink size={16} />
          </MagneticButton>
        </Reveal>

      </div>
    </section>
  );
};

const BentoAbout = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <h2 className="font-futura text-4xl md:text-5xl font-bold text-white tracking-tight">profile & stack</h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main About Panel */}
          <Reveal delay={100} className="lg:col-span-7 h-full">
            <GlassCard className="h-full flex flex-col justify-center">
              <Code2 className="text-indigo-400 mb-8" size={32} />
              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed font-light mb-8">
                I'm a senior at UC Riverside specializing at the intersection of <span className="text-white font-medium">data analytics, business intelligence,</span> and <span className="text-white font-medium">IT risk management.</span>
              </p>
              <p className="text-zinc-400 text-sm leading-loose">
                {PERSONAL_INFO.about}
              </p>
            </GlassCard>
          </Reveal>

          {/* Skills Panel */}
          <Reveal delay={200} className="lg:col-span-5 h-full">
            <GlassCard className="h-full flex flex-col">
              <Database className="text-cyan-400 mb-8" size={32} />
              <h3 className="font-futura text-2xl font-bold text-white mb-6">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {SKILLS.map((skill, i) => (
                  <span key={i} className="px-3 py-2 bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const GlassProjects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16">
          <h2 className="font-futura text-4xl md:text-6xl font-bold text-white tracking-tight">
            selected works
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100} className="h-full">
              <GlassCard 
                className="flex flex-col h-full !p-8 md:!p-10"
                onClick={() => project.link !== "#" && window.open(project.link, '_blank')}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="h-20 md:h-24 flex items-center justify-start opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 origin-left">
                    {project.logo ? (
                      <img src={project.logo} alt={project.title} loading="lazy" className="max-h-full max-w-[180px] md:max-w-[200px] object-contain drop-shadow-2xl mix-blend-screen" />
                    ) : (
                      <Code2 size={48} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-colors duration-500">
                    <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-zinc-950 transition-colors duration-500" />
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-sm font-medium text-indigo-400 mb-2">
                    {project.period}
                  </p>
                  <h3 className="font-futura text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <li key={i} className="text-xs font-medium px-3 py-1.5 bg-zinc-900/50 border border-white/5 text-zinc-300 rounded-md">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlassExperience = () => {
  const [expandedCert, setExpandedCert] = useState(null);

  const toggleCert = (index) => {
    if (expandedCert === index) {
      setExpandedCert(null);
    } else {
      setExpandedCert(index);
    }
  };

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Side */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="font-futura text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <Briefcase size={28} className="text-indigo-400" /> experience
              </h2>
            </Reveal>
            
            <Reveal delay={100} className="h-full">
              <GlassCard className="!p-8 md:!p-10 h-full">
                <div className="space-y-12">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-10 group border-l border-white/10 pb-4 last:pb-0 last:border-l-transparent">
                      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-indigo-400 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.8)] transition-all duration-500 ring-4 ring-[#030712]"></div>
                      
                      <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                        {exp.logo && (
                          <div className="flex-shrink-0 flex items-center justify-start group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100">
                            <img src={exp.logo} alt="" loading="lazy" className="h-14 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain mix-blend-screen origin-left" />
                          </div>
                        )}
                        <div className="mt-1">
                          <h3 className="font-futura text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                          <p className="text-sm font-medium text-zinc-400 mt-1">
                            {exp.company} <span className="mx-2 text-white/20">|</span> {exp.period}
                          </p>
                        </div>
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-sm font-light">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Education Side */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="font-futura text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <GraduationCap size={28} className="text-cyan-400" /> education
              </h2>
            </Reveal>
            
            <Reveal delay={200} className="h-full">
              <GlassCard className="!p-8 md:!p-10 h-full">
                <div className="relative pl-8 md:pl-10 group border-l border-white/10">
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 ring-4 ring-[#030712]"></div>
                  
                  <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                    {EDUCATION[0].logo && (
                      <div className="flex-shrink-0 flex items-center justify-start group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100">
                        <img src={EDUCATION[0].logo} alt="" loading="lazy" className="h-14 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain mix-blend-screen origin-left" />
                      </div>
                    )}
                    <div className="mt-1">
                      <h3 className="font-futura text-xl font-bold text-white">{EDUCATION[0].school}</h3>
                      <p className="text-sm font-medium text-zinc-400 mt-1">{EDUCATION[0].period}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-base text-zinc-300 mb-2 font-medium">{EDUCATION[0].degree}</h4>
                  {EDUCATION[0].minor && <p className="text-sm text-zinc-500 mb-6">{EDUCATION[0].minor}</p>}
                  
                  <div>
                    <h5 className="text-sm font-medium text-cyan-400 mb-3">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {EDUCATION[0].coursework.map((course, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium rounded-lg">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        {/* Certifications Spanning Horizontally with Accordion Expansion */}
        <Reveal delay={300}>
          <GlassCard className="!p-8 md:!p-10 w-full">
            <h3 className="font-futura text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award size={24} className="text-purple-400" /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {CERTIFICATIONS.map((cert, index) => {
                const isExpanded = expandedCert === index;
                return (
                  <div 
                    key={index} 
                    onClick={() => toggleCert(index)}
                    className="flex flex-col gap-4 group p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer h-fit"
                  >
                    <div className="flex items-center gap-5 w-full">
                      <div className="flex items-center justify-start flex-shrink-0 group-hover:scale-105 transition-transform duration-300 w-12 md:w-16">
                        {cert.logo ? (
                          <img src={cert.logo} alt="" loading="lazy" className="h-10 md:h-12 w-auto max-w-full object-contain mix-blend-screen opacity-80 group-hover:opacity-100 origin-left" />
                        ) : (
                          <Award size={32} className="text-zinc-500 group-hover:text-white" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-zinc-200 text-sm leading-tight group-hover:text-white transition-colors mb-1">{cert.name}</h4>
                        <p className="text-xs text-zinc-400 font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex-shrink-0 pl-2">
                        <ChevronDown size={20} className={`text-zinc-500 group-hover:text-white transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : ''}`} />
                      </div>
                    </div>
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-sm text-zinc-300 leading-relaxed font-light pb-2 pt-4 border-t border-white/10">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </Reveal>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 lg:px-24 text-white overflow-hidden relative border-t border-white/5 z-10">
      
      {/* Glow at the bottom */}
      <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <Reveal>
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-12 backdrop-blur-xl">
            <Mail size={24} className="text-indigo-400" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <MagneticButton href={`mailto:${PERSONAL_INFO.email}`}>
            <h2 className="font-futura text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 hover:to-white transition-all duration-500 leading-none">
              get in touch
            </h2>
          </MagneticButton>
        </Reveal>

        <Reveal delay={400} className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/10 gap-6 mt-16">
            <div className="flex gap-8">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
                <Mail size={16} className="group-hover:scale-110 transition-transform" /> gmail
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
                <GithubIcon size={16} className="group-hover:scale-110 transition-transform" /> github
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
                <LinkedinIcon size={16} className="group-hover:scale-110 transition-transform" /> linkedin
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> resume
              </a>
            </div>
            <div className="text-slate-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}.
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          html, body {
            scroll-behavior: smooth;
            background-color: #030712; 
            color: #f4f4f5;
          }
          
          /* Keeping the nice clean sans-serif for standard text */
          .font-sans, body { 
            font-family: 'Inter', system-ui, -apple-system, sans-serif !important; 
          }
          
          /* Applying custom Futura to headers via className */
          .font-futura {
            font-family: 'MyCustomFutura', 'Futura Maxi CG Bold', 'Futura', 'Trebuchet MS', sans-serif !important;
          }

          .will-change-transform {
            will-change: transform, opacity;
          }

          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 20s infinite alternate ease-in-out;
            will-change: transform;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
      
      <LiquidBackground />

      <div className={`transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <NavBar />
        <main>
          <Hero />
          <BentoAbout />
          <GlassProjects />
          <GlassExperience />
        </main>
        <Footer />
      </div>
    </>
  );
}
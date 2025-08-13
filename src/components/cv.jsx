import './cvStyle.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaLaptopCode, FaTools } from 'react-icons/fa';
import { TbWorldCode } from "react-icons/tb";

export default function CV() {
  const personalInfo = {
    name: "Cesar Obeth Flores",
    title: "Ingeniero en Sistemas",
    email: "cofloresf12@gmail.com",
    phone: "+504 8793-8413",
    location: "Honduras",
    github: "CoFlores-12",
    linkedin: "cofloresf",
    portafolio: "https://cofloresf.vercel.app/",
    about: "Ingeniero en Sistemas con 2 años de experiencia en desarrollo fullstack. Especializado en NextJS, React y desarrollo de aplicaciones empresariales. Apasionado por crear soluciones tecnológicas innovadoras.",
  };

  const education = [
    {
      institution: "Universidad Nacional Autónoma de Honduras",
      degree: "Ingeniería en Sistemas",
      period: "2020 - 2025",
      description: "Formación en ingeniería de software, bases de datos, redes y gestión de proyectos."
    },
    {
      institution: "Instituto Evangélico Hosanna",
      degree: "Bachillerato Técnico Profesional en informática",
      period: "2017 - 2019",
      description: "Educación técnica con enfoque en informática y desarrollo de software."
    }
  ];

  const experience = [
    {
      company: "Freelance",
      position: "Desarrollador Fullstack",
      period: "2023 - Presente",
      achievements: [
        "Desarrollo de ERP para Franquicia Helados Sarita",
        "Creación de plataforma de banca en línea para Cooperativa Familiar",
        "Implementación de sistemas de gestión para pequeñas y medianas empresas nativas y del extranjero"
      ]
    },
    {
      company: "CEUTEC",
      position: "Practicante Profesional",
      period: "2019 Sept. - Nov",
      achievements: [
        "Mantenimiento de equipo de computo",
        "Soporte técnico a usuarios finales",
        "Mantenimiento de infraestructura de redes"
      ]
    }
  ];

  const skills = [
    { name: "NextJS", level: 95 },
    { name: "React", level: 90 },
    { name: "HTML/CSSJS", level: 90 },
    { name: "Tailwind", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 80 },
    { name: "Python", level: 80 },
    { name: "Java", level: 80 },
    { name: "PHP", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "Golang", level: 80 },
    { name: "Dart", level: 80 },
    { name: "Laravel", level: 80 }
  ];

  const projects = [
    {
      title: "Venture - Plataforma de Eventos",
      description: "Startup que permite a usuarios buscar eventos por categoría, nombre o mapa de la ciudad. Integrado con Google, Apple, Uber y sistema de pagos en línea.",
      technologies: ["Next.js", "Google API", "Tailwind", "Uber ", "MongoDB"]
    },
    {
      title: "IS-Manager - Gestor Académico UNAH",
      description: "Sistema que realiza web scraping del sistema oficial de la UNAH para mostrar progreso académico, historial, rendimiento y ruta del plan de estudio con análisis de datos.",
      technologies: ["Node.js", "HTML/CSS", "Data Analysis", "Chart.js"]
    },
  ];

  return (
    <div className="min-h-screen bg-white p-0 m-0">
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg p-8 text-gray-800">
        <header className="border-b-2 border-blue-700 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div className='w-full'>
              <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
              <h2 className="text-xl text-blue-700 font-medium">{personalInfo.title}</h2>
              <p className="text-gray-600 mt-2 w-full pr-8">{personalInfo.about}</p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center overflow-hidden">
              <img src="/pf2.png" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-700 mr-2" />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-700 mr-2" />
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
            <div className="flex items-center">
              <TbWorldCode className="text-blue-700 mr-2" />
              <a href={personalInfo.portafolio}>{personalInfo.portafolio}</a>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-blue-700 mr-2" />
              <a href='https://github.com/CoFlores-12'>github.com/{personalInfo.github}</a>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-blue-700 mr-2" />
              <a href='www.linkedin.com/in/cofloresf'>linkedin.com/in/{personalInfo.linkedin}</a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3">
            <section className="mb-6">
              <div className="flex items-center mb-3">
                <FaBriefcase className="text-blue-700 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Experiencia Laboral</h2>
              </div>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <span className="text-blue-700 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-700 font-medium italic">{exp.company}</p>
                  <ul className="mt-2 pl-5 list-disc text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <div className="flex items-center mb-3">
                <FaLaptopCode className="text-blue-700 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Proyectos Destacados</h2>
              </div>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className="col-span-2">
            <section className="mb-6">
              <div className="flex items-center mb-3">
                <FaGraduationCap className="text-blue-700 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Educación</h2>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <p className="text-gray-700 font-medium">{edu.degree}</p>
                  <p className="text-blue-700 text-sm">{edu.period}</p>
                  <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            <section className="mb-6">
              <div className="flex items-center mb-3">
                <FaTools className="text-blue-700 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Habilidades Técnicas</h2>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Certificaciones</h2>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Cisco CCNAv7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>University of Michigan - Web Data in Python</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-2">•</span>
                  <span>Node.js Backend Development</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

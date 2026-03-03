import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink, Code2, Briefcase, Award, MessageCircle } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    console.log(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgClass = darkMode ? 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900' : 'bg-gradient-to-br from-white via-purple-50 to-slate-100';
  const textClass = darkMode ? 'text-white' : 'text-slate-900';
  const cardBgClass = darkMode ? 'bg-slate-800/50 backdrop-blur-sm border border-purple-500/30' : 'bg-white/80 backdrop-blur-sm border border-purple-200/50';
  const inputBgClass = darkMode ? 'bg-slate-900/50 border-purple-500/30 text-white placeholder-slate-400' : 'bg-white/50 border-purple-300/50 text-slate-900 placeholder-slate-600';

  return (
    <div className={`${bgClass} min-h-screen transition-colors duration-300`}>
      {/* Fondo animado de partículas */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .glow-pink {
          text-shadow: 0 0 20px rgba(255, 16, 240, 0.8), 0 0 40px rgba(255, 16, 240, 0.4);
        }
        .glow-cyan {
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4);
        }
        .border-glow {
          border-color: rgba(255, 16, 240, 0.5);
          box-shadow: 0 0 20px rgba(255, 16, 240, 0.2), inset 0 0 20px rgba(255, 16, 240, 0.1);
        }
        .border-glow-cyan {
          border-color: rgba(0, 240, 255, 0.5);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0, 240, 255, 0.1);
        }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-slate-950/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-purple-500/20' : 'border-purple-300/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className={`text-2xl font-bold glow-pink ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>PV</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['inicio', 'trabajos', 'habilidades', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-pink-400 ${darkMode ? 'text-slate-300 hover:text-pink-400' : 'text-slate-700 hover:text-pink-600'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-purple-500/20 hover:bg-purple-500/30' : 'bg-purple-300/20 hover:bg-purple-300/30'}`}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-pink-400" /> : <Menu size={24} className={darkMode ? 'text-slate-300' : 'text-slate-700'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${darkMode ? 'border-purple-500/20' : 'border-purple-300/30'}`}>
            <div className="px-4 py-4 space-y-4">
              {['inicio', 'trabajos', 'habilidades', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 transition-colors ${darkMode ? 'text-slate-300 hover:text-pink-400' : 'text-slate-700 hover:text-pink-600'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50"></div>
            <div className={`relative w-24 h-24 rounded-full ${darkMode ? 'bg-gradient-to-br from-pink-500 to-purple-600' : 'bg-gradient-to-br from-pink-400 to-purple-500'} flex items-center justify-center`}>
              <Code2 size={48} className="text-white" />
            </div>
          </div>

          <h2 className={`text-5xl md:text-7xl font-bold mb-4 glow-pink ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
            Pamela Vera
          </h2>
          <p className={`text-2xl md:text-3xl mb-4 ${darkMode ? 'text-cyan-300 glow-cyan' : 'text-cyan-600'}`}>
            Frontend Developer | Angular Specialist
          </p>

          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Desarrollo de aplicaciones web modernas y escalables con Angular, TypeScript y las mejores prácticas. Especialista en experiencias de usuario receptivas y elegantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection('contacto')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/50 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg'}`}
            >
              Contactame
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg font-semibold transition-all border-2 flex items-center justify-center gap-2 ${darkMode ? 'border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10' : 'border-cyan-600/50 text-cyan-600 hover:border-cyan-600 hover:bg-cyan-600/10'}`}
            >
              <Github size={20} /> GitHub
            </a>
          </div>

          <div className="flex gap-6 justify-center text-slate-400">
            <a href="https://linkedin.com/in/pamela-vera-e" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pamela.v.espinoza@gmail.com" className="hover:text-pink-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+56983453707" className="hover:text-pink-400 transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Trabajos Section */}
      <section id="trabajos" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className={`text-4xl md:text-5xl font-bold mb-12 glow-pink ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
            Experiencia Laboral
          </h3>

          <div className="space-y-6">
            {/* Job 1 */}
            <div className={`${cardBgClass} rounded-2xl p-6 md:p-8 hover:border-pink-400/60 transition-all duration-300 group`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'} mb-2`}>Frontend Developer</h4>
                  <p className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'} text-lg font-semibold`}>InovaBiz SPA - Banchile Corredor Seguros</p>
                </div>
                <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm md:text-base`}>Ago 2023 - Ene 2026</span>
              </div>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-4 leading-relaxed`}>
                Desarrollo y mantenimiento de aplicaciones web con Angular 16, 17 y 18 para plataformas de uso interno bancario.
                Implementación del Sistema de Gestión de Usuarios, incluyendo control de permisos, roles y flujos de administración segura.
                Desarrollo de funcionalidades de consulta y gestión de clientes para la Plataforma de Seguros, utilizada por ejecutivos en sucursales a nivel nacional.
                Implementación de buenas practicas de desarrollo, versionamiento con Git/Bitbucket y trabajo bajo metodología ágil (Scrum).

              </p>
              <div className="flex flex-wrap gap-2">
                {['Angular 16-18+', 'TypeScript', 'HTML5/CSS3', 'REST APIs', 'Responsive Design'].map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' : 'bg-purple-300/20 text-purple-700 border border-purple-400/50'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Job 2 */}
            <div className={`${cardBgClass} rounded-2xl p-6 md:p-8 hover:border-cyan-400/60 transition-all duration-300`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'} mb-2`}>Analista QA
                  </h4>
                  <p className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'} text-lg font-semibold`}>U-Payments Company S.A.</p>
                </div>
                <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm md:text-base`}>05/2021 - 05/2023</span>
              </div>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-4 leading-relaxed`}>
                <li>
                  Implementé soluciones web y mobile con Angular. Participé en plataformas de pago digital (Tapp, Select Card, Conomy). Mejora de estabilidad, performance y experiencia de usuario. Trabajo en equipos agiles con metodología Scrum.

                </li>


              </p>
              <div className="flex flex-wrap gap-2">
                {['Smoke test', 'Mobile Dev', 'Payment Systems', 'ISTQB', 'E2E'].map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50' : 'bg-cyan-300/20 text-cyan-700 border border-cyan-400/50'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Job 3 */}
            <div className={`${cardBgClass} rounded-2xl p-6 md:p-8 hover:border-cyan-400/60 transition-all duration-300`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'} mb-2`}>Desarrolladora Backend</h4>
                  <p className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'} text-lg font-semibold`}>CAS-Chile S.A. de I.
                  </p>
                </div>
                <span className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm md:text-base`}>07/2019 - 05/2021</span>
              </div>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-4 leading-relaxed`}>
                <li>
                  Implementé soluciones web y mobile con Angular. Participé en plataformas de pago digital (Tapp, Select Card, Conomy). Mejora de estabilidad, performance y experiencia de usuario. Trabajo en equipos agiles con metodología Scrum.

                </li>


              </p>
              <div className="flex flex-wrap gap-2">
                {['visualBasic 6', '.NET Framework', 'SQL', 'C#', 'Windows Forms'].map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50' : 'bg-cyan-300/20 text-cyan-700 border border-cyan-400/50'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className={`text-4xl md:text-5xl font-bold mb-12 glow-cyan ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
            Habilidades & Tecnologías
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Frontend */}
            <div className={`${cardBgClass} rounded-2xl p-6 hover:border-pink-400/60 transition-all`}>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className={`${darkMode ? 'text-pink-400' : 'text-pink-600'}`} size={24} />
                <h4 className={`text-xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Frontend</h4>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {['Angular 16/17/18+', 'TypeScript', 'JavaScript ES6+', 'HTML5 & CSS3', 'Bootstrap', 'NgRx', 'Signals', 'Responsive Design'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-pink-600'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend & Databases */}
            <div className={`${cardBgClass} rounded-2xl p-6 hover:border-cyan-400/60 transition-all`}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} size={24} />
                <h4 className={`text-xl font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Backend</h4>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {['Node.js', 'Python', 'REST APIs', 'SQL Server', 'PostgreSQL', 'API Integration', 'CI/CD', 'Git Flow'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & QA */}
            <div className={`${cardBgClass} rounded-2xl p-6 hover:border-purple-400/60 transition-all`}>
              <div className="flex items-center gap-3 mb-4">
                <Award className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`} size={24} />
                <h4 className={`text-xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Herramientas & QA</h4>
              </div>
              <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {['Git & GitHub', 'Jira', 'Figma', 'Testing (E2E)', 'QA Automation', 'ISTQB', 'Scrum', 'Agile'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Educación */}
          <div className={`${cardBgClass} rounded-2xl p-8 border-l-4 ${darkMode ? 'border-pink-500' : 'border-pink-600'}`}>
            <h4 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Educación & Certificaciones</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Técnico en Programación Computacional</h5>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Instituto San Sebastián | 2017 - 2019</p>
              </div>
              <div>
                <h5 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>ISTQB Foundation Level</h5>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Certificación en Testing y QA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h3 className={`text-4xl md:text-5xl font-bold mb-12 text-center glow-pink ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
            Contacto
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Info Cards */}
            <a href="mailto:pamela.v.espinoza@gmail.com" className={`${cardBgClass} rounded-2xl p-6 hover:border-pink-400/60 transition-all cursor-pointer group`}>
              <div className={`p-3 rounded-lg w-fit mb-4 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-300/20'}`}>
                <Mail className={`${darkMode ? 'text-pink-400' : 'text-pink-600'}`} size={24} />
              </div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Email</h4>
              <p className={`${darkMode ? 'text-slate-400 group-hover:text-pink-400' : 'text-slate-600 group-hover:text-pink-600'}`}>pamela.v.espinoza@gmail.com</p>
            </a>

            {/* <a href="tel:+56983453707" className={`${cardBgClass} rounded-2xl p-6 hover:border-cyan-400/60 transition-all cursor-pointer group`}>
              <div className={`p-3 rounded-lg w-fit mb-4 ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/20'}`}>
                <Phone className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} size={24} />
              </div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Teléfono</h4>
              <p className={`${darkMode ? 'text-slate-400 group-hover:text-cyan-400' : 'text-slate-600 group-hover:text-cyan-600'}`}>+569 8345 3707</p>
            </a> */}

            <a href="https://linkedin.com/in/pamela-vera-e" target="_blank" rel="noopener noreferrer" className={`${cardBgClass} rounded-2xl p-6 hover:border-pink-400/60 transition-all cursor-pointer group`}>
              <div className={`p-3 rounded-lg w-fit mb-4 ${darkMode ? 'bg-pink-500/20' : 'bg-pink-300/20'}`}>
                <Linkedin className={`${darkMode ? 'text-pink-400' : 'text-pink-600'}`} size={24} />
              </div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>LinkedIn</h4>
              <p className={`${darkMode ? 'text-slate-400 group-hover:text-pink-400' : 'text-slate-600 group-hover:text-pink-600'}`}>linkedin.com/in/pamela-vera-e</p>
            </a>

            <a href="https://github.com/pamveradev" target="_blank" rel="noopener noreferrer" className={`${cardBgClass} rounded-2xl p-6 hover:border-cyan-400/60 transition-all cursor-pointer group`}>
              <div className={`p-3 rounded-lg w-fit mb-4 ${darkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/20'}`}>
                <Github className={`${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} size={30} />
              </div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>GitHub</h4>
              <p className={`${darkMode ? 'text-slate-400 group-hover:text-cyan-400' : 'text-slate-600 group-hover:text-cyan-600'}`}>@pamveradev</p>
            </a>
          </div>

          {/* Contact Form */}
          {/* <form onSubmit={handleFormSubmit} className={`${cardBgClass} rounded-2xl p-8`}>
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:border-pink-400 ${inputBgClass}`}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:border-pink-400 ${inputBgClass}`}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:border-pink-400 resize-none ${inputBgClass}`}
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${darkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/50 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg'}`}
              >
                <Send size={20} />
                Enviar Mensaje
              </button>

              {formSubmitted && (
                <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-green-500/20 border border-green-500/50 text-green-400' : 'bg-green-400/20 border border-green-500/50 text-green-700'}`}>
                  ✓ ¡Mensaje enviado con éxito!
                </div>
              )}
            </div>
          </form> */}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-purple-500/20 text-slate-400' : 'border-purple-300/30 text-slate-600'} py-8 px-4 relative z-10`}>
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2026 Pamela Vera. Desarrollado con React + Tailwind CSS</p>
          <p className="mt-2 text-sm">Frontend Developer | Angular Specialist</p>
        </div>
      </footer>
      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/56983453707?text=Hola%20Pamela%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 group"
        title="Contáctame por WhatsApp"
      >
        <div className="relative">
          {/* Glow animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>

          {/* Botón */}
          <div className={`relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform group-hover:scale-110 ${darkMode ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/50' : 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/50'}`}>
            <MessageCircle size={32} className="text-white" />
          </div>

          {/* Tooltip */}
          <div className={`absolute right-20 bottom-4 ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-700 text-white'} px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg`}>
            Escríbeme por WhatsApp
          </div>
        </div>
      </a>
    </div>
  );
}

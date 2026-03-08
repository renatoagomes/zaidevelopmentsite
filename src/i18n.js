const translations = {
  pt: {
    label: "PT",
    header: { cta: "Fale com a gente" },
    hero: {
      tag: "Engineering-First Agency",
      headline1: "Engenharia de Software",
      headline2: "de Alto Impacto",
      sub: "Desenvolvimento sob medida, arquitetura escalável e automação inteligente para acelerar a sua operação.",
      cta: "Iniciar Projeto",
    },
    services: {
      tag: "Serviços",
      title: "O que fazemos",
      items: [
        {
          title: "Desenvolvimento Customizado",
          description:
            "MVPs rápidos, Web Apps e Mobile focados em resultado. Do conceito à produção com velocidade e qualidade.",
        },
        {
          title: "Consultoria & Arquitetura",
          description:
            "Design de sistemas escaláveis, Cloud (GCP/AWS) e modernização de plataformas legadas.",
        },
        {
          title: "Agentes de IA & Automação",
          description:
            "Integração com LLMs, chatbots inteligentes e fluxos de dados automatizados para escalar operações.",
        },
      ],
    },
    contact: {
      tag: "Contato",
      title: "Vamos conversar?",
      sub: "Preencha o formulário e entraremos em contato em até 24 horas.",
      name: "Nome",
      email: "E-mail",
      company: "Empresa",
      details: "Detalhes do Projeto",
      namePh: "Seu nome completo",
      emailPh: "seu@email.com",
      companyPh: "Nome da empresa",
      detailsPh: "Descreva brevemente o que você precisa...",
      submit: "Enviar Mensagem",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    label: "EN",
    header: { cta: "Get in touch" },
    hero: {
      tag: "Engineering-First Agency",
      headline1: "Software Engineering",
      headline2: "for High-Impact Businesses",
      sub: "Custom development, scalable architecture and intelligent automation to accelerate your operations.",
      cta: "Start a Project",
    },
    services: {
      tag: "Services",
      title: "What we do",
      items: [
        {
          title: "Custom Development",
          description:
            "Fast MVPs, Web Apps and Mobile focused on results. From concept to production with speed and quality.",
        },
        {
          title: "Consulting & Architecture",
          description:
            "Scalable system design, Cloud (GCP/AWS) and legacy platform modernization.",
        },
        {
          title: "AI Agents & Automation",
          description:
            "LLM integrations, intelligent chatbots and automated data workflows to scale operations.",
        },
      ],
    },
    contact: {
      tag: "Contact",
      title: "Let's talk?",
      sub: "Fill in the form and we'll get back to you within 24 hours.",
      name: "Name",
      email: "Email",
      company: "Company",
      details: "Project Details",
      namePh: "Your full name",
      emailPh: "you@email.com",
      companyPh: "Company name",
      detailsPh: "Briefly describe what you need...",
      submit: "Send Message",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    label: "ES",
    header: { cta: "Contáctenos" },
    hero: {
      tag: "Engineering-First Agency",
      headline1: "Ingeniería de Software",
      headline2: "de Alto Impacto",
      sub: "Desarrollo a medida, arquitectura escalable y automatización inteligente para acelerar tu operación.",
      cta: "Iniciar Proyecto",
    },
    services: {
      tag: "Servicios",
      title: "Lo que hacemos",
      items: [
        {
          title: "Desarrollo Personalizado",
          description:
            "MVPs rápidos, Web Apps y Mobile enfocados en resultados. Del concepto a producción con velocidad y calidad.",
        },
        {
          title: "Consultoría & Arquitectura",
          description:
            "Diseño de sistemas escalables, Cloud (GCP/AWS) y modernización de plataformas heredadas.",
        },
        {
          title: "Agentes de IA & Automatización",
          description:
            "Integración con LLMs, chatbots inteligentes y flujos de datos automatizados para escalar operaciones.",
        },
      ],
    },
    contact: {
      tag: "Contacto",
      title: "¿Hablamos?",
      sub: "Completa el formulario y te contactaremos en menos de 24 horas.",
      name: "Nombre",
      email: "Correo",
      company: "Empresa",
      details: "Detalles del Proyecto",
      namePh: "Tu nombre completo",
      emailPh: "tu@email.com",
      companyPh: "Nombre de la empresa",
      detailsPh: "Describe brevemente lo que necesitas...",
      submit: "Enviar Mensaje",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

export const LOCALES = ["pt", "en", "es"];

export function t(locale) {
  return translations[locale] || translations.pt;
}

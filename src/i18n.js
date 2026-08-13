const translations = {
  pt: {
    label: "PT",
    header: { cta: "Fale com a gente" },
    hero: {
      tag: "AI-First Infrastructure & Agents",
      headline1: "Inteligência Artificial",
      headline2: "Aplicada ao seu Negócio",
      sub: "Desenvolvemos infraestrutura de IA, sistemas autônomos e fluxos de trabalho agentic para escalar operações de ponta a ponta.",
      cta: "Iniciar Projeto",
    },
    services: {
      tag: "Serviços",
      title: "O que fazemos",
      items: [
        {
          title: "Agentes Autônomos (Agentic Workflows)",
          description:
            "Agentes de IA que executam processos de ponta a ponta: decidem, agem e escalam sua operação sem intervenção humana.",
        },
        {
          title: "Infraestrutura Cloud & IA",
          description:
            "Arquitetura cloud-native (GCP/AWS) projetada para cargas de IA: escalável, observável e pronta para produção.",
        },
        {
          title: "LLM Integrations & RAG",
          description:
            "Integração de LLMs aos seus dados com pipelines de RAG: respostas precisas, contextuais e com conhecimento do seu negócio.",
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
      tag: "AI-First Infrastructure & Agents",
      headline1: "Artificial Intelligence",
      headline2: "Applied to Your Business",
      sub: "We build AI infrastructure, autonomous systems and agentic workflows to scale operations end to end.",
      cta: "Start a Project",
    },
    services: {
      tag: "Services",
      title: "What we do",
      items: [
        {
          title: "Autonomous Agents (Agentic Workflows)",
          description:
            "AI agents that run processes end to end: they decide, act and scale your operations without human intervention.",
        },
        {
          title: "Cloud & AI Infrastructure",
          description:
            "Cloud-native architecture (GCP/AWS) designed for AI workloads: scalable, observable and production-ready.",
        },
        {
          title: "LLM Integrations & RAG",
          description:
            "LLMs integrated with your data through RAG pipelines: precise, contextual answers grounded in your business knowledge.",
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
      tag: "AI-First Infrastructure & Agents",
      headline1: "Inteligencia Artificial",
      headline2: "Aplicada a tu Negocio",
      sub: "Desarrollamos infraestructura de IA, sistemas autónomos y flujos de trabajo agentic para escalar operaciones de punta a punta.",
      cta: "Iniciar Proyecto",
    },
    services: {
      tag: "Servicios",
      title: "Lo que hacemos",
      items: [
        {
          title: "Agentes Autónomos (Agentic Workflows)",
          description:
            "Agentes de IA que ejecutan procesos de punta a punta: deciden, actúan y escalan tu operación sin intervención humana.",
        },
        {
          title: "Infraestructura Cloud & IA",
          description:
            "Arquitectura cloud-native (GCP/AWS) diseñada para cargas de IA: escalable, observable y lista para producción.",
        },
        {
          title: "LLM Integrations & RAG",
          description:
            "Integración de LLMs con tus datos mediante pipelines de RAG: respuestas precisas, contextuales y con conocimiento de tu negocio.",
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

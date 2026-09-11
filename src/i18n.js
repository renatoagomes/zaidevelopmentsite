/* ──────────────────────────────────────────────────────────────
   ZAI Development — i18n
   Locales: pt (default) · en · es
   ────────────────────────────────────────────────────────────── */

const translations = {
  /* ══════════════════════════════════════════════════ PT-BR ══ */
  pt: {
    label: "PT",
    htmlLang: "pt-BR",

    meta: {
      title: "ZAI Development — Engenharia de IA Aplicada & Sistemas de Agentes",
      description:
        "Projetamos, governamos e escalamos ecossistemas de agentes autônomos em produção. Guardrails, RAG corporativo e infraestrutura cloud-native no Google Cloud.",
    },

    nav: {
      pillars: "Pilares",
      caseStudy: "Case Study",
      method: "Metodologia",
      contact: "Contato",
    },

    header: { cta: "Diagnóstico técnico" },

    hero: {
      tag: "Applied AI Engineering",
      headline1: "Agentes de IA em produção,",
      headline2: "com governança de verdade.",
      sub: "Projetamos, integramos e escalamos ecossistemas de agentes autônomos para operações reais — com guardrails antifraude, RAG corporativo sobre os seus dados e infraestrutura cloud-native no Google Cloud.",
      ctaPrimary: "Agendar diagnóstico",
      ctaSecondary: "Ver arquitetura em produção",
      chipsLabel: "Construído sobre",
      chips: [
        "Google Cloud",
        "Vertex AI",
        "Cloud Run",
        "Vector Search",
        "Gemini",
        "Claude",
      ],
      flow: {
        title: "Governança em runtime",
        caption:
          "Cada mensagem atravessa a mesma cadeia — e a camada de política decide antes da ação.",
        nodes: [
          { label: "Ingestão", sub: "WhatsApp · Instagram · Webhook" },
          { label: "Orquestrador", sub: "Roteia para o agente especialista" },
          { label: "Guardrails", sub: "Inspeção de política em tempo real" },
          { label: "Ação segura", sub: "CRM · API · resposta validada" },
        ],
        agents: ["Triagem", "Catálogo", "Comercial"],
        events: ["Nova mensagem", "DM recebida", "Evento de webhook"],
        inspecting: "Inspecionando",
        pass: "Aprovado",
        block: "Bloqueado",
        blockReasons: ["PII detectada", "Prompt injection", "Preço fora da base"],
        held: "Ação retida",
      },
    },

    pillars: {
      tag: "Pilares de engenharia",
      title: "Quatro camadas que separam um demo de um sistema em produção",
      sub: "Todo agente que colocamos no ar atravessa as quatro camadas. Nenhuma delas é opcional.",
      items: [
        {
          index: "01",
          title: "Governança & Guardrails Ativos",
          description:
            "Camada de política executada em runtime, não em prompt. Bloqueio de prompt injection, redação de PII, whitelisting de ações sensíveis e trilha de auditoria completa por conversa.",
          bullets: [
            "Anti prompt-injection e jailbreak",
            "Redação e minimização de PII",
            "Política antifraude por ação",
            "Trilha de auditoria imutável",
          ],
        },
        {
          index: "02",
          title: "RAG Corporativo & Conectores de Dados",
          description:
            "O agente responde a partir da sua base de conhecimento — não da memória do modelo. Ingestão versionada, chunking semântico, reranking e citação obrigatória da fonte.",
          bullets: [
            "Ingestão e reindexação versionadas",
            "Busca híbrida + reranking",
            "Grounding com citação de fonte",
            "Conectores para CRM, ERP e Drive",
          ],
        },
        {
          index: "03",
          title: "Orquestração Multi-Agente & Autonomia Controlada",
          description:
            "Roteamento entre agentes especialistas com estado de conversa persistente, ferramentas tipadas e níveis de autonomia explícitos — incluindo handoff humano quando a confiança cai.",
          bullets: [
            "Roteamento por intenção e contexto",
            "Estado multiturn persistente",
            "Tool calling tipado e idempotente",
            "Handoff humano com contexto",
          ],
        },
        {
          index: "04",
          title: "Infraestrutura Cloud-Native",
          description:
            "Serverless por padrão no Google Cloud: escala a zero, sobe sob demanda e custa proporcional ao uso. Deploy versionado, observabilidade de ponta a ponta e rollback em um comando.",
          bullets: [
            "Cloud Run + Vertex AI",
            "Vector Search gerenciado",
            "CI/CD com rollback versionado",
            "Tracing, logs e custo por conversa",
          ],
        },
      ],
    },

    caseStudy: {
      tag: "Case Study",
      client: "Turismo Sustentável & Ecoturismo",
      clientDesc:
        "Operadora de turismo sustentável e de base comunitária no Brasil",
      title: "Assistente autônoma para triagem multiturn e qualificação de viajantes",
      lead: "Uma assistente multiturn no WhatsApp, Instagram e web widget que entende o perfil do viajante, recomenda a expedição certa e entrega o lead qualificado direto no CRM comercial — sem nunca inventar preço ou roteiro.",

      challengeLabel: "O desafio",
      challenge:
        "O time comercial recebia um volume alto de conversas em canais diferentes, com perguntas repetidas sobre datas, roteiros e valores. Cada destino e expedição tem regras próprias de logística, sazonalidade e preço. Um assistente genérico resolveria o volume, mas criaria um risco maior: informar um valor ou um roteiro incorreto para um viajante.",

      architectureLabel: "Arquitetura implementada",
      architecture: [
        {
          title: "Canais unificados",
          description:
            "WhatsApp, Instagram e o web widget proprietário embutido no site da operadora convergem para um único gateway de mensageria, com normalização de payload e deduplicação de eventos.",
        },
        {
          title: "Triagem multiturn",
          description:
            "A assistente conduz a conversa por perfil, janela de viagem, orçamento e interesse — mantendo estado entre mensagens e retomando o contexto dias depois.",
        },
        {
          title: "Recomendação contextual",
          description:
            "RAG sobre a base de expedições e roteiros da operação: a recomendação sai da documentação real da operação, com grounding em cada destino.",
        },
        {
          title: "Guardrails estritos",
          description:
            "Preço e roteiro nunca são gerados pelo modelo. Fora do conjunto de dados aprovado, a assistente não especula — ela encaminha.",
        },
        {
          title: "Integração ao CRM",
          description:
            "Lead qualificado, com transcrição e perfil estruturado, entra direto no funil comercial no momento do handoff.",
        },
        {
          title: "Observabilidade",
          description:
            "Cada conversa é rastreável ponta a ponta: intenção detectada, fontes consultadas, guardrails acionados e custo por atendimento.",
        },
      ],

      flowLabel: "Fluxo",
      flow: [
        "WhatsApp / Instagram / Web",
        "Gateway",
        "Orquestrador",
        "RAG + Vector Search",
        "Guardrails",
        "CRM",
      ],

      impactLabel: "Impacto",
      impact: [
        {
          title: "Triagem contínua",
          description:
            "Primeira resposta e qualificação acontecem fora do horário comercial, nos três canais.",
        },
        {
          title: "Zero alucinação de preço",
          description:
            "Valores e roteiros só saem da base aprovada — o modelo não tem permissão para gerá-los.",
        },
        {
          title: "Lead pronto para venda",
          description:
            "O time comercial recebe perfil, interesse e histórico estruturados, não uma transcrição crua.",
        },
        {
          title: "Custo previsível",
          description:
            "Serverless com escala a zero: o custo acompanha o volume real de conversas.",
        },
      ],

      stackLabel: "Stack",
      stack: [
        "Google Cloud",
        "FastAPI / Python",
        "Vector DB & Embeddings",
        "WhatsApp Business API",
        "Meta Graph API",
        "CRM Integration",
      ],
    },

    method: {
      tag: "Metodologia",
      title: "Do diagnóstico ao agente observável em produção",
      sub: "Um ciclo de vida em quatro fases, com entregável verificável em cada uma. Você sabe exatamente o que recebe e quando.",
      steps: [
        {
          index: "01",
          title: "Discovery & Arquitetura",
          description:
            "Mapeamos processo, fontes de dados, sistemas de destino e o risco aceitável. Sai daqui um desenho de arquitetura e um escopo de guardrails — antes de escrever código.",
          outputs: ["Blueprint de arquitetura", "Matriz de risco", "Escopo de dados"],
        },
        {
          index: "02",
          title: "Engenharia & Guardrails",
          description:
            "Construção dos agentes, das ferramentas tipadas e da camada de política. Guardrails e testes adversariais são escritos junto com a feature, não depois dela.",
          outputs: ["Agentes e tools", "Camada de política", "Suíte adversarial"],
        },
        {
          index: "03",
          title: "Integração & Homologação",
          description:
            "Conexão com CRM, ERP e canais reais em ambiente de homologação. Rodadas com o seu time até que o comportamento do agente seja previsível sob carga real.",
          outputs: ["Conectores em produção", "Roteiro de homologação", "Sign-off do time"],
        },
        {
          index: "04",
          title: "Deploy & Observabilidade",
          description:
            "Deploy versionado com rollback, tracing por conversa, alertas e painel de custo. O sistema entra no ar sendo medido desde o primeiro atendimento.",
          outputs: ["Pipeline de deploy", "Dashboards e alertas", "Custo por conversa"],
        },
      ],
    },

    contact: {
      tag: "Contato",
      title: "Vamos desenhar o seu ecossistema de agentes",
      sub: "Conte o processo que você quer automatizar. Respondemos em até 24 horas úteis com uma leitura técnica inicial — sem compromisso comercial.",
      asideTitle: "O que acontece depois",
      asideSteps: [
        "Leitura técnica do seu cenário em até 24h úteis",
        "Call de diagnóstico de 45 minutos com engenharia",
        "Desenho de arquitetura e escopo de guardrails",
      ],
      asideNote: "Atendemos em português, inglês e espanhol.",
      name: "Nome",
      email: "E-mail corporativo",
      company: "Empresa",
      details: "Contexto do projeto",
      namePh: "Seu nome completo",
      emailPh: "voce@empresa.com",
      companyPh: "Nome da empresa",
      detailsPh:
        "Qual processo você quer automatizar? Quais sistemas o agente precisaria acessar?",
      submit: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem recebida. Retornamos em até 24h úteis.",
      error: "Não foi possível enviar. Tente novamente.",
      turnstileError: "Confirme a verificação de segurança.",
    },

    footer: {
      tagline: "Engenharia de IA aplicada, agentes autônomos e infraestrutura cloud-native.",
      rights: "Todos os direitos reservados.",
    },
  },

  /* ═════════════════════════════════════════════════════ EN ══ */
  en: {
    label: "EN",
    htmlLang: "en",

    meta: {
      title: "ZAI Development — Applied AI Engineering & Agent Systems",
      description:
        "We design, govern and scale autonomous agent ecosystems in production. Guardrails, enterprise RAG and cloud-native infrastructure on Google Cloud.",
    },

    nav: {
      pillars: "Pillars",
      caseStudy: "Case Study",
      method: "Method",
      contact: "Contact",
    },

    header: { cta: "Technical assessment" },

    hero: {
      tag: "Applied AI Engineering",
      headline1: "AI agents in production,",
      headline2: "with governance that holds.",
      sub: "We design, integrate and scale autonomous agent ecosystems for real-world operations — with anti-fraud guardrails, enterprise RAG over your own data and cloud-native infrastructure on Google Cloud.",
      ctaPrimary: "Book an assessment",
      ctaSecondary: "Explore production case",
      chipsLabel: "Built on",
      chips: [
        "Google Cloud",
        "Vertex AI",
        "Cloud Run",
        "Vector Search",
        "Gemini",
        "Claude",
      ],
      flow: {
        title: "Runtime governance",
        caption:
          "Every message crosses the same chain — and the policy layer decides before any action.",
        nodes: [
          { label: "Ingestion", sub: "WhatsApp · Instagram · Webhook" },
          { label: "Orchestrator", sub: "Routes to the specialist agent" },
          { label: "Guardrails", sub: "Real-time policy inspection" },
          { label: "Safe action", sub: "CRM · API · validated reply" },
        ],
        agents: ["Triage", "Catalog", "Sales"],
        events: ["New message", "DM received", "Webhook event"],
        inspecting: "Inspecting",
        pass: "Approved",
        block: "Blocked",
        blockReasons: ["PII detected", "Prompt injection", "Price outside the base"],
        held: "Action held",
      },
    },

    pillars: {
      tag: "Engineering pillars",
      title: "Four layers that separate a demo from a production system",
      sub: "Every agent we ship goes through all four. None of them is optional.",
      items: [
        {
          index: "01",
          title: "Governance & Active Guardrails",
          description:
            "A policy layer enforced at runtime, not in a prompt. Prompt-injection blocking, PII redaction, whitelisting of sensitive actions and a complete audit trail per conversation.",
          bullets: [
            "Prompt-injection and jailbreak defense",
            "PII redaction and minimization",
            "Per-action anti-fraud policy",
            "Immutable audit trail",
          ],
        },
        {
          index: "02",
          title: "Enterprise RAG & Data Connectors",
          description:
            "The agent answers from your knowledge base — not from model memory. Versioned ingestion, semantic chunking, reranking and mandatory source citation.",
          bullets: [
            "Versioned ingestion and reindexing",
            "Hybrid search + reranking",
            "Grounded answers with citations",
            "Connectors for CRM, ERP and Drive",
          ],
        },
        {
          index: "03",
          title: "Multi-Agent Orchestration & Controlled Autonomy",
          description:
            "Routing across specialist agents with persistent conversation state, typed tools and explicit autonomy levels — including human handoff when confidence drops.",
          bullets: [
            "Intent and context-based routing",
            "Persistent multiturn state",
            "Typed, idempotent tool calling",
            "Human handoff with full context",
          ],
        },
        {
          index: "04",
          title: "Cloud-Native Infrastructure",
          description:
            "Serverless by default on Google Cloud: scales to zero, scales up on demand, costs in proportion to usage. Versioned deploys, end-to-end observability and one-command rollback.",
          bullets: [
            "Cloud Run + Vertex AI",
            "Managed Vector Search",
            "CI/CD with versioned rollback",
            "Tracing, logs and cost per conversation",
          ],
        },
      ],
    },

    caseStudy: {
      tag: "Case Study",
      client: "Sustainable Tourism & Ecotourism",
      clientDesc:
        "Sustainable and community-based tourism operator in Brazil",
      title: "Autonomous assistant for multiturn qualification and routing of travelers",
      lead: "A multiturn assistant across WhatsApp, Instagram and embedded web widget that reads the traveler's profile, recommends the right expedition and delivers a qualified lead straight into the sales CRM — without ever inventing a price or an itinerary.",

      challengeLabel: "The challenge",
      challenge:
        "The sales team handled a high volume of conversations across different channels, with repeated questions about dates, itineraries and pricing. Each destination and expedition carries its own logistics, seasonality and pricing rules. A generic assistant would absorb the volume, but introduce a bigger risk: quoting a wrong price or itinerary to a traveler.",

      architectureLabel: "Architecture delivered",
      architecture: [
        {
          title: "Unified channels",
          description:
            "WhatsApp, Instagram and the proprietary web widget embedded in the operator's site converge into a single messaging gateway, with payload normalization and event deduplication.",
        },
        {
          title: "Multiturn triage",
          description:
            "The assistant drives the conversation across profile, travel window, budget and interest — holding state between messages and resuming context days later.",
        },
        {
          title: "Contextual recommendation",
          description:
            "RAG over the operation's expedition and itinerary base: recommendations come out of the operation's real documentation, grounded per destination.",
        },
        {
          title: "Strict guardrails",
          description:
            "Prices and itineraries are never model-generated. Outside the approved dataset, the assistant does not speculate — it routes.",
        },
        {
          title: "CRM integration",
          description:
            "The qualified lead, with transcript and structured profile, enters the sales pipeline at the moment of handoff.",
        },
        {
          title: "Observability",
          description:
            "Every conversation is traceable end to end: detected intent, sources retrieved, guardrails triggered and cost per interaction.",
        },
      ],

      flowLabel: "Flow",
      flow: [
        "WhatsApp / Instagram / Web",
        "Gateway",
        "Orchestrator",
        "RAG + Vector Search",
        "Guardrails",
        "CRM",
      ],

      impactLabel: "Impact",
      impact: [
        {
          title: "Always-on triage",
          description:
            "First response and qualification happen outside business hours, across all three channels.",
        },
        {
          title: "Zero price hallucination",
          description:
            "Prices and itineraries only come from the approved base — the model is not allowed to generate them.",
        },
        {
          title: "Sales-ready leads",
          description:
            "The sales team receives structured profile, interest and history — not a raw transcript.",
        },
        {
          title: "Predictable cost",
          description:
            "Serverless with scale-to-zero: cost tracks the real conversation volume.",
        },
      ],

      stackLabel: "Stack",
      stack: [
        "Google Cloud",
        "FastAPI / Python",
        "Vector DB & Embeddings",
        "WhatsApp Business API",
        "Meta Graph API",
        "CRM Integration",
      ],
    },

    method: {
      tag: "Method",
      title: "From assessment to an observable agent in production",
      sub: "A four-phase lifecycle with a verifiable deliverable at each step. You know exactly what you get and when.",
      steps: [
        {
          index: "01",
          title: "Discovery & Architecture",
          description:
            "We map the process, data sources, target systems and acceptable risk. You leave with an architecture design and a guardrail scope — before a line of code is written.",
          outputs: ["Architecture blueprint", "Risk matrix", "Data scope"],
        },
        {
          index: "02",
          title: "Engineering & Guardrails",
          description:
            "Building the agents, the typed tools and the policy layer. Guardrails and adversarial tests are written alongside the feature, not after it.",
          outputs: ["Agents and tools", "Policy layer", "Adversarial suite"],
        },
        {
          index: "03",
          title: "Integration & Acceptance",
          description:
            "Connecting CRM, ERP and real channels in a staging environment. Rounds with your team until the agent's behavior is predictable under real load.",
          outputs: ["Production connectors", "Acceptance script", "Team sign-off"],
        },
        {
          index: "04",
          title: "Deploy & Observability",
          description:
            "Versioned deploy with rollback, per-conversation tracing, alerts and a cost dashboard. The system goes live already instrumented from the first interaction.",
          outputs: ["Deploy pipeline", "Dashboards and alerts", "Cost per conversation"],
        },
      ],
    },

    contact: {
      tag: "Contact",
      title: "Let's design your agent ecosystem",
      sub: "Tell us the process you want to automate. We reply within 24 business hours with an initial technical read — no commercial commitment.",
      asideTitle: "What happens next",
      asideSteps: [
        "Technical read of your scenario within 24 business hours",
        "45-minute assessment call with engineering",
        "Architecture design and guardrail scope",
      ],
      asideNote: "We work in Portuguese, English and Spanish.",
      name: "Name",
      email: "Work email",
      company: "Company",
      details: "Project context",
      namePh: "Your full name",
      emailPh: "you@company.com",
      companyPh: "Company name",
      detailsPh:
        "Which process do you want to automate? Which systems would the agent need to reach?",
      submit: "Send message",
      sending: "Sending...",
      success: "Message received. We'll get back within 24 business hours.",
      error: "Could not send. Please try again.",
      turnstileError: "Please complete the security check.",
    },

    footer: {
      tagline: "Applied AI engineering, autonomous agents and cloud-native infrastructure.",
      rights: "All rights reserved.",
    },
  },

  /* ═════════════════════════════════════════════════════ ES ══ */
  es: {
    label: "ES",
    htmlLang: "es",

    meta: {
      title: "ZAI Development — Ingeniería de IA Aplicada y Sistemas de Agentes",
      description:
        "Diseñamos, gobernamos y escalamos ecosistemas de agentes autónomos en producción. Guardrails, RAG corporativo e infraestructura cloud-native en Google Cloud.",
    },

    nav: {
      pillars: "Pilares",
      caseStudy: "Case Study",
      method: "Metodología",
      contact: "Contacto",
    },

    header: { cta: "Diagnóstico técnico" },

    hero: {
      tag: "Applied AI Engineering",
      headline1: "Agentes de IA en producción,",
      headline2: "con gobernanza real.",
      sub: "Diseñamos, integramos y escalamos ecosistemas de agentes autónomos para operaciones reales — con guardrails antifraude, RAG corporativo sobre tus datos e infraestructura cloud-native en Google Cloud.",
      ctaPrimary: "Agendar diagnóstico",
      ctaSecondary: "Explorar caso de producción",
      chipsLabel: "Construido sobre",
      chips: [
        "Google Cloud",
        "Vertex AI",
        "Cloud Run",
        "Vector Search",
        "Gemini",
        "Claude",
      ],
      flow: {
        title: "Gobernanza en runtime",
        caption:
          "Cada mensaje atraviesa la misma cadena — y la capa de política decide antes de la acción.",
        nodes: [
          { label: "Ingesta", sub: "WhatsApp · Instagram · Webhook" },
          { label: "Orquestador", sub: "Enruta al agente especialista" },
          { label: "Guardrails", sub: "Inspección de política en tiempo real" },
          { label: "Acción segura", sub: "CRM · API · respuesta validada" },
        ],
        agents: ["Triaje", "Catálogo", "Comercial"],
        events: ["Nuevo mensaje", "DM recibido", "Evento de webhook"],
        inspecting: "Inspeccionando",
        pass: "Aprobado",
        block: "Bloqueado",
        blockReasons: ["PII detectada", "Prompt injection", "Precio fuera de la base"],
        held: "Acción retenida",
      },
    },

    pillars: {
      tag: "Pilares de ingeniería",
      title: "Cuatro capas que separan un demo de un sistema en producción",
      sub: "Todo agente que ponemos en producción atraviesa las cuatro. Ninguna es opcional.",
      items: [
        {
          index: "01",
          title: "Gobernanza & Guardrails Activos",
          description:
            "Capa de política ejecutada en runtime, no en el prompt. Bloqueo de prompt injection, redacción de PII, whitelisting de acciones sensibles y trazabilidad completa por conversación.",
          bullets: [
            "Anti prompt-injection y jailbreak",
            "Redacción y minimización de PII",
            "Política antifraude por acción",
            "Registro de auditoría inmutable",
          ],
        },
        {
          index: "02",
          title: "RAG Corporativo & Conectores de Datos",
          description:
            "El agente responde desde tu base de conocimiento — no desde la memoria del modelo. Ingesta versionada, chunking semántico, reranking y cita obligatoria de la fuente.",
          bullets: [
            "Ingesta y reindexación versionadas",
            "Búsqueda híbrida + reranking",
            "Grounding con cita de fuente",
            "Conectores para CRM, ERP y Drive",
          ],
        },
        {
          index: "03",
          title: "Orquestación Multi-Agente & Autonomía Controlada",
          description:
            "Enrutamiento entre agentes especialistas con estado de conversación persistente, herramientas tipadas y niveles de autonomía explícitos — incluido el handoff humano cuando cae la confianza.",
          bullets: [
            "Enrutamiento por intención y contexto",
            "Estado multiturn persistente",
            "Tool calling tipado e idempotente",
            "Handoff humano con contexto",
          ],
        },
        {
          index: "04",
          title: "Infraestructura Cloud-Native",
          description:
            "Serverless por defecto en Google Cloud: escala a cero, escala bajo demanda y cuesta en proporción al uso. Despliegue versionado, observabilidad de punta a punta y rollback en un comando.",
          bullets: [
            "Cloud Run + Vertex AI",
            "Vector Search gestionado",
            "CI/CD con rollback versionado",
            "Tracing, logs y costo por conversación",
          ],
        },
      ],
    },

    caseStudy: {
      tag: "Case Study",
      client: "Turismo Sostenible y Ecoturismo",
      clientDesc:
        "Operadora de turismo sostenible y de base comunitaria en Brasil",
      title: "Asistente autónoma para triaje multiturn y calificación de viajeros",
      lead: "Una asistente multiturn en WhatsApp, Instagram y widget web que entiende el perfil del viajero, recomienda la expedición correcta y entrega el lead calificado directo al CRM comercial — sin inventar nunca un precio ni un itinerario.",

      challengeLabel: "El desafío",
      challenge:
        "El equipo comercial recibía un alto volumen de conversaciones en canales distintos, con preguntas repetidas sobre fechas, itinerarios y valores. Cada destino y expedición tiene reglas propias de logística, estacionalidad y precio. Un asistente genérico absorbería el volumen, pero crearía un riesgo mayor: informar un valor o un itinerario incorrecto a un viajero.",

      architectureLabel: "Arquitectura implementada",
      architecture: [
        {
          title: "Canales unificados",
          description:
            "WhatsApp, Instagram y el widget web propio integrado en el sitio de la operadora convergen en un único gateway de mensajería, con normalización de payload y deduplicación de eventos.",
        },
        {
          title: "Triaje multiturn",
          description:
            "La asistente conduce la conversación por perfil, ventana de viaje, presupuesto e interés — manteniendo estado entre mensajes y retomando el contexto días después.",
        },
        {
          title: "Recomendación contextual",
          description:
            "RAG sobre la base de expediciones e itinerarios de la operación: la recomendación sale de la documentación real de la operación, con grounding por destino.",
        },
        {
          title: "Guardrails estrictos",
          description:
            "Precio e itinerario nunca son generados por el modelo. Fuera del conjunto de datos aprobado, la asistente no especula — deriva.",
        },
        {
          title: "Integración al CRM",
          description:
            "El lead calificado, con transcripción y perfil estructurado, entra directo al embudo comercial en el momento del handoff.",
        },
        {
          title: "Observabilidad",
          description:
            "Cada conversación es rastreable de punta a punta: intención detectada, fuentes consultadas, guardrails activados y costo por atención.",
        },
      ],

      flowLabel: "Flujo",
      flow: [
        "WhatsApp / Instagram / Web",
        "Gateway",
        "Orquestador",
        "RAG + Vector Search",
        "Guardrails",
        "CRM",
      ],

      impactLabel: "Impacto",
      impact: [
        {
          title: "Triaje continuo",
          description:
            "La primera respuesta y la calificación ocurren fuera del horario comercial, en los tres canales.",
        },
        {
          title: "Cero alucinación de precio",
          description:
            "Valores e itinerarios solo salen de la base aprobada — el modelo no tiene permiso para generarlos.",
        },
        {
          title: "Lead listo para venta",
          description:
            "El equipo comercial recibe perfil, interés e historial estructurados, no una transcripción cruda.",
        },
        {
          title: "Costo predecible",
          description:
            "Serverless con escala a cero: el costo acompaña el volumen real de conversaciones.",
        },
      ],

      stackLabel: "Stack",
      stack: [
        "Google Cloud",
        "FastAPI / Python",
        "Vector DB & Embeddings",
        "WhatsApp Business API",
        "Meta Graph API",
        "CRM Integración",
      ],
    },

    method: {
      tag: "Metodología",
      title: "Del diagnóstico al agente observable en producción",
      sub: "Un ciclo de vida en cuatro fases, con un entregable verificable en cada una. Sabes exactamente qué recibes y cuándo.",
      steps: [
        {
          index: "01",
          title: "Discovery & Arquitectura",
          description:
            "Mapeamos proceso, fuentes de datos, sistemas destino y el riesgo aceptable. Sale de aquí un diseño de arquitectura y un alcance de guardrails — antes de escribir código.",
          outputs: ["Blueprint de arquitectura", "Matriz de riesgo", "Alcance de datos"],
        },
        {
          index: "02",
          title: "Ingeniería & Guardrails",
          description:
            "Construcción de los agentes, las herramientas tipadas y la capa de política. Guardrails y pruebas adversariales se escriben junto con la feature, no después.",
          outputs: ["Agentes y tools", "Capa de política", "Suite adversarial"],
        },
        {
          index: "03",
          title: "Integración & Homologación",
          description:
            "Conexión con CRM, ERP y canales reales en ambiente de homologación. Rondas con tu equipo hasta que el comportamiento del agente sea predecible bajo carga real.",
          outputs: ["Conectores en producción", "Guion de homologación", "Sign-off del equipo"],
        },
        {
          index: "04",
          title: "Deploy & Observabilidad",
          description:
            "Despliegue versionado con rollback, tracing por conversación, alertas y panel de costo. El sistema sale a producción ya instrumentado desde la primera atención.",
          outputs: ["Pipeline de deploy", "Dashboards y alertas", "Costo por conversación"],
        },
      ],
    },

    contact: {
      tag: "Contacto",
      title: "Diseñemos tu ecosistema de agentes",
      sub: "Cuéntanos el proceso que quieres automatizar. Respondemos en hasta 24 horas hábiles con una lectura técnica inicial — sin compromiso comercial.",
      asideTitle: "Qué pasa después",
      asideSteps: [
        "Lectura técnica de tu escenario en hasta 24h hábiles",
        "Call de diagnóstico de 45 minutos con ingeniería",
        "Diseño de arquitectura y alcance de guardrails",
      ],
      asideNote: "Trabajamos en portugués, inglés y español.",
      name: "Nombre",
      email: "Correo corporativo",
      company: "Empresa",
      details: "Contexto del proyecto",
      namePh: "Tu nombre completo",
      emailPh: "tu@empresa.com",
      companyPh: "Nombre de la empresa",
      detailsPh:
        "¿Qué proceso quieres automatizar? ¿A qué sistemas necesitaría acceder el agente?",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje recibido. Te respondemos en hasta 24h hábiles.",
      error: "No se pudo enviar. Inténtalo de nuevo.",
      turnstileError: "Completa la verificación de seguridad.",
    },

    footer: {
      tagline: "Ingeniería de IA aplicada, agentes autónomos e infraestructura cloud-native.",
      rights: "Todos los derechos reservados.",
    },
  },
};

export const LOCALES = ["pt", "en", "es"];

export const DEFAULT_LOCALE = "pt";

export function t(locale) {
  return translations[locale] || translations[DEFAULT_LOCALE];
}

/** Best-effort match of the browser language against the supported locales. */
export function detectLocale() {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of langs) {
    const base = String(lang || "").slice(0, 2).toLowerCase();
    if (LOCALES.includes(base)) return base;
  }
  return DEFAULT_LOCALE;
}

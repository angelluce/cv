import {Injectable} from '@angular/core';
import {Informacion} from "../models/Informacion";
import {PerfilPersonal} from "../models/PerfilPersonal";
import {Contacto} from "../models/Contacto";
import {RedSocial} from "../models/RedSocial";
import {FormacionAcademica} from "../models/FormacionAcademica";
import {HabilidadDestacada} from "../models/HabilidadDestacada";
import {Conocimiento} from "../models/Conocimiento";
import {ExperienciaLaboral} from "../models/ExperienciaLaboral";
import {Certificacion} from "../models/Certificacion";
import {Repositorio} from "../models/Repositorio";

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor() {
  }

  obtenerPerfil(): PerfilPersonal {
    return {
      nombre: 'Angel Lucero',
      profesion: 'Desarrollador de software',
      descripcion: ''
    };
  }

  obtenerRedesSociales(): RedSocial[] {
    return [
      {
        nombre: 'LinkedIn',
        enlace: 'https://www.linkedin.com/in/angellucero/',
        icono: 'pi-linkedin'
      },
      {
        nombre: 'GitHub',
        enlace: 'https://github.com/angelluce',
        icono: 'pi-github'
      },
      {
        nombre: 'Instagram',
        enlace: 'https://www.instagram.com/angellucero.dev/',
        icono: 'pi-instagram'
      }
    ];
  }

  obtenerContacto(): Contacto {
    return {
      edad: 24,
      direcion: 'Cuenca - Ecuador',
      correo: 'angelluce244@gmail.com',
      telefono: '+(593) 96 724 7258',
      redes: this.obtenerRedesSociales()
    }
  }

  obtenerFormacionAcademica(): FormacionAcademica[] {
    return [
      {
        titulo: 'Tecnología Superior en Desarrollo de ' +
          'Software del Instituto Superior Tecnológico del Azuay.',
        fecha: 'Cuenca, 2022.'
      },
      // {
      //   titulo: 'Bachillerato Técnico - De Servicios ' +
      //     'en Administración de Sistemas del ' +
      //     'Colegio Técnico Industrial Ricaurte.',
      //   fecha: 'Cuenca, 2017.'
      // }
    ];
  }

  obtenerCertificaciones(): Certificacion[] {
    return [
      {
        titulo: 'Desarrollo de Apps Móviles con Flutter',
        empresa: 'EELA Institute, Universidad Hemisferios',
        fecha: 'jul. 2024',
      },
      {
        titulo: 'Docker Essentials: A Developer Introduction',
        empresa: 'IBM',
        fecha: 'jul. 2023',
      },
      {
        titulo: 'Fundamentos en Gestión de Proyectos',
        empresa: 'soylider.net',
        fecha: 'jun. 2023',
      },
      {
        titulo: 'Python for Data Science',
        empresa: 'IBM',
        fecha: 'jul. 2023',
      },
      {
        titulo: 'Scrum Foundation Professional Certificate SFPC',
        empresa: 'CertiProf',
        fecha: 'jun. 2023',
      },
      {
        titulo: 'Finalización del proyecto Argus Risk Management',
        empresa: 'Futura EC. Cía. Ltda.',
        fecha: 'abr. 2023',
      },
      {
        titulo: 'Digitaliza paso a paso tu negocio con herramientas de Google',
        empresa: 'Google',
        fecha: 'ene. 2022',
      },
      {
        titulo: 'Productividad en Trabajos Remotos',
        empresa: 'Netzun',
        fecha: 'jun. 2021',
      },
      // {
      //   titulo: 'NDG Linux Unhatched',
      //   empresa: 'Cisco Networking Academy',
      //   fecha: 'ago. 2020',
      // },
      // {
      //   titulo: 'Introducción a IoT',
      //   empresa: 'Cisco Networking Academy',
      //   fecha: 'ago. 2020',
      // }
    ]
  }

  obtenerHabilidadesDesatacas(): HabilidadDestacada[] {
    return [
      {
        descripcion: 'Saber transmitir ideas técnicas a personas sin estos ' +
          'conocimientos'
      },
      {
        descripcion: 'Buen rendimiento dentro de las jornadas de trabajo'
      },
      {
        descripcion: 'Abstracción de problemas para generar resultados de ' +
          'calidad'
      },
      {
        descripcion: 'Capacidad de trabajo en equipo así como independiente'
      },
      {
        descripcion: 'Inglés B2'
      }
    ];
  }

  obtenerConocimientos(): Conocimiento[] {
    return [
      {
        descripcion: 'Metodologías',
        elemento: [
          'SCRUM',
          'XP'
        ]
      },
      {
        descripcion: 'Bases de datos',
        elemento: [
          'Postgresql',
          'Firestore',
          'Oracle',
        ]
      },
      {
        descripcion: 'Lenguajes',
        elemento: [
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
          'Java',
          'Python',
          'Dart',
          'SQL',
        ]
      },
      {
        descripcion: 'Frameworks',
        elemento: [
          'Angular',
          'Ionic',
          'Node.js',
          'Flutter',
          'Android SDK',
          'Spring Boot',
          'Fast API',
          'Flask',
          'React',
        ]
      },
      {
        descripcion: 'Herramientas en la nube',
        elemento: [
          'GitHub',
          'GitLab',
          'Firebase',
          'Supabase',
          'Jira',
          'Taiga',
          'Trello',
          'Render',
          'Amazon Web Services',
        ]
      },
      {
        descripcion: 'Otros',
        elemento: [
          'Git',
          'Json',
          'Postman',
          'Markdown',
          'WebStorm',
          'IntelliJ IDEA',
          'Visual Studio Code',
          'PyCharm',
          'Docker',
        ]
      }
    ];
  }

  obtenerExperienciaLaboral(): ExperienciaLaboral[] {
    return [
      {
        cargo: 'Desarrollador autónomo',
        empresa: 'Freelance',
        fechaInicial: 'nov. 2021',
        fechaFinal: 'actualidad',
        actividades: [
          'Desarrollar proyectos de software como: aplicaciones web (PWA, SaaS), aplicaciones móviles multiplataforma (Android) y aplicaciones de escritorio.',
          'Diseñar bases de datos relacionales y no relacionales utilizando herramientas como: PostgreSQL, Supabase y Firestore de Firebase.',
          'Desplegar correctamente aplicaciones en la nube utilizando servicios de empresas como: Amazon Web Services, Firebase, Vercel y Render.',
          'Asesorar a empresas, negocios, emprendedores en la toma de decisiones tecnológicas para la implementación de software.',
          'Realizar mantenimiento y soporte técnico de aplicaciones web y móviles.',
        ],
        etiquetas: [
          'Angular',
          'Ionic',
          'React',
          'Spring Boot',
          'Flutter',
          'Android',
          'Node.js',
          'Express',
          'Fast API',
          'Flask',
          'Postgresql',
          'Supabase',
          'Firestore',
          'Docker',
          'Jira',
          'Trello',
          'GitHub',
          'GitLab',
          'GitHub Pages',
          'GitHub Actions',
          'PrimeNG',
          'Bootstrap',
          'Firebase',
          'Vercel',
          'Render',
          'Google Cloud Platform',
          'Amazon Web Services',
        ]
      },
      {
        cargo: 'Desarrollador front end',
        empresa: 'Fuhrer Cía Ltda',
        fechaInicial: 'ago. 2023',
        fechaFinal: 'actualidad',
        actividades: [
          'Desarrollador front-end y encargado del proyecto: SARF, actualmente más de 25 cooperativas son parte de este proyecto.',
          'Desarrollador front-end del proyecto SHUK, aplicación móvil para el comercio de partes y repuestos, disponible para Android e IOS.',
          'Desarrollador full stack de proyectos secundarios.',
        ],
        etiquetas: [
          'Angular',
          'Ionic',
          'Fast API',
          'Flutter',
          'Android',
          'IOS',
          'Docker',
          'GitLab',
          'Taiga',
          'Firebase',
          'Postman',
          'Keycloak',
          'Linux',
          'SSH',
        ]
      },
      {
        cargo: 'Desarrollador back end',
        empresa: 'SOFTDEVELOP',
        fechaInicial: 'jul. 2023',
        fechaFinal: 'oct. 2023',
        actividades: [
          'Desarrollador back end del proyecto de PESNOT: Sistema de gestión de audiencias y notificaciones del Consejo de la Judicatura.',
        ],
        etiquetas: [
          'Spring Boot',
          'MySQL',
          'GitHub',
          'Postman',
          'Docker',
          'Trello',
        ]
      },
      {
        cargo: 'Desarrollador full stack',
        empresa: 'FASTAPP S.A.S',
        fechaInicial: 'jun. 2023',
        fechaFinal: 'sep. 2023',
        actividades: [
          'Desarrollador full stack y responsable del proyecto de taxímetro (aplicación web y móvil) FASTAPP.',
        ],
        etiquetas: [
          'Angular',
          'Android',
          'Firebase',
          'GitHub',
        ]
      },
      {
        cargo: 'Desarrollador full stack',
        empresa: 'Futura EC Cía. Ltda.',
        fechaInicial: 'feb. 2022',
        fechaFinal: 'may. 2023',
        actividades: [
          'Desarrollador full stack y devops del proyecto Argus Risk Management, con múltiples cooperativas siendo parte de este proyecto.',
          'Responsable de asistencia técnica y soporte del proyecto Argus Risk Management.',
          'Desarrollador full stack, devops y responsable del proyecto de integración entre Fitbank y Argus Risk Management: Argus Gateway.',
          'Desarrollador full stack del proyecto core financiero: Argus Core.'
        ],
        etiquetas: [
          'Angular',
          'React',
          'Spring Boot',
          'Flask',
          'Postgresql',
          'Oracle',
          'Jira',
          'Figma',
          'GitHub',
          'Docker',
          'Keycloak',
          'Amazon Web Services',
          'Postman',
          'Linux',
          'SSH',
        ]
      },
      {
        cargo: 'Pasante de desarrollo de software',
        empresa: 'Futura EC Cía Ltda',
        fechaInicial: 'nov. 2021',
        fechaFinal: 'ene. 2022',
        actividades: [
          'Diseñador de interfaces de usuario del proyecto Argus Risk Management.',
          'Desarrollador front end del proyecto Argus Risk Management.',
        ],
        etiquetas: [
          'Angular',
          'Spring Boot',
          'Flask',
          'Postgresql',
          'Amazon Web Services',
          'GitHub',
          'Postman',
          'Figma',
        ]
      },
      {
        cargo: 'Pasante de administración de sistemas',
        empresa: 'SECOMPU',
        fechaInicial: 'may. 2017',
        fechaFinal: 'jun. 2017',
        actividades: [
          'Reparar equipos informáticos (laptop, computadoras de escritorio, impresoras, etc.).',
          'Instalar software en equipos informáticos (sistemas operativos, programas, etc.).',
          'Realizar mantenimiento preventivo y correctivo de equipos informáticos y redes.',
          'Realizar cableado estructurado para redes domésticas y corporativas.',
          'Servicio de atención al cliente.'
        ],
        etiquetas: [
          'Ofimática',
          'Hardware',
          'Redes',
          'Atención al cliente'
        ]
      }
    ];
  }

  obtenerRepositorios(): Repositorio[] {
    return [
      {
        nombre: 'Juego de la vida',
        descripcion: 'Basado en el modelo matemático y computacional denominado "Juego de la vida"',
        repo: 'https://github.com/angelluce/game-of-life',
        etiquetas: ['HTML', ' CSS', 'JavaScript', 'Firebase']
      },
      {
        nombre: 'Grabador de pantalla',
        descripcion: 'Proyecto para probar habilidades de JS, permite grabar la pantalla del navegador',
        repo: 'https://github.com/angelluce/screen_recorder',
        etiquetas: ['HTML', ' CSS', 'JavaScript']
      },
      {
        nombre: 'Liga de fútbol',
        descripcion: 'Aplicación para visualizar los partidos y resultados con un servidor simulado',
        repo: 'https://github.com/angelluce/football-league-web-ui',
        etiquetas: ['Angular', 'Bootstrap']
      },
      {
        nombre: 'Nodejs API',
        descripcion: 'API REST con Nodejs para realizar operaciones CRUD para departamentos',
        repo: 'https://github.com/angelluce/customers-api',
        etiquetas: ['Node.js', 'Express', 'PostgreSQL']
      },
      {
        nombre: 'Flask API',
        descripcion: 'API REST con Flask para realizar operaciones CRUD, almacena los datos en SQLite',
        repo: 'https://github.com/angelluce/FlaskServer',
        etiquetas: ['Flask', 'Jinja', 'Bootstrap', 'SQLite']
      },
      {
        nombre: 'NASA API',
        descripcion: 'Consumo desde la API de la NASA para mostrar la imágenes astronómicas',
        repo: 'https://github.com/angelluce/nasa',
        etiquetas: ['Angular', 'PrimeNG', 'NASA API']
      },
      {
        nombre: 'Rick and Morty API',
        descripcion: 'Consumo desde la API de Rick and Morty para mostrar información de la serie',
        repo: 'https://github.com/angelluce/rick-and-morty',
        etiquetas: ['Angular', 'PrimeNG', 'Rick and Morty API']
      },
      {
        nombre: 'ChatBot WhatsApp',
        descripcion: 'ChatBot para WhatsApp que permite realizar consultas sobre temas varios',
        repo: 'https://github.com/angelluce/chatbot-whatsapp',
        etiquetas: ['Node.js', 'Express', 'PM2']
      },
      {
        nombre: 'Chat GPT API',
        descripcion: 'Apliación con IA que permite generar texto a partir de un texto de entrada',
        repo: 'https://github.com/angelluce/chat-gpt-api',
        etiquetas: ['Python', 'OpenAI']
      },
      {
        nombre: 'Flutter components',
        descripcion: 'Componentes de Flutter para ser reutilizados en diferentes proyectos',
        repo: 'https://github.com/angelluce/flutter_components',
        etiquetas: ['Flutter']
      },
    ];
  }

  // Obtener toda la información
  obtenerInformacionCompleta(): Informacion {
    return {
      perfil: this.obtenerPerfil(),
      contacto: this.obtenerContacto(),
      formacion: this.obtenerFormacionAcademica(),
      certificaciones: this.obtenerCertificaciones(),
      habilidades: this.obtenerHabilidadesDesatacas(),
      conocimientos: this.obtenerConocimientos(),
      experiencia: this.obtenerExperienciaLaboral(),
      repositorios: this.obtenerRepositorios()
    };
  }
}

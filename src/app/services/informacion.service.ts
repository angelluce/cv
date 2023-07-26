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
      descripcion: 'Gran motivación para continuar aprendiendo y ' +
        'mejorando habilidades laborales para crecer profesionalmente. ' +
        'Confianza en mi capacidad de contribuir con ideas interesantes y ' +
        'novedosas dentro de las distintas fases de desarrollo de software.'
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
        enlace: 'https://www.instagram.com/angel.lu24/',
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
      {
        titulo: 'Bachillerato Técnico - De Servicios ' +
          'en Administración de Sistemas del ' +
          'Colegio Técnico Industrial Ricaurte.',
        fecha: 'Cuenca, 2017.'
      }
    ];
  }

  obtenerCertificaciones(): Certificacion[] {
    return [
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
      {
        titulo: 'NDG Linux Unhatched',
        empresa: 'Cisco Networking Academy',
        fecha: 'ago. 2020',
      },
      {
        titulo: 'Introducción a IoT',
        empresa: 'Cisco Networking Academy',
        fecha: 'ago. 2020',
      }
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
        descripcion: 'Metodología',
        elemento: [
          'SCRUM',
          'XP'
        ]
      },
      {
        descripcion: 'Bases de datos',
        elemento: [
          'PostgreSQL',
          'Oracle',
          'Firestore'
        ]
      },
      {
        descripcion: 'Lenguajes',
        elemento: [
          'Java',
          'JavaScript',
          'TypeScript',
          'HTML - CSS',
          'Python',
          'Dart',
          'SQL'
        ]
      },
      {
        descripcion: 'Frameworks',
        elemento: [
          'Angular',
          'Spring Boot',
          'Ionic',
          'Flask',
          'Express',
          'React',
          'Flutter',
        ]
      },
      {
        descripcion: 'Herramientas en la nube',
        elemento: [
          'Amazon Web Services',
          'Firebase',
          'Jira',
        ]
      },
      {
        descripcion: 'Repositorios',
        elemento: [
          'GitHub'
        ]
      }
    ];
  }

  obtenerExperienciaLaboral(): ExperienciaLaboral[] {
    return [
      {
        cargo: 'Desarrollador autónomo',
        empresa: 'Freelance',
        fechaInicial: 'nov. 2018',
        fechaFinal: 'actilidad',
        actividades: [
          'Desarrollar proyectos de software (aplicaciones web, móviles y escritorio)',
          'Diseñar bases de datos SQL y No SQL',
          'Desplegar aplicaciones en la nube',
        ]
      },
      {
        cargo: 'Desarrollador full stack',
        empresa: 'Futura EC Cía Ltda',
        fechaInicial: 'feb. 2022',
        fechaFinal: 'may. 2023',
        actividades: [
          'Desarrollador full stack y responsable del proyecto integral de riesgos para cooperativas: Argus Risk Management',
          'Desarrollador full stack  y responsable del proyecto de integración entre Fitbank y Argus Risk Management: Argus Gateway',
          'Encargado de operaciones (devops) del proyecto Argus Risk Management',
          'Responsable de asistencia técnica y soporte del proyecto Argus Risk Management',
          'Desarrollador full stack del proyecto core financiero: Argus Core'
        ]
      },
      {
        cargo: 'Pasante de desarrollo de software',
        empresa: 'Futura EC Cía Ltda',
        fechaInicial: 'nov. 2021',
        fechaFinal: 'ene. 2022',
        actividades: [
          'Diseñador de interfaces de usuario',
          'Desarrollador front end del proyecto Argus Risk Management',
          'QA del proyecto Argus Risk Management',
          ]
      },
      {
        cargo: 'Pasante de administración de sistemas',
        empresa: 'SECOMPU',
        fechaInicial: 'may. 2017',
        fechaFinal: 'jun. 2017',
        actividades: [
          'Reparar equipos informáticos',
          'Instalar software y hardware',
          'Realizar mantenimiento preventivo y correctivo de equipos informáticos',
          'Realizar cableado estructurado',
          'Servicio de atención al cliente'
          ]
      }
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
      experiencia: this.obtenerExperienciaLaboral()
    };
  }
}

import {Injectable} from '@angular/core';
import {Informacion} from "../models/Informacion";
import {PerfilPersonal} from "../models/PerfilPersonal";
import {Contacto} from "../models/Contacto";
import {RedSocial} from "../models/RedSocial";
import {FormacionAcademica} from "../models/FormacionAcademica";
import {HabilidadDestacada} from "../models/HabilidadDestacada";
import {Conocimientos} from "../models/Conocimientos";
import {ExperienciaLaboral} from "../models/ExperienciaLaboral";

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
        enlace: 'https://www.linkedin.com/in/angellucero/'
      },
      {
        nombre: 'GitHub',
        enlace: 'https://github.com/angelluce'
      },
      {
        nombre: 'Instagram',
        enlace: 'https://www.instagram.com/angel.lu24/'
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
        titulo: 'Bachillerato Técnico - De Servicios ' +
          'en Administración de Sistemas del ' +
          'Colegio Técnico Industrial Ricaurte.',
        fecha: 'Cuenca, 2017.'
      },
      {
        titulo: 'Tecnología Superior en Desarrollo de ' +
          'Software del Instituto Superior Tecnológico del Azuay.',
        fecha: 'Cuenca, 2022.'
      }
    ];
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

  obtenerConocimientos(): Conocimientos[] {
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
        cargo: 'Desarrollador full stack',
        empresa: 'Futura EC Cía Ltda',
        fechaInicial: 'Feb. 2022',
        fechaFinal: 'May. 2023',
        actividades: [
          'Desarrollador full stack y responsable del proyecto integral de riesgos para cooperativas: Argus Risk Management',
          'Desarrollador full stack  y responsable del proyecto de integración entre Fitbank y Argus Risk Management: Argus Gateway',
          'Encargado de operaciones (devops) del proyecto Argus Risk Management',
          'Responsable de asistencia técnica y soporte del proyecto Argus Risk Management',
          'Desarrollador full stack del proyecto core financiero: Argus Core'
        ]
      },
      {
        cargo: 'Pasante de desarrollo',
        empresa: 'Futura EC Cía Ltda',
        fechaInicial: 'Nov. 2021',
        fechaFinal: 'Ene. 2022',
        actividades: [
          'Diseñador de interfaces de usuario',
          'Desarrollador front end del proyecto Argus Risk Management',
          'QA del proyecto Argus Risk Management',
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
      habilidades: this.obtenerHabilidadesDesatacas(),
      conocimientos: this.obtenerConocimientos(),
      experiencia: this.obtenerExperienciaLaboral()
    };
  }
}

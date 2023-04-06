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
      profesion: 'Tecnólogo Superior en Desarrollo de Software',
      descripcion: 'Gran motivación para continuar aprendiendo y ' +
        'mejorando habilidades laborales para crecer profesionalmente. ' +
        'Confianza en mi capacidad de contribuir con ideas interesantes ' +
        'y novedosas dentro de las distintas fases de desarrollo de software.'
    };
  }

  obtenerRedesSociales(): RedSocial[] {
    return [
      {
        nombre: 'GitHub',
        enlace: 'https://github.com/angelluce',
        icono: 'fab fa-github'
      }
    ];
  }

  obtenerContacto(): Contacto {
    return {
      edad: 24,
      direcion: 'Cuenca - Ecuador',
      correo: 'angelluce244@gmail.com',
      telefono: '096 724 7258',
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
          'Kanban',
        ]
      },
      {
        descripcion: 'Bases de datos',
        elemento: [
          'PostgreSQL',
        ]
      },
      {
        descripcion: 'Lenguajes',
        elemento: [
          'Java',
          'JavaScript',
          'TypeScript',
          'Python',
        ]
      },
      {
        descripcion: 'Frameworks',
        elemento: [
          'Angular',
          'Spring Boot',
          'Ionic',
          'Flask',
          'Flutter',
        ]
      },
      {
        descripcion: 'Herramientas en la nube',
        elemento: [
          'AWS',
          'Heroku',
          'Firebase',
          'Digital Ocean',
        ]
      },
      {
        descripcion: 'Repositorios',
        elemento: [
          'GitHub',
        ]
      }
    ];
  }

  obtenerExperienciaLaboral(): ExperienciaLaboral[] {
    return [
      {
        cargo: 'Desarrollador full stack',
        empresa: 'Futura EC Cía Ltda',
        fechaInicial: 'Nov. 2021',
        fechaFinal: 'Actualmente',
        actividades: [
          'Desarrollador FullStack y responsable de Sistema Integral de Riesgos',
          'Desarrollador FullStack y responsable de proyecto de integración',
          'Encargado de DevOps de los proyectos de software',
          'Responsable de asistencia técnica y soporte'
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

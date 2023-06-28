import {PerfilPersonal} from "./PerfilPersonal";
import {Contacto} from "./Contacto";
import {FormacionAcademica} from "./FormacionAcademica";
import {HabilidadDestacada} from "./HabilidadDestacada";
import {Conocimiento} from "./Conocimiento";
import {ExperienciaLaboral} from "./ExperienciaLaboral";
import {Certificacion} from "./Certificacion";

export class Informacion {
  perfil: PerfilPersonal;
  contacto: Contacto;
  formacion: FormacionAcademica[];
  certificaciones: Certificacion[];
  habilidades: HabilidadDestacada[];
  conocimientos: Conocimiento[];
  experiencia: ExperienciaLaboral[];
}

import {PerfilPersonal} from "./PerfilPersonal";
import {Contacto} from "./Contacto";
import {FormacionAcademica} from "./FormacionAcademica";
import {HabilidadDestacada} from "./HabilidadDestacada";
import {Conocimientos} from "./Conocimientos";
import {ExperienciaLaboral} from "./ExperienciaLaboral";

export class Informacion {
  perfil: PerfilPersonal;
  contacto: Contacto;
  formacion: FormacionAcademica[];
  habilidades: HabilidadDestacada[];
  conocimientos: Conocimientos[];
  experiencia: ExperienciaLaboral[];
}

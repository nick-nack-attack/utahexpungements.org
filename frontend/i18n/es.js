import englishTranslations from "./en.js";

/**
 *
 * @type {{"free to use": string, "previously used names": string, about: string, "law enforcement agency": string, "social security number": string, "expungement basics": string, "def word - incident": string, respondent: string, "thirty days passed since arrest": string, "not lawyers": string[], "first name": string, "previously please explain": string, "last name spouse": string, "home page title": string, "degree of your criminal conviction": string, "menu item - forms": string, state: string, "public interest cause": string, "court address city": string, "home page primary action": string, zip: string, plaintiff: string, "one of the follow has occured": string, "reason it matters": string, "resolution of the conviction": string, "got it": string, "coe recipient explanation": string, "petition conviction name": string, "previously applied": string, "fill out paperwork": string, "severe crime list": string, "is traffic expungement": string, "i have not been arrested since this arrest": string, "def - court case": string[], phone: string, "order on petition to expunge records short descr": string, "explain why expunging this crime is not contrary to the public's interest": string, "def - incident": string, "motion to waive fees": string, "are you filling this out for yourself": string, "fbi #": string, "justice court cover sheet short descr": string, "day phone": string, "court address state": string, "how long answer": string[], "i disagree because": string, city: string, "petition for drug conviction": string, "how website helps": string, "def word - expungement": string, "drivers license #": string, "ask a question": string, vocabulary: string, "the following court case was filed as a result of the arrest": string, "last name": string, "how long does it take": string, "def - coe": string[], "coe recipient name": string, "choose one": string, "basics crumb": string, "show forms under construction": string, "petition for drug conviction short description": string, "menu item - overview": string, "time periods have elapsed": string, "def - charge": string, "no arrests since last": string, "def - disposition": string[], "judge full name": string, "def word - expungement order": string, "i was not convicted of the offense": string, "def word - conviction": string, "menu item - ask a question": string, "report problem": string, "first thur": string, "offender #": string, "was petitioner convicted for case": string, "foq descr": string[], "no criminal case pending": string, "statement made by opposition": string, date: string, "fop descr": string[], "do i qualify": string, "bci eligibility cause": string, "def - bci": string[], "app for coe with release": string, "fill out forms": string, "how does website help": string, "drivers license state": string, "def word - disposition": string, "clinic time": string, "is acquittal expungement": string, "click for form details": string, "def - conviction": string, defendant: string, continue: string, "def - expungement order": string, "middle name": string, "overview landing 1": string, "menu item - tool": string, "overview landing 3": string, "overview landing 2": string, "overview landing 5": string, "def word - certificate of eligibility": string, "overview landing 4": string, "clinic sponsored by": string, "district court cover sheet": string, "at least 30 days have passed since I was arrested": string, "overview landing 6": string[], "application for board of pardon expungement": string, "if multiple convictions": string, "get started": string, "lea file number": string, "not convincted of criminal episodes": string, "app for coe with release short descr": string, "def word - court case": string, "arrested date": string, "what is cost": string, "menu item - dashboard": string, "first name spouse": string, "menu item - vocabulary": string, "court address zip": string, "motion to waive fees short descr": string, birthday: string, "home phone": string, "case number": string, "the law enforcement agency's file number": string, "sponsored by": string, "def word - charge": string, "has paid fees": string, "email address": string, "if cannot afford": string, "overview landing": string, "skip intro": string, "menu item - about": string, "cost answer": string[], "Civil Filing Coversheet": string, "what is expg": string, "will be resolved by": string, "coe recipient agency": string, "was case filed": string, "why does it matter": string, "requesting court to reduce my convition to": string, street: string, "menu item - home": string, "menu item - step 2": string, "court address street": string, "ftu descr": string[], "menu item - step 1": string, "middle name spouse": string, "menu item - step 4": string, "def - expungement": string[], "menu item - step 3": string, "no charges were filed": string, "pardon married": string, "app for board of pardon expungement": string, "petition conviction short descr": string, "justice court cover sheet": string, "order on petition to expunge records": string, "app for coe short descr": string, "def word - bci": string, "find out qualify": string, "home page": string, location: string, time: string, "qualify descr": string[]}}
 */
const translations = {
  /* home page */
  "home page title": "Borrar el historial criminal en Utah",
  "home page primary action": "Empezar con un expungement",
  "fill out forms": "Rellene los documentos",
  "free to use": "¡Completamente gratis para utilizar!",
  "ftu descr": [
    "Este sitio web fue ",
    "construido por miembros de la communidad de Utah para los miembros de la comunidad de Utah",
    `. Nunca le pediremos pagar por nada.`
  ],
  "find out qualify": "Averigüe si usted se califica",
  "foq descr": [
    "Nuestra ",
    "herramienta de software",
    " le ayudará saber si y cuándo sus condenas estan listas para borrarse del historial criminal."
  ],
  "fill out paperwork": "Rellene los papeles en línea",
  "fop descr": [
    `Introduzca su información en un formulario web y `,
    `nosotros generamos los documentos`,
    ` que se necesiten para presentar a las cortes.`
  ],

  /* menu items */
  "menu item - dashboard": "Tablero",
  "menu item - home": "Hogar",
  "menu item - ask a question": "Ask a question",
  "menu item - forms": "Hacer una pregunta",
  "menu item - overview": "Visión general",
  "menu item - vocabulary": "Vocabulario",
  "menu item - tool": "Herramienta de eliminación de antecedentes penales",
  "menu item - step 1": "Paso 1: Eres elegible?",
  "menu item - step 2": "Paso 2: Certificado de elegibilidad",
  "menu item - step 3": "Paso 3: Petición de archivo",
  "menu item - step 4": "Paso 4: Sirva la petición",
  "menu item - about": "Sobre",

  /* footer */
  "home page": "Página de inico",
  "what is expg": "¿Qué es un expungement?",
  "ask a question": "Hacer una pregunta",
  about: "Acerca de",
  "report problem": "Reportar un problema",

  /* overview */
  continue: "Continuar",
  "skip intro": "Saltar introducción",
  "overview landing": "Limpiemos sus antecedentes penales",
  "overview landing 1": `Los antecedentes penales pueden impedirle conseguir un trabajo o una vivienda. Pero después de una eliminación, los empleadores y propietarios ya no verán sus antecedentes penales durante las verificaciones de antecedentes.`,
  "overview landing 2": `Una nota sobre este sitio web`,
  "overview landing 3": `Este sitio web siempre será de uso completamente gratuito. Está`,
  "overview landing 4": `y está destinado a ayudar especialmente a las personas que no tienen acceso a un abogado.`,
  "overview landing 5": `Puede crear una cuenta si desea guardar sus datos, pero también puede utilizar el sitio web sin una cuenta.`,
  "overview landing 6": [
    `Siéntete libre de`,
    `informar un problema`,
    `, `,
    `envíenos un correo electrónico directamente`,
    `, o `,
    `haga una pregunta en nuestro foro público.`
  ],

  /* overview basics */
  "expungement basics": "Los basicos",
  "basics crumb": "Basicos",
  "why does it matter": "¿Por qué eso importa?",
  "reason it matters": `
    Pasar una verificación de antecedentes puede marcar la diferencia a la hora de conseguir un trabajo o una vivienda. Después de obtener una eliminación de antecedentes penales,
     los empleadores y los propietarios ya no podrán ver esas condenas anteriores.
  `,
  "do i qualify": "¿Califico?",
  "qualify descr": [
    `El `,
    ` define las reglas para la eliminación de antecedentes penales. Hemos reunido `,
    `una herramienta`,
    ` para ayudarlo a saber cómo se aplican esas reglas a usted.`
  ],
  "if multiple convictions": `
    Si tiene varias condenas penales, a veces podrá eliminarlas todas, a veces solo algunas, ya veces ninguno de ellos, 
    dependiendo de una variedad de factores.
  `,
  "how long does it take": "¿Cuánto tiempo tarda el proceso?",
  "how long answer": [
    `Aproximadamente de 8 a 16 meses. Si está interesado en ayudar a acelerar las cosas, consulte nuestra `,
    `change.org petición`,
    ` donde explicamos por qué lleva tanto tiempo y cómo pensamos que podría mejorarse.`
  ],
  "what is cost": "¿Cuánto cuesta?",
  "cost answer": [
    `Una `,
    `verificación preliminar`,
    ` para ver si califica para una cancelación cuesta solo $ 15. Si decide proceder con un costo de eliminación, 
    cuesta alrededor de $200 si tiene una condena penal y alrededor de $ 100 más por cada condena adicional.`
  ],
  "if cannot afford": `Si no puede pagar el costo, se pueden eximir algunas de las tarifas, lo cual le mostraremos cómo hacerlo más adelante.`,
  "how does website help": "¿Cómo ayuda este sitio web?",
  "how website helps": `
    Este sitio web es una herramienta de autoservicio que permite a las personas completar formularios de eliminación 
    de antecedentes penales en línea. Nosotros también
     proporcionar información para ayudar a las personas a saber si cumplen los requisitos y cuáles son los pasos.
  `,
  "not lawyers": [
    `No somos abogados y no podemos representarlo en la corte. Pero no dude en `,
    `enviarnos un correo electrónico`,
    ` o `,
    `hacer una pregunta`,
    ` si desea hablar con nosotros.`
  ],

  "got it": "Entiendo",

  /* overview vocabulary */
  vocabulary: "Vocabulario",
  "get started": "Empezar",
  "def word - expungement": "eliminación de antecedentes penales",
  "def - expungement": [
    `Una eliminación es el proceso de sellar los registros judiciales.
      Esto significa que después de una eliminación de antecedentes penales, los empleadores y los propietarios ya no verán `,
    `las condenas`,
    ` or `,
    `los cargos penales anteriores`,
    ` en una verificación de antecedentes.`
  ],
  "def word - expungement order":
    "orden de eliminación de antecedentes penales",
  "def - expungement order": "Defn",
  "def word - court case": "caso de Corte",
  "def - court case": [
    `Un caso judicial es un procedimiento legal en el que `,
    `se le acusa`,
    ` de uno o más delitos. Después de ser arrestado o acusado de un delito, un caso judicial es lo que determina 
    si usted es culpable y qué sucede a continuación. Esto puede implicar que vaya a la corte, aunque a veces el 
    resultado se decidirá sin tener que ir a la corte.`,
    `Los casos judiciales son importantes para la eliminación de antecedentes penales porque debe eliminar cada caso 
    judicial individualmente. Cuando borra un caso judicial, se sellan todos los registros de los cargos correspondientes.`
  ],
  "def word - incident": "incidente",
  "def - incident": "Defn",
  "def word - bci": "BCI",
  "def - bci": [
    `The Bureau of Criminal Identification (BCI) es una agencia gubernamental ubicada en el área de Salt Lake City. 
    Proporciona dos servicios que son útiles para la eliminación de antecedentes penales:`,
    `Impresión de los antecedentes penales de una persona`,
    `. Esto es útil para saber si puede calificar para una eliminación de antecedentes penales. Tarda unos 15 minutos y cuesta $ 15.`,
    `Certificados de elegibilidad para una eliminación de antecedentes penales`,
    `. Estos son necesarios para obtener una eliminación. Debe completar una solicitud para este y cuesta $ 65 y aproximadamente
       7 meses para que su solicitud sea procesada. `,
    `Información del contacto`,
    `8:00am - 5:00pm, de lunes a viernes`
  ],
  "def word - certificate of eligibility": "Certificado de elegibilidad",
  "def - coe": [
    `Un certificado de elegibilidad es un documento en papel que se obtiene después de completarlo `,
    `una aplicación`,
    ` y enviándolo al `,
    `. Este documento significa que califica para una eliminación y puede proceder a `,
    `presentar una petición`,
    ` con el tribunal para recibir una orden de eliminación de antecedentes penales`,
    `Debe obtener un certificado de elegibilidad por separado para cada `,
    ` que le gustaría borrar. Cuesta $ 65 solicitar uno o más certificados. Una vez que se procesa su solicitud, cuesta otros $65 por cada
       certificado.`,
    `Puede leer más sobre los certificados de elegibilidad en `
  ],
  "def word - conviction": "convicción",
  "def - conviction": "Defn",
  "def word - charge": "la acusación",
  "def - charge": "Defn",
  "def word - disposition": "disposición",
  "def - disposition": [
    `Pagado`,
    `Esto significa que fue declarado No culpable del delito. Sin embargo, el caso judicial aún puede aparecer en las 
    verificaciones de antecedentes, por lo que es posible que aún necesite una eliminación de antecedentes penales por esto.`,
    `Convicto`,
    `Esto significa que fue declarado culpable del delito. Esto se mostrará en una verificación de antecedentes hasta 
    que lo elimine y tendrá en cuenta si califica para una eliminación de antecedentes penales.`,
    `Despedido sin perjuicio`,
    `Esto significa que el gobierno decidió retirar los cargos en su contra para siempre, lo que significa que nunca lo van a procesar por esto.`,
    `Despedido con prejuicio`,
    `Esto significa que el gobierno decidió retirar los cargos en su contra por ahora, pero se reserva el derecho de traerlos de vuelta más tarde si así lo desea.`,
    `Súplica en suspenso`,
    `Esto significa que usted admite la culpa o no se opone, pero no es condenado ni castigado siempre que cumpla 
    con condiciones específicas. A menudo (pero no siempre), las condiciones implican no cometer un delito similar 
    durante cierto período de tiempo.`
  ],

  /* Expungement clinic info */
  location: "Localización",
  "first thur": "Primer jueves de cada mes",
  date: "Fecha",
  time: "Tiempo",
  "clinic time":
    "5:00pm - 6:00pm (Planee llegar a más tardar a las 6 pm, de lo contrario tendrá que esperar hasta el mes siguiente)",
  "sponsored by": "Patrocinado por",
  "clinic sponsored by":
    "S.J. Quinney Facultad de Derecho y Servicios Legales de Utah",

  /* application for coe form */
  "app for coe short descr":
    "Este formulario solicita un certificado que se puede utilizar para solicitar una eliminación.",
  "is traffic expungement": "¿Es esto una eliminación de antecedentes penales?",
  "is acquittal expungement":
    "¿Se trata de una eliminación de antecedentes penales por absolución o despido?",

  /* petition conviction form */
  "petition conviction name": "Petición para borrar registros (condena)",
  "petition conviction short descr":
    "Este formulario solicita una orden judicial de eliminación. Primero debe obtener un Certificado de elegibilidad antes de llenar este formulario.",

  /* form bank */
  "click for form details": "Haga clic para obtener detalles del formulario",
  "show forms under construction":
    "Muestre formularios que están en construcción y que no están completamente listos para usar.",

  // district court cover sheet
  "district court cover sheet": "Portada del tribunal de distrito",
  "Civil Filing Coversheet": "Hoja de cubierta de archivo civil",

  /* justice court cover sheet */
  "justice court cover sheet": "Hoja de portada del Tribunal de Justicia",
  "justice court cover sheet short descr":
    "La portada de la documentación que presenta si su caso está en un Tribunal de Justicia.",

  /* motion to waive fees */
  "motion to waive fees": "Moción de exención de tarifas",
  "motion to waive fees short descr":
    "Este formulario se puede presentar con otros formularios para solicitar que la corte elimine los honorarios por presentar un formulario.",

  /* petition for drug conviction */
  "petition for drug conviction": "Petición de condena por drogas",
  "petition for drug conviction short description":
    "Este formulario solicita una orden judicial para la eliminación de antecedentes penales por drogas. Primero debe obtener un Certificado de elegibilidad antes de llenar este formulario.",

  /* petition to expunge records (e.g. charges never filed, dismissal or acquittal) */
  "arrested date": "Fecha de arresto",
  "law enforcement agency": "Agencia de la ley",
  "i was not convicted of the offense": "No fui condenado por el delito",
  "at least 30 days have passed since I was arrested":
    "Han pasado al menos 30 días desde que me arrestaron",
  "i have not been arrested since this arrest":
    "No he sido arrestado desde este arresto",
  "no charges were filed": "No se presentaron cargos",
  "one of the follow has occured":
    "Ha ocurrido una de las siguientes situaciones:",
  "choose one": "Elige uno",
  "the law enforcement agency's file number":
    "Número de expediente de la agencia de aplicación de la ley",
  "the following court case was filed as a result of the arrest":
    "El siguiente caso judicial fue presentado como resultado del arresto.",

  /* global form data */
  "first name": "Primer nombre",
  "last name": "Apellido",
  "middle name": "Segundo nombre",
  "previously used names": "Nombres usados anteriormente",
  birthday: "Cumpleaños",
  street: "Dirección",
  city: "Ciudad",
  state: "Estado",
  zip: "Código postal",
  phone: "Número de teléfono",
  "email address": "Dirección de correo electrónico",
  "social security number": "Número de seguridad social",
  "drivers license #": "Número de carnet de conducir",
  "drivers license state": "Estado de la licencia de conducir",
  "home phone": "Teléfono de casa",
  "day phone": "Teléfono diurno",
  "court address street": "Dirección de la corte Calle",
  "court address city": "Ciudad de la dirección del tribunal",
  "court address state": "Estado de la dirección del tribunal",
  "court address zip": "Código postal de la dirección del tribunal",

  /* petition for conviction form */
  "judge full name": "Nombre completo del juez",
  "case number": "Número de caso",
  defendant: "Acusado",
  respondent: "Demandado",
  "are you filling this out for yourself":
    "¿Está completando esto usted mismo?",
  "explain why expunging this crime is not contrary to the public's interest":
    "Explique por qué eliminar este delito no es contrario al interés público.",

  /* app for coe with release form */
  "app for coe with release":
    "Solicitud de certificado de elegibilidad (autorización de terceros)",
  "app for coe with release short descr":
    "Una versión especial de la Solicitud de COE. Esto le permite enviar certificados a la dirección de otra persona. Úselo solo si se lo indica un abogado o un funcionario del gobierno.",
  "coe recipient explanation":
    "¿Le gustaría enviar su certificado de elegibilidad a la dirección de otra persona?",
  "coe recipient name":
    "¿Cuál es el nombre de la persona a la que le gustaría enviar los documentos del Certificado de elegibilidad?",
  "coe recipient agency":
    "¿Cuál es el nombre de la agencia para la que trabajan? (Si es aplicable)",

  /* charges not filed form */
  "will be resolved by": "Será resuelto por",

  /* reply to statement form */
  "statement made by opposition":
    "Declaración hecha por el fiscal, la víctima o la libertad condicional y bajo palabra para adultos con la que no estoy de acuerdo",
  "i disagree because": "No estoy de acuerdo porque",

  /* application for pardon */
  "offender #": "Número del infractor",
  "fbi #": "Número del FBI",
  "previously applied":
    "¿Alguna vez ha solicitado o se le ha concedido un indulto?",
  "previously please explain": `Explique sus razones para solicitar un indulto. Incluir un
     resumen de cómo su vida y situación o circunstancias han
     cambiado desde su último arresto. También incluye las razones por las que te sientes
     usted es un buen candidato para la consideración de indulto, así como el
     Circunstancias que cree que apoyan tal perdón. Por favor use y
     Adjunte hojas adicionales si es necesario.`,
  "pardon married":
    "Si está casado, proporcione la siguiente información para su cónyuge",
  "first name spouse": "Nombre del cónyuge",
  "middle name spouse": "Segundo nombre del cónyuge",
  "last name spouse": "Apellido del cónyuge",
  "application for board of pardon expungement":
    "DESCRIPCIÓN DE LAS NECESIDADES", // not sure on this
  "app for board of pardon expungement":
    "Solicitud de cancelación de antecedentes penales de la Junta de Indultos",

  /* motion to reduce conviction */
  plaintiff: "El demandante",
  "degree of your criminal conviction": "Grado de sus antecedentes penales",
  "requesting court to reduce my convition to":
    "Solicitando al tribunal que reduzca mi condena a",

  /* special certificate from bci */
  "was petitioner convicted for case":
    "¿Fue condenado el peticionario por el caso?\n\r" +
    "Selecting an option will show additional REQUIRED fields depending on answer.\n\r" +
    "También se REQUIERE el Certificado de Elegibilidad de BCI (Sección 4).",
  "lea file number": "Número de archivo de la agencia de aplicación de la ley",
  "was case filed": "¿Se archivó el caso?",
  "thirty days passed since arrest":
    "Han pasado al menos 30 días desde que me arrestaron",
  "no arrests since last": "No he sido arrestado desde este arresto",
  "resolution of the conviction": "¿Cuál fue la resolución de la condena?",
  "severe crime list":
    "Ninguno de los delitos son:\n\r" +
    "     • un delito capital o de primer grado\n\r" +
    "     • un delito violento como se define en § 76-3-203.5\n\r" +
    "     • homicidio automovilístico\n\r" +
    "     • delito grave de conducir bajo la influencia\n\r" +
    "     • un delito sexual registrable como se define en § 77-27-21.5",
  "no criminal case pending":
    "No hay ningún caso penal pendiente en mi contra ni que esté siendo investigado en ninguna jurisdicción.",
  "not convincted of criminal episodes":
    "En mi vida, no he sido condenado en episodios criminales separados de:\n\r" +
    "     • dos o más delitos graves\n\r" +
    "     • tres o más delitos de los cuales dos son delitos menores de clase A\n\r" +
    "     • cuatro o más delitos de los cuales tres son delitos menores de clase B\n\r" +
    "     • cinco o más delitos de cualquier grado que no sean infracciones",
  "has paid fees":
    "He pagado todas las multas, tarifas, restituciones e intereses.",
  "time periods have elapsed":
    "Los siguientes períodos de tiempo han transcurrido desde la fecha en que fui condenado o liberado de encarcelamiento, " +
    "libertad condicional o libertad condicional, lo que ocurra en último lugar:\n\r" +
    "     • 10 años en el caso de una condena por delito menor de § 41-6a-501(2) o una condena por delito grave de § 58-37-8(2)(g)\n\r" +
    "     • 7 años en caso de delito grave\n\r" +
    "     • 5 años en el caso de un delito menor de clase A\n\r" +
    "     • 4 años en el caso de un delito menor de clase B\n\r" +
    "     • 3 años en el caso de cualquier otro delito menor o infracción\n\r",
  "bci eligibility cause":
    "Certificado de elegibilidad de BCI (¿Por qué cree que es elegible para la eliminación de antecedentes penales?)",
  "public interest cause":
    "Explicar por qué la eliminación de los delitos no es contraria al interés público.",

  /* order on petition to expunge records */
  "order on petition to expunge records":
    "Orden sobre la petición para borrar registros (despido o absolución)",
  "order on petition to expunge records short descr":
    "Un formulario que presenta ante los tribunales junto con su petición de eliminación si su caso fue desestimado o absuelto."
};

window.__ = function(name) {
  let translation = translations[name];

  if (!translation) {
    translation = englishTranslations[name];
    if (translation) {
      console.warn(`There is no spanish translation for '${name}'`);
    }
  }

  if (!translation) {
    throw new Error(`There is no spanish or english translation for '${name}'`);
  }

  return translation;
};

export default translations;

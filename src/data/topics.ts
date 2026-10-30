// Registro de páginas temáticas (long-tail) para plazasanmartinarg.com.
// Cada entrada es una página independiente en español (es-AR) que responde a
// una intención de búsqueda concreta. El contenido histórico se basa en fuentes
// públicas de la Municipalidad de Córdoba (Turismo y Cultura), la Agencia Córdoba
// Turismo y la Universidad Nacional de Córdoba; los datos operativos (transporte,
// horarios, precios) se presentan como orientación y se remite a fuentes oficiales
// para el dato vigente. No se inventan tarifas, direcciones ni horarios.

export type SectionKey = 'historia' | 'visita' | 'como-llegar' | 'cerca' | 'comer' | 'rutas';
export type Priority = 'P1' | 'P2' | 'P3';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  section: SectionKey;
  priority: Priority;
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  updated: string;
  image?: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

export const SECTION_LABELS: Record<SectionKey, string> = {
  historia: 'Historia',
  visita: 'Visita',
  'como-llegar': 'Cómo llegar',
  cerca: 'Alrededores',
  comer: 'Comer y cafés',
  rutas: 'Recorridos',
};

export const TOPICS: Topic[] = [
  // ───────────────────────── A. HISTORIA / MONUMENTO ─────────────────────────
  {
    slug: 'monumento-san-martin',
    section: 'historia',
    priority: 'P1',
    kicker: 'Monumento y símbolos',
    h1: 'Monumento al General San Martín en Plaza San Martín',
    metaTitle: 'Monumento a San Martín en Córdoba: símbolos y detalles — Guía',
    metaDescription:
      'El monumento ecuestre al General José de San Martín en Plaza San Martín de Córdoba: cuándo se inauguró, qué representa y desde dónde observarlo mejor.',
    lead: 'La estatua ecuestre preside el centro geométrico de la plaza desde 1916. Es el punto de encuentro visual del casco histórico y una de las imágenes más reconocidas de Córdoba.',
    updated: '30 de octubre de 2026',
    image: '/photos/monumento.jpg',
    sections: [
      {
        heading: 'Cuándo se inauguró',
        paragraphs: [
          'El monumento ecuestre al General José de San Martín se inauguró el 8 de julio de 1916. Según la fuente municipal, reemplazó la glorieta de música que ocupaba el centro de la plaza.',
          'La pieza consolidó el nombre actual del espacio: de la antigua Plaza Mayor pasó a identificarse como Plaza San Martín, en torno a la figura del Libertador.',
        ],
      },
      {
        heading: 'Qué representa',
        paragraphs: [
          'La escultura muestra a San Martín a caballo, en actitud de mando. El conjunto incluye relieves y detalles que aluden al cruce de los Andes y a la campaña libertadora.',
          'Conviene rodear el pedestal para leer el conjunto completo: la figura se aprecia de frente desde el perímetro de la Catedral y de perfil desde el lado del Cabildo.',
        ],
        bullets: [
          'Observá la fachada principal de la Catedral al fondo para encuadrar la escultura con el marco histórico.',
          'Las inscripciones y los bajorrelieves se leen mejor a la luz de la mañana.',
        ],
      },
      {
        heading: 'Cómo mirarlo sin prisa',
        paragraphs: [
          'Empezá en el centro, rodeá el monumento y después mirá hacia afuera: la plaza se entiende mejor cuando se lee junto con la Catedral, el Cabildo y las calles que salen de sus cuatro lados.',
        ],
        callout:
          'El monumento es una obra al aire libre y de acceso público. No se sube a la estructura ni se marca el patrimonio.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo se inauguró el monumento a San Martín en Córdoba?',
        a: 'La fuente municipal de turismo señala la inauguración el 8 de julio de 1916. Es una referencia histórica; la fecha puede variar en otras fuentes, por lo que conviene contrastarla con material de la Municipalidad y la Universidad Nacional de Córdoba.',
      },
      {
        q: '¿El monumento reemplazó algo?',
        a: 'Sí: según la descripción municipal, ocupó el lugar de la antigua glorieta de música que estaba en el centro de la plaza.',
      },
      {
        q: '¿Se puede entrar al monumento?',
        a: 'El monumento está al aire libre en el centro de la plaza. Se recorre libremente desde el perímetro; el interior no es visitable.',
      },
    ],
    related: ['plaza-mayor-1577', 'edificios-alrededor', 'centro-historico-1-hora'],
  },
  {
    slug: 'plaza-mayor-1577',
    section: 'historia',
    priority: 'P1',
    kicker: 'Orígenes',
    h1: 'La antigua Plaza Mayor de Córdoba y su origen en 1577',
    metaTitle: 'Plaza Mayor de Córdoba 1577: origen de Plaza San Martín — Guía',
    metaDescription:
      'Cómo nació Plaza San Martín como Plaza Mayor en 1577, dentro del damero fundacional de Córdoba, y por qué conserva ese trazado hasta hoy.',
    lead: 'La plaza que hoy lleva el nombre de San Martín nació en 1577 como Plaza Mayor, cuando se organizó el damero de la ciudad. Mirar la plaza es mirar el plano fundador de Córdoba.',
    updated: '30 de octubre de 2026',
    image: '/photos/monumento.jpg',
    sections: [
      {
        heading: 'El damero de 1577',
        paragraphs: [
          'En 1577, cuando se trazó el damero de Córdoba, el espacio que hoy ocupa Plaza San Martín se reservó como Plaza Mayor. Frente a ella se asignaron los solares del Cabildo y de la Iglesia Mayor (hoy Catedral).',
          'Esa decisión fijó el núcleo político, religioso y social de la ciudad: el vacío central organiza los poderes, las calles y la vida pública.',
        ],
      },
      {
        heading: 'De plaza seca a paseo arbolado',
        paragraphs: [
          'Durante la etapa colonial fue una plaza más dura y abierta: mercado, llegada de carretas, procesiones y actos oficiales. La transformación en paseo ajardinado ocurrió de forma gradual, sobre todo en los siglos XIX y XX.',
          'En 1876 se instalaron fuentes de mármol vinculadas al trabajo de José Allio. A comienzos del siglo XX, el paisajista Carlos Thays intervino el espacio con senderos y especies como tipas, lapachos y magnolias.',
        ],
      },
      {
        heading: 'Por qué importa hoy',
        paragraphs: [
          'El trazado de 1577 explica por qué la plaza sigue siendo el centro de gravedad del casco histórico. Desde allí se lee la relación entre el Cabildo, la Catedral y el caminar de la ciudad.',
        ],
        callout:
          'Las fechas y nombres se apoyan en fuentes patrimoniales públicas de la Municipalidad y la Universidad Nacional de Córdoba. Para investigación, contrastá esas fuentes antes de citar cifras exactas.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo se fundó la Plaza San Martín de Córdoba?',
        a: 'El espacio se reservó como Plaza Mayor en 1577, cuando se organizó el damero de Córdoba. Por eso su trazado es contemporáneo al de la propia ciudad.',
      },
      {
        q: '¿Por qué se llama Plaza Mayor?',
        a: 'Era la plaza principal del trazado colonial, frente al Cabildo y a la Iglesia Mayor. El nombre actual se consolidó con la inauguración del monumento a San Martín en 1916.',
      },
      {
        q: '¿Qué calles la rodean?',
        a: 'Su perímetro está formado por 27 de Abril, Buenos Aires, Independencia y Rosario de Santa Fe, según el circuito turístico municipal.',
      },
    ],
    related: ['monumento-san-martin', 'edificios-alrededor', 'cabildo-historico'],
  },
  {
    slug: 'kilometro-cero',
    section: 'historia',
    priority: 'P2',
    kicker: 'Referencia urbana',
    h1: 'Kilómetro Cero de Córdoba: ubicación y significado',
    metaTitle: 'Kilómetro Cero de Córdoba: dónde está y qué significa — Guía',
    metaDescription:
      'Qué es el Kilómetro Cero de Córdoba, por qué se toma la plaza central como referencia y cómo usarlo para orientarte en el casco histórico.',
    lead: 'En muchas ciudades, el Kilómetro Cero marca el punto desde el cual se miden las distancias de las rutas. En Córdoba, la idea de «centro» se asocia naturalmente a la plaza histórica del microcentro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Qué significa',
        paragraphs: [
          'El Kilómetro Cero es una referencia simbólica y de medición: el punto tomado como origen de la numeración de las distancias. En el uso cotidiano, «el centro» de Córdoba es el área de la plaza histórica y sus peatonales.',
          'No todas las ciudades mantienen un hito visible y señalizado de Kilómetro Cero. Por eso, antes de buscar un monumento específico, conviene verificar con fuentes municipales dónde se indica oficialmente esa referencia.',
        ],
      },
      {
        heading: 'Cómo usarlo para orientarte',
        paragraphs: [
          'Si venís al casco histórico, tomá Plaza San Martín como tu punto de partida: desde allí se organizan a pie las visitas a la Catedral, el Cabildo y el Pasaje Santa Catalina.',
          'Para recorridos más largos (Manzana Jesuítica, Mercado Norte), medir la distancia «desde el centro» te ayuda a estimar caminata y paradas.',
        ],
        callout:
          'Si buscás un hito físico de Kilómetro Cero, confirmá su ubicación y estado actual con la señalización local o la información turística municipal antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿Dónde está el Kilómetro Cero de Córdoba?',
        a: 'Depende de la referencia oficial que adopte cada fuente. En la práctica, el microcentro y Plaza San Martín funcionan como el «centro» desde el cual se piensan las distancias. Confirmá con la Municipalidad si existe un hito señalizado.',
      },
      {
        q: '¿Plaza San Martín es el Kilómetro Cero?',
        a: 'No hay una afirmación única y verificada que lo declare así de forma general. Usamos la plaza como punto de referencia para organizar los recorridos a pie, no como una medición oficial certificada.',
      },
    ],
    related: ['plaza-mayor-1577', 'centro-historico-1-hora', 'peatonales'],
  },
  {
    slug: 'edificios-alrededor',
    section: 'historia',
    priority: 'P1',
    kicker: 'Entorno construido',
    h1: 'Edificios históricos alrededor de Plaza San Martín',
    metaTitle: 'Edificios históricos alrededor de Plaza San Martín Córdoba — Guía',
    metaDescription:
      'Los edificios que rodean Plaza San Martín: Catedral, Cabildo, pasajes y fachadas del microcentro, y cómo leer sus diferencias desde la plaza.',
    lead: 'El perímetro de la plaza es un muestrario de la historia urbana de Córdoba. Mirar las fachadas desde adentro ayuda a entender por qué este cuadro es el núcleo del casco histórico.',
    updated: '30 de octubre de 2026',
    image: '/photos/catedral.jpg',
    sections: [
      {
        heading: 'Las fachadas que definen el cuadro',
        paragraphs: [
          'Alrededor de la plaza se suceden la Catedral, el Cabildo Histórico y distintas casonas y fachadas del microcentro. Cada una resume una etapa: lo colonial, lo republicano, lo institucional.',
          'El circuito municipal toma la plaza como punto de partida del centro histórico. Por eso conviene observar el conjunto antes de entrar a cualquier edificio.',
        ],
        bullets: [
          'Catedral: al borde de la plaza, con una larga construcción que combina lenguajes renacentistas, barrocos y neoclásicos.',
          'Cabildo Histórico: antigua sede del gobierno colonial, pieza clave para leer el poder civil frente a la Plaza Mayor.',
          'Pasaje Santa Catalina: pasaje peatonal que enlaza el entorno de la Catedral y el Cabildo.',
        ],
      },
      {
        heading: 'Cómo leer las diferencias',
        paragraphs: [
          'No todos los edificios del contorno son del mismo período. Las alturas, las molduras y los materiales cambian de cuadra en cuadra. Observá hacia afuera mientras caminás el perímetro.',
          'Para profundizar, visitá las páginas de cada edificio cercano: Catedral, Cabildo, Pasaje Santa Catalina y Manzana Jesuítica se explican con más detalle.',
        ],
        callout:
          'Las visitas interiores (Catedral, Cabildo, museos) tienen sus propias condiciones. Confirmalas por separado; la referencia de apertura de la plaza no se extiende a sus interiores.',
      },
    ],
    faqs: [
      {
        q: '¿Qué edificios rodean la plaza?',
        a: 'En el borde inmediato están la Catedral y el Cabildo Histórico; alrededor se suman fachadas del microcentro, el Pasaje Santa Catalina y, a pocas cuadras, la Manzana Jesuítica.',
      },
      {
        q: '¿Cuáles se pueden visitar por dentro?',
        a: 'Catedral, Cabildo y varios museos del entorno tienen condiciones de visita propias. Consultalos individualmente; esta guía no gestiona entradas.',
      },
    ],
    related: ['catedral-de-cordoba', 'cabildo-historico', 'pasaje-santa-catalina'],
  },

  // ───────────────────────── B. VISITA ─────────────────────────
  {
    slug: 'arboles-y-jardines',
    section: 'visita',
    priority: 'P3',
    kicker: 'Paisaje y naturaleza',
    h1: 'Árboles, jardines y paisaje de Plaza San Martín',
    metaTitle: 'Árboles y jardines de Plaza San Martín Córdoba: paisaje — Guía',
    metaDescription:
      'El paisaje de Plaza San Martín en Córdoba: las tipas, lapachos y magnolias del paseo, y cómo cambia la sombra y el color durante el año.',
    lead: 'Más allá del monumento, la plaza es un paseo arbolado. Las tipas, los lapachos y las magnolias dan sombra, color y una atmósfera que cambia con las estaciones.',
    updated: '30 de octubre de 2026',
    image: '/photos/monumento.jpg',
    sections: [
      {
        heading: 'Las especies del paseo',
        paragraphs: [
          'A comienzos del siglo XX, el paisajista Carlos Thays intervino el espacio con una composición más estructurada y especies como tipas, lapachos y magnolias.',
          'Las tipas, con su copa amplia, son las más visibles en verano. Los lapachos suelen llamar la atención cuando florecen, y las magnolias aportan otra escala de follaje y flor.',
        ],
      },
      {
        heading: 'Sombra y confort',
        paragraphs: [
          'En días calurosos, la arboleda permite pausas a la sombra entre el monumento y el perímetro. Córdoba puede tener veranos intensos, así que la sombra mejora la visita.',
          'Llevá agua y protección solar aunque estés a la sombra; y evitá permanecer bajo ramas grandes si hay viento o tormenta.',
        ],
        callout:
          'Las especies y las intervenciones de paisajismo se describen a partir de fuentes municipales (Respira Córdoba y turismo). No garantizamos un inventario botánico completo ni actualizado.',
      },
    ],
    faqs: [
      {
        q: '¿Qué árboles hay en Plaza San Martín?',
        a: 'La fuente municipal menciona especies como tipas, lapachos y magnolias, vinculadas a la intervención de Carlos Thays a comienzos del siglo XX. Podés confirmar detalles botánicos con Respira Córdoba.',
      },
      {
        q: '¿Cuándo florecen los árboles?',
        a: 'Depende del clima de cada año. Los lapachos y magnolias suelen destacarse en su floración; la sombra de las tipas es más constante en verano. Consultá el pronóstico y la época del año al planificar.',
      },
    ],
    related: ['puntos-para-fotos', 'cuanto-tiempo', 'clima'],
  },
  {
    slug: 'puntos-para-fotos',
    section: 'visita',
    priority: 'P2',
    kicker: 'Fotografía',
    h1: 'Dónde sacar fotos en Plaza San Martín (Córdoba)',
    metaTitle: 'Dónde sacar fotos en Plaza San Martín Córdoba: puntos y luz — Guía',
    metaDescription:
      'Los mejores puntos para fotografiar Plaza San Martín en Córdoba: monumento, Catedral de fondo, pasajes y luz según la hora del día.',
    lead: 'La plaza se fotografía bien en casi cualquier horario, pero algunos encuadres y momentos de luz valen la pena. Acá van sugerencias para sacar buenas fotos sin equipo especial.',
    updated: '30 de octubre de 2026',
    image: '/photos/monumento.jpg',
    sections: [
      {
        heading: 'Encuadres clásicos',
        paragraphs: [
          'El monumento ecuestre de frente, con la fachada de la Catedral al fondo, es el plano más icónico. Desde el perímetro del Cabildo, en cambio, obtenés una vista de perfil con otro ritmo.',
          'El Pasaje Santa Catalina suma un plano peatonal y distinto, con perspectiva y escala humana.',
        ],
        bullets: [
          'Mañana temprana: luz suave y sombras largas sobre el monumento.',
          'Atardecer: la luz cálida resalta la piedra y el follaje.',
          'De noche: la iluminación resalta el eje cívico y la estatua.',
        ],
      },
      {
        heading: 'Cuidado del patrimonio',
        paragraphs: [
          'No te subas a las esculturas ni marques el patrimonio para la foto. La plaza es un espacio de uso cotidiano; respetá a quienes la transitan.',
        ],
        callout:
          'Si publicás fotos, recordá respetar las licencias de las imágenes de terceros que reutilices. Las fotos de esta guía se acreditan en la sección de créditos.',
      },
    ],
    faqs: [
      {
        q: '¿Cuál es el mejor horario para fotografiar la plaza?',
        a: 'Mañana y última parte de la tarde suelen ofrecer luz agradable y temperaturas más amables. En verano, priorizá la sombra y evitá las horas de mayor calor.',
      },
      {
        q: '¿Se puede fotografiar el monumento de noche?',
        a: 'Sí, la iluminación resalta el eje cívico. Usá trípode si querés exponer más, y tené cuidado con el tránsito y las personas en el espacio público.',
      },
    ],
    related: ['arboles-y-jardines', 'fotografica', 'monumento-san-martin'],
  },
  {
    slug: 'horarios-y-acceso',
    section: 'visita',
    priority: 'P2',
    kicker: 'Acceso',
    h1: 'Horarios, acceso y entrada a Plaza San Martín',
    metaTitle: 'Horarios y acceso a Plaza San Martín Córdoba: entrada y visita — Guía',
    metaDescription:
      'Acceso y condiciones de visita de Plaza San Martín en Córdoba: si es espacio público, horario de apertura y qué tener en cuenta antes de ir.',
    lead: 'La plaza es un espacio público al aire libre. Antes de salir, conviene entender qué significa eso y qué servicios no están dentro de la plaza.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: '¿Tiene entrada?',
        paragraphs: [
          'La fuente municipal describe la plaza como espacio público. Confirmá restricciones o condiciones de eventos del día; Catedral, Cabildo, visitas guiadas y otros interiores se consultan por separado.',
          'Esta guía no vende entradas ni gestiona visitas interiores.',
        ],
      },
      {
        heading: 'Horario de apertura',
        paragraphs: [
          'Como espacio abierto, la plaza no funciona como un local con horario de cierre fijo. Sin embargo, una ficha de terceros (Google Maps) consultada el 22 de octubre de 2026 indicaba apertura las 24 horas; es una referencia de terceros, no una garantía.',
          'Los edificios cercanos (Catedral, Cabildo, museos) tienen horarios y condiciones propios, y pueden cambiar por actos o mantenimiento.',
        ],
        callout:
          'No contamos con una verificación propia y permanente del horario. Si necesitás confirmar el acceso en un día concreto, consultá la señalización local y las fuentes oficiales.',
      },
    ],
    faqs: [
      {
        q: '¿La entrada a Plaza San Martín es gratuita?',
        a: 'La fuente municipal la describe como espacio público. Confirmá restricciones o condiciones de eventos del día; los interiores cercanos se consultan por separado.',
      },
      {
        q: '¿La plaza tiene horario de cierre?',
        a: 'Una ficha de Google Maps consultada el 22 de octubre de 2026 indicaba apertura las 24 horas. Es una referencia de terceros, no una garantía de acceso: obras, actos o restricciones pueden modificarlo.',
      },
    ],
    related: ['cuanto-tiempo', 'accesibilidad', 'con-ninos'],
  },
  {
    slug: 'cuanto-tiempo',
    section: 'visita',
    priority: 'P1',
    kicker: 'Planificación',
    h1: 'Cuánto tiempo dedicar a Plaza San Martín',
    metaTitle: 'Cuánto tiempo visitar Plaza San Martín Córdoba: 45–75 min — Guía',
    metaDescription:
      'Cuánto tiempo conviene dedicarle a Plaza San Martín en Córdoba, según si la ves sola o la combinás con Catedral, Cabildo y el centro histórico.',
    lead: 'Como orientación de esta guía, entre 45 y 75 minutos permiten observar el monumento, la vegetación y las fachadas del entorno con calma. Para sumar interiores conviene reservar varias horas.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Visita breve (45–90 min)',
        paragraphs: [
          'Monumento a San Martín, el centro geométrico y la lectura de fachadas de la Catedral y el Cabildo. Ideal como parada entre trámites o compras en el microcentro.',
        ],
      },
      {
        heading: 'Recorrido ampliado (3–5 h)',
        paragraphs: [
          'Sumá el Pasaje Santa Catalina y el circuito histórico municipal. Considerá una pausa en un café del entorno y, si hay, una visita interior a edificios patrimoniales.',
          'Para una jornada completa, sumá la Manzana Jesuítica y un museo cercano.',
        ],
        bullets: [
          '45–75 min: plaza y fachadas.',
          'Media mañana: plaza + Catedral + Cabildo.',
          'Día completo: lo anterior + Manzana Jesuítica + museo + almuerzo.',
        ],
      },
      {
        heading: 'Cómo aprovecharlo',
        paragraphs: [
          'Empezá en el centro rodeando el monumento, continuá por el perímetro mirando hacia afuera y cerrá hacia las peatonales o el Pasaje Santa Catalina según el tiempo disponible.',
        ],
        callout:
          'Los tiempos son orientativos y dependen del clima, el ritmo y si entrás a edificios. No reemplazan la planificación del día.',
      },
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo conviene dedicarle?',
        a: 'Como orientación de esta guía, entre 45 y 75 minutos para la plaza. Si la combinás con Catedral, Cabildo y Pasaje Santa Catalina, pensá el centro histórico como un recorrido de varias horas.',
      },
      {
        q: '¿Vale la pena ir solo a la plaza?',
        a: 'Sí, como pausa breve. Pero gran parte del valor está en su entorno inmediato: Catedral, Cabildo y Pasaje Santa Catalina están a pocos pasos.',
      },
    ],
    related: ['centro-historico-1-hora', 'centro-historico-2-horas', 'medio-dia'],
  },
  {
    slug: 'con-ninos',
    section: 'visita',
    priority: 'P2',
    kicker: 'Familias',
    h1: 'Visitar Plaza San Martín con niños',
    metaTitle: 'Plaza San Martín con niños: visita en familia Córdoba — Guía',
    metaDescription:
      'Cómo visitar Plaza San Martín en Córdoba con niños: sombra, hidratación, pausas y cómo sumar el Pasaje Santa Catalina y un café del entorno.',
    lead: 'El espacio abierto permite descanso y juego supervisado. Con sombra, agua y bancos, la plaza puede ser una parada cómoda en un día de turismo familiar por el centro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Antes de salir',
        paragraphs: [
          'Priorizá sombra, hidratación y bancos. En verano, evitá las horas de mayor calor y repartí el recorrido en pausas cortas.',
          'No contamos con una verificación actual de baños públicos dentro de la plaza. Confirmá ubicación y condiciones antes del paseo.',
        ],
      },
      {
        heading: 'Qué hacer con niños',
        paragraphs: [
          'Caminar el perímetro observando fachadas, rodear el monumento y recorrer el Pasaje Santa Catalina a pocos pasos son actividades sencillas y al aire libre.',
          'Una pausa en un café del entorno ayuda a recuperar ritmo antes de continuar hacia la Manzana Jesuítica o un museo.',
        ],
        callout:
          'Supervisá siempre a los niños cerca del tránsito vehicular en el perímetro y no permitas subir a las esculturas ni a las fuentes.',
      },
    ],
    faqs: [
      {
        q: '¿Es apta para ir con niños?',
        a: 'Sí: es espacio abierto, con bancos y sombra. Priorizá hidratación y pausas, y evitá las horas de mayor calor en verano.',
      },
      {
        q: '¿Hay baños públicos en la plaza?',
        a: 'No contamos con una verificación actual de baños públicos disponibles. Confirmalos antes del paseo y llevá el agua que necesites.',
      },
    ],
    related: ['cuanto-tiempo', 'accesibilidad', 'almorzar'],
  },
  {
    slug: 'accesibilidad',
    section: 'visita',
    priority: 'P2',
    kicker: 'Movilidad',
    h1: 'Accesibilidad y movilidad reducida en Plaza San Martín',
    metaTitle: 'Accesibilidad en Plaza San Martín Córdoba: movilidad reducida — Guía',
    metaDescription:
      'Accesibilidad de Plaza San Martín en Córdoba: superficies, cruces, rampas y qué verificar antes de una visita con movilidad reducida.',
    lead: 'Como espacio público al aire libre, la plaza suele permitir circulación a nivel, pero las condiciones de cruces y superficies pueden variar. Conviene verificar antes de salir.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Qué verificar',
        paragraphs: [
          'Verificá el estado actual de rampas, cruces y superficies si necesitás un itinerario accesible. No contamos con una auditoría de accesibilidad del recorrido.',
          'Los edificios cercanos (Catedral, Cabildo, museos) tienen condiciones propias, que pueden incluir escalones o accesos diferenciados.',
        ],
        bullets: [
          'Elegí un tramo corto del perímetro si buscás menor esfuerzo.',
          'Comprobá antes de salir el estado de cruces, rampas y superficies.',
          'Consultá a cada edificio cercano su acceso accesible específico.',
        ],
      },
      {
        heading: 'Sugerencia de recorrido',
        paragraphs: [
          'Un paseo con pausas, rodeando el monumento y descansando en bancos a la sombra, suele ser manejable. No garantizamos un recorrido sin escalones.',
        ],
        callout:
          'Esta guía no dispone de una auditoría actual de accesibilidad. La información es orientativa; confirmá con las fuentes oficiales o el establecimiento antes de visitar.',
      },
    ],
    faqs: [
      {
        q: '¿Es accesible para sillas de ruedas?',
        a: 'El espacio abierto suele permitir circulación a nivel, pero no contamos con una auditoría de accesibilidad. Verificá rampas, cruces y superficies antes de salir.',
      },
      {
        q: '¿Los edificios cercanos son accesibles?',
        a: 'Cada edificio tiene condiciones propias, y algunos pueden tener escalones. Consultalos directamente; la referencia de la plaza no se extiende a sus interiores.',
      },
    ],
    related: ['con-ninos', 'horarios-y-acceso', 'estacionamiento'],
  },

  // ───────────────────────── C. CÓMO LLEGAR ─────────────────────────
  {
    slug: 'desde-aeropuerto',
    section: 'como-llegar',
    priority: 'P1',
    kicker: 'Desde el aeropuerto',
    h1: 'Cómo llegar desde el aeropuerto de Córdoba a Plaza San Martín',
    metaTitle: 'Del aeropuerto de Córdoba a Plaza San Martín: cómo llegar — Guía',
    metaDescription:
      'Opciones para ir del Aeropuerto Internacional de Córdoba a Plaza San Martín: traslado, taxi, remis y conexión al centro histórico.',
    lead: 'El Aeropuerto Internacional Ingeniero Ambrosio Taravella queda al noroeste del microcentro. Desde allí podés usar transporte privado o combinar con el transporte urbano hacia el centro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'La lógica del viaje',
        paragraphs: [
          'Buscá el traslado vigente desde el aeropuerto con destino «Plaza San Martín, Córdoba capital». Confirmá recorrido, parada de descenso, equipaje, tarifa y disponibilidad con el operador antes de viajar.',
          'El aeropuerto no está en el microcentro, así que conviene definir el descenso en un punto permitido cerca del perímetro de la plaza.',
        ],
      },
      {
        heading: 'Opciones',
        paragraphs: [
          'Taxi o remis desde el aeropuerto: acordá destino y tarifa antes de subir.',
          'Transporte público o combinado: podés llegar al área central y completar a pie; verificá las líneas y frecuencias del día.',
        ],
        bullets: [
          'Indicá siempre «Plaza San Martín, Córdoba capital» como destino.',
          'Confirmá tarifa y forma de pago antes de iniciar el viaje.',
          'Si venís con equipaje, evaluá comodidad y distancia a pie desde el punto de descenso.',
        ],
        callout:
          'No verificamos aquí un servicio aeroportuario concreto. Las líneas, tarifas y frecuencias cambian; remitite a fuentes oficiales para el dato operativo del día.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo llego del aeropuerto a la plaza?',
        a: 'Buscá el traslado vigente con destino «Plaza San Martín, Córdoba capital» y confirmá tarifa, recorrido y parada con el operador. También podés combinar transporte público hasta el centro y completar a pie.',
      },
      {
        q: '¿Cuánto hay del aeropuerto al centro?',
        a: 'El aeropuerto queda al noroeste del microcentro, a unos 12–15 km según la ruta. El tiempo varía con el tránsito; confirmalo según el horario de tu vuelo.',
      },
    ],
    related: ['desde-terminal', 'en-colectivo', 'estacionamiento'],
  },
  {
    slug: 'desde-terminal',
    section: 'como-llegar',
    priority: 'P1',
    kicker: 'Desde la terminal',
    h1: 'Cómo llegar desde la Terminal de Ómnibus a Plaza San Martín',
    metaTitle: 'De la Terminal de Ómnibus a Plaza San Martín Córdoba: cómo llegar — Guía',
    metaDescription:
      'Cómo ir de la Terminal de Ómnibus de Córdoba a Plaza San Martín: opciones de transporte y caminata hasta el casco histórico.',
    lead: 'La Terminal de Ómnibus queda fuera del microcentro. Desde allí podés usar taxi, remis o el transporte urbano, y completar el último tramo a pie.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Planificá el tramo final',
        paragraphs: [
          'Usá el mapa para planificar el tramo desde la terminal de llegada hasta Plaza San Martín. Evaluá el recorrido a pie según equipaje, clima y movilidad.',
          'Comprobá las alternativas de transporte del día: las líneas y frecuencias pueden cambiar.',
        ],
        bullets: [
          'Taxi o remis: indicá «Plaza San Martín, Córdoba capital» y acordá tarifa.',
          'Colectivo urbano: elegí una parada próxima al perímetro de la plaza.',
          'A pie: posible según equipaje y clima; el microcentro es compacto.',
        ],
      },
      {
        heading: 'Antes de salir de la terminal',
        paragraphs: [
          'Verificá frecuencia, tarifa y desvíos antes de subir. No se garantiza aquí ninguna línea o parada concreta.',
        ],
        callout:
          'Esta guía explica la lógica del viaje y remite a fuentes oficiales para el dato operativo. No verificamos un servicio concreto desde la terminal.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo voy de la Terminal de Ómnibus a la plaza?',
        a: 'Podés usar taxi, remis o colectivo urbano hasta el entorno del microcentro y completar a pie. Confirmá recorrido y tarifa con el operador antes de salir.',
      },
      {
        q: '¿Se puede ir caminando?',
        a: 'Depende de la terminal y de tu equipaje. El microcentro es compacto, pero la terminal queda fuera del centro; evaluá distancia, clima y movilidad.',
      },
    ],
    related: ['desde-aeropuerto', 'en-colectivo', 'estacionamiento'],
  },
  {
    slug: 'en-colectivo',
    section: 'como-llegar',
    priority: 'P2',
    kicker: 'Transporte urbano',
    h1: 'Cómo llegar en colectivo al centro histórico de Córdoba',
    metaTitle: 'Llegar en colectivo al centro histórico de Córdoba: Plaza San Martín — Guía',
    metaDescription:
      'Cómo usar el colectivo urbano para llegar al centro histórico y a Plaza San Martín: dónde bajarse y qué confirmar antes de subir.',
    lead: 'El colectivo urbano conecta barrios y el microcentro. Para la plaza, conviene elegir una parada próxima a su perímetro y completar el tramo a pie.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Elegí la parada correcta',
        paragraphs: [
          'Consultá el recorrido vigente en el servicio de transporte local para tu punto de partida y elegí una parada próxima al perímetro de la plaza.',
          'El perímetro está formado por 27 de Abril, Buenos Aires, Independencia y Rosario de Santa Fe; cualquier parada cercana a esas calles te deja a pocos pasos.',
        ],
      },
      {
        heading: 'Qué confirmar',
        paragraphs: [
          'Verificá frecuencia, tarifa y desvíos antes de salir. No se garantiza aquí ninguna línea o parada concreta.',
          'La peatonalización de partes del microcentro puede modificar dónde baja o retoma el colectivo; comprobá la señalización del día.',
        ],
        callout:
          'Las líneas y tarifas cambian. Usá el planificador oficial del transporte local para el dato operativo del día.',
      },
    ],
    faqs: [
      {
        q: '¿Qué colectivo va a Plaza San Martín?',
        a: 'No garantizamos una línea concreta: las rutas cambian. Consultá el planificador oficial del transporte local y elegí una parada próxima al perímetro de la plaza (27 de Abril, Buenos Aires, Independencia o Rosario de Santa Fe).',
      },
      {
        q: '¿Dónde me bajo?',
        a: 'En una parada cercana al perímetro de la plaza y continuás a pie. Confirmá la parada y los desvíos del día con el servicio local.',
      },
    ],
    related: ['desde-terminal', 'desde-aeropuerto', 'estacionamiento'],
  },
  {
    slug: 'estacionamiento',
    section: 'como-llegar',
    priority: 'P1',
    kicker: 'Estacionamiento',
    h1: 'Dónde estacionar cerca de Plaza San Martín',
    metaTitle: 'Dónde estacionar cerca de Plaza San Martín Córdoba: reglas y opciones — Guía',
    metaDescription:
      'Estacionamiento cerca de Plaza San Martín en Córdoba: regulación de estacionamiento en la vía pública, playas y cómo continuar a pie al centro histórico.',
    lead: 'La plaza está en el microcentro, donde el estacionamiento se regula y puede tener restricciones. Entender las reglas ayuda a evitar multas y a terminar el trayecto a pie.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Estacionamiento en la vía pública',
        paragraphs: [
          'Revisá la señalización y las restricciones del centro antes de entrar. El estacionamiento medido y las zonas de carga/descarga suelen tener horarios y modalidades que cambian.',
          'La autoridad de movilidad local (SEMM) gestiona la regulación del estacionamiento en Córdoba; confirmá normas y tarifas vigentes con fuentes oficiales.',
        ],
      },
      {
        heading: 'Playas y conexión a pie',
        paragraphs: [
          'Podés buscar estacionamiento autorizado en las inmediaciones y completar a pocas cuadras a pie. Confirmá ubicación, horario y tarifa con el estacionamiento elegido.',
          'En días de eventos en la plaza, algunas calles pueden estar reservadas o con desvíos; comprobá la señalización del día.',
        ],
        bullets: [
          'Confirmá la modalidad de estacionamiento medido y los horarios.',
          'Elegí una playa autorizada y verificá tarifa y disponibilidad.',
          'Dejá el auto y terminá el recorrido a pie: el microcentro es compacto.',
        ],
        callout:
          'Esta guía no ofrece estacionamiento ni garantiza lugares libres. Las tarifas y restricciones cambian; confirmalas con la autoridad de movilidad y el establecimiento.',
      },
    ],
    faqs: [
      {
        q: '¿Hay estacionamiento en la plaza?',
        a: 'Verificá en el mapa y en la señalización dónde está permitido estacionar. Confirmá horario, tarifa y disponibilidad con el estacionamiento elegido; esta guía no ofrece plazas.',
      },
      {
        q: '¿Puedo dejar el auto y caminar?',
        a: 'Sí: buscá estacionamiento autorizado en las inmediaciones y completá a pocas cuadras a pie. El microcentro es compacto y la plaza está rodeada de peatonales.',
      },
    ],
    related: ['en-colectivo', 'desde-aeropuerto', 'peatonales'],
  },

  // ───────────────────────── D. CERCA ─────────────────────────
  {
    slug: 'catedral-de-cordoba',
    section: 'cerca',
    priority: 'P1',
    kicker: 'A un paso',
    h1: 'Catedral de Córdoba: qué ver desde Plaza San Martín',
    metaTitle: 'Catedral de Córdoba: qué ver desde Plaza San Martín — Guía',
    metaDescription:
      'La Catedral de Córdoba vista desde Plaza San Martín: historia, arquitectura, visita y cómo llegar desde la plaza en pocos pasos.',
    lead: 'La Catedral está en el borde inmediato de la plaza. Su construcción, que combina lenguajes renacentistas, barrocos y neoclásicos, la convierte en uno de los grandes edificios históricos de la ciudad.',
    updated: '30 de octubre de 2026',
    image: '/photos/catedral.jpg',
    sections: [
      {
        heading: 'Por qué visitarla desde la plaza',
        paragraphs: [
          'La Catedral se encuentra en el borde de Plaza San Martín, frente al espacio que fue Plaza Mayor. Es el edificio religioso principal de la ciudad y uno de los hitos del circuito municipal.',
          'Desde la plaza ya podés observar su fachada y sus torres; la visita interior permite ver el interior y la capilla mayor.',
        ],
      },
      {
        heading: 'Arquitectura e historia',
        paragraphs: [
          'Su construcción fue larga y combina lenguajes renacentistas, barrocos y neoclásicos. Es un ejemplo de cómo el arte sacro local fue cambiando a lo largo de los siglos.',
          'Como toda iglesia en uso, tiene normas de visita y de respeto. Consultá horarios y condiciones antes de entrar.',
        ],
        bullets: [
          'Está a pocos pasos de la plaza, sobre su perímetro.',
          'Observá la fachada desde el centro de la plaza para encuadrarla con el monumento.',
          'Combiná su visita con el Cabildo y el Pasaje Santa Catalina.',
        ],
        callout:
          'Los horarios y las condiciones de visita interior cambian. Confirmalos con la institución o la información turística oficial antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿La Catedral está en Plaza San Martín?',
        a: 'Está en el borde inmediato de la plaza, frente al espacio que fue Plaza Mayor. Se llega en pocos pasos desde el centro.',
      },
      {
        q: '¿Se puede entrar?',
        a: 'Es una iglesia en funcionamiento, así que tiene horarios y normas propias. Consultalos antes de entrar; esta guía no gestiona visitas.',
      },
    ],
    related: ['cabildo-historico', 'pasaje-santa-catalina', 'edificios-alrededor'],
  },
  {
    slug: 'cabildo-historico',
    section: 'cerca',
    priority: 'P1',
    kicker: 'A un paso',
    h1: 'Cabildo Histórico de Córdoba: patios, historia y visita',
    metaTitle: 'Cabildo Histórico de Córdoba: historia y visita — Guía',
    metaDescription:
      'El Cabildo Histórico de Córdoba: su rol colonial, patios y exposiciones, y cómo visitarlo desde Plaza San Martín.',
    lead: 'El Cabildo Histórico fue la sede del gobierno colonial y es pieza clave para comprender cómo se organizó el poder civil frente a la Plaza Mayor, hoy Plaza San Martín.',
    updated: '30 de octubre de 2026',
    image: '/photos/catedral.jpg',
    sections: [
      {
        heading: 'Su rol en la ciudad',
        paragraphs: [
          'Frente a la antigua Plaza Mayor se asignó el solar del Cabildo. El edificio reunía las funciones de gobierno de la ciudad colonial y hoy es un hito del circuito histórico.',
          'Su arquitectura y sus patios permiten leer la organización institucional del Córdoba de los siglos pasados.',
        ],
      },
      {
        heading: 'Qué se puede ver',
        paragraphs: [
          'El Cabildo suele ofrecer patios, salas y exposiciones de tema histórico. Las condiciones de visita cambian, así que confirmalas antes de ir.',
          'Está a pocos pasos de la plaza, sobre su perímetro, junto a la Catedral y el Pasaje Santa Catalina.',
        ],
        bullets: [
          'Visitá los patios y las salas de exposición.',
          'Combiná con la Catedral y el Pasaje Santa Catalina en un mismo paseo.',
          'Confirmá horarios y entrada con la institución.',
        ],
        callout:
          'No contamos con una verificación propia y permanente de horarios. Consultá la información turística municipal o la institución antes de visitar.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el Cabildo Histórico?',
        a: 'Fue la sede del gobierno colonial de Córdoba y hoy es un hito del circuito histórico. Explica cómo se organizó el poder civil frente a la Plaza Mayor.',
      },
      {
        q: '¿Está cerca de la plaza?',
        a: 'Sí, colinda con Plaza San Martín, junto a la Catedral. Se llega en pocos pasos desde el centro.',
      },
    ],
    related: ['catedral-de-cordoba', 'pasaje-santa-catalina', 'plaza-mayor-1577'],
  },
  {
    slug: 'pasaje-santa-catalina',
    section: 'cerca',
    priority: 'P1',
    kicker: 'A un paso',
    h1: 'Pasaje Santa Catalina: historia y recorrido',
    metaTitle: 'Pasaje Santa Catalina Córdoba: historia y recorrido — Guía',
    metaDescription:
      'El Pasaje Santa Catalina de Córdoba: qué es, su historia y cómo recorrerlo a pocos pasos de Plaza San Martín.',
    lead: 'El Pasaje Santa Catalina es un pasaje peatonal que enlaza el entorno de la Catedral y el Cabildo. Es uno de los rincones más fotografiados del casco histórico.',
    updated: '30 de octubre de 2026',
    image: '/photos/catedral.jpg',
    sections: [
      {
        heading: 'Qué es',
        paragraphs: [
          'Es un pasaje peatonal que conecta el entorno de la Catedral y el Cabildo. Permite observar escalas y perspectivas distintas del casco histórico.',
          'Su nombre evoca el patrimonio conventual de la zona; el pasaje forma parte del recorrido que proponen las fuentes turísticas municipales.',
        ],
      },
      {
        heading: 'Cómo recorrerlo',
        paragraphs: [
          'Caminá despacio y mirá hacia arriba: las fachadas y los detalles dan una lectura íntima del centro. Se combina naturalmente con Catedral y Cabildo.',
          'Está a pocos pasos de Plaza San Martín; podés llegar a pie desde el perímetro en minutos.',
        ],
        bullets: [
          'Entrá desde el lado de la Catedral o del Cabildo.',
          'Mirá las fachadas y los detalles arquitectónicos.',
          'Sumalo a un paseo de Catedral + Cabildo.',
        ],
        callout:
          'Es un espacio público al aire libre; no tiene horario de «cierre» como un local, pero el entorno puede tener actividad según el día.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el Pasaje Santa Catalina?',
        a: 'Un pasaje peatonal que enlaza el entorno de la Catedral y el Cabildo. Es parte del recorrido histórico municipal y uno de los rincones más visitados del centro.',
      },
      {
        q: '¿Cómo llego desde la plaza?',
        a: 'Está a pocos pasos de Plaza San Martín, entre la Catedral y el Cabildo. Se recorre a pie en minutos.',
      },
    ],
    related: ['catedral-de-cordoba', 'cabildo-historico', 'centro-historico-1-hora'],
  },
  {
    slug: 'museo-juan-de-tejeda',
    section: 'cerca',
    priority: 'P2',
    kicker: 'Cultura',
    h1: 'Museo Juan de Tejeda: arte religioso y visita',
    metaTitle: 'Museo Juan de Tejeda Córdoba: arte religioso y visita — Guía',
    metaDescription:
      'El Museo Juan de Tejeda de Córdoba: colección de arte religioso, dónde está y cómo visitarlo desde Plaza San Martín.',
    lead: 'El Museo Juan de Tejeda reúne arte religioso en el entorno de la Manzana Jesuítica. Es una parada ideal para profundizar en la historia cultural del centro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Qué exhibe',
        paragraphs: [
          'El museo se dedica al arte religioso, con piezas que ayudan a entender la estética y la devoción de los siglos pasados en Córdoba.',
          'Forma parte del conjunto de la Manzana Jesuítica, por lo que se visita bien en combinación con la Iglesia de la Compañía y la Cripta Jesuítica.',
        ],
      },
      {
        heading: 'Visita desde la plaza',
        paragraphs: [
          'Está a unas cuadras de Plaza San Martín, dentro del área de la Manzana Jesuítica. Podés ir a pie en pocos minutos.',
          'Es también una buena opción de interior los días de lluvia; consultá su horario antes de ir.',
        ],
        bullets: [
          'Combiná con Iglesia de la Compañía de Jesús y Cripta Jesuítica.',
          'Útil como parada de lluvia por ser interior.',
          'Confirmá horarios y condiciones de visita.',
        ],
        callout:
          'No contamos con verificación permanente de horarios ni de entrada. Consultalos con la institución o la información oficial.',
      },
    ],
    faqs: [
      {
        q: '¿De qué trata el Museo Juan de Tejeda?',
        a: 'Es un museo de arte religioso en el entorno de la Manzana Jesuítica. Reúne piezas que ilustran la historia cultural y devocional de Córdoba.',
      },
      {
        q: '¿Está lejos de la plaza?',
        a: 'No: está a unas cuadras, dentro de la Manzana Jesuítica. Se llega a pie en pocos minutos desde Plaza San Martín.',
      },
    ],
    related: ['manzana-jesuitica', 'iglesia-compania-de-jesus', 'cripta-jesuitica'],
  },
  {
    slug: 'teatro-real',
    section: 'cerca',
    priority: 'P2',
    kicker: 'Cultura',
    h1: 'Teatro Real de Córdoba: edificio y programación',
    metaTitle: 'Teatro Real de Córdoba: edificio histórico y programación — Guía',
    metaDescription:
      'El Teatro Real de Córdoba: su edificio histórico, cómo llegar desde la plaza y dónde consultar la programación.',
    lead: 'El Teatro Real es uno de los edificios culturales del centro de Córdoba. Su arquitectura y su cartelera lo convierten en parada para quienes exploran el casco histórico.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El edificio',
        paragraphs: [
          'El Teatro Real forma parte del patrimonio cultural de la ciudad. Su fachada y sus salas reflejan la tradición teatral cordobesa.',
          'Está en el microcentro, a una caminata corta desde Plaza San Martín.',
        ],
      },
      {
        heading: 'Programación y visita',
        paragraphs: [
          'Las obras, fechas y condiciones de venta cambian. Consultá la programación oficial antes de ir si querés asistir a una función.',
          'También podés incluirlo como punto de un recorrido cultural combinado con la Manzana Jesuítica.',
        ],
        bullets: [
          'Consultá la cartelera oficial para fechas y entradas.',
          'Combiná con la Manzana Jesuítica en un paseo cultural.',
          'Está a pocas cuadras de la plaza.',
        ],
        callout:
          'No vendemos entradas ni verificamos la cartelera. La programación cambia; usá fuentes oficiales del teatro.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el Teatro Real de Córdoba?',
        a: 'Es un teatro histórico del centro, parte del patrimonio cultural de la ciudad. Su edificio y su cartelera lo hacen relevante para un recorrido cultural.',
      },
      {
        q: '¿Cómo llego desde la plaza?',
        a: 'Está en el microcentro, a una caminata corta de Plaza San Martín. Consultá la programación oficial si querés asistir a una función.',
      },
    ],
    related: ['museo-juan-de-tejeda', 'manzana-jesuitica', 'un-dia'],
  },
  {
    slug: 'iglesia-santa-teresa',
    section: 'cerca',
    priority: 'P2',
    kicker: 'Cultura',
    h1: 'Iglesia Santa Teresa y Monasterio San José',
    metaTitle: 'Iglesia Santa Teresa y Monasterio San José Córdoba — Guía',
    metaDescription:
      'La Iglesia Santa Teresa y el Monasterio San José en Córdoba: historia, arquitectura y cómo visitarlos desde el centro.',
    lead: 'La Iglesia Santa Teresa y el Monasterio San José son parte del patrimonio religioso del centro de Córdoba, con arquitectura y devoción propias de la ciudad.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El conjunto',
        paragraphs: [
          'La iglesia y el monasterio forman un conjunto de culto y vida religiosa en el microcentro. Su arquitectura refleja lenguajes propios del arte sacro local.',
          'Como templo en funcionamiento, tiene normas de visita y de respeto que conviene consultar antes de entrar.',
        ],
      },
      {
        heading: 'Visita desde la plaza',
        paragraphs: [
          'Está a unas cuadras de Plaza San Martín. Podés combinarlo con otros edificios religiosos del centro en una caminata histórica.',
          'Confirmá horarios y condiciones de visita interior antes de ir.',
        ],
        bullets: [
          'Combiná con Catedral y la Manzana Jesuítica.',
          'Respetá las normas de un templo en uso.',
          'Confirmá horarios con la institución.',
        ],
        callout:
          'No contamos con verificación permanente de horarios ni de entrada. Consultalos con la institución o la información oficial.',
      },
    ],
    faqs: [
      {
        q: '¿Qué son la Iglesia Santa Teresa y el Monasterio San José?',
        a: 'Son un conjunto religioso del microcentro de Córdoba, con arquitectura y devoción propias. Forman parte del patrimonio eclesiástico de la ciudad.',
      },
      {
        q: '¿Se pueden visitar?',
        a: 'Como templo en uso, tiene horarios y normas propias. Confirmalos antes de entrar; esta guía no gestiona visitas.',
      },
    ],
    related: ['catedral-de-cordoba', 'iglesia-compania-de-jesus', 'iglesias-historicas'],
  },
  {
    slug: 'museo-de-la-memoria',
    section: 'cerca',
    priority: 'P2',
    kicker: 'Memoria',
    h1: 'Museo Provincial de la Memoria: historia y visita respetuosa',
    metaTitle: 'Museo Provincial de la Memoria Córdoba: historia y visita — Guía',
    metaDescription:
      'El Museo Provincial de la Memoria de Córdoba: su propósito, historia y cómo visitarlo con respeto desde el centro.',
    lead: 'El Museo Provincial de la Memoria aborda la historia reciente y los derechos humanos. Es un espacio de educación y conmemoración, no un atractivo de entretenimiento.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'De qué trata',
        paragraphs: [
          'El museo trabaja la memoria sobre el pasado reciente y los derechos humanos. Su enfoque es educativo y conmemorativo.',
          'Conviene visitarlo con una actitud de respeto: se trata de historia y memoria, no de un paseo de ocio.',
        ],
      },
      {
        heading: 'Visita desde la plaza',
        paragraphs: [
          'Está en la ciudad de Córdoba; podés combinarlo con un recorrido cultural más amplio. Confirmá ubicación y horarios antes de ir.',
          'Es también una opción de interior en días de lluvia, siempre que verifiques su apertura.',
        ],
        bullets: [
          'Enfocalo como visita educativa y respetuosa.',
          'Confirmá ubicación y horarios con la institución.',
          'Combiná con otros espacios culturales del centro.',
        ],
        callout:
          'Este es un espacio de memoria y derechos humanos. La información se presenta con propósito educativo; no se trata como atracción de entretenimiento.',
      },
    ],
    faqs: [
      {
        q: '¿De qué trata el Museo de la Memoria?',
        a: 'Aborda la historia reciente y los derechos humanos desde un enfoque educativo y conmemorativo. Es un espacio de memoria, no de entretenimiento.',
      },
      {
        q: '¿Cómo lo visito con respeto?',
        a: 'Leélo como historia y memoria, no como atracción. Confirmá ubicación y horarios con la institución antes de ir.',
      },
    ],
    related: ['museo-juan-de-tejeda', 'oratorio-obispo-mercadillo', 'un-dia'],
  },
  {
    slug: 'oratorio-obispo-mercadillo',
    section: 'cerca',
    priority: 'P3',
    kicker: 'Patrimonio',
    h1: 'Oratorio del Obispo Mercadillo: historia y arquitectura',
    metaTitle: 'Oratorio del Obispo Mercadillo Córdoba: historia y arquitectura — Guía',
    metaDescription:
      'El Oratorio del Obispo Mercadillo en Córdoba: su historia, arquitectura y cómo visitarlo en el casco histórico.',
    lead: 'El Oratorio del Obispo Mercadillo es una capilla de época colonial vinculada a la residencia episcopal. Su valor está en la arquitectura y en la historia que conserva.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Historia y arquitectura',
        paragraphs: [
          'El oratorio formó parte de la residencia del obispo Mercadillo, una figura relevante en la Córdoba colonial. Su arquitectura es modesta pero significativa dentro del patrimonio religioso local.',
          'Se lo relaciona con la historia eclesiástica de la ciudad y con el entramado de capillas y residencias del centro histórico.',
        ],
      },
      {
        heading: 'Visita',
        paragraphs: [
          'Su estado de apertura y las condiciones de visita pueden variar. Confirmalos con la institución o la información turística antes de ir.',
          'Podés incluirlo en un recorrido de iglesias históricas combinado con la Catedral y la Manzana Jesuítica.',
        ],
        callout:
          'No contamos con verificación permanente de horarios ni de acceso. Consultalos con fuentes oficiales antes de visitar.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el Oratorio del Obispo Mercadillo?',
        a: 'Es una capilla de época colonial vinculada a la residencia del obispo Mercadillo, parte del patrimonio religioso del centro de Córdoba.',
      },
      {
        q: '¿Se puede visitar?',
        a: 'Su apertura puede variar. Confirmá horarios y condiciones con la institución o la información turística antes de ir.',
      },
    ],
    related: ['iglesia-santa-teresa', 'catedral-de-cordoba', 'iglesias-historicas'],
  },
  {
    slug: 'manzana-jesuitica',
    section: 'cerca',
    priority: 'P1',
    kicker: 'Patrimonio mundial',
    h1: 'Manzana Jesuítica: cómo visitarla desde la plaza',
    metaTitle: 'Manzana Jesuítica de Córdoba: cómo visitarla desde la plaza — Guía',
    metaDescription:
      'La Manzana Jesuítica de Córdoba: qué incluye, por qué es patrimonio y cómo recorrerla a pie desde Plaza San Martín.',
    lead: 'La Manzana Jesuítica reúne la Universidad Nacional de Córdoba, la Iglesia de la Compañía de Jesús, la Capilla Doméstica (Cripta Jesuítica) y el Colegio Nacional de Monserrat. Es uno de los conjuntos más importantes del centro histórico.',
    updated: '30 de octubre de 2026',
    image: '/photos/catedral.jpg',
    sections: [
      {
        heading: 'Qué incluye',
        paragraphs: [
          'El conjunto agrupa la Universidad Nacional de Córdoba (fundada en 1613), la Iglesia de la Compañía de Jesús, la Capilla Doméstica (hoy Cripta Jesuítica) y el Colegio Nacional de Monserrat.',
          'La Manzana Jesuítica forma parte del Patrimonio de la Humanidad de la UNESCO, junto con las estancias jesuíticas de la provincia.',
        ],
      },
      {
        heading: 'Cómo visitarla desde la plaza',
        paragraphs: [
          'Está a unas cuadras de Plaza San Martín. Podés ir a pie y recorrer la iglesia, la cripta y los patios del colegio en una misma caminata.',
          'Dado que varios espacios tienen horarios propios, conviene verificar apertura antes de ir.',
        ],
        bullets: [
          'Caminá desde la plaza hacia la Manzana Jesuítica en pocos minutos.',
          'Visitá la Iglesia de la Compañía y la Cripta Jesuítica.',
          'Sumá el Museo Juan de Tejeda para completar el recorrido cultural.',
        ],
        callout:
          'La condición de Patrimonio de la Humanidad corresponde a la UNESCO. Las visitas interiores tienen horarios propios; confirmalos antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es la Manzana Jesuítica?',
        a: 'Es el conjunto de la Universidad Nacional de Córdoba, la Iglesia de la Compañía de Jesús, la Capilla Doméstica (Cripta Jesuítica) y el Colegio Nacional de Monserrat. Es Patrimonio de la Humanidad de la UNESCO.',
      },
      {
        q: '¿Cómo llego desde Plaza San Martín?',
        a: 'Está a unas cuadras, a pie. Podés recorrer iglesia, cripta y patios del colegio en una misma caminata; verificá horarios de interiores antes de ir.',
      },
    ],
    related: ['iglesia-compania-de-jesus', 'cripta-jesuitica', 'museo-juan-de-tejeda'],
  },
  {
    slug: 'iglesia-compania-de-jesus',
    section: 'cerca',
    priority: 'P2',
    kicker: 'A un paso',
    h1: 'Iglesia de la Compañía de Jesús: arte y patrimonio',
    metaTitle: 'Iglesia de la Compañía de Jesús Córdoba: arte y patrimonio — Guía',
    metaDescription:
      'La Iglesia de la Compañía de Jesús en Córdoba: su arte, la cúpula y cómo visitarla dentro de la Manzana Jesuítica.',
    lead: 'La Iglesia de la Compañía de Jesús es la iglesia del conjunto de la Manzana Jesuítica. Su cúpula y su decoración la convierten en una de las piezas artísticas más notables del centro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Arte y arquitectura',
        paragraphs: [
          'La iglesia destaca por su cúpula y por la decoración interior, fruto de la tradición barroca local. Es parte del conjunto jesuítico cordobés.',
          'Forma parte de la Manzana Jesuítica, Patrimonio de la Humanidad de la UNESCO junto con las estancias.',
        ],
      },
      {
        heading: 'Visita',
        paragraphs: [
          'Está a unas cuadras de Plaza San Martín, dentro de la Manzana Jesuítica. Se combina con la Cripta Jesuítica y el Museo Juan de Tejeda.',
          'Como templo en uso, tiene horarios y normas propias; confirmalos antes de entrar.',
        ],
        bullets: [
          'Visitá la cúpula y la decoración interior.',
          'Combiná con la Cripta Jesuítica y el Museo Juan de Tejeda.',
          'Confirmá horarios con la institución.',
        ],
        callout:
          'No contamos con verificación permanente de horarios ni de entrada. Consultalos con la institución o la información oficial.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es la Iglesia de la Compañía de Jesús?',
        a: 'Es la iglesia del conjunto de la Manzana Jesuítica de Córdoba, conocida por su cúpula y su decoración barroca. Forma parte del Patrimonio de la Humanidad de la UNESCO.',
      },
      {
        q: '¿Está lejos de la plaza?',
        a: 'No: está a unas cuadras, dentro de la Manzana Jesuítica. Se llega a pie en pocos minutos desde Plaza San Martín.',
      },
    ],
    related: ['manzana-jesuitica', 'cripta-jesuitica', 'museo-juan-de-tejeda'],
  },
  {
    slug: 'cripta-jesuitica',
    section: 'cerca',
    priority: 'P2',
    kicker: 'A un paso',
    h1: 'Cripta Jesuítica de Córdoba: ubicación y visita',
    metaTitle: 'Cripta Jesuítica de Córdoba: ubicación y visita — Guía',
    metaDescription:
      'La Cripta Jesuítica de Córdoba: qué es, dónde está en la Manzana Jesuítica y cómo visitarla desde Plaza San Martín.',
    lead: 'La Cripta Jesuítica corresponde a la Capilla Doméstica del antiguo colegio jesuítico. Es uno de los espacios más singulares de la Manzana Jesuítica.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Qué es',
        paragraphs: [
          'La Cripta Jesuítica es la Capilla Doméstica del conjunto jesuítico, un espacio subterráneo o semienterrado que conserva la traza de la capilla original.',
          'Forma parte de la Manzana Jesuítica, Patrimonio de la Humanidad de la UNESCO.',
        ],
      },
      {
        heading: 'Visita desde la plaza',
        paragraphs: [
          'Está a unas cuadras de Plaza San Martín, dentro de la Manzana Jesuítica. Se visita bien junto con la Iglesia de la Compañía y el Museo Juan de Tejeda.',
          'Confirmá horarios y condiciones de visita antes de ir.',
        ],
        bullets: [
          'Combiná con la Iglesia de la Compañía de Jesús.',
          'Sumá el Museo Juan de Tejeda para completar el recorrido.',
          'Confirmá horarios con la institución.',
        ],
        callout:
          'No contamos con verificación permanente de horarios ni de entrada. Consultalos con la institución o la información oficial.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es la Cripta Jesuítica?',
        a: 'Es la Capilla Doméstica del antiguo colegio jesuítico, dentro de la Manzana Jesuítica de Córdoba, Patrimonio de la Humanidad de la UNESCO.',
      },
      {
        q: '¿Cómo llego desde la plaza?',
        a: 'Está a unas cuadras, dentro de la Manzana Jesuítica. Se llega a pie en pocos minutos y se combina con la Iglesia de la Compañía y el museo.',
      },
    ],
    related: ['manzana-jesuitica', 'iglesia-compania-de-jesus', 'museo-juan-de-tejeda'],
  },
  {
    slug: 'museo-marques-de-sobremonte',
    section: 'cerca',
    priority: 'P2',
    kicker: 'Casa museo',
    h1: 'Museo Marqués de Sobremonte: historia y recorrido',
    metaTitle: 'Museo Marqués de Sobremonte Córdoba: casa colonial y visita — Guía',
    metaDescription:
      'El Museo Marqués de Sobremonte de Córdoba: la casa colonial, su historia y cómo visitarlo desde el centro.',
    lead: 'El Museo Marqués de Sobremonte es una casa colonial que conserva la arquitectura doméstica de los siglos pasados. Su recorrido permite entender la vida cotidiana de la Córdoba virreinal.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'La casa y su historia',
        paragraphs: [
          'El museo ocupa una casona de época colonial vinculada a Rafael de Sobremonte, figura del período virreinal. Su trazado y sus patios son parte del valor del edificio.',
          'Forma parte del patrimonio doméstico de la ciudad, distinto de los edificios cívicos o religiosos del centro.',
        ],
      },
      {
        heading: 'Visita',
        paragraphs: [
          'Está en el microcentro, a una caminata desde Plaza San Martín. Confirmá horarios y condiciones de visita antes de ir.',
          'Es una buena opción de interior en días de lluvia.',
        ],
        bullets: [
          'Recorré patios y salas de la casona colonial.',
          'Combiná con la Manzana Jesuítica en un paseo histórico.',
          'Confirmá horarios con la institución.',
        ],
        callout:
          'No contamos con verificación permanente de horarios ni de entrada. Consultalos con la institución o la información oficial.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el Museo Marqués de Sobremonte?',
        a: 'Es una casa colonial convertida en museo, vinculada a la época virreinal. Conserva arquitectura doméstica y permite entender la vida cotidiana de la Córdoba de los siglos pasados.',
      },
      {
        q: '¿Está cerca de la plaza?',
        a: 'Está en el microcentro, a una caminata desde Plaza San Martín. Confirmá horarios antes de visitarlo.',
      },
    ],
    related: ['cabildo-historico', 'manzana-jesuitica', 'iglesias-historicas'],
  },

  // ───────────────────────── E. COMER ─────────────────────────
  {
    slug: 'cafes-historicos',
    section: 'comer',
    priority: 'P1',
    kicker: 'Cafés',
    h1: 'Cafés históricos cerca de Plaza San Martín',
    metaTitle: 'Cafés históricos cerca de Plaza San Martín Córdoba — Guía',
    metaDescription:
      'Los cafés históricos cerca de Plaza San Martín en Córdoba: tradición, ambiente y cómo sumarlos a un paseo por el centro.',
    lead: 'Córdoba tiene una tradición de cafés y confiterías ligada a su centro histórico. Algunos aparecen en las rutas de cafés históricos del turismo local.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Por qué incluir un café en el recorrido',
        paragraphs: [
          'Una pausa en un café del entorno permite descansar y leer con calma la plaza y sus fachadas. Varios locales forman parte de la cultura del microcentro.',
          'El turismo local menciona a cafés y confiterías tradicionales en sus rutas; dos de los más citados son Sorocabana y El Solar de Tejeda.',
        ],
      },
      {
        heading: 'Cómo elegir',
        paragraphs: [
          'Buscá un local cerca de la plaza para minimizar la caminata. Confirmá dirección y horario del día, porque pueden cambiar.',
          'Si querés evitar multitudes, preferí horarios fuera del mediodía pico.',
        ],
        bullets: [
          'Sorocabana: café tradicional citado en rutas de la ciudad.',
          'El Solar de Tejeda: propuesta de gastronomía e historia.',
          'Confirmá siempre dirección y horario antes de ir.',
        ],
        callout:
          'No promocionamos comercios concretos. Mencionamos nombres que aparecen en fuentes turísticas municipales como referencia cultural; verificá datos vigentes con cada local.',
      },
    ],
    faqs: [
      {
        q: '¿Hay cafés históricos cerca de la plaza?',
        a: 'Sí, el turismo local cita cafés y confiterías tradicionales en el centro. Sorocabana y El Solar de Tejeda aparecen en esas rutas; confirmá dirección y horario antes de ir.',
      },
      {
        q: '¿Vale la pena parar a tomar algo?',
        a: 'Sí: una pausa cerca de la plaza ayuda a descansar y a leer el entorno. Elegí un local cercano para no alejarte mucho del recorrido.',
      },
    ],
    related: ['sorocabana', 'solar-de-tejeda', 'desayunar'],
  },
  {
    slug: 'sorocabana',
    section: 'comer',
    priority: 'P2',
    kicker: 'Café tradicional',
    h1: 'Café Sorocabana: historia y parada en el centro',
    metaTitle: 'Café Sorocabana Córdoba: historia y parada en el centro — Guía',
    metaDescription:
      'El Café Sorocabana de Córdoba: su historia como café tradicional, qué esperar y cómo sumarlo a un paseo por el centro.',
    lead: 'Sorocabana es uno de los cafés tradicionales que aparecen en las rutas de cafés históricos de Córdoba. Es una parada habitual para quienes recorren el microcentro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Un café de la ciudad',
        paragraphs: [
          'Sorocabana figura entre los cafés y confiterías tradicionales citados por el turismo local. Su historia y su ambiente lo vinculan a la vida del centro.',
          'Como establecimiento en funcionamiento, su dirección y horario pueden variar; conviene confirmarlos antes de ir.',
        ],
      },
      {
        heading: 'Cómo sumarlo al paseo',
        paragraphs: [
          'Podés incluirlo como pausa luego de recorrer la plaza y el Pasaje Santa Catalina. Confirmá la ubicación vigente para no alejarte del recorrido.',
          'Es una opción para desayunar, merendar o tomar un café tranquilo.',
        ],
        bullets: [
          'Confirmá dirección y horario del día.',
          'Combiná con la visita a la plaza y al Pasaje Santa Catalina.',
          'Preguntá por opciones de desayuno o merienda.',
        ],
        callout:
          'Esta guía no promociona el comercio ni garantiza precios. El nombre se cita como referencia cultural de fuentes turísticas; verificá datos vigentes con el local.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es el Café Sorocabana?',
        a: 'Es un café tradicional de Córdoba que aparece en las rutas de cafés históricos de la ciudad. Lo citamos como referencia cultural; confirmá dirección y horario antes de ir.',
      },
      {
        q: '¿Dónde queda?',
        a: 'En el microcentro de Córdoba, pero la ubicación exacta puede variar. Confirmala con el local o fuentes turísticas antes de visitarlo.',
      },
    ],
    related: ['cafes-historicos', 'solar-de-tejeda', 'desayunar'],
  },
  {
    slug: 'solar-de-tejeda',
    section: 'comer',
    priority: 'P2',
    kicker: 'Gastronomía e historia',
    h1: 'El Solar de Tejeda: gastronomía e historia',
    metaTitle: 'El Solar de Tejeda Córdoba: gastronomía e historia — Guía',
    metaDescription:
      'El Solar de Tejeda de Córdoba: propuesta de comida en un entorno histórico y cómo sumarlo a la visita al centro.',
    lead: 'El Solar de Tejeda aparece en las rutas de la ciudad como una propuesta de gastronomía vinculada a un entorno histórico. Es una opción para almorzar cerca del casco histórico.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Comida e historia',
        paragraphs: [
          'El local se presenta como una propuesta gastronómica en un espacio con historia. Su valor está en combinar la comida con el ambiente del centro.',
          'Como restaurante en funcionamiento, su carta, dirección y horario pueden cambiar; confirmalos antes de ir.',
        ],
      },
      {
        heading: 'Cómo sumarlo al paseo',
        paragraphs: [
          'Podés almorzar allí tras visitar la plaza, la Catedral y el Cabildo. Confirmá la ubicación vigente para organizar el trayecto a pie.',
          'Si querés reservar, consultalo directamente con el local.',
        ],
        bullets: [
          'Confirmá dirección y horario del día.',
          'Consultá reserva si la necesitás.',
          'Combiná con la visita al centro histórico.',
        ],
        callout:
          'No promocionamos el comercio ni garantizamos precios. El nombre se cita como referencia de fuentes turísticas; verificá datos vigentes con el local.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es El Solar de Tejeda?',
        a: 'Es una propuesta de gastronomía vinculada a un entorno histórico de Córdoba, citada en rutas de la ciudad. Lo mencionamos como referencia; confirmá carta, dirección y horario antes de ir.',
      },
      {
        q: '¿Conviene para almorzar?',
        a: 'Puede ser una opción para almorzar cerca del casco histórico. Confirmá ubicación y horario y, si querés reserva, consultalo con el local.',
      },
    ],
    related: ['cafes-historicos', 'sorocabana', 'almorzar'],
  },
  {
    slug: 'desayunar',
    section: 'comer',
    priority: 'P2',
    kicker: 'Desayuno',
    h1: 'Dónde desayunar cerca de Plaza San Martín',
    metaTitle: 'Dónde desayunar cerca de Plaza San Martín Córdoba — Guía',
    metaDescription:
      'Opciones para desayunar cerca de Plaza San Martín en Córdoba: cafés y confiterías del microcentro y cómo elegir según el recorrido.',
    lead: 'El microcentro tiene cafés y confiterías donde desayunar antes o después de recorrer la plaza. Elegir un local cercano te ahorra caminata y aprovecha la mañana.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Dónde buscar',
        paragraphs: [
          'Cercade la plaza y las peatonales hay cafés y confiterías para un desayuno rápido o más completo. Confirmá que abren temprano si venís en la primera hora.',
          'Si querés un café tradicional, revisá las rutas de cafés históricos de la ciudad (por ejemplo, Sorocabana).',
        ],
      },
      {
        heading: 'Cómo elegir',
        paragraphs: [
          'Priorizá la cercanía si venís directo a la plaza. Confirmá horario de apertura del día, porque puede variar.',
          'Un desayuno ligero te deja energía para el paseo a pie por el centro.',
        ],
        bullets: [
          'Buscá locales en el microcentro, cerca de la plaza.',
          'Confirmá horario de apertura.',
          'Considerá un café tradicional para sumar historia.',
        ],
        callout:
          'No recomendamos comercios concretos. Sugerimos criterios (cercanía, horario, tipo de desayuno) y remitimos a fuentes locales para el dato vigente.',
      },
    ],
    faqs: [
      {
        q: '¿Dónde desayunar cerca de la plaza?',
        a: 'En el microcentro hay cafés y confiterías cerca de la plaza. Elegí uno cercano y confirmá que abre temprano si venís en la primera hora.',
      },
      {
        q: '¿Hay cafés tradicionales para desayunar?',
        a: 'Sí, el turismo local cita cafés históricos en el centro (por ejemplo, Sorocabana). Confirmá dirección y horario antes de ir.',
      },
    ],
    related: ['cafes-historicos', 'sorocabana', 'almorzar'],
  },
  {
    slug: 'almorzar',
    section: 'comer',
    priority: 'P1',
    kicker: 'Almuerzo',
    h1: 'Dónde almorzar cerca de Plaza San Martín',
    metaTitle: 'Dónde almorzar cerca de Plaza San Martín Córdoba — Guía',
    metaDescription:
      'Opciones para almorzar cerca de Plaza San Martín en Córdoba: cómo elegir según ubicación, presupuesto y tiempo disponible.',
    lead: 'Alrededor de la plaza y las peatonales hay opciones para almorzar, desde locales rápidos hasta propuestas con historia. Elegir bien te permite retomar el paseo sin perder tiempo.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Cómo elegir',
        paragraphs: [
          'Si tenés poco tiempo, buscá opciones cerca de la plaza para volver al recorrido enseguida. Si querés sentarte, elegí un local con más espacio en las peatonales.',
          'Confirmá horario de cocina y si aceptan reserva, sobre todo en horas pico.',
        ],
      },
      {
        heading: 'Sumarlo al recorrido',
        paragraphs: [
          'Podés almorzar tras visitar Catedral y Cabildo, y retomar luego hacia la Manzana Jesuítica o el Pasaje Santa Catalina.',
          'Si buscás historia y gastronomía, revisá las rutas de la ciudad que mencionan propuestas como El Solar de Tejeda.',
        ],
        bullets: [
          'Priorizá la cercanía si el tiempo es corto.',
          'Confirmá horario de cocina y reserva.',
          'Combiná con la visita al centro histórico.',
        ],
        callout:
          'No promocionamos comercios concretos. Sugerimos criterios (ubicación, horario, tipo de cocina) y remitimos a fuentes locales para el dato vigente.',
      },
    ],
    faqs: [
      {
        q: '¿Dónde almorzar cerca de la plaza?',
        a: 'En el microcentro y las peatonales hay opciones variadas. Elegí una cercana si tenés poco tiempo y confirmá horario de cocina y reserva.',
      },
      {
        q: '¿Hay opciones con historia para almorzar?',
        a: 'Las rutas de la ciudad mencionan propuestas de gastronomía e historia (por ejemplo, El Solar de Tejeda). Confirmá dirección y horario antes de ir.',
      },
    ],
    related: ['comida-tipica', 'solar-de-tejeda', 'mercado-norte'],
  },
  {
    slug: 'comida-tipica',
    section: 'comer',
    priority: 'P2',
    kicker: 'Gastronomía local',
    h1: 'Comida típica cordobesa cerca del centro histórico',
    metaTitle: 'Comida típica de Córdoba cerca del centro: qué probar — Guía',
    metaDescription:
      'Comida típica de Córdoba cerca del centro histórico: platos y productos regionales para probar durante la visita a la plaza.',
    lead: 'Córdoba tiene sabores propios que podés probar cerca del centro: desde el fernet con coca hasta dulces y productos regionales. La idea es dar un criterio, no una lista de comercios.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Sabores para probar',
        paragraphs: [
          'Entre las costumbres gastronómicas locales se destacan el fernet con coca, los alfajores cordobeses, el queso y dulce, y preparaciones regionales como el locro en fechas patrias.',
          'En el microcentro y en Mercado Norte podés encontrar productos y platos regionales; la oferta cambia según el local y la temporada.',
        ],
      },
      {
        heading: 'Cómo acercarse',
        paragraphs: [
          'Si querés probar productos regionales, considerá una visita a Mercado Norte combinada con el paseo histórico.',
          'Confirmá disponibilidad y precios con cada local; no garantizamos cartas ni valores.',
        ],
        bullets: [
          'Fernet con coca: bebida muy asociada a Córdoba.',
          'Alfajores y dulces regionales como opción de regalo.',
          'Locro y platos de fecha patria en su temporada.',
        ],
        callout:
          'No promocionamos comercios concretos ni garantizamos precios. Describimos costumbres gastronómicas regionales con fines informativos.',
      },
    ],
    faqs: [
      {
        q: '¿Qué comida típica tiene Córdoba?',
        a: 'Entre las costumbres locales están el fernet con coca, los alfajores cordobeses, el queso y dulce, y platos como el locro en fechas patrias. La oferta concreta depende de cada local y la temporada.',
      },
      {
        q: '¿Dónde probar productos regionales?',
        a: 'En el microcentro y en Mercado Norte podés encontrar productos regionales. Confirmá disponibilidad y precios con cada local; no garantizamos cartas.',
      },
    ],
    related: ['mercado-norte', 'almorzar', 'un-dia'],
  },
  {
    slug: 'mercado-norte',
    section: 'comer',
    priority: 'P2',
    kicker: 'Mercado',
    h1: 'Mercado Norte: cómo combinar mercado y paseo histórico',
    metaTitle: 'Mercado Norte Córdoba: mercado y paseo histórico — Guía',
    metaDescription:
      'Mercado Norte de Córdoba: qué es, cómo llegar y cómo combinarlo con un recorrido por el centro histórico desde la plaza.',
    lead: 'Mercado Norte es un mercado tradicional de la ciudad, buen lugar para productos regionales y comida. Se combina bien con un recorrido más amplio por el centro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Qué es',
        paragraphs: [
          'Mercado Norte es un mercado tradicional de Córdoba, con puestos de productos y opciones para comer. Es un ambiente distinto al de la plaza, más popular y bullicioso.',
          'Queda fuera del microcentro inmediato, por lo que conviene planearlo como parte de una media jornada.',
        ],
      },
      {
        heading: 'Cómo combinarlo',
        paragraphs: [
          'Podés visitar primero la plaza, la Catedral y el Cabildo, y luego desplazarte a Mercado Norte para probar productos regionales.',
          'Confirmá horarios y días de mayor actividad antes de ir; los mercados pueden tener días y franjas con menos puestos.',
        ],
        bullets: [
          'Visitá el centro histórico primero y el mercado después.',
          'Confirmá horarios y días de mayor actividad.',
          'Considerá el transporte entre la plaza y el mercado.',
        ],
        callout:
          'No promocionamos puestos concretos ni garantizamos precios. La visita depende del horario del mercado; confirmalo antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿Qué es Mercado Norte?',
        a: 'Es un mercado tradicional de Córdoba con productos y opciones para comer. Queda fuera del microcentro inmediato, así que conviene planearlo en una media jornada.',
      },
      {
        q: '¿Cómo lo combino con la plaza?',
        a: 'Visitá primero el centro histórico y luego desplazate al mercado. Confirmá horarios y considerá el transporte entre ambos puntos.',
      },
    ],
    related: ['comida-tipica', 'almorzar', 'medio-dia'],
  },

  // ───────────────────────── F. RUTAS ─────────────────────────
  {
    slug: 'centro-historico-1-hora',
    section: 'rutas',
    priority: 'P1',
    kicker: 'Recorrido corto',
    h1: 'Centro histórico de Córdoba en 1 hora',
    metaTitle: 'Centro histórico de Córdoba en 1 hora: recorrido desde la plaza — Guía',
    metaDescription:
      'Un recorrido de 1 hora por el centro histórico de Córdoba desde Plaza San Martín: Catedral, Cabildo y Pasaje Santa Catalina a pie.',
    lead: 'Si tenés una hora, podés recorrer lo esencial del casco histórico a pie: la plaza, la Catedral, el Cabildo y el Pasaje Santa Catalina, enfocándote en fachadas y fotografía.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido',
        paragraphs: [
          'Empezá en el centro de Plaza San Martín rodeando el monumento. Seguí hacia la Catedral (borde de la plaza) y luego al Cabildo.',
          'Cerrá con el Pasaje Santa Catalina, a pocos pasos, y volvé por las peatonales. Todo se hace a pie en poco más de media hora de caminata tranquila.',
        ],
        bullets: [
          '0–15 min: monumento y perímetro de la plaza.',
          '15–35 min: Catedral y Cabildo desde afuera.',
          '35–60 min: Pasaje Santa Catalina y vuelta por peatonales.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'Este recorrido es de apariencia y fotografía: no entra a edificios. Si querés interiores, necesitás más tiempo (ver recorrido de 2 horas).',
          'Llevá agua y, en verano, preferí la mañana o el atardecer.',
        ],
        callout:
          'Los tiempos son orientativos y dependen del ritmo y el clima. Las visitas interiores tienen horarios propios.',
      },
    ],
    faqs: [
      {
        q: '¿Se puede ver el centro histórico en 1 hora?',
        a: 'Sí, un recorrido a pie por fachadas y fotografía: plaza, Catedral, Cabildo y Pasaje Santa Catalina. No incluye interiores; para eso véase el recorrido de 2 horas.',
      },
      {
        q: '¿Cuánto se camina?',
        a: 'Es un paseo corto y compacto: todo está a pocas cuadras. Medí unos 30–45 minutos de caminata tranquila, más el tiempo que quieras dedicar a mirar.',
      },
    ],
    related: ['centro-historico-2-horas', 'pasaje-santa-catalina', 'peatonales'],
  },
  {
    slug: 'centro-historico-2-horas',
    section: 'rutas',
    priority: 'P1',
    kicker: 'Recorrido medio',
    h1: 'Qué ver cerca de Plaza San Martín en 2 horas',
    metaTitle: 'Centro histórico en 2 horas: recorrido desde Plaza San Martín — Guía',
    metaDescription:
      'Un recorrido de 2 horas por el centro histórico de Córdoba: plaza, Catedral, Cabildo, Pasaje Santa Catalina y una pausa en un café.',
    lead: 'Con dos horas podés sumar una visita interior y una pausa. Es el punto medio entre el paseo rápido y la media jornada.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido',
        paragraphs: [
          'Repetí la base de 1 hora (plaza, Catedral, Cabildo, Pasaje Santa Catalina) y sumá una visita interior, como el Cabildo o la Catedral, según su horario del día.',
          'Terminá con una pausa en un café del entorno para leer con calma el centro.',
        ],
        bullets: [
          '0–45 min: plaza y fachadas.',
          '45–90 min: una visita interior (según horario).',
          '90–120 min: pausa en un café y cierre por las peatonales.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'Confirmá antes los horarios de los interiores; si uno está cerrado, reemplazalo por otro o por más tiempo en el Pasaje.',
          'Este recorrido sigue siendo compacto y a pie.',
        ],
        callout:
          'Los tiempos son orientativos. Las visitas interiores dependen de horarios que pueden cambiar; confirmalos el día de la visita.',
      },
    ],
    faqs: [
      {
        q: '¿Qué alcanzo a ver en 2 horas?',
        a: 'La base de 1 hora más una visita interior (Catedral o Cabildo, según horario) y una pausa en un café. Todo a pie y en el microcentro.',
      },
      {
        q: '¿Vale la pena entrar a un edificio?',
        a: 'Sí, si tenés el tiempo y el horario lo permite. La visita interior suma historia que la caminata exterior no alcanza a mostrar.',
      },
    ],
    related: ['centro-historico-1-hora', 'medio-dia', 'cafes-historicos'],
  },
  {
    slug: 'medio-dia',
    section: 'rutas',
    priority: 'P2',
    kicker: 'Media jornada',
    h1: 'Medio día en el centro histórico desde la plaza',
    metaTitle: 'Medio día en el centro histórico de Córdoba: recorrido — Guía',
    metaDescription:
      'Cómo pasar media jornada en el centro histórico de Córdoba: plaza, Manzana Jesuítica, un museo y un café, todo desde Plaza San Martín.',
    lead: 'Media jornada te alcanza para combinar plaza, Manzana Jesuítica y un museo, con tiempo para almorzar o tomar algo. Es el recorrido más equilibrado.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido',
        paragraphs: [
          'Empezá en la plaza y el Pasaje Santa Catalina. Seguí hacia la Manzana Jesuítica (Iglesia de la Compañía y Cripta Jesuítica) y sumá el Museo Juan de Tejeda.',
          'Almorzà o tomá algo en el entorno y cerrá con una caminata por las peatonales.',
        ],
        bullets: [
          'Mañana: plaza + Pasaje + Manzana Jesuítica.',
          'Mediodía: almuerzo o pausa en el microcentro.',
          'Tarde: museo y peatonales.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'Varios interiores tienen horarios propios; si uno está cerrado, reorganizá sin alejarte del centro.',
          'Llevá agua y usá la sombra en días calurosos.',
        ],
        callout:
          'Los tiempos son orientativos. Las visitas dependen de horarios que pueden cambiar; confirmalos antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿Qué se hace en medio día?',
        a: 'Plaza, Pasaje Santa Catalina, Manzana Jesuítica (iglesia y cripta) y un museo, con pausa para almorzar. Todo a pie desde la plaza.',
      },
      {
        q: '¿Alcanza para la Manzana Jesuítica?',
        a: 'Sí, media jornada es el tiempo ideal para recorrerla con calma y sumar un museo cercano.',
      },
    ],
    related: ['un-dia', 'manzana-jesuitica', 'museo-juan-de-tejeda'],
  },
  {
    slug: 'un-dia',
    section: 'rutas',
    priority: 'P2',
    kicker: 'Jornada completa',
    h1: 'Un día en Córdoba Capital empezando en Plaza San Martín',
    metaTitle: 'Un día en Córdoba Capital desde Plaza San Martín: recorrido — Guía',
    metaDescription:
      'Cómo pasar un día completo en Córdoba Capital desde Plaza San Martín: centro histórico, Manzana Jesuítica, museos, gastronomía y cultura.',
    lead: 'Un día completo te permite combinar lo esencial del centro con museos, gastronomía y, si querés, una incursión más amplia como Mercado Norte.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido',
        paragraphs: [
          'Mañana: plaza, Catedral, Cabildo, Pasaje Santa Catalina y Manzana Jesuítica. Mediodía: almuerzo en el entorno.',
          'Tarde: un museo (Juan de Tejeda, Marqués de Sobremonte o de la Memoria) y, si te queda tiempo, una visita más amplia como Mercado Norte.',
        ],
        bullets: [
          'Mañana: casco histórico a pie.',
          'Mediodía: gastronomía cerca de la plaza.',
          'Tarde: museos y, opcional, Mercado Norte.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'No intentes verlo todo corriendo: elegí dos o tres interiores y dejá margen para pausas.',
          'Confirmá horarios de museos e interiores antes de armar el itinerario del día.',
        ],
        callout:
          'Los tiempos son orientativos. Las visitas dependen de horarios que pueden cambiar; confirmalos antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿Se puede ver Córdoba en un día?',
        a: 'Un día completo alcanza para el casco histórico, la Manzana Jesuítica, uno o dos museos y gastronomía, todo desde la plaza. No intentes cubrir todo sin pausas.',
      },
      {
        q: '¿Conviene incluir Mercado Norte?',
        a: 'Podés sumarlo por la tarde si te queda tiempo; queda fuera del microcentro inmediato, así que planéalo como parte de la jornada.',
      },
    ],
    related: ['medio-dia', 'mercado-norte', 'museo-juan-de-tejeda'],
  },
  {
    slug: 'iglesias-historicas',
    section: 'rutas',
    priority: 'P2',
    kicker: 'Ruta temática',
    h1: 'Ruta de iglesias históricas del centro de Córdoba',
    metaTitle: 'Ruta de iglesias históricas de Córdoba: recorrido — Guía',
    metaDescription:
      'Una ruta a pie por las iglesias históricas del centro de Córdoba: Catedral, Cabildo, Santa Teresa y la Manzana Jesuítica.',
    lead: 'Córdoba tiene un conjunto religioso notable. Esta ruta a pie une las iglesias y capillas del microcentro, ideal para quienes disfrutan la arquitectura sacra.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido',
        paragraphs: [
          'Empezá en la Catedral, seguí al Cabildo y al Pasaje Santa Catalina, y continuá hacia la Manzana Jesuítica (Iglesia de la Compañía y Cripta Jesuítica).',
          'Si tenés tiempo, sumá la Iglesia Santa Teresa y el Oratorio del Obispo Mercadillo, ambos en el microcentro.',
        ],
        bullets: [
          'Catedral y Cabildo: en el borde de la plaza.',
          'Manzana Jesuítica: iglesia y cripta.',
          'Santa Teresa y Oratorio: extensiones a pie.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'Cada templo tiene horarios y normas propias; confirmalos antes de entrar.',
          'Respetá las normas de un lugar de culto en uso.',
        ],
        callout:
          'No contamos con verificación permanente de horarios. Consultalos con cada institución antes de visitar.',
      },
    ],
    faqs: [
      {
        q: '¿Qué iglesias se pueden visitar?',
        a: 'Catedral, Cabildo, Iglesia de la Compañía (Manzana Jesuítica), Cripta Jesuítica, Iglesia Santa Teresa y Oratorio del Obispo Mercadillo, entre otras. Cada una tiene horarios propios.',
      },
      {
        q: '¿Es un recorrido a pie?',
        a: 'Sí, todas están en el microcentro y se unen caminando en pocas cuadras desde Plaza San Martín.',
      },
    ],
    related: ['catedral-de-cordoba', 'iglesia-compania-de-jesus', 'iglesia-santa-teresa'],
  },
  {
    slug: 'peatonales',
    section: 'rutas',
    priority: 'P2',
    kicker: 'Ruta urbana',
    h1: 'Recorrido por las calles peatonales de Córdoba',
    metaTitle: 'Calles peatonales de Córdoba: recorrido desde Plaza San Martín — Guía',
    metaDescription:
      'Cómo recorrer las peatonales de Córdoba desde Plaza San Martín: ejes comerciales, paseo y conexión con el centro histórico.',
    lead: 'Las peatonales del microcentro permiten caminar sin tránsito y conectan la plaza con comercios, cafés y el entorno histórico. Es el paseo más cómodo del centro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido',
        paragraphs: [
          'Desde la plaza, salí por las peatonales que rodean el microcentro. Vas a encontrar ejes comerciales, plazas menores y conexiones con la Catedral y el Cabildo.',
          'El Pasaje Santa Catalina es la pieza peatonal más histórica y fotografiable.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'En horas pico, las peatonales pueden estar concurridas; si buscás tranquilidad, preferí mañana.',
          'Usá las peatonales para enlazar la plaza con cafés y comercios sin cruzar el tránsito.',
        ],
        callout:
          'La señalización y los desvíos pueden cambiar por obras o eventos. Seguí la señalización local durante el paseo.',
      },
    ],
    faqs: [
      {
        q: '¿Cómo recorro las peatonales?',
        a: 'Salí de Plaza San Martín por los ejes peatonales del microcentro. Conectan comercios, cafés y el entorno histórico sin tránsito.',
      },
      {
        q: '¿La plaza conecta con las peatonales?',
        a: 'Sí, está en el microcentro y sus salidas llevan a las peatonales en pocos pasos, incluido el Pasaje Santa Catalina.',
      },
    ],
    related: ['centro-historico-1-hora', 'pasaje-santa-catalina', 'kilometro-cero'],
  },
  {
    slug: 'gratis',
    section: 'rutas',
    priority: 'P2',
    kicker: 'Sin costo',
    h1: 'Qué hacer gratis cerca de Plaza San Martín',
    metaTitle: 'Qué hacer gratis cerca de Plaza San Martín Córdoba — Guía',
    metaDescription:
      'Opciones gratuitas cerca de Plaza San Martín: paseo al aire libre, fachadas, Pasaje Santa Catalina y qué interiores pueden tener costo.',
    lead: 'Gran parte de la experiencia del casco histórico es gratuita: la plaza, las fachadas, el Pasaje Santa Catalina y caminar las peatonales no cuestan nada.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Gratis al aire libre',
        paragraphs: [
          'La plaza es espacio público y su recorrido no tiene costo. Lo mismo ocurre con mirar las fachadas, caminar el Pasaje Santa Catalina y recorrer las peatonales.',
          'El monumento y el paisaje se aprecian desde el perímetro sin entrar a ningún edificio.',
        ],
      },
      {
        heading: 'Ojo con los interiores',
        paragraphs: [
          'Algunos edificios e iglesias pueden tener visitas sin costo, pero otros (museos, recorridos guiados) pueden tener entrada. Confirmalo con cada institución.',
          'Esta guía no gestiona entradas ni garantiza que un interior sea gratuito.',
        ],
        bullets: [
          'Gratis: plaza, fachadas, Pasaje, peatonales.',
          'A confirmar: entrada a museos y visitas guiadas.',
          'La plaza como espacio público no tiene costo de acceso.',
        ],
        callout:
          'No garantizamos que todos los interiores sean gratuitos. Confirmá condiciones de cada edificio con la institución antes de ir.',
      },
    ],
    faqs: [
      {
        q: '¿Qué se puede hacer gratis?',
        a: 'El paseo al aire libre: plaza, fachadas, Pasaje Santa Catalina y peatonales no tienen costo. Algunos interiores pueden ser gratuitos, pero otros no; confirmalo con cada institución.',
      },
      {
        q: '¿La plaza cuesta dinero?',
        a: 'No: la fuente municipal la describe como espacio público. El recorrido exterior es gratuito; los interiores cercanos tienen sus propias condiciones.',
      },
    ],
    related: ['horarios-y-acceso', 'centro-historico-1-hora', 'peatonales'],
  },
  {
    slug: 'si-llueve',
    section: 'rutas',
    priority: 'P2',
    kicker: 'Plan B',
    h1: 'Qué hacer cerca de Plaza San Martín si llueve',
    metaTitle: 'Qué hacer si llueve cerca de Plaza San Martín Córdoba — Guía',
    metaDescription:
      'Opciones para días de lluvia cerca de Plaza San Martín: museos interiores, iglesias y cómo reorganizar el recorrido.',
    lead: 'Si llueve, priorizá los espacios interiores: museos e iglesias del centro histórico. La lluvia no tiene por qué arruinar el paseo si planificás con antelación.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Interiores a considerar',
        paragraphs: [
          'El Museo Juan de Tejeda, el Museo Marqués de Sobremonte y el Museo de la Memoria son opciones de interior en el centro. La Catedral y la Iglesia de la Compañía también permiten visita bajo techo.',
          'Confirmá horarios antes de salir; los lunes o feriados algunos museos pueden estar cerrados.',
        ],
      },
      {
        heading: 'Cómo reorganizar',
        paragraphs: [
          'Dejá el paseo al aire libre (plaza y Pasaje) para las pausas sin lluvia y concentrá el resto en interiores cercanos.',
          'Llevá paraguas o prenda de lluvia para los tramos a pie entre edificios.',
        ],
        bullets: [
          'Museos: Juan de Tejeda, Marqués de Sobremonte, de la Memoria.',
          'Iglesias: Catedral, Iglesia de la Compañía.',
          'Confirmá horarios antes de salir.',
        ],
        callout:
          'No garantizamos que un interior esté abierto. Consultá horarios y cierra el recorrido según el clima del día.',
      },
    ],
    faqs: [
      {
        q: '¿Qué hacer si llueve?',
        a: 'Priorizá interiores: museos (Juan de Tejeda, Marqués de Sobremonte, de la Memoria) e iglesias (Catedral, Iglesia de la Compañía). Confirmá horarios antes de salir.',
      },
      {
        q: '¿La plaza se visita igual con lluvia?',
        a: 'Podés recorrerla en pausas sin lluvia, pero conviene concentrar el resto en interiores cercanos y llevar paraguas para los tramos a pie.',
      },
    ],
    related: ['museo-juan-de-tejeda', 'museo-marques-de-sobremonte', 'gratis'],
  },
  {
    slug: 'fotografica',
    section: 'rutas',
    priority: 'P3',
    kicker: 'Ruta de fotos',
    h1: 'Ruta fotográfica por el centro histórico de Córdoba',
    metaTitle: 'Ruta fotográfica del centro de Córdoba: Plaza San Martín y alrededores — Guía',
    metaDescription:
      'Una ruta fotográfica por el centro histórico de Córdoba: plaza, Catedral, Cabildo, Pasaje Santa Catalina y luces según la hora.',
    lead: 'Para quienes buscan fotos, el casco histórico ofrece planos clásicos y luces cambiantes. Esta ruta une los puntos más fotografiables a pie.',
    updated: '30 de octubre de 2026',
    image: '/photos/monumento.jpg',
    sections: [
      {
        heading: 'Los puntos',
        paragraphs: [
          'Empezá con el monumento y la Catedral de fondo en Plaza San Martín. Seguí al Cabildo y al Pasaje Santa Catalina para planos con perspectiva.',
          'La Manzana Jesuítica suma fachadas y patios. La luz de la mañana y del atardecer suele ser la más favorecedora.',
        ],
        bullets: [
          'Mañana: luz suave y sombras largas en el monumento.',
          'Atardecer: tonos cálidos en piedra y follaje.',
          'Noche: iluminación del eje cívico.',
        ],
      },
      {
        heading: 'Consejos',
        paragraphs: [
          'No te subas a las esculturas ni marques el patrimonio. Respetá a quienes transitan el espacio público.',
          'Si reutilizás imágenes de terceros, respetá sus licencias (ver créditos de esta guía).',
        ],
        callout:
          'Las fotos de esta guía se acreditan en la sección de créditos. Para publicar, respetá las licencias de las imágenes que reutilices.',
      },
    ],
    faqs: [
      {
        q: '¿Cuál es el mejor recorrido para fotos?',
        a: 'Plaza (monumento + Catedral de fondo), Cabildo, Pasaje Santa Catalina y Manzana Jesuítica, todo a pie. La mañana y el atardecer suelen dar la mejor luz.',
      },
      {
        q: '¿Se puede fotografiar de noche?',
        a: 'Sí, la iluminación resalta el eje cívico. Usá trípode si querés exponer más y cuidá a las personas en el espacio público.',
      },
    ],
    related: ['puntos-para-fotos', 'pasaje-santa-catalina', 'centro-historico-1-hora'],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getTopicsBySection(section: SectionKey): Topic[] {
  const order: Record<Priority, number> = { P1: 0, P2: 1, P3: 2 };
  return TOPICS.filter((t) => t.section === section).sort(
    (a, b) => order[a.priority] - order[b.priority],
  );
}

export function topicPath(t: Topic): string {
  return `/${t.section}/${t.slug}/`;
}

export function getTopicsBySlugs(slugs: string[]): Topic[] {
  return slugs
    .map((s) => getTopic(s))
    .filter((t): t is Topic => Boolean(t));
}

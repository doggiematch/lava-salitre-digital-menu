export type WinePairing = {
  dishId: string;
  dishName: string;
  wine: string;
  wineryIsland: string;
  grape: string;
  characteristics: string;
  reason: string;
  tastingNote: string;
  summary: string;
};

export const wineImageSrcByName: Record<string, string> = {
  "Brumas de Ayosa Blanco Seco": "/vinos/brumas-de-ayosa-blanco-seco.png",
  "Brumas de Ayosa Malvasía Aromática": "/vinos/brumas-de-ayosa-malvasia-aromatica.png",
  "Conatvs Baboso Negro": "/vinos/conatvs-baboso-negro.png",
  "El Grifo Colección Malvasía Lías": "/vinos/el-grifo-coleccion-malvasia-lias.png",
  "El Grifo Malvasía Volcánica Semidulce": "/vinos/el-grifo-malvasia-volcanica-semidulce.png",
  "El Grifo Moscatel de Ana": "/vinos/el-grifo-moscatel-de-ana.png",
  "Flor de Chasna Blanco Afrutado": "/vinos/flor-de-chasna-blanco-afrutado.png",
  "Ignios Orígenes Listán Negro": "/vinos/ignios-origenes-listan-negro.png",
  "Los Bermejos Malvasía Seco": "/vinos/los-bermejos-malvasia-seco.png",
  "Malvasía Dulce de Tea": "/vinos/malvasia-dulce-de-tea.png",
  "Monje Tradicional Tinto": "/vinos/monje-tradicional-tinto.png",
  "Suertes del Marqués 7 Fuentes": "/vinos/suertes-del-marques-7-fuentes.png",
  "Tajinaste Blanco Seco": "/vinos/tajinaste-blanco-seco.png",
  "Teneguía Malvasía Naturalmente Dulce": "/vinos/teneguia-malvasia-naturalmente-dulce.png",
  "Viñátigo Ensamblaje Tinto": "/vinos/vinatigo-ensamblaje-tinto.png",
  "Viñátigo Gual": "/vinos/vinatigo-gual.png",
  "Viñátigo Vijariego Blanco": "/vinos/vinatigo-vijariego-blanco.png",
};

export const winePairings: Record<string, WinePairing> = {
  "ostra-canaria": {
    dishId: "ostra-canaria",
    dishName: "Ostra canaria, aire marino y granizado salino",
    wine: "Los Bermejos Malvasía Seco",
    wineryIsland: "Bodega Los Bermejos · Lanzarote",
    grape: "Malvasía Volcánica",
    characteristics:
      "Es un vino blanco seco, fresco y con bastante personalidad. Tiene buena acidez, notas cítricas, recuerdos florales y ese fondo mineral tan típico de los vinos de Lanzarote. No es un vino pesado, sino limpio, elegante y con un punto salino que encaja muy bien con platos de mar.",
    reason:
      "Esta receta es muy fresca y marina: la ostra aporta yodo, el agua de mar refuerza la sensación salina y el granizado de pepino da un punto vegetal y refrescante. El vino acompaña sin tapar el sabor de la ostra; su acidez limpia el paladar y su carácter mineral mantiene la idea de mar puro.",
    tastingNote:
      "En nariz recuerda a lima, manzana verde, flores blancas y un fondo mineral. En boca es seco, fresco y equilibrado, con un final limpio, ligeramente salino y muy agradable.",
    summary:
      "Es un maridaje fresco, elegante y muy atlántico. El vino ayuda a resaltar la ostra y deja la boca limpia para seguir con el menú.",
  },
  "perla-atlantica": {
    dishId: "perla-atlantica",
    dishName: "Perla Atlántica",
    wine: "Los Bermejos Malvasía Seco",
    wineryIsland: "Bodega Los Bermejos · Lanzarote",
    grape: "Malvasía Volcánica",
    characteristics:
      "Es un vino blanco seco, fresco y con bastante personalidad. Tiene buena acidez, notas cítricas, recuerdos florales y un fondo mineral muy ligado al paisaje volcánico de Lanzarote. Es limpio, elegante y con un punto salino que encaja muy bien con bocados marinos.",
    reason:
      "La Perla Atlántica busca una sensación muy limpia de mar: agua de mar canaria, limón, sal volcánica y una esfera líquida que explota en boca. El vino acompaña la salinidad sin taparla, refuerza el limón con su acidez y mantiene la frescura atlántica y volcánica del snack.",
    tastingNote:
      "En nariz recuerda a limón, fruta fresca, flores suaves y un fondo mineral. En boca es seco, fresco y equilibrado, con un final largo, limpio y ligeramente salino.",
    summary:
      "Es un maridaje fresco, limpio y muy atlántico. El vino realza la esfera marina, equilibra el punto cítrico y deja la boca preparada para continuar con el menú.",
  },
  "vieja-sancochada": {
    dishId: "vieja-sancochada",
    dishName: "Vieja sancochada, caldo limpio y aceite de algas",
    wine: "Viñátigo Gual",
    wineryIsland: "Bodegas Viñátigo · Tenerife",
    grape: "Gual",
    characteristics:
      "Es un vino blanco con buena estructura, fresco y con una textura algo cremosa. Tiene una acidez natural marcada, pero no resulta agresivo. En boca se nota elegante, con volumen y con un fondo mineral que recuerda al carácter volcánico de Tenerife.",
    reason:
      "La vieja se cocina de forma delicada, el caldo es suave, el puré de papa aporta cremosidad y el aceite de algas refuerza el punto marino. Viñátigo Gual tiene frescura para limpiar el paladar y cuerpo para acompañar la textura del pescado y la papa.",
    tastingNote:
      "En nariz recuerda a fruta blanca, hinojo, flores suaves y piedra húmeda. En boca es fresco, amplio y equilibrado, con un final largo, elegante y ligeramente salino.",
    summary:
      "Es un maridaje fino y muy canario. El vino respeta la delicadeza de la vieja, acompaña el fondo salino del caldo y refuerza la sensación marina del plato sin taparlo.",
  },
  "ceviche-cherne": {
    dishId: "ceviche-cherne",
    dishName: "Ceviche de cherne, leche de tigre clarificada y aceite de cilantro",
    wine: "Tajinaste Blanco Seco",
    wineryIsland: "Bodegas Tajinaste · Tenerife",
    grape: "Listán Blanco",
    characteristics:
      "Es un blanco canario seco, fresco y directo, con buena acidez, perfil cítrico, fruta blanca y un fondo mineral ligero. Su estructura es suficiente para acompañar pescado crudo sin resultar pesado.",
    reason:
      "El ceviche necesita un vino que respete el cherne, acompañe la lima y limpie la boca después de la leche de tigre. La acidez del vino refuerza el punto cítrico, mientras su perfil seco y mineral mantiene la sensación limpia del plato y no tapa el aceite de cilantro.",
    tastingNote:
      "En nariz recuerda a lima, manzana verde, hierbas frescas y flores blancas. En boca es seco, ágil y equilibrado, con acidez viva y un final fresco.",
    summary:
      "Es un maridaje fresco, cítrico y limpio. El vino acompaña el pescado, ordena la acidez de la leche de tigre y deja una sensación ligera para continuar el menú.",
  },
  "cabrilla-confitada": {
    dishId: "cabrilla-confitada",
    dishName: "Cabrilla confitada, caldo clarificado de azafrán y hinojo",
    wine: "El Grifo Colección Malvasía Lías",
    wineryIsland: "Bodega El Grifo · Lanzarote",
    grape: "Malvasía Volcánica",
    characteristics:
      "Es un vino blanco con más volumen que un blanco joven, pero sigue siendo fresco y elegante. La crianza sobre lías le aporta una textura envolvente, mientras que el origen volcánico de Lanzarote le da un fondo mineral marcado. Tiene aromas cítricos, flores blancas y un toque ligeramente especiado.",
    reason:
      "La cabrilla va confitada a baja temperatura, queda jugosa y delicada, y el caldo clarificado de azafrán con hinojo aporta un punto aromático. El vino tiene frescura para limpiar el paladar y cuerpo para acompañar la untuosidad del pescado sin tapar el sabor marino.",
    tastingNote:
      "En nariz recuerda a piel de cítrico, flores blancas, hinojo y un fondo mineral volcánico. En boca es fresco, amplio y equilibrado, con un final fino, elegante y ligeramente salino.",
    summary:
      "Es un maridaje delicado y equilibrado. El vino acompaña la suavidad de la cabrilla, respeta el caldo limpio y realza el toque aromático del azafrán y el hinojo.",
  },
  "sama-roquera": {
    dishId: "sama-roquera",
    dishName: "Sama roquera glaseada, fondo reducido y mojo verde elegante",
    wine: "Viñátigo Vijariego Blanco",
    wineryIsland: "Bodegas Viñátigo · Tenerife",
    grape: "Vijariego Blanco",
    characteristics:
      "Es un vino blanco con mucha personalidad, fresco y con buena tensión. Tiene una acidez marcada, un punto salino y recuerdos de pera, vainilla y matices ahumados. Tiene energía, mineralidad y suficiente estructura para acompañar un pescado con fondo reducido.",
    reason:
      "La sama roquera gana intensidad por el glaseado, el fondo reducido y la mantequilla, mientras el mojo verde aporta cilantro, ajo y acidez. La acidez del vino refresca, su salinidad acompaña el pescado y sus matices ahumados combinan con el glaseado.",
    tastingNote:
      "En nariz recuerda a pera madura, flores blancas, hierbas suaves y un ligero toque ahumado. En boca es fresco, intenso y equilibrado, con acidez viva, sensación salina y un final largo y elegante.",
    summary:
      "Es un maridaje potente pero limpio. El vino sostiene la intensidad del fondo reducido, refresca la grasa del glaseado y mantiene el carácter marino de la sama roquera.",
  },
  "atun-rojo": {
    dishId: "atun-rojo",
    dishName: "Atún rojo, brasa suave, jugo marino y toque graso",
    wine: "Suertes del Marqués 7 Fuentes",
    wineryIsland: "Suertes del Marqués · Tenerife",
    grape: "Predominio de Listán Negro",
    characteristics:
      "Es un tinto canario fresco, jugoso y con carácter atlántico. Tiene cuerpo medio, tanino fino y una sensación mineral que lo hace elegante. No resulta pesado, por eso puede acompañar un pescado graso como el atún sin dominar el plato.",
    reason:
      "El atún rojo tiene una textura carnosa y un punto graso marcado. La brasa suave, el jugo marino, la emulsión grasa y el pepino necesitan un vino con estructura para acompañar la potencia del atún y frescura para limpiar el paladar.",
    tastingNote:
      "En nariz recuerda a cereza roja, violeta, pimienta suave y un fondo mineral. En boca es fresco, sabroso y equilibrado, con tanino fino, buena acidez y un final ágil.",
    summary:
      "Es un maridaje con fuerza, pero equilibrado. El vino acompaña la grasa y la brasa del atún, mientras su frescura mantiene el plato limpio y elegante.",
  },
  "conejo-salmorejo": {
    dishId: "conejo-salmorejo",
    dishName: "Conejo en salmorejo invertido",
    wine: "Monje Tradicional Tinto",
    wineryIsland: "Bodegas Monje · Tenerife",
    grape: "Listán Negro",
    characteristics:
      "Es un vino tinto canario de intensidad media, fresco y fácil de beber. Tiene un perfil frutal, con recuerdos de cereza, hierbas y un toque especiado. Puede acompañar carne sin tapar sus matices.",
    reason:
      "El conejo desmigado, el gel de tomate y la espuma templada de salmorejo mantienen el sabor tradicional en una presentación moderna. La fruta del vino conecta con el tomate, su parte especiada encaja con ajo, tomillo y pimentón, y su frescura equilibra la salsa.",
    tastingNote:
      "En nariz recuerda a cereza madura, frutos rojos, hierbas secas y un ligero toque especiado. En boca es fresco, sabroso y equilibrado, con tanino suave y un final amable, ligeramente rústico.",
    summary:
      "Es un maridaje cercano y con identidad canaria. El vino respeta el sabor del conejo, acompaña el salmorejo y hace que el bocado resulte equilibrado y agradable.",
  },
  "cochino-negro": {
    dishId: "cochino-negro",
    dishName: "Cochino negro encapsulado",
    wine: "Conatvs Baboso Negro",
    wineryIsland: "Bodegas Conatvs · El Hierro",
    grape: "Baboso Negro",
    characteristics:
      "Es un tinto canario con cuerpo, carácter y profundidad. Tiene una parte frutal madura, recuerdos minerales y un punto especiado interesante para platos intensos. Acompaña carnes melosas y fondos reducidos sin quedarse corto.",
    reason:
      "El plato concentra cochino negro a baja temperatura, jugo reducido, miel de palma y tierra de gofio tostado. El Baboso Negro tiene estructura para aguantar la intensidad del cochino y una parte mineral y especiada que conecta con el gofio, el fondo oscuro y la sensación volcánica.",
    tastingNote:
      "En nariz recuerda a mora, ciruela, fruta negra madura, cacao y especias suaves. En boca es sabroso, profundo y envolvente, con buena persistencia y un final mineral.",
    summary:
      "Es un maridaje potente y con mucha identidad canaria. El vino acompaña la grasa del cochino, refuerza el fondo oscuro y equilibra el toque dulce de la miel de palma.",
  },
  "cabrito-cumbre": {
    dishId: "cabrito-cumbre",
    dishName: "Cabrito de cumbre en ceniza volcánica",
    wine: "Viñátigo Ensamblaje Tinto",
    wineryIsland: "Bodegas Viñátigo · Tenerife",
    grape: "Ensamblaje de Baboso Negro, Tintilla, Vijariego Negro y Negramoll",
    characteristics:
      "Es un tinto canario con cuerpo, frescura y bastante carácter. Tiene un perfil especiado y terroso, con recuerdos de fruta negra, pimienta, setas y un fondo mineral que recuerda al suelo volcánico.",
    reason:
      "El cabrito se trabaja con reducción de vino canario, miel de palma, crema de batata y ceniza de aceituna. El vino equilibra el glaseado y la miel, acompaña la ceniza y el punto tostado, y tiene cuerpo para sostener la intensidad del cabrito.",
    tastingNote:
      "En nariz recuerda a fruta negra madura, pimienta, monte bajo, setas y un fondo ligeramente ahumado. En boca es firme, fresco y sabroso, con tanino presente pero elegante. El final es largo, mineral y especiado.",
    summary:
      "Es un maridaje con carácter y equilibrio. El vino sostiene la fuerza del cabrito, limpia el dulzor del glaseado y conecta con la idea volcánica de la ceniza de aceituna.",
  },
  "vaca-canaria": {
    dishId: "vaca-canaria",
    dishName: "Vaca canaria madurada",
    wine: "Ignios Orígenes Listán Negro",
    wineryIsland: "Ignios Orígenes · Tenerife",
    grape: "Listán Negro",
    characteristics:
      "Es un vino tinto canario con personalidad, profundidad y un perfil muy ligado al territorio. Tiene fruta negra, recuerdos especiados, un punto mineral y una boca persistente. Mantiene frescura, pero con estructura suficiente para acompañar una carne madurada.",
    reason:
      "La vaca canaria madurada tiene intensidad, jugo concentrado, mantequilla, tomillo, ajo, emulsión de papa bonita y crujiente de piel. El Listán Negro acompaña la carne, recoge el fondo profundo del jugo y combina con el toque tostado del crujiente.",
    tastingNote:
      "En nariz recuerda a fruta negra, pimienta, grafito, hierbas secas y un toque de barrica. En boca es sabroso, serio y persistente, con tanino fino y final largo.",
    summary:
      "Es un maridaje potente y elegante. El vino sostiene la intensidad de la vaca madurada, limpia la grasa del plato y refuerza el lado profundo, tostado y mineral de la receta.",
  },
  "sorbete-lima": {
    dishId: "sorbete-lima",
    dishName: "Sorbete de lima, sal marina y aceite de oliva suave",
    wine: "Flor de Chasna Blanco Afrutado",
    wineryIsland: "Bodega Cumbres de Abona · Tenerife",
    grape: "Listán Blanco",
    characteristics:
      "Es un vino blanco semidulce, fresco y fácil de beber. Tiene un perfil afrutado, una acidez agradable y un punto goloso muy suave. Funciona bien con platos fríos, ácidos y ligeros.",
    reason:
      "El sorbete limpia el paladar antes del postre. La lima aporta acidez, la sal marina da un toque salino y el aceite de oliva añade una grasa fina. El blanco afrutado suaviza la acidez, mantiene la sensación limpia y no rompe el papel refrescante del plato.",
    tastingNote:
      "En nariz recuerda a cítricos, fruta blanca y fruta tropical suave. En boca es fresco, amable y ligeramente goloso, con buena acidez y un final refrescante.",
    summary:
      "Es un maridaje fresco, ligero y agradable. El vino acompaña el sorbete sin hacerlo pesado, equilibra la acidez y deja la boca limpia para continuar con la parte dulce del menú.",
  },
  "bienmesabe-aereo": {
    dishId: "bienmesabe-aereo",
    dishName: "Bienmesabe aéreo con almendra de Tejeda",
    wine: "El Grifo Malvasía Volcánica Semidulce",
    wineryIsland: "Bodega El Grifo · Lanzarote",
    grape: "Malvasía Volcánica",
    characteristics:
      "Es un vino blanco semidulce, aromático y fresco. Tiene una dulzura natural bien equilibrada con la acidez de la Malvasía Volcánica. Presenta notas de fruta blanca, piña y flores, con una boca amable.",
    reason:
      "El bienmesabe combina espuma de almendra, miel de palma, granizado cítrico y crujiente de almendra. La almendra y la miel necesitan un vino con punto dulce, mientras el granizado cítrico pide frescura. Este semidulce acompaña la parte dulce y mantiene el final limpio.",
    tastingNote:
      "En nariz recuerda a fruta blanca, piña madura y flores. En boca es suave, equilibrado y ligeramente goloso, con una acidez que evita que el conjunto se vuelva pesado.",
    summary:
      "Es un maridaje dulce, fresco y equilibrado. El vino acompaña la almendra y la miel de palma, mientras el punto cítrico del plato y la acidez del vino mantienen una sensación ligera.",
  },
  "ceniza-dulce": {
    dishId: "ceniza-dulce",
    dishName: "Ceniza dulce de chocolate volcánico",
    wine: "Malvasía Dulce de Tea",
    wineryIsland: "Bodega Llanovid · La Palma",
    grape: "Malvasía Aromática",
    characteristics:
      "Es un vino dulce canario con intensidad aromática, buena acidez y recuerdos de fruta madura, miel, flores y notas tostadas. Tiene dulzor suficiente para el chocolate, pero mantiene frescura para no cargar el final.",
    reason:
      "El postre combina ganache de chocolate negro, ceniza dulce de cacao y bizcocho, y aire de leche de cabra. Un vino dulce de Malvasía acompaña el cacao y el punto lácteo, mientras su acidez equilibra la untuosidad de la ganache.",
    tastingNote:
      "En nariz recuerda a miel, albaricoque, fruta confitada, flores y un fondo tostado. En boca es dulce, amplio y equilibrado, con un final persistente y fresco.",
    summary:
      "Es un maridaje dulce y volcánico. El vino sostiene el chocolate, suaviza el punto amargo del cacao y acompaña el aire lácteo sin volver el postre pesado.",
  },
  "palma-cacao": {
    dishId: "palma-cacao",
    dishName: "La Palma bajo cacao",
    wine: "Teneguía Malvasía Naturalmente Dulce",
    wineryIsland: "Bodegas Teneguía · La Palma",
    grape: "Malvasía Aromática",
    characteristics:
      "Es un vino dulce aromático, elegante y con acidez suficiente para equilibrar postres con fruta y chocolate. Presenta notas de fruta madura, miel, flores y un fondo volcánico muy ligado a La Palma.",
    reason:
      "La esfera líquida de plátano aporta dulzor tropical, la ganache da intensidad y la tierra de cacao añade un punto tostado. La Malvasía dulce recoge la fruta y el chocolate, y su acidez evita que el conjunto resulte pesado.",
    tastingNote:
      "En nariz recuerda a fruta tropical madura, miel suave, flores blancas y piel de cítrico. En boca es dulce, aromático y equilibrado, con final fresco y persistente.",
    summary:
      "Es un maridaje dulce, frutal y elegante. El vino acompaña el plátano y el cacao, conecta con La Palma y mantiene un final limpio gracias a su acidez.",
  },
  "pina-hierro": {
    dishId: "pina-hierro",
    dishName: "Piña de El Hierro a la brasa, vainilla y texturas",
    wine: "Brumas de Ayosa Malvasía Aromática",
    wineryIsland: "SAT Viticultores Comarca de Güímar · Tenerife",
    grape: "Malvasía Aromática",
    characteristics:
      "Es un vino blanco dulce de Malvasía Aromática, con mucha expresión en nariz y una acidez que ayuda a que no resulte pesado. Tiene un perfil floral, frutal y elegante, ideal para postres con fruta, vainilla y notas tostadas.",
    reason:
      "La piña de El Hierro marcada a la brasa, la espuma de vainilla, el gel cítrico y el crujiente necesitan dulzor y frescura. El vino acompaña la parte dulce, recoge el aroma tropical de la piña y mantiene el equilibrio gracias a su acidez.",
    tastingNote:
      "En nariz recuerda a flores blancas, fruta madura, miel suave y fruta tropical. En boca es dulce, aromático y equilibrado, con una sensación amable y un final fresco.",
    summary:
      "Es un maridaje aromático, dulce y fresco. El vino acompaña la piña a la brasa y la vainilla, mientras su acidez mantiene el conjunto ligero y elegante.",
  },
  "toffee-aireado": {
    dishId: "toffee-aireado",
    dishName: "Toffee crujiente aireado",
    wine: "El Grifo Moscatel de Ana",
    wineryIsland: "Bodega El Grifo · Lanzarote",
    grape: "Moscatel de Alejandría",
    characteristics:
      "Es un vino blanco dulce, elegante y muy aromático. Tiene color ámbar con reflejos de caramelo y una nariz marcada por fruta confitada, pasas, frutos secos y hierbas aromáticas. Su dulzor está equilibrado por la acidez.",
    reason:
      "El petit final tiene caramelo, mantequilla, sal marina y una textura aireada tipo honeycomb. El Moscatel de Ana recoge la parte melosa y caramelizada del toffee, mientras sus notas de fruta seca y su acidez equilibran la mantequilla y la sal.",
    tastingNote:
      "En nariz recuerda a pasas, miel, naranja confitada, frutos secos y flores secas. En boca es dulce, persistente y equilibrado, con un final largo donde se mezclan dulzor, acidez y recuerdo tostado.",
    summary:
      "Es un maridaje goloso, pero no pesado. El vino acompaña el caramelo profundo del toffee, realza la parte tostada y deja un final elegante para cerrar el menú.",
  },
  "bruma-agaete": {
    dishId: "bruma-agaete",
    dishName: "Bruma de Agaete",
    wine: "Brumas de Ayosa Blanco Seco",
    wineryIsland: "Bodega Comarcal Valle de Güímar · Tenerife",
    grape: "Listán Blanco",
    characteristics:
      "Es un vino blanco joven, seco y fresco. Tiene una acidez clara, notas de fruta blanca, recuerdos cítricos y un fondo herbal muy agradable. Es ligero, limpio y directo, por lo que funciona bien con elaboraciones frías, vegetales y delicadas.",
    reason:
      "Bruma de Agaete es un entrante frío, vegetal y fino. El pepino aporta frescor, el hierbahuerto da aroma canario y la miel de palma añade dulzor. El vino refresca con su acidez, equilibra la miel de palma y acompaña el hierbahuerto sin tapar la sensación limpia del plato.",
    tastingNote:
      "En nariz recuerda a manzana verde, lima, hierbas frescas y flores blancas. En boca es seco, fresco y ligero, con una acidez viva y un final limpio.",
    summary:
      "Es un maridaje fresco, vegetal y muy limpio. El vino acompaña la idea de bruma, refuerza el carácter ligero del entrante y deja la boca preparada para continuar el menú.",
  },
};

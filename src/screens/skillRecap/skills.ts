export interface ISkill {
    headerText: string;
    headerDescription: string
    bodyText: { title: string; body: string[] }[];
    color: string;
    skillNumber: any
}

export const skills: ISkill[] = [
    {
        headerText: "RECONOCER MIS EMOCIONES",
        headerDescription: "El hecho de que no nos guste expresar algunas emociones viene influido por prejuicios sociales, por la idea de que las emociones hacen sentirnos más vulnerables, o por tener poca tolerancia al malestar propio y del otro..",
        bodyText: [
            {
                title: "Darme cuenta de mis emociones",
                body: ["Es normal tener emociones, a veces fuertes, pero pocos de nosotros nos damos cuenta de las emociones que sentimos y pocos hablamos de ellas y a veces nos da vergüenza hacerlo."]
            },
            {
                title: "Hablar con comodidad de mis emociones",
                body: ["Hablar de las emociones nos ayuda a soltar el malestar que tenemos dentro, lo compartes con otras personas, eso permite sentirte comprendido y a no vivirlo con tanta intensidad rebajando un poco su importancia. ", "Las emociones son útiles y cada una tiene sus funciones. En el caso de la tristeza, por ejemplo, su función es conectar con el dolor que nos produce algo que pasa en nuestra vida y tomarnos un tiempo antes de seguir con nuestras cosas.", "Muchas personas se avergüenzan de sentir emociones desagradables porque piensan que es una debilidad. El hecho de no compartirlas por vergüenza en vez de beneficiar les perjudica, ya que sienten que deben mentir frente a los demás y no se pueden mostrar como realmente se sienten, y eso supone una carga muy fuerte. Todos tenemos emociones agradables y desagradables y no eres más débil por sentirlas o expresarlas."]
            },
            {
                title: "Nombrar mis emociones",
                body: ["Me ayuda poner nombre a mis emociones. Si tengo una situación complicada, me ayuda a distinguir las emociones que tengo."]
            },
            {
                title: "Las emociones no son buenas ni malas",
                body: ["Las emociones no son malas o buenas pero son agradables o desagradables. Incluso las emociones desagradables nos pueden ayudar – el miedo, por ejemplo, puede servir para que nos alejemos y preservemos nuestra vida. "]
            },
            {
                title: "Todos tenemos las mismas emociones",
                body: ["Todos tenemos las mismas emociones, aunque no necesariamente con la misma intensidad. Una emoción puede impedirnos a hacer algo que nos convendría hacer (por ej. sentirnos enfadados puede llevarnos a no estudiar bien)… "]
            }
        ],
        color: "#cc0066",
        skillNumber: 1
    },
    {
        headerText: "La importancia de sentirme bien".toUpperCase(),
        headerDescription: "Está comprobado por muchos estudios que gestionar nuestras emociones es indispensable para el bienestar y para tener una vida productiva. Si no me siento bien, si estoy preocupado, no puedo dar el mejor de mí.",
        bodyText: [
            {
                title: "Porqué nos sentimos cómo nos sentimos?",
                body: ["Muchos pensamos que nos sentimos cómo nos sentimos por las cosas que pasan en nuestras vidas.", "Cuando decimos “Me has hecho enfadar”, demuestra que damos por descontado qué la causa de nuestras emociones está fuera de nosotros pero si vivimos nuestras vidas a base de esta creencia, nos sentiremos felices cuando las cosas pasan cómo queremos y infelices cuando no. Pero resulta obvio cuando lo pensamos de verdad que no son las cosas que pasan que nos hacen sentirnos bien o mal: ¡ante el mismo evento, no todo el mundo siente igual.",]
            },
            {
                title: "Hay 2 tipos de pensamientos:",
                body: [
                    "Pensamientos HOT - que no me ayudan y me hacen sentirme peor.",
                    "Pensamientos COOL - que me ayudan y me hacen sentirme mejor.",
                    "(NOTA: HOT y COOL se refiere a pensamientos – no a emociones ni situaciones.)",
                    "Pensamientos HOT se basan en juicios, opiniones, en cosas que no son verdad, para las cuáles no hay evidencia.",
                    "Mientras, pensamientos COOL se basan en hechos que se puede probar con evidencia.",
                    "..."
                ]
            },
            {
                title: "Mi diálogo interno – inconsciente y automatico",
                body: [
                    "Muchas veces hablamos con nosotros mismos en un diálogo interno. Lo hacemos sin darnos cuenta, sin ser consciente, y muchas veces los pensamientos que pasan por nuestra cabeza son HOT y nos hacen sentirnos mal. Así que habría que practicar ser más consciente para v poder pensar COOL en mi diálogo.",
                    "Esto está bien porque, aunque muchas veces no podemos cambiar situaciones fácilmente, si, podemos elegir cómo pensamos, lo que nos dar la libertad emocional que todos anhelamos tanto. Tenemos la libertad de cambiar cómo pensamos y sentirnos diferentemente. Cómo todo, para poder practicar esta habilidad con éxito, habrá que practicar bastante hasta que llega a ser un hábito.",
                ]
            },
            {
                title: "Conseguir mis metas",
                body: [
                    "Y, claro, los pensamientos que nos ayudan a sentirnos mejor nos ayudan a tomar mejores decisiones y tener más probabilidad a cumplir con nuestras metas."
                ]
            }
        ],
        color: "#3333cc",
        skillNumber: 2
    },
    {
        headerText: "TENER ALTA AUTOESTIMA",
        headerDescription: "Mi autoestima es la evaluación que tengo de mí en cualquier momento. Puede fluctuar de momento a momento dependiendo de las circunstancias.",
        bodyText: [
            {
                title: "La importancia de pensar COOL sobre mí mismo",
                body: [
                    "Mi autoestima depende de cómo pienso. Menospreciarme baja mi autoestima, mientras que aceptarme tal cómo soy y valorarme me hace sentirme bien conmigo mismo. Menospreciar es pensar HOT. Aceptar y valorar es pensar COOL. Me hacen sentirme bien. Valorarme no es lo mismo que ser egocéntrico."
                ]
            },
            {
                title: "Lo físico",
                body: [
                    "Hoy en día con la desproporcionada influencia de las redes sociales y las medias, muchos damos tanta importancia a las apariencias hasta cambiar nuestros cuerpos con cirugía pero por lo general no lo hacemos si tenemos adecuada autoestima."
                ]
            },
            {
                title: "Aceptarme no quiere decir conformarme o resignarme",
                body: [
                    "Si nos aceptamos tal cómo somos, no quiere decir que no podemos cambiar cosas si queremos. Pero la clave es que somos nosotros que queremos cambiar cosas para nosotros, no porque los demás lo exigen."
                ]
            },
            {
                title: "Lo que piensan los demás de mí",
                body: [
                    "Es común pensar que lo que piensan los demás de mi es muy importante. Pero para tener autoestima, es mucho más importante lo que uno piensa de uno mismo que lo que piensan los demás.",
                    "La persona con autoestima depende de sí mismo y no de otros en el sentido de que lo que dicen los demás no le afecta tanto. ",
                    "Si uno acepta a sí mismo y si otros vienen y nos dicen cosas feas, no nos afecta, o nos afecta menos",
                ]
            },
        ],
        color: "#ffcc33",
        skillNumber: 3
    },
    {
        headerText: "ESCUCHAR CON EMPATíA",
        headerDescription: "Casi todo el mundo pensamos que sabemos escuchar, pero pocos lo hacemos en realidad. No obstante, podemos aprender hacerlo.",
        bodyText: [
            {
                title: "Hay 3 maneras básicas de escuchar",
                body: [
                    "Escuchar sin atención:",
                    "• Interrumpimos",
                    "• Damos sugerencias",
                    "• Hablamos de los que hemos hecho en una situación parecida",
                    "• A veces no miramos a los ojos",
                    "• Seguimos haciendo otra cosa mientras \"escuchamos\"",
                    "• Juzgamos, criticamos, etc., etc.",
                ]
            },
            {
                title: "Escuchar con atención:",
                body: [
                    "Cuando escuchamos con atención (no interrumpir, etc. etc.), la otra persona se siente escuchada y valorada y es más probable que va a ser dispuesta a tener buenas relaciones con nosotros."
                ]
            },
            {
                title: "Escuchar con empatía:",
                body: [
                    "Cuando escuchamos con atención, nos ponemos en la piel de la otra persona y la otra persona siente entendida además que escuchada y es probable que esta persona tendrá buenos sentimientos hacía nosotros lo que probablemente mejoraría nuestras relaciones.",
                    "Esta manera de escuchar es especialmente importante cuando la otra persona nos cuenta un problema porque, si escuchamos con empatía, podemos ayudar a esta persona a hablar de su problema y posiblemente a resolverlo.",
                    "Para escuchar con empatía, una manera sería decir, por ejemplo:",
                    "\“Ah te entiendo, tiene que ser bastante doloroso\”",
                    "NOTA: es esencial que uno lo dice con sinceridad.",
                    "Saber escuchar con atención y empatía es un paso importante para tener una comunicación eficaz (véase Habilidad 5)."
                ]
            }
        ],
        color: "#339900",
        skillNumber: 4
    },
    {
        headerText: "COMUNICAR CON ASERTIVIDAD",
        headerDescription: "Casi todo el mundo pensamos que sabemos escuchar, pero pocos lo hacemos en realidad. No obstante, podemos aprender hacerlo.",
        bodyText: [
            {
                title: "Hay 3 maneras básicas de comunicar – Agresiva, Pasiva/Sumisa, Asertiva.",
                body: [
                    "Agresividad:",
                    "Si soy agresivo tomo en cuenta mis deseos y mis derechos pero no tomo en cuenta los tuyos. Claro que no tengo empatía, o tengo poco",
                    "Una persona comunicando agresivamente puede ser violento pero también puede ser agresivo de manera muy educada sin levantar la voz.",
                    "Actuar de manera agresiva tiene desventajas evidentes:",
                    "a-Cuando personas comuniquen con agresividad promueven miedo, disgusto y rechazo y así pierden lo bueno que es tener buenas relaciones con los demás.",
                    "b-Si no consiguen lo que exigen, es probable que tendrán emociones negativas extremas. Por ej, pueden sentirse fracasados y rabiosos, así que pueden ser violentos."
                ]
            },
            {
                title: "Pasividad/Sumisión",
                body: [
                    "Es lo opuesto y también tiene mucho que ver con falta de autoestima.",
                    "Si soy pasivo, no defiendo mis derechos y acepto que los tuyos son más importantes.",
                    "Es probable que me siento sin valor y frustrado y me siento mal por no defender mis derechos, mis necesidades y mis deseos.",
                    "Muchas veces una persona que actúa de manera pasiva no cae muy bien a los demás, así que le falta tener buenas relaciones con los demás. "
                ]
            },
            {
                title: "Asertividad",
                body: [
                    "¡A todo el mundo le gusta una persona asertiva!",
                    "Cuando soy asertivo, respeto a mis deseos y derechos y a los de los demás.",
                    "Cuando hay diferencias o problemas, busco soluciones Ganar-Ganar (en vez de Ganar-Perder o Perder-Ganar) para todos.",
                    "Es más probable que uno va a conseguir lo que uno quiere",
                    "Como resultado, habrá un aumento de la satisfacción personal"
                ]
            }
        ],
        color: "#ff9933",
        skillNumber: 5
    },
    {
        headerText: "VIVIR CONSCIENTEMENTE",
        headerDescription: "Muchos de nosotros vivimos la vida sin ser conscientes.",
        bodyText: [
            {
                title: "Ser consciente",
                body: [
                    "En este taller los alumnos aprenden como sentirse tranquilos y como ser más conscientes de ellos mismos y de su entorno.",
                    "Solamente si somos conscientes podemos cambiar cosas."
                ]
            },
            {
                title: "Respiración consciente y estado de ánimo",
                body: [
                    "Se lo enseña a través de la respiración consciente y se la practica en todos los talleres.",
                    "Hay muchos estudios que confirman que la respiración consciente baja la presión sanguínea a y mejora la salud y el estado de ánimo y se lo hace en todos los talleres.",
                    "En el principio, algunos alumnos pueden reír pero no hay que hacer mucho caso. Simplemente seguir dando las instrucciones con voz baja y agradable.",
                    "La primera vez que se hace la respiración consciente se lo hace de manera corta (aprox. un minuto). Poco a poco las respiraciones se hacen más largas y con más contenido hasta incluir visualizaciones para poder superar ciertas situaciones o mejorar nuestras cualidades.",
                    "Con tiempo es probable que los alumnos van a pedir que se hace las respiraciones porque les gusta ser tranquilos, atentos y concentrados y porque aumenta el bienestar personal y las emociones positivas, y reduce el estrés y la ansiedad",
                ]
            }
        ],
        color: "#663366",
        skillNumber: 6
    }
]
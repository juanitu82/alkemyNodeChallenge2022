
const characters = [
    {
        // id: 1, 
        name: 'Alicia', 
        image: 'https://static.wikia.nocookie.net/disney/images/1/11/Alicia.png/revision/latest?cb=20130906083737&path-prefix=es', 
        age: 1, 
        weight: 10, 
        story: 'Alicia es una niña de buena familia que sueña con vivir en un mundo en el que todo fuera un disparate. Cuando ve pasar al Conejo Blanco, ella le sigue hasta el País de las Maravillas, donde hay cosas, lugares y personajes de lo más extraño. Tras pasar un día de locos en ese extraño mundo, Alicia quiere volver a casa, por lo que le pide ayuda al Gato Risón, quien la lleva a ver a la Reina de Corazones. Ésta, tras enfurecerse, manda a todas sus tropas a por Alicia. La persecución termina llevando a Alicia ante el Sr. Picaporte, quien hace ver a Alicia que está durmiendo. Y al final, Alicia se despierta, volviendo de nuevo a su mundo.'
    }, 
    {
        // id: 2, 
        name: 'Daisy Duck', 
        image: 'https://static.wikia.nocookie.net/disney/images/2/21/DaisyDuck.png/revision/latest/scale-to-width-down/321?cb=20140306174526&path-prefix=es', 
        age: 9, 
        weight: 12, 
        story: 'Fue creada en 1920 como la contraparte femenina del Pato Donald y su debut fue en la animación "Mr. Duck Steps Out". Es una prima lejana de Donald. Hasta 1940 era llamada Donna Duck. Aunque es la novia de Donald, ocasionalmente tiene citas con Narciso Bello. Daisy tiene el temperamento de Donald, pero es un poco más sofisticada. Daisy es la tía de Juanito, Jorgito y Jaimito, ya que es hermana del esposo de Della.'
    },
    {
        // id: 3, 
        name: 'Dumbo', 
        image: 'https://static.wikia.nocookie.net/disney/images/b/b8/Dumbo.png/revision/latest/scale-to-width-down/350?cb=20110402190042&path-prefix=es', 
        age: 5, 
        weight: 16, 
        story: 'Es un adorable bebé elefante al que trae la cigüeña hasta donde se encuentra su madre, la Sra. Jumbo, que quiso ponerle el name de Jumbo Jr., aunque tras un estornudo, le aparecieron unas orejas que se ocultaban tras su cabeza, por lo que las demás elefantas le llamaron "Dumbo", un juego de palabras entre "Jumbo" y "Dumb", que en inglés significa "tonto" o "mudo". Pero, cuando Dumbo descubre que gracias a sus enormes orejas puede volar, todos le admiran.'
    },
    {
        // id: 4, 
        name: 'Pato Donald', 
        image: 'https://static.wikia.nocookie.net/disney/images/6/6f/Donald_Duck.png/revision/latest/scale-to-width-down/350?cb=20140427112158&path-prefix=es', 
        age: 15, 
        weight: 20, 
        story: 'Donald Duck (o Pato Donald) es un personaje de Disney, caracterizado por ser un pato blanco antropomórfico de ojos celestes con el pico, piernas y patas anaranjadas. Generalmente viste una camisa de estilo marinero y un sombrero, sin pantalones (excepto cuando va a nadar). Donald ha protagonizado multitud de dibujos animados e historietas. Mientras que las animaciones de Donald tienen amplia popularidad en los Estados Unidos y el resto del mundo, los libros de historietas semanales y mensuales tienen su mayor popularidad en gran parte de los países europeos y el mundo, En todos sus cortos aparecido en solitario mayoría de veces y muchas en compañía de buenas relaciones como Mickey Mouse, Daisy Duck, Goofy, Minnie Mouse, Pluto, José Carioca, Panchito Pistolas, Scrooge McPato y Ludwig Von Pato.'
    },
    {
        // id: 5, 
        name: 'Pluto', 
        image: 'https://static.wikia.nocookie.net/disney/images/3/35/Pluto.png/revision/latest/scale-to-width-down/314?cb=20140127172132&path-prefix=es', 
        age: 5, 
        weight: 18, 
        story: 'Pluto es un perro amarillo muy bien entrenado por su dueño Mickey Mouse. Él es el mejor amigo de Mickey y es muy leal a él desde que era un cachorro. Pluto odia a los gatos, por lo que su mayor rival es Fígaro, el gato de Minnie Mouse. Constantemente, los dos compiten por la atención y el amor de Minnie, aunque en realidad ellos son también muy amigos. Pluto también tiene un muy buen sentido del olfato, y según Mickey puede encontrar cualquier cosa que se proponga. En ocasiones puede ser torpe y inútil, cuando se pelea con personajes como Chip y Chop o la Foca Salty. Al igual que muchos personajes, Pluto tiene un diablo y un ángel. Pluto es muy enamoradizo y algunas perritas le han herido frecuentemente su corazón como Fifí, la Pekinés y Dinah, la Perrita Salchicha'
    },
    {
        // id: 6, 
        name: 'scrooge McPato', 
        image: 'https://static.wikia.nocookie.net/disney/images/5/54/Scrooge_McDuck.png/revision/latest/scale-to-width-down/228?cb=20160213151017&path-prefix=es', 
        age: 35, 
        weight: 13, 
        story: 'Scrooge McPato (Gilito McPato en España y Rico McPato en Hispanoamérica), más conocido como "Tío Scrooge" (Tío Gilito o Tío Rico), es un personaje de historietas y animaciones creado por el artista Carl Barks para The Walt Disney Company. Scrooge es el pato más rico del mundo, un logro que atribuye a haber sido "más inteligente que los sabelotodos, más duro que los rudos, y haberlo hecho cuadrado". Identificado por su atuendo majestuoso (incluido su sombrero de copa, anteojos de pince-nez, polainas y bastón), el dinero de Scrooge no solo es un símbolo de su frugalidad, sino también de su resistencia y laboriosidad. Como tal, se enorgullece de su fortuna hasta el punto de ser un tacaño avaro, aunque es honorable en su esencia'
    },
    {
        // id: 7, 
        name: 'Simba', 
        image: 'https://static.wikia.nocookie.net/disney/images/9/95/Simba.png/revision/latest/scale-to-width-down/317?cb=20121008182056&path-prefix=es', 
        age: 12, 
        weight: 50, 
        story: 'Simba es el protagonista de la película The Lion King. Hijo de Mufasa y Sarabi, Simba fue el siguiente a su padre en la línea para gobernar las Tierras del Reino. Sin embargo, después de que su malvado tío Scar asesinó a Mufasa y culpó a Simba por la muerte del antiguo rey, el joven cachorro de león es condenado al exilio mientras que Scar gobierna como rey. Fue entonces cuando Simba regresó a las Tierras del Reino y reclamó su trono y lugar legítimo en el gran ciclo de la vida. Al entrar en la age adulta, Simba se empareja con su amiga de la infancia Nala y tienen dos cachorros llamados Kiara y Kion.'
    },
    {
        // id: 8, 
        name: 'Bambi', 
        image: 'https://static.wikia.nocookie.net/disney/images/2/2d/Bambi.png/revision/latest/scale-to-width-down/274?cb=20131108172027&path-prefix=es', 
        age: 7, 
        weight: 9, 
        story: 'Bambi es el protagonista de la película animada de 1942 de Disney del mismo name. En cuanto nace este pequeño cervatillo, todos los animales del bosque acudieron al nacimiento del Pequeño Príncipe.'
    },
    {
        // id: 9, 
        name: 'Blancanieves', 
        image: 'https://static.wikia.nocookie.net/disney/images/9/96/Blancanieve1.jpg/revision/latest/scale-to-width-down/218?cb=20200501040907&path-prefix=es', 
        age: 17, 
        weight: 19, 
        story: 'Blancanieves es la protagonista del primer largometraje animado de Disney, Snow White and the Seven Dwarfs. Ella una joven princesa; la "Más bella de todas", que su belleza es definida por su amabilidad y pureza. Poco después de encontrar el amor en un encantador príncipe, Blancanieves se entera de que su celosa madrastra, La Reina Malvada, está determinada a matarla. Blancanieves huye a la fuerza de su casa para escapar de la ira de la reina, pero se encuentra refugio en la cabaña de los siete enanitos. Ahora en refugio, Blancanieves sueña con reunirse con su príncipe y vivir felices por siempre.'
    },
    {
        // id: 10, 
        name: 'Aladdin', 
        image: 'https://static.wikia.nocookie.net/disney/images/8/85/Aladdin_%28personaje%29.png/revision/latest/scale-to-width-down/280?cb=20160318010334&path-prefix=es', 
        age: 22, 
        weight: 36, 
        story: 'Aladdin es el valiente protagonista de la película Aladdin. Es también el héroe de Return of Jafar, Aladdin and the King of Thieves y Aladdin (the series).'
    },
    
    
]

const movies = [
    {
        // id: 1,
        title: 'Alicia en el País de las Maravillas', 
        image: 'https://static.wikia.nocookie.net/disney/images/b/b4/Alice_in_wonderland_ver3_xlg.jpg/revision/latest/scale-to-width-down/328?cb=20160923205132&path-prefix=es', 
        date: 1951, 
        rate: 3,
        generos: [2,8],
        characters: [1]
    },
    {
        // id: 2,
        title: 'Mickeys Christmas Carol', 
        image: 'https://static.wikia.nocookie.net/disney/images/0/0c/Movie_Poster.jpg/revision/latest/scale-to-width-down/350?cb=20210414173906&path-prefix=es', 
        date: 1983, 
        rate: 4,
        generos: [3,6],
        characters: [2]
    },
    {
        // id: 3,
        title: 'Aladdin The Series', 
        image: 'https://static.wikia.nocookie.net/disney/images/8/8d/Aladdin.gif/revision/latest/scale-to-width-down/235?cb=20130108180606&path-prefix=es', 
        date: 1994, 
        rate: 5,
        generos: [7],
        characters: [10]
    },
    {
        // id: 4,
        title: 'The Lion King', 
        image: 'https://static.wikia.nocookie.net/disney/images/1/1a/Lion_king_ver5_xlg.jpg/revision/latest/scale-to-width-down/336?cb=20160923051934&path-prefix=es', 
        date: 1994, 
        rate: 2,
        generos: [3,8],
        characters: [7]
    },
    {
        // id: 5,
        title: 'Mickeys House of Villains', 
        image: 'https://static.wikia.nocookie.net/disney/images/2/2b/HouseOfVillains.png/revision/latest/scale-to-width-down/350?cb=20140313165934&path-prefix=es', 
        date: 2002, 
        rate: 4,
        generos: [3],
        characters: [2]
    },
    {       
        // id: 6,
        title: 'saludos Amigos', 
        image: 'https://static.wikia.nocookie.net/disney/images/4/4a/SaludosAmigos.png/revision/latest/scale-to-width-down/349?cb=20140714064751&path-prefix=es', 
        date: 1943, 
        rate: 4,
        generos: [3],
        characters: [4]
    },
    {
        // id: 7,
        title: 'Aladdin', 
        image: 'https://static.wikia.nocookie.net/disney/images/d/de/Aladdin_ver2_xlg.jpg/revision/latest/scale-to-width-down/336?cb=20160923054445&path-prefix=es', 
        date: 1992, 
        rate: 3,
        generos: [3,5,8],
        characters: [10]
    },
    {
        // id: 8,
        title: 'Timon & Pumbaa', 
        image: 'https://static.wikia.nocookie.net/disney/images/9/9e/Timon_and_pumbaa-s.jpg/revision/latest/scale-to-width-down/250?cb=20130108180323&path-prefix=es', 
        date: 1995, 
        rate: 4,
        generos: [7],
        characters: [7]
    },
    {
        // id: 9,
        title: 'Snow White and the Seven Dwarfs', 
        image: 'https://static.wikia.nocookie.net/disney/images/d/d3/Snow_white_and_the_seven_dwarfs_xlg.jpg/revision/latest/scale-to-width-down/334?cb=20160923153029&path-prefix=es', 
        date: 1937, 
        rate: 3,
        generos: [3,8],
        characters: [9]
    },
    {
        // id: 10,
        title: 'The Lion King II: Simbas Pride', 
        image: 'https://static.wikia.nocookie.net/disney/images/f/fc/The_Lion_King_2_Simba%27s_Pride.png/revision/latest/scale-to-width-down/339?cb=20140208100343&path-prefix=es', 
        date: 1998, 
        rate: 2,
        generos: [2,3,8],
        characters: [7]
    },
    {
        // id: 11,
        title: 'El Retorno de Jafar', 
        image: 'https://static.wikia.nocookie.net/disney/images/c/c2/ReturnOfJafar.png/revision/latest/scale-to-width-down/300?cb=20140721082959&path-prefix=es', 
        date: 1994, 
        rate: 5,
        generos: [3,5,8],
        characters: [10]
    },
    {
        // id: 12,
        title: 'Mickey Mouse Works', 
        image: 'https://static.wikia.nocookie.net/disney/images/e/e3/Mickey_Mouse_Works.png/revision/latest/scale-to-width-down/180?cb=20140209190633&path-prefix=es', 
        date: 1999, 
        rate: 3,
        generos: [7],
        characters: [5]
    },
];

const genres = [
    {
        // id: 1, 
        name: 'Aventura', image: 'whatever'}, 
    {
        // id: 2,
         name: 'Accion', image: 'whatever'},
    {
        // id: 3,
         name: 'Animacion', image: 'whatever'},
    {
        // id: 4, 
        name: 'Comedia', image: 'whatever'},
    {
        // id: 5,
         name: 'Fantasia', image: 'whatever'},
    {
        // id: 6,
         name: 'Familiar', image: 'whatever'},
    {
        // id: 7,
         name: 'Serie', image: 'whatever'},
    {
        // id: 8, 
        name: 'Musical', image: 'whatever'},
]

module.exports = {characters, movies, genres}
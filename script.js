
const nombre = "Delmy";


console.log(nombre);

document.write(nombre);

let elementoHTMLtitulo = document.getElementById('titulo');

let elementotypewriter = new Typewriter(elementoHTMLtitulo, {
    loop: true
});

elementotypewriter.typeString('Estudiante de la UTM')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrollo de Software Multiplataforma')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Delmy Edith Cab Pech</strong>')
    .pauseFor(2500)
    .start();
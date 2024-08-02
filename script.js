

let frase = document.getElementById('frase');
// En lugar de var usar let
let typewriter = new Typewriter(frase, {
  loop: true,
  delay: 75,
});


typewriter
  .pauseFor(500)
  .typeString('<strong>Frida Pineda</strong>')
  .pauseFor(300)
  .deleteAll()
  .typeString('<strong>Estudiante</strong>')
  .pauseFor(300)
  .deleteAll()
  .typeString('<strong>Programadora</strong>')
  .pauseFor(800)
  .start();



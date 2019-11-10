let Scroll = (clase, duraction, origin, distance, delay) =>{
  window.sr = ScrollReveal();
  sr.reveal(clase, {
    duration: duraction,
    origin: origin,
    distance: distance,
    delay: delay
  });
}

Scroll('.game-board', 2000, 'left', '200px', 100);

let pronombre = ['the', 'our'];
let adjetivos = ['great', 'big'];
let sustantivos = ['jogger', 'racoon'];


console.log("---- FOR ----");

for (let posicionPronombre = 0; posicionPronombre < pronombre.length; posicionPronombre++) {
  for (let posicionAdjetivo = 0; posicionAdjetivo < adjetivos.length; posicionAdjetivo++) {
    for (let posicionSustantivo = 0; posicionSustantivo < sustantivos.length; posicionSustantivo++) {

      let dominio = `${pronombre[posicionPronombre]}${adjetivos[posicionAdjetivo]}${sustantivos[posicionSustantivo]}.com`;

      console.log(dominio);
    }
  }
}


console.log("---- FOREACH ----");

pronombre.forEach(function(cadaPronombre) {
  adjetivos.forEach(function(cadaAdjetivo) {
    sustantivos.forEach(function(cadaSustantivo) {

      let dominio = `${cadaPronombre}${cadaAdjetivo}${cadaSustantivo}.com`;

      console.log(dominio);

    });
  });
});
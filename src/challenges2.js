// Desafio 10
function techList(tech, name) {
  let objectList = [];
  let techAleatoria = tech.sort();
  if (tech.length === 0) {
    return ('Vazio!');
  }
  for (index = 0; index < techAleatoria.length; index += 1) {
    let object = {
      tech: '',
      name: name,
    };
    object.tech = techAleatoria[index];
    objectList.push(object);
  }
  return (objectList);
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

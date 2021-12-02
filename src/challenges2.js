// Desafio 10
function techList(tech, nome) {
  let result = [];
  if (tech.length > 0) {
    let techOrdem = tech.sort();
    for (let i = 0; i < techOrdem.length; i += 1) {
      let objeto = {
        tech: '',
        name: nome,
      };
      objeto.tech = techOrdem[i];
      result.push(objeto);
    }
    return result;
  }
  return 'Vazio!';
}
// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = Math.abs(lineA + lineB);
  let somaAC = Math.abs(lineA + lineC);
  let somaBC = math.abs(lineB + lineC);
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difBC = Math.abs(lineB - lineC);
  let ladoMaior = " ";
  if (lineA < somaBC && lineB < somaAC && lineC < somaBC) {
  ladoMaior = true;  
  } else {
    ladoMaior = false;
  }
  if (lineA > difBC && lineB > difAC && lineC > difAB) {

  }
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

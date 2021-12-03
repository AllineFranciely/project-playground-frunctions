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
// recorri ao repositório da trybe para verificar a forma de retornar os valores de 3 funções juntas
// https://github.com/tryber/sd-012-project-playground-functions/pull/14/files

function triangleCheck(lineA, lineB, lineC) {
  function checkA(lineA, lineB, lineC) {
    if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
      return false;
    } 
    return true;
  }

  function checkB(lineA, lineB, lineC) {
    if (lineB > lineC + lineA || lineB < Math.abs(lineC - lineA)) {
      return false;
    } 
    return true;
  }
  
  function checkC(lineA, lineB, lineC) {
    if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
      return false;
    }
    return true;
  }
  let a = checkA(lineA, lineB, lineC);
  let b = checkB(lineA, lineB, lineC);
  let c = checkC(lineA, lineB, lineC);
  return a && b && c;
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

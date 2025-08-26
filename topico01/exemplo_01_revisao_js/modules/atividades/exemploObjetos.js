/**
 *  OBJETOS: Iterando Objetos
 */

export function exemploTSI() {
  const aluno = {
    nome: "Igor Leon",
    curso: "Sistemas para Internet",
    idade: 21,
  };

  for (let itens of Object.entries(aluno)) {
    console.log(itens);
  }

  for (let [chave, valor] of Object.entries(aluno)) {
    console.log(`atributo: ${chave} | valor: ${valor}`);
  }
}

const calculadora = require("../../models/calculadora.js");

test("Somar 2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});

test("Somar 'Banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("Banana", 100);
  console.log(resultado);
  expect(resultado).toBe("Erro");
});

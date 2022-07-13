import React, { useState } from "react";

export default function ExerciciosParteUm() {
  const [pessoas, setPessoas] = useState([
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "maria", sobrenome: "jose", idade: 15 },
    { nome: "maria", sobrenome: "aurora", idade: 8 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ]);


  //EXERCICIO 1
  const meuMap = pessoas.map((item) => item.name);

  //EXERCÍCIO 2
  const lista = pessoas.map((item) => {
    return (
      <div>
      </div>
    );
  });

  //exemplo 1

  const meuFilter = pessoas.filter((item) => {
    return item.nome === "maria";
  });

  console.log(meuFilter);

  //EXERCICIO 3

 // const filterMaiorQueVinte 
 // const filterMaiorQueTrinta 

  return (
    <div>
 
    </div>
  );
}

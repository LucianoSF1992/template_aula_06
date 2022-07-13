import React, { useState } from "react";

export default function ExerciciosParteDois() {
  const [pessoas, setPessoas] = useState([
    { nome: "jullia", sobrenome: "izidorio", idade: 24 },
    { nome: "juliana", sobrenome: "paiva", idade: 24 },
    { nome: "maria", sobrenome: "jose", idade: 15 },
    { nome: "maria", sobrenome: "aurora", idade: 8 },
    { nome: "junior", sobrenome: "izidorio", idade: 30 },
    { nome: "joyce", sobrenome: "lima", idade: 22 },
    { nome: "jullia", sobrenome: "lima", idade: 18 },
  ]);
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);

//=========informações do array - item/index/array

  // const listaDeCarros = ["gol", "uno", "celta", "fiesta"];

  // const meuMap = listaDeCarros.map((item, index, array) => {
  //   return (
  //     <li>
  //       O carro {item} ocupa a posição {index} no array: {array}
  //     </li>
  //   );
  // });

//=============método simples/ sem controle de execução

  //const meuForEach = pessoas.forEach((item) => console.log("oi"));

//================metodo de cápsula, controle de execução
  // const mudaNome = (nome) => {
  //   pessoas.forEach((item) => (item.nome = nome));
  //   console.log(pessoas);
  // };
//========== FIND
  // const meuFind = pessoas.find((item) => item.sobrenome === "lima");

  // const mudaEstado = () => {
  //   const meuFind = pessoas.find((item) => item.nome === "maria");
  //   setPessoas([meuFind]);
  // };
//===========INCLUDES
  // const includesInNumeros = numeros.includes(20);

  // const meuIncludes = pessoas.filter((item) => item.nome.includes("w" || "m"));
  // console.log(meuIncludes);

  //----------------------exercicio 5 -------------------------//
  const [busca, setBusca] = useState("");

  const meuFilter = pessoas.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const lista = meuFilter.map((item) => {
    return (
      <div>
        <p>Nome: {item.nome} </p>
        <p>Sobrenome: {item.sobrenome} </p>
        <p>Idade: {item.idade}</p>
      </div>
    );
  });
  return (
    <div>
      <input value={busca} onChange={(e) => setBusca(e.target.value)} />
      {lista}
    </div>
  );
}

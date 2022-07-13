import React, { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import {
  CardComentarios,
  CardMain,
  CardPostContain,
  WrapperCard,
} from "./style";

export default function CardPost() {
  const [post, setPost] = useState(DATA_POST);
  const [busca, setBusca] = useState("");

  const filtrados =
    post &&
    post.filter((item) =>
      item.comentarios[0].texto.toUpperCase().includes(busca?.toUpperCase())
    );

  const lePosts = filtrados.map((item, i) => {
    return (
      <WrapperCard key={item.id}>
        <p>
          Este é o post {i + 1} de {post.length - 1}
        </p>
        <CardMain>
          <h2>{item.titulo}</h2>
          <img src={item.photo} alt="imagem-post" />
        </CardMain>

        <CardComentarios>
          <div>
            <h6>1° Nota:</h6>
            {item.comentarios[0].avaliacao}
          </div>
          <div>
            <h6>1°Comentário:</h6>
            {item.comentarios[0].texto}
          </div>
        </CardComentarios>
      </WrapperCard>
    );
  });

  return (
    <CardPostContain>
      <input
        onChange={(e) => setBusca(e.target.value)}
        placeholder={"Busca por palavras contidas no primeiro comentário"}
      />
      {lePosts}
    </CardPostContain>
  );
}

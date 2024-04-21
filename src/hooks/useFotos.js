import {useEffect, useState} from 'react';

export default function useFotos() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/turisouza/fotos-api/fotos')
      .then(resposta => resposta.json())
      .then(dados => setFotos(dados));
  }, []);

  console.log(fotos.comentarios)



  return fotos;
}

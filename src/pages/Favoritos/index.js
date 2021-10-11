import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { toast } from 'react-toastify';

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const handleDelete = (id) => {
    let filtroFilmes = filmes.filter((item) => {
     return (item.id !== id);
    });

    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluído dos favoritos!');
  };

  return (
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

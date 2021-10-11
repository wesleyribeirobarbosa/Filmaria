import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilmes = async () => {
      const response = await api.get("r-api/?api=filmes");
      console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    };

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando ...</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <img src={filme.foto} alt={filme.nome}></img>
                <strong>{filme.nome}</strong>
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;

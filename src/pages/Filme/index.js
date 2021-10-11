import { useEffect, useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilme = async () => {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if (response.data.length === 0) {
        //Tentou acessar com o id de um filme que nao existe
        history.replace("/");
        return;
      }
      setFilme(response.data);
      setLoading(false);
    };

    loadFilme();
    return () => {
      console.log(
        "Componente desmontado ao trocar de pagina (fim do ciclo de vida)"
      );
    };
  }, [id, history]);

  const salvaFilme = () => {
    const minhaLista = localStorage.getItem("filmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );
    if (hasFilme) {
      toast.warning("Este filme já está na sua lista de salvos!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  };

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando ...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome}></img>
      <div className="rating">
        <img src="/rating-stars.png" alt="rating" />
      </div>
      <div className="sinopse">{filme.sinopse}</div>
      <div className="botoes">
        <button onClick={() => salvaFilme()}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.nome} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./styles.css";

function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 8000); // Ajuste o valor para o tempo desejado em milissegundos (atualmente definido para 3 segundos)

    return () => clearTimeout(timer);
  }, []); // O segundo argumento vazio [] assegura que o useEffect seja executado apenas uma vez, sem dependências

  return (
    <div className={`loading-page ${showLoader ? "" : "hidden"}`}>
      <div className="loading-ball bounce1" />
      <div className="loading-ball bounce2" />
      <div className="loading-ball bounce3" />
    </div>
  );
}

export default Loader;

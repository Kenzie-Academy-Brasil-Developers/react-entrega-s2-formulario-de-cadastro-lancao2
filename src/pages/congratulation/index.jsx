import { CongratsStyled } from "./style";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Congratutations = () => {
  const { user } = useParams();
  return (
    <CongratsStyled>
      <div className="conteiner">
        <div className="msg">
          <h1>Seja muito bem vindo!</h1>
          <h2>{user}</h2>
        </div>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
    </CongratsStyled>
  );
};
export default Congratutations;

import { CongratsStyled } from "./style";
import { useParams } from "react-router-dom";

const Congratutations = () => {
  const { user } = useParams();
  return (
    <CongratsStyled>
      <h1>{user}</h1>
    </CongratsStyled>
  );
};
export default Congratutations;

import { HomeStyled } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Utilize só Letras"
      )
      .required("Campo Obrigatório"),
    email: yup.string().email("Email Invalido").required("Campo obrigatório"),
    senha: yup
      .string()
      .min(8, "Quantidade de caracters invalida")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha fraca"
      ),
    comfirmarSenha: yup
      .string()
      .oneOf([yup.ref("senha"), null], "Senhas divergentes")
      .required("Este campo é obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
    history.push(`/wellcome/${data.name}`);
    
  };

  return (
    <HomeStyled>
      <div className="conteiner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <input placeholder=" Nome" {...register("name")} />
            <div>{errors.name?.message}</div>
            <input placeholder=" Email" {...register("email")} />
            <div>{errors.email?.message}</div>
            <input placeholder=" Senha" {...register("senha")} />
            <div>{errors.senha?.message}</div>
            <input
              placeholder=" Comfirmar Senha"
              {...register("comfirmarSenha")}
            />
            <div>{errors.comfirmarSenha?.message}</div>
          </div>

          <button type="submit">Registrar-se</button>
        </form>
      </div>
    </HomeStyled>
  );
};
export default Home;

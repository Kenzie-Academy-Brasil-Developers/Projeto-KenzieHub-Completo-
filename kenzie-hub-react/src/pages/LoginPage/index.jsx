import React, { useContext } from "react";
import Login from "../../Styles/Login/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../Request";
import InputLogin from "../../components/InputLogin";
import { Button, Link } from "../../Styles/Buttons/button";
import { UserContext } from "../../providers/user";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email é um campo obrigatório")
    .email("Deve ser um email válido"),
  password: yup.string().required("Senha é um campo obrigatório"),
});

const LoginPage = () => {
  const { userId, setUserId } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@LOGINUSER", response.data.token);
      localStorage.setItem("@userId", response.data.user.id);
      setUserId(userId);

      navigate("/dashboard");

      toast.success("Logado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Login>
          <h1>Kenzie Hub</h1>
          <section>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email">
                <InputLogin
                  placeholder="Digite seu Email"
                  label="Email"
                  id="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div className="pass">
                <InputLogin
                  placeholder="Digite sua Senha"
                  label="Senha"
                  id="password"
                  type="password"
                  register={register}
                  error={errors.password?.message}
                />
              </div>

              <Button type="submit" className="enter">
                Entrar
              </Button>
              <span>Ainda não possui uma conta?</span>
              <Link to={"/register"} type="submit" className="sing-up">
                Cadastre-se
              </Link>
            </form>
          </section>
        </Login>
      </motion.div>
    </>
  );
};

export default LoginPage;

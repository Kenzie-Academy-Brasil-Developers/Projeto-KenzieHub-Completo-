import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../../Styles/Register";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { api } from "../../Request";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string().required("Nome é um campo obrigatório"),
  email: yup
    .string()
    .email("Deve fornecer um email válido")
    .required("Email é um campo obrigatório"),
  password: yup
    .string()
    .required("Senha é um campo obrigatório")
    .min(8, "Tamanho mínimo de 8 caracteres")
    .matches(/([A-z])/, "É necessário ao menos uma letra")
    .matches(/([0-9])/, "É necessário ao menos um número")
    .matches(/\W|_/, "É necessário ao menos um caracter especial"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Confirmação não coincide com a senha")
    .required("É necessário confirmar a senha"),
  bio: yup
    .string().required("Bio é um campo obrigatório"),
  contact: yup
    .string().required("Contato é um campo obrigatório"),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  console.log("teste", errors);
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/users", data);
      console.log(response);
      setTimeout(() => {
        navigate("/");
      },1000);
      toast.success("Conta Criada com sucesso!");

    } catch (error) {
      console.log(error);
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
        <Register>
          <nav className="title-back">
            <h1>Kenzie Hub</h1>
            <Link to="/" className="link-back">
              Voltar
            </Link>
          </nav>
          <main>
            <h2>Crie sua conta</h2>
            <h4>Rapido e grátis, vamos nessa</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite aqui seu nome"
                  id="name"
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite aqui seu email"
                  id="email"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Digite aqui sua senha"
                  id="password"
                  {...register("password")}
                />
                    <p>{errors.password?.message}</p>
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Digite novamente sua senha"
                  id="confirmPassword"
                 {...register("confirmPassword")}
                />
                    <p>{errors.confirmPassword?.message}</p>
              </div>
              <div>
                <label htmlFor="text">Bio</label>
                <input
                  type="text"
                  name="bio"
                  placeholder="Fale sobre você"
                  id="bio"
                  {...register("bio")}
                />
                <p>{errors.bio?.message}</p>
              </div>
              <div>
                <label htmlFor="contact">Contato</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Opção de contato"
                  id="contact"
                  {...register("contact")}
                />
                 <p>{errors.contact?.message}</p>
              </div>
              <div>
                <label htmlFor="module">Selecionar Módulo</label>
                <select
                  name="module"
                  id="module"
                  {...register("course_module")}
                >
                  <option value="Primeiro módulo (Introdução ao Frontend)">
                    Primeiro módulo (Introdução ao Frontend)
                  </option>
                  <option value="Segundo módulo (Frontend Avançado)">
                    Segundo módulo (Frontend Avançado)
                  </option>
                  <option value="Terceiro módulo (Introdução ao Backend)">
                    Terceiro módulo (Introdução ao Backend)
                  </option>
                  <option value="Quarto módulo (Backend Avançado)">
                    Quarto módulo (Backend Avançado)
                  </option>
                </select>
                <button type="submit" className="register">
                  Cadastrar
                </button>
              </div>
            </form>
          </main>
        </Register>
      </motion.div>
    </>
  );
};

export default RegisterPage;

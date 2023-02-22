import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../../Styles/Register/index";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { api } from "../../Request";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/InputRegister";
import { ButtonRegister } from "../../Styles/Buttons/button";

const schema = yup.object().shape({
  name: yup.string().required("Nome é um campo obrigatório"),
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
  bio: yup.string().required("Bio é um campo obrigatório"),
  contact: yup.string().required("Contato é um campo obrigatório"),
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
  const onSubmit = async (data) => {
    try {
      await api.post("/users", data);

      setTimeout(() => {
        navigate("/");
      }, 1000);
      toast.success("Conta Criada com sucesso!");
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
              <Input
                placeholder="Digite seu Nome"
                label="Nome"
                id="name"
                type="text"
                register={register}
                error={errors.name?.message}
              />
              <Input
                placeholder="Digite seu Email"
                label="Email"
                id="email"
                type="email"
                register={register}
                error={errors.email?.message}
              />
              <Input
                placeholder="Digite seu senha"
                label="Senha"
                id="password"
                type="password"
                register={register}
                error={errors.password?.message}
              />
              <Input
                placeholder="Digite novamente seu senha"
                label="Confirmar senha"
                id="confirmPassword"
                type="password"
                register={register}
                error={errors.confirmPassword?.message}
              />
              <Input
                placeholder="Fale sobre você"
                label="Bio"
                id="bio"
                type="text"
                register={register}
                error={errors.bio?.message}
              />
              <Input
                placeholder="Opção de contato"
                label="Contato"
                id="contact"
                type="text"
                register={register}
                error={errors.contact?.message}
              />
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
                <ButtonRegister type="submit" className="register">
                  Cadastrar
                </ButtonRegister>
              </div>
            </form>
          </main>
        </Register>
      </motion.div>
    </>
  );
};

export default RegisterPage;

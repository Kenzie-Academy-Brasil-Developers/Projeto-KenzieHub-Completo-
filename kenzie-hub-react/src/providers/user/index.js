import { createContext, useEffect, useState } from "react";
import api from "../../Request";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [datauser, setdatause] = useState({});
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate()

  const onSubmitRegister = async (data) => {
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

  const onSubmitLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@LOGINUSER", response.data.token);
      localStorage.setItem("@userId", response.data.user.id);
      setdatause(response.data.user);
      setUserId(response.data.user);

      navigate("/dashboard");

      toast.success("Logado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  useEffect(() => {
    const getToken = localStorage.getItem("@LOGINUSER");
    if (getToken) {
      async function getUser() {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          });
          setdatause(response.data);
          navigate('/dashboard')
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [datauser, navigate]);

  function userLogout() {
    localStorage.removeItem("@LOGINUSER");
    localStorage.removeItem("@userId");
    setTimeout(() => {
      navigate("/");
    }, 2000);
    toast.info("Deslogado com sucesso!");
  }

  return (
    <UserContext.Provider value={{
      userId, setUserId,
      datauser, setdatause,
      handleSubmit, register, onSubmitLogin, onSubmitRegister, userLogout

    }}>

      {children}
    </UserContext.Provider>
  )

}
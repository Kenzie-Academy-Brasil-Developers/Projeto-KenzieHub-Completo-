import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Request";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [datauser, setdatause] = useState({});
  const { handleSubmit, register } = useForm();
  const [technology, setechnology] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  async function createTech(data) {
    try {
      const getToken = localStorage.getItem("@LOGINUSER");
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      toast.success("Tecnologia criada com sucesso!")
      setechnology([...technology, response.data && setIsModalOpen(false)]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  async function RemoveTech(tech_id) {
    try {
      const getToken = localStorage.getItem("@LOGINUSER");
      const RemoveTech = await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      if (RemoveTech) {
        toast.success("Tecnologia deletada com sucesso!", {});
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar tecnologia", {});
    }
  }

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
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }

  }, [datauser]);

  return (
    <UserContext.Provider value={{
      userId, setUserId,
      datauser, setdatause, createTech,
      isModalOpen, setIsModalOpen, RemoveTech,
      navigate, handleSubmit, register

    }}>
      
      {children}
    </UserContext.Provider>
  )

}
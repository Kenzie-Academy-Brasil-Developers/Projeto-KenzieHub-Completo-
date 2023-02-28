import { toast } from "react-toastify";
import api from "../../Request";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
const [technology, setechnology] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const navigate = useNavigate();

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

    return (
        <TechContext.Provider value={{
            technology, setechnology,
            createTech,RemoveTech,isModalOpen,navigate,setIsModalOpen
        }}>

          {children}
        </TechContext.Provider>
      )
}
import React, { useContext, useEffect, useState } from "react";
import DashBoard from "../../Styles/DashBoard";
import { motion } from "framer-motion";
import { api } from "../../Request";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { UserContext } from "../../providers/user";
import Modal from "../../components/Modal";


const DashBoardPage = () => {
  const { datauser, setdatause } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const getToken = localStorage.getItem("@LOGINUSER");

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
  }, [setdatause]);

  function userLogout() {
    localStorage.removeItem("@LOGINUSER");
    localStorage.removeItem("@userId");
    setTimeout(() => {
      navigate("/");
    }, 2000);
    toast.info("Deslogado com sucesso!");
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DashBoard>
          <section>
            <nav className="title-back">
              <h1>Kenzie Hub</h1>
              <button onClick={() => userLogout()} className="link-back">
                Sair
              </button>
            </nav>
            <Header datauser={datauser} />
            <div className="container tech">
              <p>Tecnologias</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="buttonAdd">
                +
              </button>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div className="technology">
              <h2>Vocẽ ainda não tem nenhuma tecnologia cadastrada :</h2>
              <h3>Clique no botão + para adicionar</h3>
            </div>
          </section>
        </DashBoard>
      </motion.div>
    </div>
  );
};

export default DashBoardPage;

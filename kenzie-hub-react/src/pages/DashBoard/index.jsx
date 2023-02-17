import React, { useEffect, useState } from "react";
import DashBoard from "../../Styles/DashBoard";
import { motion } from "framer-motion";
import { api } from "../../Request";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashBoardPage = () => {
  const [datauser, setdatause] = useState({});

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
        console.log(error);
      }
    }
    getUser();
  }, []);

  function userLogout() {
    localStorage.removeItem("@LOGINUSER");
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
            <header>
              <h2>Olá,{datauser.name}</h2>
              <span>{datauser.course_module}</span>
            </header>
            <main>
              <h2>Que pena! Estamos em desenvolvimento :</h2>
              <h3>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </h3>
            </main>
          </section>
        </DashBoard>
      </motion.div>
    </div>
  );
};

export default DashBoardPage;

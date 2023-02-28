import React, { useContext } from "react";
import DashBoard from "../../Styles/DashBoard";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { UserContext } from "../../providers/user";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import { TechContext } from "../../providers/TechContext";

const DashBoardPage = () => {
  const { datauser, handleSubmit, register, userLogout } =
    useContext(UserContext);
  const { createTech, RemoveTech, isModalOpen, setIsModalOpen } =
    useContext(TechContext);

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
                className="buttonAdd"
              >
                +
              </button>
            </div>
            <div className="tecnologies">
              {!datauser?.techs?.length ? (
                <div className="technology">
                  <h2>Vocẽ ainda não tem nenhuma tecnologia cadastrada :</h2>
                  <h3>Clique no botão + para adicionar</h3>
                </div>
              ) : (
                <ul className="listTechnologies">
                  {datauser?.techs.map((elem) => (
                    <Card elem={elem} RemoveTech={RemoveTech} />
                  ))}
                </ul>
              )}
            </div>
            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              createTech={createTech}
              handleSubmit={handleSubmit}
              register={register}
            />
          </section>
        </DashBoard>
      </motion.div>
    </div>
  );
};

export default DashBoardPage;

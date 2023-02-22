import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../Request/index";
import Modalstyled from "../../Styles/Modal";

function Modal({ isModalOpen, setIsModalOpen }) {
  const { handleSubmit, register } = useForm();

  async function createTech(data) {
    try {
      const response = await api.post("/users/techs", data);
      console.log(response.data);
      response.data && setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {isModalOpen && (
        <Modalstyled>
          <div className="modal">
            <div className="modalHeader">
              <p>Cadastrar tecnologia</p>
              <button className="close" onClick={() => setIsModalOpen(false)}>
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(createTech)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Nome da tecnologia"
                {...register("title")}
              />
              <label htmlFor="status">Selecionar status</label>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit" className="buttonRegisterModal ">
                Cadastrar tecnologia
              </button>
            </form>
          </div>
        </Modalstyled>
      )}
    </div>
  );
}

export default Modal;

import styled from "styled-components";

const Modalstyled = styled.div`
  .modal {
    height: 350px;
    width: 400px;
    background-color: var(--color-grey-3);
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    position: absolute;
    left:0;
    top:15%;
    right:0;
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: var(--color-grey-2);
    border-radius: 8px 8px 0 0;
  }

  form {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
  }

  .close {
    background-color: transparent;
    color: var(--color-grey-1);
    border: none;
  }

  label {
    color: var(--color-grey-1);
    margin-bottom: 15px;
  }

  input {
    padding: 15px;
    border-radius: 5px;
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
    margin-bottom: 15px;
    color: var(--color-grey-1);
  }

  select {
    padding: 15px;
    border-radius: 5px;
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-0);
    margin-bottom: 15px;
    color: var(--color-grey-1);
  }

  .buttonRegisterModal {
    height: 3rem;
    background-color: var(--color-primary);
    border-radius: 0.25rem;
    border: 0.0761rem solid var(--color-primary);
    border: none;
    font-size: 1rem;
    color: var(--color-grey-0);
    margin-top: 10px;
  }
 
  @media(max-width:425px){
    .modal{
      width: 300px;
    }
  }
`;
export default Modalstyled;

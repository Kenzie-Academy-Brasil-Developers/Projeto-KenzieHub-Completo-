import styled from "styled-components";

const CardTechstyled = styled.li`
  ul {
    background-color:var(--color-grey-3);
    display: flex;
    margin: 0 auto;
    height:5rem;
    max-width: 100%;
  }

  li {
    align-items: center;
    background-color: var(--color-grey-4);
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    margin:10px 10px 10px 10px ;
  }

  .RemoveTech {
    background-color: transparent;
    border: none;
    color: var(--color-grey-0);
  }


  span{
    color: var(--color-grey-1);
    margin-right: 20px;
  }
`;

export default CardTechstyled;

import styled from "styled-components";

const DashBoard = styled.section`
  section {
    background-color: var(--color-grey-4);
    max-width: 100%;
    display:flex;
    flex-direction: column;
    padding: 0px 10% 0px 10%;
  }

  

  .title-back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5.375rem;
    border-bottom: solid 0.0625rem var(--color-grey-2);
  }

  .title-back h1 {
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .link-back {
    width: 4.1875rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    border: none;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }

  header {
    display: flex;
    align-items: center;
    border-bottom: solid 0.0625rem var(--color-grey-2);
    height: 5.8125rem;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  header h2 {
    color: var(--color-grey-0);
    font-size: 1.25rem;
  }

  header span {
    color: var(--color-grey-1);
    font-size: 0.875rem;
    font-weight: 600;
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .technology {
    margin: 0 auto;
    background-color: var(--color-grey-3);
    padding: 5px;
    border-radius: 0.5rem;
    padding: 1.625rem;
  }
  .container {
    display: flex;
    align-items: center;
    padding: 20px 0% 20px 0%;
    justify-content: space-between;
  }

  p {
    color: var(--color-grey-0);
  }

  .buttonAdd {
    width: 2rem;
    height: 2rem;
    font-size: 1.375rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    border: transparent;
  }

  h2 {
    color: var(--color-grey-0);
    text-align: center;
    font-size: 0.75rem;
    margin-bottom: 0.625rem;
  }

  h3 {
    color: var(--color-grey-0);
    font-weight: 300;
    font-size: 0.75rem;
    text-align: center;
  }

  .input-text {
    background-color: var(--grey-1);
  }

  @media(max-width:425px){
    header{
      gap: 15px;
    }
  }
 
`;
export default DashBoard;

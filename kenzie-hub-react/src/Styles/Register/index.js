import styled from "styled-components";

const Register = styled.main`
  main {
    width: 23.125rem;
    height: 71.875rem;
    margin: 0 auto;
    background-color: var(--color-grey-3);
    margin-top: 3.4375rem;
    margin-bottom: 5.625rem;
    border-radius:0.375rem;
  }

  .title-back{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10.875rem;
    padding-top:3.625rem;
    
  }

  .title-back h1{
    color:var(--color-primary);
    font-size:1.5rem;
    font-weight:700;
  }

  .link-back{
    width:4.1875rem;
    height:2.5rem;
    border-radius:0.25rem;
    background-color:var(--color-grey-3);
    color:var(--color-grey-0);
    border: none;
    font-weight:700;
    text-align:center;
    padding-top:0.625rem;
    cursor: pointer;
  } 

  h2 {
    font-weight: 700;
    font-size: 1.375rem;
    text-align: center;
    color: var(--color-grey-0);
    padding: 2.625rem 0rem 1.25rem 0rem;
  }

  h4 {
    text-align: center;
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--color-grey-1);
  }

  form {
    display: flex;
    flex-direction: column;
    padding-left: 1.25rem;
  }

  label{
    color: var(--color-grey-0);
  }

  input {
    height: 3rem;
    width: 20.625rem;
    border: 0.0761rem solid var(--color-grey-2);
    background-color:var(--color-grey-2);
    border-radius: 0.25rem;
    padding-left: 0.625rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;
  }

  select{
    height: 3rem;
    border: 0.0761rem solid var(--color-grey-2);
    background-color:var(--color-grey-2);
    border-radius: 0.25rem;
    width: 20.625rem;
  }

  .register{
    height: 3rem;
    width: 20.625rem;
    border: 0.0761rem solid var(--color-grey-2);
    border-radius: 0.25rem;
    background-color:var(--color-primary-negative);
    font-weight: 500;
    font-size: 1rem;
    color:var(--color-grey-0);
    margin-top: 1.25rem;
  }

p{
  font-size:0.75rem;
  color:var(--color-grey-1);
}

@media(max-width:23.4375rem){
  .title-back{
    gap:3.125rem;
  }
  }
`;

export default Register;

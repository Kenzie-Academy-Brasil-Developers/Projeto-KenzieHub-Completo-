import styled from "styled-components";

const Login = styled.section`
  section {
    width: 23.0625rem;
    height: 33.875rem;
    background-color: var(--color-grey-3);
    margin: 2.1875rem auto;
    border-radius: 0.3125rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 3.125rem;
    padding: 0rem 1.25rem 0rem 1.25rem;
  }

  h1 {
    color: var(--color-primary-focus);
    text-align: center;
    margin-top: 6.25rem;
  }

  h2 {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    padding-top: 2.5rem;
  }

  .email {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    font-size: 0.8125rem;
    color: var(--color-grey-0);
    margin-top: 0.625rem;
    margin-bottom: -1.375rem;
  }

  .pass {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    font-size: 0.8125rem;
    color: var(--color-grey-0);
    margin-bottom: -1.375rem;
  }

  input {
    background-color: var(--color-grey-2);
    height: 3rem;
    border: 0.0761rem solid var(--color-grey-0);
    border-radius: 0.25rem;
    padding-left: 0.875rem;
    width:328px;
    margin-top:12px;
    margin-bottom:7px;
  }

  span {
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--color-grey-1);
    text-align: center;
    margin-bottom: -0.8125rem;
    margin-top: 2.9375rem;
  }

  button {
    margin-bottom: -4.375rem;
  }

  @media(max-width:23.4375rem){
      h1{
        text-align:left;
      }
  }
`;

export default Login;

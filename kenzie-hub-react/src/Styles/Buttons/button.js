import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

const defaultCssButton = css`
  height: 3rem;
  background-color: var(--color-primary);
  border-radius: 0.25rem;
  border: 0.0761rem solid var(--color-primary);
  border: none;
  font-size: 1rem;
  color: var(--color-grey-0);
`;

export const Button = styled.button`
  ${defaultCssButton}
`;

export const Link = styled(LinkRouter)`
  ${defaultCssButton}
  background-color: var(--color-grey-1);
  text-align: center;
  padding-top: 0.9375rem;
`;

export const ButtonRegister = styled.button`
    height: 3rem;
    width: 20.625rem;
    border: 0.0761rem solid var(--color-grey-2);
    border-radius: 0.25rem;
    background-color:var(--color-primary-negative);
    font-size: 1rem;
    color:var(--color-grey-0);
    margin-top: 1.25rem;
`;

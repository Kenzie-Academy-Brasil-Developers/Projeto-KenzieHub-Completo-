import styled from "styled-components";

const DashBoard = styled.section`
  section {
    background-color: var(--color-grey-4);
  }

  .title-back {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27.125rem;
    height: 5.375rem;
    border: solid 0.0625rem var(--color-grey-2);
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
    justify-content: center;
    gap: 11.875rem;
    margin-top: 3.125rem;
    border-bottom: solid 0.0625rem var(--color-grey-2);
    height: 7.8125rem;
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
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2.125rem;
    padding-top: 6.75rem;
  }

  main h2 {
    color: var(--color-grey-0);
  }

  main h3 {
    color: var(--color-grey-0);
    font-weight: 300;
    font-size: 1.0625rem;
  }

  .input-text {
    background-color: var(--grey-1);
  }

  @media (max-width: 48rem) {
    .title-back {
      gap: 6.25rem;
    }
    main {
      padding: 10%;
    }
  }
`;
export default DashBoard;

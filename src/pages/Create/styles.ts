import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 2.5rem;
  text-align: center;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: -1px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.125rem;
  margin-top: 20px;

  div {
    border: 2px solid rgb(179, 176, 176);
    padding: 10px;
    border-radius: 5px;
  }

  h3 {
    margin-bottom: 10px;
    font-family: 'Playfair Display', sans-serif;
    color: #7EACB5;
  }

  .deleteButton {
    cursor: pointer;
    padding: 5px 10px;
    margin-top: 10px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 5px;
  }

  .editButton {
    cursor: pointer;
    padding: 5px 10px;
    margin-top: 10px;
    margin-right: 10px;
    background-color: #B0EBB4;
    border: none;
    border-radius: 5px;
  }
`;

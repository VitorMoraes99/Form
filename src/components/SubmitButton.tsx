import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #007BFF; /* Botão azul */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3; /* Tom mais escuro de azul no hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #004085; /* Azul ainda mais escuro no clique */
  }
`;

type SubmitButtonProps = {
  text: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return <Button type="submit">{text}</Button>;
};

export default SubmitButton;

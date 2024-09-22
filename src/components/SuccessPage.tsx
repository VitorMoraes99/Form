// SuccessPage.tsx
import React from 'react';
import styled from 'styled-components';

const SuccessWrapper = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const SuccessPage: React.FC = () => {
  return (
    <SuccessWrapper>
      <h2>Registro Realizado com Sucesso!</h2>
      <p>Obrigado por se registrar. Você pode agora fazer login.</p>
    </SuccessWrapper>
  );
};

export default SuccessPage;

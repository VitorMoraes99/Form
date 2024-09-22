import React from 'react';
import styled from 'styled-components';

type InputFieldProps = {
  label?: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; 
};



const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

const FieldWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #555;
  font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 128, 0, 0.2);
  }
`;

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, error }) => {
  return (
    <FieldWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input type={type} name={name} value={value} onChange={onChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro */}
    </FieldWrapper>
  );
};

export default InputField;

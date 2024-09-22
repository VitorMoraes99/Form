import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  font-size: 24px;
  color: #333;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    let validationErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name) {
      validationErrors.name = 'Nome é obrigatório.';
    }
    if (!formData.email) {
      validationErrors.email = 'E-mail é obrigatório.';
    }
    if (!formData.password) {
      validationErrors.password = 'Senha é obrigatória.';
    }
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = 'Confirmação de senha é obrigatória.';
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'As senhas não coincidem.';
    }

    if (validationErrors.name || validationErrors.email || validationErrors.password || validationErrors.confirmPassword) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form data submitted:', formData);
    alert('Registro realizado com sucesso!');
    navigate('/success'); // Redireciona para a página de sucesso
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <FormWrapper>
      <Title>Registro de Usuário</Title>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <InputField
          label="Confirmação de Senha"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
        <SubmitButton text="Registrar" />
      </form>
    </FormWrapper>
  );
};

export default FormComponent;
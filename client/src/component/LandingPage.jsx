import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styled from '@emotion/styled';

const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Heading = styled(Typography)`
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease-in-out;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SubHeading = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease-in-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CreateButton = styled(Button)`
  font-size: 1.25rem;
  padding: 10px 30px;
  border-radius: 50px;
  background: #ff6a00;
  background: linear-gradient(45deg, #ff6a00, #ee0979);
  animation: bounceIn 1s ease-in-out;

  @keyframes bounceIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    background: #ee0979;
    background: linear-gradient(45deg, #ee0979, #ff6a00);
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const createNewDocument = () => {
    const documentId = uuid();
    navigate(`/docs/${documentId}`);
  };

  return (
    <GradientBackground>
      <Container maxWidth="md">
        <Heading variant="h2">Real-Time Document Editor</Heading>
        <SubHeading variant="h5">
          Collaborate in real-time with your team. Create, edit, and share documents instantly.
        </SubHeading>
        <CreateButton variant="contained" color="primary" onClick={createNewDocument}>
          Create New Document
        </CreateButton>
      </Container>
    </GradientBackground>
  );
};

export default LandingPage;

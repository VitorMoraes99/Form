import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './FormComponent';
import SuccessPage from './SuccessPage'; // Nova página de sucesso

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
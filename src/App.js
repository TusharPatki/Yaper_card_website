import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllCreditCards from './pages/AllCreditCards';
import LoansPage from './pages/LoansPage';
import InvestmentsPage from './pages/InvestmentsPage';
import CreditCardDetail from './pages/CreditCardDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credit-cards" element={<AllCreditCards />} />
        <Route path="/credit-cards/:cardSlug" element={<CreditCardDetail />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
      </Routes>
    </Router>
  );
}

export default App; 
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AppRouter from './router';

function App() {
  return (
    <>
      < Header />
      <main className="mt-16 mb-16">
      <AppRouter />
    </main>
    <Footer />
    </>
  );
}

export default App;

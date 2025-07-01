'use client';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Experiencia from './components/Experiencia';
import Formacao from './components/Formacao';
import Contato from './components/Contato';
import Footer from './components/Footer';


export default function HomePage() {
  // 1. O estado é criado aqui, no componente pai.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      <Main />
      <Experiencia />

      <Formacao />
      <Contato />
      <Footer />
    </div>
  );
}

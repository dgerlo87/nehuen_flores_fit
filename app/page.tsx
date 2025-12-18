
"use client";
import React from 'react';

export default function Home() {
  const btnStyle = {
    display: 'inline-block',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    padding: '18px 40px',
    borderRadius: '50px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    fontSize: '17px',
    margin: '20px 0',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '2px' }}>NEHUEN FIT</h1>
      </nav>

      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#080808' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '120px', borderRadius: '50%', border: '3px solid #16a34a', marginBottom: '20px' }} />
        <h2 style={{ color: '#22c55e', fontSize: '32px', marginBottom: '20px' }}>Entrenamientos simples y efectivos</h2>
        <p style={{ color: '#e5e7eb', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Armamos tu rutina según tu objetivo y nivel.</p>
        <a href="#contacto" style={btnStyle}>QUIERO MI RUTINA</a>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#22c55e', fontSize: '28px', marginBottom: '20px' }}>Entrená con confianza</h2>
        <p style={{ color: '#e5e7eb', fontSize: '16px', lineHeight: '1.6' }}>
          Soy Nehuen, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura y progresiva.
        </p>
        <p style={{ color: '#9ca3af', fontSize: '15px', fontStyle: 'italic', marginTop: '15px' }}>"No se trata de entrenar más, sino de entrenar mejor."</p>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#050505', textAlign: 'center' }}>
        <h2 style={{ color: '#22c55e', fontSize: '28px', marginBottom: '30px' }}>Ejercicios en video</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', border: '2px solid #22c55e' }}>
          <video controls style={{ width: '100%', display: 'block' }}>
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '20px' }}>🎥 Próximamente: Rutinas completas en video.</p>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#22c55e', fontSize: '28px', textAlign: 'center', marginBottom: '30px' }}>Resultados reales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#e5e7eb', marginTop: '10px' }}>“Entreno de forma constante y sin lesionarme.”</p>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>— Martín</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#e5e7eb', marginTop: '10px' }}>“Las rutinas son claras y fáciles de seguir.”</p>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>— Laura</p>
          </div>
        </div>
      </section>

      <section id="contacto" style={{ padding: '60px 20px', maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '25px', border: '2px solid #16a34a' }}>
          <h2 style={{ color: '#22c55e', fontSize: '24px', textAlign: 'center' }}>Armemos tu rutina</h2>
          <form action="

"use client";
import React from 'react';

export default function Home() {
  // Estilos rápidos
  const btnStyle = {
    display: 'inline-block',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    padding: '18px 40px',
    borderRadius: '50px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    fontSize: '17px',
    fontFamily: '"Inter", sans-serif',
    margin: '20px 0'
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* MARCA */}
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '2px', fontWeight: 600 }}>NEHUEN FIT</h1>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '130px', borderRadius: '50%', border: '3px solid #16a34a', marginBottom: '20px' }} />
        <h2 style={{ color: '#22c55e', fontSize: 'clamp(28px, 7vw, 48px)', fontWeight: 600, marginBottom: '20px' }}>Entrenamientos simples, efectivos y adaptados a vos</h2>
        <p style={{ color: '#e5e7eb', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Completa el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.</p>
        <a href="#contacto" style={btnStyle}>QUIERO MI RUTINA</a>
      </section>

      {/* SOBRE MÍ */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#22c55e', fontSize: '32px', fontWeight: 600, marginBottom: '20px' }}>Entrená con confianza</h2>
        <p style={{ color: '#e5e7eb', fontSize: '17px', lineHeight: 1.6 }}>
          Soy Nehuen, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel…
        </p>
        <p style={{ color: '#9ca3af', fontSize: '15px', fontStyle: 'italic', marginTop: '15px' }}>"No se trata de entrenar más, sino de entrenar mejor."</p>
        <a href="#contacto" style={btnStyle}>QUIERO MI RUTINA</a>
      </section>

      {/* VIDEOS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#050505', textAlign: 'center' }}>
        <h2 style={{ color: '#22c55e', fontSize: '32px', fontWeight: 600, marginBottom: '20px' }}>rutinas y ejercicios en video</h2>
        <p style={{ color: '#e5e7eb', fontSize: '17px', marginBottom: '40px' }}>Ejercicios explicados paso a paso para entrenar con buena técnica.</p>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #22c55e' }}>
              <video controls style={{ width: '100%', display: 'block' }}>
                <source src="/video1.mp4" type="video/mp4" />
              </video>
            </div>
            <div style={{ marginTop: '15px', textAlign: 'left' }}>
              <p style={{ color: '#e5e7eb', fontWeight: 600, fontSize: '18px' }}>Sentadillas</p>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Fuerza · Principiante · 15 min</p>
            </div>
        </div>
        <div style={{ marginTop: '30px', color: '#9ca3af', fontSize: '14px' }}>
          <p>🎧 Audio explicativo disponible en el video.</p>
          <p style={{ marginTop: '10px' }}>🎥 <b>Próximamente:</b> Rutinas completas en video.</p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#22c55e', fontSize: '32px', fontWeight: 600, textAlign: 'center', marginBottom: '30px' }}>Resultados reales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#e5e7eb', fontSize: '16px' }}>“Entreno de forma constante y sin lesionarme.”</p>
            <p style={{ color: '#9ca3af', marginTop: '10px' }}>— Martín</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: '#e5e7eb', fontSize: '16px' }}>“Las rutinas son claras y fáciles de seguir.”</p>
            <p style={{ color: '#9ca3af', marginTop: '10px' }}>— Laura</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" style={{ padding: '60px 20px', maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '25px', border: '2px solid #16a34a' }}>
          <h2 style={{ color: '#22c55e', fontSize: '28px', textAlign: 'center', marginBottom: '10px' }}>Armemos tu rutina</h2>
          <p style={{ color: '#9ca3af', fontSize: '14px', textAlign: 'center', marginBottom: '20px' }}>Completá tus datos y empezá hoy mismo.</p>
          <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" name="name" placeholder="Nombre" required style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
            <input type="text" name="contact" placeholder="WhatsApp" required style={{ padding: '12px', borderRadius: '8px', border: 'none' }} />
            <select name="goal" style={{ padding: '12px', borderRadius: '8px' }}>
              <option>Ganar masa muscular</option>
              <option>Bajar de peso</option>
              <option>Mejorar salud</option>
            </select>
            <button type="submit" style={{ ...btnStyle, width: '10


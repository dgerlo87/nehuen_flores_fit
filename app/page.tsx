"use client";
import React from 'react';

export default function Home() {
  const titleStyle = { fontFamily: '"Inter", sans-serif', color: '#22c55e', fontWeight: 600 as const, textAlign: 'center' as const, fontSize: 'clamp(22px, 5vw, 32px)', marginBottom: '20px' };
  const textMainStyle = { fontFamily: '"Inter", sans-serif', color: '#e5e7eb', fontSize: 'clamp(15px, 3vw, 18px)', lineHeight: 1.6 };
  const textSecondaryStyle = { fontFamily: '"Inter", sans-serif', color: '#9ca3af', fontSize: 'clamp(14px, 2.5vw, 15px)' };
  const btnStyle = { display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', padding: '18px 40px', borderRadius: '50px', fontWeight: 'bold' as const, textDecoration: 'none', fontSize: 'clamp(16px, 3vw, 18px)', border: 'none', cursor: 'pointer', fontFamily: '"Inter", sans-serif', margin: '20px 0' };
  const inputStyle = { padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#fff', color: '#000', width: '100%', marginBottom: '15px' };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* NAVEGACIÓN */}
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '2px', fontWeight: 600 }}>NEHUEN FIT</h1>
      </nav>

      {/* HERO CON FONDO IMAGEN */}
      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '130px', borderRadius: '50%', border: '4px solid #16a34a', marginBottom: '20px' }} />
        <h2 style={{ ...titleStyle, fontSize: 'clamp(28px, 7vw, 48px)', maxWidth: '850px', margin: '0 auto 20px' }}>Entrenamientos simples, efectivos y adaptados a vos</h2>
        <p style={{ ...textMainStyle, maxWidth: '650px', margin: '0 auto 30px' }}>Completa el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.</p>
        <a href="#contacto" style={btnStyle}>QUIERO MI RUTINA</a>
        <p style={{ ...textSecondaryStyle, marginTop: '10px' }}>⏱️ Te lleva menos de 1 minuto</p>
      </section>

      {/* SOBRE MÍ */}
      <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={titleStyle}>Entrená con confianza</h2>
        <p style={textMainStyle}>Soy Nehuen, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel…</p>
        <p style={{ ...textSecondaryStyle, fontStyle: 'italic', marginTop: '15px' }}>"No se trata de entrenar más, sino de entrenar mejor."</p>
        <a href="#contacto" style={btnStyle}>QUIERO MI RUTINA</a>
      </section>

      {/* VIDEOS */}
      <section style={{ padding: '80px 20px', backgroundColor: '#050505', textAlign: 'center' }}>
        <h2 style={titleStyle}>rutinas y ejercicios en video</h2>
        <p style={{ ...textMainStyle, maxWidth: '700px', margin: '0 auto 40px' }}>Ejercicios explicados paso a paso para entrenar con buena técnica y de forma segura.</p>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #22c55e' }}>
            <video controls style={{ width: '100%', display: 'block' }}><source src="/video1.mp4" type="video/mp4" /></video>
          </div>
          <div style={{ marginTop: '15px', textAlign: 'left' }}>
            <p style={{ ...textMainStyle, fontWeight: 600 }}>Sentadillas</p>
            <p style={textSecondaryStyle}>Fuerza · Principiante · 15 min</p>
          </div>
        </div>
        <div style={{ marginTop: '30px', ...textSecondaryStyle }}>
          <p>🎧 Audio explicativo disponible para acompañar el video.</p>
          <p style={{ marginTop: '10px' }}>🎥 <b>Contenido en preparación:</b> Próximamente rutinas completas.</p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={titleStyle}>Resultados reales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '30px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...textMainStyle, fontSize: '16px' }}>“Entreno de forma constante y sin lesionarme.”</p>
            <p style={textSecondaryStyle}>— Martín</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...textMainStyle, fontSize: '16px' }}>“Las rutinas son claras y fáciles de seguir.”</p>
            <p style={textSecondaryStyle}>— Laura</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO COMPLETO */}
      <section id="contacto" style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '25px', border: '2px solid #16a34a' }}>
          <h2 style={titleStyle}>Armemos tu rutina</h2>
          <form action="https://formspree.io/f/mpwvvveb" method="POST">
            <input name="nombre" placeholder="Nombre Completo" required style={inputStyle} />
            <input name="contacto" placeholder="


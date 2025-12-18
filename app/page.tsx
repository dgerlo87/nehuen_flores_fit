"use client";
import React from 'react';

// --- ESTILOS REUTILIZABLES ---
const titleSectionStyle = {
  fontFamily: '"Inter", sans-serif',
  color: '#22c55e',
  fontWeight: 600 as const,
  textAlign: 'center' as const,
  fontSize: 'clamp(22px, 5vw, 32px)',
  marginBottom: '20px',
};

const textMainStyle = {
  fontFamily: '"Inter", sans-serif',
  color: '#e5e7eb',
  fontSize: 'clamp(15px, 3vw, 18px)',
  lineHeight: 1.6,
};

const textSecondaryStyle = {
  fontFamily: '"Inter", sans-serif',
  color: '#9ca3af',
  fontSize: 'clamp(14px, 2.5vw, 15px)',
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#16a34a',
  color: '#ffffff',
  padding: '18px 40px',
  borderRadius: '50px',
  fontWeight: 'bold' as const,
  textDecoration: 'none',
  fontSize: 'clamp(16px, 3vw, 18px)',
  border: 'none',
  cursor: 'pointer',
  fontFamily: '"Inter", sans-serif',
  transition: 'transform 0.2s',
};

const ActionButton = () => (
  <div style={{ textAlign: 'center', margin: '30px 0' }}>
    <a 
      href="#contacto" 
      style={buttonStyle} 
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} 
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      QUIERO MI RUTINA
    </a>
  </div>
);

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* NAV / MARCA */}
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '2px', fontWeight: 600 }}>NEHUEN FIT</h1>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '130px', borderRadius: '50%', border: '3px solid #16a34a', marginBottom: '20px' }} />
        <h2 style={{ ...titleSectionStyle, fontSize: 'clamp(28px, 7vw, 48px)', maxWidth: '800px', margin: '0 auto 20px' }}>
          Entrenamientos simples, efectivos y adaptados a vos
        </h2>
        <p style={{ ...textMainStyle, maxWidth: '600px', margin: '0 auto 30px' }}>
          Completa el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.
        </p>
        <ActionButton />
        <p style={{ ...textSecondaryStyle, marginTop: '10px' }}>⏱️ Te lleva menos de 1 minuto</p>
      </section>

      {/* SOBRE MÍ */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={titleSectionStyle}>Entrená con confianza</h2>
        <p style={{ ...textMainStyle, textAlign: 'center' }}>
          Soy Nehuen, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel…
        </p>
        <p style={{ ...textSecondaryStyle, textAlign: 'center', fontStyle: 'italic', marginTop: '15px' }}>
          "No se trata de entrenar más, sino de entrenar mejor."
        </p>
        <ActionButton />
      </section>

      {/* VIDEOS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#050505' }}>
        <h2 style={titleSectionStyle}>rutinas y ejercicios en video</h2>
        <p style={{ ...textMainStyle, textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
          Vamos a encontrar ejercicios explicados paso a paso para entrenar con buena técnica y de forma segura.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #22c55e' }}>
              <video controls style={{ width: '100%', display: 'block' }}>
                <source src="/video1.mp4" type="video/mp4" />
              </video>
            </div>
            <div style={{ marginTop: '15px' }}>
              <p style={{ ...textMainStyle, fontWeight: 600, marginBottom: '5px' }}>Sentadillas</p>
              <p style={textSecondaryStyle}>Fuerza · Principiante · 15 min</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={textSecondaryStyle}>🎧 Audio explicativo disponible para acompañar el video.</p>
          <p style={textSecondaryStyle}>🎥 <strong>Contenido en preparación:</strong> Próximamente vas a poder acceder a rutinas completas en video.</p>
        </div>
        <ActionButton />
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={titleSectionStyle}>Resultados reales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '15px' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...textMainStyle, fontSize: '16px', marginBottom: '10px' }}>“Entreno de forma constante y sin lesionarme.”</p>
            <p style={textSecondaryStyle}>Nehuen adapta las rutinas a mi nivel y objetivos. <br/><strong>— Martín</strong></p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '15px' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...textMainStyle, fontSize: '16px', marginBottom: '10px' }}>“Volví a entrenar después de mucho tiempo.”</p>
            <p style={textSecondaryStyle}>Las rutinas son claras y fáciles de seguir. <br/><strong>— Laura</strong></p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '25px', border: '2px solid #16a34a' }}>
          <h2 style={titleSectionStyle}>Armemos tu rutina</h2>
          <p style={{ ...textSecondaryStyle, textAlign: 'center', marginBottom: '30px' }}>
            Completá el formulario y empezá a entrenar con una rutina pensada para vos.
          </p>
          <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" name="name" placeholder="Nombre Completo" required style={{ padding: '15px', borderRadius: '8px', border: 'none', color: '#000' }} />
            <input type="text" name="contact" placeholder="WhatsApp o Email" required style={{ padding: '15px', borderRadius: '8px', border: 'none', color: '#000' }} />
            <label style={{ ...textSecondaryStyle, color: '#fff', marginTop: '10px' }}>Objetivo principal:</label>
            <select name="goal" style={{ padding: '15px', borderRadius: '8px', color: '#000' }}>
              <option>Ganar masa muscular</option>
              <option>Bajar de peso</option>
              <option>Mejorar salud / Movilidad</option>
            </select>
            <textarea name="message" placeholder="¿Alguna lesión o comentario?" style={{ padding: '15px', borderRadius: '8px', minHeight: '100px', color: '#


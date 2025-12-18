
"use client";
import React from 'react';

export default function Home() {
  const bStyle = {
    display: 'inline-block',
    background: '#16a34a',
    color: '#fff',
    padding: '15px 30px',
    borderRadius: '50px',
    fontWeight: 'bold' as const,
    textDecoration: 'none',
    border: 'none',
    marginTop: '15px'
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      <nav style={{ padding: '20px', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '16px' }}>NEHUEN FIT</h1>
      </nav>

      <section style={{ padding: '40px 20px', background: '#080808' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '100px', borderRadius: '50%', border: '2px solid #16a34a' }} />
        <h2 style={{ color: '#22c55e', fontSize: '28px' }}>Entrenamientos Efectivos</h2>
        <p>Tu rutina personalizada según tu nivel.</p>
        <a href="#form" style={bStyle}>QUIERO MI RUTINA</a>
      </section>

      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ color: '#22c55e' }}>Sobre mí</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#e5e7eb' }}>
          Soy Nehuen, personal trainer. Te ayudo a entrenar de forma segura.
        </p>
        <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>"Entrenar mejor, no más."</p>
      </section>

      <section style={{ padding: '40px 20px', background: '#050505' }}>
        <h2 style={{ color: '#22c55e' }}>Videos</h2>
        <div style={{ maxWidth: '400px', margin: '0 auto', border: '2px solid #22c55e', borderRadius: '10px', overflow: 'hidden' }}>
          <video controls style={{ width: '100%' }}><source src="/video1.mp4" type="video/mp4" /></video>
        </div>
      </section>

      <section id="form" style={{ padding: '40px 20px' }}>
        <div style={{ background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #16a34a', maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={{ color: '#22c55e' }}>Armemos tu rutina</h2>
          <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input name="n" placeholder="Nombre" required style={{ padding: '10px' }} />
            <input name="c" placeholder="WhatsApp" required style={{ padding: '10px' }} />
            <select name="g" style={{ padding: '10px' }}>
              <option>Masa Muscular</option>
              <option>Bajar peso</option>
            </select>
            <button type="submit" style={bStyle}>ENVIAR</button>
          </form>
        </div>
      </section>

      <footer style={{ padding: '20px', color: '#6b7280', fontSize: '12px' }}>
        © 2025 Nehuen Fit
      </footer>

      <a href="https://wa.me/5491172145711" target="_blank" style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#25D366', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>📞</a>
    </div>
  );
}

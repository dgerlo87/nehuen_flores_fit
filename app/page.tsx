"use client";
import React from 'react';

export default function Home() {
  // CONFIGURACIÓN DE ESTILOS SOLICITADOS
  const titleStyle = {
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
    margin: '20px 0'
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* MARCA */}
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '2px', fontWeight: 600 }}>NEHUEN FIT</h1>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '130px', borderRadius: '50%', border: '4px solid #16a34a', marginBottom: '20px' }} />
        <h2 style={{ ...titleStyle, fontSize: 'clamp(28px, 7vw, 48px)', maxWidth: '800px', margin: '0 auto 20px' }}>Entrenamientos simples, efectivos y adaptados a vos</h2>
        <p style={{ ...textMainStyle, maxWidth: '600px', margin: '0 auto 30px' }}>Completa el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.</p>
        <a href="#contacto" style={buttonStyle}>QUIERO MI RUTINA</a>
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={titleStyle}>Entrená con confianza</h2>
        <p style={textMainStyle}>
          Soy Nehuen, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel…
        </p>
        <p style={{ ...textSecondaryStyle, fontStyle: 'italic', marginTop: '15px' }}>"No se trata de entrenar más, sino de entrenar mejor."</p>
        <a href="#contacto" style={buttonStyle}>QUIERO MI RUTINA</a>
      </section>

      {/* SECCIÓN VIDEOS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#050505', textAlign: 'center' }}>
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

      {/* SECCIÓN TESTIMONIOS */}
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={titleStyle}>Resultados reales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...textMainStyle, fontSize: '16px' }}>“Entreno de forma constante y sin lesionarme.”</p>
            <p style={textSecondaryStyle}>Nehuen adapta las rutinas a mi nivel. <br/><b>— Martín</b></p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...textMainStyle, fontSize: '16px' }}>“Las rutinas son claras y fáciles de seguir.”</p>
            <p style={textSecondaryStyle}>Volví a entrenar después de mucho tiempo. <br/><b>— Laura</b></p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="contacto" style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '25px', border: '2px solid #16a34a' }}>
          <h2 style={titleStyle}>Armemos tu rutina</h2>
          <p style={{ ...textSecondaryStyle, textAlign: 'center', marginBottom: '25px' }}>Completá el formulario y empezá a entrenar con una rutina pensada para vos.</p>
          <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input name="name" placeholder="Nombre Completo" required style={{ padding: '15px', borderRadius: '8px', border: 'none' }} />
            <input name="contact" placeholder="WhatsApp" required style={{ padding: '15px', borderRadius: '8px', border: 'none' }} />
            <select name="goal" style={{ padding: '15px', borderRadius: '8px' }}>
              <option>Ganar masa muscular</option>
              <option>Bajar de peso</option>
              <option>Salud / Movilidad</option>
            </select>
            <button type="submit" style={{ ...buttonStyle, width: '100%', margin: '10px 0' }}>ENVIAR MIS DATOS</button>
            <p style={{ ...textSecondaryStyle, textAlign: 'center' }}>Respuesta en menos de 24hs</p>
          </form>
        </div>
      </section>

      {/* FOOTER / CIERRE LEGAL */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #111', color: '#6b7280', fontSize: '13px' }}>
        © {new Date().getFullYear()} Nehuen Fit · Todos los derechos reservados
      </footer>

      {/* BOTONES FLOTANTES */}
      <a href="https://wa.me/5491172145711" target="_blank" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', textDecoration: 'none', zIndex: 100 }}>📞</a>
    </div>
  );
}


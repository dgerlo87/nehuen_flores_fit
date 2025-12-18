"use client";
import React from 'react';

export default function Home() {
  const ts = { fontFamily: '"Inter", sans-serif', color: '#22c55e', fontWeight: 600 as const, textAlign: 'center' as const, fontSize: 'clamp(22px, 5vw, 32px)', marginBottom: '20px' };
  const ms = { fontFamily: '"Inter", sans-serif', color: '#e5e7eb', fontSize: 'clamp(15px, 3vw, 18px)', lineHeight: 1.6 };
  const ss = { fontFamily: '"Inter", sans-serif', color: '#9ca3af', fontSize: 'clamp(14px, 2.5vw, 15px)' };
  const bs = { display: 'inline-block', backgroundColor: '#16a34a', color: '#ffffff', padding: '18px 40px', borderRadius: '50px', fontWeight: 'bold' as const, textDecoration: 'none', fontSize: 'clamp(16px, 3vw, 18px)', border: 'none', cursor: 'pointer', fontFamily: '"Inter", sans-serif', margin: '20px 0', textAlign: 'center' as const };
  const is = { padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#fff', color: '#000', width: '100%', marginBottom: '15px' };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      
      <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
        <h1 style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '2px', fontWeight: 600 }}>NEHUEN FIT</h1>
      </nav>

      <section style={{ padding: '100px 20px', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <img src="/IMG-20251216-WA0001.jpg" alt="Logo" style={{ width: '130px', borderRadius: '50%', border: '4px solid #16a34a', marginBottom: '20px' }} />
        <h2 style={{ ...ts, fontSize: 'clamp(28px, 7vw, 48px)', maxWidth: '850px', margin: '0 auto 20px' }}>Entrenamientos simples, efectivos y adaptados a vos</h2>
        <p style={{ ...ms, maxWidth: '650px', margin: '0 auto 30px' }}>Completa el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.</p>
        <a href="#contacto" style={bs}>QUIERO MI RUTINA</a>
        <p style={{ ...ss, marginTop: '10px' }}>⏱️ Te lleva menos de 1 minuto</p>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={ts}>Entrená con confianza</h2>
        <p style={ms}>Soy Nehuen, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel…</p>
        <p style={{ ...ss, fontStyle: 'italic', marginTop: '15px' }}>"No se trata de entrenar más, sino de entrenar mejor."</p>
        <a href="#contacto" style={bs}>QUIERO MI RUTINA</a>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#050505', textAlign: 'center' }}>
        <h2 style={ts}>rutinas y ejercicios en video</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #22c55e' }}>
            <video controls style={{ width: '100%', display: 'block' }}><source src="/video1.mp4" type="video/mp4" /></video>
          </div>
        </div>
        <div style={{ marginTop: '30px', ...ss }}>
          <p>🎧 Audio explicativo disponible para acompañar el video.</p>
          <p style={{ marginTop: '10px' }}>🎥 <b>Contenido en preparación:</b> Próximamente rutinas completas.</p>
        </div>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={ts}>Resultados reales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '30px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...ms, fontSize: '16px' }}>“Entreno de forma constante y sin lesionarme.”</p>
            <p style={ss}>— Martín</p>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#111', borderRadius: '15px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ color: '#22c55e', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ ...ms, fontSize: '16px' }}>“Las rutinas son claras y fáciles de seguir.”</p>
            <p style={ss}>— Laura</p>
          </div>
        </div>
      </section>

            <section id="contacto" style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '25px', border: '2px solid #16a34a' }}>
          <h2 style={ts}>Armemos tu rutina</h2>
          <form action="https://formspree.io/f/mpwvvveb" method="POST">
            <input name="nombre" placeholder="Nombre Completo" required style={is} />
            <input name="contacto" placeholder="WhatsApp o Email" required style={is} />
            <select name="objetivo" style={is}>
              <option>Ganar masa muscular</option>
              <option>Bajar de peso</option>
              <option>Salud / Movilidad</option>
            </select>
            <textarea name="lesion" placeholder="¿Tenés alguna lesión o dolor?" style={{ ...is, minHeight: '100px' }}></textarea>
            <button type="submit" style={{ ...bs, width: '100%' }}>ENVIAR MIS DATOS</button>
          </form>
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #111' }}>
        <p style={{ color: '#6b7280', fontSize: '13px' }}>© 2025 Nehuen Fit · Todos los derechos reservados</p>
      </footer>

      <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 100 }}>
        <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px', textDecoration: 'none' }}>📞</a>
        <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '25px', textDecoration: 'none' }}>📸</a>
      </div>
    </div>
  );
}

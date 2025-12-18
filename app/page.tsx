
"use client";
import React, { useState } from 'react';

// --- ESTILOS REUTILIZABLES ---
const sectionTitleStyle = {
    color: '#e5e7eb',
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    marginBottom: '25px',
    fontSize: 'clamp(15px, 5vw, 32px)', // Mobile 15-16px, Desktop 28-32px
};

// --- COMPONENTE MARCA SUPERIOR ---
const BrandHeader = () => (
    <div style={{ padding: '20px 0', textAlign: 'center', width: '100%', position: 'absolute', top: '0' }}>
        <h1 style={{ 
            color: '#9ca3af', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px', 
            margin: '0', 
            fontSize: 'clamp(18px, 4vw, 22px)',
            fontFamily: 'sans-serif'
        }}>
            Nehuen Fit
        </h1>
    </div>
);

// --- COMPONENTE FORMULARIO (FICHA TÉCNICA) ---
const RequestForm = () => {
    const inputS = { 
        width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', 
        border: '1px solid #444', backgroundColor: '#fff', color: '#000', fontSize: '16px' 
    };
    const labelS = { display: 'block', textAlign: 'left' as const, color: '#e5e7eb', marginTop: '15px', fontWeight: 'bold', fontSize: '14px' };
    const radioContainerS = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' };
    const radioOptionS = { display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e7eb', fontSize: '14px', cursor: 'pointer' };

    return (
        <div id="contacto" style={{ maxWidth: '600px', margin: '60px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.9)', borderRadius: '20px', border: '2px solid #16a34a' }}>
            <h2 style={sectionTitleStyle}>Armemos tu rutina</h2>
            <p style={{ color: '#e5e7eb', marginBottom: '30px', fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: '1.5' }}>
                Completa estos datos y voy a prepararte una rutina adaptada a tu objetivo y disponibilidad
            </p>

            <form action="https://formspree.io/f/mpwvvveb" method="POST">
                <input type="text" name="Nombre" placeholder="Nombre Completo" required style={inputS} />
                <input type="number" name="Edad" placeholder="Edad" required style={inputS} />

                <label style={labelS}>Objetivo:</label>
                <div style={radioContainerS}>
                    {["Ganar fuerza", "Bajar de peso", "Mejorar condición física", "Mantenerme activo/a"].map(opt => (
                        <label key={opt} style={radioOptionS}><input type="radio" name="Objetivo" value={opt} required /> {opt}</label>
                    ))}
                </div>

                <label style={labelS}>Nivel de entrenamiento:</label>
                <div style={radioContainerS}>
                    {["Principiante", "Intermedio", "Avanzado"].map(opt => (
                        <label key={opt} style={radioOptionS}><input type="radio" name="Nivel" value={opt} required /> {opt}</label>
                    ))}
                </div>

                <label style={labelS}>¿Cuántos días por semana podés entrenar?</label>
                <div style={{ ...radioContainerS, gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {["2", "3", "4", "5"].map(opt => (
                        <label key={opt} style={radioOptionS}><input type="radio" name="Dias_Semana" value={opt} required /> {opt}</label>
                    ))}
                </div>

                <label style={labelS}>¿Tenés alguna lesión o molestia?</label>
                <textarea name="Lesiones" placeholder="Cuéntame aquí..." style={{ ...inputS, minHeight: '80px' }} />

                <input type="text" name="Contacto" placeholder="Email o WhatsApp" required style={inputS} />

                <button type="submit" style={{ 
                    width: '100%', padding: '18px', backgroundColor: '#16a34a', color: 'white', 
                    fontWeight: 'bold', borderRadius: '10px', cursor: 'pointer', marginTop: '25px', border: 'none', fontSize: '16px' 
                }}>
                    ENVIAR MIS DATOS
                </button>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '15px', textAlign: 'center' }}>
                    Respuesta en menos de 24hs
                </p>
            </form>
        </div>
    );
};

// --- OTROS COMPONENTES ---
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const linkS = { color: 'white', textDecoration: 'none', fontSize: '1.2em', padding: '15px 0', borderBottom: '1px solid #333' };
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', right: '20px', top: '20px', zIndex: 1001, backgroundColor: '#16a34a', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.5em' }}>{isOpen ? '✕' : '☰'}</div>
            {isOpen && (
                <div style={{ position: 'fixed', right: 0, top: 0, height: '100vh', width: '250px', backgroundColor: 'black', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '80px 20px' }}>
                    <a href="#presentacion" onClick={() => setIsOpen(false)} style={linkS}>🏠 Inicio</a>
                    <a href="#videos" onClick={() => setIsOpen(false)} style={linkS}>🎬 Videos</a>
                    <a href="#resenas" onClick={() => setIsOpen(false)} style={linkS}>⭐ Reseñas</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} style={linkS}>📋 Ficha Técnica</a>
                </div>
            )}
        </>
    );
};

export default function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth', fontFamily: 'sans-serif', color: 'white' }}>
            <SideNav />
            <BrandHeader />

            <div id="presentacion" style={{ paddingTop: '120px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={150} style={{ borderRadius: '50%', border: '4px solid #16a34a', marginBottom: '30px' }} />
                
                <h2 style={{ 
                    color: '#22c55e', fontWeight: 700, lineHeight: '1.2', maxWidth: '850px', margin: '0 auto 20px auto',
                    fontSize: 'clamp(28px, 8vw, 48px)' 
                }}>
                    Entrenamientos simples, efectivos y adaptados a vos
                </h2>

                <p style={{ 
                    color: '#e5e7eb', maxWidth: '650px', margin: '0 auto 35px auto', fontWeight: 400,
                    fontSize: 'clamp(16px, 4vw, 20px)'
                }}>
                    Completa el formulario y armamos tu rutina según tú objetivo, nivel y disponibilidad
                </p>

                <a href="#contacto" style={{ 
                    display: 'inline-block', padding: '18px 40px', backgroundColor: '#16a34a', color: '#ffffff', 
                    textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)',
                    fontSize: 'clamp(15px, 3vw, 18px)'
                }}>
                    QUIERO MI RUTINA
                </a>

                <p style={{ color: '#9ca3af', marginTop: '15px', fontSize: 'clamp(14px, 3vw, 15px)' }}>
                    ⏱️ Te lleva menos de 1 minuto
                </p>
            </div>

            <div id="videos" style={{ maxWidth: '800px', margin: '60px auto', padding: '20px' }}>
                <h2 style={sectionTitleStyle}>🎬 Galería de Entrenamiento</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #22c55e' }}><source src="/video1.mp4" type="video/mp4" /></video>
                    <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #22c55e' }}><source src="/video2.mp4" type="video/mp4" /></video>
                </div>
            </div>

            <RequestForm />

            {/* Redes Flotantes */}
            <div style={{ position: 'fixed', bottom: '30px', right: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1001 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.5em' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.5em' }}>📸</a>
            </div>
        </div>
    );
}

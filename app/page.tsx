"use client";
import React, { useState } from 'react';

// --- ESTILOS REUTILIZABLES (Títulos de Sección) ---
const sectionTitleStyle = {
    color: '#e5e7eb',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    marginBottom: '30px',
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
            fontSize: 'clamp(16px, 4vw, 22px)',
            fontFamily: 'sans-serif'
        }}>
            Nehuen Fit
        </h1>
    </div>
);

// --- SECCIONES DE CONTENIDO ---
const NutritionTipsSection = () => (
    <div id="nutricion" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: 'white', borderRadius: '15px', color: 'black', textAlign: 'left', border: '3px solid #22c55e' }}>
        <h2 style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '15px' }}>🥑 Consejos de Nutrición</h2>
        <ul style={{ fontSize: '1.1em', lineHeight: '1.6em' }}>
            <li><strong>Proteína:</strong> Esencial para reparar tus músculos.</li>
            <li><strong>Agua:</strong> Bebe al menos 3 litros diarios.</li>
            <li><strong>Comida Real:</strong> Menos procesados, más frutas y verduras.</li>
        </ul>
    </div>
);

const FitnessTipsSection = () => (
    <div id="consejos-fitness" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: 'white', borderRadius: '15px', color: 'black', textAlign: 'left', border: '3px solid #007bff' }}>
        <h2 style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '15px' }}>💡 Consejos Fitness</h2>
        <ul style={{ fontSize: '1.1em', lineHeight: '1.6em' }}>
            <li><strong>Técnica:</strong> Un movimiento bien hecho es mejor que mucho peso.</li>
            <li><strong>Descanso:</strong> Duerme 7-8 horas para que el músculo crezca.</li>
        </ul>
    </div>
);

const VideoGallery = () => (
    <div id="videos" style={{ maxWidth: '800px', margin: '60px auto', padding: '20px' }}>
        <h2 style={sectionTitleStyle}>🎬 Galería de Entrenamiento</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #22c55e' }}><source src="/video1.mp4" type="video/mp4" /></video>
            <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #22c55e' }}><source src="/video2.mp4" type="video/mp4" /></video>
        </div>
    </div>
);

const ReviewsSection = () => (
    <div id="resenas" style={{ maxWidth: '600px', margin: '60px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '15px', border: '1px solid #e5e7eb' }}>
        <h2 style={sectionTitleStyle}>⭐ Deja tu Calificación</h2>
        <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ textAlign: 'left' }}>
            <input name="Nombre" placeholder="Tu Nombre" required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', color: 'black' }} />
            <select name="Estrellas" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', color: 'black' }}>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
            </select>
            <textarea name="Comentario" placeholder="¿Qué te pareció?" required style={{ width: '100%', padding: '12px', borderRadius: '8px', color: 'black', minHeight: '80px' }} />
            <button type="submit" style={{ width: '100%', padding: '15px', marginTop: '10px', backgroundColor: '#16a34a', color: 'white', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>PUBLICAR RESEÑA</button>
        </form>
    </div>
);

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
                    <a href="#nutricion" onClick={() => setIsOpen(false)} style={linkS}>🥑 Nutrición</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} style={linkS}>📋 Ficha Técnica</a>
                </div>
            )}
        </>
    );
};

const RequestForm = () => (
    <div id="contacto" style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.9)', borderRadius: '20px', border: '2px solid #16a34a' }}>
        <h2 style={sectionTitleStyle}>📋 Ficha Técnica</h2>
        <form action="https://formspree.io/f/mpwvvveb" method="POST">
            <input type="text" name="Nombre" placeholder="Nombre Completo" required style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', color: 'black' }} />
            <input type="tel" name="WhatsApp" placeholder="WhatsApp" required style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', color: 'black' }} />
            <textarea name="Objetivos" placeholder="Objetivos..." required style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', color: 'black', minHeight: '80px' }} />
            <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#16a34a', color: 'white', fontWeight: 'bold', borderRadius: '10px', cursor: 'pointer', marginTop: '10px' }}>ENVIAR AL PROFE</button>
        </form>
    </div>
);

export default function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth', fontFamily: 'sans-serif' }}>
            <SideNav />
            <BrandHeader />

            <audio autoPlay loop>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" type="audio/mpeg" />
            </audio>

            <div id="presentacion" style={{ paddingTop: '120px', paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={150} style={{ borderRadius: '50%', border: '4px solid #16a34a', marginBottom: '30px' }} />
                
                {/* Título Principal */}
                <h2 style={{ 
                    color: '#22c55e', 
                    fontWeight: 700, 
                    fontSize: 'clamp(28px, 8vw, 48px)', 
                    lineHeight: '1.3', 
                    maxWidth: '800px', 
                    margin: '0 auto 20px auto' 
                }}>
                    Entrenamientos simples, efectivos y adaptados a vos
                </h2>

                {/* Subtítulo */}
                <p style={{ 
                    color: '#e5e7eb', 
                    fontSize: 'clamp(16px, 4vw, 20px)', 
                    maxWidth: '600px', 
                    margin: '0 auto 30px auto',
                    fontWeight: 400
                }}>
                    Completa el formulario y armamos tu rutina según tú objetivo, nivel y disponibilidad
                </p>

                {/* Botón Principal */}
                <a href="#contacto" style={{ 
                    display: 'inline-block', 
                    padding: '18px 40px', 
                    backgroundColor: '#16a34a', 
                    color: '#ffffff', 
                    textDecoration: 'none', 
                    borderRadius: '50px', 
                    fontWeight: 'bold',
                    fontSize: 'clamp(15px, 3vw, 18px)',
                    boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)'
                }}>
                    QUIERO MI RUTINA
                </a>

                {/* Texto Chico debajo del botón */}
                <p style={{ color: '#9ca3af', fontSize: 'clamp(14px, 3vw, 15px)', marginTop: '15px' }}>
                    ⏱️ Te lleva menos de 1 minuto
                </p>
            </div>

            <VideoGallery />
            <ReviewsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <RequestForm />

            {/* Redes Flotantes */}
            <div style={{ position: 'fixed', bottom: '30px', right: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1001 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.5em', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.5em', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>📸</a>
            </div>
        </div>
    );
}


"use client";
import React, { useState } from 'react';

// --- 1. COMPONENTES DE APOYO ---
const NutritionTipsSection = () => (
    <div id="nutricion" style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '15px', color: 'white', backdropFilter: 'blur(3px)', textAlign: 'left', border: '1px solid rgba(255,255,255,0.2)' }}>
        <h2 style={{ borderBottom: '2px solid #25D366', paddingBottom: '10px' }}>🥑 Nutrición</h2>
        <p>• Prioriza alimentos reales. Proteína para recuperar y agua (3L/día).</p>
    </div>
);

const FitnessTipsSection = () => (
    <div id="consejos-fitness" style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', color: 'white', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>💡 Consejos Fitness</h2>
        <p>• Técnica sobre peso. Movilidad previa y descanso (7-9hs).</p>
    </div>
);

const VideoGallery = () => (
    <div id="videos" style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '2em' }}>🎬 Galería de Entrenamiento</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #007bff' }}>
                <source src="/video1.mp4" type="video/mp4" />
            </video>
            <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #007bff' }}>
                <source src="/video2.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
);

const ReviewsSection = () => (
    <div id="resenas" style={{ maxWidth: '600px', margin: '60px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '20px' }}>⭐ Deja tu Calificación</h2>
        <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ textAlign: 'left' }}>
            <input name="Nombre" placeholder="Tu Nombre" required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', color: 'black' }} />
            <select name="Estrellas" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', color: 'black' }}>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
            </select>
            <textarea name="Comentario" placeholder="¿Qué te pareció?" required style={{ width: '100%', padding: '12px', borderRadius: '8px', color: 'black' }} />
            <button type="submit" style={{ width: '100%', padding: '12px', marginTop: '10px', backgroundColor: '#FFD700', fontWeight: 'bold', borderRadius: '8px', color: 'black' }}>Publicar</button>
        </form>
    </div>
);

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', right: '15px', top: '15px', zIndex: 101, backgroundColor: '#007bff', color: 'white', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>{isOpen ? 'X' : '☰'}</div>
            <div style={{ position: 'fixed', right: '15px', top: '15px', backgroundColor: 'rgba(0, 0, 0, 0.98)', padding: '60px 20px 20px 20px', borderRadius: '10px', zIndex: 100, display: isOpen ? 'flex' : 'none', flexDirection: 'column', gap: '15px', border: '1px solid rgba(255,255,255,0.1)', minWidth: '200px', textAlign: 'left' }}>
                <a href="#presentacion" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>💪 Inicio</a>
                <a href="#videos" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>🎬 Videos</a>
                <a href="#resenas" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>⭐ Reseñas</a>
                <a href="#contacto" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>✉️ Contacto</a>
            </div>
        </>
    );
};

const RequestForm = () => {
    const s = { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', backgroundColor: 'white', color: 'black' };
    return (
        <div id="contacto" style={{ maxWidth: '500px', margin: '40px auto', padding: '25px', backgroundColor: 'rgba(0, 0, 0, 0.85)', borderRadius: '15px', border: '1px solid #007bff' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>📋 Ficha de Alumno</h2>
            <form action="https://formspree.io/f/mpwvvveb" method="POST">
                <input type="text" name="Nombre" placeholder="Nombre" required style={s} />
                <input type="tel" name="WhatsApp" placeholder="WhatsApp" required style={s} />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" name="Edad" placeholder="Edad" style={s} />
                    <input type="text" name="Peso" placeholder="Peso" style={s} />
                    <input type="text" name="Altura" placeholder="Altura" style={s} />
                </div>
                <textarea name="Objetivos" placeholder="Objetivos..." style={{...s, minHeight: '60px'}} />
                <textarea name="Salud" placeholder="Lesiones..." style={{...s, minHeight: '60px'}} />
                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>Enviar al Profe</button>
            </form>
        </div>
    );
};

// --- 2. COMPONENTE PRINCIPAL (HOME) ---
export default function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth' }}>
            <SideNav />
            
            <audio controls autoPlay loop style={{ position: 'fixed', bottom: '15px', left: '15px', zIndex: 1000, width: '150px', height: '30px', opacity: 0.6 }}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>

            <div id="presentacion" style={{ paddingTop: '100px', marginBottom: '40px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={160} style={{ borderRadius: '50%', border: '4px solid #007bff' }} />
                <h1 style={{ color: 'white', fontSize: '3.5em', marginTop: '20px', textShadow: '2px 2px 4px black', fontWeight: 'bold' }}>Nehuen Fit</h1>
                <p style={{ color: '#007bff', fontSize: '1.3em', fontWeight: 'bold' }}>PROFESOR DE EDUCACIÓN FÍSICA | PERSONAL TRAINER</p>
                
                <a href="#contacto" style={{ display: 'inline-block', marginTop: '30px', padding: '15px 30px', backgroundColor: '#FFD700', color: 'black', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1em' }}>
                    🔥 QUIERO MI RUTINA PERSONALIZADA
                </a>
            </div>

            <VideoGallery />
            <ReviewsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <RequestForm />

            <div style={{ position: 'fixed', bottom: '60px', right: '20px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1000 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', padding: '10px', borderRadius: '50%', textDecoration: 'none' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)', padding: '10px', borderRadius: '50%', textDecoration: 'none' }}>📸</a>
            </div>
        </div>
    );
}


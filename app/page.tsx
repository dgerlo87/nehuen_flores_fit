"use client";
import React, { useState } from 'react';

// --- 1. CONSEJOS DE NUTRICIÓN ---
const NutritionTipsSection = () => (
    <div id="nutricion" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: 'white', borderRadius: '15px', color: 'black', textAlign: 'left' as 'left', border: '3px solid #25D366' }}>
        <h2 style={{ color: '#25D366', fontWeight: 'bold' }}>🥑 Consejos de Nutrición</h2>
        <ul style={{ fontSize: '1.1em', lineHeight: '1.6em' }}>
            <li><strong>Proteína primero:</strong> Esencial para reparar tus músculos tras el entrenamiento.</li>
            <li><strong>Hidratación:</strong> Bebe al menos 3 litros de agua diarios.</li>
            <li><strong>Comida Real:</strong> Menos procesados, más frutas, verduras y granos integrales.</li>
            <li><strong>Consistencia:</strong> No busques dietas milagro, busca hábitos sostenibles.</li>
        </ul>
    </div>
);

// --- 2. CONSEJOS FITNESS ---
const FitnessTipsSection = () => (
    <div id="consejos-fitness" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: 'white', borderRadius: '15px', color: 'black', textAlign: 'left' as 'left', border: '3px solid #007bff' }}>
        <h2 style={{ color: '#007bff', fontWeight: 'bold' }}>💡 Consejos Fitness</h2>
        <ul style={{ fontSize: '1.1em', lineHeight: '1.6em' }}>
            <li><strong>Técnica mejor que Peso:</strong> Un movimiento bien hecho evita lesiones.</li>
            <li><strong>Descanso:</strong> Duerme entre 7 y 8 horas. El músculo crece cuando descansas.</li>
            <li><strong>Calentamiento:</strong> Nunca saltes la movilidad previa para preparar tus articulaciones.</li>
            <li><strong>Sobrecarga Progresiva:</strong> Intenta mejorar un poco cada semana.</li>
        </ul>
    </div>
);

const VideoGallery = () => (
    <div id="videos" style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '2em', textShadow: '2px 2px 4px black' }}>🎬 Galería de Entrenamiento</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #007bff' }}><source src="/video1.mp4" type="video/mp4" /></video>
            <video controls style={{ width: '100%', borderRadius: '10px', border: '2px solid #007bff' }}><source src="/video2.mp4" type="video/mp4" /></video>
        </div>
    </div>
);

const ReviewsSection = () => (
    <div id="resenas" style={{ maxWidth: '600px', margin: '60px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.9)', borderRadius: '15px', color: 'white', border: '2px solid #FFD700' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#FFD700' }}>⭐ Deja tu Calificación</h2>
        <form action="https://formspree.io/f/mpwvvveb" method="POST" style={{ textAlign: 'left' as 'left' }}>
            <input name="Nombre" placeholder="Tu Nombre" required style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', color: 'black', backgroundColor: 'white' }} />
            <select name="Estrellas" style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', color: 'black', backgroundColor: 'white' }}>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
            </select>
            <textarea name="Comentario" placeholder="¿Qué te pareció?" required style={{ width: '100%', padding: '12px', borderRadius: '8px', color: 'black', backgroundColor: 'white', minHeight: '80px' }} />
            <button type="submit" style={{ width: '100%', padding: '15px', marginTop: '10px', backgroundColor: '#FFD700', color: 'black', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>PUBLICAR RESEÑA</button>
        </form>
    </div>
);

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const linkS = { color: 'white', textDecoration: 'none', fontSize: '1.2em', padding: '10px 0', borderBottom: '1px solid #333' };
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', right: '20px', top: '20px', zIndex: 1001, backgroundColor: '#007bff', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.5em' }}>{isOpen ? '✕' : '☰'}</div>
            {isOpen && (
                <div style={{ position: 'fixed', right: 0, top: 0, height: '100vh', width: '250px', backgroundColor: 'black', zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '80px 20px' }}>
                    <a href="#presentacion" onClick={() => setIsOpen(false)} style={linkS}>🏠 Inicio</a>
                    <a href="#videos" onClick={() => setIsOpen(false)} style={linkS}>🎬 Videos</a>
                    <a href="#resenas" onClick={() => setIsOpen(false)} style={linkS}>⭐ Reseñas</a>
                    <a href="#nutricion" onClick={() => setIsOpen(false)} style={linkS}>🥑 Nutrición</a>
                    <a href="#consejos-fitness" onClick={() => setIsOpen(false)} style={linkS}>💡 Consejos</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} style={linkS}>✉️ Contacto</a>
                </div>
            )}
        </>
    );
};

const RequestForm = () => {
    const iS = { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', border: '2px solid #007bff', backgroundColor: 'white', color: 'black', fontSize: '16px' };
    return (
        <div id="contacto" style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0.9)', borderRadius: '20px', border: '2px solid #007bff' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>📋 Ficha Técnica</h2>
            <form action="https://formspree.io/f/mpwvvveb" method="POST">
                <input type="text" name="Nombre" placeholder="Nombre Completo" required style={iS} />
                <input type="tel" name="WhatsApp" placeholder="WhatsApp" required style={iS} />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" name="Edad" placeholder="Edad" style={iS} />
                    <input type="text" name="Peso" placeholder="Peso" style={iS} />
                    <input type="text" name="Altura" placeholder="Altura" style={iS} />
                </div>
                <textarea name="Objetivos" placeholder="Objetivos..." required style={{ ...iS, minHeight: '80px' }} />
                <textarea name="Salud" placeholder="¿Lesiones?" style={{ ...iS, minHeight: '80px' }} />
                <button type="submit" style={{ width: '100%', padding: '16px', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', borderRadius: '10px', cursor: 'pointer', marginTop: '10px' }}>ENVIAR AL PROFE</button>
            </form>
        </div>
    );
};

export default function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth' }}>
            <SideNav />
            
            <audio controls autoPlay loop style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1001, width: '200px' }}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" type="audio/mpeg" />
            </audio>

            <div id="presentacion" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={180} style={{ borderRadius: '50%', border: '5px solid #007bff' }} />
                <h1 style={{ color: 'white', fontSize: '3.5em', marginTop: '20px', textShadow: '2px 2px 4px black' }}>Nehuen Fit</h1>
                <p style={{ color: '#007bff', fontSize: '1.5em', fontWeight: 'bold' }}>PERSONAL TRAINER</p>
                <a href="#contacto" style={{ display: 'inline-block', marginTop: '30px', padding: '18px 40px', backgroundColor: '#FFD700', color: 'black', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold' }}>🔥 QUIERO MI RUTINA</a>
            </div>

            <VideoGallery />
            <ReviewsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <RequestForm />

            <div style={{ position: 'fixed', bottom: '80px', right: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1001 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>📸</a>
            </div>
        </div>
    );
}


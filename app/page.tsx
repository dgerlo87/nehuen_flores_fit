"use client";

import React, { useState } from 'react';

// --- 🥑 SECCIÓN DE NUTRICIÓN ---
const NutritionTipsSection = () => (
    <div id="nutricion" style={{ 
        maxWidth: '500px', margin: '40px auto', padding: '30px', 
        backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '15px', 
        color: 'white', backdropFilter: 'blur(3px)', textAlign: 'left',
        border: '1px solid rgba(255,255,255,0.2)'
    }}>
        <h2 style={{ borderBottom: '2px solid #25D366', paddingBottom: '10px' }}>🥑 Nutrición</h2>
        <p>• Control de porciones: Llena la mitad de tu plato con vegetales.</p>
        <p>• Proteína en cada comida: Esencial para la saciedad y el músculo.</p>
        <p>• Grasas saludables: Palta, nueces y aceite de oliva.</p>
        <p>• Evita azúcares añadidos y procesados.</p>
        <p>• Fibra: Consume granos integrales para mejor digestión.</p>
    </div>
);

// --- 💡 SECCIÓN DE FITNESS ---
const FitnessTipsSection = () => (
    <div id="consejos-fitness" style={{ 
        maxWidth: '500px', margin: '40px auto', padding: '30px', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', 
        color: 'white', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' 
    }}>
        <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>💡 Consejos Fitness</h2>
        <p>• Prioriza el sueño (7-9 horas).</p>
        <p>• Mantente hidratado antes y después del entrenamiento.</p>
        <p>• La consistencia siempre supera a la intensidad esporádica.</p>
    </div>
);

// --- ⭐ SECCIÓN DE RESEÑAS (ACTIVA) ---
const ReviewsSection = () => {
    const [reviews, setReviews] = useState([
        { name: "Carlos M.", rating: 5, comment: "¡Excelente entrenador! Muy profesional." },
        { name: "Lucía G.", rating: 4, comment: "La rutina es muy completa, me encanta." }
    ]);
    const [newName, setNewName] = useState("");
    const [newRating, setNewRating] = useState(5);
    const [newComment, setNewComment] = useState("");

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (newName && newComment) {
            setReviews([{ name: newName, rating: newRating, comment: newComment }, ...reviews]);
            setNewName(""); setNewComment(""); setNewRating(5);
        }
    };

    return (
        <div id="resenas" style={{ 
            maxWidth: '600px', margin: '60px auto', padding: '30px', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px', 
            color: 'white', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)' 
        }}>
            <h2 style={{ fontSize: '1.8em', marginBottom: '20px' }}>⭐ Reseñas de Alumnos</h2>
            <form onSubmit={handleSubmitReview} style={{ textAlign: 'left', marginBottom: '30px' }}>
                <input type="text" placeholder="Tu Nombre" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: 'none', color: '#333' }} />
                <div style={{ marginBottom: '10px' }}>
                    <label>Calificación: </label>
                    {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} onClick={() => setNewRating(s)} style={{ cursor: 'pointer', fontSize: '1.5em', color: s <= newRating ? '#FFD700' : '#ccc' }}>★</span>
                    ))}
                </div>
                <textarea placeholder="Tu opinión..." value={newComment} onChange={(e) => setNewComment(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', minHeight: '60px', color: '#333' }} />
                <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#FFD700', color: '#333', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Publicar Reseña</button>
            </form>
            <div style={{ textAlign: 'left' }}>
                {reviews.map((r, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
                        <div style={{ color: '#FFD700' }}>{"★".repeat(r.rating)}</div>
                        <strong>{r.name}</strong>
                        <p style={{ margin: '5px 0 0', fontSize: '0.9em' }}>"{r.comment}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 🧭 NAVEGACIÓN LATERAL ---
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "Quién Soy", href: "#presentacion", emoji: "💪" },
        { label: "Reseñas", href: "#resenas", emoji: "📝" },
        { label: "Nutrición", href: "#nutricion", emoji: "🥑" },
        { label: "Contacto", href: "#contacto", emoji: "✉️" },
    ];

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', right: '15px', top: '15px', zIndex: 101, backgroundColor: '#007bff', color: 'white', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                {isOpen ? 'X' : '☰'}
            </div>
            <div style={{
                position: 'fixed', right: '15px', top: '15px', backgroundColor: 'rgba(0, 0, 0, 0.95)', padding: '60px 20px 20px 20px',
                borderRadius: '10px', zIndex: 100, display: isOpen ? 'flex' : 'none', flexDirection: 'column', gap: '15px',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                {links.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1em', textAlign: 'left' }}>
                        {link.emoji} {link.label}
                    </a>
                ))}
            </div>
        </>
    );
};

// --- 📋 FORMULARIO DE DATOS ---
const RequestForm = () => {
    const style = { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', border: 'none', color: '#333' };
    return (
        <div id="contacto" style={{ maxWidth: '450px', margin: '40px auto', padding: '25px', backgroundColor: 'rgba(0, 0, 0, 0.75)', borderRadius: '15px', border: '1px solid #007bff' }}>
            <h2 style={{ color: 'white', marginBottom: '15px' }}>Solicitud de Planificación</h2>
            <form action="https://formspree.io/f/2893391712229522962" method="POST">
                <input type="text" name="Nombre" placeholder="Nombre Completo" required style={style} />
                <input type="email" name="Email" placeholder="Correo Electrónico" required style={style} />
                <input type="tel" name="Telefono" placeholder="Número de WhatsApp" required style={style} />
                <textarea name="Objetivo" placeholder="¿Cuál es tu objetivo?" required style={{ ...style, minHeight: '60px' }} />
                <textarea name="Patologias" placeholder="¿Lesiones o patologías?" required style={{ ...style, minHeight: '60px' }} />
                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>Enviar Datos</button>
            </form>
        </div>
    );
};

// --- 🏠 COMPONENTE PRINCIPAL ---
function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth' }}>
            <SideNav />
            
            <audio controls loop style={{ position: 'fixed', bottom: '15px', left: '15px', zIndex: 1000, width: '150px', height: '30px', opacity: 0.7 }}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" type="audio/mpeg" />
            </audio>

            <div id="presentacion" style={{ paddingTop: '100px', marginBottom: '40px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={160} style={{ borderRadius: '50%', border: '4px solid #007bff' }} />
                <h1 style={{ color: 'white', fontSize: '2.5em', marginTop: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Nehuen Flores Fitness</h1>
                <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: '15px', color: '#333' }}>
                    <p>Entrenador personal enfocado en resultados reales y salud integral.</p>
                </div>
            </div>

            <ReviewsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <RequestForm />

            <div style={{ position: 'fixed', bottom: '60px', right: '20px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1000 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '20px' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '20px' }}>📸</a>
            </div>
        </div>
    );
}

export default Home;
            

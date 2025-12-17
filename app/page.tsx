"use client";

import React, { useState } from 'react';

// --- 🥑 COMPONENTE DE NUTRICIÓN ---
const NutritionTipsSection = () => {
    const tips = [
        "Control de porciones: Llena la mitad de tu plato con vegetales.",
        "Proteína en cada comida: Esencial para la saciedad y el músculo.",
        "Grasas saludables: Palta, nueces y aceite de oliva.",
        "Evita azúcares añadidos: Reduce refrescos y procesados.",
        "Fibra: Consume granos integrales para mejor digestión."
    ];

    return (
        <div id="nutricion" style={{
            maxWidth: '500px', margin: '40px auto', padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', textAlign: 'left',
            color: 'white', backdropFilter: 'blur(3px)', border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
            <h2 style={{ color: '#fff', fontSize: '1.8em', marginBottom: '20px', borderBottom: '2px solid #25D366', paddingBottom: '10px' }}>
                🥑 Nutrición
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
                {tips.map((tip, index) => <li key={index} style={{ marginBottom: '10px' }}>{tip}</li>)}
            </ul>
        </div>
    );
};

// --- 💡 COMPONENTE DE FITNESS ---
const FitnessTipsSection = () => (
    <div id="consejos-fitness" style={{ 
        maxWidth: '500px', margin: '40px auto', padding: '30px', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', 
        color: 'white', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' 
    }}>
        <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>💡 Consejos Fitness</h2>
        <p>• Prioriza el sueño (7-9 horas).</p>
        <p>• Mantente hidratado antes y después.</p>
        <p>• La consistencia supera a la intensidad esporádica.</p>
    </div>
);

// --- ⭐ COMPONENTE DE RESEÑAS CON ESTRELLAS ---
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
            maxWidth: '600px', margin: '40px auto', padding: '30px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px',
            color: 'white', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)'
        }}>
            <h2 style={{ fontSize: '1.8em', marginBottom: '20px' }}>⭐ Reseñas de Alumnos</h2>
            <form onSubmit={handleSubmitReview} style={{ marginBottom: '30px', textAlign: 'left' }}>
                <input type="text" placeholder="Tu Nombre" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: 'none', color: '#333' }} />
                <div style={{ marginBottom: '10px' }}>
                    <label>Calificación: </label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => setNewRating(star)} style={{ cursor: 'pointer', fontSize: '1.5em', color: star <= newRating ? '#FFD700' : '#ccc' }}>★</span>
                    ))}
                </div>
                <textarea placeholder="Tu opinión sobre el entrenamiento..." value={newComment} onChange={(e) => setNewComment(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', minHeight: '60px', color: '#333' }} />
                <button type="submit" style={{ width: '100%', backgroundColor: '#FFD700', color: '#333', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Publicar Reseña</button>
            </form>
            <div style={{ textAlign: 'left' }}>
                {reviews.map((r, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
                        <div style={{ color: '#FFD700' }}>{"★".repeat(r.rating)}</div>
                        <strong>{r.name}</strong>
                        <p style={{ margin: '5px 0 0', fontSize: '0.9em', fontStyle: 'italic' }}>"{r.comment}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TestimonialsSection = () => (
    <div id="testimonios" style={{ maxWidth: '800px', margin: '40px auto', color: 'white', padding: '20px' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '20px' }}>💪 Casos de Éxito</h2>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '15px' }}>
            <p style={{ fontSize: '1.1em', fontStyle: 'italic' }}>"En solo 8 semanas mi cambio fue total. ¡Gracias Nehuen!"</p>
            <p style={{ fontWeight: 'bold', color: '#007bff' }}>— Martina S.</p>
        </div>
    </div>
);

// --- 🧭 NAVEGACIÓN LATERAL PLEGABLE ---
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "Quién Soy", href: "#presentacion", emoji: "💪" },
        { label: "Éxitos", href: "#testimonios", emoji: "⭐" },
        { label: "Reseñas", href: "#resenas", emoji: "📝" },
        { label: "Fitness", href: "#consejos-fitness", emoji: "💡" },
        { label: "Nutrición", href: "#nutricion", emoji: "🥑" },
        { label: "Contacto", href: "#contacto", emoji: "✉️" },
    ];

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', right: '15px', top: '15px', zIndex: 101, backgroundColor: '#007bff', color: 'white', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                {isOpen ? 'X' : '☰'}
            </div>
            <div style={{
                position: 'fixed', right: '15px', top: '15px', backgroundColor: 'rgba(0, 0, 0, 0.95)', padding: '60px 20px 20px 20px',
                borderRadius: '10px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '15px',
                transition: 'all 0.3s ease', opacity: isOpen ? 1 : 0, 
                visibility: isOpen ? 'visible' as 'visible' : 'hidden' as 'hidden',
                pointerEvents: isOpen ? 'auto' as 'auto' : 'none' as 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}>
                {links.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '1em', textAlign: 'left', fontWeight: '500' }}>
                        {link.emoji} {link.label}
                    </a>
                ))}
            </div>
        </>
    );
};

const AboutSection = () => (
    <div id="presentacion" style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '15px', color: '#333', textAlign: 'left', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
        <h2 style={{ color: '#007bff' }}>💪 Sobre Mí</h2>
        <p>Soy <strong>Nehuen Flores</strong>, entrenador especializado en transformar vidas a través del ejercicio y la disciplina. Mi enfoque es 100% personalizado.</p>
    </div>
);

const RequestForm = () => (
    <div id="contacto" style={{ maxWidth: '400px', margin: '40px auto', padding: '25px', backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', border: '1px solid #007bff' }}>
        <h2 style={{ color: 'white', marginBottom: '15px' }}>¿Empezamos hoy?</h2>
        <form action="https://formspree.io/f/2893391712229522962" method="POST">
            <input type="text" name="Nombre" placeholder="Tu Nombre" required style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '5px', border: 'none' }} />
            <input type="email" name="Email" placeholder="Tu Email" required style={{ width: '100%', padding: '12px', margin: '8px 0', borderRadius: '5px', border: 'none' }} />
            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>Enviar Solicitud</button>
        </form>
    </div>
);

// --- COMPONENTE PRINCIPAL (HOME) ---
function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth' }}>
            
            <SideNav />
            
            {/* Reproductor de audio sutil */}
            <audio controls loop style={{ position: 'fixed', bottom: '15px', left: '15px', zIndex: 1000, width: '180px', height: '35px', opacity: 0.7 }}>
                <source src="/background_music.mp3" type="audio/mpeg" />
            </audio>

            <div style={{ paddingTop: '100px', marginBottom: '40px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={160} style={{ borderRadius: '50%', border: '4px solid #007bff', boxShadow: '0 0 20px rgba(0,123,255,0.5)' }} />
                <h1 style={{ color: 'white', fontSize: '2.5em', marginTop: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Nehuen Flores Fitness</h1>
            </div>

            <AboutSection />
            <TestimonialsSection />
            <ReviewsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <RequestForm />

            {/* Redes sociales a la derecha (fuera del camino del texto) */}
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1000 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>📸</a>
            </div>
        </div>
    );
}

// 🛑 ¡ESTA LÍNEA ES OBLIGATORIA PARA QUE FUNCIONE! 🛑
export default Home;

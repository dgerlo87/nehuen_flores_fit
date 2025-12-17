
"use client";

import React, { useState } from 'react';

// --- 🥑 SECCIÓN DE NUTRICIÓN ---
const NutritionTipsSection = () => (
    <div id="nutricion" style={{ 
        maxWidth: '500px', margin: '40px auto', padding: '30px', 
        backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '15px', 
        color: 'white', backdropFilter: 'blur(3px)', textAlign: 'left' as 'left',
        border: '1px solid rgba(255,255,255,0.2)'
    }}>
        <h2 style={{ borderBottom: '2px solid #25D366', paddingBottom: '10px' }}>🥑 Nutrición</h2>
        <p>• Prioriza alimentos reales sobre procesados.</p>
        <p>• Proteína: Fundamental para la recuperación muscular.</p>
        <p>• Hidratación: Bebe al menos 3 litros de agua al día.</p>
        <p>• No le temas a los carbohidratos, son tu combustible.</p>
    </div>
);

// --- 💡 SECCIÓN DE FITNESS (CONSEJOS COMPLETOS) ---
const FitnessTipsSection = () => (
    <div id="consejos-fitness" style={{ 
        maxWidth: '500px', margin: '40px auto', padding: '30px', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', 
        color: 'white', textAlign: 'left' as 'left', border: '1px solid rgba(255,255,255,0.1)' 
    }}>
        <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>💡 Consejos Fitness</h2>
        <p>• Calentamiento: Nunca entrenes pesado sin movilidad previa.</p>
        <p>• Técnica sobre Peso: Es mejor mover poco peso bien, que mucho mal.</p>
        <p>• Sobrecarga Progresiva: Intenta mejorar una repetición cada semana.</p>
        <p>• Descanso: El músculo crece cuando duermes, no cuando entrenas.</p>
        <p>• Escucha a tu cuerpo: Si hay dolor punzante, detente.</p>
        <p>• Constancia: 3 días por semana todo el año vencen a 6 días un mes.</p>
    </div>
);

// --- ⭐ SECCIÓN DE RESEÑAS ---
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px', 
            color: 'white', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)' 
        }}>
            <h2 style={{ fontSize: '1.8em', marginBottom: '20px' }}>⭐ Reseñas de Alumnos</h2>
            <form onSubmit={handleSubmitReview} style={{ textAlign: 'left' as 'left', marginBottom: '30px' }}>
                <input 
                    type="text" 
                    placeholder="Tu Nombre" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: 'none', backgroundColor: 'white', color: 'black' }} 
                />
                <div style={{ marginBottom: '10px' }}>
                    <label>Calificación: </label>
                    {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} onClick={() => setNewRating(s)} style={{ cursor: 'pointer', fontSize: '1.5em', color: s <= newRating ? '#FFD700' : '#ccc' }}>★</span>
                    ))}
                </div>
                <textarea 
                    placeholder="Tu opinión..." 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', minHeight: '60px', backgroundColor: 'white', color: 'black' }} 
                />
                <button type="submit" style={{ width: '100%', padding: '12px', marginTop: '10px', backgroundColor: '#FFD700', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Publicar Reseña</button>
            </form>
            <div style={{ textAlign: 'left' as 'left' }}>
                {reviews.map((r, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
                        <div style={{ color: '#FFD700' }}>{"★".repeat(r.rating)}</div>
                        <strong style={{ color: '#FFD700' }}>{r.name}</strong>
                        <p style={{ margin: '5px 0 0', fontSize: '0.9em' }}>"{r.comment}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 🧭 NAVEGACIÓN CON DESCRIPCIÓN ---
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { label: "Quién Soy", href: "#presentacion", emoji: "💪" },
        { label: "Reseñas", href: "#resenas", emoji: "📝" },
        { label: "Contacto", href: "#contacto", emoji: "✉️" },
    ];
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', right: '15px', top: '15px', zIndex: 101, backgroundColor: '#007bff', color: 'white', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>{isOpen ? 'X' : '☰'}</div>
            <div style={{ position: 'fixed', right: '15px', top: '15px', backgroundColor: 'rgba(0, 0, 0, 0.98)', padding: '60px 20px 20px 20px', borderRadius: '10px', zIndex: 100, display: isOpen ? 'flex' : 'none', flexDirection: 'column', gap: '15px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '250px' }}>
                <div style={{ color: 'white', fontSize: '0.85em', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '5px' }}>
                    <strong style={{ color: '#007bff' }}>Nehuen Flores</strong><br/>
                    Profesor de Educación Física y Personal Trainer especializado en entrenamiento funcional y salud.
                </div>
                {links.map((link) => (<a key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>{link.emoji} {link.label}</a>))}
            </div>
        </>
    );
};

// --- 📋 FORMULARIO DE FICHA TÉCNICA ---
const RequestForm = () => {
    const style = { width: '100%', padding: '12px', margin: '8px 0', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: 'white', color: 'black' };
    const labelStyle = { color: 'white', display: 'block', marginTop: '10px', fontWeight: 'bold', textAlign: 'left' as 'left', fontSize: '0.9em' };
    return (
        <div id="contacto" style={{ maxWidth: '500px', margin: '40px auto', padding: '25px', backgroundColor: 'rgba(0, 0, 0, 0.85)', borderRadius: '15px', border: '1px solid #007bff' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>📋 Ficha de Alumno</h2>
            <form action="https://formspree.io/f/2893391712229522962" method="POST">
                <input type="text" name="Nombre" placeholder="Nombre Completo" required style={style} />
                <input type="email" name="Email" placeholder="Correo Electrónico" required style={style} />
                <input type="tel" name="Telefono" placeholder="WhatsApp" required style={style} />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="number" name="Edad" placeholder="Edad" required style={style} />
                    <input type="text" name="Peso" placeholder="Peso" required style={style} />
                    <input type="text" name="Altura" placeholder="Altura" required style={style} />
                </div>
                <label style={labelStyle}>¿Primera vez entrenando?</label>
                <select name="Primera_Vez" style={style}>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>
                <textarea name="Objetivos" placeholder="Objetivos..." required style={{ ...style, minHeight: '60px' }} />
                <textarea name="Lesiones" placeholder="¿Tienes lesiones? (especificar)" required style={{ ...style, minHeight: '60px' }} />
                <textarea name="Salud" placeholder="Medicamentos, operaciones o enfermedades..." style={{ ...style, minHeight: '60px' }} />
                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px' }}>Enviar Ficha</button>
            </form>
        </div>
    );
};

// --- 🏠 COMPONENTE PRINCIPAL (NEHUEN FIT + ROCK) ---
function Home() {
    return (
        <div style={{ textAlign: 'center', minHeight: '100vh', backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', scrollBehavior: 'smooth' }}>
            <SideNav />
            
            {/* Música: Compilado Rock (Nirvana, AC/DC, etc.) */}
            <audio controls autoPlay loop style={{ position: 'fixed', bottom: '15px', left: '15px', zIndex: 1000, width: '150px', height: '30px', opacity: 0.7 }}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>

            <div id="presentacion" style={{ paddingTop: '100px', marginBottom: '40px' }}>
                <img src="/IMG-20251216-WA0001.jpg" alt="Logo" width={160} style={{ borderRadius: '50%', border: '4px solid #007bff' }} />
                <h1 style={{ color: 'white', fontSize: '3.5em', marginTop: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', fontWeight: 'bold' }}>Nehuen Fit</h1>
                <p style={{ color: '#007bff', fontSize: '1.3em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Profesor de Educación Física | Personal Trainer</p>
            </div>

            <ReviewsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <RequestForm />

            <div style={{ position: 'fixed', bottom: '60px', right: '20px', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1000 }}>
                <a href="https://wa.me/5491172145711" target="_blank" style={{ backgroundColor: '#25D366', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>📞</a>
                <a href="https://www.instagram.com/Fitnes_nehuen" target="_blank" style={{ background: 'linear-gradient(45deg, #f09433, #bc1888)', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>📸</a>
            </div>
        </div>
    );
}

export default Home;

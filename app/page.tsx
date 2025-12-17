// app/page.tsx

"use client"; 

import React, { useState } from 'react'; 

// --- 🥑 COMPONENTE DE CONSEJOS DE ALIMENTACIÓN ---
const NutritionTipsSection = () => {
    const tips = [
        "Control de porciones: No necesitas contar calorías siempre, enfócate en llenar la mitad de tu plato con vegetales.",
        "Proteína en cada comida: Esencial para la saciedad y la reparación/construcción muscular (ej. huevo, pollo, legumbres).",
        "Grasas saludables: Incluye fuentes de Omega-3 (palta, nueces, aceite de oliva) para la salud cerebral y hormonal.",
        "Evita azúcares añadidos: Reduce los refrescos, jugos envasados y postres procesados; son calorías vacías.",
        "Fibra: Consume granos integrales, frutas y verduras para mejorar la digestión y mantener niveles de energía estables."
    ];

    const containerStyle = {
        maxWidth: '500px', 
        margin: '40px auto', 
        padding: '30px', 
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '15px', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        textAlign: 'left' as 'left', 
        color: 'white', 
        backdropFilter: 'blur(3px)', 
        border: '1px solid rgba(255, 255, 255, 0.3)'
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '20px',
        lineHeight: '1.6',
    };

    return (
        <div id="nutricion" style={containerStyle}>
            <h2 style={{ color: '#fff', fontSize: '1.8em', marginBottom: '20px', borderBottom: '2px solid #25D366', paddingBottom: '10px' }}>
                🥑 Fundamentos de Nutrición
            </h2>
            <ul style={listStyle}>
                {tips.map((tip, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        **{tip.split(':')[0]}**: {tip.split(':')[1] || tip}
                    </li>
                ))}
            </ul>
        </div>
    );
};
// ------------------------------

// --- 💡 COMPONENTE DE CONSEJOS FITNESS ---
const FitnessTipsSection = () => {
    const tips = [
        "Prioriza el sueño: Dormir 7-9 horas es vital para la recuperación muscular y hormonal.",
        "Mantente hidratado: Bebe agua antes, durante y después de entrenar para optimizar el rendimiento.",
        "La nutrición es clave: No puedes superar una mala dieta solo con ejercicio. Enfócate en proteínas y vegetales.",
        "Escucha a tu cuerpo: Un día de descanso es tan importante como un día de entrenamiento. Evita el sobreentrenamiento.",
        "La consistencia gana: Es mejor hacer 30 minutos de ejercicio todos los días que 3 horas una vez a la semana."
    ];

    const containerStyle = {
        maxWidth: '500px', 
        margin: '40px auto', 
        padding: '30px', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        borderRadius: '15px', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        textAlign: 'left' as 'left',
        color: 'white', 
        backdropFilter: 'blur(3px)', 
        border: '1px solid rgba(255, 255, 255, 0.1)'
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '20px',
        lineHeight: '1.6',
    };

    return (
        <div id="consejos-fitness" style={containerStyle}>
            <h2 style={{ color: '#fff', fontSize: '1.8em', marginBottom: '20px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
                💡 Consejos Rápidos para el Éxito
            </h2>
            <ul style={listStyle}>
                {tips.map((tip, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        **{tip.split(':')[0]}**: {tip.split(':')[1] || tip}
                    </li>
                ))}
            </ul>
        </div>
    );
};
// ------------------------------


// --- 🌟 COMPONENTE DE TESTIMONIOS ---
const TestimonialsSection = () => {
    // ⚠️ REEMPLAZAR ESTOS TESTIMONIOS FICTICIOS POR LOS REALES DE NEHUEN
    const testimonials = [
        { 
            quote: "En solo 8 semanas, perdí 5 kg y mi energía se disparó. La rutina de Nehuen es adaptable y nunca aburrida. ¡Lo recomiendo 100%!", 
            name: "— Martina S." 
        },
        { 
            quote: "Nunca pensé que un entrenamiento en casa sería tan efectivo. Gané músculo en los brazos y espalda. Nehuen me dio la motivación que necesitaba.", 
            name: "— Javier P." 
        },
        { 
            quote: "Su plan de nutrición y ejercicio cambió completamente mi estilo de vida. La atención personalizada marca la diferencia.", 
            name: "— Sofía R." 
        },
    ];

    const containerStyle = {
        maxWidth: '900px', 
        margin: '40px auto', 
        padding: '30px', 
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        borderRadius: '15px', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        textAlign: 'center' as 'center',
        color: 'white', 
        backdropFilter: 'blur(3px)', 
        border: '1px solid rgba(255, 255, 255, 0.3)'
    };
    
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px',
    };

    const cardStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'left' as 'left',
    };

    const quoteStyle = {
        fontStyle: 'italic',
        fontSize: '1em',
        marginBottom: '10px',
    };

    const nameStyle = {
        fontWeight: 'bold' as 'bold',
        color: '#007bff',
        fontSize: '0.9em',
    };

    return (
        <div id="testimonios" style={containerStyle}>
            <h2 style={{ color: '#fff', fontSize: '1.8em', marginBottom: '30px', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
                ⭐ Historias de Éxito
            </h2>
            <div style={gridStyle}>
                {testimonials.map((t, index) => (
                    <div key={index} style={cardStyle}>
                        <p style={quoteStyle}>"{t.quote}"</p>
                        <p style={nameStyle}>{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
// ------------------------------

// --- 🎬 COMPONENTE DE SECCIÓN DE VIDEOS ---
const VideoSection = () => {
    // ⚠️ VIDEO DE EJEMPLO DE FITNESS EN YOUTUBE
    const videos = [
        { 
            title: "Rutina Rápida para Principiantes ✅ (¡Tu cuerpo lo agradecerá!)", 
            url: "http://www.youtube.com/watch?v=L-ZvEawu_EQ" 
        },
    ];

    const containerStyle = {
        maxWidth: '500px', 
        margin: '40px auto', 
        padding: '30px', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        borderRadius: '15px', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        textAlign: 'center' as 'center',
        color: 'white', 
        backdropFilter: 'blur(3px)', 
        border: '1px solid rgba(255, 255, 255, 0.1)'
    };
    
    const listStyle = {
        listStyleType: 'none',
        padding: 0,
    };

    const linkStyle = {
        display: 'block',
        padding: '12px',
        margin: '10px 0',
        backgroundColor: '#007bff', 
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold' as 'bold',
        transition: 'background-color 0.3s',
    };

    return (
        <div id="videos" style={containerStyle}>
            <h2 style={{ color: '#fff', fontSize: '1.8em', marginBottom: '20px' }}>
                📺 Video de Muestra (¡Pruébanos!)
            </h2>
            <p style={{ marginBottom: '25px', color: '#ccc' }}>
                Mira un ejemplo de la calidad de nuestras rutinas. Recuerda reemplazar este enlace con tu propio video cuando lo tengas listo.
            </p>
            <ul style={listStyle}>
                {videos.map((video, index) => (
                    <li key={index}>
                        <a 
                            href={video.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={linkStyle}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                        >
                            {video.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
// ------------------------------


// --- COMPONENTE DE PRESENTACIÓN (Acerca de Mí) ---
const AboutSection = () => {
    // Definimos el color de texto oscuro para mayor contraste
    const darkTextColor = '#333'; 
    const whiteTextColor = 'white';

    return (
        <div id="presentacion" style={{
            maxWidth: '500px', 
            margin: '40px auto', 
            padding: '30px', 
            // Fondo claro semi-transparente
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            borderRadius: '15px', 
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            textAlign: 'left',
            // Aplicamos el color de texto oscuro
            color: darkTextColor, 
            backdropFilter: 'blur(3px)', 
            border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h2 style={{ 
                // Mantenemos el blanco para el título (contrasta bien con el fondo blanco semi-transparente)
                color: whiteTextColor, 
                fontSize: '1.8em', 
                marginBottom: '15px',
                borderBottom: '2px solid #007bff', 
                paddingBottom: '10px'
            }}>
                💪 Conoce a Nehuen Flores
            </h2>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                ¡Hola! Soy **Nehuen Flores**, tu entrenador de fitness comprometido con ayudarte a alcanzar tu mejor versión. Con años de experiencia y una pasión inquebrantable por la transformación física, mi misión es simple: **hacer que el fitness funcione para ti**.
            </p>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
                Me especializo en crear rutinas **totalmente personalizadas** que se ajustan a tu estilo de vida, nivel y objetivos específicos, ya sea que busques ganar músculo, perder peso o mejorar tu rendimiento atlético.
            </p>
            <p style={{ fontWeight: 'bold', lineHeight: '1.6' }}>
                Mi compromiso es con tu **progreso real**. ¡Envíame tu solicitud y comencemos a construir la rutina que te llevará al éxito!
            </p>
        </div>
    );
};
// ------------------------------


// --- 📞 COMPONENTE DE LLAMADA A LA ACCIÓN (CTA) ---
const CallToActionSection = () => {
    const buttonStyle = { 
        display: 'inline-block', 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '15px 30px', 
        margin: '20px auto', 
        borderRadius: '10px', 
        cursor: 'pointer', 
        fontSize: '1.2em', 
        fontWeight: 'bold' as 'bold',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
    };

    return (
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <a 
                href="#contacto" 
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
                🔥 ¡Quiero mi Rutina Personalizada! 🔥
            </a>
        </div>
    );
};
// ------------------------------

// --- COMPONENTE DEL FORMULARIO ---
const RequestForm = () => {
    // Estilos internos
    const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box' as 'border-box', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', };
    const buttonStyle = { width: '100%', backgroundColor: '#007bff', color: 'white', padding: '14px 20px', margin: '10px 0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1em', fontWeight: 'bold' as 'bold', };

    return (
        <div id="contacto" style={{
            maxWidth: '400px', margin: '30px auto', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' 
        }}>
            <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '1.5em' }}>
                Solicita tu Rutina Personalizada
            </h2>
            
            {/* Formulario conectado a tu endpoint de Formspree */}
            <form action="https://formspree.io/f/2893391712229522962" method="POST">
                <input type="text" name="Nombre" placeholder="Tu Nombre Completo" required style={inputStyle} />
                <textarea name="Objetivo" placeholder="Describe tu objetivo (perder peso, ganar músculo, etc.)" required rows={4} style={{ ...inputStyle, resize: 'vertical' as 'vertical' }} />
                <input type="email" name="Email" placeholder="Correo Electrónico" required style={inputStyle} />
                <button type="submit" style={buttonStyle}>
                    Enviar Solicitud
                </button>
            </form>
        </div>
    );
};
// ------------------------------

// --- 🧭 COMPONENTE DE NAVEGACIÓN LATERAL FIJA PLEGABLE (CORREGIDO) ---
const SideNav = () => {
    // Estado para controlar si el menú está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: "Quién Soy", href: "#presentacion", emoji: "💪" },
        { label: "Éxitos", href: "#testimonios", emoji: "⭐" },
        { label: "Fitness", href: "#consejos-fitness", emoji: "💡" },
        { label: "Nutrición", href: "#nutricion", emoji: "🥑" },
        { label: "Videos", href: "#videos", emoji: "📺" },
        { label: "Contacto", href: "#contacto", emoji: "✉️" },
    ];

    // Estilo base del contenedor del menú (plegado o desplegado)
    const navStyle = {
        position: 'fixed' as 'fixed',
        right: '10px',
        top: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.8)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: '5px',
        maxWidth: '120px',
        textAlign: 'left' as 'left',
        // Transición para el efecto de despliegue
        transition: 'opacity 0.3s ease-in-out, visibility 0.3s',
        opacity: isOpen ? 1 : 0, 
        // --- CORRECCIÓN 1: TIPADO DE 'visibility' ---
        visibility: isOpen ? 'visible' as 'visible' : 'hidden' as 'hidden', 
        // --- CORRECCIÓN 2: TIPADO DE 'pointerEvents' ---
        pointerEvents: isOpen ? 'auto' as 'auto' : 'none' as 'none', 
    };

    // Estilo del botón (el icono ☰)
    const toggleButtonStyle = {
        position: 'fixed' as 'fixed',
        right: '10px',
        top: '10px',
        zIndex: 101, // Debe estar por encima del menú
        backgroundColor: isOpen ? '#007bff' : 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '1.2em',
        fontWeight: 'bold' as 'bold',
        lineHeight: '1',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9em',
        fontWeight: 'bold' as 'bold',
        padding: '8px',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
        textAlign: 'left' as 'left',
        whiteSpace: 'nowrap' as 'nowrap',
    };

    return (
        <>
            {/* Botón de Toggle (Visible siempre) */}
            <div style={toggleButtonStyle} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'X' : '☰'} 
            </div>

            {/* Contenedor del Menú (Aparece y desaparece) */}
            <div style={navStyle}>
                {links.map((link) => (
                    <a 
                        key={link.href} 
                        href={link.href} 
                        style={linkStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.8)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                    >
                        {link.emoji} {link.label}
                    </a>
                ))}
            </div>
        </>
    );
};
// ------------------------------

// --- COMPONENTE PRINCIPAL (HOME) - Solo la parte de los botones flotantes ha cambiado ---
function Home() { 
    // Configuración de Enlaces
    const whatsappNumber = '5491172145711'; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    const instagramLink = 'https://www.instagram.com/Fitnes_nehuen'; 
    
    return (
        <div style={{ 
            textAlign: 'center', 
            paddingTop: '30px', 
            paddingBottom: '50px', 
            minHeight: '100vh', 
            backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed',
            scrollBehavior: 'smooth',
            position: 'relative',
        }}>
            
            {/* COMPONENTE DE NAVEGACIÓN LATERAL FIJA PLEGABLE */}
            <SideNav />

            {/* LOGO Y TEXTO DE BIENVENIDA: Fluyen normalmente */}
            <div style={{
                maxWidth: '90%', 
                margin: '0 auto 40px auto', 
                paddingTop: '10px',
            }}>
                <img 
                    src="/IMG-20251216-WA0001.jpg" 
                    alt="Mi logo de fitness" 
                    width={180} 
                    style={{ 
                        marginBottom: '10px',
                        position: 'relative', 
                        zIndex: 10,
                        marginTop: '60px' // Deja espacio para el botón de menú plegable
                    }} 
                />
                
                <h1 style={{ color: 'white', fontSize: '2em', marginBottom: '10px' }}>
                    Bienvenido a mi página de fitness
                </h1>
                <p style={{ color: 'white', fontSize: '1.2em' }}>
                    ¡Vamos a crear contenido increíble!
                </p>
            </div>
            
            {/* SECCIONES DE CONTENIDO */}
            <AboutSection />
            <CallToActionSection />
            <TestimonialsSection />
            <FitnessTipsSection />
            <NutritionTipsSection />
            <VideoSection />
            <RequestForm />
            
            {/* CONTENEDOR FLOTANTE PARA BOTONES (WhatsApp + IG) */}
            <div style={{
                position: 'fixed', 
                bottom: '20px', // Separamos un poco más del borde inferior
                left: '20px', // Separamos un poco más del borde izquierdo
                right: 'auto', 
                zIndex: 1000,
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', // Reducimos el espacio entre ellos
            }}>
                
                {/* BOTÓN DE WHATSAPP (Ajustado el tamaño) */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block', backgroundColor: '#25D366', 
                    padding: '8px 10px', // Reducimos el padding
                    borderRadius: '50%', boxShadow: '0 3px 6px rgba(0, 0, 0, 0.4)', // Sombra más sutil
                    lineHeight: '1', 
                    fontSize: '20px', // Reducimos el tamaño de la fuente (el icono)
                }}>
                    📞 
                </a>

                {/* BOTÓN DE INSTAGRAM (Ajustado el tamaño) */}
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block',
                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    padding: '8px 10px', // Reducimos el padding
                    borderRadius: '50%', // Lo hacemos completamente redondo
                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.4)', // Sombra más sutil
                    lineHeight: '1', 
                    fontSize: '20px', // Reducimos el tamaño de la fuente (el icono)
                }}>
                    📸 
                </a>
            </div>
            
        </div>
    );
}

 export default Home; // 

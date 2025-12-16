// app/page.tsx

"use client"; 

// --- COMPONENTE DE PRESENTACIÓN (Acerca de Mí) ---
const AboutSection = () => {
    return (
        <div style={{ 
            maxWidth: '500px', 
            margin: '40px auto', 
            padding: '30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo blanco muy sutil y transparente
            borderRadius: '15px', 
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            textAlign: 'left',
            color: 'white', // Texto blanco
            backdropFilter: 'blur(3px)', // Efecto de desenfoque para mejorar la lectura
            border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h2 style={{ 
                color: '#fff', 
                fontSize: '1.8em', 
                marginBottom: '15px',
                borderBottom: '2px solid #007bff', // Línea de separación azul
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

// --- COMPONENTE DEL FORMULARIO (Mantenemos el endpoint de Formspree) ---
const RequestForm = () => {
    // Estilos internos
    const inputStyle = { width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ccc', borderRadius: '8px', boxSizing: 'border-box' as 'border-box', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', };
    const buttonStyle = { width: '100%', backgroundColor: '#007bff', color: 'white', padding: '14px 20px', margin: '10px 0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1em', fontWeight: 'bold' as 'bold', };

    return (
        <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
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

// --- COMPONENTE PRINCIPAL (HOME) ---
export default function Home() {
    // Configuración de Enlaces
    const whatsappNumber = '5491172145711'; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    const instagramLink = 'https://www.instagram.com/Fitnes_nehuen'; 
    
    return (
        <div style={{ 
            textAlign: 'center', 
            paddingTop: '10vh', 
            paddingBottom: '50px', 
            minHeight: '100vh', 
            backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed' 
        }}>
            
            {/* EL LOGO PRINCIPAL */}
            <img src="/IMG-20251216-WA0001.jpg" alt="Mi logo de fitness" width={200} style={{ marginBottom: '40px' }} />
            
            {/* TEXTO DE LA PÁGINA */}
            <h1 style={{ color: 'white', fontSize: '2em', marginBottom: '10px' }}>
                Bienvenido a mi página de fitness
            </h1>
            <p style={{ color: 'white', fontSize: '1.2em' }}>
                ¡Vamos a crear contenido increíble!
            </p>

            {/* ✅ NUEVA SECCIÓN: PRESENTACIÓN DE NEHUEN */}
            <AboutSection />

            {/* RENDERIZADO DEL FORMULARIO */}
            <RequestForm />
            
            {/* CONTENEDOR FLOTANTE PARA AMBOS BOTONES (WhatsApp + IG) */}
            <div style={{
                position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000,
                display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px', 
            }}>
                
                {/* BOTÓN DE WHATSAPP */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block', backgroundColor: '#25D366', padding: '12px 14px',
                    borderRadius: '50%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', lineHeight: '1', fontSize: '28px',
                }}>
                    📞 
                </a>

                {/* BOTÓN DE INSTAGRAM */}
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block',
                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                    padding: '12px 14px', borderRadius: '30%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', lineHeight: '1', fontSize: '28px',
                }}>
                    📸 
                </a>
            </div>
            
        </div>
    );
}


// app/page.tsx

"use client"; 

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
        <div style={containerStyle}>
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
    return (
        <div style={{ 
            maxWidth: '500px', 
            margin: '40px auto', 
            padding: '30px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '15px', 
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            textAlign: 'left',
            color: 'white', 
            backdropFilter: 'blur(3px)', 
            border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h2 style={{ 
                color: '#fff', 
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
            
            {/* Formulario conectado a tu endpoint de Formspree - ¡RECUERDA ARREGLAR EST


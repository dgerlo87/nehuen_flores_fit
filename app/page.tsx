
// app/page.tsx

"use client"; 

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
        <div style={containerStyle}>
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
        <div style={containerStyle}>
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
}; // <-- ¡LLAVE FINAL VERIFICADA!
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
        }, // <--- ¡Asegúrate que esta llave y coma estén aquí!
    ];

    const containerStyle = {
        // ... (resto de los estilos)
    };
    
    // ... (resto del componente)
};
// ------------------------------


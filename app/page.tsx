// app/page.tsx

"use client"; 

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
        border: '1px solid rgba(


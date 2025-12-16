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
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fondo ligeramente diferente al de fitness para separarlos visualmente
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


"use client";

import React, { useState } from 'react';

// --- 🥑 COMPONENTE DE CONSEJOS DE ALIMENTACIÓN ---
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

// --- ⭐ COMPONENTE DE RESEÑAS ---
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
                <input type="text" placeholder="Tu Nombre" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: 'none' }} />
                <div style={{ marginBottom: '10px' }}>
                    <label>Calificación: </label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => setNewRating(star)} style={{ cursor: 'pointer', fontSize: '1.5em', color: star <= newRating ? '#FFD700' : '#ccc' }}>★</span>
                    ))}
                </div>
                <textarea placeholder="Tu opinión..." value={newComment} onChange={(e) => setNewComment(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', minHeight: '60px' }} />
                <button type="submit" style={{ width: '100%', backgroundColor: '#FFD700', color: '#333', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Publicar</button>
            </form>
            <div style={{ textAlign: 'left' }}>
                {reviews.map((r, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}>
                        <div style={{ color: '#FFD700' }}>{"★".repeat(r.


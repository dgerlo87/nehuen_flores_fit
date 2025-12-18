"use client";
import React from 'react';

// --- CONFIGURACIÓN DE ESTILOS REUTILIZABLES ---
const titleSectionStyle = {
  fontFamily: '"Inter", sans-serif',
  color: '#22c55e',
  fontWeight: 600,
  textAlign: 'center' as const,
  fontSize: 'clamp(22px, 5vw, 32px)', // Mobile: 22-24px, Desktop: 28-32px
  marginBottom: '20px',
};

const textMainStyle = {
  fontFamily: '"Inter", sans-serif',
  color: '#e5e7eb',
  fontSize: 'clamp(15px, 3vw, 18px)', // Mobile: 15-16px, Desktop: 16-18px
  lineHeight: 1.6,
};

const textSecondaryStyle = {
  fontFamily: '"Inter", sans-serif',
  color: '#9ca3af',
  fontSize: 'clamp(14px, 2.5vw, 15px)',
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#16a34a',
  color: '#ffffff',
  padding: '18px 40px',
  borderRadius: '50px',
  fontWeight: 'bold' as const,
  textDecoration: 'none',
  fontSize: 'clamp(16px, 3vw, 18px)',
  border: 'none',
  cursor: 'pointer',
  fontFamily: '"Inter", sans-serif',
  transition: 'transform 0.2s',
};

// Componente de Botón Repetible
const ActionButton = () => (
  <div style={{ textAlign: 'center', margin: '30px 0' }}>
    <a href="#contacto" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      QUIERO MI RUTINA
    </a>
  </div>
);

export default function Home() {
  return (


// app/page.tsx

"use client"; // <--- ESTO SOLUCIONA EL ERROR

import React, { useState } from 'react';

// --- COMPONENTE DEL FORMULARIO ---
const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    contact: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí puedes enviar los datos a un servicio de formularios (Formspree, etc.)
    console.log('Datos del formulario enviados:', formData);
    alert(`¡Gracias por tu solicitud, ${formData.name}! Te contactaremos pronto.`);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    color: '#333',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#007bff', 
    color: 'white',
    padding: '14px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold' as 'bold',
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
      <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '1.5em' }}>
        Solicita tu Rutina Personalizada
      </h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Tu Nombre Completo" 
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="goal"
          placeholder="Describe tu objetivo (perder peso, ganar músculo, etc.)"
          value={formData.goal}
          onChange={handleChange}
          required
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' as 'vertical' }}
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Correo Electrónico o WhatsApp" 
          value={formData.contact}
          onChange={handleChange}
          required
          style={inputStyle}
        />
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
      <img
          src="/IMG-20251216-WA0001.jpg" 
          alt="Mi logo de fitness"
          width={200} 
          style={{ marginBottom: '40px' }} 
      />
      
      {/* TEXTO DE LA PÁGINA */}
      <h1 style={{ color: 'white', fontSize: '2em', marginBottom: '10px' }}>
        Bienvenido a mi página de fitness
      </h1>
      <p style={{ color: 'white', fontSize: '1.2em' }}>
        ¡Vamos a crear contenido increíble!
      </p>

      {/* RENDERIZADO DEL FORMULARIO */}
      <RequestForm />
      
      {/* CONTENEDOR FLOTANTE PARA AMBOS BOTONES (WhatsApp + IG) */}
      <div style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',       
          zIndex: 1000,
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end',
          gap: '15px', 
      }}>
          
          {/* BOTÓN DE WHATSAPP */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366', 
              padding: '12px 14px',
              borderRadius: '50%', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
              lineHeight: '1',
              fontSize: '28px',
            }}
          >
            📞 
          </a>

          {/* BOTÓN DE INSTAGRAM */}
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
              padding: '12px 14px',
              borderRadius: '30%', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
              lineHeight: '1',
              fontSize: '28px',
            }}
          >
            📸 
          </a>
      </div>
      
    </div>
  );
}


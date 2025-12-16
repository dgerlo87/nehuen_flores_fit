// app/page.tsx

export default function Home() {
  // Configuración de Enlaces
  const whatsappNumber = '5491172145711'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  // ¡IMPORTANTE! CAMBIA ESTO por el usuario real de Instagram.
  const instagramLink = 'https://www.instagram.com/[TU_USUARIO_INSTAGRAM]'; 
  
  return (
    <div style={{ 
        textAlign: 'center', 
        paddingTop: '10vh', 
        minHeight: '100vh', 
        // Imagen de Fondo
        backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
    }}>
      
      {/* EL LOGO PRINCIPAL (RUTA ACTUALIZADA) */}
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
          
          {/* BOTÓN DE WHATSAPP (Teléfono) */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366', // Verde de WhatsApp
              padding: '12px 14px',
              borderRadius: '50%', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
              lineHeight: '1',
              fontSize: '28px',
            }}
          >
            📞 
          </a>

          {/* BOTÓN DE INSTAGRAM (Cámara) */}
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              backgroundColor: '#E4405F', // Color de Instagram
              padding: '12px 14px',
              borderRadius: '50%', 
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


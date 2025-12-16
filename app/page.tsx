// app/page.tsx

export default function Home() {
  // Configuración de Enlaces
  const whatsappNumber = '5491172145711'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  // Enlace de Instagram al perfil Fitnes_nehuen
  const instagramLink = 'https://www.instagram.com/Fitnes_nehuen'; 
  
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
          
          {/* BOTÓN DE WHATSAPP (Icono: Teléfono) */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366', // Verde de WhatsApp
              padding: '12px 14px',
              borderRadius: '50%', // Circular
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
              lineHeight: '1',
              fontSize: '28px',
            }}
          >
            📞 
          </a>

          {/* BOTÓN DE INSTAGRAM (Icono: Cámara y Degradado) */}
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              // Degradado de colores de Instagram
              background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
              padding: '12px 14px',
              // Borde más cuadrado (para parecerse al logo)
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


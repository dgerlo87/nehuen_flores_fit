// app/page.tsx

export default function Home() {
  // Número de WhatsApp
  const whatsappNumber = '5491172145711'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div style={{ 
        textAlign: 'center', 
        paddingTop: '10vh', // Damos más espacio arriba para bajar el contenido
        minHeight: '100vh', 
        backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
    }}>
      
      {/* EL LOGO (Aumentamos el tamaño) */}
      <img
          src="/IMG-20251216-WA0001.jpg"
          alt="Mi logo de fitness"
          width={200} // Aumentamos el tamaño del logo
          style={{ marginBottom: '40px' }} // Espacio debajo del logo
      />
      
      {/* TEXTO DE LA PÁGINA */}
      <h1 style={{ color: 'white', fontSize: '2em', marginBottom: '10px' }}>
        Bienvenido a mi página de fitness
      </h1>
      <p style={{ color: 'white', fontSize: '1.2em' }}>
        ¡Vamos a crear contenido increíble!
      </p>
      
      {/* ********************************** */}
      {/* BOTÓN FLOTANTE DE WHATSAPP (SOLO EMOJI) */}
      {/* ********************************** */}
      <div style={{
          position: 'fixed',
          bottom: '25px',      
          right: '25px',       
          zIndex: 1000,
      }}>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366', // Color de WhatsApp
              padding: '12px 14px', // Tamaño para que parezca un círculo
              textDecoration: 'none',
              borderRadius: '50%', // Botón circular
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', 
              lineHeight: '1',
              fontSize: '28px', // Icono grande
            }}
          >
            {/* Usamos el EMOJI de teléfono que funciona siempre */}
            📞 
          </a>
      </div>
      
    </div>
  );
}


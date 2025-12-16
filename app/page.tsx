// app/page.tsx

export default function Home() {
  // Número de WhatsApp: Reemplaza 54911xxxxxxxx con el número real (sin + ni espacios)
  const whatsappNumber = '5491172145711'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div style={{ 
        textAlign: 'center', 
        paddingTop: '50px', 
        minHeight: '100vh', 
        // Fondo: IMG-20251215-WA0059.jpg
        backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
    }}>
      
      {/* EL LOGO: IMG-20251215-WA0048.jpg */}
      <img
          src="/IMG-20251215-WA0048.jpg"
          alt="Mi logo de fitness"
          width={150}
          style={{ marginBottom: '20px' }}
      />

      {/* BOTÓN DE WHATSAPP */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: 'inline-block',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '18px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
        }}
      >
        📲 Enviar Mensaje por WhatsApp
      </a>
      
      {/* TEXTO DE LA PÁGINA */}
      <h1 style={{ color: 'white', marginTop: '30px' }}>Bienvenido a mi página de fitness</h1>
      <p style={{ color: 'white' }}>¡Vamos a crear contenido increíble!</p>
      
    </div>
  );
}




  

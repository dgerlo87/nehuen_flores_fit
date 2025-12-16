// app/page.tsx

export default function Home() {
  // Número de WhatsApp
  const whatsappNumber = '5491172145711'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <div style={{ 
        textAlign: 'center', 
        paddingTop: '50px', 
        minHeight: '100vh', 
        backgroundImage: 'url("/IMG-20251215-WA0059.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
    }}>
      
      {/* CONTENIDO PRINCIPAL (Logo y Texto) */}
      <img
          src="/IMG-20251215-WA0048.jpg"
          alt="Mi logo de fitness"
          width={150}
          style={{ marginBottom: '20px' }}
      />
      <h1 style={{ color: 'white', marginTop: '30px' }}>Bienvenido a mi página de fitness</h1>
      <p style={{ color: 'white' }}>¡Vamos a crear contenido increíble!</p>
      
      {/* ********************************** */}
      {/* CONTENEDOR FLOTANTE DEL BOTÓN */}
      {/* ********************************** */}
      <div style={{
          position: 'fixed',   // Fija la posición en la ventana
          bottom: '20px',      // 20px desde la parte inferior
          right: '20px',       // 20px desde la derecha
          zIndex: 1000,        // Asegura que esté por encima de otros elementos
      }}>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366', // Color de WhatsApp
              padding: '10px', 
              textDecoration: 'none',
              borderRadius: '50%', // Botón circular
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Sombra más pronunciada
              lineHeight: '1',
              transition: 'transform 0.3s ease', // Animación de mouse over
            }}
          >
            <img
                src="/Logotipo.png" 
                alt="Logo de WhatsApp"
                width={30} 
                height={30}
                style={{ display: 'block' }}
            />
          </a>
      </div>
      
    </div>
  );
}





  

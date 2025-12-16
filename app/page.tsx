// app/page.tsx

export default function Home() {
  return (
    <div style={{ 
        textAlign: 'center', 
        paddingTop: '50px', // Usamos padding en lugar de marginTop para que el fondo cubra todo
        minHeight: '100vh', 
        
        // **********************************
        // PROPIEDADES PARA LA IMAGEN DE FONDO
        // **********************************
        backgroundImage: "url('IMG-20251215-WA0059.jpg')", // ¡CAMBIA ESTO por el nombre de tu archivo!
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el espacio
        backgroundPosition: 'center', // Centra la imagen
        backgroundAttachment: 'fixed' // Fija la imagen mientras el contenido se desplaza
    }}>
      
      {/* EL LOGO */}
      <img
          src="/IMG-20251215-WA0048.jpg"
          alt="Mi logo de fitness"
          width={150}
      />

      {/* TEXTO DE LA PÁGINA */}
      {/* Usamos color blanco para que se lea sobre la imagen oscura */}
      <h1 style={{ color: 'white' }}>Bienvenido a mi página de fitness</h1>
      <p style={{ color: 'white' }}>¡Vamos a crear contenido increíble!</p>
      
    </div>
  );
}



  

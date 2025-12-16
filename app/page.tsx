// app/page.tsx

export default function Home() {
  return (
    <div style={{ 
        textAlign: 'center', 
        marginTop: '50px', 
        minHeight: '100vh', 
        backgroundColor: '#7FFF00' // Aquí puedes cambiar el color
    }}>
      
      {/* EL LOGO */}
      <img
          src="/IMG_20251215-WA0048.JPG"
          alt="Mi logo de fitness"
          width={150}
      />

      {/* TEXTO DE LA PÁGINA */}
      <h1 style={{ color: 'black' }}>Bienvenido a mi página de fitness</h1>
      <p style={{ color: 'black' }}>¡Vamos a crear contenido increíble!</p>
      
    </div>
  );
}


  

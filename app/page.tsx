

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      {/* 1. EL LOGO CORREGIDO */}
      {/* Usamos <img> simple y la ruta correcta desde la carpeta public */}
      <img
          src="IMG-20251215-WA0048.jpg" // <-- La ruta de tu nuevo logo
          alt="Mi logo de fitness"
          width={150}
      />

      {/* 2. TEXTO DE LA PÁGINA */}
      <h1>Bienvenido a mi página de fitness</h1>
      <p>¡Vamos a crear contenido increíble!</p>
      
    </div>
  );
}

  

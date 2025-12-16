export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Aquí ponemos el logo */}
      // Código que debes usar AHORA:
<Image
    src={"/IMG_20251215-WA0048.JPG"}
    alt="Mi logo"
    width={150}
    height={150} // Los componentes Image de Next.js requieren 'height'
/>

      
      {/* Texto de la página */}
      <h1>Bienvenido a mi página de fitness</h1>
      <p>¡Vamos a crear contenido increíble!</p>
    </div>
    );
}
  

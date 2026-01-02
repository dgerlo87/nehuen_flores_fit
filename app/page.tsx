 "use client";
import { useState } from 'react';

export default function Page() {
  const [paso, setPaso] = useState(1);
  const siguientePaso = () => setPaso(paso + 1);
  const anteriorPaso = () => setPaso(paso - 1);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      
<header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
  <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
    
    {/* LA MARCA COMPLETA (LOGO + TEXTO JUNTOS) */}
    <div className="flex items-center gap-3">
      <img 
        src="/IMG-20251216-WA0001.jpg" 
        alt="Logo Nehuen Fit" 
        className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-[#22c55e]"
      />
      <div className="flex flex-col justify-center">
        <span className="text-[#22c55e] font-black text-lg md:text-xl leading-none italic tracking-tighter">
          NEHUEN<span className="text-white">FIT</span>
        </span>
        <span className="text-gray-500 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] leading-tight">
          Personal Trainer
        </span>
      </div>
    </div>

    {/* LOS LINKS (Beneficios, Mitos, etc.) */}
    <div className="hidden md:flex items-center gap-6">
      <a href="#beneficios" className="text-sm font-medium text-gray-400 hover:text-[#22c55e] transition-colors">Beneficios</a>
      <a href="#testimonios" className="text-sm font-medium text-gray-400 hover:text-[#22c55e] transition-colors">Testimonios</a>
      <a href="#mitos" className="text-sm font-medium text-gray-400 hover:text-[#22c55e] transition-colors">La Posta</a>
      <a href="#faq" className="text-sm font-medium text-gray-400 hover:text-[#22c55e] transition-colors">FAQ</a>
    </div>

    {/* BOTÓN DE ACCIÓN */}
    <a href="#formulario" className="bg-[#22c55e] text-black px-4 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-[#1da850] transition-transform active:scale-95 shadow-lg shadow-green-500/20">
      EMPEZAR AHORA
    </a>
  </nav>
</header>
       
       
        {/* HEADER / HERO SECTION */}
{/* HEADER CON IMAGEN DE FONDO */}

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 text-center border-b border-[#334155] overflow-hidden">
  
  {/* IMAGEN DE FONDO */}
  <div className="absolute inset-0 z-0 opacity-30" style={{
      backgroundImage: "url('/IMG-20251215-WA0059.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  />

<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
     
    {/* TÍTULO PRINCIPAL */}
    <h1 className="text-[#22c55e] text-[28px] md:text-[48px] leading-tight font-bold mb-6 max-w-3xl">
      Entrenamientos simples, efectivos y adaptados a vos
    </h1>

    {/* SUBTÍTULO */}
    <p className="text-[#e5e7eb] text-[18px] md:text-[20px] mb-10 max-w-2xl leading-relaxed">
      Completá el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.
    </p>

    {/* BOTÓN PRINCIPAL Y TEXTO CHICO */}
    <div className="flex flex-col items-center gap-4">
            <a 
              href="#formulario" 
              className="bg-[#16a34a] text-[#ffffff] px-10 py-4 rounded-xl font-bold text-[16px] md:text-[18px] hover:bg-[#22c55e] transition-all shadow-xl uppercase tracking-wide"
            >
              QUIERO MI RUTINA
            </a>
            
            <p className="text-[#9ca3af] text-[14px] md:text-[15px] font-medium flex items-center gap-2">
              ⏱️ Te lleva menos de 1 minuto
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: ¿QUÉ VAS A ENCONTRAR? */}
      <section id="beneficios" className="py-16 px-6 bg-[#0f172a]/50 scroll-mt-20">
  <div className="max-w-4xl mx-auto text-center">
    
    {/* TÍTULO */}
    <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold mb-10 uppercase italic">
      ¿Qué vas a encontrar en Nehuen Fit?
    </h2>

    {/* LISTA DE BENEFICIOS */}
    <div className="max-w-2xl mx-auto text-left">
      <ul className="space-y-6">
        {[
          "Rutinas personalizadas según tu objetivo y nivel",
          "Ejercicios en video explicados paso a paso",
          "Organización semanal para entrenar sin improvisar",
          "Acompañamiento real para que no abandones"
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            {/* Icono de Check */}
            <span className="text-[#22c55e] text-xl mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </span>
            
            {/* Texto */}
            <p className="text-[#e5e7eb] text-[16px] md:text-[18px] leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>

        {/* SECCIÓN: VIDEOS / RUTINAS */}
<section className="py-16 px-6 max-w-4xl mx-auto text-center">
  
  {/* TÍTULO */}
  <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold mb-4 uppercase italic">
    Rutinas y ejercicios en video
  </h2>

  {/* TEXTO DESCRIPTIVO */}
  <p className="text-[#e5e7eb] text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
    Vas a encontrar ejercicios explicados paso a paso para entrenar con buena técnica y de forma segura.
  </p>

  {/* CONTENEDOR DE VIDEO (ESTADO: EN PREPARACIÓN) */}
  <div className="bg-[#1e293b]/40 border-2 border-dashed border-[#334155] rounded-3xl p-12 flex flex-col items-center gap-4 backdrop-blur-sm relative overflow-hidden">
    
    {/* ICONO Y TEXTO DE ESPERA */}
    <div className="flex flex-col items-center gap-3">
      <span className="text-4xl animate-pulse">🎥</span>
      <h3 className="text-white font-bold text-lg uppercase tracking-wider">
        Contenido en preparación
      </h3>
      <p className="text-[#9ca3af] text-[14px] md:text-[15px] max-w-xs">
        Próximamente vas a poder acceder a rutinas completas en video.
      </p>
    </div>

    {/* DECORACIÓN DE FONDO (OPCIONAL) */}
    <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[150px] font-black italic">FIT</span>
    </div>
  </div>

  {/* ACLARACIONES PIE DE VIDEO */}
  <div className="mt-8 flex flex-col gap-2">
    <p className="text-[#9ca3af] text-[14px] md:text-[15px] flex items-center justify-center gap-2">
      <span className="text-lg">🎧</span> Audio explicativo disponible para acompañar el video.
    </p>
  </div>

</section>

        {/* SECCIÓN: SOBRE MÍ / CONFIANZA */}
<section className="py-20 px-6 bg-[#1e293b]/20 border-t border-[#334155]">
  <div className="max-w-3xl mx-auto text-center">
    
    {/* TÍTULO */}
    <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold mb-8 uppercase italic">
      Entrená con confianza
    </h2>

    {/* TEXTO PRINCIPAL */}
    <div className="space-y-6 mb-8 text-[#e5e7eb] text-[16px] md:text-[18px] leading-relaxed">
      <p>
        Soy <span className="text-white font-bold">Nehuen</span>, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel, sin presiones y con un plan claro.
      </p>
      <p>
        Trabajo con rutinas simples y efectivas para que puedas sostener el entrenamiento en el tiempo y ver resultados reales.
      </p>
    </div>

    {/* FRASE SECUNDARIA */}
    <p className="text-[#9ca3af] text-[14px] md:text-[15px] italic mb-10">
      "No se trata de entrenar más, sino de entrenar mejor."
    </p>

    {/* BOTÓN (LLAMADO A LA ACCIÓN REPETIDO) */}
    <div className="flex flex-col items-center">
      <a 
        href="#formulario" 
        className="bg-[#16a34a] text-[#ffffff] px-10 py-4 rounded-xl font-bold text-[16px] md:text-[18px] hover:bg-[#22c55e] transition-all shadow-xl uppercase tracking-wide"
      >
        QUIERO MI RUTINA
      </a>
    </div>

  </div>
</section>

        {/* SECCIÓN: FILOSOFÍA Y FUTURO (AGREGADO) */}
<section className="py-20 px-6 bg-black border-t border-[#334155]/20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold mb-10 uppercase italic">
      Mi enfoque: Disciplina sobre Motivación
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="bg-[#1e293b]/20 p-6 rounded-2xl border border-[#334155]/50">
        <h3 className="text-white font-bold mb-3">Entrenamiento Puro</h3>
        <p className="text-[#9ca3af] text-sm">Planes centrados en la técnica y la progresión constante, sin vueltas.</p>
      </div>
      <div className="bg-[#1e293b]/20 p-6 rounded-2xl border border-[#334155]/50">
        <h3 className="text-white font-bold mb-3">Hábitos Reales</h3>
        <p className="text-[#9ca3af] text-sm">Te ayudo a que el entrenamiento sea parte de tu vida, no una carga.</p>
      </div>
      <div className="bg-[#1e293b]/20 p-6 rounded-2xl border border-[#334155]/50">
        <h3 className="text-white font-bold mb-3">Evolución Continua</h3>
        <p className="text-[#9ca3af] text-sm">Proyecto en crecimiento para darte siempre las mejores herramientas.</p>
      </div>
    </div>

    {/* ACLARACIÓN SOBRE NUTRICIÓN */}
    <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 p-8 rounded-3xl inline-block max-w-2xl">
      <p className="text-[#e5e7eb] text-md md:text-lg italic">
        "Actualmente me encuentro profundizando mis estudios en <strong>Nutrición Deportiva</strong> para que pronto, además de tus rutinas, pueda ofrecerte un plan de alimentación integral que potencie tus resultados al máximo."
      </p>
    </div>
  </div>
</section>
        
{/* SECCIÓN: TESTIMONIOS */}
<section id="testimonios" className="py-20 px-6 bg-black scroll-mt-20">
  <div className="max-w-4xl mx-auto">
    
    {/* TÍTULO */}
    <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold mb-12 text-center uppercase italic">
      Resultados reales
    </h2>

    {/* GRILLA DE TESTIMONIOS */}
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* TESTIMONIO 1 */}
      <div className="bg-[#1e293b]/30 p-8 rounded-2xl border-l-4 border-[#22c55e] shadow-lg flex flex-col justify-between">
        <div>
          <p className="text-[#e5e7eb] text-[15px] md:text-[16px] italic leading-relaxed mb-4">
            “Entreno de forma constante y sin lesionarme. Nehuen adapta las rutinas a mi nivel y objetivos.”
          </p>
        </div>
        <p className="text-[#9ca3af] font-bold uppercase text-sm tracking-widest mt-4">
          — Martín
        </p>
      </div>

      {/* TESTIMONIO 2 */}
      <div className="bg-[#1e293b]/30 p-8 rounded-2xl border-l-4 border-[#22c55e] shadow-lg flex flex-col justify-between">
        <div>
          <p className="text-[#e5e7eb] text-[15px] md:text-[16px] italic leading-relaxed mb-4">
            “Volví a entrenar después de mucho tiempo. Las rutinas son claras y fáciles de seguir.”
          </p>
        </div>
        <p className="text-[#9ca3af] font-bold uppercase text-sm tracking-widest mt-4">
          — Laura
        </p>
      </div>

    </div>
  </div>
</section>

        {/* SECCIÓN: DEJAR COMENTARIO Y CALIFICACIÓN */}
        <section className="py-20 px-6 bg-black border-t border-[#334155]/30">
          <div className="max-w-2xl mx-auto">
            
            <div className="text-center mb-10">
              <h2 className="text-[#22c55e] text-[26px] md:text-[30px] font-bold uppercase italic">
                ¿Entrenaste conmigo?
              </h2>
              <p className="text-[#9ca3af] text-[15px] md:text-[16px] mt-2">
                Tu opinión me ayuda a seguir mejorando y motiva a otros a empezar.
              </p>
            </div>

            <div className="bg-[#1e293b]/20 p-8 rounded-3xl border border-[#334155] backdrop-blur-sm shadow-2xl">
              <form 
                action="https://formspree.io/f/mpwvvveb" 
                method="POST" 
                className="space-y-6"
              >
                {/* Calificación (Llega a tu mail como número) */}
                <div className="flex flex-col items-center gap-2">
                  <label className="text-xs uppercase tracking-widest text-[#9ca3af] font-bold">
                    Tu Calificación (1 al 5)
                  </label>
                  <input 
                    type="number" 
                    name="estrellas" 
                    min="1" 
                    max="5" 
                    defaultValue="5" 
                    className="w-20 bg-black border border-[#334155] p-2 rounded-xl text-center text-[#22c55e] font-bold outline-none focus:border-[#22c55e]"
                    required 
                  />
                </div>

                {/* Campo: Nombre */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#e5e7eb] ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="nombre"
                    placeholder="Ej: Carlos Gómez" 
                    className="w-full bg-black/50 border border-[#334155] p-4 rounded-xl text-white outline-none focus:border-[#22c55e] transition-all"
                    required
                  />
                </div>

                {/* Campo: Mensaje */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#e5e7eb] ml-1">Tu Experiencia</label>
                  <textarea 
                    name="mensaje"
                    rows={4} 
                    placeholder="Contanos qué te pareció el entrenamiento..." 
                    className="w-full bg-black/50 border border-[#334155] p-4 rounded-xl text-white outline-none focus:border-[#22c55e] resize-none"
                    required
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <button 
                  type="submit" 
                  className="w-full bg-[#16a34a] text-white py-4 rounded-xl font-bold uppercase hover:bg-[#22c55e] transition-all duration-300"
                >
                  Enviar mi opinión
                </button>
              </form>
            </div> {/* <-- Este cierra el div del formulario */}

            {/* Texto aclaratorio */}
            <p className="text-center text-[#6b7280] text-[12px] mt-6 italic">
              * Los comentarios serán revisados antes de ser publicados en la web.
            </p>
          </div> {/* <-- Este cierra el max-w-2xl */}
        </section>

{/* SECCIÓN: MITO VS REALIDAD */}
<section id="mitos" className="py-20 px-6 bg-black scroll-mt-20">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold uppercase italic mb-4">
        Mitos vs. Realidad
      </h2>
      <p className="text-gray-400">Cortemos con los chamuyos que no te dejan avanzar.</p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          mito: "Si entreno pesado me voy a poner como un patovica.",
          realidad: "Ni ahí. Entrenar fuerza te va a dar un cuerpo firme y atlético. Ganar un volumen gigante lleva años de dieta y suplementación extrema."
        },
        {
          mito: "Matarse a abdominales quema la grasa de la panza.",
          realidad: "Olvidate, no existe quemar grasa en un solo lugar. La clave es el déficit calórico y un entrenamiento que te haga mover todo el cuerpo."
        },
        {
          mito: "Tengo que vivir a lechuga y pollo para ver cambios.",
          realidad: "Esa es la forma más rápida de abandonar. La posta es comer de todo en las cantidades justas para que puedas mantenerlo en el tiempo."
        },
        {
          mito: "El cardio es lo único que sirve para bajar la panza.",
          realidad: "El cardio ayuda, pero los fierros son los que aceleran el metabolismo. Cuanto más músculo tenés, más grasa quemás incluso estando sentado."
        }
      ].map((item, index) => (
        <div key={index} className="bg-[#111827] p-6 rounded-2xl border border-[#334155]/30 hover:border-[#22c55e]/50 transition-all shadow-lg shadow-green-500/5">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <span className="text-red-500 font-bold uppercase text-[10px] tracking-widest bg-red-500/10 px-2 py-1 rounded">El chamuyo</span>
              <p className="text-white font-semibold mt-3 italic text-[17px]">"{item.mito}"</p>
            </div>
            <div className="mt-auto border-t border-[#334155]/30 pt-4">
              <span className="text-[#22c55e] font-bold uppercase text-[10px] tracking-widest bg-[#22c55e]/10 px-2 py-1 rounded">La posta</span>
              <p className="text-gray-400 mt-3 text-[15px] leading-relaxed">{item.realidad}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
       
{/* SECCIÓN: PREGUNTAS FRECUENTES (FAQ) */}
<section id="faq" className="py-20 px-6 bg-black border-t border-[#334155]/20 scroll-mt-20">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-bold mb-12 text-center uppercase italic">
      Preguntas Frecuentes
    </h2>

    <div className="space-y-6">
      {[
        {
          q: "¿Necesito experiencia previa para arrancar?",
          a: "Para nada. El plan se adapta a tu nivel actual, ya sea que estés empezando de cero o que ya lleves tiempo entrenando."
        },
        {
          q: "¿Puedo entrenar en casa o necesito ir a un gimnasio?",
          a: "Donde vos prefieras. Armo la rutina en base al equipamiento que tengas disponible, ya sea un gimnasio completo o solo un par de mancuernas en casa."
        },
        {
          q: "¿En cuánto tiempo recibo mi rutina?",
          a: "Una vez que completás el formulario y nos ponemos en contacto, recibís tu plan personalizado en un plazo de 24 a 48 horas hábiles."
        },
        {
          q: "¿Cómo es el seguimiento?",
          a: "Vamos a estar en contacto vía WhatsApp para resolver dudas, corregir técnica mediante videos y ajustar el plan según tu evolución."
        }
      ].map((faq, index) => (
        <div key={index} className="bg-[#1e293b]/20 p-6 rounded-2xl border border-[#334155]/50 hover:border-[#22c55e]/50 transition-colors">
          <h3 className="text-white font-bold mb-2 flex items-center gap-3">
            <span className="text-[#22c55e]">?</span> {faq.q}
          </h3>
          <p className="text-[#9ca3af] text-sm md:text-base leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
       
<section id="formulario" className="py-20 px-6 bg-[#0f172a]/30 scroll-mt-20">
  <div className="max-w-xl mx-auto bg-[#1e293b]/50 p-8 rounded-3xl border border-[#334155] shadow-2xl relative overflow-hidden">
    
    {/* Barra de Progreso */}
    <div className="w-full bg-[#334155] h-1.5 mb-8 rounded-full">
      <div 
        className="bg-[#22c55e] h-full transition-all duration-500" 
        style={{ width: `${(paso / 3) * 100}%` }}
      ></div>
    </div>

    <h2 className="text-[#22c55e] text-2xl font-bold mb-8 text-center uppercase italic">
      {paso === 1 && "Contanos sobre vos"}
      {paso === 2 && "Tu objetivo"}
      {paso === 3 && "Últimos detalles"}
    </h2>

   <form action="https://formspree.io/f/mpwvvveb" method="POST" className="bg-[#1e293b]/50 p-8 rounded-3xl border border-[#334155] backdrop-blur-sm shadow-2xl flex flex-col gap-5">
        
        {/* PASO 1: DATOS BÁSICOS */}
        {paso === 1 && (
          <div className="flex flex-col gap-5">
            <input type="text" name="nombre" placeholder="Nombre completo" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
            <div className="grid grid-cols-2 gap-4">
              <input type="number" name="edad" placeholder="Edad" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
              <input type="text" name="peso" placeholder="Peso (kg)" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
            </div>
            <button type="button" onClick={siguientePaso} className="bg-[#22c55e] py-4 rounded-xl font-bold uppercase hover:bg-[#16a34a] transition-all">Siguiente</button>
          </div>
        )}

        {/* PASO 2: OBJETIVOS */}
        {paso === 2 && (
          <div className="flex flex-col gap-5">
            <select name="objetivo" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white appearance-none" required>
              <option value="">¿Cuál es tu objetivo?</option>
              <option value="perder">Perder Grasa</option>
              <option value="ganar">Ganar Músculo</option>
              <option value="salud">Salud y Bienestar</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <button type="button" onClick={anteriorPaso} className="border border-[#334155] py-4 rounded-xl font-bold uppercase text-[#9ca3af]">Volver</button>
              <button type="button" onClick={siguientePaso} className="bg-[#22c55e] py-4 rounded-xl font-bold uppercase hover:bg-[#16a34a] transition-all">Siguiente</button>
            </div>
          </div>
        )}

        {/* PASO 3: CONTACTO */}
        {paso === 3 && (
          <div className="flex flex-col gap-5">
            <textarea name="lesion" placeholder="¿Tenés alguna lesión?" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white h-24 resize-none" />
            <input type="text" name="contacto" placeholder="WhatsApp o Email" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
            <div className="grid grid-cols-2 gap-4">
              <button type="button" onClick={anteriorPaso} className="border border-[#334155] py-4 rounded-xl font-bold uppercase text-[#9ca3af]">Volver</button>
              <button type="submit" className="bg-[#22c55e] py-4 rounded-xl font-bold uppercase text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95">¡Enviar solicitud!</button>
            </div>
          </div>
        )}
      </form>
    </div>
  </section>

      

                    {/* FOOTER */}
      <footer className="py-16 px-6 bg-[#0f172a] border-t border-[#334155] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[#22c55e] text-xl font-bold mb-4 uppercase italic">Empezá hoy</h2>
          <p className="text-[#9ca3af] text-sm mb-8">Completá el formulario y empezá a entrenar con una rutina pensada para vos.</p>
          
          <a href="#formulario" className="bg-[#16a34a] px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#22c55e] transition-all uppercase inline-block mb-12 text-white">
            QUIERO MI RUTINA
          </a>

          <div className="w-12 h-px bg-[#334155] mx-auto mb-8"></div>

          {/* REDES SOCIALES */}
          <div className="flex justify-center gap-6 mb-10">
            <a href="https://instagram.com/fitness_nehuen" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#22c55e] transition-all flex flex-col items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
            </a>
            <a href="https://wa.me/5491172145711" target="_blank" rel="noopener noreferrer" className="text-[#9ca3af] hover:text-[#22c55e] transition-all flex flex-col items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-[10px] uppercase tracking-widest font-bold">WhatsApp</span>
            </a>
          </div>

          <div className="mb-8">
            <img src="/IMG-20251216-WA0001.jpg" alt="Logo" className="h-12 mx-auto mb-4 opacity-90" />
            <p className="text-[#9ca3af] text-lg font-medium uppercase tracking-tight">Nehuen Fit</p>
            <p className="text-[#9ca3af] text-lg font-medium uppercase tracking-tight">Personal Trainer</p>
          </div>

          <p className="text-[#6b7280] text-xs">© Nehuen Fit · Todos los derechos reservados</p>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a 
        href="https://wa.me/5491172145711" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>

    </div>
  </div>
  );
}


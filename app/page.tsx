export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-full mx-auto">
        
        {/* HEADER / HERO SECTION */}
        {/* HEADER CON IMAGEN DE FONDO */}

<header className="relative py-20 md:py-28 px-6 text-center border-b border-[#334155] overflow-hidden">
  
  {/* IMAGEN DE FONDO */}
  <div 
    className="absolute inset-0 z-0 opacity-30" 
    style={{
      backgroundImage: "url('/IMG-20251215-WA0059.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  />

  {/* LOGO (Margen izquierdo superior) */}
  <div className="absolute top-6 left-6 z-20">
    <img 
      src="/IMG-20251216-WA0001.jpg" 
      alt="Logo Nehuen Fit" 
      className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" 
    />
  </div>

  {/* CONTENIDO PRINCIPAL */}
  <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
    
    {/* MARCA (Arriba) */}
    <div className="mb-4">
      <span className="block text-[#9ca3af] text-[18px] md:text-[22px] font-medium tracking-tight">
        Nehuen Fit
      </span>
      <span className="block text-[#9ca3af] text-[18px] md:text-[22px] font-medium">
        Personal Trainer
      </span>
    </div>

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
</header>

        {/* SECCIÓN: ¿QUÉ VAS A ENCONTRAR? */}
<section className="py-16 px-6 bg-[#0f172a]/50">
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
        
{/* SECCIÓN: TESTIMONIOS */}
<section className="py-20 px-6 bg-black">
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
        
              {/* SECCIÓN: FORMULARIO */}
      <section id="formulario" className="py-20 px-6 bg-[#0f172a] scroll-mt-10">
        <div className="max-w-xl mx-auto bg-[#1e293b]/50 p-8 rounded-3xl border border-[#334155] shadow-2xl">
          <h2 className="text-[#22c55e] text-2xl font-bold mb-8 text-center uppercase italic">
            Armemos tu plan
          </h2>
          <form action="https://formspree.io/f/tu-id" method="POST" className="flex flex-col gap-5">
            
            {/* NOMBRE Y EDAD */}
            <input type="text" name="nombre" placeholder="Nombre" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
            <input type="number" name="edad" placeholder="Edad" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
            
            {/* OBJETIVO */}
            <select name="objetivo" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required>
              <option value="">Seleccioná tu objetivo</option>
              <option value="Bajar de peso">Bajar de peso</option>
              <option value="Ganar fuerza">Ganar fuerza</option>
              <option value="Mejorar condición física">Mejorar condición física</option>
              <option value="Mantenerme activo/a">Mantenerme activo/a</option>
            </select>

            {/* NIVEL */}
            <select name="nivel" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required>
              <option value="">Nivel de entrenamiento</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>

            {/* DÍAS Y TIEMPO (En dos columnas) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[#9ca3af] text-xs ml-1 uppercase">Días por semana</label>
                <select name="dias" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none text-white focus:border-[#22c55e]" required>
                  <option value="2">2 días</option>
                  <option value="3">3 días</option>
                  <option value="4">4 días</option>
                  <option value="5">5 días</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#9ca3af] text-xs ml-1 uppercase">Tiempo por sesión</label>
                <select name="tiempo" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none text-white focus:border-[#22c55e]" required>
                  <option value="20-30 min">20–30 min</option>
                  <option value="30-45 min">30–45 min</option>
                  <option value="45-60 min">45–60 min</option>
                </select>
              </div>
            </div>

            {/* LESIONES */}
            <textarea name="lesion" placeholder="¿Tenés alguna lesión o molestia? (Opcional)" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white h-24 resize-none" />
            
            {/* CONTACTO */}
            <input type="text" name="contacto" placeholder="Email o WhatsApp" className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] outline-none focus:border-[#22c55e] text-white" required />
            
            <button type="submit" className="bg-[#16a34a] py-4 rounded-xl font-bold uppercase hover:bg-[#22c55e] transition-all text-white shadow-lg mt-2">
              Enviar y solicitar rutina
            </button>
          </form>
        </div>
      </section>

      

        {/* FOOTER / CIERRE DEFINITIVO */}
        <footer className="py-16 px-6 text-center border-t border-[#334155] bg-black">
          <div className="w-12 h-px bg-[#334155] mx-auto mb-8"></div>
          
          <div className="mb-8">
            <img
              src="/IMG-20251216-WA0001.jpg"
              className="h-12 mx-auto mb-4"
              alt="Nehuen Fit Logo"
            />
            <p className="text-[#9ca3af] text-[18px] font-medium uppercase tracking-wider">
              Nehuen Fit
            </p>
            <p className="text-[#9ca3af] text-[14px] font-medium uppercase opacity-80">
              Personal Trainer
            </p>
          </div>

          <p className="text-[#6b7280] text-[12px]">
            © {new Date().getFullYear()} Nehuen Fit · Todos los derechos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

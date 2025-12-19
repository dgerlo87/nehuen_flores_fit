import React from 'react';
import Image from 'next/image';

export default function NehuenFitLanding() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e5e7eb] font-sans relative border-[10px] border-[#22c55e]">
      
      {/* IMAGEN DE FONDO ESPECÍFICA */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="/IMG-20251215-WA0059.jpg" 
          alt="Fondo Nehuen Fit" 
          fill 
          className="object-cover opacity-30" 
          priority
        />
        {/* Capa extra de oscuridad para que el texto resalte */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-transparent to-[#0f172a]" />
      </div>

      <div className="relative z-10">
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a href="https://instagram.com/nehuenfit" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-transform hover:scale-110" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>IG</a>
          <a href="https://wa.me/5491172145711?text=Hola%20Nehuen" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110">WA</a>
        </div>

        <header className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/IMG-20251216-WA0001.jpg" alt="Logo Nehuen Fit" width={120} height={120} priority className="rounded-full border-4 border-[#22c55e] p-1 shadow-[0_0_15px_rgba(34,197,94,0.5)]" 
                 />
            </div>
            <p className="text-[#22c55e] text-lg mb-2 uppercase tracking-widest font-bold">Nehuen Fit / Personal Trainer</p>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 italic uppercase">Entrenamientos simples y efectivos</h1>
            
            <p className="text-[#e5e7eb] text-[18px] md:text-[20px] font-medium mt-4 mb-8 max-w-md mx-auto leading-relaxed">
                Completá el formulario y armamos tu rutina según tu objetivo, 
                nivel y disponibilidad.
            </p>

                        <p className="text-xl mb-10 max-w-xl mx-auto text-[#9ca3af]">Alcanzá tu mejor versión con un plan diseñado exclusivamente para vos.</p>
                    {/* BOTÓN Y TEXTO CHICO */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <a 
            href="#formulario" 
            className="bg-[#16a34a] text-[#ffffff] px-8 py-4 rounded-lg font-black text-[16px] md:text-[18px] hover:bg-[#22c55e] transition-all uppercase tracking-wide shadow-lg"
          >
            QUIERO MI RUTINA
          </a>
          
          <p className="text-[#9ca3af] text-[14px] md:text-[15px] font-medium flex items-center gap-2">
            ⏱️ Te lleva menos de 1 minuto
          </p>
        </div>
            
          </div>
        </header>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#22c55e] text-2xl font-bold mb-8 text-center uppercase italic">Resultados Reales</h2>
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-[#334155] shadow-2xl mb-16 bg-black/40">
              <video className="w-full h-full object-cover" controls poster="/logo.png">
                <source src="/entrenamiento.mp4" type="video/mp4" />
              </video>
            </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1e293b]/90 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6 text-white">"Entreno de forma constante y sin lesionarme. El cambio en mi energía fue increíble."</p>
                <span className="text-[#22c55e] font-bold uppercase">— Martín R.</span>
              </div>
              <div className="bg-[#1e293b]/90 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6 text-white">"Las rutinas son súper claras y se adaptan a mis horarios. Nehuen está siempre presente."</p>
                <span className="text-[#22c55e] font-bold uppercase">— Laura G.</span>
              </div>
            </div>
            <div className="text-center mb-10">
              <a href="#formulario" className="text-[#22c55e] font-bold text-lg border-b-2 border-[#22c55e] pb-1 hover:text-white hover:border-white transition-all italic">
                EMPEZÁ TU TRANSFORMACIÓN AHORA →
              </a>
            </div>
          </div>
        </section>

                {/* SECCIÓN: ¿QUÉ VAS A ENCONTRAR? */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-8 text-center uppercase italic tracking-tight">
            ¿Qué vas a encontrar en Nehuen Fit?
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Rutinas personalizadas según tu objetivo y nivel",
              "Ejercicios en video explicados paso a paso",
              "Organización semanal para entrenar sin improvisar",
              "Acompañamiento real para que no abandones"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#1e293b]/40 p-4 rounded-xl border border-[#22c55e]/20">
                <span className="text-[#22c55e] font-bold text-xl">✓</span>
                <p className="text-[#e5e7eb] text-[16px] md:text-[18px] leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

                {/* SECCIÓN: VIDEOS / RUTINAS */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          {/* TÍTULO */}
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-6 uppercase italic tracking-tight">
            Rutinas y ejercicios en video
          </h2>
          
          {/* TEXTO PRINCIPAL */}
          <p className="text-[#e5e7eb] text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
            Vas a encontrar ejercicios explicados paso a paso para entrenar con buena técnica y de forma segura.
          </p>

          {/* CONTENEDOR DE VIDEO "PRÓXIMAMENTE" */}
          <div className="bg-[#1e293b]/60 border-2 border-dashed border-[#334155] rounded-3xl p-12 flex flex-col items-center gap-4 shadow-2xl backdrop-blur-sm">
            <div className="text-5xl mb-2">🎥</div>
            
            <h3 className="text-[#ffffff] text-[18px] md:text-[20px] font-bold uppercase tracking-wider">
              Contenido en preparación
            </h3>
            
            <p className="text-[#9ca3af] text-[14px] md:text-[15px] max-w-sm">
              Próximamente vas a poder acceder a rutinas completas en video.
            </p>

            <div className="mt-4 flex items-center gap-2 text-[#9ca3af] text-[14px] md:text-[15px] bg-[#0f172a]/80 px-4 py-2 rounded-full">
              <span>🎧</span> Audio explicativo disponible para acompañar el video.
            </div>
          </div>
        </section>

                {/* SECCIÓN: SOBRE MÍ / CONFIANZA */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-[#334155]">
          {/* TÍTULO CON ICONO */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className="text-[#22c55e] text-3xl">🏋️‍♂️</span>
            <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black uppercase italic tracking-tight">
              Entrená con confianza
            </h2>
            <span className="text-[#22c55e] text-3xl">🏋️‍♂️</span>
          </div>
          
          {/* TEXTO PRINCIPAL */}
          <div className="space-y-6 mb-10 max-w-2xl mx-auto">
            <p className="text-[#e5e7eb] text-[16px] md:text-[18px] leading-relaxed">
              Soy <span className="text-white font-bold text-xl">Nehuen</span>, personal trainer, y mi objetivo es ayudarte a entrenar
              de forma segura, progresiva y adaptada a tu nivel, sin presiones 
              y con un plan claro.
            </p>
            <p className="text-[#e5e7eb] text-[16px] md:text-[18px] leading-relaxed font-light">
              Trabajo con rutinas simples y efectivas para que puedas sostener
              el entrenamiento en el tiempo y ver resultados reales.
            </p>
          </div>

          {/* FRASE SECUNDARIA ESTILO FIRMA */}
          <div className="mb-12">
            <p className="text-[#9ca3af] text-[15px] md:text-[16px] italic font-serif">
              "No se trata de entrenar más, sino de entrenar mejor."
            </p>
            <div className="w-16 h-[2px] bg-[#22c55e] mx-auto mt-4 opacity-50"></div>
          </div>

          {/* BOTÓN DE ACCIÓN */}
          <a 
            href="#formulario" 
            className="inline-block bg-[#16a34a] text-[#ffffff] px-10 py-4 rounded-lg font-black text-[16px] md:text-[18px] hover:bg-[#22c55e] transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(22,163,74,0.4)]"
          >
            QUIERO MI RUTINA
          </a>
        </section>

                {/* --- SECCIONES NUEVAS SOLICITADAS --- */}

        {/* 1. VIDEOS */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-6 uppercase italic">
            Rutinas y ejercicios en video
          </h2>
          <p className="text-[#e5e7eb] text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto">
            Vas a encontrar ejercicios explicados paso a paso para entrenar con buena técnica y de forma segura.
          </p>
          <div className="bg-[#1e293b]/60 border-2 border-dashed border-[#334155] rounded-3xl p-10 flex flex-col items-center gap-4 backdrop-blur-sm">
            <span className="text-4xl">🎥</span>
            <h3 className="text-white font-bold uppercase tracking-widest">Contenido en preparación</h3>
            <p className="text-[#9ca3af] text-[14px] md:text-[15px]">Próximamente vas a poder acceder a rutinas completas en video.</p>
            <div className="text-[#9ca3af] text-[14px] md:text-[15px] bg-[#0f172a]/80 px-4 py-2 rounded-full border border-[#334155]">
              🎧 Audio explicativo disponible para acompañar el video.
            </div>
          </div>
        </section>

        {/* 2. TESTIMONIOS */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-10 text-center uppercase italic tracking-tight">
            Resultados reales
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#1e293b]/50 p-6 rounded-2xl border-r-4 border-[#22c55e] text-right shadow-xl backdrop-blur-sm">
              <p className="text-[#e5e7eb] text-[15px] md:text-[16px] italic mb-4 leading-relaxed">
                “Entreno de forma constante y sin lesionarme. Nehuen adapta las rutinas a mi nivel y objetivos.”
              </p>
              <p className="text-[#9ca3af] font-bold uppercase tracking-widest text-xs">— Martín</p>
            </div>
            <div className="bg-[#1e293b]/50 p-6 rounded-2xl border-r-4 border-[#22c55e] text-right shadow-xl backdrop-blur-sm">
              <p className="text-[#e5e7eb] text-[15px] md:text-[16px] italic mb-4 leading-relaxed">
                “Volví a entrenar después de mucho tiempo. Las rutinas son claras y fáciles de seguir.”
              </p>
              <p className="text-[#9ca3af] font-bold uppercase tracking-widest text-xs">— Laura</p>
            </div>
          </div>
        </section>

        {/* 3. SOBRE MÍ */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-[#334155]">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-8 uppercase italic tracking-tight">
            Entrená con confianza
          </h2>
          <div className="space-y-6 mb-10 max-w-2xl mx-auto">
            <p className="text-[#e5e7eb] text-[16px] md:text-[18px] leading-relaxed">
              Soy <span className="text-white font-bold text-xl">Nehuen</span>, personal trainer, y mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel, sin presiones y con un plan claro.
            </p>
            <p className="text-[#e5e7eb] text-[16px] md:text-[18px] leading-relaxed">
              Trabajo con rutinas simples y efectivas para que puedas sostener el entrenamiento en el tiempo y ver resultados reales.
            </p>
            <p className="text-[#9ca3af] text-[14px] md:text-[15px] italic font-serif mt-6">
              "No se trata de entrenar más, sino de entrenar mejor."
            </p>
          </div>
          <a 
            href="#formulario" 
            className="inline-block bg-[#16a34a] text-white px-10 py-4 rounded-lg font-black uppercase shadow-lg hover:bg-[#22c55e] transition-all"
          >
            QUIERO MI RUTINA
          </a>
        </section>

        {/* --- FIN DE SECCIONES NUEVAS --- */}


            


                <section id="formulario" className="py-24 px-6 bg-[#1e293b]/95">
          <div className="max-w-md mx-auto">
            <h2 className="text-[#22c55e] text-3xl font-black mb-10 text-center italic uppercase tracking-tighter">ARMEMOS TU PLAN</h2>
            <form action="https://formspree.io/f/Fitnehuen@gmail.com" method="POST" className="flex flex-col gap-6">
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">1. Nombre Completo</label><input type="text" name="nombre" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">2. Edad</label><input type="number" name="edad" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">3. Objetivo</label>
                <select name="objetivo" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none"><option value="Bajar de peso">Bajar de peso</option><option value="Ganar masa muscular">Ganar masa muscular</option><option value="Mejorar salud">Mejorar salud</option><option value="Mantenerme activo">Mantenerme activo</option></select></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">4. Nivel</label>
                <select name="nivel" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none"><option value="Principiante">Principiante</option><option value="Intermedio">Intermedio</option><option value="Avanzado">Avanzado</option></select></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">5. Días</label>
                <select name="dias" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none"><option value="2 días">2 días</option><option value="3 días">3 días</option><option value="4 días">4 días</option><option value="5 días">5 días</option></select></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">6. Tiempo</label>
                <select name="tiempo" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none"><option value="20-30 min">20-30 min</option><option value="30-45 min">30-45 min</option><option value="45-60 min">45-60 min</option></select></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">7. Lesiones (Opcional)</label><input type="text" name="lesiones" className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">8. WhatsApp/Email</label><input type="text" name="contacto" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>

                            <button type="submit" className="mt-6 bg-[#16a34a] text-white py-5 rounded-xl font-black text-xl hover:bg-[#22c55e] transition-all shadow-2xl uppercase">OBTENER MI RUTINA</button>
            </form>
            <footer className="mt-24 border-t border-[#334155] pt-10 text-center">
              <p className="text-[#6b7280] text-sm italic uppercase tracking-widest">© {new Date().getFullYear()} Nehuen Fit · Todos los derechos reservados</p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}

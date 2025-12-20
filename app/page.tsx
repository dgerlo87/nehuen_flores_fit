export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-full mx-auto">
        
        {/* HEADER / HERO SECTION */}
        {/* HEADER CON IMAGEN DE FONDO */}
<header className="relative py-24 px-6 text-center border-b border-[#334155] overflow-hidden">
  {/IMG-20251215-WA0059.jpg/}
  <div 
    className="absolute inset-0 z-0 opacity-40" // Opacidad para que el texto se lea bien
    style={{
      backgroundImage: "url('/IMG-20251215-WA0059.jpg')", // Reemplaza por el nombre real de tu archivo
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  />

  {/* Contenido (Encima de la imagen) */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-[#22c55e] text-4xl md:text-6xl font-black mb-4 uppercase italic">
      Nehuen Flores Fit
            </h1>
            <p className="text-[#e5e7eb] text-[18px] md:text-[20px] font-medium mt-4 mb-6 max-w-md mx-auto leading-relaxed">
              Completá el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.
            </p>
            <p className="text-xl mb-10 max-w-xl mx-auto text-[#9ca3af]">
              Alcanzá tu mejor versión con un plan diseñado exclusivamente para vos.
            </p>

            {/* BOTÓN Y TEXTO CHICO */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <a 
                href="#formulario" 
                className="bg-[#16a34a] text-white px-8 py-4 rounded-lg font-black text-[16px] md:text-[18px] hover:bg-[#22c55e] transition-all uppercase tracking-wide shadow-lg inline-block"
              >
                QUIERO MI RUTINA
              </a>
              <p className="text-[#9ca3af] text-[14px] md:text-[15px] font-medium flex items-center gap-2">
                ⏱️ Te lleva menos de 1 minuto
              </p>
            </div>
          </div>
        </header>

        {/* SECCIÓN VIDEOS / RESULTADOS */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#22c55e] text-2xl md:text-[32px] font-bold mb-8 text-center uppercase italic">
              Resultados Reales
            </h2>
            
            {/* VIDEO PRINCIPAL */}
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-[#334155] shadow-2xl mb-16 bg-black/40">
              <video className="w-full h-full object-cover" controls poster="/logo.png">
                <source src="/entrenamiento.mp4" type="video/mp4" />
              </video>
            </div>

            {/* TESTIMONIOS */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1e293b]/90 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6 text-white">
                  "Entreno de forma constante y sin lesionarme. El cambio en mi energía fue increíble."
                </p>
                <span className="text-[#22c55e] font-bold uppercase">— Martín R.</span>
              </div>
              <div className="bg-[#1e293b]/90 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6 text-white">
                  "Las rutinas son súper claras y se adaptan a mis horarios. Nehuen está siempre presente."
                </p>
                <span className="text-[#22c55e] font-bold uppercase">— Laura G.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN RUTINAS EN VIDEO (PRÓXIMAMENTE) */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-6 uppercase italic">
            Rutinas en video
          </h2>
          <div className="bg-[#1e293b]/60 border-2 border-dashed border-[#334155] rounded-3xl p-10 flex flex-col items-center gap-4 backdrop-blur-sm">
            <span className="text-4xl">🎥</span>
            <h3 className="text-white font-bold uppercase tracking-widest">Contenido en preparación</h3>
            <p className="text-[#9ca3af] text-[14px]">Próximamente rutinas completas explicadas paso a paso.</p>
          </div>
        </section>

        {/* SECCIÓN SOBRE MÍ */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-[#334155]">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-8 uppercase italic">
            Entrená con confianza
          </h2>
          <div className="space-y-6 mb-10 max-w-2xl mx-auto text-[#e5e7eb]">
            <p>Soy <span className="text-white font-bold">Nehuen</span>, personal trainer, enfocado en ayudarte a entrenar de forma segura y adaptada a tu nivel.</p>
            <p className="text-[#9ca3af] text-[14px] italic">"No se trata de entrenar más, sino de entrenar mejor."</p>
          </div>
        </section>

        {/* SECCIÓN FORMULARIO FINAL */}
        <section id="formulario" className="py-20 px-6 bg-[#0f172a]/95 backdrop-blur-md">
          <div className="max-w-md mx-auto">
            <h2 className="text-[#22c55e] text-[28px] font-black mb-8 text-center uppercase italic">
              Armemos tu plan
            </h2>
            <form action="https://formspree.io/f/Fitnehuen@gmail.com" method="POST" className="flex flex-col gap-4">
              <input type="text" name="name" placeholder="Tu Nombre" required className="p-4 rounded-xl bg-[#1e293b] text-white border border-[#334155] outline-none focus:border-[#22c55e]" />
              <input type="text" name="contact" placeholder="WhatsApp o Email" required className="p-4 rounded-xl bg-[#1e293b] text-white border border-[#334155] outline-none focus:border-[#22c55e]" />
              <button type="submit" className="bg-[#22c55e] text-[#0f172a] font-black py-4 rounded-xl uppercase hover:bg-white transition-all shadow-lg">
                ENVIAR FORMULARIO
              </button>
            </form>
          </div>
        </section>

                <footer className="py-10 text-center text-[#4b5563] text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Nehuen Fit
        </footer>
      </div>
    </div>
  );
}



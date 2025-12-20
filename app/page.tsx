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
              <a
                name="name" 
                
        {/* 2. VIDEOS / RUTINAS */}
        <section className="py-12 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-6 uppercase italic">
            Rutinas en video
          </h2>
          <div className="bg-[#1e293b]/60 border-2 border-dashed border-[#334155] rounded-3xl p-10 flex flex-col items-center gap-4 backdrop-blur-sm">
            <span className="text-4xl">🎥</span>
            <h3 className="text-white font-bold uppercase tracking-widest">Contenido en preparación</h3>
            <p className="text-[#9ca3af] text-[14px]">Próximamente rutinas completas. 🎧 Audio incluido.</p>
          </div>
        </section>

        {/* 3. TESTIMONIOS */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-10 text-center uppercase italic">
            Resultados reales
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#1e293b]/50 p-6 rounded-2xl border-r-4 border-[#22c55e] text-right shadow-xl">
              <p className="text-[#e5e7eb] text-[15px] italic mb-4 leading-relaxed">
                “Entreno de forma constante y sin lesionarme. Nehuen adapta las rutinas a mi nivel.”
              </p>
              <p className="text-[#9ca3af] font-bold uppercase tracking-widest text-xs">— Martín</p>
            </div>
            <div className="bg-[#1e293b]/50 p-6 rounded-2xl border-r-4 border-[#22c55e] text-right shadow-xl">
              <p className="text-[#e5e7eb] text-[15px] italic mb-4 leading-relaxed">
                “Volví a entrenar después de mucho tiempo. Las rutinas son claras y fáciles.”
              </p>
              <p className="text-[#9ca3af] font-bold uppercase tracking-widest text-xs">— Laura</p>
            </div>
          </div>
        </section>

        {/* 4. SOBRE MÍ */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-[#334155]">
          <h2 className="text-[#22c55e] text-[28px] md:text-[32px] font-black mb-8 uppercase italic">
            Entrená con confianza
          </h2>
          <div className="space-y-6 mb-10 max-w-2xl mx-auto">
            <p className="text-[#e5e7eb] text-[16px] md:text-[18px]">
              Soy <span className="text-white font-bold">Nehuen</span>, personal trainer, enfocado en ayudarte a entrenar de forma segura y adaptada a tu nivel.
            </p>
            <p className="text-[#9ca3af] text-[14px] italic">"No se trata de entrenar más, sino de entrenar mejor."</p>
          </div>
          <a href="#formulario" className="bg-[#16a34a] text-white px-10 py-4 rounded-lg font-black uppercase shadow-lg inline-block">
            QUIERO MI RUTINA
          </a>
        </section>

        {/* 5. FORMULARIO FINAL */}
        <section id="formulario" className="py-20 px-6 bg-[#0f172a]/95">
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
          © {new Date().getFullYear()} Nehuen Fit • Personal Training
        </footer>
      </div>
    </div>
  );
          }
          

import React from 'react';

export default function NehuenFitLanding() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e5e7eb] font-sans selection:bg-[#22c55e] selection:text-[#0f172a]">
      
      {/* BOTONES FLOTANTES */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="https://instagram.com/nehuenfit" target="_blank" rel="noopener noreferrer" 
           className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-transform hover:scale-110"
           style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
          IG
        </a>
        <a href="https://wa.me/5491122513909?text=Hola%20Nehuen,%20quiero%20consultar%20por%20mi%20rutina" target="_blank" rel="noopener noreferrer" 
           className="w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110">
          WA
        </a>
      </div>

      {/* HERO SECTION */}
      <header className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#9ca3af] text-lg md:text-[22px] mb-4">NEHUEN FIT / Personal Trainer</p>
          <h1 className="text-[#22c55e] text-3xl md:text-[48px] font-bold leading-tight mb-6">
            Entrenamientos simples, efectivos y adaptados a vos
          </h1>
          <p className="text-[#e5e7eb] text-lg md:text-[20px] mb-8 max-w-2xl mx-auto">
            Completá el formulario y armamos tu rutina según tu objetivo, nivel y disponibilidad.
          </p>
          <a href="#formulario" className="inline-block bg-[#16a34a] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#15803d] transition-colors">
            QUIERO MI RUTINA
          </a>
          <p className="text-[#9ca3af] text-sm mt-4">⏱️ Te lleva menos de 1 minuto</p>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="py-16 px-6 bg-[#111a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#22c55e] text-2xl md:text-[32px] font-bold mb-8">¿Qué vas a encontrar en Nehuen Fit?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-[18px]">
            <li className="flex items-start gap-3"> <span className="text-[#22c55e]">✔️</span> Rutinas personalizadas</li>
            <li className="flex items-start gap-3"> <span className="text-[#22c55e]">✔️</span> Ejercicios en video</li>
            <li className="flex items-start gap-3"> <span className="text-[#22c55e]">✔️</span> Organización semanal</li>
            <li className="flex items-start gap-3"> <span className="text-[#22c55e]">✔️</span> Acompañamiento real</li>
          </ul>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#22c55e] text-2xl md:text-[32px] font-bold mb-4">Rutinas y ejercicios en video</h2>
          <p className="text-lg md:text-[18px] mb-6">Vas a encontrar ejercicios explicados paso a paso para entrenar con buena técnica.</p>
          <div className="bg-[#1e293b] p-6 rounded-xl border border-[#334155] text-[#9ca3af] text-[15px]">
            <p className="mb-2">🎥 Contenido en preparación. Próximamente acceso total.</p>
            <p>🎧 Audio explicativo disponible.</p>
          </div>
        </div>
      </section>

              {/* SOBRE MÍ */}
      <section className="py-16 px-6 bg-[#111a2e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#22c55e] text-2xl md:text-[32px] font-bold mb-6">Entrená con confianza</h2>
          <p className="text-lg mb-6 leading-relaxed">Soy Nehuen, personal trainer. Mi objetivo es ayudarte a entrenar de forma segura, progresiva y adaptada a tu nivel.</p>
          <p className="text-[#9ca3af] text-[15px] italic mb-8 border-l-2 border-[#22c55e] pl-4">"No se trata de entrenar más, sino de entrenar mejor."</p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#22c55e] text-2xl md:text-[32px] font-bold mb-10 text-center">Resultados reales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1e293b] p-6 rounded-2xl border-l-4 border-[#22c55e]">
              <p className="text-[16px] mb-4">“Entreno de forma constante y sin lesionarme.”</p>
              <span className="text-[#9ca3af]">— Martín</span>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-2xl border-l-4 border-[#22c55e]">
              <p className="text-[16px] mb-4">“Volví a entrenar después de mucho tiempo.”</p>
              <span className="text-[#9ca3af]">— Laura</span>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE Y FORMULARIO */}
      <section id="formulario" className="py-20 px-6 bg-[#1e293b]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-[#22c55e] text-[32px] font-bold mb-4">Empezá hoy</h2>
          <p className="text-[#9ca3af] text-[15px] mb-8">Completá el formulario para tu rutina personalizada.</p>
          
          <form action="https://formspree.io/f/nehuen.ezequiel@gmail.com" method="POST" className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Nombre" required className="p-3 rounded bg-[#0f172a] border border-[#334155] focus:border-[#22c55e] outline-none" />
            <input type="email" name="email" placeholder="Email" required className="p-3 rounded bg-[#0f172a] border border-[#334155] focus:border-[#22c55e] outline-none" />
            <textarea name="message" placeholder="¿Objetivo?" className="p-3 h-32 rounded bg-[#0f172a] border border-[#334155] focus:border-[#22c55e] outline-none resize-none"></textarea>
            <button type="submit" className="bg-[#16a34a] py-4 rounded-lg font-bold hover:bg-[#15803d]">QUIERO MI RUTINA</button>
          </form>

          <footer className="mt-20">
            <p className="text-[#6b7280] text-[13px]">© Nehuen Fit · Todos los derechos reservados</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

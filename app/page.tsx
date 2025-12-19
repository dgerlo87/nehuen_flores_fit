import React from 'react';
import Image from 'next/image';

export default function NehuenFitLanding() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e5e7eb] font-sans relative">
      
      {/* IMAGEN DE FONDO */}
      <div className="fixed inset-0 z-0 opacity-20">
        <Image 
          src="/fondo.jpg" 
          alt="Entrenamiento Nehuen Fit" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10">
        {/* BOTONES FLOTANTES */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a href="https://instagram.com/nehuenfit" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-transform hover:scale-110" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>IG</a>
          <a href="
            
        {/* SECCIÓN VIDEO Y RESEÑAS */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#22c55e] text-2xl font-bold mb-8 text-center uppercase italic">Resultados Reales</h2>
            
            {/* VIDEO */}
            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-[#334155] shadow-2xl mb-16 bg-black/40">
              <video className="w-full h-full object-cover" controls poster="/logo.png">
                <source src="/entrenamiento.mp4" type="video/mp4" />
              </video>
            </div>

            {/* TARJETAS DE RESEÑAS */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1e293b]/90 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6">"Entreno de forma constante y sin lesionarme. El cambio en mi energía fue increíble."</p>
                <span className="text-[#22c55e] font-bold uppercase">— Martín R.</span>
              </div>
              <div className="bg-[#1e293b]/90 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6">"Las rutinas son súper claras y se adaptan a mis horarios. Nehuen está siempre presente."</p>
                <span className="text-[#22c55e] font-bold uppercase">— Laura G.</span>
              </div>
            </div>

            <div className="text-center mb-10">
              <a href="#formulario" className="text-[#22c55e] font-bold text-lg border-b-2 border-[#22c55e] pb-1 hover:text-white hover:border-white transition-all">
                EMPEZÁ TU TRANSFORMACIÓN AHORA →
              </a>
            </div>
          </div>
        </section>

                {/* FORMULARIO DE 8 CAMPOS */}
        <section id="formulario" className="py-24 px-6 bg-[#1e293b]/95">
          <div className="max-w-md mx-auto">
            <h2 className="text-[#22c55e] text-3xl font-black mb-10 text-center italic uppercase">ARMEMOS TU PLAN</h2>
            
            <form action="https://formspree.io/f/nehuen.ezequiel@gmail.com" method="POST" className="flex flex-col gap-6">
              
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">1. Nombre Completo</label><input type="text" name="nombre" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none transition-all" /></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">2. Edad</label><input type="number" name="edad" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">3. ¿Cuál es tu objetivo?</label>
                <select name="objetivo" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none">
                  <option>Bajar de peso</option><option>Ganar masa muscular</option><option>Mejorar salud</option><option>Mantenerme activo</option>
                </select>
              </div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">4. Nivel de experiencia</label>
                <select name="nivel" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none">
                  <option>Principiante</option><option>Intermedio</option><option>Avanzado</option>
                </select>
              </div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">5. Días de entrenamiento</label>
                <select name="dias" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none">
                  <option>2 días</option><option>3 días</option><option>4 días</option><option>5 días</option>
                </select>
              </div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">6. Tiempo por sesión</label>
                <select name="tiempo" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none">
                  <option>20-30 min</option><option>30-45 min</option><option>45-60 min</option>
                </select>
              </div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">7. Lesiones (Opcional)</label><input type="text" name="lesiones" className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>
              <div><label className="text-xs font-bold text-[#9ca3af] uppercase ml-1">8. WhatsApp de contacto</label><input type="text" name="contacto" required className="w-full p-4 mt-1 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#22c55e] outline-none" /></div>

              <button type="submit" className="mt-6 bg-[#16a34a] text-white py-5 rounded-xl font-black text-xl hover:bg-[#22c55e] transition-all shadow-2xl uppercase">
                OBTENER MI RUTINA
              </button>
            </form>

            <footer className="mt-24 border-t border-[#334155] pt-10 text-center">
              <p className="text-[#6b7280] text-sm italic uppercase tracking-widest">
                © {new Date().getFullYear()} Nehuen Fit · Todos los derechos reservados
              </p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}


import React from 'react';
import Image from 'next/image';

export default function NehuenFitLanding() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e5e7eb] font-sans">
      
      {/* BOTONES FLOTANTES */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="https://instagram.com/nehuenfit" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-transform hover:scale-110" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>IG</a>
        <a href="https://wa.me/5491122513909?text=Hola%20Nehuen" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110">WA</a>
      </div>

      {/* HERO SECTION */}
      <header className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
          </div>
          <p className="text-[#9ca3af] text-lg mb-4 uppercase tracking-widest">Nehuen Fit</p>
          <h1 className="text-[#22c55e] text-3xl md:text-5xl font-bold mb-6">Entrenamientos efectivos y adaptados a vos</h1>
          <a href="#formulario" className="inline-block bg-[#16a34a] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#15803d] transition-all">QUIERO MI RUTINA</a>
        </div>
      </header>

            {/* TESTIMONIOS */}
      <section className="py-16 px-6 bg-[#1e293b]/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-[#1e293b] p-6 rounded-2xl border-l-4 border-[#22c55e]">
            <p className="italic mb-4">"Entreno de forma constante y sin lesionarme."</p>
            <span className="text-[#22c55e] font-bold">— Martín</span>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-2xl border-l-4 border-[#22c55e]">
            <p className="italic mb-4">"Las rutinas son muy claras y fáciles de seguir."</p>
            <span className="text-[#22c55e] font-bold">— Laura</span>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="py-20 px-6 bg-[#1e293b]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-[#22c55e] text-3xl font-bold mb-4">Armemos tu rutina</h2>
          <p className="text-[#e5e7eb] mb-10 text-lg">Completá estos datos y voy a prepararte un plan personalizado.</p>
          
          <form action="https://formspree.io/f/nehuen.ezequiel@gmail.com" method="POST" className="flex flex-col gap-5 text-left">
            <div>
              <label className="block text-sm mb-1 font-medium text-[#22c55e]">Nombre</label>
              <input type="text" name="nombre" required placeholder="Ej: Juan Pérez" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white outline-none focus:border-[#22c55e]" />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium text-[#22c55e]">Edad</label>
              <input type="number" name="edad" required placeholder="Ej: 32" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white outline-none focus:border-[#22c55e]" />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium text-[#22c55e]">¿Cuál es tu objetivo?</label>
              <select name="objetivo" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white outline-none focus:border-[#22c55e] cursor-pointer">
                <option>Bajar de peso</option>
                <option>Ganar fuerza</option>
                <option>Mejorar condición física</option>
                <option>Mantenerme activo/a</option>
              </select>
            </div>

              <div>
              <label className="block text-sm mb-1 font-medium text-[#22c55e]">¿Cuántos días podés entrenar?</label>
              <select name="dias" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white outline-none focus:border-[#22c55e]">
                <option>2 días</option><option>3 días</option><option>4 días</option><option>5 días</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium text-[#22c55e]">Email o WhatsApp</label>
              <input type="text" name="contacto" required placeholder="Ej: 11 1234 5678" className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white outline-none focus:border-[#22c55e]" />
            </div>
            
            <button type="submit" className="mt-4 bg-[#16a34a] text-white py-4 rounded-lg font-bold hover:bg-[#22c55e] transition-all shadow-lg">ENVIAR MIS DATOS</button>
          

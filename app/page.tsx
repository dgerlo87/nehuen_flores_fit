
import React from 'react';
import Image from 'next/image';

export default function NehuenFitLanding() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e5e7eb] font-sans relative">

      {/* FONDO CON IMAGEN */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/fondo.jpg"
          alt="Entrenamiento Nehuen Fit"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />
      </div>

      <div className="relative z-10">

        {/* BOTONES FLOTANTES */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a
            href="https://instagram.com/nehuenfit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-transform hover:scale-110"
            style={{
              background:
                'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            }}
          >
            IG
          </a>

          <a
            href="https://wa.me/5491122513909?text=Hola%20Nehuen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
          >
            WA
          </a>
        </div>

        {/* HERO */}
        <header className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="Logo Nehuen Fit" width={130} height={130} priority />
            </div>

            <p className="text-[#22c55e] text-lg mb-2 uppercase tracking-widest font-bold">
              Nehuen Fit / Personal Trainer
            </p>

            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 italic uppercase">
              Entrenamientos simples y efectivos
            </h1>

            <p className="text-xl mb-10 max-w-xl mx-auto text-[#9ca3af]">
              Alcanzá tu mejor versión con un plan diseñado exclusivamente para vos.
            </p>

            <a
              href="#formulario"
              className="inline-block bg-[#16a34a] text-white px-10 py-5 rounded-lg font-extrabold text-xl hover:bg-[#22c55e] transition-all shadow-lg"
            >
              QUIERO MI RUTINA PERSONALIZADA
            </a>
          </div>
        </header>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#22c55e] text-2xl font-bold mb-8 text-center uppercase italic">
              Resultados Reales
            </h2>

            <div className="aspect-video rounded-3xl overflow-hidden border-2 border-[#334155] shadow-2xl mb-16 bg-black/40">
              <video className="w-full h-full object-cover" controls poster="/logo.png">
                <source src="/entrenamiento.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1e293b]/90 p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6 text-white">
                  "Entreno de forma constante y sin lesionarme."
                </p>
                <span className="text-[#22c55e] font-bold uppercase">— Martín R.</span>
              </div>

              <div className="bg-[#1e293b]/90 p-8 rounded-3xl border-l-4 border-[#22c55e] shadow-xl">
                <p className="text-lg italic mb-6 text-white">
                  "Rutinas claras y adaptadas a mis horarios."
                </p>
                <span className="text-[#22c55e] font-bold uppercase">— Laura G.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="formulario" className="py-24 px-6 bg-[#1e293b]/95">
          <div className="max-w-md mx-auto">
            <h2 className="text-[#22c55e] text-3xl font-black mb-10 text-center italic uppercase">
              Armemos tu plan
            </h2>

            <form
              action="https://formspree.io/f/Fitnehuen@gmail.com"
              method="POST"
              className="flex flex-col gap-6"
            >
              <input type="text" name="nombre" placeholder="Nombre" required className="input" />
              <input type="number" name="edad" placeholder="Edad" required className="input" />
              <input type="text" name="contacto" placeholder="WhatsApp" required className="input" />

              <button
                type="submit"
                className="mt-6 bg-[#16a34a] text-white py-5 rounded-xl font-black text-xl hover:bg-[#22c55e]"
              >
                OBTENER MI RUTINA
              </button>
            </form>

            <footer className="mt-24 border-t border-[#334155] pt-10 text-center">
              <p className="text-[#6b7280] text-sm italic uppercase tracking-widest">
                © {new Date().getFullYear()} Nehuen Fit
              </p>
            </footer>
          </div>
        </section>

      </div>
    </div>
  );
}

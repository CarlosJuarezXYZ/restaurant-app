import { type FC } from "react";

const Ubication: FC = () => {
  return (
    <section id="ubication" className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-16 flex flex-col items-center text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
        Ubícanos
      </h2>

      <p className="text-gray-600 text-lg mb-10 max-w-2xl leading-relaxed">
        Estamos ubicados en el corazón de Lima, a pocos metros del parque
        Kennedy. ¡Ven a visitarnos!
      </p>

      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[800px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            title="Ubicación en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5638414213793!2d-77.03316042527461!3d-12.087537742457995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85e4c96b98d%3A0xf66d0f9ff1a42b18!2sParque%20Kennedy!5e0!3m2!1ses-419!2spe!4v1693683336000!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        Av. Diagonal 123, Miraflores, Lima — Perú
      </p>
    </section>
  );
};

export default Ubication;

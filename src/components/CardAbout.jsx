const CardAbout = () => {
  return (
    <div className="bg-gray-50">
      {/* Sección principal */}
      <section className="text-center py-20 text-blue-600">
        <h1 className="text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Conoce más acerca de nuestra misión, visión y el equipo que hace posible todo esto.
        </p>
      </section>

      <section className="py-2  mb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Misión</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                En Mi Tienda, nos dedicamos a ofrecer los mejores productos a precios competitivos, brindando siempre la mejor experiencia de compra en línea. Nuestra misión es hacer que cada cliente se sienta especial y satisfecho con cada compra.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Visión</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser la tienda en línea líder, innovadora y confiable en el mercado, ofreciendo una variedad excepcional de productos y servicios que mejoren la vida de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardAbout;

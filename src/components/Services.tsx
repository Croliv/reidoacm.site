import { Building, Lightbulb, Frame, Umbrella, Type, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Fachadas em ACM',
      description: 'Revestimentos modernos e duráveis para fachadas comerciais com acabamento perfeito.'
    },
    {
      icon: Lightbulb,
      title: 'Letreiros em acrílico iluminado',
      description: 'Comunicação visual impactante com iluminação LED para máxima visibilidade.'
    },
    {
      icon: Frame,
      title: 'Esquadrias de alumínio',
      description: 'Portas e janelas em alumínio com design moderno e alta durabilidade.'
    },
    {
      icon: Umbrella,
      title: 'Coberturas em policarbonato',
      description: 'Coberturas translúcidas resistentes para proteção e beleza estética.'
    },
    {
      icon: Type,
      title: 'Letras caixa em PVC',
      description: 'Identificação visual tridimensional com material de alta qualidade.'
    },
    {
      icon: Wrench,
      title: 'Estruturas metálicas em metalon galvanizado',
      description: 'Estruturas resistentes e duráveis para suporte de fachadas e coberturas.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em ACM, alumínio e comunicação visual 
            com a qualidade e precisão que seu projeto merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
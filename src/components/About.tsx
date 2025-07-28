import { Award, Users, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Anos de Experiência', value: '5+' },
    { icon: Users, label: 'Projetos Executados', value: '200+' },
    { icon: Award, label: 'Qualidade Garantida', value: '100%' },
    { icon: MapPin, label: 'Rio Verde - GO', value: 'Região' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sobre a <span className="text-orange-500">Rei do ACM</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A Rei do ACM é uma empresa especializada na fabricação e instalação de fachadas comerciais, 
              esquadrias de alumínio, vidros e portas. Atuando desde 2020 em Rio Verde (GO), 
              destaca-se pela qualidade, inovação e acabamento técnico impecável.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <p className="text-gray-700">Compromisso com a excelência em cada projeto executado</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <p className="text-gray-700">Equipe técnica especializada e experiente</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <p className="text-gray-700">Materiais de primeira qualidade e tecnologia moderna</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <p className="text-gray-700">Atendimento personalizado e soluções sob medida</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
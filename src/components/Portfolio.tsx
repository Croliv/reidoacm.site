import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Fachada ACM Comercial',
      category: 'Fachadas',
      image: '/images/fachada1.jpg',
      description: 'Fachada moderna em ACM com acabamento impecável'
    },
    {
      title: 'Letreiro Iluminado',
      category: 'Comunicação Visual',
      image: '/images/luminoso1.jpg',
      description: 'Letreiro em acrílico com iluminação LED'
    },
    {
      title: 'Esquadria de Alumínio',
      category: 'Esquadrias',
      image: '/images/esquadria1.jpg',
      description: 'Portas e janelas em alumínio de alta qualidade'
    },
    {
      title: 'Cobertura Policarbonato',
      category: 'Coberturas',
      image: '/images/cobertura1.jpg',
      description: 'Cobertura translúcida para área comercial'
    },
    {
      title: 'Fachada Ripado',
      category: 'Fachadas',
      image: '/images/ripado1.jpg',
      description: 'Fachada com padrão ripado moderno'
    },
    {
      title: 'Portas em ACM',
      category: 'Portas',
      image: '/images/portas1.jpg',
      description: 'Portas estilizadas'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nosso <span className="text-orange-500">Portfólio</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos projetos executados com excelência e precisão técnica.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/*<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <button className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                    <ExternalLink size={16} />
                    Ver detalhes
                  </button>
                </div>*/}
              </div>
              <div className="bg-white p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-500 text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
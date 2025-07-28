import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
            <span className="text-orange-500">REI do ACM</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Especialistas em fachadas, esquadrias de alumínio e comunicação visual. 
              Qualidade e inovação em cada projeto.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 38.076.305/0001-50
            </p>
          </div>

          {/* Quick Links */}
          <div>
           
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-300">Rua Santinho veloso Q32 LT012 ST</p>
                  <p className="text-gray-400 text-sm">St Pauzanes, Rio Verde - GO</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500" />
                <a 
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  (64) 99268-8158 | (64) 99269-5058
                </a>
              </div>
              <div className="flex items-center gap-3">
                
                
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 REI do ACM. Todos os direitos reservados.
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
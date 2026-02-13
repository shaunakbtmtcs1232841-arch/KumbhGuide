import { ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              About This Website
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              This website is maintained by a local resident of Nashik to provide
              authentic information about the Nashik-Trimbakeshwar Kumbh Mela.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Important Notice
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Information will be updated as per official announcements from
              Maharashtra Government and Nashik District Administration.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Official Resources
            </h3>
            <div className="space-y-2">
              <a
                href="https://www.maharashtratourism.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors"
              >
                Maharashtra Tourism
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://nashik.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors"
              >
                Nashik District Website
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 flex items-center justify-center">
            Made with <Heart className="mx-1 h-4 w-4 text-red-500 fill-current" /> for pilgrims visiting Nashik
          </p>
        </div>
      
      

  <p className="mx-1 h-4 w-4 text-gray-600 text-sm flex items-center justify-center">
    If you have any questions, contact us at:
  </p>

  <div className="mt-2 text-center text-sm text-gray-500">
  Contact us: 
  <a href="mailto:shaunakshukla2110@gmail.com"
     className="text-orange-500 hover:text-orange-600 ml-1">
     shaunakshukla2110@gmail.com
  </a>
</div>
</div>

    </footer>
  );
}

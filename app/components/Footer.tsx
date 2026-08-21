export default function Footer(){
    return(
        <footer className="w-full py-16 px-8 bg-gray-900 text-white">
            <section className="w-full  text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Retailstacker</h3>
                <p className="text-gray-400  max-w-md mx-auto mb-12">The industry-standard software suite for
                     indian e-commerce
                     entrepreneurs and enterprises </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                    <div>
                        <h4 className="font-semibold text-white mb-3">Products</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li className="hover:text-white transition-colors cursor-pointer" >  Product Research</li>
                            <li className="hover:text-white transition-colors cursor-pointer" >  Keyword Research</li>
                            <li className="hover:text-white transition-colors cursor-pointer" >Listing Optimization</li>
                            <li className="hover:text-white transition-colors cursor-pointer" >Operaton & Analytics</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-3">Company</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li className="hover:text-white transition-colors cursor-pointer" >About us </li>
                            <li className="hover:text-white transition-colors cursor-pointer" >Pricing</li>
                            <li className="hover:text-white transition-colors cursor-pointer" >Resources</li>
                            <li className="hover:text-white transition-colors cursor-pointer" >Privacy policy</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                    @2026 Retailstacker. All rights reserved. Designed and developed by Retailstacker Team.
                    </div>
            </section>
        </footer>
            );
}
                



                
                
                


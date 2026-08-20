export default function Hero(){
    return(
        <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-8 text-center,">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Stack Smarter.Shop Better.
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
                Discover the best retail deals,curated collections, and trending products all in one place.
            </p>
            <a href="/shop" className="bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition-colors duration-200 inline-block">
                Shop Now
            </a>
        </section>
    );
}
export default function Features(){
    const features=[
        {
            title:"Product Research",
        desc: "Discover winning products.Analyze BSR velocity,  calculate margins,and score profitability across marketplace",
    },
    {
        title:"Keyword Intelligence",
        desc:"Reverse engineer competitor listings.Extract Keywords ,Search volumes ,and cpc estimates effortlessly.",
    },
    {
        title:"Analytics",
        desc:"Track your performance across marketplaces in real time with clear,actionable dashboards.",
    },
    ];
    return(
        <section className="w-full py-16 px-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((f,i)=> (
                    <div key={i} className="border rounded-xl p-6 shadow-sm hover:shadow-ig hover:translate-y-1 transition-all duration-200">
                        <h3 className="text-Ig font-semibold text-black mb-2">{f.title}</h3>
                        <p className="text-gray-600 text-sm">{f.desc}</p>
                    </div>
                ))}
                </div>
            
        </section>
    );
}

    
    
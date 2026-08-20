export default function Testimonials (){
    const reviews=[
        {
            text:"Reatailstacker's Black Box helped us find a niche in home decor that was completely untapped on Flipkart. The GST calculator alone saved from pricing mistakes.",
            name:"Rahul S.",
            role: "2cr/month Seller",
        },
        {
            text:"Before Retailstacker,we were guessing Keywords.Cerebro showed us exactly what our competitors were dOing. our organic sales doubled in  45 days.",
            name: "Kamni M.",
            role: "$50L/month Seller",
        },
    ];
    return(
        <section className="w-full py-16 px-8 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold text-black mb-10">
                Trusted by india's top sellers and brands 

            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {reviews.map((r,i)=> (
                    <div
                    key={i}
                    className="shadow-md hover:shadow-lg transition-shadow ">
                        <div className="text-yellow-500 mb-3">******</div>
                        <p className="text-gray-700 italic mb-4">"{r.text}"</p>
                        <p className="font-semibold text-black">{r.name}</p>
                        <p className="text-gray-500 text-sm">{r.role}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
        }

















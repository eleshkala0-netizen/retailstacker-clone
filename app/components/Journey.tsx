import { title } from "process";


export default function Journey(){
    const steps=[
        {
            number: "1",
            color:"bg-indigo-600",
            title:" New Sellers",
            desc:"Find your first winning  product with low competition and high margins. validate your ideas before investing capitals.",
        },
        {
            number:"2",
            color:"bg-purple-600",

            title:"Growing brands",
            desc:"optimize your existing listings,steal traffic from top competitors, and track your Keyword rankings daily to ensure consistent growth. ",
        },
    ];
    return(
        <section className="w-full py-16 px-8 bg-white text-centre">
            <h2 className="text-3xl font-bold text-black mb-12">
                Built for every stage of your journey
            </h2>
            <div className="flex felx-col gap-10 max-w-2xl mx-auto text-left">
                {steps.map((s,i)=>(
                    <div key={i}>
                        <div
                        className={`${s.color}text-white w-10 h-10 rounded-full flex items-centre justify-centre fot-bold mb-3`}
                        >
                            {s.number}

                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                        {s.title}
                    </h3>
                    <p className="text-gray-600">{s.desc}</p>
            </div>
                ))}
                </div>
        </section>
    );
}
    
import Questions from "@/public/faqs/questions.png"

// Componet: HeroFrequentlyAsked
export default function HeroFrequentlyAsked() {

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${Questions.src})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-black">
                    <div className="max-w-md justify-center items-center">
                        <h1 className="mb-5 text-6xl font-bold text-white">Frequenly asked questions</h1>
                        <input
                            type="text"
                            placeholder="              Do you have a questions?"
                            className="input input-bordered rounded-full w-full lg:w-96 pr-16 m-2"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

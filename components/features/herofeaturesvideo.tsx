// Component : HeroFeaturesVideo
export default function HeroFeaturesVideo() {
    return (
        <>
            <div className="hero min-h-screen bg-base-100 text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">How it works</h1>
                        <p className="py-6">
                            Integrate your data and start tracking your business in real time. We
                            provide you with the tools to make your business grow in sports and
                            entertainment.
                        </p>
                        <iframe
                            className="rounded-xl w-full h-96 m-2 justify-center"
                            src="https://www.youtube.com/embed/N8tnM9KyLos"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

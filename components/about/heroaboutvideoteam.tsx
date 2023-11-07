// Component : HeroAboutVideoTeam
export default function HeroAboutVideoTeam() {
    return (
        <>
            <div className="hero min-h-screen bg-base-100 text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Video our team</h1>
                        <p className="py-6">
                            Explore our feelings shared by our sport agent members
                        </p>
                        <iframe
                            className="rounded-xl w-full h-96 m-2 justify-center"
                            src="https://www.youtube.com/embed/QmRf72RpcF8"
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

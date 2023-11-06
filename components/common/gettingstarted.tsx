// Componente GettingStarted
export default function GettingStarted() {

    return (
        <>
            <div className="flex flex-col w-full border-opacity-50 p-10">
                <div className="grid h-60 card bg-primary rounded-box place-items-center">
                    <h1 className="text-5xl text-white font-bold text-center">
                        Getting Started
                    </h1>
                    {/* button sing up */}
                    <button className="btn glass text-white">Ready to start in web</button>
                </div>
            </div>
        </>
    );
}
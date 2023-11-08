// Component: HeroFlexiblePlans
export default function HeroFlexiblePlans() {
    // Array of objects with the data of the cards to flexible plans
    const plans = [
        {
            title: "Basic",
            price: 20,
            listFeatures: ["Up plan 1 User", "Access to professionals", "Duration of 30 days", "Teams libraries"],
            description: "How to park your car at your garage?",
            button: "Get Started"
        },
        {
            title: "Pro",
            price: 50,
            listFeatures: ["Up plan 1 User", "Access to professionals", "Duration of 30 days", "Teams libraries"],
            description: "How to park your car at your garage?",
            button: "Get Started"
        },
        {
            title: "Business",
            price: 100,
            listFeatures: ["Up plan 1 User", "Access to professionals", "Duration of 30 days", "Teams libraries"],
            description: "How to park your car at your garage?",
            button: "Contact Sales"
        }
    ];

    return (
        <>
            <div className="hero min-h-screen bg-neutral text-black">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Flexible plans</h1>
                        <p className="py-6">
                            We have different offers so that you can adapt to your budget to increase your opportunities
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        {plans.map((plan, index) => (
                            <div key={index} className="card glass m-4 w-60 lg:w-96">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{plan.title}</h2>
                                    <p className="card-subtitle text-xl lg:text-5xl text-center">${plan.price}/month</p>
                                    <ul className="list-none">
                                        {plan.listFeatures.map((feature, index) => (
                                            <li key={index} className="py-2">* {feature}</li>
                                        ))}
                                    </ul>
                                    <p className="py-6">{plan.description}</p>
                                    <button className="btn btn-primary">{plan.button}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
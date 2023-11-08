import { AiFillCheckCircle } from 'react-icons/ai';

// Component: HeroComparePlans
export default function HeroComparePlans() {

    // Array of objects with the data of the table to flexible plans
    const plans = [
        {
            title: "Basic",
            price: 20,
        },
        {
            title: "Professional",
            price: 50,
        },
        {
            title: "Business",
            price: 100,
        }
    ];

    // Array list of features
    const listFeatures = [
        "Up plan 1 User",
        "Access to professionals",
        "Duration of 30 days",
        "Teams libraries",
    ];

    return (
        <>
            <div className="hero min-h-screen bg-secondary text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-center">Compare Plan</h1>
                        <p className="py-6 text-start">
                            Learn about the advantages of our services in their
                            different association plans
                        </p>
                        <div className="max-w-4xl mx-auto">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full h-auto">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th className="p-3 bg-primary rounded-full">Features</th>
                                            {plans.map((plan, index) => (
                                                <th key={index} className="p-3 bg-neutral rounded-full text-xs lg:text-lg">
                                                    <span className="indicator-item badge badge-primary text-xs lg:text-lg">new</span>
                                                    {plan.title} ${plan.price}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* rows */}
                                        {listFeatures.map((feature, index) => (
                                            <tr key={index}>
                                                <td className="p-3 text-start text-xs lg:text-lg">{feature}</td>
                                                {plans.map((plan, index) => (
                                                    <td key={index} className="p-3">
                                                        <AiFillCheckCircle className="inline-block text-green-500 text-xl lg:text-lg" />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
